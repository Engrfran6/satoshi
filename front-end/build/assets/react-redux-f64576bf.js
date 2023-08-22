import{r as H}from"./react-dom-08aa9609.js";import"./hoist-non-react-statics-23d96a9a.js";import{r as u}from"./react-9d744620.js";import{w as I}from"./use-sync-external-store-08cbdb1a.js";function j(e){e()}let z=j;const W=e=>z=e,q=()=>z,P=Symbol.for("react-redux-context"),N=typeof globalThis<"u"?globalThis:{};function K(){var e;if(!u.createContext)return{};const o=(e=N[P])!=null?e:N[P]=new Map;let r=o.get(u.createContext);return r||(r=u.createContext(null),o.set(u.createContext,r)),r}const a=K();function M(e=a){return function(){return u.useContext(e)}}const D=M(),A=()=>{throw new Error("uSES not initialized!")};let T=A;const G=e=>{T=e},J=(e,o)=>e===o;function Q(e=a){const o=e===a?D:M(e);return function(t,s={}){const{equalityFn:c=J,stabilityCheck:l=void 0,noopCheck:p=void 0}=typeof s=="function"?{equalityFn:s}:s,{store:d,subscription:i,getServerState:b,stabilityCheck:E,noopCheck:re}=o();u.useRef(!0);const B=u.useCallback({[t.name](F){return t(F)}}[t.name],[t,E,l]),L=T(i.addNestedSub,d.getState,b||d.getState,B,c);return u.useDebugValue(L),L}}const le=Q();var n={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=Symbol.for("react.element"),R=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),h=Symbol.for("react.context"),X=Symbol.for("react.server_context"),C=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),U;U=Symbol.for("react.module.reference");function f(e){if(typeof e=="object"&&e!==null){var o=e.$$typeof;switch(o){case k:switch(e=e.type,e){case S:case m:case y:case g:case v:return e;default:switch(e=e&&e.$$typeof,e){case X:case h:case C:case w:case $:case x:return e;default:return o}}case R:return o}}}n.ContextConsumer=h;n.ContextProvider=x;n.Element=k;n.ForwardRef=C;n.Fragment=S;n.Lazy=w;n.Memo=$;n.Portal=R;n.Profiler=m;n.StrictMode=y;n.Suspense=g;n.SuspenseList=v;n.isAsyncMode=function(){return!1};n.isConcurrentMode=function(){return!1};n.isContextConsumer=function(e){return f(e)===h};n.isContextProvider=function(e){return f(e)===x};n.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===k};n.isForwardRef=function(e){return f(e)===C};n.isFragment=function(e){return f(e)===S};n.isLazy=function(e){return f(e)===w};n.isMemo=function(e){return f(e)===$};n.isPortal=function(e){return f(e)===R};n.isProfiler=function(e){return f(e)===m};n.isStrictMode=function(e){return f(e)===y};n.isSuspense=function(e){return f(e)===g};n.isSuspenseList=function(e){return f(e)===v};n.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===S||e===m||e===y||e===g||e===v||e===Y||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===$||e.$$typeof===x||e.$$typeof===h||e.$$typeof===C||e.$$typeof===U||e.getModuleId!==void 0)};n.typeOf=f;function Z(){const e=q();let o=null,r=null;return{clear(){o=null,r=null},notify(){e(()=>{let t=o;for(;t;)t.callback(),t=t.next})},get(){let t=[],s=o;for(;s;)t.push(s),s=s.next;return t},subscribe(t){let s=!0,c=r={callback:t,next:null,prev:r};return c.prev?c.prev.next=c:o=c,function(){!s||o===null||(s=!1,c.next?c.next.prev=c.prev:r=c.prev,c.prev?c.prev.next=c.next:o=c.next)}}}}const _={notify(){},get:()=>[]};function O(e,o){let r,t=_;function s(E){return d(),t.subscribe(E)}function c(){t.notify()}function l(){b.onStateChange&&b.onStateChange()}function p(){return!!r}function d(){r||(r=o?o.addNestedSub(l):e.subscribe(l),t=Z())}function i(){r&&(r(),r=void 0,t.clear(),t=_)}const b={addNestedSub:s,notifyNestedSubs:c,handleChangeWrapper:l,isSubscribed:p,trySubscribe:d,tryUnsubscribe:i,getListeners:()=>t};return b}const ee=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",te=ee?u.useLayoutEffect:u.useEffect;function ae({store:e,context:o,children:r,serverState:t,stabilityCheck:s="once",noopCheck:c="once"}){const l=u.useMemo(()=>{const i=O(e);return{store:e,subscription:i,getServerState:t?()=>t:void 0,stabilityCheck:s,noopCheck:c}},[e,t,s,c]),p=u.useMemo(()=>e.getState(),[e]);te(()=>{const{subscription:i}=l;return i.onStateChange=i.notifyNestedSubs,i.trySubscribe(),p!==e.getState()&&i.notifyNestedSubs(),()=>{i.tryUnsubscribe(),i.onStateChange=void 0}},[l,p]);const d=o||a;return u.createElement(d.Provider,{value:l},r)}function V(e=a){const o=e===a?D:M(e);return function(){const{store:t}=o();return t}}const ne=V();function oe(e=a){const o=e===a?ne:V(e);return function(){return o().dispatch}}const de=oe();G(I.useSyncExternalStoreWithSelector);W(H.unstable_batchedUpdates);export{ae as P,le as a,de as u};
