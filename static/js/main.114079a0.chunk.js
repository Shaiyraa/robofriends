(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(1),c=t.n(r),i=t(4),s=t.n(i),a=(t(10),t(3)),l=(t(11),function(){return Object(o.jsx)("h1",{className:"f1",children:"RoboFriends"})}),d=function(e){var n=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},h=function(e){var n=e.robot,t=n.id,r=n.name,c=n.email;return Object(o.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robot"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:r}),Object(o.jsx)("p",{children:c})]})]})},u=function(e){var n=e.robots;return Object(o.jsx)("div",{children:n.map((function(e,t){return Object(o.jsx)(h,{robot:n[t]},t)}))})},b=function(e){var n=e.children;return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"},children:n})},f=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),s=Object(a.a)(i,2),h=s[0],f=s[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)})).catch()}),[]);var j=t.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())||e.email.toLowerCase().includes(h.toLowerCase())}));return Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{searchChange:function(e){f(e.target.value)}}),Object(o.jsx)(b,{children:t.length?Object(o.jsx)(u,{robots:j}):Object(o.jsx)("h1",{children:"Loading..."})})]})},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};t(12);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");j?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(n,e)}))}}(),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.114079a0.chunk.js.map