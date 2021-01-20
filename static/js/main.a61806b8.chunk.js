(this.webpackJsonptttt=this.webpackJsonptttt||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(13),o=n.n(i),s=n(23),l=n(11),j=n(10),u=n(29),d=n(9),b=n(8),h=n(25),O=n.n(h),x=n(50),f=n(51),p=n(55),v=n(30),m=n(54),g=n(53),y="config",w=["Amelia","Bowie","Coco","Dan","Emma","Finn"].map((function(e){return{text:e,enabled:!0,time:30}}));var S={voiceChanged:function(){return"Go faster!"},start:function(){return"Start"},15:function(e){var t=e.nextAthlete;return"".concat(t,". Get ready.")},10:function(){return"Change in 10"},5:function(){return"Five"},2:function(){return"Two"},1:function(){return"One"},0:function(e){var t=e.nextAthlete;return"Change to ".concat(t)}};function k(e,t,n){S[e]&&function(e,t){var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.voice=t,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}(S[e](t),n)}function C(e){return Math.round(e/1e3)}var N=n(46),D=n(26),I=n(47),R=n(48),E=n(49);function T(e){var t=e.athletes,n=e.onChange;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Athletes"}),t.map((function(e,a){return Object(c.jsx)(g.a.Group,{as:N.a,controlId:"athlete-".concat(a),children:Object(c.jsx)(D.a,{sm:12,children:Object(c.jsxs)(I.a,{children:[Object(c.jsx)(g.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"text",placeholder:"Name",value:e.text,onChange:function(e){return n(t.map((function(t,n){return n===a?Object(l.a)(Object(l.a)({},t),{},{text:e.target.value}):t})))}}),Object(c.jsx)(g.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"number",placeholder:"Time (in seconds)",min:1,value:e.time,onChange:function(e){return n(t.map((function(t,n){return n===a?Object(l.a)(Object(l.a)({},t),{},{time:+e.target.value}):t})))}}),Object(c.jsx)(I.a.Append,{children:Object(c.jsx)(R.a,{toggle:!0,children:Object(c.jsx)(E.a,{variant:"outline-secondary",type:"checkbox",name:"athlete-".concat(a,"-enabled"),checked:!e.enabled,disabled:e.enabled&&1===t.filter((function(e){return e.enabled})).length,onChange:function(e){return n(t.map((function(t,n){return n===a?Object(l.a)(Object(l.a)({},t),{},{enabled:!e.target.checked}):t})))},children:Object(c.jsx)(b.a,{icon:d.f})})})})]})})},a)}))]})}var A=n(22);function U(){return Object(c.jsxs)("footer",{className:"text-muted mt-4 mb-2 text-center",children:[Object(c.jsx)("p",{children:Object(c.jsxs)("small",{children:["Made with \u2665 for"," ",Object(c.jsx)("a",{href:"https://www.wtrl.racing",rel:"noopener noreferrer",target:"_blank",children:"WTRL"})," ","by"," ",Object(c.jsx)("a",{href:"https://zwiftpower.com/profile.php?z=1861132",rel:"noopener noreferrer",target:"_blank",children:"Andi P\xe4tzold"})]})}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:Object(c.jsxs)("a",{href:"paypal.me/andipaetzold",rel:"noopener noreferrer",target:"_blank",children:[Object(c.jsx)(b.a,{icon:A.b})," Donate via PayPal"]})})}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:Object(c.jsxs)("a",{href:"https://github.com/andipaetzold/tttt",rel:"noopener noreferrer",target:"_blank",children:[Object(c.jsx)(b.a,{icon:A.a})," GitHub"]})})})]})}var z=n(52);function G(){return Object(c.jsx)(z.a,{bg:"light",className:"mb-2",children:Object(c.jsxs)(z.a.Brand,{className:"mx-auto",children:[Object(c.jsx)(b.a,{icon:d.b})," Team Time Trial Timer"," ",Object(c.jsx)(b.a,{icon:d.b})]})})}function F(e){var t=e.voices,n=e.voice,a=e.onChange;return Object(c.jsxs)(g.a.Group,{controlId:"voice",children:[Object(c.jsx)(g.a.Label,{children:"Voice"}),Object(c.jsx)(g.a.Control,{as:"select",onChange:function(e){var n=e.target.value,c=t.find((function(e){return e.voiceURI===n}));c&&(k("voiceChanged",{},c),a(c))},value:null===n||void 0===n?void 0:n.voiceURI,disabled:0===t.length,children:t.length>0?t.map((function(e){return Object(c.jsx)("option",{value:e.voiceURI,children:e.name},e.voiceURI)})):Object(c.jsx)("option",{children:"Default"},"default")}),Object(c.jsxs)(g.a.Text,{children:["If the voice output does not work anymore, click"," ",Object(c.jsx)(v.a,{style:{padding:0,fontSize:"100%",border:"none"},variant:"link",onClick:function(){a(void 0),setTimeout((function(){window.location.reload()}),0)},children:"here"})," ","to reset the app and keep the default voice."]})]})}var M=function(){try{var e=localStorage.getItem(y),t=JSON.parse(e);return{athletes:t.athletes||w,speechEnabled:t.speechEnabled,startDelay:t.startDelay,voice:t.voice}}catch(n){return{athletes:w,speechEnabled:false,startDelay:0}}}();function B(){var e=Object(a.useState)("stopped"),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(M.startDelay),o=Object(j.a)(i,2),h=o[0],w=o[1],S=Object(a.useState)(M.speechEnabled),N=Object(j.a)(S,2),D=N[0],I=N[1],R=Object(a.useState)(M.athletes),E=Object(j.a)(R,2),A=E[0],z=E[1],B=function(e){return void 0===e?"":A[e].text||"Athlete ".concat(e+1)},J=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=function(){c(window.speechSynthesis.getVoices())};return Object(a.useEffect)((function(){if("undefined"!==typeof window.speechSynthesis)return r(),window.speechSynthesis.onvoiceschanged=r,function(){return window.speechSynthesis.onvoiceschanged=void 0}}),[]),n.filter((function(e){return e.lang.startsWith("en-")}))}(),P=Object(a.useState)(M.voice),V=Object(j.a)(P,2),_=V[0],L=V[1],W=J.find((function(e){return e.voiceURI===_})),H=Object(a.useState)(0),X=Object(j.a)(H,2),q=X[0],K=X[1],Q=Object(a.useState)(void 0),Y=Object(j.a)(Q,2),Z=Y[0],$=Y[1];Object(a.useEffect)((function(){var e;e={athletes:A,startDelay:h,speechEnabled:D,voice:_},localStorage.setItem(y,JSON.stringify(e))}),[A,h,D,_]);var ee=Object(a.useMemo)((function(){var e=A.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{index:t})}));return void 0===Z?e.find((function(e){return e.enabled})).index:[].concat(Object(s.a)(e.slice(Z+1)),Object(s.a)(e)).filter((function(e){return e.enabled}))[0].index}),[Z,A]),te=Object(a.useRef)(),ne=Object(a.useRef)(),ce=Object(a.useRef)(),ae=function(e){D&&k(e,{nextAthlete:B(ee)},W)},re=function(){$(ee),K(A[ee].time);var e=Date.now();te.current=e,"paused"===n&&(ce.current=e)};O()((function(){if("running"===n){var e=void 0===Z?h:A[Z].time,t=Date.now(),c=C(t-te.current);c!==C(ne.current-te.current)&&(c>=e?(ae(void 0===Z?"start":0),re()):(ae(e-c),K(Math.max(e-c,0)))),ne.current=t}}),500);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(G,{}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(f.a,{className:"mb-2",children:"stopped"!==n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:"text-center display-2",children:void 0===Z?"Wait":B(Z)}),Object(c.jsxs)("h2",{className:"text-center display-5",children:[Object(c.jsx)(b.a,{icon:d.a})," ",B(ee)]}),Object(c.jsxs)("h3",{className:"text-center display-6",children:[Object(c.jsx)(b.a,{icon:u.a})," ",q,"s"]}),Object(c.jsx)(p.a,{style:{transform:"scaleX(-1)",background:"white"},now:q,max:void 0===Z?h:A[Z].time}),Object(c.jsxs)("div",{className:"mt-4 text-center",children:[Object(c.jsxs)(v.a,{variant:"danger",className:"mr-1",onClick:function(){r("stopped")},children:[Object(c.jsx)(b.a,{icon:d.g})," Stop"]}),"paused"===n?Object(c.jsxs)(v.a,{variant:"info",className:"mr-1",onClick:function(){r("running"),te.current=Date.now()-(ce.current-te.current)},children:[Object(c.jsx)(b.a,{icon:d.e})," Resume"]}):Object(c.jsxs)(v.a,{variant:"info",className:"mr-1",onClick:function(){r("paused"),ce.current=Date.now()},children:[Object(c.jsx)(b.a,{icon:d.d})," Pause"]}),Object(c.jsxs)(v.a,{variant:"warning",onClick:re,children:[Object(c.jsx)(b.a,{icon:d.c})," Skip"]})]})]}):Object(c.jsx)("div",{className:"text-center",children:Object(c.jsxs)(v.a,{variant:"primary",onClick:function(){var e=Date.now();ne.current=e,te.current=e,K(h>0?h:A[0].time),$(h>0?void 0:ee),r("running")},size:"lg",children:[Object(c.jsx)(b.a,{icon:d.e})," Start"]})})}),Object(c.jsx)(m.a,{className:"mb-2",children:Object(c.jsxs)(m.a.Body,{children:[Object(c.jsx)(T,{athletes:A,onChange:z}),Object(c.jsx)("h3",{children:"Settings"}),Object(c.jsxs)(g.a.Group,{controlId:"startDelay",children:[Object(c.jsx)(g.a.Label,{children:"Start Delay (in seconds)"}),Object(c.jsx)(g.a.Control,{type:"number",value:h,onChange:function(e){return w(+e.target.value)},min:0})]}),Object(c.jsxs)(g.a.Group,{controlId:"speechEnabled",children:[Object(c.jsx)(g.a.Check,{type:"checkbox",label:"Voice Output",checked:D,onChange:function(e){return I(e.target.checked)}}),Object(c.jsx)(g.a.Text,{children:"Voice Output is not supported on iOS"})]}),Object(c.jsx)(F,{voices:J,voice:W,onChange:function(e){return L(null===e||void 0===e?void 0:e.voiceURI)}})]})}),Object(c.jsx)(U,{})]})]})}n(43);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a61806b8.chunk.js.map