(this.webpackJsonptttt=this.webpackJsonptttt||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),i=n.n(r),s=n(34),o=n(12),l=n(14),u=n(45),j=n(9),d=n(7),b=n(41),h=n.n(b),O=n(73),m=n(74),x=n(80),p=n(43),f=n(78),v=n(76),g=["Amelia","Bowie","Coco","Dan","Emma","Finn","Grace","Henry","Irene","Jack"],y="config",k=g.slice(0,6).map((function(e){return{text:e,enabled:!0,time:30}}));var w,C=n(10),N=(w={},Object(C.a)(w,600,(function(){return"10 minutes"})),Object(C.a)(w,300,(function(){return"5 minutes"})),Object(C.a)(w,180,(function(){return"3 minutes"})),Object(C.a)(w,120,(function(){return"2 minutes"})),Object(C.a)(w,60,(function(){return"1 minute"})),Object(C.a)(w,30,(function(){return"30 seconds"})),Object(C.a)(w,15,(function(e){var t=e.nextAthlete;return"".concat(t,". Get ready.")})),Object(C.a)(w,10,(function(e){return e.started?"Change in 10":"Start in 10"})),Object(C.a)(w,5,(function(){return"Five"})),Object(C.a)(w,2,(function(){return"Two"})),Object(C.a)(w,1,(function(){return"One"})),Object(C.a)(w,0,(function(e){var t=e.nextAthlete;return e.started?"Change to ".concat(t):"Let's go"})),w);function S(e,t){N[e]&&function(e,t){var n=new SpeechSynthesisUtterance;n.text=e,n.lang="en-US",n.voice=t,window.speechSynthesis.cancel(),window.speechSynthesis.speak(n)}(N[e](t))}function D(e){return Math.round(e/1e3)}function A(e){var t=Math.floor(e/60),n=e-60*t;return 0===t?"".concat(n,"s"):"".concat(t,":").concat(n.toString().padStart(2,"0"),"min")}var T=n(27),z=n.n(T),E=n(39),L="wakeLock"in navigator;var M=n(68),_=n(44),B=n(69),I=n(70),F=n(71),R=n(75),G=n(67),J=n(2);function P(e){var t=e.command,n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],i=a[1],s=Object(c.useRef)(void 0);return Object(J.jsx)(R.a,{placement:"right",overlay:Object(J.jsx)(G.a,{id:"tooltip-copy-athletes",children:r?"Copied!":"Copy Discord Bot command"}),children:Object(J.jsx)(p.a,{variant:"outline-link",onClick:function(){navigator.clipboard.writeText(t),s.current&&(clearTimeout(s.current),s.current=void 0),i(!0),s.current=setTimeout((function(){return i(!1)}),5e3)},children:Object(J.jsx)(d.a,{icon:j.d})})})}function H(e){var t=e.athletes,n=e.onChange,c=e.currentAthlete,a=e.nextAthlete,r="!t config athletes ".concat(t.map((function(e){return"".concat(e.text.trim().replaceAll(" ","_").replaceAll(" ","_"),":").concat(e.time)})).join(" ")),i=function(e){return e===c?"#28a745":e===a?"#ffc107":t[e].enabled?void 0:"#6c757d80"};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)("h3",{children:["Athletes ",Object(J.jsx)(P,{command:r})]}),t.map((function(e,c){return Object(J.jsx)(v.a.Group,{as:M.a,controlId:"athlete-".concat(c),children:Object(J.jsx)(_.a,{sm:12,children:Object(J.jsxs)(B.a,{children:[Object(J.jsx)(v.a.Control,{style:{background:i(c)},type:"text",placeholder:"Name",value:e.text,onChange:function(e){return n(t.map((function(t,n){return n===c?Object(o.a)(Object(o.a)({},t),{},{text:e.target.value}):t})))}}),Object(J.jsx)(v.a.Control,{style:{background:i(c)},type:"number",placeholder:"Time (in seconds)",min:5,step:5,value:e.time,onChange:function(e){return n(t.map((function(t,n){return n===c?Object(o.a)(Object(o.a)({},t),{},{time:+e.target.value}):t})))}}),Object(J.jsx)(B.a.Append,{children:Object(J.jsx)(I.a,{toggle:!0,children:Object(J.jsx)(F.a,{variant:"outline-secondary",type:"checkbox",name:"athlete-".concat(c,"-enabled"),checked:!e.enabled,disabled:e.enabled&&1===t.filter((function(e){return e.enabled})).length,onChange:function(e){return n(t.map((function(t,n){return n===c?Object(o.a)(Object(o.a)({},t),{},{enabled:!e.target.checked}):t})))},children:Object(J.jsx)(d.a,{icon:j.i})})})})]})})},c)}))]})}var W=n(79),U=n(72),q=n.p+"static/media/discord.3372aeeb.svg",X=n.p+"static/media/discordMark.d2c3bfa7.svg";function K(){return Object(J.jsxs)(W.a,{variant:"info",children:[Object(J.jsxs)(W.a.Heading,{children:["Discord Bot"," ",Object(J.jsx)(U.a,{pill:!0,variant:"primary",children:"Beta"})]}),Object(J.jsxs)(M.a,{children:[Object(J.jsxs)(_.a,{xs:12,sm:4,md:2,children:[Object(J.jsx)("img",{src:q,alt:"Discord Logo",className:"d-block d-sm-none"}),Object(J.jsx)("img",{src:X,alt:"Discord Logo",className:"d-none d-sm-block"})]}),Object(J.jsxs)(_.a,{xs:12,sm:8,md:10,children:[Object(J.jsxs)("p",{className:"mt-2",children:["No need to run the Web App on a rider's computer and mess around with the audio setup. Just add the TTT-Timer Discord Bot to your server and type ",Object(J.jsx)("code",{children:"!t help"})," for details on how to use it. After starting the timer, it will appear as a user within your call and coach you through the race."]}),Object(J.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(J.jsx)("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:"https://andipaetzold.github.io/tttt-discord",children:"Documentation"}),Object(J.jsx)("a",{className:"btn btn-primary ml-2",target:"_blank",rel:"noopener noreferrer",href:"https://discord.com/api/oauth2/authorize?client_id=806979974594560060&permissions=3155968&scope=bot",children:"Install"})]})]})]})]})}var Q=n(40);function V(){return Object(J.jsxs)("footer",{className:"text-muted mt-4 mb-2 text-center",children:[Object(J.jsx)("p",{children:Object(J.jsxs)("small",{children:["Made with \u2665 for"," ",Object(J.jsx)("a",{href:"https://www.wtrl.racing",rel:"noopener noreferrer",target:"_blank",children:"WTRL"})," ","by"," ",Object(J.jsx)("a",{href:"mailto:tttt@andipaetzold.com",rel:"noopener noreferrer",target:"_blank",children:"Andi P\xe4tzold"})]})}),Object(J.jsx)("p",{children:Object(J.jsx)("small",{children:Object(J.jsxs)("a",{href:"https://paypal.me/andipaetzold",rel:"noopener noreferrer",target:"_blank",children:[Object(J.jsx)(d.a,{icon:Q.b})," Donate via PayPal"]})})}),Object(J.jsx)("p",{children:Object(J.jsx)("small",{children:Object(J.jsxs)("a",{href:"https://github.com/andipaetzold/tttt",rel:"noopener noreferrer",target:"_blank",children:[Object(J.jsx)(d.a,{icon:Q.a})," GitHub"]})})})]})}var Y=n(77);function Z(){return Object(J.jsx)(Y.a,{bg:"light",className:"mb-2",children:Object(J.jsxs)(Y.a.Brand,{className:"mx-auto",children:[Object(J.jsx)(d.a,{icon:j.b})," Team Time Trial Timer ",Object(J.jsx)(d.a,{icon:j.b})]})})}var $=n(46),ee=function(){try{var e=localStorage.getItem(y),t=JSON.parse(e);return{athletes:t.athletes||k,speechEnabled:t.speechEnabled,startDelay:t.startDelay}}catch(n){return{athletes:k,speechEnabled:true,startDelay:0}}}();function te(){var e=Object(c.useState)("stopped"),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object($.a)(),i=r.node,b=r.active,k=r.enter,w=r.exit;!function(e){var t=Object(c.useRef)(null);Object(c.useEffect)((function(){if(L&&e){var n=function(){var e=Object(E.a)(z.a.mark((function e(){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=t.current)||void 0===n?void 0:n.release();case 2:t.current=null;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(E.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("visible"===document.visibilityState){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n();case 5:return e.next=7,navigator.wakeLock.request("screen");case 7:t.current=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c(),document.addEventListener("visibilitychange",c),function(){n(),document.removeEventListener("visibilitychange",c)}}}),[e])}("running"===n||"paused"===n);var C=Object(c.useState)(ee.startDelay),N=Object(l.a)(C,2),T=N[0],M=N[1],_=Object(c.useState)(ee.speechEnabled),B=Object(l.a)(_,2),I=B[0],F=B[1],R=Object(c.useState)(ee.athletes),G=Object(l.a)(R,2),W=G[0],U=G[1],q=function(e){return void 0===e?"":W[e].text||"Athlete ".concat(e+1)},X=Object(c.useState)(0),Q=Object(l.a)(X,2),Y=Q[0],te=Q[1],ne=Object(c.useState)(void 0),ce=Object(l.a)(ne,2),ae=ce[0],re=ce[1];Object(c.useEffect)((function(){var e;e={athletes:W,startDelay:T,speechEnabled:I},localStorage.setItem(y,JSON.stringify(e))}),[W,T,I]);var ie=Object(c.useMemo)((function(){var e=W.map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{index:t})}));return void 0===ae?e.find((function(e){return e.enabled})).index:[].concat(Object(s.a)(e.slice(ae+1)),Object(s.a)(e)).filter((function(e){return e.enabled}))[0].index}),[ae,W]),se=Object(c.useRef)(),oe=Object(c.useRef)(),le=Object(c.useRef)(),ue=function(){re(ie),te(W[ie].time);var e=Date.now();se.current=e,"paused"===n&&(le.current=e)};h()((function(){if("running"===n){var e,t=void 0===ae?T:W[ae].time,c=Date.now(),a=D(c-se.current);a!==D(oe.current-se.current)&&(e=Math.max(0,t-a),I&&S(e,{nextAthlete:q(ie),started:void 0!==ae}),a>=t?ue():te(Math.max(t-a,0))),oe.current=c}}),500);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Z,{}),Object(J.jsxs)(O.a,{children:[Object(J.jsxs)(m.a,{className:"mb-2 position-relative",ref:i,children:["stopped"!==n?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h1",{className:"text-center display-2",children:void 0===ae?"Wait":q(ae)}),Object(J.jsxs)("h2",{className:"text-center display-5",children:[Object(J.jsx)(d.a,{icon:j.a})," ",q(ie)]}),Object(J.jsxs)("h3",{className:"text-center display-6",children:[Object(J.jsx)(d.a,{icon:u.a})," ",A(Y)]}),Object(J.jsx)(x.a,{style:{transform:"scaleX(-1)",background:"white"},now:Y,max:void 0===ae?T:W[ae].time}),Object(J.jsxs)("div",{className:"mt-4 text-center",children:[Object(J.jsxs)(p.a,{variant:"danger",className:"mr-1",onClick:function(){a("stopped")},children:[Object(J.jsx)(d.a,{icon:j.j})," Stop"]}),"paused"===n?Object(J.jsxs)(p.a,{variant:"info",className:"mr-1",onClick:function(){a("running"),se.current=Date.now()-(le.current-se.current)},children:[Object(J.jsx)(d.a,{icon:j.h})," Resume"]}):Object(J.jsxs)(p.a,{variant:"info",className:"mr-1",onClick:function(){a("paused"),le.current=Date.now()},children:[Object(J.jsx)(d.a,{icon:j.g})," Pause"]}),Object(J.jsxs)(p.a,{variant:"warning",onClick:ue,children:[Object(J.jsx)(d.a,{icon:j.f})," Skip"]})]})]}):Object(J.jsx)("div",{className:"text-center",children:Object(J.jsxs)(p.a,{variant:"primary",onClick:function(){var e=Date.now();oe.current=e,se.current=e,te(T>0?T:W[0].time),re(T>0?void 0:ie),a("running")},size:"lg",children:[Object(J.jsx)(d.a,{icon:j.h})," Start"," ",T>0&&"in ".concat(A(T))]})}),Object(J.jsxs)("div",{className:"position-absolute",style:{right:16,bottom:16},children:[I?Object(J.jsx)(p.a,{size:"sm",variant:"secondary",onClick:function(){return F(!1)},children:Object(J.jsx)(d.a,{icon:j.l})}):Object(J.jsx)(p.a,{size:"sm",variant:"secondary",onClick:function(){return F(!0)},children:Object(J.jsx)(d.a,{icon:j.k})}),b?Object(J.jsxs)(p.a,{className:"ml-2",size:"sm",variant:"secondary",onClick:w,children:[Object(J.jsx)(d.a,{icon:j.c})," Leave Fullscreen"]}):Object(J.jsxs)(p.a,{className:"ml-2",size:"sm",variant:"secondary",onClick:k,children:[Object(J.jsx)(d.a,{icon:j.e})," Fullscreen"]})]})]}),Object(J.jsx)(f.a,{className:"mb-2",children:Object(J.jsxs)(f.a.Body,{children:[Object(J.jsx)(H,{athletes:W,onChange:U,currentAthlete:"stopped"!==n&&ae,nextAthlete:"stopped"!==n&&ie}),Object(J.jsx)("h3",{children:"Settings"}),Object(J.jsxs)(v.a.Group,{controlId:"startDelay",children:[Object(J.jsxs)(v.a.Label,{children:["Start Delay (in seconds) ",Object(J.jsx)(P,{command:"!t config delay ".concat(T)})]}),Object(J.jsx)(v.a.Control,{type:"number",value:T,onChange:function(e){return M(+e.target.value)},min:0,step:30})]}),Object(J.jsxs)(v.a.Group,{controlId:"athleteCount",children:[Object(J.jsx)(v.a.Label,{children:"Athlete Count"}),Object(J.jsx)(v.a.Control,{type:"number",value:W.length,onChange:function(e){var t=Math.max(1,Math.min(g.length,+e.target.value)),n=Object(s.a)(new Array(t).keys()).map((function(e){var t,n,c,a,r,i;return{text:null!==(t=null===(n=W[e])||void 0===n?void 0:n.text)&&void 0!==t?t:g[e],time:null!==(c=null===(a=W[e])||void 0===a?void 0:a.time)&&void 0!==c?c:30,enabled:null===(r=null===(i=W[e])||void 0===i?void 0:i.enabled)||void 0===r||r}}));U(n)},min:1,max:g.length})]})]})}),Object(J.jsx)(K,{}),Object(J.jsx)(V,{})]})]})}n(61);i.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(te,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.ebcf0d3b.chunk.js.map