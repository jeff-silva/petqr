(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10,11,13],{546:function(t,e,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("039c59a2",content,!0,{sourceMap:!1})},547:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(551),r(552),r(189),{props:{label:{default:""},layout:{default:"vertical"},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object]},computed:{compError:function(){var t=[];return"string"==typeof this.error?t=[this.error]:Array.isArray(this.error)?t=this.error:"object"==Object(o.a)(this.error)&&(t=Object.values(this.error)),t.join("<br>")}}}),l=(r(548),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["horizontal"==t.layout?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("div",{style:{minWidth:t.labelWidth,maxWidth:t.labelWidth}},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),r("div",{staticClass:"flex-grow-1"},[t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)]):r("div",{staticClass:"mb-3"},[t.$slots.label?r("div",{staticClass:"form-label"},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2):t._e(),t._v(" "),t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";r(546)},549:function(t,e,r){var o=r(73)(!1);o.push([t.i,".ui-field-info *{font-size:12px;color:var(--bs-gray)!important}",""]),t.exports=o},550:function(t,e,r){"use strict";r.r(e);var o={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;this.loading=!0,this.error=!1,this.errorFields={},("post"==this.method?this.$axios.post(this.action,this.value):this.$axios.get(this.action,{params:this.value})).then((function(e){t.loading=!1,t.response=e.data,t.$emit("success",e.data),t.$emit("response",e.data)})).catch((function(e){t.loading=!1,t.error=e.response.data.message,t.errorFields=e.response.data.fields,t.$emit("error",e.response.data),t.$emit("response",e.response.data)}))}},mounted:function(){this.mountedSubmit&&this.submit()}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},556:function(t,e,r){var content=r(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("7264d87a",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r(556)},559:function(t,e,r){var o=r(73)(!1);o.push([t.i,'.ui-search-table-orderby-asc,.ui-search-table-orderby-desc{text-decoration:underline}.ui-search-table-orderby-asc:after{content:"⇊";float:right}.ui-search-table-orderby-desc:after{content:"⇈";float:right}.ui-search-table-actions .btn{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:5px}.ui-search-header-actions>*{margin-left:5px}.ui-search-table-actions{position:relative}.ui-search-table-actions-btns{position:absolute;top:0;right:100%;display:flex;visibility:hidden;opacity:0;transition:all .3s ease;-webkit-animation-duration:.2s;animation-duration:.2s}.ui-search-table-actions:hover .ui-search-table-actions-btns{visibility:visible;opacity:1}',""]),t.exports=o},560:function(t,e,r){"use strict";r.r(e);r(48),r(34),r(41),r(75),r(76);var o=r(33);r(93),r(27),r(190),r(13),r(26),r(28),r(561),r(405),r(40);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{action:{default:""},refreshUrl:{default:!0},exportUrl:{default:""}},data:function(){return{params:l({},this.$route.query),selecteds:[]}},methods:{submit:function(){var t=this;this.refreshUrlQueryString(),setTimeout((function(){t.$refs.search.submit()}),100)},refreshUrlQueryString:function(){this.refreshUrl&&this.$router.push({query:this.params})},getExportUrl:function(t){var u=new URL(location.href);for(var i in u.searchParams.set("format",t),this.$route.query)u.searchParams.set(i,this.$route.query[i]);return this.exportUrl+u.search},orderbyClickHandle:function(){var t=this;this.$el.addEventListener("click",(function(e){var r=e.target.getAttribute("data-orderby");r&&(t.params.orderby==r?t.params.order="desc"==t.params.order?"asc":"desc":(t.params.orderby=r,t.params.order=t.params.order?t.params.order:"desc"),t.$el.querySelectorAll("table thead th").forEach((function(e){e.classList.remove("ui-search-table-orderby-asc"),e.classList.remove("ui-search-table-orderby-desc"),e.getAttribute("data-orderby")==t.params.orderby&&e.classList.add("desc"==t.params.order?"ui-search-table-orderby-desc":"ui-search-table-orderby-asc")})),t.submit())}))}},mounted:function(){this.orderbyClickHandle()}},d=(r(558),r(16)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-form",{ref:"search",attrs:{method:"get",action:t.action,"mounted-submit":!0},on:{response:function(e){return t.refreshUrlQueryString()}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.loading,n=e.response;return[r("div",{staticClass:"row g-0"},[t.$slots.actions?r("div",{staticClass:"ui-search-header-actions col-12 d-flex align-items-center justify-content-end mb-3"},[t.selecteds.length>0?[t._t("selecteds-actions")]:t._e(),t._v(" "),t.exportUrl?r("el-dropdown",[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n                    Download "),r("i",{staticClass:"fas fa-fw fa-download"})]),t._v(" "),r("el-dropdown-menu",t._l(["json","csv","html"],(function(e){return r("el-dropdown-item",{key:e},[r("a",{staticClass:"text-uppercase",attrs:{href:t.getExportUrl(e),target:"_blank"}},[t._v(t._s(e))])])})),1)],1):t._e(),t._v(" "),t._t("actions")],2):t._e(),t._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("div",{staticStyle:{position:"sticky",top:"0"}},[r("ui-field",[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.params.q,expression:"params.q"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Busca"},domProps:{value:t.params.q},on:{input:function(e){e.target.composing||t.$set(t.params,"q",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[t.params.q?r("button",{staticClass:"btn border-0 bg-transparent",attrs:{type:"button"},on:{click:function(e){t.params.q=""}}},[r("i",{staticClass:"fas fa-fw fa-times"})]):r("button",{staticClass:"btn border-0 bg-transparent",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])])]),t._v(" "),t._t("search"),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:o,expression:"loading"}],staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v("\n                    Buscar\n                ")]),t._v(" "),r("button",{staticClass:"btn btn-light w-100 mt-3",attrs:{type:"button"},on:{click:function(e){t.params={},t.submit()}}},[t._v("\n                    Limpar\n                ")])],2)]),t._v(" "),r("div",{staticClass:"col-12 col-md-9 pt-3 pt-md-0 ps-0 ps-md-3"},[r("table",{staticClass:"table table-borderless table-striped table-hover"},[r("thead",[r("tr",[t._t("table-header",(function(){return[r("th",[t._v("Nome")])]})),t._v(" "),r("th",{attrs:{width:"50px"}})],2)]),t._v(" "),r("tbody",[n.data&&0==n.data.length?r("tr",[t._t("table-empty",(function(){return[r("td",{staticClass:"text-center py-3"},[t._v("\n                                Nenhum item encontrado\n                            ")])]}))],2):t._e(),t._v(" "),t._l(n.data,(function(i){return r("tr",{class:{"bg-light":t.selecteds.indexOf(i)>=0}},[t._t("table-row",(function(){return[r("td",[t._v(t._s(i))])]}),{item:i}),t._v(" "),r("td",[r("div",{staticClass:"ui-search-table-actions"},[r("button",{staticClass:"btn btn-light border-0",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-plus"})]),t._v(" "),r("div",{staticClass:"ui-search-table-actions-btns"},[t._t("table-actions",null,{item:i})],2)])])],2)}))],2)]),t._v(" "),r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":t.params.page,"page-size":t.params.per_page,"pager-count":11,total:n?n.total:0,"page-sizes":[5,10,25,50,100]},on:{"update:currentPage":function(e){return t.$set(t.params,"page",e)},"update:current-page":function(e){return t.$set(t.params,"page",e)},"update:pageSize":function(e){return t.$set(t.params,"per_page",e)},"update:page-size":function(e){return t.$set(t.params,"per_page",e)},"size-change":function(e){return t.submit()},"current-change":function(e){return t.submit()},"prev-click":function(e){return t.submit()},"next-click":function(e){return t.submit()}}})],1)])]}}],null,!0),model:{value:t.params,callback:function(e){t.params=e},expression:"params"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(547).default,UiForm:r(550).default})},567:function(t,e,r){"use strict";r.r(e);var o={props:{value:[Boolean,String,Array,Object]},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"modal show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.emitValue()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t._t("header"),t._v(" "),r("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){t.props.value=!1,t.emitValue()}}})],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),r("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},576:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{group:!1,search:{}}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-search",{ref:"search",attrs:{action:"/api/wordle-groups/search"},scopedSlots:t._u([{key:"table-header",fn:function(){return[r("th",{attrs:{"data-orderby":"name"}},[t._v("Nome")]),t._v(" "),r("th",{attrs:{"data-orderby":"updated_at"}},[t._v("Alteração")])]},proxy:!0},{key:"table-row",fn:function(e){var o=e.item;return[r("td",[t._v(t._s(o.name))]),t._v(" "),r("td",[t._v(t._s(t._f("dateFormat")(o.updated_at)))])]}},{key:"table-actions",fn:function(e){var o=e.item;return[r("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(e){t.group=o}}},[t._v("Editar")])]}},{key:"actions",fn:function(){return[r("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:;"},on:{click:function(e){t.group={}}}},[t._v("Novo grupo")])]},proxy:!0}])}),t._v(" "),r("ui-form",{attrs:{method:"post",action:"/api/wordle-groups/save"},on:{success:function(e){t.group=!1,t.$refs.search.submit()}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.loading,n=e.errorFields;return[r("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v(t._s(t.group.name||"Novo Grupo"))]},proxy:!0},{key:"body",fn:function(){return[r("ui-field",{attrs:{label:"Nome do grupo",error:n.name}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.group.name,expression:"group.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.group.name},on:{input:function(e){e.target.composing||t.$set(t.group,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Quantidade de letras",error:n.letters}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.group.letters,expression:"group.letters"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.group.letters},on:{input:function(e){e.target.composing||t.$set(t.group,"letters",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Quantidade de tentativas",error:n.attempts}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.group.attempts,expression:"group.attempts"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.group.attempts},on:{input:function(e){e.target.composing||t.$set(t.group,"attempts",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{error:n.show_winners}},[r("div",{staticClass:"d-flex align-items-center"},[r("el-switch",{attrs:{"active-value":1,"inactive-value":" "},model:{value:t.group.show_winners,callback:function(e){t.$set(t.group,"show_winners",e)},expression:"group.show_winners"}}),t._v(" "),r("div",{staticClass:"flex-grow-1 ps-3"},[t._v("Exibir vencedores à medida que forem vencendo?")])],1)]),t._v(" "),r("ui-field",{attrs:{label:"Jogo termina quando x players vencerem",error:n.geaxpw}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.group.geaxpw,expression:"group.geaxpw"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.group.geaxpw},on:{input:function(e){e.target.composing||t.$set(t.group,"geaxpw",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Duração do jogo em minutos",error:n.duration}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.group.duration,expression:"group.duration"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.group,"duration",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("Ilimitado")]),t._v(" "),r("option",{domProps:{value:30}},[t._v("30 minutos")]),t._v(" "),r("option",{domProps:{value:60}},[t._v("1 hora")]),t._v(" "),r("option",{domProps:{value:360}},[t._v("6 horas")]),t._v(" "),r("option",{domProps:{value:720}},[t._v("12 horas")]),t._v(" "),r("option",{domProps:{value:1440}},[t._v("1 dia")])])])]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){t.group={}}}},[t._v("\n                    Limpar\n                ")]),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:o,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                    Salvar\n                ")])]},proxy:!0}],null,!0),model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})]}}]),model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiSearch:r(560).default,UiField:r(547).default,UiModal:r(567).default,UiForm:r(550).default})}}]);