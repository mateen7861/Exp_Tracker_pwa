(this["webpackJsonpexpense-tracker-2"]=this["webpackJsonpexpense-tracker-2"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(13),n(14),n(3)),i=n(7),u=n(4),s=function(e,t){switch(t.type){case"delete":return{transactions:e.transactions.filter((function(e){return e.id!==t.id}))};case"add":return Object(u.a)(Object(u.a)({},e),{},{transactions:[t.transaction].concat(Object(i.a)(e.transactions))});default:return e}},m={transactions:[{id:1,title:"Salary",amount:9e4}],deleteTransaction:function(e){},addTransaction:function(e){}},d=Object(a.createContext)(m),f=function(e){var t=e.children,n=Object(a.useReducer)(s,m),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.createElement(d.Provider,{value:{transactions:c.transactions,deleteTransaction:function(e){i({type:"delete",id:e})},addTransaction:function(e){i({type:"add",transaction:e})}}},t)},v=function(){var e=Object(a.useContext)(d).addTransaction,t="",n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(n){n.preventDefault();var a={id:Math.floor(1e8*Math.random()),title:c,amount:+t};e(a)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:c,required:!0,onChange:function(e){i(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",ref:function(e){return t=Number(null===e||void 0===e?void 0:e.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))},p=function(e){var t=e.id,n=e.title,o=e.amount,c=Object(a.useContext)(d).deleteTransaction,l=o>0?"+":"-";return r.a.createElement("li",{className:o>0?"plus":"minus"},n,r.a.createElement("span",null,l,"PKR ",Math.abs(o)),r.a.createElement("button",{onClick:function(){return c(t)},className:"delete-btn"},"x"))};var E=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,title:e.title,amount:e.amount})}))))},h=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"PKR ",e))},b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0),n=-e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",null,r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"PKR ",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"PKR ",n))))},g=function(){return r.a.createElement("h1",{style:{marginBottom:"30px"}},"Expense Tracker")};var w=function(){return r.a.createElement(f,null,r.a.createElement(g,null),r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(v,null)))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.883b3121.chunk.js.map