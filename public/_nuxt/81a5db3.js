(window.webpackJsonp=window.webpackJsonp||[]).push([[37,22,24,27],{559:function(t,e,r){"use strict";r.r(e);r(12);var n={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(e){var r=t.parseResponseData(e.data);t.loading=!1,t.response=r,t.$emit("success",r),t.$emit("response",r),t.successText&&t.$swal.fire(t.successText)})).catch((function(e){var r=t.parseResponseData(e.response.data);t.loading=!1,t.error=r.message,t.errorFields=r.fields,t.$emit("error",r),t.$emit("response",r)}))},parseResponseData:function(t){return["per_page","page"].forEach((function(e){"string"==typeof t[e]&&(t[e]=parseInt(t[e]))})),t}},mounted:function(){this.mountedSubmit&&this.submit()}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},560:function(t,e,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("260305c2",content,!0,{sourceMap:!1})},561:function(t,e,r){var content=r(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("309f6a21",content,!0,{sourceMap:!1})},565:function(t,e,r){"use strict";r(560)},566:function(t,e,r){var n=r(74)(!1);n.push([t.i,".ui-mobile-action .el-drawer{width:300px!important;max-width:80vw}",""]),t.exports=n},568:function(t,e,r){"use strict";r.r(e);var n={props:{slotButton:{default:!0}},data:function(){return{drawer:!1}},methods:{show:function(){this.drawer=!0},hide:function(){this.drawer=!1},toggle:function(){this.drawer=!this.drawer}}},o=(r(565),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-mobile-action"},[t.slotButton?r("div",{staticClass:"d-md-none",on:{click:function(e){t.drawer=!0}}},[t._t("button",(function(){return[t._m(0)]}))],2):t._e(),t._v(" "),r("el-drawer",{attrs:{visible:t.drawer,"with-header":!1,direction:"ltr"},on:{"update:visible":function(e){t.drawer=e}}},[r("div",[r("div",{staticClass:"bg-primary p-2 mb-2 text-white text-left"},[t._v("Ações")]),t._v(" "),r("div",{staticClass:"p-2"},[t._t("default")],2)])]),t._v(" "),r("div",{staticClass:"d-none d-md-block"},[t._t("default")],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn bg-white shadow-sm",staticStyle:{padding:"5px 7px","border-radius":"50%"},attrs:{type:"button"}},[e("i",{staticClass:"fas fa-fw fa-ellipsis-v"})])}],!1,null,null,null);e.default=component.exports},569:function(t,e,r){"use strict";r(561)},570:function(t,e,r){var n=r(74)(!1);n.push([t.i,'@media (min-width:0) and (max-width:768px){.ui-model-search-table-actions-content .btn{width:100%;margin-bottom:10px}}@media (min-width:768px){.ui-model-search-table-actions{position:relative;transition:all .3s ease;visibility:hidden;opacity:0}.ui-model-search tr:hover .ui-model-search-table-actions{visibility:visible;opacity:1}.ui-model-search-table-actions-content{position:absolute;top:-22px;right:0;white-space:nowrap}.ui-model-search-table-actions-content .btn{padding:6px 8px;border-radius:50%;margin-left:5px}}.ui-model-search-search-fields>*{margin-bottom:15px}.ui-model-search [data-orderby]{cursor:pointer}.ui-model-search [data-order=asc]:after{content:"↓";float:right}.ui-model-search [data-order=desc]:after{content:"↑";float:right}',""]),t.exports=n},575:function(t,e,r){"use strict";r.r(e);r(49),r(34),r(41),r(76),r(77);var n=r(29);r(12),r(61),r(26),r(191),r(35),r(27),r(28),r(408),r(94),r(95),r(573);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{modelName:{default:""},singular:{default:"Item"},plural:{default:"Itens"},changeUrl:{default:!0},actionsDefault:{default:!0}},data:function(){return{searchParams:this.searchParamsDefault(this.$route.query),selecteds:[],mobileSearchParamsModal:!1}},methods:{submit:function(){var t=this;return new Promise((function(e,r){t.mobileSearchParamsModal=!1,setTimeout((function(){t.selecteds=[],t.$refs.search.submit().then((function(t){e()})).catch(r)}),10)}))},searchParamsDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=c({q:"",page:1,per_page:10,orderby:"updated_at",order:"desc",deleted:""},t),["page","per_page"].forEach((function(e){t[e]=parseInt(t[e])})),t},searchParamsUrl:function(){this.changeUrl&&this.$router.push({query:this.searchParams})},orderByArrow:function(){var t=this;this.$el.querySelectorAll("[data-orderby]").forEach((function(e){var r=e.getAttribute("data-orderby");t.searchParams.orderby==r?e.setAttribute("data-order",t.searchParams.order):e.removeAttribute("data-order")}))},orderbyHandleClick:function(){var t=this;this.$el.addEventListener("click",(function(e){var r=e.target.getAttribute("data-orderby");r&&(r==t.searchParams.orderby&&(t.searchParams.order="asc"==t.searchParams.order?"desc":"asc"),t.searchParams.orderby=r,t.orderByArrow(),t.searchParamsUrl(),t.submit())})),this.orderByArrow()},downloadExport:function(t){var u=new URLSearchParams;for(var i in this.searchParams)u.append(i,this.searchParams[i]||"");u.append("format",t),this.$axios({url:"/api/".concat(this.modelName,"/export?").concat(u.toString()),method:"get",responseType:"blob"}).then((function(e){Object.assign(document.createElement("a"),{href:URL.createObjectURL(e.data),download:"data-export.".concat(t)}).click()}))},modelDelete:function(t){var e=this,r=!!this.searchParams.deleted,n=r?"Deseja deletar estes itens permanentemente?\nEsta ação não pode ser desfeita.":"Deseja deletar estes itens?",o=r;this.$confirm(n).then((function(n){e.$axios.post("/api/".concat(e.modelName,"/delete"),{id:t,deleted:o,forced:r}).then((function(t){e.selecteds=[],e.submit()}))}))},modelRestore:function(t){var e=this;this.$confirm("Deseja restaurar este item?").then((function(r){e.$axios.post("/api/".concat(e.modelName,"/restore"),{id:t,deleted:1}).then((function(t){e.submit()}))}))}},mounted:function(){this.orderbyHandleClick()}},d=l,m=(r(569),r(14)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-form",{ref:"search",staticClass:"ui-model-search",attrs:{method:"get",action:"/api/"+t.modelName+"/search","mounted-submit":!0},on:{response:function(e){return t.searchParamsUrl()}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.loading,o=e.response;return[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-12 pb-3 px-2"},[r("div",{staticClass:"d-flex align-items-center"},[r("div",{staticClass:"flex-grow-1 d-md-none pe-2"},[r("button",{staticClass:"btn btn-light w-100",attrs:{type:"button"},on:{click:function(e){return t.$refs.searchForm.show()}}},[t._v("\n                        Filtro\n                    ")])]),t._v(" "),r("div",{staticClass:"flex-grow-1 d-none d-md-block"},[t._v("\n                     \n                ")]),t._v(" "),r("ui-mobile-action",[t._t("header-actions"),t._v(" "),r("transition",{attrs:{name:"el-fade-in-linear"}},[t.selecteds.length&&!t.searchParams.deleted?r("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;"},on:{click:function(e){return t.modelDelete(t.selecteds)}}},[r("i",{staticClass:"fas fa-times me-1"}),t._v(" Deletar "+t._s(t.selecteds.length)+"\n                        ")]):t._e()]),t._v(" "),r("transition",{attrs:{name:"el-fade-in-linear"}},[t.selecteds.length&&t.searchParams.deleted?r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"},on:{click:function(e){return t.modelRestore(t.selecteds)}}},[r("i",{staticClass:"fas fa-times me-1"}),t._v(" Restaurar "+t._s(t.selecteds.length)+"\n                        ")]):t._e()]),t._v(" "),r("el-dropdown",{attrs:{trigger:"click"}},[r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"}},[r("i",{staticClass:"fas fa-download me-1"}),t._v(" Exportar\n                        ")]),t._v(" "),r("el-dropdown-menu",[r("div",{staticStyle:{width:"150px"}},[r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.downloadExport("csv")}}},[t._v("CSV")]),t._v(" "),r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.downloadExport("json")}}},[t._v("JSON")]),t._v(" "),r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.downloadExport("html")}}},[t._v("HTML")])])])],1),t._v(" "),t.actionsDefault?r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/"+t.modelName+"/new"}},[r("i",{staticClass:"fas fa-fw fa-plus me-1"}),t._v(" Novo\n                    ")]):t._e()],2)],1)]),t._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("ui-mobile-action",{ref:"searchForm",attrs:{"slot-button":!1}},[r("div",{staticClass:"ui-model-search-search-fields mb-4"},[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.q,expression:"searchParams.q"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Buscar "+t.plural},domProps:{value:t.searchParams.q},on:{input:function(e){e.target.composing||t.$set(t.searchParams,"q",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn border-0 bg-transparent shadow-none",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.deleted,expression:"searchParams.deleted"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchParams,"deleted",e.target.multiple?r:r[0])},function(e){return t.submit()}]}},[r("option",{attrs:{value:""}},[t._v("Ativos")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("Deletados")])]),t._v(" "),t._t("search-fields")],2),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn btn-primary shadow-none w-100",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"}),t._v(" Buscar\n                ")]),t._v(" "),r("button",{staticClass:"btn shadow-none w-100 mt-2",attrs:{type:"button"},on:{click:function(e){t.searchParams=t.searchParamsDefault(),t.submit().then((function(e){return t.searchParamsUrl()}))}}},[r("i",{staticClass:"fas fa-fw fa-times"}),t._v(" Limpar\n                ")]),t._v(" "),t._t("search-actions")],2)],1),t._v(" "),r("div",{staticClass:"col-12 col-md-9 pt-3 pt-md-0 ps-md-3"},[r("div",{staticClass:"bg-white shadow-sm"},[r("table",{staticClass:"table table-striped table-hover table-borderless m-0",staticStyle:{"box-shadow":"none"}},[r("thead",[r("tr",[r("th",{attrs:{width:"30px"}},[r("input",{attrs:{type:"checkbox"},on:{click:function(e){t.selecteds=e.target.checked?o.data.map((function(t){return t.id})):[]}}})]),t._v(" "),t._t("table-header",(function(){return[r("th",[t._v("-")])]})),t._v(" "),r("th")],2)]),t._v(" "),r("tbody",[o&&o.data&&0==o.data.length?r("tr",[t._t("table-empty",(function(){return[r("td",{staticClass:"text-center py-3",attrs:{colspan:"10"}},[t._v("\n                                    Nenhum item encontrado\n                                ")])]}))],2):t._e(),t._v(" "),t._l(o.data,(function(i){return r("tr",[r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selecteds,expression:"selecteds"}],attrs:{type:"checkbox"},domProps:{value:i.id,checked:Array.isArray(t.selecteds)?t._i(t.selecteds,i.id)>-1:t.selecteds},on:{change:function(e){var r=t.selecteds,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=i.id,l=t._i(r,c);n.checked?l<0&&(t.selecteds=r.concat([c])):l>-1&&(t.selecteds=r.slice(0,l).concat(r.slice(l+1)))}else t.selecteds=o}}})]),t._v(" "),t._t("table-row",(function(){return[r("td",[t._v(t._s(i))])]}),{item:i}),t._v(" "),r("td",{staticClass:"text-end"},[r("ui-mobile-action",[r("div",{staticClass:"ui-model-search-table-actions"},[r("div",{staticClass:"ui-model-search-table-actions-content"},[t._t("table-actions",null,{item:i}),t._v(" "),t._t("table-actions-default",(function(){return[t.actionsDefault?r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/"+t.modelName+"/"+i.id}},[r("i",{staticClass:"fas fa-fw fa-pen"})]):t._e(),t._v(" "),t.actionsDefault&&i.deleted_at?r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.modelRestore(i.id)}}},[r("i",{staticClass:"fas fa-fw fa-undo"})]):t._e(),t._v(" "),t.actionsDefault&&!i.deleted_at?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.modelDelete(i.id)}}},[r("i",{staticClass:"fas fa-fw fa-times"})]):t._e()]}),{item:i})],2)])])],1)],2)}))],2)]),t._v(" "),r("div",{staticClass:"p-2"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":t.searchParams.page,"page-size":t.searchParams.per_page,"pager-count":11,total:o?o.total:0,"page-sizes":[5,10,25,50,100]},on:{"update:currentPage":function(e){return t.$set(t.searchParams,"page",e)},"update:current-page":function(e){return t.$set(t.searchParams,"page",e)},"update:pageSize":function(e){return t.$set(t.searchParams,"per_page",e)},"update:page-size":function(e){return t.$set(t.searchParams,"per_page",e)},"size-change":function(e){return t.submit()},"current-change":function(e){return t.submit()},"prev-click":function(e){return t.submit()},"next-click":function(e){return t.submit()}}})],1)])])])]}}],null,!0),model:{value:t.searchParams,callback:function(e){t.searchParams=e},expression:"searchParams"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiMobileAction:r(568).default,UiForm:r(559).default})},699:function(t,e,r){"use strict";r.r(e);var n={layout:"default/admin",middleware:"auth",head:function(){return{title:"Buscar coleiras"}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-model-search",{attrs:{"model-name":"petqr-collars",singular:"Coleira",plural:"Coleiras"},scopedSlots:t._u([{key:"table-header",fn:function(){return[r("th",{attrs:{width:"50px","data-orderby":"name"}},[t._v("Nome")])]},proxy:!0},{key:"table-row",fn:function(e){var n=e.item;return[r("td",[r("div",{staticClass:"fw-bold"},[t._v(t._s(n.name))]),t._v(" "),r("div",{staticClass:"text-muted"},[t._v(t._s(n.email))])])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiModelSearch:r(575).default})}}]);