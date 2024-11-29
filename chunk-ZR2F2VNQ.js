import{a as q,c as y}from"./chunk-H5ZWDYJI.js";import{e as fe}from"./chunk-CKJR5OK5.js";import"./chunk-GVGTCRAX.js";import"./chunk-PSAURPY7.js";import{c as ge}from"./chunk-VDCYMWOT.js";import"./chunk-N4OE3BEA.js";import{$a as de,B as a,C as m,E as _,Fa as F,G as v,Ha as S,I as k,J as A,Ka as ae,L as j,M as R,Ma as H,N as t,Na as g,O as e,Oa as z,P as u,Pa as Y,S as N,T as x,Ta as J,U as T,Ua as me,Wa as K,Y as o,Z as p,Za as Q,_ as D,_a as ce,ab as ue,cb as M,db as pe,eb as he,ha as B,j as O,ja as ie,k as Z,l as G,la as oe,n as b,o as ee,pa as re,pb as C,ra as ne,s as P,t as I,va as se,wa as le,z as te,za as $}from"./chunk-SAXKXHZH.js";var ve=(()=>{let r=class r{constructor(i){this.http=i,this.editUrl="",this.getOneUrl="",this.deletTourUrl="",this.addTourUrl="http://localhost:5227/LinkupAswan/Tours/AddTour",this.getTourUrl="http://localhost:5227/LinkupAswan/Tours/GetAllTourguideTours"}getAllTours(){return this.http.get(this.getTourUrl)}AddTour(i){return this.http.post(this.addTourUrl,i)}deleteTour(i){return this.http.delete(this.deletTourUrl)}};r.\u0275fac=function(n){return new(n||r)(G($))},r.\u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"});let l=r;return l})();var V=(l,r)=>({"is-invalid":l,"is-valid":r}),xe=(()=>{let r=class r{constructor(i,n,s,h){this.builder=i,this.tourerv=n,this.rout=s,this.toastr=h,this.errorMassage="",this.AddTourmData=new FormData,this.AddTourForm=this.builder.group({TourTitle:["",g.required],Datetime:["",g.required],Price:["",[g.required,g.min(0)]],Durations:["",[g.required,g.min(1)]],Description:["",g.required],Role:["",g.required]})}SelectFile(i){i.target.id=="Tourimg"&&(this.Tourimg=i.target.files[0])}onSubmit(){this.AddTourmData.append("TourTitle",this.AddTourForm.controls.TourTitle.value),this.AddTourmData.append("Datetime",this.AddTourForm.controls.Datetime.value),this.AddTourmData.append("Price",this.AddTourForm.controls.Price.value),this.AddTourmData.append("Durations",this.AddTourForm.controls.Durations.value),this.AddTourmData.append("Description",this.AddTourForm.controls.Description.value),this.Tourimg&&this.AddTourmData.append("TourImg",this.Tourimg),this.tourerv.AddTour(this.AddTourmData).subscribe({next:i=>{console.log(i),this.showSuccess(),this.rout.navigateByUrl("/tourguide/mytours")},error:i=>{this.showError(),console.log(i)}})}showSuccess(){this.toastr.success("Tour Added Successfully")}showError(){this.toastr.error("Fill all Data")}};r.\u0275fac=function(n){return new(n||r)(m(M),m(ve),m(S),m(C))},r.\u0275cmp=b({type:r,selectors:[["app-add-tour"]],decls:32,vars:21,consts:[[3,"ngSubmit","formGroup"],[1,"card-body"],[1,"card","p-3"],[1,"form-group"],[1,"row"],[1,"form-group","col-12"],["for","TourTitle",1,"form-label","h6"],["id","TourTitle","formControlName","TourTitle","placeholder","Tour Title",1,"form-control",3,"ngClass"],["for","Datetime",1,"form-label","h6"],["id","Datetime","type","date","formControlName","Datetime",1,"form-control",3,"ngClass"],[1,"form-group","col-6"],["for","Price",1,"form-label","h6"],["id","Price","type","number","formControlName","Price",1,"form-control",3,"ngClass"],["for","Durations",1,"form-label","h6"],["id","Durations","type","number","formControlName","Durations",1,"form-control",3,"ngClass"],[1,"form-group","mb-3"],["for","Description",1,"form-label","h6"],["formControlName","Description","id","Description","rows","5","placeholder","Enter your Description here",1,"form-control",3,"ngClass"],["for","Tourimg",1,"form-label","h6"],["value","Tourimg","id","Tourimg","type","file","multiple","","accept","image/*",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","col-6","mt-4","m-auto"]],template:function(n,s){n&1&&(t(0,"form",0),x("ngSubmit",function(){return s.onSubmit()}),t(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"label",6),o(7,"Title"),e(),u(8,"input",7),e(),t(9,"div",3)(10,"label",8),o(11,"Datetime"),e(),u(12,"input",9),e(),t(13,"div",10)(14,"label",11),o(15,"Price"),e(),u(16,"input",12),e(),t(17,"div",10)(18,"label",13),o(19,"Duration"),e(),u(20,"input",14),e(),u(21,"div"),t(22,"div",15)(23,"label",16),o(24,"Description"),e(),u(25,"textarea",17),e(),t(26,"div",15)(27,"label",18),o(28,"Tour Image"),e(),t(29,"input",19),x("change",function(E){return s.SelectFile(E)}),e()(),t(30,"button",20),o(31,"ADD"),e()()()()()()),n&2&&(v("formGroup",s.AddTourForm),a(8),v("ngClass",B(6,V,s.AddTourForm.controls.TourTitle.invalid&&s.AddTourForm.controls.TourTitle.touched,s.AddTourForm.controls.TourTitle.valid&&s.AddTourForm.controls.TourTitle.touched)),a(4),v("ngClass",B(9,V,s.AddTourForm.controls.Datetime.invalid&&s.AddTourForm.controls.Datetime.touched,s.AddTourForm.controls.Datetime.valid&&s.AddTourForm.controls.Datetime.touched)),a(4),v("ngClass",B(12,V,s.AddTourForm.controls.Price.invalid&&s.AddTourForm.controls.Price.touched,s.AddTourForm.controls.Price.valid&&s.AddTourForm.controls.Price.touched)),a(4),v("ngClass",B(15,V,s.AddTourForm.controls.Durations.invalid&&s.AddTourForm.controls.Durations.touched,s.AddTourForm.controls.Durations.valid&&s.AddTourForm.controls.Durations.touched)),a(5),v("ngClass",B(18,V,s.AddTourForm.controls.Description.invalid&&s.AddTourForm.controls.Description.touched,s.AddTourForm.controls.Description.valid&&s.AddTourForm.controls.Description.touched)))},dependencies:[re,J,H,me,z,Y,K,Q]});let l=r;return l})();var W=(()=>{let r=class r{constructor(i){this.http=i,this.getBookingUrl="http://localhost:5227/LinkupAswan/BookingTour/Bookinglist",this.confirmUrl="http://localhost:5227/LinkupAswan/BookingTour/ConfirmTourBooking",this.rejectmUrl="http://localhost:5227/LinkupAswan/BookingTour/RejectTourBooking",this.confirmlistUrl="http://localhost:5227/LinkupAswan/BookingTour/ConfirmedList",this.balnceUrl="http://localhost:5227/LinkupAswan/BookingTour/TotalBalance"}getBookingList(){return this.http.get(this.getBookingUrl)}confirmBooking(i){return this.http.put(`${this.confirmUrl}/${i}`,{},{responseType:"text"})}rejectBooking(i){return this.http.put(`${this.rejectmUrl}/${i}`,{},{responseType:"text"})}confirmedtours(){return this.http.get(this.confirmlistUrl)}totalbalance(){return this.http.get(this.balnceUrl)}};r.\u0275fac=function(n){return new(n||r)(G($))},r.\u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"});let l=r;return l})();function Ie(l,r){if(l&1){let c=N();t(0,"button",22),x("click",function(){P(c);let n=T().$implicit,s=T(2);return I(s.rejectTourBooking(n.TourID))}),o(1,"Cancel"),e()}}function ke(l,r){l&1&&(t(0,"span"),o(1,"Tour Booking Rejected"),e())}function Ae(l,r){if(l&1){let c=N();t(0,"div",10)(1,"div",6)(2,"small",11),o(3,"Booked by:"),e(),t(4,"div",12)(5,"div",13)(6,"h6",14),o(7),e()()()(),t(8,"div",6)(9,"small",11),o(10,"Date:"),e(),t(11,"h6",15),o(12),e()(),t(13,"div",6)(14,"small",11),o(15,"Tour:"),e(),t(16,"h6",15),o(17),e()(),t(18,"div",6)(19,"small",11),o(20,"Amount:"),e(),t(21,"h6",16),o(22),e()(),t(23,"div",6)(24,"small",11),o(25,"Tourists:"),e(),t(26,"div",17),o(27),e()(),t(28,"div",6)(29,"small",11),o(30,"Total Price:"),e(),t(31,"div",17),o(32),e()(),t(33,"div",18)(34,"div")(35,"button",19),x("click",function(){let n=P(c).$implicit,s=T(2);return I(s.confirmTourBooking(n.TourID))}),o(36,"Confirm"),e()(),t(37,"div"),_(38,Ie,2,0,"button",20)(39,ke,2,0,"span",21),e()()()}if(l&2){let c=r.$implicit,i=T(2);a(7),p(c.FullName),a(5),p(c.Datetime),a(5),p(c.TourTitle),a(5),D("",c.Durations," days"),a(5),p(c.NumberOfPeople),a(5),p(c.Total),a(6),v("ngIf",!i.isRejected(c.TourID)),a(),v("ngIf",i.isRejected(c.TourID))}}function je(l,r){if(l&1&&j(0,Ae,40,8,"div",10,A),l&2){let c=T();R(c.TourestRequests)}}function Re(l,r){l&1&&(t(0,"p"),o(1,"There are No Tours Available."),e())}var Ce=(()=>{let r=class r{constructor(i,n,s,h,E){this.mytouristReq=i,this.toutServ=n,this.Activate=s,this.rout=h,this.toastr=E,this.TourestRequests=[],this.tourestRequests=[],this.tourestrequests=[],this.touristImg="http://localhost:5227/",this.errorMassage="",this.rejectedBookingIds=[],this.filteredTouristRequests=[],this.searchnameFilter="",this.tourTitleFilter="",this.maxPriceFilter=null,this.mytouristReq.getBookingList().subscribe({next:d=>{console.log(d),d.Success==!0?this.TourestRequests=d.Result:alert(d.Message)},error:d=>{console.log(d)}})}confirmTourBooking(i){this.mytouristReq.confirmBooking(i).subscribe({next:n=>{this.showSuccess()},error:n=>{console.error(n),this.showError()}})}rejectTourBooking(i){this.mytouristReq.rejectBooking(i).subscribe({next:n=>{this.showSuccess1(),this.rejectedBookingIds.push(i)},error:n=>{console.error(n),this.showError1()}})}isRejected(i){return this.rejectedBookingIds.includes(i)}applyFilters(){this.filteredTouristRequests=this.TourestRequests.filter(i=>{let n=this.searchnameFilter?i.FullName.toLowerCase().includes(this.searchnameFilter.toLowerCase()):!1,s=this.tourTitleFilter?i.TourTitle.toLowerCase().includes(this.tourTitleFilter.toLowerCase()):!1,h=this.maxPriceFilter!=null?i.Total<=this.maxPriceFilter:!1;return n||s||h})}clearFilters(){this.searchnameFilter="",this.tourTitleFilter="",this.maxPriceFilter=null,this.filteredTouristRequests=this.TourestRequests}checkForClearFilters(){!this.searchnameFilter&&!this.tourTitleFilter&&this.maxPriceFilter==null&&this.clearFilters()}showSuccess(){this.toastr.success("Confirm Success")}showError(){this.toastr.error("Confirm Failed")}showSuccess1(){this.toastr.success("Tour Booking Rejected")}showError1(){this.toastr.error("Failed to Reject Booking")}};r.\u0275fac=function(n){return new(n||r)(m(W),m(y),m(F),m(S),m(C))},r.\u0275cmp=b({type:r,selectors:[["app-tourguide-dashboard"]],decls:32,vars:1,consts:[[1,"page-content"],[1,"page-content-wrapper","p-xxl-4"],[1,"card-header","border-bottom"],[1,"card-header-title"],[1,"bg-light","rounded","p-3","d-none","d-lg-block"],[1,"row","row-cols-7","g-4"],[1,"col"],[1,"mb-0"],[1,"card-footer","pt-0"],[1,"d-sm-flex","justify-content-sm-between","align-items-sm-center"],[1,"row","row-cols-xl-7","align-items-lg-center","border-bottom","g-4","px-2","py-4"],[1,"d-block","d-lg-none"],[1,"d-flex","align-items-center"],[1,"ms-2"],[1,"mb-0","fw-light"],[1,"mb-0","fw-normal"],[1,"text-success","mb-0"],[1,"badge","bg-success","bg-opacity-10","text-success"],[1,"col","d-flex","flex-row","mb-3","column-gap-3"],[1,"btn","btn-sm","btn-primary","mb-0","bx-4",3,"click"],["class","btn btn-sm btn-danger mb-0 bx-2",3,"click",4,"ngIf"],[4,"ngIf"],[1,"btn","btn-sm","btn-danger","mb-0","bx-2",3,"click"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),o(4,"Booking Dashboard"),e()()(),t(5,"div",4)(6,"div",5)(7,"div",6)(8,"h6",7),o(9,"Booked by"),e()(),t(10,"div",6)(11,"h6",7),o(12,"Date"),e()(),t(13,"div",6)(14,"h6",7),o(15,"Tour"),e()(),t(16,"div",6)(17,"h6",7),o(18,"Amount"),e()(),t(19,"div",6)(20,"h6",7),o(21,"Tourists"),e()(),t(22,"div",6)(23,"h6",7),o(24,"Total Price"),e()(),t(25,"div",6)(26,"h6",7),o(27,"Action"),e()()()(),_(28,je,2,0)(29,Re,2,0,"p"),t(30,"div",8),u(31,"div",9),e()()),n&2&&(a(28),k(s.TourestRequests.length>0?28:29))},dependencies:[ne]});let l=r;return l})();function Be(l,r){if(l&1){let c=N();t(0,"div",13)(1,"div",14)(2,"div",1)(3,"div",15),u(4,"img",16),e(),t(5,"div",17)(6,"div",18)(7,"h5",19)(8,"a",20),o(9),e()(),t(10,"small"),u(11,"i",21),o(12),e(),t(13,"div",22)(14,"div",23)(15,"h5",24),o(16),e()(),t(17,"div",25)(18,"button",26),x("click",function(){let n=P(c).$implicit,s=T(2);return I(s.booktour(n.ID))}),u(19,"i",12),o(20,"Details"),e(),t(21,"button",27)(22,"i",28),x("click",function(){let n=P(c).$implicit,s=T(2);return I(s.DeleteTour(n.ID))}),e(),o(23,"Delete"),e()()()()()()()()}if(l&2){let c=r.$implicit,i=T(2);a(4),v("src",i.toursImg+c.Tourimg,te),a(5),p(c.TourTitle),a(3),p(c.Datetime),a(4),D("",c.Price," EGP")}}function Me(l,r){if(l&1&&j(0,Be,24,4,"div",13,A),l&2){let c=T();R(c.tourguidetours)}}function qe(l,r){l&1&&(t(0,"p"),o(1,"There are No Tours Available."),e())}var Fe=(()=>{let r=class r{constructor(i,n,s,h,E,d){this.toutServ=i,this.tougServ=n,this.Activate=s,this.complete=h,this.rout=E,this.toastr=d,this.tourguidetours=[],this.toursImg="http://localhost:5227/",this.errorMassage="",this.id="",this.completeProfileData=new FormData,this.completeProfileForm=this.complete.group({Experience:["",g.required],ProfessionalSummary:["",g.required],ServiceType:["",g.required]}),this.id=this.Activate.snapshot.params.id,this.tougServ.MyTours().subscribe({next:f=>{console.log(f),f.Success==!0?(this.tourguidecomleteProfiles=f.Result,this.tourguidetours=f.Result.Tours):alert(f.Message)},error:f=>{console.log(f)}})}DeleteTour(i){this.toutServ.deleteTour(i).subscribe({next:n=>{n.Success==!0?(this.tourguidetours=this.tourguidetours.filter(s=>s.ID!==i),this.showSuccessDel()):this.showSuccessDel()},error:n=>{console.error("Error deleting tour:",n),this.showErrorDel()}})}showSuccessDel(){this.toastr.success("Tour Deleted Successfully")}showErrorDel(){this.toastr.error("Failed to Delete the Tour")}softDeleteTour(i){this.toutServ.softDeleteTour(this.id).subscribe({next:n=>{n.Success==!0,alert(n.Message)},error:n=>{console.error("Error deleting tour:",n),alert("Failed to delete the tour.")}})}onSubmit(){this.completeProfileForm.valid?(this.completeProfileData.append("Experience",this.completeProfileForm.controls.Experience.value),this.completeProfileData.append("ProfessionalSummary",this.completeProfileForm.controls.ProfessionalSummary.value),this.completeProfileData.append("ServiceType",this.completeProfileForm.controls.ServiceType.value),console.log("Form submitted",this.completeProfileForm.value)):console.error("Form is invalid"),this.tougServ.MyTours().subscribe({next:i=>{console.log(i),i.Success==!0?this.tourguidecomleteProfiles=i.Result:alert(i.Message)},error:i=>{console.log(i)}})}showSuccess(){this.toastr.success("Tourguide Completed Profile Successfully")}showError(){this.toastr.error("Fill all Data")}addtour(){console.log("hello"),this.rout.navigate(["/tourguide/addtour"])}booktour(i){console.log("hellooo"),this.rout.navigate(["/tourist/bookingdetails",i])}};r.\u0275fac=function(n){return new(n||r)(m(y),m(q),m(F),m(M),m(S),m(C))},r.\u0275cmp=b({type:r,selectors:[["app-tourguide-tourlist"]],decls:20,vars:2,consts:[[1,"page-content-wrapper","p-xxl-4"],[1,"row","g-4"],[1,"col-8","mb-4","mb-sm-5"],[1,"text-bg-info","p-3"],[1,"h6"],[1,"h6","fw-normal","ms-1","mb-0"],[1,"col-lg-12","card","shadow","p-3"],[1,"col-12","mb-4","mb-sm-5"],[1,"d-sm-flex","justify-content-between","align-items-center"],[1,"h3","mb-3","mb-sm-0"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end"],[1,"btn","btn-sm","btn-primary","px-2","mb-2",3,"click"],[1,"bi","bi-eye","fa-fw","me-1"],[1,"col-lg-6"],[1,"card","shadow","p-3"],[1,"col-sm-3"],["alt","Card image",1,"rounded-2","img-thumbnail",3,"src"],[1,"col-sm-9"],[1,"card-body","position-relative","d-flex","flex-column","p-0","h-100"],[1,"card-title","mb-0","me-5"],["href","#"],[1,"bi","bi-calendar","me-2"],[1,"d-flex","justify-content-between","align-items-center","mt-3","mt-md-auto"],[1,"d-flex","align-items-center"],[1,"fw-bold","mb-0","me-1"],[1,"d-flex","align-items-left","my-2"],[1,"btn","btn-sm","btn-warning","px-2","mb-0","me-1",3,"click"],[1,"btn","btn-sm","btn-danger","px-2","mb-0","me-1"],[1,"bi","bi-eye","fa-fw","me-1",3,"click"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),o(5,"Hello"),e(),t(6,"span",5),o(7),e()()(),t(8,"div",6)(9,"div",7)(10,"div",8)(11,"h1",9),o(12,"Tours List"),e()()(),t(13,"div",10)(14,"a",11),x("click",function(){return s.addtour()}),u(15,"i",12),o(16,"Add Tour"),e()(),t(17,"div",1),_(18,Me,2,0)(19,qe,2,0,"p"),e()()()()),n&2&&(a(7),p(s.tourguidecomleteProfiles.FullName),a(11),k(s.tourguidetours.length>0?18:19))}});let l=r;return l})();var ye=(()=>{let r=class r{constructor(i,n,s,h,E,d){this.toutServ=i,this.tougServ=n,this.Activate=s,this.complete=h,this.rout=E,this.toastr=d,this.errorMassage="",this.completeProfileData=new FormData,this.tougServ.MyTours().subscribe({next:f=>{console.log(f),f.Success==!0?this.tourguidecomleteProfiles=f.Result:alert(f.Message)},error:f=>{console.log(f)}}),this.tougServ.geteditTourguide().subscribe({next:f=>{console.log(f),this.tourguidecomleteProfiles=f,this.completeProfileForm=this.complete.group({Experience:["",g.required],ProfessionalSummary:["",g.required],ServiceType:["",g.required]})},error:f=>{console.log(f)}})}ngOnInit(){this.tougServ.geteditTourguide().subscribe({next:i=>{console.log(i),this.tourguidecomleteProfiles=i,this.completeProfileForm.patchValue({Experience:this.tourguidecomleteProfiles.Experience,ProfessionalSummary:this.tourguidecomleteProfiles.ProfessionalSummary,ServiceType:this.tourguidecomleteProfiles.ServiceType})},error:i=>{console.error("Error fetching tourguide data",i)}})}editprof(){console.log("FormData contents before submit:"+this.completeProfileData),this.completeProfileForm.valid&&(console.log("Form valid",this.completeProfileForm.value),this.completeProfileData.append("Experience",this.completeProfileForm.controls.Experience.value),this.completeProfileData.append("ProfessionalSummary",this.completeProfileForm.controls.ProfessionalSummary.value),this.completeProfileData.append("ServiceType",this.completeProfileForm.controls.ServiceType.value),this.tougServ.editTourguideprofile(this.completeProfileData).subscribe({next:i=>{this.showSuccess(),console.log("FormData contents After submit:"+this.completeProfileData),console.log(i)},error:i=>{this.showError(),console.log(i)}}))}showSuccess(){this.toastr.success("Completed and Edit Profile Successfully")}showError(){this.toastr.error("Fill all Data")}};r.\u0275fac=function(n){return new(n||r)(m(y),m(q),m(F),m(M),m(S),m(C))},r.\u0275cmp=b({type:r,selectors:[["app-tourguidecompletprof"]],decls:39,vars:2,consts:[[1,"page-content-wrapper","p-xxl-4"],[1,"row","g-4"],[1,"col-lg-12"],[1,"col-12","mb-4","mb-sm-5"],[1,"text-bg-info","p-3"],[1,"h6"],[1,"h6","fw-normal","ms-1","mb-0"],[1,"d-sm-flex","justify-content-between","align-items-center"],[1,"h3","mb-3","mb-sm-0","mt-3"],[1,"card","shadow","p-3"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-6"],[1,"form-label"],[1,"text-danger"],["type","text","formControlName","Experience","id","Experience","placeholder","Enter your Experience",1,"form-control"],[1,"col-md-6","mb-3"],["for","ServiceType"],["formControlName","ServiceType","id","ServiceType","name","ServiceType",1,"form-select","js-choice"],["disabled","","selected","","value","","value","0"],["value","1"],["value","2"],["value","3"],[1,"form-group","mb-3"],["for","ProfessionalSummary"],["id","ProfessionalSummary","formControlName","ProfessionalSummary","rows","5","placeholder","Enter your Professional Summary here",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100","mb-2"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span",5),o(6,"Hello"),e(),t(7,"span",6),o(8),e()(),t(9,"div",7)(10,"h1",8),o(11,"Additional Data"),e()()(),t(12,"div",9)(13,"form",10),x("ngSubmit",function(){return s.editprof()}),t(14,"div",11)(15,"div",12)(16,"label",13),o(17,"Experience /Years"),t(18,"span",14),o(19,"*"),e()(),u(20,"input",15),e(),t(21,"div",16)(22,"label",17),o(23,"Type of Trips"),e(),t(24,"select",18)(25,"option",19),o(26,"-- Select item --"),e(),t(27,"option",20),o(28,"Historical Tours"),e(),t(29,"option",21),o(30,"Natural Places Tours"),e(),t(31,"option",22),o(32,"All"),e()()(),t(33,"div",23)(34,"label",24),o(35,"Professional Summary"),e(),u(36,"textarea",25),e()(),t(37,"button",26),o(38,"Save Changes"),e()()()()()()),n&2&&(a(8),p(s.tourguidecomleteProfiles.FullName),a(5),v("formGroup",s.completeProfileForm))},dependencies:[J,de,ue,H,ce,z,Y,K,Q]});let l=r;return l})();function Ne(l,r){if(l&1&&(t(0,"div",12)(1,"div",8)(2,"small",13),o(3,"Booked by:"),e(),t(4,"div",14)(5,"div",15)(6,"h6",16),o(7),e()()()(),t(8,"div",8)(9,"small",13),o(10,"Date:"),e(),t(11,"h6",17),o(12),e()(),t(13,"div",8)(14,"small",13),o(15,"Tour:"),e(),t(16,"h6",17),o(17),e()(),t(18,"div",8)(19,"small",13),o(20,"Amount:"),e(),t(21,"h6",18),o(22),e()(),t(23,"div",8)(24,"small",13),o(25,"Tourists:"),e(),t(26,"div",19),o(27),e()(),t(28,"div",8)(29,"small",13),o(30,"Total Price:"),e(),t(31,"div",19),o(32),e()()()),l&2){let c=r.$implicit;a(7),p(c.FullName),a(5),p(c.Datetime),a(5),p(c.TourTitle),a(5),D("",c.Durations," days"),a(5),p(c.NumberOfPeople),a(5),p(c.Total)}}function Ve(l,r){if(l&1&&j(0,Ne,33,6,"div",12,A),l&2){let c=T();R(c.TourestRequests)}}function Le(l,r){l&1&&(t(0,"p"),o(1,"There are No Tours Available."),e())}var De=(()=>{let r=class r{constructor(i,n,s,h,E){this.mytouristReq=i,this.toutServ=n,this.Activate=s,this.rout=h,this.toastr=E,this.TourestRequests=[],this.tourestRequests=[],this.tourestrequests=[],this.touristImg="http://localhost:5227/",this.errorMassage="",this.totalBalance=0,this.filteredTouristRequests=[],this.searchnameFilter="",this.tourTitleFilter="",this.maxPriceFilter=null,this.mytouristReq.confirmedtours().subscribe({next:d=>{console.log(d),d.Success==!0?this.TourestRequests=d.Result:alert(d.Message)},error:d=>{console.log(d)}}),this.mytouristReq.totalbalance().subscribe({next:d=>{this.totalBalance=d},error:d=>{console.log(d)}})}applyFilters(){this.filteredTouristRequests=this.TourestRequests.filter(i=>{let n=this.searchnameFilter?i.FullName.toLowerCase().includes(this.searchnameFilter.toLowerCase()):!1,s=this.tourTitleFilter?i.TourTitle.toLowerCase().includes(this.tourTitleFilter.toLowerCase()):!1,h=this.maxPriceFilter!=null?i.Total<=this.maxPriceFilter:!1;return n||s||h})}clearFilters(){this.searchnameFilter="",this.tourTitleFilter="",this.maxPriceFilter=null,this.filteredTouristRequests=this.TourestRequests}checkForClearFilters(){!this.searchnameFilter&&!this.tourTitleFilter&&this.maxPriceFilter==null&&this.clearFilters()}showSuccess(){this.toastr.success("Confirm Success")}showError(){this.toastr.error("Confirm Failed")}};r.\u0275fac=function(n){return new(n||r)(m(W),m(y),m(F),m(S),m(C))},r.\u0275cmp=b({type:r,selectors:[["app-confirmeddash"]],decls:36,vars:5,consts:[[1,"page-content"],[1,"page-content-wrapper","p-xxl-4"],[1,"card-header","border-bottom"],[1,"card-header-title"],[1,"card-body"],[1,"row","g-3","align-items-center","justify-content-between","mb-3"],[1,"bg-light","rounded","p-3","d-none","d-lg-block"],[1,"row","row-cols-7","g-4"],[1,"col"],[1,"mb-0"],[1,"card-footer"],["role","alert",1,"alert","alert-success"],[1,"row","row-cols-xl-7","align-items-lg-center","border-bottom","g-4","px-2","py-4"],[1,"d-block","d-lg-none"],[1,"d-flex","align-items-center"],[1,"ms-2"],[1,"mb-0","fw-light"],[1,"mb-0","fw-normal"],[1,"text-success","mb-0"],[1,"badge","bg-success","bg-opacity-10","text-success"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),o(4,"Confirmed Booking List"),e()()(),t(5,"div",4),u(6,"div",5),e(),t(7,"div",6)(8,"div",7)(9,"div",8)(10,"h6",9),o(11,"Booked by"),e()(),t(12,"div",8)(13,"h6",9),o(14,"Date"),e()(),t(15,"div",8)(16,"h6",9),o(17,"Tour"),e()(),t(18,"div",8)(19,"h6",9),o(20,"Amount"),e()(),t(21,"div",8)(22,"h6",9),o(23,"Tourists"),e()(),t(24,"div",8)(25,"h6",9),o(26,"Total Price"),e()()()(),_(27,Ve,2,0)(28,Le,2,0,"p"),t(29,"div",10)(30,"h5",3),o(31,"Total Earnings"),e(),t(32,"div",11)(33,"h5"),o(34),ie(35,"currency"),e()()()()),n&2&&(a(27),k(s.TourestRequests.length>0?27:28),a(7),D("Your Total Balance: ",oe(35,2,s.totalBalance,"EGP"),""))},dependencies:[se]});let l=r;return l})();var we=(()=>{let r=class r{constructor(i,n,s,h,E){this.toutServ=i,this.tougServ=n,this.route=s,this.Activate=h,this.toastr=E,this.tougServ.dashInfo().subscribe({next:d=>{console.log(d),d.Success==!0?this.tourguideInfo=d.Result:alert(d.Message)},error:d=>{console.log(d)}})}};r.\u0275fac=function(n){return new(n||r)(m(y),m(q),m(S),m(F),m(C))},r.\u0275cmp=b({type:r,selectors:[["app-tourguidehome"]],decls:40,vars:4,consts:[[1,"container","my-5"],[1,"text-left","mb-5",2,"font-weight","bold","color","#333"],[1,"row"],[1,"col-md-6","mb-4"],[1,"card","card-stats","text-center","services-card"],[1,"card-body"],[1,"stat-icon","mb-3"],[1,"fa-solid","fa-suitcase-rolling"],["id","serviceCount",1,"stat-value"],[1,"card","card-stats","text-center","bookings-card"],[1,"fas","fa-calendar-check"],["id","bookingCount",1,"stat-value"],[1,"card","card-stats","text-center","confirmed-card"],[1,"fas","fa-check-circle"],["id","confirmedCount",1,"stat-value"],[1,"card","card-stats","text-center","earnings-card"],[1,"fas","fa-dollar-sign"],["id","totalEarnings",1,"stat-value"]],template:function(n,s){n&1&&(t(0,"div",0)(1,"h2",1),o(2,"Tourguide HomePage"),e(),t(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),u(8,"i",7),e(),t(9,"h5"),o(10,"Tours"),e(),t(11,"p",8),o(12),e()()()(),t(13,"div",3)(14,"div",9)(15,"div",5)(16,"div",6),u(17,"i",10),e(),t(18,"h5"),o(19,"Bookings"),e(),t(20,"p",11),o(21),e()()()(),t(22,"div",3)(23,"div",12)(24,"div",5)(25,"div",6),u(26,"i",13),e(),t(27,"h5"),o(28,"Confirmed Processes"),e(),t(29,"p",14),o(30),e()()()(),t(31,"div",3)(32,"div",15)(33,"div",5)(34,"div",6),u(35,"i",16),e(),t(36,"h5"),o(37,"Total Earnings"),e(),t(38,"p",17),o(39),e()()()()()()),n&2&&(a(12),p(s.tourguideInfo.noTours),a(9),p(s.tourguideInfo.newBooking),a(9),p(s.tourguideInfo.bookingConfirmed),a(9),D("",s.tourguideInfo.balance," EGP"))},styles:[".card-stats[_ngcontent-%COMP%]{padding:25px;border-radius:15px;box-shadow:0 10px 20px #0000001a;color:#fff;transition:transform .3s ease,box-shadow .3s ease}.card-stats[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 15px 30px #0003}.services-card[_ngcontent-%COMP%]{background:#6f9ee4}.bookings-card[_ngcontent-%COMP%]{background:#f7a278}.confirmed-card[_ngcontent-%COMP%]{background:#78c5a3}.earnings-card[_ngcontent-%COMP%]{background:#f7b267}.stat-icon[_ngcontent-%COMP%]{font-size:3rem}.stat-value[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;margin-top:10px}"]});let l=r;return l})();var Ue=[{path:"dashboard",component:we},{path:"booking",component:Ce},{path:"mytours",component:Fe},{path:"completeprofile",component:ye},{path:"addtour",component:xe},{path:"confirmed",component:De}],ct=(()=>{let r=class r{};r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=ee({type:r}),r.\u0275inj=Z({imports:[le,ae.forChild(Ue),pe,he,fe,ge]});let l=r;return l})();export{ct as TourguidModule};