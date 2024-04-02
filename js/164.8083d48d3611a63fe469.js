"use strict";(self.webpackChunkwidget_layout=self.webpackChunkwidget_layout||[]).push([[164],{89412:(e,t,n)=>{n.r(t),n.d(t,{breakpoints:()=>N,default:()=>z,dropping_elem_id:()=>I});var r=n(96803);const o=n.p+"fonts/resize-handle.svg";var a=n(41556),i=n(6172),c=n(56020),u=n(95780),l=n(82528),s=n(24144),f=n(27924),d=n(11136),p=n(23132),m=n.n(p),h=n(74640),v=n(32648),g=n(51320),y=n(47388),b=n(26008),w=n(82084),E=n.n(w);const x=function(e){var t,n,r=e.widgetType,o=e.title,w=e.isDragging,x=e.setIsDragging,k=e.setWidgetAttribute,O=e.widgetConfig,T=e.removeWidget,A=(0,p.useState)(!1),C=A[0],D=A[1],j=(0,b.useAtomValue)(v.A),S=(O.config||{}).headerLink,P=S&&S.href&&S.title,_=(0,p.useMemo)((function(){return(0,y.e)(j,r)}),[j,r]),H=_.node,I=_.module,N=_.scope,M=(0,p.useMemo)((function(){var e=O.h===O.maxH,t=O.h===O.minH;return m().createElement(m().Fragment,null,m().createElement(a.DropdownItem,{onClick:function(){D(!1),k(O.i,"static",!O.static)},icon:O.static?m().createElement(i.mc,null):m().createElement(c.mp,null)},O.static?"Unlock location and size":"Lock location and size"),m().createElement(a.DropdownItem,{isDisabled:e||O.static,onClick:function(){var e;k(O.i,"h",null!==(e=O.maxH)&&void 0!==e?e:O.h),D(!1)},icon:m().createElement(u.c9,null)},"Autosize height to content"),m().createElement(a.DropdownItem,{onClick:function(){var e;k(O.i,"h",null!==(e=O.minH)&&void 0!==e?e:O.h),D(!1)},isDisabled:t||O.static,icon:m().createElement(l.GQ,null)},"Minimize height"),m().createElement(a.DropdownItem,{onClick:function(){T(O.i)},icon:m().createElement(a.Icon,{className:"pf-v5-u-pb-2xl",status:O.static?void 0:"danger"},m().createElement(s.QR,null)),isDisabled:O.static},"Remove",m().createElement(a.HelperText,null,m().createElement(a.HelperTextItem,{className:"pf-v5-u-text-wrap",variant:"indeterminate"},"All 'removed' widgets can be added back by clicking the 'Add widgets' button."))))}),[O.minH,O.maxH,O.h,O.i,O.static,k]),W=m().createElement(m().Fragment,null,m().createElement(a.Tooltip,{content:m().createElement("p",null,"Actions")},m().createElement(a.Dropdown,{popperProps:{appendTo:document.body,maxWidth:"300px",position:"right"},toggle:function(e){return m().createElement(a.MenuToggle,{ref:e,isExpanded:C,onClick:function(){return D((function(e){return!e}))},variant:"plain","aria-label":"Card title inline with images and actions example kebab toggle"},m().createElement(f._Y,{"aria-hidden":"true"}))},isOpen:C,onOpenChange:function(e){return D(e)}},m().createElement(a.DropdownList,null,M))),m().createElement(a.Tooltip,{content:m().createElement("p",null,O.static?"Widget locked":"Move")},m().createElement(a.Icon,{onMouseDown:function(){return x(!0)},onMouseUp:function(){return x(!1)},className:(0,h.c)("drag-handle",{dragging:w})},m().createElement(d.Sw,{style:{fill:"#6a6e73"}}))));return m().createElement(a.Card,{className:(0,h.c)("grid-tile",(t={static:O.static},t[N]=N&&I,t))},m().createElement(a.CardHeader,{actions:{actions:W}},m().createElement(a.Flex,{className:"pf-v5-u-flex-direction-row pf-v5-u-flex-nowrap"},m().createElement(a.Icon,{status:"custom",className:"pf-v5-u-mr-sm"},m().createElement(g.u7,null)),m().createElement(a.CardTitle,{style:{userSelect:w?"none":"auto"},className:"pf-v5-u-flex-wrap pf-v5-u-text-break-word"},o),P&&m().createElement(a.Button,{className:"widget-header-link pf-v5-u-p-0",variant:"link",onClick:function(){return window.open(S.href,"_blank")}},S.title))),m().createElement(a.Divider,null),m().createElement(a.CardBody,{className:E()("pf-v5-u-p-0",(n={},n["".concat(N,"-").concat(I)]=N&&I,n))},H))};function k(e,t){return Object.keys(e).includes(t)}var O=n(62644),T=n(9920),A=(0,b.atom)({sm:[],md:[],lg:[],xl:[]}),C=(0,b.atom)(-1),D=n(5416),j=n(99700),S=n(19152),P=n(14488),_=n(33568),H=function(){return H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},H.apply(this,arguments)},I="__dropping-elem__",N={xl:1100,lg:996,md:768,sm:480},M=(0,r.WidthProvider)(r.Responsive),W=function(e,t){return m().createElement("div",{ref:t,className:"react-resizable-handle react-resizable-handle-".concat(e)},m().createElement("img",{src:o}))};const z=function(e){var t=e.isLayoutLocked,n=void 0!==t&&t,r=(0,p.useState)(!1),o=r[0],a=r[1],i=(0,p.useState)(!0),c=i[0],u=i[1],l=(0,b.useAtom)(T.qA),s=l[0],f=l[1],d=(0,b.useAtom)(T.Ij),h=d[0],g=d[1],w=(0,b.useAtom)(T.gT),E=w[0],z=w[1],L=(0,b.useAtom)(A),U=L[0],F=L[1],G=(0,b.useAtom)(C),R=G[0],Y=G[1],q=(0,b.useAtom)(T.i2),B=q[0],Q=q[1],V=(0,p.useRef)(null),J=(0,j.c)().currentToken,K=(0,b.useAtomValue)(v.A),X=(0,S.useDispatch)(),Z=(0,b.useAtom)(O.Y),$=Z[0],ee=Z[1],te=(0,p.useMemo)((function(){if($&&k(K,$))return H(H({},K[$].defaults),{i:I,widgetType:$,title:"New title",config:K[$].config})}),[$]),ne=function(e,t,n){f((function(r){return r.map((function(r){var o;return r.i===e?H(H({},r),((o={})[t]=n,o)):r}))}))},re=function(e){f((function(t){return t.filter((function(t){return t.i!==e}))}))},oe=(0,p.useMemo)((function(){return s.map((function(e){return H(H({},e),{locked:n||e.locked})}))}),[n,s]),ae=(0,p.useCallback)((function(e){var t;if(c)u(!1);else if(!(n||R<0||!E||$||(0,_.isEqual)(h,s))){var r=(0,D.G6)(((t={})[E]=e,t));(0,D.gd)(R,{templateConfig:r},J).then((function(e){var t=(0,D.pm)(e.templateConfig);F(t),g(s),f(t[E])})).catch((function(e){console.error(e),X((0,P.s5)({variant:"danger",title:"Failed to patch dashboard configuration",description:"Your dashboard changes were unable to be saved."}))}))}}),[n,R,E,J,s,$,c]),ie=(0,_.debounce)(ae,500),ce=(0,p.useCallback)((function(e){if(B){var t=s.find((function(e){return e.i===B}));t&&(e.stopPropagation(),e.preventDefault(),"ArrowUp"===e.code&&f((function(e){return e.map((function(e){return e.i===B?H(H({},e),{y:Math.max(e.y-1,0)}):e}))})),"ArrowDown"===e.code&&f((function(e){return e.map((function(e){return e.i===B?H(H({},e),{y:e.y+1}):e}))})),"ArrowLeft"===e.code&&f((function(e){return e.map((function(e){return e.i===B?H(H({},e),{x:Math.max(e.x-1,0)}):e}))})),"ArrowRight"===e.code&&f((function(e){return e.map((function(e){return e.i===B?H(H({},e),{x:e.x+1}):e}))})))}}),[B]);return(0,p.useEffect)((function(){return B&&V.current&&V.current.addEventListener("keydown",ce),function(){var e;null===(e=V.current)||void 0===e||e.removeEventListener("keydown",ce)}}),[B]),(0,p.useEffect)((function(){!J||R>=0||(0,D.Yt)(J,"landingPage").then((function(e){var t,n=(0,D.OW)(e);if(!n)throw new Error("No default template found");var r,o=(0,D.pm)(n.templateConfig),a=(null===(t=null==V?void 0:V.current)||void 0===t?void 0:t.clientWidth)||document.body.clientWidth;r=a>N.lg?"xl":N.lg>=a&&a>N.md?"lg":N.md>=a&&a>N.sm?"md":"sm",F(o),Y(n.id),f(o[r]),z(r)})).catch((function(e){console.log(e),X((0,P.s5)({variant:"danger",title:"Failed to fetch dashboard template",description:"Try reloading the page."}))}))}),[J,R]),m().createElement("div",{style:{position:"relative"},ref:V},m().createElement(M,{className:"layout",draggableHandle:".drag-handle",layouts:U,breakpoints:N,cols:{xl:4,lg:3,md:2,sm:1},rowHeight:88,isDraggable:!n,isResizable:!n,resizeHandle:W,containerPadding:{xl:[0,0],lg:[0,0],md:[0,0],sm:[0,0]},margin:{xl:[16,16],lg:[16,16],md:[16,16],sm:[16,16]},resizeHandles:["sw","nw","se","ne"],droppingItem:te,isDroppable:!n,onDrop:function(e,t,n){var r,o=(null===(r=n.dataTransfer)||void 0===r?void 0:r.getData("text"))||"";if(k(K,o)){var a=H(H(H({},t),K[o].defaults),{widgetType:o,i:(0,D.uU)(o),title:"New title",config:K[o].config});ee(void 0),f((function(e){return e.reduce((function(e,t){return t.x+t.w>a.x&&t.y+t.h<=a.y?e.push(t):e.push(H(H({},t),{y:t.y+t.h})),e}),[a])}))}n.preventDefault()},useCSSTransforms:!0,verticalCompact:!0,onLayoutChange:ie,onBreakpointChange:function(e){z(e)}},oe.map((function(e,t){var n=e.widgetType,r=(e.title,function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["widgetType","title"])),i=(0,y.e)(K,n).config;return m().createElement("div",{key:r.i,"data-grid":r,onKeyUp:function(e){return t=e,n=r.i,void("Enter"===t.code&&(t.preventDefault(),t.stopPropagation(),Q((function(e){if(e!==n)return n}))));var t,n},tabIndex:t,style:H({boxShadow:B===r.i?"0 0 2px 2px #2684FF":"none"},B===r.i?{outline:"none"}:{})},m().createElement(x,{isDragging:o,setIsDragging:a,title:r.i,widgetType:n,widgetConfig:H(H({},r),{colWidth:300,config:i}),setWidgetAttribute:ne,removeWidget:re},r.i))}))))}},47388:(e,t,n)=>{n.d(t,{e:()=>c});var r=n(25908),o=n(23132),a=n.n(o),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t){var n=e[t];return{node:n?a().createElement(r.ScalprumComponent,i({},n)):a().createElement(o.Fragment,null),scope:null==n?void 0:n.scope,module:null==n?void 0:n.module,importName:null==n?void 0:n.importName,config:null==n?void 0:n.config}}},5416:(e,t,n)=>{n.d(t,{G6:()=>w,MX:()=>m,OW:()=>v,Yt:()=>p,gd:()=>h,pm:()=>y,uU:()=>d});var r,o=n(89412),a=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}},l=function(e){return{Accept:"application/json",Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}},s=function(e){function t(t,n,r){var o=this.constructor,a=e.call(this,t)||this;return a.status=n,a.response=r,Object.defineProperty(a,"name",{value:o.name,configurable:!0}),"function"==typeof Error.captureStackTrace?Error.captureStackTrace(a,a.constructor):a.stack=new Error(t).stack,a}return a(t,e),t}(Error),f=function(e){if(!e.ok)throw new s("chrome-service dashboard-templates API fetch error",e.status,e)},d=function(e,t){return void 0===t&&(t=crypto.randomUUID()),"".concat(e).concat("#").concat(t)};function p(e,t){return c(this,void 0,Promise,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return[4,fetch("/api/chrome-service/v1/dashboard-templates".concat(t?"?dashboard=".concat(t):""),{method:"GET",headers:l(e)})];case 1:return n=r.sent(),f(n),[4,n.json()];case 2:return[2,r.sent().data]}}))}))}function m(e){return c(this,void 0,Promise,(function(){var t;return u(this,(function(n){switch(n.label){case 0:return[4,fetch("/api/chrome-service/v1/dashboard-templates/widget-mapping",{method:"GET",headers:l(e)})];case 1:return t=n.sent(),f(t),[4,t.json()];case 2:return[2,n.sent().data]}}))}))}var h=function(e,t,n){return c(void 0,void 0,Promise,(function(){var r;return u(this,(function(o){switch(o.label){case 0:return[4,fetch("/api/chrome-service/v1/dashboard-templates/".concat(e),{method:"PATCH",headers:l(n),body:JSON.stringify(t)})];case 1:return r=o.sent(),f(r),[4,r.json()];case 2:return[2,o.sent().data]}}))}))},v=function(e){return e.find((function(e){return!0===e.default}))},g=function(e){return i(i({},e),{widgetType:(t=e.i,n=t.split("#"),[n[0],n[1]])[0]});var t,n},y=function(e){var t={sm:[],md:[],lg:[],xl:[]};return Object.keys(e).forEach((function(n){t[n]=e[n].map(g)})),t},b=function(e){return{x:e.x,y:e.y,h:e.h,i:e.i,w:e.w,title:e.title,maxH:e.maxH,minH:e.minH,static:e.static}},w=function(e){var t={};return Object.keys(e).forEach((function(n){var r;t[n]=null===(r=e[n])||void 0===r?void 0:r.map(b).filter((function(e){return e.i!==o.dropping_elem_id}))})),t}},99700:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(23132);const o=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return(0,r.useEffect)((function(){var t,n,r,a;t=void 0,n=void 0,a=function(){return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(t){switch(t.label){case 0:return[4,e()];case 1:return t.sent(),o(!0),[2]}}))},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{u(a.next(e))}catch(e){o(e)}}function c(e){try{u(a.throw(e))}catch(e){o(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,c)}u((a=a.apply(t,n||[])).next())}))}),[]),n};var a=n(73804);const i=function(){var e=(0,r.useState)(void 0),t=e[0],n=e[1],i=(0,r.useState)(""),c=i[0],u=i[1],l=(0,a.c)(),s=o((function(){return e=void 0,t=void 0,o=function(){var e,t;return function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(e,i)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}(this,(function(r){switch(r.label){case 0:return[4,l.auth.getUser()];case 1:return(e=r.sent())&&n(e.identity.user),[4,l.auth.getToken()];case 2:return(t=r.sent())&&u(t),[2]}}))},new((r=void 0)||(r=Promise))((function(n,a){function i(e){try{u(o.next(e))}catch(e){a(e)}}function c(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((o=o.apply(e,t||[])).next())}));var e,t,r,o}));return{isLoaded:s,currentUser:t,currentToken:c}}},62644:(e,t,n)=>{n.d(t,{Y:()=>r});var r=(0,n(26008).atom)(void 0)},9920:(e,t,n)=>{n.d(t,{Ij:()=>l,Q9:()=>a,gT:()=>c,i2:()=>s,kH:()=>i,qA:()=>u});var r=n(33568),o=n(26008),a=[];function i(e){return(0,r.isEqual)(a,e)}var c=(0,o.atom)("xl"),u=(0,o.atom)(a),l=(0,o.atom)(a),s=(0,o.atom)(void 0)},32648:(e,t,n)=>{n.d(t,{A:()=>r});var r=(0,n(26008).atom)({})}}]);
//# sourceMappingURL=../sourcemaps/164.890687dc2340794ced36f1c151267e4f.js.map