(function(t){function e(e){for(var r,a,l=e[0],c=e[1],s=e[2],d=0,p=[];d<l.length;d++)a=l[d],i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3139:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"getType",function(){return s}),n.d(r,"isFalse",function(){return u}),n.d(r,"isTrue",function(){return d}),n.d(r,"isFile",function(){return p});var i=n("2b0e"),o=n("e083"),a=(n("3321"),n("8c4f")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"route-login"},[n("div",{staticClass:"cmn-center-middle login-form"},[n("div",[n("q-input",{attrs:{"float-label":"请输入姓名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("div",[n("q-input",{attrs:{"float-label":"请输入手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),n("div",[n("q-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.login}},[t._v("登录")])],1),n("div",{staticClass:"tip"},[t._v("\n      温馨提示：如果提示未匹配到信息，请确认手机号和姓名是否正确或前往物业进行信息登记\n    ")])]),n("div",[t._v("\n    "+t._s(t.location)+"\n  ")])])},c=[];const s=t=>{return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},u=t=>{return void 0===t||null===t||""===t},d=t=>{return!u(t)},p=t=>{return!!d(t)&&"file"===s(t)},{isFalse:f}=r;var m={data(){return{username:"",mobile:"",loading:!1,location:window.location}},methods:{login(){f(this.username)?this.$q.notify({color:"negative",message:"请填写姓名!",timeout:100,position:"top"}):this.$router.push({path:"/main"})}},mounted(){alert(location.href.split("#")[0]),wx.config({debug:!0,appId:"wx6357a387a159722c",timestamp:1558339436,nonceStr:"1hqd5tiw2oi",signature:"a4e2862e794e27e0d85273a5f9b1c3e059d0084d",jsApiList:["uploadImage"]}),wx.ready(t=>{console.log("res",t)})}},v=m,b=(n("e330"),n("2877")),h=Object(b["a"])(v,l,c,!1,null,null,null),g=h.exports,y=g,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"route-main"},[n("router-link",{attrs:{to:"/main"}},[t._v("main")]),n("br"),n("router-link",{attrs:{to:"/login"}},[t._v("login")]),n("br"),n("router-link",{attrs:{to:"/main/mainChild"}},[t._v("mainChild")]),n("router-view"),n("div",{staticClass:"cmn-center-middle"},[n("div",[n("q-btn",{staticClass:"circle bg-primary",style:t.circleStyle},[t._v("订餐")])],1),n("div",[n("q-btn",{staticClass:"circle bg-secondary",style:t.circleStyle},[t._v("洗车")])],1),n("div",[n("q-btn",{staticClass:"circle bg-light-blue",style:t.circleStyle},[t._v("超市")])],1)])],1)},_=[],x={name:"App",data(){return{}},computed:{circleStyle(){const t=window.innerHeight-200;return{width:t/3+"px",height:t/3+"px"}}},mounted(){}},j=x,O=(n("c165"),Object(b["a"])(j,w,_,!1,null,null,null)),C=O.exports,S=C,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/main"}},[t._v("main")])],1)},$=[],q={},P=q,E=Object(b["a"])(P,k,$,!1,null,"73ef2795",null),T=E.exports,M=T;const A=[{path:"/",component:y},{path:"/login",component:y,meta:{title:"登录"}},{path:"/main",component:S,meta:{title:"主页"},children:[{path:"mainChild",component:M}]}];var F=A;const I="预定系统",J=(t,e,n)=>{console.log(t,e),t.meta.title&&(window.document.title=`${I}-${t.meta.title}`),n()};var L=J;i["a"].use(a["a"]);const H=new a["a"]({routes:F});H.beforeEach(L);var z=H,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide-left"}},[n("router-view",{staticClass:"route"})],1)],1)},D=[],G={name:"App",data(){return{on:!0}},methods:{toggle(){this.on=!this.on}}},K=G,N=(n("5c0b"),Object(b["a"])(K,B,D,!1,null,null,null)),Q=N.exports;n("8594");i["a"].use(o["a"]),i["a"].config.productionTip=!1,new i["a"]({render:t=>t(Q),router:z}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},"6b10":function(t,e,n){},8594:function(t,e,n){},c165:function(t,e,n){"use strict";var r=n("3139"),i=n.n(r);i.a},e330:function(t,e,n){"use strict";var r=n("6b10"),i=n.n(r);i.a}});
//# sourceMappingURL=app.c5e31940.js.map