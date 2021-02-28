!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NeaV:function(i,t,r){"use strict";r.r(t),r.d(t,"StandingsPageModule",function(){return B});var o=r("TEn/"),a=r("ofXK"),s=r("3Pt+"),c=r("tyNb"),u=r("mrSG"),d=r("+BjT"),l=r("FqL0"),b=r("XlgL"),f=r("PRa9"),m=r("/uxM"),g=r("fXoL"),p=r("J+wX"),h=r("N1zj");function v(n,e){1&n&&(g.Pb(0,"ion-button"),g.Nb(1,"ion-spinner"),g.Ob())}function w(n,e){if(1&n){var i=g.Qb();g.Pb(0,"ion-item",11),g.Xb("click",function(){g.hc(i);var n=e.$implicit;return g.bc(3).openTeam(n.id)}),g.Pb(1,"ion-label",12),g.oc(2),g.Ob(),g.Pb(3,"ion-note",13),g.oc(4),g.Ob(),g.Ob()}if(2&n){var t=e.$implicit;g.mc("--background: "+t.mainColor+"; --color: "+t.mainTextColor),g.Bb(2),g.pc(t.name),g.Bb(1),g.mc("--color: "+t.mainTextColor),g.Bb(1),g.rc(" ",t.wins,"-",t.losses," ")}}function O(n,e){if(1&n&&(g.Pb(0,"ion-card",8),g.Pb(1,"ion-card-header"),g.Pb(2,"ion-card-subtitle"),g.oc(3),g.Ob(),g.Ob(),g.Pb(4,"ion-card-content",9),g.nc(5,w,5,7,"ion-item",10),g.Ob(),g.Ob()),2&n){var i=e.$implicit,t=g.bc(2);g.Bb(3),g.pc(i.name),g.Bb(2),g.ec("ngForOf",i.teams)("ngForTrackBy",t.id)}}function y(n,e){if(1&n&&(g.Pb(0,"ion-col"),g.Pb(1,"ion-header",6),g.Pb(2,"h4"),g.oc(3),g.Ob(),g.Ob(),g.nc(4,O,6,3,"ion-card",7),g.Ob()),2&n){var i=e.$implicit,t=g.bc();g.Bb(3),g.pc(i.name),g.Bb(1),g.ec("ngForOf",i.divisions)("ngForTrackBy",t.id)}}var k,P,x,C=[{path:"",component:(k=function(){function i(e,t,r,o){n(this,i),this.database=e,this.modalController=t,this.platform=r,this.stream=o,this.loading=!0,this.leagues=new b.a({}),this.standings=new l.a({}),this.tiebreakers=new f.a({}),this.data={subleagues:[]}}var t,r,o;return t=i,(r=[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.platform.ready();case 2:this.stream.subscribe(function(n){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n instanceof d.a&&(this.leagues=n.leagues,this.standings=n.games.standings),this.postprocess();case 1:case"end":return e.stop()}},e,this)}))});case 3:case"end":return n.stop()}},n,this)}))}},{key:"openTeam",value:function(n){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("opening team: ".concat(n)),e.next=3,this.modalController.create({component:m.a,componentProps:{id:n}});case 3:return i=e.sent,e.next=6,i.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}))}},{key:"postprocess",value:function(){var n,e,i;return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r,o,a,s,c=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null===(n=this.leagues)||void 0===n?void 0:n.leagues[0]){t.next=3;break}return t.abrupt("return");case 3:return this.data.name=r.name,o=function(n,e){var i=c.standings.wins[e.id]-c.standings.wins[n.id];return 0===i&&(i=c.tiebreakers.order.indexOf(n.id)-c.tiebreakers.order.indexOf(e.id)),i},this.tiebreakers=this.leagues.tiebreakers.find(function(n){return n.id===r.tiebreakers}),t.next=8,this.database.teams();case 8:a=t.sent,s=null===(i=null===(e=this.leagues)||void 0===e?void 0:e.subleagues)||void 0===i?void 0:i.filter(function(n){return r.subleagues.indexOf(n.id)>=0}),this.data.subleagues=s.map(function(n){var e,i,t={id:n.id,name:n.name},r=[],s=null===(i=null===(e=c.leagues)||void 0===e?void 0:e.divisions)||void 0===i?void 0:i.filter(function(e){return n.divisions.indexOf(e.id)>=0});return t.divisions=s.sort(function(n,e){return n.name<e.name?-1:n.name>e.name?1:0}).map(function(n){var e={id:n.id,name:n.name};return e.teams=n.teams.map(function(n){return a.find(function(e){return n===e.id})}).sort(o).map(function(n){var e={id:n.id,name:n.fullName,emoji:n.emoji,emojiColor:n.emojiColor,mainColor:n.mainColor,secondaryColor:n.secondaryColor,mainTextColor:n.contrastingMainColor,secondaryTextColor:n.contrastingSecondaryColor,wins:c.standings.wins[n.id],losses:c.standings.losses[n.id],playoffs:!1};return r.push(e),e}),e}),r.sort(function(n,e){var i=e.wins-n.wins;return 0===i&&(i=c.tiebreakers.order.indexOf(n.id)-c.tiebreakers.order.indexOf(e.id)),i}).filter(function(n,e){return e<4}).map(function(n){n.playoffs=!0}),t}),this.loading=!1;case 11:case"end":return t.stop()}},t,this)}))}},{key:"id",value:function(n){return n&&n.id?n.id:n}}])&&e(t.prototype,r),o&&e(t,o),i}(),k.\u0275fac=function(n){return new(n||k)(g.Mb(p.a),g.Mb(o.T),g.Mb(o.U),g.Mb(h.a))},k.\u0275cmp=g.Gb({type:k,selectors:[["app-standings"]],decls:10,vars:4,consts:[[3,"translucent"],["color","primary"],["slot","secondary"],[4,"ngIf"],[1,"ion-no-margin"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-border","ion-text-center"],["class","ion-no-padding ion-no-margin ion-margin-vertical",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-padding","ion-no-margin","ion-margin-vertical"],[1,"ion-no-padding"],["lines","none","class","team-row",3,"style","click",4,"ngFor","ngForOf","ngForTrackBy"],["lines","none",1,"team-row",3,"click"],[1,"team-name"],["slot","end",1,"team-wins"]],template:function(n,e){1&n&&(g.Pb(0,"ion-header",0),g.Pb(1,"ion-toolbar",1),g.Pb(2,"ion-title"),g.oc(3," Standings "),g.Ob(),g.Pb(4,"ion-buttons",2),g.nc(5,v,2,0,"ion-button",3),g.Ob(),g.Ob(),g.Ob(),g.Pb(6,"ion-content",4),g.Pb(7,"ion-grid"),g.Pb(8,"ion-row"),g.nc(9,y,5,3,"ion-col",5),g.Ob(),g.Ob(),g.Ob()),2&n&&(g.ec("translucent",!0),g.Bb(5),g.ec("ngIf",e.loading),g.Bb(4),g.ec("ngForOf",e.data.subleagues)("ngForTrackBy",e.id))},directives:[o.o,o.P,o.N,o.e,a.i,o.k,o.n,o.C,a.h,o.d,o.I,o.j,o.f,o.h,o.i,o.g,o.q,o.t,o.w],styles:[".team-row[_ngcontent-%COMP%]{font-weight:700}.team-wins[_ngcontent-%COMP%]{font-family:monospace;font-size:1rem}.playoffs[_ngcontent-%COMP%]{width:2em;display:inline-block;text-align:end}"]}),k)}],j=((x=function e(){n(this,e)}).\u0275mod=g.Kb({type:x}),x.\u0275inj=g.Jb({factory:function(n){return new(n||x)},imports:[[c.j.forChild(C)],c.j]}),x),B=((P=function e(){n(this,e)}).\u0275mod=g.Kb({type:P}),P.\u0275inj=g.Jb({factory:function(n){return new(n||P)},imports:[[o.Q,a.b,s.a,j]]}),P)}}])}();
//# sourceMappingURL=standings-standings-module-es5.fb0b3a866d24c08fa817.js.map