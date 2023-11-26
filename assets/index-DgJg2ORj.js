const __vite__fileDeps=["./ruffle_web-wasm_extensions-DrtXfwJc.js","./ruffle-imports-BBqW3XtM.js","./ruffle_web-BNM5rQS6.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Ef=Object.defineProperty;var jf=(e,n,t)=>n in e?Ef(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Mr=(e,n,t)=>(jf(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Cf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lu={exports:{}},Ho={},Ou={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),_f=Symbol.for("react.portal"),Pf=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Af=Symbol.for("react.profiler"),Df=Symbol.for("react.provider"),If=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Tf=Symbol.for("react.memo"),Mf=Symbol.for("react.lazy"),os=Symbol.iterator;function Nf(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mu=Object.assign,Nu={};function Pt(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Tu}Pt.prototype.isReactComponent={};Pt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $u(){}$u.prototype=Pt.prototype;function Ga(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Tu}var Ya=Ga.prototype=new $u;Ya.constructor=Ga;Mu(Ya,Pt.prototype);Ya.isPureReactComponent=!0;var is=Array.isArray,Wu=Object.prototype.hasOwnProperty,Xa={current:null},Uu={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Wu.call(n,r)&&!Uu.hasOwnProperty(r)&&(o[r]=n[r]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Cr,type:e,key:i,ref:a,props:o,_owner:Xa.current}}function $f(e,n){return{$$typeof:Cr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cr}function Wf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var as=/\/+/g;function vi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wf(""+e.key):n.toString(36)}function oo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Cr:case _f:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+vi(a,0):r,is(o)?(t="",e!=null&&(t=e.replace(as,"$&/")+"/"),oo(o,n,t,"",function(u){return u})):o!=null&&(el(o)&&(o=$f(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(as,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",is(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+vi(i,s);a+=oo(i,n,t,l,o)}else if(l=Nf(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+vi(i,s++),a+=oo(i,n,t,l,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function Nr(e,n,t){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function Uf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},io={transition:null},qf={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:io,ReactCurrentOwner:Xa};function Bu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Nr,forEach:function(e,n,t){Nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Nr(e,function(){n++}),n},toArray:function(e){return Nr(e,function(n){return n})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Pt;L.Fragment=Pf;L.Profiler=Af;L.PureComponent=Ga;L.StrictMode=Ff;L.Suspense=Of;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf;L.act=Bu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mu({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Xa.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Wu.call(n,l)&&!Uu.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Cr,type:e.type,key:o,ref:i,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:If,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Df,_context:e},e.Consumer=e};L.createElement=qu;L.createFactory=function(e){var n=qu.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Lf,render:e}};L.isValidElement=el;L.lazy=function(e){return{$$typeof:Mf,_payload:{_status:-1,_result:e},_init:Uf}};L.memo=function(e,n){return{$$typeof:Tf,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=io.transition;io.transition={};try{e()}finally{io.transition=n}};L.unstable_act=Bu;L.useCallback=function(e,n){return we.current.useCallback(e,n)};L.useContext=function(e){return we.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return we.current.useDeferredValue(e)};L.useEffect=function(e,n){return we.current.useEffect(e,n)};L.useId=function(){return we.current.useId()};L.useImperativeHandle=function(e,n,t){return we.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return we.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return we.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return we.current.useMemo(e,n)};L.useReducer=function(e,n,t){return we.current.useReducer(e,n,t)};L.useRef=function(e){return we.current.useRef(e)};L.useState=function(e){return we.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return we.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return we.current.useTransition()};L.version="18.3.1";Ou.exports=L;var re=Ou.exports;const Ki=Cf(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf=re,Vf=Symbol.for("react.element"),Hf=Symbol.for("react.fragment"),Jf=Object.prototype.hasOwnProperty,Kf=Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qf={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)Jf.call(n,r)&&!Qf.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:Vf,type:e,key:i,ref:a,props:o,_owner:Kf.current}}Ho.Fragment=Hf;Ho.jsx=Vu;Ho.jsxs=Vu;Lu.exports=Ho;var E=Lu.exports,Qi={},Hu={exports:{}},Fe={},Ju={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,A){var D=_.length;_.push(A);e:for(;0<D;){var Y=D-1>>>1,ie=_[Y];if(0<o(ie,A))_[Y]=A,_[D]=ie,D=Y;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],D=_.pop();if(D!==A){_[0]=D;e:for(var Y=0,ie=_.length,Or=ie>>>1;Y<Or;){var Ln=2*(Y+1)-1,hi=_[Ln],On=Ln+1,Tr=_[On];if(0>o(hi,D))On<ie&&0>o(Tr,hi)?(_[Y]=Tr,_[On]=D,Y=On):(_[Y]=hi,_[Ln]=D,Y=Ln);else if(On<ie&&0>o(Tr,D))_[Y]=Tr,_[On]=D,Y=On;else break e}}return A}function o(_,A){var D=_.sortIndex-A.sortIndex;return D!==0?D:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],u=[],h=1,p=null,m=3,g=!1,w=!1,b=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var A=t(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=_)r(u),A.sortIndex=A.expirationTime,n(l,A);else break;A=t(u)}}function v(_){if(b=!1,f(_),!w)if(t(l)!==null)w=!0,pi(R);else{var A=t(u);A!==null&&mi(v,A.startTime-_)}}function R(_,A){w=!1,b&&(b=!1,d(z),z=-1),g=!0;var D=m;try{for(f(A),p=t(l);p!==null&&(!(p.expirationTime>A)||_&&!O());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,m=p.priorityLevel;var ie=Y(p.expirationTime<=A);A=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===t(l)&&r(l),f(A)}else r(l);p=t(l)}if(p!==null)var Or=!0;else{var Ln=t(u);Ln!==null&&mi(v,Ln.startTime-A),Or=!1}return Or}finally{p=null,m=D,g=!1}}var C=!1,x=null,z=-1,y=5,S=-1;function O(){return!(e.unstable_now()-S<y)}function ze(){if(x!==null){var _=e.unstable_now();S=_;var A=!0;try{A=x(!0,_)}finally{A?$e():(C=!1,x=null)}}else C=!1}var $e;if(typeof c=="function")$e=function(){c(ze)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,zf=Ee.port2;Ee.port1.onmessage=ze,$e=function(){zf.postMessage(null)}}else $e=function(){I(ze,0)};function pi(_){x=_,C||(C=!0,$e())}function mi(_,A){z=I(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,pi(R))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var D=m;m=A;try{return _()}finally{m=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=m;m=_;try{return A()}finally{m=D}},e.unstable_scheduleCallback=function(_,A,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=D+ie,_={id:h++,callback:A,priorityLevel:_,startTime:D,expirationTime:ie,sortIndex:-1},D>Y?(_.sortIndex=D,n(u,_),t(l)===null&&_===t(u)&&(b?(d(z),z=-1):b=!0,mi(v,D-Y))):(_.sortIndex=ie,n(l,_),w||g||(w=!0,pi(R))),_},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(_){var A=m;return function(){var D=m;m=A;try{return _.apply(this,arguments)}finally{m=D}}}})(Ku);Ju.exports=Ku;var Zf=Ju.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf=re,Pe=Zf;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qu=new Set,sr={};function Qn(e,n){kt(e,n),kt(e+"Capture",n)}function kt(e,n){for(sr[e]=n,e=0;e<n.length;e++)Qu.add(n[e])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=Object.prototype.hasOwnProperty,Yf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ls={},ss={};function Xf(e){return Zi.call(ss,e)?!0:Zi.call(ls,e)?!1:Yf.test(e)?ss[e]=!0:(ls[e]=!0,!1)}function ep(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function np(e,n,t,r){if(n===null||typeof n>"u"||ep(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ye(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new ye(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var nl=/[\-:]([a-z])/g;function tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(nl,tl);ce[n]=new ye(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(nl,tl);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(nl,tl);ce[n]=new ye(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function rl(e,n,t,r){var o=ce.hasOwnProperty(n)?ce[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(np(n,t,o,r)&&(t=null),r||o===null?Xf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var pn=Gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$r=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),Zu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Xi=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),us=Symbol.iterator;function Dt(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,gi;function Vt(e){if(gi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);gi=n&&n[1]||""}return`
`+gi+e}var wi=!1;function yi(e,n){if(!e||wi)return"";wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{wi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function tp(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=yi(e.type,!1),e;case 11:return e=yi(e.type.render,!1),e;case 1:return e=yi(e.type,!0),e;default:return""}}function ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Yn:return"Portal";case Gi:return"Profiler";case ol:return"StrictMode";case Yi:return"Suspense";case Xi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case Zu:return(e._context.displayName||"Context")+".Provider";case il:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return n=e.displayName||null,n!==null?n:ea(e.type)||"Memo";case hn:n=e._payload,e=e._init;try{return ea(e(n))}catch{}}return null}function rp(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ea(n);case 8:return n===ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function op(e){var n=Xu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wr(e){e._valueTracker||(e._valueTracker=op(e))}function ec(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Xu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function go(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function na(e,n){var t=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function cs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nc(e,n){n=n.checked,n!=null&&rl(e,"checked",n,!1)}function ta(e,n){nc(e,n);var t=Pn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ra(e,n.type,t):n.hasOwnProperty("defaultValue")&&ra(e,n.type,Pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ds(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ra(e,n,t){(n!=="number"||go(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ht=Array.isArray;function dt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Pn(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function oa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(Ht(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Pn(t)}}function tc(e,n){var t=Pn(n.value),r=Pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ps(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ur,oc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ur=Ur||document.createElement("div"),Ur.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ur(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ip=["Webkit","ms","Moz","O"];Object.keys(Zt).forEach(function(e){ip.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zt[n]=Zt[e]})});function ic(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zt.hasOwnProperty(e)&&Zt[e]?(""+n).trim():n+"px"}function ac(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=ic(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var ap=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function aa(e,n){if(n){if(ap[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function la(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,ft=null,pt=null;function ms(e){if(e=Fr(e)){if(typeof ua!="function")throw Error(k(280));var n=e.stateNode;n&&(n=Go(n),ua(e.stateNode,e.type,n))}}function lc(e){ft?pt?pt.push(e):pt=[e]:ft=e}function sc(){if(ft){var e=ft,n=pt;if(pt=ft=null,ms(e),n)for(e=0;e<n.length;e++)ms(n[e])}}function uc(e,n){return e(n)}function cc(){}var ki=!1;function dc(e,n,t){if(ki)return e(n,t);ki=!0;try{return uc(e,n,t)}finally{ki=!1,(ft!==null||pt!==null)&&(cc(),sc())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var r=Go(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var ca=!1;if(sn)try{var It={};Object.defineProperty(It,"passive",{get:function(){ca=!0}}),window.addEventListener("test",It,It),window.removeEventListener("test",It,It)}catch{ca=!1}function lp(e,n,t,r,o,i,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(h){this.onError(h)}}var Gt=!1,wo=null,yo=!1,da=null,sp={onError:function(e){Gt=!0,wo=e}};function up(e,n,t,r,o,i,a,s,l){Gt=!1,wo=null,lp.apply(sp,arguments)}function cp(e,n,t,r,o,i,a,s,l){if(up.apply(this,arguments),Gt){if(Gt){var u=wo;Gt=!1,wo=null}else throw Error(k(198));yo||(yo=!0,da=u)}}function Zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function fc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hs(e){if(Zn(e)!==e)throw Error(k(188))}function dp(e){var n=e.alternate;if(!n){if(n=Zn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return hs(o),e;if(i===r)return hs(o),n;i=i.sibling}throw Error(k(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===t){a=!0,t=o,r=i;break}if(s===r){a=!0,r=o,t=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===t){a=!0,t=i,r=o;break}if(s===r){a=!0,r=i,t=o;break}s=s.sibling}if(!a)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function pc(e){return e=dp(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=mc(e);if(n!==null)return n;e=e.sibling}return null}var hc=Pe.unstable_scheduleCallback,vs=Pe.unstable_cancelCallback,fp=Pe.unstable_shouldYield,pp=Pe.unstable_requestPaint,X=Pe.unstable_now,mp=Pe.unstable_getCurrentPriorityLevel,sl=Pe.unstable_ImmediatePriority,vc=Pe.unstable_UserBlockingPriority,ko=Pe.unstable_NormalPriority,hp=Pe.unstable_LowPriority,gc=Pe.unstable_IdlePriority,Jo=null,Ye=null;function vp(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:yp,gp=Math.log,wp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(gp(e)/wp|0)|0}var qr=64,Br=4194304;function Jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var s=a&~o;s!==0?r=Jt(s):(i&=a,i!==0&&(r=Jt(i)))}else a=t&~o,a!==0?r=Jt(a):i!==0&&(r=Jt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ve(n),o=1<<t,r|=e[t],n&=~o;return r}function kp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ve(i),s=1<<a,l=o[a];l===-1?(!(s&t)||s&r)&&(o[a]=kp(s,n)):l<=n&&(e.expiredLanes|=s),i&=~s}}function fa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function bi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function _r(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ve(n),e[n]=t}function Sp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Ve(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function ul(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ve(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var $=0;function yc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kc,cl,bc,Sc,Rc,pa=!1,Vr=[],bn=null,Sn=null,Rn=null,dr=new Map,fr=new Map,gn=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gs(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(n.pointerId)}}function Lt(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=Fr(n),n!==null&&cl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function xp(e,n,t,r,o){switch(n){case"focusin":return bn=Lt(bn,e,n,t,r,o),!0;case"dragenter":return Sn=Lt(Sn,e,n,t,r,o),!0;case"mouseover":return Rn=Lt(Rn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return dr.set(i,Lt(dr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,fr.set(i,Lt(fr.get(i)||null,e,n,t,r,o)),!0}return!1}function xc(e){var n=Nn(e.target);if(n!==null){var t=Zn(n);if(t!==null){if(n=t.tag,n===13){if(n=fc(t),n!==null){e.blockedOn=n,Rc(e.priority,function(){bc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ma(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sa=r,t.target.dispatchEvent(r),sa=null}else return n=Fr(t),n!==null&&cl(n),e.blockedOn=t,!1;n.shift()}return!0}function ws(e,n,t){ao(e)&&t.delete(n)}function zp(){pa=!1,bn!==null&&ao(bn)&&(bn=null),Sn!==null&&ao(Sn)&&(Sn=null),Rn!==null&&ao(Rn)&&(Rn=null),dr.forEach(ws),fr.forEach(ws)}function Ot(e,n){e.blockedOn===n&&(e.blockedOn=null,pa||(pa=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,zp)))}function pr(e){function n(o){return Ot(o,e)}if(0<Vr.length){Ot(Vr[0],e);for(var t=1;t<Vr.length;t++){var r=Vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(bn!==null&&Ot(bn,e),Sn!==null&&Ot(Sn,e),Rn!==null&&Ot(Rn,e),dr.forEach(n),fr.forEach(n),t=0;t<gn.length;t++)r=gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(t=gn[0],t.blockedOn===null);)xc(t),t.blockedOn===null&&gn.shift()}var mt=pn.ReactCurrentBatchConfig,So=!0;function Ep(e,n,t,r){var o=$,i=mt.transition;mt.transition=null;try{$=1,dl(e,n,t,r)}finally{$=o,mt.transition=i}}function jp(e,n,t,r){var o=$,i=mt.transition;mt.transition=null;try{$=4,dl(e,n,t,r)}finally{$=o,mt.transition=i}}function dl(e,n,t,r){if(So){var o=ma(e,n,t,r);if(o===null)Fi(e,n,r,Ro,t),gs(e,r);else if(xp(o,e,n,t,r))r.stopPropagation();else if(gs(e,r),n&4&&-1<Rp.indexOf(e)){for(;o!==null;){var i=Fr(o);if(i!==null&&kc(i),i=ma(e,n,t,r),i===null&&Fi(e,n,r,Ro,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Fi(e,n,r,null,t)}}var Ro=null;function ma(e,n,t,r){if(Ro=null,e=ll(r),e=Nn(e),e!==null)if(n=Zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=fc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ro=e,null}function zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mp()){case sl:return 1;case vc:return 4;case ko:case hp:return 16;case gc:return 536870912;default:return 16}default:return 16}}var yn=null,fl=null,lo=null;function Ec(){if(lo)return lo;var e,n=fl,t=n.length,r,o="value"in yn?yn.value:yn.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return lo=o.slice(e,1<r?1-r:void 0)}function so(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function ys(){return!1}function Ae(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Hr:ys,this.isPropagationStopped=ys,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),n}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Ae(Ft),Pr=Z({},Ft,{view:0,detail:0}),Cp=Ae(Pr),Si,Ri,Tt,Ko=Z({},Pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Tt&&(Tt&&e.type==="mousemove"?(Si=e.screenX-Tt.screenX,Ri=e.screenY-Tt.screenY):Ri=Si=0,Tt=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:Ri}}),ks=Ae(Ko),_p=Z({},Ko,{dataTransfer:0}),Pp=Ae(_p),Fp=Z({},Pr,{relatedTarget:0}),xi=Ae(Fp),Ap=Z({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),Dp=Ae(Ap),Ip=Z({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=Ae(Ip),Op=Z({},Ft,{data:0}),bs=Ae(Op),Tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $p(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Np[e])?!!n[e]:!1}function ml(){return $p}var Wp=Z({},Pr,{key:function(e){if(e.key){var n=Tp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Up=Ae(Wp),qp=Z({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ss=Ae(qp),Bp=Z({},Pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Vp=Ae(Bp),Hp=Z({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=Ae(Hp),Kp=Z({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=Ae(Kp),Zp=[9,13,27,32],hl=sn&&"CompositionEvent"in window,Yt=null;sn&&"documentMode"in document&&(Yt=document.documentMode);var Gp=sn&&"TextEvent"in window&&!Yt,jc=sn&&(!hl||Yt&&8<Yt&&11>=Yt),Rs=" ",xs=!1;function Cc(e,n){switch(e){case"keyup":return Zp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var et=!1;function Yp(e,n){switch(e){case"compositionend":return _c(n);case"keypress":return n.which!==32?null:(xs=!0,Rs);case"textInput":return e=n.data,e===Rs&&xs?null:e;default:return null}}function Xp(e,n){if(et)return e==="compositionend"||!hl&&Cc(e,n)?(e=Ec(),lo=fl=yn=null,et=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jc&&n.locale!=="ko"?null:n.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!em[e.type]:n==="textarea"}function Pc(e,n,t,r){lc(r),n=xo(n,"onChange"),0<n.length&&(t=new pl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Xt=null,mr=null;function nm(e){Wc(e,0)}function Qo(e){var n=rt(e);if(ec(n))return e}function tm(e,n){if(e==="change")return n}var Fc=!1;if(sn){var zi;if(sn){var Ei="oninput"in document;if(!Ei){var Es=document.createElement("div");Es.setAttribute("oninput","return;"),Ei=typeof Es.oninput=="function"}zi=Ei}else zi=!1;Fc=zi&&(!document.documentMode||9<document.documentMode)}function js(){Xt&&(Xt.detachEvent("onpropertychange",Ac),mr=Xt=null)}function Ac(e){if(e.propertyName==="value"&&Qo(mr)){var n=[];Pc(n,mr,e,ll(e)),dc(nm,n)}}function rm(e,n,t){e==="focusin"?(js(),Xt=n,mr=t,Xt.attachEvent("onpropertychange",Ac)):e==="focusout"&&js()}function om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(mr)}function im(e,n){if(e==="click")return Qo(n)}function am(e,n){if(e==="input"||e==="change")return Qo(n)}function lm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Je=typeof Object.is=="function"?Object.is:lm;function hr(e,n){if(Je(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Zi.call(n,o)||!Je(e[o],n[o]))return!1}return!0}function Cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,n){var t=Cs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Cs(t)}}function Dc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ic(){for(var e=window,n=go();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=go(e.document)}return n}function vl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sm(e){var n=Ic(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Dc(t.ownerDocument.documentElement,t)){if(r!==null&&vl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_s(t,i);var a=_s(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var um=sn&&"documentMode"in document&&11>=document.documentMode,nt=null,ha=null,er=null,va=!1;function Ps(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;va||nt==null||nt!==go(r)||(r=nt,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),er&&hr(er,r)||(er=r,r=xo(ha,"onSelect"),0<r.length&&(n=new pl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=nt)))}function Jr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var tt={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},ji={},Lc={};sn&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete tt.animationend.animation,delete tt.animationiteration.animation,delete tt.animationstart.animation),"TransitionEvent"in window||delete tt.transitionend.transition);function Zo(e){if(ji[e])return ji[e];if(!tt[e])return e;var n=tt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Lc)return ji[e]=n[t];return e}var Oc=Zo("animationend"),Tc=Zo("animationiteration"),Mc=Zo("animationstart"),Nc=Zo("transitionend"),$c=new Map,Fs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){$c.set(e,n),Qn(n,[e])}for(var Ci=0;Ci<Fs.length;Ci++){var _i=Fs[Ci],cm=_i.toLowerCase(),dm=_i[0].toUpperCase()+_i.slice(1);An(cm,"on"+dm)}An(Oc,"onAnimationEnd");An(Tc,"onAnimationIteration");An(Mc,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Nc,"onTransitionEnd");kt("onMouseEnter",["mouseout","mouseover"]);kt("onMouseLeave",["mouseout","mouseover"]);kt("onPointerEnter",["pointerout","pointerover"]);kt("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kt));function As(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,cp(r,n,void 0,e),e.currentTarget=null}function Wc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;As(o,s,u),i=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;As(o,s,u),i=l}}}if(yo)throw e=da,yo=!1,da=null,e}function q(e,n){var t=n[ba];t===void 0&&(t=n[ba]=new Set);var r=e+"__bubble";t.has(r)||(Uc(n,e,2,!1),t.add(r))}function Pi(e,n,t){var r=0;n&&(r|=4),Uc(t,e,r,n)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[Kr]){e[Kr]=!0,Qu.forEach(function(t){t!=="selectionchange"&&(fm.has(t)||Pi(t,!1,e),Pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kr]||(n[Kr]=!0,Pi("selectionchange",!1,n))}}function Uc(e,n,t,r){switch(zc(n)){case 1:var o=Ep;break;case 4:o=jp;break;default:o=dl}t=o.bind(null,n,t,e),o=void 0,!ca||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Fi(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Nn(s),a===null)return;if(l=a.tag,l===5||l===6){r=i=a;continue e}s=s.parentNode}}r=r.return}dc(function(){var u=i,h=ll(t),p=[];e:{var m=$c.get(e);if(m!==void 0){var g=pl,w=e;switch(e){case"keypress":if(so(t)===0)break e;case"keydown":case"keyup":g=Up;break;case"focusin":w="focus",g=xi;break;case"focusout":w="blur",g=xi;break;case"beforeblur":case"afterblur":g=xi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Vp;break;case Oc:case Tc:case Mc:g=Dp;break;case Nc:g=Jp;break;case"scroll":g=Cp;break;case"wheel":g=Qp;break;case"copy":case"cut":case"paste":g=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ss}var b=(n&4)!==0,I=!b&&e==="scroll",d=b?m!==null?m+"Capture":null:m;b=[];for(var c=u,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=cr(c,d),v!=null&&b.push(gr(c,v,f)))),I)break;c=c.return}0<b.length&&(m=new g(m,w,null,t,h),p.push({event:m,listeners:b}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&t!==sa&&(w=t.relatedTarget||t.fromElement)&&(Nn(w)||w[un]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=u,w=w?Nn(w):null,w!==null&&(I=Zn(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(b=ks,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ss,v="onPointerLeave",d="onPointerEnter",c="pointer"),I=g==null?m:rt(g),f=w==null?m:rt(w),m=new b(v,c+"leave",g,t,h),m.target=I,m.relatedTarget=f,v=null,Nn(h)===u&&(b=new b(d,c+"enter",w,t,h),b.target=f,b.relatedTarget=I,v=b),I=v,g&&w)n:{for(b=g,d=w,c=0,f=b;f;f=Gn(f))c++;for(f=0,v=d;v;v=Gn(v))f++;for(;0<c-f;)b=Gn(b),c--;for(;0<f-c;)d=Gn(d),f--;for(;c--;){if(b===d||d!==null&&b===d.alternate)break n;b=Gn(b),d=Gn(d)}b=null}else b=null;g!==null&&Ds(p,m,g,b,!1),w!==null&&I!==null&&Ds(p,I,w,b,!0)}}e:{if(m=u?rt(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var R=tm;else if(zs(m))if(Fc)R=am;else{R=om;var C=rm}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(R=im);if(R&&(R=R(e,u))){Pc(p,R,t,h);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ra(m,"number",m.value)}switch(C=u?rt(u):window,e){case"focusin":(zs(C)||C.contentEditable==="true")&&(nt=C,ha=u,er=null);break;case"focusout":er=ha=nt=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,Ps(p,t,h);break;case"selectionchange":if(um)break;case"keydown":case"keyup":Ps(p,t,h)}var x;if(hl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else et?Cc(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(jc&&t.locale!=="ko"&&(et||z!=="onCompositionStart"?z==="onCompositionEnd"&&et&&(x=Ec()):(yn=h,fl="value"in yn?yn.value:yn.textContent,et=!0)),C=xo(u,z),0<C.length&&(z=new bs(z,e,null,t,h),p.push({event:z,listeners:C}),x?z.data=x:(x=_c(t),x!==null&&(z.data=x)))),(x=Gp?Yp(e,t):Xp(e,t))&&(u=xo(u,"onBeforeInput"),0<u.length&&(h=new bs("onBeforeInput","beforeinput",null,t,h),p.push({event:h,listeners:u}),h.data=x))}Wc(p,n)})}function gr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function xo(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=cr(e,t),i!=null&&r.unshift(gr(e,i,o)),i=cr(e,n),i!=null&&r.push(gr(e,i,o))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ds(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var s=t,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=cr(t,i),l!=null&&a.unshift(gr(t,l,s))):o||(l=cr(t,i),l!=null&&a.push(gr(t,l,s)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var pm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function Is(e){return(typeof e=="string"?e:""+e).replace(pm,`
`).replace(mm,"")}function Qr(e,n,t){if(n=Is(n),Is(e)!==n&&t)throw Error(k(425))}function zo(){}var ga=null,wa=null;function ya(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,hm=typeof clearTimeout=="function"?clearTimeout:void 0,Ls=typeof Promise=="function"?Promise:void 0,vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ls<"u"?function(e){return Ls.resolve(null).then(e).catch(gm)}:ka;function gm(e){setTimeout(function(){throw e})}function Ai(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),pr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);pr(n)}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Os(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var At=Math.random().toString(36).slice(2),Ze="__reactFiber$"+At,wr="__reactProps$"+At,un="__reactContainer$"+At,ba="__reactEvents$"+At,wm="__reactListeners$"+At,ym="__reactHandles$"+At;function Nn(e){var n=e[Ze];if(n)return n;for(var t=e.parentNode;t;){if(n=t[un]||t[Ze]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Os(e);e!==null;){if(t=e[Ze])return t;e=Os(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[Ze]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Go(e){return e[wr]||null}var Sa=[],ot=-1;function Dn(e){return{current:e}}function B(e){0>ot||(e.current=Sa[ot],Sa[ot]=null,ot--)}function W(e,n){ot++,Sa[ot]=e.current,e.current=n}var Fn={},he=Dn(Fn),Se=Dn(!1),Bn=Fn;function bt(e,n){var t=e.type.contextTypes;if(!t)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function Eo(){B(Se),B(he)}function Ts(e,n,t){if(he.current!==Fn)throw Error(k(168));W(he,n),W(Se,t)}function qc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(k(108,rp(e)||"Unknown",o));return Z({},t,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Bn=he.current,W(he,e),W(Se,Se.current),!0}function Ms(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=qc(e,n,Bn),r.__reactInternalMemoizedMergedChildContext=e,B(Se),B(he),W(he,e)):B(Se),W(Se,t)}var tn=null,Yo=!1,Di=!1;function Bc(e){tn===null?tn=[e]:tn.push(e)}function km(e){Yo=!0,Bc(e)}function In(){if(!Di&&tn!==null){Di=!0;var e=0,n=$;try{var t=tn;for($=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}tn=null,Yo=!1}catch(o){throw tn!==null&&(tn=tn.slice(e+1)),hc(sl,In),o}finally{$=n,Di=!1}}return null}var it=[],at=0,Co=null,_o=0,Ie=[],Le=0,Vn=null,rn=1,on="";function Tn(e,n){it[at++]=_o,it[at++]=Co,Co=e,_o=n}function Vc(e,n,t){Ie[Le++]=rn,Ie[Le++]=on,Ie[Le++]=Vn,Vn=e;var r=rn;e=on;var o=32-Ve(r)-1;r&=~(1<<o),t+=1;var i=32-Ve(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,rn=1<<32-Ve(n)+o|t<<o|r,on=i+e}else rn=1<<i|t<<o|r,on=e}function gl(e){e.return!==null&&(Tn(e,1),Vc(e,1,0))}function wl(e){for(;e===Co;)Co=it[--at],it[at]=null,_o=it[--at],it[at]=null;for(;e===Vn;)Vn=Ie[--Le],Ie[Le]=null,on=Ie[--Le],Ie[Le]=null,rn=Ie[--Le],Ie[Le]=null}var _e=null,Ce=null,H=!1,Be=null;function Hc(e,n){var t=Oe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ns(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,_e=e,Ce=xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,_e=e,Ce=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Vn!==null?{id:rn,overflow:on}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Oe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,_e=e,Ce=null,!0):!1;default:return!1}}function Ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(H){var n=Ce;if(n){var t=n;if(!Ns(e,n)){if(Ra(e))throw Error(k(418));n=xn(t.nextSibling);var r=_e;n&&Ns(e,n)?Hc(r,t):(e.flags=e.flags&-4097|2,H=!1,_e=e)}}else{if(Ra(e))throw Error(k(418));e.flags=e.flags&-4097|2,H=!1,_e=e}}}function $s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Zr(e){if(e!==_e)return!1;if(!H)return $s(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ya(e.type,e.memoizedProps)),n&&(n=Ce)){if(Ra(e))throw Jc(),Error(k(418));for(;n;)Hc(e,n),n=xn(n.nextSibling)}if($s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ce=xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ce=null}}else Ce=_e?xn(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=Ce;e;)e=xn(e.nextSibling)}function St(){Ce=_e=null,H=!1}function yl(e){Be===null?Be=[e]:Be.push(e)}var bm=pn.ReactCurrentBatchConfig;function Mt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Gr(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ws(e){var n=e._init;return n(e._payload)}function Kc(e){function n(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Cn(d,c),d.index=0,d.sibling=null,d}function i(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,c,f,v){return c===null||c.tag!==6?(c=$i(f,d.mode,v),c.return=d,c):(c=o(c,f),c.return=d,c)}function l(d,c,f,v){var R=f.type;return R===Xn?h(d,c,f.props.children,v,f.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===hn&&Ws(R)===c.type)?(v=o(c,f.props),v.ref=Mt(d,c,f),v.return=d,v):(v=vo(f.type,f.key,f.props,null,d.mode,v),v.ref=Mt(d,c,f),v.return=d,v)}function u(d,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Wi(f,d.mode,v),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function h(d,c,f,v,R){return c===null||c.tag!==7?(c=qn(f,d.mode,v,R),c.return=d,c):(c=o(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$i(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case $r:return f=vo(c.type,c.key,c.props,null,d.mode,f),f.ref=Mt(d,null,c),f.return=d,f;case Yn:return c=Wi(c,d.mode,f),c.return=d,c;case hn:var v=c._init;return p(d,v(c._payload),f)}if(Ht(c)||Dt(c))return c=qn(c,d.mode,f,null),c.return=d,c;Gr(d,c)}return null}function m(d,c,f,v){var R=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return R!==null?null:s(d,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case $r:return f.key===R?l(d,c,f,v):null;case Yn:return f.key===R?u(d,c,f,v):null;case hn:return R=f._init,m(d,c,R(f._payload),v)}if(Ht(f)||Dt(f))return R!==null?null:h(d,c,f,v,null);Gr(d,f)}return null}function g(d,c,f,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,s(c,d,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $r:return d=d.get(v.key===null?f:v.key)||null,l(c,d,v,R);case Yn:return d=d.get(v.key===null?f:v.key)||null,u(c,d,v,R);case hn:var C=v._init;return g(d,c,f,C(v._payload),R)}if(Ht(v)||Dt(v))return d=d.get(f)||null,h(c,d,v,R,null);Gr(c,v)}return null}function w(d,c,f,v){for(var R=null,C=null,x=c,z=c=0,y=null;x!==null&&z<f.length;z++){x.index>z?(y=x,x=null):y=x.sibling;var S=m(d,x,f[z],v);if(S===null){x===null&&(x=y);break}e&&x&&S.alternate===null&&n(d,x),c=i(S,c,z),C===null?R=S:C.sibling=S,C=S,x=y}if(z===f.length)return t(d,x),H&&Tn(d,z),R;if(x===null){for(;z<f.length;z++)x=p(d,f[z],v),x!==null&&(c=i(x,c,z),C===null?R=x:C.sibling=x,C=x);return H&&Tn(d,z),R}for(x=r(d,x);z<f.length;z++)y=g(x,d,z,f[z],v),y!==null&&(e&&y.alternate!==null&&x.delete(y.key===null?z:y.key),c=i(y,c,z),C===null?R=y:C.sibling=y,C=y);return e&&x.forEach(function(O){return n(d,O)}),H&&Tn(d,z),R}function b(d,c,f,v){var R=Dt(f);if(typeof R!="function")throw Error(k(150));if(f=R.call(f),f==null)throw Error(k(151));for(var C=R=null,x=c,z=c=0,y=null,S=f.next();x!==null&&!S.done;z++,S=f.next()){x.index>z?(y=x,x=null):y=x.sibling;var O=m(d,x,S.value,v);if(O===null){x===null&&(x=y);break}e&&x&&O.alternate===null&&n(d,x),c=i(O,c,z),C===null?R=O:C.sibling=O,C=O,x=y}if(S.done)return t(d,x),H&&Tn(d,z),R;if(x===null){for(;!S.done;z++,S=f.next())S=p(d,S.value,v),S!==null&&(c=i(S,c,z),C===null?R=S:C.sibling=S,C=S);return H&&Tn(d,z),R}for(x=r(d,x);!S.done;z++,S=f.next())S=g(x,d,z,S.value,v),S!==null&&(e&&S.alternate!==null&&x.delete(S.key===null?z:S.key),c=i(S,c,z),C===null?R=S:C.sibling=S,C=S);return e&&x.forEach(function(ze){return n(d,ze)}),H&&Tn(d,z),R}function I(d,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Xn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case $r:e:{for(var R=f.key,C=c;C!==null;){if(C.key===R){if(R=f.type,R===Xn){if(C.tag===7){t(d,C.sibling),c=o(C,f.props.children),c.return=d,d=c;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===hn&&Ws(R)===C.type){t(d,C.sibling),c=o(C,f.props),c.ref=Mt(d,C,f),c.return=d,d=c;break e}t(d,C);break}else n(d,C);C=C.sibling}f.type===Xn?(c=qn(f.props.children,d.mode,v,f.key),c.return=d,d=c):(v=vo(f.type,f.key,f.props,null,d.mode,v),v.ref=Mt(d,c,f),v.return=d,d=v)}return a(d);case Yn:e:{for(C=f.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){t(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=Wi(f,d.mode,v),c.return=d,d=c}return a(d);case hn:return C=f._init,I(d,c,C(f._payload),v)}if(Ht(f))return w(d,c,f,v);if(Dt(f))return b(d,c,f,v);Gr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(t(d,c.sibling),c=o(c,f),c.return=d,d=c):(t(d,c),c=$i(f,d.mode,v),c.return=d,d=c),a(d)):t(d,c)}return I}var Rt=Kc(!0),Qc=Kc(!1),Po=Dn(null),Fo=null,lt=null,kl=null;function bl(){kl=lt=Fo=null}function Sl(e){var n=Po.current;B(Po),e._currentValue=n}function za(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ht(e,n){Fo=e,kl=lt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(be=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(kl!==e)if(e={context:e,memoizedValue:n,next:null},lt===null){if(Fo===null)throw Error(k(308));lt=e,Fo.dependencies={lanes:0,firstContext:e}}else lt=lt.next=e;return n}var $n=null;function Rl(e){$n===null?$n=[e]:$n.push(e)}function Zc(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,Rl(n)):(t.next=o.next,o.next=t),n.interleaved=t,cn(e,r)}function cn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var vn=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,cn(e,t)}return o=r.interleaved,o===null?(n.next=n,Rl(r)):(n.next=o.next,o.next=n),r.interleaved=n,cn(e,t)}function uo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ul(e,t)}}function Us(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ao(e,n,t,r){var o=e.updateQueue;vn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?i=u:a.next=u,a=l;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=l))}if(i!==null){var p=o.baseState;a=0,h=u=l=null,s=i;do{var m=s.lane,g=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,b=s;switch(m=n,g=t,b.tag){case 1:if(w=b.payload,typeof w=="function"){p=w.call(g,p,m);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,m=typeof w=="function"?w.call(g,p,m):w,m==null)break e;p=Z({},p,m);break e;case 2:vn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else g={eventTime:g,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=g,l=p):h=h.next=g,a|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(l=p),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=h,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);Jn|=a,e.lanes=a,e.memoizedState=p}}function qs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Ar={},Xe=Dn(Ar),yr=Dn(Ar),kr=Dn(Ar);function Wn(e){if(e===Ar)throw Error(k(174));return e}function zl(e,n){switch(W(kr,n),W(yr,e),W(Xe,Ar),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ia(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ia(n,e)}B(Xe),W(Xe,n)}function xt(){B(Xe),B(yr),B(kr)}function Yc(e){Wn(kr.current);var n=Wn(Xe.current),t=ia(n,e.type);n!==t&&(W(yr,e),W(Xe,t))}function El(e){yr.current===e&&(B(Xe),B(yr))}var K=Dn(0);function Do(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=[];function jl(){for(var e=0;e<Ii.length;e++)Ii[e]._workInProgressVersionPrimary=null;Ii.length=0}var co=pn.ReactCurrentDispatcher,Li=pn.ReactCurrentBatchConfig,Hn=0,Q=null,te=null,ae=null,Io=!1,nr=!1,br=0,Sm=0;function de(){throw Error(k(321))}function Cl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Je(e[t],n[t]))return!1;return!0}function _l(e,n,t,r,o,i){if(Hn=i,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,co.current=e===null||e.memoizedState===null?Em:jm,e=t(r,o),nr){i=0;do{if(nr=!1,br=0,25<=i)throw Error(k(301));i+=1,ae=te=null,n.updateQueue=null,co.current=Cm,e=t(r,o)}while(nr)}if(co.current=Lo,n=te!==null&&te.next!==null,Hn=0,ae=te=Q=null,Io=!1,n)throw Error(k(300));return e}function Pl(){var e=br!==0;return br=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Q.memoizedState=ae=e:ae=ae.next=e,ae}function Ne(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var n=ae===null?Q.memoizedState:ae.next;if(n!==null)ae=n,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ae===null?Q.memoizedState=ae=e:ae=ae.next=e}return ae}function Sr(e,n){return typeof n=="function"?n(e):n}function Oi(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=te,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,l=null,u=i;do{var h=u.lane;if((Hn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,Q.lanes|=h,Jn|=h}u=u.next}while(u!==null&&u!==i);l===null?a=r:l.next=s,Je(r,n.memoizedState)||(be=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Jn|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ti(e){var n=Ne(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Je(i,n.memoizedState)||(be=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Xc(){}function ed(e,n){var t=Q,r=Ne(),o=n(),i=!Je(r.memoizedState,o);if(i&&(r.memoizedState=o,be=!0),r=r.queue,Fl(rd.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ae!==null&&ae.memoizedState.tag&1){if(t.flags|=2048,Rr(9,td.bind(null,t,r,o,n),void 0,null),le===null)throw Error(k(349));Hn&30||nd(t,n,o)}return o}function nd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function td(e,n,t,r){n.value=t,n.getSnapshot=r,od(n)&&id(e)}function rd(e,n,t){return t(function(){od(n)&&id(e)})}function od(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Je(e,t)}catch{return!0}}function id(e){var n=cn(e,1);n!==null&&He(n,e,1,-1)}function Bs(e){var n=Qe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},n.queue=e,e=e.dispatch=zm.bind(null,Q,e),[n.memoizedState,e]}function Rr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function ad(){return Ne().memoizedState}function fo(e,n,t,r){var o=Qe();Q.flags|=e,o.memoizedState=Rr(1|n,t,void 0,r===void 0?null:r)}function Xo(e,n,t,r){var o=Ne();r=r===void 0?null:r;var i=void 0;if(te!==null){var a=te.memoizedState;if(i=a.destroy,r!==null&&Cl(r,a.deps)){o.memoizedState=Rr(n,t,i,r);return}}Q.flags|=e,o.memoizedState=Rr(1|n,t,i,r)}function Vs(e,n){return fo(8390656,8,e,n)}function Fl(e,n){return Xo(2048,8,e,n)}function ld(e,n){return Xo(4,2,e,n)}function sd(e,n){return Xo(4,4,e,n)}function ud(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cd(e,n,t){return t=t!=null?t.concat([e]):null,Xo(4,4,ud.bind(null,n,e),t)}function Al(){}function dd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Cl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function fd(e,n){var t=Ne();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Cl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function pd(e,n,t){return Hn&21?(Je(t,n)||(t=wc(),Q.lanes|=t,Jn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=t)}function Rm(e,n){var t=$;$=t!==0&&4>t?t:4,e(!0);var r=Li.transition;Li.transition={};try{e(!1),n()}finally{$=t,Li.transition=r}}function md(){return Ne().memoizedState}function xm(e,n,t){var r=jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},hd(e))vd(n,t);else if(t=Zc(e,n,t,r),t!==null){var o=ge();He(t,e,r,o),gd(t,n,r)}}function zm(e,n,t){var r=jn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(hd(e))vd(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,s=i(a,t);if(o.hasEagerState=!0,o.eagerState=s,Je(s,a)){var l=n.interleaved;l===null?(o.next=o,Rl(n)):(o.next=l.next,l.next=o),n.interleaved=o;return}}catch{}finally{}t=Zc(e,n,o,r),t!==null&&(o=ge(),He(t,e,r,o),gd(t,n,r))}}function hd(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function vd(e,n){nr=Io=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ul(e,t)}}var Lo={readContext:Me,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Em={readContext:Me,useCallback:function(e,n){return Qe().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:Vs,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fo(4194308,4,ud.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fo(4194308,4,e,n)},useInsertionEffect:function(e,n){return fo(4,2,e,n)},useMemo:function(e,n){var t=Qe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Qe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=xm.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=Qe();return e={current:e},n.memoizedState=e},useState:Bs,useDebugValue:Al,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Bs(!1),n=e[0];return e=Rm.bind(null,e[1]),Qe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,o=Qe();if(H){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),le===null)throw Error(k(349));Hn&30||nd(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Vs(rd.bind(null,r,i,e),[e]),r.flags|=2048,Rr(9,td.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Qe(),n=le.identifierPrefix;if(H){var t=on,r=rn;t=(r&~(1<<32-Ve(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=br++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Sm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},jm={readContext:Me,useCallback:dd,useContext:Me,useEffect:Fl,useImperativeHandle:cd,useInsertionEffect:ld,useLayoutEffect:sd,useMemo:fd,useReducer:Oi,useRef:ad,useState:function(){return Oi(Sr)},useDebugValue:Al,useDeferredValue:function(e){var n=Ne();return pd(n,te.memoizedState,e)},useTransition:function(){var e=Oi(Sr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:ed,useId:md,unstable_isNewReconciler:!1},Cm={readContext:Me,useCallback:dd,useContext:Me,useEffect:Fl,useImperativeHandle:cd,useInsertionEffect:ld,useLayoutEffect:sd,useMemo:fd,useReducer:Ti,useRef:ad,useState:function(){return Ti(Sr)},useDebugValue:Al,useDeferredValue:function(e){var n=Ne();return te===null?n.memoizedState=e:pd(n,te.memoizedState,e)},useTransition:function(){var e=Ti(Sr)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Xc,useSyncExternalStore:ed,useId:md,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=Z({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ea(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:Z({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ei={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ge(),o=jn(e),i=an(r,o);i.payload=n,t!=null&&(i.callback=t),n=zn(e,i,o),n!==null&&(He(n,e,o,r),uo(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ge(),o=jn(e),i=an(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=zn(e,i,o),n!==null&&(He(n,e,o,r),uo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ge(),r=jn(e),o=an(t,r);o.tag=2,n!=null&&(o.callback=n),n=zn(e,o,r),n!==null&&(He(n,e,r,t),uo(n,e,r))}};function Hs(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!hr(t,r)||!hr(o,i):!0}function wd(e,n,t){var r=!1,o=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=Me(i):(o=Re(n)?Bn:he.current,r=n.contextTypes,i=(r=r!=null)?bt(e,o):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function Js(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ei.enqueueReplaceState(n,n.state,null)}function ja(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},xl(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Me(i):(i=Re(n)?Bn:he.current,o.context=bt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ea(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ei.enqueueReplaceState(o,o.state,null),Ao(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function zt(e,n){try{var t="",r=n;do t+=tp(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Mi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ca(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var _m=typeof WeakMap=="function"?WeakMap:Map;function yd(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){To||(To=!0,Ma=r),Ca(e,n)},t}function kd(e,n,t){t=an(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ca(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ca(e,n),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Ks(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new _m;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=qm.bind(null,e,n,t),n.then(e,e))}function Qs(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Zs(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,zn(t,n,1))),t.lanes|=1),e)}var Pm=pn.ReactCurrentOwner,be=!1;function ve(e,n,t,r){n.child=e===null?Qc(n,null,t,r):Rt(n,e.child,t,r)}function Gs(e,n,t,r,o){t=t.render;var i=n.ref;return ht(n,o),r=_l(e,n,t,r,i,o),t=Pl(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(H&&t&&gl(n),n.flags|=1,ve(e,n,r,o),n.child)}function Ys(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!$l(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,bd(e,n,i,r,o)):(e=vo(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:hr,t(a,r)&&e.ref===n.ref)return dn(e,n,o)}return n.flags|=1,e=Cn(i,r),e.ref=n.ref,e.return=n,n.child=e}function bd(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(hr(i,r)&&e.ref===n.ref)if(be=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(be=!0);else return n.lanes=e.lanes,dn(e,n,o)}return _a(e,n,t,r,o)}function Sd(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(ut,je),je|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(ut,je),je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,W(ut,je),je|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,W(ut,je),je|=r;return ve(e,n,o,t),n.child}function Rd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _a(e,n,t,r,o){var i=Re(t)?Bn:he.current;return i=bt(n,i),ht(n,o),t=_l(e,n,t,r,i,o),r=Pl(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,dn(e,n,o)):(H&&r&&gl(n),n.flags|=1,ve(e,n,t,o),n.child)}function Xs(e,n,t,r,o){if(Re(t)){var i=!0;jo(n)}else i=!1;if(ht(n,o),n.stateNode===null)po(e,n),wd(n,t,r),ja(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,s=n.memoizedProps;a.props=s;var l=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=Me(u):(u=Re(t)?Bn:he.current,u=bt(n,u));var h=t.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Js(n,a,r,u),vn=!1;var m=n.memoizedState;a.state=m,Ao(n,r,a,o),l=n.memoizedState,s!==r||m!==l||Se.current||vn?(typeof h=="function"&&(Ea(n,t,h,r),l=n.memoizedState),(s=vn||Hs(n,t,s,r,m,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,Gc(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ue(n.type,s),a.props=u,p=n.pendingProps,m=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=Me(l):(l=Re(t)?Bn:he.current,l=bt(n,l));var g=t.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||m!==l)&&Js(n,a,r,l),vn=!1,m=n.memoizedState,a.state=m,Ao(n,r,a,o);var w=n.memoizedState;s!==p||m!==w||Se.current||vn?(typeof g=="function"&&(Ea(n,t,g,r),w=n.memoizedState),(u=vn||Hs(n,t,u,r,m,w,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,l)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),a.props=r,a.state=w,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Pa(e,n,t,r,i,o)}function Pa(e,n,t,r,o,i){Rd(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&Ms(n,t,!1),dn(e,n,i);r=n.stateNode,Pm.current=n;var s=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=Rt(n,e.child,null,i),n.child=Rt(n,null,s,i)):ve(e,n,s,i),n.memoizedState=r.state,o&&Ms(n,t,!0),n.child}function xd(e){var n=e.stateNode;n.pendingContext?Ts(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ts(e,n.context,!1),zl(e,n.containerInfo)}function eu(e,n,t,r,o){return St(),yl(o),n.flags|=256,ve(e,n,t,r),n.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Aa(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,n,t){var r=n.pendingProps,o=K.current,i=!1,a=(n.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(K,o&1),e===null)return xa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=ri(a,r,0,null),e=qn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Aa(t),n.memoizedState=Fa,e):Dl(n,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Fm(e,n,a,r,s,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=Cn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Cn(s,i):(i=qn(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Aa(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Fa,r}return i=e.child,e=i.sibling,r=Cn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Dl(e,n){return n=ri({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Yr(e,n,t,r){return r!==null&&yl(r),Rt(n,e.child,null,t),e=Dl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Fm(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Mi(Error(k(422))),Yr(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=ri({mode:"visible",children:r.children},o,0,null),i=qn(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&Rt(n,e.child,null,a),n.child.memoizedState=Aa(a),n.memoizedState=Fa,i);if(!(n.mode&1))return Yr(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=Mi(i,r,void 0),Yr(e,n,a,r)}if(s=(a&e.childLanes)!==0,be||s){if(r=le,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,cn(e,o),He(r,e,o,-1))}return Nl(),r=Mi(Error(k(421))),Yr(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=Bm.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Ce=xn(o.nextSibling),_e=n,H=!0,Be=null,e!==null&&(Ie[Le++]=rn,Ie[Le++]=on,Ie[Le++]=Vn,rn=e.id,on=e.overflow,Vn=n),n=Dl(n,r.children),n.flags|=4096,n)}function nu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),za(e.return,n,t)}function Ni(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Ed(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(ve(e,n,r.children,t),r=K.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,t,n);else if(e.tag===19)nu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Do(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ni(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Do(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ni(n,!0,t,null,i);break;case"together":Ni(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function po(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Jn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=Cn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Cn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Am(e,n,t){switch(n.tag){case 3:xd(n),St();break;case 5:Yc(n);break;case 1:Re(n.type)&&jo(n);break;case 4:zl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;W(Po,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),n.flags|=128,null):t&n.child.childLanes?zd(e,n,t):(W(K,K.current&1),e=dn(e,n,t),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ed(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return n.lanes=0,Sd(e,n,t)}return dn(e,n,t)}var jd,Da,Cd,_d;jd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Da=function(){};Cd=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Wn(Xe.current);var i=null;switch(t){case"input":o=na(e,o),r=na(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=oa(e,o),r=oa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zo)}aa(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(i||(i=[]),i.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),i||s===l||(i=[])):(i=i||[]).push(u,l))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};_d=function(e,n,t,r){t!==r&&(n.flags|=4)};function Nt(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Dm(e,n,t){var r=n.pendingProps;switch(wl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Re(n.type)&&Eo(),fe(n),null;case 3:return r=n.stateNode,xt(),B(Se),B(he),jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Be!==null&&(Wa(Be),Be=null))),Da(e,n),fe(n),null;case 5:El(n);var o=Wn(kr.current);if(t=n.type,e!==null&&n.stateNode!=null)Cd(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return fe(n),null}if(e=Wn(Xe.current),Zr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Ze]=n,r[wr]=i,e=(n.mode&1)!==0,t){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<Kt.length;o++)q(Kt[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":cs(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":fs(r,i),q("invalid",r)}aa(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Qr(r.textContent,s,e),o=["children",""+s]):sr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&q("scroll",r)}switch(t){case"input":Wr(r),ds(r,i,!0);break;case"textarea":Wr(r),ps(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=zo)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rc(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Ze]=n,e[wr]=r,jd(e,n,!1,!1),n.stateNode=e;e:{switch(a=la(t,r),t){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Kt.length;o++)q(Kt[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":cs(e,r),o=na(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),q("invalid",e);break;case"textarea":fs(e,r),o=oa(e,r),q("invalid",e);break;default:o=r}aa(t,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?ac(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&oc(e,l)):i==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ur(e,l):typeof l=="number"&&ur(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sr.hasOwnProperty(i)?l!=null&&i==="onScroll"&&q("scroll",e):l!=null&&rl(e,i,l,a))}switch(t){case"input":Wr(e),ds(e,r,!1);break;case"textarea":Wr(e),ps(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?dt(e,!!r.multiple,i,!1):r.defaultValue!=null&&dt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)_d(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Wn(kr.current),Wn(Xe.current),Zr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Ze]=n,(i=r.nodeValue!==t)&&(e=_e,e!==null))switch(e.tag){case 3:Qr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Ze]=n,n.stateNode=r}return fe(n),null;case 13:if(B(K),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Ce!==null&&n.mode&1&&!(n.flags&128))Jc(),St(),n.flags|=98560,i=!1;else if(i=Zr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ze]=n}else St(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),i=!1}else Be!==null&&(Wa(Be),Be=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||K.current&1?oe===0&&(oe=3):Nl())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return xt(),Da(e,n),e===null&&vr(n.stateNode.containerInfo),fe(n),null;case 10:return Sl(n.type._context),fe(n),null;case 17:return Re(n.type)&&Eo(),fe(n),null;case 19:if(B(K),i=n.memoizedState,i===null)return fe(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Nt(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Do(e),a!==null){for(n.flags|=128,Nt(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return W(K,K.current&1|2),n.child}e=e.sibling}i.tail!==null&&X()>Et&&(n.flags|=128,r=!0,Nt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Do(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Nt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!H)return fe(n),null}else 2*X()-i.renderingStartTime>Et&&t!==1073741824&&(n.flags|=128,r=!0,Nt(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=X(),n.sibling=null,t=K.current,W(K,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return Ml(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?je&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Im(e,n){switch(wl(n),n.tag){case 1:return Re(n.type)&&Eo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xt(),B(Se),B(he),jl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return El(n),null;case 13:if(B(K),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));St()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(K),null;case 4:return xt(),null;case 10:return Sl(n.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Xr=!1,me=!1,Lm=typeof WeakSet=="function"?WeakSet:Set,j=null;function st(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){G(e,n,r)}else t.current=null}function Ia(e,n,t){try{t()}catch(r){G(e,n,r)}}var tu=!1;function Om(e,n){if(ga=So,e=Ic(),vl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,s=-1,l=-1,u=0,h=0,p=e,m=null;n:for(;;){for(var g;p!==t||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break n;if(m===t&&++u===o&&(s=a),m===i&&++h===r&&(l=a),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}t=s===-1||l===-1?null:{start:s,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(wa={focusedElem:e,selectionRange:t},So=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,I=w.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?b:Ue(n.type,b),I);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){G(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return w=tu,tu=!1,w}function tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ia(n,t,i)}o=o.next}while(o!==r)}}function ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function La(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pd(e){var n=e.alternate;n!==null&&(e.alternate=null,Pd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ze],delete n[wr],delete n[ba],delete n[wm],delete n[ym])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fd(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zo));else if(r!==4&&(e=e.child,e!==null))for(Oa(e,n,t),e=e.sibling;e!==null;)Oa(e,n,t),e=e.sibling}function Ta(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ta(e,n,t),e=e.sibling;e!==null;)Ta(e,n,t),e=e.sibling}var se=null,qe=!1;function mn(e,n,t){for(t=t.child;t!==null;)Ad(e,n,t),t=t.sibling}function Ad(e,n,t){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Jo,t)}catch{}switch(t.tag){case 5:me||st(t,n);case 6:var r=se,o=qe;se=null,mn(e,n,t),se=r,qe=o,se!==null&&(qe?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(qe?(e=se,t=t.stateNode,e.nodeType===8?Ai(e.parentNode,t):e.nodeType===1&&Ai(e,t),pr(e)):Ai(se,t.stateNode));break;case 4:r=se,o=qe,se=t.stateNode.containerInfo,qe=!0,mn(e,n,t),se=r,qe=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ia(t,n,a),o=o.next}while(o!==r)}mn(e,n,t);break;case 1:if(!me&&(st(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){G(t,n,s)}mn(e,n,t);break;case 21:mn(e,n,t);break;case 22:t.mode&1?(me=(r=me)||t.memoizedState!==null,mn(e,n,t),me=r):mn(e,n,t);break;default:mn(e,n,t)}}function ou(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Lm),n.forEach(function(r){var o=Vm.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function We(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,s=a;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,qe=!1;break e;case 3:se=s.stateNode.containerInfo,qe=!0;break e;case 4:se=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(se===null)throw Error(k(160));Ad(i,a,o),se=null,qe=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){G(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Dd(n,e),n=n.sibling}function Dd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(n,e),Ke(e),r&4){try{tr(3,e,e.return),ni(3,e)}catch(b){G(e,e.return,b)}try{tr(5,e,e.return)}catch(b){G(e,e.return,b)}}break;case 1:We(n,e),Ke(e),r&512&&t!==null&&st(t,t.return);break;case 5:if(We(n,e),Ke(e),r&512&&t!==null&&st(t,t.return),e.flags&32){var o=e.stateNode;try{ur(o,"")}catch(b){G(e,e.return,b)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&nc(o,i),la(s,a);var u=la(s,i);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?ac(o,p):h==="dangerouslySetInnerHTML"?oc(o,p):h==="children"?ur(o,p):rl(o,h,p,u)}switch(s){case"input":ta(o,i);break;case"textarea":tc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?dt(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?dt(o,!!i.multiple,i.defaultValue,!0):dt(o,!!i.multiple,i.multiple?[]:"",!1))}o[wr]=i}catch(b){G(e,e.return,b)}}break;case 6:if(We(n,e),Ke(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(b){G(e,e.return,b)}}break;case 3:if(We(n,e),Ke(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(b){G(e,e.return,b)}break;case 4:We(n,e),Ke(e);break;case 13:We(n,e),Ke(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ol=X())),r&4&&ou(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(me=(u=me)||h,We(n,e),me=u):We(n,e),Ke(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(p=j=h;j!==null;){switch(m=j,g=m.child,m.tag){case 0:case 11:case 14:case 15:tr(4,m,m.return);break;case 1:st(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(b){G(r,t,b)}}break;case 5:st(m,m.return);break;case 22:if(m.memoizedState!==null){au(p);continue}}g!==null?(g.return=m,j=g):au(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=ic("display",a))}catch(b){G(e,e.return,b)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){G(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(n,e),Ke(e),r&4&&ou(e);break;case 21:break;default:We(n,e),Ke(e)}}function Ke(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fd(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ur(o,""),r.flags&=-33);var i=ru(e);Ta(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=ru(e);Oa(e,s,a);break;default:throw Error(k(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tm(e,n,t){j=e,Id(e)}function Id(e,n,t){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Xr;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||me;s=Xr;var u=me;if(Xr=a,(me=l)&&!u)for(j=o;j!==null;)a=j,l=a.child,a.tag===22&&a.memoizedState!==null?lu(o):l!==null?(l.return=a,j=l):lu(o);for(;i!==null;)j=i,Id(i),i=i.sibling;j=o,Xr=s,me=u}iu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):iu(e)}}function iu(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:me||ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!me)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:Ue(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&qs(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qs(n,a,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&pr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}me||n.flags&512&&La(n)}catch(m){G(n,n.return,m)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function au(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function lu(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ni(4,n)}catch(l){G(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(l){G(n,o,l)}}var i=n.return;try{La(n)}catch(l){G(n,i,l)}break;case 5:var a=n.return;try{La(n)}catch(l){G(n,a,l)}}}catch(l){G(n,n.return,l)}if(n===e){j=null;break}var s=n.sibling;if(s!==null){s.return=n.return,j=s;break}j=n.return}}var Mm=Math.ceil,Oo=pn.ReactCurrentDispatcher,Il=pn.ReactCurrentOwner,Te=pn.ReactCurrentBatchConfig,M=0,le=null,ee=null,ue=0,je=0,ut=Dn(0),oe=0,xr=null,Jn=0,ti=0,Ll=0,rr=null,ke=null,Ol=0,Et=1/0,nn=null,To=!1,Ma=null,En=null,eo=!1,kn=null,Mo=0,or=0,Na=null,mo=-1,ho=0;function ge(){return M&6?X():mo!==-1?mo:mo=X()}function jn(e){return e.mode&1?M&2&&ue!==0?ue&-ue:bm.transition!==null?(ho===0&&(ho=wc()),ho):(e=$,e!==0||(e=window.event,e=e===void 0?16:zc(e.type)),e):1}function He(e,n,t,r){if(50<or)throw or=0,Na=null,Error(k(185));_r(e,t,r),(!(M&2)||e!==le)&&(e===le&&(!(M&2)&&(ti|=t),oe===4&&wn(e,ue)),xe(e,r),t===1&&M===0&&!(n.mode&1)&&(Et=X()+500,Yo&&In()))}function xe(e,n){var t=e.callbackNode;bp(e,n);var r=bo(e,e===le?ue:0);if(r===0)t!==null&&vs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vs(t),n===1)e.tag===0?km(su.bind(null,e)):Bc(su.bind(null,e)),vm(function(){!(M&6)&&In()}),t=null;else{switch(yc(r)){case 1:t=sl;break;case 4:t=vc;break;case 16:t=ko;break;case 536870912:t=gc;break;default:t=ko}t=Ud(t,Ld.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ld(e,n){if(mo=-1,ho=0,M&6)throw Error(k(327));var t=e.callbackNode;if(vt()&&e.callbackNode!==t)return null;var r=bo(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=No(e,r);else{n=r;var o=M;M|=2;var i=Td();(le!==e||ue!==n)&&(nn=null,Et=X()+500,Un(e,n));do try{Wm();break}catch(s){Od(e,s)}while(!0);bl(),Oo.current=i,M=o,ee!==null?n=0:(le=null,ue=0,n=oe)}if(n!==0){if(n===2&&(o=fa(e),o!==0&&(r=o,n=$a(e,o))),n===1)throw t=xr,Un(e,0),wn(e,r),xe(e,X()),t;if(n===6)wn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Nm(o)&&(n=No(e,r),n===2&&(i=fa(e),i!==0&&(r=i,n=$a(e,i))),n===1))throw t=xr,Un(e,0),wn(e,r),xe(e,X()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Mn(e,ke,nn);break;case 3:if(wn(e,r),(r&130023424)===r&&(n=Ol+500-X(),10<n)){if(bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ka(Mn.bind(null,e,ke,nn),n);break}Mn(e,ke,nn);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Ve(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Mm(r/1960))-r,10<r){e.timeoutHandle=ka(Mn.bind(null,e,ke,nn),r);break}Mn(e,ke,nn);break;case 5:Mn(e,ke,nn);break;default:throw Error(k(329))}}}return xe(e,X()),e.callbackNode===t?Ld.bind(null,e):null}function $a(e,n){var t=rr;return e.current.memoizedState.isDehydrated&&(Un(e,n).flags|=256),e=No(e,n),e!==2&&(n=ke,ke=t,n!==null&&Wa(n)),e}function Wa(e){ke===null?ke=e:ke.push.apply(ke,e)}function Nm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!Je(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wn(e,n){for(n&=~Ll,n&=~ti,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ve(n),r=1<<t;e[t]=-1,n&=~r}}function su(e){if(M&6)throw Error(k(327));vt();var n=bo(e,0);if(!(n&1))return xe(e,X()),null;var t=No(e,n);if(e.tag!==0&&t===2){var r=fa(e);r!==0&&(n=r,t=$a(e,r))}if(t===1)throw t=xr,Un(e,0),wn(e,n),xe(e,X()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Mn(e,ke,nn),xe(e,X()),null}function Tl(e,n){var t=M;M|=1;try{return e(n)}finally{M=t,M===0&&(Et=X()+500,Yo&&In())}}function Kn(e){kn!==null&&kn.tag===0&&!(M&6)&&vt();var n=M;M|=1;var t=Te.transition,r=$;try{if(Te.transition=null,$=1,e)return e()}finally{$=r,Te.transition=t,M=n,!(M&6)&&In()}}function Ml(){je=ut.current,B(ut)}function Un(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hm(t)),ee!==null)for(t=ee.return;t!==null;){var r=t;switch(wl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:xt(),B(Se),B(he),jl();break;case 5:El(r);break;case 4:xt();break;case 13:B(K);break;case 19:B(K);break;case 10:Sl(r.type._context);break;case 22:case 23:Ml()}t=t.return}if(le=e,ee=e=Cn(e.current,null),ue=je=n,oe=0,xr=null,Ll=ti=Jn=0,ke=rr=null,$n!==null){for(n=0;n<$n.length;n++)if(t=$n[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}$n=null}return e}function Od(e,n){do{var t=ee;try{if(bl(),co.current=Lo,Io){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Io=!1}if(Hn=0,ae=te=Q=null,nr=!1,br=0,Il.current=null,t===null||t.return===null){oe=1,xr=n,ee=null;break}e:{var i=e,a=t.return,s=t,l=n;if(n=ue,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Qs(a);if(g!==null){g.flags&=-257,Zs(g,a,s,i,n),g.mode&1&&Ks(i,u,n),n=g,l=u;var w=n.updateQueue;if(w===null){var b=new Set;b.add(l),n.updateQueue=b}else w.add(l);break e}else{if(!(n&1)){Ks(i,u,n),Nl();break e}l=Error(k(426))}}else if(H&&s.mode&1){var I=Qs(a);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Zs(I,a,s,i,n),yl(zt(l,s));break e}}i=l=zt(l,s),oe!==4&&(oe=2),rr===null?rr=[i]:rr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=yd(i,l,n);Us(i,d);break e;case 1:s=l;var c=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(En===null||!En.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=kd(i,s,n);Us(i,v);break e}}i=i.return}while(i!==null)}Nd(t)}catch(R){n=R,ee===t&&t!==null&&(ee=t=t.return);continue}break}while(!0)}function Td(){var e=Oo.current;return Oo.current=Lo,e===null?Lo:e}function Nl(){(oe===0||oe===3||oe===2)&&(oe=4),le===null||!(Jn&268435455)&&!(ti&268435455)||wn(le,ue)}function No(e,n){var t=M;M|=2;var r=Td();(le!==e||ue!==n)&&(nn=null,Un(e,n));do try{$m();break}catch(o){Od(e,o)}while(!0);if(bl(),M=t,Oo.current=r,ee!==null)throw Error(k(261));return le=null,ue=0,oe}function $m(){for(;ee!==null;)Md(ee)}function Wm(){for(;ee!==null&&!fp();)Md(ee)}function Md(e){var n=Wd(e.alternate,e,je);e.memoizedProps=e.pendingProps,n===null?Nd(e):ee=n,Il.current=null}function Nd(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Im(t,n),t!==null){t.flags&=32767,ee=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ee=null;return}}else if(t=Dm(t,n,je),t!==null){ee=t;return}if(n=n.sibling,n!==null){ee=n;return}ee=n=e}while(n!==null);oe===0&&(oe=5)}function Mn(e,n,t){var r=$,o=Te.transition;try{Te.transition=null,$=1,Um(e,n,t,r)}finally{Te.transition=o,$=r}return null}function Um(e,n,t,r){do vt();while(kn!==null);if(M&6)throw Error(k(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Sp(e,i),e===le&&(ee=le=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||eo||(eo=!0,Ud(ko,function(){return vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var a=$;$=1;var s=M;M|=4,Il.current=null,Om(e,t),Dd(t,e),sm(wa),So=!!ga,wa=ga=null,e.current=t,Tm(t),pp(),M=s,$=a,Te.transition=i}else e.current=t;if(eo&&(eo=!1,kn=e,Mo=o),i=e.pendingLanes,i===0&&(En=null),vp(t.stateNode),xe(e,X()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(To)throw To=!1,e=Ma,Ma=null,e;return Mo&1&&e.tag!==0&&vt(),i=e.pendingLanes,i&1?e===Na?or++:(or=0,Na=e):or=0,In(),null}function vt(){if(kn!==null){var e=yc(Mo),n=Te.transition,t=$;try{if(Te.transition=null,$=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,Mo=0,M&6)throw Error(k(331));var o=M;for(M|=4,j=e.current;j!==null;){var i=j,a=i.child;if(j.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(j=u;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:tr(8,h,i)}var p=h.child;if(p!==null)p.return=h,j=p;else for(;j!==null;){h=j;var m=h.sibling,g=h.return;if(Pd(h),h===u){j=null;break}if(m!==null){m.return=g,j=m;break}j=g}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var I=b.sibling;b.sibling=null,b=I}while(b!==null)}}j=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:tr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,j=d;break e}j=i.return}}var c=e.current;for(j=c;j!==null;){a=j;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,j=f;else e:for(a=c;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ni(9,s)}}catch(R){G(s,s.return,R)}if(s===a){j=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,j=v;break e}j=s.return}}if(M=o,In(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Jo,e)}catch{}r=!0}return r}finally{$=t,Te.transition=n}}return!1}function uu(e,n,t){n=zt(t,n),n=yd(e,n,1),e=zn(e,n,1),n=ge(),e!==null&&(_r(e,1,n),xe(e,n))}function G(e,n,t){if(e.tag===3)uu(e,e,t);else for(;n!==null;){if(n.tag===3){uu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){e=zt(t,e),e=kd(n,e,1),n=zn(n,e,1),e=ge(),n!==null&&(_r(n,1,e),xe(n,e));break}}n=n.return}}function qm(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ge(),e.pingedLanes|=e.suspendedLanes&t,le===e&&(ue&t)===t&&(oe===4||oe===3&&(ue&130023424)===ue&&500>X()-Ol?Un(e,0):Ll|=t),xe(e,n)}function $d(e,n){n===0&&(e.mode&1?(n=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):n=1);var t=ge();e=cn(e,n),e!==null&&(_r(e,n,t),xe(e,t))}function Bm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),$d(e,t)}function Vm(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),$d(e,t)}var Wd;Wd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)be=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return be=!1,Am(e,n,t);be=!!(e.flags&131072)}else be=!1,H&&n.flags&1048576&&Vc(n,_o,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;po(e,n),e=n.pendingProps;var o=bt(n,he.current);ht(n,t),o=_l(null,n,r,e,o,t);var i=Pl();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(r)?(i=!0,jo(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xl(n),o.updater=ei,n.stateNode=o,o._reactInternals=n,ja(n,r,e,t),n=Pa(null,n,r,!0,i,t)):(n.tag=0,H&&i&&gl(n),ve(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(po(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=Jm(r),e=Ue(r,e),o){case 0:n=_a(null,n,r,e,t);break e;case 1:n=Xs(null,n,r,e,t);break e;case 11:n=Gs(null,n,r,e,t);break e;case 14:n=Ys(null,n,r,Ue(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),_a(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),Xs(e,n,r,o,t);case 3:e:{if(xd(n),e===null)throw Error(k(387));r=n.pendingProps,i=n.memoizedState,o=i.element,Gc(e,n),Ao(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=zt(Error(k(423)),n),n=eu(e,n,r,t,o);break e}else if(r!==o){o=zt(Error(k(424)),n),n=eu(e,n,r,t,o);break e}else for(Ce=xn(n.stateNode.containerInfo.firstChild),_e=n,H=!0,Be=null,t=Qc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(St(),r===o){n=dn(e,n,t);break e}ve(e,n,r,t)}n=n.child}return n;case 5:return Yc(n),e===null&&xa(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ya(r,o)?a=null:i!==null&&ya(r,i)&&(n.flags|=32),Rd(e,n),ve(e,n,a,t),n.child;case 6:return e===null&&xa(n),null;case 13:return zd(e,n,t);case 4:return zl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Rt(n,null,r,t):ve(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),Gs(e,n,r,o,t);case 7:return ve(e,n,n.pendingProps,t),n.child;case 8:return ve(e,n,n.pendingProps.children,t),n.child;case 12:return ve(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,W(Po,r._currentValue),r._currentValue=a,i!==null)if(Je(i.value,a)){if(i.children===o.children&&!Se.current){n=dn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=an(-1,t&-t),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),za(i.return,t,n),s.lanes|=t;break}l=l.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(k(341));a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),za(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ve(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,ht(n,t),o=Me(o),r=r(o),n.flags|=1,ve(e,n,r,t),n.child;case 14:return r=n.type,o=Ue(r,n.pendingProps),o=Ue(r.type,o),Ys(e,n,r,o,t);case 15:return bd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:Ue(r,o),po(e,n),n.tag=1,Re(r)?(e=!0,jo(n)):e=!1,ht(n,t),wd(n,r,o),ja(n,r,o,t),Pa(null,n,r,!0,e,t);case 19:return Ed(e,n,t);case 22:return Sd(e,n,t)}throw Error(k(156,n.tag))};function Ud(e,n){return hc(e,n)}function Hm(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,n,t,r){return new Hm(e,n,t,r)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jm(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===al)return 14}return 2}function Cn(e,n){var t=e.alternate;return t===null?(t=Oe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vo(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")$l(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xn:return qn(t.children,o,i,n);case ol:a=8,o|=8;break;case Gi:return e=Oe(12,t,n,o|2),e.elementType=Gi,e.lanes=i,e;case Yi:return e=Oe(13,t,n,o),e.elementType=Yi,e.lanes=i,e;case Xi:return e=Oe(19,t,n,o),e.elementType=Xi,e.lanes=i,e;case Yu:return ri(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zu:a=10;break e;case Gu:a=9;break e;case il:a=11;break e;case al:a=14;break e;case hn:a=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=Oe(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function qn(e,n,t,r){return e=Oe(7,e,r,n),e.lanes=t,e}function ri(e,n,t,r){return e=Oe(22,e,r,n),e.elementType=Yu,e.lanes=t,e.stateNode={isHidden:!1},e}function $i(e,n,t){return e=Oe(6,e,null,n),e.lanes=t,e}function Wi(e,n,t){return n=Oe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Km(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bi(0),this.expirationTimes=bi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Wl(e,n,t,r,o,i,a,s,l){return e=new Km(e,n,t,s,l),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Oe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(i),e}function Qm(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function qd(e){if(!e)return Fn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(Re(t))return qc(e,t,n)}return n}function Bd(e,n,t,r,o,i,a,s,l){return e=Wl(t,r,!0,e,o,i,a,s,l),e.context=qd(null),t=e.current,r=ge(),o=jn(t),i=an(r,o),i.callback=n??null,zn(t,i,o),e.current.lanes=o,_r(e,o,r),xe(e,r),e}function oi(e,n,t,r){var o=n.current,i=ge(),a=jn(o);return t=qd(t),n.context===null?n.context=t:n.pendingContext=t,n=an(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=zn(o,n,a),e!==null&&(He(e,o,a,i),uo(e,o,a)),a}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ul(e,n){cu(e,n),(e=e.alternate)&&cu(e,n)}function Zm(){return null}var Vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ql(e){this._internalRoot=e}ii.prototype.render=ql.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));oi(e,n,null,null)};ii.prototype.unmount=ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kn(function(){oi(null,e,null,null)}),n[un]=null}};function ii(e){this._internalRoot=e}ii.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<gn.length&&n!==0&&n<gn[t].priority;t++);gn.splice(t,0,e),t===0&&xc(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function du(){}function Gm(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=$o(a);i.call(u)}}var a=Bd(n,r,e,0,null,!1,!1,"",du);return e._reactRootContainer=a,e[un]=a.current,vr(e.nodeType===8?e.parentNode:e),Kn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=$o(l);s.call(u)}}var l=Wl(e,0,!1,null,null,!1,!1,"",du);return e._reactRootContainer=l,e[un]=l.current,vr(e.nodeType===8?e.parentNode:e),Kn(function(){oi(n,l,t,r)}),l}function li(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=$o(a);s.call(l)}}oi(n,a,e,o)}else a=Gm(t,n,e,o,r);return $o(a)}kc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Jt(n.pendingLanes);t!==0&&(ul(n,t|1),xe(n,X()),!(M&6)&&(Et=X()+500,In()))}break;case 13:Kn(function(){var r=cn(e,1);if(r!==null){var o=ge();He(r,e,1,o)}}),Ul(e,1)}};cl=function(e){if(e.tag===13){var n=cn(e,134217728);if(n!==null){var t=ge();He(n,e,134217728,t)}Ul(e,134217728)}};bc=function(e){if(e.tag===13){var n=jn(e),t=cn(e,n);if(t!==null){var r=ge();He(t,e,n,r)}Ul(e,n)}};Sc=function(){return $};Rc=function(e,n){var t=$;try{return $=e,n()}finally{$=t}};ua=function(e,n,t){switch(n){case"input":if(ta(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Go(r);if(!o)throw Error(k(90));ec(r),ta(r,o)}}}break;case"textarea":tc(e,t);break;case"select":n=t.value,n!=null&&dt(e,!!t.multiple,n,!1)}};uc=Tl;cc=Kn;var Ym={usingClientEntryPoint:!1,Events:[Fr,rt,Go,lc,sc,Tl]},$t={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xm={bundleType:$t.bundleType,version:$t.version,rendererPackageName:$t.rendererPackageName,rendererConfig:$t.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:$t.findFiberByHostInstance||Zm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Jo=no.inject(Xm),Ye=no}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ym;Fe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(n))throw Error(k(200));return Qm(e,n,null,t)};Fe.createRoot=function(e,n){if(!Bl(e))throw Error(k(299));var t=!1,r="",o=Vd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Wl(e,1,!1,null,null,t,!1,r,o),e[un]=n.current,vr(e.nodeType===8?e.parentNode:e),new ql(n)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=pc(n),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return Kn(e)};Fe.hydrate=function(e,n,t){if(!ai(n))throw Error(k(200));return li(null,e,n,!0,t)};Fe.hydrateRoot=function(e,n,t){if(!Bl(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=Vd;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Bd(n,null,e,1,t??null,o,!1,i,a),e[un]=n.current,vr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new ii(n)};Fe.render=function(e,n,t){if(!ai(n))throw Error(k(200));return li(null,e,n,!1,t)};Fe.unmountComponentAtNode=function(e){if(!ai(e))throw Error(k(40));return e._reactRootContainer?(Kn(function(){li(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1};Fe.unstable_batchedUpdates=Tl;Fe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ai(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return li(e,n,t,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function Hd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd)}catch(e){console.error(e)}}Hd(),Hu.exports=Fe;var eh=Hu.exports,fu=eh;Qi.createRoot=fu.createRoot,Qi.hydrateRoot=fu.hydrateRoot;class nh extends Ki.Component{constructor(t){super(t);Mr(this,"container");Mr(this,"player",null);Mr(this,"isLoading",!1);this.container=Ki.createRef()}componentDidMount(){this.player=window.RufflePlayer.newest().createPlayer(),this.player.id="player",this.player.addEventListener("loadedmetadata",()=>{this.props.onLoadedMetadata&&this.props.onLoadedMetadata(this.player.metadata)}),this.isLoading=!1,this.container.current.appendChild(this.player)}componentWillUnmount(){var t;(t=this.player)==null||t.remove(),this.player=null,this.isLoading=!1}render(){return E.jsx("div",{id:this.props.id,ref:this.container,onDragEnter:this.props.onDragEnter,onDragLeave:this.props.onDragLeave,onDragOver:this.props.onDragOver,onDrop:this.props.onDragDrop,children:this.props.children})}reload(){var t;this.isLoading||(this.isLoading=!0,(t=this.player)==null||t.reload().finally(()=>{this.isLoading=!1}))}loadUrl(t,r){var o;this.isLoading||(this.isLoading=!0,(o=this.player)==null||o.load({url:t,...this.props.baseConfig,...r},!1).finally(()=>{this.isLoading=!1}))}loadFile(t){this.isLoading||(this.isLoading=!0,new Response(t).arrayBuffer().then(r=>{var o;return(o=this.player)==null?void 0:o.load({data:r,...this.props.baseConfig},!1)}).finally(()=>{this.isLoading=!1}))}}const th=""+new URL("../logo.svg",import.meta.url).href,pu={Animation:"Animations",Game:"Games"};function rh({sampleSelectionInput:e,selectedSample:n,setSelectedSample:t,setSelectedFilename:r,onSelectUrl:o}){const[i,a]=re.useState([]),s=u=>{const h=u.target,p=parseInt(h.value,10);i[p]&&l(i[p])},l=re.useCallback(u=>{o(u.location,u.config??{}),t(u),r(null)},[o,r,t]);return re.useEffect(()=>{(async()=>{const u=await fetch("swfs.json");if(u.ok){const h=await u.json();a(h.swfs),h.swfs.length>0&&l(h.swfs[0])}})()},[l]),E.jsxs("div",{id:"sample-swfs-container",className:i.length==0?"hidden":"",children:[E.jsx("span",{id:"sample-swfs-label",children:"Sample SWF:"}),E.jsxs("select",{id:"sample-swfs","aria-describedby":"sample-swfs-label",onChange:s,ref:e,children:[i.map((u,h)=>E.jsx(re.Fragment,{children:u.type==null&&E.jsx("option",{value:h,children:u.title})},h)),Object.keys(pu).map(u=>E.jsx("optgroup",{label:pu[u],children:i.map((h,p)=>E.jsx(re.Fragment,{children:h.type==u&&E.jsx("option",{value:p,children:h.title})},p))},u))]}),E.jsxs("div",{id:"author-container",className:n!=null&&n.author?"":"hidden",children:[E.jsx("span",{children:"Author: "}),E.jsx("a",{href:n==null?void 0:n.authorLink,target:"_blank",id:"author",children:n==null?void 0:n.author})]})]})}function oh({allowUrlLoading:e,allowSampleSwfs:n,onToggleMetadata:t,onReloadMovie:r,onSelectUrl:o,onSelectFile:i,selectedFilename:a,setSelectedFilename:s,onFileDragLeave:l,onFileDragOver:u,onFileDragDrop:h}){const p=re.useRef(null),m=re.useRef(null),g=re.useRef(null),[w,b]=re.useState(null),I=()=>{var x;(x=p.current)==null||x.click()},d=x=>{o(x,{}),s(null),b(null),g.current&&(g.current.selectedIndex=-1)},c=x=>{i(x),b(null),s(x.name),g.current&&(g.current.selectedIndex=-1)},f=x=>{var z;x.preventDefault(),(z=m.current)!=null&&z.value&&d(m.current.value)},v=x=>{const z=x.target;z!=null&&z.files&&(z==null?void 0:z.files.length)>0&&z.files[0]&&c(z.files[0])},R=()=>{confirm("Reload the current SWF?")&&r()},C=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.platform==="MacIntel"&&typeof navigator.standalone<"u";return re.useEffect(()=>{a!=null&&(b(null),g.current&&(g.current.selectedIndex=-1))},[a]),E.jsxs("div",{id:"nav",children:[E.jsx("a",{id:"logo-container",href:"https://ruffle.rs/",target:"_blank",children:E.jsx("img",{className:"logo",src:th,alt:"Ruffle"})}),E.jsxs("div",{className:"select-container",children:[E.jsxs("form",{id:"web-url-container",onSubmit:f,hidden:!e,children:[E.jsx("input",{id:"web-url",name:"web-url",type:"text",placeholder:"URL of a .swf file on the web",ref:m}),E.jsx("button",{id:"web-form-submit",type:"submit",children:"Load"})]}),E.jsxs("div",{id:"local-file-container",onDragLeave:l,onDragOver:u,onDrop:h,children:[E.jsx("span",{id:"local-file-static-label",onClick:I,children:"Local SWF:"}),E.jsx("input",{type:"file",accept:C?void 0:".swf,.spl",id:"local-file","aria-describedby":"local-file-static-label",ref:p,onChange:v}),E.jsx("button",{id:"local-file-label",onClick:I,children:"Select File"}),E.jsx("label",{id:"local-file-name",htmlFor:"local-file",children:a??"No file selected."})]}),n&&E.jsx(rh,{onSelectUrl:o,selectedSample:w,setSelectedFilename:s,setSelectedSample:b,sampleSelectionInput:g})]}),E.jsxs("div",{children:[E.jsx("svg",{id:"toggle-info",width:"20px",viewBox:"0 0 416.979 416.979",onClick:t,children:E.jsx("path",{fill:"white",d:"M356.004 61.156c-81.37-81.47-213.377-81.551-294.848-.182-81.47 81.371-81.552 213.379-.181 294.85 81.369 81.47 213.378 81.551 294.849.181 81.469-81.369 81.551-213.379.18-294.849zM237.6 340.786a5.821 5.821 0 0 1-5.822 5.822h-46.576a5.821 5.821 0 0 1-5.822-5.822V167.885a5.821 5.821 0 0 1 5.822-5.822h46.576a5.82 5.82 0 0 1 5.822 5.822v172.901zm-29.11-202.885c-18.618 0-33.766-15.146-33.766-33.765 0-18.617 15.147-33.766 33.766-33.766s33.766 15.148 33.766 33.766c0 18.619-15.149 33.765-33.766 33.765z"})}),E.jsx("svg",{id:"reload-swf",width:"20px",viewBox:"0 0 489.711 489.711",onClick:R,children:E.jsx("path",{fill:"white",d:"M112.156 97.111c72.3-65.4 180.5-66.4 253.8-6.7l-58.1 2.2c-7.5.3-13.3 6.5-13 14 .3 7.3 6.3 13 13.5 13h.5l89.2-3.3c7.3-.3 13-6.2 13-13.5v-1.6l-3.3-88.2c-.3-7.5-6.6-13.3-14-13-7.5.3-13.3 6.5-13 14l2.1 55.3c-36.3-29.7-81-46.9-128.8-49.3-59.2-3-116.1 17.3-160 57.1-60.4 54.7-86 137.9-66.8 217.1 1.5 6.2 7 10.3 13.1 10.3 1.1 0 2.1-.1 3.2-.4 7.2-1.8 11.7-9.1 9.9-16.3-16.8-69.6 5.6-142.7 58.7-190.7zm350.3 98.4c-1.8-7.2-9.1-11.7-16.3-9.9-7.2 1.8-11.7 9.1-9.9 16.3 16.9 69.6-5.6 142.7-58.7 190.7-37.3 33.7-84.1 50.3-130.7 50.3-44.5 0-88.9-15.1-124.7-44.9l58.8-5.3c7.4-.7 12.9-7.2 12.2-14.7s-7.2-12.9-14.7-12.2l-88.9 8c-7.4.7-12.9 7.2-12.2 14.7l8 88.9c.6 7 6.5 12.3 13.4 12.3.4 0 .8 0 1.2-.1 7.4-.7 12.9-7.2 12.2-14.7l-4.8-54.1c36.3 29.4 80.8 46.5 128.3 48.9 3.8.2 7.6.3 11.3.3 55.1 0 107.5-20.2 148.7-57.4 60.4-54.7 86-137.8 66.8-217.1z"})})]})]})}const ih={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9.0",10:"10.0/10.1",11:"10.2",12:"10.3",13:"11.0",14:"11.1",15:"11.2",16:"11.3",17:"11.4",18:"11.5",19:"11.6",20:"11.7",21:"11.8",22:"11.9",23:"12",24:"13",25:"14",26:"15",27:"16",28:"17",29:"18",30:"19",31:"20",32:"21",33:"22",34:"23",35:"24",36:"25",37:"26",38:"27",39:"28",40:"29",41:"30",42:"31",43:"32"};function ah({visible:e,metadata:n}){return E.jsxs("div",{id:"info-container",className:e?"":"hidden",children:[E.jsxs("div",{children:[E.jsx("span",{children:"Uncompressed Length"}),E.jsxs("span",{id:"uncompressedLength",children:[((n==null?void 0:n.uncompressedLength)??0)>>10,"Kb"]})]}),E.jsxs("div",{children:[E.jsx("span",{children:"SWF Version"}),E.jsx("span",{id:"swfVersion",children:n==null?void 0:n.swfVersion})]}),E.jsxs("div",{children:[E.jsx("span",{children:"FP Version"}),E.jsx("span",{id:"flashVersion",children:n?ih[n.swfVersion]??"Unknown":""})]}),E.jsxs("div",{children:[E.jsx("span",{children:"ActionScript 3"}),E.jsx("span",{id:"isActionScript3",children:n!=null&&n.isActionScript3?"true":"false"})]}),E.jsxs("div",{children:[E.jsx("span",{children:"Total Frames"}),E.jsx("span",{id:"numFrames",children:n==null?void 0:n.numFrames})]}),E.jsxs("div",{children:[E.jsx("span",{children:"Frame Rate"}),E.jsx("span",{id:"frameRate",children:n==null?void 0:n.frameRate})]}),E.jsxs("div",{children:[E.jsx("span",{children:"SWF Width"}),E.jsx("span",{id:"width",children:n==null?void 0:n.width})]}),E.jsxs("div",{children:[E.jsx("span",{children:"SWF Height"}),E.jsx("span",{id:"height",children:n==null?void 0:n.height})]}),E.jsxs("div",{children:[E.jsx("span",{children:"SWF Background Color"}),E.jsx("span",{id:"backgroundColor",style:{backgroundColor:(n==null?void 0:n.backgroundColor)??void 0}})]})]})}function lh({ruffleBaseConfig:e,allowUrlLoading:n,allowSampleSwfs:t}){const[r,o]=re.useState(null),[i,a]=re.useState(!1),[s,l]=re.useState(null),[u,h]=re.useState(!1),p=re.useRef(null),m=()=>{a(!i)},g=()=>{var v;(v=p.current)==null||v.reload()},w=re.useCallback((v,R)=>{var C;(C=p.current)==null||C.loadUrl(v,R)},[]),b=v=>{var R;(R=p.current)==null||R.loadFile(v)},I=v=>{v.stopPropagation(),v.preventDefault()},d=v=>{v.stopPropagation(),v.preventDefault(),h(!1)},c=v=>{v.stopPropagation(),v.preventDefault(),h(!0)},f=v=>{var R;v.stopPropagation(),v.preventDefault(),h(!1),v.dataTransfer&&(l(v.dataTransfer.files[0].name),(R=p.current)==null||R.loadFile(v.dataTransfer.files[0]))};return E.jsxs(E.Fragment,{children:[E.jsx(oh,{allowUrlLoading:n,allowSampleSwfs:t,onToggleMetadata:m,onReloadMovie:g,onSelectUrl:w,onSelectFile:b,selectedFilename:s,setSelectedFilename:l,onFileDragLeave:d,onFileDragOver:c,onFileDragDrop:f}),E.jsxs("div",{id:"main",className:i?"info-container-shown":"",children:[E.jsx(nh,{id:"player-container","aria-label":"Select a demo or drag an SWF",onLoadedMetadata:o,ref:p,onDragEnter:I,onDragLeave:d,onDragOver:c,onDragDrop:f,baseConfig:e,children:E.jsx("div",{id:"overlay",className:u?"drag":""})}),E.jsx(ah,{visible:i,metadata:r})]})]})}const sh="modulepreload",uh=function(e,n){return new URL(e,n).href},mu={},hu=function(n,t,r){let o=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.all(t.map(l=>{if(l=uh(l,r),l in mu)return;mu[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const w=i[g];if(w.href===l&&(!u||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":sh,u||(m.as="script",m.crossOrigin=""),m.href=l,s&&m.setAttribute("nonce",s),document.head.appendChild(m),u)return new Promise((g,w)=>{m.addEventListener("load",g),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>n()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},ch=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),dh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,7,1,5,0,208,112,26,11])),fh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,12,1,10,0,67,0,0,0,0,252,0,26,11])),ph=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,65,0,192,26,11])),mh=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));function hh(){Object.defineProperty(Array.prototype,"reduce",{value(...e){if(e.length===0&&window.Prototype&&window.Prototype.Version&&window.Prototype.Version<"1.6.1")return this.length>1?this:this[0];const n=e[0];if(this===null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof n!="function")throw new TypeError(`${n} is not a function`);const t=Object(this),r=t.length>>>0;let o=0,i;if(e.length>=2)i=e[1];else{for(;o<r&&!(o in t);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");i=t[o++]}for(;o<r;)o in t&&(i=n(i,t[o],o,t)),o++;return i}})}function vh(){typeof window.constructor!="function"||!Ua(window.constructor)||(window.Window=window.constructor)}function gh(){(window.Reflect===void 0||window.Reflect===null)&&(window.Reflect={}),typeof Reflect.get!="function"&&Object.defineProperty(Reflect,"get",{value(e,n){return e[n]}}),typeof Reflect.set!="function"&&Object.defineProperty(Reflect,"set",{value(e,n,t){e[n]=t}}),typeof Reflect.has!="function"&&Object.defineProperty(Reflect,"has",{value(e,n){return n in e}}),typeof Reflect.ownKeys!="function"&&Object.defineProperty(Reflect,"ownKeys",{value(e){return[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)]}})}function Ua(e){const n=typeof Function.prototype.toString=="function"?Function.prototype.toString():null;return typeof n=="string"&&n.indexOf("[native code]")>=0?Function.prototype.toString.call(e).indexOf("[native code]")>=0:!1}function wh(){(typeof Array.prototype.reduce!="function"||!Ua(Array.prototype.reduce))&&hh(),(typeof Window!="function"||!Ua(Window))&&vh(),gh()}let ir=null,_n=!1;try{if(document.currentScript!==void 0&&document.currentScript!==null&&"src"in document.currentScript&&document.currentScript.src!==""){let e=document.currentScript.src;!e.endsWith(".js")&&!e.endsWith("/")&&(e+="/"),ir=new URL(".",e),_n=ir.protocol.includes("extension")}}catch{console.warn("Unable to get currentScript URL")}function Jd(e){var n;let t=(n=ir==null?void 0:ir.href)!==null&&n!==void 0?n:"";return!_n&&"publicPath"in e&&e.publicPath!==null&&e.publicPath!==void 0&&(t=e.publicPath),t!==""&&!t.endsWith("/")&&(t+="/"),t}async function yh(e,n){var t;wh();const r=(await Promise.all([ch(),mh(),fh(),ph(),dh()])).every(Boolean);r||console.log("Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module");try{__webpack_public_path__=Jd(e)}catch{}const{default:o,RuffleInstanceBuilder:i,ZipWriter:a}=await(r?hu(()=>import("./ruffle_web-wasm_extensions-DrtXfwJc.js"),__vite__mapDeps([0,1]),import.meta.url):hu(()=>import("./ruffle_web-BNM5rQS6.js"),__vite__mapDeps([2,1]),import.meta.url));let s;const l=r?new URL(""+new URL("ruffle_web-wasm_extensions_bg-B8okYby5.wasm",import.meta.url).href,import.meta.url):new URL(""+new URL("ruffle_web_bg-CygdLt0p.wasm",import.meta.url).href,import.meta.url),u=await fetch(l);if(n&&typeof ReadableStreamDefaultController=="function"){const p=((t=u==null?void 0:u.headers)===null||t===void 0?void 0:t.get("content-length"))||"";let m=0;const g=parseInt(p);s=new Response(new ReadableStream({async start(w){var b;const I=(b=u.body)===null||b===void 0?void 0:b.getReader();if(!I)throw"Response had no body";for(n(m,g);;){const{done:d,value:c}=await I.read();if(d)break;c!=null&&c.byteLength&&(m+=c==null?void 0:c.byteLength),w.enqueue(c),n(m,g)}w.close()}}),u)}else s=u;return await o(s),[i,a]}let Ui=null;async function kh(e,n){Ui===null&&(Ui=yh(e,n));const t=await Ui;return[new t[0],()=>new t[1]]}class si{constructor(n){this.value=n}valueOf(){return this.value}}class ne extends si{constructor(n="???"){super(n)}toString(n){return`{${this.value}}`}}class ln extends si{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.NumberFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),this.value.toString(10)}}}class ar extends si{constructor(n,t={}){super(n),this.opts=t}toString(n){try{return n.memoizeIntlObject(Intl.DateTimeFormat,this.opts).format(this.value)}catch(t){return n.reportError(t),new Date(this.value).toISOString()}}}const vu=100,bh="⁨",Sh="⁩";function Rh(e,n,t){if(t===n||t instanceof ln&&n instanceof ln&&t.value===n.value)return!0;if(n instanceof ln&&typeof t=="string"){let r=e.memoizeIntlObject(Intl.PluralRules,n.opts).select(n.value);if(t===r)return!0}return!1}function gu(e,n,t){return n[t]?jt(e,n[t].value):(e.reportError(new RangeError("No default")),new ne)}function qa(e,n){const t=[],r=Object.create(null);for(const o of n)o.type==="narg"?r[o.name]=zr(e,o.value):t.push(zr(e,o));return{positional:t,named:r}}function zr(e,n){switch(n.type){case"str":return n.value;case"num":return new ln(n.value,{minimumFractionDigits:n.precision});case"var":return xh(e,n);case"mesg":return zh(e,n);case"term":return Eh(e,n);case"func":return jh(e,n);case"select":return Ch(e,n);default:return new ne}}function xh(e,{name:n}){let t;if(e.params)if(Object.prototype.hasOwnProperty.call(e.params,n))t=e.params[n];else return new ne(`$${n}`);else if(e.args&&Object.prototype.hasOwnProperty.call(e.args,n))t=e.args[n];else return e.reportError(new ReferenceError(`Unknown variable: $${n}`)),new ne(`$${n}`);if(t instanceof si)return t;switch(typeof t){case"string":return t;case"number":return new ln(t);case"object":if(t instanceof Date)return new ar(t.getTime());default:return e.reportError(new TypeError(`Variable type not supported: $${n}, ${typeof t}`)),new ne(`$${n}`)}}function zh(e,{name:n,attr:t}){const r=e.bundle._messages.get(n);if(!r)return e.reportError(new ReferenceError(`Unknown message: ${n}`)),new ne(n);if(t){const o=r.attributes[t];return o?jt(e,o):(e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new ne(`${n}.${t}`))}return r.value?jt(e,r.value):(e.reportError(new ReferenceError(`No value: ${n}`)),new ne(n))}function Eh(e,{name:n,attr:t,args:r}){const o=`-${n}`,i=e.bundle._terms.get(o);if(!i)return e.reportError(new ReferenceError(`Unknown term: ${o}`)),new ne(o);if(t){const s=i.attributes[t];if(s){e.params=qa(e,r).named;const l=jt(e,s);return e.params=null,l}return e.reportError(new ReferenceError(`Unknown attribute: ${t}`)),new ne(`${o}.${t}`)}e.params=qa(e,r).named;const a=jt(e,i.value);return e.params=null,a}function jh(e,{name:n,args:t}){let r=e.bundle._functions[n];if(!r)return e.reportError(new ReferenceError(`Unknown function: ${n}()`)),new ne(`${n}()`);if(typeof r!="function")return e.reportError(new TypeError(`Function ${n}() is not callable`)),new ne(`${n}()`);try{let o=qa(e,t);return r(o.positional,o.named)}catch(o){return e.reportError(o),new ne(`${n}()`)}}function Ch(e,{selector:n,variants:t,star:r}){let o=zr(e,n);if(o instanceof ne)return gu(e,t,r);for(const i of t){const a=zr(e,i.key);if(Rh(e,o,a))return jt(e,i.value)}return gu(e,t,r)}function Kd(e,n){if(e.dirty.has(n))return e.reportError(new RangeError("Cyclic reference")),new ne;e.dirty.add(n);const t=[],r=e.bundle._useIsolating&&n.length>1;for(const o of n){if(typeof o=="string"){t.push(e.bundle._transform(o));continue}if(e.placeables++,e.placeables>vu)throw e.dirty.delete(n),new RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${vu}`);r&&t.push(bh),t.push(zr(e,o).toString(e)),r&&t.push(Sh)}return e.dirty.delete(n),t.join("")}function jt(e,n){return typeof n=="string"?e.bundle._transform(n):Kd(e,n)}class _h{constructor(n,t,r){this.dirty=new WeakSet,this.params=null,this.placeables=0,this.bundle=n,this.errors=t,this.args=r}reportError(n){if(!this.errors||!(n instanceof Error))throw n;this.errors.push(n)}memoizeIntlObject(n,t){let r=this.bundle._intls.get(n);r||(r={},this.bundle._intls.set(n,r));let o=JSON.stringify(t);return r[o]||(r[o]=new n(this.bundle.locales,t)),r[o]}}function Wo(e,n){const t=Object.create(null);for(const[r,o]of Object.entries(e))n.includes(r)&&(t[r]=o.valueOf());return t}const wu=["unitDisplay","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"];function Ph(e,n){let t=e[0];if(t instanceof ne)return new ne(`NUMBER(${t.valueOf()})`);if(t instanceof ln)return new ln(t.valueOf(),{...t.opts,...Wo(n,wu)});if(t instanceof ar)return new ln(t.valueOf(),{...Wo(n,wu)});throw new TypeError("Invalid argument to NUMBER")}const yu=["dateStyle","timeStyle","fractionalSecondDigits","dayPeriod","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"];function Fh(e,n){let t=e[0];if(t instanceof ne)return new ne(`DATETIME(${t.valueOf()})`);if(t instanceof ar)return new ar(t.valueOf(),{...t.opts,...Wo(n,yu)});if(t instanceof ln)return new ar(t.valueOf(),{...Wo(n,yu)});throw new TypeError("Invalid argument to DATETIME")}const ku=new Map;function Ah(e){const n=Array.isArray(e)?e.join(" "):e;let t=ku.get(n);return t===void 0&&(t=new Map,ku.set(n,t)),t}class Dh{constructor(n,{functions:t,useIsolating:r=!0,transform:o=i=>i}={}){this._terms=new Map,this._messages=new Map,this.locales=Array.isArray(n)?n:[n],this._functions={NUMBER:Ph,DATETIME:Fh,...t},this._useIsolating=r,this._transform=o,this._intls=Ah(n)}hasMessage(n){return this._messages.has(n)}getMessage(n){return this._messages.get(n)}addResource(n,{allowOverrides:t=!1}={}){const r=[];for(let o=0;o<n.body.length;o++){let i=n.body[o];if(i.id.startsWith("-")){if(t===!1&&this._terms.has(i.id)){r.push(new Error(`Attempt to override an existing term: "${i.id}"`));continue}this._terms.set(i.id,i)}else{if(t===!1&&this._messages.has(i.id)){r.push(new Error(`Attempt to override an existing message: "${i.id}"`));continue}this._messages.set(i.id,i)}}return r}formatPattern(n,t=null,r=null){if(typeof n=="string")return this._transform(n);let o=new _h(this,r,t);try{return Kd(o,n).toString(o)}catch(i){if(o.errors&&i instanceof Error)return o.errors.push(i),new ne().toString(o);throw i}}}const qi=/^(-?[a-zA-Z][\w-]*) *= */gm,bu=/\.([a-zA-Z][\w-]*) *= */y,Ih=/\*?\[/y,Bi=/(-?[0-9]+(?:\.([0-9]+))?)/y,Lh=/([a-zA-Z][\w-]*)/y,Su=/([$-])?([a-zA-Z][\w-]*)(?:\.([a-zA-Z][\w-]*))?/y,Oh=/^[A-Z][A-Z0-9_-]*$/,to=/([^{}\n\r]+)/y,Th=/([^\\"\n\r]*)/y,Ru=/\\([\\"])/y,xu=/\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{6})/y,Mh=/^\n+/,zu=/ +$/,Nh=/ *\r?\n/g,$h=/( *)$/,Wh=/{\s*/y,Eu=/\s*}/y,Uh=/\[\s*/y,qh=/\s*] */y,Bh=/\s*\(\s*/y,Vh=/\s*->\s*/y,Hh=/\s*:\s*/y,Jh=/\s*,?\s*/y,Kh=/\s+/y;class Qh{constructor(n){this.body=[],qi.lastIndex=0;let t=0;for(;;){let y=qi.exec(n);if(y===null)break;t=qi.lastIndex;try{this.body.push(l(y[1]))}catch(S){if(S instanceof SyntaxError)continue;throw S}}function r(y){return y.lastIndex=t,y.test(n)}function o(y,S){if(n[t]===y)return t++,!0;if(S)throw new S(`Expected ${y}`);return!1}function i(y,S){if(r(y))return t=y.lastIndex,!0;if(S)throw new S(`Expected ${y.toString()}`);return!1}function a(y){y.lastIndex=t;let S=y.exec(n);if(S===null)throw new SyntaxError(`Expected ${y.toString()}`);return t=y.lastIndex,S}function s(y){return a(y)[1]}function l(y){let S=h(),O=u();if(S===null&&Object.keys(O).length===0)throw new SyntaxError("Expected message value or attributes");return{id:y,value:S,attributes:O}}function u(){let y=Object.create(null);for(;r(bu);){let S=s(bu),O=h();if(O===null)throw new SyntaxError("Expected attribute value");y[S]=O}return y}function h(){let y;if(r(to)&&(y=s(to)),n[t]==="{"||n[t]==="}")return p(y?[y]:[],1/0);let S=C();return S?y?p([y,S],S.length):(S.value=x(S.value,Mh),p([S],S.length)):y?x(y,zu):null}function p(y=[],S){for(;;){if(r(to)){y.push(s(to));continue}if(n[t]==="{"){y.push(m());continue}if(n[t]==="}")throw new SyntaxError("Unbalanced closing brace");let Ee=C();if(Ee){y.push(Ee),S=Math.min(S,Ee.length);continue}break}let O=y.length-1,ze=y[O];typeof ze=="string"&&(y[O]=x(ze,zu));let $e=[];for(let Ee of y)Ee instanceof ju&&(Ee=Ee.value.slice(0,Ee.value.length-S)),Ee&&$e.push(Ee);return $e}function m(){i(Wh,SyntaxError);let y=g();if(i(Eu))return y;if(i(Vh)){let S=I();return i(Eu,SyntaxError),{type:"select",selector:y,...S}}throw new SyntaxError("Unclosed placeable")}function g(){if(n[t]==="{")return m();if(r(Su)){let[,y,S,O=null]=a(Su);if(y==="$")return{type:"var",name:S};if(i(Bh)){let ze=w();if(y==="-")return{type:"term",name:S,attr:O,args:ze};if(Oh.test(S))return{type:"func",name:S,args:ze};throw new SyntaxError("Function names must be all upper-case")}return y==="-"?{type:"term",name:S,attr:O,args:[]}:{type:"mesg",name:S,attr:O}}return c()}function w(){let y=[];for(;;){switch(n[t]){case")":return t++,y;case void 0:throw new SyntaxError("Unclosed argument list")}y.push(b()),i(Jh)}}function b(){let y=g();return y.type!=="mesg"?y:i(Hh)?{type:"narg",name:y.name,value:c()}:y}function I(){let y=[],S=0,O;for(;r(Ih);){o("*")&&(O=S);let ze=d(),$e=h();if($e===null)throw new SyntaxError("Expected variant value");y[S++]={key:ze,value:$e}}if(S===0)return null;if(O===void 0)throw new SyntaxError("Expected default variant");return{variants:y,star:O}}function d(){i(Uh,SyntaxError);let y;return r(Bi)?y=f():y={type:"str",value:s(Lh)},i(qh,SyntaxError),y}function c(){if(r(Bi))return f();if(n[t]==='"')return v();throw new SyntaxError("Invalid expression")}function f(){let[,y,S=""]=a(Bi),O=S.length;return{type:"num",value:parseFloat(y),precision:O}}function v(){o('"',SyntaxError);let y="";for(;;){if(y+=s(Th),n[t]==="\\"){y+=R();continue}if(o('"'))return{type:"str",value:y};throw new SyntaxError("Unclosed string literal")}}function R(){if(r(Ru))return s(Ru);if(r(xu)){let[,y,S]=a(xu),O=parseInt(y||S,16);return O<=55295||57344<=O?String.fromCodePoint(O):"�"}throw new SyntaxError("Unknown escape sequence")}function C(){let y=t;switch(i(Kh),n[t]){case".":case"[":case"*":case"}":case void 0:return!1;case"{":return z(n.slice(y,t))}return n[t-1]===" "?z(n.slice(y,t)):!1}function x(y,S){return y.replace(S,"")}function z(y){let S=y.replace(Nh,`
`),O=$h.exec(y)[1].length;return new ju(S,O)}}}class ju{constructor(n,t){this.value=n,this.length=t}}const Zh="([a-z]{2,3}|\\*)",Gh="(?:-([a-z]{4}|\\*))",Yh="(?:-([a-z]{2}|\\*))",Xh="(?:-(([0-9][a-z0-9]{3}|[a-z0-9]{5,8})|\\*))",ev=new RegExp(`^${Zh}${Gh}?${Yh}?${Xh}?$`,"i");class lr{constructor(n){const t=ev.exec(n.replace(/_/g,"-"));if(!t){this.isWellFormed=!1;return}let[,r,o,i,a]=t;r&&(this.language=r.toLowerCase()),o&&(this.script=o[0].toUpperCase()+o.slice(1)),i&&(this.region=i.toUpperCase()),this.variant=a,this.isWellFormed=!0}isEqual(n){return this.language===n.language&&this.script===n.script&&this.region===n.region&&this.variant===n.variant}matches(n,t=!1,r=!1){return(this.language===n.language||t&&this.language===void 0||r&&n.language===void 0)&&(this.script===n.script||t&&this.script===void 0||r&&n.script===void 0)&&(this.region===n.region||t&&this.region===void 0||r&&n.region===void 0)&&(this.variant===n.variant||t&&this.variant===void 0||r&&n.variant===void 0)}toString(){return[this.language,this.script,this.region,this.variant].filter(n=>n!==void 0).join("-")}clearVariants(){this.variant=void 0}clearRegion(){this.region=void 0}addLikelySubtags(){const n=tv(this.toString().toLowerCase());return n?(this.language=n.language,this.script=n.script,this.region=n.region,this.variant=n.variant,!0):!1}}const Cu={ar:"ar-arab-eg","az-arab":"az-arab-ir","az-ir":"az-arab-ir",be:"be-cyrl-by",da:"da-latn-dk",el:"el-grek-gr",en:"en-latn-us",fa:"fa-arab-ir",ja:"ja-jpan-jp",ko:"ko-kore-kr",pt:"pt-latn-br",sr:"sr-cyrl-rs","sr-ru":"sr-latn-ru",sv:"sv-latn-se",ta:"ta-taml-in",uk:"uk-cyrl-ua",zh:"zh-hans-cn","zh-hant":"zh-hant-tw","zh-hk":"zh-hant-hk","zh-mo":"zh-hant-mo","zh-tw":"zh-hant-tw","zh-gb":"zh-hant-gb","zh-us":"zh-hant-us"},nv=["az","bg","cs","de","es","fi","fr","hu","it","lt","lv","nl","pl","ro","ru"];function tv(e){if(Object.prototype.hasOwnProperty.call(Cu,e))return new lr(Cu[e]);const n=new lr(e);return n.language&&nv.includes(n.language)?(n.region=n.language.toUpperCase(),n):null}function rv(e,n,t){const r=new Set,o=new Map;for(let i of n)new lr(i).isWellFormed&&o.set(i,new lr(i));e:for(const i of e){const a=i.toLowerCase(),s=new lr(a);if(s.language!==void 0){for(const l of o.keys())if(a===l.toLowerCase()){if(r.add(l),o.delete(l),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}for(const[l,u]of o.entries())if(u.matches(s,!0,!1)){if(r.add(l),o.delete(l),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(s.addLikelySubtags()){for(const[l,u]of o.entries())if(u.matches(s,!0,!1)){if(r.add(l),o.delete(l),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}s.clearVariants();for(const[l,u]of o.entries())if(u.matches(s,!0,!0)){if(r.add(l),o.delete(l),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}if(s.clearRegion(),s.addLikelySubtags()){for(const[l,u]of o.entries())if(u.matches(s,!0,!1)){if(r.add(l),o.delete(l),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}s.clearRegion();for(const[l,u]of o.entries())if(u.matches(s,!0,!0)){if(r.add(l),o.delete(l),t==="lookup")return Array.from(r);if(t==="filtering")continue;continue e}}}return Array.from(r)}function ov(e,n,{strategy:t="filtering",defaultLocale:r}={}){const o=rv(Array.from(e??[]).map(String),Array.from(n??[]).map(String),t);if(t==="lookup"){if(r===void 0)throw new Error("defaultLocale cannot be undefined for strategy `lookup`");o.length===0&&o.push(r)}else r&&!o.includes(r)&&o.push(r);return o}const iv={"ar-SA":{"context_menu.ftl":`context-menu-download-swf = تحميل .swf
context-menu-copy-debug-info = نسخ معلومات التصحيح
context-menu-open-save-manager = فتح مدير الحفظ
context-menu-about-ruffle =
    { $flavor ->
        [extension] حول ملحق Ruffle ({ $version })
       *[other] حول Ruffle ({ $version })
    }
context-menu-hide = إخفاء هذه القائمة
context-menu-exit-fullscreen = الخروج من وضعية الشاشة الكاملة
context-menu-enter-fullscreen = تفعيل وضعية الشاشة الكاملة
context-menu-volume-controls = التحكم بالصوت
`,"messages.ftl":`message-cant-embed =
    لم يكن Ruffle قادر على تشغيل الفلاش المضمنة في هذه الصفحة.
    يمكنك محاولة فتح الملف في علامة تبويب منفصلة لتجاوز هذه المشكلة.
panic-title = لقد حدث خطأ ما :(
more-info = معلومات أكثر
run-anyway = التشغيل على أي حال
continue = الاستمرار
report-bug = إبلاغ عن خلل
update-ruffle = تحديث رفل
ruffle-demo = ويب التجريبي
ruffle-desktop = برنامج سطح المكتب
ruffle-wiki = عرض ويكي Ruffle
enable-hardware-acceleration = يبدو أن تسارع الأجهزة غير مفعل. بينما قد يعمل Ruffle، قد يكون بطيئاً بشكل غير معقول. يمكنك معرفة كيفية تمكين تسارع الأجهزة من خلال متابعة هذا الرابط.
view-error-details = عرض تفاصيل الخطأ
open-in-new-tab = فتح في علامة تبويب جديدة
click-to-unmute = انقر لإلغاء الكتم
error-file-protocol =
    يبدو أنك تقوم بتشغيل Ruffle على بروتوكول "الملف:".
    هذا لن يعمل لأن المتصفحات تمنع العديد من الميزات من العمل لأسباب أمنية.
    بدلاً من ذلك، ندعوك إلى إعداد خادم محلي أو استخدام عرض الويب أو تطبيق سطح المكتب.
error-javascript-config =
    تعرض Ruffle إلى مشكلة كبيرة بسبب الإعدادات الخاطئة للجافا سكريبت.
    إذا كنت مسؤول الخادم، نحن ندعوك إلى التحقق من تفاصيل الخطأ لمعرفة سبب المشكلة.
    يمكنك أيضا الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-wasm-not-found =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى التأكد من أن الملف قد تم تحميله بشكل صحيح.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام إعدادات "المسار العام": الرجاء مراجعة ويكي Ruffle للحصول على المساعدة.
error-wasm-mime-type =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    خادم الويب هذا لا يخدم ملفات ". wasm" مع نوع MIME الصحيح.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.
error-invalid-swf =
    لا يمكن لـ Ruffle تحليل الملف المطلوب.
    السبب الأكثر إحتمالاً هو أن الملف المطلوب ليس صالحا.
error-swf-fetch =
    فشل Ruffle في تحميل ملف فلاش SWF.
    السبب الأكثر احتمالاً هو أن الملف لم يعد موجود، لذلك لا يوجد شيء ليحمله رفل.
    حاول الاتصال بمسؤول الموقع للحصول على المساعدة.
error-swf-cors =
    فشل Ruffle في تحميل ملف فلاش SWF.
    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-cors =
    فشل Ruffle في تحميل مكون ملف ".wasm" المطلوب.
    من المحتمل أن تم حظر إحضار الملف بواسطة سياسة CORS.
    إذا كنت مسؤول الخادم، يرجى مراجعة رفل ويكي للحصول على المساعدة.
error-wasm-invalid =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تحتوي على ملفات مفقودة أو غير صالحة لتشغيل Ruffle.
    إذا كنت مسؤول الخادم، يرجى مراجعة ويكي Ruffle للحصول على المساعدة.
error-wasm-download =
    واجه Ruffle مشكلة كبيرة أثناء محاولتها التهيئة.
    هذا يمكن أن يحل نفسه في كثير من الأحيان، لذلك يمكنك محاولة إعادة تحميل الصفحة.
    وإلا يرجى الاتصال بمدير الموقع.
error-wasm-disabled-on-edge =
    فشل Ruffle في تحميل مكون الملف ".wasm" المطلوب.
    لإصلاح هذه المشكلة، حاول فتح إعدادات المتصفح الخاص بك، انقر فوق "الخصوصية، البحث، الخدمات"، والتمرير لأسفل، وإيقاف "تعزيز أمانك على الويب".
    هذا سيسمح للمتصفح الخاص بك بتحميل الملفات ".wasm" المطلوبة.
    إذا استمرت المشكلة، قد تحتاج إلى استخدام متصفح أخر.
error-javascript-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    يبدو أن هذه الصفحة تستخدم كود JavaScript الذي يتعارض مع Ruffle.
    إذا كنت مسؤول الخادم، فإننا ندعوك إلى محاولة تحميل الملف على صفحة فارغة.
error-javascript-conflict-outdated = يمكنك أيضًا محاولة تحميل نسخة أحدث من رفل التي قد تحل المشكلة (النسخة الحالية قديمة: { $buildDate }).
error-csp-conflict =
    واجه Ruffle مشكلة كبيرة أثناء محاولة التهيئة.
    لا تسمح سياسة أمان المحتوى لخادم الويب هذا بتشغيل مكون ".wasm" المطلوب.
    إذا كنت مسؤول الخادم، يرجى الرجوع إلى ويكي Ruffle للحصول على المساعدة.
error-unknown =
    واجه Ruffle مشكلة كبيرة أثناء محاولة عرض محتوى الفلاش هذا.
    { $outdated ->
        [true] إذا كنت مسؤول الخادم، الرجاء محاولة تحميل إصدار أحدث من Ruffle (النسخة الحالية قديمة: { $buildDate }).
       *[false] ليس من المفترض أن يحدث هذا، لذلك نحن نقدر حقًا إذا قمت بالتبليغ عن الخطأ!
    }
`,"save-manager.ftl":`save-delete-prompt = هل أنت متأكد أنك تريد حذف ملف الحفظ هذا؟
save-reload-prompt =
    الطريقة الوحيدة لـ { $action ->
        [delete] حذف
       *[replace] استبدال
    } هذا الملف الحفظ دون تعارض محتمل هي لإعادة تحميل هذا المحتوى. هل ترغب في المتابعة على أي حال؟
save-download = تحميل
save-replace = استبدال
save-delete = حذف
save-backup-all = تحميل جميع ملفات الحفظ
`,"volume-controls.ftl":`volume-controls = التحكم بالصوت
volume-controls-mute = كتم
volume-controls-volume = مستوى الصوت
`},"ca-ES":{"context_menu.ftl":`context-menu-download-swf = Baixa el fitxer .swf
context-menu-copy-debug-info = Copia la informació de depuració
context-menu-open-save-manager = Obre el gestor d'emmagatzematge
context-menu-about-ruffle =
    { $flavor ->
        [extension] Quant a l'extensió de Ruffle ({ $version })
       *[other] Quant a Ruffle ({ $version })
    }
context-menu-hide = Amaga aquest menú
context-menu-exit-fullscreen = Surt de la pantalla completa
context-menu-enter-fullscreen = Pantalla completa
context-menu-volume-controls = Controls de volum
`,"messages.ftl":`message-cant-embed =
    Ruffle no ha pogut executar el contingut Flash incrustat en aquesta pàgina.
    Podeu provar d'obrir el fitxer en una pestanya a part per evitar aquest problema.
panic-title = Alguna cosa ha fallat :(
more-info = Més informació
run-anyway = Reprodueix igualment
continue = Continua
report-bug = Informa d'un error
update-ruffle = Actualitza Ruffle
ruffle-demo = Demostració web
ruffle-desktop = Aplicació d'escriptori
ruffle-wiki = Obre la wiki de Ruffle
enable-hardware-acceleration = Sembla que l'acceleració per maquinari no està activada. Tot i que Ruffle podria funcionar, és probable que ho faci molt lentament. Pots trobar informació sobre com activar l'acceleració per maquinari al següent enllaç.
view-error-details = Mostra detalls de l'error
open-in-new-tab = Obre en una pestanya nova
click-to-unmute = Feu clic per activar el so
error-file-protocol =
    Sembla que esteu executant Ruffle al protocol "file:".
    Això no funcionarà perquè els navegadors bloquegen moltes característiques per raons de seguretat. En comptes d'això, us suggerim que configureu un servidor local o bé utilitzeu la demostració web o l'aplicació d'escriptori.
error-javascript-config =
    Ruffle ha topat amb un problema greu a causa d'una configuració JavaScript errònia.
    Si sou l'administrador del servidor, us suggerim que comproveu els detalls de l'error per determinar el paràmetre culpable.
    També podeu consultar la wiki del Ruffle per obtenir ajuda.
error-wasm-not-found =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Si sou l'administrador del servidor, si us plau, comproveu que el fitxer ha estat carregat correctament.
    Si el problema continua, és possible que hàgiu d'utilitzar el parámetre "publicPath": us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-mime-type =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Aquest servidor no està servint els fitxers ".wasm" amb el tipus MIME adequat.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-invalid-swf =
    Ruffle no ha pogut llegir el fitxer sol·licitat.
    La raó més probable és que no sigui un fitxer SWF vàlid.
error-swf-fetch =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    La raó més probable és que el fitxer ja no existeixi, així que no hi ha res que el Ruffle pugui carregar.
    Proveu de contactar a l'administrador del lloc per obtenir ajuda.
error-swf-cors =
    Ruffle no ha pogut carregar el fitxer SWF Flash.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-cors =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    És probable que l'accés a la càrrega hagi estat denegat per una política CORS.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki del Ruffle per obtenir ajuda.
error-wasm-invalid =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que a aquest lloc li manquen fitxers o aquests no són vàlids per a l'execució de Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-wasm-download =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Això sovint això pot resoldre's sol, així que podeu provar de recarregar la pàgina.
    En cas contrari, us preguem que contacteu l'administrador del lloc.
error-wasm-disabled-on-edge =
    Ruffle no ha pogut carregar el component de fitxer ".wasm" necessari.
    Per a arreglar-ho, proveu d'obrir els paràmetres del navegador, feu clic sobre "Privadesa, cerca i serveis", i desactiveu "Prevenció de seguiment".
    Això permetrà que el vostre navegador carregui els fitxers ".wasm" necessaris.
    Si el problema continua, possiblement haureu d'utilitzar un altre navegador.
error-javascript-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    Sembla que aquest lloc fa servir codi JavaScript que entra en conflicte amb Ruffle.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-javascript-conflict-outdated = També podeu provar de carregar una versió més recent de Ruffle que podria resoldre el problema (la compilació actual està desactualitzada: { $buildDate }).
error-csp-conflict =
    Ruffle ha topat amb un problema greu mentre provava d'inicialitzar-se.
    La política de seguretat del contingut (CSP) no permet l'execució del component ".wasm" necessari.
    Si sou l'administrador del servidor, us preguem que consulteu la wiki de Ruffle per obtenir ajuda.
error-unknown =
    Ruffle ha topat amb un problema greu mentre provava de mostrar aquest contingut Flash.
    { $outdated ->
        [true] Si sou l'administrador del servidor, us preguem que proveu de carregar una versió més recent de Ruffle (la compilació actual està desactualitzada: { $buildDate }).
       *[false] Això no hauria d'haver passat, així que us agrairíem molt que n'informéssiu l'error!
    }
`,"save-manager.ftl":`save-delete-prompt = Segur que vols esborrar aquest fitxer desat?
save-reload-prompt =
    L'única forma d{ $action ->
        [delete] 'eliminar
       *[replace] e substituir
    } aquest fitxer desat sense crear un potencial conflicte és recarregant el contingut. Voleu continuar igualment?
save-download = Baixa
save-replace = Substitueix
save-delete = Elimina
save-backup-all = Baixa tots els fitxers desats
`,"volume-controls.ftl":`volume-controls = Controls de volum
volume-controls-mute = Silenci
volume-controls-volume = Volum
`},"cs-CZ":{"context_menu.ftl":`context-menu-download-swf = Stáhnout .swf
context-menu-copy-debug-info = Zkopírovat debug info
context-menu-open-save-manager = Otevřít správce uložení
context-menu-about-ruffle =
    { $flavor ->
         [extension] O Ruffle rozšíření ({ $version })
        *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skrýt menu
context-menu-exit-fullscreen = Ukončit režim celé obrazovky
context-menu-enter-fullscreen = Přejít do režimu celé obrazovky
context-menu-volume-controls = Ovládání hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohl spustit Flash vložený na této stránce.
    Můžete se pokusit otevřít soubor na samostatné kartě, abyste se vyhnuli tomuto problému.
panic-title = Něco se pokazilo :(
more-info = Další informace
run-anyway = Přesto spustit
continue = Pokračovat
report-bug = Nahlásit chybu
update-ruffle = Aktualizovat Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikace
ruffle-wiki = Zobrazit Ruffle Wiki
enable-hardware-acceleration = Zdá se, že hardwarová akcelerace není povolena. I když Ruffle funguje správně, může být nepřiměřeně pomalý. Jak povolit hardwarovou akceleraci zjistíte na tomto odkazu.
view-error-details = Zobrazit podrobnosti o chybě
open-in-new-tab = Otevřít na nové kartě
click-to-unmute = Kliknutím zrušíte ztlumení
error-file-protocol =
    Zdá se, že používáte Ruffle na protokolu "file:".
    To není možné, protože prohlížeče blokují fungování mnoha funkcí z bezpečnostních důvodů.
    Namísto toho vám doporučujeme nastavit lokální server nebo použít web demo či desktopovou aplikaci.
error-javascript-config =
    Ruffle narazil na problém v důsledku nesprávné konfigurace JavaScriptu.
    Pokud jste správcem serveru, doporučujeme vám zkontrolovat podrobnosti o chybě, abyste zjistili, který parametr je vadný.
    Pomoc můžete získat také na wiki Ruffle.
error-wasm-not-found =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Pokud jste správcem serveru, zkontrolujte, zda byl soubor správně nahrán.
    Pokud problém přetrvává, možná budete muset použít nastavení „publicPath“: pomoc naleznete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém při pokusu o inicializaci.
    Tento webový server neposkytuje soubory „.wasm“ se správným typem MIME.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemůže zpracovat požadovaný soubor.
    Nejpravděpodobnějším důvodem je, že požadovaný soubor není platným souborem SWF.
error-swf-fetch =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Nejpravděpodobnějším důvodem je, že soubor již neexistuje, takže Ruffle nemá co načíst.
    Zkuste požádat o pomoc správce webu.
error-swf-cors =
    Ruffle se nepodařilo načíst SWF soubor Flash.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-cors =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Přístup k načítání byl pravděpodobně zablokován politikou CORS.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že na této stránce chybí nebo jsou neplatné soubory ke spuštění Ruffle.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém při pokusu o inicializaci.
    Problém se může vyřešit i sám, takže můžete zkusit stránku načíst znovu.
    V opačném případě kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle se nepodařilo načíst požadovanou komponentu souboru „.wasm“.
    Chcete-li tento problém vyřešit, zkuste otevřít nastavení prohlížeče, klikněte na položku „Ochrana osobních údajů, vyhledávání a služby“, přejděte dolů a vypněte možnost „Zvyšte svou bezpečnost na webu“.
    Vašemu prohlížeči to umožní načíst požadované soubory „.wasm“.
    Pokud problém přetrvává, budete možná muset použít jiný prohlížeč.
error-javascript-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zdá se, že tato stránka používá kód JavaScript, který je v konfliktu s Ruffle.
    Pokud jste správcem serveru, doporučujeme vám zkusit načíst soubor na prázdnou stránku.
error-javascript-conflict-outdated = Můžete se také pokusit nahrát novější verzi Ruffle, která může daný problém vyřešit (aktuální build je zastaralý: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém při pokusu o inicializaci.
    Zásady zabezpečení obsahu tohoto webového serveru nepovolují spuštění požadované komponenty „.wasm“.
    Pokud jste správcem serveru, nápovědu najdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém při pokusu zobrazit tento Flash obsah.
    { $outdated ->
          [true] Pokud jste správcem serveru, zkuste nahrát novější verzi Ruffle (aktuální build je zastaralý: { $buildDate }).
         *[false] Toto by se nemělo stát, takže bychom opravdu ocenili, kdybyste mohli nahlásit chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Opravdu chcete odstranit tento soubor s uloženými pozicemi?
save-reload-prompt =
    Jediný způsob, jak { $action ->
          [delete] vymazat
         *[replace] nahradit
    } tento soubor s uloženými pozicemi bez potenciálního konfliktu je opětovné načtení tohoto obsahu. Chcete přesto pokračovat?
save-download = Stáhnout
save-replace = Nahradit
save-delete = Vymazat
save-backup-all = Stáhnout všechny soubory s uloženými pozicemi
`,"volume-controls.ftl":`volume-controls = Ovládání hlasitosti
volume-controls-mute = Ztlumit
volume-controls-volume = Hlasitost
`},"de-DE":{"context_menu.ftl":`context-menu-download-swf = .swf herunterladen
context-menu-copy-debug-info = Debug-Info kopieren
context-menu-open-save-manager = Dateimanager öffnen
context-menu-about-ruffle =
    { $flavor ->
        [extension] Über Ruffle Erweiterung ({ $version })
       *[other] Über Ruffle ({ $version })
    }
context-menu-hide = Menü ausblenden
context-menu-exit-fullscreen = Vollbild verlassen
context-menu-enter-fullscreen = Vollbildmodus aktivieren
context-menu-volume-controls = Lautstärke einstellen
`,"messages.ftl":`message-cant-embed =
    Ruffle konnte den Flash in dieser Seite nicht ausführen.
    Du kannst versuchen, die Datei in einem separaten Tab zu öffnen, um dieses Problem zu umgehen.
panic-title = Etwas ist schief gelaufen
more-info = Weitere Informationen
run-anyway = Trotzdem ausführen
continue = Fortfahren
report-bug = Fehler melden
update-ruffle = Ruffle aktuallisieren
ruffle-demo = Web-Demo
ruffle-desktop = Desktop-Anwendung
ruffle-wiki = Ruffle-Wiki anzeigen
enable-hardware-acceleration = Es scheint, als wäre die Hardwarebeschleunigung nicht aktiv. Zwar wird Ruffle funktionieren, jedoch unnötig langsam. Über den Link kannst du erfahren, wie man die Hardwarebeschleunigung aktiviert.
view-error-details = Fehlerdetails anzeigen
open-in-new-tab = In einem neuen Tab öffnen
click-to-unmute = Klicke zum Entmuten
error-file-protocol =
    Es scheint, dass Sie Ruffle auf dem "file:"-Protokoll ausführen.
    Jedoch werden aus Sicherheitsgründen viele Funktionen vom Browser blockiert, weswegen die Datei nicht geladen werden kann.
    Setzen Sie stattdessen einen lokalen Server auf, verwenden Sie die Webdemo oder die Desktop-Anwendung.
error-javascript-config =
    Ruffle ist aufgrund einer falschen JavaScript-Konfiguration auf ein Problem gestoßen.
    Wenn du der Server-Administrator bist, laden wir dich ein, die Fehlerdetails zu überprüfen, um herauszufinden, welcher Parameter fehlerhaft ist.
    Sie können auch das Ruffle-Wiki für Hilfe konsultieren.
error-wasm-not-found =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Wenn Sie der Server-Administrator sind, stellen Sie bitte sicher, dass die Datei korrekt hochgeladen wurde.
    Wenn das Problem weiterhin besteht, müssen Sie unter Umständen die "publicPath"-Einstellung verwenden: Bitte konsultieren Sie das Ruffle-Wiki für Hilfe.
error-wasm-mime-type =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-invalid-swf =
    Ruffle konnte die angegebene Datei nicht lesen.
    Am wahrscheinlichsten ist die angegebene Datei keine gültige SWF.
error-swf-fetch =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der wahrscheinlichste Grund ist, dass die Datei nicht mehr existiert, so dass Ruffle nicht geladen werden kann.
    Kontaktieren Sie den Website-Administrator für Hilfe.
error-swf-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-cors =
    Ruffle konnte die Flash-SWF-Datei nicht laden.
    Der Zugriff auf den Abruf wurde wahrscheinlich durch die CORS-Richtlinie blockiert.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-invalid =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-wasm-download =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dies kann sich oft selbst beheben, so dass Sie versuchen können, die Seite neu zu laden.
    Andernfalls kontaktieren Sie bitte den Website-Administrator.
error-wasm-disabled-on-edge =
    Ruffle konnte die erforderliche ".wasm"-Datei-Komponente nicht laden.
    Um dies zu beheben, versuche die Einstellungen deines Browsers zu öffnen, klicke auf "Privatsphäre, Suche und Dienste", scrollen nach unten und schalte "Verbessere deine Sicherheit im Web" aus.
    Dies erlaubt Ihrem Browser die erforderlichen ".wasm"-Dateien zu laden.
    Wenn das Problem weiterhin besteht, müssen Sie möglicherweise einen anderen Browser verwenden.
error-javascript-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Es scheint, als ob diese Seite JavaScript-Code verwendet, der mit Ruffle kollidiert.
    Wenn Sie der Server-Administrator sind, laden wir Sie ein, die Datei auf einer leeren Seite zu laden.
error-javascript-conflict-outdated = Du kannst auch versuchen, eine neuere Version von Ruffle hochzuladen, die das Problem umgehen könnte (aktuelle Version ist veraltet: { $buildDate }).
error-csp-conflict =
    Ruffle ist auf ein Fehler beim Initialisieren gestoßen.
    Dieser Webserver dient nicht ". asm"-Dateien mit dem korrekten MIME-Typ.
    Wenn Sie der Server-Administrator sind, konsultieren Sie bitte das Ruffle-Wiki für Hilfe.
error-unknown =
    Bei dem Versuch, diesen Flash-Inhalt anzuzeigen, ist Ruffle auf ein großes Problem gestoßen.
    { $outdated ->
        [true] Wenn Sie der Server-Administrator sind, Bitte versuchen Sie, eine neuere Version von Ruffle hochzuladen (aktuelle Version ist veraltet: { $buildDate }).
       *[false] Dies soll nicht passieren, deshalb würden wir uns sehr darüber freuen, wenn Sie einen Fehler melden könnten!
    }
`,"save-manager.ftl":`save-delete-prompt = Sind Sie sicher, dass Sie diese Speicherdatei löschen möchten?
save-reload-prompt =
    Der einzige Weg zu { $action ->
        [delete] löschen
       *[replace] ersetzen
    } diese Speicherdatei ohne möglichen Konflikt ist das erneute Laden dieses Inhalts. Möchten Sie trotzdem fortfahren?
save-download = Herunterladen
save-replace = Ersetzen
save-delete = Löschen
save-backup-all = Alle gespeicherten Dateien herunterladen
`,"volume-controls.ftl":`volume-controls = Lautstärkeeinstellungen
volume-controls-mute = Stummschalten
volume-controls-volume = Lautstärke
`},"en-US":{"context_menu.ftl":`context-menu-download-swf = Download .swf
context-menu-copy-debug-info = Copy debug info
context-menu-open-save-manager = Open Save Manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] About Ruffle Extension ({$version})
        *[other] About Ruffle ({$version})
    }
context-menu-hide = Hide this menu
context-menu-exit-fullscreen = Exit fullscreen
context-menu-enter-fullscreen = Enter fullscreen
context-menu-volume-controls = Volume controls
`,"messages.ftl":`message-cant-embed =
    Ruffle wasn't able to run the Flash embedded in this page.
    You can try to open the file in a separate tab, to sidestep this issue.
panic-title = Something went wrong :(
more-info = More info
run-anyway = Run anyway
continue = Continue
report-bug = Report Bug
update-ruffle = Update Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktop Application
ruffle-wiki = View Ruffle Wiki
enable-hardware-acceleration = It looks like hardware acceleration is not enabled. While Ruffle may work, it could be unreasonably slow. You can find out how to enable hardware acceleration by following this link.
view-error-details = View Error Details
open-in-new-tab = Open in a new tab
click-to-unmute = Click to unmute
error-file-protocol =
    It appears you are running Ruffle on the "file:" protocol.
    This doesn't work as browsers block many features from working for security reasons.
    Instead, we invite you to setup a local server or either use the web demo or the desktop application.
error-javascript-config =
    Ruffle has encountered a major issue due to an incorrect JavaScript configuration.
    If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.
    You can also consult the Ruffle wiki for help.
error-wasm-not-found =
    Ruffle failed to load the required ".wasm" file component.
    If you are the server administrator, please ensure the file has correctly been uploaded.
    If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.
error-wasm-mime-type =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server is not serving ".wasm" files with the correct MIME type.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-invalid-swf =
    Ruffle cannot parse the requested file.
    The most likely reason is that the requested file is not a valid SWF.
error-swf-fetch =
    Ruffle failed to load the Flash SWF file.
    The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.
    Try contacting the website administrator for help.
error-swf-cors =
    Ruffle failed to load the Flash SWF file.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-cors =
    Ruffle failed to load the required ".wasm" file component.
    Access to fetch has likely been blocked by CORS policy.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-invalid =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page has missing or invalid files for running Ruffle.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-wasm-download =
    Ruffle has encountered a major issue whilst trying to initialize.
    This can often resolve itself, so you can try reloading the page.
    Otherwise, please contact the website administrator.
error-wasm-disabled-on-edge =
    Ruffle failed to load the required ".wasm" file component.
    To fix this, try opening your browser's settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".
    This will allow your browser to load the required ".wasm" files.
    If the issue persists, you might have to use a different browser.
error-javascript-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    It seems like this page uses JavaScript code that conflicts with Ruffle.
    If you are the server administrator, we invite you to try loading the file on a blank page.
error-javascript-conflict-outdated = You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: {$buildDate}).
error-csp-conflict =
    Ruffle has encountered a major issue whilst trying to initialize.
    This web server's Content Security Policy does not allow the required ".wasm" component to run.
    If you are the server administrator, please consult the Ruffle wiki for help.
error-unknown =
    Ruffle has encountered a major issue whilst trying to display this Flash content.
    {$outdated ->
        [true] If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: {$buildDate}).
        *[false] This isn't supposed to happen, so we'd really appreciate if you could file a bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Are you sure you want to delete this save file?
save-reload-prompt =
    The only way to {$action ->
    [delete] delete
    *[replace] replace
    } this save file without potential conflict is to reload this content. Do you wish to continue anyway?
save-download = Download
save-replace = Replace
save-delete = Delete
save-backup-all = Download all save files`,"volume-controls.ftl":`volume-controls = Volume controls
volume-controls-mute = Mute
volume-controls-volume = Volume
`},"es-ES":{"context_menu.ftl":`context-menu-download-swf = Descargar .swf
context-menu-copy-debug-info = Copiar Información de depuración
context-menu-open-save-manager = Abrir gestor de guardado
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre la extensión de Ruffle ({ $version })
       *[other] Sobre Ruffle ({ $version })
    }
context-menu-hide = Ocultar este menú
context-menu-exit-fullscreen = Salir de pantalla completa
context-menu-enter-fullscreen = Entrar a pantalla completa
context-menu-volume-controls = Controles de volumen
`,"messages.ftl":`message-cant-embed =
    Ruffle no pudo ejecutar el Flash incrustado en esta página.
    Puedes intentar abrir el archivo en una pestaña aparte, para evitar este problema.
panic-title = Algo salió mal :(
more-info = Más info
run-anyway = Ejecutar de todos modos
continue = Continuar
report-bug = Reportar un Error
update-ruffle = Actualizar Ruffle
ruffle-demo = Demostración de web
ruffle-desktop = Aplicación de Desktop
ruffle-wiki = Ver la página wiki
enable-hardware-acceleration = Al parecer, la aceleración de hardware no esta habilitada. Puede que Ruffle funcione, pero será extremadamente lento. Puedes averiguar como habilitar la aceleración de hardware al entrar al enlace.
view-error-details = Ver los detalles del error
open-in-new-tab = Abrir en una pestaña nueva
click-to-unmute = Haz clic para dejar de silenciar
error-file-protocol =
    Parece que está ejecutando Ruffle en el protocolo "archivo:".
    Esto no funciona porque los navegadores bloquean que muchas características funcionen por razones de seguridad.
    En su lugar, le invitamos a configurar un servidor local o bien usar la demostración web o la aplicación de desktop.
error-javascript-config =
    Ruffle ha encontrado un problema crítico debido a una configuración JavaScript incorrecta.
    Si usted es el administrador del servidor, le invitamos a comprobar los detalles del error para averiguar qué parámetro está en falta.
    También puedes consultar la wiki de Ruffle para obtener ayuda.
error-wasm-not-found =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Si usted es el administrador del servidor, asegúrese de que el archivo ha sido subido correctamente.
    Si el problema persiste, puede que necesite usar la configuración "publicPath": por favor consulte la wiki de Ruffle para obtener ayuda.
error-wasm-mime-type =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo MIME correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-invalid-swf = Ruffle no puede analizar el archivo solicitado. La razón más probable es que no es un archivo válido SWF.
error-swf-fetch =
    Ruffle no pudo cargar el archivo Flash SWF.
    La razón más probable es que el archivo ya no existe, así que no hay nada para cargar Ruffle.
    Intente ponerse en contacto con el administrador del sitio web para obtener ayuda.
error-swf-cors =
    Ruffle no pudo cargar el archivo Flash SWF.
    Es probable que el acceso a la búsqueda haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-cors =
    Ruffle no pudo cargar el archivo ".wasm."
    Es probable que el acceso a la búsqueda o la llamada a la función fetch haya sido bloqueado por la política CORS.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-invalid =
    Ruffle ha encontrado un problema crítico al intentar inicializar.
    Este servidor web no está sirviendo archivos wasm" con el tipo Mime correcto.
    Si usted es el administrador del servidor, consulte la wiki de Ruffle para obtener ayuda.
error-wasm-download =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Esto a menudo puede resolverse por sí mismo, así que puede intentar recargar la página.
    De lo contrario, póngase en contacto con el administrador del sitio web.
error-wasm-disabled-on-edge =
    Ruffle no pudo cargar el componente de archivo ".wasm" requerido.
    Para solucionar esto, intenta abrir la configuración de tu navegador, haciendo clic en "Privacidad, búsqueda y servicios", desplazándote y apagando "Mejore su seguridad en la web".
    Esto permitirá a su navegador cargar los archivos ".wasm" necesarios.
    Si el problema persiste, puede que tenga que utilizar un navegador diferente.
error-javascript-conflict =
    Ruffle ha encontrado un problema crítico mientras intentaba inicializarse.
    Parece que esta página utiliza código JavaScript que entra en conflicto con Ruffle.
    Si usted es el administrador del servidor, le invitamos a intentar cargar el archivo en una página en blanco.
error-javascript-conflict-outdated = También puedes intentar subir una versión más reciente de Ruffle que puede eludir el problema (la versión actual está desactualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontró un problema al intentar inicializarse.
    La Política de Seguridad de Contenido de este servidor web no permite el componente requerido ".wasm". 
    Si usted es el administrador del servidor, por favor consulta la wiki de Ruffle para obtener ayuda.
error-unknown =
    Ruffle ha encontrado un problema al tratar de mostrar el contenido Flash.
    { $outdated ->
        [true] Si usted es el administrador del servidor, intenta cargar una version más reciente de Ruffle (la version actual esta desactualizada: { $buildDate }).
       *[false] Esto no deberia suceder! apreciariamos que reportes el error!
    }
`,"save-manager.ftl":`save-delete-prompt = ¿Está seguro de querer eliminar este archivo de guardado?
save-reload-prompt =
    La única forma de { $action ->
        [delete] eliminar
       *[replace] sobreescribir
    } este archivo de guardado sin conflictos potenciales es reiniciando el contenido. ¿Desea continuar de todos modos?
save-download = Descargar
save-replace = Sobreescribir
save-delete = Borrar
save-backup-all = Borrar todos los archivos de guardado
`,"volume-controls.ftl":`volume-controls = Controles de volumen
volume-controls-mute = Silenciar
volume-controls-volume = Volumen
`},"fr-FR":{"context_menu.ftl":`context-menu-download-swf = Télécharger en tant que .swf
context-menu-copy-debug-info = Copier les infos de débogage
context-menu-open-save-manager = Ouvrir le gestionnaire de stockage
context-menu-about-ruffle =
    { $flavor ->
        [extension] À propos de l'Extension Ruffle ({ $version })
       *[other] À propos de Ruffle ({ $version })
    }
context-menu-hide = Masquer ce menu
context-menu-exit-fullscreen = Sortir du mode plein écran
context-menu-enter-fullscreen = Afficher en plein écran
context-menu-volume-controls = Contrôles du volume
`,"messages.ftl":`message-cant-embed =
    Ruffle n'a pas été en mesure de lire le fichier Flash intégré dans cette page.
    Vous pouvez essayer d'ouvrir le fichier dans un onglet isolé, pour contourner le problème.
panic-title = Une erreur est survenue :(
more-info = Plus d'infos
run-anyway = Exécuter quand même
continue = Continuer
report-bug = Signaler le bug
update-ruffle = Mettre à jour Ruffle
ruffle-demo = Démo en ligne
ruffle-desktop = Application de bureau
ruffle-wiki = Wiki de Ruffle
enable-hardware-acceleration = Il semblerait que l'accélération matérielle ne soit pas activée. Cela n'empêche généralement pas Ruffle de fonctionner, mais il peut être beaucoup plus lent. Vous pouvez trouver comment activer l'accélération matérielle en suivant ce lien.
view-error-details = Détails de l'erreur
open-in-new-tab = Ouvrir dans un nouvel onglet
click-to-unmute = Cliquez pour activer le son
error-file-protocol =
    Il semblerait que vous exécutiez Ruffle sur le protocole "file:".
    Cela ne fonctionne pas car les navigateurs bloquent de nombreuses fonctionnalités pour des raisons de sécurité.
    Nous vous invitons soit à configurer un serveur local, soit à utiliser la démo en ligne ou l'application de bureau.
error-javascript-config =
    Ruffle a rencontré un problème majeur en raison d'une configuration JavaScript incorrecte.
    Si vous êtes l'administrateur du serveur, nous vous invitons à vérifier les détails de l'erreur pour savoir quel est le paramètre en cause.
    Vous pouvez également consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-not-found =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez vous assurer que ce fichier a bien été mis en ligne.
    Si le problème persiste, il vous faudra peut-être utiliser le paramètre "publicPath" : veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-mime-type =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Ce serveur web ne renvoie pas le bon type MIME pour les fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-invalid-swf =
    Ruffle n'a pas été en mesure de lire le fichier demandé.
    La raison la plus probable est que ce fichier n'est pas un SWF valide.
error-swf-fetch =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La raison la plus probable est que le fichier n'existe pas ou plus.
    Vous pouvez essayer de prendre contact avec l'administrateur du site pour obtenir plus d'informations.
error-swf-cors =
    Ruffle n'a pas réussi à charger le fichier Flash.
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-cors =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    La requête a probablement été rejetée en raison de la configuration du CORS.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-invalid =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page comporte des fichiers manquants ou invalides pour exécuter Ruffle.
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-wasm-download =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Le problème détecté peut souvent se résoudre de lui-même, donc vous pouvez essayer de recharger la page.
    Si le problème persiste, veuillez prendre contact avec l'administrateur du site.
error-wasm-disabled-on-edge =
    Ruffle n'a pas réussi à charger son fichier ".wasm".
    Pour résoudre ce problème, essayez d'ouvrir les paramètres de votre navigateur et de cliquer sur "Confidentialité, recherche et services". Puis, vers le bas de la page, désactivez l'option "Améliorez votre sécurité sur le web".
    Cela permettra à votre navigateur de charger les fichiers ".wasm".
    Si le problème persiste, vous devrez peut-être utiliser un autre navigateur.
error-javascript-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    Il semblerait que cette page contienne du code JavaScript qui entre en conflit avec Ruffle.
    Si vous êtes l'administrateur du serveur, nous vous invitons à essayer de charger le fichier dans une page vide.
error-javascript-conflict-outdated = Vous pouvez également essayer de mettre en ligne une version plus récente de Ruffle qui pourrait avoir corrigé le problème (la version que vous utilisez est obsolète : { $buildDate }).
error-csp-conflict =
    Ruffle a rencontré un problème majeur durant sa phase d'initialisation.
    La stratégie de sécurité du contenu (CSP) de ce serveur web n'autorise pas l'exécution de fichiers ".wasm".
    Si vous êtes l'administrateur du serveur, veuillez consulter le wiki de Ruffle pour obtenir de l'aide.
error-unknown =
    Ruffle a rencontré un problème majeur durant l'exécution de ce contenu Flash.
    { $outdated ->
        [true] Si vous êtes l'administrateur du serveur, veuillez essayer de mettre en ligne une version plus récente de Ruffle (la version que vous utilisez est obsolète : { $buildDate }).
       *[false] Cela n'est pas censé se produire, donc nous vous serions reconnaissants si vous pouviez nous signaler ce bug !
    }
`,"save-manager.ftl":`save-delete-prompt = Voulez-vous vraiment supprimer ce fichier de sauvegarde ?
save-reload-prompt =
    La seule façon de { $action ->
        [delete] supprimer
       *[replace] remplacer
    } ce fichier de sauvegarde sans conflit potentiel est de recharger ce contenu. Souhaitez-vous quand même continuer ?
save-download = Télécharger
save-replace = Remplacer
save-delete = Supprimer
save-backup-all = Télécharger tous les fichiers de sauvegarde
`,"volume-controls.ftl":`volume-controls = Contrôles du volume
volume-controls-mute = Muet
volume-controls-volume = Volume
`},"he-IL":{"context_menu.ftl":`context-menu-download-swf = הורדת קובץ הswf.
context-menu-copy-debug-info = העתקת נתוני ניפוי שגיאות
context-menu-open-save-manager = פתח את מנהל השמירות
context-menu-about-ruffle =
    { $flavor ->
        [extension] אודות התוסף Ruffle ({ $version })
       *[other] אודות Ruffle ({ $version })
    }
context-menu-hide = הסתר תפריט זה
context-menu-exit-fullscreen = יציאה ממסך מלא
context-menu-enter-fullscreen = מסך מלא
context-menu-volume-controls = בקרת עוצמת קול
`,"messages.ftl":`message-cant-embed =
    Ruffle לא הצליח להריץ את תוכן הפלאש המוטמע בדף זה.
    אתה יכול לפתוח את הקובץ בלשונית נפרדת, על מנת לעקוף בעיה זו.
panic-title = משהו השתבש :(
more-info = מידע נוסף
run-anyway = הפעל בכל זאת
continue = המשך
report-bug = דווח על תקלה
update-ruffle = עדכן את Ruffle
ruffle-demo = הדגמה
ruffle-desktop = אפליקציית שולחן עבודה
ruffle-wiki = ראה את Ruffle wiki
enable-hardware-acceleration = נראה שהאצת החומרה שלך לא מופעלת. בעוד שראפל עשוי לעבוד, הוא יכול להיות איטי. תוכל לראות כיצד להפעיל תכונה זו בלחיצה על הלינק הזה.
view-error-details = ראה פרטי שגיאה
open-in-new-tab = פתח בכרטיסייה חדשה
click-to-unmute = לחץ על מנת לבטל השתקה
error-file-protocol =
    נדמה שאתה מריץ את Ruffle תחת פרוטוקול "file:".
    זה לא יעבוד מכיוון שדפדפנים חוסמים אפשרויות רבות מלעבוד עקב סיבות אבטחה.
    במקום זה, אנו מזמינים אותך לאחסן אתר זה תחת שרת מקומי או הדגמה ברשת או דרך אפליקציית שולחן העבודה.
error-javascript-config =
    Ruffle נתקל בתקלה חמורה עקב הגדרת JavaScript שגויה.
    אם אתה מנהל האתר, אנו מזמינים אותך לבדוק את פרטי השגיאה על מנת למצוא איזה פרמטר הוא שגוי.
    אתה יכול לעיין ולהועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-not-found =
    Ruffle נכשל לטעון את קובץ ה"wasm." הדרוש.
    אם אתה מנהל האתר, אנא וודא כי הקובץ הועלה כשורה.
    אם הבעיה ממשיכה, ייתכן ותצטרך להשתמש בהגדרת "publicPath": אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-mime-type =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    שרתו של אתר זה לא משייך קבצי ".wasm" עם סוג הMIME הנכון.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-invalid-swf =
    Ruffle לא יכול לנתח את הקובץ המבוקש.
    הסיבה הסבירה ביותר לבעיה זו היא בגלל שהקובץ המבוקש אינו SWF חוקי.
error-swf-fetch =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    זה נובע ככל הנראה מכיוון והקובץ לא קיים יותר, אז אין לRuffle מה לטעון.
    נסה ליצור קשר עם מנהל האתר על מנת לקבל עזרה.
error-swf-cors =
    Ruffle נכשל לטעון את קובץ הפלאש/swf. .
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-cors =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    גישה לfetch ככל הנראה נחסמה על ידי מדיניות CORS.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-invalid =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי בדף זה חסרים או לא עובדים כראוי קבצים אשר משמשים את Ruffle כדי לפעול
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-wasm-download =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    לעיתים בעיה זו יכולה לפתור את עצמה, אז אתה יכול לנסות לטעון מחדש את הדף זה.
    אם לא, אנא פנה למנהל האתר.
error-wasm-disabled-on-edge =
    Ruffle נכשל לטעון את קובץ ה".wasm" הדרוש.
    על מנת לתקן בעיה זו, נסה לפתוח את הגדרות הדפדפן שלך, לחץ על "אבטחה, חיפוש ושירות",
    גלול מטה, וכבה את "הגבר את האבטחה שלך ברשת".
    זה יאפשר לדפדפן שלך לטעון את קובץ ה".wasm" הדרוש.
    אם הבעיה ממשיכה, ייתכן ועליך להשתמש בדפדפן אחר.
error-javascript-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    נדמה כי דף זה משתמש בקוד JavaScript אשר מתנגש עם Ruffle.
    אם אתה מנהל האתר, אנו מזמינים אותך לנסות לטעון את הדף תחת עמוד ריק.
error-javascript-conflict-outdated = בנוסף, אתה יכול לנסות ולהעלות גרסאות עדכניות של Ruffle אשר עלולים לעקוף בעיה זו (גרסה זו הינה מיושנת : { $buildDate }).
error-csp-conflict =
    Ruffle נתקל בבעיה חמורה תוך כדי ניסיון לאתחל.
    מדיניות אבטחת התוכן של שרתו של אתר זה אינה מאפשרת לקובץ ה"wasm." הדרוש לפעול.
    אם אתה מנהל האתר, אנא עיין והועץ בwiki של Ruffle על מנת לקבל עזרה.
error-unknown =
    Ruffle נתקל בבעיה חמורה בניסיון להציג את תוכן פלאש זה.
    { $outdated ->
        [true] אם אתה מנהל האתר, אנא נסה להעלות גרסה עדכנית יותר של Ruffle (גרסה זו הינה מיושנת:  { $buildDate }).
       *[false] זה לא אמור לקרות, נשמח אם תוכל לשתף תקלה זו!
    }
`,"save-manager.ftl":`save-delete-prompt = האם אתה בטוח שברצונך למחוק את קובץ שמירה זה?
save-reload-prompt =
    הדרך היחידה { $action ->
        [delete] למחוק
       *[replace] להחליף
    } את קובץ השמירה הזה מבלי לגרום לו להתנגש היא לטעון מחדש את תוכן זה. האם אתה רוצה להמשיך בכל זאת?
save-download = הורדה
save-replace = החלפה
save-delete = מחיקה
save-backup-all = הורדת כל קבצי השמירה
`,"volume-controls.ftl":`volume-controls = בקרת עוצמת קול
volume-controls-mute = השתק
volume-controls-volume = עוצמת קול
`},"hu-HU":{"context_menu.ftl":`context-menu-download-swf = .swf fájl letöltése
context-menu-copy-debug-info = Hibakeresési információk másolása
context-menu-open-save-manager = Mentéskezelő megnyitása
context-menu-about-ruffle =
    { $flavor ->
        [extension] A Ruffle kiegészítő ({ $version }) névjegye
       *[other] A Ruffle ({ $version }) névjegye
    }
context-menu-hide = Ezen menü elrejtése
context-menu-exit-fullscreen = Kilépés a teljes képernyőből
context-menu-enter-fullscreen = Váltás teljes képernyőre
context-menu-volume-controls = Hangerőszabályzó
`,"messages.ftl":`message-cant-embed =
    A Ruffle nem tudta futtatni az oldalba ágyazott Flash tartalmat.
    A probléma kikerüléséhez megpróbálhatod megnyitni a fájlt egy külön lapon.
panic-title = Valami baj történt :(
more-info = További információ
run-anyway = Futtatás mégis
continue = Folytatás
report-bug = Hiba jelentése
update-ruffle = Ruffle frissítése
ruffle-demo = Webes demó
ruffle-desktop = Asztali alkalmazás
ruffle-wiki = Ruffle Wiki megnyitása
enable-hardware-acceleration = Úgy tűnik, a hardveres gyorsítás nincs engedélyezve. Bár a Ruffle működhet, nagyon lassú lehet. Ezt a hivatkozást követve megtudhatod, hogyan engedélyezd a hardveres gyorsítást.
view-error-details = Hiba részletei
open-in-new-tab = Megnyitás új lapon
click-to-unmute = Kattints a némítás feloldásához
error-file-protocol =
    Úgy tűnik, a Ruffle-t a "file:" protokollon futtatod.
    Ez nem működik, mivel így a böngészők biztonsági okokból számos funkció működését letiltják.
    Ehelyett azt ajánljuk hogy indíts egy helyi kiszolgálót, vagy használd a webes demót vagy az asztali alkalmazást.
error-javascript-config =
    A Ruffle komoly problémába ütközött egy helytelen JavaScript-konfiguráció miatt.
    Ha a szerver rendszergazdája vagy, kérjük, ellenőrizd a hiba részleteit, hogy megtudd, melyik paraméter a hibás.
    A Ruffle wikiben is találhatsz ehhez segítséget.
error-wasm-not-found =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    Ha a szerver rendszergazdája vagy, kérjük ellenőrizd, hogy a fájl megfelelően lett-e feltöltve.
    Ha a probléma továbbra is fennáll, előfordulhat, hogy a "publicPath" beállítást kell használnod: segítségért keresd fel a Ruffle wikit.
error-wasm-mime-type =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez a webszerver a ".wasm" fájlokat nem a megfelelő MIME-típussal szolgálja ki.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-invalid-swf =
    A Ruffle nem tudta értelmezni a kért fájlt.
    Ennek a legvalószínűbb oka az, hogy a kért fájl nem érvényes SWF.
error-swf-fetch =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A legvalószínűbb ok az, hogy a fájl már nem létezik, így a Ruffle számára nincs mit betölteni.
    Próbáld meg felvenni a kapcsolatot a webhely rendszergazdájával segítségért.
error-swf-cors =
    A Ruffle nem tudta betölteni a Flash SWF fájlt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-wasm-cors =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A lekéréshez való hozzáférést valószínűleg letiltotta a CORS-házirend.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-invalid =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, hogy ezen az oldalon hiányoznak vagy hibásak a Ruffle futtatásához szükséges fájlok.
    Ha a szerver rendszergazdája vagy, kérjük keresd fel a Ruffle wikit segítségért.
error-wasm-download =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Ez gyakran magától megoldódik, ezért megpróbálhatod újratölteni az oldalt.
    Ellenkező esetben fordulj a webhely rendszergazdájához.
error-wasm-disabled-on-edge =
    A Ruffle nem tudta betölteni a szükséges ".wasm" összetevőt.
    A probléma megoldásához nyisd meg a böngésző beállításait, kattints az „Adatvédelem, keresés és szolgáltatások” elemre, görgess le, és kapcsold ki a „Fokozott biztonság a weben” opciót.
    Ez lehetővé teszi a böngésző számára, hogy betöltse a szükséges ".wasm" fájlokat.
    Ha a probléma továbbra is fennáll, lehet, hogy másik böngészőt kell használnod.
error-javascript-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    Úgy tűnik, ez az oldal olyan JavaScript-kódot használ, amely ütközik a Ruffle-lel.
    Ha a kiszolgáló rendszergazdája vagy, kérjük, próbáld meg a fájlt egy üres oldalon betölteni.
error-javascript-conflict-outdated = Megpróbálhatod továbbá feltölteni a Ruffle egy újabb verzióját is, amely megkerülheti a problémát (a jelenlegi elavult: { $buildDate }).
error-csp-conflict =
    A Ruffle komoly problémába ütközött az inicializálás során.
    A kiszolgáló tartalombiztonsági házirendje nem teszi lehetővé a szükséges „.wasm” összetevők futtatását.
    Ha a szerver rendszergazdája vagy, kérjük, keresd fel a Ruffle wikit segítségért.
error-unknown =
    A Ruffle komoly problémába ütközött, miközben megpróbálta megjeleníteni ezt a Flash-tartalmat.
    { $outdated ->
        [true] Ha a szerver rendszergazdája vagy, kérjük, próbáld meg feltölteni a Ruffle egy újabb verzióját (a jelenlegi elavult: { $buildDate }).
       *[false] Ennek nem lett volna szabad megtörténnie, ezért nagyon hálásak lennénk, ha jeleznéd a hibát!
    }
`,"save-manager.ftl":`save-delete-prompt = Biztosan törölni akarod ezt a mentést?
save-reload-prompt =
    Ennek a mentésnek az esetleges konfliktus nélküli { $action ->
        [delete] törléséhez
       *[replace] cseréjéhez
    } újra kell tölteni a tartalmat. Mégis szeretnéd folytatni?
save-download = Letöltés
save-replace = Csere
save-delete = Törlés
save-backup-all = Az összes fájl letöltése
`,"volume-controls.ftl":`volume-controls = Hangerőszabályzó
volume-controls-mute = Némítás
volume-controls-volume = Hangerő
`},"id-ID":{"context_menu.ftl":`context-menu-download-swf = Unduh .swf
context-menu-copy-debug-info = Salin info debug
context-menu-open-save-manager = Buka Manager Save
context-menu-about-ruffle =
    { $flavor ->
        [extension] Tentang Ekstensi Ruffle ({ $version })
       *[other] Tentang Ruffle ({ $version })
    }
context-menu-hide = Sembunyikan Menu ini
context-menu-exit-fullscreen = Keluar dari layar penuh
context-menu-enter-fullscreen = Masuk mode layar penuh
context-menu-volume-controls = Pengaturan Volume
`,"messages.ftl":`message-cant-embed =
    Ruffle tidak dapat menjalankan Flash yang disematkan di halaman ini.
    Anda dapat mencoba membuka file di tab terpisah, untuk menghindari masalah ini.
panic-title = Terjadi kesalahan :(
more-info = Info lebih lanjut
run-anyway = Jalankan
continue = Lanjutkan
report-bug = Laporkan Bug
update-ruffle = Perbarui Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplikasi Desktop
ruffle-wiki = Kunjungi Wiki Ruffle
enable-hardware-acceleration = Sepertinya akselerasi perangkat keras tidak aktif. Ruffle tetap akan bekerja, Namun dapat bekerja dengan sangat lambat. Anda dapat mengaktifkan akselerasi perangkat keras dengan menggunakan link berikut.
view-error-details = Tunjukan Detail Error
open-in-new-tab = Buka di Tab Baru
click-to-unmute = Tekan untuk menyalakan suara
error-file-protocol =
    Sepertinya anda menjalankan Ruffle di protokol "file:". 
    Ini tidak berfungsi karena browser memblokir fitur ini dengan alasan keamanan.
    Sebagai gantinya, kami mengajak anda untuk membuat server lokal, menggunakan demo web atau aplikasi desktop.
error-javascript-config =
    Ruffle mengalami masalah besar karena konfigurasi JavaScript yang salah.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk memeriksa detail kesalahan untuk mengetahui parameter mana yang salah.
    Anda juga dapat membaca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-not-found =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Jika Anda adalah administrator server ini, pastikan file telah diunggah dengan benar.
    Jika masalah terus berlanjut, Anda mungkin perlu menggunakan pengaturan "publicPath": silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-mime-type =
    Ruffle mengalami masalah ketika mencoba melakukan inisialisasi.
    Server web ini tidak melayani file ".wasm" dengan tipe MIME yang benar.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-swf-fetch =
    Ruffle gagal memuat file SWF Flash.
    Kemungkinan file tersebut sudah tidak ada, sehingga tidak dapat dimuat oleh Ruffle.
    Coba hubungi administrator situs web ini untuk mendapatkan bantuan.
error-swf-cors =
    Ruffle gagal memuat file SWF Flash.
    Akses untuk memuat kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-cors =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Akses untuk mengambil kemungkinan telah diblokir oleh kebijakan CORS.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-invalid =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya halaman ini memiliki file yang hilang atau tidak valid untuk menjalankan Ruffle.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-wasm-download =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Hal ini sering kali dapat teratasi dengan sendirinya, sehingga Anda dapat mencoba memuat ulang halaman.
    Jika tidak, silakan hubungi administrator situs web ini.
error-wasm-disabled-on-edge =
    Ruffle gagal memuat komponen file ".wasm" yang diperlukan.
    Untuk mengatasinya, coba buka pengaturan peramban Anda, klik "Privasi, pencarian, dan layanan", turun ke bawah, dan matikan "Tingkatkan keamanan Anda di web".
    Ini akan memungkinkan browser Anda memuat file ".wasm" yang diperlukan.
    Jika masalah berlanjut, Anda mungkin harus menggunakan browser yang berbeda.
error-javascript-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Sepertinya situs web ini menggunakan kode JavaScript yang bertentangan dengan Ruffle.
    Jika Anda adalah administrator server ini, kami mengajak Anda untuk mencoba memuat file pada halaman kosong.
error-javascript-conflict-outdated = Anda juga dapat mencoba mengunggah versi Ruffle yang lebih baru yang mungkin dapat mengatasi masalah ini (versi saat ini sudah kedaluwarsa: { $buildDate }).
error-csp-conflict =
    Ruffle mengalami masalah besar ketika mencoba melakukan inisialisasi.
    Kebijakan Keamanan Konten server web ini tidak mengizinkan komponen ".wasm" yang diperlukan untuk dijalankan.
    Jika Anda adalah administrator server ini, silakan baca wiki Ruffle untuk mendapatkan bantuan.
error-unknown =
    Ruffle telah mengalami masalah besar saat menampilkan konten Flash ini.
    { $outdated ->
        [true] Jika Anda administrator server ini, cobalah untuk mengganti versi Ruffle yang lebih baru (versi saat ini sudah kedaluwarsa: { $buildDate }).
       *[false] Hal ini seharusnya tidak terjadi, jadi kami sangat menghargai jika Anda dapat melaporkan bug ini!
    }
`,"save-manager.ftl":`save-delete-prompt = Anda yakin ingin menghapus berkas ini?
save-reload-prompt =
    Satu-satunya cara untuk { $action ->
        [delete] menghapus
       *[replace] mengganti
    } berkas penyimpanan ini tanpa potensi konflik adalah dengan memuat ulang konten ini. Apakah Anda ingin melanjutkannya?
save-download = Unduh
save-replace = Ganti
save-delete = Hapus
save-backup-all = Unduh semua berkas penyimpanan
`,"volume-controls.ftl":`volume-controls = Pengaturan Volume
volume-controls-mute = Bisukan
volume-controls-volume = Volume
`},"it-IT":{"context_menu.ftl":`context-menu-download-swf = Scarica .swf
context-menu-copy-debug-info = Copia informazioni di debug
context-menu-open-save-manager = Apri Gestione salvataggi
context-menu-about-ruffle =
    { $flavor ->
        [extension] Informazioni su Ruffle Extension ({ $version })
       *[other] Informazioni su Ruffle ({ $version })
    }
context-menu-hide = Nascondi questo menu
context-menu-exit-fullscreen = Esci dallo schermo intero
context-menu-enter-fullscreen = Entra a schermo intero
context-menu-volume-controls = Controlli volume
`,"messages.ftl":`message-cant-embed =
    Ruffle non è stato in grado di eseguire il Flash incorporato in questa pagina.
    Puoi provare ad aprire il file in una scheda separata, per evitare questo problema.
panic-title = Qualcosa è andato storto :(
more-info = Maggiori informazioni
run-anyway = Esegui comunque
continue = Continua
report-bug = Segnala Un Bug
update-ruffle = Aggiorna Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Applicazione Desktop
ruffle-wiki = Visualizza Ruffle Wiki
enable-hardware-acceleration = Sembra che l'accelerazione hardware non sia abilitata. Sebbene Ruffle possa funzionare, potrebbe essere irragionevolmente lento. Puoi scoprire come abilitare l'accelerazione hardware seguendo questo collegamento.
view-error-details = Visualizza Dettagli Errore
open-in-new-tab = Apri in una nuova scheda
click-to-unmute = Clicca per riattivare l'audio
error-file-protocol =
    Sembra che tu stia eseguendo Ruffle sul protocollo "file:".
    Questo non funziona come browser blocca molte funzionalità di lavoro per motivi di sicurezza.
    Invece, ti invitiamo a configurare un server locale o a utilizzare la demo web o l'applicazione desktop.
error-javascript-config =
    Ruffle ha incontrato un problema importante a causa di una configurazione JavaScript non corretta.
    Se sei l'amministratore del server, ti invitiamo a controllare i dettagli dell'errore per scoprire quale parametro è in errore.
    Puoi anche consultare il wiki Ruffle per aiuto.
error-wasm-not-found =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    Se sei l'amministratore del server, assicurati che il file sia stato caricato correttamente.
    Se il problema persiste, potrebbe essere necessario utilizzare l'impostazione "publicPath": si prega di consultare il wiki Ruffle per aiuto.
error-wasm-mime-type =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo server web non serve ". asm" file con il tipo MIME corretto.
    Se sei l'amministratore del server, consulta la wiki Ruffle per aiuto.
error-swf-fetch =
    Ruffle non è riuscito a caricare il file Flash SWF.
    La ragione più probabile è che il file non esiste più, quindi non c'è nulla che Ruffle possa caricare.
    Prova a contattare l'amministratore del sito web per aiuto.
error-swf-cors =
    Ruffle non è riuscito a caricare il file SWF Flash.
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-cors =
    Ruffle non è riuscito a caricare il componente di file ".wasm".
    L'accesso al recupero probabilmente è stato bloccato dalla politica CORS.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-invalid =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina abbia file mancanti o non validi per l'esecuzione di Ruffle.
    Se sei l'amministratore del server, consulta la wiki Ruffle per ricevere aiuto.
error-wasm-download =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzazione.
    Questo può spesso risolversi da solo, quindi puoi provare a ricaricare la pagina.
    Altrimenti, contatta l'amministratore del sito.
error-wasm-disabled-on-edge =
    Ruffle non ha caricato il componente di file ".wasm" richiesto.
    Per risolvere il problema, prova ad aprire le impostazioni del tuo browser, facendo clic su "Privacy, search, and services", scorrendo verso il basso e disattivando "Migliora la tua sicurezza sul web".
    Questo permetterà al tuo browser di caricare i file ".wasm" richiesti.
    Se il problema persiste, potresti dover usare un browser diverso.
error-javascript-conflict =
    Ruffle ha riscontrato un problema importante durante il tentativo di inizializzazione.
    Sembra che questa pagina utilizzi il codice JavaScript che è in conflitto con Ruffle.
    Se sei l'amministratore del server, ti invitiamo a provare a caricare il file su una pagina vuota.
error-javascript-conflict-outdated = Puoi anche provare a caricare una versione più recente di Ruffle che potrebbe aggirare il problema (l'attuale build è obsoleta: { $buildDate }).
error-csp-conflict =
    Ruffle ha incontrato un problema importante durante il tentativo di inizializzare.
    La Politica di Sicurezza dei Contenuti di questo server web non consente l'impostazione richiesta". asm" componente da eseguire.
    Se sei l'amministratore del server, consulta la Ruffle wiki per aiuto.
error-unknown =
    Ruffle ha incontrato un problema importante durante il tentativo di visualizzare questo contenuto Flash.
    { $outdated ->
        [true] Se sei l'amministratore del server, prova a caricare una versione più recente di Ruffle (la versione attuale è obsoleta: { $buildDate }).
       *[false] Questo non dovrebbe accadere, quindi ci piacerebbe molto se si potesse inviare un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sei sicuro di voler eliminare questo file di salvataggio?
save-reload-prompt =
    L'unico modo per { $action ->
        [delete] delete
       *[replace] replace
    } questo salvataggio file senza potenziali conflitti è quello di ricaricare questo contenuto. Volete continuare comunque?
save-download = Scarica
save-replace = Sostituisci
save-delete = Elimina
save-backup-all = Scarica tutti i file di salvataggio
`,"volume-controls.ftl":`volume-controls = Controlli volume
volume-controls-mute = Silenzia
volume-controls-volume = Volume
`},"ja-JP":{"context_menu.ftl":`context-menu-download-swf = .swfをダウンロード
context-menu-copy-debug-info = デバッグ情報をコピー
context-menu-open-save-manager = セーブマネージャーを開く
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle拡張機能について ({ $version })
       *[other] Ruffleについて ({ $version })
    }
context-menu-hide = メニューを隠す
context-menu-exit-fullscreen = フルスクリーンを終了
context-menu-enter-fullscreen = フルスクリーンにする
context-menu-volume-controls = 音量
`,"messages.ftl":`message-cant-embed =
    Ruffleはこのページに埋め込まれた Flash を実行できませんでした。
    別のタブでファイルを開くことで、この問題を解決できるかもしれません。
panic-title = エラーが発生しました :(
more-info = 詳細情報
run-anyway = とにかく実行する
continue = 続行
report-bug = バグを報告
update-ruffle = Ruffleを更新
ruffle-demo = Webデモ
ruffle-desktop = デスクトップアプリケーション
ruffle-wiki = Ruffle Wikiを表示
enable-hardware-acceleration = ハードウェアアクセラレーションが有効になっていないようです。Ruffleが動作しないか、動作が遅くなる可能性があります。 ハードウェアアクセラレーションを有効にする方法については、こちらのリンクを参照してください。
view-error-details = エラーの詳細を表示
open-in-new-tab = 新しいタブで開く
click-to-unmute = クリックでミュートを解除
error-file-protocol =
    Ruffleを"file:"プロトコルで使用しているようです。
    ブラウザはセキュリティ上の理由から殆どの機能を制限しているため、正しく動作しません。
    ローカルサーバーをセットアップするか、ウェブデモまたはデスクトップアプリをご利用ください。
error-javascript-config =
    JavaScriptの設定が正しくないため、Ruffleで問題が発生しました。
    サーバー管理者の方は、エラーの詳細から、どのパラメーターに問題があるのかを確認してください。
    Ruffleのwikiを参照することで、解決方法が見つかるかもしれません。
error-wasm-not-found =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが、実行に必要となる「.wasm」コンポーネントの実行を許可していません。サーバーの管理者の場合は、ファイルが正しくアップロードされているか確認をしてください。この問題が解決しない場合は、「publicPath」の設定を使用する必要があります。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-mime-type =
    Ruffleの初期化に失敗する大きな問題が発生しました。
    このWebサーバーは正しいMIMEタイプの「.wasm」ファイルを提供していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-invalid-swf =
    Ruffle は要求されたファイルを解析できません。
    最も考えられる原因は、要求されたファイルが有効な SWF でないことです。
error-swf-fetch =
    RuffleがFlash SWFファイルの読み込みに失敗しました。
    最も考えられる原因は、SWFファイルが既に存在しない事でRuffleが読み込みに失敗するという問題です。
    Webサイトの管理者にお問い合わせください。
error-swf-cors =
    RuffleはSWFファイルの読み込みに失敗しました。
    CORSポリシーの設定により、fetchへのアクセスがブロックされている可能性があります。
    サーバー管理者の方は、Ruffleのwikiを参照してください。
error-wasm-cors =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    CORSポリシーによってfetchへのアクセスがブロックされている可能性があります。
    サーバーの管理者は、Ruffle wikiを参照してください。
error-wasm-invalid =
    Ruffleの初期化時に重大な問題が発生しました。
    このページにはRuffleを実行するためのファイルが存在しないか、無効なファイルがあるかもしれません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-wasm-download =
    Ruffleの初期化時に重大な問題が発生しました。
    この問題はページを再読み込みする事で大抵は解決するはずなので行なってみてください。
    もしも解決しない場合は、Webサイトの管理者にお問い合わせください。
error-wasm-disabled-on-edge =
    Ruffleに必要となる「.wasm」ファイルコンポーネントの読み込みに失敗しました。
    この問題を解決するにはブラウザーの設定を開き、「プライバシー、検索、サービス」をクリックし、下にスクロールで「Web上のセキュリティを強化する」をオフにしてみてください。
    これで必要となる「.wasm」ファイルが読み込まれるようになります。
    それでも問題が解決しない場合、別のブラウザーを使用する必要があるかもしれません。
error-javascript-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このページではRuffleと競合するJavaScriptコードが使用されているかもしれません。
    サーバーの管理者は、空白のページでファイルを読み込みし直してみてください。
error-javascript-conflict-outdated = 新しいバージョンのRuffleをアップロードすることで、この問題を回避できる可能性があります。(現在のビルドは古い物です:{ $buildDate })
error-csp-conflict =
    Ruffleの初期化時に重大な問題が発生しました。
    このWebサーバーのコンテンツセキュリティポリシーが実行に必要となる「.wasm」コンポーネントの実行を許可していません。
    サーバーの管理者は、Ruffleのwikiを参照してください。
error-unknown =
    Flashコンテンツを表示する際にRuffleで問題が発生しました。
    { $outdated ->
        [true] 現在使用しているビルドは最新ではないため、サーバー管理者の方は、最新版のRuffleに更新してみてください(現在利用中のビルド: { $buildDate })。
       *[false] 想定外の問題なので、バグとして報告していただけると嬉しいです!
    }
`,"save-manager.ftl":`save-delete-prompt = このセーブファイルを削除してもよろしいですか?
save-reload-prompt =
    セーブファイルを競合の可能性なく { $action ->
        [delete] 削除する
       *[replace] 置き換える
    } ために、このコンテンツを再読み込みすることを推奨します。続行しますか？
save-download = ダウンロード
save-replace = 置き換え
save-delete = 削除
save-backup-all = すべてのセーブファイルをダウンロード
`,"volume-controls.ftl":`volume-controls = 音量
volume-controls-mute = 消音
volume-controls-volume = 音量
`},"ko-KR":{"context_menu.ftl":`context-menu-download-swf = .swf 다운로드
context-menu-copy-debug-info = 디버그 정보 복사
context-menu-open-save-manager = 저장 관리자 열기
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle 확장 프로그램 정보 ({ $version })
       *[other] Ruffle 정보 ({ $version })
    }
context-menu-hide = 이 메뉴 숨기기
context-menu-exit-fullscreen = 전체화면 나가기
context-menu-enter-fullscreen = 전체화면으로 열기
context-menu-volume-controls = 음량 조절
`,"messages.ftl":`message-cant-embed = Ruffle이 이 페이지에 포함된 플래시를 실행할 수 없었습니다. 별도의 탭에서 파일을 열어봄으로서 이 문제를 해결할 수 있습니다.
panic-title = 문제가 발생했습니다 :(
more-info = 추가 정보
run-anyway = 그래도 실행하기
continue = 계속하기
report-bug = 버그 제보
update-ruffle = Ruffle 업데이트
ruffle-demo = 웹 데모
ruffle-desktop = 데스크톱 애플리케이션
ruffle-wiki = Ruffle 위키 보기
enable-hardware-acceleration = 하드웨어 가속이 활성화되지 않은 것 같습니다. Ruffle은 계속 작동하지만 실행 속도가 매우 느릴 수 있습니다. 하드웨어 가속을 활성화하는 방법을 알아보려면 다음 링크를 참고해보세요.
view-error-details = 오류 세부 정보 보기
open-in-new-tab = 새 탭에서 열기
click-to-unmute = 클릭하여 음소거 해제
error-file-protocol =
    Ruffle을 "file:" 프로토콜에서 실행하고 있는 것으로 보입니다.
    브라우저에서는 이 프로토콜을 보안상의 이유로 많은 기능을 작동하지 않게 차단하므로 이 방법은 작동하지 않습니다.
    대신, 로컬 서버를 직접 열어서 설정하거나 웹 데모 또는 데스크톱 애플리케이션을 사용하시기 바랍니다.
error-javascript-config =
    잘못된 자바스크립트 설정으로 인해 Ruffle에서 중대한 문제가 발생했습니다.
    만약 당신이 서버 관리자인 경우, 오류 세부사항을 확인하여 어떤 매개변수가 잘못되었는지 알아보세요.
    또는 Ruffle 위키를 통해 도움을 받아 볼 수도 있습니다.
error-wasm-not-found =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    만약 당신이 서버 관리자라면 파일이 올바르게 업로드되었는지 확인하세요.
    문제가 지속된다면 "publicPath" 옵션을 사용해야 할 수도 있습니다: Ruffle 위키를 참조하여 도움을 받으세요.
error-wasm-mime-type =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버는 올바른 MIME 유형의 ".wasm" 파일을 제공하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 통해 도움을 받으세요.
error-invalid-swf =
    Ruffle이 요청한 파일을 분석하지 못했습니다.
    요청한 파일이 유효한 SWF 파일이 아닐 가능성이 높습니다.
error-swf-fetch =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    이는 주로 파일이 더 이상 존재하지 않아 Ruffle이 로드할 수 있는 것이 없을 가능성이 높습니다.
    웹사이트 관리자에게 문의하여 도움을 받아보세요.
error-swf-cors =
    Ruffle이 플래시 SWF 파일을 로드하는 데 실패하였습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-cors =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    CORS 정책에 의해 데이터 가져오기에 대한 액세스가 차단되었을 수 있습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-invalid =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에 Ruffle을 실행하기 위한 파일이 누락되었거나 잘못된 것 같습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-wasm-download =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 문제는 때때로 바로 해결될 수 있으므로 페이지를 새로고침하여 다시 시도해보세요.
    그래도 문제가 지속된다면, 웹사이트 관리자에게 문의해주세요.
error-wasm-disabled-on-edge =
    Ruffle이 ".wasm" 필수 파일 구성요소를 로드하지 못했습니다.
    이를 해결하려면 브라우저 설정에서 "개인 정보, 검색 및 서비스"를 클릭한 후, 하단으로 스크롤하여 "웹에서 보안 강화" 기능을 꺼야 합니다.
    이는 필요한 ".wasm" 파일을 브라우저에서 로드할 수 있도록 허용합니다.
    이 문제가 지속될 경우 다른 브라우저를 사용해야 할 수 있습니다.
error-javascript-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 페이지에서 사용되는 자바스크립트 코드가 Ruffle과 충돌하는 것으로 보입니다.
    만약 당신이 서버 관리자라면 빈 페이지에서 파일을 로드해보세요.
error-javascript-conflict-outdated = 또한 Ruffle의 최신 버전을 업로드하는 것을 시도하여 문제를 우회해볼 수 있습니다. (현재 빌드가 오래되었습니다: { $buildDate }).
error-csp-conflict =
    Ruffle이 초기화를 시도하는 동안 중대한 문제가 발생했습니다.
    이 웹 서버의 CSP(Content Security Policy) 정책이 ".wasm" 필수 구성요소를 실행하는 것을 허용하지 않습니다.
    만약 당신이 서버 관리자라면 Ruffle 위키를 참조하여 도움을 받아볼 수 있습니다.
error-unknown =
    Ruffle이 플래시 콘텐츠를 표시하려고 시도하는 동안 중대한 문제가 발생했습니다.
    { $outdated ->
        [true] 만약 당신이 서버 관리자라면, Ruffle의 최신 버전을 업로드하여 다시 시도해보세요. (현재 빌드가 오래되었습니다: { $buildDate }).
       *[false] 이런 현상이 발생해서는 안되므로, 버그를 제보해주신다면 감사하겠습니다!
    }
`,"save-manager.ftl":`save-delete-prompt = 정말로 이 세이브 파일을 삭제하시겠습니까?
save-reload-prompt =
    \b이 파일을 잠재적인 충돌 없이 { $action ->
        [delete] 삭제
       *[replace] 교체
    }하려면 콘텐츠를 다시 로드해야 합니다. 그래도 계속하시겠습니까?
save-download = 다운로드
save-replace = 교체
save-delete = 삭제
save-backup-all = 모든 저장 파일 다운로드
`,"volume-controls.ftl":`volume-controls = 음량 조절
volume-controls-mute = 음소거
volume-controls-volume = 음량
`},"nl-NL":{"context_menu.ftl":`context-menu-download-swf = .swf downloaden
context-menu-copy-debug-info = Kopieer debuginformatie
context-menu-open-save-manager = Open opgeslagen-data-manager
context-menu-about-ruffle =
    { $flavor ->
        [extension] Over Ruffle Uitbreiding ({ $version })
       *[other] Over Ruffle ({ $version })
    }
context-menu-hide = Verberg dit menu
context-menu-exit-fullscreen = Verlaat volledig scherm
context-menu-enter-fullscreen = Naar volledig scherm
context-menu-volume-controls = Geluidsniveaus
`,"messages.ftl":`message-cant-embed =
    Ruffle kon de Flash-inhoud op de pagina niet draaien.
    Je kan proberen het bestand in een apart tabblad te openen, om hier omheen te werken.
panic-title = Er ging iets mis :(
more-info = Meer informatie
run-anyway = Toch starten
continue = Doorgaan
report-bug = Bug rapporteren
update-ruffle = Ruffle updaten
ruffle-demo = Web Demo
ruffle-desktop = Desktopapplicatie
ruffle-wiki = Bekijk de Ruffle Wiki
enable-hardware-acceleration = Het lijkt erop dat hardwareversnelling niet beschikbaar is. Ruffle zal werken, maar gaat waarschijnlijk erg traag zijn. Je kan lezen hoe hardwareversnelling in te schakelen is door deze link te volgen.
view-error-details = Foutdetails tonen
open-in-new-tab = Openen in een nieuw tabblad
click-to-unmute = Klik om te ontdempen
error-file-protocol =
    Het lijkt erop dat je Ruffle gebruikt met het "file" protocol.
    De meeste browsers blokkeren dit om veiligheidsredenen, waardoor het niet werkt.
    In plaats hiervan raden we aan om een lokale server te draaien, de web demo te gebruiken, of de desktopapplicatie.
error-javascript-config =
    Ruffle heeft een groot probleem ondervonden vanwege een onjuiste JavaScript configuratie.
    Als je de serverbeheerder bent, kijk dan naar de foutdetails om te zien wat er verkeerd is.
    Je kan ook in de Ruffle wiki kijken voor hulp.
error-wasm-not-found =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Als je de serverbeheerder bent, controleer dan of het bestaand juist is geüpload.
    Mocht het probleem blijven voordoen, moet je misschien de "publicPath" instelling gebruiken: zie ook de Ruffle wiki voor hulp.
error-wasm-mime-type =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Deze webserver serveert ".wasm" bestanden niet met het juiste MIME type.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-invalid-swf =
    Ruffle kon het gevraagde bestand niet verwerken.
    Waarschijnlijk is het geen geldig SWF bestand.
error-swf-fetch =
    Ruffle kon het Flash SWF bestand niet inladen.
    De meest waarschijnlijke reden is dat het bestand niet langer bestaat, en er dus niets is om in te laden.
    Probeer contact op te nemen met de websitebeheerder voor hulp.
error-swf-cors =
    Ruffle kon het Flash SWD bestand niet inladen.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-cors =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Toegang is waarschijnlijk geblokeerd door het CORS beleid.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-invalid =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat de Ruffle bestanden ontbreken of ongeldig zijn.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-wasm-download =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Dit lost zichzelf vaak op als je de bladzijde opnieuw inlaadt.
    Zo niet, neem dan contact op met de websitebeheerder.
error-wasm-disabled-on-edge =
    Ruffle kon het vereiste ".wasm" bestandscomponent niet laden.
    Om dit op te lossen, ga naar je browserinstellingen, klik op "Privacy, zoeken en diensten", scroll omlaag, en schakel "Verbeter je veiligheid op he web" uit.
    Dan kan je browser wel de vereiste ".wasm" bestanden inladen.
    Als het probleem zich blijft voordoen, moet je misschien een andere browser gebruiken.
error-javascript-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het lijkt erop dat deze pagina JavaScript code gebruikt die conflicteert met Ruffle.
    Als je de serverbeheerder bent, raden we aan om het bestand op een lege pagina te proberen in te laden.
error-javascript-conflict-outdated = Je kan ook proberen een nieuwe versie van Ruffle te installeren, om om het probleem heen te werken (huidige versie is oud: { $buildDate }).
error-csp-conflict =
    Ruffle heeft een groot probleem ondervonden tijdens het initialiseren.
    Het CSP-beleid staat niet toe dat het vereiste ".wasm" component kan draaien.
    Als je de serverbeheerder bent, kijk dan in de Ruffle wiki voor hulp.
error-unknown =
    Ruffle heeft een groot probleem onderbonden tijdens het weergeven van deze Flash-inhoud.
    { $outdated ->
        [true] Als je de serverbeheerder bent, upload dan een nieuwe versie van Ruffle (huidige versie is oud: { $buildDate }).
       *[false] Dit hoort niet te gebeuren, dus we stellen het op prijs als je de fout aan ons rapporteert!
    }
`,"save-manager.ftl":`save-delete-prompt = Weet je zeker dat je deze opgeslagen data wilt verwijderen?
save-reload-prompt =
    De enige manier om deze opgeslagen data te { $action ->
        [delete] verwijderen
       *[replace] vervangen
    } zonder potentiële problemen is door de inhoud opnieuw te laden. Toch doorgaan?
save-download = Downloaden
save-replace = Vervangen
save-delete = Verwijderen
save-backup-all = Download alle opgeslagen data
`,"volume-controls.ftl":`volume-controls = Geluidsniveaus
volume-controls-mute = Dempen
volume-controls-volume = Volume
`},"pl-PL":{"context_menu.ftl":`context-menu-download-swf = Pobierz .swf
context-menu-copy-debug-info = Kopiuj informacje debugowania
context-menu-open-save-manager = Otwórz Menadżer Zapisów
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Rozszerzeniu Ruffle ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Ukryj to menu
context-menu-exit-fullscreen = Zamknij pełny ekran
context-menu-enter-fullscreen = Pełny ekran
context-menu-volume-controls = Sterowanie głośnością
`,"messages.ftl":`message-cant-embed =
    Ruffle nie było w stanie uruchomić zawartości Flash w tej stronie.
    Możesz spróbować otworzyć plik w nowej karcie, aby uniknąć tego problemu.
panic-title = Coś poszło nie tak :(
more-info = Więcej informacji
run-anyway = Uruchom mimo tego
continue = Kontynuuj
report-bug = Zgłoś błąd
update-ruffle = Zaktualizuj Ruffle
ruffle-desktop = Aplikacja na komputer
ruffle-wiki = Zobacz Wiki Ruffle
enable-hardware-acceleration = Wygląda na to, że akceleracja sprzętowa nie jest włączona. Chociaż Ruffle może działać, może być nieproporcjonalnie wolna. Możesz dowiedzieć się, jak włączyć akcelerację sprzętową, podążając za tym linkiem.
view-error-details = Zobacz szczegóły błędu
open-in-new-tab = Otwórz w nowej karcie
click-to-unmute = Kliknij aby wyłączyć wyciszenie
error-file-protocol =
    Wygląda na to, że używasz Ruffle w protokole "plik:".
    To nie działa ponieważ przeglądarka blokuje wiele funkcji przed działaniem ze względów bezpieczeństwa.
    Zamiast tego zapraszamy do konfiguracji serwera lokalnego lub użycia aplikacji demo lub desktopowej.
error-javascript-config =
    Ruffle napotkał poważny problem z powodu nieprawidłowej konfiguracji JavaScript.
    Jeśli jesteś administratorem serwera, prosimy o sprawdzenie szczegółów błędu, aby dowiedzieć się, który parametr jest błędny.
    Możesz również zapoznać się z wiki Ruffle po pomoc.
error-wasm-not-found =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Jeśli jesteś administratorem serwera, upewnij się, że plik został poprawnie przesłany.
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć ustawienia "publicPath": zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-wasm-mime-type =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Ten serwer internetowy nie obsługuje ". asm" pliki z poprawnym typem MIME.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle aby uzyskać pomoc.
error-invalid-swf =
    Ruffle nie może przetworzyć żądanego pliku.
    Prawdopodobnie to nie jest poprawny plik SWF.
error-swf-fetch =
    Ruffle nie udało się załadować pliku Flash SWF.
    Najbardziej prawdopodobnym powodem jest to, że plik już nie istnieje, więc Ruffle nie ma nic do załadowania.
    Spróbuj skontaktować się z administratorem witryny, aby uzyskać pomoc.
error-swf-cors =
    Ruffle nie udało się załadować pliku Flash SWF.
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-cors =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Dostęp do pobierania został prawdopodobnie zablokowany przez politykę CORS.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-invalid =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona ma brakujące lub nieprawidłowe pliki do uruchomienia Ruffle.
    Jeśli jesteś administratorem serwera, prosimy o pomoc z wiki Ruffle.
error-wasm-download =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Może to często rozwiązać siebie, więc możesz spróbować odświeżyć stronę.
    W przeciwnym razie skontaktuj się z administratorem witryny.
error-wasm-disabled-on-edge =
    Ruffle nie udało się załadować wymaganego komponentu pliku ".wasm".
    Aby to naprawić, spróbuj otworzyć ustawienia przeglądarki, klikając "Prywatność, wyszukiwanie i usługi", przewijając w dół i wyłączając "Zwiększ bezpieczeństwo w sieci".
    Pozwoli to przeglądarce załadować wymagane pliki ".wasm".
    Jeśli problem będzie się powtarzał, być może będziesz musiał użyć innej przeglądarki.
error-javascript-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Wygląda na to, że ta strona używa kodu JavaScript, który koliduje z Ruffle.
    Jeśli jesteś administratorem serwera, zapraszamy Cię do ładowania pliku na pustej stronie.
error-javascript-conflict-outdated = Możesz również spróbować przesłać nowszą wersję Ruffle, która może ominąć problem (obecna wersja jest przestarzała: { $buildDate }).
error-csp-conflict =
    Ruffle napotkał poważny problem podczas próby zainicjowania.
    Polityka bezpieczeństwa zawartości tego serwera nie zezwala na wymagany ". wasm" komponent do uruchomienia.
    Jeśli jesteś administratorem serwera, zapoznaj się z wiki Ruffle po pomoc.
error-unknown =
    Ruffle napotkał poważny problem podczas próby wyświetlenia tej zawartości Flash.
    { $outdated ->
        [true] Jeśli jesteś administratorem serwera, spróbuj przesłać nowszą wersję Ruffle (obecna wersja jest przestarzała: { $buildDate }).
       *[false] To nie powinno się wydarzyć, więc bylibyśmy wdzięczni, gdybyś mógł zgłosić błąd!
    }
`,"save-manager.ftl":`save-delete-prompt = Czy na pewno chcesz skasować ten plik zapisu?
save-reload-prompt =
    Jedyną opcją, aby { $action ->
        [delete] usunąć
       *[replace] zamienić
    } ten plik zapisu bez potencjalnych konfliktów jest przeładowanie zawartości. Czy chcesz kontynuować?
save-download = Pobierz
save-replace = Zamień
save-delete = Usuń
save-backup-all = Pobierz wszystkie pliki zapisu
`,"volume-controls.ftl":`volume-controls = Sterowanie głośnością
volume-controls-mute = Wycisz
volume-controls-volume = Głośność
`},"pt-BR":{"context_menu.ftl":`context-menu-download-swf = Baixar .swf
context-menu-copy-debug-info = Copiar informação de depuração
context-menu-open-save-manager = Abrir o Gerenciador de Salvamento
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Sair da tela cheia
context-menu-enter-fullscreen = Entrar em tela cheia
context-menu-volume-controls = Controles de volume
`,"messages.ftl":`message-cant-embed =
    Ruffle não conseguiu executar o Flash incorporado nesta página.
    Você pode tentar abrir o arquivo em uma guia separada para evitar esse problema.
panic-title = Algo deu errado :(
more-info = Mais informação
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar Bug
update-ruffle = Atualizar Ruffle
ruffle-demo = Demo Web
ruffle-desktop = Aplicativo de Desktop
ruffle-wiki = Ver Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware não está habilitada. Embora o Ruffle possa funcionar, pode ser excessivamente lento. Você pode descobrir como ativar a aceleração de hardware seguindo este link.
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir em uma nova guia
click-to-unmute = Clique para ativar o som
error-file-protocol =
    Parece que você está executando o Ruffle no protocolo "file:".
    Isto não funciona como navegadores bloqueiam muitos recursos de funcionar por razões de segurança.
    Ao invés disso, convidamos você a configurar um servidor local ou a usar a demonstração da web, ou o aplicativo de desktop.
error-javascript-config =
    O Ruffle encontrou um grande problema devido a uma configuração incorreta do JavaScript.
    Se você for o administrador do servidor, convidamos você a verificar os detalhes do erro para descobrir qual parâmetro está com falha.
    Você também pode consultar o wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Se você é o administrador do servidor, por favor, certifique-se de que o arquivo foi carregado corretamente.
    Se o problema persistir, você pode precisar usar a configuração "publicPath": por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Este servidor de web não está servindo ".wasm" arquivos com o tipo MIME correto.
    Se você é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-invalid-swf =
    Ruffle não pode analisar o arquivo solicitado.
    O motivo provável é que o arquivo solicitado não seja um SWF válido.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    A razão provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contatar o administrador do site para obter ajuda.
error-swf-cors =
    Ruffle falhou ao carregar o arquivo Flash SWF.
    O acesso para fetch provavelmente foi bloqueado pela política CORS.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-cors =
    Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    O acesso para fetch foi provavelmente bloqueado pela política CORS.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página tem arquivos ausentes ou inválidos para executar o Ruffle.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um grande problema ao tentar inicializar.
    Muitas vezes isso pode se resolver sozinho, então você pode tentar recarregar a página.
    Caso contrário, contate o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de arquivo ".wasm" necessário.
    Para corrigir isso, tente abrir configurações do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore sua segurança na web".
    Isso permitirá que seu navegador carregue os arquivos ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-javascript-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se você for o administrador do servidor, convidamos você a tentar carregar o arquivo em uma página em branco.
error-javascript-conflict-outdated = Você também pode tentar fazer o upload de uma versão mais recente do Ruffle que pode contornar o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    Ruffle encontrou um grande problema ao tentar inicializar.
    A política de segurança de conteúdo deste servidor da web não permite a execução do componente ".wasm" necessário.
    Se você for o administrador do servidor, consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um grande problema enquanto tentava exibir este conteúdo em Flash.
    { $outdated ->
        [true] Se você é o administrador do servidor, por favor tente fazer o upload de uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Isso não deveria acontecer, então apreciaríamos muito se você pudesse arquivar um bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem certeza que deseja excluir este arquivo de salvamento?
save-reload-prompt =
    A única maneira de { $action ->
        [delete] excluir
       *[replace] substituir
    } este arquivo sem potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Baixar
save-replace = Substituir
save-delete = Excluir
save-backup-all = Baixar todos os arquivos de salvamento
`,"volume-controls.ftl":`volume-controls = Controles de volume
volume-controls-mute = Silenciar
volume-controls-volume = Volume
`},"pt-PT":{"context_menu.ftl":`context-menu-download-swf = Descarga.swf
context-menu-copy-debug-info = Copiar informações de depuração
context-menu-open-save-manager = Abrir Gestor de Gravações
context-menu-about-ruffle =
    { $flavor ->
        [extension] Sobre a extensão do Ruffle ({ $version })
       *[other] Sobre o Ruffle ({ $version })
    }
context-menu-hide = Esconder este menu
context-menu-exit-fullscreen = Fechar Ecrã Inteiro
context-menu-enter-fullscreen = Abrir Ecrã Inteiro
context-menu-volume-controls = Controlos de volume
`,"messages.ftl":`message-cant-embed =
    O Ruffle não conseguiu abrir o Flash integrado nesta página.
    Para tentar resolver o problema, pode abrir o ficheiro num novo separador.
panic-title = Algo correu mal :(
more-info = Mais informações
run-anyway = Executar mesmo assim
continue = Continuar
report-bug = Reportar falha
update-ruffle = Atualizar o Ruffle
ruffle-demo = Demonstração na Web
ruffle-desktop = Aplicação para Desktop
ruffle-wiki = Ver a Wiki do Ruffle
enable-hardware-acceleration = Parece que a aceleração de hardware não está ativada. Mesmo que o Ruffle funcione, pode estar excessivamente lento. Descubra como ativar a aceleração de hardware seguindo este link.
view-error-details = Ver detalhes do erro
open-in-new-tab = Abrir num novo separador
click-to-unmute = Clique para ativar o som
error-file-protocol =
    Parece que executa o Ruffle no protocolo "file:".
    Isto não funciona, já que os navegadores bloqueiam muitas funcionalidades por razões de segurança.
    Em vez disto, recomendados configurar um servidor local ou usar a demonstração na web, ou a aplicação para desktop.
error-javascript-config =
    O Ruffle encontrou um problema maior devido a uma configuração de JavaScript incorreta.
    Se é o administrador do servidor, convidamo-lo a verificar os detalhes do erro para descobrir o parâmetro problemático.
    Pode ainda consultar a wiki do Ruffle para obter ajuda.
error-wasm-not-found =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Se é o administrador do servidor, por favor certifique-se de que o ficheiro foi devidamente carregado.
    Se o problema persistir, poderá querer usar a configuração "publicPath": consulte a wiki do Ruffle para obter ajuda.
error-wasm-mime-type =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Este servidor de web não suporta ficheiros ".wasm" com o tipo MIME correto.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-swf-fetch =
    Ruffle falhou ao carregar o arquivo SWF do Flash
    A razão mais provável é que o arquivo não existe mais, então não há nada para o Ruffle carregar.
    Tente contactar o administrador do site para obter ajuda.
error-swf-cors =
    O Ruffle falhou ao carregar o ficheiro Flash SWF.
    Acesso a buscar foi provavelmente bloqueado pela política de CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-cors =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    O acesso a buscar foi provavelmente bloqueado pela política CORS.
    Se é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-invalid =
    Ruffle encontrou um grande problema ao tentar inicializar.
    Parece que esta página está ausente ou arquivos inválidos para executar o Ruffle.
    Se você é o administrador do servidor, por favor consulte a wiki do Ruffle para obter ajuda.
error-wasm-download =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Isto frequentemente resolve-se sozinho, portanto experimente recarregar a página.
    Caso contrário, por favor contacte o administrador do site.
error-wasm-disabled-on-edge =
    O Ruffle falhou ao carregar o componente de ficheiro ".wasm" necessário.
    Para corrigir isso, tente abrir as opções do seu navegador, clicando em "Privacidade, pesquisa e serviços", rolando para baixo e desativando "Melhore a sua segurança na web".
    Isto permitirá ao seu navegador carregar os ficheiros ".wasm" necessários.
    Se o problema persistir, talvez seja necessário usar um navegador diferente.
error-javascript-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    Parece que esta página usa código JavaScript que entra em conflito com o Ruffle.
    Se é o administrador do servidor, convidamo-lo a tentar carregar o ficheiro em numa página em branco.
error-javascript-conflict-outdated = Pode ainda tentar carregar uma versão mais recente do Ruffle que talvez contorne o problema (a compilação atual está desatualizada: { $buildDate }).
error-csp-conflict =
    O Ruffle encontrou um problema maior ao tentar inicializar.
    A Política de Segurança de Conteúdo deste servidor não permite que o componente ".wasm" necessário seja executado.
    Se é o administrador do servidor, por favor consulte o wiki do Ruffle para obter ajuda.
error-unknown =
    O Ruffle encontrou um problema maior enquanto tentava mostrar este conteúdo em Flash.
    { $outdated ->
        [true] Se é o administrador do servidor, por favor tente carregar uma versão mais recente do Ruffle (a compilação atual está desatualizada: { $buildDate }).
       *[false] Não era suposto isto ter acontecido, por isso agradeceríamos muito se pudesse reportar a falha!
    }
`,"save-manager.ftl":`save-delete-prompt = Tem a certeza de que quer apagar esta gravação?
save-reload-prompt =
    A única forma de { $action ->
        [delete] apagar
       *[replace] substituir
    } esta gravação sem um potencial conflito é recarregar este conteúdo. Deseja continuar mesmo assim?
save-download = Descarregar
save-replace = Substituir
save-delete = Apagar
save-backup-all = Descarregar todas as gravações
`,"volume-controls.ftl":`volume-controls = Controlos de volume
volume-controls-mute = Silenciar
volume-controls-volume = Volume
`},"ro-RO":{"context_menu.ftl":`context-menu-download-swf = Descarcă .swf
context-menu-copy-debug-info = Copiază informațiile de depanare
context-menu-open-save-manager = Deschide managerul de salvări
context-menu-about-ruffle =
    { $flavor ->
        [extension] Despre extensia Ruffle ({ $version })
       *[other] Despre Ruffle ({ $version })
    }
context-menu-hide = Ascunde acest meniu
context-menu-exit-fullscreen = Ieși din ecranul complet
context-menu-enter-fullscreen = Intră în ecran complet
context-menu-volume-controls = Comenzi pentru volum
`,"messages.ftl":`message-cant-embed =
    Ruffle nu a putut să ruleze Flash încorporat în această pagină.
    Poți încerca să deschizi fișierul într-o filă separată, pentru a evita această problemă.
panic-title = Ceva a mers prost :(
more-info = Mai multe informații
run-anyway = Rulează oricum
continue = Continuă
report-bug = Raportează un bug
update-ruffle = Actualizează Ruffle
ruffle-demo = Demo web
ruffle-desktop = Aplicație desktop
ruffle-wiki = Vezi wikiul Ruffle
view-error-details = Vezi detaliile erorii
open-in-new-tab = Deschide într-o filă nouă
click-to-unmute = Dă click pentru a dezmuți
error-file-protocol =
    Se pare că rulezi Ruffle pe protocolul „file:”.
    Acesta nu funcționează, deoarece browserele blochează funcționarea multor funcții din motive de securitate.
    În schimb, te invităm să configurezi un server local sau să folosești fie demoul web, fie aplicația desktop.
error-javascript-config =
    Ruffle a întâmpinat o problemă majoră din cauza unei configurări incorecte a JavaScript.
    Dacă ești administratorul serverului, te invităm să verifici detaliile erorii pentru a afla care parametru este defect.
    De asemenea, poți consulta wikiul Ruffle pentru ajutor.
error-wasm-not-found =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Dacă ești administratorul serverului, te rugăm să te asiguri că fișierul a fost încărcat corect.
    Dacă problema persistă, poate fi necesar să folosești setarea „publicPath”: te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-mime-type =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Acest server web nu servește fișiere „.wasm” cu tipul MIME corect.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-swf-fetch =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Motivul cel mai probabil este că fișierul nu mai există, deci Ruffle nu mai are ce să încarce.
    Încearcă să contactezi administratorul site-ului web pentru ajutor.
error-swf-cors =
    Ruffle a eșuat la încărcarea fișierului SWF.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-cors =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Accesul de preluare a fost probabil blocat de politica CORS.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-invalid =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină are fișiere lipsă sau nevalide pentru a rula Ruffle.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-wasm-download =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să inițializeze.
    Acest lucru se poate rezolva adesea de la sine, așa că poți încerca să reîncarci pagina.
    În caz contrar, te rugăm să contactezi administratorul site-ului web.
error-wasm-disabled-on-edge =
    Ruffle a eșuat la încărcarea componentei de fișier „.wasm”.
    Pentru a remedia acest lucru, încearcă să deschizi setările browserului, să faci clic pe „Confidențialitate, căutare și servicii”, să derulezi în jos și să dezactivezi „Îmbunătățiți-vă securitatea pe web”.
    Acest lucru va permite browserului să încarce fișierele „.wasm” necesare.
    Dacă problema persistă, este posibil să trebuiască să folosești un alt browser.
error-javascript-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Se pare că această pagină folosește cod JavaScript care intră în conflict cu Ruffle.
    Dacă ești administratorul serverului, te invităm să încerci încărcarea fișierului pe o pagină goală.
error-javascript-conflict-outdated = De asemenea, poți încerca să încarci o versiune mai recentă de Ruffle care ar putea ocoli problema (versiunea actuală este învechită: { $buildDate }).
error-csp-conflict =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să se inițializeze.
    Politica de securitate a conținutului a acestui server web nu permite rularea componentei „.wasm” necesare.
    Dacă ești administratorul serverului, te rugăm să consulți wikiul Ruffle pentru ajutor.
error-unknown =
    Ruffle a întâmpinat o problemă majoră în timp ce încerca să afișeze acest conținut Flash.
    { $outdated ->
        [true] Dacă ești administratorul serverului, te rugăm să încerci să încarci o versiune mai recentă de Ruffle (versiunea actuală este învechită: { $buildDate }).
       *[false] Acest lucru nu ar trebui să se întâmple, așa că am aprecia foarte mult dacă ai putea trimite un bug!
    }
`,"save-manager.ftl":`save-delete-prompt = Sigur vrei să ștergi acest fișier de salvare?
save-reload-prompt =
    Singura cale de a { $action ->
        [delete] șterge
       *[replace] înlocui
    } acest fișier de salvare fără un conflict potențial este de a reîncărca acest conținut. Dorești să continui oricum?
save-download = Descarcă
save-replace = Înlocuiește
save-delete = Șterge
`,"volume-controls.ftl":`volume-controls = Comenzi pentru volum
volume-controls-volume = Volum
`},"ru-RU":{"context_menu.ftl":`context-menu-download-swf = Скачать .swf
context-menu-copy-debug-info = Копировать отладочную информацию
context-menu-open-save-manager = Менеджер сохранений
context-menu-about-ruffle =
    { $flavor ->
        [extension] О расширении Ruffle ({ $version })
       *[other] О Ruffle ({ $version })
    }
context-menu-hide = Скрыть это меню
context-menu-exit-fullscreen = Оконный режим
context-menu-enter-fullscreen = Полноэкранный режим
context-menu-volume-controls = Громкость
`,"messages.ftl":`message-cant-embed =
    Ruffle не смог запустить Flash, используемый на этой странице.
    Чтобы обойти эту проблему, вы можете попробовать открыть файл в отдельной вкладке.
panic-title = Что-то пошло не так :(
more-info = Подробнее
run-anyway = Всё равно запустить
continue = Продолжить
report-bug = Сообщить об ошибке
update-ruffle = Обновить Ruffle
ruffle-demo = Веб-демо
ruffle-desktop = Настольное приложение
ruffle-wiki = Открыть вики Ruffle
enable-hardware-acceleration = Похоже, что аппаратное ускорение не включено. Хоть Ruffle и будет работать, он может быть неоправданно медленным. О том, как включить аппаратное ускорение, можно узнать, перейдя по ссылке.
view-error-details = Сведения об ошибке
open-in-new-tab = Открыть в новой вкладке
click-to-unmute = Включить звук
error-file-protocol =
    Похоже, что вы запускаете Ruffle по протоколу "file:".
    Это не работает, поскольку браузеры блокируют работу многих функций по соображениям безопасности.
    Вместо этого мы предлагаем вам использовать настольное приложение, веб-демо или настроить локальный сервер.
error-javascript-config =
    Возникла серьёзная ошибка из-за неправильной конфигурации JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам проверить детали ошибки, чтобы выяснить, какой параметр дал сбой.
    Вы также можете обратиться за помощью к вики Ruffle.
error-wasm-not-found =
    Ruffle не удалось запустить необходимый компонент файла ".wasm".
    Если вы администратор сервера, пожалуйста, убедитесь, что файл был загружен правильно.
    Если проблема не устраняется, вам может потребоваться использовать настройку "publicPath": обратитесь к вики Ruffle.
error-wasm-mime-type =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Этот веб-сервер не предоставляет файлы ".wasm" с правильным типом MIME.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-invalid-swf =
    Ruffle не удалось обработать запрашиваемый файл.
    Вероятнее всего, данный SWF повреждён или не является таковым.
error-swf-fetch =
    Ruffle не удалось запустить SWF-файл Flash.
    Вероятнее всего, файл больше не существует, поэтому Ruffle нечего загружать.
    Попробуйте связаться с администратором сайта для получения помощи.
error-swf-cors =
    Ruffle не удалось запустить SWF-файл Flash.
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-cors =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Скорее всего, доступ к файлу был заблокирован политикой CORS.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-invalid =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что на этой странице отсутствуют файлы для запуска Ruffle или они недействительны.
    Если вы администратор сервера, обратитесь за помощью к вики Ruffle.
error-wasm-download =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Чаще всего эта проблема устраняется сама собою, поэтому вы можете просто перезагрузить страницу.
    Если ошибка продолжает появляться, свяжитесь с администратором сайта.
error-wasm-disabled-on-edge =
    Ruffle не удалось загрузить необходимый компонент файла ".wasm".
    Чтобы исправить эту ошибку, попробуйте отключить в настройках браузера дополнительную конфиденциальность. Это позволит браузеру загрузить необходимые WASM-файлы.
    Если проблема осталась, вам может потребоваться другой браузер.
error-javascript-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Похоже, что эта страница использует конфликтующий с Ruffle код JavaScript.
    Если вы являетесь администратором сервера, мы предлагаем вам попробовать запустить файл на пустой странице.
error-javascript-conflict-outdated = Вы также можете попробовать загрузить последнюю версию Ruffle, которая может обойти проблему (текущая версия устарела: { $buildDate }).
error-csp-conflict =
    Ruffle столкнулся с серьёзной проблемой во время инициализации.
    Политика безопасности содержимого этого веб-сервера не позволяет использовать требуемые компоненты для запуска ".wasm".
    Если вы являетесь администратором сервера, обратитесь за помощью к вики Ruffle.
error-unknown =
    Ruffle столкнулся с серьёзной проблемой при попытке отобразить этот Flash-контент.
    { $outdated ->
        [true] Если вы администратор сервера, попробуйте загрузить более новую версию Ruffle (текущая версия устарела: { $buildDate }).
       *[false] Этого не должно происходить, поэтому мы будем очень признательны, если вы сообщите нам об ошибке!
    }
`,"save-manager.ftl":`save-delete-prompt = Удалить этот файл сохранения?
save-reload-prompt =
    Единственный способ { $action ->
        [delete] удалить
       *[replace] заменить
    } этот файл сохранения без потенциального конфликта – перезапустить запущенный контент. Всё равно продолжить?
save-download = Скачать
save-replace = Заменить
save-delete = Удалить
save-backup-all = Скачать все сохранения
`,"volume-controls.ftl":`volume-controls = Регулировка громкости
volume-controls-mute = Без звука
volume-controls-volume = Громкость
`},"sk-SK":{"context_menu.ftl":`context-menu-download-swf = Stiahnuť .swf
context-menu-copy-debug-info = Skopírovať debug info
context-menu-open-save-manager = Otvoriť správcu uložení
context-menu-about-ruffle =
    { $flavor ->
        [extension] O Ruffle rozšírení ({ $version })
       *[other] O Ruffle ({ $version })
    }
context-menu-hide = Skryť menu
context-menu-exit-fullscreen = Ukončiť režim celej obrazovky
context-menu-enter-fullscreen = Prejsť do režimu celej obrazovky
context-menu-volume-controls = Ovládanie hlasitosti
`,"messages.ftl":`message-cant-embed =
    Ruffle nemohol spustiť Flash vložený na tejto stránke.
    Môžete sa pokúsiť otvoriť súbor na samostatnej karte, aby ste sa vyhli tomuto problému.
panic-title = Niečo sa pokazilo :(
more-info = Viac informácií
run-anyway = Spustiť aj tak
continue = Pokračovať
report-bug = Nahlásiť chybu
update-ruffle = Aktualizovať Ruffle
ruffle-demo = Web Demo
ruffle-desktop = Desktopová aplikácia
ruffle-wiki = Zobraziť Ruffle Wiki
enable-hardware-acceleration = Zdá sa, že hardvérová akcelerácia nie je povolená. Aj keď Ruffle funguje správne, môže byť neprimerane pomalý. Ako povoliť hardvérovú akceleráciu zistíte na tomto odkaze.
view-error-details = Zobraziť podrobnosti o chybe
open-in-new-tab = Otvoriť na novej karte
click-to-unmute = Kliknutím zapnete zvuk
error-file-protocol =
    Zdá sa, že používate Ruffle na protokole "file:".
    To nie je možné, pretože prehliadače blokujú fungovanie mnohých funkcií z bezpečnostných dôvodov.
    Namiesto toho vám odporúčame nastaviť lokálny server alebo použiť web demo či desktopovú aplikáciu.
error-javascript-config =
    Ruffle narazil na problém v dôsledku nesprávnej konfigurácie JavaScriptu.
    Ak ste správcom servera, odporúčame vám skontrolovať podrobnosti o chybe, aby ste zistili, ktorý parameter je chybný.
    Pomoc môžete získať aj na wiki Ruffle.
error-wasm-not-found =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak ste správcom servera, skontrolujte, či bol súbor správne nahraný.
    Ak problém pretrváva, možno budete musieť použiť nastavenie „publicPath“: pomoc nájdete na wiki Ruffle.
error-wasm-mime-type =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Tento webový server neposkytuje súbory „.wasm“ so správnym typom MIME.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-invalid-swf =
    Ruffle nemôže spracovať požadovaný súbor.
    Najpravdepodobnejším dôvodom je, že požadovaný súbor nie je platným súborom SWF.
error-swf-fetch =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Najpravdepodobnejším dôvodom je, že súbor už neexistuje, takže Ruffle nemá čo načítať.
    Skúste požiadať o pomoc správcu webovej lokality.
error-swf-cors =
    Ruffle sa nepodarilo načítať SWF súbor Flash.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-cors =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Prístup k načítaniu bol pravdepodobne zablokovaný politikou CORS.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-invalid =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že na tejto stránke chýbajú alebo sú neplatné súbory na spustenie Ruffle.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-wasm-download =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Problém sa môže vyriešiť aj sám, takže môžete skúsiť stránku načítať znova.
    V opačnom prípade kontaktujte administrátora stránky.
error-wasm-disabled-on-edge =
    Ruffle sa nepodarilo načítať požadovaný komponent súboru „.wasm“.
    Ak chcete tento problém vyriešiť, skúste otvoriť nastavenia prehliadača, kliknite na položku „Ochrana osobných údajov, vyhľadávanie a služby“, prejdite nadol a vypnite možnosť „Zvýšte svoju bezpečnosť na webe“.
    Vášmu prehliadaču to umožní načítať požadované súbory „.wasm“.
    Ak problém pretrváva, možno budete musieť použiť iný prehliadač.
error-javascript-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zdá sa, že táto stránka používa kód JavaScript, ktorý je v konflikte s Ruffle.
    Ak ste správcom servera, odporúčame vám skúsiť načítať súbor na prázdnu stránku.
error-javascript-conflict-outdated = Môžete sa tiež pokúsiť nahrať novšiu verziu Ruffle, ktorá môže daný problém vyriešiť (aktuálny build je zastaraný: { $buildDate }).
error-csp-conflict =
    Ruffle narazil na problém pri pokuse o inicializáciu.
    Zásady zabezpečenia obsahu tohto webového servera nepovoľujú spustenie požadovaného komponentu „.wasm“.
    Ak ste správcom servera, pomoc nájdete na Ruffle wiki.
error-unknown =
    Ruffle narazil na problém pri pokuse zobraziť tento Flash obsah.
    { $outdated ->
         [true] Ak ste správcom servera, skúste nahrať novšiu verziu Ruffle (aktuálny build je zastaraný: { $buildDate }).
        *[false] Toto by sa nemalo stať, takže by sme naozaj ocenili, keby ste mohli nahlásiť chybu!
    }
`,"save-manager.ftl":`save-delete-prompt = Naozaj chcete odstrániť tento súbor s uloženými pozíciami?
save-reload-prompt =
    Jediný spôsob, ako { $action ->
         [delete] vymazať
        *[replace] nahradiť
    } tento súbor s uloženými pozíciami bez potenciálneho konfliktu je opätovné načítanie tohto obsahu. Chcete napriek tomu pokračovať?
save-download = Stiahnuť
save-replace = Nahradiť
save-delete = Vymazať
save-backup-all = Stiahnuť všetky súbory s uloženými pozíciami
`,"volume-controls.ftl":`volume-controls = Ovládanie hlasitosti
volume-controls-mute = Stlmiť
volume-controls-volume = Hlasitosť
`},"sv-SE":{"context_menu.ftl":`context-menu-download-swf = Ladda ner .swf
context-menu-copy-debug-info = Kopiera felsökningsinfo
context-menu-open-save-manager = Öppna Sparhanteraren
context-menu-about-ruffle =
    { $flavor ->
        [extension] Om Ruffle-tillägget ({ $version })
       *[other] Om Ruffle ({ $version })
    }
context-menu-hide = Dölj denna meny
context-menu-exit-fullscreen = Avsluta helskärm
context-menu-enter-fullscreen = Helskärm
context-menu-volume-controls = Ljudkontroller
`,"messages.ftl":`message-cant-embed =
    Ruffle kunde inte köra det inbäddade Flashinnehållet på denna sida.
    Du kan försöka öppna filen i en separat flik för att kringgå problemet.
panic-title = Något gick fel :(
more-info = Mer info
run-anyway = Kör ändå
continue = Fortsätt
report-bug = Rapportera Bugg
update-ruffle = Uppdatera Ruffle
ruffle-demo = Webbdemo
ruffle-desktop = Skrivbordsprogram
ruffle-wiki = Se Ruffle-wiki
enable-hardware-acceleration = Det verkar som att hårdvaruacceleration inte är på. Ruffle kan fortfarande fungera men kan vara orimligt långsam. Du kan ta reda på hur man sätter på hårdvaruacceleration genom att följa denna länk.
view-error-details = Visa Felinformation
open-in-new-tab = Öppna i en ny flik
click-to-unmute = Klicka för ljud
error-file-protocol =
    Det verkar som att du kör Ruffle på "fil:"-protokollet.
    Detta fungerar inte eftersom webbläsare blockerar många funktioner från att fungera av säkerhetsskäl.
    Istället bjuder vi in dig att sätta upp en lokal server eller antingen använda webbdemon eller skrivbordsprogrammet.
error-javascript-config =
    Ruffle har stött på ett stort fel på grund av en felaktig JavaScript-konfiguration.
    Om du är serveradministratören bjuder vi in dig att kontrollera feldetaljerna för att ta reda på vilken parameter som är felaktig.
    Du kan också konsultera Ruffle-wikin för hjälp.
error-wasm-not-found =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Om du är serveradministratören se till att filen har laddats upp korrekt.
    Om problemet kvarstår kan du behöva använda inställningen "publicPath": konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-mime-type =
    Ruffle har stött på ett stort fel under initialiseringen.
    Denna webbserver serverar inte ".wasm"-filer med korrekt MIME-typ.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-invalid-swf =
    Ruffle kan inte läsa den begärda filen.
    Det mest sannolika skälet är att den begärda filen inte är en giltig SWF.
error-swf-fetch =
    Ruffle misslyckades ladda SWF-filen.
    Det mest sannolika skälet är att filen inte längre existerar, så det finns inget för Ruffle att köra.
    Försök att kontakta webbplatsadministratören för hjälp.
error-swf-cors =
    Ruffle misslyckades ladda SWF-filen.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-cors =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    Åtkomst att hämta har sannolikt blockerats av CORS-policy.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-invalid =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan har saknade eller ogiltiga filer för att köra Ruffle.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-wasm-download =
    Ruffle har stött på ett stort fel under initialiseringen.
    Detta kan ofta lösas av sig själv så du kan prova att ladda om sidan.
    Kontakta annars vänligen webbplatsens administratör.
error-wasm-disabled-on-edge =
    Ruffle misslyckades ladda ".wasm"-filkomponenten.
    För att åtgärda detta försök att öppna webbläsarens inställningar, klicka på "Sekretess, sökning och tjänster", bläddra ner och stäng av "Förbättra säkerheten på webben".
    Detta tillåter din webbläsare att ladda ".wasm"-filerna.
    Om problemet kvarstår kan du behöva använda en annan webbläsare.
error-javascript-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Det verkar som att den här sidan använder JavaScript-kod som stör Ruffle.
    Om du är serveradministratören bjuder vi in dig att försöka köra filen på en blank sida.
error-javascript-conflict-outdated = Du kan också försöka ladda upp en nyare version av Ruffle, vilket kan kringgå problemet (nuvarande version är utdaterad: { $buildDate }).
error-csp-conflict =
    Ruffle har stött på ett stort fel under initialiseringen.
    Webbserverns Content Security Policy tillåter inte ".wasm"-komponenten att köra.
    Om du är serveradministratören konsultera vänligen Ruffle-wikin för hjälp.
error-unknown =
    Ruffle har stött på ett stort fel medan den försökte visa Flashinnehållet.
    { $outdated ->
        [true] Om du är serveradministratören försök att ladda upp en nyare version av Ruffle (nuvarande version är utdaterad: { $buildDate }).
       *[false] Detta är inte tänkt att hända så vi skulle verkligen uppskatta om du kunde rapportera in en bugg!
    }
`,"save-manager.ftl":`save-delete-prompt = Är du säker på att du vill radera sparfilen?
save-reload-prompt =
    Det enda sättet att { $action ->
        [delete] radera
       *[replace] ersätta
    } denna sparfil utan potentiell konflikt är att ladda om innehållet. Vill du fortsätta ändå?
save-download = Ladda ner
save-replace = Ersätt
save-delete = Radera
save-backup-all = Ladda ner alla sparfiler
`,"volume-controls.ftl":`volume-controls = Ljudkontroller
volume-controls-mute = Stäng av ljud
volume-controls-volume = Volym
`},"tr-TR":{"context_menu.ftl":`context-menu-download-swf = İndir .swf
context-menu-copy-debug-info = Hata ayıklama bilgisini kopyala
context-menu-open-save-manager = Kayıt Yöneticisini Aç
context-menu-about-ruffle =
    { $flavor ->
        [extension] Ruffle Uzantısı Hakkında ({ $version })
       *[other] Ruffle Hakkında ({ $version })
    }
context-menu-hide = Bu menüyü gizle
context-menu-exit-fullscreen = Tam ekrandan çık
context-menu-enter-fullscreen = Tam ekran yap
context-menu-volume-controls = Ses kontrolleri
`,"messages.ftl":`message-cant-embed =
    Ruffle, bu sayfaya gömülü Flash'ı çalıştıramadı.
    Bu sorunu ortadan kaldırmak için dosyayı ayrı bir sekmede açmayı deneyebilirsiniz.
panic-title = Bir şeyler yanlış gitti :(
more-info = Daha fazla bilgi
run-anyway = Yine de çalıştır
continue = Devam et
report-bug = Hata Bildir
update-ruffle = Ruffle'ı Güncelle
ruffle-demo = Ağ Demosu
ruffle-desktop = Masaüstü Uygulaması
ruffle-wiki = Ruffle Wiki'yi Görüntüle
enable-hardware-acceleration = Görünüşe göre donanım hızlandırma etkin değil. Ruffle çalışabilir ancak fazlasıyla yavaş olabilir. Donanım hızlandırmayı nasıl etkinleştirebiliceğiniz hakkında bu linkten bilgi edinebilirsiniz.
view-error-details = Hata Ayrıntılarını Görüntüle
open-in-new-tab = Yeni sekmede aç
click-to-unmute = Sesi açmak için tıklayın
error-file-protocol =
    Görünüşe göre Ruffle'ı "dosya:" protokolünde çalıştırıyorsunuz.
    Tarayıcılar güvenlik nedenleriyle birçok özelliğin çalışmasını engellediğinden bu işe yaramaz.
    Bunun yerine, sizi yerel bir sunucu kurmaya veya ağın demosunu ya da masaüstü uygulamasını kullanmaya davet ediyoruz.
error-javascript-config =
    Ruffle, yanlış bir JavaScript yapılandırması nedeniyle önemli bir sorunla karşılaştı.
    Sunucu yöneticisiyseniz, hangi parametrenin hatalı olduğunu bulmak için sizi hata ayrıntılarını kontrol etmeye davet ediyoruz.
    Yardım için Ruffle wiki'sine de başvurabilirsiniz.
error-wasm-not-found =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Sunucu yöneticisi iseniz, lütfen dosyanın doğru bir şekilde yüklendiğinden emin olun.
    Sorun devam ederse, "publicPath" ayarını kullanmanız gerekebilir: yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-mime-type =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusu, doğru MIME tipinde ".wasm" dosyaları sunmuyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-invalid-swf =
    Ruffle istenen dosyayı ayrıştıramıyor.
    Bunun en olası nedeni, istenen dosyanın geçerli bir SWF olmamasıdır.
error-swf-fetch =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Bunun en olası nedeni, dosyanın artık mevcut olmaması ve bu nedenle Ruffle'ın yükleyeceği hiçbir şeyin olmamasıdır.
    Yardım için web sitesi yöneticisiyle iletişime geçmeyi deneyin.
error-swf-cors =
    Ruffle, Flash SWF dosyasını yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-cors =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Getirme erişimi muhtemelen CORS politikası tarafından engellenmiştir.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-invalid =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfada Ruffle'ı çalıştırmak için eksik veya geçersiz dosyalar var.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine başvurun.
error-wasm-download =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu genellikle kendi kendine çözülebilir, bu nedenle sayfayı yeniden yüklemeyi deneyebilirsiniz.
    Aksi takdirde, lütfen site yöneticisiyle iletişime geçin.
error-wasm-disabled-on-edge =
    Ruffle gerekli ".wasm" dosya bileşenini yükleyemedi.
    Bunu düzeltmek için tarayıcınızın ayarlarını açın, "Gizlilik, arama ve hizmetler"i tıklayın, aşağı kaydırın ve "Web'de güvenliğinizi artırın"ı kapatmayı deneyin.
    Bu, tarayıcınızın gerekli ".wasm" dosyalarını yüklemesine izin verecektir.
    Sorun devam ederse, farklı bir tarayıcı kullanmanız gerekebilir.
error-javascript-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Görünüşe göre bu sayfa, Ruffle ile çakışan JavaScript kodu kullanıyor.
    Sunucu yöneticisiyseniz, sizi dosyayı boş bir sayfaya yüklemeyi denemeye davet ediyoruz.
error-javascript-conflict-outdated = Ayrıca sorunu giderebilecek daha yeni bir Ruffle sürümü yüklemeyi de deneyebilirsiniz (mevcut yapım eskimiş: { $buildDate }).
error-csp-conflict =
    Ruffle, başlatmaya çalışırken önemli bir sorunla karşılaştı.
    Bu web sunucusunun İçerik Güvenliği Politikası, gerekli ".wasm" bileşeninin çalışmasına izin vermiyor.
    Sunucu yöneticisiyseniz, yardım için lütfen Ruffle wiki'sine bakın.
error-unknown =
    Ruffle, bu Flash içeriğini görüntülemeye çalışırken önemli bir sorunla karşılaştı.
    { $outdated ->
        [true] Sunucu yöneticisiyseniz, lütfen Ruffle'ın daha yeni bir sürümünü yüklemeyi deneyin (mevcut yapım eskimiş: { $buildDate }).
       *[false] Bunun olmaması gerekiyor, bu yüzden bir hata bildirebilirseniz çok memnun oluruz!
    }
`,"save-manager.ftl":`save-delete-prompt = Bu kayıt dosyasını silmek istediğinize emin misiniz?
save-reload-prompt =
    Bu kaydetme dosyasını potansiyel çakışma olmadan { $action ->
        [delete] silmenin
       *[replace] değiştirmenin
    } tek yolu, bu içeriği yeniden yüklemektir. Yine de devam etmek istiyor musunuz?
save-download = İndir
save-replace = Değiştir
save-delete = Sil
save-backup-all = Tüm kayıt dosyalarını indir
`,"volume-controls.ftl":`volume-controls = Ses kontrolleri
volume-controls-mute = Sustur
volume-controls-volume = Ses
`},"zh-CN":{"context_menu.ftl":`context-menu-download-swf = 下载 .swf
context-menu-copy-debug-info = 复制调试信息
context-menu-open-save-manager = 打开存档管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 关于 Ruffle 扩展 ({ $version })
       *[other] 关于 Ruffle ({ $version })
    }
context-menu-hide = 隐藏此菜单
context-menu-exit-fullscreen = 退出全屏
context-menu-enter-fullscreen = 进入全屏
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    Ruffle 无法运行嵌入在此页面中的 Flash。
    您可以尝试在单独的标签页中打开该文件，以回避此问题。
panic-title = 出了些问题 :(
more-info = 更多信息
run-anyway = 仍然运行
continue = 继续
report-bug = 反馈问题
update-ruffle = 更新 Ruffle
ruffle-demo = 网页演示
ruffle-desktop = 桌面应用程序
ruffle-wiki = 查看 Ruffle Wiki
enable-hardware-acceleration = 看起来硬件加速未启用。虽然 Ruffle 可能运行，但可能会非常慢。您可以通过此链接了解启用硬件加速的方法。
view-error-details = 查看错误详情
open-in-new-tab = 在新标签页中打开
click-to-unmute = 点击取消静音
error-file-protocol =
    看来您正在 "file:" 协议上使用 Ruffle。
    由于浏览器以安全原因阻止许多功能，因此这不起作用。
    相反我们邀请您设置本地服务器或使用网页演示或桌面应用程序。
error-javascript-config =
    由于错误的 JavaScript 配置，Ruffle 遇到了一个重大问题。
    如果您是服务器管理员，我们邀请您检查错误详细信息，以找出哪个参数有故障。
    您也可以查阅 Ruffle 的 Wiki 获取帮助。
error-wasm-not-found =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    如果您是服务器管理员，请确保文件已正确上传。
    如果问题仍然存在，您可能需要使用 “publicPath” 设置：请查看 Ruffle 的 Wiki 获取帮助。
error-wasm-mime-type =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器没有提供 ".asm” 文件正确的 MIME 类型。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-invalid-swf =
    Ruffle无法解析请求的文件。
    最有可能的原因是该请求文件不是一个合法的SWF文件。
error-swf-fetch =
    Ruffle 无法加载 Flash SWF 文件。
    最可能的原因是文件不再存在所以 Ruffle 没有要加载的内容。
    请尝试联系网站管理员寻求帮助。
error-swf-cors =
    Ruffle 无法加载 Flash SWF 文件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请参考 Ruffle Wiki 获取帮助。
error-wasm-cors =
    Ruffle 无法加载所需的“.wasm”文件组件。
    获取权限可能被 CORS 策略阻止。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-invalid =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎缺少文件来运行 Curl。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-wasm-download =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这通常可以自行解决，因此您可以尝试重新加载页面。
    否则请联系网站管理员。
error-wasm-disabled-on-edge =
    Ruffle 无法加载所需的 “.wasm” 文件组件。
    要解决这个问题，请尝试打开您的浏览器设置，单击"隐私、搜索和服务"，向下滚动并关闭"增强 Web 安全性"。
    这将允许您的浏览器加载所需的 “.wasm” 文件。
    如果问题仍然存在，您可能必须使用不同的浏览器。
error-javascript-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    这个页面似乎使用了与 Ruffle 冲突的 JavaScript 代码。
    如果您是服务器管理员，我们建议您尝试在空白页面上加载文件。
error-javascript-conflict-outdated = 您还可以尝试上传可能规避该问题的最新版本的 (当前构建已过时: { $buildDate })。
error-csp-conflict =
    Ruffle 在试图初始化时遇到了一个重大问题。
    该网站服务器的内容安全策略不允许运行所需的 “.wasm” 组件。
    如果您是服务器管理员，请查阅 Ruffle Wiki 获取帮助。
error-unknown =
    Ruffle 在试图显示此 Flash 内容时遇到了一个重大问题。
    { $outdated ->
        [true] 如果您是服务器管理员，请尝试上传更新的 Ruffle 版本 (当前版本已过时: { $buildDate }).
       *[false] 这不应该发生，因此如果您可以报告错误，我们将非常感谢！
    }
`,"save-manager.ftl":`save-delete-prompt = 确定要删除此存档吗？
save-reload-prompt =
    为了避免潜在的冲突，{ $action ->
        [delete] 删除
       *[replace] 替换
    } 此存档文件需要重新加载当前内容。是否仍然继续？
save-download = 下载
save-replace = 替换
save-delete = 删除
save-backup-all = 下载所有存档文件
`,"volume-controls.ftl":`volume-controls = 音量控制
volume-controls-mute = 静音
volume-controls-volume = 音量
`},"zh-TW":{"context_menu.ftl":`context-menu-download-swf = 下載SWF檔案
context-menu-copy-debug-info = 複製除錯資訊
context-menu-open-save-manager = 開啟存檔管理器
context-menu-about-ruffle =
    { $flavor ->
        [extension] 關於Ruffle擴充功能 ({ $version })
       *[other] 關於Ruffle ({ $version })
    }
context-menu-hide = 隱藏菜單
context-menu-exit-fullscreen = 退出全螢幕
context-menu-enter-fullscreen = 進入全螢幕
context-menu-volume-controls = 音量控制
`,"messages.ftl":`message-cant-embed =
    目前Ruffle沒辦法執行嵌入式Flash。
    你可以在新分頁中開啟來解決這個問題。
panic-title = 完蛋，出問題了 :(
more-info = 更多資訊
run-anyway = 直接執行
continue = 繼續
report-bug = 回報BUG
update-ruffle = 更新Ruffle
ruffle-demo = 網頁展示
ruffle-desktop = 桌面應用程式
ruffle-wiki = 查看Ruffle Wiki
enable-hardware-acceleration =
    看起來你的硬體加速沒有開啟，雖然Ruffle還可以執行，但是你會感覺到會很慢。
    你可以在下方連結找到如何開啟硬體加速。
view-error-details = 檢視錯誤詳細資料
open-in-new-tab = 開啟新增分頁
click-to-unmute = 點擊以取消靜音
error-file-protocol =
    看起來你想要用Ruffle來執行"file:"的協議。
    因為瀏覽器禁了很多功能以資安的理由來講。
    我們建議你建立本地伺服器或著直接使用網頁展示或桌面應用程式。
error-javascript-config =
    目前Ruffle遇到不正確的JavaScript配置。
    如果你是伺服器管理員，我們建議你檢查哪個環節出錯。
    或著你可以查詢Ruffle wiki得到需求幫助。
error-wasm-not-found =
    目前Ruffle找不到".wasm"檔案。
    如果你是伺服器管理員，確保檔案是否放對位置。
    如果還是有問題的話，你要用"publicPath"來設定: 或著查詢Ruffle wiki得到需求幫助。
error-wasm-mime-type =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器並沒有服務".wasm"檔案或正確的網際網路媒體類型。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-invalid-swf =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案並一個不是有效的SWF。
error-swf-fetch =
    目前Ruffle無法讀取Flash的SWF檔案。
    很有可能要讀取的檔案不存在，所以Ruffle讀不到東西。
    請嘗試溝通伺服器管理員得到需求幫助。
error-swf-cors =
    目前Ruffle無法讀取Flash的SWF檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-cors =
    目前Ruffle無法讀取".wasm"檔案。
    看起來是使用權被跨來源資源共用機制被擋到了。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-invalid =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁有缺失檔案導致Ruffle無法運行。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-wasm-download =
    目前Ruffle初始化時遇到重大問題。
    這可以你自己解決，你只要重新整理就好了。
    否則，請嘗試溝通伺服器管理員得到需求幫助。
error-wasm-disabled-on-edge =
    目前Ruffle無法讀取".wasm"檔案。
    要修正的話，打開你的瀏覽器設定，點選"隱私權、搜尋與服務"，把"防止追蹤"給關掉。
    這樣一來你的瀏覽器會讀取需要的".wasm"檔案。
    如果問題一直還在的話，你必須要換瀏覽器了。
error-javascript-conflict =
    目前Ruffle初始化時遇到重大問題。
    看起來這網頁使用的JavaScript會跟Ruffle起衝突。
    如果你是伺服器管理員，我們建議你開個空白頁來測試。
error-javascript-conflict-outdated = 你也可以上傳最新版的Ruffle，說不定你要說的的問題已經不見了(現在使用的版本已經過時: { $buildDate })。
error-csp-conflict =
    目前Ruffle初始化時遇到重大問題。
    這網頁伺服器被跨來源資源共用機制禁止讀取".wasm"檔案。
    如果你是伺服器管理員，請查詢Ruffle wiki得到需求幫助。
error-unknown =
    目前Ruffle初始化要讀取Flash內容時遇到重大問題
    { $outdated ->
        [true] 如果你是伺服器管理員， 請上傳最新版的Ruffle(現在使用的版本已經過時: { $buildDate }).
       *[false] 這不應該發生的，我們也很高興你告知bug!
    }
`,"save-manager.ftl":`save-delete-prompt = 你確定要刪除這個存檔嗎？
save-reload-prompt =
    唯一方法只有 { $action ->
        [delete] 刪除
       *[replace] 取代
    } 這個存檔不會完全取代直到重新啟動. 你需要繼續嗎?
save-download = 下載
save-replace = 取代
save-delete = 刪除
save-backup-all = 下載所有存檔檔案。
`,"volume-controls.ftl":`volume-controls = 音量控制
volume-controls-mute = 靜音
volume-controls-volume = 音量
`}},Vl={};for(const[e,n]of Object.entries(iv)){const t=new Dh(e);if(n){for(const[r,o]of Object.entries(n))if(o)for(const i of t.addResource(new Qh(o)))console.error(`Error in text for ${e} ${r}: ${i}`)}Vl[e]=t}function av(e,n,t){const r=Vl[e];if(r!==void 0){const o=r.getMessage(n);if(o!==void 0&&o.value)return r.formatPattern(o.value,t)}return null}function T(e,n){const t=ov(navigator.languages,Object.keys(Vl),{defaultLocale:"en-US"});for(const r in t){const o=av(t[r],e,n);if(o)return o}return console.error(`Unknown text key '${e}'`),e}function pe(e,n){const t=document.createElement("div");return T(e,n).split(`
`).forEach(r=>{const o=document.createElement("p");o.innerText=r,t.appendChild(o)}),t}function lv(e,n){for(const t of n)try{e.insertRule(t)}catch{}}function sv(e){if(!e.sheet)return;const n=[`:host {
            all: initial;
            pointer-events: inherit;

            --ruffle-blue: #37528c;
            --ruffle-orange: #ffad33;

            display: inline-block;
            position: relative;
            /* Default width/height; this will get overridden by user styles/attributes. */
            width: 550px;
            height: 400px;
            font-family: Arial, sans-serif;
            letter-spacing: 0.4px;
            touch-action: none;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
        }`,`:host(:-webkit-full-screen) {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }`,`.hidden {
            display: none !important;
        }`,`#container,
        #play-button,
        #unmute-overlay,
        #unmute-overlay .background,
        #panic,
        #splash-screen,
        #message-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }`,`#container {
            overflow: hidden;
        }`,`#container canvas {
            width: 100%;
            height: 100%;
        }`,`#play-button,
        #unmute-overlay {
            cursor: pointer;
            display: none;
        }`,`#unmute-overlay .background {
            background: black;
            opacity: 0.7;
        }`,`#play-button .icon,
        #unmute-overlay .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50%;
            height: 50%;
            max-width: 384px;
            max-height: 384px;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }`,`#play-button:hover .icon,
        #unmute-overlay:hover .icon {
            opacity: 1;
        }`,`#panic {
            font-size: 20px;
            text-align: center;
            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);
            color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
        }`,`#panic a {
            color: var(--ruffle-blue);
            font-weight: bold;
        }`,`#panic-title {
            font-size: xxx-large;
            font-weight: bold;
        }`,`#panic-body.details {
            flex: 0.9;
            margin: 0 10px;
        }`,`#panic-body textarea {
            width: 100%;
            height: 100%;
            resize: none;
        }`,`#panic ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: space-evenly;
        }`,`#message-overlay {
            position: absolute;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            opacity: 1;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }`,`#message-overlay .message {
            text-align: center;
            max-height: 100%;
            max-width: 100%;
            padding: 5%;
            font-size: 20px;
        }`,`#message-overlay p {
            margin: 0.5em 0;
        }`,`#message-overlay .message div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            column-gap: 1em;
        }`,`#message-overlay a, #message-overlay button {
            cursor: pointer;
            background: var(--ruffle-blue);
            color: var(--ruffle-orange);
            border: 2px solid var(--ruffle-orange);
            font-weight: bold;
            font-size: 1.25em;
            border-radius: 0.6em;
            padding: 10px;
            text-decoration: none;
            margin: 2% 0;
        }`,`#message-overlay a:hover, #message-overlay button:hover {
            background: #ffffff4c;
        }`,`#continue-btn {
             cursor: pointer;
             background: var(--ruffle-blue);
             color: var(--ruffle-orange);
             border: 2px solid var(--ruffle-orange);
             font-weight: bold;
             font-size: 20px;
             border-radius: 20px;
             padding: 10px;
        }`,`#continue-btn:hover {
            background: #ffffff4c;
        }`,`#context-menu-overlay {
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
        }`,`#context-menu {
            color: black;
            background: #fafafa;
            border: 1px solid gray;
            box-shadow: 0px 5px 10px -5px black;
            position: absolute;
            font-size: 14px;
            text-align: left;
            list-style: none;
            padding: 0;
            margin: 0;
        }`,`#context-menu .menu-item {
            padding: 5px 10px;
            cursor: pointer;
            color: black;
        }`,`#context-menu .menu-item.disabled {
            cursor: default;
            color: gray;
        }`,`#context-menu .menu-item:not(.disabled):hover {
            background: lightgray;
        }`,`#context-menu .menu-separator hr {
            border: none;
            border-bottom: 1px solid lightgray;
            margin: 2px;
        }`,`#splash-screen {
            display: flex;
            flex-direction: column;
            background: var(--splash-screen-background, var(--preloader-background, var(--ruffle-blue)));
            align-items: center;
            justify-content: center;
        }`,`.loadbar {
            width: 100%;
            max-width: 316px;
            max-height: 10px;
            height: 20%;
            background: #253559;
        }`,`.loadbar-inner {
            width: 0px;
            max-width: 100%;
            height: 100%;
            background: var(--ruffle-orange);
        }`,`.logo {
            display: var(--logo-display, block);
            max-width: 380px;
            max-height: 150px;
        }`,`.loading-animation {
            max-width: 28px;
            max-height: 28px;
            margin-bottom: 2%;
            width: 10%;
            aspect-ratio: 1;
        }`,`.spinner {
            stroke-dasharray: 180;
            stroke-dashoffset: 135;
            stroke: var(--ruffle-orange);
            transform-origin: 50% 50%;
            animation: rotate 1.5s linear infinite;
        }`,`@keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }`,`#virtual-keyboard {
            position: absolute;
            opacity: 0;
            top: -100px;
            width: 1px;
            height: 1px;
        }`,`.modal {
            height: inherit;
            user-select: text;
        }`,`.modal-area {
            position: sticky;
            background: white;
            width: fit-content;
            padding: 16px 28px 16px 16px;
            border: 3px solid black;
            margin: auto;
        }`,`#modal-area {
            height: 500px;
            max-height: calc(100% - 38px);
            min-height: 80px;
        }`,`#restore-save {
            display: none;
        }`,`.replace-save {
            display: none;
        }`,`.save-option {
            display: inline-block;
            padding: 3px 10px;
            margin: 5px 2px;
            cursor: pointer;
            border-radius: 50px;
            background-color: var(--ruffle-blue);
            color: white;
        }`,`.close-modal {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: x-large;
        }`,`.general-save-options {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 2px solid #888;
        }`,`#local-saves {
            border-collapse: collapse;
            overflow-y: auto;
            display: block;
            padding-right: 16px;
            height: calc(100% - 45px);
            min-height: 30px;
        }`,`#local-saves td {
            border-bottom: 1px solid #bbb;
            height: 30px;
        }`,`#local-saves tr td:nth-child(1) {
            padding-right: 1em;
            word-break: break-all;
        }`,`#local-saves tr:nth-child(even) {
            background-color: #f2f2f2;
        }`,`#video-holder {
            padding-top: 20px;
        }`,`#video-holder video {
            max-width: 100%;
            height: calc(100% - 58px);
        }`,`.slider-container {
            margin-top: 10px;
            display: flex;
            align-items: center;
        }`,`#volume-slider {
            margin-left: 10px;
            margin-right: 10px;
        }`,`#volume-slider-text {
            text-align: right;
            width: 28px;
        }`,`.acceleration-link {
            color: var(--ruffle-blue);
            text-decoration: none;
        }`,`.acceleration-link:hover {
            text-decoration: underline;
        }`];lv(e.sheet,n)}function F(e,n,t,r,o){const i=o?document.createElementNS(o,e):document.createElement(e);if(n&&(i.id=n),t&&o?i.classList.add(t):t&&(i.className=t),r)for(const[a,s]of Object.entries(r))i.setAttribute(a,s);return i}function Qd(e,n,t,r,o){const i=F("input",n);return i.type=e,t&&(i.min=t),r&&(i.max=r),o&&(i.step=o),i}function Zd(e,n){const t=F("label",e);return t.htmlFor=n,t}function P(e,n){e.appendChild(n)}const en=document.createElement("template"),J="http://www.w3.org/2000/svg",uv=F("style","static-styles"),cv=F("style","dynamic-styles"),ui=F("div","container"),Gd=F("div","play-button"),Yd=F("div",void 0,"icon"),Hl=F("svg",void 0,void 0,{xmlns:J,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 250 250",width:"100%",height:"100%"},J),Jl=F("defs",void 0,void 0,void 0,J),Kl=F("linearGradient","a",void 0,{gradientUnits:"userSpaceOnUse",x1:"125",y1:"0",x2:"125",y2:"250",spreadMethod:"pad"},J),dv=F("stop",void 0,void 0,{offset:"0%","stop-color":"#FDA138"},J),fv=F("stop",void 0,void 0,{offset:"100%","stop-color":"#FD3A40"},J),Ql=F("g","b",void 0,void 0,J),pv=F("path",void 0,void 0,{fill:"url(#a)",d:"M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"},J),mv=F("path",void 0,void 0,{fill:"#FFF",d:"M87 55v140l100-70L87 55z"},J),Xd=document.createElementNS(J,"use");Xd.href.baseVal="#b";const Zl=F("div","unmute-overlay"),hv=F("div",void 0,"background"),ef=F("div",void 0,"icon"),Dr=F("svg","unmute-overlay-svg",void 0,{xmlns:J,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 512 584",width:"100%",height:"100%",scale:"0.8"},J),vv=F("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"},J),gv=F("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"},J),wv=F("path",void 0,void 0,{fill:"#FFF",stroke:"#FFF",d:"m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"},J),yv=F("text","unmute-text",void 0,{x:"256",y:"560","text-anchor":"middle","font-size":"60px",fill:"#FFF",stroke:"#FFF"},J),kv=F("input","virtual-keyboard",void 0,{type:"text",autocapitalize:"off",autocomplete:"off",autocorrect:"off"}),ci=F("div","splash-screen","hidden"),nf=F("svg",void 0,"logo",{xmlns:J,"xmlns:xlink":"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",viewBox:"0 0 380 150"},J),Gl=F("g",void 0,void 0,void 0,J),bv=F("path",void 0,void 0,{fill:"#966214",d:"M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"},J),Sv=F("path",void 0,void 0,{fill:"var(--ruffle-orange)",d:"M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"},J),tf=F("svg",void 0,"loading-animation",{xmlns:J,viewBox:"0 0 66 66"},J),Rv=F("circle",void 0,"spinner",{fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},J),rf=F("div",void 0,"loadbar"),xv=F("div",void 0,"loadbar-inner"),of=F("div","save-manager","modal hidden"),di=F("div","modal-area","modal-area"),af=F("span",void 0,"close-modal");af.textContent="×";const lf=F("div",void 0,"general-save-options"),zv=F("span","backup-saves","save-option"),Ev=F("table","local-saves"),sf=F("div","volume-controls-modal","modal hidden"),Yl=F("div",void 0,"modal-area"),uf=F("span",void 0,"close-modal");uf.textContent="×";const Ir=F("div","volume-controls"),jv=F("h2","volume-controls-heading"),Cv=Zd("mute-checkbox-label","mute-checkbox"),_v=Qd("checkbox","mute-checkbox"),fi=F("div",void 0,"slider-container"),Pv=Zd("volume-slider-label","volume-slider"),Fv=Qd("range","volume-slider","0","100","1"),Av=F("span","volume-slider-text"),cf=F("div","video-modal","modal hidden"),Xl=F("div",void 0,"modal-area"),df=F("span",void 0,"close-modal");df.textContent="×";const Dv=F("div","video-holder"),ff=F("div","hardware-acceleration-modal","modal hidden"),es=F("div",void 0,"modal-area"),pf=F("span",void 0,"close-modal");pf.textContent="×";const Lr=document.createElement("a");Lr.href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#chrome-hardware-acceleration";Lr.target="_blank";Lr.className="acceleration-link";Lr.textContent=T("enable-hardware-acceleration");const mf=F("div","context-menu-overlay","hidden"),Iv=F("ul","context-menu");P(en.content,uv);P(en.content,cv);P(en.content,ui);P(ui,Gd);P(Gd,Yd);P(Yd,Hl);P(Hl,Jl);P(Jl,Kl);P(Kl,dv);P(Kl,fv);P(Jl,Ql);P(Ql,pv);P(Ql,mv);P(Hl,Xd);P(ui,Zl);P(Zl,hv);P(Zl,ef);P(ef,Dr);P(Dr,vv);P(Dr,gv);P(Dr,wv);P(Dr,yv);P(ui,kv);P(en.content,ci);P(ci,nf);P(nf,Gl);P(Gl,bv);P(Gl,Sv);P(ci,tf);P(tf,Rv);P(ci,rf);P(rf,xv);P(en.content,of);P(of,di);P(di,af);P(di,lf);P(lf,zv);P(di,Ev);P(en.content,sf);P(sf,Yl);P(Yl,uf);P(Yl,Ir);P(Ir,jv);P(Ir,Cv);P(Ir,_v);P(Ir,fi);P(fi,Pv);P(fi,Fv);P(fi,Av);P(en.content,cf);P(cf,Xl);P(Xl,df);P(Xl,Dv);P(en.content,ff);P(ff,es);P(es,pf);P(es,Lr);P(en.content,mf);P(mf,Iv);const Lv=999,Ba={};function Ov(e){const n=Ba[e];return n!==void 0?{internalName:e,name:n.name,class:n.class}:null}function ns(e,n){const t=Ba[e];if(t!==void 0){if(t.class!==n)throw new Error("Internal naming conflict on "+e);return t.name}let r=0;if(window.customElements!==void 0)for(;r<Lv;){let o=e;if(r>0&&(o=o+"-"+r),window.customElements.get(o)!==void 0){r+=1;continue}else window.customElements.define(o,n);return Ba[e]={class:n,name:o,internalName:e},o}throw new Error("Failed to assign custom element "+e)}var Ct;(function(e){e.On="on",e.Off="off",e.Auto="auto"})(Ct||(Ct={}));var Uo;(function(e){e.Off="off",e.Fullscreen="fullscreen",e.On="on"})(Uo||(Uo={}));var Er;(function(e){e.Visible="visible",e.Hidden="hidden"})(Er||(Er={}));var qo;(function(e){e.Error="error",e.Warn="warn",e.Info="info",e.Debug="debug",e.Trace="trace"})(qo||(qo={}));var Bo;(function(e){e.Window="window",e.Opaque="opaque",e.Transparent="transparent",e.Direct="direct",e.Gpu="gpu"})(Bo||(Bo={}));var _u;(function(e){e.WebGpu="webgpu",e.WgpuWebgl="wgpu-webgl",e.Webgl="webgl",e.Canvas="canvas"})(_u||(_u={}));var gt;(function(e){e.On="on",e.RightClickOnly="rightClickOnly",e.Off="off"})(gt||(gt={}));var Va;(function(e){e.AIR="air",e.FlashPlayer="flashPlayer"})(Va||(Va={}));var Ha;(function(e){e.Allow="allow",e.Confirm="confirm",e.Deny="deny"})(Ha||(Ha={}));var Ja;(function(e){e.All="all",e.Internal="internal",e.None="none"})(Ja||(Ja={}));const Tv={allowScriptAccess:!1,parameters:{},autoplay:Ct.Auto,backgroundColor:null,letterbox:Uo.Fullscreen,unmuteOverlay:Er.Visible,upgradeToHttps:!0,compatibilityRules:!0,favorFlash:!0,warnOnUnsupportedContent:!0,logLevel:qo.Error,showSwfDownload:!1,contextMenu:gt.On,preloader:!0,splashScreen:!0,maxExecutionDuration:15,base:null,menu:!0,allowFullscreen:!1,salign:"",forceAlign:!1,quality:"high",scale:"showAll",forceScale:!1,frameRate:null,wmode:Bo.Window,publicPath:null,polyfills:!0,playerVersion:null,preferredRenderer:null,openUrlMode:Ha.Allow,allowNetworking:Ja.All,openInNewTab:null,socketProxy:[],fontSources:[],defaultFonts:{},credentialAllowList:[],playerRuntime:Va.FlashPlayer},hf="application/x-shockwave-flash",vf="application/futuresplash",gf="application/x-shockwave-flash2-preview",wf="application/vnd.adobe.flash.movie",Mv="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";function Nv(e){let n="";try{n=new URL(e,"https://example.com").pathname}catch{}if(n&&n.length>=4){const t=n.slice(-4).toLowerCase();if(t===".swf"||t===".spl")return!0}return!1}function $v(e,n){switch(e=e.toLowerCase(),e){case hf.toLowerCase():case vf.toLowerCase():case gf.toLowerCase():case wf.toLowerCase():return!0;default:if(n)switch(e){case"application/octet-stream":case"binary/octet-stream":return!0}}return!1}function yf(e,n){const t=Nv(e);return n?$v(n,t):t}function Wv(e){const n=e.pathname;return n.substring(n.lastIndexOf("/")+1)}const De={versionNumber:"0.1.0",versionName:"nightly 2024-06-17",versionChannel:"nightly",buildDate:"2024-06-17T00:05:45.274Z",commitHash:"cacfb5a6a4f33792e33ac388009fccd8e14f3e89"};function V(e){return e!=null}function Uv(e,n){if(V(n.allowScriptAccess)&&e.setAllowScriptAccess(n.allowScriptAccess),V(n.backgroundColor)&&e.setBackgroundColor(qv(n.backgroundColor)),V(n.upgradeToHttps)&&e.setUpgradeToHttps(n.upgradeToHttps),V(n.compatibilityRules)&&e.setCompatibilityRules(n.compatibilityRules),V(n.letterbox)&&e.setLetterbox(n.letterbox.toLowerCase()),V(n.base)&&e.setBaseUrl(n.base),V(n.menu)&&e.setShowMenu(n.menu),V(n.allowFullscreen)&&e.setAllowFullscreen(n.allowFullscreen),V(n.salign)&&e.setStageAlign(n.salign.toLowerCase()),V(n.forceAlign)&&e.setForceAlign(n.forceAlign),V(n.quality)?e.setQuality(n.quality.toLowerCase()):Vv()&&(console.log("Running on a mobile device; defaulting to low quality"),e.setQuality("low")),V(n.scale)&&e.setScale(n.scale.toLowerCase()),V(n.forceScale)&&e.setForceScale(n.forceScale),V(n.frameRate)&&e.setFrameRate(n.frameRate),V(n.wmode)&&e.setWmode(n.wmode),V(n.logLevel)&&e.setLogLevel(n.logLevel),V(n.maxExecutionDuration)&&e.setMaxExecutionDuration(Bv(n.maxExecutionDuration)),V(n.playerVersion)&&e.setPlayerVersion(n.playerVersion),V(n.preferredRenderer)&&e.setPreferredRenderer(n.preferredRenderer),V(n.openUrlMode)&&e.setOpenUrlMode(n.openUrlMode.toLowerCase()),V(n.allowNetworking)&&e.setAllowNetworking(n.allowNetworking.toLowerCase()),V(n.credentialAllowList)&&e.setCredentialAllowList(n.credentialAllowList),V(n.playerRuntime)&&e.setPlayerRuntime(n.playerRuntime),V(n.socketProxy))for(const t of n.socketProxy)e.addSocketProxy(t.host,t.port,t.proxyUrl)}function qv(e){if(e.startsWith("#")&&(e=e.substring(1)),e.length<6)return;let n=0;for(let t=0;t<6;t++){const r=parseInt(e[t],16);isNaN(r)?n=n<<4:n=n<<4|r}return n}function Bv(e){return typeof e=="number"?e:e.secs}function Vv(){return typeof window.orientation<"u"}const Qt="https://ruffle.rs",Hv=/^\s*(\d+(\.\d+)?(%)?)/;let ro=!1;var N;(function(e){e[e.Unknown=0]="Unknown",e[e.CSPConflict=1]="CSPConflict",e[e.FileProtocol=2]="FileProtocol",e[e.InvalidWasm=3]="InvalidWasm",e[e.JavascriptConfiguration=4]="JavascriptConfiguration",e[e.JavascriptConflict=5]="JavascriptConflict",e[e.WasmCors=6]="WasmCors",e[e.WasmDownload=7]="WasmDownload",e[e.WasmMimeType=8]="WasmMimeType",e[e.WasmNotFound=9]="WasmNotFound",e[e.WasmDisabledMicrosoftEdge=10]="WasmDisabledMicrosoftEdge",e[e.InvalidSwf=11]="InvalidSwf",e[e.SwfFetchError=12]="SwfFetchError",e[e.SwfCors=13]="SwfCors"})(N||(N={}));function Vi(e){if(e==null)return{};e instanceof URLSearchParams||(e=new URLSearchParams(e));const n={};for(const[t,r]of e)n[t]=r.toString();return n}class Pu{constructor(n,t){this.x=n,this.y=t}distanceTo(n){const t=n.x-this.x,r=n.y-this.y;return Math.sqrt(t*t+r*r)}}class U{constructor(n="#",t=T("view-error-details")){this.url=n,this.label=t}}class Ge extends HTMLElement{get readyState(){return this._readyState}get metadata(){return this._metadata}constructor(){super(),this.contextMenuForceDisabled=!1,this.isTouch=!1,this.contextMenuSupported=!1,this.panicked=!1,this.rendererDebugInfo="",this.longPressTimer=null,this.pointerDownPosition=null,this.pointerMoveMaxDistance=0,this.config={},this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(en.content.cloneNode(!0)),this.dynamicStyles=this.shadow.getElementById("dynamic-styles"),this.staticStyles=this.shadow.getElementById("static-styles"),this.container=this.shadow.getElementById("container"),this.playButton=this.shadow.getElementById("play-button"),this.playButton.addEventListener("click",()=>this.play()),this.unmuteOverlay=this.shadow.getElementById("unmute-overlay"),this.splashScreen=this.shadow.getElementById("splash-screen"),this.virtualKeyboard=this.shadow.getElementById("virtual-keyboard"),this.virtualKeyboard.addEventListener("input",this.virtualKeyboardInput.bind(this)),this.saveManager=this.shadow.getElementById("save-manager"),this.videoModal=this.shadow.getElementById("video-modal"),this.hardwareAccelerationModal=this.shadow.getElementById("hardware-acceleration-modal"),this.volumeControls=this.shadow.getElementById("volume-controls-modal"),this.addModalJavaScript(this.saveManager),this.addModalJavaScript(this.volumeControls),this.addModalJavaScript(this.videoModal),this.addModalJavaScript(this.hardwareAccelerationModal),this.volumeSettings=new Jv(!1,100),this.addVolumeControlsJavaScript(this.volumeControls);const n=this.saveManager.querySelector("#backup-saves");n&&(n.addEventListener("click",this.backupSaves.bind(this)),n.innerText=T("save-backup-all"));const t=this.unmuteOverlay.querySelector("#unmute-overlay-svg");if(t){const r=t.querySelector("#unmute-text");r.textContent=T("click-to-unmute")}this.contextMenuOverlay=this.shadow.getElementById("context-menu-overlay"),this.contextMenuElement=this.shadow.getElementById("context-menu"),document.documentElement.addEventListener("pointerdown",this.checkIfTouch.bind(this)),this.addEventListener("contextmenu",this.showContextMenu.bind(this)),this.container.addEventListener("pointerdown",this.pointerDown.bind(this)),this.container.addEventListener("pointermove",this.checkLongPressMovement.bind(this)),this.container.addEventListener("pointerup",this.checkLongPress.bind(this)),this.container.addEventListener("pointercancel",this.clearLongPressTimer.bind(this)),this.addEventListener("fullscreenchange",this.fullScreenChange.bind(this)),this.addEventListener("webkitfullscreenchange",this.fullScreenChange.bind(this)),this.instance=null,this.newZipWriter=null,this.onFSCommand=null,this._readyState=ct.HaveNothing,this._metadata=null,this.lastActivePlayingState=!1,this.setupPauseOnTabHidden()}addModalJavaScript(n){const t=n.querySelector("#video-holder");this.container.addEventListener("click",()=>{n.classList.add("hidden"),t&&(t.textContent="")});const r=n.querySelector(".modal-area");r&&r.addEventListener("click",i=>i.stopPropagation());const o=n.querySelector(".close-modal");o&&o.addEventListener("click",()=>{n.classList.add("hidden"),t&&(t.textContent="")})}addVolumeControlsJavaScript(n){const t=n.querySelector("#mute-checkbox"),r=n.querySelector("#volume-slider"),o=n.querySelector("#volume-slider-text"),i=n.querySelector("#volume-controls-heading"),a=n.querySelector("#mute-checkbox-label"),s=n.querySelector("#volume-slider-label");i.textContent=T("volume-controls"),a.textContent=T("volume-controls-mute"),s.textContent=T("volume-controls-volume"),t.checked=this.volumeSettings.isMuted,r.disabled=t.checked,r.valueAsNumber=this.volumeSettings.volume,s.style.color=t.checked?"grey":"black",o.style.color=t.checked?"grey":"black",o.textContent=String(this.volumeSettings.volume),t.addEventListener("change",()=>{var l;r.disabled=t.checked,s.style.color=t.checked?"grey":"black",o.style.color=t.checked?"grey":"black",this.volumeSettings.isMuted=t.checked,(l=this.instance)===null||l===void 0||l.set_volume(this.volumeSettings.get_volume())}),r.addEventListener("input",()=>{var l;o.textContent=r.value,this.volumeSettings.volume=r.valueAsNumber,(l=this.instance)===null||l===void 0||l.set_volume(this.volumeSettings.get_volume())})}setupPauseOnTabHidden(){document.addEventListener("visibilitychange",()=>{this.instance&&(document.hidden&&(this.lastActivePlayingState=this.instance.is_playing(),this.instance.pause()),!document.hidden&&this.lastActivePlayingState===!0&&this.instance.play())},!1)}get height(){return this.getAttribute("height")||""}set height(n){this.setAttribute("height",n)}get width(){return this.getAttribute("width")||""}set width(n){this.setAttribute("width",n)}get type(){return this.getAttribute("type")||""}set type(n){this.setAttribute("type",n)}connectedCallback(){this.updateStyles(),sv(this.staticStyles)}static get observedAttributes(){return["width","height"]}attributeChangedCallback(n,t,r){(n==="width"||n==="height")&&this.updateStyles()}disconnectedCallback(){this.destroy()}updateStyles(){if(this.dynamicStyles.sheet){if(this.dynamicStyles.sheet.cssRules)for(let r=this.dynamicStyles.sheet.cssRules.length-1;r>=0;r--)this.dynamicStyles.sheet.deleteRule(r);const n=this.attributes.getNamedItem("width");if(n!=null){const r=Ge.htmlDimensionToCssDimension(n.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { width: ${r}; }`)}const t=this.attributes.getNamedItem("height");if(t!=null){const r=Ge.htmlDimensionToCssDimension(t.value);r!==null&&this.dynamicStyles.sheet.insertRule(`:host { height: ${r}; }`)}}}isUnusedFallbackObject(){const n=Ov("ruffle-object");if(n!==null){let t=this.parentNode;for(;t!==document&&t!==null;){if(t.nodeName===n.name)return!0;t=t.parentNode}}return!1}async ensureFreshInstance(){var n,t,r;this.destroy(),this.loadedConfig&&this.loadedConfig.splashScreen!==!1&&this.loadedConfig.preloader!==!1&&this.showSplashScreen(),this.loadedConfig&&this.loadedConfig.preloader===!1&&console.warn("The configuration option preloader has been replaced with splashScreen. If you own this website, please update the configuration."),this.loadedConfig&&this.loadedConfig.maxExecutionDuration&&typeof this.loadedConfig.maxExecutionDuration!="number"&&console.warn("Configuration: An obsolete format for duration for 'maxExecutionDuration' was used, please use a single number indicating seconds instead. For instance '15' instead of '{secs: 15, nanos: 0}'."),this.loadedConfig&&typeof this.loadedConfig.contextMenu=="boolean"&&console.warn('The configuration option contextMenu no longer takes a boolean. Use "on", "off", or "rightClickOnly".');const[o,i]=await kh(this.loadedConfig||{},this.onRuffleDownloadProgress.bind(this)).catch(l=>{if(console.error(`Serious error loading Ruffle: ${l}`),window.location.protocol==="file:")l.ruffleIndexError=N.FileProtocol;else{l.ruffleIndexError=N.WasmNotFound;const u=String(l.message).toLowerCase();u.includes("mime")?l.ruffleIndexError=N.WasmMimeType:u.includes("networkerror")||u.includes("failed to fetch")?l.ruffleIndexError=N.WasmCors:u.includes("disallowed by embedder")?l.ruffleIndexError=N.CSPConflict:l.name==="CompileError"?l.ruffleIndexError=N.InvalidWasm:u.includes("could not download wasm module")&&l.name==="TypeError"?l.ruffleIndexError=N.WasmDownload:l.name==="TypeError"?l.ruffleIndexError=N.JavascriptConflict:navigator.userAgent.includes("Edg")&&u.includes("webassembly is not defined")&&(l.ruffleIndexError=N.WasmDisabledMicrosoftEdge)}throw this.panic(l),l});if(this.newZipWriter=i,Uv(o,this.loadedConfig||{}),o.setVolume(this.volumeSettings.get_volume()),!((n=this.loadedConfig)===null||n===void 0)&&n.fontSources)for(const l of this.loadedConfig.fontSources)try{const u=await fetch(l);o.addFont(l,new Uint8Array(await u.arrayBuffer()))}catch(u){console.warn(`Couldn't download font source from ${l}`,u)}for(const l in(t=this.loadedConfig)===null||t===void 0?void 0:t.defaultFonts){const u=this.loadedConfig.defaultFonts[l];u&&o.setDefaultFont(l,u)}this.instance=await o.build(this.container,this).catch(l=>{throw console.error(`Serious error loading Ruffle: ${l}`),this.panic(l),l}),this.rendererDebugInfo=this.instance.renderer_debug_info(),this.rendererDebugInfo.includes("Adapter Device Type: Cpu")&&this.container.addEventListener("mouseover",this.openHardwareAccelerationModal.bind(this),{once:!0});const a=this.instance.renderer_name(),s=this.instance.constructor;if(console.log("%cNew Ruffle instance created (Version: "+De.versionName+" | WebAssembly extensions: "+(s.is_wasm_simd_used()?"ON":"OFF")+" | Used renderer: "+(a??"")+")","background: #37528C; color: #FFAD33"),this.audioState()!=="running"&&(this.container.style.visibility="hidden",await new Promise(l=>{window.setTimeout(()=>{l()},200)}),this.container.style.visibility=""),this.unmuteAudioContext(),navigator.userAgent.toLowerCase().includes("android")&&this.container.addEventListener("click",()=>this.virtualKeyboard.blur()),!this.loadedConfig||this.loadedConfig.autoplay===Ct.On||this.loadedConfig.autoplay!==Ct.Off&&this.audioState()==="running"){if(this.play(),this.audioState()!=="running"){(!this.loadedConfig||this.loadedConfig.unmuteOverlay!==Er.Hidden)&&(this.unmuteOverlay.style.display="block"),this.container.addEventListener("click",this.unmuteOverlayClicked.bind(this),{once:!0});const l=(r=this.instance)===null||r===void 0?void 0:r.audio_context();l&&(l.onstatechange=()=>{l.state==="running"&&this.unmuteOverlayClicked(),l.onstatechange=null})}}else this.playButton.style.display="block"}onRuffleDownloadProgress(n,t){const r=this.splashScreen.querySelector(".loadbar-inner"),o=this.splashScreen.querySelector(".loadbar");Number.isNaN(t)?o&&(o.style.display="none"):r.style.width=`${100*(n/t)}%`}destroy(){this.instance&&(this.instance.destroy(),this.instance=null,this._metadata=null,this._readyState=ct.HaveNothing,console.log("Ruffle instance destroyed."))}checkOptions(n){if(typeof n=="string")return{url:n};const t=(r,o)=>{if(!r){const i=new TypeError(o);throw i.ruffleIndexError=N.JavascriptConfiguration,this.panic(i),i}};return t(n!==null&&typeof n=="object","Argument 0 must be a string or object"),t("url"in n||"data"in n,"Argument 0 must contain a `url` or `data` key"),t(!("url"in n)||typeof n.url=="string","`url` must be a string"),n}async reload(){if(this.loadedConfig)await this.load(this.loadedConfig);else throw new Error("Cannot reload if load wasn't first called")}async load(n,t=!1){var r,o;if(n=this.checkOptions(n),!this.isConnected||this.isUnusedFallbackObject()){console.warn("Ignoring attempt to play a disconnected or suspended Ruffle element");return}if(!ts(this))try{this.loadedConfig=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Tv),t&&"url"in n?{allowScriptAccess:kf("samedomain",n.url)}:{}),(o=(r=window.RufflePlayer)===null||r===void 0?void 0:r.config)!==null&&o!==void 0?o:{}),this.config),n),this.loadedConfig.backgroundColor&&this.loadedConfig.wmode!==Bo.Transparent&&(this.container.style.backgroundColor=this.loadedConfig.backgroundColor),await this.ensureFreshInstance(),"url"in n?(console.log(`Loading SWF file ${n.url}`),this.swfUrl=new URL(n.url,document.baseURI),this.instance.stream_from(this.swfUrl.href,Vi(n.parameters))):"data"in n&&(console.log("Loading SWF data"),delete this.swfUrl,this.instance.load_data(new Uint8Array(n.data),Vi(n.parameters),n.swfFileName||"movie.swf"))}catch(i){console.error(`Serious error occurred loading SWF file: ${i}`);const a=new Error(i);throw a.message.includes("Error parsing config")&&(a.ruffleIndexError=N.JavascriptConfiguration),this.panic(a),a}}play(){this.instance&&(this.instance.play(),this.playButton.style.display="none")}get isPlaying(){return this.instance?this.instance.is_playing():!1}get volume(){return this.instance?this.instance.volume():1}set volume(n){this.instance&&this.instance.set_volume(n)}get fullscreenEnabled(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled)}get isFullscreen(){return(document.fullscreenElement||document.webkitFullscreenElement)===this}setFullscreen(n){this.fullscreenEnabled&&n!==this.isFullscreen&&(n?this.enterFullscreen():this.exitFullscreen())}enterFullscreen(){const n={navigationUI:"hide"};this.requestFullscreen?this.requestFullscreen(n):this.webkitRequestFullscreen?this.webkitRequestFullscreen(n):this.webkitRequestFullScreen&&this.webkitRequestFullScreen(n)}exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}fullScreenChange(){var n;(n=this.instance)===null||n===void 0||n.set_fullscreen(this.isFullscreen)}saveFile(n,t){const r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.download=t,o.click(),URL.revokeObjectURL(r)}checkIfTouch(n){this.isTouch=n.pointerType==="touch"||n.pointerType==="pen"}base64ToArray(n){const t=atob(n),r=new Uint8Array(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return r}base64ToBlob(n,t){const r=this.base64ToArray(n);return new Blob([r],{type:t})}isB64SOL(n){try{return atob(n).slice(6,10)==="TCSO"}catch{return!1}}confirmReloadSave(n,t,r){if(this.isB64SOL(t)&&localStorage[n]){if(!r&&!confirm(T("save-delete-prompt")))return;const o=this.swfUrl?this.swfUrl.pathname:"",i=this.swfUrl?this.swfUrl.hostname:document.location.hostname,a=n.split("/").slice(1,-1).join("/");if(o.includes(a)&&n.startsWith(i)){confirm(T("save-reload-prompt",{action:r?"replace":"delete"}))&&this.loadedConfig&&(this.destroy(),r?localStorage.setItem(n,t):localStorage.removeItem(n),this.reload(),this.populateSaves(),this.saveManager.classList.add("hidden"));return}r?localStorage.setItem(n,t):localStorage.removeItem(n),this.populateSaves(),this.saveManager.classList.add("hidden")}}replaceSOL(n,t){const r=n.target,o=new FileReader;o.addEventListener("load",()=>{if(o.result&&typeof o.result=="string"){const i=new RegExp("data:.*;base64,"),a=o.result.replace(i,"");this.confirmReloadSave(t,a,!0)}}),r&&r.files&&r.files.length>0&&r.files[0]&&o.readAsDataURL(r.files[0])}deleteSave(n){const t=localStorage.getItem(n);t&&this.confirmReloadSave(n,t,!1)}populateSaves(){const n=this.saveManager.querySelector("#local-saves");if(n){try{if(localStorage===null)return}catch{return}n.textContent="",Object.keys(localStorage).forEach(t=>{const r=t.split("/").pop(),o=localStorage.getItem(t);if(r&&o&&this.isB64SOL(o)){const i=document.createElement("TR"),a=document.createElement("TD");a.textContent=r,a.title=t;const s=document.createElement("TD"),l=document.createElement("SPAN");l.textContent=T("save-download"),l.className="save-option",l.addEventListener("click",()=>{const w=this.base64ToBlob(o,"application/octet-stream");this.saveFile(w,r+".sol")}),s.appendChild(l);const u=document.createElement("TD"),h=document.createElement("INPUT");h.type="file",h.accept=".sol",h.className="replace-save",h.id="replace-save-"+t;const p=document.createElement("LABEL");p.htmlFor="replace-save-"+t,p.textContent=T("save-replace"),p.className="save-option",h.addEventListener("change",w=>this.replaceSOL(w,t)),u.appendChild(h),u.appendChild(p);const m=document.createElement("TD"),g=document.createElement("SPAN");g.textContent=T("save-delete"),g.className="save-option",g.addEventListener("click",()=>this.deleteSave(t)),m.appendChild(g),i.appendChild(a),i.appendChild(s),i.appendChild(u),i.appendChild(m),n.appendChild(i)}})}}async backupSaves(){const n=this.newZipWriter(),t=[];Object.keys(localStorage).forEach(o=>{let i=String(o.split("/").pop());const a=localStorage.getItem(o);if(a&&this.isB64SOL(a)){const s=this.base64ToArray(a),l=t.filter(u=>u===i).length;t.push(i),l>0&&(i+=` (${l+1})`),n.addFile(i+".sol",s)}});const r=new Blob([n.save()],{type:"application/zip"});this.saveFile(r,"saves.zip")}openHardwareAccelerationModal(){this.hardwareAccelerationModal.classList.remove("hidden")}openSaveManager(){this.saveManager.classList.remove("hidden")}openVolumeControls(){this.volumeControls.classList.remove("hidden")}async downloadSwf(){try{if(this.swfUrl){console.log("Downloading SWF: "+this.swfUrl);const n=await fetch(this.swfUrl.href);if(!n.ok){console.error("SWF download failed");return}const t=await n.blob();this.saveFile(t,Wv(this.swfUrl))}else console.error("SWF download failed")}catch{console.error("SWF download failed")}}virtualKeyboardInput(){const n=this.virtualKeyboard,t=n.value;for(const r of t)for(const o of["keydown","keyup"])this.dispatchEvent(new KeyboardEvent(o,{key:r,bubbles:!0}));n.value=""}openVirtualKeyboard(){navigator.userAgent.toLowerCase().includes("android")?setTimeout(()=>{this.virtualKeyboard.focus({preventScroll:!0})},100):this.virtualKeyboard.focus({preventScroll:!0})}isVirtualKeyboardFocused(){return this.shadow.activeElement===this.virtualKeyboard}contextMenuItems(){const n="✓",t=[],r=()=>{t.length>0&&t[t.length-1]!==null&&t.push(null)};this.instance&&this.isPlaying&&(this.instance.prepare_context_menu().forEach((a,s)=>{a.separatorBefore&&r(),t.push({text:a.caption+(a.checked?` (${n})`:""),onClick:()=>{var l;return(l=this.instance)===null||l===void 0?void 0:l.run_context_menu_callback(s)},enabled:a.enabled})}),r()),this.fullscreenEnabled&&(this.isFullscreen?t.push({text:T("context-menu-exit-fullscreen"),onClick:()=>this.setFullscreen(!1)}):t.push({text:T("context-menu-enter-fullscreen"),onClick:()=>this.setFullscreen(!0)})),t.push({text:T("context-menu-volume-controls"),onClick:()=>{this.openVolumeControls()}}),this.instance&&this.swfUrl&&this.loadedConfig&&this.loadedConfig.showSwfDownload===!0&&(r(),t.push({text:T("context-menu-download-swf"),onClick:this.downloadSwf.bind(this)})),navigator.clipboard&&window.isSecureContext&&t.push({text:T("context-menu-copy-debug-info"),onClick:()=>navigator.clipboard.writeText(this.getPanicData())}),this.populateSaves();const o=this.saveManager.querySelector("#local-saves");return o&&o.textContent!==""&&t.push({text:T("context-menu-open-save-manager"),onClick:this.openSaveManager.bind(this)}),r(),t.push({text:T("context-menu-about-ruffle",{flavor:_n?"extension":"",version:De.versionName}),onClick(){window.open(Qt,"_blank")}}),this.isTouch&&(r(),t.push({text:T("context-menu-hide"),onClick:()=>this.contextMenuForceDisabled=!0})),t}pointerDown(n){this.pointerDownPosition=new Pu(n.pageX,n.pageY),this.pointerMoveMaxDistance=0,this.startLongPressTimer()}clearLongPressTimer(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null)}startLongPressTimer(){this.clearLongPressTimer(),this.longPressTimer=setTimeout(()=>this.clearLongPressTimer(),800)}checkLongPressMovement(n){if(this.pointerDownPosition!==null){const t=new Pu(n.pageX,n.pageY),r=this.pointerDownPosition.distanceTo(t);r>this.pointerMoveMaxDistance&&(this.pointerMoveMaxDistance=r)}}checkLongPress(n){this.longPressTimer?this.clearLongPressTimer():!this.contextMenuSupported&&n.pointerType!=="mouse"&&this.pointerMoveMaxDistance<15&&this.showContextMenu(n)}showContextMenu(n){var t,r,o;const i=Array.from(this.shadow.querySelectorAll(".modal")).some(p=>!p.classList.contains("hidden"));if(this.panicked||i||(n.preventDefault(),n.type==="contextmenu"?(this.contextMenuSupported=!0,document.documentElement.addEventListener("click",this.hideContextMenu.bind(this),{once:!0})):(document.documentElement.addEventListener("pointerup",this.hideContextMenu.bind(this),{once:!0}),n.stopPropagation()),[!1,gt.Off].includes((r=(t=this.loadedConfig)===null||t===void 0?void 0:t.contextMenu)!==null&&r!==void 0?r:gt.On)||this.isTouch&&((o=this.loadedConfig)===null||o===void 0?void 0:o.contextMenu)===gt.RightClickOnly||this.contextMenuForceDisabled))return;for(;this.contextMenuElement.firstChild;)this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);for(const p of this.contextMenuItems())if(p===null){const m=document.createElement("li");m.className="menu-separator";const g=document.createElement("hr");m.appendChild(g),this.contextMenuElement.appendChild(m)}else{const{text:m,onClick:g,enabled:w}=p,b=document.createElement("li");b.className="menu-item",b.textContent=m,this.contextMenuElement.appendChild(b),w!==!1?b.addEventListener(this.contextMenuSupported?"click":"pointerup",g):b.classList.add("disabled")}this.contextMenuElement.style.left="0",this.contextMenuElement.style.top="0",this.contextMenuOverlay.classList.remove("hidden");const a=this.getBoundingClientRect(),s=n.clientX-a.x,l=n.clientY-a.y,u=a.width-this.contextMenuElement.clientWidth-1,h=a.height-this.contextMenuElement.clientHeight-1;this.contextMenuElement.style.left=Math.floor(Math.min(s,u))+"px",this.contextMenuElement.style.top=Math.floor(Math.min(l,h))+"px"}hideContextMenu(){var n;(n=this.instance)===null||n===void 0||n.clear_custom_menu_items(),this.contextMenuOverlay.classList.add("hidden")}pause(){this.instance&&(this.instance.pause(),this.playButton.style.display="block")}audioState(){if(this.instance){const n=this.instance.audio_context();return n&&n.state||"running"}return"suspended"}unmuteOverlayClicked(){if(this.instance){if(this.audioState()!=="running"){const n=this.instance.audio_context();n&&n.resume()}this.unmuteOverlay.style.display="none"}}unmuteAudioContext(){if(!ro){if(navigator.maxTouchPoints<1){ro=!0;return}this.container.addEventListener("click",()=>{var n;if(ro)return;const t=(n=this.instance)===null||n===void 0?void 0:n.audio_context();if(!t)return;const r=new Audio;r.src=(()=>{const o=new ArrayBuffer(10),i=new DataView(o),a=t.sampleRate;return i.setUint32(0,a,!0),i.setUint32(4,a,!0),i.setUint16(8,1,!0),`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window.btoa(String.fromCharCode(...new Uint8Array(o))).slice(0,13)}AgAZGF0YQcAAACAgICAgICAAAA=`})(),r.load(),r.play().then(()=>{ro=!0}).catch(o=>{console.warn(`Failed to play dummy sound: ${o}`)})},{once:!0})}}copyElement(n){if(n){for(const t of n.attributes)if(t.specified){if(t.name==="title"&&t.value==="Adobe Flash Player")continue;try{this.setAttribute(t.name,t.value)}catch{console.warn(`Unable to set attribute ${t.name} on Ruffle instance`)}}for(const t of Array.from(n.children))this.appendChild(t)}}static htmlDimensionToCssDimension(n){if(n){const t=n.match(Hv);if(t){let r=t[1];return t[3]||(r+="px"),r}}return null}onCallbackAvailable(n){const t=this.instance;this[n]=(...r)=>t==null?void 0:t.call_exposed_callback(n,r)}getObjectId(){return this.getAttribute("name")}set traceObserver(n){var t;(t=this.instance)===null||t===void 0||t.set_trace_observer(n)}getPanicData(){let n=`
# Player Info
`;if(n+=`Allows script access: ${this.loadedConfig?this.loadedConfig.allowScriptAccess:!1}
`,n+=`${this.rendererDebugInfo}
`,n+=this.debugPlayerInfo(),n+=`
# Page Info
`,n+=`Page URL: ${document.location.href}
`,this.swfUrl&&(n+=`SWF URL: ${this.swfUrl}
`),n+=`
# Browser Info
`,n+=`User Agent: ${window.navigator.userAgent}
`,n+=`Platform: ${window.navigator.platform}
`,n+=`Has touch support: ${window.navigator.maxTouchPoints>0}
`,n+=`
# Ruffle Info
`,n+=`Version: ${De.versionNumber}
`,n+=`Name: ${De.versionName}
`,n+=`Channel: ${De.versionChannel}
`,n+=`Built: ${De.buildDate}
`,n+=`Commit: ${De.commitHash}
`,n+=`Is extension: ${_n}
`,n+=`
# Metadata
`,this.metadata)for(const[t,r]of Object.entries(this.metadata))n+=`${t}: ${r}
`;return n}createErrorFooter(n){const t=document.createElement("ul");for(const r of n){const o=document.createElement("li"),i=document.createElement("a");i.href=r.url,i.textContent=r.label,r.url==="#"?i.id="panic-view-details":i.target="_top",o.appendChild(i),t.appendChild(o)}return t}panic(n){var t;if(this.panicked||(this.panicked=!0,this.hideSplashScreen(),n instanceof Error&&(n.name==="AbortError"||n.message.includes("AbortError"))))return;const r=(t=n==null?void 0:n.ruffleIndexError)!==null&&t!==void 0?t:N.Unknown,o=Object.assign([],{stackIndex:-1,avmStackIndex:-1});if(o.push(`# Error Info
`),n instanceof Error){if(o.push(`Error name: ${n.name}
`),o.push(`Error message: ${n.message}
`),n.stack){const d=o.push(`Error stack:
\`\`\`
${n.stack}
\`\`\`
`)-1;if(n.avmStack){const c=o.push(`AVM2 stack:
\`\`\`
    ${n.avmStack.trim().replace(/\t/g,"    ")}
\`\`\`
`)-1;o.avmStackIndex=c}o.stackIndex=d}}else o.push(`Error: ${n}
`);o.push(this.getPanicData());const i=o.join(""),a=new Date(De.buildDate),s=new Date;s.setMonth(s.getMonth()-6);const l=s>a;let u;if(l)u=new U(Qt+"/downloads#desktop-app",T("update-ruffle"));else{let d;document.location.protocol.includes("extension")&&this.swfUrl?d=this.swfUrl.href:d=document.location.href,d=d.split(/[?#]/,1)[0];const c=`Error on ${d}`;let f=`https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(c)}&template=error_report.md&labels=error-report&body=`,v=encodeURIComponent(i);o.stackIndex>-1&&String(f+v).length>8195&&(o[o.stackIndex]=null,o.avmStackIndex>-1&&(o[o.avmStackIndex]=null),v=encodeURIComponent(o.join(""))),f+=v,u=new U(f,T("report-bug"))}let h,p;switch(r){case N.FileProtocol:h=pe("error-file-protocol"),p=this.createErrorFooter([new U(Qt+"/demo",T("ruffle-demo")),new U(Qt+"/downloads#desktop-app",T("ruffle-desktop"))]);break;case N.JavascriptConfiguration:h=pe("error-javascript-config"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api",T("ruffle-wiki")),new U]);break;case N.WasmNotFound:h=pe("error-wasm-not-found"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options",T("ruffle-wiki")),new U]);break;case N.WasmMimeType:h=pe("error-wasm-mime-type"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type",T("ruffle-wiki")),new U]);break;case N.InvalidSwf:h=pe("error-invalid-swf"),p=this.createErrorFooter([new U]);break;case N.SwfFetchError:h=pe("error-swf-fetch"),p=this.createErrorFooter([new U]);break;case N.SwfCors:h=pe("error-swf-cors"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header",T("ruffle-wiki")),new U]);break;case N.WasmCors:h=pe("error-wasm-cors"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-cors-header",T("ruffle-wiki")),new U]);break;case N.InvalidWasm:h=pe("error-wasm-invalid"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror",T("ruffle-wiki")),new U]);break;case N.WasmDownload:h=pe("error-wasm-download"),p=this.createErrorFooter([new U]);break;case N.WasmDisabledMicrosoftEdge:h=pe("error-wasm-disabled-on-edge"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error",T("more-info")),new U]);break;case N.JavascriptConflict:h=pe("error-javascript-conflict"),l&&h.appendChild(pe("error-javascript-conflict-outdated",{buildDate:De.buildDate})),p=this.createErrorFooter([u,new U]);break;case N.CSPConflict:h=pe("error-csp-conflict"),p=this.createErrorFooter([new U("https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp",T("ruffle-wiki")),new U]);break;default:h=pe("error-unknown",{buildDate:De.buildDate,outdated:String(l)}),p=this.createErrorFooter([u,new U]);break}const m=document.createElement("div");m.id="panic";const g=document.createElement("div");g.id="panic-title",g.textContent=T("panic-title"),m.appendChild(g);const w=document.createElement("div");w.id="panic-body",w.appendChild(h),m.appendChild(w);const b=document.createElement("div");b.id="panic-footer",b.appendChild(p),m.appendChild(b),this.container.textContent="",this.container.appendChild(m);const I=this.container.querySelector("#panic-view-details");I&&(I.onclick=()=>{const d=this.container.querySelector("#panic-body");d.classList.add("details");const c=document.createElement("textarea");return c.readOnly=!0,c.value=i,d.replaceChildren(c),!1}),this.destroy()}displayRootMovieDownloadFailedMessage(n){var t,r,o,i;const a=(t=this.loadedConfig)===null||t===void 0?void 0:t.openInNewTab;if(a&&this.swfUrl&&window.location.origin!==this.swfUrl.origin){const s=new URL(this.swfUrl);if(!((r=this.loadedConfig)===null||r===void 0)&&r.parameters){const m=Vi((o=this.loadedConfig)===null||o===void 0?void 0:o.parameters);Object.entries(m).forEach(([g,w])=>{s.searchParams.set(g,w)})}this.hideSplashScreen();const l=document.createElement("div");l.id="message-overlay";const u=document.createElement("div");u.className="message",u.appendChild(pe("message-cant-embed"));const h=document.createElement("div"),p=document.createElement("a");p.innerText=T("open-in-new-tab"),p.onclick=()=>a(s),h.appendChild(p),u.appendChild(h),l.appendChild(u),this.container.prepend(l)}else{const s=new Error("Failed to fetch: "+this.swfUrl);this.swfUrl&&!this.swfUrl.protocol.includes("http")?s.ruffleIndexError=N.FileProtocol:n?s.ruffleIndexError=N.InvalidSwf:window.location.origin===((i=this.swfUrl)===null||i===void 0?void 0:i.origin)||window.location.protocol.includes("extension")?s.ruffleIndexError=N.SwfFetchError:s.ruffleIndexError=N.SwfCors,this.panic(s)}}displayMessage(n){const t=document.createElement("div");t.id="message-overlay";const r=document.createElement("div");r.className="message";const o=document.createElement("p");o.textContent=n,r.appendChild(o);const i=document.createElement("div"),a=document.createElement("button");a.id="continue-btn",a.textContent=T("continue"),i.appendChild(a),r.appendChild(i),t.appendChild(r),this.container.prepend(t),this.container.querySelector("#continue-btn").onclick=()=>{t.parentNode.removeChild(t)}}displayUnsupportedVideo(n){const t=this.videoModal.querySelector("#video-holder");if(t){const r=document.createElement("video");r.addEventListener("contextmenu",o=>o.stopPropagation()),r.src=n,r.autoplay=!0,r.controls=!0,t.textContent="",t.appendChild(r),this.videoModal.classList.remove("hidden")}}debugPlayerInfo(){return""}hideSplashScreen(){this.splashScreen.classList.add("hidden"),this.container.classList.remove("hidden")}showSplashScreen(){this.splashScreen.classList.remove("hidden"),this.container.classList.add("hidden")}setMetadata(n){this._metadata=n,this._readyState=ct.Loaded,this.hideSplashScreen(),this.dispatchEvent(new CustomEvent(Ge.LOADED_METADATA)),this.dispatchEvent(new CustomEvent(Ge.LOADED_DATA))}PercentLoaded(){return this._readyState===ct.Loaded?100:0}}Ge.LOADED_METADATA="loadedmetadata";Ge.LOADED_DATA="loadeddata";var ct;(function(e){e[e.HaveNothing=0]="HaveNothing",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"})(ct||(ct={}));function Fu(e){switch(e==null?void 0:e.toLowerCase()){case"true":return!0;case"false":return!1;default:return null}}function kf(e,n){switch(e==null?void 0:e.toLowerCase()){case"always":return!0;case"never":return!1;case"samedomain":try{return new URL(window.location.href).origin===new URL(n,window.location.href).origin}catch{return!1}default:return null}}function Ka(e,n){const t={url:e},r=n("allowNetworking");r!==null&&(t.allowNetworking=r);const o=kf(n("allowScriptAccess"),e);o!==null&&(t.allowScriptAccess=o);const i=n("bgcolor");i!==null&&(t.backgroundColor=i);const a=n("base");if(a!==null)if(a==="."){const w=new URL(e,document.baseURI);t.base=new URL(a,w).href}else t.base=a;const s=Fu(n("menu"));s!==null&&(t.menu=s);const l=Fu(n("allowFullScreen"));l!==null&&(t.allowFullscreen=l);const u=n("flashvars");u!==null&&(t.parameters=u);const h=n("quality");h!==null&&(t.quality=h);const p=n("salign");p!==null&&(t.salign=p);const m=n("scale");m!==null&&(t.scale=m);const g=n("wmode");return g!==null&&(t.wmode=g),t}function Qa(e){if(e){let n="",t="";try{const r=new URL(e,Qt);n=r.pathname,t=r.hostname}catch{}if(n.startsWith("/v/")&&/^(?:(?:www\.|m\.)?youtube(?:-nocookie)?\.com)|(?:youtu\.be)$/i.test(t))return!0}return!1}function Za(e,n){var t,r;const o=e.getAttribute(n),i=(r=(t=window.RufflePlayer)===null||t===void 0?void 0:t.config)!==null&&r!==void 0?r:{};if(o)try{const a=new URL(o);a.protocol==="http:"&&window.location.protocol==="https:"&&(!("upgradeToHttps"in i)||i.upgradeToHttps!==!1)&&(a.protocol="https:",e.setAttribute(n,a.toString()))}catch{}}function ts(e){let n=e.parentElement;for(;n!==null;){switch(n.tagName){case"AUDIO":case"VIDEO":return!0}n=n.parentElement}return!1}class Jv{constructor(n,t){this.isMuted=n,this.volume=t}get_volume(){return this.isMuted?0:this.volume/100}}class _t extends Ge{constructor(){super()}connectedCallback(){super.connectedCallback();const n=this.attributes.getNamedItem("src");if(n){const t=o=>{var i,a;return(a=(i=this.attributes.getNamedItem(o))===null||i===void 0?void 0:i.value)!==null&&a!==void 0?a:null},r=Ka(n.value,t);this.load(r,!0)}}get nodeName(){return"EMBED"}get src(){var n;return(n=this.attributes.getNamedItem("src"))===null||n===void 0?void 0:n.value}set src(n){if(n){const t=document.createAttribute("src");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("src")}static get observedAttributes(){return["src","width","height"]}attributeChangedCallback(n,t,r){if(super.attributeChangedCallback(n,t,r),this.isConnected&&n==="src"){const o=this.attributes.getNamedItem("src");if(o){const i=s=>{var l,u;return(u=(l=this.attributes.getNamedItem(s))===null||l===void 0?void 0:l.value)!==null&&u!==void 0?u:null},a=Ka(o.value,i);this.load(a,!0)}}}static isInterdictable(n){const t=n.getAttribute("src"),r=n.getAttribute("type");return!t||ts(n)?!1:Qa(t)?(Za(n,"src"),!1):yf(t,r)}static fromNativeEmbedElement(n){const t=ns("ruffle-embed",_t),r=document.createElement(t);return r.copyElement(n),r}}function Kv(e,n,t){n=n.toLowerCase();for(const[r,o]of Object.entries(e))if(r.toLowerCase()===n)return o;return t}function Au(e){var n,t;const r={};for(const o of e.children)if(o instanceof HTMLParamElement){const i=(n=o.attributes.getNamedItem("name"))===null||n===void 0?void 0:n.value,a=(t=o.attributes.getNamedItem("value"))===null||t===void 0?void 0:t.value;i&&a&&(r[i]=a)}return r}class wt extends Ge{constructor(){super(),this.params={}}connectedCallback(){var n;super.connectedCallback(),this.params=Au(this);let t=null;if(this.attributes.getNamedItem("data")?t=(n=this.attributes.getNamedItem("data"))===null||n===void 0?void 0:n.value:this.params.movie&&(t=this.params.movie),t){const r=["allowNetworking","base","bgcolor","flashvars"],i=Ka(t,a=>Kv(this.params,a,r.includes(a)?this.getAttribute(a):null));this.load(i,!0)}}debugPlayerInfo(){var n;let t=`Player type: Object
`,r=null;return this.attributes.getNamedItem("data")?r=(n=this.attributes.getNamedItem("data"))===null||n===void 0?void 0:n.value:this.params.movie&&(r=this.params.movie),t+=`SWF URL: ${r}
`,Object.keys(this.params).forEach(o=>{t+=`Param ${o}: ${this.params[o]}
`}),Object.keys(this.attributes).forEach(o=>{var i;t+=`Attribute ${o}: ${(i=this.attributes.getNamedItem(o))===null||i===void 0?void 0:i.value}
`}),t}get nodeName(){return"OBJECT"}get data(){return this.getAttribute("data")}set data(n){if(n){const t=document.createAttribute("data");t.value=n,this.attributes.setNamedItem(t)}else this.attributes.removeNamedItem("data")}static isInterdictable(n){var t,r,o,i;if(ts(n)||n.getElementsByTagName("ruffle-object").length>0||n.getElementsByTagName("ruffle-embed").length>0)return!1;const a=(t=n.attributes.getNamedItem("data"))===null||t===void 0?void 0:t.value.toLowerCase(),s=(o=(r=n.attributes.getNamedItem("type"))===null||r===void 0?void 0:r.value)!==null&&o!==void 0?o:null,l=Au(n);let u;if(a){if(Qa(a))return Za(n,"data"),!1;u=a}else if(l&&l.movie){if(Qa(l.movie)){const p=n.querySelector("param[name='movie']");if(p){Za(p,"value");const m=p.getAttribute("value");m&&n.setAttribute("data",m)}return!1}u=l.movie}else return!1;const h=(i=n.attributes.getNamedItem("classid"))===null||i===void 0?void 0:i.value.toLowerCase();return h===Mv.toLowerCase()?!Array.from(n.getElementsByTagName("object")).some(wt.isInterdictable)&&!Array.from(n.getElementsByTagName("embed")).some(_t.isInterdictable):h?!1:yf(u,s)}static fromNativeObjectElement(n){const t=ns("ruffle-object",wt),r=document.createElement(t);for(const o of Array.from(n.getElementsByTagName("embed")))_t.isInterdictable(o)&&o.remove();for(const o of Array.from(n.getElementsByTagName("object")))wt.isInterdictable(o)&&o.remove();return r.copyElement(n),r}}class bf{constructor(n){if(this.__mimeTypes=[],this.__namedMimeTypes={},n)for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__mimeTypes.length;this.__mimeTypes.push(n),this.__namedMimeTypes[n.type]=n,this[n.type]=n,this[t]=n}item(n){return this.__mimeTypes[n>>>0]}namedItem(n){return this.__namedMimeTypes[n]}get length(){return this.__mimeTypes.length}[Symbol.iterator](){return this.__mimeTypes[Symbol.iterator]()}}class Qv extends bf{constructor(n,t,r){super(),this.name=n,this.description=t,this.filename=r}}class Zv{constructor(n){this.__plugins=[],this.__namedPlugins={};for(let t=0;t<n.length;t++)this.install(n[t])}install(n){const t=this.__plugins.length;this.__plugins.push(n),this.__namedPlugins[n.name]=n,this[n.name]=n,this[t]=n}item(n){return this.__plugins[n>>>0]}namedItem(n){return this.__namedPlugins[n]}refresh(){}[Symbol.iterator](){return this.__plugins[Symbol.iterator]()}get length(){return this.__plugins.length}}const fn=new Qv("Shockwave Flash","Shockwave Flash 32.0 r0","ruffle.js");fn.install({type:vf,description:"Shockwave Flash",suffixes:"spl",enabledPlugin:fn});fn.install({type:hf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:fn});fn.install({type:gf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:fn});fn.install({type:wf,description:"Shockwave Flash",suffixes:"swf",enabledPlugin:fn});function Gv(e){(!("install"in navigator.plugins)||!navigator.plugins.install)&&Object.defineProperty(navigator,"plugins",{value:new Zv(navigator.plugins),writable:!1}),navigator.plugins.install(e),e.length>0&&(!("install"in navigator.mimeTypes)||!navigator.mimeTypes.install)&&Object.defineProperty(navigator,"mimeTypes",{value:new bf(navigator.mimeTypes),writable:!1});const t=navigator.mimeTypes;for(let r=0;r<e.length;r+=1)t.install(e[r])}var Hi,Ji;const jr=(Ji=(Hi=window.RufflePlayer)===null||Hi===void 0?void 0:Hi.config)!==null&&Ji!==void 0?Ji:{},Yv=Jd(jr)+"ruffle.js";let Wt,Ut;function Sf(){var e,n;return"favorFlash"in jr&&jr.favorFlash===!1?!1:((n=(e=navigator.plugins.namedItem("Shockwave Flash"))===null||e===void 0?void 0:e.filename)!==null&&n!==void 0?n:"ruffle.js")!=="ruffle.js"}function Rf(){try{Wt=Wt??document.getElementsByTagName("object"),Ut=Ut??document.getElementsByTagName("embed");for(const e of Array.from(Wt))if(wt.isInterdictable(e)){const n=wt.fromNativeObjectElement(e);e.replaceWith(n)}for(const e of Array.from(Ut))if(_t.isInterdictable(e)){const n=_t.fromNativeEmbedElement(e);e.replaceWith(n)}}catch(e){console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`)}}let qt,Bt;function xf(){qt=qt??document.getElementsByTagName("iframe"),Bt=Bt??document.getElementsByTagName("frame"),[qt,Bt].forEach(e=>{for(const n of e){if(n.dataset.rufflePolyfilled!==void 0)continue;n.dataset.rufflePolyfilled="";const t=n.contentWindow,r=`Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;try{t.document.readyState==="complete"&&Du(t,r)}catch(o){_n||console.warn(r+o)}n.addEventListener("load",()=>{Du(t,r)},!1)}})}async function Du(e,n){var t;await new Promise(o=>{window.setTimeout(()=>{o()},100)});let r;try{if(r=e.document,!r)return}catch(o){_n||console.warn(n+o);return}if(!(!_n&&r.documentElement.dataset.ruffleOptout!==void 0)){if(_n)e.RufflePlayer||(e.RufflePlayer={}),e.RufflePlayer.config=Object.assign(Object.assign({},jr),(t=e.RufflePlayer.config)!==null&&t!==void 0?t:{});else if(!e.RufflePlayer){const o=r.createElement("script");o.setAttribute("src",Yv),o.onload=()=>{e.RufflePlayer={},e.RufflePlayer.config=jr},r.head.appendChild(o)}}}function Xv(){new MutationObserver(function(n){n.some(r=>Array.from(r.addedNodes).some(o=>["EMBED","OBJECT"].includes(o.nodeName)||o instanceof Element&&o.querySelector("embed, object")!==null))&&(Rf(),xf())}).observe(document,{childList:!0,subtree:!0})}function eg(){Sf()||Gv(fn)}function ng(){Sf()||(Rf(),xf(),Xv())}class yt{constructor(n,t,r,o,i){this.major=n,this.minor=t,this.patch=r,this.prIdent=o,this.buildIdent=i}static fromSemver(n){const t=n.split("+"),r=t[0].split("-"),o=r[0].split("."),i=parseInt(o[0],10);let a=0,s=0,l=null,u=null;return o[1]!==void 0&&(a=parseInt(o[1],10)),o[2]!==void 0&&(s=parseInt(o[2],10)),r[1]!==void 0&&(l=r[1].split(".")),t[1]!==void 0&&(u=t[1].split(".")),new yt(i,a,s,l,u)}isCompatibleWith(n){return this.major!==0&&this.major===n.major||this.major===0&&n.major===0&&this.minor!==0&&this.minor===n.minor||this.major===0&&n.major===0&&this.minor===0&&n.minor===0&&this.patch!==0&&this.patch===n.patch}hasPrecedenceOver(n){if(this.major>n.major)return!0;if(this.major<n.major)return!1;if(this.minor>n.minor)return!0;if(this.minor<n.minor)return!1;if(this.patch>n.patch)return!0;if(this.patch<n.patch)return!1;if(this.prIdent===null&&n.prIdent!==null)return!0;if(this.prIdent!==null&&n.prIdent===null)return!1;if(this.prIdent!==null&&n.prIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.prIdent.length&&r<n.prIdent.length;r+=1){const o=t.test(n.prIdent[r]),i=t.test(this.prIdent[r]);if(!i&&o)return!0;if(i&&o){const a=parseInt(this.prIdent[r],10),s=parseInt(n.prIdent[r],10);if(a>s)return!0;if(a<s)return!1}else{if(i&&!o)return!1;if(!i&&!o){if(this.prIdent[r]>n.prIdent[r])return!0;if(this.prIdent[r]<n.prIdent[r])return!1}}}if(this.prIdent.length>n.prIdent.length)return!0;if(this.prIdent.length<n.prIdent.length)return!1}if(this.buildIdent!==null&&n.buildIdent===null)return!0;if(this.buildIdent===null&&n.buildIdent!==null)return!1;if(this.buildIdent!==null&&n.buildIdent!==null){const t=/^[0-9]*$/;for(let r=0;r<this.buildIdent.length&&r<n.buildIdent.length;r+=1){const o=t.test(this.buildIdent[r]),i=t.test(n.buildIdent[r]);if(!o&&i)return!0;if(o&&i){const a=parseInt(this.buildIdent[r],10),s=parseInt(n.buildIdent[r],10);if(a>s)return!0;if(a<s)return!1}else{if(o&&!i)return!1;if(!o&&!i){if(this.buildIdent[r]>n.buildIdent[r])return!0;if(this.buildIdent[r]<n.buildIdent[r])return!1}}}return this.buildIdent.length>n.buildIdent.length}return!1}isEqual(n){return this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}isStableOrCompatiblePrerelease(n){return n.prIdent===null?!0:this.major===n.major&&this.minor===n.minor&&this.patch===n.patch}}class rs{constructor(n){this.requirements=n}satisfiedBy(n){for(const t of this.requirements){let r=!0;for(const{comparator:o,version:i}of t)r=r&&i.isStableOrCompatiblePrerelease(n),o===""||o==="="?r=r&&i.isEqual(n):o===">"?r=r&&n.hasPrecedenceOver(i):o===">="?r=r&&(n.hasPrecedenceOver(i)||i.isEqual(n)):o==="<"?r=r&&i.hasPrecedenceOver(n):o==="<="?r=r&&(i.hasPrecedenceOver(n)||i.isEqual(n)):o==="^"&&(r=r&&i.isCompatibleWith(n));if(r)return!0}return!1}static fromRequirementString(n){const t=n.split(" ");let r=[];const o=[];for(const i of t)if(i==="||")r.length>0&&(o.push(r),r=[]);else if(i.length>0){const a=/[0-9]/.exec(i);if(a){const s=i.slice(0,a.index).trim(),l=yt.fromSemver(i.slice(a.index).trim());r.push({comparator:s,version:l})}}return r.length>0&&o.push(r),new rs(o)}}const Iu={version:De.versionNumber+"+"+De.buildDate.substring(0,10),polyfill(){ng()},pluginPolyfill(){eg()},createPlayer(){const e=ns("ruffle-player",Ge);return document.createElement(e)}};class Vo{constructor(n){var t;this.sources=(n==null?void 0:n.sources)||{},this.config=(n==null?void 0:n.config)||{},this.invoked=(n==null?void 0:n.invoked)||!1,this.newestName=(n==null?void 0:n.newestName)||null,(t=n==null?void 0:n.superseded)===null||t===void 0||t.call(n),document.readyState==="loading"?document.addEventListener("readystatechange",this.init.bind(this)):window.setTimeout(this.init.bind(this),0)}get version(){return"0.1.0"}registerSource(n){this.sources[n]=Iu}newestSourceName(){let n=null,t=yt.fromSemver("0.0.0");for(const r in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,r)){const o=yt.fromSemver(this.sources[r].version);o.hasPrecedenceOver(t)&&(n=r,t=o)}return n}init(){if(!this.invoked){if(this.invoked=!0,this.newestName=this.newestSourceName(),this.newestName===null)throw new Error("No registered Ruffle source!");("polyfills"in this.config?this.config.polyfills:!0)!==!1&&this.sources[this.newestName].polyfill()}}newest(){const n=this.newestSourceName();return n!==null?this.sources[n]:null}satisfying(n){const t=rs.fromRequirementString(n);let r=null;for(const o in this.sources)if(Object.prototype.hasOwnProperty.call(this.sources,o)){const i=yt.fromSemver(this.sources[o].version);t.satisfiedBy(i)&&(r=this.sources[o])}return r}localCompatible(){return this.sources.local!==void 0?this.satisfying("^"+this.sources.local.version):this.newest()}local(){return this.sources.local!==void 0?this.satisfying("="+this.sources.local.version):this.newest()}superseded(){this.invoked=!0}static negotiate(n,t){let r;return n instanceof Vo?r=n:r=new Vo(n),t!==void 0&&(r.registerSource(t),("polyfills"in r.config?r.config.polyfills:!0)!==!1&&Iu.pluginPolyfill()),r}}window.RufflePlayer=Vo.negotiate(window.RufflePlayer,"local");Qi.createRoot(document.getElementById("root")).render(E.jsx(Ki.StrictMode,{children:E.jsx(lh,{ruffleBaseConfig:{autoplay:Ct.On,unmuteOverlay:Er.Hidden,logLevel:qo.Warn,letterbox:Uo.On,forceScale:!0,forceAlign:!0},allowSampleSwfs:!0,allowUrlLoading:!1})}));
