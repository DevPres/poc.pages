"use strict";(self.webpackChunkpoc_papa=self.webpackChunkpoc_papa||[]).push([[988],{5988:($,p,s)=>{s.r(p),s.d(p,{LoginModule:()=>L});var g=s(9808),l=s(4100),t=s(5e3);let C=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:1,vars:0,template:function(e,o){1&e&&t._UZ(0,"router-outlet")},directives:[l.lC],styles:[""]}),n})();var v=s(7579),y=s(6063);class h extends v.x{constructor(i=1/0,e=1/0,o=y.l){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){const{isStopped:e,_buffer:o,_infiniteTimeWindow:a,_timestampProvider:r,_windowTime:c}=this;e||(o.push(i),!a&&o.push(r.now()+c)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(i),{_infiniteTimeWindow:o,_buffer:a}=this,r=a.slice();for(let c=0;c<r.length&&!i.closed;c+=o?1:2)i.next(r[c]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){const{_bufferSize:i,_timestampProvider:e,_buffer:o,_infiniteTimeWindow:a}=this,r=(a?1:2)*i;if(i<1/0&&r<o.length&&o.splice(0,o.length-r),!a){const c=e.now();let m=0;for(let u=1;u<o.length&&o[u]<=c;u+=2)m=u;m&&o.splice(0,m+1)}}}var M=s(2722),d=s(8505),x=s(8372);var A=s(5139),O=s(9224),f=s(7322),T=s(7531),b=s(7423);const Z=[{path:"",component:C,children:[{path:"",pathMatch:"full",component:(()=>{class n{constructor(e,o){this.spinnerService=e,this.router=o,this.company_name="Azienda",this.login$$=new h,this.destroy$$=new h}ngOnInit(){this.login$$.pipe((0,M.R)(this.destroy$$),(0,d.b)(()=>this.spinnerService.start()),(0,x.b)(1e3),(0,d.b)(()=>this.router.navigateByUrl("lists"))).subscribe(()=>this.spinnerService.stop())}submit(){this.login$$.next()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(A.V),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:17,vars:1,consts:[[1,"base-wrapper"],[1,"auth-card"],[1,"greetings-box"],["src","assets/logo.png",1,"logo"],[1,"title"],[1,"login-box"],["appearance","outline"],["matInput","","formControlName","test"],["mat-button","",1,"accent","bg-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t.TgZ(6,"div",5)(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Username"),t.qZA(),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"mat-form-field",6)(12,"mat-label"),t._uU(13,"Password"),t.qZA(),t._UZ(14,"input",7),t.qZA()(),t.TgZ(15,"button",8),t.NdJ("click",function(){return o.submit()}),t._uU(16,"Continua"),t.qZA()()()),2&e&&(t.xp6(5),t.Oqu(o.company_name.toUpperCase()))},directives:[O.a8,f.KE,f.hX,T.Nt,b.lW],styles:[".auth-card[_ngcontent-%COMP%]{width:100%;height:500px;margin:auto;display:flex;flex-direction:column;gap:3%}.auth-card[_ngcontent-%COMP%]   .greetings-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.auth-card[_ngcontent-%COMP%]   .greetings-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:65px;height:55px}.auth-card[_ngcontent-%COMP%]   .greetings-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;margin:0}.auth-card[_ngcontent-%COMP%]   .login-box[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width: 480px){.auth-card[_ngcontent-%COMP%]{width:360px}}"]}),n})()}]}];let S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),n})();var U=s(9475),w=s(4466);let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[U.q,g.ez,S,w.m]]}),n})()}}]);