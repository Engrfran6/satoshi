import{_ as N}from"./@babel-c7024f36.js";function i(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var R=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),O=function(){return Math.random().toString(36).substring(7).split("").join(".")},g={INIT:"@@redux/INIT"+O(),REPLACE:"@@redux/REPLACE"+O(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+O()}};function P(r){if(typeof r!="object"||r===null)return!1;for(var t=r;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function A(r,t,n){var f;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(i(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(i(1));return n(A)(r,t)}if(typeof r!="function")throw new Error(i(2));var u=r,a=t,c=[],s=c,o=!1;function l(){s===c&&(s=c.slice())}function v(){if(o)throw new Error(i(3));return a}function b(e){if(typeof e!="function")throw new Error(i(4));if(o)throw new Error(i(5));var p=!0;return l(),s.push(e),function(){if(p){if(o)throw new Error(i(6));p=!1,l();var d=s.indexOf(e);s.splice(d,1),c=null}}}function h(e){if(!P(e))throw new Error(i(7));if(typeof e.type>"u")throw new Error(i(8));if(o)throw new Error(i(9));try{o=!0,a=u(a,e)}finally{o=!1}for(var p=c=s,y=0;y<p.length;y++){var d=p[y];d()}return e}function w(e){if(typeof e!="function")throw new Error(i(10));u=e,h({type:g.REPLACE})}function E(){var e,p=b;return e={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(i(11));function m(){d.next&&d.next(v())}m();var I=p(m);return{unsubscribe:I}}},e[R]=function(){return this},e}return h({type:g.INIT}),f={dispatch:h,subscribe:b,getState:v,replaceReducer:w},f[R]=E,f}function j(r){Object.keys(r).forEach(function(t){var n=r[t],f=n(void 0,{type:g.INIT});if(typeof f>"u")throw new Error(i(12));if(typeof n(void 0,{type:g.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(i(13))})}function C(r){for(var t=Object.keys(r),n={},f=0;f<t.length;f++){var u=t[f];typeof r[u]=="function"&&(n[u]=r[u])}var a=Object.keys(n),c;try{j(n)}catch(s){c=s}return function(o,l){if(o===void 0&&(o={}),c)throw c;for(var v=!1,b={},h=0;h<a.length;h++){var w=a[h],E=n[w],e=o[w],p=E(e,l);if(typeof p>"u")throw l&&l.type,new Error(i(14));b[w]=p,v=v||p!==e}return v=v||a.length!==Object.keys(o).length,v?b:o}}function x(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.length===0?function(f){return f}:t.length===1?t[0]:t.reduce(function(f,u){return function(){return f(u.apply(void 0,arguments))}})}function T(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(f){return function(){var u=f.apply(void 0,arguments),a=function(){throw new Error(i(15))},c={getState:u.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=t.map(function(o){return o(c)});return a=x.apply(void 0,s)(u.dispatch),N(N({},u),{},{dispatch:a})}}}export{T as a,A as b,C as c,x as d};
