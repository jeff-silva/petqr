(window.webpackJsonp=window.webpackJsonp||[]).push([[14,12],{547:function(t,e,n){"use strict";n.r(e);n(12);var r={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;this.loading=!0,this.error=!1,this.errorFields={};var e=this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null});return e.then((function(e){var n=t.parseResponseData(e.data);t.loading=!1,t.response=n,t.$emit("success",n),t.$emit("response",n)})).catch((function(e){var n=t.parseResponseData(e.response.data);t.loading=!1,t.error=n.message,t.errorFields=n.fields,t.$emit("error",n),t.$emit("response",n)})),e},parseResponseData:function(t){return["per_page","page"].forEach((function(e){"string"==typeof t[e]&&(t[e]=parseInt(t[e]))})),t}},mounted:function(){this.mountedSubmit&&this.submit()}},o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},561:function(t,e,n){"use strict";n.r(e);n(93),n(406),n(12);var r={props:{modelName:{type:""}},data:function(){return{finding:!1,value:{}}},methods:{find:function(){var t=this;+this.$route.params.id&&(this.finding=!0,this.$axios.get("/api/".concat(this.modelName,"/find/").concat(this.$route.params.id)).then((function(e){t.finding=!1,t.value=e.data})))}},mounted:function(){this.find()}},o=n(16),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-form",{directives:[{name:"loading",rawName:"v-loading",value:t.finding,expression:"finding"}],attrs:{method:"post",action:"/api/"+t.modelName+"/save"},on:{success:function(e){return t.$router.go(-1)}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.loading,o=e.error,l=e.errorFields;return[t._t("default",null,{value:t.value,loading:r,error:o,errorFields:l}),t._v(" "),n("div",{staticClass:"text-end pt-3"},[t.value.id?n("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/admin/"+t.modelName+"/new"}},[t._v("\n            Novo\n        ")]):t._e(),t._v(" "),n("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n            Voltar\n        ")]),t._v(" "),n("button",{directives:[{name:"loading",rawName:"v-loading",value:r,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n            Salvar\n        ")])],1)]}}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:n(547).default})}}]);