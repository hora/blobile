(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{NeaV:function(n,i,o){"use strict";o.r(i),o.d(i,"StandingsPageModule",function(){return k});var e=o("TEn/"),t=o("ofXK"),s=o("3Pt+"),a=o("tyNb"),r=o("mrSG"),c=o("+BjT"),d=o("FqL0"),l=o("XlgL"),b=o("PRa9"),m=o("/uxM"),u=o("fXoL"),g=o("J+wX"),f=o("N1zj");function p(n,i){1&n&&(u.Ob(0,"ion-button"),u.Mb(1,"ion-spinner"),u.Nb())}function h(n,i){if(1&n){const n=u.Pb();u.Ob(0,"ion-item",11),u.Wb("click",function(){u.gc(n);const o=i.$implicit;return u.ac(3).openTeam(o.id)}),u.Ob(1,"ion-label",12),u.nc(2),u.Nb(),u.Ob(3,"ion-note",13),u.nc(4),u.Nb(),u.Nb()}if(2&n){const n=i.$implicit;u.lc("--background: "+n.mainColor+"; --color: "+n.mainTextColor),u.Ab(2),u.oc(n.name),u.Ab(1),u.lc("--color: "+n.mainTextColor),u.Ab(1),u.qc(" ",n.wins,"-",n.losses," ")}}function O(n,i){if(1&n&&(u.Ob(0,"ion-card",8),u.Ob(1,"ion-card-header"),u.Ob(2,"ion-card-subtitle"),u.nc(3),u.Nb(),u.Nb(),u.Ob(4,"ion-card-content",9),u.mc(5,h,5,7,"ion-item",10),u.Nb(),u.Nb()),2&n){const n=i.$implicit,o=u.ac(2);u.Ab(3),u.oc(n.name),u.Ab(2),u.dc("ngForOf",n.teams)("ngForTrackBy",o.id)}}function y(n,i){if(1&n&&(u.Ob(0,"ion-col"),u.Ob(1,"ion-header",6),u.Ob(2,"h4"),u.nc(3),u.Nb(),u.Nb(),u.mc(4,O,6,3,"ion-card",7),u.Nb()),2&n){const n=i.$implicit,o=u.ac();u.Ab(3),u.oc(n.name),u.Ab(1),u.dc("ngForOf",n.divisions)("ngForTrackBy",o.id)}}const v=[{path:"",component:(()=>{class n{constructor(n,i,o,e){this.database=n,this.modalController=i,this.platform=o,this.stream=e,this.loading=!0,this.leagues=new l.a({}),this.standings=new d.a({}),this.tiebreakers=new b.a({}),this.data={subleagues:[]}}ngOnInit(){return Object(r.a)(this,void 0,void 0,function*(){yield this.platform.ready(),this.stream.subscribe(n=>Object(r.a)(this,void 0,void 0,function*(){n instanceof c.a&&(this.leagues=n.leagues,this.standings=n.games.standings),this.postprocess()}))})}openTeam(n){return Object(r.a)(this,void 0,void 0,function*(){console.debug("opening team: "+n);const i=yield this.modalController.create({component:m.a,componentProps:{id:n}});return yield i.present()})}postprocess(){var n,i,o;return Object(r.a)(this,void 0,void 0,function*(){const e=null===(n=this.leagues)||void 0===n?void 0:n.leagues[0];if(!e)return;this.data.name=e.name;const t=(n,i)=>{let o=this.standings.wins[i.id]-this.standings.wins[n.id];return 0===o&&(o=this.tiebreakers.order.indexOf(n.id)-this.tiebreakers.order.indexOf(i.id)),o};this.tiebreakers=this.leagues.tiebreakers.find(n=>n.id===e.tiebreakers);const s=yield this.database.teams(),a=null===(o=null===(i=this.leagues)||void 0===i?void 0:i.subleagues)||void 0===o?void 0:o.filter(n=>e.subleagues.indexOf(n.id)>=0);this.data.subleagues=a.map(n=>{var i,o;const e={id:n.id,name:n.name},a=[],r=null===(o=null===(i=this.leagues)||void 0===i?void 0:i.divisions)||void 0===o?void 0:o.filter(i=>n.divisions.indexOf(i.id)>=0);return e.divisions=r.sort((n,i)=>n.name<i.name?-1:n.name>i.name?1:0).map(n=>{const i={id:n.id,name:n.name};return i.teams=n.teams.map(n=>s.find(i=>n===i.id)).sort(t).map(n=>{const i={id:n.id,name:n.fullName,emoji:n.emoji,emojiColor:n.emojiColor,mainColor:n.mainColor,secondaryColor:n.secondaryColor,mainTextColor:n.contrastingMainColor,secondaryTextColor:n.contrastingSecondaryColor,wins:this.standings.wins[n.id],losses:this.standings.losses[n.id],playoffs:!1};return a.push(i),i}),i}),a.sort((n,i)=>{let o=i.wins-n.wins;return 0===o&&(o=this.tiebreakers.order.indexOf(n.id)-this.tiebreakers.order.indexOf(i.id)),o}).filter((n,i)=>i<4).map(n=>{n.playoffs=!0}),e}),this.loading=!1})}id(n){return n&&n.id?n.id:n}}return n.\u0275fac=function(i){return new(i||n)(u.Lb(g.a),u.Lb(e.Bb),u.Lb(e.Eb),u.Lb(f.a))},n.\u0275cmp=u.Fb({type:n,selectors:[["app-standings"]],decls:10,vars:4,consts:[[3,"translucent"],["color","primary"],["slot","secondary"],[4,"ngIf"],[1,"ion-no-margin"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-border","ion-text-center"],["class","ion-no-padding ion-no-margin ion-margin-vertical",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ion-no-padding","ion-no-margin","ion-margin-vertical"],[1,"ion-no-padding"],["lines","none","class","team-row",3,"style","click",4,"ngFor","ngForOf","ngForTrackBy"],["lines","none",1,"team-row",3,"click"],[1,"team-name"],["slot","end",1,"team-wins"]],template:function(n,i){1&n&&(u.Ob(0,"ion-header",0),u.Ob(1,"ion-toolbar",1),u.Ob(2,"ion-title"),u.nc(3," Standings "),u.Nb(),u.Ob(4,"ion-buttons",2),u.mc(5,p,2,0,"ion-button",3),u.Nb(),u.Nb(),u.Nb(),u.Ob(6,"ion-content",4),u.Ob(7,"ion-grid"),u.Ob(8,"ion-row"),u.mc(9,y,5,3,"ion-col",5),u.Nb(),u.Nb(),u.Nb()),2&n&&(u.dc("translucent",!0),u.Ab(5),u.dc("ngIf",i.loading),u.Ab(4),u.dc("ngForOf",i.data.subleagues)("ngForTrackBy",i.id))},directives:[e.y,e.wb,e.ub,e.i,t.t,e.r,e.x,e.db,t.s,e.h,e.mb,e.q,e.j,e.l,e.m,e.k,e.E,e.K,e.S],styles:[".team-row[_ngcontent-%COMP%]{font-weight:700}.team-wins[_ngcontent-%COMP%]{font-family:monospace;font-size:1rem}.playoffs[_ngcontent-%COMP%]{width:2em;display:inline-block;text-align:end}"]}),n})()}];let w=(()=>{class n{}return n.\u0275mod=u.Jb({type:n}),n.\u0275inj=u.Ib({factory:function(i){return new(i||n)},imports:[[a.l.forChild(v)],a.l]}),n})(),k=(()=>{class n{}return n.\u0275mod=u.Jb({type:n}),n.\u0275inj=u.Ib({factory:function(i){return new(i||n)},imports:[[e.yb,t.c,s.e,w]]}),n})()}}]);