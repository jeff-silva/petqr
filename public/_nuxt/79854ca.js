(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{571:function(e,t,r){"use strict";r.r(t);r(61),r(26),r(191);var n={props:{value:{default:""},returnField:{default:!1,type:[Boolean,String]}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,this.$emit("input",e.value||!1),e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},data:function(){return{search:{params:{q:""},loading:!1,response:!1},props:JSON.parse(JSON.stringify(this.$props))}},methods:{filesSearch:function(){var e=this;this.search.loading=!0,this.__fileSearchTimeout&&clearTimeout(this.__fileSearchTimeout),this.__fileSearchTimeout=setTimeout((function(){e.$axios.get("/api/files/search",{params:e.search.params}).then((function(t){e.search.loading=!1,e.search.response=t.data}))}),1e3)},filesSelect:function(e){e=JSON.parse(JSON.stringify(e)),this.returnField&&(e=e[this.returnField]||!1),this.props.value=e}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search.params.q,expression:"search.params.q"}],staticClass:"form-control border-0 shadow-none",attrs:{type:"text",placeholder:"Buscar arquivo"},domProps:{value:e.search.params.q},on:{keyup:function(t){return e.filesSearch()},input:function(t){t.target.composing||e.$set(e.search.params,"q",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{directives:[{name:"loading",rawName:"v-loading",value:e.search.loading,expression:"search.loading"}],staticClass:"btn btn-primary border-0 shadow-none rounded-0",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])]),e._v(" "),e.search.response?r("div",{staticClass:"list-inline p-2 border border-light shadow-sm mt-2"},[0==e.search.response.data.length?r("div",{staticClass:"list-inline-item",staticStyle:{cursor:"pointer"}},[r("div",{staticStyle:{padding:"12px 0",width:"100%","text-align":"center"}},[e._v("Nenhum arquivo encontrado")])]):e._e(),e._v(" "),e._l(e.search.response.data,(function(t){return r("div",{staticClass:"list-inline-item",staticStyle:{cursor:"pointer"},on:{click:function(r){return e.filesSelect(t)}}},["image"==t.type?r("img",{key:t.id,staticStyle:{width:"50px",height:"50px","object-fit":"cover"},attrs:{src:t.url,alt:""}}):r("div",{staticStyle:{padding:"12px 0",width:"50px","text-align":"center"}},[e._v(e._s(t.ext))])])}))],2):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);