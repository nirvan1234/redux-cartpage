(this["webpackJsonpredux-tut"]=this["webpackJsonpredux-tut"]||[]).push([[0],{26:function(e,t,c){},35:function(e,t,c){},42:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(11),i=c.n(r),a=(c(35),c(7)),l=(c(42),c(0));var j=function(){return Object(l.jsx)("div",{className:"continer main_header",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-md-6 col-6 main_header_left",children:[Object(l.jsx)("h2",{children:" Looking for a Property!"}),Object(l.jsx)("h1",{children:" Buy and Sell Properties at Right Price"}),Object(l.jsxs)("a",{href:"/building",children:[" ",Object(l.jsx)("button",{children:" Details"})]})]}),Object(l.jsx)("div",{className:"col-md-6 col-6 main_header_right",children:Object(l.jsx)("figure",{children:Object(l.jsx)("img",{src:"https://i.pinimg.com/736x/d3/59/1c/d3591c63b81ba14696e290f74743e1de--animated-gifs-rani.jpg",alt:"thapa",className:"img-fluid",title:"thapa-technical"})})})]})})},o="ADD_TO_CART",d=c(14),b=c.n(d),h=function(){return function(e){fetch("http://localhost:3005/posts").then((function(t){t.json().then((function(t){return e({type:o,data:t})}))}))}},u=Object(a.b)((function(e){return{data:e.cardItems}}),(function(e){return{addToCartHandler:function(t){return e(h())}}}))(j),O=c(16),x=c.n(O),p=c(6),m=c(28),v=c(4),f=(c(26),c(63),{position:"fixed",top:"50%",left:"60%",transform:"translate(-50% ,-50%)",background:"white",zIndex:1e3,width:"40%",borderRadius:"30px"}),g={position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, .7)",zIndex:1e3};function y(e){var t=e.open,c=(e.onClose,e.children);return t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:g}),Object(l.jsx)("div",{className:"modal-main",style:f,children:c})]}):null}var N=function(e){var t,c,s=Object(n.useState)([]),r=Object(v.a)(s,2),i=r[0],a=r[1],j=Object(n.useState)([]),o=Object(v.a)(j,2),d=o[0],h=o[1],u=Object(n.useState)([]),O=Object(v.a)(u,2),f=O[0],g=O[1],N=Object(n.useState)(!1),C=Object(v.a)(N,2),k=(C[0],C[1],Object(n.useRef)(""),Object(n.useState)(!1)),w=Object(v.a)(k,2),T=w[0],S=w[1],A=Object(n.useState)([]),F=Object(v.a)(A,2);function I(){return(I=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("http://localhost:3005/posts");case 3:t=e.sent,a(t.data),h(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("something is wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}F[0],F[1],console.log("users",f),Object(n.useEffect)((function(){!function(){I.apply(this,arguments)}(),P(),_(),B()}),[]);var P=function(e){var t=e;console.log("serch",t);var c=d.filter((function(e){return e.bedroom.includes(t)}));a(c)},B=function(e){var t=e;console.log("second",t);var c=d.filter((function(e){return e.floor.includes(t)}));a(c)},_=function(e){var t=e;console.log("sh",t);var c=d.filter((function(e){return e.price>=t-1e7&&e.price<=t}));a(c)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)(y,{open:T,onClose:function(){return S(!1)},children:[Object(l.jsxs)("div",{style:{padding:"18px",margin:"8px"},children:[Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Apartment No:"}),"\xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.aptNo})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Bedrooms"}),"\xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.bedroom})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Floor"}),"\xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.floor})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Area"}),"\xa0\xa0\xa0\xa0",Object(l.jsxs)("p",{children:[f.grossm2,"mSquare"]})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Block No:"})," \xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.blockNew})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Bedrooms"})," \xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.bedroom})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Price"}),"  \xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.price})]}),Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsx)("h5",{children:"Availability"}),"  \xa0\xa0\xa0\xa0",Object(l.jsx)("p",{children:f.availability})]})]}),Object(l.jsxs)("div",{className:"labuttonew",children:[Object(l.jsx)("button",(t={type:"button",className:"labfour"},Object(p.a)(t,"className","btn btn-outline-success float-right"),Object(p.a)(t,"style",{backgroundColor:"green",color:"white",padding:"8px",width:"100px",marginRight:"8px"}),Object(p.a)(t,"type","submit"),Object(p.a)(t,"className","btn btn-info"),Object(p.a)(t,"children","Save"),t)),Object(l.jsx)("span",{children:"  "}),Object(l.jsx)("button",(c={type:"button",className:"btn float-left",style:{backgroundColor:" #717171",color:"white",padding:"8px",width:"100px"}},Object(p.a)(c,"type","submit"),Object(p.a)(c,"onClick",(function(){return S(!1)})),Object(p.a)(c,"children","Cancel"),c))]})]}),Object(l.jsxs)("table",{class:"employee-header",children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:" FlatNo"}),Object(l.jsxs)("th",{children:["Bedrooms",Object(l.jsxs)("select",{onChange:function(e){return P(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"All"}),Object(l.jsx)("option",{value:"1+1",children:"One"}),Object(l.jsx)("option",{value:"2+1",children:"Two"}),Object(l.jsx)("option",{value:"3+1",children:"Three"}),Object(l.jsx)("option",{value:"4+1",children:"Four"})]})," "]}),Object(l.jsxs)("th",{children:["Floor",Object(l.jsxs)("select",{onChange:function(e){return B(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"All"}),Object(l.jsx)("option",{value:"1.KAT",children:"One"}),Object(l.jsx)("option",{value:"2.KAT",children:"Two"}),Object(l.jsx)("option",{value:"3.KAT",children:"Three"}),Object(l.jsx)("option",{value:"4.KAT",children:"Four"})]})," "]}),Object(l.jsxs)("th",{children:["Area",Object(l.jsxs)("select",{onChange:function(e){return function(e){var t=e;console.log("third",t);var c=d.filter((function(e){return e.grossm2>=t-100&&e.grossm2<=t}));console.log("thirdhaina",c),a(c)}(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"All"}),Object(l.jsx)("option",{value:"100",children:"0-100"}),Object(l.jsx)("option",{value:"200",children:"100-200"}),Object(l.jsx)("option",{value:"300",children:"200-300"}),Object(l.jsx)("option",{value:"400",children:"300-400"})]})]}),Object(l.jsxs)("th",{children:["Prices",Object(l.jsxs)("select",{onChange:function(e){return _(e.target.value)},children:[Object(l.jsx)("option",{value:"",children:"All"}),Object(l.jsx)("option",{value:"10000000",children:"0-10000000"}),Object(l.jsx)("option",{value:"20000000",children:"10000001-20000000"}),Object(l.jsx)("option",{value:"30000000",children:"20000001-30000000"}),Object(l.jsx)("option",{value:"40000000",children:"30000001-40000000"}),Object(l.jsx)("option",{value:"50000000",children:"40000001-50000000"})]})," "]}),Object(l.jsx)("th",{children:"   "})]}),i.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{class:"geeks",children:e.aptNo}),Object(l.jsx)("td",{children:e.bedroom}),Object(l.jsx)("td",{children:e.floor}),Object(l.jsx)("td",{children:e.grossm2}),Object(l.jsx)("td",{children:e.price}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(t){return function(e){g(e),S(!0)}(e)},children:" Details"})})]})}))]})]})};c(64);var C=function(e){return console.log("heruko",e),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Home Component"}),Object(l.jsx)("div",{className:"add-to-cart",children:Object(l.jsx)("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg",alt:"cart img"})}),Object(l.jsxs)("div",{className:"cart-wrapper",children:[Object(l.jsx)("div",{className:"img-wrapper item",children:Object(l.jsx)("img",{src:"https://cdn.imgbin.com/0/19/6/mobile-app-icon-virtual-reality-icon-T6zUx7ck.jpg",alt:"mobile img"})}),Object(l.jsxs)("div",{className:"text-wrapper item",children:[Object(l.jsx)("span",{children:"I-Phone"}),Object(l.jsx)("span",{children:"Price: $1000.00"})]}),Object(l.jsx)("div",{className:"btn-wrapper item",children:Object(l.jsx)("button",{onClick:function(){return e.addToCartHandler()},children:"Add To Cart"})})]}),Object(l.jsx)("table",{class:"employee-header",children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("th",{children:["ID  ",Object(l.jsx)("img",{src:"images/Sort.png",alt:"logo"})]}),Object(l.jsxs)("th",{children:["Name ",Object(l.jsx)("img",{src:"images/Sort.png",alt:"logo"})]}),Object(l.jsxs)("th",{children:["Email ",Object(l.jsx)("img",{src:"images/Sort.png",alt:"logo"})]}),Object(l.jsx)("th",{children:"Phone No "}),Object(l.jsx)("th",{children:"DOB"}),Object(l.jsxs)("th",{children:["Role ",Object(l.jsx)("img",{src:"images/Sort.png",alt:"logo"})]}),Object(l.jsx)("th",{children:"Action"})]})})]})},k=Object(a.b)((function(e){return{data:e.cardItems}}),(function(e){return{addToCartHandler:function(t){return e(h())}}}))(C),w=Object(a.b)((function(e){return{data:e.cardItems}}),(function(e){return{addToCartHandler:function(t){return e(h())}}}))(N),T=(c(65),function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg ",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/lux",children:" Luxury flats"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)("a",{className:"nav-link",href:"/",children:"Home "})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"/building",children:"Building"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"",children:"Apartments"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"",children:"Location"})})]})})]})})}),S=c(30),A=c(2);var F=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(S.a,{children:[Object(l.jsx)(T,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(A.c,{children:[Object(l.jsx)(A.a,{path:"/",element:Object(l.jsx)(u,{})}),Object(l.jsx)(A.a,{path:"/details",element:Object(l.jsx)(k,{})}),Object(l.jsx)(A.a,{path:"/building",element:Object(l.jsx)(w,{})})]})})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))},P=c(29),B=c(8),_=c(17);var D=Object(B.b)({cardItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===o?Object(_.a)(Object(_.a)({},e),{},{data:t.data}):e}}),H=Object(B.c)(D,Object(B.a)(P.a));i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(a.a,{store:H,children:Object(l.jsx)(F,{})})}),document.getElementById("root")),I()}},[[66,1,2]]]);
//# sourceMappingURL=main.299fa94f.chunk.js.map