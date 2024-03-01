var frontendStarterApp;(()=>{"use strict";var e,r,t,n,o,a,i,l,u,d,s,f,c,h,p,m,v,g,y,b,w,S={87456:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(416),t.e(92),t.e(828),t.e(132),t.e(112),t.e(428),t.e(488)]).then((()=>()=>t(27772)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},x={};function E(e){var r=x[e];if(void 0!==r)return r.exports;var t=x[e]={id:e,loaded:!1,exports:{}};return S[e].call(t.exports,t,t.exports,E),t.loaded=!0,t.exports}E.m=S,E.c=x,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>"js/"+(120===e?"DefaultRoute":e)+"."+E.h()+".js",E.miniCssF=e=>"css/"+(120===e?"DefaultRoute":e)+"."+{120:"bc2275177873b67f80e4",488:"d275e3d9609e7049ba71",664:"55a2e396979f09120ae3"}[e]+".css",E.h=()=>"7b3be25917a048014c72",E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="widget-layout:",E.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var i,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",r+o),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},r={};E.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var a=E.S[t],i="widget-layout",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(l("@patternfly/react-core","5.2.0",(()=>Promise.all([E.e(416),E.e(580),E.e(132),E.e(112),E.e(116)]).then((()=>()=>E(95580))))),l("@scalprum/react-core","0.7.1",(()=>Promise.all([E.e(92),E.e(104),E.e(132),E.e(732)]).then((()=>()=>E(80104))))),l("jotai","2.6.4",(()=>Promise.all([E.e(578),E.e(132)]).then((()=>()=>E(63578))))),l("react-dom","18.2.0",(()=>Promise.all([E.e(724),E.e(132)]).then((()=>()=>E(97104))))),l("react-router-dom","6.16.0",(()=>Promise.all([E.e(12),E.e(132)]).then((()=>()=>E(6012))))),l("react","18.2.0",(()=>E.e(504).then((()=>()=>E(11504))))),l("redux-promise-middleware","6.1.2",(()=>E.e(968).then((()=>()=>E(9968)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),E.p="/beta/apps/frontend-starter-app/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var i=r[n],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(l=e[a]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var i=[];for(a=1;a<e.length;a++){var l=e[a];i.push(0===l?"not("+u()+")":1===l?"("+u()+" || "+u()+")":2===l?i.pop()+" "+i.pop():o(l))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,l=1,u=!0;;l++,i++){var d,s,f=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(s=(typeof(d=r[i]))[0]))return!u||("u"==f?l>n&&!o:""==f!=o);if("u"==s){if(!u||"u"!=f)return!1}else if(u)if(f==s)if(l<=n){if(d!=e[l])return!1}else{if(o?d>e[l]:d<e[l])return!1;d!=e[l]&&(u=!1)}else if("s"!=f&&"n"!=f){if(o||l<=n)return!1;u=!1,l--}else{if(l<=n||s<f!=o)return!1;u=!1}else"s"!=f&&"n"!=f&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?a(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=i(e,t);return a(n,o)||s(l(e,t,o,n)),f(e[t][o])},d=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},f=e=>(e.loaded=1,e.get()),h=(c=e=>function(r,t,n,o){var a=E.I(r);return a&&a.then?a.then(e.bind(e,r,E.S[r],t,n,o)):e(r,E.S[r],t,n,o)})(((e,r,t,n,o)=>r&&E.o(r,t)?u(r,0,t,n):o())),p=c(((e,r,t,n,o)=>{var a=r&&E.o(r,t)&&d(r,t,n);return a?f(a):o()})),m={},v={23132:()=>h("default","react",[1,18,2,0],(()=>E.e(504).then((()=>()=>E(11504))))),32112:()=>h("default","react-dom",[1,18,2,0],(()=>E.e(724).then((()=>()=>E(97104))))),71376:()=>p("default","@patternfly/react-core",[1,5,0,0],(()=>Promise.all([E.e(580),E.e(248)]).then((()=>()=>E(95580))))),25908:()=>h("default","@scalprum/react-core",[0],(()=>E.e(104).then((()=>()=>E(80104))))),50708:()=>h("default","react-router-dom",[0],(()=>E.e(12).then((()=>()=>E(6012))))),51260:()=>p("default","redux-promise-middleware",[4,6,1,2],(()=>E.e(968).then((()=>()=>E(9968))))),26008:()=>h("default","jotai",[0],(()=>E.e(578).then((()=>()=>E(63578)))))},g={112:[32112],120:[26008],132:[23132],428:[71376,25908,50708,51260]},y={},E.f.consumes=(e,r)=>{E.o(g,e)&&g[e].forEach((e=>{if(E.o(m,e))return r.push(m[e]);if(!y[e]){var t=r=>{m[e]=0,E.m[e]=t=>{delete E.c[e],t.exports=r()}};y[e]=!0;var n=r=>{delete m[e],E.m[e]=t=>{throw delete E.c[e],r}};try{var o=v[e]();o.then?r.push(m[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},b=e=>new Promise(((r,t)=>{var n=E.miniCssF(e),o=E.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,o.parentNode.removeChild(o),n(u)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),w={212:0},E.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{120:1,488:1,664:1}[e]&&r.push(w[e]=b(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={212:0};E.f.j=(r,t)=>{var n=E.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(112|132|428)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=E.p+E.u(r),i=new Error;E.l(a,(t=>{if(E.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)E.o(i,n)&&(E.m[n]=i[n]);l&&l(E)}for(r&&r(t);u<a.length;u++)o=a[u],E.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkwidget_layout=self.webpackChunkwidget_layout||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var P=E(87456);frontendStarterApp=P})();