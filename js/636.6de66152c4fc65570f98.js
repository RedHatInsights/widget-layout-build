"use strict";(self.webpackChunkwidgetLayout=self.webpackChunkwidgetLayout||[]).push([[636],{5338:(e,t,n)=>{var r=n(1688);t.H=r.createRoot,r.hydrateRoot},5156:(e,t,n)=>{var r=n(9365),o=n.n(r),i=n(5338),a=n(7565),c=n(2663),u=n(152),s=n(6718),l=n(2466),f=n(7238),p=n(9943),d=n(9655),v=n(580),h=n(9404),m=n(6416),y=n(881),b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)},w=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},g=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}};const E=function(e){var t=(0,s.md)(l.e),n=(0,s.md)(f.Qe),i=(0,f.vA)(),E=(0,s.Xr)(h.a),k=(0,d.A)().currentUser,A=(0,y.A)().visibilityFunctions;return(0,r.useEffect)((function(){k&&w(void 0,void 0,void 0,(function(){var e,t;return g(this,(function(n){switch(n.label){case 0:return[4,(0,v.J5)()];case 1:return(e=n.sent())?[4,Object.entries(e).reduce((function(e,t){return w(void 0,[e,t],void 0,(function(e,t){var n,r,o,i=t[0],a=t[1];return g(this,(function(t){switch(t.label){case 0:return[4,e];case 1:return n=t.sent(),(r=a.config)&&r.permissions?[4,(c=r.permissions,w(void 0,void 0,Promise,(function(){return g(this,(function(e){switch(e.label){case 0:return[4,Promise.all(c.map((function(e){return w(void 0,void 0,void 0,(function(){var t,n,r;return g(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),t=e.method,n=e.args,A[t]&&"function"==typeof A[t]?[4,A[t].apply(A,n||[])]:[3,2];case 1:return[2,o.sent()];case 2:return[2,!0];case 3:return r=o.sent(),console.error("Error checking permissions",r),[2,!1];case 4:return[2]}}))}))})))];case 1:return[2,e.sent().every(Boolean)]}}))})))]:[3,3];case 2:return o=t.sent(),[3,4];case 3:o=!0,t.label=4;case 4:return o&&(n[i]=a),[2,e]}var c}))}))}),Promise.resolve({}))]:[3,3];case 2:t=n.sent(),E(t),n.label=3;case 3:return[2]}}))}))}),[k]),o().createElement("div",{className:"widgetLayout"},o().createElement(m.A,{notifications:n,removeNotification:i}),o().createElement(p.A,null),o().createElement(c.A,{dismissible:!1},o().createElement(a.d8,{className:"widg-c-page__main-section--grid pf-v5-u-p-md-on-sm"},o().createElement(u.A,b({isLayoutLocked:t},e)))))},k=function(){return o().createElement(E,null)};var A=document.getElementById("root");A&&(0,i.H)(A).render(o().createElement((function(){return o().createElement(k,null)}),null))}}]);