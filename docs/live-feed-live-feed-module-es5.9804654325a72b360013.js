!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{v2dp:function(t,i,o){"use strict";o.r(i),o.d(i,"LiveFeedPageModule",function(){return M});var a=o("TEn/"),s=o("ofXK"),r=o("3Pt+"),c=o("Uyg3"),u=o("tyNb"),l=o("mrSG"),d=o("gcOT"),h=function(){function t(n){if(e(this,t),"object"==typeof n)this.el=n;else{if("string"!=typeof n)throw new TypeError("Marquee accepts either a HTML Element (object) or a class/id to query (string).");this.el=document.querySelector(n)}this.sign=this.el.children[0],this.RAF=null,this.offset=this.el.offsetWidth,this.speed=this.el.dataset.speed||1,this.onResize=this.getSignWidth.bind(this),this.styleElements(),this.init()}return n(t,[{key:"init",value:function(){this.getSignWidth(),this.draw(),window.addEventListener("resize",this.onResize)}},{key:"styleElements",value:function(){this.el.style.display="flex",this.sign.style.display="inline-flex"}},{key:"getSignWidth",value:function(){this.signWidth=this.sign.clientWidth}},{key:"draw",value:function(){var e=this;requestAnimationFrame(function t(){e.RAF=requestAnimationFrame(t),-e.offset>=e.signWidth&&e.reset(),e.offset=e.offset-e.speed,e.sign.style.transform="translate3d(".concat(e.offset,"px, 0, 0)")})}},{key:"stop",value:function(){cancelAnimationFrame(this.RAF)}},{key:"reset",value:function(){this.offset=this.el.offsetWidth,this.sign.style.transform="translate3d(".concat(this.offset,"px, 0, 0)")}},{key:"destroy",value:function(){this.stop(),window.removeEventListener("resize",this.onResize)}}]),t}(),b=o("+BjT"),f=o("cHMN"),v=o("fXoL"),m=o("N1zj"),g=o("J+wX"),p=o("BTjV"),w=o("mGeP"),y=o("9Pn0");function k(e,t){1&e&&(v.Pb(0,"ion-button"),v.Nb(1,"ion-spinner"),v.Ob())}function O(e,t){if(1&e){var n=v.Qb();v.Pb(0,"ion-toolbar"),v.Pb(1,"ion-buttons",8),v.Pb(2,"ion-button"),v.Nb(3,"ion-icon"),v.Ob(),v.Ob(),v.Pb(4,"ion-segment",9),v.Xb("ionChange",function(e){return v.hc(n),v.bc().segmentChanged(e)}),v.Pb(5,"ion-segment-button",10),v.Pb(6,"ion-label"),v.oc(7),v.Ob(),v.Ob(),v.Pb(8,"ion-segment-button",11),v.Pb(9,"ion-label"),v.oc(10),v.Ob(),v.Ob(),v.Pb(11,"ion-segment-button",12),v.Pb(12,"ion-label"),v.oc(13),v.Ob(),v.Ob(),v.Ob(),v.Pb(14,"ion-buttons",2),v.Pb(15,"ion-button",13),v.Xb("click",function(){return v.hc(n),v.bc().toggleSearchbar()}),v.Nb(16,"ion-icon",14),v.Ob(),v.Ob(),v.Ob()}if(2&e){var i=v.bc();v.Bb(4),v.ec("value",i.segment),v.Bb(3),v.qc("All (",i.getGameCount(),")"),v.Bb(3),v.qc("Active (",i.getActiveGameCount(),")"),v.Bb(3),v.qc("Favorites (",i.getFavoriteGameCount(),")")}}function P(e,t){if(1&e){var n=v.Qb();v.Pb(0,"ion-searchbar",15),v.Xb("ionInput",function(e){return v.hc(n),v.bc().filterList(e)}),v.Ob()}if(2&e){var i=v.bc();v.fc("value",i.searchTerm)}}function S(e,t){if(1&e&&(v.Pb(0,"ion-item",16),v.Pb(1,"h4"),v.oc(2," The "),v.Nb(3,"app-team",21),v.oc(4," are the Champions! "),v.Ob(),v.Ob()),2&e){var n=v.bc(3);v.Bb(3),v.ec("teamColor",n.uiState.winner.mainColor)("emoji",n.uiState.winner.emoji)("name",n.uiState.winner.fullName)}}function T(e,t){if(1&e&&(v.Pb(0,"ion-item",16),v.Pb(1,"h4"),v.oc(2),v.Nb(3,"br"),v.oc(4),v.Ob(),v.Ob()),2&e){var n=v.bc(3);v.Bb(2),v.qc(" ",n.uiState.countdownNotice," "),v.Bb(2),v.qc(" ",n.getCountdown()," ")}}function E(e,t){1&e&&(v.Pb(0,"ion-item",16),v.Pb(1,"h4"),v.oc(2,"Next season starts in... uhh. "),v.Pb(3,"i"),v.oc(4,"*tugs collar*"),v.Ob(),v.oc(5," I mean. What "),v.Pb(6,"i"),v.oc(7,"is"),v.Ob(),v.oc(8," time, really?"),v.Ob(),v.Ob())}function F(e,t){if(1&e&&(v.Pb(0,"div",22),v.oc(1),v.Ob()),2&e){var n=t.$implicit;v.Bb(1),v.qc(" ",n.msg,"... \xa0 \xa0 \xa0 ")}}function D(e,t){if(1&e&&(v.Pb(0,"span"),v.Pb(1,"ion-item",16),v.Pb(2,"h4"),v.oc(3),v.Ob(),v.Ob(),v.nc(4,S,5,3,"ion-item",17),v.nc(5,T,5,2,"ion-item",17),v.nc(6,E,9,0,"ion-item",17),v.Pb(7,"div",18),v.Pb(8,"div",19),v.nc(9,F,2,1,"div",20),v.Ob(),v.Ob(),v.Ob()),2&e){var n=v.bc(2);v.Bb(3),v.pc(n.uiState.notice),v.Bb(1),v.ec("ngIf",n.uiState.winner),v.Bb(1),v.ec("ngIf",void 0!==n.uiState.countdownNotice&&n.countdown&&n.countdown.diff>=0),v.Bb(1),v.ec("ngIf",void 0!==n.uiState.countdownNotice&&n.countdown&&n.countdown.diff<0),v.Bb(3),v.ec("ngForOf",n.globalEvents)}}function N(e,t){if(1&e&&(v.Pb(0,"h4",26),v.oc(1),v.Ob()),2&e){var n=v.bc(4);v.Bb(1),v.pc(n.uiState.seasonHeader)}}function C(e,t){if(1&e&&(v.Pb(0,"ion-item",16),v.nc(1,N,2,1,"h4",25),v.Ob()),2&e){var n=v.bc(3);v.Bb(1),v.ec("ngIf",n.streamData&&n.streamData.games)}}function L(e,t){if(1&e&&(v.Pb(0,"ion-item",16),v.oc(1),v.Ob()),2&e){var n=v.bc(3);v.Bb(1),v.qc(" No active games for day ",n.streamData.games.sim.day,". ")}}function A(e,t){if(1&e){var n=v.Qb();v.Pb(0,"ion-col",27),v.Pb(1,"app-diamond",28),v.Xb("refresh",function(){return v.hc(n),v.bc(3).refreshUI()}),v.Ob(),v.Ob()}if(2&e){var i=t.$implicit;v.Bb(1),v.ec("game",i)}}function I(e,t){if(1&e&&(v.Pb(0,"span"),v.nc(1,C,2,1,"ion-item",17),v.nc(2,L,2,1,"ion-item",17),v.Pb(3,"ion-grid",23),v.Pb(4,"ion-row"),v.nc(5,A,2,1,"ion-col",24),v.Ob(),v.Ob(),v.Ob()),2&e){var n=v.bc(2);v.Bb(1),v.ec("ngIf",n.uiState.seasonHeader),v.Bb(1),v.ec("ngIf","active"===n.segment&&(!n.games||0===n.games.length)),v.Bb(3),v.ec("ngForOf",n.games)("ngForTrackBy",n.gameId)}}function R(e,t){if(1&e&&(v.Pb(0,"span"),v.nc(1,D,10,5,"span",3),v.nc(2,I,6,4,"span",3),v.Ob()),2&e){var n=v.bc();v.Bb(1),v.ec("ngIf",n.uiState.notice),v.Bb(1),v.ec("ngIf",!n.uiState.notice)}}var B,x,j,q=[{path:"",component:(B=function(){function t(n,i,o,a,s){e(this,t),this.stream=n,this.database=i,this.loadingController=o,this.platform=a,this.settings=s,this.streamData=new b.a({}),this.games=[],this.segment="all",this.ready=!1,this.errors=0,this.lastUpdateTime=Date.now(),this.filterVisible=!1,this.stale=!1,this.staleThreshold=3e4,this.keepAwake=!1,this.PHASES=f.a,this.uiState={}}return n(t,[{key:"schedule",get:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[]}},{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.platform.ready();case 2:return e.next=4,this.settings.ready;case 4:return console.debug("LiveFeed.ngOnInit()"),this.showLoading(),this.segment=this.settings.segment(),e.next=9,this.startListening();case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,this)}))}},{key:"ngOnDestroy",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.ready=!1,this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0),!0));case 1:case"end":return e.stop()}},e,this)}))}},{key:"scrollToTop",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.content.scrollToTop();case 1:case"end":return e.stop()}},e,this)}))}},{key:"showLoading",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!0;case 1:case"end":return e.stop()}},e,this)}))}},{key:"hideLoading",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!1,this.ready=!0;case 1:case"end":return e.stop()}},e,this)}))}},{key:"forceRefresh",value:function(e){var t=this;setTimeout(function(){t.stream.retry().finally(function(){var t;null===(t=null==e?void 0:e.target)||void 0===t||t.complete()})},500)}},{key:"toggleSearchbar",value:function(){this.filterVisible=!this.filterVisible,console.debug("LiveFeed.toggleSearchbar(): filterVisible=".concat(this.filterVisible))}},{key:"filterList",value:function(e){return this.searchTerm=e.srcElement.value,this.refreshUI()}},{key:"getGameCount",value:function(){var e,t,n;return(null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||void 0===n?void 0:n.length)||0}},{key:"getActiveGames",value:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?this.streamData.games.schedule.filter(function(e){return e.inProgress}):[]}},{key:"getActiveGameCount",value:function(){return this.getActiveGames().length}},{key:"getFavoriteGames",value:function(){var e,t,n,i,o=this;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?null===(i=null===(n=this.streamData)||void 0===n?void 0:n.games)||void 0===i?void 0:i.schedule.filter(function(e){return o.settings.isFavorite(e.homeTeam)||o.settings.isFavorite(e.awayTeam)}):[]}},{key:"getFavoriteGameCount",value:function(){return this.getFavoriteGames().length}},{key:"getSegmentGames",value:function(){var e,t,n=this;console.debug("LiveFeed.getSegmentGames()");var i=[];switch(this.segment){case"all":i=(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[];break;case"active":i=this.getActiveGames();break;case"favorites":i=this.getFavoriteGames();break;default:console.warn("LiveFeed.getSegmentGames(): unhandled segment: ".concat(this.segment)),i=[]}var o=this.settings.favoriteTeam();return i.sort(function(e,t){if(e.homeTeam===o||e.awayTeam===o)return-1;if(t.homeTeam===o||t.awayTeam===o)return 1;if(n.settings.isFavorite(e.homeTeam)||n.settings.isFavorite(e.awayTeam))return-1;if(n.settings.isFavorite(t.homeTeam)||n.settings.isFavorite(t.awayTeam))return 1;var i=e.homeTeamNickname,a=t.homeTeamNickname;return i<a?-1:i>a?1:0})}},{key:"doCountdown",value:function(e){var t=this;this.clockUpdater||(this.clockUpdater=setInterval(function(){t.countdown=t.streamData.sim[e]()},1e3))}},{key:"getWinner",value:function(){var e,t,n,i,o=null===(i=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===n?void 0:n.playoffs)||void 0===i?void 0:i.winner;if(o){var a=this.streamData.leagues.teams.find(function(e){return e.id===o});return console.debug("getWinner():",a),a}}},{key:"getPlayoffDay",value:function(){var e,t,n,i;return(null===(i=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===n?void 0:n.playoffs)||void 0===i?void 0:i.playoffDay)||0}},{key:"getCountdown",value:function(){return"".concat(this.countdown.hours," ").concat(1===this.countdown.hours?"hour":"hours",", ").concat(this.countdown.minutes," ").concat(1===this.countdown.minutes?"minute":"minutes",", ").concat(this.countdown.seconds," ").concat(1===this.countdown.seconds?"second":"seconds")}},{key:"refreshUI",value:function(){var e=this;console.debug("LiveFeed.refreshUI()");var t=this.getSegmentGames();return this.searchTerm&&this.searchTerm.length>=2&&(t=t.filter(function(t){return t.homeTeamName.toLowerCase().indexOf(e.searchTerm.toLowerCase())>-1||t.awayTeamName.toLowerCase().indexOf(e.searchTerm.toLowerCase())>-1})),this.games=t,this.games}},{key:"segmentChanged",value:function(e){e&&e.detail&&e.detail.value&&(this.segment=e.detail.value,this.settings.setSegment(this.segment)),console.debug("LiveFeed.segmentChanged():",e),this.refreshUI()}},{key:"checkStale",value:function(){var e=this.stale;if(this.games&&this.games.length>0){var t=this.games.find(function(e){return e.inProgress});this.stale=!!t&&this.lastUpdateTime+this.staleThreshold<Date.now()}console.debug("LiveFeed.checkStale(): ".concat(e," -> ").concat(this.stale))}},{key:"checkDisableSleep",value:function(){console.debug("LiveFeed.checkDisableSleep()");var e=this.settings.disableSleep();if(d.a.KeepAwake)try{e&&this.getActiveGameCount()>0?this.keepAwake||(console.debug("LiveFeed.checkDisableSleep(): keeping awake"),this.keepAwake=!0,d.a.KeepAwake.keepAwake()):this.keepAwake&&(console.debug("LiveFeed.checkDisableSleep(): allowing sleep"),this.keepAwake=!1,d.a.KeepAwake.allowSleep())}catch(t){console.error("An error occurred setting keep-awake status.",t)}}},{key:"onEvent",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n,i,o,a,s=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.debug("LiveFeed.onEvent()"),!(e&&e instanceof ErrorEvent)){t.next=2;break}return t.abrupt("return",(console.warn("LiveFeed.onEvent(): got an error:",e),void this.onError(e)));case 2:for(n=e,this.lastUpdateTime=Date.now(),console.debug("LiveFeed.onEvent(): lastUpdateTime=",this.lastUpdateTime),setTimeout(function(){s.errors=0,s.checkStale()},1e3),i=0,o=Object.keys(n.data);i<o.length;i++)a=o[i],this.streamData.data[a]=n.data[a];console.debug("LiveFeed.onEvent(): current data:",this.streamData),this.onUpdate();case 6:case"end":return t.stop()}},t,this)}))}},{key:"onError",value:function(e){var t=this;console.debug("LiveFeed.onError():",e),this.onUpdate(),setTimeout(function(){t.errors++,t.checkStale()},1e3)}},{key:"onUpdate",value:function(){var e,t,n,i,o,a,s,r;return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function c(){var u,l,d;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(this.checkDisableSleep(),this.refreshUI(),u={seasonHeader:void 0,notice:void 0,countdownNotice:void 0,winner:void 0},this.streamData||this.streamData.sim){c.next=4;break}return c.abrupt("return");case 4:l=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.sim)||void 0===n?void 0:n.day,d=null===(o=null===(i=this.streamData)||void 0===i?void 0:i.sim)||void 0===o?void 0:o.phase,c.t0=d,c.next=c.t0===f.a.REST||c.t0===f.a.PRESEASON||c.t0===f.a.POSTSEASON_END||c.t0===f.a.ELECTION?8:c.t0===f.a.SEASON_END||c.t0===f.a.PRE_POSTSEASON?10:c.t0===f.a.EARLY_POSTSEASON_END?12:c.t0===f.a.EARLY_POSTSEASON?14:c.t0===f.a.POSTSEASON?16:(c.t0===f.a.EARLSEASON||(c.t0,f.a.MIDSEASON),18);break;case 8:return this.doCountdown("countdownToNextPhase"),u.notice="Games have finished for the season.",u.countdownNotice="Next season starts in:",u.winner=this.getWinner(),c.abrupt("break",19);case 10:return this.doCountdown("countdownToNextPhase"),u.notice="Regular Season ".concat(this.streamData.seasonNumber," is over."),u.countdownNotice="Earlpostseason starts in:",c.abrupt("break",19);case 12:return this.doCountdown("countdownToNextPhase"),u.notice="Earlpostseason is over.",u.countdownNotice="Latepostseason starts in:",c.abrupt("break",19);case 14:return u.seasonHeader="Earlpostseason, Day ".concat(l),c.abrupt("break",19);case 16:return u.seasonHeader="Postseason Round ".concat(this.streamData.games.sim.playOffRound,", Day ").concat(l),c.abrupt("break",19);case 18:u.seasonHeader="Season ".concat(null===(r=null===(s=null===(a=this.streamData)||void 0===a?void 0:a.games)||void 0===s?void 0:s.season)||void 0===r?void 0:r.seasonNumber,", Day ").concat(l);case 19:!this.uiState.notice&&this.clockUpdater&&(clearInterval(this.clockUpdater),this.clockUpdater=void 0,this.countdown=void 0),this.phase=d,Object.assign(this.uiState,u),this.hideLoading();case 20:case"end":return c.stop()}},c,this)}))}},{key:"startListening",value:function(){var e;return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.debug("LiveFeed.startListening(): opening event stream to blaseball.com"),this.showLoading(),null===(e=this.subscription)||void 0===e||e.unsubscribe(),t.next=5,this.stream.subscribe(function(e){n.onEvent(e)},function(e){n.onError(e)});case 5:this.subscription=t.sent,this.database.globalEvents().then(function(e){n.globalEvents=e.filter(function(e){return null===e.expire}),setTimeout(function(){var e=document.getElementById("marquee");e&&(new h(e),setTimeout(function(){e.setAttribute("style","visibility: visible")},200))},1e3)});case 7:case"end":return t.stop()}},t,this)}))}},{key:"gameId",value:function(e,t){return t&&t.id?t.id:String(e)}}]),t}(),B.\u0275fac=function(e){return new(e||B)(v.Mb(m.a),v.Mb(g.a),v.Mb(a.S),v.Mb(a.U),v.Mb(p.a))},B.\u0275cmp=v.Gb({type:B,selectors:[["app-live-feed"]],viewQuery:function(e,t){var n;1&e&&v.uc(a.k,1),2&e&&v.gc(n=v.Yb())&&(t.content=n.first)},decls:13,vars:4,consts:[["translucent","true"],["color","primary",3,"click"],["slot","secondary"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["pullingIcon","baseball-outline"],["name","default"],["debounce","200","showCancelButton","focus",3,"value","ionInput",4,"ngIf"],["slot","primary"],[3,"value","ionChange"],["value","all"],["value","active"],["value","favorites"],[3,"click"],["name","search-outline"],["debounce","200","showCancelButton","focus",3,"value","ionInput"],["lines","none"],["lines","none",4,"ngIf"],["id","marquee","data-speed","1"],[1,"marquee"],["class","marquee-item",4,"ngFor","ngForOf"],["team","home",3,"teamColor","emoji","name"],[1,"marquee-item"],[2,"margin-top","0","padding-top","0"],["size","12",4,"ngFor","ngForOf","ngForTrackBy"],["class","ion-no-margin",4,"ngIf"],[1,"ion-no-margin"],["size","12"],["prefix","live-diamond",3,"game","refresh"]],template:function(e,t){1&e&&(v.Pb(0,"ion-header",0),v.Pb(1,"ion-toolbar",1),v.Xb("click",function(){return t.scrollToTop()}),v.Pb(2,"ion-title"),v.oc(3,"Blases Loaded"),v.Ob(),v.Pb(4,"ion-buttons",2),v.nc(5,k,2,0,"ion-button",3),v.Ob(),v.Ob(),v.Ob(),v.Pb(6,"ion-content"),v.nc(7,O,17,4,"ion-toolbar",3),v.Pb(8,"ion-refresher",4),v.Xb("ionRefresh",function(e){return t.forceRefresh(e)}),v.Pb(9,"ion-refresher-content",5),v.Nb(10,"ion-spinner",6),v.Ob(),v.Ob(),v.nc(11,P,1,1,"ion-searchbar",7),v.nc(12,R,3,2,"span",3),v.Ob()),2&e&&(v.Bb(5),v.ec("ngIf",t.loading||t.stale),v.Bb(2),v.ec("ngIf",t.ready&&!t.uiState.notice),v.Bb(4),v.ec("ngIf",t.filterVisible),v.Bb(1),v.ec("ngIf",t.ready))},directives:[a.o,a.P,a.N,a.e,s.i,a.k,a.z,a.A,a.I,a.d,a.p,a.E,a.V,a.F,a.t,a.D,a.W,a.q,s.h,w.a,a.n,a.C,a.j,y.a],styles:[".danger[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-danger);text-align:center;padding:4em}.danger[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]{font-size:200%;font-weight:700}ion-item[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%]{transition:.1s ease-in-out}#marquee[_ngcontent-%COMP%]{visibility:hidden}.marquee[_ngcontent-%COMP%]{position:absolute;bottom:0;overflow:hidden;white-space:nowrap;padding:.5em 0}.marquee-item[_ngcontent-%COMP%]{display:inline-block}"]}),B)}],G=((x=function t(){e(this,t)}).\u0275mod=v.Kb({type:x}),x.\u0275inj=v.Jb({factory:function(e){return new(e||x)},imports:[[u.j.forChild(q)],u.j]}),x),U=o("o5iR"),M=((j=function t(){e(this,t)}).\u0275mod=v.Kb({type:j}),j.\u0275inj=v.Jb({factory:function(e){return new(e||j)},imports:[[a.Q,s.b,r.a,G,c.a,U.a]]}),j)}}])}();
//# sourceMappingURL=live-feed-live-feed-module-es5.9804654325a72b360013.js.map