(window.webpackJsonp=window.webpackJsonp||[]).push([[31,19,20,21,22,24,26],{550:function(e,t,r){var content=r(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("039c59a2",content,!0,{sourceMap:!1})},552:function(e,t,r){"use strict";var n=r(13),o=r(3),l=r(4),c=r(135),d=r(20),f=r(16),m=r(405),h=r(48),v=r(134),_=r(404),y=r(5),x=r(93).f,w=r(40).f,C=r(18).f,S=r(406),P=r(554).trim,k="Number",O=o.Number,N=O.prototype,$=o.TypeError,E=l("".slice),j=l("".charCodeAt),A=function(e){var t=_(e,"number");return"bigint"==typeof t?t:D(t)},D=function(e){var t,r,n,o,l,c,d,code,f=_(e,"number");if(v(f))throw $("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=P(f),43===(t=j(f,0))||45===t){if(88===(r=j(f,2))||120===r)return NaN}else if(48===t){switch(j(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=E(f,2)).length,d=0;d<c;d++)if((code=j(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(k,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var L,U=function(e){var t=arguments.length<1?0:O(A(e)),r=this;return h(N,r)&&y((function(){S(r)}))?m(Object(t),r,U):t},I=n?x(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;I.length>F;F++)f(O,L=I[F])&&!f(U,L)&&C(U,L,w(O,L));U.prototype=N,N.constructor=U,d(o,k,U)}},553:function(e,t,r){"use strict";r.r(t);var n=r(21),o=(r(552),r(556),r(190),{props:{label:{default:""},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object],widthBreakpoint:{default:600}},computed:{_compError:function(){var e=[];return"string"==typeof this.error?e=[this.error]:Array.isArray(this.error)?e=this.error:"object"==Object(n.a)(this.error)&&(e=Object.values(this.error)),e.join("<br>")}},data:function(){return{parentWidth:0,isLarge:!1}},methods:{calculateSizes:function(){this.parentWidth=this.$el.offsetWidth,this.isLarge=this.$el.offsetWidth>=this.widthBreakpoint},resizeEventListener:function(e){this.calculateSizes()}},beforeDestroy:function(){window.removeEventListener("resize",this.resizeEventListener)},mounted:function(){this.calculateSizes(),window.addEventListener("resize",this.resizeEventListener)}}),l=(r(557),r(14)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ui-field mb-3",class:{"d-flex":e.isLarge,"ui-field-error":e._compError}},[r("div",{class:{"py-2":e.isLarge,"pb-1":!e.isLarge},style:"min-width:"+(e.isLarge?null:e.labelWidth)+"; max-width:"+(e.isLarge?null:e.labelWidth)+";"},[e._t("label",(function(){return[e._v(e._s(e.label))]}))],2),e._v(" "),r("div",{class:{"flex-grow-1":e.isLarge}},[e._t("default"),e._v(" "),e._compError?r("small",{staticClass:"d-block text-danger",domProps:{innerHTML:e._s(e._compError)}}):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},554:function(e,t,r){var n=r(4),o=r(25),l=r(15),c=r(555),d=n("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(e){return function(t){var r=l(o(t));return 1&e&&(r=d(r,m,"")),2&e&&(r=d(r,h,"")),r}};e.exports={start:v(1),end:v(2),trim:v(3)}},555:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},556:function(e,t,r){var n=r(6),o=r(407).values;n({target:"Object",stat:!0},{values:function(e){return o(e)}})},557:function(e,t,r){"use strict";r(550)},558:function(e,t,r){var n=r(74)(!1);n.push([e.i,".ui-field-error .el-input__inner,.ui-field-error .form-control{border-color:var(--bs-danger);box-shadow:none!important;outline:0!important}",""]),e.exports=n},559:function(e,t,r){"use strict";r.r(t);r(12);var n={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var e=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(t){var r=e.parseResponseData(t.data);e.loading=!1,e.response=r,e.$emit("success",r),e.$emit("response",r),e.successText&&e.$swal.fire(e.successText)})).catch((function(t){var r=e.parseResponseData(t.response.data);e.loading=!1,e.error=r.message,e.errorFields=r.fields,e.$emit("error",r),e.$emit("response",r)}))},parseResponseData:function(e){return["per_page","page"].forEach((function(t){"string"==typeof e[t]&&(e[t]=parseInt(e[t]))})),e}},mounted:function(){this.mountedSubmit&&this.submit()}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e._t("default",null,{loading:e.loading,response:e.response,error:e.error,errorFields:e.errorFields})],2)}),[],!1,null,null,null);t.default=component.exports},560:function(e,t,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("309f6a21",content,!0,{sourceMap:!1})},562:function(e,t,r){var content=r(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("212e4890",content,!0,{sourceMap:!1})},563:function(e,t,r){"use strict";r.r(t);var n={props:{value:[Boolean,String,Array,Object]},watch:{$props:{deep:!0,handler:function(e){this.props=JSON.parse(JSON.stringify(e))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[e.props.value?r("div",{staticClass:"modal show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1"},on:{click:function(t){if(t.target!==t.currentTarget)return null;e.props.value=!1,e.emitValue()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[e._t("header"),e._v(" "),r("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(t){e.props.value=!1,e.emitValue()}}})],2),e._v(" "),r("div",{staticClass:"modal-body"},[e._t("body")],2),e._v(" "),r("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports},564:function(e,t,r){"use strict";r(560)},565:function(e,t,r){var n=r(74)(!1);n.push([e.i,'.ui-model-search-table-actions .btn{padding:4px 6px;margin:0}.ui-model-search-header-actions>*{margin-left:10px}.ui-model-search-search-fields>*{margin-bottom:15px}.ui-model-search [data-orderby]{cursor:pointer}.ui-model-search [data-order=asc]:after{content:"↓";float:right}.ui-model-search [data-order=desc]:after{content:"↑";float:right}',""]),e.exports=n},567:function(e,t,r){"use strict";r.r(t);r(61),r(26),r(191);var n={props:{value:{default:""},returnField:{default:!1,type:[Boolean,String]}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,this.$emit("input",e.value||!1),e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},data:function(){return{search:{params:{q:""},loading:!1,response:!1},props:JSON.parse(JSON.stringify(this.$props))}},methods:{filesSearch:function(){var e=this;this.search.loading=!0,this.__fileSearchTimeout&&clearTimeout(this.__fileSearchTimeout),this.__fileSearchTimeout=setTimeout((function(){e.$axios.get("/api/files/search",{params:e.search.params}).then((function(t){e.search.loading=!1,e.search.response=t.data}))}),1e3)},filesSelect:function(e){e=JSON.parse(JSON.stringify(e)),this.returnField&&(e=e[this.returnField]||!1),this.props.value=e}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search.params.q,expression:"search.params.q"}],staticClass:"form-control border-0 shadow-none",attrs:{type:"text",placeholder:"Buscar arquivo"},domProps:{value:e.search.params.q},on:{keyup:function(t){return e.filesSearch()},input:function(t){t.target.composing||e.$set(e.search.params,"q",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{directives:[{name:"loading",rawName:"v-loading",value:e.search.loading,expression:"search.loading"}],staticClass:"btn btn-primary border-0 shadow-none rounded-0",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])]),e._v(" "),e.search.response?r("div",{staticClass:"list-inline p-2 border border-light shadow-sm mt-2"},[0==e.search.response.data.length?r("div",{staticClass:"list-inline-item",staticStyle:{cursor:"pointer"}},[r("div",{staticStyle:{padding:"12px 0",width:"100%","text-align":"center"}},[e._v("Nenhum arquivo encontrado")])]):e._e(),e._v(" "),e._l(e.search.response.data,(function(t){return r("div",{staticClass:"list-inline-item",staticStyle:{cursor:"pointer"},on:{click:function(r){return e.filesSelect(t)}}},["image"==t.type?r("img",{key:t.id,staticStyle:{width:"50px",height:"50px","object-fit":"cover"},attrs:{src:t.url,alt:""}}):r("div",{staticStyle:{padding:"12px 0",width:"50px","text-align":"center"}},[e._v(e._s(t.ext))])])}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports},568:function(e,t,r){"use strict";r.r(t);r(49),r(34),r(41),r(76),r(77);var n=r(29);r(12),r(61),r(26),r(191),r(35),r(27),r(28),r(408),r(94),r(95),r(566);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c={props:{modelName:{default:""},singular:{default:"Item"},plural:{default:"Itens"},changeUrl:{default:!0},actionsDefault:{default:!0}},data:function(){return{searchParams:this.searchParamsDefault(this.$route.query),selecteds:[]}},methods:{submit:function(){var e=this;return new Promise((function(t,r){setTimeout((function(){e.selecteds=[],e.$refs.search.submit().then((function(e){t()})).catch(r)}),10)}))},searchParamsDefault:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=l({q:"",page:1,per_page:10,orderby:"updated_at",order:"desc",deleted:""},e),["page","per_page"].forEach((function(t){e[t]=parseInt(e[t])})),e},searchParamsUrl:function(){this.changeUrl&&this.$router.push({query:this.searchParams})},orderByArrow:function(){var e=this;this.$el.querySelectorAll("[data-orderby]").forEach((function(t){var r=t.getAttribute("data-orderby");e.searchParams.orderby==r?t.setAttribute("data-order",e.searchParams.order):t.removeAttribute("data-order")}))},orderbyHandleClick:function(){var e=this;this.$el.addEventListener("click",(function(t){var r=t.target.getAttribute("data-orderby");r&&(r==e.searchParams.orderby&&(e.searchParams.order="asc"==e.searchParams.order?"desc":"asc"),e.searchParams.orderby=r,e.orderByArrow(),e.searchParamsUrl(),e.submit())})),this.orderByArrow()},downloadExport:function(e){var u=new URLSearchParams;for(var i in this.searchParams)u.append(i,this.searchParams[i]||"");u.append("format",e),this.$axios({url:"/api/".concat(this.modelName,"/export?").concat(u.toString()),method:"get",responseType:"blob"}).then((function(t){Object.assign(document.createElement("a"),{href:URL.createObjectURL(t.data),download:"data-export.".concat(e)}).click()}))},modelDelete:function(e){var t=this,r=!!this.searchParams.deleted,n=r?"Deseja deletar estes itens permanentemente?\nEsta ação não pode ser desfeita.":"Deseja deletar estes itens?",o=r;this.$confirm(n).then((function(n){t.$axios.post("/api/".concat(t.modelName,"/delete"),{id:e,deleted:o,forced:r}).then((function(e){t.selecteds=[],t.submit()}))}))},modelRestore:function(e){var t=this;this.$confirm("Deseja restaurar este item?").then((function(r){t.$axios.post("/api/".concat(t.modelName,"/restore"),{id:e,deleted:1}).then((function(e){t.submit()}))}))}},mounted:function(){this.orderbyHandleClick()}},d=c,f=(r(564),r(14)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-form",{ref:"search",staticClass:"ui-model-search",attrs:{method:"get",action:"/api/"+e.modelName+"/search","mounted-submit":!0},on:{response:function(t){return e.searchParamsUrl()}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.loading,o=t.response;return[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-12 pb-3 text-end"},[r("div",{staticClass:"ui-model-search-header-actions d-flex align-items-center justify-content-end"},[e._t("header-actions"),e._v(" "),r("transition",{attrs:{name:"el-fade-in-linear"}},[e.selecteds.length&&!e.searchParams.deleted?r("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;"},on:{click:function(t){return e.modelDelete(e.selecteds)}}},[r("i",{staticClass:"fas fa-times me-1"}),e._v(" Deletar "+e._s(e.selecteds.length)+"\n                    ")]):e._e()]),e._v(" "),r("transition",{attrs:{name:"el-fade-in-linear"}},[e.selecteds.length&&e.searchParams.deleted?r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"},on:{click:function(t){return e.modelRestore(e.selecteds)}}},[r("i",{staticClass:"fas fa-times me-1"}),e._v(" Restaurar "+e._s(e.selecteds.length)+"\n                    ")]):e._e()]),e._v(" "),r("el-dropdown",{attrs:{trigger:"click"}},[r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"}},[r("i",{staticClass:"fas fa-download me-1"}),e._v(" Exportar\n                    ")]),e._v(" "),r("el-dropdown-menu",[r("div",{staticStyle:{width:"150px"}},[r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(t){return e.downloadExport("csv")}}},[e._v("CSV")]),e._v(" "),r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(t){return e.downloadExport("json")}}},[e._v("JSON")]),e._v(" "),r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(t){return e.downloadExport("html")}}},[e._v("HTML")])])])],1),e._v(" "),e.actionsDefault?r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/"+e.modelName+"/new"}},[r("i",{staticClass:"fas fa-fw fa-plus me-1"}),e._v(" Novo\n                ")]):e._e()],2)]),e._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("div",{staticClass:"bg-white shadow-sm p-3",staticStyle:{position:"sticky",top:"0"}},[r("div",{staticClass:"ui-model-search-search-fields mb-4"},[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchParams.q,expression:"searchParams.q"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Buscar "+e.plural},domProps:{value:e.searchParams.q},on:{input:function(t){t.target.composing||e.$set(e.searchParams,"q",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn border-0 bg-transparent shadow-none",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.searchParams.deleted,expression:"searchParams.deleted"}],staticClass:"form-control",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.searchParams,"deleted",t.target.multiple?r:r[0])},function(t){return e.submit()}]}},[r("option",{attrs:{value:""}},[e._v("Ativos")]),e._v(" "),r("option",{attrs:{value:"1"}},[e._v("Deletados")])]),e._v(" "),e._t("search-fields")],2),e._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn btn-primary shadow-none w-100",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"}),e._v(" Buscar\n                ")]),e._v(" "),r("button",{staticClass:"btn shadow-none w-100 mt-2",attrs:{type:"button"},on:{click:function(t){e.searchParams=e.searchParamsDefault(),e.submit().then((function(t){return e.searchParamsUrl()}))}}},[r("i",{staticClass:"fas fa-fw fa-times"}),e._v(" Limpar\n                ")]),e._v(" "),e._t("search-actions")],2)]),e._v(" "),r("div",{staticClass:"col-12 col-md-9 pt-3 pt-md-0 ps-md-3"},[r("div",{staticClass:"bg-white shadow-sm"},[r("table",{staticClass:"table table-striped table-hover table-borderless m-0",staticStyle:{"box-shadow":"none"}},[r("thead",[r("tr",[r("th",{attrs:{width:"30px"}},[r("input",{attrs:{type:"checkbox"},on:{click:function(t){e.selecteds=t.target.checked?o.data.map((function(e){return e.id})):[]}}})]),e._v(" "),e._t("table-header",(function(){return[r("th",[e._v("-")])]})),e._v(" "),r("th")],2)]),e._v(" "),r("tbody",[o&&o.data&&0==o.data.length?r("tr",[e._t("table-empty",(function(){return[r("td",{staticClass:"text-center py-3",attrs:{colspan:"10"}},[e._v("\n                                    Nenhum item encontrado\n                                ")])]}))],2):e._e(),e._v(" "),e._l(o.data,(function(i){return r("tr",[r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selecteds,expression:"selecteds"}],attrs:{type:"checkbox"},domProps:{value:i.id,checked:Array.isArray(e.selecteds)?e._i(e.selecteds,i.id)>-1:e.selecteds},on:{change:function(t){var r=e.selecteds,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=i.id,c=e._i(r,l);n.checked?c<0&&(e.selecteds=r.concat([l])):c>-1&&(e.selecteds=r.slice(0,c).concat(r.slice(c+1)))}else e.selecteds=o}}})]),e._v(" "),e._t("table-row",(function(){return[r("td",[e._v(e._s(i))])]}),{item:i}),e._v(" "),r("td",{staticClass:"text-end"},[r("div",{staticClass:"ui-model-search-table-actions"},[e._t("table-actions",null,{item:i}),e._v(" "),e._t("table-actions-default",(function(){return[e.actionsDefault?r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/"+e.modelName+"/"+i.id}},[r("i",{staticClass:"fas fa-fw fa-pen"})]):e._e(),e._v(" "),e.actionsDefault&&i.deleted_at?r("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){return e.modelRestore(i.id)}}},[r("i",{staticClass:"fas fa-fw fa-undo"})]):e._e(),e._v(" "),e.actionsDefault&&!i.deleted_at?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.modelDelete(i.id)}}},[r("i",{staticClass:"fas fa-fw fa-times"})]):e._e()]}),{item:i})],2)])],2)}))],2)]),e._v(" "),r("div",{staticClass:"p-2"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":e.searchParams.page,"page-size":e.searchParams.per_page,"pager-count":11,total:o?o.total:0,"page-sizes":[5,10,25,50,100]},on:{"update:currentPage":function(t){return e.$set(e.searchParams,"page",t)},"update:current-page":function(t){return e.$set(e.searchParams,"page",t)},"update:pageSize":function(t){return e.$set(e.searchParams,"per_page",t)},"update:page-size":function(t){return e.$set(e.searchParams,"per_page",t)},"size-change":function(t){return e.submit()},"current-change":function(t){return e.submit()},"prev-click":function(t){return e.submit()},"next-click":function(t){return e.submit()}}})],1)])])])]}}],null,!0),model:{value:e.searchParams,callback:function(t){e.searchParams=t},expression:"searchParams"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiForm:r(559).default})},571:function(e,t,r){"use strict";r(562)},572:function(e,t,r){var n=r(74)(!1);n.push([e.i,".ui-file-upload-droparea{border:3px dashed var(--bs-gray-300);display:flex;align-items:center;justify-content:center;height:200px}",""]),e.exports=n},573:function(e,t,r){"use strict";r.r(t);r(61),r(42);var n={props:{type:{default:"base64"},folder:{default:""},multiple:{default:!0},dropArea:{default:!0},uploadOnSelect:{default:!0},dropdownLeft:{default:!0},modalOpen:{default:!1}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,this.$emit("input",e.value||!1),e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},data:function(){return{success:!1,error:!1,uploadPercent:0,uploading:!1,file:!1,save:{folder:this.$props.folder},props:JSON.parse(JSON.stringify(this.$props))}},methods:{openFileBrowser:function(){var e=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(t){e.file=t.target.files[0]}}).click()},fileSave:function(){var e=this,data=new FormData;for(var i in this.save)data.append(i,this.save[i]);this.file&&data.append("file",this.file,this.file.name),this.success=!1,this.error=!1,this.uploadPercent=0,this.uploading=!0,this.$axios.post("/api/files/upload",data,{onUploadProgress:function(e){file.uploadPercent=Math.round(100*e.loaded/e.total)}}).then((function(t){e.uploading=!1,e.success=!0,e.file=!1,e.save={},e.props.modalOpen=!1,e.$emit("success",t.data)})).catch((function(t){e.uploading=!1,e.error=t.response.data.message||"Erro desconhecido",e.$emit("error",t.response.data)}))}}},o=(r(571),r(14)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"relative"}},[r("div",{on:{click:function(t){e.props.modalOpen=!0}}},[e._t("button",(function(){return[e._m(0)]}))],2),e._v(" "),r("ui-modal",{staticStyle:{"text-align":"left!important"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Upload")]},proxy:!0},{key:"body",fn:function(){return[r("ui-field",{attrs:{label:"Descrição do arquivo"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.save.name,expression:"save.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.save.name},on:{input:function(t){t.target.composing||e.$set(e.save,"name",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{label:"Pasta"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.save.folder,expression:"save.folder"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.save.folder},on:{input:function(t){t.target.composing||e.$set(e.save,"folder",t.target.value)}}})]),e._v(" "),r("el-tabs",{attrs:{value:"upload"}},[r("el-tab-pane",{attrs:{label:"Upload",name:"upload"}},[r("ui-field",{attrs:{label:"Faça upload"}},[r("button",{staticClass:"btn btn-outline-light w-100",attrs:{type:"button"},on:{click:function(t){return e.openFileBrowser()}}},[r("span",[e._v(e._s(e.file?e.file.name:"Upload"))]),e._v(" "),r("i",{staticClass:"fas fa-fw fa-upload"})])])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"URL",name:"url"}},[r("ui-field",{attrs:{label:"Informe a URL externa da imagem"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.save.url,expression:"save.url"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.save.url},on:{input:function(t){t.target.composing||e.$set(e.save,"url",t.target.value)}}})])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"Biblioteca",name:"library"}},[r("ui-field",{attrs:{label:"Selecione da biblioteca"}},[r("ui-file-library",{attrs:{"return-field":"url"},model:{value:e.save.url,callback:function(t){e.$set(e.save,"url",t)},expression:"save.url"}})],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){e.props.modalOpen=!1}}},[r("i",{staticClass:"fas fa-fw fa-times"}),e._v(" Cancelar\n            ")]),e._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:e.uploading,expression:"uploading"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.fileSave()}}},[r("i",{staticClass:"fas fa-fw fa-save"}),e._v(" Salvar\n            ")])]},proxy:!0}]),model:{value:e.props.modalOpen,callback:function(t){e.$set(e.props,"modalOpen",t)},expression:"props.modalOpen"}})],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"btn btn-outline-light w-100",attrs:{type:"button"}},[e._v("\n                Upload "),r("i",{staticClass:"fas fa-fw fa-upload"})])}],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(553).default,UiFileLibrary:r(567).default,UiModal:r(563).default})},690:function(e,t,r){"use strict";r.r(t);var n={layout:"admin",middleware:"auth",head:function(){return{title:"Buscar usuários"}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ui-model-search",{ref:"modelSearch",attrs:{"model-name":"files",singular:"Arquivo",plural:"Arquivos"},scopedSlots:e._u([{key:"table-header",fn:function(){return[r("th",{attrs:{width:"50px"}},[e._v("Thumb")]),e._v(" "),r("th",{attrs:{"data-orderby":"name"}},[e._v("Nome")])]},proxy:!0},{key:"table-row",fn:function(t){var n=t.item;return[r("td",["image"==n.type?r("el-image",{staticStyle:{width:"50px",height:"50px","border-radius":"50%"},attrs:{src:n.url,fit:"cover",lazy:""}},[r("div",{staticStyle:{background:"#ddd",height:"50px"},attrs:{slot:"error"},slot:"error"})]):r("div",{staticStyle:{width:"50px",height:"50px",background:"#eee",display:"flex","align-items":"center","justify-content":"center"}},[e._v(e._s(n.ext))])],1),e._v(" "),r("td",[r("div",{staticClass:"fw-bold"},[e._v(e._s(n.name))]),e._v(" "),n.folder?r("div",[r("small",[e._v("/"+e._s(n.folder))])]):e._e(),e._v(" "),r("div",[r("small",[e._v(e._s(e._f("strFileSize")(n.size)))])])])]}},{key:"header-actions",fn:function(){return[r("ui-file-upload",{on:{success:function(t){return e.$refs.modelSearch.submit()}}})]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiFileUpload:r(573).default,UiModelSearch:r(568).default})}}]);