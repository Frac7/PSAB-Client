(this.webpackJsonppsab=this.webpackJsonppsab||[]).push([[6],{118:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return h}));var r=n(81),a=n(82),c=n(626),o=n(317),u=n(627),i=n(628);function s(){var e=Object(r.a)(["\n\tcolor: #006D77;\n"]);return s=function(){return e},e}function l(){var e=Object(r.a)(["\n\tbackground-color: #006D77;\n"]);return l=function(){return e},e}function f(){var e=Object(r.a)(["\n\tcolor: #006D77;\n"]);return f=function(){return e},e}function d(){var e=Object(r.a)(["\n\tcolor: #006D77 !important;\n\n\t&:hover {\n\t\tcolor: #005059 !important;\n\t}\n\n\t&:active {\n\t\tcolor: #005059 !important;\n\t}\n\n\t&:focus {\n\t\tcolor: #005059 !important;\n\t}\n"]);return d=function(){return e},e}function b(){var e=Object(r.a)(["\n\tbackground-color: #006D77 !important;\n\n\t&:hover {\n\t\tbackground-color: #005059 !important;\n\t}\n\n\t&:active {\n\t\tbackground-color: #005059 !important;\n\t}\n\n\t&:focus {\n\t\tbackground-color: #005059 !important;\n\t}\n"]);return b=function(){return e},e}function O(){var e=Object(r.a)(["\n\tbackground-color: #006D77 !important;\n"]);return O=function(){return e},e}var m=Object(a.a)(c.a)(O()),E=Object(a.a)(o.a)(b()),p=Object(a.a)(o.a)(d()),j=Object(a.a)(u.a)(f()),g=Object(a.a)(i.a)(l()),h=function(e){return Object(a.a)(e)(s())}},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,a=n(33),c=n(629),o=n(27),u=Object(c.a)((r={},Object(a.a)(r,o.d,(function(e){return Object.assign({},e,{isError:!1,isLoading:!0})})),Object(a.a)(r,o.e,(function(e){return Object.assign({},e,{isError:!1,isLoading:!0})})),Object(a.a)(r,o.f,(function(e){return Object.assign({},e,{isError:!1,isLoading:!0})})),Object(a.a)(r,o.b,(function(e,t){var n=t.payload.data;return Object.assign({},e,{data:n,isError:!1,isLoading:!1})})),Object(a.a)(r,o.c,(function(e){return Object.assign({},e,{data:null,isError:!1,isLoading:!1})})),Object(a.a)(r,o.h,(function(e,t){var n=t.payload.data;return Object.assign({},e,{data:n,isError:!1,isLoading:!1})})),Object(a.a)(r,o.g,(function(e,t){var n=t.payload.error;return Object.assign({},e,{error:n,isError:!0,isLoading:!1})})),r),{data:null,error:null,isLoading:!1,isError:!1}),i={getUser:function(e){return e.user}};t.b=u},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return i}));var r=n(78),a=function(){return r.a.currentSession()},c=function(e,t){return fetch("https://titw7cpmu7.execute-api.us-east-1.amazonaws.com/dev/get-user-role?username=".concat(e),{headers:{Authorization:t}}).then((function(e){return e.json()})).catch((function(e){return e}))},o=function(e,t){return r.a.signIn(e,t).then((function(e){return{result:e}})).catch((function(e){return{error:e}}))},u=function(){return r.a.signOut()},i=function(){return r.a.currentUserInfo().then((function(e){return{result:e}})).catch((function(e){return{error:e}}))}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return m}));var r,a=n(33),c=n(648),o=function(e,t){return"".concat(e,"/").concat(t)},u={REQUEST_USER:o("@user","REQUEST_USER"),USER_RECEIVED:o("@user","USER_RECEIVED"),REQUEST_LOGIN:o("@user","REQUEST_LOGIN"),LOGGED_IN:o("@user","LOGGED_IN"),REQUEST_LOGOUT:o("@user","REQUEST_LOGOUT"),LOGGED_OUT:o("@user","LOGGED_OUT"),USER_ERROR:o("@user","USER_ERROR")},i=Object(c.a)((r={},Object(a.a)(r,u.REQUEST_LOGIN,null),Object(a.a)(r,u.REQUEST_LOGOUT,null),Object(a.a)(r,u.REQUEST_USER,null),Object(a.a)(r,u.LOGGED_IN,(function(e){return{data:e.data}})),Object(a.a)(r,u.LOGGED_OUT,null),Object(a.a)(r,u.USER_RECEIVED,(function(e){return{data:e.data}})),Object(a.a)(r,u.USER_ERROR,(function(e){return{error:e.error}})),r)).user,s=i.requestLogin,l=i.requestLogout,f=i.requestUser,d=i.loggedIn,b=i.loggedOut,O=i.userReceived,m=i.userError},334:function(e,t,n){e.exports=n(624)},350:function(e,t){},373:function(e,t){},375:function(e,t){},39:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"g",(function(){return E})),n.d(t,"a",(function(){return p})),n.d(t,"f",(function(){return m}));var r=n(2),a=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5),n.e(12)]).then(n.bind(null,631))})),c=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,633))})),o=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(5),n.e(13)]).then(n.bind(null,635))})),u=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,632))})),i=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,636))})),s=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,634))})),l=Object(r.lazy)((function(){return n.e(15).then(n.bind(null,630))})),f="/profile",d="/register",b="/certify",O="/discover",m="/sign-in",E="/sign-out",p="/admin",j=[{path:f,component:a},{path:d,component:i},{path:b,component:u},{path:O,component:o},{path:m,component:s},{path:E,component:l},{path:p,component:c}];t.h=j},391:function(e,t){},462:function(e,t){},464:function(e,t){},500:function(e,t){},502:function(e,t){},508:function(e,t){},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"h",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"k",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return i})),n.d(t,"l",(function(){return O}));var r="Terreno",a="Porzione di terreno",c="Attivit\xe0 legate alla produzione",o="Prodotto",u="Attivit\xe0 di manutenzione",i="Documenti",s="Certificatore",l="Operatore",f="Utente",d="Termini del contratto",b="Trasferimento propriet\xe0",O=[f,s,l]},599:function(e,t,n){},624:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(122),o=n.n(c),u=n(309),i=n.n(u),s=n(120),l=n(52),f=n(321),d=n(119),b=Object(l.c)({user:d.b}),O=n(32),m=n.n(O),E=n(200),p=n(31),j=n(27),g=n(139),h=m.a.mark(w),v=m.a.mark(R),_=m.a.mark(U);function w(e){var t,n,r,a,c,o;return m.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload.data,u.prev=1,n=t.address,r=t.password,u.next=5,Object(p.b)(g.d,n,r);case 5:if(a=u.sent,c=a.result,o=a.error,!c){u.next=13;break}return u.next=11,Object(p.c)(Object(j.b)({data:c}));case 11:u.next=15;break;case 13:return u.next=15,Object(p.c)(Object(j.g)({error:o}));case 15:u.next=21;break;case 17:return u.prev=17,u.t0=u.catch(1),u.next=21,Object(p.c)(Object(j.g)({error:u.t0}));case 21:case"end":return u.stop()}}),h,null,[[1,17]])}function R(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.b)(g.e);case 3:return e.next=5,Object(p.c)(Object(j.c)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(p.c)(Object(j.g)({error:e.t0}));case 11:case"end":return e.stop()}}),v,null,[[0,7]])}function U(){var e,t,n;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.b)(g.b);case 3:if(e=r.sent,t=e.result,!(n=e.error)){r.next=11;break}return r.next=9,Object(p.c)(Object(j.g)({error:n}));case 9:r.next=13;break;case 11:return r.next=13,Object(p.c)(Object(j.h)({data:t}));case 13:r.next=19;break;case 15:return r.prev=15,r.t0=r.catch(0),r.next=19,Object(p.c)(Object(j.g)({error:r.t0}));case 19:case"end":return r.stop()}}),_,null,[[0,15]])}var k=[Object(p.d)(j.a.REQUEST_LOGIN,w),Object(p.d)(j.a.REQUEST_LOGOUT,R),Object(p.d)(j.a.REQUEST_USER,U)],x=m.a.mark(S);function S(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)(Object(E.a)(k));case 2:case"end":return e.stop()}}),x)}var y=S,L=function(){var e=[],t=Object(f.a)();e.push(t);var n=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d)(l.a.apply(void 0,e)),r=Object(l.e)(b,n);return t.run(y),r}(),T=(n(599),n(600),n(62)),G=n(26),D=n(641),z=n(642),I=n(643),N=n(118),Q=n(39),P=function(){return a.a.createElement(D.a,{fluid:!0,style:{margin:"2rem 0"}},a.a.createElement(z.a,{className:"justify-content-center"},a.a.createElement(I.a,{xl:6,sm:10},a.a.createElement(r.Suspense,{fallback:a.a.createElement(D.a,{fluid:!0},a.a.createElement(z.a,{className:"my-3 justify-content-center align-content-center align-items-center"},a.a.createElement(I.a,{xl:"auto",sm:"auto"},a.a.createElement(N.e,{size:"large"}))))},a.a.createElement(G.d,null,Q.h.map((function(e,t){var n=e.path,r=e.component;return a.a.createElement(G.b,{key:t,path:n,component:r})})),a.a.createElement(G.b,{exact:!0,path:"/",component:Q.h[0].component}))))))},C=n(198),q=n(644),A=n(645),V=n(646),B=n(153),J=n(298),M=n(318),W=n(58),X=[{route:Q.e,label:"Registra",allowed:[W.f,W.k]},{route:Q.b,label:"Certifica",allowed:[W.a]},{route:Q.c,label:"Esplora",allowed:[W.f,W.a,W.k]}],$=Object(s.b)((function(e){return{user:d.a.getUser(e)}}))((function(e){var t=e.user,n=Object(G.h)().pathname,c=Object(r.useState)(!1),o=Object(C.a)(c,2),u=o[0],i=o[1];return Object(r.useEffect)((function(){t.data&&i(Boolean(parseInt(t.data.attributes["custom:is_admin"])))}),[t]),a.a.createElement("header",null,t.data&&a.a.createElement(N.d,{dark:!0,expand:!0},a.a.createElement(q.a,{navbar:!0,style:{width:"100%"}},a.a.createElement(D.a,{fluid:!0},a.a.createElement(z.a,{style:{width:"100%"},className:"justify-content-center"},!u&&X.map((function(e,r){var c=e.route,o=e.label;return e.allowed.includes(W.l[parseInt(t.data.attributes["custom:role"])])?a.a.createElement(I.a,{lg:1,md:2,key:r},a.a.createElement(A.a,{active:n===c},a.a.createElement(T.b,{component:V.a,to:c},o))):null})),u&&a.a.createElement(I.a,{lg:2,md:3},a.a.createElement(A.a,{active:n===Q.a},a.a.createElement(T.b,{component:V.a,to:Q.a},"Aggiungi Utente"))),a.a.createElement(I.a,{align:"center",lg:{size:1,offset:u?0:1},md:{size:1,offset:u?0:3}},a.a.createElement(A.a,{active:n===Q.d},a.a.createElement(T.b,{component:V.a,to:Q.d},a.a.createElement(B.a,{icon:J.faUser,color:"inherit",size:"lg"})))),a.a.createElement(I.a,{align:"center",lg:1,md:1},a.a.createElement(A.a,{active:n===Q.g},a.a.createElement(T.b,{component:V.a,to:Q.g},a.a.createElement(B.a,{icon:M.faSignOutAlt,color:"inherit",size:"lg"})))))))))})),F=function(){return a.a.createElement(T.a,null,a.a.createElement($,null),a.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(186),K=n(307),Y={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:126f8d78-55b9-46e9-a4b2-ee5a2198fa6e",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_MlRbfPcvO",aws_user_pools_web_client_id:"6nqhl0ck17fvuue78qrhf9msbt",oauth:{},aws_user_files_s3_bucket:"psab-documents225914-dev",aws_user_files_s3_bucket_region:"us-east-1"};(function(){H.a.configure(Y),K.a.configure(Y)})(),window.web3=new i.a("https://goerli.infura.io/v3/2825ef3aeb9047b7ab6e108500f89b60"),o.a.render(a.a.createElement(s.a,{store:L},a.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[334,7,8]]]);
//# sourceMappingURL=main.91c82e25.chunk.js.map