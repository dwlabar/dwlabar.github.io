(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Ev(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Rd={exports:{}},nl={},bd={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function t1(){if(F_)return pt;F_=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(N,q,ye){this.props=N,this.context=q,this.refs=E,this.updater=ye||y}x.prototype.isReactComponent={},x.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=x.prototype;function b(N,q,ye){this.props=N,this.context=q,this.refs=E,this.updater=ye||y}var A=b.prototype=new v;A.constructor=b,M(A,x.prototype),A.isPureReactComponent=!0;var T=Array.isArray,U=Object.prototype.hasOwnProperty,F={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function k(N,q,ye){var V,ne={},_e=null,pe=null;if(q!=null)for(V in q.ref!==void 0&&(pe=q.ref),q.key!==void 0&&(_e=""+q.key),q)U.call(q,V)&&!I.hasOwnProperty(V)&&(ne[V]=q[V]);var Me=arguments.length-2;if(Me===1)ne.children=ye;else if(1<Me){for(var Oe=Array(Me),Ie=0;Ie<Me;Ie++)Oe[Ie]=arguments[Ie+2];ne.children=Oe}if(N&&N.defaultProps)for(V in Me=N.defaultProps,Me)ne[V]===void 0&&(ne[V]=Me[V]);return{$$typeof:r,type:N,key:_e,ref:pe,props:ne,_owner:F.current}}function C(N,q){return{$$typeof:r,type:N.type,key:q,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function B(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ye){return q[ye]})}var J=/\/+/g;function Z(N,q){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):q.toString(36)}function fe(N,q,ye,V,ne){var _e=typeof N;(_e==="undefined"||_e==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(_e){case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case r:case e:pe=!0}}if(pe)return pe=N,ne=ne(pe),N=V===""?"."+Z(pe,0):V,T(ne)?(ye="",N!=null&&(ye=N.replace(J,"$&/")+"/"),fe(ne,q,ye,"",function(Ie){return Ie})):ne!=null&&(R(ne)&&(ne=C(ne,ye+(!ne.key||pe&&pe.key===ne.key?"":(""+ne.key).replace(J,"$&/")+"/")+N)),q.push(ne)),1;if(pe=0,V=V===""?".":V+":",T(N))for(var Me=0;Me<N.length;Me++){_e=N[Me];var Oe=V+Z(_e,Me);pe+=fe(_e,q,ye,Oe,ne)}else if(Oe=_(N),typeof Oe=="function")for(N=Oe.call(N),Me=0;!(_e=N.next()).done;)_e=_e.value,Oe=V+Z(_e,Me++),pe+=fe(_e,q,ye,Oe,ne);else if(_e==="object")throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return pe}function ae(N,q,ye){if(N==null)return N;var V=[],ne=0;return fe(N,V,"","",function(_e){return q.call(ye,_e,ne++)}),V}function se(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(ye){(N._status===0||N._status===-1)&&(N._status=1,N._result=ye)},function(ye){(N._status===0||N._status===-1)&&(N._status=2,N._result=ye)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var re={current:null},G={transition:null},de={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function H(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ae,forEach:function(N,q,ye){ae(N,function(){q.apply(this,arguments)},ye)},count:function(N){var q=0;return ae(N,function(){q++}),q},toArray:function(N){return ae(N,function(q){return q})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},pt.Component=x,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=b,pt.StrictMode=n,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,pt.act=H,pt.cloneElement=function(N,q,ye){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var V=M({},N.props),ne=N.key,_e=N.ref,pe=N._owner;if(q!=null){if(q.ref!==void 0&&(_e=q.ref,pe=F.current),q.key!==void 0&&(ne=""+q.key),N.type&&N.type.defaultProps)var Me=N.type.defaultProps;for(Oe in q)U.call(q,Oe)&&!I.hasOwnProperty(Oe)&&(V[Oe]=q[Oe]===void 0&&Me!==void 0?Me[Oe]:q[Oe])}var Oe=arguments.length-2;if(Oe===1)V.children=ye;else if(1<Oe){Me=Array(Oe);for(var Ie=0;Ie<Oe;Ie++)Me[Ie]=arguments[Ie+2];V.children=Me}return{$$typeof:r,type:N.type,key:ne,ref:_e,props:V,_owner:pe}},pt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},pt.createElement=k,pt.createFactory=function(N){var q=k.bind(null,N);return q.type=N,q},pt.createRef=function(){return{current:null}},pt.forwardRef=function(N){return{$$typeof:c,render:N}},pt.isValidElement=R,pt.lazy=function(N){return{$$typeof:p,_payload:{_status:-1,_result:N},_init:se}},pt.memo=function(N,q){return{$$typeof:h,type:N,compare:q===void 0?null:q}},pt.startTransition=function(N){var q=G.transition;G.transition={};try{N()}finally{G.transition=q}},pt.unstable_act=H,pt.useCallback=function(N,q){return re.current.useCallback(N,q)},pt.useContext=function(N){return re.current.useContext(N)},pt.useDebugValue=function(){},pt.useDeferredValue=function(N){return re.current.useDeferredValue(N)},pt.useEffect=function(N,q){return re.current.useEffect(N,q)},pt.useId=function(){return re.current.useId()},pt.useImperativeHandle=function(N,q,ye){return re.current.useImperativeHandle(N,q,ye)},pt.useInsertionEffect=function(N,q){return re.current.useInsertionEffect(N,q)},pt.useLayoutEffect=function(N,q){return re.current.useLayoutEffect(N,q)},pt.useMemo=function(N,q){return re.current.useMemo(N,q)},pt.useReducer=function(N,q,ye){return re.current.useReducer(N,q,ye)},pt.useRef=function(N){return re.current.useRef(N)},pt.useState=function(N){return re.current.useState(N)},pt.useSyncExternalStore=function(N,q,ye){return re.current.useSyncExternalStore(N,q,ye)},pt.useTransition=function(){return re.current.useTransition()},pt.version="18.3.1",pt}var O_;function Pp(){return O_||(O_=1,bd.exports=t1()),bd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function n1(){if(k_)return nl;k_=1;var r=Pp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,f,h){var p,g={},_=null,y=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(g[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)g[p]===void 0&&(g[p]=f[p]);return{$$typeof:e,type:c,key:_,ref:y,props:g,_owner:s.current}}return nl.Fragment=t,nl.jsx=u,nl.jsxs=u,nl}var z_;function i1(){return z_||(z_=1,Rd.exports=n1()),Rd.exports}var D=i1(),X=Pp();const tn=Ev(X);var Xu={},Pd={exports:{}},Kn={},Ld={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function r1(){return B_||(B_=1,function(r){function e(G,de){var H=G.length;G.push(de);e:for(;0<H;){var N=H-1>>>1,q=G[N];if(0<s(q,de))G[N]=de,G[H]=q,H=N;else break e}}function t(G){return G.length===0?null:G[0]}function n(G){if(G.length===0)return null;var de=G[0],H=G.pop();if(H!==de){G[0]=H;e:for(var N=0,q=G.length,ye=q>>>1;N<ye;){var V=2*(N+1)-1,ne=G[V],_e=V+1,pe=G[_e];if(0>s(ne,H))_e<q&&0>s(pe,ne)?(G[N]=pe,G[_e]=H,N=_e):(G[N]=ne,G[V]=H,N=V);else if(_e<q&&0>s(pe,H))G[N]=pe,G[_e]=H,N=_e;else break e}}return de}function s(G,de){var H=G.sortIndex-de.sortIndex;return H!==0?H:G.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();r.unstable_now=function(){return u.now()-c}}var f=[],h=[],p=1,g=null,_=3,y=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(G){for(var de=t(h);de!==null;){if(de.callback===null)n(h);else if(de.startTime<=G)n(h),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(h)}}function T(G){if(E=!1,A(G),!M)if(t(f)!==null)M=!0,se(U);else{var de=t(h);de!==null&&re(T,de.startTime-G)}}function U(G,de){M=!1,E&&(E=!1,v(k),k=-1),y=!0;var H=_;try{for(A(de),g=t(f);g!==null&&(!(g.expirationTime>de)||G&&!B());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var q=N(g.expirationTime<=de);de=r.unstable_now(),typeof q=="function"?g.callback=q:g===t(f)&&n(f),A(de)}else n(f);g=t(f)}if(g!==null)var ye=!0;else{var V=t(h);V!==null&&re(T,V.startTime-de),ye=!1}return ye}finally{g=null,_=H,y=!1}}var F=!1,I=null,k=-1,C=5,R=-1;function B(){return!(r.unstable_now()-R<C)}function J(){if(I!==null){var G=r.unstable_now();R=G;var de=!0;try{de=I(!0,G)}finally{de?Z():(F=!1,I=null)}}else F=!1}var Z;if(typeof b=="function")Z=function(){b(J)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ae=fe.port2;fe.port1.onmessage=J,Z=function(){ae.postMessage(null)}}else Z=function(){x(J,0)};function se(G){I=G,F||(F=!0,Z())}function re(G,de){k=x(function(){G(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){M||y||(M=!0,se(U))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(f)},r.unstable_next=function(G){switch(_){case 1:case 2:case 3:var de=3;break;default:de=_}var H=_;_=de;try{return G()}finally{_=H}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,de){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var H=_;_=G;try{return de()}finally{_=H}},r.unstable_scheduleCallback=function(G,de,H){var N=r.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?N+H:N):H=N,G){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=H+q,G={id:p++,callback:de,priorityLevel:G,startTime:H,expirationTime:q,sortIndex:-1},H>N?(G.sortIndex=H,e(h,G),t(f)===null&&G===t(h)&&(E?(v(k),k=-1):E=!0,re(T,H-N))):(G.sortIndex=q,e(f,G),M||y||(M=!0,se(U))),G},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(G){var de=_;return function(){var H=_;_=de;try{return G.apply(this,arguments)}finally{_=H}}}}(Dd)),Dd}var V_;function s1(){return V_||(V_=1,Ld.exports=r1()),Ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function o1(){if(H_)return Kn;H_=1;var r=Pp(),e=s1();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(i){return f.call(g,i)?!0:f.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function y(i,o,l,d){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,l,d){if(o===null||typeof o>"u"||y(i,o,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(i,o,l,d,m,S,w){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=S,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new E(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(v,b);x[o]=new E(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(v,b);x[o]=new E(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(v,b);x[o]=new E(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function A(i,o,l,d){var m=x.hasOwnProperty(o)?x[o]:null;(m!==null?m.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,l,m,d)&&(l=null),d||m===null?_(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(o=m.attributeName,d=m.attributeNamespace,l===null?i.removeAttribute(o):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,d?i.setAttributeNS(d,o,l):i.setAttribute(o,l))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),F=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),G=Symbol.iterator;function de(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var H=Object.assign,N;function q(i){if(N===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);N=o&&o[1]||""}return`
`+N+i}var ye=!1;function V(i,o){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(ue){var d=ue}Reflect.construct(i,[],o)}else{try{o.call()}catch(ue){d=ue}i.call(o.prototype)}else{try{throw Error()}catch(ue){d=ue}i()}}catch(ue){if(ue&&d&&typeof ue.stack=="string"){for(var m=ue.stack.split(`
`),S=d.stack.split(`
`),w=m.length-1,z=S.length-1;1<=w&&0<=z&&m[w]!==S[z];)z--;for(;1<=w&&0<=z;w--,z--)if(m[w]!==S[z]){if(w!==1||z!==1)do if(w--,z--,0>z||m[w]!==S[z]){var W=`
`+m[w].replace(" at new "," at ");return i.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",i.displayName)),W}while(1<=w&&0<=z);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function ne(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=V(i.type,!1),i;case 11:return i=V(i.type.render,!1),i;case 1:return i=V(i.type,!0),i;default:return""}}function _e(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case I:return"Fragment";case F:return"Portal";case C:return"Profiler";case k:return"StrictMode";case Z:return"Suspense";case fe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case J:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ae:return o=i.displayName||null,o!==null?o:_e(i.type)||"Memo";case se:o=i._payload,i=i._init;try{return _e(i(o))}catch{}}return null}function pe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(o);case 8:return o===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ie(i){var o=Oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,S=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return m.call(this)},set:function(w){d=""+w,S.call(this,w)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Ke(i){i._valueTracker||(i._valueTracker=Ie(i))}function St(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),d="";return i&&(d=Oe(i)?i.checked?"true":"false":i.value),i=d,i!==l?(o.setValue(i),!0):!1}function at(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function j(i,o){var l=o.checked;return H({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function kn(i,o){var l=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;l=Me(o.value!=null?o.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function mt(i,o){o=o.checked,o!=null&&A(i,"checked",o,!1)}function dt(i,o){mt(i,o);var l=Me(o.value),d=o.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Pt(i,o.type,l):o.hasOwnProperty("defaultValue")&&Pt(i,o.type,Me(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function $e(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Pt(i,o,l){(o!=="number"||at(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Xe=Array.isArray;function O(i,o,l,d){if(i=i.options,o){o={};for(var m=0;m<l.length;m++)o["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=o.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&d&&(i[l].defaultSelected=!0)}else{for(l=""+Me(l),o=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,d&&(i[m].defaultSelected=!0);return}o!==null||i[m].disabled||(o=i[m])}o!==null&&(o.selected=!0)}}function P(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function oe(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Me(l)}}function ve(i,o){var l=Me(o.value),d=Me(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function Se(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?me(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Re,ke=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,d,m){MSApp.execUnsafeLocalFunction(function(){return i(o,l,d,m)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Re.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function ft(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(i){Be.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ce[o]=Ce[i]})});function et(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ce.hasOwnProperty(i)&&Ce[i]?(""+o).trim():o+"px"}function nt(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var d=l.indexOf("--")===0,m=et(l,o[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,m):i[l]=m}}var Ve=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(i,o){if(o){if(Ve[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function st(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function $(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var be=null,he=null,ge=null;function Ne(i){if(i=Va(i)){if(typeof be!="function")throw Error(t(280));var o=i.stateNode;o&&(o=au(o),be(i.stateNode,i.type,o))}}function De(i){he?ge?ge.push(i):ge=[i]:he=i}function ot(){if(he){var i=he,o=ge;if(ge=he=null,Ne(i),o)for(i=0;i<o.length;i++)Ne(o[i])}}function Ft(i,o){return i(o)}function cn(){}var Et=!1;function jn(i,o,l){if(Et)return i(o,l);Et=!0;try{return Ft(i,o,l)}finally{Et=!1,(he!==null||ge!==null)&&(cn(),ot())}}function zn(i,o){var l=i.stateNode;if(l===null)return null;var d=au(l);if(d===null)return null;l=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var ho=!1;if(c)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){ho=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{ho=!1}function ur(i,o,l,d,m,S,w,z,W){var ue=Array.prototype.slice.call(arguments,3);try{o.apply(l,ue)}catch(Ee){this.onError(Ee)}}var cr=!1,Ts=null,ws=!1,kr=null,zl={onError:function(i){cr=!0,Ts=i}};function po(i,o,l,d,m,S,w,z,W){cr=!1,Ts=null,ur.apply(zl,arguments)}function Bl(i,o,l,d,m,S,w,z,W){if(po.apply(this,arguments),cr){if(cr){var ue=Ts;cr=!1,Ts=null}else throw Error(t(198));ws||(ws=!0,kr=ue)}}function Gi(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function Vl(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Hl(i){if(Gi(i)!==i)throw Error(t(188))}function Zc(i){var o=i.alternate;if(!o){if(o=Gi(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,d=o;;){var m=l.return;if(m===null)break;var S=m.alternate;if(S===null){if(d=m.return,d!==null){l=d;continue}break}if(m.child===S.child){for(S=m.child;S;){if(S===l)return Hl(m),i;if(S===d)return Hl(m),o;S=S.sibling}throw Error(t(188))}if(l.return!==d.return)l=m,d=S;else{for(var w=!1,z=m.child;z;){if(z===l){w=!0,l=m,d=S;break}if(z===d){w=!0,d=m,l=S;break}z=z.sibling}if(!w){for(z=S.child;z;){if(z===l){w=!0,l=S,d=m;break}if(z===d){w=!0,d=S,l=m;break}z=z.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function Gl(i){return i=Zc(i),i!==null?Wl(i):null}function Wl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Wl(i);if(o!==null)return o;i=i.sibling}return null}var jl=e.unstable_scheduleCallback,L=e.unstable_cancelCallback,K=e.unstable_shouldYield,le=e.unstable_requestPaint,te=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,He=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,We=null;function _t(i){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(tt,i,void 0,(i.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:yt,qt=Math.log,zt=Math.LN2;function yt(i){return i>>>=0,i===0?32:31-(qt(i)/zt|0)|0}var Ze=64,$t=4194304;function gt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Cn(i,o){var l=i.pendingLanes;if(l===0)return 0;var d=0,m=i.suspendedLanes,S=i.pingedLanes,w=l&268435455;if(w!==0){var z=w&~m;z!==0?d=gt(z):(S&=w,S!==0&&(d=gt(S)))}else w=l&~m,w!==0?d=gt(w):S!==0&&(d=gt(S));if(d===0)return 0;if(o!==0&&o!==d&&(o&m)===0&&(m=d&-d,S=o&-o,m>=S||m===16&&(S&4194240)!==0))return o;if((d&4)!==0&&(d|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)l=31-lt(o),m=1<<l,d|=i[l],o&=~m;return d}function zr(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bn(i,o){for(var l=i.suspendedLanes,d=i.pingedLanes,m=i.expirationTimes,S=i.pendingLanes;0<S;){var w=31-lt(S),z=1<<w,W=m[w];W===-1?((z&l)===0||(z&d)!==0)&&(m[w]=zr(z,o)):W<=o&&(i.expiredLanes|=z),S&=~z}}function fr(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nt(){var i=Ze;return Ze<<=1,(Ze&4194240)===0&&(Ze=64),i}function An(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function mn(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-lt(o),i[o]=l}function En(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-lt(l),S=1<<m;o[m]=0,d[m]=-1,i[m]=-1,l&=~S}}function gn(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var d=31-lt(l),m=1<<d;m&o|i[d]&o&&(i[d]|=o),l&=~m}}var Mt=0;function Wi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var mm,Kc,gm,_m,vm,Qc=!1,Xl=[],Br=null,Vr=null,Hr=null,wa=new Map,Ca=new Map,Gr=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xm(i,o){switch(i){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":wa.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(o.pointerId)}}function Aa(i,o,l,d,m,S){return i===null||i.nativeEvent!==S?(i={blockedOn:o,domEventName:l,eventSystemFlags:d,nativeEvent:S,targetContainers:[m]},o!==null&&(o=Va(o),o!==null&&Kc(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),i)}function Ty(i,o,l,d,m){switch(o){case"focusin":return Br=Aa(Br,i,o,l,d,m),!0;case"dragenter":return Vr=Aa(Vr,i,o,l,d,m),!0;case"mouseover":return Hr=Aa(Hr,i,o,l,d,m),!0;case"pointerover":var S=m.pointerId;return wa.set(S,Aa(wa.get(S)||null,i,o,l,d,m)),!0;case"gotpointercapture":return S=m.pointerId,Ca.set(S,Aa(Ca.get(S)||null,i,o,l,d,m)),!0}return!1}function ym(i){var o=Cs(i.target);if(o!==null){var l=Gi(o);if(l!==null){if(o=l.tag,o===13){if(o=Vl(l),o!==null){i.blockedOn=o,vm(i.priority,function(){gm(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Yl(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=ef(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Rt=d,l.target.dispatchEvent(d),Rt=null}else return o=Va(l),o!==null&&Kc(o),i.blockedOn=l,!1;o.shift()}return!0}function Sm(i,o,l){Yl(i)&&l.delete(o)}function wy(){Qc=!1,Br!==null&&Yl(Br)&&(Br=null),Vr!==null&&Yl(Vr)&&(Vr=null),Hr!==null&&Yl(Hr)&&(Hr=null),wa.forEach(Sm),Ca.forEach(Sm)}function Ra(i,o){i.blockedOn===o&&(i.blockedOn=null,Qc||(Qc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wy)))}function ba(i){function o(m){return Ra(m,i)}if(0<Xl.length){Ra(Xl[0],i);for(var l=1;l<Xl.length;l++){var d=Xl[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Br!==null&&Ra(Br,i),Vr!==null&&Ra(Vr,i),Hr!==null&&Ra(Hr,i),wa.forEach(o),Ca.forEach(o),l=0;l<Gr.length;l++)d=Gr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Gr.length&&(l=Gr[0],l.blockedOn===null);)ym(l),l.blockedOn===null&&Gr.shift()}var mo=T.ReactCurrentBatchConfig,ql=!0;function Cy(i,o,l,d){var m=Mt,S=mo.transition;mo.transition=null;try{Mt=1,Jc(i,o,l,d)}finally{Mt=m,mo.transition=S}}function Ay(i,o,l,d){var m=Mt,S=mo.transition;mo.transition=null;try{Mt=4,Jc(i,o,l,d)}finally{Mt=m,mo.transition=S}}function Jc(i,o,l,d){if(ql){var m=ef(i,o,l,d);if(m===null)vf(i,o,d,$l,l),xm(i,d);else if(Ty(m,i,o,l,d))d.stopPropagation();else if(xm(i,d),o&4&&-1<My.indexOf(i)){for(;m!==null;){var S=Va(m);if(S!==null&&mm(S),S=ef(i,o,l,d),S===null&&vf(i,o,d,$l,l),S===m)break;m=S}m!==null&&d.stopPropagation()}else vf(i,o,d,null,l)}}var $l=null;function ef(i,o,l,d){if($l=null,i=$(d),i=Cs(i),i!==null)if(o=Gi(i),o===null)i=null;else if(l=o.tag,l===13){if(i=Vl(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return $l=i,null}function Em(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case we:return 1;case Pe:return 4;case Ue:case He:return 16;case it:return 536870912;default:return 16}default:return 16}}var Wr=null,tf=null,Zl=null;function Mm(){if(Zl)return Zl;var i,o=tf,l=o.length,d,m="value"in Wr?Wr.value:Wr.textContent,S=m.length;for(i=0;i<l&&o[i]===m[i];i++);var w=l-i;for(d=1;d<=w&&o[l-d]===m[S-d];d++);return Zl=m.slice(i,1<d?1-d:void 0)}function Kl(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Ql(){return!0}function Tm(){return!1}function oi(i){function o(l,d,m,S,w){this._reactName=l,this._targetInst=m,this.type=d,this.nativeEvent=S,this.target=w,this.currentTarget=null;for(var z in i)i.hasOwnProperty(z)&&(l=i[z],this[z]=l?l(S):S[z]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Ql:Tm,this.isPropagationStopped=Tm,this}return H(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),o}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=oi(go),Pa=H({},go,{view:0,detail:0}),Ry=oi(Pa),rf,sf,La,Jl=H({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==La&&(La&&i.type==="mousemove"?(rf=i.screenX-La.screenX,sf=i.screenY-La.screenY):sf=rf=0,La=i),rf)},movementY:function(i){return"movementY"in i?i.movementY:sf}}),wm=oi(Jl),by=H({},Jl,{dataTransfer:0}),Py=oi(by),Ly=H({},Pa,{relatedTarget:0}),of=oi(Ly),Dy=H({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=oi(Dy),Iy=H({},go,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Uy=oi(Iy),Fy=H({},go,{data:0}),Cm=oi(Fy),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=zy[i])?!!o[i]:!1}function af(){return By}var Vy=H({},Pa,{key:function(i){if(i.key){var o=Oy[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Kl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?ky[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(i){return i.type==="keypress"?Kl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Kl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Hy=oi(Vy),Gy=H({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=oi(Gy),Wy=H({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),jy=oi(Wy),Xy=H({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=oi(Xy),qy=H({},Jl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$y=oi(qy),Zy=[9,13,27,32],lf=c&&"CompositionEvent"in window,Da=null;c&&"documentMode"in document&&(Da=document.documentMode);var Ky=c&&"TextEvent"in window&&!Da,Rm=c&&(!lf||Da&&8<Da&&11>=Da),bm=" ",Pm=!1;function Lm(i,o){switch(i){case"keyup":return Zy.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var _o=!1;function Qy(i,o){switch(i){case"compositionend":return Dm(o);case"keypress":return o.which!==32?null:(Pm=!0,bm);case"textInput":return i=o.data,i===bm&&Pm?null:i;default:return null}}function Jy(i,o){if(_o)return i==="compositionend"||!lf&&Lm(i,o)?(i=Mm(),Zl=tf=Wr=null,_o=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Rm&&o.locale!=="ko"?null:o.data;default:return null}}var eS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!eS[i.type]:o==="textarea"}function Im(i,o,l,d){De(d),o=ru(o,"onChange"),0<o.length&&(l=new nf("onChange","change",null,l,d),i.push({event:l,listeners:o}))}var Na=null,Ia=null;function tS(i){Qm(i,0)}function eu(i){var o=Eo(i);if(St(o))return i}function nS(i,o){if(i==="change")return o}var Um=!1;if(c){var uf;if(c){var cf="oninput"in document;if(!cf){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),cf=typeof Fm.oninput=="function"}uf=cf}else uf=!1;Um=uf&&(!document.documentMode||9<document.documentMode)}function Om(){Na&&(Na.detachEvent("onpropertychange",km),Ia=Na=null)}function km(i){if(i.propertyName==="value"&&eu(Ia)){var o=[];Im(o,Ia,i,$(i)),jn(tS,o)}}function iS(i,o,l){i==="focusin"?(Om(),Na=o,Ia=l,Na.attachEvent("onpropertychange",km)):i==="focusout"&&Om()}function rS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return eu(Ia)}function sS(i,o){if(i==="click")return eu(o)}function oS(i,o){if(i==="input"||i==="change")return eu(o)}function aS(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Pi=typeof Object.is=="function"?Object.is:aS;function Ua(i,o){if(Pi(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),d=Object.keys(o);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var m=l[d];if(!f.call(o,m)||!Pi(i[m],o[m]))return!1}return!0}function zm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Bm(i,o){var l=zm(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=o&&d>=o)return{node:l,offset:o-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=zm(l)}}function Vm(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Vm(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Hm(){for(var i=window,o=at();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=at(i.document)}return o}function ff(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function lS(i){var o=Hm(),l=i.focusedElem,d=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Vm(l.ownerDocument.documentElement,l)){if(d!==null&&ff(l)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,S=Math.min(d.start,m);d=d.end===void 0?S:Math.min(d.end,m),!i.extend&&S>d&&(m=d,d=S,S=m),m=Bm(l,S);var w=Bm(l,d);m&&w&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),i.removeAllRanges(),S>d?(i.addRange(o),i.extend(w.node,w.offset)):(o.setEnd(w.node,w.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var uS=c&&"documentMode"in document&&11>=document.documentMode,vo=null,df=null,Fa=null,hf=!1;function Gm(i,o,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hf||vo==null||vo!==at(d)||(d=vo,"selectionStart"in d&&ff(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Fa&&Ua(Fa,d)||(Fa=d,d=ru(df,"onSelect"),0<d.length&&(o=new nf("onSelect","select",null,o,l),i.push({event:o,listeners:d}),o.target=vo)))}function tu(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var xo={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},pf={},Wm={};c&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function nu(i){if(pf[i])return pf[i];if(!xo[i])return i;var o=xo[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in Wm)return pf[i]=o[l];return i}var jm=nu("animationend"),Xm=nu("animationiteration"),Ym=nu("animationstart"),qm=nu("transitionend"),$m=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(i,o){$m.set(i,o),a(o,[i])}for(var mf=0;mf<Zm.length;mf++){var gf=Zm[mf],cS=gf.toLowerCase(),fS=gf[0].toUpperCase()+gf.slice(1);jr(cS,"on"+fS)}jr(jm,"onAnimationEnd"),jr(Xm,"onAnimationIteration"),jr(Ym,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(qm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function Km(i,o,l){var d=i.type||"unknown-event";i.currentTarget=l,Bl(d,o,void 0,i),i.currentTarget=null}function Qm(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],m=d.event;d=d.listeners;e:{var S=void 0;if(o)for(var w=d.length-1;0<=w;w--){var z=d[w],W=z.instance,ue=z.currentTarget;if(z=z.listener,W!==S&&m.isPropagationStopped())break e;Km(m,z,ue),S=W}else for(w=0;w<d.length;w++){if(z=d[w],W=z.instance,ue=z.currentTarget,z=z.listener,W!==S&&m.isPropagationStopped())break e;Km(m,z,ue),S=W}}}if(ws)throw i=kr,ws=!1,kr=null,i}function Ot(i,o){var l=o[Tf];l===void 0&&(l=o[Tf]=new Set);var d=i+"__bubble";l.has(d)||(Jm(o,i,2,!1),l.add(d))}function _f(i,o,l){var d=0;o&&(d|=4),Jm(l,i,d,o)}var iu="_reactListening"+Math.random().toString(36).slice(2);function ka(i){if(!i[iu]){i[iu]=!0,n.forEach(function(l){l!=="selectionchange"&&(dS.has(l)||_f(l,!1,i),_f(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[iu]||(o[iu]=!0,_f("selectionchange",!1,o))}}function Jm(i,o,l,d){switch(Em(o)){case 1:var m=Cy;break;case 4:m=Ay;break;default:m=Jc}l=m.bind(null,o,l,i),m=void 0,!ho||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),d?m!==void 0?i.addEventListener(o,l,{capture:!0,passive:m}):i.addEventListener(o,l,!0):m!==void 0?i.addEventListener(o,l,{passive:m}):i.addEventListener(o,l,!1)}function vf(i,o,l,d,m){var S=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var z=d.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(w===4)for(w=d.return;w!==null;){var W=w.tag;if((W===3||W===4)&&(W=w.stateNode.containerInfo,W===m||W.nodeType===8&&W.parentNode===m))return;w=w.return}for(;z!==null;){if(w=Cs(z),w===null)return;if(W=w.tag,W===5||W===6){d=S=w;continue e}z=z.parentNode}}d=d.return}jn(function(){var ue=S,Ee=$(l),Te=[];e:{var xe=$m.get(i);if(xe!==void 0){var Fe=nf,Ge=i;switch(i){case"keypress":if(Kl(l)===0)break e;case"keydown":case"keyup":Fe=Hy;break;case"focusin":Ge="focus",Fe=of;break;case"focusout":Ge="blur",Fe=of;break;case"beforeblur":case"afterblur":Fe=of;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=jy;break;case jm:case Xm:case Ym:Fe=Ny;break;case qm:Fe=Yy;break;case"scroll":Fe=Ry;break;case"wheel":Fe=$y;break;case"copy":case"cut":case"paste":Fe=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Am}var je=(o&4)!==0,en=!je&&i==="scroll",ee=je?xe!==null?xe+"Capture":null:xe;je=[];for(var Y=ue,ie;Y!==null;){ie=Y;var Ae=ie.stateNode;if(ie.tag===5&&Ae!==null&&(ie=Ae,ee!==null&&(Ae=zn(Y,ee),Ae!=null&&je.push(za(Y,Ae,ie)))),en)break;Y=Y.return}0<je.length&&(xe=new Fe(xe,Ge,null,l,Ee),Te.push({event:xe,listeners:je}))}}if((o&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",Fe=i==="mouseout"||i==="pointerout",xe&&l!==Rt&&(Ge=l.relatedTarget||l.fromElement)&&(Cs(Ge)||Ge[dr]))break e;if((Fe||xe)&&(xe=Ee.window===Ee?Ee:(xe=Ee.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(Ge=l.relatedTarget||l.toElement,Fe=ue,Ge=Ge?Cs(Ge):null,Ge!==null&&(en=Gi(Ge),Ge!==en||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Fe=null,Ge=ue),Fe!==Ge)){if(je=wm,Ae="onMouseLeave",ee="onMouseEnter",Y="mouse",(i==="pointerout"||i==="pointerover")&&(je=Am,Ae="onPointerLeave",ee="onPointerEnter",Y="pointer"),en=Fe==null?xe:Eo(Fe),ie=Ge==null?xe:Eo(Ge),xe=new je(Ae,Y+"leave",Fe,l,Ee),xe.target=en,xe.relatedTarget=ie,Ae=null,Cs(Ee)===ue&&(je=new je(ee,Y+"enter",Ge,l,Ee),je.target=ie,je.relatedTarget=en,Ae=je),en=Ae,Fe&&Ge)t:{for(je=Fe,ee=Ge,Y=0,ie=je;ie;ie=yo(ie))Y++;for(ie=0,Ae=ee;Ae;Ae=yo(Ae))ie++;for(;0<Y-ie;)je=yo(je),Y--;for(;0<ie-Y;)ee=yo(ee),ie--;for(;Y--;){if(je===ee||ee!==null&&je===ee.alternate)break t;je=yo(je),ee=yo(ee)}je=null}else je=null;Fe!==null&&eg(Te,xe,Fe,je,!1),Ge!==null&&en!==null&&eg(Te,en,Ge,je,!0)}}e:{if(xe=ue?Eo(ue):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var qe=nS;else if(Nm(xe))if(Um)qe=oS;else{qe=rS;var Qe=iS}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(qe=sS);if(qe&&(qe=qe(i,ue))){Im(Te,qe,l,Ee);break e}Qe&&Qe(i,xe,ue),i==="focusout"&&(Qe=xe._wrapperState)&&Qe.controlled&&xe.type==="number"&&Pt(xe,"number",xe.value)}switch(Qe=ue?Eo(ue):window,i){case"focusin":(Nm(Qe)||Qe.contentEditable==="true")&&(vo=Qe,df=ue,Fa=null);break;case"focusout":Fa=df=vo=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Gm(Te,l,Ee);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":Gm(Te,l,Ee)}var Je;if(lf)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else _o?Lm(i,l)&&(rt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(Rm&&l.locale!=="ko"&&(_o||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&_o&&(Je=Mm()):(Wr=Ee,tf="value"in Wr?Wr.value:Wr.textContent,_o=!0)),Qe=ru(ue,rt),0<Qe.length&&(rt=new Cm(rt,i,null,l,Ee),Te.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=Dm(l),Je!==null&&(rt.data=Je)))),(Je=Ky?Qy(i,l):Jy(i,l))&&(ue=ru(ue,"onBeforeInput"),0<ue.length&&(Ee=new Cm("onBeforeInput","beforeinput",null,l,Ee),Te.push({event:Ee,listeners:ue}),Ee.data=Je))}Qm(Te,o)})}function za(i,o,l){return{instance:i,listener:o,currentTarget:l}}function ru(i,o){for(var l=o+"Capture",d=[];i!==null;){var m=i,S=m.stateNode;m.tag===5&&S!==null&&(m=S,S=zn(i,l),S!=null&&d.unshift(za(i,S,m)),S=zn(i,o),S!=null&&d.push(za(i,S,m))),i=i.return}return d}function yo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function eg(i,o,l,d,m){for(var S=o._reactName,w=[];l!==null&&l!==d;){var z=l,W=z.alternate,ue=z.stateNode;if(W!==null&&W===d)break;z.tag===5&&ue!==null&&(z=ue,m?(W=zn(l,S),W!=null&&w.unshift(za(l,W,z))):m||(W=zn(l,S),W!=null&&w.push(za(l,W,z)))),l=l.return}w.length!==0&&i.push({event:o,listeners:w})}var hS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function tg(i){return(typeof i=="string"?i:""+i).replace(hS,`
`).replace(pS,"")}function su(i,o,l){if(o=tg(o),tg(i)!==o&&l)throw Error(t(425))}function ou(){}var xf=null,yf=null;function Sf(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Ef=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(i){return ng.resolve(null).then(i).catch(_S)}:Ef;function _S(i){setTimeout(function(){throw i})}function Mf(i,o){var l=o,d=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(d===0){i.removeChild(m),ba(o);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=m}while(l);ba(o)}function Xr(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function ig(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var So=Math.random().toString(36).slice(2),ji="__reactFiber$"+So,Ba="__reactProps$"+So,dr="__reactContainer$"+So,Tf="__reactEvents$"+So,vS="__reactListeners$"+So,xS="__reactHandles$"+So;function Cs(i){var o=i[ji];if(o)return o;for(var l=i.parentNode;l;){if(o=l[dr]||l[ji]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=ig(i);i!==null;){if(l=i[ji])return l;i=ig(i)}return o}i=l,l=i.parentNode}return null}function Va(i){return i=i[ji]||i[dr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Eo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function au(i){return i[Ba]||null}var wf=[],Mo=-1;function Yr(i){return{current:i}}function kt(i){0>Mo||(i.current=wf[Mo],wf[Mo]=null,Mo--)}function Ut(i,o){Mo++,wf[Mo]=i.current,i.current=o}var qr={},Rn=Yr(qr),Xn=Yr(!1),As=qr;function To(i,o){var l=i.type.contextTypes;if(!l)return qr;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var m={},S;for(S in l)m[S]=o[S];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=m),m}function Yn(i){return i=i.childContextTypes,i!=null}function lu(){kt(Xn),kt(Rn)}function rg(i,o,l){if(Rn.current!==qr)throw Error(t(168));Ut(Rn,o),Ut(Xn,l)}function sg(i,o,l){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var m in d)if(!(m in o))throw Error(t(108,pe(i)||"Unknown",m));return H({},l,d)}function uu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||qr,As=Rn.current,Ut(Rn,i),Ut(Xn,Xn.current),!0}function og(i,o,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=sg(i,o,As),d.__reactInternalMemoizedMergedChildContext=i,kt(Xn),kt(Rn),Ut(Rn,i)):kt(Xn),Ut(Xn,l)}var hr=null,cu=!1,Cf=!1;function ag(i){hr===null?hr=[i]:hr.push(i)}function yS(i){cu=!0,ag(i)}function $r(){if(!Cf&&hr!==null){Cf=!0;var i=0,o=Mt;try{var l=hr;for(Mt=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}hr=null,cu=!1}catch(m){throw hr!==null&&(hr=hr.slice(i+1)),jl(we,$r),m}finally{Mt=o,Cf=!1}}return null}var wo=[],Co=0,fu=null,du=0,xi=[],yi=0,Rs=null,pr=1,mr="";function bs(i,o){wo[Co++]=du,wo[Co++]=fu,fu=i,du=o}function lg(i,o,l){xi[yi++]=pr,xi[yi++]=mr,xi[yi++]=Rs,Rs=i;var d=pr;i=mr;var m=32-lt(d)-1;d&=~(1<<m),l+=1;var S=32-lt(o)+m;if(30<S){var w=m-m%5;S=(d&(1<<w)-1).toString(32),d>>=w,m-=w,pr=1<<32-lt(o)+m|l<<m|d,mr=S+i}else pr=1<<S|l<<m|d,mr=i}function Af(i){i.return!==null&&(bs(i,1),lg(i,1,0))}function Rf(i){for(;i===fu;)fu=wo[--Co],wo[Co]=null,du=wo[--Co],wo[Co]=null;for(;i===Rs;)Rs=xi[--yi],xi[yi]=null,mr=xi[--yi],xi[yi]=null,pr=xi[--yi],xi[yi]=null}var ai=null,li=null,Bt=!1,Li=null;function ug(i,o){var l=Ti(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function cg(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,ai=i,li=Xr(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,ai=i,li=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Rs!==null?{id:pr,overflow:mr}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Ti(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,ai=i,li=null,!0):!1;default:return!1}}function bf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Pf(i){if(Bt){var o=li;if(o){var l=o;if(!cg(i,o)){if(bf(i))throw Error(t(418));o=Xr(l.nextSibling);var d=ai;o&&cg(i,o)?ug(d,l):(i.flags=i.flags&-4097|2,Bt=!1,ai=i)}}else{if(bf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Bt=!1,ai=i}}}function fg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ai=i}function hu(i){if(i!==ai)return!1;if(!Bt)return fg(i),Bt=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Sf(i.type,i.memoizedProps)),o&&(o=li)){if(bf(i))throw dg(),Error(t(418));for(;o;)ug(i,o),o=Xr(o.nextSibling)}if(fg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){li=Xr(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}li=null}}else li=ai?Xr(i.stateNode.nextSibling):null;return!0}function dg(){for(var i=li;i;)i=Xr(i.nextSibling)}function Ao(){li=ai=null,Bt=!1}function Lf(i){Li===null?Li=[i]:Li.push(i)}var SS=T.ReactCurrentBatchConfig;function Ha(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var m=d,S=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===S?o.ref:(o=function(w){var z=m.refs;w===null?delete z[S]:z[S]=w},o._stringRef=S,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function pu(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function hg(i){var o=i._init;return o(i._payload)}function pg(i){function o(ee,Y){if(i){var ie=ee.deletions;ie===null?(ee.deletions=[Y],ee.flags|=16):ie.push(Y)}}function l(ee,Y){if(!i)return null;for(;Y!==null;)o(ee,Y),Y=Y.sibling;return null}function d(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function m(ee,Y){return ee=is(ee,Y),ee.index=0,ee.sibling=null,ee}function S(ee,Y,ie){return ee.index=ie,i?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<Y?(ee.flags|=2,Y):ie):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function w(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function z(ee,Y,ie,Ae){return Y===null||Y.tag!==6?(Y=Ed(ie,ee.mode,Ae),Y.return=ee,Y):(Y=m(Y,ie),Y.return=ee,Y)}function W(ee,Y,ie,Ae){var qe=ie.type;return qe===I?Ee(ee,Y,ie.props.children,Ae,ie.key):Y!==null&&(Y.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===se&&hg(qe)===Y.type)?(Ae=m(Y,ie.props),Ae.ref=Ha(ee,Y,ie),Ae.return=ee,Ae):(Ae=ku(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Ha(ee,Y,ie),Ae.return=ee,Ae)}function ue(ee,Y,ie,Ae){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=Md(ie,ee.mode,Ae),Y.return=ee,Y):(Y=m(Y,ie.children||[]),Y.return=ee,Y)}function Ee(ee,Y,ie,Ae,qe){return Y===null||Y.tag!==7?(Y=Os(ie,ee.mode,Ae,qe),Y.return=ee,Y):(Y=m(Y,ie),Y.return=ee,Y)}function Te(ee,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Ed(""+Y,ee.mode,ie),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return ie=ku(Y.type,Y.key,Y.props,null,ee.mode,ie),ie.ref=Ha(ee,null,Y),ie.return=ee,ie;case F:return Y=Md(Y,ee.mode,ie),Y.return=ee,Y;case se:var Ae=Y._init;return Te(ee,Ae(Y._payload),ie)}if(Xe(Y)||de(Y))return Y=Os(Y,ee.mode,ie,null),Y.return=ee,Y;pu(ee,Y)}return null}function xe(ee,Y,ie,Ae){var qe=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return qe!==null?null:z(ee,Y,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:return ie.key===qe?W(ee,Y,ie,Ae):null;case F:return ie.key===qe?ue(ee,Y,ie,Ae):null;case se:return qe=ie._init,xe(ee,Y,qe(ie._payload),Ae)}if(Xe(ie)||de(ie))return qe!==null?null:Ee(ee,Y,ie,Ae,null);pu(ee,ie)}return null}function Fe(ee,Y,ie,Ae,qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(ie)||null,z(Y,ee,""+Ae,qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case U:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,W(Y,ee,Ae,qe);case F:return ee=ee.get(Ae.key===null?ie:Ae.key)||null,ue(Y,ee,Ae,qe);case se:var Qe=Ae._init;return Fe(ee,Y,ie,Qe(Ae._payload),qe)}if(Xe(Ae)||de(Ae))return ee=ee.get(ie)||null,Ee(Y,ee,Ae,qe,null);pu(Y,Ae)}return null}function Ge(ee,Y,ie,Ae){for(var qe=null,Qe=null,Je=Y,rt=Y=0,xn=null;Je!==null&&rt<ie.length;rt++){Je.index>rt?(xn=Je,Je=null):xn=Je.sibling;var wt=xe(ee,Je,ie[rt],Ae);if(wt===null){Je===null&&(Je=xn);break}i&&Je&&wt.alternate===null&&o(ee,Je),Y=S(wt,Y,rt),Qe===null?qe=wt:Qe.sibling=wt,Qe=wt,Je=xn}if(rt===ie.length)return l(ee,Je),Bt&&bs(ee,rt),qe;if(Je===null){for(;rt<ie.length;rt++)Je=Te(ee,ie[rt],Ae),Je!==null&&(Y=S(Je,Y,rt),Qe===null?qe=Je:Qe.sibling=Je,Qe=Je);return Bt&&bs(ee,rt),qe}for(Je=d(ee,Je);rt<ie.length;rt++)xn=Fe(Je,ee,rt,ie[rt],Ae),xn!==null&&(i&&xn.alternate!==null&&Je.delete(xn.key===null?rt:xn.key),Y=S(xn,Y,rt),Qe===null?qe=xn:Qe.sibling=xn,Qe=xn);return i&&Je.forEach(function(rs){return o(ee,rs)}),Bt&&bs(ee,rt),qe}function je(ee,Y,ie,Ae){var qe=de(ie);if(typeof qe!="function")throw Error(t(150));if(ie=qe.call(ie),ie==null)throw Error(t(151));for(var Qe=qe=null,Je=Y,rt=Y=0,xn=null,wt=ie.next();Je!==null&&!wt.done;rt++,wt=ie.next()){Je.index>rt?(xn=Je,Je=null):xn=Je.sibling;var rs=xe(ee,Je,wt.value,Ae);if(rs===null){Je===null&&(Je=xn);break}i&&Je&&rs.alternate===null&&o(ee,Je),Y=S(rs,Y,rt),Qe===null?qe=rs:Qe.sibling=rs,Qe=rs,Je=xn}if(wt.done)return l(ee,Je),Bt&&bs(ee,rt),qe;if(Je===null){for(;!wt.done;rt++,wt=ie.next())wt=Te(ee,wt.value,Ae),wt!==null&&(Y=S(wt,Y,rt),Qe===null?qe=wt:Qe.sibling=wt,Qe=wt);return Bt&&bs(ee,rt),qe}for(Je=d(ee,Je);!wt.done;rt++,wt=ie.next())wt=Fe(Je,ee,rt,wt.value,Ae),wt!==null&&(i&&wt.alternate!==null&&Je.delete(wt.key===null?rt:wt.key),Y=S(wt,Y,rt),Qe===null?qe=wt:Qe.sibling=wt,Qe=wt);return i&&Je.forEach(function(e1){return o(ee,e1)}),Bt&&bs(ee,rt),qe}function en(ee,Y,ie,Ae){if(typeof ie=="object"&&ie!==null&&ie.type===I&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case U:e:{for(var qe=ie.key,Qe=Y;Qe!==null;){if(Qe.key===qe){if(qe=ie.type,qe===I){if(Qe.tag===7){l(ee,Qe.sibling),Y=m(Qe,ie.props.children),Y.return=ee,ee=Y;break e}}else if(Qe.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===se&&hg(qe)===Qe.type){l(ee,Qe.sibling),Y=m(Qe,ie.props),Y.ref=Ha(ee,Qe,ie),Y.return=ee,ee=Y;break e}l(ee,Qe);break}else o(ee,Qe);Qe=Qe.sibling}ie.type===I?(Y=Os(ie.props.children,ee.mode,Ae,ie.key),Y.return=ee,ee=Y):(Ae=ku(ie.type,ie.key,ie.props,null,ee.mode,Ae),Ae.ref=Ha(ee,Y,ie),Ae.return=ee,ee=Ae)}return w(ee);case F:e:{for(Qe=ie.key;Y!==null;){if(Y.key===Qe)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){l(ee,Y.sibling),Y=m(Y,ie.children||[]),Y.return=ee,ee=Y;break e}else{l(ee,Y);break}else o(ee,Y);Y=Y.sibling}Y=Md(ie,ee.mode,Ae),Y.return=ee,ee=Y}return w(ee);case se:return Qe=ie._init,en(ee,Y,Qe(ie._payload),Ae)}if(Xe(ie))return Ge(ee,Y,ie,Ae);if(de(ie))return je(ee,Y,ie,Ae);pu(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,Y!==null&&Y.tag===6?(l(ee,Y.sibling),Y=m(Y,ie),Y.return=ee,ee=Y):(l(ee,Y),Y=Ed(ie,ee.mode,Ae),Y.return=ee,ee=Y),w(ee)):l(ee,Y)}return en}var Ro=pg(!0),mg=pg(!1),mu=Yr(null),gu=null,bo=null,Df=null;function Nf(){Df=bo=gu=null}function If(i){var o=mu.current;kt(mu),i._currentValue=o}function Uf(i,o,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===l)break;i=i.return}}function Po(i,o){gu=i,Df=bo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(qn=!0),i.firstContext=null)}function Si(i){var o=i._currentValue;if(Df!==i)if(i={context:i,memoizedValue:o,next:null},bo===null){if(gu===null)throw Error(t(308));bo=i,gu.dependencies={lanes:0,firstContext:i}}else bo=bo.next=i;return o}var Ps=null;function Ff(i){Ps===null?Ps=[i]:Ps.push(i)}function gg(i,o,l,d){var m=o.interleaved;return m===null?(l.next=l,Ff(o)):(l.next=m.next,m.next=l),o.interleaved=l,gr(i,d)}function gr(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Zr=!1;function Of(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _g(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function _r(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Kr(i,o,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(Tt&2)!==0){var m=d.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),d.pending=o,gr(i,l)}return m=d.interleaved,m===null?(o.next=o,Ff(d)):(o.next=m.next,m.next=o),d.interleaved=o,gr(i,l)}function _u(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,gn(i,l)}}function vg(i,o){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var m=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?m=S=w:S=S.next=w,l=l.next}while(l!==null);S===null?m=S=o:S=S.next=o}else m=S=o;l={baseState:d.baseState,firstBaseUpdate:m,lastBaseUpdate:S,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function vu(i,o,l,d){var m=i.updateQueue;Zr=!1;var S=m.firstBaseUpdate,w=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var W=z,ue=W.next;W.next=null,w===null?S=ue:w.next=ue,w=W;var Ee=i.alternate;Ee!==null&&(Ee=Ee.updateQueue,z=Ee.lastBaseUpdate,z!==w&&(z===null?Ee.firstBaseUpdate=ue:z.next=ue,Ee.lastBaseUpdate=W))}if(S!==null){var Te=m.baseState;w=0,Ee=ue=W=null,z=S;do{var xe=z.lane,Fe=z.eventTime;if((d&xe)===xe){Ee!==null&&(Ee=Ee.next={eventTime:Fe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ge=i,je=z;switch(xe=o,Fe=l,je.tag){case 1:if(Ge=je.payload,typeof Ge=="function"){Te=Ge.call(Fe,Te,xe);break e}Te=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=je.payload,xe=typeof Ge=="function"?Ge.call(Fe,Te,xe):Ge,xe==null)break e;Te=H({},Te,xe);break e;case 2:Zr=!0}}z.callback!==null&&z.lane!==0&&(i.flags|=64,xe=m.effects,xe===null?m.effects=[z]:xe.push(z))}else Fe={eventTime:Fe,lane:xe,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ee===null?(ue=Ee=Fe,W=Te):Ee=Ee.next=Fe,w|=xe;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;xe=z,z=xe.next,xe.next=null,m.lastBaseUpdate=xe,m.shared.pending=null}}while(!0);if(Ee===null&&(W=Te),m.baseState=W,m.firstBaseUpdate=ue,m.lastBaseUpdate=Ee,o=m.shared.interleaved,o!==null){m=o;do w|=m.lane,m=m.next;while(m!==o)}else S===null&&(m.shared.lanes=0);Ns|=w,i.lanes=w,i.memoizedState=Te}}function xg(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],m=d.callback;if(m!==null){if(d.callback=null,d=l,typeof m!="function")throw Error(t(191,m));m.call(d)}}}var Ga={},Xi=Yr(Ga),Wa=Yr(Ga),ja=Yr(Ga);function Ls(i){if(i===Ga)throw Error(t(174));return i}function kf(i,o){switch(Ut(ja,o),Ut(Wa,i),Ut(Xi,Ga),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Ye(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Ye(o,i)}kt(Xi),Ut(Xi,o)}function Lo(){kt(Xi),kt(Wa),kt(ja)}function yg(i){Ls(ja.current);var o=Ls(Xi.current),l=Ye(o,i.type);o!==l&&(Ut(Wa,i),Ut(Xi,l))}function zf(i){Wa.current===i&&(kt(Xi),kt(Wa))}var Ht=Yr(0);function xu(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Bf=[];function Vf(){for(var i=0;i<Bf.length;i++)Bf[i]._workInProgressVersionPrimary=null;Bf.length=0}var yu=T.ReactCurrentDispatcher,Hf=T.ReactCurrentBatchConfig,Ds=0,Gt=null,fn=null,_n=null,Su=!1,Xa=!1,Ya=0,ES=0;function bn(){throw Error(t(321))}function Gf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Pi(i[l],o[l]))return!1;return!0}function Wf(i,o,l,d,m,S){if(Ds=S,Gt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,yu.current=i===null||i.memoizedState===null?CS:AS,i=l(d,m),Xa){S=0;do{if(Xa=!1,Ya=0,25<=S)throw Error(t(301));S+=1,_n=fn=null,o.updateQueue=null,yu.current=RS,i=l(d,m)}while(Xa)}if(yu.current=Tu,o=fn!==null&&fn.next!==null,Ds=0,_n=fn=Gt=null,Su=!1,o)throw Error(t(300));return i}function jf(){var i=Ya!==0;return Ya=0,i}function Yi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Gt.memoizedState=_n=i:_n=_n.next=i,_n}function Ei(){if(fn===null){var i=Gt.alternate;i=i!==null?i.memoizedState:null}else i=fn.next;var o=_n===null?Gt.memoizedState:_n.next;if(o!==null)_n=o,fn=i;else{if(i===null)throw Error(t(310));fn=i,i={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},_n===null?Gt.memoizedState=_n=i:_n=_n.next=i}return _n}function qa(i,o){return typeof o=="function"?o(i):o}function Xf(i){var o=Ei(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=fn,m=d.baseQueue,S=l.pending;if(S!==null){if(m!==null){var w=m.next;m.next=S.next,S.next=w}d.baseQueue=m=S,l.pending=null}if(m!==null){S=m.next,d=d.baseState;var z=w=null,W=null,ue=S;do{var Ee=ue.lane;if((Ds&Ee)===Ee)W!==null&&(W=W.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),d=ue.hasEagerState?ue.eagerState:i(d,ue.action);else{var Te={lane:Ee,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};W===null?(z=W=Te,w=d):W=W.next=Te,Gt.lanes|=Ee,Ns|=Ee}ue=ue.next}while(ue!==null&&ue!==S);W===null?w=d:W.next=z,Pi(d,o.memoizedState)||(qn=!0),o.memoizedState=d,o.baseState=w,o.baseQueue=W,l.lastRenderedState=d}if(i=l.interleaved,i!==null){m=i;do S=m.lane,Gt.lanes|=S,Ns|=S,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Yf(i){var o=Ei(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,m=l.pending,S=o.memoizedState;if(m!==null){l.pending=null;var w=m=m.next;do S=i(S,w.action),w=w.next;while(w!==m);Pi(S,o.memoizedState)||(qn=!0),o.memoizedState=S,o.baseQueue===null&&(o.baseState=S),l.lastRenderedState=S}return[S,d]}function Sg(){}function Eg(i,o){var l=Gt,d=Ei(),m=o(),S=!Pi(d.memoizedState,m);if(S&&(d.memoizedState=m,qn=!0),d=d.queue,qf(wg.bind(null,l,d,i),[i]),d.getSnapshot!==o||S||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,$a(9,Tg.bind(null,l,d,m,o),void 0,null),vn===null)throw Error(t(349));(Ds&30)!==0||Mg(l,o,m)}return m}function Mg(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Gt.updateQueue,o===null?(o={lastEffect:null,stores:null},Gt.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Tg(i,o,l,d){o.value=l,o.getSnapshot=d,Cg(o)&&Ag(i)}function wg(i,o,l){return l(function(){Cg(o)&&Ag(i)})}function Cg(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Pi(i,l)}catch{return!0}}function Ag(i){var o=gr(i,1);o!==null&&Ui(o,i,1,-1)}function Rg(i){var o=Yi();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:i},o.queue=i,i=i.dispatch=wS.bind(null,Gt,i),[o.memoizedState,i]}function $a(i,o,l,d){return i={tag:i,create:o,destroy:l,deps:d,next:null},o=Gt.updateQueue,o===null?(o={lastEffect:null,stores:null},Gt.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,o.lastEffect=i)),i}function bg(){return Ei().memoizedState}function Eu(i,o,l,d){var m=Yi();Gt.flags|=i,m.memoizedState=$a(1|o,l,void 0,d===void 0?null:d)}function Mu(i,o,l,d){var m=Ei();d=d===void 0?null:d;var S=void 0;if(fn!==null){var w=fn.memoizedState;if(S=w.destroy,d!==null&&Gf(d,w.deps)){m.memoizedState=$a(o,l,S,d);return}}Gt.flags|=i,m.memoizedState=$a(1|o,l,S,d)}function Pg(i,o){return Eu(8390656,8,i,o)}function qf(i,o){return Mu(2048,8,i,o)}function Lg(i,o){return Mu(4,2,i,o)}function Dg(i,o){return Mu(4,4,i,o)}function Ng(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Ig(i,o,l){return l=l!=null?l.concat([i]):null,Mu(4,4,Ng.bind(null,o,i),l)}function $f(){}function Ug(i,o){var l=Ei();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&Gf(o,d[1])?d[0]:(l.memoizedState=[i,o],i)}function Fg(i,o){var l=Ei();o=o===void 0?null:o;var d=l.memoizedState;return d!==null&&o!==null&&Gf(o,d[1])?d[0]:(i=i(),l.memoizedState=[i,o],i)}function Og(i,o,l){return(Ds&21)===0?(i.baseState&&(i.baseState=!1,qn=!0),i.memoizedState=l):(Pi(l,o)||(l=Nt(),Gt.lanes|=l,Ns|=l,i.baseState=!0),o)}function MS(i,o){var l=Mt;Mt=l!==0&&4>l?l:4,i(!0);var d=Hf.transition;Hf.transition={};try{i(!1),o()}finally{Mt=l,Hf.transition=d}}function kg(){return Ei().memoizedState}function TS(i,o,l){var d=ts(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},zg(i))Bg(o,l);else if(l=gg(i,o,l,d),l!==null){var m=Hn();Ui(l,i,d,m),Vg(l,o,d)}}function wS(i,o,l){var d=ts(i),m={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(zg(i))Bg(o,m);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=o.lastRenderedReducer,S!==null))try{var w=o.lastRenderedState,z=S(w,l);if(m.hasEagerState=!0,m.eagerState=z,Pi(z,w)){var W=o.interleaved;W===null?(m.next=m,Ff(o)):(m.next=W.next,W.next=m),o.interleaved=m;return}}catch{}finally{}l=gg(i,o,m,d),l!==null&&(m=Hn(),Ui(l,i,d,m),Vg(l,o,d))}}function zg(i){var o=i.alternate;return i===Gt||o!==null&&o===Gt}function Bg(i,o){Xa=Su=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Vg(i,o,l){if((l&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,l|=d,o.lanes=l,gn(i,l)}}var Tu={readContext:Si,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},CS={readContext:Si,useCallback:function(i,o){return Yi().memoizedState=[i,o===void 0?null:o],i},useContext:Si,useEffect:Pg,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Eu(4194308,4,Ng.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Eu(4194308,4,i,o)},useInsertionEffect:function(i,o){return Eu(4,2,i,o)},useMemo:function(i,o){var l=Yi();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var d=Yi();return o=l!==void 0?l(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=TS.bind(null,Gt,i),[d.memoizedState,i]},useRef:function(i){var o=Yi();return i={current:i},o.memoizedState=i},useState:Rg,useDebugValue:$f,useDeferredValue:function(i){return Yi().memoizedState=i},useTransition:function(){var i=Rg(!1),o=i[0];return i=MS.bind(null,i[1]),Yi().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var d=Gt,m=Yi();if(Bt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),vn===null)throw Error(t(349));(Ds&30)!==0||Mg(d,o,l)}m.memoizedState=l;var S={value:l,getSnapshot:o};return m.queue=S,Pg(wg.bind(null,d,S,i),[i]),d.flags|=2048,$a(9,Tg.bind(null,d,S,l,o),void 0,null),l},useId:function(){var i=Yi(),o=vn.identifierPrefix;if(Bt){var l=mr,d=pr;l=(d&~(1<<32-lt(d)-1)).toString(32)+l,o=":"+o+"R"+l,l=Ya++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=ES++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},AS={readContext:Si,useCallback:Ug,useContext:Si,useEffect:qf,useImperativeHandle:Ig,useInsertionEffect:Lg,useLayoutEffect:Dg,useMemo:Fg,useReducer:Xf,useRef:bg,useState:function(){return Xf(qa)},useDebugValue:$f,useDeferredValue:function(i){var o=Ei();return Og(o,fn.memoizedState,i)},useTransition:function(){var i=Xf(qa)[0],o=Ei().memoizedState;return[i,o]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:kg,unstable_isNewReconciler:!1},RS={readContext:Si,useCallback:Ug,useContext:Si,useEffect:qf,useImperativeHandle:Ig,useInsertionEffect:Lg,useLayoutEffect:Dg,useMemo:Fg,useReducer:Yf,useRef:bg,useState:function(){return Yf(qa)},useDebugValue:$f,useDeferredValue:function(i){var o=Ei();return fn===null?o.memoizedState=i:Og(o,fn.memoizedState,i)},useTransition:function(){var i=Yf(qa)[0],o=Ei().memoizedState;return[i,o]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:kg,unstable_isNewReconciler:!1};function Di(i,o){if(i&&i.defaultProps){o=H({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Zf(i,o,l,d){o=i.memoizedState,l=l(d,o),l=l==null?o:H({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var wu={isMounted:function(i){return(i=i._reactInternals)?Gi(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var d=Hn(),m=ts(i),S=_r(d,m);S.payload=o,l!=null&&(S.callback=l),o=Kr(i,S,m),o!==null&&(Ui(o,i,m,d),_u(o,i,m))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var d=Hn(),m=ts(i),S=_r(d,m);S.tag=1,S.payload=o,l!=null&&(S.callback=l),o=Kr(i,S,m),o!==null&&(Ui(o,i,m,d),_u(o,i,m))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Hn(),d=ts(i),m=_r(l,d);m.tag=2,o!=null&&(m.callback=o),o=Kr(i,m,d),o!==null&&(Ui(o,i,d,l),_u(o,i,d))}};function Hg(i,o,l,d,m,S,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,S,w):o.prototype&&o.prototype.isPureReactComponent?!Ua(l,d)||!Ua(m,S):!0}function Gg(i,o,l){var d=!1,m=qr,S=o.contextType;return typeof S=="object"&&S!==null?S=Si(S):(m=Yn(o)?As:Rn.current,d=o.contextTypes,S=(d=d!=null)?To(i,m):qr),o=new o(l,S),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=wu,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=S),o}function Wg(i,o,l,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,d),o.state!==i&&wu.enqueueReplaceState(o,o.state,null)}function Kf(i,o,l,d){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Of(i);var S=o.contextType;typeof S=="object"&&S!==null?m.context=Si(S):(S=Yn(o)?As:Rn.current,m.context=To(i,S)),m.state=i.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(Zf(i,o,S,l),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&wu.enqueueReplaceState(m,m.state,null),vu(i,l,m,d),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Do(i,o){try{var l="",d=o;do l+=ne(d),d=d.return;while(d);var m=l}catch(S){m=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:o,stack:m,digest:null}}function Qf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Jf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function jg(i,o,l){l=_r(-1,l),l.tag=3,l.payload={element:null};var d=o.value;return l.callback=function(){Du||(Du=!0,pd=d),Jf(i,o)},l}function Xg(i,o,l){l=_r(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var m=o.value;l.payload=function(){return d(m)},l.callback=function(){Jf(i,o)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Jf(i,o),typeof d!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})}),l}function Yg(i,o,l){var d=i.pingCache;if(d===null){d=i.pingCache=new bS;var m=new Set;d.set(o,m)}else m=d.get(o),m===void 0&&(m=new Set,d.set(o,m));m.has(l)||(m.add(l),i=GS.bind(null,i,o,l),o.then(i,i))}function qg(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function $g(i,o,l,d,m){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=_r(-1,1),o.tag=2,Kr(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var PS=T.ReactCurrentOwner,qn=!1;function Vn(i,o,l,d){o.child=i===null?mg(o,null,l,d):Ro(o,i.child,l,d)}function Zg(i,o,l,d,m){l=l.render;var S=o.ref;return Po(o,m),d=Wf(i,o,l,d,S,m),l=jf(),i!==null&&!qn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~m,vr(i,o,m)):(Bt&&l&&Af(o),o.flags|=1,Vn(i,o,d,m),o.child)}function Kg(i,o,l,d,m){if(i===null){var S=l.type;return typeof S=="function"&&!Sd(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=S,Qg(i,o,S,d,m)):(i=ku(l.type,null,d,o,o.mode,m),i.ref=o.ref,i.return=o,o.child=i)}if(S=i.child,(i.lanes&m)===0){var w=S.memoizedProps;if(l=l.compare,l=l!==null?l:Ua,l(w,d)&&i.ref===o.ref)return vr(i,o,m)}return o.flags|=1,i=is(S,d),i.ref=o.ref,i.return=o,o.child=i}function Qg(i,o,l,d,m){if(i!==null){var S=i.memoizedProps;if(Ua(S,d)&&i.ref===o.ref)if(qn=!1,o.pendingProps=d=S,(i.lanes&m)!==0)(i.flags&131072)!==0&&(qn=!0);else return o.lanes=i.lanes,vr(i,o,m)}return ed(i,o,l,d,m)}function Jg(i,o,l){var d=o.pendingProps,m=d.children,S=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Io,ui),ui|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,Ut(Io,ui),ui|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:l,Ut(Io,ui),ui|=d}else S!==null?(d=S.baseLanes|l,o.memoizedState=null):d=l,Ut(Io,ui),ui|=d;return Vn(i,o,m,l),o.child}function e_(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function ed(i,o,l,d,m){var S=Yn(l)?As:Rn.current;return S=To(o,S),Po(o,m),l=Wf(i,o,l,d,S,m),d=jf(),i!==null&&!qn?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~m,vr(i,o,m)):(Bt&&d&&Af(o),o.flags|=1,Vn(i,o,l,m),o.child)}function t_(i,o,l,d,m){if(Yn(l)){var S=!0;uu(o)}else S=!1;if(Po(o,m),o.stateNode===null)Au(i,o),Gg(o,l,d),Kf(o,l,d,m),d=!0;else if(i===null){var w=o.stateNode,z=o.memoizedProps;w.props=z;var W=w.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=Si(ue):(ue=Yn(l)?As:Rn.current,ue=To(o,ue));var Ee=l.getDerivedStateFromProps,Te=typeof Ee=="function"||typeof w.getSnapshotBeforeUpdate=="function";Te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(z!==d||W!==ue)&&Wg(o,w,d,ue),Zr=!1;var xe=o.memoizedState;w.state=xe,vu(o,d,w,m),W=o.memoizedState,z!==d||xe!==W||Xn.current||Zr?(typeof Ee=="function"&&(Zf(o,l,Ee,d),W=o.memoizedState),(z=Zr||Hg(o,l,z,d,xe,W,ue))?(Te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(o.flags|=4194308)):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=W),w.props=d,w.state=W,w.context=ue,d=z):(typeof w.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{w=o.stateNode,_g(i,o),z=o.memoizedProps,ue=o.type===o.elementType?z:Di(o.type,z),w.props=ue,Te=o.pendingProps,xe=w.context,W=l.contextType,typeof W=="object"&&W!==null?W=Si(W):(W=Yn(l)?As:Rn.current,W=To(o,W));var Fe=l.getDerivedStateFromProps;(Ee=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(z!==Te||xe!==W)&&Wg(o,w,d,W),Zr=!1,xe=o.memoizedState,w.state=xe,vu(o,d,w,m);var Ge=o.memoizedState;z!==Te||xe!==Ge||Xn.current||Zr?(typeof Fe=="function"&&(Zf(o,l,Fe,d),Ge=o.memoizedState),(ue=Zr||Hg(o,l,ue,d,xe,Ge,W)||!1)?(Ee||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,Ge,W),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,Ge,W)),typeof w.componentDidUpdate=="function"&&(o.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof w.componentDidUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=Ge),w.props=d,w.state=Ge,w.context=W,d=ue):(typeof w.componentDidUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||z===i.memoizedProps&&xe===i.memoizedState||(o.flags|=1024),d=!1)}return td(i,o,l,d,S,m)}function td(i,o,l,d,m,S){e_(i,o);var w=(o.flags&128)!==0;if(!d&&!w)return m&&og(o,l,!1),vr(i,o,S);d=o.stateNode,PS.current=o;var z=w&&typeof l.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&w?(o.child=Ro(o,i.child,null,S),o.child=Ro(o,null,z,S)):Vn(i,o,z,S),o.memoizedState=d.state,m&&og(o,l,!0),o.child}function n_(i){var o=i.stateNode;o.pendingContext?rg(i,o.pendingContext,o.pendingContext!==o.context):o.context&&rg(i,o.context,!1),kf(i,o.containerInfo)}function i_(i,o,l,d,m){return Ao(),Lf(m),o.flags|=256,Vn(i,o,l,d),o.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(i){return{baseLanes:i,cachePool:null,transitions:null}}function r_(i,o,l){var d=o.pendingProps,m=Ht.current,S=!1,w=(o.flags&128)!==0,z;if((z=w)||(z=i!==null&&i.memoizedState===null?!1:(m&2)!==0),z?(S=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ut(Ht,m&1),i===null)return Pf(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(w=d.children,i=d.fallback,S?(d=o.mode,S=o.child,w={mode:"hidden",children:w},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=w):S=zu(w,d,0,null),i=Os(i,d,l,null),S.return=o,i.return=o,S.sibling=i,o.child=S,o.child.memoizedState=id(l),o.memoizedState=nd,i):rd(o,w));if(m=i.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return LS(i,o,w,d,z,m,l);if(S){S=d.fallback,w=o.mode,m=i.child,z=m.sibling;var W={mode:"hidden",children:d.children};return(w&1)===0&&o.child!==m?(d=o.child,d.childLanes=0,d.pendingProps=W,o.deletions=null):(d=is(m,W),d.subtreeFlags=m.subtreeFlags&14680064),z!==null?S=is(z,S):(S=Os(S,w,l,null),S.flags|=2),S.return=o,d.return=o,d.sibling=S,o.child=d,d=S,S=o.child,w=i.child.memoizedState,w=w===null?id(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},S.memoizedState=w,S.childLanes=i.childLanes&~l,o.memoizedState=nd,d}return S=i.child,i=S.sibling,d=is(S,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=l),d.return=o,d.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=d,o.memoizedState=null,d}function rd(i,o){return o=zu({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Cu(i,o,l,d){return d!==null&&Lf(d),Ro(o,i.child,null,l),i=rd(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function LS(i,o,l,d,m,S,w){if(l)return o.flags&256?(o.flags&=-257,d=Qf(Error(t(422))),Cu(i,o,w,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(S=d.fallback,m=o.mode,d=zu({mode:"visible",children:d.children},m,0,null),S=Os(S,m,w,null),S.flags|=2,d.return=o,S.return=o,d.sibling=S,o.child=d,(o.mode&1)!==0&&Ro(o,i.child,null,w),o.child.memoizedState=id(w),o.memoizedState=nd,S);if((o.mode&1)===0)return Cu(i,o,w,null);if(m.data==="$!"){if(d=m.nextSibling&&m.nextSibling.dataset,d)var z=d.dgst;return d=z,S=Error(t(419)),d=Qf(S,d,void 0),Cu(i,o,w,d)}if(z=(w&i.childLanes)!==0,qn||z){if(d=vn,d!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(d.suspendedLanes|w))!==0?0:m,m!==0&&m!==S.retryLane&&(S.retryLane=m,gr(i,m),Ui(d,i,m,-1))}return yd(),d=Qf(Error(t(421))),Cu(i,o,w,d)}return m.data==="$?"?(o.flags|=128,o.child=i.child,o=WS.bind(null,i),m._reactRetry=o,null):(i=S.treeContext,li=Xr(m.nextSibling),ai=o,Bt=!0,Li=null,i!==null&&(xi[yi++]=pr,xi[yi++]=mr,xi[yi++]=Rs,pr=i.id,mr=i.overflow,Rs=o),o=rd(o,d.children),o.flags|=4096,o)}function s_(i,o,l){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),Uf(i.return,o,l)}function sd(i,o,l,d,m){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:m}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=l,S.tailMode=m)}function o_(i,o,l){var d=o.pendingProps,m=d.revealOrder,S=d.tail;if(Vn(i,o,d.children,l),d=Ht.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&s_(i,l,o);else if(i.tag===19)s_(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(Ut(Ht,d),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(l=o.child,m=null;l!==null;)i=l.alternate,i!==null&&xu(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=o.child,o.child=null):(m=l.sibling,l.sibling=null),sd(o,!1,m,l,S);break;case"backwards":for(l=null,m=o.child,o.child=null;m!==null;){if(i=m.alternate,i!==null&&xu(i)===null){o.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}sd(o,!0,l,null,S);break;case"together":sd(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Au(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function vr(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Ns|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=is(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=is(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function DS(i,o,l){switch(o.tag){case 3:n_(o),Ao();break;case 5:yg(o);break;case 1:Yn(o.type)&&uu(o);break;case 4:kf(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,m=o.memoizedProps.value;Ut(mu,d._currentValue),d._currentValue=m;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(Ut(Ht,Ht.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?r_(i,o,l):(Ut(Ht,Ht.current&1),i=vr(i,o,l),i!==null?i.sibling:null);Ut(Ht,Ht.current&1);break;case 19:if(d=(l&o.childLanes)!==0,(i.flags&128)!==0){if(d)return o_(i,o,l);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ut(Ht,Ht.current),d)break;return null;case 22:case 23:return o.lanes=0,Jg(i,o,l)}return vr(i,o,l)}var a_,od,l_,u_;a_=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},od=function(){},l_=function(i,o,l,d){var m=i.memoizedProps;if(m!==d){i=o.stateNode,Ls(Xi.current);var S=null;switch(l){case"input":m=j(i,m),d=j(i,d),S=[];break;case"select":m=H({},m,{value:void 0}),d=H({},d,{value:void 0}),S=[];break;case"textarea":m=P(i,m),d=P(i,d),S=[];break;default:typeof m.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=ou)}ht(l,d);var w;l=null;for(ue in m)if(!d.hasOwnProperty(ue)&&m.hasOwnProperty(ue)&&m[ue]!=null)if(ue==="style"){var z=m[ue];for(w in z)z.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(s.hasOwnProperty(ue)?S||(S=[]):(S=S||[]).push(ue,null));for(ue in d){var W=d[ue];if(z=m!=null?m[ue]:void 0,d.hasOwnProperty(ue)&&W!==z&&(W!=null||z!=null))if(ue==="style")if(z){for(w in z)!z.hasOwnProperty(w)||W&&W.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in W)W.hasOwnProperty(w)&&z[w]!==W[w]&&(l||(l={}),l[w]=W[w])}else l||(S||(S=[]),S.push(ue,l)),l=W;else ue==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(S=S||[]).push(ue,W)):ue==="children"?typeof W!="string"&&typeof W!="number"||(S=S||[]).push(ue,""+W):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(s.hasOwnProperty(ue)?(W!=null&&ue==="onScroll"&&Ot("scroll",i),S||z===W||(S=[])):(S=S||[]).push(ue,W))}l&&(S=S||[]).push("style",l);var ue=S;(o.updateQueue=ue)&&(o.flags|=4)}},u_=function(i,o,l,d){l!==d&&(o.flags|=4)};function Za(i,o){if(!Bt)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Pn(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(o)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags&14680064,d|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,d|=m.subtreeFlags,d|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=d,i.childLanes=l,o}function NS(i,o,l){var d=o.pendingProps;switch(Rf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(o),null;case 1:return Yn(o.type)&&lu(),Pn(o),null;case 3:return d=o.stateNode,Lo(),kt(Xn),kt(Rn),Vf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(hu(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Li!==null&&(_d(Li),Li=null))),od(i,o),Pn(o),null;case 5:zf(o);var m=Ls(ja.current);if(l=o.type,i!==null&&o.stateNode!=null)l_(i,o,l,d,m),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return Pn(o),null}if(i=Ls(Xi.current),hu(o)){d=o.stateNode,l=o.type;var S=o.memoizedProps;switch(d[ji]=o,d[Ba]=S,i=(o.mode&1)!==0,l){case"dialog":Ot("cancel",d),Ot("close",d);break;case"iframe":case"object":case"embed":Ot("load",d);break;case"video":case"audio":for(m=0;m<Oa.length;m++)Ot(Oa[m],d);break;case"source":Ot("error",d);break;case"img":case"image":case"link":Ot("error",d),Ot("load",d);break;case"details":Ot("toggle",d);break;case"input":kn(d,S),Ot("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},Ot("invalid",d);break;case"textarea":oe(d,S),Ot("invalid",d)}ht(l,S),m=null;for(var w in S)if(S.hasOwnProperty(w)){var z=S[w];w==="children"?typeof z=="string"?d.textContent!==z&&(S.suppressHydrationWarning!==!0&&su(d.textContent,z,i),m=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(S.suppressHydrationWarning!==!0&&su(d.textContent,z,i),m=["children",""+z]):s.hasOwnProperty(w)&&z!=null&&w==="onScroll"&&Ot("scroll",d)}switch(l){case"input":Ke(d),$e(d,S,!0);break;case"textarea":Ke(d),Se(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=ou)}d=m,o.updateQueue=d,d!==null&&(o.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=w.createElement(l,{is:d.is}):(i=w.createElement(l),l==="select"&&(w=i,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):i=w.createElementNS(i,l),i[ji]=o,i[Ba]=d,a_(i,o,!1,!1),o.stateNode=i;e:{switch(w=st(l,d),l){case"dialog":Ot("cancel",i),Ot("close",i),m=d;break;case"iframe":case"object":case"embed":Ot("load",i),m=d;break;case"video":case"audio":for(m=0;m<Oa.length;m++)Ot(Oa[m],i);m=d;break;case"source":Ot("error",i),m=d;break;case"img":case"image":case"link":Ot("error",i),Ot("load",i),m=d;break;case"details":Ot("toggle",i),m=d;break;case"input":kn(i,d),m=j(i,d),Ot("invalid",i);break;case"option":m=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},m=H({},d,{value:void 0}),Ot("invalid",i);break;case"textarea":oe(i,d),m=P(i,d),Ot("invalid",i);break;default:m=d}ht(l,m),z=m;for(S in z)if(z.hasOwnProperty(S)){var W=z[S];S==="style"?nt(i,W):S==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&ke(i,W)):S==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&ft(i,W):typeof W=="number"&&ft(i,""+W):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(s.hasOwnProperty(S)?W!=null&&S==="onScroll"&&Ot("scroll",i):W!=null&&A(i,S,W,w))}switch(l){case"input":Ke(i),$e(i,d,!1);break;case"textarea":Ke(i),Se(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Me(d.value));break;case"select":i.multiple=!!d.multiple,S=d.value,S!=null?O(i,!!d.multiple,S,!1):d.defaultValue!=null&&O(i,!!d.multiple,d.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=ou)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Pn(o),null;case 6:if(i&&o.stateNode!=null)u_(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(l=Ls(ja.current),Ls(Xi.current),hu(o)){if(d=o.stateNode,l=o.memoizedProps,d[ji]=o,(S=d.nodeValue!==l)&&(i=ai,i!==null))switch(i.tag){case 3:su(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&su(d.nodeValue,l,(i.mode&1)!==0)}S&&(o.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ji]=o,o.stateNode=d}return Pn(o),null;case 13:if(kt(Ht),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Bt&&li!==null&&(o.mode&1)!==0&&(o.flags&128)===0)dg(),Ao(),o.flags|=98560,S=!1;else if(S=hu(o),d!==null&&d.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=o.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[ji]=o}else Ao(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Pn(o),S=!1}else Li!==null&&(_d(Li),Li=null),S=!0;if(!S)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Ht.current&1)!==0?dn===0&&(dn=3):yd())),o.updateQueue!==null&&(o.flags|=4),Pn(o),null);case 4:return Lo(),od(i,o),i===null&&ka(o.stateNode.containerInfo),Pn(o),null;case 10:return If(o.type._context),Pn(o),null;case 17:return Yn(o.type)&&lu(),Pn(o),null;case 19:if(kt(Ht),S=o.memoizedState,S===null)return Pn(o),null;if(d=(o.flags&128)!==0,w=S.rendering,w===null)if(d)Za(S,!1);else{if(dn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(w=xu(i),w!==null){for(o.flags|=128,Za(S,!1),d=w.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=l,l=o.child;l!==null;)S=l,i=d,S.flags&=14680066,w=S.alternate,w===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=w.childLanes,S.lanes=w.lanes,S.child=w.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=w.memoizedProps,S.memoizedState=w.memoizedState,S.updateQueue=w.updateQueue,S.type=w.type,i=w.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ut(Ht,Ht.current&1|2),o.child}i=i.sibling}S.tail!==null&&te()>Uo&&(o.flags|=128,d=!0,Za(S,!1),o.lanes=4194304)}else{if(!d)if(i=xu(w),i!==null){if(o.flags|=128,d=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),Za(S,!0),S.tail===null&&S.tailMode==="hidden"&&!w.alternate&&!Bt)return Pn(o),null}else 2*te()-S.renderingStartTime>Uo&&l!==1073741824&&(o.flags|=128,d=!0,Za(S,!1),o.lanes=4194304);S.isBackwards?(w.sibling=o.child,o.child=w):(l=S.last,l!==null?l.sibling=w:o.child=w,S.last=w)}return S.tail!==null?(o=S.tail,S.rendering=o,S.tail=o.sibling,S.renderingStartTime=te(),o.sibling=null,l=Ht.current,Ut(Ht,d?l&1|2:l&1),o):(Pn(o),null);case 22:case 23:return xd(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(ui&1073741824)!==0&&(Pn(o),o.subtreeFlags&6&&(o.flags|=8192)):Pn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function IS(i,o){switch(Rf(o),o.tag){case 1:return Yn(o.type)&&lu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Lo(),kt(Xn),kt(Rn),Vf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return zf(o),null;case 13:if(kt(Ht),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ao()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return kt(Ht),null;case 4:return Lo(),null;case 10:return If(o.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var Ru=!1,Ln=!1,US=typeof WeakSet=="function"?WeakSet:Set,ze=null;function No(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Zt(i,o,d)}else l.current=null}function ad(i,o,l){try{l()}catch(d){Zt(i,o,d)}}var c_=!1;function FS(i,o){if(xf=ql,i=Hm(),ff(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var m=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var w=0,z=-1,W=-1,ue=0,Ee=0,Te=i,xe=null;t:for(;;){for(var Fe;Te!==l||m!==0&&Te.nodeType!==3||(z=w+m),Te!==S||d!==0&&Te.nodeType!==3||(W=w+d),Te.nodeType===3&&(w+=Te.nodeValue.length),(Fe=Te.firstChild)!==null;)xe=Te,Te=Fe;for(;;){if(Te===i)break t;if(xe===l&&++ue===m&&(z=w),xe===S&&++Ee===d&&(W=w),(Fe=Te.nextSibling)!==null)break;Te=xe,xe=Te.parentNode}Te=Fe}l=z===-1||W===-1?null:{start:z,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(yf={focusedElem:i,selectionRange:l},ql=!1,ze=o;ze!==null;)if(o=ze,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,ze=i;else for(;ze!==null;){o=ze;try{var Ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var je=Ge.memoizedProps,en=Ge.memoizedState,ee=o.stateNode,Y=ee.getSnapshotBeforeUpdate(o.elementType===o.type?je:Di(o.type,je),en);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ie=o.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Zt(o,o.return,Ae)}if(i=o.sibling,i!==null){i.return=o.return,ze=i;break}ze=o.return}return Ge=c_,c_=!1,Ge}function Ka(i,o,l){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var m=d=d.next;do{if((m.tag&i)===i){var S=m.destroy;m.destroy=void 0,S!==void 0&&ad(o,l,S)}m=m.next}while(m!==d)}}function bu(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==o)}}function ld(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function f_(i){var o=i.alternate;o!==null&&(i.alternate=null,f_(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[ji],delete o[Ba],delete o[Tf],delete o[vS],delete o[xS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function d_(i){return i.tag===5||i.tag===3||i.tag===4}function h_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||d_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ud(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=ou));else if(d!==4&&(i=i.child,i!==null))for(ud(i,o,l),i=i.sibling;i!==null;)ud(i,o,l),i=i.sibling}function cd(i,o,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(cd(i,o,l),i=i.sibling;i!==null;)cd(i,o,l),i=i.sibling}var Mn=null,Ni=!1;function Qr(i,o,l){for(l=l.child;l!==null;)p_(i,o,l),l=l.sibling}function p_(i,o,l){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(tt,l)}catch{}switch(l.tag){case 5:Ln||No(l,o);case 6:var d=Mn,m=Ni;Mn=null,Qr(i,o,l),Mn=d,Ni=m,Mn!==null&&(Ni?(i=Mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(Ni?(i=Mn,l=l.stateNode,i.nodeType===8?Mf(i.parentNode,l):i.nodeType===1&&Mf(i,l),ba(i)):Mf(Mn,l.stateNode));break;case 4:d=Mn,m=Ni,Mn=l.stateNode.containerInfo,Ni=!0,Qr(i,o,l),Mn=d,Ni=m;break;case 0:case 11:case 14:case 15:if(!Ln&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){m=d=d.next;do{var S=m,w=S.destroy;S=S.tag,w!==void 0&&((S&2)!==0||(S&4)!==0)&&ad(l,o,w),m=m.next}while(m!==d)}Qr(i,o,l);break;case 1:if(!Ln&&(No(l,o),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(z){Zt(l,o,z)}Qr(i,o,l);break;case 21:Qr(i,o,l);break;case 22:l.mode&1?(Ln=(d=Ln)||l.memoizedState!==null,Qr(i,o,l),Ln=d):Qr(i,o,l);break;default:Qr(i,o,l)}}function m_(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new US),o.forEach(function(d){var m=jS.bind(null,i,d);l.has(d)||(l.add(d),d.then(m,m))})}}function Ii(i,o){var l=o.deletions;if(l!==null)for(var d=0;d<l.length;d++){var m=l[d];try{var S=i,w=o,z=w;e:for(;z!==null;){switch(z.tag){case 5:Mn=z.stateNode,Ni=!1;break e;case 3:Mn=z.stateNode.containerInfo,Ni=!0;break e;case 4:Mn=z.stateNode.containerInfo,Ni=!0;break e}z=z.return}if(Mn===null)throw Error(t(160));p_(S,w,m),Mn=null,Ni=!1;var W=m.alternate;W!==null&&(W.return=null),m.return=null}catch(ue){Zt(m,o,ue)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)g_(o,i),o=o.sibling}function g_(i,o){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ii(o,i),qi(i),d&4){try{Ka(3,i,i.return),bu(3,i)}catch(je){Zt(i,i.return,je)}try{Ka(5,i,i.return)}catch(je){Zt(i,i.return,je)}}break;case 1:Ii(o,i),qi(i),d&512&&l!==null&&No(l,l.return);break;case 5:if(Ii(o,i),qi(i),d&512&&l!==null&&No(l,l.return),i.flags&32){var m=i.stateNode;try{ft(m,"")}catch(je){Zt(i,i.return,je)}}if(d&4&&(m=i.stateNode,m!=null)){var S=i.memoizedProps,w=l!==null?l.memoizedProps:S,z=i.type,W=i.updateQueue;if(i.updateQueue=null,W!==null)try{z==="input"&&S.type==="radio"&&S.name!=null&&mt(m,S),st(z,w);var ue=st(z,S);for(w=0;w<W.length;w+=2){var Ee=W[w],Te=W[w+1];Ee==="style"?nt(m,Te):Ee==="dangerouslySetInnerHTML"?ke(m,Te):Ee==="children"?ft(m,Te):A(m,Ee,Te,ue)}switch(z){case"input":dt(m,S);break;case"textarea":ve(m,S);break;case"select":var xe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!S.multiple;var Fe=S.value;Fe!=null?O(m,!!S.multiple,Fe,!1):xe!==!!S.multiple&&(S.defaultValue!=null?O(m,!!S.multiple,S.defaultValue,!0):O(m,!!S.multiple,S.multiple?[]:"",!1))}m[Ba]=S}catch(je){Zt(i,i.return,je)}}break;case 6:if(Ii(o,i),qi(i),d&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,S=i.memoizedProps;try{m.nodeValue=S}catch(je){Zt(i,i.return,je)}}break;case 3:if(Ii(o,i),qi(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{ba(o.containerInfo)}catch(je){Zt(i,i.return,je)}break;case 4:Ii(o,i),qi(i);break;case 13:Ii(o,i),qi(i),m=i.child,m.flags&8192&&(S=m.memoizedState!==null,m.stateNode.isHidden=S,!S||m.alternate!==null&&m.alternate.memoizedState!==null||(hd=te())),d&4&&m_(i);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,i.mode&1?(Ln=(ue=Ln)||Ee,Ii(o,i),Ln=ue):Ii(o,i),qi(i),d&8192){if(ue=i.memoizedState!==null,(i.stateNode.isHidden=ue)&&!Ee&&(i.mode&1)!==0)for(ze=i,Ee=i.child;Ee!==null;){for(Te=ze=Ee;ze!==null;){switch(xe=ze,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Ka(4,xe,xe.return);break;case 1:No(xe,xe.return);var Ge=xe.stateNode;if(typeof Ge.componentWillUnmount=="function"){d=xe,l=xe.return;try{o=d,Ge.props=o.memoizedProps,Ge.state=o.memoizedState,Ge.componentWillUnmount()}catch(je){Zt(d,l,je)}}break;case 5:No(xe,xe.return);break;case 22:if(xe.memoizedState!==null){x_(Te);continue}}Fe!==null?(Fe.return=xe,ze=Fe):x_(Te)}Ee=Ee.sibling}e:for(Ee=null,Te=i;;){if(Te.tag===5){if(Ee===null){Ee=Te;try{m=Te.stateNode,ue?(S=m.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(z=Te.stateNode,W=Te.memoizedProps.style,w=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=et("display",w))}catch(je){Zt(i,i.return,je)}}}else if(Te.tag===6){if(Ee===null)try{Te.stateNode.nodeValue=ue?"":Te.memoizedProps}catch(je){Zt(i,i.return,je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;Ee===Te&&(Ee=null),Te=Te.return}Ee===Te&&(Ee=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Ii(o,i),qi(i),d&4&&m_(i);break;case 21:break;default:Ii(o,i),qi(i)}}function qi(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(d_(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var m=d.stateNode;d.flags&32&&(ft(m,""),d.flags&=-33);var S=h_(i);cd(i,S,m);break;case 3:case 4:var w=d.stateNode.containerInfo,z=h_(i);ud(i,z,w);break;default:throw Error(t(161))}}catch(W){Zt(i,i.return,W)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function OS(i,o,l){ze=i,__(i)}function __(i,o,l){for(var d=(i.mode&1)!==0;ze!==null;){var m=ze,S=m.child;if(m.tag===22&&d){var w=m.memoizedState!==null||Ru;if(!w){var z=m.alternate,W=z!==null&&z.memoizedState!==null||Ln;z=Ru;var ue=Ln;if(Ru=w,(Ln=W)&&!ue)for(ze=m;ze!==null;)w=ze,W=w.child,w.tag===22&&w.memoizedState!==null?y_(m):W!==null?(W.return=w,ze=W):y_(m);for(;S!==null;)ze=S,__(S),S=S.sibling;ze=m,Ru=z,Ln=ue}v_(i)}else(m.subtreeFlags&8772)!==0&&S!==null?(S.return=m,ze=S):v_(i)}}function v_(i){for(;ze!==null;){var o=ze;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Ln||bu(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!Ln)if(l===null)d.componentDidMount();else{var m=o.elementType===o.type?l.memoizedProps:Di(o.type,l.memoizedProps);d.componentDidUpdate(m,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=o.updateQueue;S!==null&&xg(o,S,d);break;case 3:var w=o.updateQueue;if(w!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}xg(o,w,l)}break;case 5:var z=o.stateNode;if(l===null&&o.flags&4){l=z;var W=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var ue=o.alternate;if(ue!==null){var Ee=ue.memoizedState;if(Ee!==null){var Te=Ee.dehydrated;Te!==null&&ba(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ln||o.flags&512&&ld(o)}catch(xe){Zt(o,o.return,xe)}}if(o===i){ze=null;break}if(l=o.sibling,l!==null){l.return=o.return,ze=l;break}ze=o.return}}function x_(i){for(;ze!==null;){var o=ze;if(o===i){ze=null;break}var l=o.sibling;if(l!==null){l.return=o.return,ze=l;break}ze=o.return}}function y_(i){for(;ze!==null;){var o=ze;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{bu(4,o)}catch(W){Zt(o,l,W)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var m=o.return;try{d.componentDidMount()}catch(W){Zt(o,m,W)}}var S=o.return;try{ld(o)}catch(W){Zt(o,S,W)}break;case 5:var w=o.return;try{ld(o)}catch(W){Zt(o,w,W)}}}catch(W){Zt(o,o.return,W)}if(o===i){ze=null;break}var z=o.sibling;if(z!==null){z.return=o.return,ze=z;break}ze=o.return}}var kS=Math.ceil,Pu=T.ReactCurrentDispatcher,fd=T.ReactCurrentOwner,Mi=T.ReactCurrentBatchConfig,Tt=0,vn=null,rn=null,Tn=0,ui=0,Io=Yr(0),dn=0,Qa=null,Ns=0,Lu=0,dd=0,Ja=null,$n=null,hd=0,Uo=1/0,xr=null,Du=!1,pd=null,Jr=null,Nu=!1,es=null,Iu=0,el=0,md=null,Uu=-1,Fu=0;function Hn(){return(Tt&6)!==0?te():Uu!==-1?Uu:Uu=te()}function ts(i){return(i.mode&1)===0?1:(Tt&2)!==0&&Tn!==0?Tn&-Tn:SS.transition!==null?(Fu===0&&(Fu=Nt()),Fu):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:Em(i.type)),i)}function Ui(i,o,l,d){if(50<el)throw el=0,md=null,Error(t(185));mn(i,l,d),((Tt&2)===0||i!==vn)&&(i===vn&&((Tt&2)===0&&(Lu|=l),dn===4&&ns(i,Tn)),Zn(i,d),l===1&&Tt===0&&(o.mode&1)===0&&(Uo=te()+500,cu&&$r()))}function Zn(i,o){var l=i.callbackNode;Bn(i,o);var d=Cn(i,i===vn?Tn:0);if(d===0)l!==null&&L(l),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(l!=null&&L(l),o===1)i.tag===0?yS(E_.bind(null,i)):ag(E_.bind(null,i)),gS(function(){(Tt&6)===0&&$r()}),l=null;else{switch(Wi(d)){case 1:l=we;break;case 4:l=Pe;break;case 16:l=Ue;break;case 536870912:l=it;break;default:l=Ue}l=P_(l,S_.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function S_(i,o){if(Uu=-1,Fu=0,(Tt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Fo()&&i.callbackNode!==l)return null;var d=Cn(i,i===vn?Tn:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=Ou(i,d);else{o=d;var m=Tt;Tt|=2;var S=T_();(vn!==i||Tn!==o)&&(xr=null,Uo=te()+500,Us(i,o));do try{VS();break}catch(z){M_(i,z)}while(!0);Nf(),Pu.current=S,Tt=m,rn!==null?o=0:(vn=null,Tn=0,o=dn)}if(o!==0){if(o===2&&(m=fr(i),m!==0&&(d=m,o=gd(i,m))),o===1)throw l=Qa,Us(i,0),ns(i,d),Zn(i,te()),l;if(o===6)ns(i,d);else{if(m=i.current.alternate,(d&30)===0&&!zS(m)&&(o=Ou(i,d),o===2&&(S=fr(i),S!==0&&(d=S,o=gd(i,S))),o===1))throw l=Qa,Us(i,0),ns(i,d),Zn(i,te()),l;switch(i.finishedWork=m,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Fs(i,$n,xr);break;case 3:if(ns(i,d),(d&130023424)===d&&(o=hd+500-te(),10<o)){if(Cn(i,0)!==0)break;if(m=i.suspendedLanes,(m&d)!==d){Hn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Ef(Fs.bind(null,i,$n,xr),o);break}Fs(i,$n,xr);break;case 4:if(ns(i,d),(d&4194240)===d)break;for(o=i.eventTimes,m=-1;0<d;){var w=31-lt(d);S=1<<w,w=o[w],w>m&&(m=w),d&=~S}if(d=m,d=te()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*kS(d/1960))-d,10<d){i.timeoutHandle=Ef(Fs.bind(null,i,$n,xr),d);break}Fs(i,$n,xr);break;case 5:Fs(i,$n,xr);break;default:throw Error(t(329))}}}return Zn(i,te()),i.callbackNode===l?S_.bind(null,i):null}function gd(i,o){var l=Ja;return i.current.memoizedState.isDehydrated&&(Us(i,o).flags|=256),i=Ou(i,o),i!==2&&(o=$n,$n=l,o!==null&&_d(o)),i}function _d(i){$n===null?$n=i:$n.push.apply($n,i)}function zS(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var m=l[d],S=m.getSnapshot;m=m.value;try{if(!Pi(S(),m))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ns(i,o){for(o&=~dd,o&=~Lu,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-lt(o),d=1<<l;i[l]=-1,o&=~d}}function E_(i){if((Tt&6)!==0)throw Error(t(327));Fo();var o=Cn(i,0);if((o&1)===0)return Zn(i,te()),null;var l=Ou(i,o);if(i.tag!==0&&l===2){var d=fr(i);d!==0&&(o=d,l=gd(i,d))}if(l===1)throw l=Qa,Us(i,0),ns(i,o),Zn(i,te()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Fs(i,$n,xr),Zn(i,te()),null}function vd(i,o){var l=Tt;Tt|=1;try{return i(o)}finally{Tt=l,Tt===0&&(Uo=te()+500,cu&&$r())}}function Is(i){es!==null&&es.tag===0&&(Tt&6)===0&&Fo();var o=Tt;Tt|=1;var l=Mi.transition,d=Mt;try{if(Mi.transition=null,Mt=1,i)return i()}finally{Mt=d,Mi.transition=l,Tt=o,(Tt&6)===0&&$r()}}function xd(){ui=Io.current,kt(Io)}function Us(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,mS(l)),rn!==null)for(l=rn.return;l!==null;){var d=l;switch(Rf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&lu();break;case 3:Lo(),kt(Xn),kt(Rn),Vf();break;case 5:zf(d);break;case 4:Lo();break;case 13:kt(Ht);break;case 19:kt(Ht);break;case 10:If(d.type._context);break;case 22:case 23:xd()}l=l.return}if(vn=i,rn=i=is(i.current,null),Tn=ui=o,dn=0,Qa=null,dd=Lu=Ns=0,$n=Ja=null,Ps!==null){for(o=0;o<Ps.length;o++)if(l=Ps[o],d=l.interleaved,d!==null){l.interleaved=null;var m=d.next,S=l.pending;if(S!==null){var w=S.next;S.next=m,d.next=w}l.pending=d}Ps=null}return i}function M_(i,o){do{var l=rn;try{if(Nf(),yu.current=Tu,Su){for(var d=Gt.memoizedState;d!==null;){var m=d.queue;m!==null&&(m.pending=null),d=d.next}Su=!1}if(Ds=0,_n=fn=Gt=null,Xa=!1,Ya=0,fd.current=null,l===null||l.return===null){dn=1,Qa=o,rn=null;break}e:{var S=i,w=l.return,z=l,W=o;if(o=Tn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ue=W,Ee=z,Te=Ee.tag;if((Ee.mode&1)===0&&(Te===0||Te===11||Te===15)){var xe=Ee.alternate;xe?(Ee.updateQueue=xe.updateQueue,Ee.memoizedState=xe.memoizedState,Ee.lanes=xe.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Fe=qg(w);if(Fe!==null){Fe.flags&=-257,$g(Fe,w,z,S,o),Fe.mode&1&&Yg(S,ue,o),o=Fe,W=ue;var Ge=o.updateQueue;if(Ge===null){var je=new Set;je.add(W),o.updateQueue=je}else Ge.add(W);break e}else{if((o&1)===0){Yg(S,ue,o),yd();break e}W=Error(t(426))}}else if(Bt&&z.mode&1){var en=qg(w);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),$g(en,w,z,S,o),Lf(Do(W,z));break e}}S=W=Do(W,z),dn!==4&&(dn=2),Ja===null?Ja=[S]:Ja.push(S),S=w;do{switch(S.tag){case 3:S.flags|=65536,o&=-o,S.lanes|=o;var ee=jg(S,W,o);vg(S,ee);break e;case 1:z=W;var Y=S.type,ie=S.stateNode;if((S.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Jr===null||!Jr.has(ie)))){S.flags|=65536,o&=-o,S.lanes|=o;var Ae=Xg(S,z,o);vg(S,Ae);break e}}S=S.return}while(S!==null)}C_(l)}catch(qe){o=qe,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function T_(){var i=Pu.current;return Pu.current=Tu,i===null?Tu:i}function yd(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(Ns&268435455)===0&&(Lu&268435455)===0||ns(vn,Tn)}function Ou(i,o){var l=Tt;Tt|=2;var d=T_();(vn!==i||Tn!==o)&&(xr=null,Us(i,o));do try{BS();break}catch(m){M_(i,m)}while(!0);if(Nf(),Tt=l,Pu.current=d,rn!==null)throw Error(t(261));return vn=null,Tn=0,dn}function BS(){for(;rn!==null;)w_(rn)}function VS(){for(;rn!==null&&!K();)w_(rn)}function w_(i){var o=b_(i.alternate,i,ui);i.memoizedProps=i.pendingProps,o===null?C_(i):rn=o,fd.current=null}function C_(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=NS(l,o,ui),l!==null){rn=l;return}}else{if(l=IS(l,o),l!==null){l.flags&=32767,rn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{dn=6,rn=null;return}}if(o=o.sibling,o!==null){rn=o;return}rn=o=i}while(o!==null);dn===0&&(dn=5)}function Fs(i,o,l){var d=Mt,m=Mi.transition;try{Mi.transition=null,Mt=1,HS(i,o,l,d)}finally{Mi.transition=m,Mt=d}return null}function HS(i,o,l,d){do Fo();while(es!==null);if((Tt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(En(i,S),i===vn&&(rn=vn=null,Tn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Nu||(Nu=!0,P_(Ue,function(){return Fo(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=Mi.transition,Mi.transition=null;var w=Mt;Mt=1;var z=Tt;Tt|=4,fd.current=null,FS(i,l),g_(l,i),lS(yf),ql=!!xf,yf=xf=null,i.current=l,OS(l),le(),Tt=z,Mt=w,Mi.transition=S}else i.current=l;if(Nu&&(Nu=!1,es=i,Iu=m),S=i.pendingLanes,S===0&&(Jr=null),_t(l.stateNode),Zn(i,te()),o!==null)for(d=i.onRecoverableError,l=0;l<o.length;l++)m=o[l],d(m.value,{componentStack:m.stack,digest:m.digest});if(Du)throw Du=!1,i=pd,pd=null,i;return(Iu&1)!==0&&i.tag!==0&&Fo(),S=i.pendingLanes,(S&1)!==0?i===md?el++:(el=0,md=i):el=0,$r(),null}function Fo(){if(es!==null){var i=Wi(Iu),o=Mi.transition,l=Mt;try{if(Mi.transition=null,Mt=16>i?16:i,es===null)var d=!1;else{if(i=es,es=null,Iu=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,ze=i.current;ze!==null;){var S=ze,w=S.child;if((ze.flags&16)!==0){var z=S.deletions;if(z!==null){for(var W=0;W<z.length;W++){var ue=z[W];for(ze=ue;ze!==null;){var Ee=ze;switch(Ee.tag){case 0:case 11:case 15:Ka(8,Ee,S)}var Te=Ee.child;if(Te!==null)Te.return=Ee,ze=Te;else for(;ze!==null;){Ee=ze;var xe=Ee.sibling,Fe=Ee.return;if(f_(Ee),Ee===ue){ze=null;break}if(xe!==null){xe.return=Fe,ze=xe;break}ze=Fe}}}var Ge=S.alternate;if(Ge!==null){var je=Ge.child;if(je!==null){Ge.child=null;do{var en=je.sibling;je.sibling=null,je=en}while(je!==null)}}ze=S}}if((S.subtreeFlags&2064)!==0&&w!==null)w.return=S,ze=w;else e:for(;ze!==null;){if(S=ze,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:Ka(9,S,S.return)}var ee=S.sibling;if(ee!==null){ee.return=S.return,ze=ee;break e}ze=S.return}}var Y=i.current;for(ze=Y;ze!==null;){w=ze;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,ze=ie;else e:for(w=Y;ze!==null;){if(z=ze,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:bu(9,z)}}catch(qe){Zt(z,z.return,qe)}if(z===w){ze=null;break e}var Ae=z.sibling;if(Ae!==null){Ae.return=z.return,ze=Ae;break e}ze=z.return}}if(Tt=m,$r(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(tt,i)}catch{}d=!0}return d}finally{Mt=l,Mi.transition=o}}return!1}function A_(i,o,l){o=Do(l,o),o=jg(i,o,1),i=Kr(i,o,1),o=Hn(),i!==null&&(mn(i,1,o),Zn(i,o))}function Zt(i,o,l){if(i.tag===3)A_(i,i,l);else for(;o!==null;){if(o.tag===3){A_(o,i,l);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Jr===null||!Jr.has(d))){i=Do(l,i),i=Xg(o,i,1),o=Kr(o,i,1),i=Hn(),o!==null&&(mn(o,1,i),Zn(o,i));break}}o=o.return}}function GS(i,o,l){var d=i.pingCache;d!==null&&d.delete(o),o=Hn(),i.pingedLanes|=i.suspendedLanes&l,vn===i&&(Tn&l)===l&&(dn===4||dn===3&&(Tn&130023424)===Tn&&500>te()-hd?Us(i,0):dd|=l),Zn(i,o)}function R_(i,o){o===0&&((i.mode&1)===0?o=1:(o=$t,$t<<=1,($t&130023424)===0&&($t=4194304)));var l=Hn();i=gr(i,o),i!==null&&(mn(i,o,l),Zn(i,l))}function WS(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),R_(i,l)}function jS(i,o){var l=0;switch(i.tag){case 13:var d=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),R_(i,l)}var b_;b_=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||Xn.current)qn=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return qn=!1,DS(i,o,l);qn=(i.flags&131072)!==0}else qn=!1,Bt&&(o.flags&1048576)!==0&&lg(o,du,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Au(i,o),i=o.pendingProps;var m=To(o,Rn.current);Po(o,l),m=Wf(null,o,d,i,m,l);var S=jf();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Yn(d)?(S=!0,uu(o)):S=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Of(o),m.updater=wu,o.stateNode=m,m._reactInternals=o,Kf(o,d,i,l),o=td(null,o,d,!0,S,l)):(o.tag=0,Bt&&S&&Af(o),Vn(null,o,m,l),o=o.child),o;case 16:d=o.elementType;e:{switch(Au(i,o),i=o.pendingProps,m=d._init,d=m(d._payload),o.type=d,m=o.tag=YS(d),i=Di(d,i),m){case 0:o=ed(null,o,d,i,l);break e;case 1:o=t_(null,o,d,i,l);break e;case 11:o=Zg(null,o,d,i,l);break e;case 14:o=Kg(null,o,d,Di(d.type,i),l);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:Di(d,m),ed(i,o,d,m,l);case 1:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:Di(d,m),t_(i,o,d,m,l);case 3:e:{if(n_(o),i===null)throw Error(t(387));d=o.pendingProps,S=o.memoizedState,m=S.element,_g(i,o),vu(o,d,null,l);var w=o.memoizedState;if(d=w.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},o.updateQueue.baseState=S,o.memoizedState=S,o.flags&256){m=Do(Error(t(423)),o),o=i_(i,o,d,l,m);break e}else if(d!==m){m=Do(Error(t(424)),o),o=i_(i,o,d,l,m);break e}else for(li=Xr(o.stateNode.containerInfo.firstChild),ai=o,Bt=!0,Li=null,l=mg(o,null,d,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ao(),d===m){o=vr(i,o,l);break e}Vn(i,o,d,l)}o=o.child}return o;case 5:return yg(o),i===null&&Pf(o),d=o.type,m=o.pendingProps,S=i!==null?i.memoizedProps:null,w=m.children,Sf(d,m)?w=null:S!==null&&Sf(d,S)&&(o.flags|=32),e_(i,o),Vn(i,o,w,l),o.child;case 6:return i===null&&Pf(o),null;case 13:return r_(i,o,l);case 4:return kf(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=Ro(o,null,d,l):Vn(i,o,d,l),o.child;case 11:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:Di(d,m),Zg(i,o,d,m,l);case 7:return Vn(i,o,o.pendingProps,l),o.child;case 8:return Vn(i,o,o.pendingProps.children,l),o.child;case 12:return Vn(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(d=o.type._context,m=o.pendingProps,S=o.memoizedProps,w=m.value,Ut(mu,d._currentValue),d._currentValue=w,S!==null)if(Pi(S.value,w)){if(S.children===m.children&&!Xn.current){o=vr(i,o,l);break e}}else for(S=o.child,S!==null&&(S.return=o);S!==null;){var z=S.dependencies;if(z!==null){w=S.child;for(var W=z.firstContext;W!==null;){if(W.context===d){if(S.tag===1){W=_r(-1,l&-l),W.tag=2;var ue=S.updateQueue;if(ue!==null){ue=ue.shared;var Ee=ue.pending;Ee===null?W.next=W:(W.next=Ee.next,Ee.next=W),ue.pending=W}}S.lanes|=l,W=S.alternate,W!==null&&(W.lanes|=l),Uf(S.return,l,o),z.lanes|=l;break}W=W.next}}else if(S.tag===10)w=S.type===o.type?null:S.child;else if(S.tag===18){if(w=S.return,w===null)throw Error(t(341));w.lanes|=l,z=w.alternate,z!==null&&(z.lanes|=l),Uf(w,l,o),w=S.sibling}else w=S.child;if(w!==null)w.return=S;else for(w=S;w!==null;){if(w===o){w=null;break}if(S=w.sibling,S!==null){S.return=w.return,w=S;break}w=w.return}S=w}Vn(i,o,m.children,l),o=o.child}return o;case 9:return m=o.type,d=o.pendingProps.children,Po(o,l),m=Si(m),d=d(m),o.flags|=1,Vn(i,o,d,l),o.child;case 14:return d=o.type,m=Di(d,o.pendingProps),m=Di(d.type,m),Kg(i,o,d,m,l);case 15:return Qg(i,o,o.type,o.pendingProps,l);case 17:return d=o.type,m=o.pendingProps,m=o.elementType===d?m:Di(d,m),Au(i,o),o.tag=1,Yn(d)?(i=!0,uu(o)):i=!1,Po(o,l),Gg(o,d,m),Kf(o,d,m,l),td(null,o,d,!0,i,l);case 19:return o_(i,o,l);case 22:return Jg(i,o,l)}throw Error(t(156,o.tag))};function P_(i,o){return jl(i,o)}function XS(i,o,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(i,o,l,d){return new XS(i,o,l,d)}function Sd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function YS(i){if(typeof i=="function")return Sd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===J)return 11;if(i===ae)return 14}return 2}function is(i,o){var l=i.alternate;return l===null?(l=Ti(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function ku(i,o,l,d,m,S){var w=2;if(d=i,typeof i=="function")Sd(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case I:return Os(l.children,m,S,o);case k:w=8,m|=8;break;case C:return i=Ti(12,l,o,m|2),i.elementType=C,i.lanes=S,i;case Z:return i=Ti(13,l,o,m),i.elementType=Z,i.lanes=S,i;case fe:return i=Ti(19,l,o,m),i.elementType=fe,i.lanes=S,i;case re:return zu(l,m,S,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:w=10;break e;case B:w=9;break e;case J:w=11;break e;case ae:w=14;break e;case se:w=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Ti(w,l,o,m),o.elementType=i,o.type=d,o.lanes=S,o}function Os(i,o,l,d){return i=Ti(7,i,d,o),i.lanes=l,i}function zu(i,o,l,d){return i=Ti(22,i,d,o),i.elementType=re,i.lanes=l,i.stateNode={isHidden:!1},i}function Ed(i,o,l){return i=Ti(6,i,null,o),i.lanes=l,i}function Md(i,o,l){return o=Ti(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function qS(i,o,l,d,m){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=d,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Td(i,o,l,d,m,S,w,z,W){return i=new qS(i,o,l,z,W),o===1?(o=1,S===!0&&(o|=8)):o=0,S=Ti(3,null,null,o),i.current=S,S.stateNode=i,S.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(S),i}function $S(i,o,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:d==null?null:""+d,children:i,containerInfo:o,implementation:l}}function L_(i){if(!i)return qr;i=i._reactInternals;e:{if(Gi(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Yn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Yn(l))return sg(i,l,o)}return o}function D_(i,o,l,d,m,S,w,z,W){return i=Td(l,d,!0,i,m,S,w,z,W),i.context=L_(null),l=i.current,d=Hn(),m=ts(l),S=_r(d,m),S.callback=o??null,Kr(l,S,m),i.current.lanes=m,mn(i,m,d),Zn(i,d),i}function Bu(i,o,l,d){var m=o.current,S=Hn(),w=ts(m);return l=L_(l),o.context===null?o.context=l:o.pendingContext=l,o=_r(S,w),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=Kr(m,o,w),i!==null&&(Ui(i,m,w,S),_u(i,m,w)),w}function Vu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function N_(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function wd(i,o){N_(i,o),(i=i.alternate)&&N_(i,o)}function ZS(){return null}var I_=typeof reportError=="function"?reportError:function(i){console.error(i)};function Cd(i){this._internalRoot=i}Hu.prototype.render=Cd.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));Bu(i,o,null,null)},Hu.prototype.unmount=Cd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Is(function(){Bu(null,i,null,null)}),o[dr]=null}};function Hu(i){this._internalRoot=i}Hu.prototype.unstable_scheduleHydration=function(i){if(i){var o=_m();i={blockedOn:null,target:i,priority:o};for(var l=0;l<Gr.length&&o!==0&&o<Gr[l].priority;l++);Gr.splice(l,0,i),l===0&&ym(i)}};function Ad(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Gu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function U_(){}function KS(i,o,l,d,m){if(m){if(typeof d=="function"){var S=d;d=function(){var ue=Vu(w);S.call(ue)}}var w=D_(o,d,i,0,null,!1,!1,"",U_);return i._reactRootContainer=w,i[dr]=w.current,ka(i.nodeType===8?i.parentNode:i),Is(),w}for(;m=i.lastChild;)i.removeChild(m);if(typeof d=="function"){var z=d;d=function(){var ue=Vu(W);z.call(ue)}}var W=Td(i,0,!1,null,null,!1,!1,"",U_);return i._reactRootContainer=W,i[dr]=W.current,ka(i.nodeType===8?i.parentNode:i),Is(function(){Bu(o,W,l,d)}),W}function Wu(i,o,l,d,m){var S=l._reactRootContainer;if(S){var w=S;if(typeof m=="function"){var z=m;m=function(){var W=Vu(w);z.call(W)}}Bu(o,w,i,m)}else w=KS(l,o,i,m,d);return Vu(w)}mm=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=gt(o.pendingLanes);l!==0&&(gn(o,l|1),Zn(o,te()),(Tt&6)===0&&(Uo=te()+500,$r()))}break;case 13:Is(function(){var d=gr(i,1);if(d!==null){var m=Hn();Ui(d,i,1,m)}}),wd(i,1)}},Kc=function(i){if(i.tag===13){var o=gr(i,134217728);if(o!==null){var l=Hn();Ui(o,i,134217728,l)}wd(i,134217728)}},gm=function(i){if(i.tag===13){var o=ts(i),l=gr(i,o);if(l!==null){var d=Hn();Ui(l,i,o,d)}wd(i,o)}},_m=function(){return Mt},vm=function(i,o){var l=Mt;try{return Mt=i,o()}finally{Mt=l}},be=function(i,o,l){switch(o){case"input":if(dt(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var d=l[o];if(d!==i&&d.form===i.form){var m=au(d);if(!m)throw Error(t(90));St(d),dt(d,m)}}}break;case"textarea":ve(i,l);break;case"select":o=l.value,o!=null&&O(i,!!l.multiple,o,!1)}},Ft=vd,cn=Is;var QS={usingClientEntryPoint:!1,Events:[Va,Eo,au,De,ot,vd]},tl={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JS={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Gl(i),i===null?null:i.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||ZS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{tt=ju.inject(JS),We=ju}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS,Kn.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(o))throw Error(t(200));return $S(i,o,null,l)},Kn.createRoot=function(i,o){if(!Ad(i))throw Error(t(299));var l=!1,d="",m=I_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Td(i,1,!1,null,null,l,!1,d,m),i[dr]=o.current,ka(i.nodeType===8?i.parentNode:i),new Cd(o)},Kn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Gl(o),i=i===null?null:i.stateNode,i},Kn.flushSync=function(i){return Is(i)},Kn.hydrate=function(i,o,l){if(!Gu(o))throw Error(t(200));return Wu(null,i,o,!0,l)},Kn.hydrateRoot=function(i,o,l){if(!Ad(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,m=!1,S="",w=I_;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),o=D_(o,null,i,1,l??null,m,!1,S,w),i[dr]=o.current,ka(i),d)for(i=0;i<d.length;i++)l=d[i],m=l._getVersion,m=m(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,m]:o.mutableSourceEagerHydrationData.push(l,m);return new Hu(o)},Kn.render=function(i,o,l){if(!Gu(o))throw Error(t(200));return Wu(null,i,o,!1,l)},Kn.unmountComponentAtNode=function(i){if(!Gu(i))throw Error(t(40));return i._reactRootContainer?(Is(function(){Wu(null,null,i,!1,function(){i._reactRootContainer=null,i[dr]=null})}),!0):!1},Kn.unstable_batchedUpdates=vd,Kn.unstable_renderSubtreeIntoContainer=function(i,o,l,d){if(!Gu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Wu(i,o,l,!1,d)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var G_;function a1(){if(G_)return Pd.exports;G_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Pd.exports=o1(),Pd.exports}var W_;function l1(){if(W_)return Xu;W_=1;var r=a1();return Xu.createRoot=r.createRoot,Xu.hydrateRoot=r.hydrateRoot,Xu}var u1=l1();const Mv=X.createContext(),c1=({children:r})=>{const[e,t]=X.useState(!0),[n,s]=X.useState(!0);return X.useEffect(()=>{const a=()=>{t(!1)};return document.readyState==="complete"?a():window.addEventListener("load",a),()=>{window.removeEventListener("load",a)}},[]),D.jsx(Mv.Provider,{value:{isLoading:e,setIsLoading:t,isPreloaderVisible:n,setIsPreloaderVisible:s},children:r})},Tv=X.createContext(),f1=({children:r})=>{const[e,t]=X.useState(!1),[n,s]=X.useState(0),[a,u]=X.useState(null),[c,f]=X.useState(!1),h=X.useRef(null),p=X.useRef(null),g=X.useCallback(({opacity:y=1,reason:M=null,onVisible:E=null}={})=>{s(y),u(M),t(!0),h.current=E},[]),_=X.useCallback(()=>{s(0),setTimeout(()=>{t(!1),u(null)},500)},[]);return X.useEffect(()=>{const y=p.current;if(!y)return;const M=E=>{E.propertyName==="opacity"&&h.current&&(h.current(),h.current=null)};return y.addEventListener("transitionend",M),()=>{y.removeEventListener("transitionend",M)}},[]),D.jsx(Tv.Provider,{value:{visible:e,opacity:n,reason:a,showOverlay:g,hideOverlay:_,overlayRef:p,navOpen:c,setNavOpen:f},children:r})},Al=()=>X.useContext(Tv),wv=X.createContext(),d1=({children:r})=>{const e=X.useRef(null),t=s=>{e.current=s},n=()=>{e.current&&(e.current(),e.current=null)};return D.jsx(wv.Provider,{value:{registerPageReady:t,notifyPageReady:n},children:r})},Rl=()=>X.useContext(wv);var il={},j_;function h1(){if(j_)return il;j_=1,Object.defineProperty(il,"__esModule",{value:!0}),il.parse=u,il.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,n=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,a=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function u(_,y){const M=new a,E=_.length;if(E<2)return M;const x=(y==null?void 0:y.decode)||p;let v=0;do{const b=_.indexOf("=",v);if(b===-1)break;const A=_.indexOf(";",v),T=A===-1?E:A;if(b>T){v=_.lastIndexOf(";",b-1)+1;continue}const U=c(_,v,b),F=f(_,b,U),I=_.slice(U,F);if(M[I]===void 0){let k=c(_,b+1,T),C=f(_,T,k);const R=x(_.slice(k,C));M[I]=R}v=T+1}while(v<E);return M}function c(_,y,M){do{const E=_.charCodeAt(y);if(E!==32&&E!==9)return y}while(++y<M);return M}function f(_,y,M){for(;y>M;){const E=_.charCodeAt(--y);if(E!==32&&E!==9)return y+1}return M}function h(_,y,M){const E=(M==null?void 0:M.encode)||encodeURIComponent;if(!r.test(_))throw new TypeError(`argument name is invalid: ${_}`);const x=E(y);if(!e.test(x))throw new TypeError(`argument val is invalid: ${y}`);let v=_+"="+x;if(!M)return v;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);v+="; Max-Age="+M.maxAge}if(M.domain){if(!t.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);v+="; Domain="+M.domain}if(M.path){if(!n.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);v+="; Path="+M.path}if(M.expires){if(!g(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);v+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(v+="; HttpOnly"),M.secure&&(v+="; Secure"),M.partitioned&&(v+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return v}function p(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function g(_){return s.call(_)==="[object Date]"}return il}h1();var X_="popstate";function p1(r={}){function e(n,s){let{pathname:a,search:u,hash:c}=n.location;return wh("",{pathname:a,search:u,hash:c},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(n,s){return typeof s=="string"?s:vl(s)}return g1(e,t,null,r)}function Yt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function rr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m1(){return Math.random().toString(36).substring(2,10)}function Y_(r,e){return{usr:r.state,key:r.key,idx:e}}function wh(r,e,t=null,n){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ya(e):e,state:t,key:e&&e.key||n||m1()}}function vl({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ya(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let n=r.indexOf("?");n>=0&&(e.search=r.substring(n),r=r.substring(0,n)),r&&(e.pathname=r)}return e}function g1(r,e,t,n={}){let{window:s=document.defaultView,v5Compat:a=!1}=n,u=s.history,c="POP",f=null,h=p();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function p(){return(u.state||{idx:null}).idx}function g(){c="POP";let x=p(),v=x==null?null:x-h;h=x,f&&f({action:c,location:E.location,delta:v})}function _(x,v){c="PUSH";let b=wh(E.location,x,v);h=p()+1;let A=Y_(b,h),T=E.createHref(b);try{u.pushState(A,"",T)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;s.location.assign(T)}a&&f&&f({action:c,location:E.location,delta:1})}function y(x,v){c="REPLACE";let b=wh(E.location,x,v);h=p();let A=Y_(b,h),T=E.createHref(b);u.replaceState(A,"",T),a&&f&&f({action:c,location:E.location,delta:0})}function M(x){let v=s.location.origin!=="null"?s.location.origin:s.location.href,b=typeof x=="string"?x:vl(x);return b=b.replace(/ $/,"%20"),Yt(v,`No window.location.(origin|href) available to create URL for href: ${b}`),new URL(b,v)}let E={get action(){return c},get location(){return r(s,u)},listen(x){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(X_,g),f=x,()=>{s.removeEventListener(X_,g),f=null}},createHref(x){return e(s,x)},createURL:M,encodeLocation(x){let v=M(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:_,replace:y,go(x){return u.go(x)}};return E}function Cv(r,e,t="/"){return _1(r,e,t,!1)}function _1(r,e,t,n){let s=typeof e=="string"?ya(e):e,a=Dr(s.pathname||"/",t);if(a==null)return null;let u=Av(r);v1(u);let c=null;for(let f=0;c==null&&f<u.length;++f){let h=b1(a);c=A1(u[f],h,n)}return c}function Av(r,e=[],t=[],n=""){let s=(a,u,c)=>{let f={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};f.relativePath.startsWith("/")&&(Yt(f.relativePath.startsWith(n),`Absolute route path "${f.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(n.length));let h=Pr([n,f.relativePath]),p=t.concat(f);a.children&&a.children.length>0&&(Yt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Av(a.children,e,p,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:w1(h,a.index),routesMeta:p})};return r.forEach((a,u)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))s(a,u);else for(let f of Rv(a.path))s(a,u,f)}),e}function Rv(r){let e=r.split("/");if(e.length===0)return[];let[t,...n]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(n.length===0)return s?[a,""]:[a];let u=Rv(n.join("/")),c=[];return c.push(...u.map(f=>f===""?a:[a,f].join("/"))),s&&c.push(...u),c.map(f=>r.startsWith("/")&&f===""?"/":f)}function v1(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:C1(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}var x1=/^:[\w-]+$/,y1=3,S1=2,E1=1,M1=10,T1=-2,q_=r=>r==="*";function w1(r,e){let t=r.split("/"),n=t.length;return t.some(q_)&&(n+=T1),e&&(n+=S1),t.filter(s=>!q_(s)).reduce((s,a)=>s+(x1.test(a)?y1:a===""?E1:M1),n)}function C1(r,e){return r.length===e.length&&r.slice(0,-1).every((n,s)=>n===e[s])?r[r.length-1]-e[e.length-1]:0}function A1(r,e,t=!1){let{routesMeta:n}=r,s={},a="/",u=[];for(let c=0;c<n.length;++c){let f=n[c],h=c===n.length-1,p=a==="/"?e:e.slice(a.length)||"/",g=bc({path:f.relativePath,caseSensitive:f.caseSensitive,end:h},p),_=f.route;if(!g&&h&&t&&!n[n.length-1].route.index&&(g=bc({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!g)return null;Object.assign(s,g.params),u.push({params:s,pathname:Pr([a,g.pathname]),pathnameBase:N1(Pr([a,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(a=Pr([a,g.pathnameBase]))}return u}function bc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,n]=R1(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let a=s[0],u=a.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:n.reduce((h,{paramName:p,isOptional:g},_)=>{if(p==="*"){let M=c[_]||"";u=a.slice(0,a.length-M.length).replace(/(.)\/+$/,"$1")}const y=c[_];return g&&!y?h[p]=void 0:h[p]=(y||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:u,pattern:r}}function R1(r,e=!1,t=!0){rr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let n=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,c,f)=>(n.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(n.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),n]}function b1(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Dr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=r.charAt(t);return n&&n!=="/"?null:r.slice(t)||"/"}function P1(r,e="/"){let{pathname:t,search:n="",hash:s=""}=typeof r=="string"?ya(r):r;return{pathname:t?t.startsWith("/")?t:L1(t,e):e,search:I1(n),hash:U1(s)}}function L1(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Nd(r,e,t,n){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function D1(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bv(r){let e=D1(r);return e.map((t,n)=>n===e.length-1?t.pathname:t.pathnameBase)}function Pv(r,e,t,n=!1){let s;typeof r=="string"?s=ya(r):(s={...r},Yt(!s.pathname||!s.pathname.includes("?"),Nd("?","pathname","search",s)),Yt(!s.pathname||!s.pathname.includes("#"),Nd("#","pathname","hash",s)),Yt(!s.search||!s.search.includes("#"),Nd("#","search","hash",s)));let a=r===""||s.pathname==="",u=a?"/":s.pathname,c;if(u==null)c=t;else{let g=e.length-1;if(!n&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),g-=1;s.pathname=_.join("/")}c=g>=0?e[g]:"/"}let f=P1(s,c),h=u&&u!=="/"&&u.endsWith("/"),p=(a||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(h||p)&&(f.pathname+="/"),f}var Pr=r=>r.join("/").replace(/\/\/+/g,"/"),N1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),I1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,U1=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function F1(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Lv=["POST","PUT","PATCH","DELETE"];new Set(Lv);var O1=["GET",...Lv];new Set(O1);var Sa=X.createContext(null);Sa.displayName="DataRouter";var Vc=X.createContext(null);Vc.displayName="DataRouterState";var Dv=X.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var k1=X.createContext(new Map);k1.displayName="Fetchers";var z1=X.createContext(null);z1.displayName="Await";var ar=X.createContext(null);ar.displayName="Navigation";var bl=X.createContext(null);bl.displayName="Location";var Fr=X.createContext({outlet:null,matches:[],isDataRoute:!1});Fr.displayName="Route";var Lp=X.createContext(null);Lp.displayName="RouteError";function B1(r,{relative:e}={}){Yt(Pl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:n}=X.useContext(ar),{hash:s,pathname:a,search:u}=Ll(r,{relative:e}),c=a;return t!=="/"&&(c=a==="/"?t:Pr([t,a])),n.createHref({pathname:c,search:u,hash:s})}function Pl(){return X.useContext(bl)!=null}function lr(){return Yt(Pl(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(bl).location}var Nv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(r){X.useContext(ar).static||X.useLayoutEffect(r)}function Dp(){let{isDataRoute:r}=X.useContext(Fr);return r?J1():V1()}function V1(){Yt(Pl(),"useNavigate() may be used only in the context of a <Router> component.");let r=X.useContext(Sa),{basename:e,navigator:t}=X.useContext(ar),{matches:n}=X.useContext(Fr),{pathname:s}=lr(),a=JSON.stringify(bv(n)),u=X.useRef(!1);return Iv(()=>{u.current=!0}),X.useCallback((f,h={})=>{if(rr(u.current,Nv),!u.current)return;if(typeof f=="number"){t.go(f);return}let p=Pv(f,JSON.parse(a),s,h.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Pr([e,p.pathname])),(h.replace?t.replace:t.push)(p,h.state,h)},[e,t,a,s,r])}X.createContext(null);function Ll(r,{relative:e}={}){let{matches:t}=X.useContext(Fr),{pathname:n}=lr(),s=JSON.stringify(bv(t));return X.useMemo(()=>Pv(r,JSON.parse(s),n,e==="path"),[r,s,n,e])}function H1(r,e){return Uv(r,e)}function Uv(r,e,t,n){var b;Yt(Pl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:a}=X.useContext(ar),{matches:u}=X.useContext(Fr),c=u[u.length-1],f=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let A=g&&g.path||"";Fv(h,!g||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let _=lr(),y;if(e){let A=typeof e=="string"?ya(e):e;Yt(p==="/"||((b=A.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${A.pathname}" was given in the \`location\` prop.`),y=A}else y=_;let M=y.pathname||"/",E=M;if(p!=="/"){let A=p.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(A.length).join("/")}let x=!a&&t&&t.matches&&t.matches.length>0?t.matches:Cv(r,{pathname:E});rr(g||x!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),rr(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=Y1(x&&x.map(A=>Object.assign({},A,{params:Object.assign({},f,A.params),pathname:Pr([p,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:Pr([p,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),u,t,n);return e&&v?X.createElement(bl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},v):v}function G1(){let r=Q1(),e=F1(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,n="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:a},"ErrorBoundary")," or"," ",X.createElement("code",{style:a},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),t?X.createElement("pre",{style:s},t):null,u)}var W1=X.createElement(G1,null),j1=class extends X.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?X.createElement(Fr.Provider,{value:this.props.routeContext},X.createElement(Lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function X1({routeContext:r,match:e,children:t}){let n=X.useContext(Sa);return n&&n.static&&n.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=e.route.id),X.createElement(Fr.Provider,{value:r},t)}function Y1(r,e=[],t=null,n=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let s=r,a=t==null?void 0:t.errors;if(a!=null){let f=s.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);Yt(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,c=-1;if(t)for(let f=0;f<s.length;f++){let h=s[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:p,errors:g}=t,_=h.route.loader&&!p.hasOwnProperty(h.route.id)&&(!g||g[h.route.id]===void 0);if(h.route.lazy||_){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((f,h,p)=>{let g,_=!1,y=null,M=null;t&&(g=a&&h.route.id?a[h.route.id]:void 0,y=h.route.errorElement||W1,u&&(c<0&&p===0?(Fv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,M=null):c===p&&(_=!0,M=h.route.hydrateFallbackElement||null)));let E=e.concat(s.slice(0,p+1)),x=()=>{let v;return g?v=y:_?v=M:h.route.Component?v=X.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=f,X.createElement(X1,{match:h,routeContext:{outlet:f,matches:E,isDataRoute:t!=null},children:v})};return t&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?X.createElement(j1,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:x(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):x()},null)}function Np(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function q1(r){let e=X.useContext(Sa);return Yt(e,Np(r)),e}function $1(r){let e=X.useContext(Vc);return Yt(e,Np(r)),e}function Z1(r){let e=X.useContext(Fr);return Yt(e,Np(r)),e}function Ip(r){let e=Z1(r),t=e.matches[e.matches.length-1];return Yt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function K1(){return Ip("useRouteId")}function Q1(){var n;let r=X.useContext(Lp),e=$1("useRouteError"),t=Ip("useRouteError");return r!==void 0?r:(n=e.errors)==null?void 0:n[t]}function J1(){let{router:r}=q1("useNavigate"),e=Ip("useNavigate"),t=X.useRef(!1);return Iv(()=>{t.current=!0}),X.useCallback(async(s,a={})=>{rr(t.current,Nv),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...a}))},[r,e])}var $_={};function Fv(r,e,t){!e&&!$_[r]&&($_[r]=!0,rr(!1,t))}X.memo(eE);function eE({routes:r,future:e,state:t}){return Uv(r,void 0,t,e)}function Xs(r){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function tE({basename:r="/",children:e=null,location:t,navigationType:n="POP",navigator:s,static:a=!1}){Yt(!Pl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=r.replace(/^\/*/,"/"),c=X.useMemo(()=>({basename:u,navigator:s,static:a,future:{}}),[u,s,a]);typeof t=="string"&&(t=ya(t));let{pathname:f="/",search:h="",hash:p="",state:g=null,key:_="default"}=t,y=X.useMemo(()=>{let M=Dr(f,u);return M==null?null:{location:{pathname:M,search:h,hash:p,state:g,key:_},navigationType:n}},[u,f,h,p,g,_,n]);return rr(y!=null,`<Router basename="${u}"> is not able to match the URL "${f}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:X.createElement(ar.Provider,{value:c},X.createElement(bl.Provider,{children:e,value:y}))}function nE({children:r,location:e}){return H1(Ch(r),e)}function Ch(r,e=[]){let t=[];return X.Children.forEach(r,(n,s)=>{if(!X.isValidElement(n))return;let a=[...e,s];if(n.type===X.Fragment){t.push.apply(t,Ch(n.props.children,a));return}Yt(n.type===Xs,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!n.props.index||!n.props.children,"An index route cannot have child routes.");let u={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=Ch(n.props.children,a)),t.push(u)}),t}var _c="get",vc="application/x-www-form-urlencoded";function Hc(r){return r!=null&&typeof r.tagName=="string"}function iE(r){return Hc(r)&&r.tagName.toLowerCase()==="button"}function rE(r){return Hc(r)&&r.tagName.toLowerCase()==="form"}function sE(r){return Hc(r)&&r.tagName.toLowerCase()==="input"}function oE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function aE(r,e){return r.button===0&&(!e||e==="_self")&&!oE(r)}var Yu=null;function lE(){if(Yu===null)try{new FormData(document.createElement("form"),0),Yu=!1}catch{Yu=!0}return Yu}var uE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Id(r){return r!=null&&!uE.has(r)?(rr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${vc}"`),null):r}function cE(r,e){let t,n,s,a,u;if(rE(r)){let c=r.getAttribute("action");n=c?Dr(c,e):null,t=r.getAttribute("method")||_c,s=Id(r.getAttribute("enctype"))||vc,a=new FormData(r)}else if(iE(r)||sE(r)&&(r.type==="submit"||r.type==="image")){let c=r.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=r.getAttribute("formaction")||c.getAttribute("action");if(n=f?Dr(f,e):null,t=r.getAttribute("formmethod")||c.getAttribute("method")||_c,s=Id(r.getAttribute("formenctype"))||Id(c.getAttribute("enctype"))||vc,a=new FormData(c,r),!lE()){let{name:h,type:p,value:g}=r;if(p==="image"){let _=h?`${h}.`:"";a.append(`${_}x`,"0"),a.append(`${_}y`,"0")}else h&&a.append(h,g)}}else{if(Hc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=_c,n=null,s=vc,u=r}return a&&s==="text/plain"&&(u=a,a=void 0),{action:n,method:t.toLowerCase(),encType:s,formData:a,body:u}}function Up(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function fE(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function hE(r,e,t){let n=await Promise.all(r.map(async s=>{let a=e.routes[s.route.id];if(a){let u=await fE(a,t);return u.links?u.links():[]}return[]}));return _E(n.flat(1).filter(dE).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Z_(r,e,t,n,s,a){let u=(f,h)=>t[h]?f.route.id!==t[h].route.id:!0,c=(f,h)=>{var p;return t[h].pathname!==f.pathname||((p=t[h].route.path)==null?void 0:p.endsWith("*"))&&t[h].params["*"]!==f.params["*"]};return a==="assets"?e.filter((f,h)=>u(f,h)||c(f,h)):a==="data"?e.filter((f,h)=>{var g;let p=n.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(u(f,h)||c(f,h))return!0;if(f.route.shouldRevalidate){let _=f.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(r,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function pE(r,e,{includeHydrateFallback:t}={}){return mE(r.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let a=[s.module];return s.clientActionModule&&(a=a.concat(s.clientActionModule)),s.clientLoaderModule&&(a=a.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(a=a.concat(s.hydrateFallbackModule)),s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function mE(r){return[...new Set(r)]}function gE(r){let e={},t=Object.keys(r).sort();for(let n of t)e[n]=r[n];return e}function _E(r,e){let t=new Set;return new Set(e),r.reduce((n,s)=>{let a=JSON.stringify(gE(s));return t.has(a)||(t.add(a),n.push({key:a,link:s})),n},[])}var vE=new Set([100,101,204,205]);function xE(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&Dr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Ov(){let r=X.useContext(Sa);return Up(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function yE(){let r=X.useContext(Vc);return Up(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Fp=X.createContext(void 0);Fp.displayName="FrameworkContext";function kv(){let r=X.useContext(Fp);return Up(r,"You must render this element inside a <HydratedRouter> element"),r}function SE(r,e){let t=X.useContext(Fp),[n,s]=X.useState(!1),[a,u]=X.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:h,onMouseLeave:p,onTouchStart:g}=e,_=X.useRef(null);X.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let E=v=>{v.forEach(b=>{u(b.isIntersecting)})},x=new IntersectionObserver(E,{threshold:.5});return _.current&&x.observe(_.current),()=>{x.disconnect()}}},[r]),X.useEffect(()=>{if(n){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[n]);let y=()=>{s(!0)},M=()=>{s(!1),u(!1)};return t?r!=="intent"?[a,_,{}]:[a,_,{onFocus:rl(c,y),onBlur:rl(f,M),onMouseEnter:rl(h,y),onMouseLeave:rl(p,M),onTouchStart:rl(g,y)}]:[!1,_,{}]}function rl(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function EE({page:r,...e}){let{router:t}=Ov(),n=X.useMemo(()=>Cv(t.routes,r,t.basename),[t.routes,r,t.basename]);return n?X.createElement(TE,{page:r,matches:n,...e}):null}function ME(r){let{manifest:e,routeModules:t}=kv(),[n,s]=X.useState([]);return X.useEffect(()=>{let a=!1;return hE(r,e,t).then(u=>{a||s(u)}),()=>{a=!0}},[r,e,t]),n}function TE({page:r,matches:e,...t}){let n=lr(),{manifest:s,routeModules:a}=kv(),{basename:u}=Ov(),{loaderData:c,matches:f}=yE(),h=X.useMemo(()=>Z_(r,e,f,s,n,"data"),[r,e,f,s,n]),p=X.useMemo(()=>Z_(r,e,f,s,n,"assets"),[r,e,f,s,n]),g=X.useMemo(()=>{if(r===n.pathname+n.search+n.hash)return[];let M=new Set,E=!1;if(e.forEach(v=>{var A;let b=s.routes[v.route.id];!b||!b.hasLoader||(!h.some(T=>T.route.id===v.route.id)&&v.route.id in c&&((A=a[v.route.id])!=null&&A.shouldRevalidate)||b.hasClientLoader?E=!0:M.add(v.route.id))}),M.size===0)return[];let x=xE(r,u);return E&&M.size>0&&x.searchParams.set("_routes",e.filter(v=>M.has(v.route.id)).map(v=>v.route.id).join(",")),[x.pathname+x.search]},[u,c,n,s,h,e,r,a]),_=X.useMemo(()=>pE(p,s),[p,s]),y=ME(p);return X.createElement(X.Fragment,null,g.map(M=>X.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),_.map(M=>X.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),y.map(({key:M,link:E})=>X.createElement("link",{key:M,...E})))}function wE(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var zv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zv&&(window.__reactRouterVersion="7.5.3")}catch{}function CE({basename:r,children:e,window:t}){let n=X.useRef();n.current==null&&(n.current=p1({window:t,v5Compat:!0}));let s=n.current,[a,u]=X.useState({action:s.action,location:s.location}),c=X.useCallback(f=>{X.startTransition(()=>u(f))},[u]);return X.useLayoutEffect(()=>s.listen(c),[s,c]),X.createElement(tE,{basename:r,children:e,location:a.location,navigationType:a.action,navigator:s})}var Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Op=X.forwardRef(function({onClick:e,discover:t="render",prefetch:n="none",relative:s,reloadDocument:a,replace:u,state:c,target:f,to:h,preventScrollReset:p,viewTransition:g,..._},y){let{basename:M}=X.useContext(ar),E=typeof h=="string"&&Bv.test(h),x,v=!1;if(typeof h=="string"&&E&&(x=h,zv))try{let C=new URL(window.location.href),R=h.startsWith("//")?new URL(C.protocol+h):new URL(h),B=Dr(R.pathname,M);R.origin===C.origin&&B!=null?h=B+R.search+R.hash:v=!0}catch{rr(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=B1(h,{relative:s}),[A,T,U]=SE(n,_),F=PE(h,{replace:u,state:c,target:f,preventScrollReset:p,relative:s,viewTransition:g});function I(C){e&&e(C),C.defaultPrevented||F(C)}let k=X.createElement("a",{..._,...U,href:x||b,onClick:v||a?e:I,ref:wE(y,T),target:f,"data-discover":!E&&t==="render"?"true":void 0});return A&&!E?X.createElement(X.Fragment,null,k,X.createElement(EE,{page:b})):k});Op.displayName="Link";var AE=X.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:n="",end:s=!1,style:a,to:u,viewTransition:c,children:f,...h},p){let g=Ll(u,{relative:h.relative}),_=lr(),y=X.useContext(Vc),{navigator:M,basename:E}=X.useContext(ar),x=y!=null&&UE(g)&&c===!0,v=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,b=_.pathname,A=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(b=b.toLowerCase(),A=A?A.toLowerCase():null,v=v.toLowerCase()),A&&E&&(A=Dr(A,E)||A);const T=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let U=b===v||!s&&b.startsWith(v)&&b.charAt(T)==="/",F=A!=null&&(A===v||!s&&A.startsWith(v)&&A.charAt(v.length)==="/"),I={isActive:U,isPending:F,isTransitioning:x},k=U?e:void 0,C;typeof n=="function"?C=n(I):C=[n,U?"active":null,F?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(I):a;return X.createElement(Op,{...h,"aria-current":k,className:C,ref:p,style:R,to:u,viewTransition:c},typeof f=="function"?f(I):f)});AE.displayName="NavLink";var RE=X.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:n,replace:s,state:a,method:u=_c,action:c,onSubmit:f,relative:h,preventScrollReset:p,viewTransition:g,..._},y)=>{let M=NE(),E=IE(c,{relative:h}),x=u.toLowerCase()==="get"?"get":"post",v=typeof c=="string"&&Bv.test(c),b=A=>{if(f&&f(A),A.defaultPrevented)return;A.preventDefault();let T=A.nativeEvent.submitter,U=(T==null?void 0:T.getAttribute("formmethod"))||u;M(T||A.currentTarget,{fetcherKey:e,method:U,navigate:t,replace:s,state:a,relative:h,preventScrollReset:p,viewTransition:g})};return X.createElement("form",{ref:y,method:x,action:E,onSubmit:n?f:b,..._,"data-discover":!v&&r==="render"?"true":void 0})});RE.displayName="Form";function bE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vv(r){let e=X.useContext(Sa);return Yt(e,bE(r)),e}function PE(r,{target:e,replace:t,state:n,preventScrollReset:s,relative:a,viewTransition:u}={}){let c=Dp(),f=lr(),h=Ll(r,{relative:a});return X.useCallback(p=>{if(aE(p,e)){p.preventDefault();let g=t!==void 0?t:vl(f)===vl(h);c(r,{replace:g,state:n,preventScrollReset:s,relative:a,viewTransition:u})}},[f,c,h,t,n,e,r,s,a,u])}var LE=0,DE=()=>`__${String(++LE)}__`;function NE(){let{router:r}=Vv("useSubmit"),{basename:e}=X.useContext(ar),t=K1();return X.useCallback(async(n,s={})=>{let{action:a,method:u,encType:c,formData:f,body:h}=cE(n,e);if(s.navigate===!1){let p=s.fetcherKey||DE();await r.fetch(p,t,s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:h,formMethod:s.method||u,formEncType:s.encType||c,flushSync:s.flushSync})}else await r.navigate(s.action||a,{preventScrollReset:s.preventScrollReset,formData:f,body:h,formMethod:s.method||u,formEncType:s.encType||c,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function IE(r,{relative:e}={}){let{basename:t}=X.useContext(ar),n=X.useContext(Fr);Yt(n,"useFormAction must be used inside a RouteContext");let[s]=n.matches.slice(-1),a={...Ll(r||".",{relative:e})},u=lr();if(r==null){a.search=u.search;let c=new URLSearchParams(a.search),f=c.getAll("index");if(f.some(p=>p==="")){c.delete("index"),f.filter(g=>g).forEach(g=>c.append("index",g));let p=c.toString();a.search=p?`?${p}`:""}}return(!r||r===".")&&s.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Pr([t,a.pathname])),vl(a)}function UE(r,e={}){let t=X.useContext(Dv);Yt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Vv("useViewTransitionState"),s=Ll(r,{relative:e.relative});if(!t.isTransitioning)return!1;let a=Dr(t.currentLocation.pathname,n)||t.currentLocation.pathname,u=Dr(t.nextLocation.pathname,n)||t.nextLocation.pathname;return bc(s.pathname,u)!=null||bc(s.pathname,a)!=null}new TextEncoder;[...vE];const Gc=r=>{X.useEffect(()=>{const e=document.querySelectorAll("img");let t=0;const n=()=>{t++,t===e.length&&r()};return e.length===0?r():e.forEach(s=>{s.complete?n():(s.addEventListener("load",n),s.addEventListener("error",n))}),()=>{e.forEach(s=>{s.removeEventListener("load",n),s.removeEventListener("error",n)})}},[r])},Wc=({children:r})=>D.jsx("div",{className:"container",children:r});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="174",FE=0,K_=1,OE=2,Hv=1,kE=2,wr=3,xs=0,Jn=1,Ki=2,ms=0,ta=1,Ah=2,Q_=3,J_=4,zE=5,Ks=100,BE=101,VE=102,HE=103,GE=104,WE=200,jE=201,XE=202,YE=203,Rh=204,bh=205,qE=206,$E=207,ZE=208,KE=209,QE=210,JE=211,eM=212,tM=213,nM=214,Ph=0,Lh=1,Dh=2,aa=3,Nh=4,Ih=5,Uh=6,Fh=7,zp=0,iM=1,rM=2,gs=0,sM=1,oM=2,aM=3,lM=4,uM=5,cM=6,fM=7,Gv=300,la=301,ua=302,Oh=303,kh=304,jc=306,zh=1e3,Js=1001,Bh=1002,Hi=1003,dM=1004,qu=1005,Ji=1006,Ud=1007,eo=1008,Nr=1009,Wv=1010,jv=1011,xl=1012,Bp=1013,ao=1014,Rr=1015,Dl=1016,Vp=1017,Hp=1018,ca=1020,Xv=35902,Yv=1021,qv=1022,Bi=1023,$v=1024,Zv=1025,na=1026,fa=1027,Kv=1028,Gp=1029,Qv=1030,Wp=1031,jp=1033,xc=33776,yc=33777,Sc=33778,Ec=33779,Vh=35840,Hh=35841,Gh=35842,Wh=35843,jh=36196,Xh=37492,Yh=37496,qh=37808,$h=37809,Zh=37810,Kh=37811,Qh=37812,Jh=37813,ep=37814,tp=37815,np=37816,ip=37817,rp=37818,sp=37819,op=37820,ap=37821,Mc=36492,lp=36494,up=36495,Jv=36283,cp=36284,fp=36285,dp=36286,hM=3200,pM=3201,ex=0,mM=1,fs="",Ai="srgb",da="srgb-linear",Pc="linear",Lt="srgb",Oo=7680,e0=519,gM=512,_M=513,vM=514,tx=515,xM=516,yM=517,SM=518,EM=519,t0=35044,n0="300 es",br=2e3,Lc=2001;class Ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,u=s.length;a<u;a++)s[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fd=Math.PI/180,hp=180/Math.PI;function Nl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function vt(r,e,t){return Math.max(e,Math.min(t,r))}function MM(r,e){return(r%e+e)%e}function Od(r,e,t){return(1-t)*r+t*e}function sl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*s+e.x,this.y=a*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,n,s,a,u,c,f,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,f,h)}set(e,t,n,s,a,u,c,f,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[3],f=n[6],h=n[1],p=n[4],g=n[7],_=n[2],y=n[5],M=n[8],E=s[0],x=s[3],v=s[6],b=s[1],A=s[4],T=s[7],U=s[2],F=s[5],I=s[8];return a[0]=u*E+c*b+f*U,a[3]=u*x+c*A+f*F,a[6]=u*v+c*T+f*I,a[1]=h*E+p*b+g*U,a[4]=h*x+p*A+g*F,a[7]=h*v+p*T+g*I,a[2]=_*E+y*b+M*U,a[5]=_*x+y*A+M*F,a[8]=_*v+y*T+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*f+s*a*h-s*u*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8],g=p*u-c*h,_=c*f-p*a,y=h*a-u*f,M=t*g+n*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(s*h-p*n)*E,e[2]=(c*n-s*u)*E,e[3]=_*E,e[4]=(p*t-s*f)*E,e[5]=(s*a-c*t)*E,e[6]=y*E,e[7]=(n*f-h*t)*E,e[8]=(u*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,u,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*u+h*c)+u+e,-s*h,s*f,-s*(-h*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(kd.makeScale(e,t)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new ut;function nx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Dc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TM(){const r=Dc("canvas");return r.style.display="block",r}const i0={};function Ys(r){r in i0||(i0[r]=!0,console.warn(r))}function wM(r,e,t){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function CM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function AM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const r0=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s0=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RM(){const r={enabled:!0,workingColorSpace:da,spaces:{},convert:function(s,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Lt&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(s.r=ia(s.r),s.g=ia(s.g),s.b=ia(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?Pc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,u){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[da]:{primaries:e,whitePoint:n,transfer:Pc,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:r0,fromXYZ:s0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),r}const Ct=RM();function Lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ko;class bM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ko===void 0&&(ko=Dc("canvas")),ko.width=e.width,ko.height=e.height;const n=ko.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ko}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let u=0;u<a.length;u++)a[u]=Lr(a[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Lr(t[n]/255)*255):t[n]=Lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let PM=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=Nl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?a.push(zd(s[u].image)):a.push(zd(s[u]))}else a=zd(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LM=0;class ei extends Ea{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,n=Js,s=Js,a=Ji,u=eo,c=Bi,f=Nr,h=ei.DEFAULT_ANISOTROPY,p=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Nl(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Js:e.x=e.x<0?0:1;break;case Bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Js:e.y=e.y<0?0:1;break;case Bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=Gv;ei.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,n=0,s=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const f=e.elements,h=f[0],p=f[4],g=f[8],_=f[1],y=f[5],M=f[9],E=f[2],x=f[6],v=f[10];if(Math.abs(p-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(h+1)/2,T=(y+1)/2,U=(v+1)/2,F=(p+_)/4,I=(g+E)/4,k=(M+x)/4;return A>T&&A>U?A<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(A),s=F/n,a=I/n):T>U?T<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),n=F/s,a=k/s):U<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(U),n=I/a,s=k/a),this.set(n,s,a,t),this}let b=Math.sqrt((x-M)*(x-M)+(g-E)*(g-E)+(_-p)*(_-p));return Math.abs(b)<.001&&(b=1),this.x=(x-M)/b,this.y=(g-E)/b,this.z=(_-p)/b,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DM extends Ea{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ei(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lo extends DM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ix extends ei{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends ei{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Il{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,u,c){let f=n[s+0],h=n[s+1],p=n[s+2],g=n[s+3];const _=a[u+0],y=a[u+1],M=a[u+2],E=a[u+3];if(c===0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=E;return}if(g!==E||f!==_||h!==y||p!==M){let x=1-c;const v=f*_+h*y+p*M+g*E,b=v>=0?1:-1,A=1-v*v;if(A>Number.EPSILON){const U=Math.sqrt(A),F=Math.atan2(U,v*b);x=Math.sin(x*F)/U,c=Math.sin(c*F)/U}const T=c*b;if(f=f*x+_*T,h=h*x+y*T,p=p*x+M*T,g=g*x+E*T,x===1-c){const U=1/Math.sqrt(f*f+h*h+p*p+g*g);f*=U,h*=U,p*=U,g*=U}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,a,u){const c=n[s],f=n[s+1],h=n[s+2],p=n[s+3],g=a[u],_=a[u+1],y=a[u+2],M=a[u+3];return e[t]=c*M+p*g+f*y-h*_,e[t+1]=f*M+p*_+h*g-c*y,e[t+2]=h*M+p*y+c*_-f*g,e[t+3]=p*M-c*g-f*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(s/2),g=c(a/2),_=f(n/2),y=f(s/2),M=f(a/2);switch(u){case"XYZ":this._x=_*p*g+h*y*M,this._y=h*y*g-_*p*M,this._z=h*p*M+_*y*g,this._w=h*p*g-_*y*M;break;case"YXZ":this._x=_*p*g+h*y*M,this._y=h*y*g-_*p*M,this._z=h*p*M-_*y*g,this._w=h*p*g+_*y*M;break;case"ZXY":this._x=_*p*g-h*y*M,this._y=h*y*g+_*p*M,this._z=h*p*M+_*y*g,this._w=h*p*g-_*y*M;break;case"ZYX":this._x=_*p*g-h*y*M,this._y=h*y*g+_*p*M,this._z=h*p*M-_*y*g,this._w=h*p*g+_*y*M;break;case"YZX":this._x=_*p*g+h*y*M,this._y=h*y*g+_*p*M,this._z=h*p*M-_*y*g,this._w=h*p*g-_*y*M;break;case"XZY":this._x=_*p*g-h*y*M,this._y=h*y*g-_*p*M,this._z=h*p*M+_*y*g,this._w=h*p*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],u=t[1],c=t[5],f=t[9],h=t[2],p=t[6],g=t[10],_=n+c+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-f)*y,this._y=(a-h)*y,this._z=(u-s)*y}else if(n>c&&n>g){const y=2*Math.sqrt(1+n-c-g);this._w=(p-f)/y,this._x=.25*y,this._y=(s+u)/y,this._z=(a+h)/y}else if(c>g){const y=2*Math.sqrt(1+c-n-g);this._w=(a-h)/y,this._x=(s+u)/y,this._y=.25*y,this._z=(f+p)/y}else{const y=2*Math.sqrt(1+g-n-c);this._w=(u-s)/y,this._x=(a+h)/y,this._y=(f+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,u=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+s*h-a*f,this._y=s*p+u*f+a*c-n*h,this._z=a*p+u*h+n*f-s*c,this._w=u*p-n*c-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,u=this._w;let c=u*e._w+n*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=n,this._y=s,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,_=Math.sin(t*p)/h;return this._w=u*g+this._w*_,this._x=n*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,n=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(o0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(o0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,u=e.y,c=e.z,f=e.w,h=2*(u*s-c*n),p=2*(c*t-a*s),g=2*(a*n-u*t);return this.x=t+f*h+u*g-c*p,this.y=n+f*p+c*h-a*g,this.z=s+f*g+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=s*f-a*c,this.y=a*u-n*f,this.z=n*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new ce,o0=new Il;class Ul{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Fi):Fi.fromBufferAttribute(a,u),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$u.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$u.copy(n.boundingBox)),$u.applyMatrix4(e.matrixWorld),this.union($u)}const s=e.children;for(let a=0,u=s.length;a<u;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ol),Zu.subVectors(this.max,ol),zo.subVectors(e.a,ol),Bo.subVectors(e.b,ol),Vo.subVectors(e.c,ol),ss.subVectors(Bo,zo),os.subVectors(Vo,Bo),ks.subVectors(zo,Vo);let t=[0,-ss.z,ss.y,0,-os.z,os.y,0,-ks.z,ks.y,ss.z,0,-ss.x,os.z,0,-os.x,ks.z,0,-ks.x,-ss.y,ss.x,0,-os.y,os.x,0,-ks.y,ks.x,0];return!Vd(t,zo,Bo,Vo,Zu)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,zo,Bo,Vo,Zu))?!1:(Ku.crossVectors(ss,os),t=[Ku.x,Ku.y,Ku.z],Vd(t,zo,Bo,Vo,Zu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Fi=new ce,$u=new Ul,zo=new ce,Bo=new ce,Vo=new ce,ss=new ce,os=new ce,ks=new ce,ol=new ce,Zu=new ce,Ku=new ce,zs=new ce;function Vd(r,e,t,n,s){for(let a=0,u=r.length-3;a<=u;a+=3){zs.fromArray(r,a);const c=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),f=e.dot(zs),h=t.dot(zs),p=n.dot(zs);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const IM=new Ul,al=new ce,Hd=new ce;class Yp{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):IM.setFromPoints(e).getCenter(n);let s=0;for(let a=0,u=e.length;a<u;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const t=al.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(al,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(Hd)),this.expandByPoint(al.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sr=new ce,Gd=new ce,Qu=new ce,as=new ce,Wd=new ce,Ju=new ce,jd=new ce;class UM{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gd.copy(e).add(t).multiplyScalar(.5),Qu.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Gd);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Qu),c=as.dot(this.direction),f=-as.dot(Qu),h=as.lengthSq(),p=Math.abs(1-u*u);let g,_,y,M;if(p>0)if(g=u*f-c,_=u*c-f,M=a*p,g>=0)if(_>=-M)if(_<=M){const E=1/p;g*=E,_*=E,y=g*(g+u*_+2*c)+_*(u*g+_+2*f)+h}else _=a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*f)+h;else _=-a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-u*a+c)),_=g>0?-a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+h):(g=Math.max(0,-(u*a+c)),_=g>0?a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h);else _=u>0?-a:a,g=Math.max(0,-(u*_+c)),y=-g*g+_*(_+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Gd).addScaledVector(Qu,_),y}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const n=Sr.dot(this.direction),s=Sr.dot(Sr)-n*n,a=e.radius*e.radius;if(s>a)return null;const u=Math.sqrt(a-s),c=n-u,f=n+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,u,c,f;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(a=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(a=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),n>u||a>s||((a>n||isNaN(n))&&(n=a),(u<s||isNaN(s))&&(s=u),g>=0?(c=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),n>f||c>s)||((c>n||n!==n)&&(n=c),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,n,s,a){Wd.subVectors(t,e),Ju.subVectors(n,e),jd.crossVectors(Wd,Ju);let u=this.direction.dot(jd),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;as.subVectors(this.origin,e);const f=c*this.direction.dot(Ju.crossVectors(as,Ju));if(f<0)return null;const h=c*this.direction.dot(Wd.cross(as));if(h<0||f+h>u)return null;const p=-c*as.dot(jd);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,s,a,u,c,f,h,p,g,_,y,M,E,x){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,u,c,f,h,p,g,_,y,M,E,x)}set(e,t,n,s,a,u,c,f,h,p,g,_,y,M,E,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=a,v[5]=u,v[9]=c,v[13]=f,v[2]=h,v[6]=p,v[10]=g,v[14]=_,v[3]=y,v[7]=M,v[11]=E,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ho.setFromMatrixColumn(e,0).length(),a=1/Ho.setFromMatrixColumn(e,1).length(),u=1/Ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),f=Math.cos(s),h=Math.sin(s),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=u*p,y=u*g,M=c*p,E=c*g;t[0]=f*p,t[4]=-f*g,t[8]=h,t[1]=y+M*h,t[5]=_-E*h,t[9]=-c*f,t[2]=E-_*h,t[6]=M+y*h,t[10]=u*f}else if(e.order==="YXZ"){const _=f*p,y=f*g,M=h*p,E=h*g;t[0]=_+E*c,t[4]=M*c-y,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=y*c-M,t[6]=E+_*c,t[10]=u*f}else if(e.order==="ZXY"){const _=f*p,y=f*g,M=h*p,E=h*g;t[0]=_-E*c,t[4]=-u*g,t[8]=M+y*c,t[1]=y+M*c,t[5]=u*p,t[9]=E-_*c,t[2]=-u*h,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const _=u*p,y=u*g,M=c*p,E=c*g;t[0]=f*p,t[4]=M*h-y,t[8]=_*h+E,t[1]=f*g,t[5]=E*h+_,t[9]=y*h-M,t[2]=-h,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const _=u*f,y=u*h,M=c*f,E=c*h;t[0]=f*p,t[4]=E-_*g,t[8]=M*g+y,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=y*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=u*f,y=u*h,M=c*f,E=c*h;t[0]=f*p,t[4]=-g,t[8]=h*p,t[1]=_*g+E,t[5]=u*p,t[9]=y*g-M,t[2]=M*g-y,t[6]=c*p,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FM,e,OM)}lookAt(e,t,n){const s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ls.crossVectors(n,ci),ls.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ls.crossVectors(n,ci)),ls.normalize(),ec.crossVectors(ci,ls),s[0]=ls.x,s[4]=ec.x,s[8]=ci.x,s[1]=ls.y,s[5]=ec.y,s[9]=ci.y,s[2]=ls.z,s[6]=ec.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,u=n[0],c=n[4],f=n[8],h=n[12],p=n[1],g=n[5],_=n[9],y=n[13],M=n[2],E=n[6],x=n[10],v=n[14],b=n[3],A=n[7],T=n[11],U=n[15],F=s[0],I=s[4],k=s[8],C=s[12],R=s[1],B=s[5],J=s[9],Z=s[13],fe=s[2],ae=s[6],se=s[10],re=s[14],G=s[3],de=s[7],H=s[11],N=s[15];return a[0]=u*F+c*R+f*fe+h*G,a[4]=u*I+c*B+f*ae+h*de,a[8]=u*k+c*J+f*se+h*H,a[12]=u*C+c*Z+f*re+h*N,a[1]=p*F+g*R+_*fe+y*G,a[5]=p*I+g*B+_*ae+y*de,a[9]=p*k+g*J+_*se+y*H,a[13]=p*C+g*Z+_*re+y*N,a[2]=M*F+E*R+x*fe+v*G,a[6]=M*I+E*B+x*ae+v*de,a[10]=M*k+E*J+x*se+v*H,a[14]=M*C+E*Z+x*re+v*N,a[3]=b*F+A*R+T*fe+U*G,a[7]=b*I+A*B+T*ae+U*de,a[11]=b*k+A*J+T*se+U*H,a[15]=b*C+A*Z+T*re+U*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],u=e[1],c=e[5],f=e[9],h=e[13],p=e[2],g=e[6],_=e[10],y=e[14],M=e[3],E=e[7],x=e[11],v=e[15];return M*(+a*f*g-s*h*g-a*c*_+n*h*_+s*c*y-n*f*y)+E*(+t*f*y-t*h*_+a*u*_-s*u*y+s*h*p-a*f*p)+x*(+t*h*g-t*c*y-a*u*g+n*u*y+a*c*p-n*h*p)+v*(-s*c*p-t*f*g+t*c*_+s*u*g-n*u*_+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],u=e[4],c=e[5],f=e[6],h=e[7],p=e[8],g=e[9],_=e[10],y=e[11],M=e[12],E=e[13],x=e[14],v=e[15],b=g*x*h-E*_*h+E*f*y-c*x*y-g*f*v+c*_*v,A=M*_*h-p*x*h-M*f*y+u*x*y+p*f*v-u*_*v,T=p*E*h-M*g*h+M*c*y-u*E*y-p*c*v+u*g*v,U=M*g*f-p*E*f-M*c*_+u*E*_+p*c*x-u*g*x,F=t*b+n*A+s*T+a*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return e[0]=b*I,e[1]=(E*_*a-g*x*a-E*s*y+n*x*y+g*s*v-n*_*v)*I,e[2]=(c*x*a-E*f*a+E*s*h-n*x*h-c*s*v+n*f*v)*I,e[3]=(g*f*a-c*_*a-g*s*h+n*_*h+c*s*y-n*f*y)*I,e[4]=A*I,e[5]=(p*x*a-M*_*a+M*s*y-t*x*y-p*s*v+t*_*v)*I,e[6]=(M*f*a-u*x*a-M*s*h+t*x*h+u*s*v-t*f*v)*I,e[7]=(u*_*a-p*f*a+p*s*h-t*_*h-u*s*y+t*f*y)*I,e[8]=T*I,e[9]=(M*g*a-p*E*a-M*n*y+t*E*y+p*n*v-t*g*v)*I,e[10]=(u*E*a-M*c*a+M*n*h-t*E*h-u*n*v+t*c*v)*I,e[11]=(p*c*a-u*g*a-p*n*h+t*g*h+u*n*y-t*c*y)*I,e[12]=U*I,e[13]=(p*E*s-M*g*s+M*n*_-t*E*_-p*n*x+t*g*x)*I,e[14]=(M*c*s-u*E*s-M*n*f+t*E*f+u*n*x-t*c*x)*I,e[15]=(u*g*s-p*c*s+p*n*f-t*g*f-u*n*_+t*c*_)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,u=e.x,c=e.y,f=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-s*f,h*f+s*c,0,h*c+s*f,p*c+n,p*f-s*u,0,h*f-s*c,p*f+s*u,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,u){return this.set(1,n,a,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,h=a+a,p=u+u,g=c+c,_=a*h,y=a*p,M=a*g,E=u*p,x=u*g,v=c*g,b=f*h,A=f*p,T=f*g,U=n.x,F=n.y,I=n.z;return s[0]=(1-(E+v))*U,s[1]=(y+T)*U,s[2]=(M-A)*U,s[3]=0,s[4]=(y-T)*F,s[5]=(1-(_+v))*F,s[6]=(x+b)*F,s[7]=0,s[8]=(M+A)*I,s[9]=(x-b)*I,s[10]=(1-(_+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Ho.set(s[0],s[1],s[2]).length();const u=Ho.set(s[4],s[5],s[6]).length(),c=Ho.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Oi.copy(this);const h=1/a,p=1/u,g=1/c;return Oi.elements[0]*=h,Oi.elements[1]*=h,Oi.elements[2]*=h,Oi.elements[4]*=p,Oi.elements[5]*=p,Oi.elements[6]*=p,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,t.setFromRotationMatrix(Oi),n.x=a,n.y=u,n.z=c,this}makePerspective(e,t,n,s,a,u,c=br){const f=this.elements,h=2*a/(t-e),p=2*a/(n-s),g=(t+e)/(t-e),_=(n+s)/(n-s);let y,M;if(c===br)y=-(u+a)/(u-a),M=-2*u*a/(u-a);else if(c===Lc)y=-u/(u-a),M=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=p,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,a,u,c=br){const f=this.elements,h=1/(t-e),p=1/(n-s),g=1/(u-a),_=(t+e)*h,y=(n+s)*p;let M,E;if(c===br)M=(u+a)*g,E=-2*g;else if(c===Lc)M=a*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=E,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ho=new ce,Oi=new Jt,FM=new ce(0,0,0),OM=new ce(1,1,1),ls=new ce,ec=new ce,ci=new ce,a0=new Jt,l0=new Il;class sr{constructor(e=0,t=0,n=0,s=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],u=s[4],c=s[8],f=s[1],h=s[5],p=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(vt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return a0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return l0.setFromEuler(this),this.setFromQuaternion(l0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kM=0;const u0=new ce,Go=new Il,Er=new Jt,tc=new ce,ll=new ce,zM=new ce,BM=new Il,c0=new ce(1,0,0),f0=new ce(0,1,0),d0=new ce(0,0,1),h0={type:"added"},VM={type:"removed"},Wo={type:"childadded",child:null},Xd={type:"childremoved",child:null};class Fn extends Ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new ce,t=new sr,n=new Il,s=new ce(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new ut}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(f0,e)}rotateZ(e){return this.rotateOnAxis(d0,e)}translateOnAxis(e,t){return u0.copy(e).applyQuaternion(this.quaternion),this.position.add(u0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(f0,e)}translateZ(e){return this.translateOnAxis(d0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(ll,tc,this.up):Er.lookAt(tc,ll,this.up),this.quaternion.setFromRotationMatrix(Er),s&&(Er.extractRotation(s.matrixWorld),Go.setFromRotationMatrix(Er),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h0),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(VM),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h0),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,e,zM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,u=s.length;a<u;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];s.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),y=u(e.animations),M=u(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),M.length>0&&(n.nodes=M)}return n.object=s,n;function u(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Fn.DEFAULT_UP=new ce(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new ce,Mr=new ce,Yd=new ce,Tr=new ce,jo=new ce,Xo=new ce,p0=new ce,qd=new ce,$d=new ce,Zd=new ce,Kd=new Kt,Qd=new Kt,Jd=new Kt;class zi{constructor(e=new ce,t=new ce,n=new ce){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ki.subVectors(e,t),s.cross(ki);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){ki.subVectors(s,t),Mr.subVectors(n,t),Yd.subVectors(e,t);const u=ki.dot(ki),c=ki.dot(Mr),f=ki.dot(Yd),h=Mr.dot(Mr),p=Mr.dot(Yd),g=u*h-c*c;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*f-c*p)*_,M=(u*p-c*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,n,s,a,u,c,f){return this.getBarycoord(e,t,n,s,Tr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Tr.x),f.addScaledVector(u,Tr.y),f.addScaledVector(c,Tr.z),f)}static getInterpolatedAttribute(e,t,n,s,a,u){return Kd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(e,t),Qd.fromBufferAttribute(e,n),Jd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Kd,a.x),u.addScaledVector(Qd,a.y),u.addScaledVector(Jd,a.z),u}static isFrontFacing(e,t,n,s){return ki.subVectors(n,t),Mr.subVectors(e,t),ki.cross(Mr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),ki.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return zi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let u,c;jo.subVectors(s,n),Xo.subVectors(a,n),qd.subVectors(e,n);const f=jo.dot(qd),h=Xo.dot(qd);if(f<=0&&h<=0)return t.copy(n);$d.subVectors(e,s);const p=jo.dot($d),g=Xo.dot($d);if(p>=0&&g<=p)return t.copy(s);const _=f*g-p*h;if(_<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(n).addScaledVector(jo,u);Zd.subVectors(e,a);const y=jo.dot(Zd),M=Xo.dot(Zd);if(M>=0&&y<=M)return t.copy(a);const E=y*h-f*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(Xo,c);const x=p*M-y*g;if(x<=0&&g-p>=0&&y-M>=0)return p0.subVectors(a,s),c=(g-p)/(g-p+(y-M)),t.copy(s).addScaledVector(p0,c);const v=1/(x+E+_);return u=E*v,c=_*v,t.copy(n).addScaledVector(jo,u).addScaledVector(Xo,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},nc={h:0,s:0,l:0};function eh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=MM(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=eh(u,a,e+1/3),this.g=eh(u,a,e),this.b=eh(u,a,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Ai){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const n=sx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Ct.fromWorkingColorSpace(Nn.copy(this),e),Math.round(vt(Nn.r*255,0,255))*65536+Math.round(vt(Nn.g*255,0,255))*256+Math.round(vt(Nn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,s=Nn.g,a=Nn.b,u=Math.max(n,s,a),c=Math.min(n,s,a);let f,h;const p=(c+u)/2;if(c===u)f=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case n:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-n)/g+2;break;case a:f=(n-s)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Ai){Ct.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,s=Nn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(nc);const n=Od(us.h,nc.h,t),s=Od(us.s,nc.s,t),a=Od(us.l,nc.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new At;At.NAMES=sx;let HM=0;class Fl extends Ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Nl(),this.name="",this.type="Material",this.blending=ta,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=bh,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==xs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rh&&(n.blendSrc=this.blendSrc),this.blendDst!==bh&&(n.blendDst=this.blendDst),this.blendEquation!==Ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=s(e.textures),u=s(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qp extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new ce,ic=new bt;let GM=0;class tr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=t0,this.updateRanges=[],this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),n=Qn(n,this.array),s=Qn(s,this.array),a=Qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t0&&(e.usage=this.usage),e}}class ox extends tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ax extends tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class no extends tr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let WM=0;const wi=new Jt,th=new Fn,Yo=new ce,fi=new Ul,ul=new Ul,yn=new ce;class co extends Ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nx(e)?ax:ox)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ut().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,n){return wi.makeTranslation(e,t,n),this.applyMatrix4(wi),this}scale(e,t,n){return wi.makeScale(e,t,n),this.applyMatrix4(wi),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yo).negate(),this.translate(Yo.x,Yo.y,Yo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new no(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ul);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const n=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];ul.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(fi.min,ul.min),fi.expandByPoint(yn),yn.addVectors(fi.max,ul.max),fi.expandByPoint(yn)):(fi.expandByPoint(ul.min),fi.expandByPoint(ul.max))}fi.getCenter(n);let s=0;for(let a=0,u=e.count;a<u;a++)yn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(yn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)yn.fromBufferAttribute(c,h),f&&(Yo.fromBufferAttribute(e,h),yn.add(Yo)),s=Math.max(s,n.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tr(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),c=[],f=[];for(let k=0;k<n.count;k++)c[k]=new ce,f[k]=new ce;const h=new ce,p=new ce,g=new ce,_=new bt,y=new bt,M=new bt,E=new ce,x=new ce;function v(k,C,R){h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,C),g.fromBufferAttribute(n,R),_.fromBufferAttribute(a,k),y.fromBufferAttribute(a,C),M.fromBufferAttribute(a,R),p.sub(h),g.sub(h),y.sub(_),M.sub(_);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(B),x.copy(g).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(B),c[k].add(E),c[C].add(E),c[R].add(E),f[k].add(x),f[C].add(x),f[R].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,C=b.length;k<C;++k){const R=b[k],B=R.start,J=R.count;for(let Z=B,fe=B+J;Z<fe;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const A=new ce,T=new ce,U=new ce,F=new ce;function I(k){U.fromBufferAttribute(s,k),F.copy(U);const C=c[k];A.copy(C),A.sub(U.multiplyScalar(U.dot(C))).normalize(),T.crossVectors(F,C);const B=T.dot(f[k])<0?-1:1;u.setXYZW(k,A.x,A.y,A.z,B)}for(let k=0,C=b.length;k<C;++k){const R=b[k],B=R.start,J=R.count;for(let Z=B,fe=B+J;Z<fe;Z+=3)I(e.getX(Z+0)),I(e.getX(Z+1)),I(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const s=new ce,a=new ce,u=new ce,c=new ce,f=new ce,h=new ce,p=new ce,g=new ce;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),E=e.getX(_+1),x=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),p.subVectors(u,a),g.subVectors(s,a),p.cross(g),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),c.add(p),f.add(p),h.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,f.x,f.y,f.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,a),g.subVectors(s,a),p.cross(g),n.setXYZ(_+0,p.x,p.y,p.z),n.setXYZ(_+1,p.x,p.y,p.z),n.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,g=c.normalized,_=new h.constructor(f.length*p);let y=0,M=0;for(let E=0,x=f.length;E<x;E++){c.isInterleavedBufferAttribute?y=f[E]*c.data.stride+c.offset:y=f[E]*p;for(let v=0;v<p;v++)_[M++]=h[y++]}return new tr(_,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new co,n=this.index.array,s=this.attributes;for(const c in s){const f=s[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let p=0,g=h.length;p<g;p++){const _=h[p],y=e(_,n);f.push(y)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];p.push(y.toJSON(e.data))}p.length>0&&(s[f]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let _=0,y=g.length;_<y;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m0=new Jt,Bs=new UM,rc=new Yp,g0=new ce,sc=new ce,oc=new ce,ac=new ce,nh=new ce,lc=new ce,_0=new ce,uc=new ce;class Vi extends Fn{constructor(e=new co,t=new qp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=s.length;a<u;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){lc.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=c[f],g=a[f];p!==0&&(nh.fromBufferAttribute(g,e),u?lc.addScaledVector(nh,p):lc.addScaledVector(nh.sub(t),p))}t.add(lc)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(a),Bs.copy(e.ray).recast(e.near),!(rc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(rc,g0)===null||Bs.origin.distanceToSquared(g0)>(e.far-e.near)**2))&&(m0.copy(a).invert(),Bs.copy(e.ray).applyMatrix4(m0),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let s;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const x=_[M],v=u[x.materialIndex],b=Math.max(x.start,y.start),A=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let T=b,U=A;T<U;T+=3){const F=c.getX(T),I=c.getX(T+1),k=c.getX(T+2);s=cc(this,v,e,n,h,p,g,F,I,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(c.count,y.start+y.count);for(let x=M,v=E;x<v;x+=3){const b=c.getX(x),A=c.getX(x+1),T=c.getX(x+2);s=cc(this,u,e,n,h,p,g,b,A,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const x=_[M],v=u[x.materialIndex],b=Math.max(x.start,y.start),A=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let T=b,U=A;T<U;T+=3){const F=T,I=T+1,k=T+2;s=cc(this,v,e,n,h,p,g,F,I,k),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let x=M,v=E;x<v;x+=3){const b=x,A=x+1,T=x+2;s=cc(this,u,e,n,h,p,g,b,A,T),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function jM(r,e,t,n,s,a,u,c){let f;if(e.side===Jn?f=n.intersectTriangle(u,a,s,!0,c):f=n.intersectTriangle(s,a,u,e.side===xs,c),f===null)return null;uc.copy(c),uc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(uc);return h<t.near||h>t.far?null:{distance:h,point:uc.clone(),object:r}}function cc(r,e,t,n,s,a,u,c,f,h){r.getVertexPosition(c,sc),r.getVertexPosition(f,oc),r.getVertexPosition(h,ac);const p=jM(r,e,t,n,sc,oc,ac,_0);if(p){const g=new ce;zi.getBarycoord(_0,sc,oc,ac,g),s&&(p.uv=zi.getInterpolatedAttribute(s,c,f,h,g,new bt)),a&&(p.uv1=zi.getInterpolatedAttribute(a,c,f,h,g,new bt)),u&&(p.normal=zi.getInterpolatedAttribute(u,c,f,h,g,new ce),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:h,normal:new ce,materialIndex:0};zi.getNormal(sc,oc,ac,_.normal),p.face=_,p.barycoord=g}return p}class Ma extends co{constructor(e=1,t=1,n=1,s=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:u};const c=this;s=Math.floor(s),a=Math.floor(a),u=Math.floor(u);const f=[],h=[],p=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,n,t,e,u,a,0),M("z","y","x",1,-1,n,t,-e,u,a,1),M("x","z","y",1,1,e,n,t,s,u,2),M("x","z","y",1,-1,e,n,-t,s,u,3),M("x","y","z",1,-1,e,t,n,s,a,4),M("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(f),this.setAttribute("position",new no(h,3)),this.setAttribute("normal",new no(p,3)),this.setAttribute("uv",new no(g,2));function M(E,x,v,b,A,T,U,F,I,k,C){const R=T/I,B=U/k,J=T/2,Z=U/2,fe=F/2,ae=I+1,se=k+1;let re=0,G=0;const de=new ce;for(let H=0;H<se;H++){const N=H*B-Z;for(let q=0;q<ae;q++){const ye=q*R-J;de[E]=ye*b,de[x]=N*A,de[v]=fe,h.push(de.x,de.y,de.z),de[E]=0,de[x]=0,de[v]=F>0?1:-1,p.push(de.x,de.y,de.z),g.push(q/I),g.push(1-H/k),re+=1}}for(let H=0;H<k;H++)for(let N=0;N<I;N++){const q=_+N+ae*H,ye=_+N+ae*(H+1),V=_+(N+1)+ae*(H+1),ne=_+(N+1)+ae*H;f.push(q,ye,ne),f.push(ye,V,ne),G+=6}c.addGroup(y,G,C),y+=G,_+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gn(r){const e={};for(let t=0;t<r.length;t++){const n=ha(r[t]);for(const s in n)e[s]=n[s]}return e}function XM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const YM={clone:ha,merge:Gn};var qM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qM,this.fragmentShader=$M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=XM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ux extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cs=new ce,v0=new bt,x0=new bt;class Ri extends ux{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(Fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,v0,x0),t.subVectors(x0,v0)}setViewOffset(e,t,n,s,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fd*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,h=u.fullHeight;a+=u.offsetX*s/f,t-=u.offsetY*n/h,s*=u.width/f,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qo=-90,$o=1;class ZM extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ri(qo,$o,e,t);s.layers=this.layers,this.add(s);const a=new Ri(qo,$o,e,t);a.layers=this.layers,this.add(a);const u=new Ri(qo,$o,e,t);u.layers=this.layers,this.add(u);const c=new Ri(qo,$o,e,t);c.layers=this.layers,this.add(c);const f=new Ri(qo,$o,e,t);f.layers=this.layers,this.add(f);const h=new Ri(qo,$o,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,u,c,f]=t;for(const h of t)this.remove(h);if(e===br)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,h,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(g,_,y),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class cx extends ei{constructor(e,t,n,s,a,u,c,f,h,p){e=e!==void 0?e:[],t=t!==void 0?t:la,super(e,t,n,s,a,u,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KM extends lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new cx(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ji}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ma(5,5,5),a=new ys({name:"CubemapFromEquirect",uniforms:ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:ms});a.uniforms.tEquirect.value=t;const u=new Vi(s,a),c=t.minFilter;return t.minFilter===eo&&(t.minFilter=Ji),new ZM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(a)}}class fc extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,u=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),v=this._getHandJoint(h,E);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return c!==null&&(c.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fc;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class JM extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rh=new ce,eT=new ce,tT=new ut;class qs{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=rh.subVectors(n,t).cross(eT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(rh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tT.getNormalMatrix(e),s=this.coplanarPoint(rh).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Yp,dc=new ce;class $p{constructor(e=new qs,t=new qs,n=new qs,s=new qs,a=new qs,u=new qs){this.planes=[e,t,n,s,a,u]}set(e,t,n,s,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=br){const n=this.planes,s=e.elements,a=s[0],u=s[1],c=s[2],f=s[3],h=s[4],p=s[5],g=s[6],_=s[7],y=s[8],M=s[9],E=s[10],x=s[11],v=s[12],b=s[13],A=s[14],T=s[15];if(n[0].setComponents(f-a,_-h,x-y,T-v).normalize(),n[1].setComponents(f+a,_+h,x+y,T+v).normalize(),n[2].setComponents(f+u,_+p,x+M,T+b).normalize(),n[3].setComponents(f-u,_-p,x-M,T-b).normalize(),n[4].setComponents(f-c,_-g,x-E,T-A).normalize(),t===br)n[5].setComponents(f+c,_+g,x+E,T+A).normalize();else if(t===Lc)n[5].setComponents(c,g,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){return Vs.center.set(0,0,0),Vs.radius=.7071067811865476,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(dc.x=s.normal.x>0?e.max.x:e.min.x,dc.y=s.normal.y>0?e.max.y:e.min.y,dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fx extends ei{constructor(e,t,n,s,a,u,c,f,h,p=na){if(p!==na&&p!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===na&&(n=ao),n===void 0&&p===fa&&(n=ca),super(null,s,a,u,c,f,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Hi,this.minFilter=f!==void 0?f:Hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ol extends co{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,u=t/2,c=Math.floor(n),f=Math.floor(s),h=c+1,p=f+1,g=e/c,_=t/f,y=[],M=[],E=[],x=[];for(let v=0;v<p;v++){const b=v*_-u;for(let A=0;A<h;A++){const T=A*g-a;M.push(T,-b,0),E.push(0,0,1),x.push(A/c),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let b=0;b<c;b++){const A=b+h*v,T=b+h*(v+1),U=b+1+h*(v+1),F=b+1+h*v;y.push(A,T,F),y.push(T,U,F)}this.setIndex(y),this.setAttribute("position",new no(M,3)),this.setAttribute("normal",new no(E,3)),this.setAttribute("uv",new no(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}class nT extends Fl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ex,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iT extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rT extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sT extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sh=new Jt,y0=new ce,S0=new ce;class oT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $p,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;y0.setFromMatrixPosition(e.matrixWorld),t.position.copy(y0),S0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S0),t.updateMatrixWorld(),sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dx extends ux{constructor(e=-1,t=1,n=1,s=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class aT extends oT{constructor(){super(new dx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends sT{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new aT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lT extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function M0(r,e,t,n){const s=uT(n);switch(t){case Yv:return r*e;case $v:return r*e;case Zv:return r*e*2;case Kv:return r*e/s.components*s.byteLength;case Gp:return r*e/s.components*s.byteLength;case Qv:return r*e*2/s.components*s.byteLength;case Wp:return r*e*2/s.components*s.byteLength;case qv:return r*e*3/s.components*s.byteLength;case Bi:return r*e*4/s.components*s.byteLength;case jp:return r*e*4/s.components*s.byteLength;case xc:case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Wh:return Math.max(r,16)*Math.max(e,8)/4;case Vh:case Gh:return Math.max(r,8)*Math.max(e,8)/2;case jh:case Xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case np:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ip:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Mc:case lp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jv:case cp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case fp:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uT(r){switch(r){case Nr:case Wv:return{byteLength:1,components:1};case xl:case jv:case Dl:return{byteLength:2,components:1};case Vp:case Hp:return{byteLength:2,components:4};case ao:case Bp:case Rr:return{byteLength:4,components:1};case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hx(){let r=null,e=!1,t=null,n=null;function s(a,u){t(a,u),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function cT(r){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,g=h.byteLength,_=r.createBuffer();r.bindBuffer(f,_),r.bufferData(f,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function n(c,f,h){const p=f.array,g=f.updateRanges;if(r.bindBuffer(h,c),g.length===0)r.bufferSubData(h,0,p);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],E=g[y];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const E=g[y];r.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(r.deleteBuffer(f.buffer),e.delete(c))}function u(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:s,remove:a,update:u}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_T=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ST=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VT="gl_FragColor = linearToOutputTexel( gl_FragColor );",HT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_w=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Iw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ow=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$w=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:fT,alphahash_pars_fragment:dT,alphamap_fragment:hT,alphamap_pars_fragment:pT,alphatest_fragment:mT,alphatest_pars_fragment:gT,aomap_fragment:_T,aomap_pars_fragment:vT,batching_pars_vertex:xT,batching_vertex:yT,begin_vertex:ST,beginnormal_vertex:ET,bsdfs:MT,iridescence_fragment:TT,bumpmap_pars_fragment:wT,clipping_planes_fragment:CT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:bT,color_fragment:PT,color_pars_fragment:LT,color_pars_vertex:DT,color_vertex:NT,common:IT,cube_uv_reflection_fragment:UT,defaultnormal_vertex:FT,displacementmap_pars_vertex:OT,displacementmap_vertex:kT,emissivemap_fragment:zT,emissivemap_pars_fragment:BT,colorspace_fragment:VT,colorspace_pars_fragment:HT,envmap_fragment:GT,envmap_common_pars_fragment:WT,envmap_pars_fragment:jT,envmap_pars_vertex:XT,envmap_physical_pars_fragment:iw,envmap_vertex:YT,fog_vertex:qT,fog_pars_vertex:$T,fog_fragment:ZT,fog_pars_fragment:KT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:JT,lights_lambert_fragment:ew,lights_lambert_pars_fragment:tw,lights_pars_begin:nw,lights_toon_fragment:rw,lights_toon_pars_fragment:sw,lights_phong_fragment:ow,lights_phong_pars_fragment:aw,lights_physical_fragment:lw,lights_physical_pars_fragment:uw,lights_fragment_begin:cw,lights_fragment_maps:fw,lights_fragment_end:dw,logdepthbuf_fragment:hw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:_w,map_pars_fragment:vw,map_particle_fragment:xw,map_particle_pars_fragment:yw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:Ew,morphinstance_vertex:Mw,morphcolor_vertex:Tw,morphnormal_vertex:ww,morphtarget_pars_vertex:Cw,morphtarget_vertex:Aw,normal_fragment_begin:Rw,normal_fragment_maps:bw,normal_pars_fragment:Pw,normal_pars_vertex:Lw,normal_vertex:Dw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Iw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:Fw,iridescence_pars_fragment:Ow,opaque_fragment:kw,packing:zw,premultiplied_alpha_fragment:Bw,project_vertex:Vw,dithering_fragment:Hw,dithering_pars_fragment:Gw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:jw,shadowmap_pars_fragment:Xw,shadowmap_pars_vertex:Yw,shadowmap_vertex:qw,shadowmask_pars_fragment:$w,skinbase_vertex:Zw,skinning_pars_vertex:Kw,skinning_vertex:Qw,skinnormal_vertex:Jw,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:o2,uv_pars_vertex:a2,uv_vertex:l2,worldpos_vertex:u2,background_vert:c2,background_frag:f2,backgroundCube_vert:d2,backgroundCube_frag:h2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:_2,distanceRGBA_vert:v2,distanceRGBA_frag:x2,equirect_vert:y2,equirect_frag:S2,linedashed_vert:E2,linedashed_frag:M2,meshbasic_vert:T2,meshbasic_frag:w2,meshlambert_vert:C2,meshlambert_frag:A2,meshmatcap_vert:R2,meshmatcap_frag:b2,meshnormal_vert:P2,meshnormal_frag:L2,meshphong_vert:D2,meshphong_frag:N2,meshphysical_vert:I2,meshphysical_frag:U2,meshtoon_vert:F2,meshtoon_frag:O2,points_vert:k2,points_frag:z2,shadow_vert:B2,shadow_frag:V2,sprite_vert:H2,sprite_frag:G2},Le={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Zi={basic:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new At(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Gn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Gn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Gn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new At(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Gn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Gn([Le.points,Le.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Gn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Gn([Le.common,Le.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Gn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Gn([Le.sprite,Le.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Gn([Le.common,Le.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Gn([Le.lights,Le.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Zi.physical={uniforms:Gn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const hc={r:0,b:0,g:0},Hs=new sr,W2=new Jt;function j2(r,e,t,n,s,a,u){const c=new At(0);let f=a===!0?0:1,h,p,g=null,_=0,y=null;function M(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?t:e).get(T)),T}function E(A){let T=!1;const U=M(A);U===null?v(c,f):U&&U.isColor&&(v(U,1),T=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(A,T){const U=M(T);U&&(U.isCubeTexture||U.mapping===jc)?(p===void 0&&(p=new Vi(new Ma(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:ha(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Hs.copy(T.backgroundRotation),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler(Hs)),p.material.toneMapped=Ct.getTransfer(U.colorSpace)!==Lt,(g!==U||_!==U.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=U,_=U.version,y=r.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Vi(new Ol(2,2),new ys({name:"BackgroundMaterial",uniforms:ha(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(U.colorSpace)!==Lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||_!==U.version||y!==r.toneMapping)&&(h.material.needsUpdate=!0,g=U,_=U.version,y=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function v(A,T){A.getRGB(hc,lx(r)),n.buffers.color.setClear(hc.r,hc.g,hc.b,T,u)}function b(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,T=1){c.set(A),f=T,v(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,v(c,f)},render:E,addToRenderList:x,dispose:b}}function X2(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=_(null);let a=s,u=!1;function c(R,B,J,Z,fe){let ae=!1;const se=g(Z,J,B);a!==se&&(a=se,h(a.object)),ae=y(R,Z,J,fe),ae&&M(R,Z,J,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,T(R,B,J,Z),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function f(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function p(R){return r.deleteVertexArray(R)}function g(R,B,J){const Z=J.wireframe===!0;let fe=n[R.id];fe===void 0&&(fe={},n[R.id]=fe);let ae=fe[B.id];ae===void 0&&(ae={},fe[B.id]=ae);let se=ae[Z];return se===void 0&&(se=_(f()),ae[Z]=se),se}function _(R){const B=[],J=[],Z=[];for(let fe=0;fe<t;fe++)B[fe]=0,J[fe]=0,Z[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,B,J,Z){const fe=a.attributes,ae=B.attributes;let se=0;const re=J.getAttributes();for(const G in re)if(re[G].location>=0){const H=fe[G];let N=ae[G];if(N===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),H===void 0||H.attribute!==N||N&&H.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==Z}function M(R,B,J,Z){const fe={},ae=B.attributes;let se=0;const re=J.getAttributes();for(const G in re)if(re[G].location>=0){let H=ae[G];H===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(H=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(H=R.instanceColor));const N={};N.attribute=H,H&&H.data&&(N.data=H.data),fe[G]=N,se++}a.attributes=fe,a.attributesNum=se,a.index=Z}function E(){const R=a.newAttributes;for(let B=0,J=R.length;B<J;B++)R[B]=0}function x(R){v(R,0)}function v(R,B){const J=a.newAttributes,Z=a.enabledAttributes,fe=a.attributeDivisors;J[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),fe[R]!==B&&(r.vertexAttribDivisor(R,B),fe[R]=B)}function b(){const R=a.newAttributes,B=a.enabledAttributes;for(let J=0,Z=B.length;J<Z;J++)B[J]!==R[J]&&(r.disableVertexAttribArray(J),B[J]=0)}function A(R,B,J,Z,fe,ae,se){se===!0?r.vertexAttribIPointer(R,B,J,fe,ae):r.vertexAttribPointer(R,B,J,Z,fe,ae)}function T(R,B,J,Z){E();const fe=Z.attributes,ae=J.getAttributes(),se=B.defaultAttributeValues;for(const re in ae){const G=ae[re];if(G.location>=0){let de=fe[re];if(de===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const H=de.normalized,N=de.itemSize,q=e.get(de);if(q===void 0)continue;const ye=q.buffer,V=q.type,ne=q.bytesPerElement,_e=V===r.INT||V===r.UNSIGNED_INT||de.gpuType===Bp;if(de.isInterleavedBufferAttribute){const pe=de.data,Me=pe.stride,Oe=de.offset;if(pe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<G.locationSize;Ie++)v(G.location+Ie,pe.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ie=0;Ie<G.locationSize;Ie++)x(G.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Ie=0;Ie<G.locationSize;Ie++)A(G.location+Ie,N/G.locationSize,V,H,Me*ne,(Oe+N/G.locationSize*Ie)*ne,_e)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<G.locationSize;pe++)v(G.location+pe,de.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<G.locationSize;pe++)x(G.location+pe);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let pe=0;pe<G.locationSize;pe++)A(G.location+pe,N/G.locationSize,V,H,N*ne,N/G.locationSize*pe*ne,_e)}}else if(se!==void 0){const H=se[re];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(G.location,H);break;case 3:r.vertexAttrib3fv(G.location,H);break;case 4:r.vertexAttrib4fv(G.location,H);break;default:r.vertexAttrib1fv(G.location,H)}}}}b()}function U(){k();for(const R in n){const B=n[R];for(const J in B){const Z=B[J];for(const fe in Z)p(Z[fe].object),delete Z[fe];delete B[J]}delete n[R]}}function F(R){if(n[R.id]===void 0)return;const B=n[R.id];for(const J in B){const Z=B[J];for(const fe in Z)p(Z[fe].object),delete Z[fe];delete B[J]}delete n[R.id]}function I(R){for(const B in n){const J=n[B];if(J[R.id]===void 0)continue;const Z=J[R.id];for(const fe in Z)p(Z[fe].object),delete Z[fe];delete J[R.id]}}function k(){C(),u=!0,a!==s&&(a=s,h(a.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:k,resetDefaultState:C,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:x,disableUnusedAttributes:b}}function Y2(r,e,t){let n;function s(h){n=h}function a(h,p){r.drawArrays(n,h,p),t.update(p,n,1)}function u(h,p,g){g!==0&&(r.drawArraysInstanced(n,h,p,g),t.update(p,n,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,g);let y=0;for(let M=0;M<g;M++)y+=p[M];t.update(y,n,1)}function f(h,p,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)u(h[M],p[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(n,h,0,p,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*_[E];t.update(M,n,1)}}this.setMode=s,this.render=a,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function q2(r,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Bi&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const k=I===Dl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Nr&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Rr&&!k)}function f(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:U,maxSamples:F}}function $2(r){const e=this;let t=null,n=0,s=!1,a=!1;const u=new qs,c=new ut,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||n!==0||s;return s=_,n=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,v=r.get(g);if(!s||M===null||M.length===0||a&&!x)a?p(null):h();else{const b=a?0:n,A=b*4;let T=v.clippingState||null;f.value=T,T=p(M,_,A,y);for(let U=0;U!==A;++U)T[U]=t[U];v.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,_,y,M){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=f.value,M!==!0||x===null){const v=y+E*4,b=_.matrixWorldInverse;c.getNormalMatrix(b),(x===null||x.length<v)&&(x=new Float32Array(v));for(let A=0,T=y;A!==E;++A,T+=4)u.copy(g[A]).applyMatrix4(b,c),u.normal.toArray(x,T),x[T+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function Z2(r){let e=new WeakMap;function t(u,c){return c===Oh?u.mapping=la:c===kh&&(u.mapping=ua),u}function n(u){if(u&&u.isTexture){const c=u.mapping;if(c===Oh||c===kh)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const h=new KM(f.height);return h.fromEquirectangularTexture(r,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const c=u.target;c.removeEventListener("dispose",s);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Qo=4,T0=[.125,.215,.35,.446,.526,.582],Qs=20,oh=new dx,w0=new At;let ah=null,lh=0,uh=0,ch=!1;const $s=(1+Math.sqrt(5))/2,Zo=1/$s,C0=[new ce(-$s,Zo,0),new ce($s,Zo,0),new ce(-Zo,0,$s),new ce(Zo,0,$s),new ce(0,$s,-Zo),new ce(0,$s,Zo),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)],K2=new ce;class A0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){const{size:u=256,position:c=K2}=a;ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,s,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,lh,uh),this._renderer.xr.enabled=ch,e.scissorTest=!1,pc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===la||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:Dl,format:Bi,colorSpace:da,depthBuffer:!1},s=R0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q2(a)),this._blurMaterial=J2(a,e,t)}return s}_compileMaterial(e){const t=new Vi(this._lodPlanes[0],e);this._renderer.compile(t,oh)}_sceneToCubeUV(e,t,n,s,a){const f=new Ri(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(w0),g.toneMapping=gs,g.autoClear=!1;const M=new qp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),E=new Vi(new Ma,M);let x=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,x=!0):(M.color.copy(w0),x=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(f.up.set(0,h[b],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[b],a.y,a.z)):A===1?(f.up.set(0,0,h[b]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[b],a.z)):(f.up.set(0,h[b],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[b]));const T=this._cubeSize;pc(s,A*T,b>2?T:0,T,T),g.setRenderTarget(s),x&&g.render(E,f),g.render(e,f)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===la||e.mapping===ua;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b0());const a=s?this._cubemapMaterial:this._equirectMaterial,u=new Vi(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;pc(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(u,oh)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=C0[(s-a-1)%C0.length];this._blur(e,a-1,a,u,c)}t.autoClear=n}_blur(e,t,n,s,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",a),this._halfBlur(u,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,u,c){const f=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Vi(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Qs-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):Qs;x>Qs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Qs}`);const v=[];let b=0;for(let I=0;I<Qs;++I){const k=I/E,C=Math.exp(-k*k/2);v.push(C),I===0?b+=C:I<x&&(b+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/b;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:A}=this;_.dTheta.value=M,_.mipInt.value=A-n;const T=this._sizeLods[s],U=3*T*(s>A-Qo?s-A+Qo:0),F=4*(this._cubeSize-T);pc(t,U,F,3*T,2*T),f.setRenderTarget(t),f.render(g,oh)}}function Q2(r){const e=[],t=[],n=[];let s=r;const a=r-Qo+1+T0.length;for(let u=0;u<a;u++){const c=Math.pow(2,s);t.push(c);let f=1/c;u>r-Qo?f=T0[u-r+Qo-1]:u===0&&(f=0),n.push(f);const h=1/(c-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,M=6,E=3,x=2,v=1,b=new Float32Array(E*M*y),A=new Float32Array(x*M*y),T=new Float32Array(v*M*y);for(let F=0;F<y;F++){const I=F%3*2/3-1,k=F>2?0:-1,C=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];b.set(C,E*M*F),A.set(_,x*M*F);const R=[F,F,F,F,F,F];T.set(R,v*M*F)}const U=new co;U.setAttribute("position",new tr(b,E)),U.setAttribute("uv",new tr(A,x)),U.setAttribute("faceIndex",new tr(T,v)),e.push(U),s>Qo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function R0(r,e,t){const n=new lo(r,e,t);return n.texture.mapping=jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pc(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function J2(r,e,t){const n=new Float32Array(Qs),s=new ce(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function b0(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function P0(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Zp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eC(r){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,h=f===Oh||f===kh,p=f===la||f===ua;if(h||p){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new A0(r)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const y=c.image;return h&&y&&y.height>0||p&&y&&s(y)?(t===null&&(t=new A0(r)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",a),g.texture):null}}}return c}function s(c){let f=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&f++;return f===h}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function tC(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function nC(r,e,t,n){const s={},a=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const y in _)e.update(_[y],r.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let E=0;if(y!==null){const b=y.array;E=y.version;for(let A=0,T=b.length;A<T;A+=3){const U=b[A+0],F=b[A+1],I=b[A+2];_.push(U,F,F,I,I,U)}}else if(M!==void 0){const b=M.array;E=M.version;for(let A=0,T=b.length/3-1;A<T;A+=3){const U=A+0,F=A+1,I=A+2;_.push(U,F,F,I,I,U)}}else return;const x=new(nx(_)?ax:ox)(_,1);x.version=E;const v=a.get(g);v&&e.remove(v),a.set(g,x)}function p(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:c,update:f,getWireframeAttribute:p}}function iC(r,e,t){let n;function s(_){n=_}let a,u;function c(_){a=_.type,u=_.bytesPerElement}function f(_,y){r.drawElements(n,y,a,_*u),t.update(y,n,1)}function h(_,y,M){M!==0&&(r.drawElementsInstanced(n,y,a,_*u,M),t.update(y,n,M))}function p(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,_,0,M);let x=0;for(let v=0;v<M;v++)x+=y[v];t.update(x,n,1)}function g(_,y,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)h(_[v]/u,y[v],E[v]);else{x.multiDrawElementsInstancedWEBGL(n,y,0,a,_,0,E,0,M);let v=0;for(let b=0;b<M;b++)v+=y[b]*E[b];t.update(v,n,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function rC(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sC(r,e,t){const n=new WeakMap,s=new Kt;function a(u,c,f){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=n.get(c);if(_===void 0||_.count!==g){let R=function(){k.dispose(),n.delete(c),c.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let T=0;M===!0&&(T=1),E===!0&&(T=2),x===!0&&(T=3);let U=c.attributes.position.count*T,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const I=new Float32Array(U*F*4*g),k=new ix(I,U,F,g);k.type=Rr,k.needsUpdate=!0;const C=T*4;for(let B=0;B<g;B++){const J=v[B],Z=b[B],fe=A[B],ae=U*F*4*B;for(let se=0;se<J.count;se++){const re=se*C;M===!0&&(s.fromBufferAttribute(J,se),I[ae+re+0]=s.x,I[ae+re+1]=s.y,I[ae+re+2]=s.z,I[ae+re+3]=0),E===!0&&(s.fromBufferAttribute(Z,se),I[ae+re+4]=s.x,I[ae+re+5]=s.y,I[ae+re+6]=s.z,I[ae+re+7]=0),x===!0&&(s.fromBufferAttribute(fe,se),I[ae+re+8]=s.x,I[ae+re+9]=s.y,I[ae+re+10]=s.z,I[ae+re+11]=fe.itemSize===4?s.w:1)}}_={count:g,texture:k,size:new bt(U,F)},n.set(c,_),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",h)}f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:a}}function oC(r,e,t,n){let s=new WeakMap;function a(f){const h=n.render.frame,p=f.geometry,g=e.get(f,p);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),s.get(f)!==h&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function u(){s=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:u}}const px=new ei,L0=new fx(1,1),mx=new ix,gx=new NM,_x=new cx,D0=[],N0=[],I0=new Float32Array(16),U0=new Float32Array(9),F0=new Float32Array(4);function Ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=D0[s];if(a===void 0&&(a=new Float32Array(s),D0[s]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xc(r,e){let t=N0[e];t===void 0&&(t=new Int32Array(e),N0[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function aC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function uC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function cC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function fC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;F0.set(n),r.uniformMatrix2fv(this.addr,!1,F0),pn(t,n)}}function dC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;U0.set(n),r.uniformMatrix3fv(this.addr,!1,U0),pn(t,n)}}function hC(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,n))return;I0.set(n),r.uniformMatrix4fv(this.addr,!1,I0),pn(t,n)}}function pC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function gC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function _C(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function vC(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function yC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function SC(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function EC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(L0.compareFunction=tx,a=L0):a=px,t.setTexture2D(e||a,s)}function MC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gx,s)}function TC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_x,s)}function wC(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||mx,s)}function CC(r){switch(r){case 5126:return aC;case 35664:return lC;case 35665:return uC;case 35666:return cC;case 35674:return fC;case 35675:return dC;case 35676:return hC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return gC;case 35669:case 35673:return _C;case 5125:return vC;case 36294:return xC;case 36295:return yC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return EC;case 35679:case 36299:case 36307:return MC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return wC}}function AC(r,e){r.uniform1fv(this.addr,e)}function RC(r,e){const t=Ta(e,this.size,2);r.uniform2fv(this.addr,t)}function bC(r,e){const t=Ta(e,this.size,3);r.uniform3fv(this.addr,t)}function PC(r,e){const t=Ta(e,this.size,4);r.uniform4fv(this.addr,t)}function LC(r,e){const t=Ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function DC(r,e){const t=Ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function NC(r,e){const t=Ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function IC(r,e){r.uniform1iv(this.addr,e)}function UC(r,e){r.uniform2iv(this.addr,e)}function FC(r,e){r.uniform3iv(this.addr,e)}function OC(r,e){r.uniform4iv(this.addr,e)}function kC(r,e){r.uniform1uiv(this.addr,e)}function zC(r,e){r.uniform2uiv(this.addr,e)}function BC(r,e){r.uniform3uiv(this.addr,e)}function VC(r,e){r.uniform4uiv(this.addr,e)}function HC(r,e,t){const n=this.cache,s=e.length,a=Xc(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||px,a[u])}function GC(r,e,t){const n=this.cache,s=e.length,a=Xc(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||gx,a[u])}function WC(r,e,t){const n=this.cache,s=e.length,a=Xc(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||_x,a[u])}function jC(r,e,t){const n=this.cache,s=e.length,a=Xc(t,s);hn(n,a)||(r.uniform1iv(this.addr,a),pn(n,a));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||mx,a[u])}function XC(r){switch(r){case 5126:return AC;case 35664:return RC;case 35665:return bC;case 35666:return PC;case 35674:return LC;case 35675:return DC;case 35676:return NC;case 5124:case 35670:return IC;case 35667:case 35671:return UC;case 35668:case 35672:return FC;case 35669:case 35673:return OC;case 5125:return kC;case 36294:return zC;case 36295:return BC;case 36296:return VC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return jC}}class YC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=CC(t.type)}}class qC{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XC(t.type)}}class $C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,u=s.length;a!==u;++a){const c=s[a];c.setValue(e,t[c.id],n)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function O0(r,e){r.seq.push(e),r.map[e.id]=e}function ZC(r,e,t){const n=r.name,s=n.length;for(fh.lastIndex=0;;){const a=fh.exec(n),u=fh.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&u+2===s){O0(t,h===void 0?new YC(c,r,e):new qC(c,r,e));break}else{let g=t.map[c];g===void 0&&(g=new $C(c),O0(t,g)),t=g}}}class Tc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),u=e.getUniformLocation(t,a.name);ZC(a,u,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function k0(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const KC=37297;let QC=0;function JC(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=s;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const z0=new ut;function eA(r){Ct._getMatrix(z0,Ct.workingColorSpace,r);const e=`mat3( ${z0.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(r)){case Pc:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function B0(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+JC(r.getShaderSource(e),u)}else return s}function tA(r,e){const t=eA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nA(r,e){let t;switch(e){case sM:t="Linear";break;case oM:t="Reinhard";break;case aM:t="Cineon";break;case lM:t="ACESFilmic";break;case cM:t="AgX";break;case fM:t="Neutral";break;case uM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mc=new ce;function iA(){Ct.getLuminanceCoefficients(mc);const r=mc.x.toFixed(4),e=mc.y.toFixed(4),t=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function sA(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oA(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function fl(r){return r!==""}function V0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(r){return r.replace(aA,uA)}const lA=new Map;function uA(r,e){let t=ct[e];if(t===void 0){const n=lA.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pp(t)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(r){return r.replace(cA,fA)}function fA(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function W0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===kE?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function hA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case la:case ua:e="ENVMAP_TYPE_CUBE";break;case jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function mA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case iM:e="ENVMAP_BLENDING_MIX";break;case rM:e="ENVMAP_BLENDING_ADD";break}return e}function gA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _A(r,e,t,n){const s=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=dA(t),h=hA(t),p=pA(t),g=mA(t),_=gA(t),y=rA(t),M=sA(a),E=s.createProgram();let x,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(fl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(fl).join(`
`),v.length>0&&(v+=`
`)):(x=[W0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),v=[W0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?ct.tonemapping_pars_fragment:"",t.toneMapping!==gs?nA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,tA("linearToOutputTexel",t.outputColorSpace),iA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fl).join(`
`)),u=pp(u),u=V0(u,t),u=H0(u,t),c=pp(c),c=V0(c,t),c=H0(c,t),u=G0(u),c=G0(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const A=b+x+u,T=b+v+c,U=k0(s,s.VERTEX_SHADER,A),F=k0(s,s.FRAGMENT_SHADER,T);s.attachShader(E,U),s.attachShader(E,F),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(B){if(r.debug.checkShaderErrors){const J=s.getProgramInfoLog(E).trim(),Z=s.getShaderInfoLog(U).trim(),fe=s.getShaderInfoLog(F).trim();let ae=!0,se=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,E,U,F);else{const re=B0(s,U,"vertex"),G=B0(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+J+`
`+re+`
`+G)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||fe==="")&&(se=!1);se&&(B.diagnostics={runnable:ae,programLog:J,vertexShader:{log:Z,prefix:x},fragmentShader:{log:fe,prefix:v}})}s.deleteShader(U),s.deleteShader(F),k=new Tc(s,E),C=oA(s,E)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(E,KC)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QC++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=U,this.fragmentShader=F,this}let vA=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yA(e),t.set(e,n)),n}}class yA{constructor(e){this.id=vA++,this.code=e,this.usedTimes=0}}function SA(r,e,t,n,s,a,u){const c=new rx,f=new xA,h=new Set,p=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return h.add(C),C===0?"uv":`uv${C}`}function x(C,R,B,J,Z){const fe=J.fog,ae=Z.geometry,se=C.isMeshStandardMaterial?J.environment:null,re=(C.isMeshStandardMaterial?t:e).get(C.envMap||se),G=re&&re.mapping===jc?re.image.height:null,de=M[C.type];C.precision!==null&&(y=s.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const H=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,N=H!==void 0?H.length:0;let q=0;ae.morphAttributes.position!==void 0&&(q=1),ae.morphAttributes.normal!==void 0&&(q=2),ae.morphAttributes.color!==void 0&&(q=3);let ye,V,ne,_e;if(de){const Et=Zi[de];ye=Et.vertexShader,V=Et.fragmentShader}else ye=C.vertexShader,V=C.fragmentShader,f.update(C),ne=f.getVertexShaderID(C),_e=f.getFragmentShaderID(C);const pe=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Oe=Z.isInstancedMesh===!0,Ie=Z.isBatchedMesh===!0,Ke=!!C.map,St=!!C.matcap,at=!!re,j=!!C.aoMap,kn=!!C.lightMap,mt=!!C.bumpMap,dt=!!C.normalMap,$e=!!C.displacementMap,Pt=!!C.emissiveMap,Xe=!!C.metalnessMap,O=!!C.roughnessMap,P=C.anisotropy>0,oe=C.clearcoat>0,ve=C.dispersion>0,Se=C.iridescence>0,me=C.sheen>0,Ye=C.transmission>0,Re=P&&!!C.anisotropyMap,ke=oe&&!!C.clearcoatMap,ft=oe&&!!C.clearcoatNormalMap,Ce=oe&&!!C.clearcoatRoughnessMap,Be=Se&&!!C.iridescenceMap,et=Se&&!!C.iridescenceThicknessMap,nt=me&&!!C.sheenColorMap,Ve=me&&!!C.sheenRoughnessMap,ht=!!C.specularMap,st=!!C.specularColorMap,Rt=!!C.specularIntensityMap,$=Ye&&!!C.transmissionMap,be=Ye&&!!C.thicknessMap,he=!!C.gradientMap,ge=!!C.alphaMap,Ne=C.alphaTest>0,De=!!C.alphaHash,ot=!!C.extensions;let Ft=gs;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ft=r.toneMapping);const cn={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:ye,fragmentShader:V,defines:C.defines,customVertexShaderID:ne,customFragmentShaderID:_e,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ie,batchingColor:Ie&&Z._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Z.instanceColor!==null,instancingMorph:Oe&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:da,alphaToCoverage:!!C.alphaToCoverage,map:Ke,matcap:St,envMap:at,envMapMode:at&&re.mapping,envMapCubeUVHeight:G,aoMap:j,lightMap:kn,bumpMap:mt,normalMap:dt,displacementMap:_&&$e,emissiveMap:Pt,normalMapObjectSpace:dt&&C.normalMapType===mM,normalMapTangentSpace:dt&&C.normalMapType===ex,metalnessMap:Xe,roughnessMap:O,anisotropy:P,anisotropyMap:Re,clearcoat:oe,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ce,dispersion:ve,iridescence:Se,iridescenceMap:Be,iridescenceThicknessMap:et,sheen:me,sheenColorMap:nt,sheenRoughnessMap:Ve,specularMap:ht,specularColorMap:st,specularIntensityMap:Rt,transmission:Ye,transmissionMap:$,thicknessMap:be,gradientMap:he,opaque:C.transparent===!1&&C.blending===ta&&C.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ne,alphaHash:De,combine:C.combine,mapUv:Ke&&E(C.map.channel),aoMapUv:j&&E(C.aoMap.channel),lightMapUv:kn&&E(C.lightMap.channel),bumpMapUv:mt&&E(C.bumpMap.channel),normalMapUv:dt&&E(C.normalMap.channel),displacementMapUv:$e&&E(C.displacementMap.channel),emissiveMapUv:Pt&&E(C.emissiveMap.channel),metalnessMapUv:Xe&&E(C.metalnessMap.channel),roughnessMapUv:O&&E(C.roughnessMap.channel),anisotropyMapUv:Re&&E(C.anisotropyMap.channel),clearcoatMapUv:ke&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:ft&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:et&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(C.sheenRoughnessMap.channel),specularMapUv:ht&&E(C.specularMap.channel),specularColorMapUv:st&&E(C.specularColorMap.channel),specularIntensityMapUv:Rt&&E(C.specularIntensityMap.channel),transmissionMapUv:$&&E(C.transmissionMap.channel),thicknessMapUv:be&&E(C.thicknessMap.channel),alphaMapUv:ge&&E(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(dt||P),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ae.attributes.uv&&(Ke||ge),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Me,skinning:Z.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Ke&&C.map.isVideoTexture===!0&&Ct.getTransfer(C.map.colorSpace)===Lt,decodeVideoTextureEmissive:Pt&&C.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(C.emissiveMap.colorSpace)===Lt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ki,flipSided:C.side===Jn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ot&&C.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&C.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return cn.vertexUv1s=h.has(1),cn.vertexUv2s=h.has(2),cn.vertexUv3s=h.has(3),h.clear(),cn}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(b(R,C),A(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function b(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function A(C,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),C.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),C.push(c.mask)}function T(C){const R=M[C.type];let B;if(R){const J=Zi[R];B=YM.clone(J.uniforms)}else B=C.uniforms;return B}function U(C,R){let B;for(let J=0,Z=p.length;J<Z;J++){const fe=p[J];if(fe.cacheKey===R){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new _A(r,R,C,a),p.push(B)),B}function F(C){if(--C.usedTimes===0){const R=p.indexOf(C);p[R]=p[p.length-1],p.pop(),C.destroy()}}function I(C){f.remove(C)}function k(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:T,acquireProgram:U,releaseProgram:F,releaseShaderCache:I,programs:p,dispose:k}}function EA(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let c=r.get(u);return c===void 0&&(c={},r.set(u,c)),c}function n(u){r.delete(u)}function s(u,c,f){r.get(u)[c]=f}function a(){r=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function MA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function j0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function X0(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function u(g,_,y,M,E,x){let v=r[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:E,group:x},r[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=M,v.renderOrder=g.renderOrder,v.z=E,v.group=x),e++,v}function c(g,_,y,M,E,x){const v=u(g,_,y,M,E,x);y.transmission>0?n.push(v):y.transparent===!0?s.push(v):t.push(v)}function f(g,_,y,M,E,x){const v=u(g,_,y,M,E,x);y.transmission>0?n.unshift(v):y.transparent===!0?s.unshift(v):t.unshift(v)}function h(g,_){t.length>1&&t.sort(g||MA),n.length>1&&n.sort(_||j0),s.length>1&&s.sort(_||j0)}function p(){for(let g=e,_=r.length;g<_;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:c,unshift:f,finish:p,sort:h}}function TA(){let r=new WeakMap;function e(n,s){const a=r.get(n);let u;return a===void 0?(u=new X0,r.set(n,[u])):s>=a.length?(u=new X0,a.push(u)):u=a[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function wA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new At};break;case"SpotLight":t={position:new ce,direction:new ce,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=t,t}}}function CA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let AA=0;function RA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bA(r){const e=new wA,t=CA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ce);const s=new ce,a=new Jt,u=new Jt;function c(h){let p=0,g=0,_=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let y=0,M=0,E=0,x=0,v=0,b=0,A=0,T=0,U=0,F=0,I=0;h.sort(RA);for(let C=0,R=h.length;C<R;C++){const B=h[C],J=B.color,Z=B.intensity,fe=B.distance,ae=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)p+=J.r*Z,g+=J.g*Z,_+=J.b*Z;else if(B.isLightProbe){for(let se=0;se<9;se++)n.probe[se].addScaledVector(B.sh.coefficients[se],Z);I++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const re=B.shadow,G=t.get(B);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.directionalShadow[y]=G,n.directionalShadowMap[y]=ae,n.directionalShadowMatrix[y]=B.shadow.matrix,b++}n.directional[y]=se,y++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(J).multiplyScalar(Z),se.distance=fe,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,n.spot[E]=se;const re=B.shadow;if(B.map&&(n.spotLightMap[U]=B.map,U++,re.updateMatrices(B),B.castShadow&&F++),n.spotLightMatrix[E]=re.matrix,B.castShadow){const G=t.get(B);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,n.spotShadow[E]=G,n.spotShadowMap[E]=ae,T++}E++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(J).multiplyScalar(Z),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),n.rectArea[x]=se,x++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const re=B.shadow,G=t.get(B);G.shadowIntensity=re.intensity,G.shadowBias=re.bias,G.shadowNormalBias=re.normalBias,G.shadowRadius=re.radius,G.shadowMapSize=re.mapSize,G.shadowCameraNear=re.camera.near,G.shadowCameraFar=re.camera.far,n.pointShadow[M]=G,n.pointShadowMap[M]=ae,n.pointShadowMatrix[M]=B.shadow.matrix,A++}n.point[M]=se,M++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(Z),se.groundColor.copy(B.groundColor).multiplyScalar(Z),n.hemi[v]=se,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=_;const k=n.hash;(k.directionalLength!==y||k.pointLength!==M||k.spotLength!==E||k.rectAreaLength!==x||k.hemiLength!==v||k.numDirectionalShadows!==b||k.numPointShadows!==A||k.numSpotShadows!==T||k.numSpotMaps!==U||k.numLightProbes!==I)&&(n.directional.length=y,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=T+U-F,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=I,k.directionalLength=y,k.pointLength=M,k.spotLength=E,k.rectAreaLength=x,k.hemiLength=v,k.numDirectionalShadows=b,k.numPointShadows=A,k.numSpotShadows=T,k.numSpotMaps=U,k.numLightProbes=I,n.version=AA++)}function f(h,p){let g=0,_=0,y=0,M=0,E=0;const x=p.matrixWorldInverse;for(let v=0,b=h.length;v<b;v++){const A=h[v];if(A.isDirectionalLight){const T=n.directional[g];T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),g++}else if(A.isSpotLight){const T=n.spot[y];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(x),y++}else if(A.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(x),u.identity(),a.copy(A.matrixWorld),a.premultiply(x),u.extractRotation(a),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),M++}else if(A.isPointLight){const T=n.point[_];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(x),_++}else if(A.isHemisphereLight){const T=n.hemi[E];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(x),E++}}}return{setup:c,setupView:f,state:n}}function Y0(r){const e=new bA(r),t=[],n=[];function s(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function u(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:u}}function PA(r){let e=new WeakMap;function t(s,a=0){const u=e.get(s);let c;return u===void 0?(c=new Y0(r),e.set(s,[c])):a>=u.length?(c=new Y0(r),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NA(r,e,t){let n=new $p;const s=new bt,a=new bt,u=new Kt,c=new iT({depthPacking:pM}),f=new rT,h={},p=t.maxTextureSize,g={[xs]:Jn,[Jn]:xs,[Ki]:Ki},_=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:LA,fragmentShader:DA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new co;M.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vi(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let v=this.type;this.render=function(F,I,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const C=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),J=r.state;J.setBlending(ms),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=v!==wr&&this.type===wr,fe=v===wr&&this.type!==wr;for(let ae=0,se=F.length;ae<se;ae++){const re=F[ae],G=re.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const de=G.getFrameExtents();if(s.multiply(de),a.copy(G.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/de.x),s.x=a.x*de.x,G.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/de.y),s.y=a.y*de.y,G.mapSize.y=a.y)),G.map===null||Z===!0||fe===!0){const N=this.type!==wr?{minFilter:Hi,magFilter:Hi}:{};G.map!==null&&G.map.dispose(),G.map=new lo(s.x,s.y,N),G.map.texture.name=re.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const H=G.getViewportCount();for(let N=0;N<H;N++){const q=G.getViewport(N);u.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),J.viewport(u),G.updateMatrices(re,N),n=G.getFrustum(),T(I,k,G.camera,re,this.type)}G.isPointLightShadow!==!0&&this.type===wr&&b(G,k),G.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(C,R,B)};function b(F,I){const k=e.update(E);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new lo(s.x,s.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(I,null,k,_,E,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(I,null,k,y,E,null)}function A(F,I,k,C){let R=null;const B=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)R=B;else if(R=k.isPointLight===!0?f:c,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const J=R.uuid,Z=I.uuid;let fe=h[J];fe===void 0&&(fe={},h[J]=fe);let ae=fe[Z];ae===void 0&&(ae=R.clone(),fe[Z]=ae,I.addEventListener("dispose",U)),R=ae}if(R.visible=I.visible,R.wireframe=I.wireframe,C===wr?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=r.properties.get(R);J.light=k}return R}function T(F,I,k,C,R){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===wr)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const Z=e.update(F),fe=F.material;if(Array.isArray(fe)){const ae=Z.groups;for(let se=0,re=ae.length;se<re;se++){const G=ae[se],de=fe[G.materialIndex];if(de&&de.visible){const H=A(F,de,C,R);F.onBeforeShadow(r,F,I,k,Z,H,G),r.renderBufferDirect(k,null,Z,H,F,G),F.onAfterShadow(r,F,I,k,Z,H,G)}}}else if(fe.visible){const ae=A(F,fe,C,R);F.onBeforeShadow(r,F,I,k,Z,ae,null),r.renderBufferDirect(k,null,Z,ae,F,null),F.onAfterShadow(r,F,I,k,Z,ae,null)}}const J=F.children;for(let Z=0,fe=J.length;Z<fe;Z++)T(J[Z],I,k,C,R)}function U(F){F.target.removeEventListener("dispose",U);for(const k in h){const C=h[k],R=F.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const IA={[Ph]:Lh,[Dh]:Uh,[Nh]:Fh,[aa]:Ih,[Lh]:Ph,[Uh]:Dh,[Fh]:Nh,[Ih]:aa};function UA(r,e){function t(){let $=!1;const be=new Kt;let he=null;const ge=new Kt(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!$&&(r.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){$=Ne},setClear:function(Ne,De,ot,Ft,cn){cn===!0&&(Ne*=Ft,De*=Ft,ot*=Ft),be.set(Ne,De,ot,Ft),ge.equals(be)===!1&&(r.clearColor(Ne,De,ot,Ft),ge.copy(be))},reset:function(){$=!1,he=null,ge.set(-1,0,0,0)}}}function n(){let $=!1,be=!1,he=null,ge=null,Ne=null;return{setReversed:function(De){if(be!==De){const ot=e.get("EXT_clip_control");be?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Ne;Ne=null,this.setClear(Ft)}be=De},getReversed:function(){return be},setTest:function(De){De?pe(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(De){he!==De&&!$&&(r.depthMask(De),he=De)},setFunc:function(De){if(be&&(De=IA[De]),ge!==De){switch(De){case Ph:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case aa:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Ih:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=De}},setLocked:function(De){$=De},setClear:function(De){Ne!==De&&(be&&(De=1-De),r.clearDepth(De),Ne=De)},reset:function(){$=!1,he=null,ge=null,Ne=null,be=!1}}}function s(){let $=!1,be=null,he=null,ge=null,Ne=null,De=null,ot=null,Ft=null,cn=null;return{setTest:function(Et){$||(Et?pe(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Et){be!==Et&&!$&&(r.stencilMask(Et),be=Et)},setFunc:function(Et,jn,zn){(he!==Et||ge!==jn||Ne!==zn)&&(r.stencilFunc(Et,jn,zn),he=Et,ge=jn,Ne=zn)},setOp:function(Et,jn,zn){(De!==Et||ot!==jn||Ft!==zn)&&(r.stencilOp(Et,jn,zn),De=Et,ot=jn,Ft=zn)},setLocked:function(Et){$=Et},setClear:function(Et){cn!==Et&&(r.clearStencil(Et),cn=Et)},reset:function(){$=!1,be=null,he=null,ge=null,Ne=null,De=null,ot=null,Ft=null,cn=null}}}const a=new t,u=new n,c=new s,f=new WeakMap,h=new WeakMap;let p={},g={},_=new WeakMap,y=[],M=null,E=!1,x=null,v=null,b=null,A=null,T=null,U=null,F=null,I=new At(0,0,0),k=0,C=!1,R=null,B=null,J=null,Z=null,fe=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,re=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(G)[1]),se=re>=1):G.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),se=re>=2);let de=null,H={};const N=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),ye=new Kt().fromArray(N),V=new Kt().fromArray(q);function ne($,be,he,ge){const Ne=new Uint8Array(4),De=r.createTexture();r.bindTexture($,De),r.texParameteri($,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri($,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<he;ot++)$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ne):r.texImage2D(be+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ne);return De}const _e={};_e[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),pe(r.DEPTH_TEST),u.setFunc(aa),mt(!1),dt(K_),pe(r.CULL_FACE),j(ms);function pe($){p[$]!==!0&&(r.enable($),p[$]=!0)}function Me($){p[$]!==!1&&(r.disable($),p[$]=!1)}function Oe($,be){return g[$]!==be?(r.bindFramebuffer($,be),g[$]=be,$===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=be),$===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=be),!0):!1}function Ie($,be){let he=y,ge=!1;if($){he=_.get(be),he===void 0&&(he=[],_.set(be,he));const Ne=$.textures;if(he.length!==Ne.length||he[0]!==r.COLOR_ATTACHMENT0){for(let De=0,ot=Ne.length;De<ot;De++)he[De]=r.COLOR_ATTACHMENT0+De;he.length=Ne.length,ge=!0}}else he[0]!==r.BACK&&(he[0]=r.BACK,ge=!0);ge&&r.drawBuffers(he)}function Ke($){return M!==$?(r.useProgram($),M=$,!0):!1}const St={[Ks]:r.FUNC_ADD,[BE]:r.FUNC_SUBTRACT,[VE]:r.FUNC_REVERSE_SUBTRACT};St[HE]=r.MIN,St[GE]=r.MAX;const at={[WE]:r.ZERO,[jE]:r.ONE,[XE]:r.SRC_COLOR,[Rh]:r.SRC_ALPHA,[QE]:r.SRC_ALPHA_SATURATE,[ZE]:r.DST_COLOR,[qE]:r.DST_ALPHA,[YE]:r.ONE_MINUS_SRC_COLOR,[bh]:r.ONE_MINUS_SRC_ALPHA,[KE]:r.ONE_MINUS_DST_COLOR,[$E]:r.ONE_MINUS_DST_ALPHA,[JE]:r.CONSTANT_COLOR,[eM]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function j($,be,he,ge,Ne,De,ot,Ft,cn,Et){if($===ms){E===!0&&(Me(r.BLEND),E=!1);return}if(E===!1&&(pe(r.BLEND),E=!0),$!==zE){if($!==x||Et!==C){if((v!==Ks||T!==Ks)&&(r.blendEquation(r.FUNC_ADD),v=Ks,T=Ks),Et)switch($){case ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ah:r.blendFunc(r.ONE,r.ONE);break;case Q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case J_:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ah:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case J_:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}b=null,A=null,U=null,F=null,I.set(0,0,0),k=0,x=$,C=Et}return}Ne=Ne||be,De=De||he,ot=ot||ge,(be!==v||Ne!==T)&&(r.blendEquationSeparate(St[be],St[Ne]),v=be,T=Ne),(he!==b||ge!==A||De!==U||ot!==F)&&(r.blendFuncSeparate(at[he],at[ge],at[De],at[ot]),b=he,A=ge,U=De,F=ot),(Ft.equals(I)===!1||cn!==k)&&(r.blendColor(Ft.r,Ft.g,Ft.b,cn),I.copy(Ft),k=cn),x=$,C=!1}function kn($,be){$.side===Ki?Me(r.CULL_FACE):pe(r.CULL_FACE);let he=$.side===Jn;be&&(he=!he),mt(he),$.blending===ta&&$.transparent===!1?j(ms):j($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),a.setMask($.colorWrite);const ge=$.stencilWrite;c.setTest(ge),ge&&(c.setMask($.stencilWriteMask),c.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),c.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Pt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt($){R!==$&&($?r.frontFace(r.CW):r.frontFace(r.CCW),R=$)}function dt($){$!==FE?(pe(r.CULL_FACE),$!==B&&($===K_?r.cullFace(r.BACK):$===OE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),B=$}function $e($){$!==J&&(se&&r.lineWidth($),J=$)}function Pt($,be,he){$?(pe(r.POLYGON_OFFSET_FILL),(Z!==be||fe!==he)&&(r.polygonOffset(be,he),Z=be,fe=he)):Me(r.POLYGON_OFFSET_FILL)}function Xe($){$?pe(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function O($){$===void 0&&($=r.TEXTURE0+ae-1),de!==$&&(r.activeTexture($),de=$)}function P($,be,he){he===void 0&&(de===null?he=r.TEXTURE0+ae-1:he=de);let ge=H[he];ge===void 0&&(ge={type:void 0,texture:void 0},H[he]=ge),(ge.type!==$||ge.texture!==be)&&(de!==he&&(r.activeTexture(he),de=he),r.bindTexture($,be||_e[$]),ge.type=$,ge.texture=be)}function oe(){const $=H[de];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ve(){try{r.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Se(){try{r.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function me(){try{r.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ye(){try{r.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke(){try{r.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{r.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{r.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Be(){try{r.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function et(){try{r.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function nt($){ye.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),ye.copy($))}function Ve($){V.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),V.copy($))}function ht($,be){let he=h.get(be);he===void 0&&(he=new WeakMap,h.set(be,he));let ge=he.get($);ge===void 0&&(ge=r.getUniformBlockIndex(be,$.name),he.set($,ge))}function st($,be){const ge=h.get(be).get($);f.get(be)!==ge&&(r.uniformBlockBinding(be,ge,$.__bindingPointIndex),f.set(be,ge))}function Rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},de=null,H={},g={},_=new WeakMap,y=[],M=null,E=!1,x=null,v=null,b=null,A=null,T=null,U=null,F=null,I=new At(0,0,0),k=0,C=!1,R=null,B=null,J=null,Z=null,fe=null,ye.set(0,0,r.canvas.width,r.canvas.height),V.set(0,0,r.canvas.width,r.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:pe,disable:Me,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Ke,setBlending:j,setMaterial:kn,setFlipSided:mt,setCullFace:dt,setLineWidth:$e,setPolygonOffset:Pt,setScissorTest:Xe,activeTexture:O,bindTexture:P,unbindTexture:oe,compressedTexImage2D:ve,compressedTexImage3D:Se,texImage2D:Be,texImage3D:et,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:ft,texStorage3D:Ce,texSubImage2D:me,texSubImage3D:Ye,compressedTexSubImage2D:Re,compressedTexSubImage3D:ke,scissor:nt,viewport:Ve,reset:Rt}}function FA(r,e,t,n,s,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,p=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,P){return y?new OffscreenCanvas(O,P):Dc("canvas")}function E(O,P,oe){let ve=1;const Se=Xe(O);if((Se.width>oe||Se.height>oe)&&(ve=oe/Math.max(Se.width,Se.height)),ve<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const me=Math.floor(ve*Se.width),Ye=Math.floor(ve*Se.height);g===void 0&&(g=M(me,Ye));const Re=P?M(me,Ye):g;return Re.width=me,Re.height=Ye,Re.getContext("2d").drawImage(O,0,0,me,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+me+"x"+Ye+")."),Re}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),O;return O}function x(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(O,P,oe,ve,Se=!1){if(O!==null){if(r[O]!==void 0)return r[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let me=P;if(P===r.RED&&(oe===r.FLOAT&&(me=r.R32F),oe===r.HALF_FLOAT&&(me=r.R16F),oe===r.UNSIGNED_BYTE&&(me=r.R8)),P===r.RED_INTEGER&&(oe===r.UNSIGNED_BYTE&&(me=r.R8UI),oe===r.UNSIGNED_SHORT&&(me=r.R16UI),oe===r.UNSIGNED_INT&&(me=r.R32UI),oe===r.BYTE&&(me=r.R8I),oe===r.SHORT&&(me=r.R16I),oe===r.INT&&(me=r.R32I)),P===r.RG&&(oe===r.FLOAT&&(me=r.RG32F),oe===r.HALF_FLOAT&&(me=r.RG16F),oe===r.UNSIGNED_BYTE&&(me=r.RG8)),P===r.RG_INTEGER&&(oe===r.UNSIGNED_BYTE&&(me=r.RG8UI),oe===r.UNSIGNED_SHORT&&(me=r.RG16UI),oe===r.UNSIGNED_INT&&(me=r.RG32UI),oe===r.BYTE&&(me=r.RG8I),oe===r.SHORT&&(me=r.RG16I),oe===r.INT&&(me=r.RG32I)),P===r.RGB_INTEGER&&(oe===r.UNSIGNED_BYTE&&(me=r.RGB8UI),oe===r.UNSIGNED_SHORT&&(me=r.RGB16UI),oe===r.UNSIGNED_INT&&(me=r.RGB32UI),oe===r.BYTE&&(me=r.RGB8I),oe===r.SHORT&&(me=r.RGB16I),oe===r.INT&&(me=r.RGB32I)),P===r.RGBA_INTEGER&&(oe===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),oe===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),oe===r.UNSIGNED_INT&&(me=r.RGBA32UI),oe===r.BYTE&&(me=r.RGBA8I),oe===r.SHORT&&(me=r.RGBA16I),oe===r.INT&&(me=r.RGBA32I)),P===r.RGB&&oe===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),P===r.RGBA){const Ye=Se?Pc:Ct.getTransfer(ve);oe===r.FLOAT&&(me=r.RGBA32F),oe===r.HALF_FLOAT&&(me=r.RGBA16F),oe===r.UNSIGNED_BYTE&&(me=Ye===Lt?r.SRGB8_ALPHA8:r.RGBA8),oe===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),oe===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function T(O,P){let oe;return O?P===null||P===ao||P===ca?oe=r.DEPTH24_STENCIL8:P===Rr?oe=r.DEPTH32F_STENCIL8:P===xl&&(oe=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ao||P===ca?oe=r.DEPTH_COMPONENT24:P===Rr?oe=r.DEPTH_COMPONENT32F:P===xl&&(oe=r.DEPTH_COMPONENT16),oe}function U(O,P){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Hi&&O.minFilter!==Ji?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function F(O){const P=O.target;P.removeEventListener("dispose",F),k(P),P.isVideoTexture&&p.delete(P)}function I(O){const P=O.target;P.removeEventListener("dispose",I),R(P)}function k(O){const P=n.get(O);if(P.__webglInit===void 0)return;const oe=O.source,ve=_.get(oe);if(ve){const Se=ve[P.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&C(O),Object.keys(ve).length===0&&_.delete(oe)}n.remove(O)}function C(O){const P=n.get(O);r.deleteTexture(P.__webglTexture);const oe=O.source,ve=_.get(oe);delete ve[P.__cacheKey],u.memory.textures--}function R(O){const P=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(P.__webglFramebuffer[ve]))for(let Se=0;Se<P.__webglFramebuffer[ve].length;Se++)r.deleteFramebuffer(P.__webglFramebuffer[ve][Se]);else r.deleteFramebuffer(P.__webglFramebuffer[ve]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[ve])}else{if(Array.isArray(P.__webglFramebuffer))for(let ve=0;ve<P.__webglFramebuffer.length;ve++)r.deleteFramebuffer(P.__webglFramebuffer[ve]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ve=0;ve<P.__webglColorRenderbuffer.length;ve++)P.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[ve]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const oe=O.textures;for(let ve=0,Se=oe.length;ve<Se;ve++){const me=n.get(oe[ve]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),u.memory.textures--),n.remove(oe[ve])}n.remove(O)}let B=0;function J(){B=0}function Z(){const O=B;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function fe(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function ae(O,P){const oe=n.get(O);if(O.isVideoTexture&&$e(O),O.isRenderTargetTexture===!1&&O.version>0&&oe.__version!==O.version){const ve=O.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(oe,O,P);return}}t.bindTexture(r.TEXTURE_2D,oe.__webglTexture,r.TEXTURE0+P)}function se(O,P){const oe=n.get(O);if(O.version>0&&oe.__version!==O.version){V(oe,O,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,oe.__webglTexture,r.TEXTURE0+P)}function re(O,P){const oe=n.get(O);if(O.version>0&&oe.__version!==O.version){V(oe,O,P);return}t.bindTexture(r.TEXTURE_3D,oe.__webglTexture,r.TEXTURE0+P)}function G(O,P){const oe=n.get(O);if(O.version>0&&oe.__version!==O.version){ne(oe,O,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture,r.TEXTURE0+P)}const de={[zh]:r.REPEAT,[Js]:r.CLAMP_TO_EDGE,[Bh]:r.MIRRORED_REPEAT},H={[Hi]:r.NEAREST,[dM]:r.NEAREST_MIPMAP_NEAREST,[qu]:r.NEAREST_MIPMAP_LINEAR,[Ji]:r.LINEAR,[Ud]:r.LINEAR_MIPMAP_NEAREST,[eo]:r.LINEAR_MIPMAP_LINEAR},N={[gM]:r.NEVER,[EM]:r.ALWAYS,[_M]:r.LESS,[tx]:r.LEQUAL,[vM]:r.EQUAL,[SM]:r.GEQUAL,[xM]:r.GREATER,[yM]:r.NOTEQUAL};function q(O,P){if(P.type===Rr&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Ji||P.magFilter===Ud||P.magFilter===qu||P.magFilter===eo||P.minFilter===Ji||P.minFilter===Ud||P.minFilter===qu||P.minFilter===eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,de[P.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,de[P.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,de[P.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,H[P.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,H[P.minFilter]),P.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,N[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Hi||P.minFilter!==qu&&P.minFilter!==eo||P.type===Rr&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ye(O,P){let oe=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",F));const ve=P.source;let Se=_.get(ve);Se===void 0&&(Se={},_.set(ve,Se));const me=fe(P);if(me!==O.__cacheKey){Se[me]===void 0&&(Se[me]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),Se[me].usedTimes++;const Ye=Se[O.__cacheKey];Ye!==void 0&&(Se[O.__cacheKey].usedTimes--,Ye.usedTimes===0&&C(P)),O.__cacheKey=me,O.__webglTexture=Se[me].texture}return oe}function V(O,P,oe){let ve=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ve=r.TEXTURE_3D);const Se=ye(O,P),me=P.source;t.bindTexture(ve,O.__webglTexture,r.TEXTURE0+oe);const Ye=n.get(me);if(me.version!==Ye.__version||Se===!0){t.activeTexture(r.TEXTURE0+oe);const Re=Ct.getPrimaries(Ct.workingColorSpace),ke=P.colorSpace===fs?null:Ct.getPrimaries(P.colorSpace),ft=P.colorSpace===fs||Re===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ce=E(P.image,!1,s.maxTextureSize);Ce=Pt(P,Ce);const Be=a.convert(P.format,P.colorSpace),et=a.convert(P.type);let nt=A(P.internalFormat,Be,et,P.colorSpace,P.isVideoTexture);q(ve,P);let Ve;const ht=P.mipmaps,st=P.isVideoTexture!==!0,Rt=Ye.__version===void 0||Se===!0,$=me.dataReady,be=U(P,Ce);if(P.isDepthTexture)nt=T(P.format===fa,P.type),Rt&&(st?t.texStorage2D(r.TEXTURE_2D,1,nt,Ce.width,Ce.height):t.texImage2D(r.TEXTURE_2D,0,nt,Ce.width,Ce.height,0,Be,et,null));else if(P.isDataTexture)if(ht.length>0){st&&Rt&&t.texStorage2D(r.TEXTURE_2D,be,nt,ht[0].width,ht[0].height);for(let he=0,ge=ht.length;he<ge;he++)Ve=ht[he],st?$&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Ve.width,Ve.height,Be,et,Ve.data):t.texImage2D(r.TEXTURE_2D,he,nt,Ve.width,Ve.height,0,Be,et,Ve.data);P.generateMipmaps=!1}else st?(Rt&&t.texStorage2D(r.TEXTURE_2D,be,nt,Ce.width,Ce.height),$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Be,et,Ce.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Ce.width,Ce.height,0,Be,et,Ce.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){st&&Rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,nt,ht[0].width,ht[0].height,Ce.depth);for(let he=0,ge=ht.length;he<ge;he++)if(Ve=ht[he],P.format!==Bi)if(Be!==null)if(st){if($)if(P.layerUpdates.size>0){const Ne=M0(Ve.width,Ve.height,P.format,P.type);for(const De of P.layerUpdates){const ot=Ve.data.subarray(De*Ne/Ve.data.BYTES_PER_ELEMENT,(De+1)*Ne/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,De,Ve.width,Ve.height,1,Be,ot)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Ve.width,Ve.height,Ce.depth,Be,Ve.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,he,nt,Ve.width,Ve.height,Ce.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?$&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,he,0,0,0,Ve.width,Ve.height,Ce.depth,Be,et,Ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,he,nt,Ve.width,Ve.height,Ce.depth,0,Be,et,Ve.data)}else{st&&Rt&&t.texStorage2D(r.TEXTURE_2D,be,nt,ht[0].width,ht[0].height);for(let he=0,ge=ht.length;he<ge;he++)Ve=ht[he],P.format!==Bi?Be!==null?st?$&&t.compressedTexSubImage2D(r.TEXTURE_2D,he,0,0,Ve.width,Ve.height,Be,Ve.data):t.compressedTexImage2D(r.TEXTURE_2D,he,nt,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?$&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Ve.width,Ve.height,Be,et,Ve.data):t.texImage2D(r.TEXTURE_2D,he,nt,Ve.width,Ve.height,0,Be,et,Ve.data)}else if(P.isDataArrayTexture)if(st){if(Rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,nt,Ce.width,Ce.height,Ce.depth),$)if(P.layerUpdates.size>0){const he=M0(Ce.width,Ce.height,P.format,P.type);for(const ge of P.layerUpdates){const Ne=Ce.data.subarray(ge*he/Ce.data.BYTES_PER_ELEMENT,(ge+1)*he/Ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ce.width,Ce.height,1,Be,et,Ne)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Be,et,Ce.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Ce.width,Ce.height,Ce.depth,0,Be,et,Ce.data);else if(P.isData3DTexture)st?(Rt&&t.texStorage3D(r.TEXTURE_3D,be,nt,Ce.width,Ce.height,Ce.depth),$&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Be,et,Ce.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Ce.width,Ce.height,Ce.depth,0,Be,et,Ce.data);else if(P.isFramebufferTexture){if(Rt)if(st)t.texStorage2D(r.TEXTURE_2D,be,nt,Ce.width,Ce.height);else{let he=Ce.width,ge=Ce.height;for(let Ne=0;Ne<be;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,nt,he,ge,0,Be,et,null),he>>=1,ge>>=1}}else if(ht.length>0){if(st&&Rt){const he=Xe(ht[0]);t.texStorage2D(r.TEXTURE_2D,be,nt,he.width,he.height)}for(let he=0,ge=ht.length;he<ge;he++)Ve=ht[he],st?$&&t.texSubImage2D(r.TEXTURE_2D,he,0,0,Be,et,Ve):t.texImage2D(r.TEXTURE_2D,he,nt,Be,et,Ve);P.generateMipmaps=!1}else if(st){if(Rt){const he=Xe(Ce);t.texStorage2D(r.TEXTURE_2D,be,nt,he.width,he.height)}$&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,et,Ce)}else t.texImage2D(r.TEXTURE_2D,0,nt,Be,et,Ce);x(P)&&v(ve),Ye.__version=me.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function ne(O,P,oe){if(P.image.length!==6)return;const ve=ye(O,P),Se=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+oe);const me=n.get(Se);if(Se.version!==me.__version||ve===!0){t.activeTexture(r.TEXTURE0+oe);const Ye=Ct.getPrimaries(Ct.workingColorSpace),Re=P.colorSpace===fs?null:Ct.getPrimaries(P.colorSpace),ke=P.colorSpace===fs||Ye===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=P.isCompressedTexture||P.image[0].isCompressedTexture,Ce=P.image[0]&&P.image[0].isDataTexture,Be=[];for(let ge=0;ge<6;ge++)!ft&&!Ce?Be[ge]=E(P.image[ge],!0,s.maxCubemapSize):Be[ge]=Ce?P.image[ge].image:P.image[ge],Be[ge]=Pt(P,Be[ge]);const et=Be[0],nt=a.convert(P.format,P.colorSpace),Ve=a.convert(P.type),ht=A(P.internalFormat,nt,Ve,P.colorSpace),st=P.isVideoTexture!==!0,Rt=me.__version===void 0||ve===!0,$=Se.dataReady;let be=U(P,et);q(r.TEXTURE_CUBE_MAP,P);let he;if(ft){st&&Rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,et.width,et.height);for(let ge=0;ge<6;ge++){he=Be[ge].mipmaps;for(let Ne=0;Ne<he.length;Ne++){const De=he[Ne];P.format!==Bi?nt!==null?st?$&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,De.width,De.height,nt,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,ht,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,De.width,De.height,nt,Ve,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,ht,De.width,De.height,0,nt,Ve,De.data)}}}else{if(he=P.mipmaps,st&&Rt){he.length>0&&be++;const ge=Xe(Be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,be,ht,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ce){st?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Be[ge].width,Be[ge].height,nt,Ve,Be[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,Be[ge].width,Be[ge].height,0,nt,Ve,Be[ge].data);for(let Ne=0;Ne<he.length;Ne++){const ot=he[Ne].image[ge].image;st?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,ot.width,ot.height,nt,Ve,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,ht,ot.width,ot.height,0,nt,Ve,ot.data)}}else{st?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,nt,Ve,Be[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ht,nt,Ve,Be[ge]);for(let Ne=0;Ne<he.length;Ne++){const De=he[Ne];st?$&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,nt,Ve,De.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,ht,nt,Ve,De.image[ge])}}}x(P)&&v(r.TEXTURE_CUBE_MAP),me.__version=Se.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function _e(O,P,oe,ve,Se,me){const Ye=a.convert(oe.format,oe.colorSpace),Re=a.convert(oe.type),ke=A(oe.internalFormat,Ye,Re,oe.colorSpace),ft=n.get(P),Ce=n.get(oe);if(Ce.__renderTarget=P,!ft.__hasExternalTextures){const Be=Math.max(1,P.width>>me),et=Math.max(1,P.height>>me);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?t.texImage3D(Se,me,ke,Be,et,P.depth,0,Ye,Re,null):t.texImage2D(Se,me,ke,Be,et,0,Ye,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,O),dt(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,Se,Ce.__webglTexture,0,mt(P)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,Se,Ce.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(O,P,oe){if(r.bindRenderbuffer(r.RENDERBUFFER,O),P.depthBuffer){const ve=P.depthTexture,Se=ve&&ve.isDepthTexture?ve.type:null,me=T(P.stencilBuffer,Se),Ye=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=mt(P);dt(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,me,P.width,P.height):oe?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,me,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,me,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,O)}else{const ve=P.textures;for(let Se=0;Se<ve.length;Se++){const me=ve[Se],Ye=a.convert(me.format,me.colorSpace),Re=a.convert(me.type),ke=A(me.internalFormat,Ye,Re,me.colorSpace),ft=mt(P);oe&&dt(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,ke,P.width,P.height):dt(P)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,ke,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,ke,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Me(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=n.get(P.depthTexture);ve.__renderTarget=P,(!ve.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ae(P.depthTexture,0);const Se=ve.__webglTexture,me=mt(P);if(P.depthTexture.format===na)dt(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(P.depthTexture.format===fa)dt(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Oe(O){const P=n.get(O),oe=O.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==O.depthTexture){const ve=O.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),ve){const Se=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,ve.removeEventListener("dispose",Se)};ve.addEventListener("dispose",Se),P.__depthDisposeCallback=Se}P.__boundDepthTexture=ve}if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");Me(P.__webglFramebuffer,O)}else if(oe){P.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[ve]),P.__webglDepthbuffer[ve]===void 0)P.__webglDepthbuffer[ve]=r.createRenderbuffer(),pe(P.__webglDepthbuffer[ve],O,!1);else{const Se=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=P.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,me)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),pe(P.__webglDepthbuffer,O,!1);else{const ve=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,Se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(O,P,oe){const ve=n.get(O);P!==void 0&&_e(ve.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),oe!==void 0&&Oe(O)}function Ke(O){const P=O.texture,oe=n.get(O),ve=n.get(P);O.addEventListener("dispose",I);const Se=O.textures,me=O.isWebGLCubeRenderTarget===!0,Ye=Se.length>1;if(Ye||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=P.version,u.memory.textures++),me){oe.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0){oe.__webglFramebuffer[Re]=[];for(let ke=0;ke<P.mipmaps.length;ke++)oe.__webglFramebuffer[Re][ke]=r.createFramebuffer()}else oe.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Re=0;Re<P.mipmaps.length;Re++)oe.__webglFramebuffer[Re]=r.createFramebuffer()}else oe.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Re=0,ke=Se.length;Re<ke;Re++){const ft=n.get(Se[Re]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&dt(O)===!1){oe.__webglMultisampledFramebuffer=r.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Re=0;Re<Se.length;Re++){const ke=Se[Re];oe.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,oe.__webglColorRenderbuffer[Re]);const ft=a.convert(ke.format,ke.colorSpace),Ce=a.convert(ke.type),Be=A(ke.internalFormat,ft,Ce,ke.colorSpace,O.isXRRenderTarget===!0),et=mt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Be,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(oe.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(oe.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),q(r.TEXTURE_CUBE_MAP,P);for(let Re=0;Re<6;Re++)if(P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)_e(oe.__webglFramebuffer[Re][ke],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,ke);else _e(oe.__webglFramebuffer[Re],O,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);x(P)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Re=0,ke=Se.length;Re<ke;Re++){const ft=Se[Re],Ce=n.get(ft);t.bindTexture(r.TEXTURE_2D,Ce.__webglTexture),q(r.TEXTURE_2D,ft),_e(oe.__webglFramebuffer,O,ft,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),x(ft)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,ve.__webglTexture),q(Re,P),P.mipmaps&&P.mipmaps.length>0)for(let ke=0;ke<P.mipmaps.length;ke++)_e(oe.__webglFramebuffer[ke],O,P,r.COLOR_ATTACHMENT0,Re,ke);else _e(oe.__webglFramebuffer,O,P,r.COLOR_ATTACHMENT0,Re,0);x(P)&&v(Re),t.unbindTexture()}O.depthBuffer&&Oe(O)}function St(O){const P=O.textures;for(let oe=0,ve=P.length;oe<ve;oe++){const Se=P[oe];if(x(Se)){const me=b(O),Ye=n.get(Se).__webglTexture;t.bindTexture(me,Ye),v(me),t.unbindTexture()}}}const at=[],j=[];function kn(O){if(O.samples>0){if(dt(O)===!1){const P=O.textures,oe=O.width,ve=O.height;let Se=r.COLOR_BUFFER_BIT;const me=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=n.get(O),Re=P.length>1;if(Re)for(let ke=0;ke<P.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let ke=0;ke<P.length;ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[ke]);const ft=n.get(P[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ft,0)}r.blitFramebuffer(0,0,oe,ve,0,0,oe,ve,Se,r.NEAREST),f===!0&&(at.length=0,j.length=0,at.push(r.COLOR_ATTACHMENT0+ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(at.push(me),j.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,j)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let ke=0;ke<P.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[ke]);const ft=n.get(P[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,ft,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const P=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function mt(O){return Math.min(s.maxSamples,O.samples)}function dt(O){const P=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function $e(O){const P=u.render.frame;p.get(O)!==P&&(p.set(O,P),O.update())}function Pt(O,P){const oe=O.colorSpace,ve=O.format,Se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||oe!==da&&oe!==fs&&(Ct.getTransfer(oe)===Lt?(ve!==Bi||Se!==Nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),P}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=ae,this.setTexture2DArray=se,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Ie,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=dt}function OA(r,e){function t(n,s=fs){let a;const u=Ct.getTransfer(s);if(n===Nr)return r.UNSIGNED_BYTE;if(n===Vp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Xv)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Wv)return r.BYTE;if(n===jv)return r.SHORT;if(n===xl)return r.UNSIGNED_SHORT;if(n===Bp)return r.INT;if(n===ao)return r.UNSIGNED_INT;if(n===Rr)return r.FLOAT;if(n===Dl)return r.HALF_FLOAT;if(n===Yv)return r.ALPHA;if(n===qv)return r.RGB;if(n===Bi)return r.RGBA;if(n===$v)return r.LUMINANCE;if(n===Zv)return r.LUMINANCE_ALPHA;if(n===na)return r.DEPTH_COMPONENT;if(n===fa)return r.DEPTH_STENCIL;if(n===Kv)return r.RED;if(n===Gp)return r.RED_INTEGER;if(n===Qv)return r.RG;if(n===Wp)return r.RG_INTEGER;if(n===jp)return r.RGBA_INTEGER;if(n===xc||n===yc||n===Sc||n===Ec)if(u===Lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Vh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jh||n===Xh||n===Yh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===jh||n===Xh)return u===Lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Yh)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qh||n===$h||n===Zh||n===Kh||n===Qh||n===Jh||n===ep||n===tp||n===np||n===ip||n===rp||n===sp||n===op||n===ap)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===qh)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zh)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qh)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jh)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ep)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tp)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===np)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ip)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rp)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sp)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===op)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ap)return u===Lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===lp||n===up)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Mc)return u===Lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===up)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jv||n===cp||n===fp||n===dp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Mc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===cp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new ei,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ys({vertexShader:kA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vi(new Ol(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends Ea{constructor(e,t){super();const n=this;let s=null,a=1,u=null,c="local-floor",f=1,h=null,p=null,g=null,_=null,y=null,M=null;const E=new BA,x=t.getContextAttributes();let v=null,b=null;const A=[],T=[],U=new bt;let F=null;const I=new Ri;I.viewport=new Kt;const k=new Ri;k.viewport=new Kt;const C=[I,k],R=new lT;let B=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=A[V];return ne===void 0&&(ne=new ih,A[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=A[V];return ne===void 0&&(ne=new ih,A[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=A[V];return ne===void 0&&(ne=new ih,A[V]=ne),ne.getHandSpace()};function Z(V){const ne=T.indexOf(V.inputSource);if(ne===-1)return;const _e=A[ne];_e!==void 0&&(_e.update(V.inputSource,V.frame,h||u),_e.dispatchEvent({type:V.type,data:V.inputSource}))}function fe(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",fe),s.removeEventListener("inputsourceschange",ae);for(let V=0;V<A.length;V++){const ne=T[V];ne!==null&&(T[V]=null,A[V].disconnect(ne))}B=null,J=null,E.reset(),e.setRenderTarget(v),y=null,_=null,g=null,s=null,b=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){c=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",fe),s.addEventListener("inputsourceschange",ae),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,pe=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=x.stencil?fa:na,pe=x.stencil?ca:ao);const Oe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Oe),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new lo(_.textureWidth,_.textureHeight,{format:Bi,type:Nr,depthTexture:new fx(_.textureWidth,_.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const _e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),b=new lo(y.framebufferWidth,y.framebufferHeight,{format:Bi,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(f),h=null,u=await s.requestReferenceSpace(c),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ae(V){for(let ne=0;ne<V.removed.length;ne++){const _e=V.removed[ne],pe=T.indexOf(_e);pe>=0&&(T[pe]=null,A[pe].disconnect(_e))}for(let ne=0;ne<V.added.length;ne++){const _e=V.added[ne];let pe=T.indexOf(_e);if(pe===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(_e),pe=Oe;break}else if(T[Oe]===null){T[Oe]=_e,pe=Oe;break}if(pe===-1)break}const Me=A[pe];Me&&Me.connect(_e)}}const se=new ce,re=new ce;function G(V,ne,_e){se.setFromMatrixPosition(ne.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const pe=se.distanceTo(re),Me=ne.projectionMatrix.elements,Oe=_e.projectionMatrix.elements,Ie=Me[14]/(Me[10]-1),Ke=Me[14]/(Me[10]+1),St=(Me[9]+1)/Me[5],at=(Me[9]-1)/Me[5],j=(Me[8]-1)/Me[0],kn=(Oe[8]+1)/Oe[0],mt=Ie*j,dt=Ie*kn,$e=pe/(-j+kn),Pt=$e*-j;if(ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Pt),V.translateZ($e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Me[10]===-1)V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Xe=Ie+$e,O=Ke+$e,P=mt-Pt,oe=dt+(pe-Pt),ve=St*Ke/O*Xe,Se=at*Ke/O*Xe;V.projectionMatrix.makePerspective(P,oe,ve,Se,Xe,O),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function de(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ne=V.near,_e=V.far;E.texture!==null&&(E.depthNear>0&&(ne=E.depthNear),E.depthFar>0&&(_e=E.depthFar)),R.near=k.near=I.near=ne,R.far=k.far=I.far=_e,(B!==R.near||J!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,J=R.far),I.layers.mask=V.layers.mask|2,k.layers.mask=V.layers.mask|4,R.layers.mask=I.layers.mask|k.layers.mask;const pe=V.parent,Me=R.cameras;de(R,pe);for(let Oe=0;Oe<Me.length;Oe++)de(Me[Oe],pe);Me.length===2?G(R,I,k):R.projectionMatrix.copy(I.projectionMatrix),H(V,R,pe)};function H(V,ne,_e){_e===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(_e.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hp*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(V){f=V,_!==null&&(_.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let N=null;function q(V,ne){if(p=ne.getViewerPose(h||u),M=ne,p!==null){const _e=p.views;y!==null&&(e.setRenderTargetFramebuffer(b,y.framebuffer),e.setRenderTarget(b));let pe=!1;_e.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let Ie=0;Ie<_e.length;Ie++){const Ke=_e[Ie];let St=null;if(y!==null)St=y.getViewport(Ke);else{const j=g.getViewSubImage(_,Ke);St=j.viewport,Ie===0&&(e.setRenderTargetTextures(b,j.colorTexture,_.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(b))}let at=C[Ie];at===void 0&&(at=new Ri,at.layers.enable(Ie),at.viewport=new Kt,C[Ie]=at),at.matrix.fromArray(Ke.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ke.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(St.x,St.y,St.width,St.height),Ie===0&&(R.matrix.copy(at.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(at)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){const Ie=g.getDepthInformation(_e[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,s.renderState)}}for(let _e=0;_e<A.length;_e++){const pe=T[_e],Me=A[_e];pe!==null&&Me!==void 0&&Me.update(pe,ne,h||u)}N&&N(V,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),M=null}const ye=new hx;ye.setAnimationLoop(q),this.setAnimationLoop=function(V){N=V},this.dispose=function(){}}}const Gs=new sr,HA=new Jt;function GA(r,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,lx(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,b,A,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),g(x,v)):v.isMeshPhongMaterial?(a(x,v),p(x,v)):v.isMeshStandardMaterial?(a(x,v),_(x,v),v.isMeshPhysicalMaterial&&y(x,v,T)):v.isMeshMatcapMaterial?(a(x,v),M(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),E(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?f(x,v,b,A):v.isSpriteMaterial?h(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const b=e.get(v),A=b.envMap,T=b.envMapRotation;A&&(x.envMap.value=A,Gs.copy(T),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),x.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Gs)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,b,A){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*b,x.scale.value=A*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function y(x,v,b){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function E(x,v){const b=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function WA(r,e,t,n){let s={},a={},u=[];const c=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function f(b,A){const T=A.program;n.uniformBlockBinding(b,T)}function h(b,A){let T=s[b.id];T===void 0&&(M(b),T=p(b),s[b.id]=T,b.addEventListener("dispose",x));const U=A.program;n.updateUBOMapping(b,U);const F=e.render.frame;a[b.id]!==F&&(_(b),a[b.id]=F)}function p(b){const A=g();b.__bindingPointIndex=A;const T=r.createBuffer(),U=b.__size,F=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,U,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,A,T),T}function g(){for(let b=0;b<c;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const A=s[b.id],T=b.uniforms,U=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,A);for(let F=0,I=T.length;F<I;F++){const k=Array.isArray(T[F])?T[F]:[T[F]];for(let C=0,R=k.length;C<R;C++){const B=k[C];if(y(B,F,C,U)===!0){const J=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let ae=0;ae<Z.length;ae++){const se=Z[ae],re=E(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,r.bufferSubData(r.UNIFORM_BUFFER,J+fe,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,fe),fe+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(b,A,T,U){const F=b.value,I=A+"_"+T;if(U[I]===void 0)return typeof F=="number"||typeof F=="boolean"?U[I]=F:U[I]=F.clone(),!0;{const k=U[I];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return U[I]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function M(b){const A=b.uniforms;let T=0;const U=16;for(let I=0,k=A.length;I<k;I++){const C=Array.isArray(A[I])?A[I]:[A[I]];for(let R=0,B=C.length;R<B;R++){const J=C[R],Z=Array.isArray(J.value)?J.value:[J.value];for(let fe=0,ae=Z.length;fe<ae;fe++){const se=Z[fe],re=E(se),G=T%U,de=G%re.boundary,H=G+de;T+=de,H!==0&&U-H<re.storage&&(T+=U-H),J.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=re.storage}}}const F=T%U;return F>0&&(T+=U-F),b.__size=T,b.__cache={},this}function E(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function x(b){const A=b.target;A.removeEventListener("dispose",x);const T=u.indexOf(A.__bindingPointIndex);u.splice(T,1),r.deleteBuffer(s[A.id]),delete s[A.id],delete a[A.id]}function v(){for(const b in s)r.deleteBuffer(s[b]);u=[],s={},a={}}return{bind:f,update:h,dispose:v}}class jA{constructor(e={}){const{canvas:t=TM(),context:n=null,depth:s=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),E=new Int32Array(4);let x=null,v=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this.toneMapping=gs,this.toneMappingExposure=1;const T=this;let U=!1,F=0,I=0,k=null,C=-1,R=null;const B=new Kt,J=new Kt;let Z=null;const fe=new At(0);let ae=0,se=t.width,re=t.height,G=1,de=null,H=null;const N=new Kt(0,0,se,re),q=new Kt(0,0,se,re);let ye=!1;const V=new $p;let ne=!1,_e=!1;this.transmissionResolutionScale=1;const pe=new Jt,Me=new Jt,Oe=new ce,Ie=new Kt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function at(){return k===null?G:1}let j=n;function kn(L,K){return t.getContext(L,K)}try{const L={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kp}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),j===null){const K="webgl2";if(j=kn(K,L),j===null)throw kn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let mt,dt,$e,Pt,Xe,O,P,oe,ve,Se,me,Ye,Re,ke,ft,Ce,Be,et,nt,Ve,ht,st,Rt,$;function be(){mt=new tC(j),mt.init(),st=new OA(j,mt),dt=new q2(j,mt,e,st),$e=new UA(j,mt),dt.reverseDepthBuffer&&_&&$e.buffers.depth.setReversed(!0),Pt=new rC(j),Xe=new EA,O=new FA(j,mt,$e,Xe,dt,st,Pt),P=new Z2(T),oe=new eC(T),ve=new cT(j),Rt=new X2(j,ve),Se=new nC(j,ve,Pt,Rt),me=new oC(j,Se,ve,Pt),nt=new sC(j,dt,O),Ce=new $2(Xe),Ye=new SA(T,P,oe,mt,dt,Rt,Ce),Re=new GA(T,Xe),ke=new TA,ft=new PA(mt),et=new j2(T,P,oe,$e,me,y,f),Be=new NA(T,me,dt),$=new WA(j,Pt,dt,$e),Ve=new Y2(j,mt,Pt),ht=new iC(j,mt,Pt),Pt.programs=Ye.programs,T.capabilities=dt,T.extensions=mt,T.properties=Xe,T.renderLists=ke,T.shadowMap=Be,T.state=$e,T.info=Pt}be();const he=new VA(T,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=mt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=mt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(L){L!==void 0&&(G=L,this.setSize(se,re,!1))},this.getSize=function(L){return L.set(se,re)},this.setSize=function(L,K,le=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=L,re=K,t.width=Math.floor(L*G),t.height=Math.floor(K*G),le===!0&&(t.style.width=L+"px",t.style.height=K+"px"),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(se*G,re*G).floor()},this.setDrawingBufferSize=function(L,K,le){se=L,re=K,G=le,t.width=Math.floor(L*le),t.height=Math.floor(K*le),this.setViewport(0,0,L,K)},this.getCurrentViewport=function(L){return L.copy(B)},this.getViewport=function(L){return L.copy(N)},this.setViewport=function(L,K,le,te){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,K,le,te),$e.viewport(B.copy(N).multiplyScalar(G).round())},this.getScissor=function(L){return L.copy(q)},this.setScissor=function(L,K,le,te){L.isVector4?q.set(L.x,L.y,L.z,L.w):q.set(L,K,le,te),$e.scissor(J.copy(q).multiplyScalar(G).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(L){$e.setScissorTest(ye=L)},this.setOpaqueSort=function(L){de=L},this.setTransparentSort=function(L){H=L},this.getClearColor=function(L){return L.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(L=!0,K=!0,le=!0){let te=0;if(L){let Q=!1;if(k!==null){const we=k.texture.format;Q=we===jp||we===Wp||we===Gp}if(Q){const we=k.texture.type,Pe=we===Nr||we===ao||we===xl||we===ca||we===Vp||we===Hp,Ue=et.getClearColor(),He=et.getClearAlpha(),it=Ue.r,tt=Ue.g,We=Ue.b;Pe?(M[0]=it,M[1]=tt,M[2]=We,M[3]=He,j.clearBufferuiv(j.COLOR,0,M)):(E[0]=it,E[1]=tt,E[2]=We,E[3]=He,j.clearBufferiv(j.COLOR,0,E))}else te|=j.COLOR_BUFFER_BIT}K&&(te|=j.DEPTH_BUFFER_BIT),le&&(te|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),et.dispose(),ke.dispose(),ft.dispose(),Xe.dispose(),P.dispose(),oe.dispose(),me.dispose(),Rt.dispose(),$.dispose(),Ye.dispose(),he.dispose(),he.removeEventListener("sessionstart",ho),he.removeEventListener("sessionend",Or),ur.stop()};function ge(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const L=Pt.autoReset,K=Be.enabled,le=Be.autoUpdate,te=Be.needsUpdate,Q=Be.type;be(),Pt.autoReset=L,Be.enabled=K,Be.autoUpdate=le,Be.needsUpdate=te,Be.type=Q}function De(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ot(L){const K=L.target;K.removeEventListener("dispose",ot),Ft(K)}function Ft(L){cn(L),Xe.remove(L)}function cn(L){const K=Xe.get(L).programs;K!==void 0&&(K.forEach(function(le){Ye.releaseProgram(le)}),L.isShaderMaterial&&Ye.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,le,te,Q,we){K===null&&(K=Ke);const Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=Vl(L,K,le,te,Q);$e.setMaterial(te,Pe);let He=le.index,it=1;if(te.wireframe===!0){if(He=Se.getWireframeAttribute(le),He===void 0)return;it=2}const tt=le.drawRange,We=le.attributes.position;let _t=tt.start*it,lt=(tt.start+tt.count)*it;we!==null&&(_t=Math.max(_t,we.start*it),lt=Math.min(lt,(we.start+we.count)*it)),He!==null?(_t=Math.max(_t,0),lt=Math.min(lt,He.count)):We!=null&&(_t=Math.max(_t,0),lt=Math.min(lt,We.count));const qt=lt-_t;if(qt<0||qt===1/0)return;Rt.setup(Q,te,Ue,le,He);let zt,yt=Ve;if(He!==null&&(zt=ve.get(He),yt=ht,yt.setIndex(zt)),Q.isMesh)te.wireframe===!0?($e.setLineWidth(te.wireframeLinewidth*at()),yt.setMode(j.LINES)):yt.setMode(j.TRIANGLES);else if(Q.isLine){let Ze=te.linewidth;Ze===void 0&&(Ze=1),$e.setLineWidth(Ze*at()),Q.isLineSegments?yt.setMode(j.LINES):Q.isLineLoop?yt.setMode(j.LINE_LOOP):yt.setMode(j.LINE_STRIP)}else Q.isPoints?yt.setMode(j.POINTS):Q.isSprite&&yt.setMode(j.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ze=Q._multiDrawStarts,$t=Q._multiDrawCounts,gt=Q._multiDrawCount,Cn=He?ve.get(He).bytesPerElement:1,zr=Xe.get(te).currentProgram.getUniforms();for(let Bn=0;Bn<gt;Bn++)zr.setValue(j,"_gl_DrawID",Bn),yt.render(Ze[Bn]/Cn,$t[Bn])}else if(Q.isInstancedMesh)yt.renderInstances(_t,qt,Q.count);else if(le.isInstancedBufferGeometry){const Ze=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,$t=Math.min(le.instanceCount,Ze);yt.renderInstances(_t,qt,$t)}else yt.render(_t,qt)};function Et(L,K,le){L.transparent===!0&&L.side===Ki&&L.forceSinglePass===!1?(L.side=Jn,L.needsUpdate=!0,po(L,K,le),L.side=xs,L.needsUpdate=!0,po(L,K,le),L.side=Ki):po(L,K,le)}this.compile=function(L,K,le=null){le===null&&(le=L),v=ft.get(le),v.init(K),A.push(v),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),L!==le&&L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const te=new Set;return L.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ue=we[Pe];Et(Ue,le,Q),te.add(Ue)}else Et(we,le,Q),te.add(we)}),v=A.pop(),te},this.compileAsync=function(L,K,le=null){const te=this.compile(L,K,le);return new Promise(Q=>{function we(){if(te.forEach(function(Pe){Xe.get(Pe).currentProgram.isReady()&&te.delete(Pe)}),te.size===0){Q(L);return}setTimeout(we,10)}mt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let jn=null;function zn(L){jn&&jn(L)}function ho(){ur.stop()}function Or(){ur.start()}const ur=new hx;ur.setAnimationLoop(zn),typeof self<"u"&&ur.setContext(self),this.setAnimationLoop=function(L){jn=L,he.setAnimationLoop(L),L===null?ur.stop():ur.start()},he.addEventListener("sessionstart",ho),he.addEventListener("sessionend",Or),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(K),K=he.getCamera()),L.isScene===!0&&L.onBeforeRender(T,L,K,k),v=ft.get(L,A.length),v.init(K),A.push(v),Me.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V.setFromProjectionMatrix(Me),_e=this.localClippingEnabled,ne=Ce.init(this.clippingPlanes,_e),x=ke.get(L,b.length),x.init(),b.push(x),he.enabled===!0&&he.isPresenting===!0){const we=T.xr.getDepthSensingMesh();we!==null&&cr(we,K,-1/0,T.sortObjects)}cr(L,K,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(de,H),St=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,St&&et.addToRenderList(x,L),this.info.render.frame++,ne===!0&&Ce.beginShadows();const le=v.state.shadowsArray;Be.render(le,L,K),ne===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,Q=x.transmissive;if(v.setupLights(),K.isArrayCamera){const we=K.cameras;if(Q.length>0)for(let Pe=0,Ue=we.length;Pe<Ue;Pe++){const He=we[Pe];ws(te,Q,L,He)}St&&et.render(L);for(let Pe=0,Ue=we.length;Pe<Ue;Pe++){const He=we[Pe];Ts(x,L,He,He.viewport)}}else Q.length>0&&ws(te,Q,L,K),St&&et.render(L),Ts(x,L,K);k!==null&&I===0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k)),L.isScene===!0&&L.onAfterRender(T,L,K),Rt.resetDefaultState(),C=-1,R=null,A.pop(),A.length>0?(v=A[A.length-1],ne===!0&&Ce.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function cr(L,K,le,te){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)le=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){te&&Ie.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Me);const Pe=me.update(L),Ue=L.material;Ue.visible&&x.push(L,Pe,Ue,le,Ie.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||V.intersectsObject(L))){const Pe=me.update(L),Ue=L.material;if(te&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ie.copy(L.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ie.copy(Pe.boundingSphere.center)),Ie.applyMatrix4(L.matrixWorld).applyMatrix4(Me)),Array.isArray(Ue)){const He=Pe.groups;for(let it=0,tt=He.length;it<tt;it++){const We=He[it],_t=Ue[We.materialIndex];_t&&_t.visible&&x.push(L,Pe,_t,le,Ie.z,We)}}else Ue.visible&&x.push(L,Pe,Ue,le,Ie.z,null)}}const we=L.children;for(let Pe=0,Ue=we.length;Pe<Ue;Pe++)cr(we[Pe],K,le,te)}function Ts(L,K,le,te){const Q=L.opaque,we=L.transmissive,Pe=L.transparent;v.setupLightsView(le),ne===!0&&Ce.setGlobalState(T.clippingPlanes,le),te&&$e.viewport(B.copy(te)),Q.length>0&&kr(Q,K,le),we.length>0&&kr(we,K,le),Pe.length>0&&kr(Pe,K,le),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function ws(L,K,le,te){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[te.id]===void 0&&(v.state.transmissionRenderTarget[te.id]=new lo(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Dl:Nr,minFilter:eo,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const we=v.state.transmissionRenderTarget[te.id],Pe=te.viewport||B;we.setSize(Pe.z*T.transmissionResolutionScale,Pe.w*T.transmissionResolutionScale);const Ue=T.getRenderTarget();T.setRenderTarget(we),T.getClearColor(fe),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear(),St&&et.render(le);const He=T.toneMapping;T.toneMapping=gs;const it=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),v.setupLightsView(te),ne===!0&&Ce.setGlobalState(T.clippingPlanes,te),kr(L,le,te),O.updateMultisampleRenderTarget(we),O.updateRenderTargetMipmap(we),mt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let We=0,_t=K.length;We<_t;We++){const lt=K[We],qt=lt.object,zt=lt.geometry,yt=lt.material,Ze=lt.group;if(yt.side===Ki&&qt.layers.test(te.layers)){const $t=yt.side;yt.side=Jn,yt.needsUpdate=!0,zl(qt,le,te,zt,yt,Ze),yt.side=$t,yt.needsUpdate=!0,tt=!0}}tt===!0&&(O.updateMultisampleRenderTarget(we),O.updateRenderTargetMipmap(we))}T.setRenderTarget(Ue),T.setClearColor(fe,ae),it!==void 0&&(te.viewport=it),T.toneMapping=He}function kr(L,K,le){const te=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,we=L.length;Q<we;Q++){const Pe=L[Q],Ue=Pe.object,He=Pe.geometry,it=te===null?Pe.material:te,tt=Pe.group;Ue.layers.test(le.layers)&&zl(Ue,K,le,He,it,tt)}}function zl(L,K,le,te,Q,we){L.onBeforeRender(T,K,le,te,Q,we),L.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(T,K,le,te,L,we),Q.transparent===!0&&Q.side===Ki&&Q.forceSinglePass===!1?(Q.side=Jn,Q.needsUpdate=!0,T.renderBufferDirect(le,K,te,Q,L,we),Q.side=xs,Q.needsUpdate=!0,T.renderBufferDirect(le,K,te,Q,L,we),Q.side=Ki):T.renderBufferDirect(le,K,te,Q,L,we),L.onAfterRender(T,K,le,te,Q,we)}function po(L,K,le){K.isScene!==!0&&(K=Ke);const te=Xe.get(L),Q=v.state.lights,we=v.state.shadowsArray,Pe=Q.state.version,Ue=Ye.getParameters(L,Q.state,we,K,le),He=Ye.getProgramCacheKey(Ue);let it=te.programs;te.environment=L.isMeshStandardMaterial?K.environment:null,te.fog=K.fog,te.envMap=(L.isMeshStandardMaterial?oe:P).get(L.envMap||te.environment),te.envMapRotation=te.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,it===void 0&&(L.addEventListener("dispose",ot),it=new Map,te.programs=it);let tt=it.get(He);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===Pe)return Gi(L,Ue),tt}else Ue.uniforms=Ye.getUniforms(L),L.onBeforeCompile(Ue,T),tt=Ye.acquireProgram(Ue,He),it.set(He,tt),te.uniforms=Ue.uniforms;const We=te.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=Ce.uniform),Gi(L,Ue),te.needsLights=Zc(L),te.lightsStateVersion=Pe,te.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.directionalShadowMap.value=Q.state.directionalShadowMap,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotShadowMap.value=Q.state.spotShadowMap,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMap.value=Q.state.pointShadowMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function Bl(L){if(L.uniformsList===null){const K=L.currentProgram.getUniforms();L.uniformsList=Tc.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function Gi(L,K){const le=Xe.get(L);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function Vl(L,K,le,te,Q){K.isScene!==!0&&(K=Ke),O.resetTextureUnits();const we=K.fog,Pe=te.isMeshStandardMaterial?K.environment:null,Ue=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:da,He=(te.isMeshStandardMaterial?oe:P).get(te.envMap||Pe),it=te.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,tt=!!le.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!le.morphAttributes.position,_t=!!le.morphAttributes.normal,lt=!!le.morphAttributes.color;let qt=gs;te.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(qt=T.toneMapping);const zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,yt=zt!==void 0?zt.length:0,Ze=Xe.get(te),$t=v.state.lights;if(ne===!0&&(_e===!0||L!==R)){const En=L===R&&te.id===C;Ce.setState(te,L,En)}let gt=!1;te.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==$t.state.version||Ze.outputColorSpace!==Ue||Q.isBatchedMesh&&Ze.batching===!1||!Q.isBatchedMesh&&Ze.batching===!0||Q.isBatchedMesh&&Ze.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ze.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ze.instancing===!1||!Q.isInstancedMesh&&Ze.instancing===!0||Q.isSkinnedMesh&&Ze.skinning===!1||!Q.isSkinnedMesh&&Ze.skinning===!0||Q.isInstancedMesh&&Ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ze.instancingMorph===!1&&Q.morphTexture!==null||Ze.envMap!==He||te.fog===!0&&Ze.fog!==we||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ce.numPlanes||Ze.numIntersection!==Ce.numIntersection)||Ze.vertexAlphas!==it||Ze.vertexTangents!==tt||Ze.morphTargets!==We||Ze.morphNormals!==_t||Ze.morphColors!==lt||Ze.toneMapping!==qt||Ze.morphTargetsCount!==yt)&&(gt=!0):(gt=!0,Ze.__version=te.version);let Cn=Ze.currentProgram;gt===!0&&(Cn=po(te,K,Q));let zr=!1,Bn=!1,fr=!1;const Nt=Cn.getUniforms(),An=Ze.uniforms;if($e.useProgram(Cn.program)&&(zr=!0,Bn=!0,fr=!0),te.id!==C&&(C=te.id,Bn=!0),zr||R!==L){$e.buffers.depth.getReversed()?(pe.copy(L.projectionMatrix),CM(pe),AM(pe),Nt.setValue(j,"projectionMatrix",pe)):Nt.setValue(j,"projectionMatrix",L.projectionMatrix),Nt.setValue(j,"viewMatrix",L.matrixWorldInverse);const gn=Nt.map.cameraPosition;gn!==void 0&&gn.setValue(j,Oe.setFromMatrixPosition(L.matrixWorld)),dt.logarithmicDepthBuffer&&Nt.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,Bn=!0,fr=!0)}if(Q.isSkinnedMesh){Nt.setOptional(j,Q,"bindMatrix"),Nt.setOptional(j,Q,"bindMatrixInverse");const En=Q.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Nt.setValue(j,"boneTexture",En.boneTexture,O))}Q.isBatchedMesh&&(Nt.setOptional(j,Q,"batchingTexture"),Nt.setValue(j,"batchingTexture",Q._matricesTexture,O),Nt.setOptional(j,Q,"batchingIdTexture"),Nt.setValue(j,"batchingIdTexture",Q._indirectTexture,O),Nt.setOptional(j,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Nt.setValue(j,"batchingColorTexture",Q._colorsTexture,O));const mn=le.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&nt.update(Q,le,Cn),(Bn||Ze.receiveShadow!==Q.receiveShadow)&&(Ze.receiveShadow=Q.receiveShadow,Nt.setValue(j,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(An.envMap.value=He,An.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&K.environment!==null&&(An.envMapIntensity.value=K.environmentIntensity),Bn&&(Nt.setValue(j,"toneMappingExposure",T.toneMappingExposure),Ze.needsLights&&Hl(An,fr),we&&te.fog===!0&&Re.refreshFogUniforms(An,we),Re.refreshMaterialUniforms(An,te,G,re,v.state.transmissionRenderTarget[L.id]),Tc.upload(j,Bl(Ze),An,O)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Tc.upload(j,Bl(Ze),An,O),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(j,"center",Q.center),Nt.setValue(j,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(j,"normalMatrix",Q.normalMatrix),Nt.setValue(j,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const En=te.uniformsGroups;for(let gn=0,Mt=En.length;gn<Mt;gn++){const Wi=En[gn];$.update(Wi,Cn),$.bind(Wi,Cn)}}return Cn}function Hl(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function Zc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(L,K,le){Xe.get(L.texture).__webglTexture=K,Xe.get(L.depthTexture).__webglTexture=le;const te=Xe.get(L);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=le===void 0,te.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,K){const le=Xe.get(L);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const Gl=j.createFramebuffer();this.setRenderTarget=function(L,K=0,le=0){k=L,F=K,I=le;let te=!0,Q=null,we=!1,Pe=!1;if(L){const He=Xe.get(L);if(He.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(j.FRAMEBUFFER,null),te=!1;else if(He.__webglFramebuffer===void 0)O.setupRenderTarget(L);else if(He.__hasExternalTextures)O.rebindTextures(L,Xe.get(L.texture).__webglTexture,Xe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const We=L.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Xe.has(We)&&(L.width!==We.image.width||L.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(L)}}const it=L.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const tt=Xe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(tt[K])?Q=tt[K][le]:Q=tt[K],we=!0):L.samples>0&&O.useMultisampledRTT(L)===!1?Q=Xe.get(L).__webglMultisampledFramebuffer:Array.isArray(tt)?Q=tt[le]:Q=tt,B.copy(L.viewport),J.copy(L.scissor),Z=L.scissorTest}else B.copy(N).multiplyScalar(G).floor(),J.copy(q).multiplyScalar(G).floor(),Z=ye;if(le!==0&&(Q=Gl),$e.bindFramebuffer(j.FRAMEBUFFER,Q)&&te&&$e.drawBuffers(L,Q),$e.viewport(B),$e.scissor(J),$e.setScissorTest(Z),we){const He=Xe.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,He.__webglTexture,le)}else if(Pe){const He=Xe.get(L.texture),it=K;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,He.__webglTexture,le,it)}else if(L!==null&&le!==0){const He=Xe.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,He.__webglTexture,le)}C=-1},this.readRenderTargetPixels=function(L,K,le,te,Q,we,Pe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){$e.bindFramebuffer(j.FRAMEBUFFER,Ue);try{const He=L.texture,it=He.format,tt=He.type;if(!dt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-te&&le>=0&&le<=L.height-Q&&j.readPixels(K,le,te,Q,st.convert(it),st.convert(tt),we)}finally{const He=k!==null?Xe.get(k).__webglFramebuffer:null;$e.bindFramebuffer(j.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(L,K,le,te,Q,we,Pe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Xe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){const He=L.texture,it=He.format,tt=He.type;if(!dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=L.width-te&&le>=0&&le<=L.height-Q){$e.bindFramebuffer(j.FRAMEBUFFER,Ue);const We=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.bufferData(j.PIXEL_PACK_BUFFER,we.byteLength,j.STREAM_READ),j.readPixels(K,le,te,Q,st.convert(it),st.convert(tt),0);const _t=k!==null?Xe.get(k).__webglFramebuffer:null;$e.bindFramebuffer(j.FRAMEBUFFER,_t);const lt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await wM(j,lt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,We),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,we),j.deleteBuffer(We),j.deleteSync(lt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,K=null,le=0){L.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,L=arguments[1]);const te=Math.pow(2,-le),Q=Math.floor(L.image.width*te),we=Math.floor(L.image.height*te),Pe=K!==null?K.x:0,Ue=K!==null?K.y:0;O.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,le,0,0,Pe,Ue,Q,we),$e.unbindTexture()};const Wl=j.createFramebuffer(),jl=j.createFramebuffer();this.copyTextureToTexture=function(L,K,le=null,te=null,Q=0,we=null){L.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,L=arguments[1],K=arguments[2],we=arguments[3]||0,le=null),we===null&&(Q!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Q,Q=0):we=0);let Pe,Ue,He,it,tt,We,_t,lt,qt;const zt=L.isCompressedTexture?L.mipmaps[we]:L.image;if(le!==null)Pe=le.max.x-le.min.x,Ue=le.max.y-le.min.y,He=le.isBox3?le.max.z-le.min.z:1,it=le.min.x,tt=le.min.y,We=le.isBox3?le.min.z:0;else{const mn=Math.pow(2,-Q);Pe=Math.floor(zt.width*mn),Ue=Math.floor(zt.height*mn),L.isDataArrayTexture?He=zt.depth:L.isData3DTexture?He=Math.floor(zt.depth*mn):He=1,it=0,tt=0,We=0}te!==null?(_t=te.x,lt=te.y,qt=te.z):(_t=0,lt=0,qt=0);const yt=st.convert(K.format),Ze=st.convert(K.type);let $t;K.isData3DTexture?(O.setTexture3D(K,0),$t=j.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(O.setTexture2DArray(K,0),$t=j.TEXTURE_2D_ARRAY):(O.setTexture2D(K,0),$t=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const gt=j.getParameter(j.UNPACK_ROW_LENGTH),Cn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),zr=j.getParameter(j.UNPACK_SKIP_PIXELS),Bn=j.getParameter(j.UNPACK_SKIP_ROWS),fr=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,zt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,zt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,it),j.pixelStorei(j.UNPACK_SKIP_ROWS,tt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,We);const Nt=L.isDataArrayTexture||L.isData3DTexture,An=K.isDataArrayTexture||K.isData3DTexture;if(L.isDepthTexture){const mn=Xe.get(L),En=Xe.get(K),gn=Xe.get(mn.__renderTarget),Mt=Xe.get(En.__renderTarget);$e.bindFramebuffer(j.READ_FRAMEBUFFER,gn.__webglFramebuffer),$e.bindFramebuffer(j.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Wi=0;Wi<He;Wi++)Nt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.get(L).__webglTexture,Q,We+Wi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.get(K).__webglTexture,we,qt+Wi)),j.blitFramebuffer(it,tt,Pe,Ue,_t,lt,Pe,Ue,j.DEPTH_BUFFER_BIT,j.NEAREST);$e.bindFramebuffer(j.READ_FRAMEBUFFER,null),$e.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Q!==0||L.isRenderTargetTexture||Xe.has(L)){const mn=Xe.get(L),En=Xe.get(K);$e.bindFramebuffer(j.READ_FRAMEBUFFER,Wl),$e.bindFramebuffer(j.DRAW_FRAMEBUFFER,jl);for(let gn=0;gn<He;gn++)Nt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,mn.__webglTexture,Q,We+gn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,mn.__webglTexture,Q),An?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,En.__webglTexture,we,qt+gn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,En.__webglTexture,we),Q!==0?j.blitFramebuffer(it,tt,Pe,Ue,_t,lt,Pe,Ue,j.COLOR_BUFFER_BIT,j.NEAREST):An?j.copyTexSubImage3D($t,we,_t,lt,qt+gn,it,tt,Pe,Ue):j.copyTexSubImage2D($t,we,_t,lt,it,tt,Pe,Ue);$e.bindFramebuffer(j.READ_FRAMEBUFFER,null),$e.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else An?L.isDataTexture||L.isData3DTexture?j.texSubImage3D($t,we,_t,lt,qt,Pe,Ue,He,yt,Ze,zt.data):K.isCompressedArrayTexture?j.compressedTexSubImage3D($t,we,_t,lt,qt,Pe,Ue,He,yt,zt.data):j.texSubImage3D($t,we,_t,lt,qt,Pe,Ue,He,yt,Ze,zt):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,we,_t,lt,Pe,Ue,yt,Ze,zt.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,we,_t,lt,zt.width,zt.height,yt,zt.data):j.texSubImage2D(j.TEXTURE_2D,we,_t,lt,Pe,Ue,yt,Ze,zt);j.pixelStorei(j.UNPACK_ROW_LENGTH,gt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Cn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,zr),j.pixelStorei(j.UNPACK_SKIP_ROWS,Bn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,fr),we===0&&K.generateMipmaps&&j.generateMipmap($t),$e.unbindTexture()},this.copyTextureToTexture3D=function(L,K,le=null,te=null,Q=0){return L.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,te=arguments[1]||null,L=arguments[2],K=arguments[3],Q=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,K,le,te,Q)},this.initRenderTarget=function(L){Xe.get(L).__webglFramebuffer===void 0&&O.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?O.setTextureCube(L,0):L.isData3DTexture?O.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?O.setTexture2DArray(L,0):O.setTexture2D(L,0),$e.unbindTexture()},this.resetState=function(){F=0,I=0,k=null,$e.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function Cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vx(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pa={duration:.5,overwrite:!1,delay:0},Kp,wn,Vt,nr=1e8,Un=1/nr,mp=Math.PI*2,XA=mp/4,YA=0,xx=Math.sqrt,qA=Math.cos,$A=Math.sin,Sn=function(e){return typeof e=="string"},Qt=function(e){return typeof e=="function"},Ir=function(e){return typeof e=="number"},Qp=function(e){return typeof e>"u"},or=function(e){return typeof e=="object"},ti=function(e){return e!==!1},Jp=function(){return typeof window<"u"},gc=function(e){return Qt(e)||Sn(e)},yx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,gp=/(?:-?\.?\d|\.)+/gi,Sx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Jo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ex=/[+-]=-?[.\d]+/,Mx=/[^,'"\[\]\s]+/gi,ZA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,$i,_p,em,_i={},Nc={},Tx,wx=function(e){return(Nc=ma(e,_i))&&si},tm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},yl=function(e,t){return!t&&console.warn(e)},Cx=function(e,t){return e&&(_i[e]=t)&&Nc&&(Nc[e]=t)||_i},Sl=function(){return 0},KA={suppressEvents:!0,isStart:!0,kill:!1},wc={suppressEvents:!0,kill:!1},QA={suppressEvents:!0},nm={},_s=[],vp={},Ax,hi={},hh={},q0=30,Cc=[],im="",rm=function(e){var t=e[0],n,s;if(or(t)||Qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(s=Cc.length;s--&&!Cc[s].targetTest(t););n=Cc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Kx(e[s],n)))||e.splice(s,1);return e},io=function(e){return e._gsap||rm(bi(e))[0]._gsap},Rx=function(e,t,n){return(n=e[t])&&Qt(n)?e[t]():Qp(n)&&e.getAttribute&&e.getAttribute(t)||n},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},an=function(e){return Math.round(e*1e7)/1e7||0},ra=function(e,t){var n=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+s:n==="-"?e-s:n==="*"?e*s:e/s},JA=function(e,t){for(var n=t.length,s=0;e.indexOf(t[s])<0&&++s<n;);return s<n},Ic=function(){var e=_s.length,t=_s.slice(0),n,s;for(vp={},_s.length=0,n=0;n<e;n++)s=t[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},bx=function(e,t,n,s){_s.length&&!wn&&Ic(),e.render(t,n,wn&&t<0&&(e._initted||e._startAt)),_s.length&&!wn&&Ic()},Px=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mx).length<2?t:Sn(e)?e.trim():e},Lx=function(e){return e},vi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},eR=function(e){return function(t,n){for(var s in n)s in t||s==="duration"&&e||s==="ease"||(t[s]=n[s])}},ma=function(e,t){for(var n in t)e[n]=t[n];return e},$0=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=or(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Uc=function(e,t){var n={},s;for(s in e)s in t||(n[s]=e[s]);return n},pl=function(e){var t=e.parent||jt,n=e.keyframes?eR(On(e.keyframes)):vi;if(ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},tR=function(e,t){for(var n=e.length,s=n===t.length;s&&n--&&e[n]===t[n];);return n<0},Dx=function(e,t,n,s,a){var u=e[s],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},Yc=function(e,t,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[s]===t&&(e[s]=a),t._next=t._prev=t.parent=null},Ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ro=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},nR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xp=function(e,t,n,s){return e._startAt&&(wn?e._startAt.revert(wc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},iR=function r(e){return!e||e._ts&&r(e.parent)},Z0=function(e){return e._repeat?ga(e._tTime,e=e.duration()+e._rDelay)*e:0},ga=function(e,t){var n=Math.floor(e=an(e/t));return e&&n===e?n-1:n},Fc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},qc=function(e){return e._end=an(e._start+(e._tDur/Math.abs(e._ts||e._rts||Un)||0))},$c=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=an(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),qc(e),n._dirty||ro(n,e)),e},Nx=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fc(e.rawTime(),t),(!t._dur||kl(0,t.totalDuration(),n)-t._tTime>Un)&&t.render(n,!0)),ro(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Qi=function(e,t,n,s){return t.parent&&Ss(t),t._start=an((Ir(n)?n:n||e!==jt?Ci(e,n,t):e._time)+t._delay),t._end=an(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Dx(e,t,"_first","_last",e._sort?"_start":0),yp(t)||(e._recent=t),s||Nx(e,t),e._ts<0&&$c(e,e._tTime),e},Ix=function(e,t){return(_i.ScrollTrigger||tm("scrollTrigger",t))&&_i.ScrollTrigger.create(t,e)},Ux=function(e,t,n,s,a){if(om(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ax!==pi.frame)return _s.push(e),e._lazy=[a,s],1},rR=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},yp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},sR=function(e,t,n,s){var a=e.ratio,u=t<0||!t&&(!e._start&&rR(e)&&!(!e._initted&&yp(e))||(e._ts<0||e._dp._ts<0)&&!yp(e))?0:1,c=e._rDelay,f=0,h,p,g;if(c&&e._repeat&&(f=kl(0,e._tDur,t),p=ga(f,c),e._yoyo&&p&1&&(u=1-u),p!==ga(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||wn||s||e._zTime===Un||!t&&e._zTime){if(!e._initted&&Ux(e,t,s,n,f))return;for(g=e._zTime,e._zTime=t||(n?Un:0),n||(n=t&&!g),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=f,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&xp(e,t,n,!0),e._onUpdate&&!n&&mi(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&Ss(e,1),!n&&!wn&&(mi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},oR=function(e,t,n){var s;if(n>t)for(s=e._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},_a=function(e,t,n,s){var a=e._repeat,u=an(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:an(u*(a+1)+e._rDelay*a):u,c>0&&!s&&$c(e,e._tTime=e._tDur*c),e.parent&&qc(e),n||ro(e.parent,e),e},K0=function(e){return e instanceof Wn?ro(e):_a(e,e._dur)},aR={_start:0,endTime:Sl,totalDuration:Sl},Ci=function r(e,t,n){var s=e.labels,a=e._recent||aR,u=e.duration()>=nr?a.endTime(!1):e._dur,c,f,h;return Sn(t)&&(isNaN(t)||t in s)?(f=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(f=f/100*(On(n)?n[0]:n).totalDuration()),c>1?r(e,t.substr(0,c-1),n)+f:u+f)):t==null?u:+t},ml=function(e,t,n){var s=Ir(t[1]),a=(s?2:1)+(e<2?0:1),u=t[a],c,f;if(s&&(u.duration=t[1]),u.parent=n,e){for(c=u,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=ti(f.vars.inherit)&&f.parent;u.immediateRender=ti(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new on(t[0],u,t[a+1])},Ms=function(e,t){return e||e===0?t(e):t},kl=function(e,t,n){return n<e?e:n>t?t:n},In=function(e,t){return!Sn(e)||!(t=ZA.exec(e))?"":t[1]},lR=function(e,t,n){return Ms(n,function(s){return kl(e,t,s)})},Sp=[].slice,Fx=function(e,t){return e&&or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&or(e[0]))&&!e.nodeType&&e!==$i},uR=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(s){var a;return Sn(s)&&!t||Fx(s,1)?(a=n).push.apply(a,bi(s)):n.push(s)})||n},bi=function(e,t,n){return Vt&&!t&&Vt.selector?Vt.selector(e):Sn(e)&&!n&&(_p||!va())?Sp.call((t||em).querySelectorAll(e),0):On(e)?uR(e,n):Fx(e)?Sp.call(e,0):e?[e]:[]},Ep=function(e){return e=bi(e)[0]||yl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bi(t,n.querySelectorAll?n:n===e?yl("Invalid scope")||em.createElement("div"):e)}},Ox=function(e){return e.sort(function(){return .5-Math.random()})},kx=function(e){if(Qt(e))return e;var t=or(e)?e:{each:e},n=so(t.ease),s=t.from||0,a=parseFloat(t.base)||0,u={},c=s>0&&s<1,f=isNaN(s)||c,h=t.axis,p=s,g=s;return Sn(s)?p=g={center:.5,edges:.5,end:1}[s]||0:!c&&f&&(p=s[0],g=s[1]),function(_,y,M){var E=(M||t).length,x=u[E],v,b,A,T,U,F,I,k,C;if(!x){if(C=t.grid==="auto"?0:(t.grid||[1,nr])[1],!C){for(I=-1e8;I<(I=M[C++].getBoundingClientRect().left)&&C<E;);C<E&&C--}for(x=u[E]=[],v=f?Math.min(C,E)*p-.5:s%C,b=C===nr?0:f?E*g/C-.5:s/C|0,I=0,k=nr,F=0;F<E;F++)A=F%C-v,T=b-(F/C|0),x[F]=U=h?Math.abs(h==="y"?T:A):xx(A*A+T*T),U>I&&(I=U),U<k&&(k=U);s==="random"&&Ox(x),x.max=I-k,x.min=k,x.v=E=(parseFloat(t.amount)||parseFloat(t.each)*(C>E?E-1:h?h==="y"?E/C:C:Math.max(C,E/C))||0)*(s==="edges"?-1:1),x.b=E<0?a-E:a,x.u=In(t.amount||t.each)||0,n=n&&E<0?qx(n):n}return E=(x[_]-x.min)/x.max||0,an(x.b+(n?n(E):E)*x.v)+x.u}},Mp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var s=an(Math.round(parseFloat(n)/e)*e*t);return(s-s%1)/t+(Ir(n)?0:In(n))}},zx=function(e,t){var n=On(e),s,a;return!n&&or(e)&&(s=n=e.radius||nr,e.values?(e=bi(e.values),(a=!Ir(e[0]))&&(s*=s)):e=Mp(e.increment)),Ms(t,n?Qt(e)?function(u){return a=e(u),Math.abs(a-u)<=s?a:u}:function(u){for(var c=parseFloat(a?u.x:u),f=parseFloat(a?u.y:0),h=nr,p=0,g=e.length,_,y;g--;)a?(_=e[g].x-c,y=e[g].y-f,_=_*_+y*y):_=Math.abs(e[g]-c),_<h&&(h=_,p=g);return p=!s||h<=s?e[p]:u,a||p===u||Ir(u)?p:p+In(u)}:Mp(e))},Bx=function(e,t,n,s){return Ms(On(e)?!t:n===!0?!!(n=0):!s,function(){return On(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*s)/s})},cR=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(s){return t.reduce(function(a,u){return u(a)},s)}},fR=function(e,t){return function(n){return e(parseFloat(n))+(t||In(n))}},dR=function(e,t,n){return Hx(e,t,0,1,n)},Vx=function(e,t,n){return Ms(n,function(s){return e[~~t(s)]})},hR=function r(e,t,n){var s=t-e;return On(e)?Vx(e,r(0,e.length),t):Ms(n,function(a){return(s+(a-e)%s)%s+e})},pR=function r(e,t,n){var s=t-e,a=s*2;return On(e)?Vx(e,r(0,e.length-1),t):Ms(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>s?a-u:u)})},El=function(e){for(var t=0,n="",s,a,u,c;~(s=e.indexOf("random(",t));)u=e.indexOf(")",s),c=e.charAt(s+7)==="[",a=e.substr(s+7,u-s-7).match(c?Mx:gp),n+=e.substr(t,s-t)+Bx(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=u+1;return n+e.substr(t,e.length-t)},Hx=function(e,t,n,s,a){var u=t-e,c=s-n;return Ms(a,function(f){return n+((f-e)/u*c||0)})},mR=function r(e,t,n,s){var a=isNaN(e+t)?0:function(y){return(1-y)*e+y*t};if(!a){var u=Sn(e),c={},f,h,p,g,_;if(n===!0&&(s=1)&&(n=null),u)e={p:e},t={p:t};else if(On(e)&&!On(t)){for(p=[],g=e.length,_=g-2,h=1;h<g;h++)p.push(r(e[h-1],e[h]));g--,a=function(M){M*=g;var E=Math.min(_,~~M);return p[E](M-E)},n=t}else s||(e=ma(On(e)?[]:{},e));if(!p){for(f in t)sm.call(c,e,f,"get",t[f]);a=function(M){return um(M,c)||(u?e.p:e)}}}return Ms(n,a)},Q0=function(e,t,n){var s=e.labels,a=nr,u,c,f;for(u in s)c=s[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=u,a=c);return f},mi=function(e,t,n){var s=e.vars,a=s[t],u=Vt,c=e._ctx,f,h,p;if(a)return f=s[t+"Params"],h=s.callbackScope||e,n&&_s.length&&Ic(),c&&(Vt=c),p=f?a.apply(h,f):a.call(h),Vt=u,p},dl=function(e){return Ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&mi(e,"onInterrupt"),e},ea,Gx=[],Wx=function(e){if(e)if(e=!e.name&&e.default||e,Jp()||e.headless){var t=e.name,n=Qt(e),s=t&&!n&&e.init?function(){this._props=[]}:e,a={init:Sl,render:um,add:sm,kill:LR,modifier:PR,rawVars:0},u={targetTest:0,get:0,getSetter:lm,aliases:{},register:0};if(va(),e!==s){if(hi[t])return;vi(s,vi(Uc(e,a),u)),ma(s.prototype,ma(a,Uc(e,u))),hi[s.prop=t]=s,e.targetTest&&(Cc.push(s),nm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cx(t,s),e.register&&e.register(si,s,ii)}else Gx.push(e)},It=255,hl={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},ph=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},jx=function(e,t,n){var s=e?Ir(e)?[e>>16,e>>8&It,e&It]:0:hl.black,a,u,c,f,h,p,g,_,y,M;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),hl[e])s=hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&It,s&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(s=M=e.match(gp),!t)f=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,s.length>3&&(s[3]*=1),s[0]=ph(f+1/3,a,u),s[1]=ph(f,a,u),s[2]=ph(f-1/3,a,u);else if(~e.indexOf("="))return s=e.match(Sx),n&&s.length<4&&(s[3]=1),s}else s=e.match(gp)||hl.transparent;s=s.map(Number)}return t&&!M&&(a=s[0]/It,u=s[1]/It,c=s[2]/It,g=Math.max(a,u,c),_=Math.min(a,u,c),p=(g+_)/2,g===_?f=h=0:(y=g-_,h=p>.5?y/(2-g-_):y/(g+_),f=g===a?(u-c)/y+(u<c?6:0):g===u?(c-a)/y+2:(a-u)/y+4,f*=60),s[0]=~~(f+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),n&&s.length<4&&(s[3]=1),s},Xx=function(e){var t=[],n=[],s=-1;return e.split(vs).forEach(function(a){var u=a.match(Jo)||[];t.push.apply(t,u),n.push(s+=u.length+1)}),t.c=n,t},J0=function(e,t,n){var s="",a=(e+s).match(vs),u=t?"hsla(":"rgba(",c=0,f,h,p,g;if(!a)return e;if(a=a.map(function(_){return(_=jx(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(p=Xx(e),f=n.c,f.join(s)!==p.c.join(s)))for(h=e.replace(vs,"1").split(Jo),g=h.length-1;c<g;c++)s+=h[c]+(~f.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(vs),g=h.length-1;c<g;c++)s+=h[c]+a[c];return s+h[g]},vs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in hl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),gR=/hsl[a]?\(/,Yx=function(e){var t=e.join(" "),n;if(vs.lastIndex=0,vs.test(t))return n=gR.test(t),e[1]=J0(e[1],n),e[0]=J0(e[0],n,Xx(e[1])),!0},Ml,pi=function(){var r=Date.now,e=500,t=33,n=r(),s=n,a=1e3/240,u=a,c=[],f,h,p,g,_,y,M=function E(x){var v=r()-s,b=x===!0,A,T,U,F;if((v>e||v<0)&&(n+=v-t),s+=v,U=s-n,A=U-u,(A>0||b)&&(F=++g.frame,_=U-g.time*1e3,g.time=U=U/1e3,u+=A+(A>=a?4:a-A),T=1),b||(f=h(E)),T)for(y=0;y<c.length;y++)c[y](U,_,F,x)};return g={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return _/(1e3/(x||60))},wake:function(){Tx&&(!_p&&Jp()&&($i=_p=window,em=$i.document||{},_i.gsap=si,($i.gsapVersions||($i.gsapVersions=[])).push(si.version),wx(Nc||$i.GreenSockGlobals||!$i.gsap&&$i||{}),Gx.forEach(Wx)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&g.sleep(),h=p||function(x){return setTimeout(x,u-g.time*1e3+1|0)},Ml=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),Ml=0,h=Sl},lagSmoothing:function(x,v){e=x||1/0,t=Math.min(v||33,e)},fps:function(x){a=1e3/(x||240),u=g.time*1e3+a},add:function(x,v,b){var A=v?function(T,U,F,I){x(T,U,F,I),g.remove(A)}:x;return g.remove(x),c[b?"unshift":"push"](A),va(),A},remove:function(x,v){~(v=c.indexOf(x))&&c.splice(v,1)&&y>=v&&y--},_listeners:c},g}(),va=function(){return!Ml&&pi.wake()},xt={},_R=/^[\d.\-M][\d.\-,\s]/,vR=/["']/g,xR=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),s=n[0],a=1,u=n.length,c,f,h;a<u;a++)f=n[a],c=a!==u-1?f.lastIndexOf(","):f.length,h=f.substr(0,c),t[s]=isNaN(h)?h.replace(vR,"").trim():+h,s=f.substr(c+1).trim();return t},yR=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<n?e.indexOf(")",n+1):n)},SR=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xR(t[1])]:yR(e).split(",").map(Px)):xt._CE&&_R.test(e)?xt._CE("",e):n},qx=function(e){return function(t){return 1-e(1-t)}},$x=function r(e,t){for(var n=e._first,s;n;)n instanceof Wn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=t)),n=n._next},so=function(e,t){return e&&(Qt(e)?e:xt[e]||SR(e))||t},fo=function(e,t,n,s){n===void 0&&(n=function(f){return 1-t(1-f)}),s===void 0&&(s=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:s},u;return ni(e,function(c){xt[c]=_i[c]=a,xt[u=c.toLowerCase()]=n;for(var f in a)xt[u+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=xt[c+"."+f]=a[f]}),a},Zx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mh=function r(e,t,n){var s=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/mp*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*$A((p-u)*a)+1},f=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:Zx(c);return a=mp/a,f.config=function(h,p){return r(e,h,p)},f},gh=function r(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:Zx(n);return s.config=function(a){return r(e,a)},s};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;fo("Elastic",mh("in"),mh("out"),mh());(function(r,e){var t=1/e,n=2*t,s=2.5*t,a=function(c){return c<t?r*c*c:c<n?r*Math.pow(c-1.5/e,2)+.75:c<s?r*(c-=2.25/e)*c+.9375:r*Math.pow(c-2.625/e,2)+.984375};fo("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);fo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});fo("Circ",function(r){return-(xx(1-r*r)-1)});fo("Sine",function(r){return r===1?1:-qA(r*XA)+1});fo("Back",gh("in"),gh("out"),gh());xt.SteppedEase=xt.steps=_i.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,s=e+(t?0:1),a=t?1:0,u=1-Un;return function(c){return((s*kl(0,u,c)|0)+a)*n}}};pa.ease=xt["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return im+=r+","+r+"Params,"});var Kx=function(e,t){this.id=YA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rx,this.set=t?t.getSetter:lm},Tl=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_a(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),Ml||pi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,s){if(va(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for($c(this,n),!a._dp||a.parent||Nx(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Un||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),bx(this,n,s)),this},e.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Z0(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},e.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Z0(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,s):this._repeat?ga(this._tTime,a)+1:1},e.timeScale=function(n,s){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?Fc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(kl(-Math.abs(this._delay),this._tDur,a),s!==!1),qc(this),nR(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(va(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Un&&(this._tTime-=Un)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&Qi(s,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fc(s.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=QA);var s=wn;return wn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=s,this},e.globalTime=function(n){for(var s=this,a=arguments.length?n:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,K0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,K0(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,s){return this.totalTime(Ci(this,n),ti(s))},e.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ti(s)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},e.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,s=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=s&&a<this.endTime(!0)-Un)},e.eventCallback=function(n,s,a){var u=this.vars;return arguments.length>1?(s?(u[n]=s,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=s)):delete u[n],this):u[n]},e.then=function(n){var s=this;return new Promise(function(a){var u=Qt(n)?n:Lx,c=function(){var h=s.then;s.then=null,Qt(u)&&(u=u(s))&&(u.then||u===s)&&(s.then=h),a(u),s.then=h};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?c():s._prom=c})},e.kill=function(){dl(this)},r}();vi(Tl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Wn=function(r){vx(e,r);function e(n,s){var a;return n===void 0&&(n={}),a=r.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=ti(n.sortChildren),jt&&Qi(n.parent||jt,Cr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Ix(Cr(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(s,a,u){return ml(0,arguments,this),this},t.from=function(s,a,u){return ml(1,arguments,this),this},t.fromTo=function(s,a,u,c){return ml(2,arguments,this),this},t.set=function(s,a,u){return a.duration=0,a.parent=this,pl(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new on(s,a,Ci(this,u),1),this},t.call=function(s,a,u){return Qi(this,on.delayedCall(0,s,a),u)},t.staggerTo=function(s,a,u,c,f,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new on(s,u,Ci(this,f)),this},t.staggerFrom=function(s,a,u,c,f,h,p){return u.runBackwards=1,pl(u).immediateRender=ti(u.immediateRender),this.staggerTo(s,a,u,c,f,h,p)},t.staggerFromTo=function(s,a,u,c,f,h,p,g){return c.startAt=u,pl(c).immediateRender=ti(c.immediateRender),this.staggerTo(s,a,c,f,h,p,g)},t.render=function(s,a,u){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:an(s),g=this._zTime<0!=s<0&&(this._initted||!h),_,y,M,E,x,v,b,A,T,U,F,I;if(this!==jt&&p>f&&s>=0&&(p=f),p!==this._tTime||u||g){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),_=p,T=this._start,A=this._ts,v=!A,g&&(h||(c=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(F=this._yoyo,x=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,a,u);if(_=an(p%x),p===f?(E=this._repeat,_=h):(U=an(p/x),E=~~U,E&&E===U&&(_=h,E--),_>h&&(_=h)),U=ga(this._tTime,x),!c&&this._tTime&&U!==E&&this._tTime-U*x-this._dur<=0&&(U=E),F&&E&1&&(_=h-_,I=1),E!==U&&!this._lock){var k=F&&U&1,C=k===(F&&E&1);if(E<U&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(I?0:an(E*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,C&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;$x(this,I)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=oR(this,an(c),an(_)),b&&(p-=_-(_=b._start))),this._tTime=p,this._time=_,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&_&&!a&&!E&&(mi(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(y=this._first;y;){if(M=y._next,(y._act||_>=y._start)&&y._ts&&b!==y){if(y.parent!==this)return this.render(s,a,u);if(y.render(y._ts>0?(_-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(_-y._start)*y._ts,a,u),_!==this._time||!this._ts&&!v){b=0,M&&(p+=this._zTime=-1e-8);break}}y=M}else{y=this._last;for(var R=s<0?s:_;y;){if(M=y._prev,(y._act||R<=y._end)&&y._ts&&b!==y){if(y.parent!==this)return this.render(s,a,u);if(y.render(y._ts>0?(R-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(R-y._start)*y._ts,a,u||wn&&(y._initted||y._startAt)),_!==this._time||!this._ts&&!v){b=0,M&&(p+=this._zTime=R?-1e-8:Un);break}}y=M}}if(b&&!a&&(this.pause(),b.render(_>=c?0:-1e-8)._zTime=_>=c?1:-1,this._ts))return this._start=T,qc(this),this.render(s,a,u);this._onUpdate&&!a&&mi(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(T===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Ss(this,1),!a&&!(s<0&&!c)&&(p||c||!f)&&(mi(this,p===f&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,a){var u=this;if(Ir(a)||(a=Ci(this,a,s)),!(s instanceof Tl)){if(On(s))return s.forEach(function(c){return u.add(c,a)}),this;if(Sn(s))return this.addLabel(s,a);if(Qt(s))s=on.delayedCall(0,s);else return this}return this!==s?Qi(this,s,a):this},t.getChildren=function(s,a,u,c){s===void 0&&(s=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-1e8);for(var f=[],h=this._first;h;)h._start>=c&&(h instanceof on?a&&f.push(h):(u&&f.push(h),s&&f.push.apply(f,h.getChildren(!0,a,u)))),h=h._next;return f},t.getById=function(s){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===s)return a[u]},t.remove=function(s){return Sn(s)?this.removeLabel(s):Qt(s)?this.killTweensOf(s):(s.parent===this&&Yc(this,s),s===this._recent&&(this._recent=this._last),ro(this))},t.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=an(pi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},t.addLabel=function(s,a){return this.labels[s]=Ci(this,a),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,a,u){var c=on.delayedCall(0,a||Sl,u);return c.data="isPause",this._hasPause=1,Qi(this,c,Ci(this,s))},t.removePause=function(s){var a=this._first;for(s=Ci(this,s);a;)a._start===s&&a.data==="isPause"&&Ss(a),a=a._next},t.killTweensOf=function(s,a,u){for(var c=this.getTweensOf(s,u),f=c.length;f--;)ds!==c[f]&&c[f].kill(s,a);return this},t.getTweensOf=function(s,a){for(var u=[],c=bi(s),f=this._first,h=Ir(a),p;f;)f instanceof on?JA(f._targets,c)&&(h?(!ds||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&u.push(f):(p=f.getTweensOf(c,a)).length&&u.push.apply(u,p),f=f._next;return u},t.tweenTo=function(s,a){a=a||{};var u=this,c=Ci(u,s),f=a,h=f.startAt,p=f.onStart,g=f.onStartParams,_=f.immediateRender,y,M=on.to(u,vi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||Un,onStart:function(){if(u.pause(),!y){var x=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());M._dur!==x&&_a(M,x,0,1).render(M._time,!0,!0),y=1}p&&p.apply(M,g||[])}},a));return _?M.render(0):M},t.tweenFromTo=function(s,a,u){return this.tweenTo(a,vi({startAt:{time:Ci(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),Q0(this,Ci(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),Q0(this,Ci(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Un)},t.shiftChildren=function(s,a,u){u===void 0&&(u=0);for(var c=this._first,f=this.labels,h;c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(a)for(h in f)f[h]>=u&&(f[h]+=s);return ro(this)},t.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return r.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ro(this)},t.totalDuration=function(s){var a=0,u=this,c=u._last,f=nr,h,p,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(g=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&u._sort&&c._ts&&!u._lock?(u._lock=1,Qi(u,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=p/u._ts,u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=h;_a(u,u===jt&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(jt._ts&&(bx(jt,Fc(s,jt)),Ax=pi.frame),pi.frame>=q0){q0+=gi.autoSleep||120;var a=jt._first;if((!a||!a._ts)&&gi.autoSleep&&pi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||pi.sleep()}}},e}(Tl);vi(Wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ER=function(e,t,n,s,a,u,c){var f=new ii(this._pt,e,t,0,1,iy,null,a),h=0,p=0,g,_,y,M,E,x,v,b;for(f.b=n,f.e=s,n+="",s+="",(v=~s.indexOf("random("))&&(s=El(s)),u&&(b=[n,s],u(b,e,t),n=b[0],s=b[1]),_=n.match(dh)||[];g=dh.exec(s);)M=g[0],E=s.substring(h,g.index),y?y=(y+1)%5:E.substr(-5)==="rgba("&&(y=1),M!==_[p++]&&(x=parseFloat(_[p-1])||0,f._pt={_next:f._pt,p:E||p===1?E:",",s:x,c:M.charAt(1)==="="?ra(x,M)-x:parseFloat(M)-x,m:y&&y<4?Math.round:0},h=dh.lastIndex);return f.c=h<s.length?s.substring(h,s.length):"",f.fp=c,(Ex.test(s)||v)&&(f.e=0),this._pt=f,f},sm=function(e,t,n,s,a,u,c,f,h,p){Qt(s)&&(s=s(a||0,e,u));var g=e[t],_=n!=="get"?n:Qt(g)?h?e[t.indexOf("set")||!Qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():g,y=Qt(g)?h?AR:ty:am,M;if(Sn(s)&&(~s.indexOf("random(")&&(s=El(s)),s.charAt(1)==="="&&(M=ra(_,s)+(In(_)||0),(M||M===0)&&(s=M))),!p||_!==s||Tp)return!isNaN(_*s)&&s!==""?(M=new ii(this._pt,e,t,+_||0,s-(_||0),typeof g=="boolean"?bR:ny,0,y),h&&(M.fp=h),c&&M.modifier(c,this,e),this._pt=M):(!g&&!(t in e)&&tm(t,s),ER.call(this,e,t,_,s,y,f||gi.stringFilter,h))},MR=function(e,t,n,s,a){if(Qt(e)&&(e=gl(e,a,t,n,s)),!or(e)||e.style&&e.nodeType||On(e)||yx(e))return Sn(e)?gl(e,a,t,n,s):e;var u={},c;for(c in e)u[c]=gl(e[c],a,t,n,s);return u},Qx=function(e,t,n,s,a,u){var c,f,h,p;if(hi[e]&&(c=new hi[e]).init(a,c.rawVars?t[e]:MR(t[e],s,a,u,n),n,s,u)!==!1&&(n._pt=f=new ii(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==ea))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=f;return c},ds,Tp,om=function r(e,t,n){var s=e.vars,a=s.ease,u=s.startAt,c=s.immediateRender,f=s.lazy,h=s.onUpdate,p=s.runBackwards,g=s.yoyoEase,_=s.keyframes,y=s.autoRevert,M=e._dur,E=e._startAt,x=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:x,A=e._overwrite==="auto"&&!Kp,T=e.timeline,U,F,I,k,C,R,B,J,Z,fe,ae,se,re;if(T&&(!_||!a)&&(a="none"),e._ease=so(a,pa.ease),e._yEase=g?qx(so(g===!0?a:g,pa.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!T&&!!s.runBackwards,!T||_&&!s.stagger){if(J=x[0]?io(x[0]).harness:0,se=J&&s[J.prop],U=Uc(s,nm),E&&(E._zTime<0&&E.progress(1),t<0&&p&&c&&!y?E.render(-1,!0):E.revert(p&&M?wc:KA),E._lazy=0),u){if(Ss(e._startAt=on.set(x,vi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!E&&ti(f),startAt:null,delay:0,onUpdate:h&&function(){return mi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!c&&!y)&&e._startAt.revert(wc),c&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&M&&!E){if(t&&(c=!1),I=vi({overwrite:!1,data:"isFromStart",lazy:c&&!E&&ti(f),immediateRender:c,stagger:0,parent:v},U),se&&(I[J.prop]=se),Ss(e._startAt=on.set(x,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(wc):e._startAt.render(-1,!0)),e._zTime=t,!c)r(e._startAt,Un,Un);else if(!t)return}for(e._pt=e._ptCache=0,f=M&&ti(f)||f&&!M,F=0;F<x.length;F++){if(C=x[F],B=C._gsap||rm(x)[F]._gsap,e._ptLookup[F]=fe={},vp[B.id]&&_s.length&&Ic(),ae=b===x?F:b.indexOf(C),J&&(Z=new J).init(C,se||U,e,ae,b)!==!1&&(e._pt=k=new ii(e._pt,C,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(G){fe[G]=k}),Z.priority&&(R=1)),!J||se)for(I in U)hi[I]&&(Z=Qx(I,U,e,ae,C,b))?Z.priority&&(R=1):fe[I]=k=sm.call(e,C,I,"get",U[I],ae,b,0,s.stringFilter);e._op&&e._op[F]&&e.kill(C,e._op[F]),A&&e._pt&&(ds=e,jt.killTweensOf(C,fe,e.globalTime(t)),re=!e.parent,ds=0),e._pt&&f&&(vp[B.id]=1)}R&&ry(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!re,_&&t<=0&&T.render(nr,!0,!0)},TR=function(e,t,n,s,a,u,c,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,_,y;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,y=e._targets.length;y--;){if(p=_[y][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return Tp=1,e.vars[t]="+=0",om(e,c),Tp=0,f?yl(t+" not eligible for reset"):1;h.push(p)}for(y=h.length;y--;)g=h[y],p=g._pt||g,p.s=(s||s===0)&&!a?s:p.s+(s||0)+u*p.c,p.c=n-p.s,g.e&&(g.e=nn(n)+In(g.e)),g.b&&(g.b=p.s+In(g.b))},wR=function(e,t){var n=e[0]?io(e[0]).harness:0,s=n&&n.aliases,a,u,c,f;if(!s)return t;a=ma({},t);for(u in s)if(u in a)for(f=s[u].split(","),c=f.length;c--;)a[f[c]]=a[u];return a},CR=function(e,t,n,s){var a=t.ease||s||"power1.inOut",u,c;if(On(t))c=n[e]||(n[e]=[]),t.forEach(function(f,h){return c.push({t:h/(t.length-1)*100,v:f,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},gl=function(e,t,n,s,a){return Qt(e)?e.call(t,n,s,a):Sn(e)&&~e.indexOf("random(")?El(e):e},Jx=im+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ey={};ni(Jx+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ey[r]=1});var on=function(r){vx(e,r);function e(n,s,a,u){var c;typeof s=="number"&&(a.duration=s,s=a,a=null),c=r.call(this,u?s:pl(s))||this;var f=c.vars,h=f.duration,p=f.delay,g=f.immediateRender,_=f.stagger,y=f.overwrite,M=f.keyframes,E=f.defaults,x=f.scrollTrigger,v=f.yoyoEase,b=s.parent||jt,A=(On(n)||yx(n)?Ir(n[0]):"length"in s)?[n]:bi(n),T,U,F,I,k,C,R,B;if(c._targets=A.length?rm(A):yl("GSAP target "+n+" not found. https://gsap.com",!gi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=y,M||_||gc(h)||gc(p)){if(s=c.vars,T=c.timeline=new Wn({data:"nested",defaults:E||{},targets:b&&b.data==="nested"?b.vars.targets:A}),T.kill(),T.parent=T._dp=Cr(c),T._start=0,_||gc(h)||gc(p)){if(I=A.length,R=_&&kx(_),or(_))for(k in _)~Jx.indexOf(k)&&(B||(B={}),B[k]=_[k]);for(U=0;U<I;U++)F=Uc(s,ey),F.stagger=0,v&&(F.yoyoEase=v),B&&ma(F,B),C=A[U],F.duration=+gl(h,Cr(c),U,C,A),F.delay=(+gl(p,Cr(c),U,C,A)||0)-c._delay,!_&&I===1&&F.delay&&(c._delay=p=F.delay,c._start+=p,F.delay=0),T.to(C,F,R?R(U,C,A):0),T._ease=xt.none;T.duration()?h=p=0:c.timeline=0}else if(M){pl(vi(T.vars.defaults,{ease:"none"})),T._ease=so(M.ease||s.ease||"none");var J=0,Z,fe,ae;if(On(M))M.forEach(function(se){return T.to(A,se,">")}),T.duration();else{F={};for(k in M)k==="ease"||k==="easeEach"||CR(k,M[k],F,M.easeEach);for(k in F)for(Z=F[k].sort(function(se,re){return se.t-re.t}),J=0,U=0;U<Z.length;U++)fe=Z[U],ae={ease:fe.e,duration:(fe.t-(U?Z[U-1].t:0))/100*h},ae[k]=fe.v,T.to(A,ae,J),J+=ae.duration;T.duration()<h&&T.to({},{duration:h-T.duration()})}}h||c.duration(h=T.duration())}else c.timeline=0;return y===!0&&!Kp&&(ds=Cr(c),jt.killTweensOf(A),ds=0),Qi(b,Cr(c),a),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(g||!h&&!M&&c._start===an(b._time)&&ti(g)&&iR(Cr(c))&&b.data!=="nested")&&(c._tTime=-1e-8,c.render(Math.max(0,-p)||0)),x&&Ix(Cr(c),x),c}var t=e.prototype;return t.render=function(s,a,u){var c=this._time,f=this._tDur,h=this._dur,p=s<0,g=s>f-Un&&!p?f:s<Un?0:s,_,y,M,E,x,v,b,A,T;if(!h)sR(this,s,a,u);else if(g!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=g,A=this.timeline,this._repeat){if(E=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(E*100+s,a,u);if(_=an(g%E),g===f?(M=this._repeat,_=h):(x=an(g/E),M=~~x,M&&M===x?(_=h,M--):_>h&&(_=h)),v=this._yoyo&&M&1,v&&(T=this._yEase,_=h-_),x=ga(this._tTime,E),_===c&&!u&&this._initted&&M===x)return this._tTime=g,this;M!==x&&(A&&this._yEase&&$x(A,v),this.vars.repeatRefresh&&!v&&!this._lock&&_!==E&&this._initted&&(this._lock=u=1,this.render(an(E*M),!0).invalidate()._lock=0))}if(!this._initted){if(Ux(this,p?s:_,u,a,g))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&M!==x))return this;if(h!==this._dur)return this.render(s,a,u)}if(this._tTime=g,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(T||this._ease)(_/h),this._from&&(this.ratio=b=1-b),_&&!c&&!a&&!M&&(mi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(b,y.d),y=y._next;A&&A.render(s<0?s:A._dur*A._ease(_/this._dur),a,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(p&&xp(this,s,a,u),mi(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!a&&this.parent&&mi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&xp(this,s,!0,!0),(s||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ss(this,1),!a&&!(p&&!c)&&(g||c||v)&&(mi(this,g===f?"onComplete":"onReverseComplete",!0),this._prom&&!(g<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},t.resetTo=function(s,a,u,c,f){Ml||pi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||om(this,h),p=this._ease(h/this._dur),TR(this,s,a,u,c,p,h,f)?this.resetTo(s,a,u,c,1):($c(this,0),this.parent||Dx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?dl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,ds&&ds.vars.overwrite!==!0)._first||dl(this),this.parent&&u!==this.timeline.totalDuration()&&_a(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,f=s?bi(s):c,h=this._ptLookup,p=this._pt,g,_,y,M,E,x,v;if((!a||a==="all")&&tR(c,f))return a==="all"&&(this._pt=0),dl(this);for(g=this._op=this._op||[],a!=="all"&&(Sn(a)&&(E={},ni(a,function(b){return E[b]=1}),a=E),a=wR(c,a)),v=c.length;v--;)if(~f.indexOf(c[v])){_=h[v],a==="all"?(g[v]=a,M=_,y={}):(y=g[v]=g[v]||{},M=a);for(E in M)x=_&&_[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&Yc(this,x,"_pt"),delete _[E]),y!=="all"&&(y[E]=1)}return this._initted&&!this._pt&&p&&dl(this),this},e.to=function(s,a){return new e(s,a,arguments[2])},e.from=function(s,a){return ml(1,arguments)},e.delayedCall=function(s,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,a,u){return ml(2,arguments)},e.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(s,a)},e.killTweensOf=function(s,a,u){return jt.killTweensOf(s,a,u)},e}(Tl);vi(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(r){on[r]=function(){var e=new Wn,t=Sp.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var am=function(e,t,n){return e[t]=n},ty=function(e,t,n){return e[t](n)},AR=function(e,t,n,s){return e[t](s.fp,n)},RR=function(e,t,n){return e.setAttribute(t,n)},lm=function(e,t){return Qt(e[t])?ty:Qp(e[t])&&e.setAttribute?RR:am},ny=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},bR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},iy=function(e,t){var n=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+s,n=n._next;s+=t.c}t.set(t.t,t.p,s,t)},um=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},PR=function(e,t,n,s){for(var a=this._pt,u;a;)u=a._next,a.p===s&&a.modifier(e,t,n),a=u},LR=function(e){for(var t=this._pt,n,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?Yc(this,t,"_pt"):t.dep||(n=1),t=s;return!n},DR=function(e,t,n,s){s.mSet(e,t,s.m.call(s.tween,n,s.mt),s)},ry=function(e){for(var t=e._pt,n,s,a,u;t;){for(n=t._next,s=a;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:a=t,(t._next=s)?s._prev=t:u=t,t=n}e._pt=a},ii=function(){function r(t,n,s,a,u,c,f,h,p){this.t=n,this.s=a,this.c=u,this.p=s,this.r=c||ny,this.d=f||this,this.set=h||am,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,s,a){this.mSet=this.mSet||this.set,this.set=DR,this.m=n,this.mt=a,this.tween=s},r}();ni(im+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return nm[r]=1});_i.TweenMax=_i.TweenLite=on;_i.TimelineLite=_i.TimelineMax=Wn;jt=new Wn({sortChildren:!1,defaults:pa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gi.stringFilter=Yx;var oo=[],Ac={},NR=[],ev=0,IR=0,_h=function(e){return(Ac[e]||NR).map(function(t){return t()})},wp=function(){var e=Date.now(),t=[];e-ev>2&&(_h("matchMediaInit"),oo.forEach(function(n){var s=n.queries,a=n.conditions,u,c,f,h;for(c in s)u=$i.matchMedia(s[c]).matches,u&&(f=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),f&&t.push(n))}),_h("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),ev=e,_h("matchMedia"))},sy=function(){function r(t,n){this.selector=n&&Ep(n),this.data=[],this._r=[],this.isReverted=!1,this.id=IR++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,s,a){Qt(n)&&(a=s,s=n,n=Qt);var u=this,c=function(){var h=Vt,p=u.selector,g;return h&&h!==u&&h.data.push(u),a&&(u.selector=Ep(a)),Vt=u,g=s.apply(u,arguments),Qt(g)&&u._r.push(g),Vt=h,u.selector=p,u.isReverted=!1,g};return u.last=c,n===Qt?c(u,function(f){return u.add(null,f)}):n?u[n]=c:c},e.ignore=function(n){var s=Vt;Vt=null,n(this),Vt=s},e.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof r?n.push.apply(n,s.getTweens()):s instanceof on&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,s){var a=this;if(n?function(){for(var c=a.getTweens(),f=a.data.length,h;f--;)h=a.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)h=a.data[f],h instanceof Wn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof on)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=oo.length;u--;)oo[u].id===this.id&&oo.splice(u,1)},e.revert=function(n){this.kill(n||{})},r}(),UR=function(){function r(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=r.prototype;return e.add=function(n,s,a){or(n)||(n={matches:n});var u=new sy(0,a||this.scope),c=u.conditions={},f,h,p;Vt&&!u.selector&&(u.selector=Vt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=n;for(h in n)h==="all"?p=1:(f=$i.matchMedia(n[h]),f&&(oo.indexOf(u)<0&&oo.push(u),(c[h]=f.matches)&&(p=1),f.addListener?f.addListener(wp):f.addEventListener("change",wp)));return p&&s(u,function(g){return u.add(null,g)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},r}(),Oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(s){return Wx(s)})},timeline:function(e){return new Wn(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,n,s){Sn(e)&&(e=bi(e)[0]);var a=io(e||{}).get,u=n?Lx:Px;return n==="native"&&(n=""),e&&(t?u((hi[t]&&hi[t].get||a)(e,t,n,s)):function(c,f,h){return u((hi[c]&&hi[c].get||a)(e,c,f,h))})},quickSetter:function(e,t,n){if(e=bi(e),e.length>1){var s=e.map(function(p){return si.quickSetter(p,t,n)}),a=s.length;return function(p){for(var g=a;g--;)s[g](p)}}e=e[0]||{};var u=hi[t],c=io(e),f=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var g=new u;ea._pt=0,g.init(e,n?p+n:p,ea,0,[e]),g.render(1,g),ea._pt&&um(1,ea)}:c.set(e,f);return u?h:function(p){return h(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var s,a=si.to(e,vi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),u=function(f,h,p){return a.resetTo(t,f,h,p)};return u.tween=a,u},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=so(e.ease,pa.ease)),$0(pa,e||{})},config:function(e){return $0(gi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,s=e.plugins,a=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!hi[c]&&!_i[c]&&yl(t+" effect requires "+c+" plugin.")}),hh[t]=function(c,f,h){return n(bi(c),vi(f||{},a),h)},u&&(Wn.prototype[t]=function(c,f,h){return this.add(hh[t](c,or(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){xt[e]=so(t)},parseEase:function(e,t){return arguments.length?so(e,t):xt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wn(e),s,a;for(n.smoothChildTiming=ti(e.smoothChildTiming),jt.remove(n),n._dp=0,n._time=n._tTime=jt._time,s=jt._first;s;)a=s._next,(t||!(!s._dur&&s instanceof on&&s.vars.onComplete===s._targets[0]))&&Qi(n,s,s._start-s._delay),s=a;return Qi(jt,n,0),n},context:function(e,t){return e?new sy(e,t):Vt},matchMedia:function(e){return new UR(e)},matchMediaRefresh:function(){return oo.forEach(function(e){var t=e.conditions,n,s;for(s in t)t[s]&&(t[s]=!1,n=1);n&&e.revert()})||wp()},addEventListener:function(e,t){var n=Ac[e]||(Ac[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ac[e],s=n&&n.indexOf(t);s>=0&&n.splice(s,1)},utils:{wrap:hR,wrapYoyo:pR,distribute:kx,random:Bx,snap:zx,normalize:dR,getUnit:In,clamp:lR,splitColor:jx,toArray:bi,selector:Ep,mapRange:Hx,pipe:cR,unitize:fR,interpolate:mR,shuffle:Ox},install:wx,effects:hh,ticker:pi,updateRoot:Wn.updateRoot,plugins:hi,globalTimeline:jt,core:{PropTween:ii,globals:Cx,Tween:on,Timeline:Wn,Animation:Tl,getCache:io,_removeLinkedListItem:Yc,reverting:function(){return wn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return Kp=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Oc[r]=on[r]});pi.add(Wn.updateRoot);ea=Oc.to({},{duration:0});var FR=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},OR=function(e,t){var n=e._targets,s,a,u;for(s in t)for(a=n.length;a--;)u=e._ptLookup[a][s],u&&(u=u.d)&&(u._pt&&(u=FR(u,s)),u&&u.modifier&&u.modifier(t[s],e,n[a],s))},vh=function(e,t){return{name:e,rawVars:1,init:function(s,a,u){u._onInit=function(c){var f,h;if(Sn(a)&&(f={},ni(a,function(p){return f[p]=1}),a=f),t){f={};for(h in a)f[h]=t(a[h]);a=f}OR(c,a)}}}},si=Oc.registerPlugin({name:"attr",init:function(e,t,n,s,a){var u,c,f;this.tween=n;for(u in t)f=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(f||0)+"",t[u],s,a,0,0,u),c.op=u,c.b=f,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vh("roundProps",Mp),vh("modifiers"),vh("snap",zx))||Oc;on.version=Wn.version=si.version="3.12.7";Tx=1;Jp()&&va();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tv,hs,sa,cm,to,nv,fm,kR=function(){return typeof window<"u"},Ur={},Zs=180/Math.PI,oa=Math.PI/180,Ko=Math.atan2,iv=1e8,dm=/([A-Z])/g,zR=/(left|right|width|margin|padding|x)/i,BR=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},GR=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},oy=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ay=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},WR=function(e,t,n){return e.style[t]=n},jR=function(e,t,n){return e.style.setProperty(t,n)},XR=function(e,t,n){return e._gsap[t]=n},YR=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qR=function(e,t,n,s,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},$R=function(e,t,n,s,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},Xt="transform",ri=Xt+"Origin",ZR=function r(e,t){var n=this,s=this.target,a=s.style,u=s._gsap;if(e in Ur&&a){if(this.tfm=this.tfm||{},e!=="transform")e=er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Ar(s,c)}):this.tfm[e]=u.x?u[e]:Ar(s,e),e===ri&&(this.tfm.zOrigin=u.zOrigin);else return er.transform.split(",").forEach(function(c){return r.call(n,c,t)});if(this.props.indexOf(Xt)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Xt}(a||t)&&this.props.push(e,t,a[e])},ly=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KR=function(){var e=this.props,t=this.target,n=t.style,s=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(dm,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=fm(),(!a||!a.isStart)&&!n[Xt]&&(ly(n),s.zOrigin&&n[ri]&&(n[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},uy=function(e,t){var n={target:e,props:[],revert:KR,save:ZR};return e._gsap||si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return n.save(s)}),n},cy,Ap=function(e,t){var n=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return n&&n.style?n:hs.createElement(e)},ir=function r(e,t,n){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(dm,"-$1").toLowerCase())||s.getPropertyValue(t)||!n&&r(e,xa(t)||t,1)||""},rv="O,Moz,ms,Ms,Webkit".split(","),xa=function(e,t,n){var s=t||to,a=s.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(rv[u]+e in a););return u<0?null:(u===3?"ms":u>=0?rv[u]:"")+e},Rp=function(){kR()&&window.document&&(tv=window,hs=tv.document,sa=hs.documentElement,to=Ap("div")||{style:{}},Ap("div"),Xt=xa(Xt),ri=Xt+"Origin",to.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cy=!!xa("perspective"),fm=si.core.reverting,cm=1)},sv=function(e){var t=e.ownerSVGElement,n=Ap("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),a;s.style.display="block",n.appendChild(s),sa.appendChild(n);try{a=s.getBBox()}catch{}return n.removeChild(s),sa.removeChild(n),a},ov=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fy=function(e){var t,n;try{t=e.getBBox()}catch{t=sv(e),n=1}return t&&(t.width||t.height)||n||(t=sv(e)),t&&!t.width&&!t.x&&!t.y?{x:+ov(e,["x","cx","x1"])||0,y:+ov(e,["y","cy","y1"])||0,width:0,height:0}:t},dy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fy(e))},uo=function(e,t){if(t){var n=e.style,s;t in Ur&&t!==ri&&(t=Xt),n.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(s==="--"?t:t.replace(dm,"-$1").toLowerCase())):n.removeAttribute(t)}},ps=function(e,t,n,s,a,u){var c=new ii(e._pt,t,n,0,1,u?ay:oy);return e._pt=c,c.b=s,c.e=a,e._props.push(n),c},av={deg:1,rad:1,turn:1},QR={grid:1,flex:1},Es=function r(e,t,n,s){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=to.style,f=zR.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),g=100,_=s==="px",y=s==="%",M,E,x,v;if(s===u||!a||av[s]||av[u])return a;if(u!=="px"&&!_&&(a=r(e,t,n,"px")),v=e.getCTM&&dy(e),(y||u==="%")&&(Ur[t]||~t.indexOf("adius")))return M=v?e.getBBox()[f?"width":"height"]:e[p],nn(y?a/M*g:a/100*M);if(c[f?"width":"height"]=g+(_?u:s),E=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,v&&(E=(e.ownerSVGElement||{}).parentNode),(!E||E===hs||!E.appendChild)&&(E=hs.body),x=E._gsap,x&&y&&x.width&&f&&x.time===pi.time&&!x.uncache)return nn(a/x.width*g);if(y&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=g+s,M=e[p],b?e.style[t]=b:uo(e,t)}else(y||u==="%")&&!QR[ir(E,"display")]&&(c.position=ir(e,"position")),E===e&&(c.position="static"),E.appendChild(to),M=to[p],E.removeChild(to),c.position="absolute";return f&&y&&(x=io(E),x.time=pi.time,x.width=E[p]),nn(_?M*a/g:M&&a?g/M*a:0)},Ar=function(e,t,n,s){var a;return cm||Rp(),t in er&&t!=="transform"&&(t=er[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ur[t]&&t!=="transform"?(a=Cl(e,s),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:zc(ir(e,ri))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=kc[t]&&kc[t](e,t,n)||ir(e,t)||Rx(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Es(e,t,a,n)+n:a},JR=function(e,t,n,s){if(!n||n==="none"){var a=xa(t,e,1),u=a&&ir(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=ir(e,"borderTopColor"))}var c=new ii(this._pt,e.style,t,0,1,iy),f=0,h=0,p,g,_,y,M,E,x,v,b,A,T,U;if(c.b=n,c.e=s,n+="",s+="",s==="auto"&&(E=e.style[t],e.style[t]=s,s=ir(e,t)||s,E?e.style[t]=E:uo(e,t)),p=[n,s],Yx(p),n=p[0],s=p[1],_=n.match(Jo)||[],U=s.match(Jo)||[],U.length){for(;g=Jo.exec(s);)x=g[0],b=s.substring(f,g.index),M?M=(M+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(M=1),x!==(E=_[h++]||"")&&(y=parseFloat(E)||0,T=E.substr((y+"").length),x.charAt(1)==="="&&(x=ra(y,x)+T),v=parseFloat(x),A=x.substr((v+"").length),f=Jo.lastIndex-A.length,A||(A=A||gi.units[t]||T,f===s.length&&(s+=A,c.e+=A)),T!==A&&(y=Es(e,t,E,A)||0),c._pt={_next:c._pt,p:b||h===1?b:",",s:y,c:v-y,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=f<s.length?s.substring(f,s.length):""}else c.r=t==="display"&&s==="none"?ay:oy;return Ex.test(s)&&(c.e=0),this._pt=c,c},lv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eb=function(e){var t=e.split(" "),n=t[0],s=t[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(e=n,n=s,s=e),t[0]=lv[n]||n,t[1]=lv[s]||s,t.join(" ")},tb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,s=n.style,a=t.u,u=n._gsap,c,f,h;if(a==="all"||a===!0)s.cssText="",f=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Ur[c]&&(f=1,c=c==="transformOrigin"?ri:Xt),uo(n,c);f&&(uo(n,Xt),u&&(u.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Cl(n,1),u.uncache=1,ly(s)))}},kc={clearProps:function(e,t,n,s,a){if(a.data!=="isFromStart"){var u=e._pt=new ii(e._pt,t,n,0,0,tb);return u.u=s,u.pr=-10,u.tween=a,e._props.push(n),1}}},wl=[1,0,0,1,0,0],hy={},py=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uv=function(e){var t=ir(e,Xt);return py(t)?wl:t.substr(7).match(Sx).map(nn)},hm=function(e,t){var n=e._gsap||io(e),s=e.style,a=uv(e),u,c,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?wl:a):(a===wl&&!e.offsetParent&&e!==sa&&!n.svg&&(f=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,sa.appendChild(e)),a=uv(e),f?s.display=f:uo(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):sa.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},bp=function(e,t,n,s,a,u){var c=e._gsap,f=a||hm(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,_=c.yOffset||0,y=f[0],M=f[1],E=f[2],x=f[3],v=f[4],b=f[5],A=t.split(" "),T=parseFloat(A[0])||0,U=parseFloat(A[1])||0,F,I,k,C;n?f!==wl&&(I=y*x-M*E)&&(k=T*(x/I)+U*(-E/I)+(E*b-x*v)/I,C=T*(-M/I)+U*(y/I)-(y*b-M*v)/I,T=k,U=C):(F=fy(e),T=F.x+(~A[0].indexOf("%")?T/100*F.width:T),U=F.y+(~(A[1]||A[0]).indexOf("%")?U/100*F.height:U)),s||s!==!1&&c.smooth?(v=T-h,b=U-p,c.xOffset=g+(v*y+b*E)-v,c.yOffset=_+(v*M+b*x)-b):c.xOffset=c.yOffset=0,c.xOrigin=T,c.yOrigin=U,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!n,e.style[ri]="0px 0px",u&&(ps(u,c,"xOrigin",h,T),ps(u,c,"yOrigin",p,U),ps(u,c,"xOffset",g,c.xOffset),ps(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",T+" "+U)},Cl=function(e,t){var n=e._gsap||new Kx(e);if("x"in n&&!t&&!n.uncache)return n;var s=e.style,a=n.scaleX<0,u="px",c="deg",f=getComputedStyle(e),h=ir(e,ri)||"0",p,g,_,y,M,E,x,v,b,A,T,U,F,I,k,C,R,B,J,Z,fe,ae,se,re,G,de,H,N,q,ye,V,ne;return p=g=_=E=x=v=b=A=T=0,y=M=1,n.svg=!!(e.getCTM&&dy(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(s[Xt]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Xt]!=="none"?f[Xt]:"")),s.scale=s.rotate=s.translate="none"),I=hm(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),h=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",re=""):re=!t&&e.getAttribute("data-svg-origin"),bp(e,re||h,!!re||n.originIsAbsolute,n.smooth!==!1,I)),U=n.xOrigin||0,F=n.yOrigin||0,I!==wl&&(B=I[0],J=I[1],Z=I[2],fe=I[3],p=ae=I[4],g=se=I[5],I.length===6?(y=Math.sqrt(B*B+J*J),M=Math.sqrt(fe*fe+Z*Z),E=B||J?Ko(J,B)*Zs:0,b=Z||fe?Ko(Z,fe)*Zs+E:0,b&&(M*=Math.abs(Math.cos(b*oa))),n.svg&&(p-=U-(U*B+F*Z),g-=F-(U*J+F*fe))):(ne=I[6],ye=I[7],H=I[8],N=I[9],q=I[10],V=I[11],p=I[12],g=I[13],_=I[14],k=Ko(ne,q),x=k*Zs,k&&(C=Math.cos(-k),R=Math.sin(-k),re=ae*C+H*R,G=se*C+N*R,de=ne*C+q*R,H=ae*-R+H*C,N=se*-R+N*C,q=ne*-R+q*C,V=ye*-R+V*C,ae=re,se=G,ne=de),k=Ko(-Z,q),v=k*Zs,k&&(C=Math.cos(-k),R=Math.sin(-k),re=B*C-H*R,G=J*C-N*R,de=Z*C-q*R,V=fe*R+V*C,B=re,J=G,Z=de),k=Ko(J,B),E=k*Zs,k&&(C=Math.cos(k),R=Math.sin(k),re=B*C+J*R,G=ae*C+se*R,J=J*C-B*R,se=se*C-ae*R,B=re,ae=G),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,v=180-v),y=nn(Math.sqrt(B*B+J*J+Z*Z)),M=nn(Math.sqrt(se*se+ne*ne)),k=Ko(ae,se),b=Math.abs(k)>2e-4?k*Zs:0,T=V?1/(V<0?-V:V):0),n.svg&&(re=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!py(ir(e,Xt)),re&&e.setAttribute("transform",re))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(y*=-1,b+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=g-((n.yPercent=g&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=_+u,n.scaleX=nn(y),n.scaleY=nn(M),n.rotation=nn(E)+c,n.rotationX=nn(x)+c,n.rotationY=nn(v)+c,n.skewX=b+c,n.skewY=A+c,n.transformPerspective=T+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(s[ri]=zc(h)),n.xOffset=n.yOffset=0,n.force3D=gi.force3D,n.renderTransform=n.svg?ib:cy?my:nb,n.uncache=0,n},zc=function(e){return(e=e.split(" "))[0]+" "+e[1]},xh=function(e,t,n){var s=In(t);return nn(parseFloat(t)+parseFloat(Es(e,"x",n+"px",s)))+s},nb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,my(e,t)},Ws="0deg",cl="0px",js=") ",my=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.z,h=n.rotation,p=n.rotationY,g=n.rotationX,_=n.skewX,y=n.skewY,M=n.scaleX,E=n.scaleY,x=n.transformPerspective,v=n.force3D,b=n.target,A=n.zOrigin,T="",U=v==="auto"&&e&&e!==1||v===!0;if(A&&(g!==Ws||p!==Ws)){var F=parseFloat(p)*oa,I=Math.sin(F),k=Math.cos(F),C;F=parseFloat(g)*oa,C=Math.cos(F),u=xh(b,u,I*C*-A),c=xh(b,c,-Math.sin(F)*-A),f=xh(b,f,k*C*-A+A)}x!==cl&&(T+="perspective("+x+js),(s||a)&&(T+="translate("+s+"%, "+a+"%) "),(U||u!==cl||c!==cl||f!==cl)&&(T+=f!==cl||U?"translate3d("+u+", "+c+", "+f+") ":"translate("+u+", "+c+js),h!==Ws&&(T+="rotate("+h+js),p!==Ws&&(T+="rotateY("+p+js),g!==Ws&&(T+="rotateX("+g+js),(_!==Ws||y!==Ws)&&(T+="skew("+_+", "+y+js),(M!==1||E!==1)&&(T+="scale("+M+", "+E+js),b.style[Xt]=T||"translate(0, 0)"},ib=function(e,t){var n=t||this,s=n.xPercent,a=n.yPercent,u=n.x,c=n.y,f=n.rotation,h=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,y=n.target,M=n.xOrigin,E=n.yOrigin,x=n.xOffset,v=n.yOffset,b=n.forceCSS,A=parseFloat(u),T=parseFloat(c),U,F,I,k,C;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=oa,h*=oa,U=Math.cos(f)*g,F=Math.sin(f)*g,I=Math.sin(f-h)*-_,k=Math.cos(f-h)*_,h&&(p*=oa,C=Math.tan(h-p),C=Math.sqrt(1+C*C),I*=C,k*=C,p&&(C=Math.tan(p),C=Math.sqrt(1+C*C),U*=C,F*=C)),U=nn(U),F=nn(F),I=nn(I),k=nn(k)):(U=g,k=_,F=I=0),(A&&!~(u+"").indexOf("px")||T&&!~(c+"").indexOf("px"))&&(A=Es(y,"x",u,"px"),T=Es(y,"y",c,"px")),(M||E||x||v)&&(A=nn(A+M-(M*U+E*I)+x),T=nn(T+E-(M*F+E*k)+v)),(s||a)&&(C=y.getBBox(),A=nn(A+s/100*C.width),T=nn(T+a/100*C.height)),C="matrix("+U+","+F+","+I+","+k+","+A+","+T+")",y.setAttribute("transform",C),b&&(y.style[Xt]=C)},rb=function(e,t,n,s,a){var u=360,c=Sn(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?Zs:1),h=f-s,p=s+h+"deg",g,_;return c&&(g=a.split("_")[1],g==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-360)),g==="cw"&&h<0?h=(h+u*iv)%u-~~(h/u)*u:g==="ccw"&&h>0&&(h=(h-u*iv)%u-~~(h/u)*u)),e._pt=_=new ii(e._pt,t,n,s,h,VR),_.e=p,_.u="deg",e._props.push(n),_},cv=function(e,t){for(var n in t)e[n]=t[n];return e},sb=function(e,t,n){var s=cv({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,f,h,p,g,_,y,M;s.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[Xt]=t,c=Cl(n,1),uo(n,Xt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Xt],u[Xt]=t,c=Cl(n,1),u[Xt]=h);for(f in Ur)h=s[f],p=c[f],h!==p&&a.indexOf(f)<0&&(y=In(h),M=In(p),g=y!==M?Es(n,f,h,M):parseFloat(h),_=parseFloat(p),e._pt=new ii(e._pt,c,f,g,_-g,Cp),e._pt.u=M||0,e._props.push(f));cv(c,s)};ni("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",s="Bottom",a="Left",u=(e<3?[t,n,s,a]:[t+a,t+n,s+n,s+a]).map(function(c){return e<2?r+c:"border"+c+r});kc[e>1?"border"+r:r]=function(c,f,h,p,g){var _,y;if(arguments.length<4)return _=u.map(function(M){return Ar(c,M,h)}),y=_.join(" "),y.split(_[0]).length===5?_[0]:y;_=(p+"").split(" "),y={},u.forEach(function(M,E){return y[M]=_[E]=_[E]||_[(E-1)/2|0]}),c.init(f,y,g)}});var gy={name:"css",register:Rp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,s,a){var u=this._props,c=e.style,f=n.vars.startAt,h,p,g,_,y,M,E,x,v,b,A,T,U,F,I,k;cm||Rp(),this.styles=this.styles||uy(e),k=this.styles.props,this.tween=n;for(E in t)if(E!=="autoRound"&&(p=t[E],!(hi[E]&&Qx(E,t,n,s,e,a)))){if(y=typeof p,M=kc[E],y==="function"&&(p=p.call(n,s,e,a),y=typeof p),y==="string"&&~p.indexOf("random(")&&(p=El(p)),M)M(this,e,E,p,n)&&(I=1);else if(E.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(E)+"").trim(),p+="",vs.lastIndex=0,vs.test(h)||(x=In(h),v=In(p)),v?x!==v&&(h=Es(e,E,h,v)+v):x&&(p+=x),this.add(c,"setProperty",h,p,s,a,0,0,E),u.push(E),k.push(E,0,c[E]);else if(y!=="undefined"){if(f&&E in f?(h=typeof f[E]=="function"?f[E].call(n,s,e,a):f[E],Sn(h)&&~h.indexOf("random(")&&(h=El(h)),In(h+"")||h==="auto"||(h+=gi.units[E]||In(Ar(e,E))||""),(h+"").charAt(1)==="="&&(h=Ar(e,E))):h=Ar(e,E),_=parseFloat(h),b=y==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),g=parseFloat(p),E in er&&(E==="autoAlpha"&&(_===1&&Ar(e,"visibility")==="hidden"&&g&&(_=0),k.push("visibility",0,c.visibility),ps(this,c,"visibility",_?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=er[E],~E.indexOf(",")&&(E=E.split(",")[0]))),A=E in Ur,A){if(this.styles.save(E),T||(U=e._gsap,U.renderTransform&&!t.parseTransform||Cl(e,t.parseTransform),F=t.smoothOrigin!==!1&&U.smooth,T=this._pt=new ii(this._pt,c,Xt,0,1,U.renderTransform,U,0,-1),T.dep=1),E==="scale")this._pt=new ii(this._pt,U,"scaleY",U.scaleY,(b?ra(U.scaleY,b+g):g)-U.scaleY||0,Cp),this._pt.u=0,u.push("scaleY",E),E+="X";else if(E==="transformOrigin"){k.push(ri,0,c[ri]),p=eb(p),U.svg?bp(e,p,0,F,0,this):(v=parseFloat(p.split(" ")[2])||0,v!==U.zOrigin&&ps(this,U,"zOrigin",U.zOrigin,v),ps(this,c,E,zc(h),zc(p)));continue}else if(E==="svgOrigin"){bp(e,p,1,F,0,this);continue}else if(E in hy){rb(this,U,E,_,b?ra(_,b+p):p);continue}else if(E==="smoothOrigin"){ps(this,U,"smooth",U.smooth,p);continue}else if(E==="force3D"){U[E]=p;continue}else if(E==="transform"){sb(this,p,e);continue}}else E in c||(E=xa(E)||E);if(A||(g||g===0)&&(_||_===0)&&!BR.test(p)&&E in c)x=(h+"").substr((_+"").length),g||(g=0),v=In(p)||(E in gi.units?gi.units[E]:x),x!==v&&(_=Es(e,E,h,v)),this._pt=new ii(this._pt,A?U:c,E,_,(b?ra(_,b+g):g)-_,!A&&(v==="px"||E==="zIndex")&&t.autoRound!==!1?GR:Cp),this._pt.u=v||0,x!==v&&v!=="%"&&(this._pt.b=h,this._pt.r=HR);else if(E in c)JR.call(this,e,E,h,b?b+p:p);else if(E in e)this.add(e,E,h||e[E],b?b+p:p,s,a);else if(E!=="parseTransform"){tm(E,p);continue}A||(E in c?k.push(E,0,c[E]):typeof e[E]=="function"?k.push(E,2,e[E]()):k.push(E,1,h||e[E])),u.push(E)}}I&&ry(this)},render:function(e,t){if(t.tween._time||!fm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ar,aliases:er,getSetter:function(e,t,n){var s=er[t];return s&&s.indexOf(",")<0&&(t=s),t in Ur&&t!==ri&&(e._gsap.x||Ar(e,"x"))?n&&nv===n?t==="scale"?YR:XR:(nv=n||{})&&(t==="scale"?qR:$R):e.style&&!Qp(e.style[t])?WR:~t.indexOf("-")?jR:lm(e,t)},core:{_removeProperty:uo,_getMatrix:hm}};si.utils.checkPrefix=xa;si.core.getStyleSaver=uy;(function(r,e,t,n){var s=ni(r+","+e+","+t,function(a){Ur[a]=1});ni(e,function(a){gi.units[a]="deg",hy[a]=1}),er[s[13]]=r+","+e,ni(n,function(a){var u=a.split(":");er[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){gi.units[r]="px"});si.registerPlugin(gy);var Dt=si.registerPlugin(gy)||si;Dt.core.Tween;const ob={default:{gridSize:20,cellSize:10,cubeSizeX:2,cubeSizeY:.5,cubeSizeZ:2,cubeSizeMaxX:10,cubeSizeMaxY:10,cubeSizeMaxZ:10,speed:.2,fadeStart:180,fadeEnd:100,fadeCurve:8,waveEffectEnabled:!1,waveAmplitude:3,waveFrequency:.5,waveSpeed:.01,randomYEffectEnabled:!1,randomYRange:8}},fv="threeSceneSettings",_y=X.createContext(),ab=({children:r,presetName:e="default"})=>{const t=X.useRef(null),n=()=>{const c=ob[e]||{};try{const f=JSON.parse(localStorage.getItem(fv));return{...c,...f}}catch{return{...c}}},[s,a]=X.useState(n),u=(c,f)=>{a(h=>{const p={...h,[c]:f};return clearTimeout(t.current),t.current=setTimeout(()=>{localStorage.setItem(fv,JSON.stringify(p))},500),p})};return X.useEffect(()=>()=>{clearTimeout(t.current)},[]),D.jsx(_y.Provider,{value:{settings:s,updateSetting:u},children:r})},vy=()=>X.useContext(_y),lb=()=>{const r=X.useRef(null),{settings:e}=vy(),t=10,n=X.useRef(e.speed),s=X.useRef({x:e.cubeSizeX,y:e.cubeSizeY,z:e.cubeSizeZ}),a=X.useRef({value:e.speed}),u=X.useRef({...s.current}),c=X.useRef([]),f=X.useRef(0),h=.45,p=.3;return X.useEffect(()=>{const g=Dt.to(a.current,{value:e.speed,duration:.6,ease:"power2.out"});return()=>g.kill()},[e.speed]),X.useEffect(()=>{const g=Dt.to(u.current,{x:e.cubeSizeX,y:e.cubeSizeY,z:e.cubeSizeZ,duration:.6,ease:"power2.out"});return()=>g.kill()},[e.cubeSizeX,e.cubeSizeY,e.cubeSizeZ]),X.useEffect(()=>{if(!r.current)return;const g=r.current,_=g.clientWidth,y=g.clientHeight,M=new JM,E=new Ri(75,_/y,.1,1e3),x=t,v=t,b=(e.gridSize+1)*v,A=b/2;E.position.set(0,40,40),E.lookAt(0,0,-((e.gridSize/2-1)*v));const T=new jA({antialias:!0});T.setSize(_,y,!1),T.setClearColor(1381653),g.appendChild(T.domElement);const U=new E0(16777215,1.25);U.position.set(1,1,0),M.add(U);const F=new E0(3381759,8);F.position.set(0,30,180),M.add(F);const I=10,k=[],C=b,R=1;for(let V=0;V<I;V++){const ne=new Ol(.1,1),_e=new qp({color:165611,transparent:!0,opacity:.8,blending:Ah,side:Ki,depthWrite:!1}),pe=new Vi(ne,_e);pe.rotation.x=Math.PI/2,B(pe,!0),M.add(pe),k.push(pe)}function B(V,ne=!1){V.position.x=(Math.random()-.5)*(b/2),V.position.y=s.current.y+R+5+Math.random()*30,V.position.z=ne?-Math.random()*C:-C}const J=e.fadeStart||60,Z=e.fadeEnd||10,fe=e.fadeCurve||2,ae=e.gridSize,se=[];for(let V=-Math.floor(ae/2);V<=Math.floor(ae/2);V++)for(let ne=-Math.floor(ae/2);ne<=Math.floor(ae/2);ne++){const _e=new Ma(1,1,1),pe=new nT({color:3618615,transparent:!0,opacity:0,specular:16777215,shininess:100}),Me=new Vi(_e,pe);Me.scale.set(e.cubeSizeX,e.cubeSizeY,e.cubeSizeZ);const Oe=V*x,Ie=ne*v;let Ke=0;if(e.waveEffectEnabled)Ke=e.waveAmplitude*Math.sin(Oe*e.waveFrequency+Ie*e.waveFrequency);else if(e.randomYEffectEnabled){const St=e.randomYRange||10;Ke=(Math.random()-.5)*St}Me.position.set(Oe,Ke,Ie),Me.userData.phase=Oe*e.waveFrequency+Ie*e.waveFrequency,M.add(Me),se.push(Me)}c.current=se;const re=V=>{const ne=E.position.distanceTo(V);if(ne>J)return 0;if(ne<Z)return 1;const _e=(J-ne)/(J-Z);return Math.pow(_e,fe)},G=V=>V-b;let de;const H=()=>{de=requestAnimationFrame(H),n.current=a.current.value,s.current.x=u.current.x,s.current.y=u.current.y,s.current.z=u.current.z,e.waveEffectEnabled&&(f.current+=e.waveSpeed),k.forEach(V=>{const ne=h*(n.current/p);V.position.z+=ne,V.scale.y=.1+ne*5;const _e=re(V.position);V.material.opacity=_e*.8,V.position.z>E.position.z+10&&B(V)}),c.current.forEach(V=>{if(V.position.z+=n.current,e.waveEffectEnabled&&(V.position.y=e.waveAmplitude*Math.sin(V.userData.phase+f.current)),V.material.transparent){const ne=re(V.position);V.material.opacity!==ne&&(V.material.opacity=ne,V.material.needsUpdate=!0)}if(V.position.z>A)if(V.material.opacity=0,V.material.needsUpdate=!0,V.position.z=G(V.position.z),e.randomYEffectEnabled&&!e.waveEffectEnabled){const ne=e.randomYRange||10;V.position.y=(Math.random()-.5)*ne}else e.waveEffectEnabled&&(V.position.y=e.waveAmplitude*Math.sin(V.userData.phase+f.current));V.scale.set(s.current.x,s.current.y,s.current.z)}),T.render(M,E)};H();let N;const q=()=>{const V=g.clientWidth,ne=g.clientHeight;T.setSize(V,ne,!1),E.aspect=V/ne,E.updateProjectionMatrix()},ye=new ResizeObserver(()=>{clearTimeout(N),N=setTimeout(q,200)});return ye.observe(g),()=>{cancelAnimationFrame(de),ye.disconnect(),clearTimeout(N),M.traverse(V=>{if(!V.isMesh)return;(Array.isArray(V.material)?V.material:[V.material]).forEach(_e=>_e.dispose()),V.geometry.dispose()}),T.dispose(),T.domElement&&r.current&&r.current.removeChild(T.domElement)}},[]),D.jsx("div",{ref:r,className:"three-scene"})},ub=({isActive:r})=>{const e=X.useRef(null),t={top:{base:"m 16.000007,6.55119 -8.1829196,4.72441 8.1829196,4.72441 8.18292,-4.72441 z",compressed:"m 16.000007,12.55119 -8.18292,4.72441 8.18292,4.724406 8.18292,-4.724406 z"},left:{base:"m 7.8170874,11.2756 v 9.44882 l 8.1829196,4.72441 v -9.44882 z",compressed:"m 7.817087,17.2756 v 3.44882 l 8.18292,4.724406 v -3.44882 z"},right:{base:"m 24.182927,11.2756 -8.18292,4.72441 v 9.44882 l 8.18292,-4.72441 z",compressed:"m 24.182927,17.2756 -8.18292,4.724406 v 3.44882 l 8.18292,-4.724406 z"}};return X.useEffect(()=>{const n=e.current.querySelector("path[data-face='top']"),s=e.current.querySelector("path[data-face='left']"),a=e.current.querySelector("path[data-face='right']"),u=e.current.querySelector("path.icon-cube__border"),c=Dt.timeline({repeat:-1,yoyo:!0});return c.to(n,{fill:"#8e8e8e",duration:1.5,ease:"sine.inOut"},0),c.to(s,{fill:"#6e6e6e",duration:1.5,ease:"sine.inOut"},.1),c.to(a,{fill:"#4e4e4e",duration:1.5,ease:"sine.inOut"},.2),c.to(u,{fill:"#5e5e5e",duration:1.5,ease:"sine.inOut"},.3),()=>c.kill()},[]),X.useEffect(()=>{const n=e.current.querySelector("path[data-face='top']"),s=e.current.querySelector("path[data-face='left']"),a=e.current.querySelector("path[data-face='right']");Dt.to(n,{attr:{d:r?t.top.compressed:t.top.base},duration:.4,ease:"power2.inOut"}),Dt.to(s,{attr:{d:r?t.left.compressed:t.left.base},duration:.4,ease:"power2.inOut"}),Dt.to(a,{attr:{d:r?t.right.compressed:t.right.base},duration:.4,ease:"power2.inOut"})},[r]),D.jsxs("svg",{ref:e,width:"32",height:"31.999998",viewBox:"0 0 32 31.999999",xmlns:"http://www.w3.org/2000/svg",className:"icon-cube","aria-hidden":"true",children:[D.jsx("path",{className:"icon-cube__border",fill:"#292929",d:"M 16.000007,1.82678 3.7256274,8.9134 v 14.17323 l 12.2743796,7.08661 12.27438,-7.08661 V 8.9134 Z"}),D.jsx("path",{className:"icon-cube__back",fill:"#151515",d:"M 16.000007,2.77166 4.5439274,9.38584 v 13.22835 l 11.4560796,6.61417 11.45609,-6.61417 V 9.38584 Z"}),D.jsx("path",{className:"icon-cube__cube-top","data-face":"top",fill:"#4e4e4e",d:t.top.base}),D.jsx("path",{className:"icon-cube__cube-left","data-face":"left",fill:"#2d2d2d",d:t.left.base}),D.jsx("path",{className:"icon-cube__cube-right","data-face":"right",fill:"#1c1c1c",d:t.right.base}),D.jsx("path",{className:"icon-cube__border-inner-left",fill:"#1c1c1c",d:"m 4.5439274,9.38583 v 13.22835 l 0.81829,-0.47244 V 9.85827 L 16.000007,3.71654 V 2.77166 Z"}),D.jsx("path",{className:"icon-cube__border-inner-bottom",fill:"#1a1a1a",d:"m 5.3622174,22.14174 -0.81829,0.47244 11.4560796,6.61418 11.45609,-6.61418 -0.8183,-0.47244 -10.63779,6.14174 z"}),D.jsx("path",{className:"icon-cube__border-inner-right",fill:"#202020",d:"m 16.000007,2.77166 v 0.94488 l 10.63779,6.14173 v 12.28347 l 0.8183,0.47244 c 0,0 0,-13.22835 0,-13.22835 z"})]})},cb=({showControls:r,setShowControls:e})=>{const{settings:t,updateSetting:n}=vy();return X.useEffect(()=>{document.querySelectorAll('.slider-control input[type="range"]').forEach(a=>{const u=()=>{const c=(a.value-a.min)/(a.max-a.min)*100;a.style.setProperty("--progress",`${c}%`)};a.addEventListener("input",u),u()})},[t]),D.jsxs(D.Fragment,{children:[D.jsx("button",{type:"button",className:`scene-controls-toggle${r?" active":""}`,onClick:()=>{console.log("toggling",!r),e(!r)},"aria-label":"Toggle Scene Controls",children:D.jsx(ub,{isActive:r})}),D.jsx("div",{className:`scene-controls ${r?"visible":""}`,children:D.jsxs("div",{className:"slider-group",children:[D.jsxs("div",{className:"slider-control",children:[D.jsx("label",{htmlFor:"speed",children:"Speed"}),D.jsx("input",{type:"range",id:"speed",min:"0.1",max:"1",step:"0.05",value:t.speed,onChange:s=>n("speed",parseFloat(s.target.value))})]}),D.jsxs("div",{className:"slider-control",children:[D.jsx("label",{htmlFor:"width",children:"Width"}),D.jsx("input",{type:"range",id:"width",min:"1",max:t.cubeSizeMaxX,step:"0.5",value:t.cubeSizeX,onChange:s=>n("cubeSizeX",parseFloat(s.target.value))})]}),D.jsxs("div",{className:"slider-control",children:[D.jsx("label",{htmlFor:"depth",children:"Depth"}),D.jsx("input",{type:"range",id:"depth",min:"1",max:t.cubeSizeMaxZ,step:"0.5",value:t.cubeSizeZ,onChange:s=>n("cubeSizeZ",parseFloat(s.target.value))})]}),D.jsxs("div",{className:"slider-control",children:[D.jsx("label",{htmlFor:"height",children:"Height"}),D.jsx("input",{type:"range",id:"height",min:"0.5",max:t.cubeSizeMaxY,step:"0.5",value:t.cubeSizeY,onChange:s=>n("cubeSizeY",parseFloat(s.target.value))})]})]})})]})},fb=()=>{const{notifyPageReady:r}=Rl(),[e,t]=X.useState(!1);return Gc(()=>{requestAnimationFrame(()=>{r()})}),D.jsxs(ab,{presetName:"default",children:[D.jsx(cb,{showControls:e,setShowControls:t}),D.jsx(Wc,{children:D.jsx("header",{children:D.jsx("h1",{children:"Crafting Web Solutions for over 20 years."})})}),D.jsx(lb,{})]})},_l=({children:r})=>D.jsx("div",{className:"panel",children:r}),db=()=>{const{notifyPageReady:r}=Rl();return Gc(r),D.jsx(D.Fragment,{children:D.jsx(Wc,{children:D.jsxs("section",{children:[D.jsxs("header",{children:[D.jsx("h1",{children:"David LaBar"}),D.jsx("p",{className:"subheading",children:"UX Engineer / Designer"})]}),D.jsxs(_l,{children:[D.jsx("p",{className:"tagline",children:"Designer & developer with a deep toolkit and a passion for polish"}),D.jsx("p",{children:"I've spent my career bridging design and development - starting with raw HTML and Flash in the early 2000s, growing through modular SCSS, JavaScript frameworks, and custom frontend systems."}),D.jsx("p",{children:"Along the way, I've built frontend systems for dev teams, launched client sites end-to-end, and worked in everything from Flash games to audio production. My background spans both the visual and technical - from concept sketch to production code."}),D.jsx("p",{children:"This portfolio is part playground, part proof-of-skill. It reflects the mindset I bring to every project: build, test, refine, repeat."}),D.jsx("p",{children:"If you're looking for a hybrid thinker who can move fluidly between design and code, let's connect."})]}),D.jsxs(_l,{children:[D.jsx("h2",{className:"tagline",children:"Toolbox"}),D.jsx("p",{children:"I sketch, code, and tinker until it clicks. Whatever tools your team's into, I prototype clean, effective solutions that fit your stack."}),D.jsx("h3",{children:"Frontend"}),D.jsxs("ul",{className:"ul",children:[D.jsx("li",{className:"li",children:"HTML / SCSS"}),D.jsx("li",{className:"li",children:"GSAP / SVG"}),D.jsx("li",{className:"li",children:"JavaScript (ES6+)"}),D.jsx("li",{className:"li",children:"React (JSX)"}),D.jsx("li",{className:"li",children:"Three.js (WebGL)"})]}),D.jsx("h3",{children:"Backend  /  CMS"}),D.jsxs("ul",{className:"ul",children:[D.jsx("li",{className:"li",children:"Drupal"}),D.jsx("li",{className:"li",children:"Wordpress"}),D.jsx("li",{className:"li",children:"Shopify"}),D.jsx("li",{className:"li",children:"Craft"}),D.jsx("li",{className:"li",children:"Node.js"})]}),D.jsx("h3",{children:"Design"}),D.jsxs("ul",{className:"ul",children:[D.jsx("li",{className:"li",children:"Photoshop"}),D.jsx("li",{className:"li",children:"GIMP"}),D.jsx("li",{className:"li",children:"Illustrator"}),D.jsx("li",{className:"li",children:"Inkscape"}),D.jsx("li",{className:"li",children:"Figma"})]}),D.jsx("h3",{children:"Game  /  Interactive"}),D.jsxs("ul",{className:"ul",children:[D.jsx("li",{className:"li",children:"Godot"}),D.jsx("li",{className:"li",children:"Lua / Roblox"}),D.jsx("li",{className:"li",children:"Phaser"})]})]}),D.jsxs(_l,{children:[D.jsx("p",{children:"See more details of my experience."}),D.jsxs("div",{className:"btn-group",children:[D.jsx("a",{href:"/downloads/David-LaBar_Resume-2025.pdf",className:"bfg-button",target:"_blank",rel:"noopener noreferrer",children:"View Resume"}),D.jsx("a",{href:"https://www.linkedin.com/in/davidlabar/",className:"bfg-button",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn Profile"})]})]})]})})})};var yh={exports:{}},Sh,dv;function hb(){if(dv)return Sh;dv=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Sh=r,Sh}var Eh,hv;function pb(){if(hv)return Eh;hv=1;var r=hb();function e(){}function t(){}return t.resetWarningCache=e,Eh=function(){function n(u,c,f,h,p,g){if(g!==r){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}n.isRequired=n;function s(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:s,element:n,elementType:n,instanceOf:s,node:n,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:t,resetWarningCache:e};return a.PropTypes=a,a},Eh}var pv;function mb(){return pv||(pv=1,yh.exports=pb()()),yh.exports}var gb=mb();const Wt=Ev(gb);function mv(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable})),t.push.apply(t,n)}return t}function gv(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(t),!0).forEach(function(n){xy(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):mv(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Rc(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Rc=function(e){return typeof e}:Rc=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rc(r)}function xy(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _b(r,e){if(r==null)return{};var t={},n=Object.keys(r),s,a;for(a=0;a<n.length;a++)s=n[a],!(e.indexOf(s)>=0)&&(t[s]=r[s]);return t}function vb(r,e){if(r==null)return{};var t=_b(r,e),n,s;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(s=0;s<a.length;s++)n=a[s],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function xb(r,e){return yb(r)||Sb(r,e)||Eb(r,e)||Mb()}function yb(r){if(Array.isArray(r))return r}function Sb(r,e){var t=r&&(typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"]);if(t!=null){var n=[],s=!0,a=!1,u,c;try{for(t=t.call(r);!(s=(u=t.next()).done)&&(n.push(u.value),!(e&&n.length===e));s=!0);}catch(f){a=!0,c=f}finally{try{!s&&t.return!=null&&t.return()}finally{if(a)throw c}}return n}}function Eb(r,e){if(r){if(typeof r=="string")return _v(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _v(r,e)}}function _v(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Mb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(e,t,n){var s=!!n,a=tn.useRef(n);tn.useEffect(function(){a.current=n},[n]),tn.useEffect(function(){if(!s||!e)return function(){};var u=function(){a.current&&a.current.apply(a,arguments)};return e.on(t,u),function(){e.off(t,u)}},[s,t,e,a])},Tb=function(e){var t=tn.useRef(e);return tn.useEffect(function(){t.current=e},[e]),t.current},Bc=function(e){return e!==null&&Rc(e)==="object"},vv="[object Object]",wb=function r(e,t){if(!Bc(e)||!Bc(t))return e===t;var n=Array.isArray(e),s=Array.isArray(t);if(n!==s)return!1;var a=Object.prototype.toString.call(e)===vv,u=Object.prototype.toString.call(t)===vv;if(a!==u)return!1;if(!a&&!n)return e===t;var c=Object.keys(e),f=Object.keys(t);if(c.length!==f.length)return!1;for(var h={},p=0;p<c.length;p+=1)h[c[p]]=!0;for(var g=0;g<f.length;g+=1)h[f[g]]=!0;var _=Object.keys(h);if(_.length!==c.length)return!1;var y=e,M=t,E=function(v){return r(y[v],M[v])};return _.every(E)},Cb=function(e,t,n){return Bc(e)?Object.keys(e).reduce(function(s,a){var u=!Bc(t)||!wb(e[a],t[a]);return n.includes(a)?(u&&console.warn("Unsupported prop change: options.".concat(a," is not a mutable property.")),s):u?gv(gv({},s||{}),{},xy({},a,e[a])):s},null):null},yy=tn.createContext(null);yy.displayName="ElementsContext";var Ab=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e};Wt.any,Wt.object;Wt.func.isRequired;var Sy=tn.createContext(null);Sy.displayName="CheckoutSdkContext";var Rb=function(e,t){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CheckoutProvider> provider."));return e},bb=tn.createContext(null);bb.displayName="CheckoutContext";Wt.any,Wt.shape({fetchClientSecret:Wt.func.isRequired,elementsOptions:Wt.object}).isRequired;var xv=function(e){var t=tn.useContext(Sy),n=tn.useContext(yy);if(t&&n)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return t?Rb(t,e):Ab(n,e)},Pb=["mode"],Lb=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},ln=function(e,t){var n="".concat(Lb(e),"Element"),s=function(f){var h=f.id,p=f.className,g=f.options,_=g===void 0?{}:g,y=f.onBlur,M=f.onFocus,E=f.onReady,x=f.onChange,v=f.onEscape,b=f.onClick,A=f.onLoadError,T=f.onLoaderStart,U=f.onNetworksChange,F=f.onConfirm,I=f.onCancel,k=f.onShippingAddressChange,C=f.onShippingRateChange,R=xv("mounts <".concat(n,">")),B="elements"in R?R.elements:null,J="checkoutSdk"in R?R.checkoutSdk:null,Z=tn.useState(null),fe=xb(Z,2),ae=fe[0],se=fe[1],re=tn.useRef(null),G=tn.useRef(null);di(ae,"blur",y),di(ae,"focus",M),di(ae,"escape",v),di(ae,"click",b),di(ae,"loaderror",A),di(ae,"loaderstart",T),di(ae,"networkschange",U),di(ae,"confirm",F),di(ae,"cancel",I),di(ae,"shippingaddresschange",k),di(ae,"shippingratechange",C),di(ae,"change",x);var de;E&&(e==="expressCheckout"?de=E:de=function(){E(ae)}),di(ae,"ready",de),tn.useLayoutEffect(function(){if(re.current===null&&G.current!==null&&(B||J)){var N=null;if(J)switch(e){case"payment":N=J.createPaymentElement(_);break;case"address":if("mode"in _){var q=_.mode,ye=vb(_,Pb);if(q==="shipping")N=J.createShippingAddressElement(ye);else if(q==="billing")N=J.createBillingAddressElement(ye);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":N=J.createExpressCheckoutElement(_);break;case"currencySelector":N=J.createCurrencySelectorElement();break;default:throw new Error("Invalid Element type ".concat(n,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else B&&(N=B.create(e,_));re.current=N,se(N),N&&N.mount(G.current)}},[B,J,_]);var H=Tb(_);return tn.useEffect(function(){if(re.current){var N=Cb(_,H,["paymentRequest"]);N&&"update"in re.current&&re.current.update(N)}},[_,H]),tn.useLayoutEffect(function(){return function(){if(re.current&&typeof re.current.destroy=="function")try{re.current.destroy(),re.current=null}catch{}}},[]),tn.createElement("div",{id:h,className:p,ref:G})},a=function(f){xv("mounts <".concat(n,">"));var h=f.id,p=f.className;return tn.createElement("div",{id:h,className:p})},u=t?a:s;return u.propTypes={id:Wt.string,className:Wt.string,onChange:Wt.func,onBlur:Wt.func,onFocus:Wt.func,onReady:Wt.func,onEscape:Wt.func,onClick:Wt.func,onLoadError:Wt.func,onLoaderStart:Wt.func,onNetworksChange:Wt.func,onConfirm:Wt.func,onCancel:Wt.func,onShippingAddressChange:Wt.func,onShippingRateChange:Wt.func,options:Wt.object},u.displayName=n,u.__elementType=e,u},un=typeof window>"u",Db=tn.createContext(null);Db.displayName="EmbeddedCheckoutProviderContext";ln("auBankAccount",un);var Nb=ln("card",un);ln("cardNumber",un);ln("cardExpiry",un);ln("cardCvc",un);ln("fpxBank",un);ln("iban",un);ln("idealBank",un);ln("p24Bank",un);ln("epsBank",un);ln("payment",un);ln("expressCheckout",un);ln("currencySelector",un);ln("paymentRequestButton",un);ln("linkAuthentication",un);ln("address",un);ln("shippingAddress",un);ln("paymentMethodMessaging",un);ln("affirmMessage",un);ln("afterpayClearpayMessage",un);var Mh,yv;function Ib(){if(yv)return Mh;yv=1;var r=Object.defineProperty,e=Object.getOwnPropertyDescriptor,t=Object.getOwnPropertyNames,n=Object.prototype.hasOwnProperty,s=(H,N)=>{for(var q in N)r(H,q,{get:N[q],enumerable:!0})},a=(H,N,q,ye)=>{if(N&&typeof N=="object"||typeof N=="function")for(let V of t(N))!n.call(H,V)&&V!==q&&r(H,V,{get:()=>N[V],enumerable:!(ye=e(N,V))||ye.enumerable});return H},u=H=>a(r({},"__esModule",{value:!0}),H),c=(H,N,q)=>new Promise((ye,V)=>{var ne=Me=>{try{pe(q.next(Me))}catch(Oe){V(Oe)}},_e=Me=>{try{pe(q.throw(Me))}catch(Oe){V(Oe)}},pe=Me=>Me.done?ye(Me.value):Promise.resolve(Me.value).then(ne,_e);pe((q=q.apply(H,N)).next())}),f={};s(f,{SubmissionError:()=>T,appendExtraData:()=>Z,createClient:()=>re,getDefaultClient:()=>G,isSubmissionError:()=>A}),Mh=u(f);var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function g(H){H=String(H);for(var N,q,ye,V,ne="",_e=0,pe=H.length%3;_e<H.length;){if((q=H.charCodeAt(_e++))>255||(ye=H.charCodeAt(_e++))>255||(V=H.charCodeAt(_e++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");N=q<<16|ye<<8|V,ne+=h.charAt(N>>18&63)+h.charAt(N>>12&63)+h.charAt(N>>6&63)+h.charAt(N&63)}return pe?ne.slice(0,pe-3)+"===".substring(pe):ne}function _(H){if(H=String(H).replace(/[\t\n\f\r ]+/g,""),!p.test(H))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");H+="==".slice(2-(H.length&3));for(var N,q="",ye,V,ne=0;ne<H.length;)N=h.indexOf(H.charAt(ne++))<<18|h.indexOf(H.charAt(ne++))<<12|(ye=h.indexOf(H.charAt(ne++)))<<6|(V=h.indexOf(H.charAt(ne++))),q+=ye===64?String.fromCharCode(N>>16&255):V===64?String.fromCharCode(N>>16&255,N>>8&255):String.fromCharCode(N>>16&255,N>>8&255,N&255);return q}var y=()=>navigator.webdriver||!!document.documentElement.getAttribute(_("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,M=class{constructor(){this.loadedAt=Date.now(),this.webdriver=y()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},E=class{constructor(H){this.kind="success",this.next=H.next}};function x(H){return"next"in H&&typeof H.next=="string"}var v=class{constructor(H,N){this.paymentIntentClientSecret=H,this.resubmitKey=N,this.kind="stripePluginPending"}};function b(H){if("stripe"in H&&"resubmitKey"in H&&typeof H.resubmitKey=="string"){let{stripe:N}=H;return typeof N=="object"&&N!=null&&"paymentIntentClientSecret"in N&&typeof N.paymentIntentClientSecret=="string"}return!1}function A(H){return H.kind==="error"}var T=class{constructor(...H){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var N;for(let q of H){if(!q.field){this.formErrors.push({code:q.code&&U(q.code)?q.code:"UNSPECIFIED",message:q.message});continue}let ye=(N=this.fieldErrors.get(q.field))!=null?N:[];ye.push({code:q.code&&I(q.code)?q.code:"UNSPECIFIED",message:q.message}),this.fieldErrors.set(q.field,ye)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(H){var N;return(N=this.fieldErrors.get(H))!=null?N:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function U(H){return H in F}var F={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function I(H){return H in k}var k={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function C(H){return"errors"in H&&Array.isArray(H.errors)&&H.errors.every(N=>typeof N.message=="string")||"error"in H&&typeof H.error=="string"}var R="4.0.0",B=H=>g(JSON.stringify(H)),J=H=>{let N=`@formspree/core@${R}`;return H?`${H} ${N}`:N};function Z(H,N,q){H instanceof FormData?H.append(N,q):H[N]=q}function fe(H){return H!==null&&typeof H=="object"}var ae=class{constructor(H={}){this.project=H.project,this.stripe=H.stripe,typeof window<"u"&&(this.session=new M)}submitForm(H,N){return c(this,arguments,function*(q,ye,V={}){let ne=V.endpoint||"https://formspree.io",_e=this.project?`${ne}/p/${this.project}/f/${q}`:`${ne}/f/${q}`,pe={Accept:"application/json","Formspree-Client":J(V.clientName)};this.session&&(pe["Formspree-Session-Data"]=B(this.session.data())),ye instanceof FormData||(pe["Content-Type"]="application/json");function Me(Ie){return c(this,null,function*(){try{let Ke=yield(yield fetch(_e,{method:"POST",mode:"cors",body:Ie instanceof FormData?Ie:JSON.stringify(Ie),headers:pe})).json();if(fe(Ke)){if(C(Ke))return Array.isArray(Ke.errors)?new T(...Ke.errors):new T({message:Ke.error});if(b(Ke))return new v(Ke.stripe.paymentIntentClientSecret,Ke.resubmitKey);if(x(Ke))return new E({next:Ke.next})}return new T({message:"Unexpected response format"})}catch(Ke){let St=Ke instanceof Error?Ke.message:`Unknown error while posting to Formspree: ${JSON.stringify(Ke)}`;return new T({message:St})}})}if(this.stripe&&V.createPaymentMethod){let Ie=yield V.createPaymentMethod();if(Ie.error)return new T({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});Z(ye,"paymentMethod",Ie.paymentMethod.id);let Ke=yield Me(ye);if(Ke.kind==="error")return Ke;if(Ke.kind==="stripePluginPending"){let St=yield this.stripe.handleCardAction(Ke.paymentIntentClientSecret);if(St.error)return new T({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});ye instanceof FormData?ye.delete("paymentMethod"):delete ye.paymentMethod,Z(ye,"paymentIntent",St.paymentIntent.id),Z(ye,"resubmitKey",Ke.resubmitKey);let at=yield Me(ye);return se(at),at}return Ke}let Oe=yield Me(ye);return se(Oe),Oe})}};function se(H){let{kind:N}=H;if(N!=="success"&&N!=="error")throw new Error(`Unexpected submission result (kind: ${N})`)}var re=H=>new ae(H),G=()=>(de||(de=re()),de),de;return Mh}var pm=Ib();function Sv(r){let{prefix:e,field:t,errors:n,...s}=r;if(n==null)return null;let a=t?n.getFieldErrors(t):n.getFormErrors();return a.length===0?null:tn.createElement("div",{...s},e?`${e} `:null,a.map(u=>u.message).join(", "))}var Ub=X.createContext({elements:null});function Fb(){return X.useContext(Ub)}var Ob=tn.createContext(null);function kb(){return X.useContext(Ob)??{client:pm.getDefaultClient()}}var zb="3.0.0",Bb=`@formspree/react@${zb}`;function Vb(r,e={}){let t=kb(),{client:n=t.client,extraData:s,origin:a}=e,{elements:u}=Fb(),{stripe:c}=n;return async function(f){let h=Hb(f)?Gb(f):f;if(typeof s=="object")for(let[_,y]of Object.entries(s)){let M;typeof y=="function"?M=await y():M=y,M!==void 0&&pm.appendExtraData(h,_,M)}let p=u==null?void 0:u.getElement(Nb),g=c&&p?()=>c.createPaymentMethod({type:"card",card:p,billing_details:Wb(h)}):void 0;return n.submitForm(r,h,{endpoint:a,clientName:Bb,createPaymentMethod:g})}}function Hb(r){return"preventDefault"in r&&typeof r.preventDefault=="function"}function Gb(r){r.preventDefault();let e=r.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function Wb(r){let e={address:jb(r)};for(let t of["name","email","phone"]){let n=r instanceof FormData?r.get(t):r[t];n&&typeof n=="string"&&(e[t]=n)}return e}function jb(r){let e={};for(let[t,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let s=r instanceof FormData?r.get(t):r[t];s&&typeof s=="string"&&(e[n]=s)}return e}function Xb(r,e={}){let[t,n]=X.useState(null),[s,a]=X.useState(null),[u,c]=X.useState(!1),[f,h]=X.useState(!1),p=Vb(r,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:t,result:s,submitting:u,succeeded:f},async function(g){c(!0);let _=await p(g);c(!1),pm.isSubmissionError(_)?(n(_),h(!1)):(n(null),a(_),h(!0))},function(){n(null),a(null),c(!1),h(!1)}]}const Yb=()=>{const[r,e]=Xb("xpwdqwan"),[t,n]=X.useState(""),[s,a]=X.useState("");return X.useEffect(()=>{const u=localStorage.getItem("contact_email"),c=localStorage.getItem("contact_message");u&&n(u),c&&a(c)},[]),X.useEffect(()=>{localStorage.setItem("contact_email",t)},[t]),X.useEffect(()=>{localStorage.setItem("contact_message",s)},[s]),X.useEffect(()=>{r.succeeded&&(localStorage.removeItem("contact_email"),localStorage.removeItem("contact_message"),n(""),a(""))},[r.succeeded]),r.succeeded?D.jsx("div",{className:"thankyou",children:"Thanks for reaching out! I'll get back to you soon."}):D.jsxs("form",{className:"form",onSubmit:e,children:[D.jsx("label",{className:"label",htmlFor:"email",children:"Email Address"}),D.jsx("input",{className:"input-text",id:"email",type:"email",name:"email",value:t,onChange:u=>n(u.target.value),required:!0}),D.jsx(Sv,{prefix:"Email",field:"email",errors:r.errors}),D.jsx("label",{className:"label",htmlFor:"message",children:"Message"}),D.jsx("textarea",{className:"input-textarea",id:"message",name:"message",value:s,onChange:u=>a(u.target.value),required:!0}),D.jsx(Sv,{prefix:"Message",field:"message",errors:r.errors}),D.jsx("button",{className:"bfg-button",type:"submit",disabled:r.submitting,children:"Send"})]})},qb=()=>{const{notifyPageReady:r}=Rl();return Gc(r),D.jsx(D.Fragment,{children:D.jsxs(Wc,{children:[D.jsxs("header",{children:[D.jsx("h1",{children:"Hire Me"}),D.jsx("p",{className:"subheading",children:"Tell Me About Your Project"})]}),D.jsx(_l,{children:D.jsxs("div",{className:"layout-row layout-row--2",children:[D.jsxs("div",{className:"layout-cell",children:[D.jsx("p",{className:"no-margin-top",children:"I'm currently available for freelance or full-time opportunities. Whether you need a polished front-end, a custom design system, or just someone who can bring design and dev together. I'd love to hear what you're working on."}),D.jsx("p",{children:"Let me know a bit about your project and how to reach you. I'll get back to you as soon as I can."})]}),D.jsx("div",{className:"layout-cell",children:D.jsx(Yb,{})})]})})]})})},Ey=()=>{const r=Dp(),e=lr(),{showOverlay:t,setNavOpen:n}=Al();return a=>{if(e.pathname===a){n(!1);return}n(!1),t({opacity:1,reason:"nav",onVisible:()=>{window.scrollTo(0,0),r(a)}})}},Th=({children:r})=>D.jsx("div",{className:"card",children:r}),$b=({idPrefix:r="icon-design"})=>D.jsxs("svg",{id:"icon-design",viewBox:"0 0 84.666649 84.66656",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:`${r}_gradient2`,x1:"149.48958",y1:"135.5416",x2:"149.48958",y2:"197.90823",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(-107.15625,-118.53333)",children:[D.jsx("stop",{offset:"0",style:{stopColor:"#7eccfe",stopOpacity:1}}),D.jsx("stop",{offset:"1",style:{stopColor:"#0286eb",stopOpacity:1}})]})}),D.jsx("path",{id:`${r}_grid`,d:"m 10.58334,10.58334 v 63.5 h 63.5 v -63.5 z m 2.64583,2.64584 H 26.12761 V 26.12761 H 13.22917 Z m 13.5599,0 H 41.67188 V 26.12761 H 26.78907 Z m 16.20573,0 H 57.87761 V 26.12761 H 42.9948 Z m 15.54427,0 H 71.43751 V 26.12761 H 58.53907 Z M 13.22917,26.78907 H 26.12761 V 41.67189 H 13.22917 Z m 13.5599,0 H 41.67188 V 41.67189 H 26.78907 Z m 16.20573,0 h 14.88281 v 14.8823 H 42.9948 Z m 15.54427,0 h 12.89844 v 14.8823 H 58.53907 Z M 42.9948,42.99429 H 71.43751 V 57.87761 H 58.53907 V 42.9948 H 57.87761 V 57.87761 H 42.9948 Z M 13.22917,42.9948 H 26.12761 V 57.87761 H 13.22917 Z m 13.5599,0 H 41.67188 V 57.87761 H 26.78907 Z M 13.22917,58.53907 H 26.12761 V 71.43751 H 13.22917 Z m 13.5599,0 H 41.67188 V 71.43751 H 26.78907 Z m 16.20573,0 H 57.87761 V 71.43751 H 42.9948 Z m 15.54427,0 H 71.43751 V 71.43751 H 58.53907 Z",fill:"#222222",fillOpacity:"0.5"}),D.jsx("path",{id:`${r}_core`,d:"M 41.68584,17.00827 25.40001,45.50834 c 0,0 8.46666,12.03684 8.46666,21.16667 h 8.46667 8.46667 c 0,-9.12983 8.46666,-21.16667 8.46666,-21.16667 L 42.98085,17.00827 v 30.84515 c 0.80692,0.2766 1.34902,1.03525 1.34927,1.88826 2e-5,1.1028 -0.89398,1.9968 -1.99678,1.99677 -1.1028,3e-5 -1.9968,-0.89397 -1.99678,-1.99677 2.5e-4,-0.85301 0.54236,-1.61166 1.34928,-1.88826 z m -1.0542,3.98374 v 26.22682 c -2.00539,1.20664 -1.6281,4.75432 0.66559,5.40071 0.3382,0.13316 0.68868,0.18156 1.03611,0.17156 0.34743,0.01 0.69791,-0.0384 1.03611,-0.17156 2.29369,-0.64639 2.67098,-4.19407 0.6656,-5.40071 V 20.99201 c 4.66273,8.15947 9.32553,16.31914 13.98829,24.47861 -3.11965,4.71908 -7.66633,12.74701 -8.21707,20.15071 H 42.33334 34.86041 C 34.30967,58.21763 29.76299,50.1897 26.64334,45.47062 31.3061,37.31115 35.9689,29.15148 40.63164,20.99201 Z m -6.76497,47.2705 v 11.1125 h 1.05472 V 69.31619 h 14.82442 v 10.05882 h 1.0542 v -11.1125 z",fill:`url(#${r}_gradient2)`}),D.jsx("path",{id:`${r}_border`,d:"M 0,0 V 84.66657 H 84.66666 V 0 Z M 5.29166,5.29167 H 79.37499 V 79.37491 H 5.29166 Z",fill:"#222222"})]}),Zb=({idPrefix:r="icon-dev"})=>D.jsxs("svg",{id:"icon-dev",viewBox:"0 0 84.666602 84.666658",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:`${r}_gradient2`,x1:"143.93336",y1:"121.1792",x2:"143.93336",y2:"170.39169",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(-101.60002,-98.954169)",children:[D.jsx("stop",{offset:"0",style:{stopColor:"#7acafd",stopOpacity:1}}),D.jsx("stop",{offset:"1",style:{stopColor:"#0286eb",stopOpacity:1}})]})}),D.jsx("path",{id:`${r}_border`,d:"m 0,1e-6 v 84.66666 H 84.6666 V 1e-6 Z m 5.29165,5.29167 h 74.08328 v 74.08333 H 5.29165 Z",fill:"#222222"}),D.jsx("path",{id:`${r}_grid`,d:"m 79.37493,10.583361 v 1.05833 H 58.20826 v 10.58334 h -1.05834 v -11.64167 z m -21.16667,51.85833 v 4.7625 l 21.16667,-0.0139 v 1.07228 H 57.14992 v -5.82083 z M 5.29167,10.583361 v 1.05833 h 21.16667 v 10.58334 h 1.05834 v -11.64167 z m 21.16667,51.85833 v 4.7625 l -21.16667,-0.0139 v 1.07228 h 22.22501 v -5.82083 z m 28.57499,-51.85836 h -25.4 v 11.64167 h 1.05834 V 11.641671 H 53.975 v 10.58333 h 1.05833 z m -25.39999,51.85836 v 5.82084 h 8.64289 l 0.7059,-1.05834 h -8.29045 v -4.7625 z m 24.34167,0 v 4.7625 h -8.29045 l 0.7059,1.05834 h 8.64288 v -5.82084 z",fill:"#222222",fillOpacity:"0.5"}),D.jsx("path",{id:`${r}_core`,d:"m 29.63333,34.924991 v 3.175 l -9.525,4.23334 9.525,4.23333 v 3.175 l -12.7,-6.35 v -2.11667 z m 25.4,0 v 3.175 l 9.525,4.23334 -9.525,4.23333 v 3.175 l 12.7,-6.35 v -2.11667 z m -9.10374,-1.07321 -6.50129,16.93334 h -1.70297 l 6.51199,-16.93334 z m -33.22958,-11.62675 -2.11667,2.11666 v 35.98334 l 2.11667,2.11666 h 26.45833 v 2.91042 l -2.64583,3.96875 v 2.11667 h 11.64167 v -2.11667 l -2.64584,-3.96875 v -2.91042 h 26.45834 l 2.11666,-2.11666 v -35.98334 l -2.11666,-2.11666 z m 0.79375,1.32291 h 57.67917 l 1.5875,1.5875 v 34.39584 l -1.5875,1.5875 H 13.49376 l -1.5875,-1.5875 v -34.39584 z m 26.72292,39.95209 h 4.23333 v 1.85208 l 2.64583,3.96875 v 1.05833 h -9.525 v -1.05833 l 2.64584,-3.96875 z",fill:`url(#${r}_gradient2)`})]}),Kb=({idPrefix:r="icon-custom"})=>D.jsxs("svg",{id:"icon-custom",viewBox:"0 0 84.666651 84.666658",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:`${r}_gradient`,x1:"113.5042",y1:"33.532501",x2:"113.50422",y2:"92.409027",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(-71.17293,-21.16668)",children:[D.jsx("stop",{offset:"0",style:{stopColor:"#7acafd",stopOpacity:1}}),D.jsx("stop",{offset:"1",style:{stopColor:"#0286eb",stopOpacity:1}})]})}),D.jsx("path",{id:`${r}_border`,d:"M 0,0 V 84.66666 H 84.66665 V 0 Z m 5.2917,5.29166 h 74.08325 v 74.0833 H 5.2917 Z",fill:"#222222"}),D.jsx("path",{id:`${r}_core`,d:"m 42.33127,12.36582 -14.66372,8.46667 v 0.002 16.93126 l -14.66576,8.46667 v 16.93333 l 14.66576,8.46667 14.66372,-8.46667 14.66372,8.46667 14.66576,-8.46667 V 46.23242 L 56.99703,37.76575 V 20.83242 h -0.002 z m 0,1.05833 13.28912,7.67292 -13.28912,7.67292 -13.28912,-7.67292 z m -13.74801,8.46667 13.28913,7.67291 v 15.875 L 28.58326,37.76582 Z m 27.49809,0 v 15.875 l -13.28912,7.67291 v -15.875 z m -13.75008,7.40833 h 0.002 v 16.93334 h -0.002 z m -14.20689,9.26042 13.29116,7.67292 -13.74799,7.9375 -13.29116,-7.67292 z m 28.41584,0 13.74801,7.9375 -13.2912,7.67292 -13.74801,-7.9375 z m -14.66783,8.46666 v 15.34584 l -13.74801,7.9375 V 54.96373 Z m 0.91775,0 13.748,7.9375 v 15.34584 l -13.748,-7.9375 z m -28.87263,0.2646 13.29116,7.67292 V 70.30958 L 13.91751,62.63666 Z m 56.82751,0 V 62.63666 L 57.45386,70.30958 V 54.96375 Z",fill:`url(#${r}_gradient)`}),D.jsx("path",{id:`${r}_grid`,d:"m 35.33688,67.20384 -0.91674,0.52917 7.91115,4.56768 7.91011,-4.56717 -0.91674,-0.52968 -6.99337,4.03851 z m 6.99439,-59.0713 -18.33168,10.5838 v 21.16664 l 0.91776,-0.52916 V 19.2455 L 42.33127,9.19086 59.74355,19.2455 v 20.10832 l 0.91775,0.52916 V 18.71634 Z",fill:"#222222"})]}),Qb=()=>{const{notifyPageReady:r}=Rl();Gc(r);const e=Ey(),t=(n,s)=>{n.preventDefault(),e(s)};return D.jsx(D.Fragment,{children:D.jsxs(Wc,{children:[D.jsxs("header",{children:[D.jsx("h1",{children:"Services and Specialties"}),D.jsx("p",{className:"subheading",children:"I design, develop, and bring ideas to life through clean code and thoughtful design. Here's what I offer:"})]}),D.jsxs("div",{className:"card-grid",children:[D.jsxs(Th,{children:[D.jsx("div",{className:"card__hero-image",children:D.jsx($b,{})}),D.jsxs("div",{className:"card__text",children:[D.jsx("h2",{className:"card__title",children:"Design & UX"}),D.jsxs("ul",{className:"ul",children:[D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"UI/UX Design: "}),"Clear, user-centered experiences that balance form and function."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Visual Design: "}),"Clean layouts, custom branding, and scalable design assets."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Motion & Interaction: "}),"Subtle animations and transitions that enhance flow."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Illustration: "}),"Custom artwork and iconography tailored to your brand."]})]})]})]}),D.jsxs(Th,{children:[D.jsx("div",{className:"card__hero-image",children:D.jsx(Zb,{})}),D.jsxs("div",{className:"card__text",children:[D.jsx("h2",{className:"card__title",children:"Development"}),D.jsxs("ul",{className:"ul",children:[D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Frontend Engineering: "}),"Semantic, accessible UI with performance and polish in mind."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"React & JavaScript: "}),"Interactive components and dynamic interfaces built with modern frameworks."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"CMS Integration: "}),"Custom design systems and theming for Drupal, Craft, Shopify, and WordPress."]})]})]})]}),D.jsxs(Th,{children:[D.jsx("div",{className:"card__hero-image",children:D.jsx(Kb,{})}),D.jsxs("div",{className:"card__text",children:[D.jsx("h2",{className:"card__title",children:"Custom Solutions"}),D.jsxs("ul",{className:"ul",children:[D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Design Systems: "}),"Scalable UI libraries developed for real-world products and marketing teams."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Platform Customization: "}),"Tailored modules, templates, and UI adjustments for unique workflows."]}),D.jsxs("li",{className:"li",children:[D.jsx("strong",{children:"Documentation: "}),"Clear handoffs and internal guides to support long-term use of custom systems."]})]})]})]})]}),D.jsxs(_l,{children:[D.jsx("p",{children:"Have a project in mind? Let's make it happen."}),D.jsx("a",{href:"/contact",className:"bfg-button",onClick:n=>t(n,"/contact"),children:"Let's Talk About It!"})]})]})})},Jb=()=>{const r=X.useRef(null);X.useEffect(()=>{Dt.to(r.current,{duration:2,attr:{fill:"#FF0000"},repeat:-1,yoyo:!0})},[]);const e=X.useRef(null);X.useEffect(()=>{Dt.to(e.current,{duration:2,attr:{stroke:"#00FF00","stroke-width":10},repeat:-1,yoyo:!0})},[]);const t=X.useRef(null);X.useEffect(()=>{Dt.to(t.current,{duration:3,attr:{"stroke-dashoffset":0},ease:"power1.inOut"})},[]);const n=X.useRef(null),s=X.useRef(null);X.useEffect(()=>{Dt.to(n.current,{duration:2,attr:{"stop-color":"#FF0000"},repeat:-1,yoyo:!0}),Dt.to(s.current,{duration:2,attr:{"stop-color":"#0000FF"},repeat:-1,yoyo:!0})},[]);const a=X.useRef(null),u=X.useRef(null);X.useEffect(()=>{Dt.to(a.current,{duration:2,attr:{offset:.5},repeat:-1,yoyo:!0}),Dt.to(u.current,{duration:2,attr:{offset:.5},repeat:-1,yoyo:!0})},[]);const c=X.useRef(null);X.useEffect(()=>{const _={rotation:0};Dt.to(_,{rotation:360,duration:4,repeat:-1,ease:"linear",onUpdate:()=>{c.current&&c.current.setAttribute("gradientTransform",`rotate(${_.rotation},100,50)`)}})},[]);const f=X.useRef(null);X.useEffect(()=>{Dt.to(f.current,{duration:2,css:{"--myStopColor":"#00FFFF"},repeat:-1,yoyo:!0})},[]);const h=X.useRef(null),p=X.useRef(null),g=X.useRef(null);return X.useEffect(()=>{Dt.timeline({repeat:-1,yoyo:!0}).to(h.current,{duration:1,attr:{fill:"#FFA500"}}).to(p.current,{duration:1,attr:{stroke:"#800080","stroke-width":8}}).to(g.current,{duration:1,attr:{"stroke-dashoffset":0},ease:"power1.inOut"})},[]),D.jsxs(D.Fragment,{children:[D.jsx("h1",{children:"SVG Animation Examples with GSAP"}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Fill Animation"}),D.jsx("svg",{width:"120",height:"120",children:D.jsx("rect",{ref:r,x:"10",y:"10",width:"100",height:"100",fill:"#00FF00"})})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Stroke Animation"}),D.jsx("svg",{width:"120",height:"120",children:D.jsx("circle",{ref:e,cx:"60",cy:"60",r:"40",fill:"none",stroke:"#000000",strokeWidth:"4"})})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Drawing Animation"}),D.jsx("svg",{width:"140",height:"140",children:D.jsx("circle",{ref:t,cx:"70",cy:"70",r:"50",fill:"none",stroke:"#000000",strokeWidth:"4",strokeDasharray:"314",strokeDashoffset:"314"})})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Gradient Stop Color Animation"}),D.jsxs("svg",{width:"200",height:"100",children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:"grad1",children:[D.jsx("stop",{ref:n,offset:"0%",stopColor:"#FFFF00"}),D.jsx("stop",{ref:s,offset:"100%",stopColor:"#00FFFF"})]})}),D.jsx("rect",{x:"10",y:"10",width:"180",height:"80",fill:"url(#grad1)"})]})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Gradient Stop Offset Animation"}),D.jsxs("svg",{width:"200",height:"100",children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:"grad2",children:[D.jsx("stop",{ref:a,offset:"0%",stopColor:"#FF00FF"}),D.jsx("stop",{ref:u,offset:"100%",stopColor:"#00FF00"})]})}),D.jsx("rect",{x:"10",y:"10",width:"180",height:"80",fill:"url(#grad2)"})]})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Gradient Transform Animation"}),D.jsxs("svg",{width:"200",height:"100",children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:"grad3",ref:c,gradientUnits:"userSpaceOnUse",gradientTransform:"rotate(0,100,50)",children:[D.jsx("stop",{offset:"0%",stopColor:"#FF0000"}),D.jsx("stop",{offset:"100%",stopColor:"#0000FF"})]})}),D.jsx("rect",{x:"10",y:"10",width:"180",height:"80",fill:"url(#grad3)"})]})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"CSS Variable Gradient Animation"}),D.jsxs("svg",{ref:f,width:"200",height:"100",style:{"--myStopColor":"#0000FF"},children:[D.jsx("defs",{children:D.jsxs("linearGradient",{id:"grad4",children:[D.jsx("stop",{offset:"0%",stopColor:"var(--myStopColor)"}),D.jsx("stop",{offset:"100%",stopColor:"#FF0000"})]})}),D.jsx("rect",{x:"10",y:"10",width:"180",height:"80",fill:"url(#grad4)"})]})]}),D.jsxs("section",{style:{marginBottom:"40px"},children:[D.jsx("h2",{children:"Synchronized Animations"}),D.jsxs("svg",{width:"240",height:"120",children:[D.jsx("rect",{ref:h,x:"10",y:"10",width:"70",height:"100",fill:"#0000FF"}),D.jsx("circle",{ref:p,cx:"130",cy:"60",r:"30",fill:"none",stroke:"#000000",strokeWidth:"4"}),D.jsx("path",{ref:g,d:"M200,110 L230,10",fill:"none",stroke:"#FF0000",strokeWidth:"4",strokeDasharray:"100",strokeDashoffset:"100"})]})]})]})},eP=()=>D.jsx("div",{className:"preloader",children:D.jsx("div",{className:"logo",children:D.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",width:"192",height:"220",viewBox:"0 0 50.8 58.208",preserveAspectRatio:"xMinYMin meet",children:[D.jsxs("defs",{children:[D.jsxs("linearGradient",{id:"logo_bottomHighlightGradient",children:[D.jsx("stop",{offset:"0",stopColor:"#0091ff",stopOpacity:"1"}),D.jsx("stop",{offset:"1",stopColor:"#0091ff",stopOpacity:"0"})]}),D.jsxs("linearGradient",{id:"logo_highlightGradient",children:[D.jsx("stop",{offset:"0",stopColor:"#626262",stopOpacity:"1"}),D.jsx("stop",{offset:"1",stopColor:"#626262",stopOpacity:"0"})]}),D.jsxs("linearGradient",{id:"logo_coreGradient",children:[D.jsx("stop",{offset:"0",stopColor:"#4e4e4e",stopOpacity:"1"}),D.jsx("stop",{offset:"1",stopColor:"#202020",stopOpacity:"1"})]}),D.jsx("linearGradient",{xlinkHref:"#logo_highlightGradient",id:"logo_highlight",x1:"107.95",x2:"107.95",y1:"8.467",y2:"52.917",gradientUnits:"userSpaceOnUse"}),D.jsx("linearGradient",{xlinkHref:"#logo_bottomHighlightGradient",id:"logo_bottomHighlight",x1:"107.95",x2:"107.95",y1:"57.944",y2:"3.44",gradientUnits:"userSpaceOnUse"}),D.jsx("radialGradient",{xlinkHref:"#logo_coreGradient",id:"logo_core",cx:"107.95",cy:"11.641",r:"19.05",fx:"107.95",fy:"11.641",gradientTransform:"matrix(1.2361 0 0 1.5347 -25.486 -9.4)",gradientUnits:"userSpaceOnUse"})]}),D.jsxs("g",{id:"logo_group",children:[D.jsx("path",{id:"logo_core",d:"M88.9 49.742v3.175H127v-3.175zm14.817-17.992v-8.467h8.466v8.467zm15.875-15.875-9.525.002v4.231h5.291v14.817h-5.291v4.233h9.525zM96.308 39.158h9.525v-4.233h-5.291V20.108h5.291v-4.233l-9.525.001zM88.9 29.633v16.933H127V29.633h-4.234v12.7H93.133v-12.7Zm0-21.166V25.4h4.233V12.7h29.634v12.7H127V8.467Z"}),D.jsx("path",{id:"logo_bottomHighlight",d:"M93.133 12.7v.53h29.634v-.53zm7.409 7.408v.53h5.291v-.53zm9.525 0v.53h5.291v-.53ZM88.9 25.4v.53h4.233v-.53Zm33.867 0v.53H127v-.53Zm-19.05 6.35v.53h8.466v-.53Zm-7.409 7.408v.53h9.525v-.53zm13.759 0v.53h9.525v-.53ZM88.9 46.566v.53H127v-.53Zm-.001 6.35v.53H127v-.53z"}),D.jsx("path",{id:"logo_highlight",d:"M88.9 7.938v.529H127v-.53Zm16.933 7.408h-9.525v.53l9.525-.001zm13.759 0-9.525.002v.53l9.525-.003zm-15.875 7.408v.53h8.466v-.53zm-10.584 6.35H88.9v.53l4.233-.001zm29.633 0v.529H127v-.53zm-22.224 5.292v.529h5.291v-.53zm9.525 0v.529h5.291v-.53zm-16.934 7.409v.529h29.633v-.53zM88.9 49.213v.529H127v-.53z"}),D.jsx("path",{id:"logo_border",d:"M83.873 2.91v55.563h48.154V2.91Zm.794.794h46.566V57.68H84.667Z"}),D.jsx("path",{id:"logo_border02",d:"M82.55 1.588v58.208h50.8V1.588Zm.265.264h50.27v57.68h-50.27Z"})]})]})})}),tP=()=>{const r=X.useRef(null),e=X.useRef(null),t=Ey(),{setNavOpen:n}=Al();X.useEffect(()=>{const c=r.current,f=c.querySelector("path#logomini_core"),h=c.querySelector("path#logomini_bottomHighlight"),p=c.querySelector("path#logomini_highlight"),g=[f,h,p];Dt.set(g,{opacity:0}),e.current=Dt.timeline({paused:!0}).to(g,{duration:.6,opacity:1,ease:"power2.out"})},[]);const s=()=>e.current.play(),a=()=>e.current.reverse(),u=(c,f)=>{c.preventDefault(),t(f)};return D.jsxs("button",{className:"nav-bar__logo",onClick:c=>u(c,"/"),children:[D.jsxs("svg",{ref:r,className:"logomini",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"36",height:"44",viewBox:"0 0 9.525 11.642",preserveAspectRatio:"xMinYMin meet",onMouseEnter:s,onMouseLeave:a,role:"link",children:[D.jsxs("defs",{children:[D.jsxs("linearGradient",{id:"logomini_bottomHighlightGradient",children:[D.jsx("stop",{offset:"0",stopColor:"#0091ff",stopOpacity:"1"}),D.jsx("stop",{offset:"1",stopColor:"#0091ff",stopOpacity:"0"})]}),D.jsxs("linearGradient",{id:"logomini_highlightGradient",children:[D.jsx("stop",{offset:"0",stopColor:"#626262",stopOpacity:"1"}),D.jsx("stop",{offset:"1",stopColor:"#626262",stopOpacity:"0"})]}),D.jsxs("radialGradient",{id:"logomini_coreGradient",cx:"107.95",cy:"11.641",r:"19.05",fx:"107.95",fy:"11.641",gradientTransform:"matrix(.30902 0 0 .38368 -28.596 -4.202)",gradientUnits:"userSpaceOnUse",children:[D.jsx("stop",{offset:"0",stopColor:"#4e4e4e",stopOpacity:"1"}),D.jsx("stop",{offset:"1",stopColor:"#202020",stopOpacity:"1"})]}),D.jsx("linearGradient",{xlinkHref:"#logomini_highlightGradient",id:"logomini_highlight",x1:"8.731",x2:"8.731",y1:"3.969",y2:"15.346",gradientTransform:"translate(-4.233 -3.969)",gradientUnits:"userSpaceOnUse"}),D.jsx("linearGradient",{xlinkHref:"#logomini_bottomHighlightGradient",id:"logomini_bottomHighlight",x1:"8.812",x2:"8.812",y1:"14.998",y2:"5.084",gradientTransform:"matrix(.96077 0 0 1.04083 -4.233 -3.969)",gradientUnits:"userSpaceOnUse"}),D.jsx("radialGradient",{xlinkHref:"#logomini_coreGradient",id:"logomini_core",gradientUnits:"userSpaceOnUse"})]}),D.jsx("path",{id:"logomini_base",d:"M0 10.583v.794h9.525v-.794Zm3.704-4.498V3.97h2.117v2.116zm3.969-3.968H5.292v1.058h1.322v3.704H5.292v1.058h2.38Zm-5.82 5.82h2.38V6.88H2.91V3.175h1.323V2.117h-2.38ZM0 5.557v4.232h9.525V5.556H8.466v3.175H1.058V5.556ZM0 .264v4.233h1.058V1.323h7.409v3.175h1.058V.265Z"}),D.jsx("path",{id:"logomini_core",d:"M0 10.583v.794h9.525v-.794Zm3.704-4.498V3.97h2.117v2.116zm3.969-3.968H5.292v1.058h1.322v3.704H5.292v1.058h2.38Zm-5.82 5.82h2.38V6.88H2.91V3.175h1.323V2.117h-2.38ZM0 5.557v4.232h9.525V5.556H8.466v3.175H1.058V5.556ZM0 .264v4.233h1.058V1.323h7.409v3.175h1.058V.265Z"}),D.jsx("path",{id:"logomini_bottomHighlight",d:"M0 11.377v.265h9.525v-.265zM0 9.79v.264h9.525V9.79Zm8.467-5.292v.265h1.058v-.265Zm-3.175 3.44v.264h2.38v-.264zm-3.44 0v.264h2.381v-.264ZM0 4.498v.265h1.058v-.265Zm3.704 1.587v.265h2.117v-.265zm1.588-2.91v.265h1.323v-.265Zm-2.382 0v.265h1.323v-.265ZM1.058 1.323v.264h7.409v-.264Z"}),D.jsx("path",{id:"logomini_highlight",d:"M0 10.583h9.525v-.264H0Zm1.058-2.116v.264h7.409v-.264Zm7.409-2.91h1.058v-.265H8.467zM0 5.556h1.058v-.265H0Zm5.292 1.058v.264h1.323v-.264zm-1.059.264H2.91v-.264h1.323Zm-.529-3.175v.265h2.117v-.265Zm1.588-1.587h2.38v-.265h-2.38Zm-3.44-.265v.265h2.381v-.265ZM0 0v.265h9.525V0Z"})]}),D.jsx("div",{className:"nav-bar__logo-text",children:"DAVIDLABAR.COM"})]})},nP=({isOpen:r})=>{const e=X.useRef(),t=X.useRef(),n=X.useRef(),s=X.useRef(),a=X.useRef();return X.useEffect(()=>{const u=Dt.timeline({paused:!0});u.to(e.current,{duration:.3,y:-4,ease:"power2.inOut"},0),u.to(s.current,{duration:.3,y:4,ease:"power2.inOut"},0),u.to(t.current,{duration:.3,rotation:45,scale:.6,transformOrigin:"center center",ease:"power2.inOut"},0),u.to(n.current,{duration:.3,rotation:-45,scale:.6,transformOrigin:"center center",ease:"power2.inOut"},0),a.current=u},[]),X.useEffect(()=>{a.current&&(r?a.current.play():a.current.reverse())},[r]),D.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("path",{ref:s,d:"M0,26v-4h8l2,2h12l2-2h8v4z",id:"icon-burger__bottom",fill:"#151515"}),D.jsx("path",{ref:t,d:"M0,14c0,0.61588,0,4,0,4H32v-4z",id:"icon-burger__center-01",fill:"#151515"}),D.jsx("path",{ref:n,d:"M0,14c0,0.61588,0,4,0,4H32v-4z",id:"icon-burger__center-02",fill:"#151515"}),D.jsx("path",{ref:e,d:"M0,6v4h8l2-2h12l2,2h8v-4z",id:"icon-burger__top",fill:"#151515"})]})},iP=({links:r})=>{const e=X.useRef(null),t=X.useRef(null),n=X.useRef(null),s=lr(),a=Dp(),{showOverlay:u,hideOverlay:c,setNavOpen:f}=Al(),[h,p]=X.useState(!1),g=(E,x)=>{if(E.preventDefault(),s.pathname===x){h&&y();return}h?(n.current=Dt.timeline(),n.current.to(t.current,{opacity:0,scale:.9,duration:.4,ease:"power2.inOut",onComplete:()=>{t.current.classList.remove("nav-bar__ul--mobile-on"),Dt.set(t.current,{clearProps:"all"}),p(!1),f(!1),u({opacity:1,reason:"nav",onVisible:()=>{window.scrollTo(0,0),a(x)}})}})):u({opacity:1,reason:"nav",onVisible:()=>{window.scrollTo(0,0),a(x)}})},_=()=>{t.current&&(p(!0),f(!0),t.current.classList.add("nav-bar__ul--mobile-on"),n.current=Dt.timeline(),n.current.fromTo(t.current,{opacity:0,y:20},{opacity:1,y:0,duration:.4,ease:"power2.out"}).fromTo(t.current.querySelectorAll("li"),{opacity:0,y:0},{opacity:1,y:0,duration:.4,stagger:.05,ease:"power2.out"},"-=0.2"))},y=()=>{t.current&&(p(!1),f(!1),n.current&&n.current.kill(),n.current=Dt.timeline(),n.current.to(t.current,{opacity:0,scale:.8,duration:.5,ease:"power2.inOut",onComplete:()=>{t.current.classList.remove("nav-bar__ul--mobile-on"),Dt.set(t.current,{clearProps:"all"})}}))},M=()=>{h?y():_()};return X.useEffect(()=>{const E=()=>{window.matchMedia("(min-width: 768px)").matches&&(p(!1),f(!1),t.current&&(t.current.classList.remove("nav-bar__ul--mobile-on"),Dt.set(t.current,{clearProps:"all"})))};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]),X.useEffect(()=>{const E=x=>{h&&e.current&&!e.current.contains(x.target)&&(y(),c())};return document.addEventListener("mousedown",E),document.addEventListener("touchstart",E),()=>{document.removeEventListener("mousedown",E),document.removeEventListener("touchstart",E)}},[h,c]),D.jsxs("nav",{className:"nav-bar",ref:e,children:[D.jsx(tP,{}),D.jsx("button",{className:"nav-bar__burger",onClick:M,children:D.jsx(nP,{isOpen:h})}),D.jsx("ul",{className:"nav-bar__ul",ref:t,children:r.map(({name:E,path:x})=>D.jsx("li",{className:`${s.pathname===x?"active":""} nav-bar__li`,children:D.jsx(Op,{to:x,onClick:v=>g(v,x),children:E})},x))})]})},rP=()=>D.jsx("footer",{className:"footer",children:D.jsxs("p",{className:"footer__text",children:[D.jsxs("strong",{children:["©",new Date().getFullYear()," David LaBar Studios"]}),"   /   All rights reserved."]})}),sP=()=>{const{visible:r,opacity:e,overlayRef:t,navOpen:n}=Al(),s=r||n,a=n?.8:e;return D.jsx("div",{ref:t,className:`overlay ${s?"visible":""}`,style:{opacity:a}})},oP=()=>{const r=lr(),e=X.useRef(r.pathname),{hideOverlay:t}=Al(),{registerPageReady:n}=Rl();return X.useEffect(()=>{r.pathname!==e.current&&(e.current=r.pathname,n(()=>{t()}))},[r.pathname,n,t]),null},aP=[{name:"Home",path:"/"},{name:"Services",path:"/services"},{name:"About",path:"/about"},{name:"Hire Me",path:"/contact"}],lP=()=>D.jsxs(CE,{children:[D.jsx(iP,{links:aP}),D.jsx(sP,{}),D.jsx(oP,{}),D.jsx("main",{children:D.jsxs(nE,{children:[D.jsx(Xs,{path:"/",element:D.jsx(fb,{})}),D.jsx(Xs,{path:"/about",element:D.jsx(db,{})}),D.jsx(Xs,{path:"/contact",element:D.jsx(qb,{})}),D.jsx(Xs,{path:"/services",element:D.jsx(Qb,{})}),D.jsx(Xs,{path:"/SVG-Examples",element:D.jsx(Jb,{})}),D.jsx(Xs,{path:"/Preloader-Test",element:D.jsx(eP,{})})]})}),D.jsx(rP,{})]}),uP=()=>{const{isLoading:r,setIsPreloaderVisible:e}=X.useContext(Mv),[t,n]=X.useState(!1);return X.useEffect(()=>{if(!r){const s=document.querySelectorAll("#logo_bottomHighlight, #logo_core, #logo_highlight, #logo_border, #logo_border02");let a=!1;const u=setTimeout(()=>{a||(n(!0),a=!0)},6e3);s.forEach(c=>{c.addEventListener("animationiteration",()=>{a||(n(!0),a=!0,clearTimeout(u))},{once:!0})})}},[r]),X.useEffect(()=>{if(t){const s=document.querySelector(".logo"),a=document.querySelector(".preloader");s&&a&&Dt.to(s,{opacity:0,duration:.5,ease:"power2.out",onComplete:()=>{Dt.to(a,{opacity:0,duration:.8,ease:"power2.out",onComplete:()=>{a.style.display="none",e(!1)}})}})}},[t,e]),null};u1.createRoot(document.getElementById("root")).render(D.jsx(X.StrictMode,{children:D.jsx(d1,{children:D.jsx(c1,{children:D.jsxs(f1,{children:[D.jsx(uP,{}),D.jsx(lP,{})]})})})}));
