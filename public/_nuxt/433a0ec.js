(window.webpackJsonp=window.webpackJsonp||[]).push([[34,22],{559:function(t,e,n){"use strict";n.r(e);n(12);var r={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(e){var n=t.parseResponseData(e.data);t.loading=!1,t.response=n,t.$emit("success",n),t.$emit("response",n),t.successText&&t.$swal.fire(t.successText)})).catch((function(e){var n=t.parseResponseData(e.response.data);t.loading=!1,t.error=n.message,t.errorFields=n.fields,t.$emit("error",n),t.$emit("response",n)}))},parseResponseData:function(t){return["per_page","page"].forEach((function(e){"string"==typeof t[e]&&(t[e]=parseInt(t[e]))})),t}},mounted:function(){this.mountedSubmit&&this.submit()}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,n){var content=n(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("dc996836",content,!0,{sourceMap:!1})},571:function(t,e,n){"use strict";n(562)},572:function(t,e,n){var r=n(74)(!1);r.push([t.i,"@media (max-width:768px){.ui-model-edit-fields{margin-bottom:50px}.ui-model-edit-actions{position:fixed;bottom:0;left:0;width:100%;display:flex}.ui-model-edit-actions>.btn{flex-basis:100%;text-align:center;margin-left:5px;margin-right:5px}}",""]),t.exports=r},577:function(t,e,n){"use strict";n.r(e);var r=n(21),o=(n(552),n(61),n(94),n(409),n(12),{props:{value:{default:function(){return{}},type:[Boolean,Number,String,Object]},modelName:{default:""},modelId:{default:!1,type:[Boolean,Number,String]},singular:{default:"Item"},plural:{default:"Itens"},showActions:{default:!0},redirect:{default:"edit"}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10)}}},computed:{_modelId:function(){var t=+this.props.modelId;return"object"==Object(r.a)(this.props.value)&&this.props.value.id&&(t=+this.props.value.id),!isNaN(t)&&t}},data:function(){return{finding:!1,props:JSON.parse(JSON.stringify(this.$props))}},methods:{find:function(){var t=this;this._modelId&&(this.finding=!0,this.$axios.get("/api/".concat(this.modelName,"/find/").concat(this._modelId)).then((function(e){t.finding=!1,t.props.value=e.data})))},onSuccess:function(t){var e=this;this.props.value=t,this.$emit("success",t),this.$swal.fire({title:"Dados de ".concat(this.singular," foram salvos"),confirmButtonText:"Lista de ".concat(this.plural),showCancelButton:!0,cancelButtonText:"Fechar"}).then((function(t){t.isConfirmed&&e.$router.push("/admin/".concat(e.modelName,"/"))}))},successRedirect:function(){"edit"==this.redirect?this.$router.push("/admin/".concat(this.modelName,"/").concat(this.props.value&&this.props.value.id?this.props.value.id:"new")):"back"==this.redirect?this.$router.go(-1):this.$router.push(this.redirect)}},mounted:function(){this.find()}}),l=(n(571),n(14)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-form",{attrs:{method:"post",action:"/api/"+t.modelName+"/save"},on:{success:t.onSuccess},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.loading,o=e.error,l=e.errorFields;return[n("div",{staticClass:"ui-model-edit-fields bg-white p-3 shadow-sm"},[n("el-collapse-transition",[o?n("div",{staticClass:"alert alert-danger"},[n("a",{staticClass:"float-end text-danger fw-bold",attrs:{href:"javascript:;"},on:{click:function(t){o=!1}}},[n("i",{staticClass:"fas fa-fw fa-times"})]),t._v(" "),n("div",{domProps:{innerHTML:t._s(o)}})]):t._e()]),t._v(" "),t._t("default",null,{value:t.props.value,loading:r,error:o,errorFields:l})],2),t._v(" "),t.showActions?n("div",{staticClass:"ui-model-edit-actions text-end bg-white shadow-sm py-2 mt-md-3 p-md-3"},[t._t("actions"),t._v(" "),t.props.value.id?n("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/admin/"+t.modelName+"/new"}},[t._v("\n            Criar "+t._s(t.singular)+"\n        ")]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n            Voltar\n        ")]),t._v(" "),n("button",{directives:[{name:"loading",rawName:"v-loading",value:r,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n            Salvar\n        ")])],2):t._e()]}}],null,!0),model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:n(559).default})},586:function(t,e,n){"use strict";n.r(e);n(552),n(61),n(26),n(191);var r={props:{value:{default:"",type:[Boolean,Number,String,Array,Object]},multiple:{default:!1},disabled:{default:!1},loadingText:{default:"Carregando"},modelName:{default:""},singular:{default:"Item"},plural:{default:"Itens"}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,this.$emit("input",t.value||!1),t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10)}}},methods:{search:function(){var t=this;this.loading=!0,this.$axios.get("/api/".concat(this.modelName,"/search"),{params:this.searchParams}).then((function(e){t.loading=!1,t.results=e.data}))},remoteMethod:function(t){var e=this;this.searchParams.q=t,this.__remoteMethodTimeout&&clearTimeout(this.__remoteMethodTimeout),this.__remoteMethodTimeout=setTimeout((function(){return e.search()}),1e3)}},data:function(){return{loading:!1,searchParams:{q:"",id:this.value,per_page:10,orderby:"updated_at",order:"desc"},results:{},props:JSON.parse(JSON.stringify(this.$props))}},mounted:function(){this.search()}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",{staticClass:"w-100",attrs:{filterable:"",remote:"",placeholder:"Selecionar "+t.singular,"remote-method":t.remoteMethod,loading:t.loading,multiple:t.props.multiple,disabled:t.props.disabled,"loading-text":t.props.loadingText,"no-match-text":"Nenhum(a) "+t.singular+" encontrado(a)","no-data-text":"Nenhum(a) "+t.singular+" encontrado(a)"},on:{change:function(e){t.searchParams.q=""},blur:function(e){t.searchParams.q=""}},model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}},[t._l(t.results.data,(function(e){return[t._t("option",(function(){return[n("el-option",{key:e.id,attrs:{value:e.id,label:e.name}},[t._v("\n                "+t._s(e.name)+"\n            ")])]}),{item:e})]}))],2)}),[],!1,null,null,null);e.default=component.exports},706:function(t,e,n){"use strict";n.r(e);n(12),n(27),n(28),n(573),n(408);var r={layout:"default/admin",middleware:"auth",head:function(){return{title:"Editar página"}},data:function(){return{baseUrl:new URL(location.href).protocol+"//"+new URL(location.href).host+"/"}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-model-edit",{attrs:{"model-name":"pages","model-id":t.$route.params.id,singular:"Página",plural:"Páginas"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value,o=e.errorFields;return[n("ui-field",{attrs:{label:"Nome da página",layout:"horizontal",error:o.name}},[n("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"value.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:r.name},on:{input:function(e){e.target.composing||t.$set(r,"name",e.target.value)}}})]),t._v(" "),n("ui-field",{attrs:{label:"URL",layout:"horizontal",error:o.slug}},[n("div",{staticClass:"input-group form-control p-0"},[n("div",{staticClass:"input-group-text border-0 bg-transparent"},[t._v(t._s(t.baseUrl))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:r.slug,expression:"value.slug"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text"},domProps:{value:r.slug},on:{input:function(e){e.target.composing||t.$set(r,"slug",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-btn"},[n("a",{staticClass:"btn",attrs:{href:t.baseUrl+r.slug,target:"_blank"}},[n("i",{staticClass:"fas fa-fw fa-link"})])])])]),t._v(" "),n("ui-field",{attrs:{label:"Proprietário",layout:"horizontal",error:o.owner}},[n("ui-model-select",{attrs:{"model-name":"user"},model:{value:r.owner,callback:function(e){t.$set(r,"owner",e)},expression:"value.owner"}})],1),t._v(" "),n("ui-field",{attrs:{label:"Conteúdo",layout:"horizontal",error:o.content}},[n("ui-content",{attrs:{edit:!0},model:{value:r.content,callback:function(e){t.$set(r,"content",e)},expression:"value.content"}})],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:n(553).default,UiModelSelect:n(586).default,UiContent:n(591).default,UiModelEdit:n(577).default})}}]);