"use strict";(self.webpackChunkwidget_layout=self.webpackChunkwidget_layout||[]).push([[578],{63578:(e,t,n)=>{n.r(t),n.d(t,{Provider:()=>M,atom:()=>r,createStore:()=>m,getDefaultStore:()=>p,useAtom:()=>C,useAtomValue:()=>O,useSetAtom:()=>k,useStore:()=>A});let o=0;function r(e,t){const n="atom"+ ++o,r={toString:()=>n};return"function"==typeof e?r.read=e:(r.init=e,r.read=s,r.write=u),t&&(r.write=t),r}function s(e){return e(this)}function u(e,t,n){return t(this,"function"==typeof n?n(e(this)):n)}const i=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,a=e=>"init"in e,c=e=>!!e.write,l=new WeakMap,d=(e,t)=>{const n=l.get(e);n&&(l.delete(e),n(t))},f=(e,t)=>{e.status="fulfilled",e.value=t},h=(e,t)=>{e.status="rejected",e.reason=t},v=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),w=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),g=e=>!!e&&"v"in e&&e.v instanceof Promise,_=e=>{if("e"in e)throw e.e;return e.v},m=()=>{const e=new WeakMap,t=new WeakMap,n=new Map;let o,r;o=new Set,r=new Set;const s=t=>e.get(t),u=(t,o)=>{Object.freeze(o);const r=s(t);if(e.set(t,o),n.has(t)||n.set(t,r),g(r)){const e="v"in o?o.v instanceof Promise?o.v:Promise.resolve(o.v):Promise.reject(o.e);r.v!==e&&d(r.v,e)}},m=(e,t,n,o)=>{const r=new Map(o?t.d:null);let s=!1;n.forEach(((n,o)=>{!n&&i(e,o)&&(n=t),n?(r.set(o,n),t.d.get(o)!==n&&(s=!0)):console.warn("[Bug] atom state not found")})),(s||t.d.size!==r.size)&&(t.d=r)},b=(e,t,n,o)=>{const r=s(e),i={d:(null==r?void 0:r.d)||new Map,v:t};if(n&&m(e,i,n,o),v(r,i)&&r.d===i.d)return r;if(g(r)&&g(i)&&(c=i,"v"in(a=r)&&"v"in c&&a.v.orig&&a.v.orig===c.v.orig)){if(r.d===i.d)return r;i.v=r.v}var a,c;return u(e,i),i},p=(e,n,o,r)=>{if("function"==typeof(null==(u=n)?void 0:u.then)){let u;const i=()=>{const n=s(e);if(!g(n)||n.v!==a)return;const r=b(e,a,o);t.has(e)&&n.d!==r.d&&O(e,r,n.d)},a=new Promise(((e,t)=>{let o=!1;n.then((t=>{o||(o=!0,f(a,t),e(t),i())}),(e=>{o||(o=!0,h(a,e),t(e),i())})),u=t=>{o||(o=!0,t.then((e=>f(a,e)),(e=>h(a,e))),e(t))}}));return a.orig=n,a.status="pending",((e,t)=>{l.set(e,(e=>{e&&u(e),null==r||r()})),e.catch((()=>{})).finally((()=>l.delete(e)))})(a),b(e,a,o,!0)}var u;return b(e,n,o)},E=(e,n)=>{const o=s(e);if(!n&&o){if(t.has(e))return o;if(Array.from(o.d).every((([t,n])=>{if(t===e)return!0;const o=E(t);return o===n||v(o,n)})))return o}const r=new Map;let l=!0;const d=t=>{if(i(e,t)){const e=s(t);if(e)return r.set(t,e),_(e);if(a(t))return r.set(t,void 0),t.init;throw new Error("no atom init")}const n=E(t);return r.set(t,n),_(n)};let f,h;const g={get signal(){return f||(f=new AbortController),f.signal},get setSelf(){return c(e)||console.warn("setSelf function cannot be used with read-only atom"),!h&&c(e)&&(h=(...t)=>{if(l&&console.warn("setSelf function cannot be called in sync"),!l)return M(e,...t)}),h}};try{const t=e.read(d,g);return p(e,t,r,(()=>null==f?void 0:f.abort()))}catch(t){return((e,t,n)=>{const o=s(e),r={d:(null==o?void 0:o.d)||new Map,e:t};return n&&m(e,r,n),w(o,r)&&o.d===r.d?o:(u(e,r),r)})(e,t,r)}finally{l=!1}},y=(e,t)=>!t.l.size&&(!t.t.size||1===t.t.size&&t.t.has(e)),S=e=>{const o=new Array,r=new Set,u=e=>{if(!r.has(e)){r.add(e);for(const o of(e=>{var o;const r=new Set(null==(o=t.get(e))?void 0:o.t);return n.forEach(((t,n)=>{var o;(null==(o=s(n))?void 0:o.d.has(e))&&r.add(n)})),r})(e))e!==o&&u(o);o.push(e)}};u(e);const i=new Set([e]);for(let e=o.length-1;e>=0;--e){const t=o[e],n=s(t);if(!n)continue;let r=!1;for(const e of n.d.keys())if(e!==t&&i.has(e)){r=!0;break}if(r){const e=E(t,!0);v(n,e)||i.add(t)}}},A=(e,...t)=>{let n=!0;const r=e.write((e=>_(E(e))),((t,...r)=>{let u;if(i(e,t)){if(!a(t))throw new Error("atom not writable");const e=s(t),n=p(t,r[0]);v(e,n)||S(t)}else u=A(t,...r);if(!n){const e=k();o.forEach((t=>t({type:"async-write",flushed:e})))}return u}),...t);return n=!1,r},M=(e,...t)=>{const n=A(e,...t),r=k();return o.forEach((e=>e({type:"write",flushed:r}))),n},T=(e,n,o)=>{var u;const i=o||[];null==(u=s(e))||u.d.forEach(((n,o)=>{const r=t.get(o);r?r.t.add(e):o!==e&&T(o,e,i)})),E(e);const a={t:new Set(n&&[n]),l:new Set};if(t.set(e,a),r.add(e),c(e)&&e.onMount){const{onMount:t}=e;i.push((()=>{const n=t(((...t)=>M(e,...t)));n&&(a.u=n)}))}return o||i.forEach((e=>e())),a},N=e=>{var n;const o=null==(n=t.get(e))?void 0:n.u;o&&o(),t.delete(e),r.delete(e);const u=s(e);u?(g(u)&&d(u.v),u.d.forEach(((n,o)=>{if(o!==e){const n=t.get(o);n&&(n.t.delete(e),y(o,n)&&N(o))}}))):console.warn("[Bug] could not find atom state to unmount",e)},O=(e,n,o)=>{const r=new Set(n.d.keys()),s=new Set;null==o||o.forEach(((n,o)=>{if(r.has(o))return void r.delete(o);s.add(o);const u=t.get(o);u&&u.t.delete(e)})),r.forEach((n=>{const o=t.get(n);o?o.t.add(e):t.has(e)&&T(n,e)})),s.forEach((e=>{const n=t.get(e);n&&y(e,n)&&N(e)}))},k=()=>{let e;for(e=new Set;n.size;){const o=Array.from(n);n.clear(),o.forEach((([n,o])=>{const r=s(n);if(r){const s=t.get(n);s&&r.d!==(null==o?void 0:o.d)&&O(n,r,null==o?void 0:o.d),s&&(g(o)||!v(o,r)&&!w(o,r))&&(s.l.forEach((e=>e())),e.add(n))}else console.warn("[Bug] no atom state to flush")}))}return e};return{get:e=>_(E(e)),set:M,sub:(e,n)=>{const r=(e=>{let n=t.get(e);return n||(n=T(e)),n})(e),s=k(),u=r.l;return u.add(n),o.forEach((e=>e({type:"sub",flushed:s}))),()=>{u.delete(n),(e=>{const n=t.get(e);n&&y(e,n)&&N(e)})(e),o.forEach((e=>e({type:"unsub"})))}},dev_subscribe_store:(e,t)=>{if(2!==t)throw new Error("The current StoreListener revision is 2.");return o.add(e),()=>{o.delete(e)}},dev_get_mounted_atoms:()=>r.values(),dev_get_atom_state:t=>e.get(t),dev_get_mounted:e=>t.get(e),dev_restore_atoms:e=>{for(const[t,n]of e)a(t)&&(p(t,n),S(t));const t=k();o.forEach((e=>e({type:"restore",flushed:t})))}}};let b;"number"==typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1;const p=()=>(b||(1!==globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),b=m()),b);var E=n(23132),y=n.n(E);const S=(0,E.createContext)(void 0),A=e=>{const t=(0,E.useContext)(S);return(null==e?void 0:e.store)||t||p()},M=({children:e,store:t})=>{const n=(0,E.useRef)();return t||n.current||(n.current=m()),(0,E.createElement)(S.Provider,{value:t||n.current},e)},T=e=>"function"==typeof(null==e?void 0:e.then),N=y().use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)});function O(e,t){const n=A(t),[[o,r,s],u]=(0,E.useReducer)((t=>{const o=n.get(e);return Object.is(t[0],o)&&t[1]===n&&t[2]===e?t:[o,n,e]}),void 0,(()=>[n.get(e),n,e]));let i=o;r===n&&s===e||(u(),i=n.get(e));const a=null==t?void 0:t.delay;return(0,E.useEffect)((()=>{const t=n.sub(e,(()=>{"number"!=typeof a?u():setTimeout(u,a)}));return u(),t}),[n,e,a]),(0,E.useDebugValue)(i),T(i)?N(i):i}function k(e,t){const n=A(t);return(0,E.useCallback)(((...t)=>{if(!("write"in e))throw new Error("not writable atom");return n.set(e,...t)}),[n,e])}function C(e,t){return[O(e,t),k(e,t)]}}}]);
//# sourceMappingURL=../sourcemaps/578.b1ad4c4fd3e3e60c4409879be82f1d0f.js.map