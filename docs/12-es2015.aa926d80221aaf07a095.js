(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7wo0":function(e,n,t){"use strict";t.r(n),t.d(n,"SettingsPageModule",function(){return W});var i=t("ofXK"),o=t("3Pt+"),c=t("TEn/"),a=t("tyNb"),r=t("mrSG"),s=t("gcOT"),l=t("NldC"),b=t("fXoL"),u=t("J+wX"),d=t("EPm9"),g=t("BTjV"),f=t("tRi0"),h=t("CuFv");function m(e,n){1&e&&(b.Ob(0,"ion-button"),b.Mb(1,"ion-spinner"),b.Nb())}function v(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-toggle",12),b.Wb("ionChange",function(){return b.gc(e),b.ac(2).setBetaEnabled()})("ngModelChange",function(n){return b.gc(e),b.ac(2).current.betaEnabled=n}),b.Nb()}if(2&e){const e=b.ac(2);b.dc("ngModel",e.current.betaEnabled)}}function p(e,n){if(1&e&&(b.Ob(0,"ion-item"),b.Ob(1,"ion-label",13),b.nc(2),b.Nb(),b.Mb(3,"ion-progress-bar",14),b.Nb()),2&e){const e=b.ac(2);b.Ab(2),b.pc("",e.updateService.phase,":"),b.Ab(1),b.ec("value",e.updateService.percentDone)}}function O(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-item",15),b.Ob(1,"ion-label",6),b.nc(2,"A content update is available."),b.Nb(),b.Ob(3,"ion-button",16),b.Wb("click",function(){return b.gc(e),b.ac(2).updateService.reload()}),b.nc(4,"Apply"),b.Nb(),b.Nb()}}function N(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-toggle",12),b.Wb("ionChange",function(){return b.gc(e),b.ac(2).setBoolean("disableSleep")})("ngModelChange",function(n){return b.gc(e),b.ac(2).current.disableSleep=n}),b.Nb()}if(2&e){const e=b.ac(2);b.dc("ngModel",e.current.disableSleep)}}function C(e,n){if(1&e&&(b.Ob(0,"span"),b.Ob(1,"ion-list-header",5),b.Ob(2,"h3"),b.nc(3,"Automatic Updates"),b.Nb(),b.Nb(),b.Ob(4,"ion-item"),b.Ob(5,"ion-label",6),b.nc(6,"Receive content updates early?"),b.Nb(),b.mc(7,v,1,1,"ion-toggle",7),b.Nb(),b.mc(8,p,4,2,"ion-item",3),b.mc(9,O,5,0,"ion-item",11),b.Ob(10,"ion-list-header",5),b.Ob(11,"h3"),b.nc(12,"Disable Sleep"),b.Nb(),b.Nb(),b.Ob(13,"ion-item"),b.Ob(14,"ion-label",6),b.nc(15,"Disable sleep while games are active?"),b.Nb(),b.mc(16,N,1,1,"ion-toggle",7),b.Nb(),b.Nb()),2&e){const e=b.ac();b.Ab(7),b.dc("ngIf",e.current),b.Ab(1),b.dc("ngIf",e.updateService.updateAvailable&&!e.updateService.updateReady&&e.updateService.percentDone),b.Ab(1),b.dc("ngIf",e.updateService.updateReady),b.Ab(7),b.dc("ngIf",e.current)}}function y(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-toggle",12),b.Wb("ionChange",function(){return b.gc(e),b.ac().setBoolean("reduceMotion")})("ngModelChange",function(n){return b.gc(e),b.ac().current.reduceMotion=n}),b.Nb()}if(2&e){const e=b.ac();b.dc("ngModel",e.current.reduceMotion)}}function M(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-toggle",12),b.Wb("ionChange",function(){b.gc(e);const n=b.ac();return n.settings.setDarkMode(n.current.darkMode)})("ngModelChange",function(n){return b.gc(e),b.ac().current.darkMode=n}),b.Nb()}if(2&e){const e=b.ac();b.dc("ngModel",e.current.darkMode)}}function S(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-toggle",12),b.Wb("ionChange",function(){return b.gc(e),b.ac().setBoolean("audio")})("ngModelChange",function(n){return b.gc(e),b.ac().current.audio=n}),b.Nb()}if(2&e){const e=b.ac();b.dc("ngModel",e.current.audio)}}function I(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-range",17),b.Wb("ionChange",function(n){return b.gc(e),b.ac().setVolume(n)})("ngModelChange",function(n){return b.gc(e),b.ac().volume=n}),b.Nb()}if(2&e){const e=b.ac();b.dc("ngModel",e.volume)}}function A(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-toggle",12),b.Wb("ionChange",function(){return b.gc(e),b.ac(2).setBoolean("speech")})("ngModelChange",function(n){return b.gc(e),b.ac(2).current.speech=n}),b.Nb()}if(2&e){const e=b.ac(2);b.dc("ngModel",e.current.speech)}}function w(e,n){if(1&e&&(b.Ob(0,"ion-item"),b.Ob(1,"ion-label",6),b.nc(2,"Enable Speech?"),b.Nb(),b.mc(3,A,1,1,"ion-toggle",7),b.Nb()),2&e){const e=b.ac();b.Ab(3),b.dc("ngIf",e.current)}}function P(e,n){if(1&e&&(b.Ob(0,"ion-select-option",14),b.nc(1),b.Nb()),2&e){const e=n.$implicit;b.dc("value",e.voiceURI),b.Ab(1),b.oc(e.name)}}function T(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-select",20),b.Wb("ionChange",function(n){return b.gc(e),b.ac(2).setVoice(n)}),b.mc(1,P,2,2,"ion-select-option",21),b.Nb()}if(2&e){const e=b.ac(2);b.dc("interfaceOptions",e.voiceOptions)("value",e.current.voice),b.Ab(1),b.dc("ngForOf",e.voices)}}function k(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-item"),b.Ob(1,"ion-icon",18),b.Wb("click",function(n){return b.gc(e),b.ac().speak(n)}),b.Nb(),b.Ob(2,"ion-label",6),b.nc(3,"Voice:"),b.Nb(),b.mc(4,T,2,3,"ion-select",19),b.Nb()}if(2&e){const e=b.ac();b.Ab(4),b.dc("ngIf",e.current&&e.voice)}}function E(e,n){if(1&e&&(b.Ob(0,"ion-select-option",14),b.nc(1),b.Nb()),2&e){const e=n.$implicit;b.dc("value",e.id),b.Ab(1),b.oc(e.fullName)}}function x(e,n){if(1&e){const e=b.Pb();b.Ob(0,"ion-select",22),b.Wb("ionChange",function(n){return b.gc(e),b.ac().setString("favoriteTeam",n)})("ngModelChange",function(n){return b.gc(e),b.ac().current.favoriteTeam=n}),b.mc(1,E,2,2,"ion-select-option",23),b.Nb()}if(2&e){const e=b.ac();b.dc("interfaceOptions",e.teamOptions)("ngModel",e.current.favoriteTeam),b.Ab(1),b.dc("ngForOf",e.teams)("ngForTrackBy",e.id)}}const{Device:j}=s.a,B=[{path:"",component:(()=>{class e{constructor(e,n,t,i,o,c){this.database=e,this.deploy=n,this.platform=t,this.settings=i,this.updateService=o,this.voiceService=c,this.loading=!0,this.betaEnabled=!1,this.devicePlatform="web",this.hasSpeech=!1,this.teamOptions={header:"Choose Your Team"},this.voiceOptions={header:"Choose a Voice"},this.id=l.a.trackById,this.hasSpeech=void 0!==window.speechSynthesis}ngOnInit(){return Object(r.a)(this,void 0,void 0,function*(){yield this.platform.ready(),console.debug("SettingsPage.ngOnInit()");try{const e=yield j.getInfo();this.devicePlatform=e.platform,console.debug("SettingsPage.ngOnInit(): platform="+this.devicePlatform)}catch(e){console.error("SettingsPage.ngOnInit(): failed to get device info:",e)}if("web"!==this.devicePlatform)try{const e=yield this.deploy.getConfiguration();this.betaEnabled="beta"===e.channel.toLowerCase(),console.debug("SettingsPage.ngOnInit(): betaEnabled="+this.betaEnabled)}catch(e){console.error("SettingsPage.ngOnInit(): failed to get deploy configuration:",e)}this.current=yield this.settings.getAll(),this.volume=Math.round(1e3*this.current.volume),this.teams=(yield this.database.teams()).sort((e,n)=>e.fullName<n.fullName?-1:e.fullName>n.fullName?1:0),this.voices=this.voiceService.voices(),this.voice=yield this.voiceService.voice(this.current.voice),this.loading=!1,console.debug("SettingsPage.onInit(): current settings=",this.current)})}setBetaEnabled(){return Object(r.a)(this,void 0,void 0,function*(){return yield this.settings.setBetaEnabled(this.current.betaEnabled)})}getTeamName(e){const n=this.teams.find(n=>n.id===e);return n?n.fullName:""}setBoolean(e){return Object(r.a)(this,void 0,void 0,function*(){return yield this.settings.setBoolean(e,this.current[e])})}setString(e,n){return Object(r.a)(this,void 0,void 0,function*(){return console.debug("setString: key=",e),console.debug("setString: ev=",n),yield this.settings.setString(e,this.current[e])})}setVolume(e){return Object(r.a)(this,void 0,void 0,function*(){return yield this.settings.setNumber("volume",e.detail.value/1e3)})}setVoice(e){var n,t;return Object(r.a)(this,void 0,void 0,function*(){(yield this.voiceService.voice(null===(n=null==e?void 0:e.detail)||void 0===n?void 0:n.value))?(yield this.settings.setVoice(e.detail.value),this.speak()):console.error("Unable to locate voice: "+(null===(t=null==e?void 0:e.detail)||void 0===t?void 0:t.value))})}speak(e){return Object(r.a)(this,void 0,void 0,function*(){return null==e||e.preventDefault(),null==e||e.stopPropagation(),this.voiceService.say("The commissioner is doing a great job!",{force:!0})})}setFavoriteTeam(e){return Object(r.a)(this,void 0,void 0,function*(){const n=this.teams.find(n=>n.id===e.value);this.settings.setFavoriteTeam(null==n?void 0:n.id)})}}return e.\u0275fac=function(n){return new(n||e)(b.Lb(u.a),b.Lb(d.a),b.Lb(c.Eb),b.Lb(g.a),b.Lb(f.a),b.Lb(h.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-settings"]],decls:44,vars:10,consts:[[3,"translucent"],["color","primary"],["slot","secondary"],[4,"ngIf"],["lines","none",1,"ion-text-wrap"],["lines","full"],[1,"ion-text-wrap"],["slot","end",3,"ngModel","ionChange","ngModelChange",4,"ngIf"],["min","0","max","1000","debounce","200","slot","end",3,"ngModel","ionChange","ngModelChange",4,"ngIf"],["id","bl-team-selector"],["class","ion-text-wrap","interface","action-sheet","okText","Choose","cancelText","Cancel",3,"interfaceOptions","ngModel","ionChange","ngModelChange",4,"ngIf"],["color","danger",4,"ngIf"],["slot","end",3,"ngModel","ionChange","ngModelChange"],["slot","start"],[3,"value"],["color","danger"],["slot","end","color","light",3,"click"],["min","0","max","1000","debounce","200","slot","end",3,"ngModel","ionChange","ngModelChange"],["name","volume-high-outline","slot","start",1,"ion-no-margin",2,"margin-right","0.5em",3,"click"],["class","ion-text-wrap","interface","action-sheet","okText","Choose","cancelText","Cancel",3,"interfaceOptions","value","ionChange",4,"ngIf"],["interface","action-sheet","okText","Choose","cancelText","Cancel",1,"ion-text-wrap",3,"interfaceOptions","value","ionChange"],[3,"value",4,"ngFor","ngForOf"],["interface","action-sheet","okText","Choose","cancelText","Cancel",1,"ion-text-wrap",3,"interfaceOptions","ngModel","ionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf","ngForTrackBy"]],template:function(e,n){1&e&&(b.Ob(0,"ion-header",0),b.Ob(1,"ion-toolbar",1),b.Ob(2,"ion-title"),b.nc(3,"Slettings"),b.Nb(),b.Ob(4,"ion-buttons",2),b.mc(5,m,2,0,"ion-button",3),b.Nb(),b.Nb(),b.Nb(),b.Ob(6,"ion-content"),b.Ob(7,"ion-list",4),b.mc(8,C,17,4,"span",3),b.Ob(9,"ion-list-header",5),b.Ob(10,"h3"),b.nc(11,"Interface"),b.Nb(),b.Nb(),b.Ob(12,"ion-item"),b.Ob(13,"ion-label",6),b.nc(14,"Reduce motion in effects?"),b.Nb(),b.mc(15,y,1,1,"ion-toggle",7),b.Nb(),b.Ob(16,"ion-item"),b.Ob(17,"ion-label",6),b.nc(18,"Always use dark mode?"),b.Nb(),b.mc(19,M,1,1,"ion-toggle",7),b.Nb(),b.Ob(20,"ion-list-header",5),b.Ob(21,"h3"),b.nc(22,"Audio"),b.Nb(),b.Nb(),b.Ob(23,"ion-item"),b.Ob(24,"ion-label",6),b.nc(25,"Enable Sound Effects?"),b.Nb(),b.mc(26,S,1,1,"ion-toggle",7),b.Nb(),b.Ob(27,"ion-item"),b.Ob(28,"ion-label",6),b.nc(29,"Volume:"),b.Nb(),b.mc(30,I,1,1,"ion-range",8),b.Nb(),b.mc(31,w,4,1,"ion-item",3),b.mc(32,k,5,1,"ion-item",3),b.Ob(33,"ion-list-header",5),b.Ob(34,"h3"),b.nc(35,"Teams"),b.Nb(),b.Nb(),b.Ob(36,"ion-item",9),b.Ob(37,"ion-label",6),b.Ob(38,"ion-label"),b.Ob(39,"h4"),b.nc(40,"Choose Your Team:"),b.Nb(),b.Nb(),b.Ob(41,"ion-note"),b.nc(42,"Your team is first in the live feed."),b.Nb(),b.Nb(),b.mc(43,x,2,4,"ion-select",10),b.Nb(),b.Nb(),b.Nb()),2&e&&(b.dc("translucent",!0),b.Ab(5),b.dc("ngIf",n.loading),b.Ab(3),b.dc("ngIf","web"!==n.devicePlatform),b.Ab(7),b.dc("ngIf",n.current),b.Ab(4),b.dc("ngIf",n.current),b.Ab(7),b.dc("ngIf",n.current),b.Ab(4),b.dc("ngIf",n.current),b.Ab(1),b.dc("ngIf",n.hasSpeech),b.Ab(1),b.dc("ngIf",n.hasSpeech),b.Ab(11),b.dc("ngIf",n.current&&n.teams))},directives:[c.y,c.wb,c.ub,c.i,i.t,c.r,c.L,c.M,c.E,c.K,c.S,c.h,c.mb,c.vb,c.a,o.j,o.m,c.T,c.W,c.Hb,c.z,c.hb,i.s,c.ib],styles:[""]}),e})()}];let F=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(n){return new(n||e)},imports:[[a.l.forChild(B)],a.l]}),e})(),W=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(n){return new(n||e)},imports:[[i.c,o.e,c.yb,F]]}),e})()}}]);