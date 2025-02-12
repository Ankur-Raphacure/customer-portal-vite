import{r as n,ab as K,bE as ue,ah as Ne,e4 as an,ac as W,bM as Dt,ci as on,ai as we,ck as Le,c1 as Ke,af as Tt,cm as rn,cn as sn,co as zt,cp as ln,bJ as cn,bD as Ot,T as dn,e_ as pn,ce as fn,bF as Ie,bZ as Yt,e$ as Qt,b$ as Pt,b_ as un,c6 as Vt,ag as gn,f0 as Mt,f1 as xn,f2 as hn,f3 as mn,d as vn,j as t,u as bn,b as yn,a as rt,aP as wn,f4 as Lt,f5 as wt,w as Cn,dt as kn,du as st,y as Sn,k as He,f6 as jn,a2 as En,f7 as Nn,bi as _n,br as Rn,dW as Pn,c as Tn,b9 as $t,ba as On,f8 as Dn,f9 as zn,fa as Mn,t as At}from"./index-BHf3qlKB.js";import{H as Ht,T as Ln}from"./HealthSaverCard-ALtZy7oF.js";import{S as $n}from"./ShareModal-Stxi30b-.js";import{R as An,X as Hn,T as Kn}from"./generateCategoricalChart-CLxd6FU1.js";import{P as Bn,L as Fn}from"./LineChart-Bo0DINA6.js";import{C as Wn,L as In}from"./Line-dR9K_R3D.js";import{T as Ct,a as kt}from"./index-DCrXxw5t.js";import{R as lt}from"./Row-f7XalRoN.js";import{S as Un}from"./index-CE3dYLmv.js";import"./toInteger-CX202uQx.js";import"./index-B4dHH-oc.js";var Kt=n.createContext(null),Gn=function(i){var r=i.prefixCls,o=i.className,s=i.style,d=i.children,l=i.containerRef,x=i.id,h=i.onMouseEnter,D=i.onMouseOver,u=i.onMouseLeave,k=i.onClick,g=i.onKeyDown,L=i.onKeyUp,B={onMouseEnter:h,onMouseOver:D,onMouseLeave:u,onClick:k,onKeyDown:g,onKeyUp:L};return n.createElement(n.Fragment,null,n.createElement("div",K({id:x,className:Ne("".concat(r,"-content"),o),style:ue({},s),"aria-modal":"true",role:"dialog",ref:l},B),d))};function Bt(e){return typeof e=="string"&&String(Number(e))===e?(an(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var Ft={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function qn(e,i){var r,o,s,d,l=e.prefixCls,x=e.open,h=e.placement,D=e.inline,u=e.push,k=e.forceRender,g=e.autoFocus,L=e.keyboard,B=e.rootClassName,_=e.rootStyle,I=e.zIndex,J=e.className,R=e.id,ie=e.style,A=e.motion,le=e.width,ae=e.height,$=e.children,P=e.contentWrapperStyle,de=e.mask,F=e.maskClosable,U=e.maskMotion,S=e.maskClassName,oe=e.maskStyle,X=e.afterOpenChange,re=e.onClose,G=e.onMouseEnter,T=e.onMouseOver,z=e.onMouseLeave,v=e.onClick,V=e.onKeyDown,he=e.onKeyUp,Z=n.useRef(),N=n.useRef(),C=n.useRef();n.useImperativeHandle(i,function(){return Z.current});var ee=function(Y){var ke=Y.keyCode,_e=Y.shiftKey;switch(ke){case Le.TAB:{if(ke===Le.TAB){if(!_e&&document.activeElement===C.current){var ze;(ze=N.current)===null||ze===void 0||ze.focus({preventScroll:!0})}else if(_e&&document.activeElement===N.current){var fe;(fe=C.current)===null||fe===void 0||fe.focus({preventScroll:!0})}}break}case Le.ESC:{re&&L&&(Y.stopPropagation(),re(Y));break}}};n.useEffect(function(){if(x&&g){var H;(H=Z.current)===null||H===void 0||H.focus({preventScroll:!0})}},[x]);var ce=n.useState(!1),ve=W(ce,2),me=ve[0],te=ve[1],O=n.useContext(Kt),je;u===!1?je={distance:0}:u===!0?je={}:je=u||{};var Ce=(r=(o=(s=je)===null||s===void 0?void 0:s.distance)!==null&&o!==void 0?o:O==null?void 0:O.pushDistance)!==null&&r!==void 0?r:180,Be=n.useMemo(function(){return{pushDistance:Ce,push:function(){te(!0)},pull:function(){te(!1)}}},[Ce]);n.useEffect(function(){if(x){var H;O==null||(H=O.push)===null||H===void 0||H.call(O)}else{var Y;O==null||(Y=O.pull)===null||Y===void 0||Y.call(O)}},[x]),n.useEffect(function(){return function(){var H;O==null||(H=O.pull)===null||H===void 0||H.call(O)}},[]);var Ge=de&&n.createElement(Dt,K({key:"mask"},U,{visible:x}),function(H,Y){var ke=H.className,_e=H.style;return n.createElement("div",{className:Ne("".concat(l,"-mask"),ke,S),style:ue(ue({},_e),oe),onClick:F&&x?re:void 0,ref:Y})}),qe=typeof A=="function"?A(h):A,be={};if(me&&Ce)switch(h){case"top":be.transform="translateY(".concat(Ce,"px)");break;case"bottom":be.transform="translateY(".concat(-Ce,"px)");break;case"left":be.transform="translateX(".concat(Ce,"px)");break;default:be.transform="translateX(".concat(-Ce,"px)");break}h==="left"||h==="right"?be.width=Bt(le):be.height=Bt(ae);var $e={onMouseEnter:G,onMouseOver:T,onMouseLeave:z,onClick:v,onKeyDown:V,onKeyUp:he},pe=n.createElement(Dt,K({key:"panel"},qe,{visible:x,forceRender:k,onVisibleChanged:function(Y){X==null||X(Y)},removeOnLeave:!1,leavedClassName:"".concat(l,"-content-wrapper-hidden")}),function(H,Y){var ke=H.className,_e=H.style;return n.createElement("div",K({className:Ne("".concat(l,"-content-wrapper"),ke),style:ue(ue(ue({},be),_e),P)},on(e,{data:!0})),n.createElement(Gn,K({id:R,containerRef:Y,prefixCls:l,className:J,style:ie},$e),$))}),De=ue({},_);return I&&(De.zIndex=I),n.createElement(Kt.Provider,{value:Be},n.createElement("div",{className:Ne(l,"".concat(l,"-").concat(h),B,(d={},we(d,"".concat(l,"-open"),x),we(d,"".concat(l,"-inline"),D),d)),style:De,tabIndex:-1,ref:Z,onKeyDown:ee},Ge,n.createElement("div",{tabIndex:0,ref:N,style:Ft,"aria-hidden":"true","data-sentinel":"start"}),pe,n.createElement("div",{tabIndex:0,ref:C,style:Ft,"aria-hidden":"true","data-sentinel":"end"})))}var Jn=n.forwardRef(qn),Xn=function(i){var r=i.open,o=r===void 0?!1:r,s=i.prefixCls,d=s===void 0?"rc-drawer":s,l=i.placement,x=l===void 0?"right":l,h=i.autoFocus,D=h===void 0?!0:h,u=i.keyboard,k=u===void 0?!0:u,g=i.width,L=g===void 0?378:g,B=i.mask,_=B===void 0?!0:B,I=i.maskClosable,J=I===void 0?!0:I,R=i.getContainer,ie=i.forceRender,A=i.afterOpenChange,le=i.destroyOnClose,ae=i.onMouseEnter,$=i.onMouseOver,P=i.onMouseLeave,de=i.onClick,F=i.onKeyDown,U=i.onKeyUp,S=n.useState(!1),oe=W(S,2),X=oe[0],re=oe[1],G=n.useState(!1),T=W(G,2),z=T[0],v=T[1];Ke(function(){v(!0)},[]);var V=z?o:!1,he=n.useRef(),Z=n.useRef();Ke(function(){V&&(Z.current=document.activeElement)},[V]);var N=function(ve){var me;if(re(ve),A==null||A(ve),!ve&&Z.current&&!(!((me=he.current)===null||me===void 0)&&me.contains(Z.current))){var te;(te=Z.current)===null||te===void 0||te.focus({preventScroll:!0})}};if(!ie&&!X&&!V&&le)return null;var C={onMouseEnter:ae,onMouseOver:$,onMouseLeave:P,onClick:de,onKeyDown:F,onKeyUp:U},ee=ue(ue({},i),{},{open:V,prefixCls:d,placement:x,autoFocus:D,keyboard:k,width:L,mask:_,maskClosable:J,inline:R===!1,afterOpenChange:N,ref:he},C);return n.createElement(Bn,{open:V||ie||X,autoDestroy:!1,getContainer:R,autoLock:_&&(V||X)},n.createElement(Jn,ee))},Yn=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};cn("default","large");var Qn={distance:180};function Vn(e){var i=e.width,r=e.height,o=e.size,s=o===void 0?"default":o,d=e.closable,l=d===void 0?!0:d,x=e.mask,h=x===void 0?!0:x,D=e.push,u=D===void 0?Qn:D,k=e.closeIcon,g=k===void 0?n.createElement(ln,null):k,L=e.bodyStyle,B=e.drawerStyle,_=e.className,I=e.visible,J=e.open,R=e.children,ie=e.style,A=e.title,le=e.headerStyle,ae=e.onClose,$=e.footer,P=e.footerStyle,de=e.prefixCls,F=e.getContainer,U=e.extra,S=e.afterVisibleChange,oe=e.afterOpenChange,X=Yn(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),re=n.useContext(Tt),G=re.getPopupContainer,T=re.getPrefixCls,z=re.direction,v=T("drawer",de),V=F===void 0&&G?function(){return G(document.body)}:F,he=l&&n.createElement("button",{type:"button",onClick:ae,"aria-label":"Close",className:"".concat(v,"-close")},g);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach(function(te){var O=W(te,2);O[0],O[1]});function Z(){return!A&&!l?null:n.createElement("div",{className:Ne("".concat(v,"-header"),we({},"".concat(v,"-header-close-only"),l&&!A&&!U)),style:le},n.createElement("div",{className:"".concat(v,"-header-title")},he,A&&n.createElement("div",{className:"".concat(v,"-title")},A)),U&&n.createElement("div",{className:"".concat(v,"-extra")},U))}function N(){if(!$)return null;var te="".concat(v,"-footer");return n.createElement("div",{className:te,style:P},$)}var C=Ne(we({"no-mask":!h},"".concat(v,"-rtl"),z==="rtl"),_),ee=n.useMemo(function(){return i??(s==="large"?736:378)},[i,s]),ce=n.useMemo(function(){return r??(s==="large"?736:378)},[r,s]),ve={motionName:zt(v,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},me=function(O){return{motionName:zt(v,"panel-motion-".concat(O)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return n.createElement(rn,null,n.createElement(sn,{status:!0,override:!0},n.createElement(Xn,K({prefixCls:v,onClose:ae},X,{open:J??I,mask:h,push:u,width:ee,height:ce,rootClassName:C,getContainer:V,afterOpenChange:function(O){oe==null||oe(O),S==null||S(O)},maskMotion:ve,motion:me,rootStyle:ie}),n.createElement("div",{className:"".concat(v,"-wrapper-body"),style:K({},B)},Z(),n.createElement("div",{className:"".concat(v,"-body"),style:L},R),N()))))}var Zn=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r},ei={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Wt=n.forwardRef(function(e,i){var r=function(u){var k=u.keyCode;k===Le.ENTER&&u.preventDefault()},o=function(u){var k=u.keyCode,g=e.onClick;k===Le.ENTER&&g&&g()},s=e.style,d=e.noStyle,l=e.disabled,x=Zn(e,["style","noStyle","disabled"]),h={};return d||(h=K({},ei)),l&&(h.pointerEvents="none"),h=K(K({},h),s),n.createElement("div",K({role:"button",tabIndex:0,ref:i},x,{onKeyDown:r,onKeyUp:o,style:h}))}),ti={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},ni=function(i,r){return n.createElement(Ot,ue(ue({},i),{},{ref:r,icon:ti}))},ii=n.forwardRef(ni),ai={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},oi=function(i,r){return n.createElement(Ot,ue(ue({},i),{},{ref:r,icon:ai}))},ri=n.forwardRef(oi),St,It;function si(){return It||(It=1,St=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var i=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(i.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":i.blur();break;default:i=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(s){e.addRange(s)}),i&&i.focus()}}),St}var jt,Ut;function li(){if(Ut)return jt;Ut=1;var e=si(),i={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function o(d){var l=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return d.replace(/#{\s*key\s*}/g,l)}function s(d,l){var x,h,D,u,k,g,L=!1;l||(l={}),x=l.debug||!1;try{D=e(),u=document.createRange(),k=document.getSelection(),g=document.createElement("span"),g.textContent=d,g.ariaHidden="true",g.style.all="unset",g.style.position="fixed",g.style.top=0,g.style.clip="rect(0, 0, 0, 0)",g.style.whiteSpace="pre",g.style.webkitUserSelect="text",g.style.MozUserSelect="text",g.style.msUserSelect="text",g.style.userSelect="text",g.addEventListener("copy",function(_){if(_.stopPropagation(),l.format)if(_.preventDefault(),typeof _.clipboardData>"u"){x&&console.warn("unable to use e.clipboardData"),x&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var I=i[l.format]||i.default;window.clipboardData.setData(I,d)}else _.clipboardData.clearData(),_.clipboardData.setData(l.format,d);l.onCopy&&(_.preventDefault(),l.onCopy(_.clipboardData))}),document.body.appendChild(g),u.selectNodeContents(g),k.addRange(u);var B=document.execCommand("copy");if(!B)throw new Error("copy command was unsuccessful");L=!0}catch(_){x&&console.error("unable to copy using execCommand: ",_),x&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(l.format||"text",d),l.onCopy&&l.onCopy(window.clipboardData),L=!0}catch(I){x&&console.error("unable to copy using clipboardData: ",I),x&&console.error("falling back to prompt"),h=o("message"in l?l.message:r),window.prompt(h,d)}}finally{k&&(typeof k.removeRange=="function"?k.removeRange(u):k.removeAllRanges()),g&&document.body.removeChild(g),D()}return L}return jt=s,jt}var ci=li();const di=dn(ci);var pi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},fi=function(i,r){return n.createElement(Ot,ue(ue({},i),{},{ref:r,icon:pi}))},ui=n.forwardRef(fi),gi=function(i){var r=i.prefixCls,o=i["aria-label"],s=i.className,d=i.style,l=i.direction,x=i.maxLength,h=i.autoSize,D=h===void 0?!0:h,u=i.value,k=i.onSave,g=i.onCancel,L=i.onEnd,B=i.component,_=i.enterIcon,I=_===void 0?n.createElement(ui,null):_,J=n.useRef(null),R=n.useRef(!1),ie=n.useRef(),A=n.useState(u),le=W(A,2),ae=le[0],$=le[1];n.useEffect(function(){$(u)},[u]),n.useEffect(function(){if(J.current&&J.current.resizableTextArea){var T=J.current.resizableTextArea.textArea;T.focus();var z=T.value.length;T.setSelectionRange(z,z)}},[]);var P=function(z){var v=z.target;$(v.value.replace(/[\n\r]/g,""))},de=function(){R.current=!0},F=function(){R.current=!1},U=function(z){var v=z.keyCode;R.current||(ie.current=v)},S=function(){k(ae.trim())},oe=function(z){var v=z.keyCode,V=z.ctrlKey,he=z.altKey,Z=z.metaKey,N=z.shiftKey;ie.current===v&&!R.current&&!V&&!he&&!Z&&!N&&(v===Le.ENTER?(S(),L==null||L()):v===Le.ESC&&g())},X=function(){S()},re=B?"".concat(r,"-").concat(B):"",G=Ne(r,"".concat(r,"-edit-content"),we({},"".concat(r,"-rtl"),l==="rtl"),s,re);return n.createElement("div",{className:G,style:d},n.createElement(pn,{ref:J,maxLength:x,value:ae,onChange:P,onKeyDown:U,onKeyUp:oe,onCompositionStart:de,onCompositionEnd:F,onBlur:X,"aria-label":o,rows:1,autoSize:D}),I!==null?fn(I,{className:"".concat(r,"-edit-content-confirm")}):null)};function Et(e,i){return n.useMemo(function(){var r=!!e;return[r,K(K({},i),r&&Ie(e)==="object"?e:null)]},[e])}var xi=function(i,r){var o=n.useRef(!1);n.useEffect(function(){o.current?i():o.current=!0},r)},hi=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r},Zt=n.forwardRef(function(e,i){var r=e.prefixCls,o=e.component,s=o===void 0?"article":o,d=e.className,l=e.setContentRef,x=e.children,h=e.direction,D=hi(e,["prefixCls","component","className","setContentRef","children","direction"]),u=n.useContext(Tt),k=u.getPrefixCls,g=u.direction,L=h??g,B=i;l&&(B=Yt(i,l));var _=k("typography",r),I=Ne(_,we({},"".concat(_,"-rtl"),L==="rtl"),d);return n.createElement(s,K({className:I,ref:B},D),x)});function en(e){var i=Ie(e);return i==="string"||i==="number"}function mi(e){var i=0;return e.forEach(function(r){en(r)?i+=String(r).length:i+=1}),i}function Gt(e,i){for(var r=0,o=[],s=0;s<e.length;s+=1){if(r===i)return o;var d=e[s],l=en(d),x=l?String(d).length:1,h=r+x;if(h>i){var D=i-r;return o.push(String(d).slice(0,D)),o}o.push(d),r=h}return e}var vi=0,ct=1,qt=2,Nt=3,Jt=4,bi=function(i){var r=i.enabledMeasure,o=i.children,s=i.text,d=i.width,l=i.fontSize,x=i.rows,h=i.onEllipsis,D=n.useState([0,0,0]),u=W(D,2),k=W(u[0],3),g=k[0],L=k[1],B=k[2],_=u[1],I=n.useState(vi),J=W(I,2),R=J[0],ie=J[1],A=n.useState(0),le=W(A,2),ae=le[0],$=le[1],P=n.useRef(null),de=n.useRef(null),F=n.useMemo(function(){return Qt(s)},[s]),U=n.useMemo(function(){return mi(F)},[F]),S=n.useMemo(function(){return!r||R!==Nt?o(F,!1):o(Gt(F,L),L<U)},[r,R,o,F,L,U]);Ke(function(){r&&d&&l&&U&&(ie(ct),_([0,Math.ceil(U/2),U]))},[r,d,l,s,U,x]),Ke(function(){var G;R===ct&&$(((G=P.current)===null||G===void 0?void 0:G.offsetHeight)||0)},[R]),Ke(function(){var G,T;if(ae){if(R===ct){var z=((G=de.current)===null||G===void 0?void 0:G.offsetHeight)||0,v=x*ae;z<=v?(ie(Jt),h(!1)):ie(qt)}else if(R===qt)if(g!==B){var V=((T=de.current)===null||T===void 0?void 0:T.offsetHeight)||0,he=x*ae,Z=g,N=B;g===B-1?N=g:V<=he?Z=L:N=L;var C=Math.ceil((Z+N)/2);_([Z,C,N])}else ie(Nt),h(!0)}},[R,g,B,x,ae]);var oe={width:d,whiteSpace:"normal",margin:0,padding:0},X=function(T,z,v){return n.createElement("span",{"aria-hidden":!0,ref:z,style:K({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(l/2)*2},v)},T)},re=function(T,z){var v=Gt(F,T);return X(o(v,!0),z,oe)};return n.createElement(n.Fragment,null,S,r&&R!==Nt&&R!==Jt&&n.createElement(n.Fragment,null,X("lg",P,{wordBreak:"keep-all",whiteSpace:"nowrap"}),R===ct?X(o(F,!1),de,oe):re(L,de)))},yi=function(i){var r=i.enabledEllipsis,o=i.isEllipsis,s=i.children,d=i.tooltipProps;return!(d!=null&&d.title)||!r?s:n.createElement(Pt,K({open:o?void 0:!1},d),s)},wi=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r};function Ci(e,i){var r=e.mark,o=e.code,s=e.underline,d=e.delete,l=e.strong,x=e.keyboard,h=e.italic,D=i;function u(k,g){k&&(D=n.createElement(g,{},D))}return u(l,"strong"),u(s,"u"),u(d,"del"),u(o,"code"),u(r,"mark"),u(x,"kbd"),u(h,"i"),D}function dt(e,i,r){return e===!0||e===void 0?i:e||r&&i}function Xt(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}var ki="...",pt=n.forwardRef(function(e,i){var r,o,s,d=e.prefixCls,l=e.className,x=e.style,h=e.type,D=e.disabled,u=e.children,k=e.ellipsis,g=e.editable,L=e.copyable,B=e.component,_=e.title,I=wi(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),J=n.useContext(Tt),R=J.getPrefixCls,ie=J.direction,A=un("Text")[0],le=n.useRef(null),ae=n.useRef(null),$=R("typography",d),P=Vt(I,["mark","code","delete","underline","strong","keyboard","italic"]),de=Et(g),F=W(de,2),U=F[0],S=F[1],oe=gn(!1,{value:S.editing}),X=W(oe,2),re=X[0],G=X[1],T=S.triggerType,z=T===void 0?["icon"]:T,v=function(f){var w;f&&((w=S.onStart)===null||w===void 0||w.call(S)),G(f)};xi(function(){var y;re||(y=ae.current)===null||y===void 0||y.focus()},[re]);var V=function(f){f==null||f.preventDefault(),v(!0)},he=function(f){var w;(w=S.onChange)===null||w===void 0||w.call(S,f),v(!1)},Z=function(){var f;(f=S.onCancel)===null||f===void 0||f.call(S),v(!1)},N=Et(L),C=W(N,2),ee=C[0],ce=C[1],ve=n.useState(!1),me=W(ve,2),te=me[0],O=me[1],je=n.useRef(),Ce={};ce.format&&(Ce.format=ce.format);var Be=function(){window.clearTimeout(je.current)},Ge=function(f){var w;f==null||f.preventDefault(),f==null||f.stopPropagation(),di(ce.text||String(u)||"",Ce),O(!0),Be(),je.current=window.setTimeout(function(){O(!1)},3e3),(w=ce.onCopy)===null||w===void 0||w.call(ce,f)};n.useEffect(function(){return Be},[]);var qe=n.useState(!1),be=W(qe,2),$e=be[0],pe=be[1],De=n.useState(!1),H=W(De,2),Y=H[0],ke=H[1],_e=n.useState(!1),ze=W(_e,2),fe=ze[0],ft=ze[1],Se=n.useState(!1),Je=W(Se,2),Xe=Je[0],ut=Je[1],gt=n.useState(!1),Ye=W(gt,2),Qe=Ye[0],xt=Ye[1],Ve=n.useState(!0),Ze=W(Ve,2),ht=Ze[0],mt=Ze[1],et=Et(k,{expandable:!1}),tt=W(et,2),Ee=tt[0],q=tt[1],ge=Ee&&!fe,Fe=q.rows,Re=Fe===void 0?1:Fe,Me=n.useMemo(function(){return!ge||q.suffix!==void 0||q.onEllipsis||q.expandable||U||ee},[ge,q,U,ee]);Ke(function(){Ee&&!Me&&(pe(Mt("webkitLineClamp")),ke(Mt("textOverflow")))},[Me,Ee]);var xe=n.useMemo(function(){return Me?!1:Re===1?Y:$e},[Me,Y,$e]),a=ge&&(xe?Qe:Xe),p=ge&&Re===1&&xe,m=ge&&Re>1&&xe,j=function(f){var w;ft(!0),(w=q.onExpand)===null||w===void 0||w.call(q,f)},M=n.useState(0),se=W(M,2),Pe=se[0],Q=se[1],b=n.useState(0),Te=W(b,2),Ae=Te[0],Oe=Te[1],We=function(f,w){var E=f.offsetWidth,ne;Q(E),Oe(parseInt((ne=window.getComputedStyle)===null||ne===void 0?void 0:ne.call(window,w).fontSize,10)||0)},nt=function(f){var w;ut(f),Xe!==f&&((w=q.onEllipsis)===null||w===void 0||w.call(q,f))};n.useEffect(function(){var y=le.current;if(Ee&&xe&&y){var f=m?y.offsetHeight<y.scrollHeight:y.offsetWidth<y.scrollWidth;Qe!==f&&xt(f)}},[Ee,xe,u,m,ht]),n.useEffect(function(){var y=le.current;if(!(typeof IntersectionObserver>"u"||!y||!xe||!ge)){var f=new IntersectionObserver(function(){mt(!!y.offsetParent)});return f.observe(y),function(){f.disconnect()}}},[xe,ge]);var ye={};q.tooltip===!0?ye={title:(r=S.text)!==null&&r!==void 0?r:u}:n.isValidElement(q.tooltip)?ye={title:q.tooltip}:Ie(q.tooltip)==="object"?ye=K({title:(o=S.text)!==null&&o!==void 0?o:u},q.tooltip):ye={title:q.tooltip};var c=n.useMemo(function(){var y=function(w){return["string","number"].includes(Ie(w))};if(!(!Ee||xe)){if(y(S.text))return S.text;if(y(u))return u;if(y(_))return _;if(y(ye.title))return ye.title}},[Ee,xe,_,ye.title,a]);if(re)return n.createElement(gi,{value:(s=S.text)!==null&&s!==void 0?s:typeof u=="string"?u:"",onSave:he,onCancel:Z,onEnd:S.onEnd,prefixCls:$,className:l,style:x,direction:ie,component:B,maxLength:S.maxLength,autoSize:S.autoSize,enterIcon:S.enterIcon});var vt=function(){var f=q.expandable,w=q.symbol;if(!f)return null;var E;return w?E=w:E=A.expand,n.createElement("a",{key:"expand",className:"".concat($,"-expand"),onClick:j,"aria-label":A.expand},E)},bt=function(){if(U){var f=S.icon,w=S.tooltip,E=Qt(w)[0]||A.edit,ne=typeof E=="string"?E:"";return z.includes("icon")?n.createElement(Pt,{key:"edit",title:w===!1?"":E},n.createElement(Wt,{ref:ae,className:"".concat($,"-edit"),onClick:V,"aria-label":ne},f||n.createElement(ri,{role:"button"}))):null}},it=function(){if(ee){var f=ce.tooltips,w=ce.icon,E=Xt(f),ne=Xt(w),yt=te?dt(E[1],A.copied):dt(E[0],A.copy),tn=te?A.copied:A.copy,nn=typeof yt=="string"?yt:tn;return n.createElement(Pt,{key:"copy",title:yt},n.createElement(Wt,{className:Ne("".concat($,"-copy"),te&&"".concat($,"-copy-success")),onClick:Ge,"aria-label":nn},te?dt(ne[1],n.createElement(hn,null),!0):dt(ne[0],n.createElement(ii,null),!0)))}},at=function(f){return[f&&vt(),bt(),it()]},ot=function(f){return[f&&n.createElement("span",{"aria-hidden":!0,key:"ellipsis"},ki),q.suffix,at(f)]};return n.createElement(xn,{onResize:We,disabled:!ge||xe},function(y){return n.createElement(yi,{tooltipProps:ye,enabledEllipsis:ge,isEllipsis:a},n.createElement(Zt,K({className:Ne(we(we(we(we(we(we({},"".concat($,"-").concat(h),h),"".concat($,"-disabled"),D),"".concat($,"-ellipsis"),Ee),"".concat($,"-single-line"),ge&&Re===1),"".concat($,"-ellipsis-single-line"),p),"".concat($,"-ellipsis-multiple-line"),m),l),prefixCls:d,style:K(K({},x),{WebkitLineClamp:m?Re:void 0}),component:B,ref:Yt(y,le,i),direction:ie,onClick:z.includes("text")?V:void 0,"aria-label":c==null?void 0:c.toString(),title:_},P),n.createElement(bi,{enabledMeasure:ge&&!xe,text:u,rows:Re,width:Pe,fontSize:Ae,onEllipsis:nt},function(f,w){var E=f;f.length&&w&&c&&(E=n.createElement("span",{key:"show-content","aria-hidden":!0},E));var ne=Ci(e,n.createElement(n.Fragment,null,E,ot(w)));return ne})))})}),Si=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r},ji=n.forwardRef(function(e,i){var r=e.ellipsis,o=e.rel,s=Si(e,["ellipsis","rel"]),d=K(K({},s),{rel:o===void 0&&s.target==="_blank"?"noopener noreferrer":o});return delete d.navigate,n.createElement(pt,K({},d,{ref:i,ellipsis:!!r,component:"a"}))}),Ei=n.forwardRef(function(e,i){return n.createElement(pt,K({ref:i},e,{component:"div"}))}),Ni=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r},_i=function(i,r){var o=i.ellipsis,s=Ni(i,["ellipsis"]),d=n.useMemo(function(){return o&&Ie(o)==="object"?Vt(o,["expandable","rows"]):o},[o]);return n.createElement(pt,K({ref:r},s,{ellipsis:d,component:"span"}))};const Ri=n.forwardRef(_i);var Pi=function(e,i){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&i.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(r[o[s]]=e[o[s]]);return r},Ti=mn(1,2,3,4,5),Oi=n.forwardRef(function(e,i){var r=e.level,o=r===void 0?1:r,s=Pi(e,["level"]),d;return Ti.includes(o)?d="h".concat(o):d="h1",n.createElement(pt,K({ref:i},s,{component:d}))}),Ue=Zt;Ue.Text=Ri;Ue.Link=ji;Ue.Title=Oi;Ue.Paragraph=Ei;const Di="/assets/test-C0GUn5WC.png",zi=vn.div`
  width: 100%;
  font-family: Outfit, sans-serif;

  .scanDetailsContainer {
    padding: 24px 48px 0px 52px;
    background: #ffffff;
  }
  .time-section1 span {
    margin-right: 10px;
  }
  .bodyScanDiv {
    width: 97%;
    // height: 175px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    /* background: #f6f9fd; */
    padding: 8px 0px 9px 9px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
  }
  .scanCenterLogoTxt {
    padding-left: 10px;
    width: 70%;
  }
  .hm-icon {
    color: #328400;
  }
  .hm-txt {
    font-weight: 500;
    font-size: 14px;
  }

  .imageparentDiv {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    padding: unset;
  }
  .imageTextDiv {
    padding: 2px 0px 0px 21px;
  }
  .imageTextDiv p {
    margin-bottom: 14px;
  }
  .bodyScanTxt {
    color: #000;
    // font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.7;
  }
  .orderPeoples {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    opacity: 0.25;
  }
  .needCheckUpTxt {
    color: #000;
    // font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.7;
  }
  .fastingTime {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  .waterLevel {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.5;
  }
  .scanDescriptionRow {
    min-height: 100px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #eff0ff;
    padding: 8px 0px 9px 9px;
    margin-top: 2rem;
    margin-left: -5px;
  }
  .scanDesTitle {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .scanDespTxt {
    color: #000;
    text-align: justify;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 174.5%; /* 20.94px */
    opacity: 0.5;
  }

  .scanDespVideoRow {
    margin-top: 2rem;
  }
  .scDepVdDiv {
    width: 364px;
    height: 194px;
    flex-shrink: 0;
    border-radius: 15px;
  }
  .arrowShareIcon {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    margin: 0px 8px 0px 16px;
    cursor: pointer;
  }
  .heartIcon {
    width: 21px;
    height: 18px;
    flex-shrink: 0;
    margin-bottom: 14px;
  }
  .needHelpDiv {
    background: #fff;
    padding: 4px;
    cursor: pointer;
    border: 1px solid #4f4c4c;
    border-radius: 5px;
  }
  .sub-needHelpDiv {
    display: flex;
    align-items: center;
  }
  .headWrapper {
    .availablecentersTxt {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 0;
    }
    .btn-filter-module-div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .toggle-filter {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 0.5rem;
      }
      @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  .availableCentersRow {
    width: 100%;
    height: 900px;
    flex-shrink: 0;
    border-radius: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  .availableCentersRow::-webkit-scrollbar {
    width: 9px;
  }

  .availableCentersRow::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  .centerPlace1 {
    margin-top: 4px;
  }
  .availableCentersRow::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  .availCenterContainer {
    width: 100%;
    /* height: 12rem; */
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    margin: 0px 28px 16px 20px;
    padding: unset;
    padding-bottom: 12px;
  }
  .availCenterRow {
    padding: 6px 8px 14px 11px;
  }
  .availCenterLogoCol {
    padding: 0px;
    width: 30%;
  }
  .centerName {
    color: #000;
    // font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.9;
    padding-bottom: 3px;
  }
  .centerPlace {
    color: #0b8f60;
    // font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.9;
    padding-bottom: 8px;
  }
  .scanCenterFee {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  /* .offerCol {
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
  .offerCol span {
    margin-top: -5%;
  } */
  .scanCenterLogoDiv {
    width: 132px;
    height: 74px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #e4e2fe;
  }
  .scanCenterLogoDiv img {
    width: 100%;
    height: 100%;
  }
  .scanCenterTxtDiv {
    padding: 2px 0px 0px 21px;
  }
  .scanCenterLogoTxt {
    /* margin-right: 35%; */
  }
  .scanCenterLogoTxt p {
    margin: unset;
  }
  .scanViewGrapRow {
    /* margin: unset; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .scanViewGrapRow .col {
    padding: unset !important;
  }
  .viewGraphBtn {
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.7;
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.8;
    background: #fff;
    margin-left: 4%;
  }
  .reportHoursCol {
    display: flex;
    align-items: center;
    margin-left: -10%;
  }
  .Check-btn-div {
    border: 1.5px solid black;
    /* opacity: 0.5; */
    background: #fff;
    color: #000;

    border-radius: 8px;
    height: 2.2rem;
  }

  .offerCol {
    position: relative; /* Make offerCol a containing block */
    display: flex;
    justify-content: right;
  }

  .offerCol span {
    position: relative;
  }

  .reportHours {
    position: absolute;
    top: 3%;
    left: 6%;
    /* transform: translate(-50%, -50%);  */
    color: #fff; /* Make the text color white to stand out against the green background */
    font-size: 10px;
    font-weight: 500;
    margin: unset;
    display: flex;
    align-items: center;
  }

  .reportHours img {
    margin-right: 5px; /* Add some space between the icon and the text */
  }

  svg {
    display: block; /* Ensure SVG takes up the correct space */
  }

  /* .reportHours {
    color: #000;
    // font-family: Poppins;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    margin: unset;
  } */
  .selectCenterBtnCol {
    display: flex;
    flex-direction: row;
    justify-content: right;
    margin-right: 1rem;
  }
  .selectCenterBtn {
    color: #fff;
    // font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    // width: 101px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #9747ff;
    border: unset;
  }
  .select-Center-Btn {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;
    background: #9747ff;
    border: none;
    width: max-content;
  }
  .check-pin-div {
    // display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 4rem;
    width: 91%;
    background: #eff0ff;
    margin-left: 23px;
    padding-bottom: 7px;
    padding: 12px;
    border-radius: 4px;
  }
  .Check-Express-text {
    margin-top: -5px;
  }
  .details-page-price-list-sec {
    display: flex;
    justify-content: space-between;
    svg {
      display: inline-block;
    }
  }
  @media (max-width: 567px) {
    .check-pin-div {
      display: flex;
      flex-direction: column;
      height: 8rem;
      margin-left: 17px;
    }
  }
  .Check-lable {
    color: #9747ff;
    background: #fff;
    cursor: pointer;
    font-size: 10px;
  }
  .Available-div {
    font-size: 10px;
    font-weight: 500;
    color: #000;
    opacity: 0.7;
  }
  .check-box {
    border: 2px solid #fff;
    margin-left: 5px;
  }
  .input-group {
    width: 78%;
  }
  .form-control::placeholder {
    font-size: 14px;
  }
  .marginclass {
    margin: 12px;
  }
  .searchRow {
    margin-top: 25px;
    display: none; //we can enable this
  }

  .searchBoxDiv {
    width: 616px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.7;
    align-items: center;
  }
  .favorSearchBox {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 82%;
  }
  .attachedIcon {
    width: 9.804px;
    height: 12.629px;
    flex-shrink: 0;
    margin: 2px 15.2px 0px 13px;
  }
  .bgNone {
    background: unset;
  }
  .shareIcon {
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #9747ff;
    width: 30px;
    height: 31px;
    display: flex;
    margin-left: 16px;
  }
  .shareIcon svg {
    flex-shrink: 0;
  }
  .speackerIcon {
    width: 14px;
    height: 19px;
    flex-shrink: 0;
  }
  .askAITxt {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.9;
  }
  .askAITxt span {
    opacity: 0.9;
    color: #0098ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .myPreference {
    display: flex;
    /* width: 184px !important; */
    /* height: 38px; */
    padding: 14px 50px !important;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    color: #9747ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    margin-top: 30px;
  }
  @media only screen and (max-width: 767px) {
    .imageparentDiv {
      display: block;
    }
    .imageparentDiv {
      width: -webkit-fill-available;
      margin: 8px;
    }
    .availableCentersRow {
      width: auto;
      overflow-y: scroll;
      // height: auto;
    }
    .scanDetailsContainer {
      padding: 24px 24px 0px 24px;
    }
    .offerCol {
      position: relative; /* Ensure relative positioning */
      justify-content: flex-start; /* Align items to the left */
      margin-top: -136px; /* Adjust to move the SVG to the top right */
    }

    .offerCol span {
      position: absolute; /* Absolute positioning for the SVG */
      top: 0;
      right: 0;
    }
    .availCenterContainer {
      width: 85%;
      height: fit-content;
    }
    .scanDespVideoRow {
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .scDepVdDiv {
      width: 100%; /* Adjust to full width on mobile */
      height: auto; /* Allow height to adjust based on content */
      border-radius: 0; /* Remove border radius on mobile */
    }

    .arrowShareIcon,
    .heartIcon,
    .needHelpDiv {
      display: block; /* Ensure icons and divs stack vertically */
      margin: 10px auto; /* Center align and add spacing */
      text-align: center; /* Center align text within div */
    }

    .needHelpDiv svg {
      display: inline-block; /* Adjust SVG display */
      vertical-align: middle; /* Align SVG vertically */
      margin-right: 5px; /* Adjust margin as needed */
    }
    .d-flex {
      display: block !important;
    }
    .imageparentDiv {
      text-align: center;
    }
    .bodyScanDiv {
      width: auto;
    }
    .scDepVdDiv img {
      width: 100%;
    }
    .searchBoxDiv {
      width: auto;
    }
    .searchRow {
      display: block;
    }
    .shareIcon {
      display: none;
    }
    .scanDetailsContainer {
      // margin-top: 30px;
      margin-bottom: 30px;
    }
    .scanDescriptionRow {
      width: 100%;
    }
  }
  .imageparentDiv {
    height: 100%;
    & > img {
      max-width: 14rem;
      max-height: 13rem;
      object-fit: contain;
    }
  }
  .btn {
    width: 70px;
    height: 35px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    border: none;
  }

  .btn,
  .socials {
    border-radius: 20px;
    background-color: transparent;
    gap: 8px;
  }

  .socials {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    top: 0;
    left: 0;
    transition: 0.2s linear;
    visibility: hidden;
  }

  .btn:hover > .socials {
    visibility: visible;
    top: -120%;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: none;
    background-color: transparent;
    position: relative;
  }

  .btn:hover > .icon {
    transform: scale(1.2);
    cursor: pointer;
    transition: 0.2s linear;
  }

  .btn:focus > .icon {
    fill: #fd1853;
    animation: grosseur 0.2s linear;
  }

  @keyframes grosseur {
    0% {
      width: 50px;
      height: 50px;
      fill: #fd1853;
    }

    100% {
      width: 30px;
      height: 30px;
      fill: #fd1853;
    }
  }
  .Grph-btn {
    display: flex;
    justify-content: end;
  }
  .Grph-btn button {
    border: none;
    background: none;
    background: #be98ee;
    height: 3rem;
    width: 9rem;
    margin-right: -2.5rem;
    border-radius: 6px;
  }

  .Grph-btn1 {
    display: flex;
    justify-content: end;
  }
  .close-btn {
    border: none;
    background: none;
    margin-right: -2.5rem;
    border-radius: 6px;
    font-size: 2rem;
  }
  .amount-div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    p {
      background: #e8ffb7;
    }
  }

  .reportHours1 {
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    margin: unset;
  }
  .reportHours2 {
    color: #275800;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    margin: unset;
  }

  .coolinput {
    display: flex;
    flex-direction: column;
    width: fit-content;
    position: static;
    max-width: 240px;
    margin-bottom: 1rem;
  }

  .coolinput label.text {
    font-size: 0.75rem;
    color: #000000;
    position: relative;
    top: 0.5rem;
    margin: 0 0 0 23px;
    padding: 0 3px;
    background: #fff;
    width: fit-content;
    font-weight: 600;
    opacity: 0.9;
  }

  .coolinput input[type="text"].input {
    padding: 8px 10px;
    font-size: 0.75rem;
    border: 1px #000000 solid;
    border-radius: 5px;
  }

  .coolinput input[type="text"].input:focus {
    outline: none;
  }
  .chare-icon {
    font-size: 1rem;
  }
  .error {
    margin: -1rem 5.7rem;
    font-size: 11px;
    opacity: 0.8;
    font-weight: 500;
    color: #f10808;
  }

  .success {
    margin: -1rem 5.7rem;
    font-size: 11px;
    opacity: 0.8;
    font-weight: 500;
    color: #128e12;
  }

  .checkbox {
    --light: rgba(189, 185, 185, 0.425);
    --primary-color: #8c00ff;
    --duration: 0.3s;
    --ease: ease-in-out;
  }

  .checkbox input[type="checkbox"] {
    display: none;
  }
  .checkbox input {
    display: none;
    border-radius: 2px solid red;
  }

  .checkbox label {
    align-items: center;
    cursor: pointer;
    display: flex;
    opacity: 0.7;
    pointer-events: none;
  }

  .checkbox label.active {
    opacity: 1;
    pointer-events: auto;
  }

  .checkbox label span {
    margin-left: 8px;
  }

  .checkbox svg {
    height: 30px;
    width: 30px;
  }

  .checkbox svg > rect {
    fill: var(--light);
    stroke: #8c00ff;
    stroke-dasharray: 400%;
    stroke-dashoffset: 400%;
    transition: var(--duration) stroke-dashoffset var(--ease);
  }

  .checkbox svg path {
    stroke: var(--primary-color);
    stroke-dasharray: 100%;
    stroke-dashoffset: 100%;
    transition: var(--duration) stroke-dashoffset var(--ease);
  }

  .checkbox input[type="checkbox"]:checked + label svg > rect,
  .checkbox input[type="checkbox"]:checked + label svg path {
    stroke-dashoffset: 0;
  }
  .grph-div {
    background-color: #e3ebf3;
    padding: 2rem;
  }

  .btn-div {
    display: flex;
    gap: 1rem;
  }
  .btn-div button {
    width: 6rem;
    background-color: #fff;
    border: 1px #000;
    height: 34px;
    padding: 10px;
    opacity: 0.4;
    font-size: 12px;
    color: #000;
    border-radius: 2px solid red;
  }
  .sub-grph-div p {
    width: 798px;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    display: inline-block;
    opacity: 0.5;
    color: #001e6c;
  }
  .date-btns {
    border: 1px solid #000;
    width: 100%;
    opacity: 0.5;
  }
  @media only screen and (max-width: 767px) {
    .sub-grph-div p {
      width: auto;
    }
    .btn-div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
      margin-bottom: 10px;
    }
  }

  .rightContainer {
    background: #f5f5f5;
    border-radius: 15px;
    padding: 0rem;
  }
  .diagnostic-card {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: visible;
    position: relative;
    width: fit-content;
    padding: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

    @media (min-width: 1100px) {
      min-width: 460px;
    }
    @media (min-width: 800px) and (max-width: 1000px) {
      width: min-content;
    }
    @media (max-width: 480px) {
      width: min-content;
    }

    button {
      background: #252b61;
      border-radius: 25px;
      border: none;
      color: #fff;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
    }
  }

  .card-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #a5d6a7;
    color: #141414;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
  }

  .card-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 1400px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .card-logo {
    cursor: pointer;
  }

  .card-logo img {
    object-fit: contain;
    margin-right: 15px;
    width: 12rem;
  }

  .card-details {
    width: 100%;
    h3 {
      font-size: 18px;
      margin: 0 0 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
      padding: 0px;
      font-family: Outfit, sans-serif;
      font-weight: 500;
    }
  }

  .card-prices {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }

  .current-price {
    color: #141414;
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
  }

  .original-price {
    text-decoration: line-through;
    color: #999;
    font-size: 14px;
    margin-right: 10px;
  }

  .discount-text {
    color: #2c7420;
    font-size: 14px;
  }

  .card-info {
    margin-top: 10px;
  }

  .info-item {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #252b61;
    margin: 5px 0;
  }

  .info-item svg {
    margin-right: 5px;
    color: #141414;
  }

  .add-button {
    background: #141414;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    width: 100%;
  }

  .add-button:hover {
    background: #1b5e20;
  }

  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -1rem;
    .rectangle {
      background: #89db7b;
      padding: 7px;
      border-radius: 10px 45px 45px 0;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }

  .checkup-card {
    /* border: 1px solid #e0e0e0; */
    border-radius: 8px;
    padding: 16px;
    background-color: #fff;
    margin: auto;
    max-width: inherit;
  }

  .checkup-title {
    font-size: 32px;
    font-weight: 500;
    color: #1e1e1e;
    margin-bottom: 8px;
  }

  .checkup-description {
    font-size: 14px;
    color: #757474;
    margin-bottom: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
  }

  .checkup-button {
    background-color: #89db7b;
    color: #252b61;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    cursor: pointer;
    margin: 10px 0;
  }

  .checkup-button:hover {
    background-color: #58b95b;
  }

  .checkup-details p {
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #888;
    margin: 8px 0;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    & > div {
      display: flex;
      flex-direction: row;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }
    strong {
      font-weight: 500;
      color: #1e1e1e;
    }
  }
  .checkup-details .prep {
    flex-direction: column;
  }
  .discount {
    color: #ff5722;
    font-weight: 500;
  }

  .vendor-list {
    margin-top: 16px;
  }

  .vendor {
    border: 1px solid #f0f0f0;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
  }

  .checkup-video {
    video {
      width: 100%;
      max-width: inherit;
    }
  }

  .price-container {
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: "Outfit", sans-serif;
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .price-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .original-price {
    font-size: 14px;
    text-decoration: line-through;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: #6f6b6b;
  }

  .discounted-price {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    color: #141414;
  }

  .discount-badge {
    background-color: #d8f3dc;
    color: #141414;
    border-radius: 12px;
    padding: 2px 8px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #141414;
  }

  .divider {
    width: 1px;
    height: 20px;
    background-color: #ececec;
  }

  .report-time {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    color: #141414;
  }

  .bottomWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 400;
    gap: 1rem;
    .availableIn90 {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      background: #fff5d8;
      padding: 10px;
      border-radius: 25px;
      span {
        font-weight: 500;
        text-wrap: nowrap;
      }
      img {
        height: 100%;
      }
    }
  }

  .pin-code-checker {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
  }
  button[disabled] {
    opacity: 0.5;
  }

  .similarItems {
    p {
      padding: 1rem 0;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0;
    }

    .healthCards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      place-content: center;
      place-items: center;
      gap: 2rem;
      padding: 0 1rem;
      @media screen and (max-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
      }
      .textContent {
        flex-wrap: wrap;
      }
      .imgWrapper {
        min-height: 10rem;
      }
    }
  }
  .graph-main-div {
    gap: 2rem;
  }
  .left-slot-filter {
    width: 30%;
  }
  .left-slot-filter-card {
    padding: 27px;
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .right-slot-filter {
  }
  .filter-checkbox {
    display: flex;
    flex-direction: column;
  }
  .slot-carousel-container,
  .graph-container {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fff;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }
  .arrow-btn {
    background: none;
    border: none;
    font-size: 24px;
    color: #888;
    cursor: pointer;
    padding: 10px;
  }
  .carousel {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    padding: 10px;
    background: white;
    text-align: center;
    cursor: pointer;
  }
  .vertical-line {
    width: 1px;
    height: 6rem;
    background-color: black;
  }
  .graph-container {
    padding: 1rem;
  }
  .mainWrapperContainer {
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
  .time-slots-container {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    @media screen and (max-width: 1100px) {
      /* width: inherit; */
    }
    p {
      margin-bottom: 5px;
    }
    .slot-row {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      margin-bottom: 1rem;
      svg {
        cursor: pointer;
      }
      .otherInfo {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
      }
      @media screen and (max-width: 1100px) {
        flex-wrap: wrap;
        .otherInfo {
          flex-direction: column;
          align-items: flex-start;
        }
        & > div,
        .otherInfo > div {
          width: 100%;
          display: flex;
          flex-direction: row;
          gap: 1rem;
          justify-content: center;
        }
        & input {
          width: fit-content;
        }
      }
    }
  }
`,Mi=[{time:"07:00 AM",price:1200,labs:["Apollo Labs","Agilus Labs"]},{time:"08:00 AM",price:1100,labs:["Apollo Labs"]},{time:"09:00 AM",price:1200,labs:["Apollo Labs","Agilus Labs","Appolo Labs"]},{time:"10:00 AM",price:1200,labs:[]},{time:"11:00 AM",price:1200,labs:["Agilus Labs"]},{time:"12:00 PM",price:1200,labs:["Apollo Labs"]},{time:"01:00 PM",price:1200,labs:["Agilus Labs","+3 More Labs"]}],Li=({dataPoint:e})=>t.jsxs("div",{style:{marginTop:"2rem",backgroundColor:"#fff",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[t.jsx("p",{children:`${e.time}`}),t.jsx("p",{children:`Price: ₹${e.price}`}),e.labs.length>0&&t.jsx("ul",{style:{padding:0,listStyle:"none"},children:e.labs.map((i,r)=>t.jsx("li",{children:i},r))})]}),$i=({active:e,payload:i})=>e&&i&&i.length?t.jsxs("div",{className:"tooltip-container",style:{marginTop:"2rem",backgroundColor:"#fff",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[t.jsx("p",{children:`${i[0].payload.time}`}),t.jsx("p",{children:"Price: ₹1200"})]}):null,Ai=()=>{const[e,i]=n.useState(null),r=o=>{i(o)};return t.jsxs("div",{style:{width:"100%",padding:"20px",position:"relative"},children:[t.jsx(An,{width:"100%",height:300,children:t.jsxs(Fn,{data:Mi,margin:{top:20,right:30,left:0,bottom:20},children:[t.jsx(Wn,{strokeDasharray:"3 3"}),t.jsx(Hn,{orientation:"top",dataKey:"time",tickLine:!1,axisLine:!1,tick:{fill:"#666",fontSize:12}}),t.jsx(Kn,{content:t.jsx($i,{content:t.jsx(Li,{dataPoint:e})})}),t.jsx(In,{type:"monotone",dataKey:"price",stroke:"#4A90E2",dot:{stroke:"#4A90E2",strokeWidth:2,fill:"#fff",r:6,onClick:r}})]})}),e&&t.jsxs("div",{style:{position:"absolute",top:"60%",left:"30%",width:"40%",backgroundColor:"#f5f5f5",boxShadow:"0px 4px 10px rgba(0,0,0,0.1)",borderRadius:"10px",padding:"15px"},children:[t.jsx("h4",{style:{margin:"0 0 10px"},children:"Labs"}),t.jsx("ul",{style:{padding:0,listStyle:"none"},children:e.labs.map((o,s)=>t.jsxs("li",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",borderBottom:"1px solid #ccc",paddingBottom:"5px"},children:[t.jsx("span",{children:o}),t.jsxs("span",{children:["₹",e.price]})]},s))})]})]})},{Text:Vi}=Ue,_t=[{name:"Morning"},{name:"Afternoon"},{name:"Evening"}],Rt=[{name:"Male Radiologist"},{name:"Female Radiologist"}],Hi=[{date:"Sat, Nov 1",price:"₹100"},{date:"Sat, Nov 2",price:"₹200"},{date:"Sat, Nov 3",price:"₹300"},{date:"Sat, Nov 4",price:"₹400"},{date:"Sat, Nov 30",price:"₹500"},{date:"Sat, Nov 5",price:"₹600"}],Ki=({discount:e})=>t.jsxs("div",{className:"bannerWrapper",children:[t.jsxs("div",{className:"rectangle",children:[e,"% Save"]}),t.jsx("div",{className:"triangle"})]}),Zi=e=>{var q,ge,Fe,Re,Me,xe;const i=bn(),r=(q=e==null?void 0:e.location)==null?void 0:q.state,[o,s]=n.useState([0]),d=yn(),{scanDetails:l}=rt(a=>a.ctmri),[x,h]=n.useState(!1),[D,u]=n.useState(!1),[k,g]=n.useState(!1),[L,B]=n.useState(""),[_,I]=n.useState(""),[J,R]=n.useState(!1),[ie,A]=n.useState(""),[le,ae]=n.useState(!1),{user:$,userCity:P,subDomainDetails:de}=rt(a=>a.auth);console.log("subDomainDetails",e);const{healthPackagesList:F,allTestsList:U,allPackagesList:S}=rt(a=>a.labtest),[oe,X]=n.useState(null);n.useEffect(()=>{d(wn())},[]),n.useEffect(()=>{var p,m;let a=((p=l==null?void 0:l.test)==null?void 0:p.category_ids)||((m=l==null?void 0:l.package)==null?void 0:m.category_ids);console.log("category_ids: ",a),a&&a.length>0&&s(a)},[l]),n.useEffect(()=>{console.log("categoryId : ",o)},[o]),n.useEffect(()=>{var p;let a=(p=e==null?void 0:e.location)==null?void 0:p.pathname;a=a.split("/")[2],a&&X(a)},[e]),n.useEffect(()=>{var p;const a=(p=F==null?void 0:F.packages)==null?void 0:p.find(m=>(m==null?void 0:m.service_code)===oe);console.log("foundPackage : ",a),A(a)},[oe,F]),(Fe=(ge=e==null?void 0:e.location)==null?void 0:ge.pathname)!=null&&Fe.includes("labPackageDetils");const{slots:re,timeSlotsObj:G,slotTabList:T,doctorDetails:z,hospitalDetails:v,BookingArray:V,selectedProfileIds:he,payloadFromMyPackage:Z}=rt(a=>a.bookingReview),{labTestServiceCode:N,labTestPackageServiceCode:C,scanId:ee}=(Re=e.match)==null?void 0:Re.params;console.log("scanDetails",l,C),console.log("BookingArray scan detaol",V),console.log("hospitalDetails scan detaol",v);const[ce,ve]=n.useState("center"),[me,te]=n.useState("discount");n.useEffect(()=>{(async()=>{R(!0);try{C?await je():await O()}catch(p){console.error("Error fetching scan details:",p)}finally{R(!1)}})()},[C,N,ee]),n.useEffect(()=>{C?je():O()},[P==null?void 0:P.name]);const O=async()=>{R(!0),await d(Lt({service_code:N||ee,city:(P==null?void 0:P.id)??""})),R(!1)},je=async()=>{R(!0);try{await d(wt({service_code:C,city:(P==null?void 0:P.id)??"",collection_type:ce,sort:me}))}catch(a){console.error("Error fetching package details:",a)}finally{R(!1)}},[Ce,Be]=n.useState(!1),[Ge,qe]=n.useState(!1),be=()=>{i.goBack()},$e=async(a,p,m=!1)=>{var M;p==null||p.id;const j=window.location.pathname;if(console.log("pathName : ",j),console.log("obj : ",p),!($!=null&&$.id))d(Tn(!0));else if(j.includes("/radiology/scan-details/")){const se=l==null?void 0:l.test,Pe={...se,vendors:[],tests:[]};console.log("ctmri scanId : ",ee),console.log("ctmri testD : ",se),console.log("ctmri obj : ",p),await d($t({doctorDetails:{...Pe,labtestType:""},hospitalDetails:p,categoryType:"ctmri",slot1:{},slot2:{}})),i.push("/ctmri/bookingReview")}else if(j.includes("/labTestDetils/"))console.log("found"),await d(On({selectedTest:{...l==null?void 0:l.test},selectedPackage:{...l==null?void 0:l.package}})),i.push(`/labtest/packages/${p==null?void 0:p.id}`);else if(j.includes("/labPackageDetils/")&&l!=null&&l.package&&(M=l==null?void 0:l.package)!=null&&M.service_name){let se=[],Pe={...l==null?void 0:l.package,labtestType:"labpackage"};se.push(Pe),await d($t({doctorDetails:{...{tests:se}},hospitalDetails:p,categoryType:"labtest",expressBook:m,slot1:{},slot2:{}})),i.push("/labtest/bookingReview")}},pe=(l==null?void 0:l.tests)||(l==null?void 0:l.package)||(l==null?void 0:l.test);console.log("scandata : ",pe);const De=(Me=e==null?void 0:e.match)==null?void 0:Me.params,H=window.location.pathname===`/labPackageDetils/${De.scanId}`,Y=window.location.pathname===`/radiology/scan-details/${De.scanId}`;pe==null||pe.vendors,console.log(Y,"isCtmri010"),console.log(H,"isLabTestDetils");const ke=window.location.href;((a,p)=>{const m=[];for(let j=0;j<a.length;j+=p)m.push(a.slice(j,j+p));return m})((pe==null?void 0:pe.tests)||[],8),console.log(pe,"scanData");const[fe,ft]=n.useState([]),[Se,Je]=n.useState([]),Xe=async()=>{if(console.log("labTestServiceCode : ",N),!N)return;const a=await d(zn(N));console.log("res : ",a),a!=null&&a.payload&&ft(a==null?void 0:a.payload)},ut=async()=>{if(console.log("labTestPackageServiceCode : ",C),!C)return;const a=await d(Dn(C));console.log("res : ",a),a!=null&&a.payload&&Je(a==null?void 0:a.payload)},gt=async()=>{console.log("getAllSimilarItems"),C&&ut(),N&&Xe()},[Ye,Qe]=n.useState([]),xt=async a=>{var m,j;const p=await d(jn(a));console.log("getAllPackageVendors : ",p),Qe((j=(m=p==null?void 0:p.payload)==null?void 0:m.data)==null?void 0:j.data)},Ve=async a=>{};n.useEffect(()=>{C?xt(C):(N||ee)&&Ve()},[N,C,ee]),n.useEffect(()=>{gt()},[N,C,d,o]);const Ze=async a=>{console.log("value : ",a),te(a),C?await d(wt({service_code:C,city:(P==null?void 0:P.id)??"",collection_type:ce,sort:a})):(N||ee)&&await d(Lt({service_code:N||ee,city:(P==null?void 0:P.id)??"",sort:a}))},ht=async a=>{const p=a?"center":"home";ve(p),await d(wt({service_code:C,city:(P==null?void 0:P.id)??"",collection_type:p,sort:me})),console.log("Selected toggle value:",p)},mt=({labName:a,price:p,originalPrice:m,discount:j,address:M,nextSlot:se,logo:Pe,handleAddToCart:Q,item:b})=>{var it,at,ot,y,f,w;const[Te,Ae]=n.useState(""),[Oe,We]=n.useState(!1),[nt,ye]=n.useState(!0);let c;C?c=Ye.find(E=>{var ne;return(b==null?void 0:b.id)===((ne=E==null?void 0:E.vendor)==null?void 0:ne.id)}):(N||ee)&&(c=b),console.log("matchedAvailableVendor : ",c);const vt=E=>{const ne=E.target.value;ne.length<=6&&Ae(ne)},bt=async()=>{console.log("Entered Pin Code:",Te);const E=ee||Y||C||N;console.log("handleCheck id : ",E);const ne=await Ee(Te,E);console.log("res : ",ne),We(ne),ye(!1)};return t.jsxs("div",{className:"diagnostic-card",children:[t.jsx(Ki,{discount:j}),t.jsxs("div",{className:"card-content",children:[t.jsx("div",{className:"card-logo",children:t.jsx("img",{src:b!=null&&b.image?b==null?void 0:b.image:Pe,alt:"Lab Logo"})}),t.jsxs("div",{className:"card-details",children:[t.jsx("h3",{children:a}),t.jsxs("div",{className:"card-prices",children:[t.jsxs("span",{className:"current-price",children:["₹",(it=b==null?void 0:b.price)!=null&&it.discounted_price?(at=b==null?void 0:b.price)==null?void 0:at.discounted_price:p]}),t.jsxs("span",{className:"original-price",children:["₹",(ot=b==null?void 0:b.price)!=null&&ot.actual_cost?(y=b==null?void 0:b.price)==null?void 0:y.actual_cost:m]}),t.jsxs("span",{className:"discount-text",children:[(f=b==null?void 0:b.price)!=null&&f.discount_percentage?(w=b==null?void 0:b.price)==null?void 0:w.discount_percentage:j,"% Off"]})]}),t.jsx("div",{className:"card-info",children:t.jsxs("div",{className:"info-item",children:[t.jsx(Nn,{})," ",M]})}),C&&t.jsxs("div",{className:"pin-code-checker",children:[t.jsx(_n,{type:"number",placeholder:"Enter Pin Code",value:Te,onChange:vt,style:{width:"200px",marginRight:"10px"}}),t.jsx(Rn,{type:"primary",onClick:bt,children:"Check"})]}),t.jsxs("div",{className:"bottomWrapper",children:[b.available_in_90==="true"&&t.jsxs("div",{className:"availableIn90",children:[t.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733316202523.png",alt:""}),"in ",t.jsx("span",{children:"90 Minutes"})]}),t.jsxs("button",{onClick:E=>Q(E,b,Oe),children:["Add",t.jsx(Pn,{})]})]})]})]}),t.jsxs("div",{className:"time-slots-container",children:[(c==null?void 0:c.mor_start_Time)&&(c==null?void 0:c.mor_end_Time)&&t.jsxs("div",{className:"slot-row",children:[t.jsxs("div",{className:"time-section time-section1",children:[t.jsxs("span",{children:[" ",c==null?void 0:c.mor_start_Time]})," ","to"]}),t.jsx("div",{className:"time-section",children:c==null?void 0:c.mor_end_Time}),t.jsx("div",{children:"->"}),t.jsxs("div",{className:"otherInfo",children:[t.jsxs("div",{className:"price-section",children:["₹ ",c==null?void 0:c.mor_selling_price]}),t.jsxs("div",{className:"gender-section",children:[(c==null?void 0:c.mor_female_available)==="true"&&t.jsx(Ct,{size:32,title:"Female Available"}),(c==null?void 0:c.mor_male_available)==="true"&&t.jsx(kt,{size:32,title:"Male Available"})]}),t.jsx("div",{className:"bottomWrapper",children:t.jsx("button",{onClick:E=>Q(E,b,Oe),children:"BooK Now"})})]})]}),(c==null?void 0:c.aft_start_Time)&&(c==null?void 0:c.aft_end_Time)&&t.jsxs("div",{className:"slot-row",children:[t.jsxs("div",{className:"time-section time-section1",children:[t.jsx("span",{children:c==null?void 0:c.aft_start_Time})," "," ","to"]}),t.jsx("div",{className:"time-section",children:t.jsx("span",{children:c==null?void 0:c.aft_end_Time})}),t.jsx("div",{children:"->"}),t.jsxs("div",{className:"otherInfo",children:[t.jsxs("div",{className:"price-section",children:["₹"," ",t.jsx("span",{children:c==null?void 0:c.aft_selling_price})]}),t.jsxs("div",{className:"gender-section",children:[(c==null?void 0:c.aft_female_available)==="true"&&t.jsx(Ct,{size:32,title:"Female Available"}),(c==null?void 0:c.aft_male_available)==="true"&&t.jsx(kt,{size:32,title:"Male Available"})]})]}),t.jsx("div",{className:"bottomWrapper",children:t.jsx("button",{onClick:E=>Q(E,b,Oe),children:"BooK Now"})})]}),(c==null?void 0:c.eve_start_Time)&&(c==null?void 0:c.eve_end_Time)&&t.jsxs("div",{className:"slot-row",children:[t.jsxs("div",{className:"time-section time-section1",children:[t.jsxs("span",{children:[" ",c==null?void 0:c.eve_start_Time]}),"to"]}),t.jsx("div",{className:"time-section",children:c==null?void 0:c.eve_end_Time}),t.jsx("div",{children:"->"}),t.jsxs("div",{className:"otherInfo",children:[t.jsxs("div",{className:"price-section",children:["₹"," "," ",c==null?void 0:c.eve_selling_price]}),t.jsxs("div",{className:"gender-section",children:[(c==null?void 0:c.eve_female_available)==="true"&&t.jsx(Ct,{size:32,title:"Female Available"}),(c==null?void 0:c.eve_male_available)==="true"&&t.jsx(kt,{size:32,title:"Male Available"})]})]}),t.jsx("div",{className:"bottomWrapper",children:t.jsx("button",{onClick:E=>Q(E,b,Oe),children:"BooK Now"})})]})]})]})},et=a=>{a&&i.push(`/labPackageDetils/${a}`)},tt=({scanDetails:a})=>{const{service_name:p="",description:m="",preperation:j="",price:M={},fasting:se="",type:Pe="",tests:Q,vendors:b=[]}=a||{};console.log("scanDetails : ",a);const[Te,Ae]=n.useState(!1),Oe=()=>{Ae(!0)},We=()=>{Ae(!1)};return console.log(r,"sectionName"),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"checkup-card",children:[t.jsx("h1",{className:"checkup-title",children:p}),t.jsx("p",{dangerouslySetInnerHTML:{__html:m}}),(Q==null?void 0:Q.length)>0&&t.jsxs("button",{className:"checkup-button",onClick:Oe,children:["+ ",(Q==null?void 0:Q.length)||1," Tests"]}),t.jsxs("div",{className:"checkup-details",children:[t.jsx("div",{className:"price-container",children:t.jsxs("div",{className:"price-info",children:[t.jsxs("span",{className:"original-price",children:["₹",M==null?void 0:M.actual_cost]}),t.jsxs("span",{className:"discounted-price",children:["₹",M==null?void 0:M.discounted_price]}),t.jsxs("span",{className:"discount-badge",children:[M==null?void 0:M.discount_percentage,"% Off"]}),t.jsx("div",{className:"divider"})]})}),t.jsxs("p",{className:"prep",children:[t.jsx("strong",{children:"Preparation:"}),t.jsx("span",{dangerouslySetInnerHTML:{__html:j}})]}),r==="ctmri"?null:t.jsxs(t.Fragment,{children:[t.jsxs("p",{children:[t.jsx("strong",{children:"Fasting Required:"})," ",se?"Yes":"No"]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Visit Type:"})," ",En(Pe)]})]})]}),r==="ctmri"?t.jsx(t.Fragment,{}):t.jsx("div",{className:"checkup-video",children:t.jsx("video",{src:se?"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/fasting.mp4":"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/nonfasting.mp4",autoPlay:!0,loop:!0,muted:!0,controls:!1})})]}),t.jsx(Vn,{title:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[t.jsx("img",{src:Ln,alt:"Test Tubes",style:{width:"24px",height:"24px"}}),t.jsxs("span",{children:["Packages Includes ",Q==null?void 0:Q.length," Tests"]})]}),placement:"right",onClose:We,visible:Te,width:400,children:t.jsx("div",{className:"drawer",children:t.jsx("ul",{style:{paddingLeft:"20px",lineHeight:"1.8"},children:Q==null?void 0:Q.map((nt,ye)=>t.jsx("li",{style:{listStyleType:"disc"},children:nt.service_name},ye))})})})]})},Ee=async(a,p)=>{var M;let m={};m.vendorId=p,m.data={},m.data.zip=a,C?m.data.package_code=C:m.data.test_code=N;const j=await d(Mn(m));return console.log("response Expresss bOOk",j),(M=j==null?void 0:j.payload)!=null&&M.success?(At.success("The Express Book is available for the given pincode!"),!0):(At.error("Sorry, Express Book is not available for the given pincode!"),!1)};return t.jsx(zi,{children:t.jsxs("div",{children:[t.jsx($n,{show:k,url:ke,title:"Share on",handleClose:()=>{g(!1)},onCopyClick:()=>{navigator.clipboard.writeText(ke)}}),J&&t.jsx(Cn,{}),t.jsxs(kn,{fluid:!0,className:"scanDetailsContainer",children:[t.jsxs("p",{className:" text-xl d-flex align-items-center cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 ",onClick:()=>be(),children:[t.jsx("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z",fill:"#444444"})})," "," ","  Back"]}),t.jsxs(lt,{className:"mainWrapperContainer",children:[t.jsx(st,{children:t.jsx(tt,{scanDetails:(l==null?void 0:l.tests)||(l==null?void 0:l.package)||(l==null?void 0:l.test)})}),t.jsxs(st,{className:"rightContainer",children:[t.jsx("div",{className:"headWrapper",children:t.jsxs("div",{className:"btn-filter-module-div",children:[C&&t.jsxs("div",{className:"toggle-filter",children:[t.jsx("span",{children:"Home Collection"}),t.jsx(Un,{defaultChecked:ce==="center",onChange:ht}),t.jsx("span",{children:"Center"})]}),t.jsx("div",{className:"selector-filter-sub-module-div",children:t.jsx(Sn,{showSearch:!0,placeholder:"Sort By",filterOption:(a,p)=>((p==null?void 0:p.label)??"").toLowerCase().includes(a.toLowerCase()),defaultValue:"discount",onChange:Ze,style:{borderRadius:"10px",width:"200px"},options:[{value:"discount",label:"Discount"},{value:"desc",label:"Price: High to Low"},{value:"asc",label:"Price: Low to High"}]})})]})}),t.jsx(st,{className:"availableCentersRow",children:(xe=pe==null?void 0:pe.vendors)==null?void 0:xe.map((a,p)=>{var m,j,M;return console.log("item : ",a),t.jsx(mt,{labName:He(a==null?void 0:a.name,50),price:(m=a==null?void 0:a.price)==null?void 0:m.discounted_price,originalPrice:(j=a==null?void 0:a.price)==null?void 0:j.actual_cost,discount:(M=a==null?void 0:a.price)==null?void 0:M.discount_percentage,address:He(a==null?void 0:a.address,20),nextSlot:"Today, 11:00 AM",logo:Di,handleAddToCart:$e,item:a})})})]})]}),t.jsx(lt,{children:t.jsx(st,{children:r==="ctmri"?t.jsx(t.Fragment,{}):t.jsxs("div",{className:"similarItems",children:[C&&t.jsx(t.Fragment,{children:(Se==null?void 0:Se.length)>0?t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Similar Packages"}),t.jsx("div",{className:"healthCards",children:(Se==null?void 0:Se.length)>0&&(Se==null?void 0:Se.slice(0,8).map((a,p)=>{var m,j,M,se;return t.jsx(Ht,{title:He(a==null?void 0:a.service_name,30),subtitle:He(a==null?void 0:a.description,30),featureButtonText:"Package",reportTime:"N/A",testCount:(((m=a==null?void 0:a.tests)==null?void 0:m.length)||"N/A").toString(),originalPrice:(((j=a==null?void 0:a.price)==null?void 0:j.actual_cost)||"N/A").toString(),discountedPrice:(((M=a==null?void 0:a.price)==null?void 0:M.discounted_price)||"N/A").toString(),discount:(((se=a==null?void 0:a.price)==null?void 0:se.discount_percentage)||0).toString(),addToCart:()=>{et(a==null?void 0:a.service_code)}},(a==null?void 0:a.service_code)||p)}))})]}):t.jsx("p",{children:"No Similar Packages Found"})}),N&&t.jsx(t.Fragment,{children:(fe==null?void 0:fe.length)>0?t.jsxs(t.Fragment,{children:[t.jsx("p",{children:"Similar Tests"}),t.jsx("div",{className:"healthCards",children:(fe==null?void 0:fe.length)>0&&(fe==null?void 0:fe.slice(0,8).map((a,p)=>{var m,j,M,se;return t.jsx(Ht,{title:He(a==null?void 0:a.service_name,30),subtitle:He(a==null?void 0:a.description,30),featureButtonText:"Package",reportTime:"N/A",testCount:(((m=a==null?void 0:a.tests)==null?void 0:m.length)||0).toString(),originalPrice:(((j=a==null?void 0:a.price)==null?void 0:j.actual_cost)||0).toString(),discountedPrice:(((M=a==null?void 0:a.price)==null?void 0:M.discounted_price)||0).toString(),discount:(((se=a==null?void 0:a.price)==null?void 0:se.discount_percentage)||0).toString(),addToCart:()=>{et(a==null?void 0:a.service_code)}},(a==null?void 0:a.service_code)||p)}))})]}):t.jsx("p",{children:"No Similar Tests Found"})})]})})}),t.jsx(lt,{className:"marginclass"}),t.jsx(lt,{className:"searchRow mt-6"}),le&&t.jsxs("div",{className:"timeslot-graph-div",children:[t.jsx("p",{children:"Time Based Price"}),t.jsxs("div",{className:"d-flex graph-main-div",children:[t.jsx("div",{className:"left-slot-filter",children:t.jsxs("div",{className:"left-slot-filter-card",children:[t.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[t.jsx("p",{children:"Filters"}),t.jsx("p",{children:"CLEAR ALL"})]}),t.jsx("div",{className:"filter-checkbox",children:_t==null?void 0:_t.map(a=>t.jsxs("div",{children:[t.jsx("input",{title:"Checkbox",type:"checkbox",className:"me-3"}),a==null?void 0:a.name]}))}),t.jsx("div",{className:"d-flex justify-content-between align-items-center mt-3",children:t.jsx("p",{children:"Radiologist"})}),t.jsx("div",{className:"filter-checkbox ",children:Rt==null?void 0:Rt.map(a=>t.jsxs("div",{children:[t.jsx("input",{title:"Checkbox",type:"checkbox",className:"me-3"}),a==null?void 0:a.name]}))})]})}),t.jsxs("div",{className:"right-slot-filter",children:[t.jsxs("div",{className:"slot-carousel-container",children:[t.jsx("button",{className:"arrow-btn left",children:"<"}),t.jsx("div",{className:"vertical-line"}),Hi.map((a,p)=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"carousel",children:t.jsxs("div",{className:"carousel-item",children:[t.jsx("span",{className:"item-date",children:a.date}),t.jsx("span",{className:"item-price",children:a.price})]},p)}),t.jsx("div",{className:"vertical-line"})]})),t.jsx("button",{className:"arrow-btn right",children:">"})]}),t.jsx("div",{className:"graph-container",children:t.jsx(Ai,{})})]})]})]})]})]})})};export{Zi as default};
