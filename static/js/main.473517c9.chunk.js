(this["webpackJsonpsova-health"]=this["webpackJsonpsova-health"]||[]).push([[0],{24:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(11),s=c.n(a),r=(c(55),c(20)),l=c.n(r),i=c(34),o=c(15),j=(c(24),c(35)),h=c.n(j),d=c(85),b=c(36),u=c(88),m=c(89),x=c(39),g=c(91),O=c(47),p=c(87),f=(c(75),c(5)),v=function(e){var t="";return t=e.theme?"bg-dark text-white":"bg-light text-dark",Object(f.jsx)("div",{style:{height:"92vh",color:"white"},className:"".concat(t," w-100 d-flex justify-content-center align-items-center"),children:Object(f.jsx)("p",{children:"Type something to see search results"})})},y=function(e,t){var c=e.inputChange,n=e.handleSubmit,a=e.toggleMode,s=e.theme,r="";return r=s?"black":"white",Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(d.a,{className:" m-0 ",style:{background:r},children:[Object(f.jsx)(b.a,{xs:3,md:2,children:Object(f.jsx)(u.a,{children:Object(f.jsx)(u.a.Brand,{href:"#home",children:Object(f.jsx)("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})})})}),Object(f.jsx)(b.a,{xs:6,md:8,className:"d-flex align-item-center",children:Object(f.jsxs)(m.a,{onSubmit:n,className:"w-100 ",inline:!0,children:[Object(f.jsx)(x.a,{style:{fontSize:"0.8rem"},onChange:c,type:"text",placeholder:"Find my movie",className:"mr-sm-2 w-100 rounded-pill p-3"}),Object(f.jsx)(g.a,{type:"submit",className:"position-absolute p-0 ",style:{border:"none",background:"transparent",top:"14px",right:"40px",cursor:"pointer"},children:Object(f.jsx)(O.a,{style:{color:"black"}})})]})}),Object(f.jsx)(b.a,{xs:3,md:2,className:"d-flex justify-content-center align-items-center",children:Object(f.jsx)(p.a,{style:{background:"aquamarine"},onClick:a,defaultChecked:s})})]}),t.children]})},w=c(86),k=c(90),N=function(e){var t=e.result,c="";return c=e.theme?"bg-dark":"bg-light",Object(f.jsx)("div",{className:c,children:Object(f.jsx)(w.a,{children:Object(f.jsx)(d.a,{className:"m-0",children:t?t.map((function(e){return Object(f.jsx)(b.a,{className:"d-flex justify-content-center mt-5 ",children:Object(f.jsx)(k.a,{styel:{border:"none"},children:Object(f.jsx)(k.a.Img,{style:{width:"18rem",height:"-webkit-fill-available"},src:e.Poster})})})})):Object(f.jsx)("div",{style:{height:"92vh"},className:"w-100 d-flex justify-content-center align-items-center ",children:Object(f.jsx)("h2",{children:"Movie not Found!"})})})})})};function S(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),j=r[0],d=r[1],b=Object(n.useState)(!0),u=Object(o.a)(b,2),m=u[0],x=u[1],g=Object(n.useState)(!0),O=Object(o.a)(g,2),p=O[0],w=O[1],k=function(){console.log("false"),x(!m)},S=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.get("http://www.omdbapi.com/?s=".concat(c,"&apikey=9d494647"),{header:{"Access-Control-Allow-Origin":"*"}});case 4:n=e.sent,d(n.data.Search),w(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(y,{inputChange:function(e){a(e.target.value)},handleSubmit:S,theme:m,toggleMode:k}),p?Object(f.jsx)(v,{theme:m}):Object(f.jsx)(N,{result:j,theme:m,toggleMode:k})]})}var C=document.getElementById("root");s.a.render(Object(f.jsx)(n.StrictMode,{children:Object(f.jsx)(S,{})}),C)}},[[81,1,2]]]);
//# sourceMappingURL=main.473517c9.chunk.js.map