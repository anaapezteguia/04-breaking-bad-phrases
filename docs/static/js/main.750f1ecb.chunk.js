(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{15:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r,a,o,i=t(0),c=t.n(i),s=t(6),d=t.n(s),u=(t(15),t(5)),f=t.n(u),l=t(7),p=t(9),b=t(2),m=t(3),j=t(1),h=m.a.div(r||(r=Object(b.a)(["\n  padding: 3rem;\n  border-radius: 0.5rem;\n  background-color: #fff;\n  max-width: 800px;\n\n  @media (min-width: 992px) {\n    margin-top: 10rem;\n  }\n  h1 {\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    position: relative;\n    padding-left: 4rem;\n    &::before {\n      content: open-quote;\n      font-size: 10rem;\n      color: black;\n      position: absolute;\n      left: -1rem;\n      top: -2rem;\n    }\n  }\n  p {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 1.4rem;\n    font-weight: bold;\n    text-align: right;\n    color: #666;\n    margin-top: 2rem;\n  }\n"]))),x=function(n){var e=n.quote;return Object(j.jsxs)(h,{children:[Object(j.jsx)("h1",{children:e.quote}),Object(j.jsx)("p",{children:e.author})]})},g=m.a.div(a||(a=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5rem;\n"]))),v=m.a.button(o||(o=Object(b.a)(["\n  background: -webkit-linear-gradient(\n    top left,\n    #007d35 0%,\n    #007d35 40%,\n    #0f574e 100%\n  );\n  background-size: 300px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #fff;\n  margin-top: 3rem;\n  padding: 1rem 3rem;\n  font-size: 2rem;\n  border: 2px solid black;\n  transition: background-size 0.8s ease;\n\n  :hover {\n    cursor: pointer;\n    background-size: 400px;\n  }\n"])));var O=function(){var n=Object(i.useState)({}),e=Object(p.a)(n,2),t=e[0],r=e[1],a=function(){var n=Object(l.a)(f.a.mark((function n(){var e,t;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,r(t[0]);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){a()}),[]),Object(j.jsxs)(g,{children:[Object(j.jsx)(x,{quote:t}),Object(j.jsx)(v,{onClick:a,children:"Get quote"})]})};d.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.750f1ecb.chunk.js.map