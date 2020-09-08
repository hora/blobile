import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { LoadingController, IonContent } from '@ionic/angular';

import { APIStream } from '../../lib/api/stream';
import { SettingsService, SEGMENT } from '../../lib/settings.service';

import { Subscription } from 'rxjs';
import { StreamData } from '../../lib/model/streamData';
import { Game } from '../../lib/model/game';
import { Team } from 'src/lib/model/team';

@Component({
  selector: 'app-live-feed',
  templateUrl: 'live-feed.page.html',
  styleUrls: ['live-feed.page.scss']
})
export class LiveFeedPage implements OnInit, OnDestroy {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  public data = new StreamData({});
  public games = [] as Game[];
  public searchTerm: string;
  public segment = 'all' as SEGMENT;

  // protected loading: HTMLIonLoadingElement;
  public loading: boolean;
  public ready = false;
  public errors = 0;
  //public lastUpdate = "look, it's been a while, OK?";
  public lastUpdate = Date.now();
  public filterVisible = false;
  public stale = false;
  public staleThreshold = 30 * 1000; // 30s

  private subscription: Subscription;
  private api = new APIStream();

  private clockUpdater: number;
  private countdown = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  constructor(public loadingController: LoadingController, protected settings: SettingsService) {
  }

  private get schedule(): Game[] {
    return this.data?.games?.schedule || [];
  }

  async ngOnInit() {
    console.debug('Stream.ngOnInit()');
    this.showLoading();
    return this.settings.ready.finally(() => {
      this.segment = this.settings.getSegment();
      this.startListening();
      return true;
    });
  }

  async ngOnDestroy() {
    this.ready = false;
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
      this.api.stop();
    }
    return true;
  }

  async scrollToTop() {
    this.content.scrollToTop();
  }

  async showLoading() {
    this.loading = true;
    /*
    this.hideLoading();
    this.loading = await this.loadingController.create({
      showBackdrop: false,
      translucent: true,
    });
    this.loading.present();
    */
  }

  async hideLoading() {
    this.loading = false;
    this.ready = true;
    /*
    if (this.loading) {
      this.loading.dismiss();
    }
    */
  }

  forceRefresh(evt: any) {
    setTimeout(() => {
      this.api.retry().finally(() => {
        evt.target.complete();
      });
    }, 500);
  }

  toggleSearchbar() {
    this.filterVisible = !this.filterVisible;
    console.debug(`Stream.toggleSearchbar(): filterVisible=${this.filterVisible}`);
  }

  filterList(evt: any) {
    this.searchTerm = evt.srcElement.value;
    return this.refreshUI();
  }

  getActiveGames(): Game[] {
    if (this.data?.games?.schedule) {
      return this.data.games.schedule.filter((game: Game) => {
        return !game.gameComplete;
      });
    }
    return [];
  }

  getActiveGameCount(): number {
    return this.getActiveGames().length;
  }

  getFavoriteGames(): Game[] {
    if (this.data?.games?.schedule) {
      return this.data?.games?.schedule.filter((game:Game) => {
        return this.settings.isFavorite(game.homeTeam) || this.settings.isFavorite(game.awayTeam);
      });
    }
    return [];
  }

  getSegmentGames(): Game[] {
    console.debug('Stream.getSegmentGames()');

    let ret = [] as Game[];
    switch(this.segment) {
      case 'all':
        ret = this.data?.games?.schedule || [];
        break;
      case 'active':
        ret = this.getActiveGames();
        break;
      case 'favorites':
        ret = this.getFavoriteGames();
        break;
      default:
        console.warn(`Stream.getSegmentGames(): unhandled segment: ${this.segment}`);
        ret = [];
        break;
    }

    const favoriteTeam = this.settings.favoriteTeam();
    return ret.sort((a: any, b: any) => {
      // always put favorite team first
      if (a.homeTeam === favoriteTeam) {
        return -1;
      } else if (b.homeTeam === favoriteTeam) {
        return 1;
      }

      const nameA = a.homeTeamNickname;
      const nameB = b.homeTeamNickname;
      return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
    });
  }

  isPostseason(): boolean {
    return Boolean(this.data?.games?.sim?.isPostseason());
  }

  isFinished() {
    const isFinished = Boolean(this.data?.games?.sim?.isPostseasonComplete());

    if (this.clockUpdater && !isFinished) {
      clearInterval(this.clockUpdater);
      this.clockUpdater = undefined;
    } else if (!this.clockUpdater && isFinished) {
      this.clockUpdater = setInterval(() => {
        this.countdown = this.data.sim.countdownToNextSeason();
      });
    }

    return isFinished;
  }

  getWinner() {
    const winner = this.data?.games?.postseason?.playoffs?.winner;
    if (winner) {
      return this.data.leagues.teams.find((team:Team) => team.id === winner);
    }
    return new Team();
  }

  getPlayoffDay() {
    return (this.data?.games?.postseason?.playoffs?.playoffDay || -1) + 1;
  }

  getNextSeasonStart() {
    return `${this.countdown.hours} ${this.countdown.hours === 1? 'hour':'hours'}, ${this.countdown.minutes} ${this.countdown.minutes === 1? 'minute':'minutes'}, ${this.countdown.seconds} ${this.countdown.seconds === 1? 'second':'seconds'}`;
  }

  refreshUI(): Game[] {
    console.debug('Stream.refreshUI()');

    let ret = this.getSegmentGames();

    if (this.searchTerm && this.searchTerm.length >= 2) {
      // search term is long enough, filter based on team names
      ret = ret.filter((game: any) => {
        return game.homeTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
          || game.awayTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      });
    }

    this.games = ret;
    return this.games;
  }

  segmentChanged(evt: any) {
    if (evt && evt.detail && evt.detail.value) {
      this.segment = evt.detail.value;
      this.settings.setSegment(this.segment);
    }
    console.debug('Stream.segmentChanged():', evt);
    this.refreshUI();
  }

  checkStale() {
    const current = this.stale;
    if (this.games && this.games.length > 0) {
      const active = this.games.find(game => !game.gameComplete);
      if (active) {
        // there are still active games, check staleness based on the last update received
        if (this.lastUpdate + this.staleThreshold < Date.now()) {
          this.stale = true;
        } else {
          this.stale = false;
        }
      } else {
        // all active games have completed
        this.stale = false;
        // const percent = Math.round(Date.now() % (60 * 60 * 1000) / (60 * 60 * 1000)); // how far through the hour are we?
      }
    }

    console.debug(`Stream.checkStale(): ${current} -> ${this.stale}`);
  }

  onEvent(evt: MessageEvent|Event) {
    if (evt['type'] === 'error') {
      this.onError(evt);
      return;
    }

    this.lastUpdate = Date.now();
    setTimeout(() => {
      this.errors = 0;
      this.checkStale();
    }, 1000);

    const data = JSON.parse((evt as MessageEvent).data).value;

    if (!this.data) {
      this.data = new StreamData({});
    }

    for (const key of Object.keys(data)) {
      this.data.data[key] = data[key];
    }

    console.debug('Stream.onEvent(): current data:', this.data);
    this.refreshUI();
    this.hideLoading();
  }

  onError(evt: Event) {
    console.debug('Stream.onError():', evt);
    this.hideLoading();
    this.loading = false;
    // wait a couple of seconds before actually marking it as an error
    setTimeout(() => {
      this.errors++;
      this.checkStale();
    }, 1000);
  }

  startListening() {
    console.debug('Stream.startListening(): opening event stream to blaseball.com');
    this.showLoading();

    const errorWait = 1000;

    const onError = (err: Event) => {
    };

    const observable = this.api.start();
    this.subscription = observable.subscribe((evt) => {
      this.onEvent(evt);
    }, (err) => {
      this.onError(err);
    });
  }

  gameId(index: number, item:any): string {
    if (item && item.id) {
      return item.id;
    }
    return String(index);
  }
}
