!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{v2dp:function(t,i,a){"use strict";a.r(i),a.d(i,"LiveFeedPageModule",(function(){return V}));var o=a("TEn/"),s=a("ofXK"),r=a("3Pt+"),c=a("Uyg3"),u=a("tyNb"),l=a("mrSG"),b=a("gcOT"),h=function(){function t(n){if(e(this,t),"object"==typeof n)this.el=n;else{if("string"!=typeof n)throw new TypeError("Marquee accepts either a HTML Element (object) or a class/id to query (string).");this.el=document.querySelector(n)}this.sign=this.el.children[0],this.RAF=null,this.offset=this.el.offsetWidth,this.speed=this.el.dataset.speed||1,this.onResize=this.getSignWidth.bind(this),this.styleElements(),this.init()}return n(t,[{key:"init",value:function(){this.getSignWidth(),this.draw(),window.addEventListener("resize",this.onResize)}},{key:"styleElements",value:function(){this.el.style.display="flex",this.sign.style.display="inline-flex"}},{key:"getSignWidth",value:function(){this.signWidth=this.sign.clientWidth}},{key:"draw",value:function(){var e=this;requestAnimationFrame((function t(){e.RAF=requestAnimationFrame(t),-e.offset>=e.signWidth&&e.reset(),e.offset=e.offset-e.speed,e.sign.style.transform="translate3d(".concat(e.offset,"px, 0, 0)")}))}},{key:"stop",value:function(){cancelAnimationFrame(this.RAF)}},{key:"reset",value:function(){this.offset=this.el.offsetWidth,this.sign.style.transform="translate3d(".concat(this.offset,"px, 0, 0)")}},{key:"destroy",value:function(){this.stop(),window.removeEventListener("resize",this.onResize)}}]),t}(),d=a("+BjT"),f=a("oVdi"),m=a("fXoL"),v=a("N1zj"),g=a("J+wX"),p=a("BTjV"),k=a("9Pn0");function y(e,t){1&e&&(m.Nb(0,"ion-button"),m.Lb(1,"ion-spinner"),m.Mb())}function w(e,t){if(1&e){var n=m.Ob();m.Nb(0,"ion-toolbar"),m.Nb(1,"ion-buttons",8),m.Nb(2,"ion-button"),m.Lb(3,"ion-icon"),m.Mb(),m.Mb(),m.Nb(4,"ion-segment",9),m.Ub("ionChange",(function(e){return m.dc(n),m.Xb().segmentChanged(e)})),m.Nb(5,"ion-segment-button",10),m.Nb(6,"ion-label"),m.kc(7,"All"),m.Mb(),m.Mb(),m.Nb(8,"ion-segment-button",11),m.Nb(9,"ion-label"),m.kc(10),m.Mb(),m.Mb(),m.Nb(11,"ion-segment-button",12),m.Nb(12,"ion-label"),m.kc(13,"Favorites"),m.Mb(),m.Mb(),m.Mb(),m.Nb(14,"ion-buttons",2),m.Nb(15,"ion-button",13),m.Ub("click",(function(){return m.dc(n),m.Xb().toggleSearchbar()})),m.Lb(16,"ion-icon",14),m.Mb(),m.Mb(),m.Mb()}if(2&e){var i=m.Xb();m.zb(4),m.ac("value",i.segment),m.zb(6),m.mc("Active (",i.getActiveGameCount(),")")}}function N(e,t){if(1&e){var n=m.Ob();m.Nb(0,"ion-searchbar",15),m.Ub("ionInput",(function(e){return m.dc(n),m.Xb().filterList(e)})),m.Mb()}if(2&e){var i=m.Xb();m.bc("value",i.searchTerm)}}function M(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.Nb(1,"h4"),m.kc(2,"The "),m.Nb(3,"span"),m.kc(4),m.Mb(),m.kc(5," are the Champions!"),m.Mb(),m.Mb()),2&e){var n=m.Xb(4);m.zb(3),m.ic("color: "+n.getWinner().mainColor),m.zb(1),m.lc(n.getWinner().fullName)}}function T(e,t){if(1&e&&(m.Nb(0,"h4"),m.kc(1,"Next Season Starts In:"),m.Lb(2,"br"),m.kc(3),m.Mb()),2&e){var n=m.Xb(4);m.zb(3),m.mc("",n.getCountdown(),".")}}function D(e,t){if(1&e&&(m.Nb(0,"span"),m.Nb(1,"ion-item",19),m.Nb(2,"h4"),m.kc(3),m.Mb(),m.Mb(),m.jc(4,M,6,3,"ion-item",20),m.Nb(5,"ion-item",19),m.jc(6,T,4,1,"h4",3),m.Mb(),m.Mb()),2&e){var n=m.Xb(3);m.zb(3),m.mc("Season ",n.streamData.seasonNumber," is over."),m.zb(1),m.ac("ngIf",n.getWinner()&&n.getWinner().fullName),m.zb(2),m.ac("ngIf",n.countdown)}}function I(e,t){if(1&e&&(m.Nb(0,"h4"),m.kc(1,"Postseason Starts In:"),m.Lb(2,"br"),m.kc(3),m.Mb()),2&e){var n=m.Xb(4);m.zb(3),m.mc("",n.getCountdown(),".")}}function z(e,t){if(1&e&&(m.Nb(0,"span"),m.Nb(1,"ion-item",19),m.Nb(2,"h4"),m.kc(3,"Regular season is over."),m.Mb(),m.Mb(),m.Nb(4,"ion-item",19),m.jc(5,I,4,1,"h4",3),m.Mb(),m.Mb()),2&e){var n=m.Xb(3);m.zb(5),m.ac("ngIf",n.countdown)}}function C(e,t){if(1&e&&(m.Nb(0,"div",21),m.kc(1),m.Mb()),2&e){var n=t.$implicit;m.zb(1),m.mc(" ",n.msg,"... \xa0 \xa0 \xa0 ")}}function L(e,t){if(1&e&&(m.Nb(0,"span"),m.jc(1,D,7,3,"span",3),m.jc(2,z,6,1,"span",3),m.Nb(3,"div",16),m.Nb(4,"div",17),m.jc(5,C,2,1,"div",18),m.Mb(),m.Mb(),m.Mb()),2&e){var n=m.Xb(2);m.zb(1),m.ac("ngIf",n.isPostseasonComplete()),m.zb(1),m.ac("ngIf",n.isPostseason()),m.zb(3),m.ac("ngForOf",n.globalEvents)}}function F(e,t){if(1&e&&(m.Nb(0,"h4",24),m.kc(1),m.Mb()),2&e){var n=m.Xb(4);m.zb(1),m.nc("Postseason Round ",n.streamData.games.postseason.round.roundNumber,", Day ",n.getPlayoffDay(),"")}}function j(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.jc(1,F,2,2,"h4",23),m.Mb()),2&e){var n=m.Xb(3);m.zb(1),m.ac("ngIf",n.streamData&&n.streamData.games)}}function S(e,t){if(1&e&&(m.Nb(0,"h4",24),m.kc(1),m.Mb()),2&e){var n=m.Xb(4);m.zb(1),m.nc("Season ",n.streamData.games.season.seasonNumber,", Day ",n.streamData.games.sim.day,"")}}function O(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.jc(1,S,2,2,"h4",23),m.Mb()),2&e){var n=m.Xb(3);m.zb(1),m.ac("ngIf",n.streamData&&n.streamData.games)}}function R(e,t){if(1&e&&(m.Nb(0,"span"),m.kc(1),m.Mb()),2&e){var n=m.Xb(4);m.zb(1),m.mc(" No active games for postseason day ",n.getPlayoffDay(),". ")}}function P(e,t){if(1&e&&(m.Nb(0,"span"),m.kc(1),m.Mb()),2&e){var n=m.Xb(4);m.zb(1),m.mc(" No active games for day ",n.streamData.games.sim.day,". ")}}function E(e,t){if(1&e&&(m.Nb(0,"ion-item",19),m.jc(1,R,2,1,"span",3),m.jc(2,P,2,1,"span",3),m.Mb()),2&e){var n=m.Xb(3);m.zb(1),m.ac("ngIf",n.streamData.games.isPostseason()),m.zb(1),m.ac("ngIf",!n.streamData.games.isPostseason())}}function x(e,t){if(1&e){var n=m.Ob();m.Nb(0,"ion-col",25),m.Nb(1,"app-diamond",26),m.Ub("refresh",(function(){return m.dc(n),m.Xb(3).refreshUI()})),m.Mb(),m.Mb()}if(2&e){var i=t.$implicit;m.zb(1),m.ac("game",i)}}function A(e,t){if(1&e&&(m.Nb(0,"span"),m.jc(1,j,2,1,"ion-item",20),m.jc(2,O,2,1,"ion-item",20),m.jc(3,E,3,2,"ion-item",20),m.Nb(4,"ion-grid"),m.Nb(5,"ion-row"),m.jc(6,x,2,1,"ion-col",22),m.Mb(),m.Mb(),m.Mb()),2&e){var n=m.Xb(2);m.zb(1),m.ac("ngIf",n.streamData.games.isPostseason()),m.zb(1),m.ac("ngIf",!n.streamData.games.isPostseason()),m.zb(1),m.ac("ngIf","active"===n.segment&&(!n.games||0===n.games.length)),m.zb(3),m.ac("ngForOf",n.games)("ngForTrackBy",n.gameId)}}function X(e,t){if(1&e&&(m.Nb(0,"span"),m.jc(1,L,6,3,"span",3),m.jc(2,A,7,5,"span",3),m.Mb()),2&e){var n=m.Xb();m.zb(1),m.ac("ngIf",n.showCountdown()),m.zb(1),m.ac("ngIf",!n.showCountdown())}}var U,q,G,W=[{path:"",component:(U=function(){function t(n,i,a,o,s){e(this,t),this.stream=n,this.database=i,this.loadingController=a,this.platform=o,this.settings=s,this.streamData=new d.a({}),this.games=[],this.segment="all",this.ready=!1,this.errors=0,this.lastUpdate=Date.now(),this.filterVisible=!1,this.stale=!1,this.staleThreshold=3e4,this.keepAwake=!1}return n(t,[{key:"ngOnInit",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.platform.ready();case 2:return console.debug("LiveFeed.ngOnInit()"),this.showLoading(),e.abrupt("return",this.settings.ready.finally((function(){return Object(l.a)(t,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.segment=this.settings.segment(),e.next=3,this.startListening();case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e,this)})))})));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.ready=!1,this.subscription&&(this.subscription.unsubscribe(),this.subscription=void 0),!0));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"scrollToTop",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.content.scrollToTop();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"showLoading",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!0;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"hideLoading",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!1,this.ready=!0;case 1:case"end":return e.stop()}}),e,this)})))}},{key:"forceRefresh",value:function(e){var t=this;setTimeout((function(){t.stream.retry().finally((function(){e.target.complete()}))}),500)}},{key:"toggleSearchbar",value:function(){this.filterVisible=!this.filterVisible,console.debug("LiveFeed.toggleSearchbar(): filterVisible="+this.filterVisible)}},{key:"filterList",value:function(e){return this.searchTerm=e.srcElement.value,this.refreshUI()}},{key:"getActiveGames",value:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?this.streamData.games.schedule.filter((function(e){return!e.gameComplete})):[]}},{key:"getActiveGameCount",value:function(){return this.getActiveGames().length}},{key:"getFavoriteGames",value:function(){var e,t,n,i,a=this;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)?null===(i=null===(n=this.streamData)||void 0===n?void 0:n.games)||void 0===i?void 0:i.schedule.filter((function(e){return a.settings.isFavorite(e.homeTeam)||a.settings.isFavorite(e.awayTeam)})):[]}},{key:"getSegmentGames",value:function(){var e,t,n=this;console.debug("LiveFeed.getSegmentGames()");var i=[];switch(this.segment){case"all":i=(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[];break;case"active":i=this.getActiveGames();break;case"favorites":i=this.getFavoriteGames();break;default:console.warn("LiveFeed.getSegmentGames(): unhandled segment: "+this.segment),i=[]}var a=this.settings.favoriteTeam();return i.sort((function(e,t){if(e.homeTeam===a||e.awayTeam===a)return-1;if(t.homeTeam===a||t.awayTeam===a)return 1;if(n.settings.isFavorite(e.homeTeam)||n.settings.isFavorite(e.awayTeam))return-1;if(n.settings.isFavorite(t.homeTeam)||n.settings.isFavorite(t.awayTeam))return 1;var i=e.homeTeamNickname,o=t.homeTeamNickname;return i<o?-1:i>o?1:0}))}},{key:"doCountdown",value:function(e){var t=this;this.clockUpdater||(this.clockUpdater=setInterval((function(){t.countdown=t.streamData.sim[e]()}),1e3))}},{key:"isRegularSeason",value:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.isRegularSeason())||!1}},{key:"isPostseason",value:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.isPostseason())||!1}},{key:"isPostseasonComplete",value:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.isPostseasonComplete())||!1}},{key:"showCountdown",value:function(){var e=this.isRegularSeason(),t=this.isPostseason(),n=this.isPostseasonComplete();return e&&t?(this.doCountdown("countdownToNextPhase"),!0):n?(this.doCountdown("countdownToNextSeason"),!0):(this.clockUpdater&&(clearInterval(this.clockUpdater),this.clockUpdater=void 0,this.countdown=void 0),!1)}},{key:"getWinner",value:function(){var e,t,n,i,a=null===(i=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===n?void 0:n.playoffs)||void 0===i?void 0:i.winner;return a?this.streamData.leagues.teams.find((function(e){return e.id===a})):new f.a}},{key:"getPlayoffDay",value:function(){var e,t,n,i;return(null===(i=null===(n=null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.postseason)||void 0===n?void 0:n.playoffs)||void 0===i?void 0:i.playoffDay)||0}},{key:"getCountdown",value:function(){return"".concat(this.countdown.hours," ").concat(1===this.countdown.hours?"hour":"hours",", ").concat(this.countdown.minutes," ").concat(1===this.countdown.minutes?"minute":"minutes",", ").concat(this.countdown.seconds," ").concat(1===this.countdown.seconds?"second":"seconds")}},{key:"refreshUI",value:function(){var e=this;console.debug("LiveFeed.refreshUI()");var t=this.getSegmentGames();return this.searchTerm&&this.searchTerm.length>=2&&(t=t.filter((function(t){return t.homeTeamName.toLowerCase().indexOf(e.searchTerm.toLowerCase())>-1||t.awayTeamName.toLowerCase().indexOf(e.searchTerm.toLowerCase())>-1}))),this.games=t,this.games}},{key:"segmentChanged",value:function(e){e&&e.detail&&e.detail.value&&(this.segment=e.detail.value,this.settings.setSegment(this.segment)),console.debug("LiveFeed.segmentChanged():",e),this.refreshUI()}},{key:"checkStale",value:function(){var e=this.stale;if(this.games&&this.games.length>0){var t=this.games.find((function(e){return!e.gameComplete}));this.stale=!!t&&this.lastUpdate+this.staleThreshold<Date.now()}console.debug("LiveFeed.checkStale(): ".concat(e," -> ").concat(this.stale))}},{key:"checkDisableSleep",value:function(){console.debug("LiveFeed.checkDisableSleep()");var e=this.settings.disableSleep();if(b.a.KeepAwake)try{e&&this.getActiveGameCount()>0?this.keepAwake||(console.debug("LiveFeed.checkDisableSleep(): keeping awake"),this.keepAwake=!0,b.a.KeepAwake.keepAwake()):this.keepAwake&&(console.debug("LiveFeed.checkDisableSleep(): allowing sleep"),this.keepAwake=!1,b.a.KeepAwake.allowSleep())}catch(t){console.error("An error occurred setting keep-awake status.",t)}}},{key:"onEvent",value:function(e){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i,a,o,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.debug("LiveFeed.onEvent()"),!(e&&e instanceof ErrorEvent)){t.next=2;break}return t.abrupt("return",(console.warn("LiveFeed.onEvent(): got an error:",e),void this.onError(e)));case 2:for(n=e,this.lastUpdate=Date.now(),console.debug("LiveFeed.lastUpdate()",this.lastUpdate),setTimeout((function(){s.errors=0,s.checkStale()}),1e3),i=0,a=Object.keys(n.data);i<a.length;i++)o=a[i],this.streamData.data[o]=n.data[o];console.debug("LiveFeed.onEvent(): current data:",this.streamData),this.checkDisableSleep(),this.refreshUI(),this.hideLoading();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"onError",value:function(e){var t=this;console.debug("LiveFeed.onError():",e),this.hideLoading(),setTimeout((function(){t.errors++,t.checkStale()}),1e3)}},{key:"startListening",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("LiveFeed.startListening(): opening event stream to blaseball.com"),this.showLoading(),e.next=4,this.stream.subscribe((function(e){t.onEvent(e)}),(function(e){t.onError(e)}));case 4:this.subscription=e.sent,this.database.globalEvents().then((function(e){t.globalEvents=e.filter((function(e){return null===e.expire})),setTimeout((function(){var e=document.getElementById("marquee");e&&(new h(e),setTimeout((function(){e.setAttribute("style","visibility: visible")}),200))}),1e3)}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"gameId",value:function(e,t){return t&&t.id?t.id:String(e)}},{key:"schedule",get:function(){var e,t;return(null===(t=null===(e=this.streamData)||void 0===e?void 0:e.games)||void 0===t?void 0:t.schedule)||[]}}]),t}(),U.\u0275fac=function(e){return new(e||U)(m.Kb(v.a),m.Kb(g.a),m.Kb(o.Ab),m.Kb(o.Eb),m.Kb(p.a))},U.\u0275cmp=m.Eb({type:U,selectors:[["app-live-feed"]],viewQuery:function(e,t){var n;1&e&&m.pc(o.r,!0),2&e&&m.cc(n=m.Vb())&&(t.content=n.first)},decls:13,vars:5,consts:[[3,"translucent"],["color","primary",3,"click"],["slot","secondary"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["pullingIcon","baseball-outline"],["name","default"],["debounce","200","showCancelButton","focus",3,"value","ionInput",4,"ngIf"],["slot","primary"],[3,"value","ionChange"],["value","all"],["value","active"],["value","favorites"],[3,"click"],["name","search-outline"],["debounce","200","showCancelButton","focus",3,"value","ionInput"],["id","marquee","data-speed","1"],[1,"marquee"],["class","marquee-item",4,"ngFor","ngForOf"],["lines","none"],["lines","none",4,"ngIf"],[1,"marquee-item"],["size","12",4,"ngFor","ngForOf","ngForTrackBy"],["class","ion-no-margin",4,"ngIf"],[1,"ion-no-margin"],["size","12"],["prefix","live-diamond",3,"game","refresh"]],template:function(e,t){1&e&&(m.Nb(0,"ion-header",0),m.Nb(1,"ion-toolbar",1),m.Ub("click",(function(){return t.scrollToTop()})),m.Nb(2,"ion-title"),m.kc(3," Blases Loaded "),m.Mb(),m.Nb(4,"ion-buttons",2),m.jc(5,y,2,0,"ion-button",3),m.Mb(),m.Mb(),m.jc(6,w,17,2,"ion-toolbar",3),m.Mb(),m.Nb(7,"ion-content"),m.Nb(8,"ion-refresher",4),m.Ub("ionRefresh",(function(e){return t.forceRefresh(e)})),m.Nb(9,"ion-refresher-content",5),m.Lb(10,"ion-spinner",6),m.Mb(),m.Mb(),m.jc(11,N,1,1,"ion-searchbar",7),m.jc(12,X,3,2,"span",3),m.Mb()),2&e&&(m.ac("translucent",!0),m.zb(5),m.ac("ngIf",t.loading||t.stale),m.zb(1),m.ac("ngIf",t.ready&&!t.showCountdown()),m.zb(5),m.ac("ngIf",t.filterVisible),m.zb(1),m.ac("ngIf",t.ready))},directives:[o.y,o.wb,o.ub,o.i,s.t,o.r,o.X,o.Y,o.mb,o.h,o.z,o.fb,o.Hb,o.gb,o.K,o.eb,o.Ib,s.s,o.E,o.x,o.db,o.q,k.a],styles:[".danger[_ngcontent-%COMP%]{color:#fff;background-color:var(--ion-color-danger);text-align:center;padding:4em}.danger[_ngcontent-%COMP%]   .big[_ngcontent-%COMP%]{font-size:200%;font-weight:700}ion-item[_ngcontent-%COMP%], ion-searchbar[_ngcontent-%COMP%]{transition:.1s ease-in-out}#marquee[_ngcontent-%COMP%]{visibility:hidden}.marquee[_ngcontent-%COMP%]{position:absolute;bottom:0;overflow:hidden;white-space:nowrap;padding:.5em 0}.marquee-item[_ngcontent-%COMP%]{display:inline-block}"]}),U)}],K=((G=function t(){e(this,t)}).\u0275mod=m.Ib({type:G}),G.\u0275inj=m.Hb({factory:function(e){return new(e||G)},imports:[[u.l.forChild(W)],u.l]}),G),V=((q=function t(){e(this,t)}).\u0275mod=m.Ib({type:q}),q.\u0275inj=m.Hb({factory:function(e){return new(e||q)},imports:[[o.yb,s.c,r.e,K,c.a]]}),q)}}])}();