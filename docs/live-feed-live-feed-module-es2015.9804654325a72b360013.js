(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{v2dp:function(e,t,i){"use strict";i.r(t),i.d(t,"LiveFeedPageModule",function(){return q});var n=i("TEn/"),s=i("ofXK"),o=i("3Pt+"),a=i("Uyg3"),r=i("tyNb"),c=i("mrSG"),l=i("gcOT");class d{constructor(e){if("object"==typeof e)this.el=e;else{if("string"!=typeof e)throw new TypeError("Marquee accepts either a HTML Element (object) or a class/id to query (string).");this.el=document.querySelector(e)}this.sign=this.el.children[0],this.RAF=null,this.offset=this.el.offsetWidth,this.speed=this.el.dataset.speed||1,this.onResize=this.getSignWidth.bind(this),this.styleElements(),this.init()}init(){this.getSignWidth(),this.draw(),window.addEventListener("resize",this.onResize)}styleElements(){this.el.style.display="flex",this.sign.style.display="inline-flex"}getSignWidth(){this.signWidth=this.sign.clientWidth}draw(){const e=()=>{this.RAF=requestAnimationFrame(e),-this.offset>=this.signWidth&&this.reset(),this.offset=this.offset-this.speed,this.sign.style.transform=`translate3d(${this.offset}px, 0, 0)`};requestAnimationFrame(e)}stop(){cancelAnimationFrame(this.RAF)}reset(){this.offset=this.el.offsetWidth,this.sign.style.transform=`translate3d(${this.offset}px, 0, 0)`}destroy(){this.stop(),window.removeEventListener("resize",this.onResize)}}var h=i("+BjT"),u=i("cHMN"),b=i("fXoL"),m=i("N1zj"),g=i("J+wX"),v=i("BTjV"),f=i("mGeP"),p=i("9Pn0");function w(e,t){1&e&&(b.Pb(0,"ion-button"),b.Nb(1,"ion-spinner"),b.Ob())}function O(e,t){if(1&e){const e=b.Qb();b.Pb(0,"ion-toolbar"),b.Pb(1,"ion-buttons",8),b.Pb(2,"ion-button"),b.Nb(3,"ion-icon"),b.Ob(),b.Ob(),b.Pb(4,"ion-segment",9),b.Xb("ionChange",function(t){return b.hc(e),b.bc().segmentChanged(t)}),b.Pb(5,"ion-segment-button",10),b.Pb(6,"ion-label"),b.oc(7),b.Ob(),b.Ob(),b.Pb(8,"ion-segment-button",11),b.Pb(9,"ion-label"),b.oc(10),b.Ob(),b.Ob(),b.Pb(11,"ion-segment-button",12),b.Pb(12,"ion-label"),b.oc(13),b.Ob(),b.Ob(),b.Ob(),b.Pb(14,"ion-buttons",2),b.Pb(15,"ion-button",13),b.Xb("click",function(){return b.hc(e),b.bc().toggleSearchbar()}),b.Nb(16,"ion-icon",14),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=b.bc();b.Bb(4),b.ec("value",e.segment),b.Bb(3),b.qc("All (",e.getGameCount(),")"),b.Bb(3),b.qc("Active (",e.getActiveGameCount(),")"),b.Bb(3),b.qc("Favorites (",e.getFavoriteGameCount(),")")}}function P(e,t){if(1&e){const e=b.Qb();b.Pb(0,"ion-searchbar",15),b.Xb("ionInput",function(t){return b.hc(e),b.bc().filterList(t)}),b.Ob()}if(2&e){const e=b.bc();b.fc("value",e.searchTerm)}}function S(e,t){if(1&e&&(b.Pb(0,"ion-item",16),b.Pb(1,"h4"),b.oc(2," The "),b.Nb(3,"app-team",21),b.oc(4," are the Champions! "),b.Ob(),b.Ob()),2&e){const e=b.bc(3);b.Bb(3),b.ec("teamColor",e.uiState.winner.mainColor)("emoji",e.uiState.winner.emoji)("name",e.uiState.winner.fullName)}}function y(e,t){if(1&e&&(b.Pb(0,"ion-item",16),b.Pb(1,"h4"),b.oc(2),b.Nb(3,"br"),b.oc(4),b.Ob(),b.Ob()),2&e){const e=b.bc(3);b.Bb(2),b.qc(" ",e.uiState.countdownNotice," "),b.Bb(2),b.qc(" ",e.getCountdown()," ")}}function T(e,t){1&e&&(b.Pb(0,"ion-item",16),b.Pb(1,"h4"),b.oc(2,"Next season starts in... uhh. "),b.Pb(3,"i"),b.oc(4,"*tugs collar*"),b.Ob(),b.oc(5," I mean. What "),b.Pb(6,"i"),b.oc(7,"is"),b.Ob(),b.oc(8," time, really?"),b.Ob(),b.Ob())}function k(e,t){if(1&e&&(b.Pb(0,"div",22),b.oc(1),b.Ob()),2&e){const e=t.$implicit;b.Bb(1),b.qc(" ",e.msg,"... \xa0 \xa0 \xa0 ")}}function E(e,t){if(1&e&&(b.Pb(0,"span"),b.Pb(1,"ion-item",16),b.Pb(2,"h4"),b.oc(3),b.Ob(),b.Ob(),b.nc(4,S,5,3,"ion-item",17),b.nc(5,y,5,2,"ion-item",17),b.nc(6,T,9,0,"ion-item",17),b.Pb(7,"div",18),b.Pb(8,"div",19),b.nc(9,k,2,1,"div",20),b.Ob(),b.Ob(),b.Ob()),2&e){const e=b.bc(2);b.Bb(3),b.pc(e.uiState.notice),b.Bb(1),b.ec("ngIf",e.uiState.winner),b.Bb(1),b.ec("ngIf",void 0!==e.uiState.countdownNotice&&e.countdown&&e.countdown.diff>=0),b.Bb(1),b.ec("ngIf",void 0!==e.uiState.countdownNotice&&e.countdown&&e.countdown.diff<0),b.Bb(3),b.ec("ngForOf",e.globalEvents)}}function F(e,t){if(1&e&&(b.Pb(0,"h4",26),b.oc(1),b.Ob()),2&e){const e=b.bc(4);b.Bb(1),b.pc(e.uiState.seasonHeader)}}function D(e,t){if(1&e&&(b.Pb(0,"ion-item",16),b.nc(1,F,2,1,"h4",25),b.Ob()),2&e){const e=b.bc(3);b.Bb(1),b.ec("ngIf",e.streamData&&e.streamData.games)}}function N(e,t){if(1&e&&(b.Pb(0,"ion-item",16),b.oc(1),b.Ob()),2&e){const e=b.bc(3);b.Bb(1),b.qc(" No active games for day ",e.streamData.games.sim.day,". ")}}function L(e,t){if(1&e){const e=b.Qb();b.Pb(0,"ion-col",27),b.Pb(1,"app-diamond",28),b.Xb("refresh",function(){return b.hc(e),b.bc(3).refreshUI()}),b.Ob(),b.Ob()}if(2&e){const e=t.$implicit;b.Bb(1),b.ec("game",e)}}function C(e,t){if(1&e&&(b.Pb(0,"span"),b.nc(1,D,2,1,"ion-item",17),b.nc(2,N,2,1,"ion-item",17),b.Pb(3,"ion-grid",23),b.Pb(4,"ion-row"),b.nc(5,L,2,1,"ion-col",24),b.Ob(),b.Ob(),b.Ob()),2&e){const e=b.bc(2);b.Bb(1),b.ec("ngIf",e.uiState.seasonHeader),b.Bb(1),b.ec("ngIf","active"===e.segment&&(!e.games||0===e.games.length)),b.Bb(3),b.ec("ngForOf",e.games)("ngForTrackBy",e.gameId)}}function A(e,t){if(1&e&&(b.Pb(0,"span"),b.nc(1,E,10,5,"span",3),b.nc(2,C,6,4,"span",3),b.Ob()),2&e){const e=b.bc();b.Bb(1),b.ec("ngIf",e.uiState.notice),b.Bb(1),b.ec("ngIf",!e.uiState.notice)}}const I=[{path:"",component:(()=>{class e{constructor(e,t,i,n,s){this.stream=e,this.database=t,this.loadingController=i,this.platform=n,this.settings=s,this.streamData=new h.a({}),this.games=[],this.segment="all",this.ready=!1,this.errors=0,this.lastUpdateTime=Date.now(),this.filterVisible=!1,this.stale=!1,this.staleThreshold=3e4,this.keepAwake=!1,this.PHASES=u.a,this.uiState={}}get schedule(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[]}ngOnInit(){return Object(c.a)(this,void 0,void 0,function*(){return yield this.platform.ready(),yield this.settings.ready,console.debug("LiveFeed.ngOnInit()"),this.showLoading(),this.segment=this.settings.segment(),yield this.startListening(),!0})}ngOnDestroy(){return Object(c.a)(this,void 0,void 0,function*(){return this.ready=!1,this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0),!0})}scrollToTop(){return Object(c.a)(this,void 0,void 0,function*(){this.content.scrollToTop()})}showLoading(){return Object(c.a)(this,void 0,void 0,function*(){this.loading=!0})}hideLoading(){return Object(c.a)(this,void 0,void 0,function*(){this.loading=!1,this.ready=!0})}forceRefresh(e){setTimeout(()=>{this.stream.retry().finally(()=>{var t;null===(t=null==e?void 0:e.target)||void 0===t||t.complete()})},500)}toggleSearchbar(){this.filterVisible=!this.filterVisible,console.debug(`LiveFeed.toggleSearchbar(): filterVisible=${this.filterVisible}`)}filterList(e){return this.searchTerm=e.srcElement.value,this.refreshUI()}getGameCount(){var e,t,i;return(null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||void 0===i?void 0:i.length)||0}getActiveGames(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?this.streamData.games.schedule.filter(e=>e.inProgress):[]}getActiveGameCount(){return this.getActiveGames().length}getFavoriteGames(){var e,t,i,n;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?null===(n=null===(i=this.streamData)||void 0===i?void 0:i.games)||void 0===n?void 0:n.schedule.filter(e=>this.settings.isFavorite(e.homeTeam)||this.settings.isFavorite(e.awayTeam)):[]}getFavoriteGameCount(){return this.getFavoriteGames().length}getSegmentGames(){var e,t;console.debug("LiveFeed.getSegmentGames()");let i=[];switch(this.segment){case"all":i=(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[];break;case"active":i=this.getActiveGames();break;case"favorites":i=this.getFavoriteGames();break;default:console.warn(`LiveFeed.getSegmentGames(): unhandled segment: ${this.segment}`),i=[]}const n=this.settings.favoriteTeam();return i.sort((e,t)=>{if(e.homeTeam===n||e.awayTeam===n)return-1;if(t.homeTeam===n||t.awayTeam===n)return 1;if(this.settings.isFavorite(e.homeTeam)||this.settings.isFavorite(e.awayTeam))return-1;if(this.settings.isFavorite(t.homeTeam)||this.settings.isFavorite(t.awayTeam))return 1;const i=e.homeTeamNickname,s=t.homeTeamNickname;return i<s?-1:i>s?1:0})}doCountdown(e){this.clockUpdater||(this.clockUpdater=setInterval(()=>{this.countdown=this.streamData.sim[e]()},1e3))}getWinner(){var e,t,i,n;const s=null===(n=null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===i?void 0:i.playoffs)||void 0===n?void 0:n.winner;if(s){const e=this.streamData.leagues.teams.find(e=>e.id===s);return console.debug("getWinner():",e),e}}getPlayoffDay(){var e,t,i,n;return(null===(n=null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===i?void 0:i.playoffs)||void 0===n?void 0:n.playoffDay)||0}getCountdown(){return`${this.countdown.hours} ${1===this.countdown.hours?"hour":"hours"}, ${this.countdown.minutes} ${1===this.countdown.minutes?"minute":"minutes"}, ${this.countdown.seconds} ${1===this.countdown.seconds?"second":"seconds"}`}refreshUI(){console.debug("LiveFeed.refreshUI()");let e=this.getSegmentGames();return this.searchTerm&&this.searchTerm.length>=2&&(e=e.filter(e=>e.homeTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1||e.awayTeamName.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)),this.games=e,this.games}segmentChanged(e){e&&e.detail&&e.detail.value&&(this.segment=e.detail.value,this.settings.setSegment(this.segment)),console.debug("LiveFeed.segmentChanged():",e),this.refreshUI()}checkStale(){const e=this.stale;if(this.games&&this.games.length>0){const e=this.games.find(e=>e.inProgress);this.stale=!!e&&this.lastUpdateTime+this.staleThreshold<Date.now()}console.debug(`LiveFeed.checkStale(): ${e} -> ${this.stale}`)}checkDisableSleep(){console.debug("LiveFeed.checkDisableSleep()");const e=this.settings.disableSleep();if(l.a.KeepAwake)try{e&&this.getActiveGameCount()>0?this.keepAwake||(console.debug("LiveFeed.checkDisableSleep(): keeping awake"),this.keepAwake=!0,l.a.KeepAwake.keepAwake()):this.keepAwake&&(console.debug("LiveFeed.checkDisableSleep(): allowing sleep"),this.keepAwake=!1,l.a.KeepAwake.allowSleep())}catch(t){console.error("An error occurred setting keep-awake status.",t)}}onEvent(e){return Object(c.a)(this,void 0,void 0,function*(){if(console.debug("LiveFeed.onEvent()"),e&&e instanceof ErrorEvent)return console.warn("LiveFeed.onEvent(): got an error:",e),void this.onError(e);const t=e;this.lastUpdateTime=Date.now(),console.debug("LiveFeed.onEvent(): lastUpdateTime=",this.lastUpdateTime),setTimeout(()=>{this.errors=0,this.checkStale()},1e3);for(const e of Object.keys(t.data))this.streamData.data[e]=t.data[e];console.debug("LiveFeed.onEvent(): current data:",this.streamData),this.onUpdate()})}onError(e){console.debug("LiveFeed.onError():",e),this.onUpdate(),setTimeout(()=>{this.errors++,this.checkStale()},1e3)}onUpdate(){var e,t,i,n,s,o,a,r;return Object(c.a)(this,void 0,void 0,function*(){this.checkDisableSleep(),this.refreshUI();const c={seasonHeader:void 0,notice:void 0,countdownNotice:void 0,winner:void 0};if(!this.streamData&&!this.streamData.sim)return;const l=null===(i=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.sim)||void 0===i?void 0:i.day,d=null===(s=null===(n=this.streamData)||void 0===n?void 0:n.sim)||void 0===s?void 0:s.phase;switch(d){case u.a.REST:case u.a.PRESEASON:case u.a.POSTSEASON_END:case u.a.ELECTION:this.doCountdown("countdownToNextPhase"),c.notice="Games have finished for the season.",c.countdownNotice="Next season starts in:",c.winner=this.getWinner();break;case u.a.SEASON_END:case u.a.PRE_POSTSEASON:this.doCountdown("countdownToNextPhase"),c.notice=`Regular Season ${this.streamData.seasonNumber} is over.`,c.countdownNotice="Earlpostseason starts in:";break;case u.a.EARLY_POSTSEASON_END:this.doCountdown("countdownToNextPhase"),c.notice="Earlpostseason is over.",c.countdownNotice="Latepostseason starts in:";break;case u.a.EARLY_POSTSEASON:c.seasonHeader=`Earlpostseason, Day ${l}`;break;case u.a.POSTSEASON:c.seasonHeader=`Postseason Round ${this.streamData.games.sim.playOffRound}, Day ${l}`;break;case u.a.EARLSEASON:case u.a.MIDSEASON:default:c.seasonHeader=`Season ${null===(r=null===(a=null===(o=this.streamData)||void 0===o?void 0:o.games)||void 0===a?void 0:a.season)||void 0===r?void 0:r.seasonNumber}, Day ${l}`}!this.uiState.notice&&this.clockUpdater&&(clearInterval(this.clockUpdater),this.clockUpdater=void 0,this.countdown=void 0),this.phase=d,Object.assign(this.uiState,c),this.hideLoading()})}startListening(){var e;return Object(c.a)(this,void 0,void 0,function*(){console.debug("LiveFeed.startListening(): opening event stream to blaseball.com"),this.showLoading(),null===(e=this.subscription)||void 0===e||e.unsubscribe(),this.subscription=yield this.stream.subscribe(e=>{this.onEvent(e)},e=>{this.onError(e)}),this.database.globalEvents().then(e=>{this.globalEvents=e.filter(e=>null===e.expire),setTimeout(()=>{const e=document.getElementById("marquee");e&&(new d(e),setTimeout(()=>{e.setAttribute("style","visibility: visible")},200))},1e3)})})}gameId(e,t){return t&&t.id?t.id:String(e)}}return e.\u0275fac=function(t){return new(t||e)(b.Mb(m.a),b.Mb(g.a),b.Mb(n.S),b.Mb(n.U),b.Mb(v.a))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-live-feed"]],viewQuery:function(e,t){if(1&e&&b.uc(n.k,1),2&e){let e;b.gc(e=b.Yb())&&(t.content=e.first)}},decls:13,vars:4,consts:[["translucent","true"],["color","primary",3,"click"],["slot","secondary"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["pullingIcon","baseball-outline"],["name","default"],["debounce","200","showCancelButton","focus",3,"value","ionInput",4,"ngIf"],["slot","primary"],[3,"value","ionChange"],["value","all"],["value","active"],["value","favorites"],[3,"click"],["name","search-outline"],["debounce","200","showCancelButton","focus",3,"value","ionInput"],["lines","none"],["lines","none",4,"ngIf"],["id","marquee","data-speed","1"],[1,"marquee"],["class","marquee-item",4,"ngFor","ngForOf"],["team","home",3,"teamColor","emoji","name"],[1,"marquee-item"],[2,"margin-top","0","padding-top","0"],["size","12",4,"ngFor","ngForOf","ngForTrackBy"],["class","ion-no-margin",4,"ngIf"],[1,"ion-no-margin"],["size","12"],["prefix","live-diamond",3,"game","refresh"]],template:function(e,t){1&e&&(b.Pb(0,"ion-header",0),b.Pb(1,"ion-toolbar",1),b.Xb("click",function(){return t.scrollToTop()}),b.Pb(2,"ion-title"),b.oc(3,"Blases Loaded"),b.Ob(),b.Pb(4,"ion-buttons",2),b.nc(5,w,2,0,"ion-button",3),b.Ob(),b.Ob(),b.Ob(),b.Pb(6,"ion-content"),b.nc(7,O,17,4,"ion-toolbar",3),b.Pb(8,"ion-refresher",4),b.Xb("ionRefresh",function(e){return t.forceRefresh(e)}),b.Pb(9,"ion-refresher-content",5),b.Nb(10,"ion-spinner",6),b.Ob(),b.Ob(),b.nc(11,P,1,1,"ion-searchbar",7),b.nc(12,A,3,2,"span",3),b.Ob()),2&e&&(b.Bb(5),b.ec("ngIf",t.loading||t.stale),b.Bb(2),b.ec("ngIf",t.ready&&!t.uiState.notice),b.Bb(4),b.ec("ngIf",t.filterVisible),b.Bb(1),b.ec("ngIf",t.ready))},directives:[n.o,n.P,n.N,n.e,s.i,n.k,n.z,n.A,n.I,n.d,n.p,n.E,n.V,n.F,n.t,n.D,n.W,n.q,s.h,f.a,n.n,n.C,n.j,p.a],styles:[".danger[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-danger);text-align:center;padding:4em}.danger[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]{font-size:200%;font-weight:700}ion-item[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%]{transition:.1s ease-in-out}#marquee[_ngcontent-%COMP%]{visibility:hidden}.marquee[_ngcontent-%COMP%]{position:absolute;bottom:0;overflow:hidden;white-space:nowrap;padding:.5em 0}.marquee-item[_ngcontent-%COMP%]{display:inline-block}"]}),e})()}];let B=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(t){return new(t||e)},imports:[[r.j.forChild(I)],r.j]}),e})();var j=i("o5iR");let q=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(t){return new(t||e)},imports:[[n.Q,s.b,o.a,B,a.a,j.a]]}),e})()}}]);
//# sourceMappingURL=live-feed-live-feed-module-es2015.9804654325a72b360013.js.map