(this.webpackJsonptttt=this.webpackJsonptttt||[]).push([[0],{61:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),i=n.n(r),s=n(34),o=n(12),l=n(14),u=n(45),j=n(10),d=n(8),b=n(41),h=n.n(b),O=n(72),m=n(73),x=n(79),p=n(43),f=n(77),v=n(75),g=["Amelia","Bowie","Coco","Dan","Emma","Finn","Grace","Henry","Irene","Jack"],y="config",k=g.slice(0,6).map((function(e){return{text:e,enabled:!0,time:30}}));var w,C=n(9),S=(w={},Object(C.a)(w,600,(function(){return"10 minutes"})),Object(C.a)(w,300,(function(){return"5 minutes"})),Object(C.a)(w,180,(function(){return"3 minutes"})),Object(C.a)(w,120,(function(){return"2 minutes"})),Object(C.a)(w,60,(function(){return"1 minute"})),Object(C.a)(w,30,(function(){return"30 seconds"})),Object(C.a)(w,15,(function(e){var t=e.nextAthlete;return"".concat(t,". Get ready.")})),Object(C.a)(w,10,(function(e){return e.started?"Change in 10":"Start in 10"})),Object(C.a)(w,5,(function(){return"Five"})),Object(C.a)(w,2,(function(){return"Two"})),Object(C.a)(w,1,(function(){return"One"})),Object(C.a)(w,0,(function(e){var t=e.nextAthlete;return e.started?"Change to ".concat(t):"Let's go"})),w);function N(e,t){S[e]&&function(e,t){var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.voice=t,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}(S[e](t))}function D(e){return Math.round(e/1e3)}var T=n(27),A=n.n(T),E=n(39),L="wakeLock"in navigator;var I=n(67),M=n(44),_=n(68),B=n(69),z=n(70),G=n(74),R=n(66),J=n(2);function F(e){var t=e.command,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],i=a[1],s=Object(c.useRef)(void 0);return Object(J.jsx)(G.a,{placement:"right",overlay:Object(J.jsx)(R.a,{id:"tooltip-copy-athletes",children:r?"Copied!":"Copy Discord Bot command"}),children:Object(J.jsx)(p.a,{variant:"outline-link",onClick:function(){navigator.clipboard.writeText(t),s.current&&(clearTimeout(s.current),s.current=void 0),i(!0),s.current=setTimeout((function(){return i(!1)}),5e3)},children:Object(J.jsx)(d.a,{icon:j.c})})})}function P(e){var t=e.athletes,n=e.onChange,c="!t config athletes ".concat(t.map((function(e){return"".concat(e.text.trim().replaceAll(" ","_").replaceAll(" ","_"),":").concat(e.time)})).join(" "));return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("h3",{children:["Athletes ",Object(J.jsx)(F,{command:c})]}),t.map((function(e,c){return Object(J.jsx)(v.a.Group,{as:I.a,controlId:"athlete-".concat(c),children:Object(J.jsx)(M.a,{sm:12,children:Object(J.jsxs)(_.a,{children:[Object(J.jsx)(v.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"text",placeholder:"Name",value:e.text,onChange:function(e){return n(t.map((function(t,n){return n===c?Object(o.a)(Object(o.a)({},t),{},{text:e.target.value}):t})))}}),Object(J.jsx)(v.a.Control,{style:{background:!e.enabled&&"#6c757d80"},type:"number",placeholder:"Time (in seconds)",min:1,value:e.time,onChange:function(e){return n(t.map((function(t,n){return n===c?Object(o.a)(Object(o.a)({},t),{},{time:+e.target.value}):t})))}}),Object(J.jsx)(_.a.Append,{children:Object(J.jsx)(B.a,{toggle:!0,children:Object(J.jsx)(z.a,{variant:"outline-secondary",type:"checkbox",name:"athlete-".concat(c,"-enabled"),checked:!e.enabled,disabled:e.enabled&&1===t.filter((function(e){return e.enabled})).length,onChange:function(e){return n(t.map((function(t,n){return n===c?Object(o.a)(Object(o.a)({},t),{},{enabled:!e.target.checked}):t})))},children:Object(J.jsx)(d.a,{icon:j.g})})})})]})})},c)}))]})}var H=n(78),W=n(71),U=n.p+"static/media/discord.3372aeeb.svg",V=n.p+"static/media/discordMark.d2c3bfa7.svg";function q(){return Object(J.jsxs)(H.a,{variant:"info",children:[Object(J.jsxs)(H.a.Heading,{children:["Discord Bot"," ",Object(J.jsx)(W.a,{pill:!0,variant:"primary",children:"Beta"})]}),Object(J.jsxs)(I.a,{children:[Object(J.jsxs)(M.a,{xs:12,sm:4,md:2,children:[Object(J.jsx)("img",{src:U,alt:"Discord Logo",className:"d-block d-sm-none"}),Object(J.jsx)("img",{src:V,alt:"Discord Logo",className:"d-none d-sm-block"})]}),Object(J.jsxs)(M.a,{xs:12,sm:8,md:10,children:[Object(J.jsxs)("p",{className:"mt-2",children:["No need to run the Web App on a rider's computer and mess around with the audio setup. Just add the TTT-Timer Discord Bot to your server and type ",Object(J.jsx)("code",{children:"!t help"})," for details on how to use it. After starting the timer, it will appear as a user within your call and coach you through the race."]}),Object(J.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(J.jsx)("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:"https://andipaetzold.github.io/tttt-discord",children:"Documentation"}),Object(J.jsx)("a",{className:"btn btn-primary ml-2",target:"_blank",rel:"noopener noreferrer",href:"https://discord.com/api/oauth2/authorize?client_id=806979974594560060&permissions=3155968&scope=bot",children:"Install"})]})]})]})]})}var X=n(40);function K(){return Object(J.jsxs)("footer",{className:"text-muted mt-4 mb-2 text-center",children:[Object(J.jsx)("p",{children:Object(J.jsxs)("small",{children:["Made with \u2665 for"," ",Object(J.jsx)("a",{href:"https://www.wtrl.racing",rel:"noopener noreferrer",target:"_blank",children:"WTRL"})," ","by"," ",Object(J.jsx)("a",{href:"mailto:tttt@andipaetzold.com",rel:"noopener noreferrer",target:"_blank",children:"Andi P\xe4tzold"})]})}),Object(J.jsx)("p",{children:Object(J.jsx)("small",{children:Object(J.jsxs)("a",{href:"https://paypal.me/andipaetzold",rel:"noopener noreferrer",target:"_blank",children:[Object(J.jsx)(d.a,{icon:X.b})," Donate via PayPal"]})})}),Object(J.jsx)("p",{children:Object(J.jsx)("small",{children:Object(J.jsxs)("a",{href:"https://github.com/andipaetzold/tttt",rel:"noopener noreferrer",target:"_blank",children:[Object(J.jsx)(d.a,{icon:X.a})," GitHub"]})})})]})}var Q=n(76);function Y(){return Object(J.jsx)(Q.a,{bg:"light",className:"mb-2",children:Object(J.jsxs)(Q.a.Brand,{className:"mx-auto",children:[Object(J.jsx)(d.a,{icon:j.b})," Team Time Trial Timer ",Object(J.jsx)(d.a,{icon:j.b})]})})}var Z=function(){try{var e=localStorage.getItem(y),t=JSON.parse(e);return{athletes:t.athletes||k,speechEnabled:t.speechEnabled,startDelay:t.startDelay}}catch(n){return{athletes:k,speechEnabled:false,startDelay:0}}}();function $(){var e=Object(c.useState)("stopped"),t=Object(l.a)(e,2),n=t[0],a=t[1];!function(e){var t=Object(c.useRef)(null);Object(c.useEffect)((function(){if(L&&e){var n=function(){var e=Object(E.a)(A.a.mark((function e(){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.current)||void 0===n?void 0:n.release();case 2:t.current=null;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(E.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("visible"===document.visibilityState){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n();case 5:return e.next=7,navigator.wakeLock.request("screen");case 7:t.current=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c(),document.addEventListener("visibilitychange",c),function(){n(),document.removeEventListener("visibilitychange",c)}}}),[e])}("running"===n||"paused"===n);var r=Object(c.useState)(Z.startDelay),i=Object(l.a)(r,2),b=i[0],k=i[1],w=Object(c.useState)(Z.speechEnabled),C=Object(l.a)(w,2),S=C[0],T=C[1],I=Object(c.useState)(Z.athletes),M=Object(l.a)(I,2),_=M[0],B=M[1],z=function(e){return void 0===e?"":_[e].text||"Athlete ".concat(e+1)},G=Object(c.useState)(0),R=Object(l.a)(G,2),H=R[0],W=R[1],U=Object(c.useState)(void 0),V=Object(l.a)(U,2),X=V[0],Q=V[1];Object(c.useEffect)((function(){var e;e={athletes:_,startDelay:b,speechEnabled:S},localStorage.setItem(y,JSON.stringify(e))}),[_,b,S]);var $=Object(c.useMemo)((function(){var e=_.map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{index:t})}));return void 0===X?e.find((function(e){return e.enabled})).index:[].concat(Object(s.a)(e.slice(X+1)),Object(s.a)(e)).filter((function(e){return e.enabled}))[0].index}),[X,_]),ee=Object(c.useRef)(),te=Object(c.useRef)(),ne=Object(c.useRef)(),ce=function(){Q($),W(_[$].time);var e=Date.now();ee.current=e,"paused"===n&&(ne.current=e)};h()((function(){if("running"===n){var e,t=void 0===X?b:_[X].time,c=Date.now(),a=D(c-ee.current);a!==D(te.current-ee.current)&&(e=Math.max(0,t-a),S&&N(e,{nextAthlete:z($),started:void 0!==X}),a>=t?ce():W(Math.max(t-a,0))),te.current=c}}),500);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Y,{}),Object(J.jsxs)(O.a,{children:[Object(J.jsx)(m.a,{className:"mb-2",children:"stopped"!==n?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"text-center display-2",children:void 0===X?"Wait":z(X)}),Object(J.jsxs)("h2",{className:"text-center display-5",children:[Object(J.jsx)(d.a,{icon:j.a})," ",z($)]}),Object(J.jsxs)("h3",{className:"text-center display-6",children:[Object(J.jsx)(d.a,{icon:u.a})," ",H,"s"]}),Object(J.jsx)(x.a,{style:{transform:"scaleX(-1)",background:"white"},now:H,max:void 0===X?b:_[X].time}),Object(J.jsxs)("div",{className:"mt-4 text-center",children:[Object(J.jsxs)(p.a,{variant:"danger",className:"mr-1",onClick:function(){a("stopped")},children:[Object(J.jsx)(d.a,{icon:j.h})," Stop"]}),"paused"===n?Object(J.jsxs)(p.a,{variant:"info",className:"mr-1",onClick:function(){a("running"),ee.current=Date.now()-(ne.current-ee.current)},children:[Object(J.jsx)(d.a,{icon:j.f})," Resume"]}):Object(J.jsxs)(p.a,{variant:"info",className:"mr-1",onClick:function(){a("paused"),ne.current=Date.now()},children:[Object(J.jsx)(d.a,{icon:j.e})," Pause"]}),Object(J.jsxs)(p.a,{variant:"warning",onClick:ce,children:[Object(J.jsx)(d.a,{icon:j.d})," Skip"]})]})]}):Object(J.jsx)("div",{className:"text-center",children:Object(J.jsxs)(p.a,{variant:"primary",onClick:function(){var e=Date.now();te.current=e,ee.current=e,W(b>0?b:_[0].time),Q(b>0?void 0:$),a("running")},size:"lg",children:[Object(J.jsx)(d.a,{icon:j.f})," Start"]})})}),Object(J.jsx)(f.a,{className:"mb-2",children:Object(J.jsxs)(f.a.Body,{children:[Object(J.jsx)(P,{athletes:_,onChange:B}),Object(J.jsx)("h3",{children:"Settings"}),Object(J.jsxs)(v.a.Group,{controlId:"startDelay",children:[Object(J.jsxs)(v.a.Label,{children:["Start Delay (in seconds) ",Object(J.jsx)(F,{command:"!t config delay ".concat(b)})]}),Object(J.jsx)(v.a.Control,{type:"number",value:b,onChange:function(e){return k(+e.target.value)},min:0})]}),Object(J.jsxs)(v.a.Group,{controlId:"athleteCount",children:[Object(J.jsx)(v.a.Label,{children:"Athlete Count"}),Object(J.jsx)(v.a.Control,{type:"number",value:_.length,onChange:function(e){var t=Math.max(1,Math.min(g.length,+e.target.value)),n=Object(s.a)(new Array(t).keys()).map((function(e){var t,n,c,a,r,i;return{text:null!==(t=null===(n=_[e])||void 0===n?void 0:n.text)&&void 0!==t?t:g[e],time:null!==(c=null===(a=_[e])||void 0===a?void 0:a.time)&&void 0!==c?c:30,enabled:null===(r=null===(i=_[e])||void 0===i?void 0:i.enabled)||void 0===r||r}}));B(n)},min:1,max:g.length})]}),Object(J.jsxs)(v.a.Group,{controlId:"speechEnabled",children:[Object(J.jsx)(v.a.Check,{type:"checkbox",label:"Voice Output",checked:S,onChange:function(e){return T(e.target.checked)}}),Object(J.jsx)(v.a.Text,{children:"Voice Output is not supported on iOS"})]})]})}),Object(J.jsx)(q,{}),Object(J.jsx)(K,{})]})]})}n(60);i.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)($,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.600d7272.chunk.js.map