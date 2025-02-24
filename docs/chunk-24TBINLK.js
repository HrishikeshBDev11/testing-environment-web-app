import{c as D}from"./chunk-LK7GZ545.js";import{f as V,h as P,i as B,j as y}from"./chunk-3RSPD7AX.js";import{n as T,t as E}from"./chunk-N4ANQEKW.js";import{Db as v,Eb as d,Ma as s,Na as k,Pb as c,R as S,Ya as p,Za as b,ca as g,cb as f,da as _,ka as M,nb as m,qb as I,tb as i,ub as r,vb as a,wb as w,xb as x,zb as h}from"./chunk-ZPID5U3R.js";var R=(()=>{class t{constructor(){this.hideSidebar=new M}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-sidebar"]],outputs:{hideSidebar:"hideSidebar"},standalone:!1,decls:7,vars:0,consts:[[1,"d-flex","flex-column",2,"min-height","100vh","background-color","#D1E9F6"],[1,"side-bar-item"],["routerLinkActive","active","routerLink","ref-doctor"],["routerLinkActive","active","routerLink","app-version"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1)(2,"ul")(3,"li",2),c(4,"Ref Doctor List"),r(),i(5,"li",3),c(6,"App Version"),r()()()())},dependencies:[P,B],styles:[".active[_ngcontent-%COMP%]{background-color:#03aed2;color:#fff}ul[_ngcontent-%COMP%]{padding:0;margin:0}li[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}li[_ngcontent-%COMP%]{padding:4%;font-size:110%;font-weight:600}"]})}}return t})();function W(t,l){t&1&&a(0,"app-sidebar",6)}function z(t,l){if(t&1){let e=h();i(0,"button",7),v("click",function(){g(e);let o=d(2);return _(o.showSideBar=!0)}),a(1,"img",8),r()}}function q(t,l){if(t&1){let e=h();i(0,"button",9),v("click",function(){g(e);let o=d(2);return _(o.showSideBar=!1)}),a(1,"img",10),r()}}function G(t,l){if(t&1&&(w(0),i(1,"div",1),f(2,W,1,0,"app-sidebar",2),i(3,"div"),a(4,"router-outlet"),i(5,"div",3),f(6,z,2,0,"button",4)(7,q,2,0,"button",5),r()()(),x()),t&2){let e=d();s(2),m("ngIf",e.showSideBar),s(),I(e.showSideBar?"width: 80%; position: relative;":"width: 100%; position: relative;"),s(3),m("ngIf",!e.showSideBar),s(),m("ngIf",e.showSideBar)}}function H(t,l){t&1&&a(0,"app-sidebar",14)}function J(t,l){t&1&&(i(0,"div",14),a(1,"router-outlet"),r())}function K(t,l){if(t&1){let e=h();i(0,"button",7),v("click",function(){g(e);let o=d(2);return _(o.showSideBar=!0)}),a(1,"img",8),r()}}function Q(t,l){if(t&1){let e=h();i(0,"button",9),v("click",function(){g(e);let o=d(2);return _(o.showSideBar=!1)}),a(1,"img",10),r()}}function U(t,l){if(t&1&&(w(0),i(1,"div",11),f(2,H,1,0,"app-sidebar",12)(3,J,2,0,"div",12),i(4,"div",13),f(5,K,2,0,"button",4)(6,Q,2,0,"button",5),r()(),x()),t&2){let e=d();s(2),m("ngIf",e.showSideBar),s(),m("ngIf",!e.showSideBar),s(2),m("ngIf",!e.showSideBar),s(),m("ngIf",e.showSideBar)}}var L=(()=>{class t{constructor(e){this._commonService=e,this.showSideBar=!0,this.sidebarWidth="",this.formWidth=""}ngOnInit(){}validPlatform(e){return this._commonService.checkPlatform(e)}static{this.\u0275fac=function(n){return new(n||t)(k(D))}}static{this.\u0275cmp=p({type:t,selectors:[["app-settings"]],standalone:!1,decls:2,vars:2,consts:[[4,"ngIf"],[1,"d-flex","flex-row"],["style","width: 20%;",4,"ngIf"],[2,"position","absolute","bottom","50%","left","0%"],["type","button","class","btn btn-primary p-2 border-0 shadow-lg rounded-0",3,"click",4,"ngIf"],["type","button","class","btn btn-danger p-2 border-0 shadow-lg rounded-0",3,"click",4,"ngIf"],[2,"width","20%"],["type","button",1,"btn","btn-primary","p-2","border-0","shadow-lg","rounded-0",3,"click"],["src","assets/images/show_sidebar.png","height","30px","alt","","srcset",""],["type","button",1,"btn","btn-danger","p-2","border-0","shadow-lg","rounded-0",3,"click"],["src","assets/images/cross.png","height","30px","alt","","srcset",""],[1,"d-flex","flex-row","p-0","m-0"],["style","width: 100%;",4,"ngIf"],[2,"position","absolute","bottom","0%","left","0%"],[2,"width","100%"]],template:function(n,o){n&1&&f(0,G,8,5,"ng-container",0)(1,U,7,4,"ng-container",0),n&2&&(m("ngIf",o.validPlatform("mac")||o.validPlatform("windows")),s(),m("ngIf",o.validPlatform("iphone")||o.validPlatform("ipad")||o.validPlatform("andriod")))},dependencies:[T,V,R],encapsulation:2})}}return t})();var A=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-app-version"]],decls:6,vars:0,consts:[[1,"d-flex","justify-content-center","flex-column","align-items-center",2,"min-width","100%","max-width","100%","min-height","80vh"],["src","assets/images/app-version.png","height","200px","alt","","srcset",""]],template:function(n,o){n&1&&(i(0,"div",0),a(1,"img",1),i(2,"strong"),c(3,"App Ver "),i(4,"i"),c(5,"2024.10.0003"),r()()())},encapsulation:2})}}return t})();var C=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-common-list"]],decls:2,vars:0,template:function(n,o){n&1&&(i(0,"p"),c(1,"common-list works!"),r())},encapsulation:2})}}return t})();var F=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-reset-password"]],decls:2,vars:0,template:function(n,o){n&1&&(i(0,"p"),c(1,"reset-password works!"),r())},encapsulation:2})}}return t})();var X=[{path:"",component:L,children:[{path:"",redirectTo:"app-version",pathMatch:"full"},{path:"ref-doctor",loadComponent:()=>import("./chunk-GURHXGAN.js").then(t=>t.ReferralDoctorComponent)},{path:"list/path-test",component:C},{path:"list/bill-charges",component:C},{path:"list/user",component:C},{path:"list/patient",component:C},{path:"reset-password",component:F},{path:"app-version",component:A}]}],O=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=S({imports:[y.forChild(X),y]})}}return t})();var vt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=b({type:t})}static{this.\u0275inj=S({imports:[E,O]})}}return t})();export{vt as SettingsModule};
