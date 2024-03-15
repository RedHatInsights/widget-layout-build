"use strict";(self.webpackChunkwidget_layout=self.webpackChunkwidget_layout||[]).push([[872,732],{27708:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(732),o=n(23132);let a=0;function l({name:e,xOffset:t=0,yOffset:n=0,width:l,height:c,svgPath:i}){var u;return u=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+a++}render(){const e=this.props,{title:a,className:u}=e,s=(0,r.sX)(e,["title","className"]),f=u?`pf-v5-svg ${u}`:"pf-v5-svg",p=Boolean(a),m=[t,n,l,c].join(" ");return o.createElement("svg",Object.assign({className:f,viewBox:m,fill:"currentColor","aria-labelledby":p?this.id:null,"aria-hidden":!p||null,role:"img",width:"1em",height:"1em"},s),p&&o.createElement("title",{id:this.id},a),o.createElement("path",{d:i}))}},u.displayName=e,u}},57976:(e,t,n)=>{n.d(t,{cp:()=>o,w$:()=>r});const r=(0,n(27708).A)({name:"CheckIcon",height:512,width:512,svgPath:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",yOffset:0,xOffset:0}),o=r},13464:(e,t,n)=>{n.d(t,{cp:()=>o,kD:()=>r});const r=(0,n(27708).A)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),o=r},83812:(e,t,n)=>{n.d(t,{OA:()=>r,cp:()=>o});const r=(0,n(27708).A)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0}),o=r},73804:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(25908),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};const a=function(e){var t,n=(0,r.useScalprum)(),a=(null===(t=n.api)||void 0===t?void 0:t.chrome)||{};return a=o(o({},a),{initialized:n.initialized}),"function"==typeof e?e(a):a}},84872:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(41556),o=n(13464),a=n(57976),l=n(83812);const c=(0,n(27708).A)({name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0});var i=n(23132),u=n.n(i),s=n(26008),f=n(28880),p=n(9920),m=n(99700),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},h=function(){var e=u().useState(!1),t=e[0],n=e[1],i=u().useState(""),m=i[0],h=i[1],v=u().useState(""),y=v[0],b=v[1],g=(0,s.useSetAtom)(f.W),w=(0,s.useSetAtom)(p.Ij),E=(0,s.useAtom)(p.qA),x=E[0],O=E[1],k="console-default",S="custom",C=u().useState((0,p.kH)(x)?k:S),T=C[0],I=C[1],P=function(){n(!t)};return u().createElement(r.ToolbarGroup,{className:"pf-v5-u-flex-direction-column-reverse pf-v5-u-flex-direction-row-reverse-on-md pf-v5-u-flex-direction-row-on-lg"},u().createElement(r.Flex,{className:" pf-v5-u-flex-nowrap pf-v5-u-flex-direction-row-reverse pf-v5-u-flex-direction-row-on-lg"},u().createElement(r.ToolbarItem,{spacer:{default:"spacerNone"}},u().createElement(r.ClipboardCopy,{isCode:!0,hoverTip:"Copy current configuration string",position:"left",clickTip:"Configuration string copied to clipboard"},JSON.stringify(x))),u().createElement(r.ToolbarItem,{spacer:{default:"spacerSm"}},u().createElement(r.Stack,null,u().createElement(r.StackItem,null,u().createElement(r.Dropdown,{isOpen:t,activeItemId:0,onOpenChange:function(e){n(e),I((0,p.kH)(x)?k:S),b("")},toggle:function(e){return u().createElement(r.MenuToggle,{ref:e,onClick:P,isExpanded:t},"Config view: ",T)}},u().createElement(r.DropdownGroup,{label:"Dashboard configuration",labelHeadingLevel:"h3"},u().createElement(r.DropdownList,{className:"pf-v5-u-pb-0"},u().createElement(r.Form,null,u().createElement(r.FormGroup,null,u().createElement(r.DropdownItem,null,u().createElement(r.Radio,{name:"config",id:k,label:k,value:k,onClick:function(e){P(),b(""),I(k),function(e){e.preventDefault(),I(k),O(p.Q9),n(!1),h("")}(e)},checked:T===k})),u().createElement(r.DropdownItem,null,u().createElement(r.Radio,{name:"config",id:S,label:"Custom configuration",value:S,onClick:function(){I(S)},checked:T===S}),u().createElement(r.TextArea,{className:"pf-v5-u-mt-sm",rows:1,placeholder:"Paste custom string",required:!0,onClick:function(){I(S)},onChange:function(e,t){h(t)}}),u().createElement(r.FormHelperText,null,u().createElement(r.HelperText,null,u().createElement(r.HelperTextItem,d({variant:y?"error":"default"},y&&{icon:u().createElement(o.kD,null)}),y))),u().createElement("div",{hidden:T!==S},u().createElement(r.Button,{variant:"plain",type:r.ButtonType.submit,onClick:function(e){if(e.preventDefault(),m)try{var t=JSON.parse(m);(0,p.kH)(t)&&I(k),O(t),n(!1),h("")}catch(e){return console.error(e),void b("Invalid input value.")}else b("Input value is required.")}},u().createElement(a.w$,null)),u().createElement(r.Button,{variant:"plain",type:r.ButtonType.reset,onClick:function(){n(!1),I((0,p.kH)(x)?k:S),b("")}},u().createElement(l.OA,null))))))))))))),u().createElement(r.ToolbarItem,{className:"pf-v5-u-pr-sm pf-v5-u-pr-0-on-lg pf-v5-u-pb-xs pf-v5-u-pb-0-on-lg"},u().createElement(r.Button,{onClick:function(){g((function(e){return!e})),w(x)},variant:"secondary",icon:u().createElement(c,null)},"Add widgets")))};const v=function(){var e=(0,m.c)().currentUser,t=(null==e?void 0:e.first_name)&&(null==e?void 0:e.last_name)?" ".concat(e.first_name," ").concat(e.last_name):null==e?void 0:e.username;return u().createElement(r.PageSection,{className:"widg-c-page__main-section--header pf-v5-u-p-lg pf-v5-u-p-r-0-on-sm",variant:r.PageSectionVariants.light},u().createElement(r.Flex,{className:"widg-l-flex--header",direction:{default:"column",lg:"row"}},u().createElement(r.FlexItem,{alignSelf:{default:"alignSelfFlexStart"}},u().createElement(r.TextContent,null,u().createElement(r.Text,{component:"h1"},"Hi",t?", ".concat(t):"!"),u().createElement(r.Text,{component:"h2",className:"pf-v5-u-mt-0"},"Welcome to your Hybrid Cloud Console."))),u().createElement(r.FlexItem,{align:{default:"alignLeft",lg:"alignRight"}},u().createElement(r.Toolbar,null,u().createElement(r.ToolbarContent,null,u().createElement(h,null))))))}},99700:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(23132);const o=function(e){var t=(0,r.useState)(!1),n=t[0],o=t[1];return(0,r.useEffect)((function(){var t,n,r,a;t=void 0,n=void 0,a=function(){return function(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(l=0)),l;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,r=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){l.label=c[1];break}if(6===c[0]&&l.label<o[1]){l.label=o[1],o=c;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(c);break}o[2]&&l.ops.pop(),l.trys.pop();continue}c=t.call(e,l)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(t){switch(t.label){case 0:return[4,e()];case 1:return t.sent(),o(!0),[2]}}))},new((r=void 0)||(r=Promise))((function(e,o){function l(e){try{i(a.next(e))}catch(e){o(e)}}function c(e){try{i(a.throw(e))}catch(e){o(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,c)}i((a=a.apply(t,n||[])).next())}))}),[]),n};var a=n(73804);const l=function(){var e=(0,r.useState)(void 0),t=e[0],n=e[1],l=(0,r.useState)(""),c=l[0],i=l[1],u=(0,a.c)(),s=o((function(){return e=void 0,t=void 0,o=function(){var e,t;return function(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(l=0)),l;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,r=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){l.label=c[1];break}if(6===c[0]&&l.label<o[1]){l.label=o[1],o=c;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(c);break}o[2]&&l.ops.pop(),l.trys.pop();continue}c=t.call(e,l)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(r){switch(r.label){case 0:return[4,u.auth.getUser()];case 1:return(e=r.sent())&&n(e.identity.user),[4,u.auth.getToken()];case 2:return(t=r.sent())&&i(t),[2]}}))},new((r=void 0)||(r=Promise))((function(n,a){function l(e){try{i(o.next(e))}catch(e){a(e)}}function c(e){try{i(o.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,c)}i((o=o.apply(e,t||[])).next())}));var e,t,r,o}));return{isLoaded:s,currentUser:t,currentToken:c}}},28880:(e,t,n)=>{n.d(t,{W:()=>r});var r=(0,n(26008).atom)(!1)},9920:(e,t,n)=>{n.d(t,{Ij:()=>u,Q9:()=>a,gT:()=>c,i2:()=>s,kH:()=>l,qA:()=>i});var r=n(33568),o=n(26008),a=[];function l(e){return(0,r.isEqual)(a,e)}var c=(0,o.atom)("xl"),i=(0,o.atom)(a),u=(0,o.atom)(a),s=(0,o.atom)(void 0)},732:(e,t,n)=>{n.d(t,{C3:()=>a,KE:()=>i,Mt:()=>s,ct:()=>o,kH:()=>c,o5:()=>u,sX:()=>l});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){return new(n||(n=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function c(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,c)}i((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(l=0)),l;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,r=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((o=(o=l.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){l=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){l.label=c[1];break}if(6===c[0]&&l.label<o[1]){l.label=o[1],o=c;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(c);break}o[2]&&l.ops.pop(),l.trys.pop();continue}c=t.call(e,l)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}function u(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return l}function s(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);
//# sourceMappingURL=../sourcemaps/872.4991d372b59c8cd266b73a9dfe0883ce.js.map