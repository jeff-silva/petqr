(window.webpackJsonp=window.webpackJsonp||[]).push([[43,9,19,28],{550:function(t,e,r){var content=r(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(75).default)("039c59a2",content,!0,{sourceMap:!1})},552:function(t,e,r){"use strict";var o=r(13),n=r(3),l=r(4),c=r(135),d=r(20),f=r(16),v=r(405),h=r(48),m=r(134),_=r(404),w=r(5),x=r(93).f,y=r(40).f,E=r(18).f,N=r(406),C=r(554).trim,$="Number",I=n.Number,S=I.prototype,L=n.TypeError,k=l("".slice),A=l("".charCodeAt),O=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,o,n,l,c,d,code,f=_(t,"number");if(m(f))throw L("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(e=A(f,0))||45===e){if(88===(r=A(f,2))||120===r)return NaN}else if(48===e){switch(A(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(l=k(f,2)).length,d=0;d<c;d++)if((code=A(l,d))<48||code>n)return NaN;return parseInt(l,o)}return+f};if(c($,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var z,T=function(t){var e=arguments.length<1?0:I(O(t)),r=this;return h(S,r)&&w((function(){N(r)}))?v(Object(e),r,T):e},P=o?x(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),U=0;P.length>U;U++)f(I,z=P[U])&&!f(T,z)&&E(T,z,y(I,z));T.prototype=S,S.constructor=T,d(n,$,T)}},553:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(552),r(556),r(190),{props:{label:{default:""},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object],widthBreakpoint:{default:600}},computed:{_compError:function(){var t=[];return"string"==typeof this.error?t=[this.error]:Array.isArray(this.error)?t=this.error:"object"==Object(o.a)(this.error)&&(t=Object.values(this.error)),t.join("<br>")}},data:function(){return{parentWidth:0,isLarge:!1}},methods:{calculateSizes:function(){this.parentWidth=this.$el.offsetWidth,this.isLarge=this.$el.offsetWidth>=this.widthBreakpoint},resizeEventListener:function(t){this.calculateSizes()}},beforeDestroy:function(){window.removeEventListener("resize",this.resizeEventListener)},mounted:function(){this.calculateSizes(),window.addEventListener("resize",this.resizeEventListener)}}),l=(r(557),r(14)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-field mb-3",class:{"d-flex":t.isLarge,"ui-field-error":t._compError}},[r("div",{class:{"py-2":t.isLarge,"pb-1":!t.isLarge},style:"min-width:"+(t.isLarge?null:t.labelWidth)+"; max-width:"+(t.isLarge?null:t.labelWidth)+";"},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),r("div",{class:{"flex-grow-1":t.isLarge}},[t._t("default"),t._v(" "),t._compError?r("small",{staticClass:"d-block text-danger",domProps:{innerHTML:t._s(t._compError)}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},554:function(t,e,r){var o=r(4),n=r(25),l=r(15),c=r(555),d=o("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(t){return function(e){var r=l(n(e));return 1&t&&(r=d(r,v,"")),2&t&&(r=d(r,h,"")),r}};t.exports={start:m(1),end:m(2),trim:m(3)}},555:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},556:function(t,e,r){var o=r(6),n=r(407).values;o({target:"Object",stat:!0},{values:function(t){return n(t)}})},557:function(t,e,r){"use strict";r(550)},558:function(t,e,r){var o=r(74)(!1);o.push([t.i,".ui-field-error .el-input__inner,.ui-field-error .form-control{border-color:var(--bs-danger);box-shadow:none!important;outline:0!important}",""]),t.exports=o},561:function(t,e,r){"use strict";r.r(e);r(61);var o={props:{value:{default:""},show:{default:!1},placeholder:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,this.$emit("input",t.value||!1),t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10)}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group form-control p-0"},["checkbox"==(t.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"==(t.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:t.props.show?"text":"password"},domProps:{value:t.props.value},on:{input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.props.show=!t.props.show}}},[t.props.show?r("i",{staticClass:"fas fa-eye"}):r("i",{staticClass:"fas fa-eye-slash"})])])])}),[],!1,null,null,null);e.default=component.exports},577:function(t,e,r){"use strict";r.r(e);var o={props:{redirect:{value:""}},data:function(){return{error:!1,loading:!1,post:{email:"",password:""}}},methods:{submit:function(){var t=this;this.error=!1,this.loading=!0,this.$auth.loginWith("jwt",{data:this.post}).then((function(e){t.loading=!1,t.redirect&&t.$router.push(t.redirect)})).catch((function(e){t.error=!0,t.loading=!1,console.log("Erro:",e)}))}}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$auth.user?r("div",[r("nuxt-link",{staticClass:"btn btn-primary w-100",attrs:{to:t.redirect||""}},[t._v("\n            Continuar como "+t._s(t.$auth.user.name)+"\n        ")]),t._v(" "),r("div",{staticClass:"mb-2"}),t._v(" "),r("ui-auth-logout",{staticClass:"btn btn-light w-100",attrs:{redirect:"/"}},[t._v("\n            Sair\n        ")])],1):r("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("body",(function(){return[r("ui-field",{attrs:{label:"Email"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.post.email,expression:"post.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.email},on:{input:function(e){e.target.composing||t.$set(t.post,"email",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Senha"}},[r("ui-password",{model:{value:t.post.password,callback:function(e){t.$set(t.post,"password",e)},expression:"post.password"}})],1)]})),t._v(" "),t._t("action",(function(){return[r("button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v("\n                Entrar\n            ")])]})),t._v(" "),t.error?r("div",[t._t("error",(function(){return[r("div",{staticClass:"text-danger text-center fw-bold mt-2"},[t._v("Usuário ou senha incorreto")])]}))],2):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiAuthLogout:r(410).default,UiField:r(553).default,UiPassword:r(561).default})},688:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{navItems:[{label:"Home",to:"/dev/",children:[]},{label:"Endpoints",to:"/dev/endpoints/",children:[]}]}}},n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$auth.user?r("div",{staticClass:"d-flex"},[r("div",{staticClass:"bg-dark",staticStyle:{height:"100vh",width:"200px"}},[r("ui-nav",{attrs:{items:t.navItems,"text-color":"#fff"}})],1),t._v(" "),r("div",{staticClass:"flex-grow-1 p-3",staticStyle:{height:"100vh",overflow:"auto"}},[r("nuxt-child")],1)]):r("div",{staticClass:"mx-auto mt-5",staticStyle:{"max-width":"400px"}},[r("div",{staticClass:"mb-3"},[t._v("É necessário estar logado para visualizar este conteúdo.")]),t._v(" "),r("ui-auth-login",{attrs:{redirect:t.$route.path}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiNav:r(411).default,UiAuthLogin:r(577).default})}}]);