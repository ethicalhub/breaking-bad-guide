(this["webpackJsonpbreaking-bad-cast"]=this["webpackJsonpbreaking-bad-cast"]||[]).push([[0],{125:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},130:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},131:function(e,t,a){e.exports=a(426)},426:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),l=a.n(c),i=a(66),u=a.n(i),s=a(124),m=a(25),o=a(67),d=a.n(o),E=a(125),p=a.n(E),g=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:p.a,alt:"Breaking Bad Logo"}))},f=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Characters",autoFocus:!0,value:l,onChange:function(e){i(e.target.value),t(e.target.value)}})))},b=(a(151),function(e){return e.data.map((function(e){return r.a.createElement("div",{className:"search",style:{textAlign:"center"}},r.a.createElement("p",null,e.quote," "),r.a.createElement("h4",null," -- ",e.author))}))}),h=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status),r.a.createElement("li",null,r.a.createElement("strong",null,"Occupation:")," ",t.occupation)))))},v=a(130),k=a.n(v),O=function(){return r.a.createElement("img",{src:k.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})},j=function(e){var t=e.items;return e.isLoading?r.a.createElement(O,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(h,{key:e.char_id,item:e})})))};var y=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],E=i[1],p=Object(n.useState)(""),h=Object(m.a)(p,2),v=h[0],k=h[1],O=Object(n.useState)([]),y=Object(m.a)(O,2),N=y[0],x=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://www.breakingbadapi.com/api/characters?name=".concat(v));case 2:return t=e.sent,e.next=5,d()("https://breakingbadapi.com/api/quote/random");case 5:a=e.sent,c(t.data),E(!1),x(a.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]),r.a.createElement("div",{className:"container"},r.a.createElement(g,null),r.a.createElement(f,{getQuery:function(e){k(e)}}),r.a.createElement(b,{data:N}),r.a.createElement(j,{isLoading:o,items:a}))};l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.d7cb8c24.chunk.js.map