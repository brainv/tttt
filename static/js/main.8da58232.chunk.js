(this.webpackJsonptttt=this.webpackJsonptttt||[]).push([[0],{34:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),s=n(10),i=n.n(s),l=n(17),o=n(7),b=n(9),j=n(19),d=n.n(j),u=n(43),h=n(37),O=n(38),x=n(46),m=n(23),f=n(45),p=n(44),g=n(39),v=n(22),y=n(40),S=n(41),k=n(42),C={start:function(){return"Start"},15:function(e){var t=e.nextAthlete;return"".concat(t,". Get ready.")},10:function(){return"Change in 10"},5:function(){return"Five"},2:function(){return"Two"},1:function(){return"One"},0:function(e){var t=e.nextAthlete;return"Change to ".concat(t)}};function N(e,t){C[e]&&function(e){var t=new SpeechSynthesisUtterance;t.text=e,t.lang="en-US",speechSynthesis.speak(t)}(C[e](t))}var D="config",w=["Amelia","Bowie","Coco","Dan","Emma","Finn"].map((function(e){return{text:e,enabled:!0,time:30}}));var E=function(){try{var e=localStorage.getItem(D),t=JSON.parse(e);return{athletes:t.athletes||w,speechEnabled:t.speechEnabled,startDelay:t.startDelay}}catch(n){return{athletes:w,speechEnabled:false,startDelay:0}}}();function A(){var e=Object(c.useState)(0),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(b.a)(s,2),j=i[0],C=i[1],w=Object(c.useState)(E.startDelay),A=Object(b.a)(w,2),T=A[0],G=A[1],B=Object(c.useState)(E.speechEnabled),F=Object(b.a)(B,2),J=F[0],M=F[1],z=Object(c.useState)(E.athletes),U=Object(b.a)(z,2),H=U[0],L=U[1],P=Object(c.useState)(0),R=Object(b.a)(P,2),V=R[0],W=R[1],X=Object(c.useState)(void 0),q=Object(b.a)(X,2),K=q[0],Q=q[1];Object(c.useEffect)((function(){var e;e={athletes:H,startDelay:T,speechEnabled:J},localStorage.setItem(D,JSON.stringify(e))}),[H,T,J]);var Y=Object(c.useMemo)((function(){var e=H.map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{index:t})}));return void 0===K?e.find((function(e){return e.enabled})).index:[].concat(Object(l.a)(e.slice(K+1)),Object(l.a)(e)).filter((function(e){return e.enabled}))[0].index}),[K,H]),Z=Object(c.useRef)();d()((function(){if(j){var e=void 0===K?T:H[K].time,t=Date.now(),a=I(t-n),c=I(Z.current-n);W(Math.max(e-a,0)),a!==c&&(a>=e?(J&&(void 0===K?N("start"):N(0,{nextAthlete:H[Y].text})),Q(Y),r(t)):J&&N(e-a,{nextAthlete:H[Y].text})),Z.current=t}}),500);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{bg:"light",className:"mb-2",children:Object(a.jsx)(h.a,{children:Object(a.jsx)(u.a.Brand,{children:"Team Time Trial Timer"})})}),Object(a.jsxs)(h.a,{children:[Object(a.jsxs)(O.a,{className:"mb-2",children:[j&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:"text-center display-2",children:void 0===K?"Wait":H[K].text}),Object(a.jsxs)("h2",{className:"text-center display-5",children:["\ud83d\udd1c ",H[Y].text]}),Object(a.jsxs)("h3",{className:"text-center display-6",children:["\u23f1\ufe0f ",V,"s"]}),Object(a.jsx)(x.a,{style:{transform:"scaleX(-1)",background:"white"},now:V,max:void 0===K?T:H[K].time})]}),Object(a.jsx)("div",{className:"mt-4 text-center",children:j?Object(a.jsx)(m.a,{variant:"danger",onClick:function(){C(!1)},children:"Stop"}):Object(a.jsx)(m.a,{variant:"primary",onClick:function(){var e=Date.now();r(e),Z.current=e,W(T>0?T:H[0].time),Q(T>0?void 0:Y),C(!0)},size:"lg",children:"Start"})})]}),Object(a.jsx)(f.a,{className:"mb-2",children:Object(a.jsxs)(f.a.Body,{children:[Object(a.jsx)("h3",{children:"Athletes"}),H.map((function(e,t){return Object(a.jsx)(p.a.Group,{as:g.a,controlId:"athlete-".concat(t),children:Object(a.jsx)(v.a,{sm:12,children:Object(a.jsxs)(y.a,{children:[Object(a.jsx)(p.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"text",placeholder:"Name",value:e.text,onChange:function(e){return L(H.map((function(n,a){return a===t?Object(o.a)(Object(o.a)({},n),{},{text:e.target.value}):n})))}}),Object(a.jsx)(p.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"number",placeholder:"Time (in seconds)",value:e.time,onChange:function(e){return L(H.map((function(n,a){return a===t?Object(o.a)(Object(o.a)({},n),{},{time:+e.target.value}):n})))}}),Object(a.jsx)(y.a.Append,{children:Object(a.jsx)(S.a,{toggle:!0,children:Object(a.jsx)(k.a,{variant:"outline-secondary",type:"checkbox",name:"athlete-".concat(t,"-enabled"),checked:!e.enabled,disabled:e.enabled&&1===H.filter((function(e){return e.enabled})).length,onChange:function(e){return L(H.map((function(n,a){return a===t?Object(o.a)(Object(o.a)({},n),{},{enabled:!e.target.checked}):n})))},children:"\u2620\ufe0f"})})})]})})},t)})),Object(a.jsx)("h3",{children:"Settings"}),Object(a.jsxs)(p.a.Group,{controlId:"startDelay",children:[Object(a.jsx)(p.a.Label,{children:"Start Delay (in seconds)"}),Object(a.jsx)(p.a.Control,{type:"number",value:T,onChange:function(e){return G(+e.target.value)},disabled:j,min:0})]}),Object(a.jsx)(p.a.Group,{controlId:"speechEnabled",children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Voice Output",checked:J,onChange:function(e){return M(e.target.checked)}})})]})}),Object(a.jsxs)("footer",{className:"text-muted mb-2",rel:"noopener noreferrer",children:[Object(a.jsx)("a",{href:"https://github.com/andipaetzold/tttt",children:"GitHub"})," | \xa9 Andi P\xe4tzold"]})]})]})}function I(e){return Math.round(e/1e3)}n(33);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8da58232.chunk.js.map