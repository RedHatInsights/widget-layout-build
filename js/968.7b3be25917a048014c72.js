(self.webpackChunkwidget_layout=self.webpackChunkwidget_layout||[]).push([[968],{26512:t=>{var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var a,c=[],l=!1,f=-1;function s(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=u(s);l=!0;for(var e=c.length;e;){for(a=c,c=[];++f<e;)a&&a[f].run();f=-1,e=c.length}a=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new y(t,e)),1!==c.length||l||u(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9968:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ActionType:()=>c,createPromise:()=>l,default:()=>f});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":r(t))&&t&&"function"==typeof t.then}var i=n(26512),u=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[c.Pending,c.Fulfilled,c.Rejected],n=t.promiseTypeSuffixes||e,r=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(i){var c=void 0,l=void 0;if(!i.payload)return t(i);var f=i.payload;if(o(f))c=f;else if(o(f.promise))c=f.promise,l=f.data;else{if("function"!=typeof f&&"function"!=typeof f.promise)return t(i);if(c=f.promise?f.promise():f(),l=f.promise?f.data:void 0,!o(c))return t(a({},i,{payload:c}))}var s=i.type,p=i.meta,y=u(n,3),d=y[0],h=y[1],m=y[2],v=function(t,e){return a({type:[s,e?m:h].join(r)},null==t?{}:{payload:t},void 0!==p?{meta:p}:{},e?{error:!0}:{})};return t(a({type:[s,d].join(r)},void 0!==l?{payload:l}:{},void 0!==p?{meta:p}:{})),c.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=v(t,!1);return e(n),{value:t,action:n}}),(function(t){var n=v(t,!0);throw e(n),t}))}}}}function f(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).dispatch;return"function"==typeof t?l()({dispatch:t}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/968.ae2c550134d89ab659aaff5bccce2076.js.map