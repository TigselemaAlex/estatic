import{a as U}from"./chunk-YODMGMDB.js";import{a as g}from"./chunk-PLS5QCJQ.js";import{a as G,b as J}from"./chunk-DEGAUCA6.js";import{j as $}from"./chunk-Y6YU6P5I.js";import"./chunk-YGKFOOJ6.js";import"./chunk-7XV6CRBL.js";import"./chunk-LFBU7IBC.js";import"./chunk-6OSMVD66.js";import"./chunk-IAKHD2KQ.js";import"./chunk-KTZAFNHT.js";import"./chunk-L2YMTAJ4.js";import"./chunk-SQDM7FYD.js";import"./chunk-MUUDK5FO.js";import"./chunk-GS33KFGJ.js";import{m as L,n as Q,q as z,x as q}from"./chunk-OHCSBWXS.js";import"./chunk-APKN3PFA.js";import"./chunk-X6GEXHSG.js";import"./chunk-MX4UQD2B.js";import"./chunk-X5B2VV3T.js";import"./chunk-ZTWDMVRM.js";import"./chunk-P7FDEGEE.js";import"./chunk-XSSXK7EZ.js";import{a as k}from"./chunk-PXO2TRVQ.js";import"./chunk-PWTX4GCB.js";import"./chunk-HXGQMCX4.js";import"./chunk-TDXTCVPJ.js";import"./chunk-WTM76CTQ.js";import{d as H,e as j}from"./chunk-AXYD25ST.js";import{i as B,n as O}from"./chunk-VBSZGXZN.js";import{$ as R,Bc as N,Db as F,Eb as I,Fb as P,Hb as s,Ib as u,Lb as M,Ob as A,Pb as V,Ta as m,Ua as C,Wa as E,Y as S,Yb as y,_b as b,ab as w,db as v,ea as f,fa as _,fb as p,kb as T,ob as i,pb as n,qb as D,ub as x,wb as c,xb as h}from"./chunk-HOTPW52P.js";var W=["container"];function X(o,l){o&1&&(i(0,"tr")(1,"th"),s(2,"Rol"),n(),i(3,"th"),s(4,"Descripci\xF3n"),n(),i(5,"th"),s(6,"Activo"),n(),i(7,"th"),s(8,"Fecha creaci\xF3n"),n(),i(9,"th"),s(10,"Fecha actualizaci\xF3n"),n(),i(11,"th"),s(12,"Editar"),n()())}function Y(o,l){if(o&1){let a=x();i(0,"tr")(1,"td"),s(2),n(),i(3,"td"),s(4),n(),i(5,"td"),D(6,"p-chip",7),n(),i(7,"td"),s(8),y(9,"date"),n(),i(10,"td"),s(11),y(12,"date"),n(),i(13,"td")(14,"p-button",8),c("onClick",function(){let r=f(a).$implicit,d=h();return _(d.openForm(r))}),n()()()}if(o&2){let a=l.$implicit;m(2),u(a.name),m(2),u(a.description),m(2),p("label",a.active?"Si":"No")("styleClass",a.active?"bg-blue-100 text-blue-600 text-sm shadow-3":"bg-red-100 text-red-600 text-sm shadow-3"),m(2),u(b(9,8,a.createdAt,"dd/MM/yyyy")),m(3),u(b(12,11,a.updatedAt,"dd/MM/yyyy")),m(3),p("rounded",!0)("raised",!0)}}function Z(o,l){if(o&1){let a=x();i(0,"div",10)(1,"p-paginator",11),c("onPageChange",function(e){f(a);let r=h(2);return _(r.onPageChange(e))}),n()()}if(o&2){let a=h(2);m(),p("rows",a.rows)("first",a.first)("currentPageReportTemplate","{currentPage} de {totalPages} p\xE1ginas ({totalRecords} registros)")("totalRecords",a.totalItems)}}function ee(o,l){o&1&&(i(0,"div",10)(1,"p",12),s(2,"No hay datos para mostrar"),n()())}function te(o,l){if(o&1&&v(0,Z,2,4,"div",9)(1,ee,3,0),o&2){let a=h();T(0,a.roles.length>0?0:1)}}var ie=()=>({"min-width":"50rem"}),Ee=(()=>{let l=class l extends k{constructor(t,e){super(),this.roleService=t,this.messageService=e,this.first=0,this.dataLoading=!0,this.rows=10,this.totalItems=0,this.summary="",this.roles=[],this.modalData={visible:!1,title:"",data:null,response:null},this.toolbarHeight=0,this.containerOptions={showNewButton:!1,showSearch:!0,dataLoading:!0},this.cdr=S(E),this.getRoles()}ngOnInit(){super.ngOnInit()}handleFindAllNext(t){this.containerOptions.dataLoading=!0;let e=t.data;this.roles=e.content,this.totalItems=e.totalItems,setTimeout(()=>{this.containerOptions.dataLoading=!1},300)}handleFindAllError(t){this.messageService.add({severity:"error",summary:"Error",detail:"No se ha podido obtener los roles"})}getRoles(t=0,e=""){this.roleService.findAll(t,e).subscribe({next:this.handleFindAllNext.bind(this),error:this.handleFindAllError.bind(this)})}openForm(t){this.modalData={visible:!0,title:"Editar rol",data:t,response:null}}getHandleClose(){if(this.modalData.response){let t=this.modalData.response.id,e=this.modalData.response;this.roleService.update(t,e).subscribe({next:r=>{this.messageService.add({severity:"success",summary:"\xC9xito",detail:r.message}),this.getRoles(0,"")},error:r=>{this.messageService.add({severity:"error",summary:"Error",detail:"No se ha podido actualizar el rol"})}})}this.reset()}reset(){this.modalData={visible:!1,title:"",data:null,response:null},this.first=0}onPageChange(t){this.first=t.first;let e=this.container.searchInput.nativeElement.value;this.getRoles(t.page,e)}onSearch(t){this.getRoles(0,t)}ngAfterViewInit(){this.toolbarHeight=this.container.toolbar.getBlockableElement().clientHeight,this.cdr.detectChanges()}};l.\u0275fac=function(e){return new(e||l)(C(g),C(B))},l.\u0275cmp=R({type:l,selectors:[["app-roles"]],viewQuery:function(e,r){if(e&1&&F(W,5),e&2){let d;I(d=P())&&(r.container=d.first)}},standalone:!0,features:[M([g]),w,A],decls:7,vars:6,consts:[[3,"options","onSearch"],["container",""],["styleClass","p-datatable-sm p-datatable-striped","scrollHeight","calc(100vh - 17.35rem)",3,"value","tableStyle","scrollable"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],[3,"modalData","handleClose"],[3,"label","styleClass"],["icon","pi pi-pencil","severity","warning","label","Editar","size","small",3,"rounded","raised","onClick"],["class","flex justify-content-center"],[1,"flex","justify-content-center"],[3,"rows","first","currentPageReportTemplate","totalRecords","onPageChange"],[1,"text-lg","py-2","px-4"]],template:function(e,r){e&1&&(i(0,"app-container",0,1),c("onSearch",function(K){return r.onSearch(K)}),i(2,"p-table",2),v(3,X,13,0,"ng-template",3)(4,Y,15,14,"ng-template",4)(5,te,2,1,"ng-template",5),n()(),i(6,"app-role-form",6),c("handleClose",function(){return r.getHandleClose()}),n()),e&2&&(p("options",r.containerOptions),m(2),p("value",r.roles)("tableStyle",V(5,ie))("scrollable",!0),m(4),p("modalData",r.modalData))},dependencies:[U,$,q,z,O,J,G,j,H,Q,L,N],styles:["[_nghost-%COMP%]     .p-datatable.p-datatable-sm .p-datatable-thead>tr>th{background-color:#000!important;color:#fff!important}"]});let o=l;return o})();export{Ee as RolesComponent};
