(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99ad0f98"],{1276:function(t,e,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),p=n("d039"),f=[].push,v=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),a=void 0===n?h:n>>>0;if(0===a)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,a);var s,c,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,p+"g");while(s=d.call(g,i)){if(c=g.lastIndex,c>v&&(l.push(i.slice(v,s.index)),s.length>1&&s.index<i.length&&f.apply(l,s.slice(1)),u=s[0].length,v=c,l.length>=a))break;g.lastIndex===s.index&&g.lastIndex++}return v===i.length?!u&&g.test("")||l.push(""):l.push(i.slice(v)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,t,this,r,i!==e);if(o.done)return o.value;var d=a(t),p=String(this),f=s(d,RegExp),x=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),_=new f(g?d:"^(?:"+d.source+")",m),E=void 0===r?h:r>>>0;if(0===E)return[];if(0===p.length)return null===l(_,p)?[p]:[];var R=0,I=0,b=[];while(I<p.length){_.lastIndex=g?I:0;var y,k=l(_,g?p:p.slice(I));if(null===k||(y=v(u(_.lastIndex+(g?0:I)),p.length))===R)I=c(p,I,x);else{if(b.push(p.slice(R,I)),b.length===E)return b;for(var w=1;w<=k.length-1;w++)if(b.push(k[w]),b.length===E)return b;I=R=y}}return b.push(p.slice(R)),b}]}),!g)},"14c3":function(t,e,n){var i=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4f58":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.recipe?n("div",[n("h1",{attrs:{"data-test":"test-recipe-name"}},[t._v(t._s(t.recipe.name))]),n("router-link",{attrs:{id:"home",to:"/"}},[t._v("Home Page")]),n("router-link",{attrs:{id:"account-link",to:"/account"}},[t._v("Account")]),n("router-link",{attrs:{id:"add",to:"/add"}},[t._v("Add Recipe")]),n("router-link",{attrs:{"data-test":"test-edit-link",id:"edit",to:"/edit/"+t.recipe.id}},[t._v("Edit Recipe")]),t.showConfirmationMessage?n("div",{attrs:{id:"confirmation-message","data-test":"test-add-confirmation"}},[t._v(" Added Ingrediant to Shopping List ")]):t._e(),n("div",{staticClass:"recipe"},[t.user?n("div",[t.isFavorite?n("button",{attrs:{"data-test":"test-add-favorite",id:"add-favorite"},on:{click:function(e){return t.deleteFavorite()}}},[t._v(" Remove from Favorites ")]):n("button",{attrs:{"data-test":"test-remove-favorite",id:"remove-favorite"},on:{click:function(e){return t.addFavorite()}}},[t._v(" Add to Favorites ")])]):t._e(),n("h2",{attrs:{id:"ingrediants-title"}},[t._v("Ingrediants")]),n("ul",{attrs:{id:"ingrediant-list"}},t._l(t.splitItem,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" "),n("button",{attrs:{"data-test":"test-add-list",id:"add-shoppinglist"},on:{click:function(n){return t.addShoppingList(e)}}},[t._v(" Buy ")])])})),0),n("h2",{attrs:{id:"instructions-title"}},[t._v("Instructions")]),n("ul",{attrs:{id:"ingrediant-list"}},t._l(t.splitInstructions,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0),t.user?n("button",{attrs:{"data-test":"test-delete-button",id:"delete-recipe"},on:{click:t.deleteRecipe}},[t._v(" Delete Recipe ")]):t._e()])],1):t._e(),t.recipeNotFound?n("div",[n("router-link",{attrs:{id:"home",to:"/"}},[t._v("Home Page")]),n("router-link",{attrs:{id:"add",to:"/add"}},[t._v("Add Recipe")]),n("p",{attrs:{id:"unknown-recipe"}},[t._v("Recipe "+t._s(t.id)+" Not Found.")])],1):t._e()])},r=[],a=(n("ac1f"),n("1276"),n("1112")),o={components:{},name:"",props:["id"],data:function(){return{showConfirmationMessage:!1,items:[],newIngrediant:null,isFavorite:!1,favoriteId:null}},methods:{deleteRecipe:function(){var t=this;a["a"].delete("/recipe/"+this.id).then((function(e){e.data.errors?t.errors=e.data.errors:(t.$store.dispatch("fetchRecipes"),t.$router.push({path:"/"}))}))},addShoppingList:function(t){var e=this;a["b"].add(t,1),this.$store.commit("setCartCount",a["b"].count()),this.showConfirmationMessage=!0,setTimeout((function(){return e.showConfirmationMessage=!1}),2e3)},getFavoriteDetails:function(){var t=this;a["a"].get("/favorite/query?recipe_id="+this.id).then((function(e){e.data.results.length>0&&(t.favoriteId=e.data.results[0].id,t.isFavorite=!0)}))},addFavorite:function(){var t=this;a["a"].post("/favorite",{recipe_id:this.id}).then((function(e){e.data.success&&(t.isFavorite=!0,t.favoriteId=e.data.favorite.id,t.errors=e.data.errors)}))},deleteFavorite:function(){var t=this;a["a"].delete("/favorite/"+this.favoriteId).then((function(e){e.data.success&&(t.isFavorite=!1,t.favoriteId=null)}))}},computed:{recipe:function(){return this.$store.getters.getRecipeById(this.id)},recipes:function(){return this.$store.state.recipes},recipeNotFound:function(){return null==this.recipe},user:function(){return this.$store.state.user},splitItem:function(){return this.recipe.ingrediants.split(",")},splitInstructions:function(){return this.recipe.instructions.split(",")}},watch:{user:function(t){t&&this.getFavoriteDetails()}},mounted:function(){this.user&&this.getFavoriteDetails()}},s=o,c=n("2877"),u=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=u.exports},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),a=function(t){return function(e,n){var a,o,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===u||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},9263:function(t,e,n){"use strict";var i=n("ad6d"),r=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,s=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],d=c||l||u;d&&(s=function(t){var e,n,r,s,d=this,p=u&&d.sticky,f=i.call(d),v=d.source,h=0,g=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",f)),l&&(n=new RegExp("^"+v+"$(?!\\s)",f)),c&&(e=d.lastIndex),r=a.call(p?n:d,g),p?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:c&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),l&&r&&r.length>1&&o.call(r[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(r[s]=void 0)})),r}),t.exports=s},"9f7f":function(t,e,n){"use strict";var i=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var i=n("23e7"),r=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),r=n("d039"),a=n("b622"),o=n("9263"),s=n("9112"),c=a("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var v=a(t),h=!r((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!u||!l||p)||"split"===t&&!f){var x=/./[v],m=n(v,""[t],(function(t,e,n,i,r){return e.exec===o?h&&!r?{done:!0,value:x.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),_=m[0],E=m[1];i(String.prototype,t,_),i(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}d&&s(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-99ad0f98.344915f3.js.map