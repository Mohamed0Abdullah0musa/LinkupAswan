import{B as p,C as F,G as f,Ma as y,N as i,Na as h,O as t,Oa as P,P as o,Pa as w,S as E,T as g,Ta as I,Wa as D,Y as r,Za as _,cb as C,f as b,hb as U,n as S,pb as V,s as d,t as c,z as u}from"./chunk-SAXKXHZH.js";var G=(()=>{let n=class n{constructor(a,m,e){this.myserv=a,this.builder=m,this.toastr=e,this.urlImg="http://localhost:5227/",this.NationalSecondFaceimg=null,this.NationalFirstFaceimg=null,this.Profilimg=null,this.formdata=new FormData,this.myserv.getUserByID().subscribe({next:l=>{this.profile=l,this.form=this.builder.group({FullName:["",[h.minLength(2)]],NationalID:["",[h.pattern(/^\d{14}$/)]],UserName:["",[h.pattern(/^[a-zA-Z0-9]{8}$/)]],Email:["",[h.email]]})},error:l=>{console.log(l)}})}ngOnInit(){this.get()}get(){return b(this,null,function*(){yield this.myserv.getUserByID().subscribe({next:a=>{this.profile=a,this.form.patchValue({FullName:this.profile.FullName,NationalID:this.profile.NationalID,UserName:this.profile.UserName,Email:this.profile.Email})},error:a=>{console.error("Error fetching user data",a)}})})}SelectFile(a){console.log(a.target.id,a.target.files[0]),a.target.id=="NationalSecondFaceimg"&&(this.NationalSecondFaceimg=a.target.files[0]),a.target.id=="NationalFirstFaceimg"&&(this.NationalFirstFaceimg=a.target.files[0]),a.target.id=="Profilimg"&&(this.Profilimg=a.target.files[0])}edit(){return b(this,null,function*(){this.formdata=new FormData,console.log("FormData contents before submit:"+this.formdata),this.form.valid&&(console.log("Form valid ",this.form.value),this.formdata.append("FullName",this.form.controls.FullName.value),this.formdata.append("NationalID",this.form.controls.NationalID.value),this.formdata.append("UserName",this.form.controls.UserName.value),this.formdata.append("Email",this.form.controls.Email.value),this.formdata.append("Profilimg",this.Profilimg??""),this.formdata.append("NationalFirstFaceimg",this.NationalFirstFaceimg??""),this.formdata.append("NationalSecondFaceimg",this.NationalSecondFaceimg??""),yield this.myserv.editUser(this.formdata).subscribe({next:a=>{console.log("FormData contents After submit:"+this.formdata),console.log(a),this.NationalFirstFaceimg=null,this.NationalSecondFaceimg=null,this.Profilimg=null,location.reload(),this.showSuccess()},error:a=>{console.log(a),this.NationalFirstFaceimg=null,this.NationalSecondFaceimg=null,this.Profilimg=null,this.showError()}}))})}showSuccess(){this.toastr.success("Profile edited Successfully")}showError(){this.toastr.error("Not Valid Data")}};n.\u0275fac=function(m){return new(m||n)(F(U),F(C),F(V))},n.\u0275cmp=S({type:n,selectors:[["app-edit-profile"]],decls:70,vars:4,consts:[["Profilimg",""],["NationalFirstFaceimg",""],["NationalSecondFaceimg",""],[1,"vstack","gap-4"],[1,"card","border"],[1,"card-header","border-bottom"],[1,"card-header-title"],[1,"card-body"],[1,"row","g-3",3,"formGroup"],[1,"col-12"],[1,"form-label"],[1,"text-danger"],[1,"d-flex","align-items-center"],["for","uploadfile-1","title","Replace this pic",1,"position-relative","me-4"],[1,"avatar"],["id","uploadfile-1-preview","width","150","height","150","alt","",1,"avatar-img","rounded-circle","border","border-white","border-3","shadow",3,"src"],["for","Profilimg",1,"btn","btn-sm","btn-outline-primary","mb-0"],["id","Profilimg","type","file",1,"form-control","d-none",3,"change"],[1,"col-md-6"],["type","text","formControlName","FullName","placeholder","Enter your full name",1,"form-control"],["type","email","formControlName","Email",1,"form-control"],["type","text","formControlName","NationalID",1,"form-control"],["type","text","formControlName","UserName",1,"form-control"],[1,"row","mt-2"],[1,"col-6"],[1,"d-flex","flex-column","align-items-center"],["for","nationalFirstFaceimgPath","title","Replace this pic",1,"position-relative","me-4"],[1,"avatar","avatar-xl"],["id","nationalFirstFaceimgPath-preview","height","180","width","180","alt","",3,"src"],[1,"mt-2"],["for","NationalFirstFaceimg",1,"btn","btn-sm","btn-outline-primary","mb-0"],["id","NationalFirstFaceimg","type","file",1,"form-control","d-none",3,"change"],["for","NationalSecondFaceimgPath","title","Replace this pic",1,"position-relative","me-4"],["id","NationalSecondFaceimgPath-preview","height","180","width","180",3,"src"],["for","NationalSecondFaceimg",1,"btn","btn-sm","btn-outline-primary","mb-0"],["id","NationalSecondFaceimg","type","file",1,"form-control","d-none",3,"change"],[1,"col-12","text-end"],["type","submit",1,"btn","btn-primary","mb-0",3,"click"]],template:function(m,e){if(m&1){let l=E();i(0,"div",3)(1,"div",4)(2,"div",5)(3,"h4",6),r(4,"Personal Information"),t()(),i(5,"div",7)(6,"form",8)(7,"div",9)(8,"label",10),r(9,"Upload your profile photo"),i(10,"span",11),r(11,"*"),t()(),i(12,"div",12)(13,"label",13)(14,"span",14),o(15,"img",15),t()(),i(16,"label",16),r(17,"Change"),t(),i(18,"input",17,0),g("change",function(s){return d(l),c(e.SelectFile(s))}),t()()(),i(20,"div",18)(21,"label",10),r(22,"Full Name"),i(23,"span",11),r(24,"*"),t()(),o(25,"input",19),t(),i(26,"div",18)(27,"label",10),r(28,"Email address"),i(29,"span",11),r(30,"*"),t()(),o(31,"input",20),t(),i(32,"div",18)(33,"label",10),r(34,"National ID"),i(35,"span",11),r(36,"*"),t()(),o(37,"input",21),t(),i(38,"div",18)(39,"label",10),r(40,"UserName"),i(41,"span",11),r(42,"*"),t()(),o(43,"input",22),t(),i(44,"div",23)(45,"div",24)(46,"div",25)(47,"div")(48,"label",26)(49,"span",27),o(50,"img",28),t()()(),i(51,"div",29)(52,"label",30),r(53,"Change Front NationalID"),t(),i(54,"input",31,1),g("change",function(s){return d(l),c(e.SelectFile(s))}),t()()()(),i(56,"div",24)(57,"div",25)(58,"div")(59,"label",32)(60,"span",27),o(61,"img",33),t()()(),i(62,"div",29)(63,"label",34),r(64,"Change Back NationalID"),t(),i(65,"input",35,2),g("change",function(s){return d(l),c(e.SelectFile(s))}),t()()()()(),i(67,"div",36)(68,"button",37),g("click",function(){return d(l),c(e.edit())}),r(69,"Save Changes"),t()()()()()()}m&2&&(p(6),f("formGroup",e.form),p(9),f("src",e.urlImg+e.profile.ProfilimgPath?e.urlImg+e.profile.ProfilimgPath:e.urlImg+e.profile.Profilimg,u),p(35),f("src",e.urlImg+e.profile.NationalFirstFaceimgPath?e.urlImg+e.profile.NationalFirstFaceimgPath:e.urlImg+e.profile.NationalFirstFaceimg,u),p(11),f("src",e.urlImg+e.profile.NationalSecondFaceimgPath?e.urlImg+e.profile.NationalSecondFaceimgPath:e.urlImg+e.profile.NationalSecondFaceimg,u))},dependencies:[I,y,P,w,D,_]});let N=n;return N})();export{G as a};