(this["webpackJsonpexercicio-tarde-testes-react"]=this["webpackJsonpexercicio-tarde-testes-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(13),n(7)),l=n(6),u=n(3),s=(n(14),function(e){return o.a.createElement("div",{className:"post-container"},o.a.createElement("p",null,e.post.text),o.a.createElement("button",{onClick:function(){return e.toggleLike(e.post.id)},"data-testid":"like-button"},e.post.liked?"Descurtir":"Curtir"),o.a.createElement("button",{onClick:function(){return e.deletePost(e.post.id)}},"Apagar"))}),d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),d=Object(u.a)(c,2),p=d[0],m=d[1],f=Object(a.useState)(!1),v=Object(u.a)(f,2),g=v[0],h=v[1],E=function(e){var t=n.filter((function(t){return e!==t.id}));r(t)},b=function(e){var t=n.map((function(t){return e===t.id?Object(i.a)({},t,{liked:!t.liked}):t}));r(t)};return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:function(e){m(e.target.value)},value:p,placeholder:"Novo post"}),o.a.createElement("button",{onClick:function(){if(p){h(!1);var e=[{id:Date.now(),text:p,liked:!1}].concat(Object(l.a)(n));r(e),m("")}else h(!0)}},"Adicionar"),g?o.a.createElement("p",null,"N\xe3o \xe9 poss\xedvel criar um post vazio, favor escreva algo"):null),o.a.createElement("br",null),0===n.length?o.a.createElement("p",null,"Nenhum post"):n.map((function(e){return o.a.createElement(s,{key:e.id,post:e,toggleLike:b,deletePost:E})})),n.length>0?o.a.createElement("p",null,"Quantidade de posts: ",n.length):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0379e655.chunk.js.map