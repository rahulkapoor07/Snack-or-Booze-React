(this["webpackJsonpsnack-or-booze"]=this["webpackJsonpsnack-or-booze"]||[]).push([[0],{41:function(e,t,a){e.exports=a(74)},46:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(12),l=a.n(r),i=(a(46),a(47),a(29)),o=a(11),s=a.n(o),u=a(14),m=a(15),p=a(37),E=a(38),d=a(23),f=a.n(d),b=function(){function e(){Object(p.a)(this,e)}return Object(E.a)(e,null,[{key:"getSnacks",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("http://localhost:5000","/snacks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getDrinks",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("http://localhost:5000","/drinks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),h=c.a.createContext();var k=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(m.a)(a,2),l=r[0],o=r[1],p=Object(n.useState)([]),E=Object(m.a)(p,2),d=E[0],f=E[1],k=Object(n.useState)([]),v=Object(m.a)(k,2),x=v[0],g=v[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getSnacks();case 2:t=e.sent,f(t),o(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.getDrinks();case 2:t=e.sent,g(t),o(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l?c.a.createElement("p",null,"Loading \u2026"):c.a.createElement(h.Provider,{value:{drinks:x,snacks:d,collectFormData:function(e){var t=e.type,a=e.name,n=e.description,c=e.recipe,r=e.serve;"Snacks"===t?f((function(e){return[].concat(Object(i.a)(e),[{id:a,name:a,description:n,recipe:c,serve:r}])})):g((function(e){return[].concat(Object(i.a)(e),[{id:a,name:a,description:n,recipe:c,serve:r}])}))}}},t)},v=(a(67),a(6)),x=a(3);var g=function(){return c.a.createElement("div",null,c.a.createElement(x.n,{expand:"md"},c.a.createElement(v.b,{exact:!0,to:"/",className:"navbar-brand"},"Snack or Booze"),c.a.createElement(x.l,{className:"ml-auto",navbar:!0},c.a.createElement(x.m,null,c.a.createElement(v.b,{exact:!0,to:"/snacks"},"Snacks")),c.a.createElement(x.m,null,c.a.createElement(v.b,{exact:!0,to:"/drinks"},"Drinks")),c.a.createElement(x.m,null,c.a.createElement(v.b,{exact:!0,to:"/add-new"},"Add New")))))};var y=function(e){var t=e.snacks,a=e.drinks;return c.a.createElement("section",{className:"col-md-8"},c.a.createElement(x.b,null,c.a.createElement(x.c,{className:"text-center"},c.a.createElement(x.e,null,c.a.createElement("div",null,c.a.createElement("h3",{className:"font-weight-bold"},"Welcome to Silicon Valley's premier dive cafe!")),c.a.createElement(x.o,null,c.a.createElement("thead",{style:{color:"white"}},c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Snacks"),c.a.createElement("th",null,"Drinks"))),c.a.createElement("tbody",{style:{color:"white"}},c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Numbers"),c.a.createElement("td",null,t.length),c.a.createElement("td",null,a.length))))))))};a(72);var j=function(e){var t=e.snacks,a=e.drinks;return c.a.createElement("section",{className:"col-md-4"},c.a.createElement(x.b,null,c.a.createElement(x.c,null,c.a.createElement(x.e,{className:"font-weight-bold text-center"},"Food Menu"),c.a.createElement(x.d,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),t?c.a.createElement(x.j,null,t.map((function(e){return c.a.createElement(v.b,{to:"/snacks/".concat(e.id),key:e.id},c.a.createElement(x.k,null,e.name))}))):c.a.createElement(x.j,null,a.map((function(e){return c.a.createElement(v.b,{to:"/drinks/".concat(e.id),key:e.id},c.a.createElement(x.k,null,e.name))}))))))},w=a(4);var O=function(e){var t,a,n=e.snacksItems,r=e.drinksItems,l=e.cantFind,i=Object(w.h)().id;if(n)t=n.find((function(e){return e.id===i}));else{if(a=r.find((function(e){return e.id===i})),!t)return c.a.createElement(w.a,{to:l});if(!a)return c.a.createElement(w.a,{to:l})}return c.a.createElement("section",null,c.a.createElement(x.b,null,t?c.a.createElement(x.c,null,c.a.createElement(x.e,{className:"font-weight-bold text-center"},t.name),c.a.createElement(x.d,{className:"font-italic"},t.description),c.a.createElement("p",null,c.a.createElement("b",null,"Recipe:")," ",t.recipe),c.a.createElement("p",null,c.a.createElement("b",null,"Serve:")," ",t.serve)):c.a.createElement(x.c,null,c.a.createElement(x.e,{className:"font-weight-bold text-center"},a.name),c.a.createElement(x.d,{className:"font-italic"},a.description),c.a.createElement("p",null,c.a.createElement("b",null,"Recipe:")," ",a.recipe),c.a.createElement("p",null,c.a.createElement("b",null,"Serve:")," ",a.serve))))},S=a(18),N=a(19),D=function(e){var t=e.collectFormData,a=Object(w.g)(),r=Object(n.useState)({type:"",name:"",description:"",recipe:"",serve:""}),l=Object(m.a)(r,2),i=l[0],o=l[1],s=function(e){var t=e.target,a=t.name,n=t.value;o((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(S.a)({},a,n))}))};return c.a.createElement(x.f,{onSubmit:function(e){e.preventDefault(),t(Object(N.a)({},i)),a.push("/")}},c.a.createElement(x.g,null,c.a.createElement(x.i,{for:"exampleSelect"},"Select"),c.a.createElement(x.h,{type:"select",name:"type",id:"exampleSelect",value:i.type,onChange:s},c.a.createElement("option",null,"None"),c.a.createElement("option",null,"Snacks"),c.a.createElement("option",null,"Drinks"))),c.a.createElement(x.g,null,c.a.createElement(x.i,{for:"typeName"},"Name"),c.a.createElement(x.h,{type:"text",name:"name",id:"typeName",value:i.name,onChange:s,placeholder:"Name"})),c.a.createElement(x.g,null,c.a.createElement(x.i,{for:"typeDescription"},"Description"),c.a.createElement(x.h,{type:"text",name:"description",id:"typeDescription",value:i.description,onChange:s,placeholder:"Description"})),c.a.createElement(x.g,null,c.a.createElement(x.i,{for:"recipe"},"Recipe"),c.a.createElement(x.h,{type:"text",name:"recipe",value:i.recipe,onChange:s,id:"recipe",placeholder:"Recipe"})),c.a.createElement(x.g,null,c.a.createElement(x.i,{for:"serve"},"Serve"),c.a.createElement(x.h,{type:"textarea",name:"serve",value:i.serve,onChange:s,id:"serve"})),c.a.createElement(x.a,null,"Submit"))},F=function(){var e=Object(n.useContext)(h),t=e.drinks,a=e.snacks,r=e.collectFormData;return c.a.createElement("main",null,c.a.createElement(w.d,null,c.a.createElement(w.b,{exact:!0,path:"/"},c.a.createElement(y,{snacks:a,drinks:t})),c.a.createElement(w.b,{exact:!0,path:"/snacks"},c.a.createElement(j,{snacks:a,drinks:t})),c.a.createElement(w.b,{exact:!0,path:"/snacks/:id"},c.a.createElement(O,{snacksItems:a,cantFind:"/snacks"})),c.a.createElement(w.b,{exact:!0,path:"/drinks"},c.a.createElement(j,{drinks:t})),c.a.createElement(w.b,{exact:!0,path:"/drinks/:id"},c.a.createElement(O,{drinksItems:t,cantFind:"/drinks"})),c.a.createElement(w.b,{exact:!0,path:"/add-new"},c.a.createElement(D,{collectFormData:r})),c.a.createElement(w.b,null,c.a.createElement("h1",null,"Page Not Found"))))};a(73);var C=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null,c.a.createElement(g,null),c.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v.a,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a53a3b6f.chunk.js.map