import{r as n}from"./react-9d744620.js";import{A as L,i as v,p as O,s as F,m as T,j as R,a as W,g as D,r as M}from"./@remix-run-50445442.js";/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},b.apply(this,arguments)}const U=n.createContext(null),_=n.createContext(null),E=n.createContext(null),y=n.createContext(null),C=n.createContext({outlet:null,matches:[],isDataRoute:!1}),j=n.createContext(null);function te(e,t){let{relative:r}=t===void 0?{}:t;P()||v(!1);let{basename:o,navigator:l}=n.useContext(E),{hash:a,pathname:u,search:s}=z(e,{relative:r}),i=u;return o!=="/"&&(i=u==="/"?o:R([o,u])),l.createHref({pathname:i,search:s,hash:a})}function P(){return n.useContext(y)!=null}function B(){return P()||v(!1),n.useContext(y).location}function J(e){n.useContext(E).static||n.useLayoutEffect(e)}function re(){let{isDataRoute:e}=n.useContext(C);return e?S():q()}function q(){P()||v(!1);let e=n.useContext(U),{basename:t,navigator:r}=n.useContext(E),{matches:o}=n.useContext(C),{pathname:l}=B(),a=JSON.stringify(D(o).map(i=>i.pathnameBase)),u=n.useRef(!1);return J(()=>{u.current=!0}),n.useCallback(function(i,c){if(c===void 0&&(c={}),!u.current)return;if(typeof i=="number"){r.go(i);return}let d=M(i,JSON.parse(a),l,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:R([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,l,e])}function z(e,t){let{relative:r}=t===void 0?{}:t,{matches:o}=n.useContext(C),{pathname:l}=B(),a=JSON.stringify(D(o).map(u=>u.pathnameBase));return n.useMemo(()=>M(e,JSON.parse(a),l,r==="path"),[e,a,l,r])}function ne(e,t){return G(e,t)}function G(e,t,r){P()||v(!1);let{navigator:o}=n.useContext(E),{matches:l}=n.useContext(C),a=l[l.length-1],u=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let i=B(),c;if(t){var d;let f=typeof t=="string"?O(t):t;s==="/"||(d=f.pathname)!=null&&d.startsWith(s)||v(!1),c=f}else c=i;let h=c.pathname||"/",g=s==="/"?h:h.slice(s.length)||"/",p=T(e,{pathname:g}),m=Y(p&&p.map(f=>Object.assign({},f,{params:Object.assign({},u,f.params),pathname:R([s,o.encodeLocation?o.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?s:R([s,o.encodeLocation?o.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),l,r);return t&&m?n.createElement(y.Provider,{value:{location:b({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:L.Pop}},m):m}function K(){let e=A(),t=W(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:l},r):null,a)}const Q=n.createElement(K,null);class V extends n.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?n.createElement(C.Provider,{value:this.props.routeContext},n.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X(e){let{routeContext:t,match:r,children:o}=e,l=n.useContext(U);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(C.Provider,{value:t},o)}function Y(e,t,r){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var l;if((l=r)!=null&&l.errors)e=r.matches;else return null}let a=e,u=(o=r)==null?void 0:o.errors;if(u!=null){let s=a.findIndex(i=>i.route.id&&(u==null?void 0:u[i.route.id]));s>=0||v(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,i,c)=>{let d=i.route.id?u==null?void 0:u[i.route.id]:null,h=null;r&&(h=i.route.errorElement||Q);let g=t.concat(a.slice(0,c+1)),p=()=>{let m;return d?m=h:i.route.Component?m=n.createElement(i.route.Component,null):i.route.element?m=i.route.element:m=s,n.createElement(X,{match:i,routeContext:{outlet:s,matches:g,isDataRoute:r!=null},children:m})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?n.createElement(V,{location:r.location,revalidation:r.revalidation,component:h,error:d,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(N||(N={}));var x;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(x||(x={}));function Z(e){let t=n.useContext(U);return t||v(!1),t}function $(e){let t=n.useContext(_);return t||v(!1),t}function w(e){let t=n.useContext(C);return t||v(!1),t}function k(e){let t=w(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function A(){var e;let t=n.useContext(j),r=$(x.UseRouteError),o=k(x.UseRouteError);return t||((e=r.errors)==null?void 0:e[o])}function S(){let{router:e}=Z(N.UseNavigateStable),t=k(x.UseNavigateStable),r=n.useRef(!1);return J(()=>{r.current=!0}),n.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,b({fromRouteId:t},a)))},[e,t])}function ae(e){let{basename:t="/",children:r=null,location:o,navigationType:l=L.Pop,navigator:a,static:u=!1}=e;P()&&v(!1);let s=t.replace(/^\/*/,"/"),i=n.useMemo(()=>({basename:s,navigator:a,static:u}),[s,a,u]);typeof o=="string"&&(o=O(o));let{pathname:c="/",search:d="",hash:h="",state:g=null,key:p="default"}=o,m=n.useMemo(()=>{let f=F(c,s);return f==null?null:{location:{pathname:f,search:d,hash:h,state:g,key:p},navigationType:l}},[s,c,d,h,g,p,l]);return m==null?null:n.createElement(E.Provider,{value:i},n.createElement(y.Provider,{children:r,value:m}))}var I;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(I||(I={}));new Promise(()=>{});export{_ as D,E as N,ae as R,B as a,te as b,re as c,ne as d,z as u};
