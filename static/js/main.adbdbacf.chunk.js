(this.webpackJsonpinterruptingchicken=this.webpackJsonpinterruptingchicken||[]).push([[0],{1448:function(t,e,n){},1453:function(t,e,n){},1454:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(18),i=n.n(a),r=(n(25),n.p,n(26),n(3)),o=n.p+"static/media/white-chick.e67caaa8.png",l=(n(27),n(19)),u=n.n(l),j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return new Array(t).fill().map((function(t){return u.a.random.word()})).join(" ")},b=function(t){var e=Object(c.useState)(),n=Object(r.a)(e,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){var e=function(e){var n=e.key;s!==n&&1===n.length&&(a(n),t&&t(n))},n=function(){a(null)};return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)}})),s},h=n(4),p=n(5),d=n(7),m=n(6),O=(n(1448),n(20)),x=n(1),v=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(h.a)(this,n),(c=e.call(this,t)).handleSubmit=function(t){console.log(c.props.text),console.log(c.state.name),t.preventDefault(),c.props.text===c.state.name?c.props.closePopup():(c.setState({name:""}),console.log("not closing popup"))},c.state={name:""},c}return Object(p.a)(n,[{key:"handleChange",value:function(t){t.preventDefault();var e=t.target.value;this.setState({name:e})}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{onSubmit:this.handleSubmit.bind(this),children:Object(x.jsx)("input",{type:"text",onChange:this.handleChange.bind(this)})})})}}]),n}(s.a.Component),f=n.p+"static/media/black-chick.90ea92e1.png",g=n.p+"static/media/broiler-chick.156124d9.png",k=[f,o,g],w=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){return Object(h.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"popup",children:[Object(x.jsx)("h1",{className:"keyWord",children:this.props.text}),Object(x.jsx)(v,{text:this.props.text,closePopup:this.props.closePopup}),Object(x.jsx)("img",{src:k[0],className:"chick-pic",alt:"logo"})]})}}]),n}(s.a.Component);var y=function(t){return Object(x.jsxs)("div",{children:[0===t.time.h?"":Object(x.jsx)("span",{children:t.time.h>=10?t.time.h:"0"+t.time.h}),"\xa0\xa0",Object(x.jsx)("span",{children:t.time.m>=10?t.time.m:"0"+t.time.m}),"\xa0:\xa0",Object(x.jsx)("span",{children:t.time.s>=10?t.time.s:"0"+t.time.s}),"\xa0:\xa0",Object(x.jsx)("span",{children:t.time.ms>=10?t.time.ms:"0"+t.time.ms})]})};var S=function(t){return Object(x.jsxs)("div",{children:[0===t.status?Object(x.jsx)("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.start,children:"Start"}):"",1===t.status?Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"stopwatch-btn stopwatch-btn-red",onClick:t.stop,children:"Stop"}),Object(x.jsx)("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:t.reset,children:"Reset"})]}):"",2===t.status?Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.resume,children:"Resume"}),Object(x.jsx)("button",{className:"stopwatch-btn stopwatch-btn-yel",onClick:t.reset,children:"Reset"})]}):""]})};n(1453);var C=function(){var t=Object(c.useState)({ms:0,s:0,m:0,h:0}),e=Object(r.a)(t,2),n=e[0],s=e[1],a=Object(c.useState)(),i=Object(r.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)(0),j=Object(r.a)(u,2),b=j[0],h=j[1],p=function(){f(),h(1),l(setInterval(f,10))},d=n.ms,m=n.s,O=n.m,v=n.h,f=function(){return 60===O&&(v++,O=0),60===m&&(O++,m=0),100===d&&(m++,d=0),d++,s({ms:d,s:m,m:O,h:v})};return Object(x.jsx)("div",{className:"clock-holder",children:Object(x.jsxs)("div",{className:"stopwatch",children:[Object(x.jsx)(y,{time:n}),Object(x.jsx)(S,{status:b,resume:function(){return p()},reset:function(){clearInterval(o),h(0),s({ms:0,s:0,m:0,h:0})},stop:function(){clearInterval(o),h(2)},start:p})]})})},N=0;var P=function(){var t=["cluck","bok","egg","chicken","hen"],e=j(),n=Object(c.useState)(new Array(20).fill(" ").join("")),s=Object(r.a)(n,2),a=s[0],i=s[1],l=Object(c.useState)(""),u=Object(r.a)(l,2),h=u[0],p=u[1],d=Object(c.useState)(e.charAt(0)),m=Object(r.a)(d,2),O=m[0],v=m[1],f=Object(c.useState)(e.substr(1)),g=Object(r.a)(f,2),k=g[0],y=g[1],S=Object(c.useState)(!0),P=Object(r.a)(S,2),E=P[0],L=P[1],I=Object(c.useState)(!1),T=Object(r.a)(I,2),A=T[0],F=T[1];return b((function(e){L(!0);var n=h,c=k;e!==O||A?(A||(N=Math.floor(Math.random()*t.length)),F(!0),L(!1)):(a.length>0&&i(a.substring(1)),p(n+=O),v(k.charAt(0)),(c=k.substring(1)).split(" ").length<10&&(c+=" "+j()),y(c))})),Object(x.jsxs)("div",{className:"TypingPage",children:[Object(x.jsxs)("header",{className:"TypingPage-header",children:[Object(x.jsx)("img",{src:o,className:"TypingPage-logo",alt:"logo"}),Object(x.jsxs)("p",{className:"Character",children:[Object(x.jsx)("span",{className:"Character-out",children:(a+h).slice(-20)}),E?Object(x.jsx)("span",{className:"Character-current",children:O}):Object(x.jsx)("span",{className:"Character-current-incorrect",children:O}),Object(x.jsx)("span",{children:k.substr(0,20)})]})]}),A?Object(x.jsx)(w,{text:t[N],closePopup:function(){F(!A)}}):null,Object(x.jsx)(C,{})]})};var E=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(P,{})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,1455)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),s(t),a(t),i(t)}))};i.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root")),L()},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){}},[[1454,1,2]]]);
//# sourceMappingURL=main.adbdbacf.chunk.js.map