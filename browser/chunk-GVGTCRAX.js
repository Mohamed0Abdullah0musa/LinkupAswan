import{B as c,C as p,E as u,Fa as Y,G as d,Ga as $,Ha as y,Ia as x,Ma as I,N as e,Na as g,O as t,Oa as F,P as a,Pa as w,Qa as Q,S as B,T as O,Ta as S,U as j,Va as K,Wa as T,Y as n,Za as L,cb as D,gb as U,ha as _,hb as k,n as f,pa as H,pb as z,ra as R,s as q,t as G,z as V}from"./chunk-SAXKXHZH.js";function ne(r,i){if(r&1){let b=B();e(0,"ul",25)(1,"li",26)(2,"a",27)(3,"div"),a(4,"img",28),t()(),e(5,"ul",29)(6,"li")(7,"a",30),a(8,"i",31),n(9," Profile "),t()(),e(10,"li"),a(11,"hr",32),t(),e(12,"li")(13,"a",33),O("click",function(){q(b);let l=j();return G(l.logout())}),a(14,"i",34),n(15," Log Out"),t()()()()()}if(r&2){let b=j();c(4),d("src",b.urlImg+b.profile.ProfilimgPath?b.urlImg+b.profile.ProfilimgPath:b.urlImg+b.profile.Profilimg,V)}}function ie(r,i){r&1&&(e(0,"a",35),n(1,"Login"),t())}function oe(r,i){r&1&&(e(0,"a",36),n(1,"Register"),t())}var X=(()=>{let i=class i{constructor(s,l,o){this.myserve=s,this.rout=l,this.auth=o,this.isloggedUser=!1,this.urlImg="http://localhost:5227/",this.auth.isloggedUserSubject.subscribe(m=>{console.log(m),this.isloggedUser=m.Role!=null?m.Role!=="":!1,console.log(this.isloggedUser)}),this.myserve.getUserByID().subscribe({next:m=>{this.profile=m,console.log(this.profile),this.auth.isloggedUserSubject.next({FullName:m.FullName,Role:m.Role,Profilimg:m.ProfilimgPath})},error:m=>{console.log(m)}})}logout(){this.auth.userlogout(),this.rout.navigateByUrl("/home")}};i.\u0275fac=function(l){return new(l||i)(p(k),p(y),p(U))},i.\u0275cmp=f({type:i,selectors:[["app-navbar"]],decls:44,vars:3,consts:[[1,"navbar-light","header-sticky"],[1,"navbar","navbar-expand-xl"],[1,"container"],["routerLink","/",1,"navbar-brand"],["src","logo2.png","alt","logo","height","100",1,"light-mode-item","navbar-brand-item"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarCollapse","aria-controls","navbarCollapse","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","ms-auto","ms-sm-0","p-0","p-sm-2"],[1,"navbar-toggler-animation"],[1,"d-none","d-sm-inline-block","small"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarCategoryCollapse","aria-controls","navbarCategoryCollapse","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","ms-sm-auto","mx-3","me-md-0","p-0","p-sm-2"],[1,"bi","bi-grid-3x3-gap-fill","fa-fw"],["id","navbarCollapse",1,"navbar-collapse","collapse"],[1,"navbar-nav","navbar-nav-scroll","me-auto"],[1,"nav-item"],["routerLink","/hotel/hotlelist",1,"nav-link"],["routerLink","/apartment/apartment-list",1,"nav-link"],["routerLink","/tourist/tourguidelist",1,"nav-link"],["routerLink","/tourist/carrequest",1,"nav-link"],["id","navbarCategoryCollapse",1,"navbar-collapse","collapse"],[1,"navbar-nav","navbar-nav-scroll","nav-pills-primary-soft","text-center","ms-auto","p-2","p-xl-0"],["routerLink","/aboutus",1,"nav-link","active"],["routerLink","/contact",1,"nav-link"],["routerLink","/faq",1,"nav-link"],["class","navbar-nav ms-auto mb-2 mb-lg-0 profile-menu",4,"ngIf"],["class","btn btn-primary me-3","routerLink","/login/home",4,"ngIf"],["class","btn btn-primary","routerLink","/register",4,"ngIf"],[1,"navbar-nav","ms-auto","mb-2","mb-lg-0","profile-menu"],[1,"nav-item","dropdown"],["id","navbarDropdown","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["width","40","height","40","alt","Profile Picture",1,"avatar-img","rounded-circle","border","border-2","border-white",3,"src"],["aria-labelledby","navbarDropdown",1,"dropdown-menu"],["routerLink","/editprofile",1,"dropdown-item"],[1,"fas","fa-sliders-h","fa-fw"],[1,"dropdown-divider"],[1,"dropdown-item",3,"click"],[1,"fas","fa-sign-out-alt","fa-fw"],["routerLink","/login/home",1,"btn","btn-primary","me-3"],["routerLink","/register",1,"btn","btn-primary"]],template:function(l,o){l&1&&(e(0,"header",0)(1,"nav",1)(2,"div",2)(3,"a",3),a(4,"img",4),t(),e(5,"button",5)(6,"span",6),a(7,"span")(8,"span")(9,"span"),t(),e(10,"span",7),n(11,"Menu"),t()(),e(12,"button",8),a(13,"i",9),e(14,"span",7),n(15,"Category"),t()(),e(16,"div",10)(17,"ul",11)(18,"li",12)(19,"a",13),n(20,"Hotel List"),t()(),e(21,"li",12)(22,"a",14),n(23,"Aparments List"),t()(),e(24,"li",12)(25,"a",15),n(26,"All Tourguides"),t()(),e(27,"li",12)(28,"a",16),n(29,"Request a Cap"),t()()()(),e(30,"div",17)(31,"ul",18)(32,"li",12)(33,"a",19),n(34,"About Us"),t()(),e(35,"li",12)(36,"a",20),n(37,"Contact"),t()(),e(38,"li",12)(39,"a",21),n(40,"FAQ"),t()()(),u(41,ne,16,1,"ul",22)(42,ie,2,0,"a",23)(43,oe,2,0,"a",24),t()()()()),l&2&&(c(41),d("ngIf",o.isloggedUser),c(),d("ngIf",!o.isloggedUser),c(),d("ngIf",!o.isloggedUser))},dependencies:[R,x]});let r=i;return r})();var J=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-footer"]],decls:125,vars:0,consts:[[1,"footer-section"],[1,"container"],[1,"footer-cta","pt-5"],[1,"row"],[1,"col-xl-4","col-md-4","mb-30"],[1,"single-cta"],[1,"fas","fa-map-marker-alt"],[1,"cta-text"],[1,"fas","fa-phone"],[1,"far","fa-envelope-open"],[1,"footer-content","pt-5","pb-1"],[1,"col-xl-4","col-lg-4","mb-50"],[1,"footer-widget"],[1,"footer-logo"],["href","index.html"],["height","100","src","logo2.png","alt","logo",1,"light-mode-item","navbar-brand-item"],[1,"footer-text"],[1,"footer-social-icon"],[1,"social_icon"],["href","#"],[1,"fa-brands","fa-facebook-f"],[1,"fa-brands","fa-twitter"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-youtube"],[1,"col-xl-4","col-lg-4","col-md-6","mb-30"],[1,"footer-widget-heading"],[1,"nav-item"],["routerLink","/faq",1,"nav-link","text-white"],["routerLink","/contact",1,"nav-link","text-white"],["routerLink","/about",1,"nav-link","text-white"],["href","#",1,"nav-link","text-white"],[1,"col-xl-4","col-lg-4","col-md-6","mb-50"],[1,"footer-text","mb-25"],[1,"subscribe-form"],["action","#"],["type","text","placeholder","Email Address"],[1,"fab","fa-telegram-plane"],[1,"copyright-area"],[1,"col-xl-6","col-lg-6","text-center","text-lg-left"],[1,"copyright-text"],[1,"col-xl-6","col-lg-6","d-none","d-lg-block","text-right"],[1,"footer-menu"],["routerLink","/hotel/hotlelist",1,"nav-link","text-secondary"],[1,"fas","fa-hotel","me-2"],["href","#",1,"nav-link","text-secondary"],[1,"fas","fa-building","me-2"],[1,"fas","fa-globe-americas","me-2"],["routerLink","/tourist/carrequest",1,"nav-link","text-secondary"],[1,"fas","fa-taxi","me-2"]],template:function(l,o){l&1&&(e(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),a(6,"i",6),e(7,"div",7)(8,"h4"),n(9,"Location"),t(),e(10,"span"),n(11,"Aswan"),t()()()(),e(12,"div",4)(13,"div",5),a(14,"i",8),e(15,"div",7)(16,"h4"),n(17,"Call us"),t(),e(18,"span"),n(19,"+91 1234567890"),t()()()(),e(20,"div",4)(21,"div",5),a(22,"i",9),e(23,"div",7)(24,"h4"),n(25,"Mail us"),t(),e(26,"span"),n(27,"mail.com"),t()()()()()(),e(28,"div",10)(29,"div",3)(30,"div",11)(31,"div",12)(32,"div",13)(33,"a",14),a(34,"img",15),t()(),e(35,"div",16)(36,"p"),n(37,"Traveling has become simpler with us.. Enjoy "),t()(),e(38,"div",17)(39,"span"),n(40,"Follow us"),t(),e(41,"ul",18)(42,"li")(43,"a",19),a(44,"i",20),t()(),e(45,"li")(46,"a",19),a(47,"i",21),t()(),e(48,"li")(49,"a",19),a(50,"i",22),t()(),e(51,"li")(52,"a",19),a(53,"i",23),t()()()()()(),e(54,"div",24)(55,"div",12)(56,"div",25)(57,"h3"),n(58,"Useful Links"),t()(),e(59,"ul")(60,"li",26)(61,"a",27),n(62,"FAQ"),t()(),e(63,"li",26)(64,"a",28),n(65,"Contact Us"),t()(),e(66,"li",26)(67,"a",29),n(68,"About Us"),t()(),e(69,"li",26)(70,"a",30),n(71,"Sign up"),t()(),e(72,"li",26)(73,"a",30),n(74,"Privacy Policy"),t()(),e(75,"li",26)(76,"a",30),n(77,"Terms"),t()(),e(78,"li",26)(79,"a",30),n(80,"Cookie"),t()(),e(81,"li",26)(82,"a",30),n(83,"Support"),t()()()()(),e(84,"div",31)(85,"div",12)(86,"div",25)(87,"h3"),n(88,"Subscribe"),t()(),e(89,"div",32)(90,"p"),n(91,"Don\u2019t miss to subscribe to our new feeds, kindly fill the form below."),t()(),e(92,"div",33)(93,"form",34),a(94,"input",35),e(95,"button"),a(96,"i",36),t()()()()()()()(),e(97,"div",37)(98,"div",1)(99,"div",3)(100,"div",38)(101,"div",39)(102,"p"),n(103,"Copyright \xA9 2024, All Right Reserved "),e(104,"a",19),n(105,"LINKUPASWAN"),t()()()(),e(106,"div",40)(107,"div",41)(108,"ul")(109,"li",26)(110,"a",42),a(111,"i",43),n(112,"Hotel"),t()(),e(113,"li",26)(114,"a",44),a(115,"i",45),n(116,"Apartment"),t()(),e(117,"li",26)(118,"a",44),a(119,"i",46),n(120,"Tour"),t()(),e(121,"li",26)(122,"a",47),a(123,"i",48),n(124,"Cabs"),t()()()()()()()()())},dependencies:[x,S,w,Q],styles:['.footer-section[_ngcontent-%COMP%]{background:#151414;position:relative}.footer-cta[_ngcontent-%COMP%]{border-bottom:1px solid #373636;padding-bottom:8px!important}.single-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ff5e14;font-size:30px;float:left;margin-top:8px}.cta-text[_ngcontent-%COMP%]{padding-left:15px;display:inline-block}.cta-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:600;margin-bottom:2px}.cta-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#757575;font-size:15px}.footer-content[_ngcontent-%COMP%]{position:relative;z-index:2}.footer-pattern[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:330px;background-size:cover;background-position:100% 100%}.footer-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:170px}.footer-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:14px;font-size:14px;color:#7e7e7e;line-height:21px}.footer-social-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;display:block;font-size:20px;font-weight:700;font-family:Poppins,sans-serif;margin-bottom:20px}.footer-social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;font-size:16px;margin-right:15px}.footer-social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{height:40px;width:40px;text-align:center;line-height:38px;border-radius:50%}.facebook-bg[_ngcontent-%COMP%]{background:#3b5998}.twitter-bg[_ngcontent-%COMP%]{background:#55acee}.google-bg[_ngcontent-%COMP%]{background:#dd4b39}.footer-widget-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:600;margin-bottom:40px;position:relative}.footer-widget-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:-15px;height:2px;width:50px;background:#223ee4}.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;width:50%;margin-bottom:12px}.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff5e14}.footer-widget[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-transform:capitalize}.subscribe-form[_ngcontent-%COMP%]{position:relative;overflow:hidden}.subscribe-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:14px 28px;background:#2e2e2e;border:1px solid #2e2e2e;color:#fff}.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;background:#223ee4;padding:13px 20px;border:1px solid #223ee4;top:0}.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:22px;transform:rotate(-6deg)}.copyright-area[_ngcontent-%COMP%]{background:#202020;padding:25px 0}.copyright-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:14px;color:#878787}.copyright-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#223ee4}.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-left:20px}.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#ff5e14}.footer-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;color:#878787}.footer-cta[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%]:nth-child(1)   .single-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;color:#ff5e14}.footer-cta[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%]:nth-child(1)   .single-cta[_ngcontent-%COMP%]   .cta-text[_ngcontent-%COMP%]{padding-left:32px}.footer-cta[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%]:nth-child(2)   .single-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#14ffa7}.footer-cta[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-xl-4[_ngcontent-%COMP%]:nth-child(3)   .single-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:gold}.footer-social-icon[_ngcontent-%COMP%]   .social_icon[_ngcontent-%COMP%]{text-align:left}.footer-social-icon[_ngcontent-%COMP%]   .social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block!important;width:inherit}.footer-social-icon[_ngcontent-%COMP%]   .social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px;line-height:39px}.footer-social-icon[_ngcontent-%COMP%]   .social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:40px;height:40px}.social_icon[_ngcontent-%COMP%]{text-align:right;margin:3px 0 0}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:0 5px}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;width:25px;height:25px;background:#fff;color:#000;text-align:center;border-radius:100%;transition:.2s ease-in-out}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:15px;line-height:20px}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%]{background:#4267b2;color:#fff}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]{background:#1da1f2;color:#fff}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]{background:#f09433;background:-moz-linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);background:-webkit-linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#f09433",endColorstr="#bc1888",GradientType=1);color:#fff}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]{background:red;color:#fff}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1):hover   a[_ngcontent-%COMP%]{background:#fff;color:#4267b2}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2):hover   a[_ngcontent-%COMP%]{background:#fff;color:#1da1f2}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3):hover   a[_ngcontent-%COMP%]{background:#fff;color:#bc1888}.social_icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4):hover   a[_ngcontent-%COMP%]{background:#fff;color:red}form[_ngcontent-ng-c2008430290][_ngcontent-%COMP%]   button[_ngcontent-ng-c2008430290][_ngcontent-%COMP%]{position:absolute;right:0;background:#223ee4;padding:13px 20px;border:1px solid #253ab5;top:0}']});let r=i;return r})();var ue=(()=>{let i=class i{constructor(){}ngOnInit(){}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-main-layout"]],decls:3,vars:0,template:function(l,o){l&1&&a(0,"app-navbar")(1,"router-outlet")(2,"app-footer")},dependencies:[$,X,J]});let r=i;return r})();var he=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["app-not-found"]],decls:14,vars:0,consts:[[1,"container"],[1,"row","align-items-center"],[1,"col-md-10","text-center","mx-auto"],["src","error.jpg","alt","",1,"h-lg-500px","mb-4",2,"width","500px"],[1,"display-1","text-primary","mb-0"],[1,"mb-4"],["href","index.html",1,"btn","btn-light","mb-0"]],template:function(l,o){l&1&&(e(0,"main")(1,"section")(2,"div",0)(3,"div",1)(4,"div",2),a(5,"img",3),e(6,"h1",4),n(7,"404"),t(),e(8,"h2"),n(9,"Oh no, something went wrong!"),t(),e(10,"p",5),n(11,"Either something went wrong or this page doesn't exist anymore."),t(),e(12,"a",6),n(13,"Take me to Homepage"),t()()()()()())},styles:["body[_ngcontent-%COMP%]{background-color:#f4f4f4;font-family:Arial,sans-serif;margin:0;padding:0;height:100vh;display:flex;align-items:center;justify-content:center}.container[_ngcontent-%COMP%]{text-align:center}img[_ngcontent-%COMP%]{max-width:100%;height:auto}.display-1[_ngcontent-%COMP%]{font-size:8rem;color:#dc3545;margin-bottom:0}h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#333;margin:20px 0}p[_ngcontent-%COMP%]{font-size:1.2rem;color:#666;margin-bottom:30px}.btn-light[_ngcontent-%COMP%]{background-color:#f5f5f6;border-color:#f5f5f6;color:#0b0a12}.btn[_ngcontent-%COMP%]{letter-spacing:.5px;position:relative;overflow:hidden;outline:0;margin-bottom:6px}.btn-light[_ngcontent-%COMP%]:hover{--bs-btn-color: #000;--bs-btn-bg: #f5f5f6;--bs-btn-border-color: #f5f5f6;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #d0d0d1;--bs-btn-hover-border-color: #c4c4c5;--bs-btn-focus-shadow-rgb: 208, 208, 209;--bs-btn-active-color: #000;--bs-btn-active-bg: #c4c4c5;--bs-btn-active-border-color: #b8b8b9;--bs-btn-active-shadow: none;--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #f5f5f6;--bs-btn-disabled-border-color: #f5f5f6}.btn[_ngcontent-%COMP%]{--bs-btn-padding-x: 1rem;--bs-btn-padding-y: .5rem;--bs-btn-font-family: ;--bs-btn-font-size: 1rem;--bs-btn-font-weight: 700;--bs-btn-line-height: 1.5;--bs-btn-color: var(--bs-body-color);--bs-btn-bg: transparent;--bs-btn-border-width: 1px;--bs-btn-border-color: transparent;--bs-btn-border-radius: .5rem;--bs-btn-hover-border-color: transparent;--bs-btn-box-shadow: none;--bs-btn-disabled-opacity: .65;--bs-btn-focus-box-shadow: 0 0 0 0 rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.btn-light[_ngcontent-%COMP%]:hover{background:#b8b8b9!important;border-color:var(--bs-gray-200);color:var(--bs-gray-900)}.btn-light[_ngcontent-%COMP%]{background:#f5f5f6!important;border-color:var(--bs-gray-200);color:var(--bs-gray-900)}.text-primary[_ngcontent-%COMP%]{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}@media (min-width: 1200px){.display-1[_ngcontent-%COMP%]{font-size:6rem}}.display-1[_ngcontent-%COMP%]{font-size:calc(1.725rem + 5.7vw);font-weight:700;line-height:1.25}@media (min-width: 1200px){h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{font-size:3.5rem}}h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{font-size:calc(1.475rem + 2.7vw)}h6[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], .h1[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem;font-family:Poppins,sans-serif;font-weight:700;line-height:1.25;color:var(--bs-heading-color)}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}@media (min-width: 1200px){h2[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%]{font-size:3rem}}.mb-4[_ngcontent-%COMP%]{margin-bottom:1.6rem!important}img[_ngcontent-ng-c1161830624][_ngcontent-%COMP%]{max-width:50%;height:auto}"]});let r=i;return r})();var xe=(()=>{let i=class i{constructor(s,l,o,m,h,v){this.fb=s,this.myLoginServ=l,this.tost=o,this.rout=m,this.auth=h,this.activeRoute=v,this.ReturnUrl="",this.activeRoute.params.subscribe(C=>{this.ReturnUrl=C.url}),this.loginForm=this.fb.group({LoginMethod:["",[g.required,g.minLength(8),g.maxLength(150)]],Password:["",[g.required,g.pattern(/^.{8,}$/)]]})}onSubmit(){this.loginForm.valid?(console.log("Form Submitted",this.loginForm.value),this.myLoginServ.Login(this.loginForm.value).subscribe({next:s=>{if(console.log(s),this.tost.success(s.Message),s.Success==!0){let l={FullName:s.Result.FullName,Profilimg:s.Result.profilimg,Role:s.Result.Role};console.log("user.....",l),this.auth.userlogin(s.Result.Token,l),console.log(l.Role),l.Role=="HotelOwner"?this.rout.navigateByUrl("/hotel/owner/home"):l.Role=="ApartmentOwner"?this.rout.navigateByUrl("/apartment/owner/home"):l.Role=="Driver"?this.rout.navigateByUrl("/driver/home"):l.Role=="TourGuide"?this.rout.navigateByUrl("/tourguide/dashboard"):l.Role=="Admin"?this.rout.navigateByUrl("/admin"):this.rout.navigateByUrl(this.ReturnUrl)}},error:s=>{console.log(s),this.tost.success(s.Message)}})):console.log("Form is not valid")}};i.\u0275fac=function(l){return new(l||i)(p(D),p(k),p(z),p(y),p(U),p(Y))},i.\u0275cmp=f({type:i,selectors:[["app-login-tourist"]],decls:23,vars:1,consts:[[1,"register-container","d-flex","justify-content-center","align-items-center",2,"min-height","100vh","background","url('Things-to-do-in-Aswan.jpg.optimal.jpg') no-repeat center center/cover","background-size","cover"],[1,"row","m-5","p-3",2,"background","rgb(255, 255, 255)","padding","2rem","border-radius","15px","max-width","800px","width","100%","backdrop-filter","blur(10px)","border","1px solid rgba(255, 255, 255, 0.2)","box-shadow","0 4px 30px rgba(0, 0, 128, 0.2)","color","#fff"],[1,"container","col-md-6"],[1,"img-circle","mb-4","text-center"],["href","#"],["src","logo2.png","alt","Logo",1,"w-50",2,"filter","drop-shadow(0 0 5px rgba(0, 170, 255, 0.7))","text-align","center"],[1,"text-center","text-primary"],[1,"mt-4",3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","LoginMethod",1,"text-primary"],["id","LoginMethod","formControlName","LoginMethod","type","email","placeholder","Enter your email",1,"form-control"],[1,"form-group","mb-4"],["for","Password",1,"text-primary"],["id","Password","formControlName","Password","type","password","placeholder","Enter your password",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100"],[1,"text-primary","text-center"],["routerLink","/register"]],template:function(l,o){l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),a(5,"img",5),t()(),e(6,"h3",6),n(7,"Login"),t(),e(8,"form",7),O("ngSubmit",function(){return o.onSubmit()}),e(9,"div",8)(10,"label",9),n(11,"Email"),t(),a(12,"input",10),t(),e(13,"div",11)(14,"label",12),n(15,"Password"),t(),a(16,"input",13),t(),e(17,"button",14),n(18,"Login"),t(),e(19,"p",15),n(20,"Don't have an account? "),e(21,"a",16),n(22,"Register"),t()()()()()()),l&2&&(c(8),d("formGroup",o.loginForm))},dependencies:[x,S,I,F,w,T,L]});let r=i;return r})();var E=(r,i)=>({"is-invalid":r,"is-valid":i});function se(r,i){r&1&&(e(0,"div",38),n(1,"Please select a role."),t())}function me(r,i){r&1&&(e(0,"div",38),n(1,"Full Name is required and should be at least 2 characters."),t())}function ce(r,i){r&1&&(e(0,"div",38),n(1,"National ID must be 14 digits."),t())}function de(r,i){r&1&&(e(0,"div",38),n(1,"Username must be exactly 8 alphanumeric characters."),t())}function ge(r,i){r&1&&(e(0,"div",38),n(1,"Please enter a valid email."),t())}function pe(r,i){r&1&&(e(0,"div",38),n(1,"Password must be at least 8 characters."),t())}function fe(r,i){r&1&&(e(0,"div",38),n(1,"Please confirm your password."),t())}var Me=(()=>{let i=class i{constructor(s,l,o,m){this.myRegesterServ=s,this.fb=l,this.rout=o,this.toastr=m,this.form=this.fb.group({FullName:["",[g.required,g.minLength(2)]],NationalID:["",[g.required,g.pattern(/^\d{14}$/)]],UserName:["",[g.required,g.pattern(/^[a-zA-Z0-9]{8,10}$/)]],Email:["",[g.required,g.email]],Password:["",[g.required,g.pattern(/^.{8,}$/)]],ConfirmPassword:["",[g.required,g.pattern(/^.{8,}$/)]],Role:["",g.required]})}onSubmit(){console.log("Form Submitted successfully",this.form.value),this.form.valid&&(console.log("Form Submitted successfully2",this.form.value),this.myRegesterServ.Register(this.form.value).subscribe({next:s=>{console.log(s),this.showSuccess(),this.rout.navigateByUrl("/login/home")},error:s=>{console.log(s)}})),console.log("Successfully")}passwordMatchValidator(s){return s.get("Password")?.value===s.get("ConfirmPassword")?.value?null:{mismatch:!0}}isFieldInvalid(s){return this.form.get(s)?.invalid&&(this.form.get(s)?.dirty||this.form.get(s)?.touched)||!1}showSuccess(){this.toastr.success("Register Done Successfully, Login Now")}showError(){this.toastr.error("Not Valid Data")}};i.\u0275fac=function(l){return new(l||i)(p(k),p(D),p(y),p(z))},i.\u0275cmp=f({type:i,selectors:[["app-registration-tourist"]],decls:64,vars:33,consts:[[1,"register-container","d-flex","justify-content-center","align-items-center",2,"min-height","100vh","background","url('Things-to-do-in-Aswan.jpg.optimal.jpg') no-repeat center center/cover"],[1,"registration-form",2,"background","rgb(255, 255, 255)","padding","2rem","border-radius","15px","max-width","650px","width","100%","backdrop-filter","blur(10px)","border","1px solid rgba(255, 255, 255, 0.2)","box-shadow","0 4px 30px rgba(0, 0, 128, 0.2)","color","#fff","margin-top","35px","margin-bottom","35px"],[1,"text-center","mb-4"],["href","#"],["src","logo2.png","height","80","alt","Logo",2,"filter","drop-shadow(0 0 5px rgba(0, 170, 255, 0.7))"],[1,"text-left",3,"ngSubmit","formGroup"],[1,"mb-4","text-center","text-primary"],[1,"form-group","mb-3","text-center"],[1,"form-label","text-primary","fs-5"],[1,"d-flex","flex-wrap","justify-content-center"],["type","radio","name","Role","value","Tourist","id","Tourist","formControlName","Role",1,"btn-check"],["for","Tourist",1,"btn","btn-outline-primary","me-1","mb-1"],["type","radio","name","Role","value","HotelOwner","id","HotelOwner","formControlName","Role",1,"btn-check"],["for","HotelOwner",1,"btn","btn-outline-primary","me-1","mb-1"],["type","radio","name","Role","value","ApartmentOwner","id","ApartmentOwner","formControlName","Role",1,"btn-check"],["for","ApartmentOwner",1,"btn","btn-outline-primary","me-1","mb-1"],["type","radio","name","Role","value","Driver","id","Driver","formControlName","Role",1,"btn-check"],["for","Driver",1,"btn","btn-outline-primary","me-1","mb-1"],["type","radio","name","Role","value","TourGuide","id","TourGuide","formControlName","Role",1,"btn-check"],["for","TourGuide",1,"btn","btn-outline-primary","me-1","mb-1"],["class","text-danger mt-1",4,"ngIf"],[1,"form-group","mb-3","text-left"],["for","FullName",1,"form-label","text-primary"],["id","FullName","placeholder","Your FullName","formControlName","FullName",1,"form-control","bg-transparent",3,"ngClass"],["for","NationalID",1,"form-label","text-primary"],["id","NationalID","placeholder","Your NationalityID","formControlName","NationalID",1,"form-control","bg-transparent",3,"ngClass"],["for","UserName",1,"form-label","text-primary"],["id","UserName","placeholder","Your UserName","formControlName","UserName",1,"form-control","bg-transparent",3,"ngClass"],["for","Email",1,"form-label","text-primary",2,"color","#00aaff"],["id","Email","placeholder","Your Email","formControlName","Email","type","email",1,"form-control","bg-transparent",3,"ngClass"],["for","Password",1,"form-label","text-primary"],["id","Password","placeholder","Your Password","formControlName","Password","type","password",1,"form-control",3,"ngClass"],[1,"form-group","mb-4","text-left"],["for","ConfirmPassword",1,"form-label","text-primary"],["id","ConfirmPassword","placeholder","Your ConfirmPassword","formControlName","ConfirmPassword","type","password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","w-100","mt-3",3,"disabled"],[1,"mt-4","register-link","text-center"],["routerLink","/login/home"],[1,"text-danger","mt-1"]],template:function(l,o){if(l&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),a(4,"img",4),t()(),e(5,"form",5),O("ngSubmit",function(){return o.onSubmit()}),e(6,"h2",6),n(7,"Registration"),t(),e(8,"div",7)(9,"label",8),n(10,"Select Role"),t(),e(11,"div",9),a(12,"input",10),e(13,"label",11),n(14,"Tourist"),t(),a(15,"input",12),e(16,"label",13),n(17,"Hotel Owner"),t(),a(18,"input",14),e(19,"label",15),n(20,"Apartment Owner"),t(),a(21,"input",16),e(22,"label",17),n(23,"Driver"),t(),a(24,"input",18),e(25,"label",19),n(26,"Tour Guide"),t()(),u(27,se,2,0,"div",20),t(),e(28,"div",21)(29,"label",22),n(30,"Full Name"),t(),a(31,"input",23),u(32,me,2,0,"div",20),t(),e(33,"div",21)(34,"label",24),n(35,"Nationality ID"),t(),a(36,"input",25),u(37,ce,2,0,"div",20),t(),e(38,"div",21)(39,"label",26),n(40,"Username"),t(),a(41,"input",27),u(42,de,2,0,"div",20),t(),e(43,"div",21)(44,"label",28),n(45,"Email"),t(),a(46,"input",29),u(47,ge,2,0,"div",20),t(),e(48,"div",21)(49,"label",30),n(50,"Password"),t(),a(51,"input",31),u(52,pe,2,0,"div",20),t(),e(53,"div",32)(54,"label",33),n(55,"Confirm Password"),t(),a(56,"input",34),u(57,fe,2,0,"div",20),t(),e(58,"button",35),n(59,"Register"),t(),e(60,"p",36),n(61,"Already a member? "),e(62,"a",37),n(63,"Login here"),t()()()()()),l&2){let m,h,v,C,P,M;c(5),d("formGroup",o.form),c(22),d("ngIf",o.isFieldInvalid("Role")),c(4),d("ngClass",_(15,E,o.isFieldInvalid("FullName"),((m=o.form.get("FullName"))==null?null:m.valid)&&(((m=o.form.get("FullName"))==null?null:m.touched)||((m=o.form.get("FullName"))==null?null:m.dirty)))),c(),d("ngIf",o.isFieldInvalid("FullName")),c(4),d("ngClass",_(18,E,o.isFieldInvalid("NationalID"),((h=o.form.get("NationalID"))==null?null:h.valid)&&(((h=o.form.get("NationalID"))==null?null:h.touched)||((h=o.form.get("NationalID"))==null?null:h.dirty)))),c(),d("ngIf",o.isFieldInvalid("NationalID")),c(4),d("ngClass",_(21,E,o.isFieldInvalid("UserName"),((v=o.form.get("UserName"))==null?null:v.valid)&&(((v=o.form.get("UserName"))==null?null:v.touched)||((v=o.form.get("UserName"))==null?null:v.dirty)))),c(),d("ngIf",o.isFieldInvalid("UserName")),c(4),d("ngClass",_(24,E,o.isFieldInvalid("Email"),((C=o.form.get("Email"))==null?null:C.valid)&&(((C=o.form.get("Email"))==null?null:C.touched)||((C=o.form.get("Email"))==null?null:C.dirty)))),c(),d("ngIf",o.isFieldInvalid("Email")),c(4),d("ngClass",_(27,E,o.isFieldInvalid("Password"),((P=o.form.get("Password"))==null?null:P.valid)&&(((P=o.form.get("Password"))==null?null:P.touched)||((P=o.form.get("Password"))==null?null:P.dirty)))),c(),d("ngIf",o.isFieldInvalid("Password")),c(4),d("ngClass",_(30,E,o.isFieldInvalid("ConfirmPassword"),((M=o.form.get("ConfirmPassword"))==null?null:M.valid)&&(((M=o.form.get("ConfirmPassword"))==null?null:M.touched)||((M=o.form.get("ConfirmPassword"))==null?null:M.dirty)))),c(),d("ngIf",o.isFieldInvalid("ConfirmPassword")),c(),d("disabled",o.form.invalid)}},dependencies:[H,R,x,S,I,K,F,w,T,L],styles:['input[type=radio][_ngcontent-%COMP%]:checked{color:#fff!important;background-color:var(--primaryC)!important}.covered-img[_ngcontent-%COMP%]{position:relative;inset:0}.covered-img[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:url(/background.jpg) no-repeat center center;background-size:cover;z-index:-1}.covered-img[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;z-index:1}']});let r=i;return r})();export{ue as a,he as b,xe as c,Me as d};