(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5cda"],{"709d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"register-page"}},[a("router-link",{attrs:{id:"home",to:"/"}},[e._v("Home Page")]),a("div",{attrs:{id:"registerForm"}},[a("h2",{attrs:{id:"register-title"}},[e._v("Register")]),a("div",[a("label",[e._v("Name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],attrs:{"data-test":"test-register-name",type:"text",placeholder:"Tina Belcher"},domProps:{value:e.data.name},on:{blur:function(t){return e.validate()},input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}})])]),a("div",[a("label",[e._v("Email: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"}],attrs:{"data-test":"test-register-email",type:"text",placeholder:"tinabelcher@email.com"},domProps:{value:e.data.email},on:{blur:function(t){return e.validate()},input:function(t){t.target.composing||e.$set(e.data,"email",t.target.value)}}})])]),a("div",[a("label",[e._v("Password: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.password,expression:"data.password"}],attrs:{"data-test":"test-register-password",type:"password",placeholder:"Must be 8 characters"},domProps:{value:e.data.password},on:{blur:function(t){return e.validate()},input:function(t){t.target.composing||e.$set(e.data,"password",t.target.value)}}})])]),a("button",{attrs:{"data-test":"test-register-button"},on:{click:e.registerUser}},[e._v(" Register ")]),a("br"),e.errors?a("ul",e._l(e.errors,(function(t,r){return a("li",{key:r,attrs:{id:"register-errors"}},[e._v(" "+e._s(t.toString())+" ")])})),0):e._e(),a("router-link",{attrs:{id:"login-link",to:"/account"}},[e._v("Have an Account? Login Now!")])],1)],1)},s=[],i=a("1112"),n=a("1c4a"),o=a.n(n),d={data:function(){return{data:{name:null,email:null,password:null},errors:null,favorites:[]}},computed:{user:function(){return this.$store.state.user}},methods:{validate:function(){var e=new o.a(this.data,{name:"required",email:"required",password:"required"});return this.errors=e.errors.all(),e.passes()},registerUser:function(){var e=this;i["a"].post("/register",this.data).then((function(t){t.data.success?(e.$store.commit("setUser",t.data.user),e.$router.push("/account")):e.errors=t.data.errors}))}}},l=d,u=a("2877"),c=Object(u["a"])(l,r,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0d5cda.80dd3181.js.map