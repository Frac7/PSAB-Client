(this.webpackJsonppsab=this.webpackJsonppsab||[]).push([[5],{649:function(e,t,n){"use strict";var a,i=n(33),r=n(668),s=n(669),l=n(670),c=n(671),u=n(672),m=n(58),p=(a={},Object(i.a)(a,m.d,{ABI:r.a,address:"0x1F1dD176d02f3eC0a5A444ae2d808C5c4969D5c2"}),Object(i.a)(a,m.g,{ABI:s.a,address:"0x0f7F02290EE5Dc190C53Fb69e99Dd2E051fcB492"}),Object(i.a)(a,m.h,{ABI:l.a,address:"0xd597f7187ED5Cef012B001288ce44640812f8a6D"}),Object(i.a)(a,m.e,{ABI:c.a,address:"0x98C2b634A061F09616ED69051cFCf6d4459Cadf5"}),Object(i.a)(a,m.i,{ABI:u.a,address:"0x3C88235AEad3D15fAcaBb0Fd630fb530396bF97b"}),a);t.a=p},656:function(e,t,n){"use strict";var a=n(2),i=n.n(a),r=n(120),s=n(26),l=n(641),c=n(642),u=n(643),m=n(966),p=n(118),o=n(39),y=n(27),d=n(119);t.a=function(e,t){return Object(r.b)((function(e){return{user:d.a.getUser(e)}}),{requestUser:y.f})((function(n){var r=n.requestUser,y=n.user,d=y.data,g=y.isLoading,b=y.isError;return Object(a.useEffect)((function(){d||r()}),[r,d]),g?i.a.createElement(l.a,{fluid:!0},i.a.createElement(c.a,{className:"my-3 justify-content-center align-content-center align-items-center"},i.a.createElement(u.a,{xl:"auto",sm:"auto"},i.a.createElement(p.e,{size:"large"})))):b?i.a.createElement(l.a,{fluid:!0},i.a.createElement(c.a,{className:"justify-content-center align-content-center align-items-center"},i.a.createElement(u.a,{xl:12,sm:12},i.a.createElement(m.a,{color:"danger",className:"my-3"},"Si \xe8 verificato un errore nel caricamento dell'account")))):d?i.a.createElement(e,null):i.a.createElement(s.a,{to:{pathname:o.f,state:{from:t}}})}))}},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return U})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return w}));var a=n(198),i=n(2),r=n.n(i),s=n(641),l=n(642),c=n(643),u=n(118),m=n(650),p=n(33),o=n(120),y=n(982),d=n(964),g=n(965),b=n(966),f=n(967),E=n(968),T=n(649),O=n(58),j=n(119),_=Object(o.b)((function(e){return{user:j.a.getUser(e)}}))((function(e){var t=e.id,n=e.isOpen,m=e.setIsOpen,p=e.user.data.username,o=Object(i.useState)([]),j=Object(a.a)(o,2),_=j[0],h=j[1],w=Object(i.useState)(!1),x=Object(a.a)(w,2),M=x[0],N=x[1],v=Object(i.useState)(!1),B=Object(a.a)(v,2),C=B[0],I=B[1],S=Object(i.useState)(!1),D=Object(a.a)(S,2),k=D[0],A=D[1],z=Object(i.useState)(null),F=Object(a.a)(z,2),U=F[0],J=F[1],L=Object(i.useCallback)((function(){(m((function(e){return!e})),n)||(h([]),N(!0),new window.web3.eth.Contract(T.a[O.g].ABI,T.a[O.g].address).methods.getByLand(t).call({from:p}).then((function(e){h(e),N(!1)})).catch((function(e){I(!0),N(!1)})))}),[t,p,n,m,N,h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{onClick:L},"Sfoglia porzioni"),r.a.createElement(y.a,{className:"modal-lg",isOpen:n,toggle:L},r.a.createElement(d.a,{toggle:L},"Dettagli Terreno #",t),r.a.createElement(g.a,null,M&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3 justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:"auto",sm:"auto"},r.a.createElement(u.e,{size:"large"})))),C&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:12,sm:12},r.a.createElement(b.a,{color:"danger",className:"my-3"},"Si \xe8 verificato un errore nel caricamento degli elementi")))),!_.length&&r.a.createElement(b.a,{color:"info",className:"my-3"},"Nessuna porzione registrata"),r.a.createElement(f.a,{flush:!0},_.map((function(e,t){return r.a.createElement(E.a,{key:t},r.a.createElement(P,{id:e,isOpen:k&&e===U,setIsOpen:A,setOpenedPortion:J,element:O.g}))}))))))})),h=Object(u.f)("h5"),w=function(e){var t=e.id,n=e.description,u=e.documents,m=Object(i.useState)(!1),p=Object(a.a)(m,2),o=p[0],y=p[1];return r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement("h6",{className:"text-black-50"},"Terreno #",t))),r.a.createElement(l.a,{className:"align-items-center my-3 justify-content-end"},r.a.createElement(c.a,{xl:9,sm:12,align:"end"},r.a.createElement(_,{id:t,isOpen:o,setIsOpen:y}))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(h,null,"Descrizione")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},n))),u&&u.length?r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(h,null,"Documenti")),r.a.createElement(c.a,null,r.a.createElement(f.a,{flush:!0},u.map((function(e,t){return r.a.createElement(E.a,{key:t,className:"text-success",tag:"a",href:"https://psab-documents225914-dev.s3.amazonaws.com/public/".concat(window.web3.utils.toAscii(e)),target:"_blank"},"Documento allegato #",t)}))))):null)},x=n(963),M=n(969),N=n(153),v=n(805),B=n(804),C=n(200),I=Object(u.f)("h5"),S=Object(o.b)((function(e){return{user:j.a.getUser(e)}}))((function(e){var t=e.id,n=e.isOpen,o=e.setIsOpen,f=e.user.data.username,E=Object(i.useMemo)((function(){return f}),[f]),j=Object(i.useMemo)((function(){var e;return e={},Object(p.a)(e,O.g,[]),Object(p.a)(e,O.h,[]),Object(p.a)(e,O.i,[]),Object(p.a)(e,O.e,[]),e}),[]),_=Object(i.useState)(j),h=Object(a.a)(_,2),w=h[0],x=h[1],M=Object(i.useState)(!1),N=Object(a.a)(M,2),v=N[0],B=N[1],S=Object(i.useState)(!1),D=Object(a.a)(S,2),k=D[0],P=D[1],A=Object(i.useCallback)((function(){o((function(e){return!e})),n||(x(j),Object.keys(w).forEach((function(e){B(!0);var n=e===O.g?"getBuyersByPortion":"getByPortion",a=new window.web3.eth.Contract(T.a[e].ABI,T.a[e].address);a.methods[n](t).call({from:E}).then((function(t){e===O.g?x((function(n){return Object(m.a)(Object(m.a)({},n),{},Object(p.a)({},e,t))})):t.length?t.forEach((function(n,i){a.methods.getById(n).call({from:E}).then((function(a){x((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(p.a)({},e,[].concat(Object(C.a)(t[e]),[Object(m.a)(Object(m.a)({},a),{},{id:n})])))})),i===t.length-1&&B(!1)})).catch((function(e){P(!0),B(!1)}))})):B(!1)})).catch((function(e){P(!0),B(!1)}))})))}),[t,E,n,o,B,j,w,x]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{onClick:A},"Sfoglia cronologia"),r.a.createElement(y.a,{className:"modal-lg",isOpen:n,toggle:A},r.a.createElement(d.a,{toggle:A},"Dettagli Porzione #",t),r.a.createElement(g.a,null,v&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3 justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:"auto",sm:"auto"},r.a.createElement(u.e,{size:"large"})))),k&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:12,sm:12},r.a.createElement(b.a,{color:"danger",className:"my-3"},"Si \xe8 verificato un errore nel caricamento degli elementi")))),Object.keys(w).map((function(e,t){return e===O.g?r.a.createElement(s.a,{fluid:!0,key:t},r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(I,null,"Possessori"))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:9,sm:12},w[O.g].map((function(e,t){return r.a.createElement("p",{align:"justify",key:t},e)}))))):w[e].map((function(n,a){var i=n.id,s=n.description,l=n.portion,c=n.registeredBy;return r.a.createElement(U,{key:"".concat(t).concat(a),element:e,description:s,portion:l,id:i,registeredBy:c})}))})))))})),D=Object(u.f)("h5"),k=function(e){var t=e.id,n=Object(x.a)(e,["id"]),p=Object(i.useMemo)((function(){return n[0]&&n[1]?Object(m.a)(Object(m.a)({},n[0]),n[1]):{}}),[n]),o=p.land,y=p.description,d=p.documents,g=p.price,b=p.periodicity,T=p.duration,j=p.expectedProduction,_=p.expectedMaintenanceCost,h=p.expectedProdActivityCost,w=Object(i.useState)(!1),C=Object(a.a)(w,2),I=C[0],k=C[1],A=Object(i.useState)(!1),z=Object(a.a)(A,2),F=z[0],U=z[1],J=Object(i.useState)(!1),L=Object(a.a)(J,2),R=L[0],q=L[1],V=Object(i.useCallback)((function(){q((function(e){return!e}))}),[q]),G=Object(i.useMemo)((function(){return R?B.faChevronUp:v.faChevronDown}),[R]);return r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement("h6",{className:"text-black-50"},"Porzione #",t))),r.a.createElement(l.a,{className:"align-items-center justify-content-end my-3"},r.a.createElement(c.a,{xl:9,sm:12,align:"end"},r.a.createElement(S,{setIsOpen:U,isOpen:F,id:t}))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Terreno")),r.a.createElement(c.a,null,r.a.createElement(P,{id:o,isOpen:I,setIsOpen:k,element:O.d}))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Descrizione")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},y))),d&&d.length?r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Documenti")),r.a.createElement(c.a,null,r.a.createElement(f.a,{flush:!0},d.map((function(e,t){return r.a.createElement(E.a,{key:t,className:"text-success",tag:"a",href:"https://psab-documents225914-dev.s3.amazonaws.com/public/".concat(window.web3.utils.toAscii(e)),target:"_blank"},"Documento allegato #",t)}))))):null,j&&j.length&&r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{align:"center"},r.a.createElement(u.c,{color:"link",onClick:V},"Dati del contratto ",r.a.createElement(N.a,{icon:G})))),r.a.createElement(M.a,{isOpen:R},r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Canone")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},"\u20ac ",g&&(parseInt(g)/100).toFixed(2)))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Durata")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},parseInt(T)?"Fino al ".concat(new Date(1e3*parseInt(T)).toLocaleDateString()):"Perpetua"))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Produzione attesa")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},j))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Periodicit\xe0")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},b))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Costi di manutenzione attesi")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},"\u20ac ",_&&(parseInt(_)/100).toFixed(2)))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(D,null,"Costi di produzione attesi")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},"\u20ac ",h&&(parseInt(h)/100).toFixed(2))))))},P=Object(o.b)((function(e){return{user:j.a.getUser(e)}}))((function(e){var t=e.id,n=e.isOpen,o=e.setIsOpen,f=e.setOpenedPortion,E=e.element,j=e.user.data.username,_=Object(i.useState)({}),h=Object(a.a)(_,2),x=h[0],M=h[1],N=Object(i.useState)(!1),v=Object(a.a)(N,2),B=v[0],C=v[1],I=Object(i.useState)(!1),S=Object(a.a)(I,2),D=S[0],P=S[1],A=Object(i.useCallback)((function(){(o((function(e){return!e})),n)?f&&f(null):(f&&f(t),M({}),C(!0),new window.web3.eth.Contract(T.a[E].ABI,T.a[E].address).methods.getById(t).call({from:j}).then((function(e){M(Object(m.a)(Object(m.a)({},e),{},{id:t})),C(!1)})).catch((function(e){P(!0),C(!1)})))}),[t,j,E,n,o,C,M,f]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.c,{color:"link",onClick:A},E," #",t),r.a.createElement(y.a,{className:"modal-lg",isOpen:n,toggle:A},r.a.createElement(d.a,{toggle:A},"Dettagli ",E," #",t),r.a.createElement(g.a,null,B&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3 justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:"auto",sm:"auto"},r.a.createElement(u.e,{size:"large"})))),D&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:12,sm:12},r.a.createElement(b.a,{color:"danger",className:"my-3"},"Si \xe8 verificato un errore nel caricamento degli elementi")))),function(e){var t;return t={},Object(p.a)(t,O.d,r.a.createElement(w,e)),Object(p.a)(t,O.g,r.a.createElement(k,e)),t}(x)[E])))})),A=Object(u.f)("h5"),z=Object(o.b)((function(e){return{user:j.a.getUser(e)}}))((function(e){var t=e.id,n=e.isOpen,m=e.setIsOpen,p=e.element,o=e.user.data.username,O=Object(i.useState)([]),j=Object(a.a)(O,2),_=j[0],h=j[1],w=Object(i.useState)(!1),x=Object(a.a)(w,2),M=x[0],N=x[1],v=Object(i.useState)(!1),B=Object(a.a)(v,2),C=B[0],I=B[1],S=Object(i.useCallback)((function(){if(m((function(e){return!e})),!n){h([]),N(!0);var e=new window.web3.eth.Contract(T.a[p].ABI,T.a[p].address);e.methods.getByItem(t).call({from:o}).then((function(t){t.length?C||t.forEach((function(n,a){e.methods.getCertificationById(n).call({from:o}).then((function(e){h((function(t){return t.push(e),t})),a===t.length-1&&N(!1)})).catch((function(e){I(!0),N(!1)}))})):N(!1)})).catch((function(e){I(!0),N(!1)}))}}),[t,o,p,n,m,N,h,C,I]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{onClick:S},"Sfoglia cronologia"),r.a.createElement(y.a,{className:"modal-lg",isOpen:n,toggle:S},r.a.createElement(d.a,{toggle:S},"Dettagli ",p," #",t),r.a.createElement(g.a,null,M&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3 justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:"auto",sm:"auto"},r.a.createElement(u.e,{size:"large"})))),C&&r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:12,sm:12},r.a.createElement(b.a,{color:"danger",className:"my-3"},"Si \xe8 verificato un errore nel caricamento degli elementi")))),!_.length&&!M&&!C&&r.a.createElement(l.a,{className:"justify-content-center align-content-center align-items-center"},r.a.createElement(c.a,{xl:12,sm:12},r.a.createElement(b.a,{color:"info",className:"my-3"},"Nessuna certificazione"))),r.a.createElement(f.a,{flush:!0},_.map((function(e,t){var n=e.description,a=e.certifier;return r.a.createElement(E.a,{key:t},r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement("h6",{className:"text-black-50"},"Certificazione"))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(A,null,"Descrizione")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},n))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(A,null,"Certificato da")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},a)))))}))))))})),F=Object(u.f)("h5"),U=function(e){var t=e.id,n=e.portion,u=e.description,m=e.registeredBy,p=e.element,o=Object(i.useState)(!1),y=Object(a.a)(o,2),d=y[0],g=y[1],b=Object(i.useState)(!1),f=Object(a.a)(b,2),E=f[0],T=f[1];return r.a.createElement(s.a,{fluid:!0},r.a.createElement(l.a,{className:"my-3"},r.a.createElement(c.a,null,r.a.createElement("h6",{className:"text-black-50"},p," #",t))),p!==O.e&&r.a.createElement(l.a,{className:"align-items-center justify-content-end my-3"},r.a.createElement(c.a,{xl:9,sm:12,align:"end"},r.a.createElement(z,{id:t,isOpen:E,setIsOpen:T,element:p}))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(F,null,"Porzione")),r.a.createElement(c.a,null,r.a.createElement(P,{id:n,isOpen:d,setIsOpen:g,element:O.g}))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(F,null,"Descrizione")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},u))),r.a.createElement(l.a,{className:"align-items-center my-3"},r.a.createElement(c.a,{xl:3,sm:12},r.a.createElement(F,null,"Registrato da")),r.a.createElement(c.a,null,r.a.createElement("p",{align:"justify"},m))))}},668:function(e){e.exports=JSON.parse('{"a":[{"inputs":[{"internalType":"string","name":"_description","type":"string"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bytes32","name":"_document","type":"bytes32"},{"internalType":"bytes32","name":"_base64","type":"bytes32"}],"name":"registerDocument","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"divide","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getById","outputs":[{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"bytes32[]","name":"documents","type":"bytes32[]"},{"internalType":"bytes32[]","name":"hashes","type":"bytes32[]"},{"internalType":"bool","name":"divided","type":"bool"}],"internalType":"struct Land.Data","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getOwnerByLand","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]}')},669:function(e){e.exports=JSON.parse('{"a":[{"inputs":[{"internalType":"uint256","name":"_landId","type":"uint256"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"address","name":"_source","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_landId","type":"uint256"},{"internalType":"string","name":"_description","type":"string"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"bytes32","name":"_document","type":"bytes32"},{"internalType":"bytes32","name":"_base64","type":"bytes32"}],"name":"registerDocument","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_portionId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"string","name":"_expectedProduction","type":"string"},{"internalType":"string","name":"_periodicity","type":"string"},{"internalType":"uint256","name":"_expectedMaintenanceCost","type":"uint256"},{"internalType":"uint256","name":"_expectedProdActivityCost","type":"uint256"},{"internalType":"address","name":"_buyer","type":"address"}],"name":"defineTerms","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_buyer","type":"address"},{"internalType":"address","name":"_source","type":"address"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_buyer","type":"address"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"ownershipExpiration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getById","outputs":[{"components":[{"internalType":"uint256","name":"land","type":"uint256"},{"internalType":"string","name":"description","type":"string"},{"internalType":"bytes32[]","name":"documents","type":"bytes32[]"},{"internalType":"bytes32[]","name":"hashes","type":"bytes32[]"},{"internalType":"bool","name":"hasValue","type":"bool"}],"internalType":"struct Portion.Data","name":"","type":"tuple"},{"components":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"string","name":"expectedProduction","type":"string"},{"internalType":"string","name":"periodicity","type":"string"},{"internalType":"uint256","name":"expectedMaintenanceCost","type":"uint256"},{"internalType":"uint256","name":"expectedProdActivityCost","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"buyer","type":"address"}],"internalType":"struct Portion.TermsOfSale","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_land","type":"uint256"}],"name":"getByLand","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getByOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_buyer","type":"address"}],"name":"getByBuyer","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getBuyersByPortion","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"registerProduct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"registerProductionActivity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"registerMaintenance","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},670:function(e){e.exports=JSON.parse('{"a":[{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"address","name":"_source","type":"address"}],"name":"certify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"}],"name":"certify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getByCertifier","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getById","outputs":[{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"portion","type":"uint256"},{"internalType":"address","name":"registeredBy","type":"address"}],"internalType":"struct Recordable.Data","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_item","type":"uint256"}],"name":"getByItem","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getByOperator","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getByPortion","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getCertificationById","outputs":[{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"address","name":"certifier","type":"address"}],"internalType":"struct Certifiable.Certification","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_source","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"}],"name":"certifyProduct","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},671:function(e){e.exports=JSON.parse('{"a":[{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getById","outputs":[{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"portion","type":"uint256"},{"internalType":"address","name":"registeredBy","type":"address"}],"internalType":"struct Recordable.Data","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getByOperator","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getByPortion","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_source","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')},672:function(e){e.exports=JSON.parse('{"a":[{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"},{"internalType":"address","name":"_source","type":"address"}],"name":"certify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"}],"name":"certify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getByCertifier","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getById","outputs":[{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"portion","type":"uint256"},{"internalType":"address","name":"registeredBy","type":"address"}],"internalType":"struct Recordable.Data","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_item","type":"uint256"}],"name":"getByItem","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getByOperator","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getByPortion","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getCertificationById","outputs":[{"components":[{"internalType":"string","name":"description","type":"string"},{"internalType":"address","name":"certifier","type":"address"}],"internalType":"struct Certifiable.Certification","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address","name":"_source","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_description","type":"string"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"string","name":"_description","type":"string"}],"name":"certifyProduction","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}}]);
//# sourceMappingURL=5.e69969bc.chunk.js.map