(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NeaV:function(n,i,e){"use strict";e.r(i),e.d(i,"StandingsPageModule",function(){return y});var o=e("TEn/"),t=e("ofXK"),s=e("3Pt+"),r=e("tyNb"),a=e("mrSG"),c=e("+BjT"),d=e("FqL0"),l=e("XlgL"),b=e("PRa9"),m=e("/uxM"),g=e("fXoL"),u=e("J+wX"),f=e("N1zj");function h(n,i){1&n&&(g.Pb(0,"ion-button"),g.Nb(1,"ion-spinner"),g.Ob())}function p(n,i){if(1&n){const n=g.Qb();g.Pb(0,"ion-row",18),g.Xb("click",function(){g.hc(n);const e=i.$implicit;return g.bc(3).openTeam(e.id)}),g.Pb(1,"ion-col",19),g.oc(2),g.Ob(),g.Pb(3,"ion-col",20),g.oc(4),g.Ob(),g.Pb(5,"ion-col",21),g.oc(6),g.Ob(),g.Ob()}if(2&n){const n=i.$implicit;g.mc("background-color: "+n.mainColor+"; color: "+n.mainTextColor),g.Bb(2),g.qc(" ",n.name," "),g.Bb(2),g.qc(" ",n.wins," "),g.Bb(2),g.rc(" ",n.nonLosses,"-",n.losses," ")}}function O(n,i){if(1&n&&(g.Pb(0,"ion-card",9),g.Pb(1,"ion-card-header",10),g.Pb(2,"ion-card-subtitle"),g.oc(3),g.Ob(),g.Ob(),g.Pb(4,"ion-card-content",11),g.Pb(5,"ion-grid",12),g.Pb(6,"ion-row",13),g.Pb(7,"ion-col",14),g.oc(8," Teams "),g.Ob(),g.Pb(9,"ion-col",15),g.oc(10," Wins "),g.Ob(),g.Pb(11,"ion-col",16),g.oc(12," Record "),g.Ob(),g.Ob(),g.nc(13,p,7,6,"ion-row",17),g.Ob(),g.Ob(),g.Ob()),2&n){const n=i.$implicit,e=g.bc(2);g.Bb(3),g.pc(n.name),g.Bb(10),g.ec("ngForOf",n.teams)("ngForTrackBy",e.id)}}function P(n,i){if(1&n&&(g.Pb(0,"ion-col",6),g.Pb(1,"ion-header",7),g.Pb(2,"h4"),g.oc(3),g.Ob(),g.Ob(),g.nc(4,O,14,3,"ion-card",8),g.Ob()),2&n){const n=i.$implicit,e=g.bc();g.Bb(3),g.pc(n.name),g.Bb(1),g.ec("ngForOf",n.divisions)("ngForTrackBy",e.id)}}const w=[{path:"",component:(()=>{class n{constructor(n,i,e,o){this.database=n,this.modalController=i,this.platform=e,this.stream=o,this.loading=!0,this.leagues=new l.a({}),this.standings=new d.a({}),this.tiebreakers=new b.a({}),this.data={subleagues:[]}}ngOnInit(){return Object(a.a)(this,void 0,void 0,function*(){yield this.platform.ready(),this.stream.subscribe(n=>Object(a.a)(this,void 0,void 0,function*(){n instanceof c.a&&(this.leagues=n.leagues,this.standings=n.games.standings),this.postprocess()}))})}openTeam(n){return Object(a.a)(this,void 0,void 0,function*(){console.debug(`opening team: ${n}`);const i=yield this.modalController.create({component:m.a,componentProps:{id:n}});return yield i.present()})}postprocess(){var n,i,e;return Object(a.a)(this,void 0,void 0,function*(){const o=null===(n=this.leagues)||void 0===n?void 0:n.leagues[0];if(!o)return;this.data.name=o.name;const t=(n,i)=>{let e=this.standings.wins[i.id]-this.standings.wins[n.id];return 0===e&&(e=this.tiebreakers.order.indexOf(n.id)-this.tiebreakers.order.indexOf(i.id)),e},s=this.standings.records;this.tiebreakers=this.leagues.tiebreakers.find(n=>n.id===o.tiebreakers);const r=yield this.database.teams(),a=null===(e=null===(i=this.leagues)||void 0===i?void 0:i.subleagues)||void 0===e?void 0:e.filter(n=>o.subleagues.indexOf(n.id)>=0);this.data.subleagues=a.map(n=>{var i,e;const o={id:n.id,name:n.name},a=[],c=null===(e=null===(i=this.leagues)||void 0===i?void 0:i.divisions)||void 0===e?void 0:e.filter(i=>n.divisions.indexOf(i.id)>=0);return o.divisions=c.sort((n,i)=>n.name<i.name?-1:n.name>i.name?1:0).map(n=>{const i={id:n.id,name:n.name};return i.teams=n.teams.map(n=>r.find(i=>n===i.id)).sort(t).map(n=>{const i=s[n.id],e={id:n.id,name:n.fullName,emoji:n.emoji,emojiColor:n.emojiColor,mainColor:n.mainColor,secondaryColor:n.secondaryColor,mainTextColor:n.contrastingMainColor,secondaryTextColor:n.contrastingSecondaryColor,wins:i.wins,losses:i.losses,nonLosses:i.nonLosses,playoffs:!1};return a.push(e),e}),i}),a.sort((n,i)=>{let e=i.wins-n.wins;return 0===e&&(e=this.tiebreakers.order.indexOf(n.id)-this.tiebreakers.order.indexOf(i.id)),e}).filter((n,i)=>i<4).map(n=>{n.playoffs=!0}),o}),this.loading=!1})}id(n){return n&&n.id?n.id:n}}return n.\u0275fac=function(i){return new(i||n)(g.Mb(u.a),g.Mb(o.T),g.Mb(o.U),g.Mb(f.a))},n.\u0275cmp=g.Gb({type:n,selectors:[["app-standings"]],decls:10,vars:4,consts:[[3,"translucent"],["color","primary"],["slot","secondary"],[4,"ngIf"],[1,"ion-no-margin"],["size","6","size-xs","12","size-sm","12","size-md","6","size-lg","6","size-xl","6",4,"ngFor","ngForOf","ngForTrackBy"],["size","6","size-xs","12","size-sm","12","size-md","6","size-lg","6","size-xl","6"],[1,"ion-no-border","ion-text-center"],["class","ion-no-padding ion-no-margin ion-margin-vertical",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-padding","ion-no-margin","ion-margin-vertical"],[1,"division-header"],[1,"ion-no-padding"],[2,"width","100%"],["lines","none",1,"header-row"],["size","7",1,"team-name","header"],["size","2",1,"team-wins","header"],["size","3",1,"team-record","header"],["lines","none","class","team-row",3,"style","click",4,"ngFor","ngForOf","ngForTrackBy"],["lines","none",1,"team-row",3,"click"],["size","7",1,"team-name"],["size","2",1,"team-wins"],["size","3",1,"team-record"]],template:function(n,i){1&n&&(g.Pb(0,"ion-header",0),g.Pb(1,"ion-toolbar",1),g.Pb(2,"ion-title"),g.oc(3," Standings "),g.Ob(),g.Pb(4,"ion-buttons",2),g.nc(5,h,2,0,"ion-button",3),g.Ob(),g.Ob(),g.Ob(),g.Pb(6,"ion-content",4),g.Pb(7,"ion-grid"),g.Pb(8,"ion-row"),g.nc(9,P,5,3,"ion-col",5),g.Ob(),g.Ob(),g.Ob()),2&n&&(g.ec("translucent",!0),g.Bb(5),g.ec("ngIf",i.loading),g.Bb(4),g.ec("ngForOf",i.data.subleagues)("ngForTrackBy",i.id))},directives:[o.o,o.P,o.N,o.e,t.i,o.k,o.n,o.C,t.h,o.d,o.I,o.j,o.f,o.h,o.i,o.g],styles:[".team-row[_ngcontent-%COMP%]{font-weight:700}.team-record[_ngcontent-%COMP%], .team-wins[_ngcontent-%COMP%]{text-align:end;font-family:monospace;font-size:1rem}.division-header[_ngcontent-%COMP%]{padding-bottom:.5rem}.division-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{color:#000;font-size:larger}.header[_ngcontent-%COMP%]{font-size:smaller;font-family:inherit!important;color:#000}"]}),n})()}];let v=(()=>{class n{}return n.\u0275mod=g.Kb({type:n}),n.\u0275inj=g.Jb({factory:function(i){return new(i||n)},imports:[[r.j.forChild(w)],r.j]}),n})(),y=(()=>{class n{}return n.\u0275mod=g.Kb({type:n}),n.\u0275inj=g.Jb({factory:function(i){return new(i||n)},imports:[[o.Q,t.b,s.a,v]]}),n})()}}]);
//# sourceMappingURL=standings-standings-module-es2015.bf8f1fb51fc810efff6f.js.map