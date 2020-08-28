import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  /**
   * default interval since the last successful message before retrying
   */
  public defaultRetryMillis: number;

  /**
   * how often to check if a retry is necessary
   */
  public defaultCheckIntervalMillis: number;

  /**
   * if a retry fails, the multiplier to apply to the retry interval for exponential fallback
   */
  public defaultRetryFallback: number;


  // the event source to pull from
  private source: EventSource | null;

  // when we last got a successful message (epoch)
  private lastUpdated = 0;
  // the `setInterval` handle for the active background retry checker
  private retryChecker: number | null;
  // current retry interval; on a successful message this resets to `defaultRetryMillis`
  private retryMillis: number;

  private observable: Observable<MessageEvent> | null;
  private observer: Observer<MessageEvent> | null;

  /**
   * Create an API object that can subscribe to an event stream.
   *
   * @param url the URL with an EventStream to stream from (defaults to the SIBR CORS proxy)
   */
  constructor(public url?: string) {
    if (!url) {
      // this.url = 'https://cors-anywhere.herokuapp.com/https://www.blaseball.com/events/streamData';
      // this.url = 'https://www.blaseball.com/events/streamData';
      this.url = 'https://cors-proxy.blaseball-reference.com/events/streamData';
    }

    this.defaultRetryMillis = 60 * 1000;
    this.defaultCheckIntervalMillis = this.defaultRetryMillis;
    this.defaultRetryFallback = 1.5;
    this.retryMillis = this.defaultRetryMillis;

    this.observable = Observable.create((observer: Observer<MessageEvent>) => {
      this.observer = observer;
    });
  }

  /**
   * Start listening on the event stream.
   *
   * @returns an {@link Observable} that can be subscribed to.
   */
  start(): Observable<MessageEvent> {
    console.info('APIService.start()');

    this.lastUpdated = Date.now();
    this.createSource();
    this.startCheckingLastUpdated();
    return this.observable;
  }

  /**
   * Stop listening on the event stream.
   *
   * Completes the {@link Observable} and closes all resources.
   */
  stop() {
    console.info('APIService.stop()');

    // disable checker
    if (this.retryChecker) {
      clearInterval(this.retryChecker);
      this.retryChecker = null;
    }

    // close the event source
    this.closeSource();
    this.source = null;

    // clean up observable
    this.observer.complete();
    this.observer = null;
    this.observable = null;

    // reset retry state
    this.retryMillis = this.defaultRetryMillis;
    this.lastUpdated = 0;
  }

  /**
   * Force a retry.
   *
   * This will close the stream and create a new one, and logarithmically extend the retry time by {@link defaultRetryFallback}.
   */
  public retry() {
    console.debug('APIService.retry()');
    this.closeSource();
    this.createSource();
    this.retryMillis = this.retryMillis * this.defaultRetryFallback;
  }

  protected createSource() {
    console.debug('APIService.createSource()');

    // clean up existing and create new event source
    this.closeSource();
    this.source = new EventSource(this.url);

    this.source.addEventListener('message', (evt: MessageEvent) => {
      // successful message, reset retry and last updated
      this.retryMillis = this.defaultRetryMillis;
      this.lastUpdated = Date.now();

      if (this.observer) {
        this.observer.next(evt);
      }
    });

    // errors should do a retry
    this.source.addEventListener('error', (ev: Event) => {
      console.error('APIService.createSource(): An error occurred reading from the event source.  Resetting.', ev);
      if (this.observer) {
        this.observer.error(ev);
      }
      this.retry();
    });
  }

  protected closeSource() {
    try {
      if (this.source && this.source.readyState !== EventSource.CLOSED) {
        console.debug('APIService.closeSource()');
        this.source.close();
      }
    } catch (err) {
      console.warn('Failed to close event source:', err);
    };
  }

  protected startCheckingLastUpdated() {
    console.debug('APIService.startCheckingLastUpdated()');
    if (this.retryChecker) {
      clearInterval(this.retryChecker);
    }
    this.retryChecker = setInterval(() => {
      this.checkLastUpdated();
    }, this.defaultCheckIntervalMillis) as unknown as number;
  }

  protected checkLastUpdated() {
    const now = Date.now();
    const threshold = this.lastUpdated + this.retryMillis;
    console.log('now=', now, 'threshold=', threshold, 'lastUpdated=', this.lastUpdated, 'retryMillis=', this.retryMillis);
    if (now > (this.lastUpdated + this.retryMillis)) {
      console.debug(`APIService.checkLastUpdated(): now (this.formatDate(${now})) > ${this.formatDate(threshold)} -- last updated (${this.lastUpdated}) + retry (${this.retryMillis})`);
      this.retry();
    } else {
      console.debug(`APIService.checkLastUpdated(): ${this.formatDate(now)} < ${this.formatDate(threshold)}`);
    }
  }

  private formatDate(d: Date | number) {
    const date = typeof(d) === 'number' ? new Date(d) : d;
    return date.toISOString();
  }
}
