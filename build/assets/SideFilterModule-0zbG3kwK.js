import{r as t,dX as un,ab as pe,bE as ve,ah as ke,ai as fe,ck as je,ac as te,bL as Ce,bF as hn,ag as Nn,dY as wn,b$ as Mn,bZ as $n,bY as ln,af as Rn,aX as vn,j as n,dZ as En,d_ as fn,d as Ke,a as Fn,d$ as Ae,aB as He,bk as sn}from"./index-BHf3qlKB.js";import{A as On}from"./index-D3gR5QY_.js";import{S as cn}from"./index-CE3dYLmv.js";var Me=t.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});function Ve(a,o,r){return(a-o)/(r-o)}function We(a,o,r,s){var l=Ve(o,r,s),d={};switch(a){case"rtl":d.right="".concat(l*100,"%"),d.transform="translateX(50%)";break;case"btt":d.bottom="".concat(l*100,"%"),d.transform="translateY(50%)";break;case"ttb":d.top="".concat(l*100,"%"),d.transform="translateY(-50%)";break;default:d.left="".concat(l*100,"%"),d.transform="translateX(-50%)";break}return d}function Te(a,o){return Array.isArray(a)?a[o]:a}var Pn=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],Tn=t.forwardRef(function(a,o){var r,s,l=a.prefixCls,d=a.value,h=a.valueIndex,g=a.onStartMove,C=a.style,k=a.render,j=a.dragging,m=a.onOffsetChange,b=un(a,Pn),u=t.useContext(Me),i=u.min,f=u.max,v=u.direction,x=u.disabled,c=u.range,y=u.tabIndex,O=u.ariaLabelForHandle,R=u.ariaLabelledByForHandle,T=u.ariaValueTextFormatterForHandle,w="".concat(l,"-handle"),M=function(V){x||g(V,h)},E=function(V){if(!x){var z=null;switch(V.which||V.keyCode){case je.LEFT:z=v==="ltr"||v==="btt"?-1:1;break;case je.RIGHT:z=v==="ltr"||v==="btt"?1:-1;break;case je.UP:z=v!=="ttb"?1:-1;break;case je.DOWN:z=v!=="ttb"?-1:1;break;case je.HOME:z="min";break;case je.END:z="max";break;case je.PAGE_UP:z=2;break;case je.PAGE_DOWN:z=-2;break}z!==null&&(V.preventDefault(),m(z,h))}},S=We(v,d,i,f),_=t.createElement("div",pe({ref:o,className:ke(w,(r={},fe(r,"".concat(w,"-").concat(h+1),c),fe(r,"".concat(w,"-dragging"),j),r)),style:ve(ve({},S),C),onMouseDown:M,onTouchStart:M,onKeyDown:E,tabIndex:x?null:Te(y,h),role:"slider","aria-valuemin":i,"aria-valuemax":f,"aria-valuenow":d,"aria-disabled":x,"aria-label":Te(O,h),"aria-labelledby":Te(R,h),"aria-valuetext":(s=Te(T,h))===null||s===void 0?void 0:s(d)},b));return k&&(_=k(_,{index:h,prefixCls:l,value:d,dragging:j})),_}),_n=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],Dn=t.forwardRef(function(a,o){var r=a.prefixCls,s=a.style,l=a.onStartMove,d=a.onOffsetChange,h=a.values,g=a.handleRender,C=a.draggingIndex,k=un(a,_n),j=t.useRef({});return t.useImperativeHandle(o,function(){return{focus:function(b){var u;(u=j.current[b])===null||u===void 0||u.focus()}}}),t.createElement(t.Fragment,null,h.map(function(m,b){return t.createElement(Tn,pe({ref:function(i){i?j.current[b]=i:delete j.current[b]},dragging:C===b,prefixCls:r,style:Te(s,b),key:b,value:m,valueIndex:b,onStartMove:l,onOffsetChange:d,render:g},k))}))});function on(a){var o="touches"in a?a.touches[0]:a;return{pageX:o.pageX,pageY:o.pageY}}function zn(a,o,r,s,l,d,h,g,C){var k=t.useState(null),j=te(k,2),m=j[0],b=j[1],u=t.useState(-1),i=te(u,2),f=i[0],v=i[1],x=t.useState(r),c=te(x,2),y=c[0],O=c[1],R=t.useState(r),T=te(R,2),w=T[0],M=T[1],E=t.useRef(null),S=t.useRef(null);t.useEffect(function(){f===-1&&O(r)},[r,f]),t.useEffect(function(){return function(){document.removeEventListener("mousemove",E.current),document.removeEventListener("mouseup",S.current),document.removeEventListener("touchmove",E.current),document.removeEventListener("touchend",S.current)}},[]);var _=function(P,L){y.some(function(U,Z){return U!==P[Z]})&&(L!==void 0&&b(L),O(P),h(P))},F=function(P,L){if(P===-1){var U=w[0],Z=w[w.length-1],ge=s-U,re=l-Z,I=L*(l-s);I=Math.max(I,ge),I=Math.min(I,re);var q=d(U+I);I=q-U;var J=w.map(function(se){return se+I});_(J)}else{var Q=(l-s)*L,W=Ce(y);W[P]=w[P];var xe=C(W,Q,P,"dist");_(xe.values,xe.value)}},V=t.useRef(F);V.current=F;var z=function(P,L){P.stopPropagation();var U=r[L];v(L),b(U),M(r);var Z=on(P),ge=Z.pageX,re=Z.pageY,I=function(Q){Q.preventDefault();var W=on(Q),xe=W.pageX,se=W.pageY,Se=xe-ge,ce=se-re,ee=a.current.getBoundingClientRect(),ne=ee.width,le=ee.height,A;switch(o){case"btt":A=-ce/le;break;case"ttb":A=ce/le;break;case"rtl":A=-Se/ne;break;default:A=Se/ne}V.current(L,A)},q=function J(Q){Q.preventDefault(),document.removeEventListener("mouseup",J),document.removeEventListener("mousemove",I),document.removeEventListener("touchend",J),document.removeEventListener("touchmove",I),E.current=null,S.current=null,v(-1),g()};document.addEventListener("mouseup",q),document.addEventListener("mousemove",I),document.addEventListener("touchend",q),document.addEventListener("touchmove",I),E.current=I,S.current=q},D=t.useMemo(function(){var B=Ce(r).sort(function(L,U){return L-U}),P=Ce(y).sort(function(L,U){return L-U});return B.every(function(L,U){return L===P[U]})?y:r},[r,y]);return[f,m,D,z]}function Bn(a){var o=a.prefixCls,r=a.style,s=a.start,l=a.end,d=a.index,h=a.onStartMove,g=t.useContext(Me),C=g.direction,k=g.min,j=g.max,m=g.disabled,b=g.range,u="".concat(o,"-track"),i=Ve(s,k,j),f=Ve(l,k,j),v=function(y){!m&&h&&h(y,-1)},x={};switch(C){case"rtl":x.right="".concat(i*100,"%"),x.width="".concat(f*100-i*100,"%");break;case"btt":x.bottom="".concat(i*100,"%"),x.height="".concat(f*100-i*100,"%");break;case"ttb":x.top="".concat(i*100,"%"),x.height="".concat(f*100-i*100,"%");break;default:x.left="".concat(i*100,"%"),x.width="".concat(f*100-i*100,"%")}return t.createElement("div",{className:ke(u,b&&"".concat(u,"-").concat(d+1)),style:ve(ve({},x),r),onMouseDown:v,onTouchStart:v})}function Ln(a){var o=a.prefixCls,r=a.style,s=a.values,l=a.startPoint,d=a.onStartMove,h=t.useContext(Me),g=h.included,C=h.range,k=h.min,j=t.useMemo(function(){if(!C){if(s.length===0)return[];var m=l??k,b=s[0];return[{start:Math.min(m,b),end:Math.max(m,b)}]}for(var u=[],i=0;i<s.length-1;i+=1)u.push({start:s[i],end:s[i+1]});return u},[s,C,l,k]);return g?j.map(function(m,b){var u=m.start,i=m.end;return t.createElement(Bn,{index:b,prefixCls:o,style:Te(r,b),start:u,end:i,key:b,onStartMove:d})}):null}function An(a){var o=a.prefixCls,r=a.style,s=a.children,l=a.value,d=a.onClick,h=t.useContext(Me),g=h.min,C=h.max,k=h.direction,j=h.includedStart,m=h.includedEnd,b=h.included,u="".concat(o,"-text"),i=We(k,l,g,C);return t.createElement("span",{className:ke(u,fe({},"".concat(u,"-active"),b&&j<=l&&l<=m)),style:ve(ve({},i),r),onMouseDown:function(v){v.stopPropagation()},onClick:function(){d(l)}},s)}function Hn(a){var o=a.prefixCls,r=a.marks,s=a.onClick,l="".concat(o,"-mark");return r.length?t.createElement("div",{className:l},r.map(function(d){var h=d.value,g=d.style,C=d.label;return t.createElement(An,{key:h,prefixCls:l,style:g,value:h,onClick:s},C)})):null}function In(a){var o=a.prefixCls,r=a.value,s=a.style,l=a.activeStyle,d=t.useContext(Me),h=d.min,g=d.max,C=d.direction,k=d.included,j=d.includedStart,m=d.includedEnd,b="".concat(o,"-dot"),u=k&&j<=r&&r<=m,i=ve(ve({},We(C,r,h,g)),typeof s=="function"?s(r):s);return u&&(i=ve(ve({},i),typeof l=="function"?l(r):l)),t.createElement("span",{className:ke(b,fe({},"".concat(b,"-active"),u)),style:i})}function Un(a){var o=a.prefixCls,r=a.marks,s=a.dots,l=a.style,d=a.activeStyle,h=t.useContext(Me),g=h.min,C=h.max,k=h.step,j=t.useMemo(function(){var m=new Set;if(r.forEach(function(u){m.add(u.value)}),s&&k!==null)for(var b=g;b<=C;)m.add(b),b+=k;return Array.from(m)},[g,C,k,s,r]);return t.createElement("div",{className:"".concat(o,"-step")},j.map(function(m){return t.createElement(In,{prefixCls:o,key:m,value:m,style:l,activeStyle:d})}))}function Gn(a,o,r,s,l,d){var h=t.useCallback(function(u){var i=isFinite(u)?u:a;return i=Math.min(o,u),i=Math.max(a,i),i},[a,o]),g=t.useCallback(function(u){if(r!==null){var i=a+Math.round((h(u)-a)/r)*r,f=function(y){return(String(y).split(".")[1]||"").length},v=Math.max(f(r),f(o),f(a)),x=Number(i.toFixed(v));return a<=x&&x<=o?x:null}return null},[r,a,o,h]),C=t.useCallback(function(u){var i=h(u),f=s.map(function(c){return c.value});r!==null&&f.push(g(u)),f.push(a,o);var v=f[0],x=o-a;return f.forEach(function(c){var y=Math.abs(i-c);y<=x&&(v=c,x=y)}),v},[a,o,s,r,h,g]),k=function u(i,f,v){var x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof f=="number"){var c,y=i[v],O=y+f,R=[];s.forEach(function(S){R.push(S.value)}),R.push(a,o),R.push(g(y));var T=f>0?1:-1;x==="unit"?R.push(g(y+T*r)):R.push(g(O)),R=R.filter(function(S){return S!==null}).filter(function(S){return f<0?S<=y:S>=y}),x==="unit"&&(R=R.filter(function(S){return S!==y}));var w=x==="unit"?y:O;c=R[0];var M=Math.abs(c-w);if(R.forEach(function(S){var _=Math.abs(S-w);_<M&&(c=S,M=_)}),c===void 0)return f<0?a:o;if(x==="dist")return c;if(Math.abs(f)>1){var E=Ce(i);return E[v]=c,u(E,f-T,v,x)}return c}else{if(f==="min")return a;if(f==="max")return o}},j=function(i,f,v){var x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",c=i[v],y=k(i,f,v,x);return{value:y,changed:y!==c}},m=function(i){return d===null&&i===0||typeof d=="number"&&i<d},b=function(i,f,v){var x=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",c=i.map(C),y=c[v],O=k(c,f,v,x);if(c[v]=O,l===!1){var R=d||0;v>0&&c[v-1]!==y&&(c[v]=Math.max(c[v],c[v-1]+R)),v<c.length-1&&c[v+1]!==y&&(c[v]=Math.min(c[v],c[v+1]-R))}else if(typeof d=="number"||d===null){for(var T=v+1;T<c.length;T+=1)for(var w=!0;m(c[T]-c[T-1])&&w;){var M=j(c,1,T);c[T]=M.value,w=M.changed}for(var E=v;E>0;E-=1)for(var S=!0;m(c[E]-c[E-1])&&S;){var _=j(c,-1,E-1);c[E-1]=_.value,S=_.changed}for(var F=c.length-1;F>0;F-=1)for(var V=!0;m(c[F]-c[F-1])&&V;){var z=j(c,-1,F-1);c[F-1]=z.value,V=z.changed}for(var D=0;D<c.length-1;D+=1)for(var B=!0;m(c[D+1]-c[D])&&B;){var P=j(c,1,D+1);c[D+1]=P.value,B=P.changed}}return{value:c[v],values:c}};return[C,b]}var Xn=t.forwardRef(function(a,o){var r,s=a.prefixCls,l=s===void 0?"rc-slider":s,d=a.className,h=a.style,g=a.disabled,C=g===void 0?!1:g,k=a.autoFocus,j=a.onFocus,m=a.onBlur,b=a.min,u=b===void 0?0:b,i=a.max,f=i===void 0?100:i,v=a.step,x=v===void 0?1:v,c=a.value,y=a.defaultValue,O=a.range,R=a.count,T=a.onChange,w=a.onBeforeChange,M=a.onAfterChange,E=a.allowCross,S=E===void 0?!0:E,_=a.pushable,F=_===void 0?!1:_,V=a.draggableTrack,z=a.reverse,D=a.vertical,B=a.included,P=B===void 0?!0:B,L=a.startPoint,U=a.trackStyle,Z=a.handleStyle,ge=a.railStyle,re=a.dotStyle,I=a.activeDotStyle,q=a.marks,J=a.dots,Q=a.handleRender,W=a.tabIndex,xe=W===void 0?0:W,se=a.ariaLabelForHandle,Se=a.ariaLabelledByForHandle,ce=a.ariaValueTextFormatterForHandle,ee=t.useRef(),ne=t.useRef(),le=t.useMemo(function(){return D?z?"ttb":"btt":z?"rtl":"ltr"},[z,D]),A=t.useMemo(function(){return isFinite(u)?u:0},[u]),oe=t.useMemo(function(){return isFinite(f)?f:100},[f]),ie=t.useMemo(function(){return x!==null&&x<=0?1:x},[x]),_e=t.useMemo(function(){return F===!0?ie:F>=0?F:!1},[F,ie]),$e=t.useMemo(function(){var G=Object.keys(q||{});return G.map(function($){var p=q[$],K={value:Number($)};return p&&hn(p)==="object"&&!t.isValidElement(p)&&("label"in p||"style"in p)?(K.style=p.style,K.label=p.label):K.label=p,K}).filter(function($){var p=$.label;return p||typeof p=="number"}).sort(function($,p){return $.value-p.value})},[q]),me=Gn(A,oe,ie,$e,S,_e),N=te(me,2),Re=N[0],Ee=N[1],Ue=Nn(y,{value:c}),Be=te(Ue,2),de=Be[0],Ge=Be[1],ae=t.useMemo(function(){var G=de==null?[]:Array.isArray(de)?de:[de],$=te(G,1),p=$[0],K=p===void 0?A:p,H=de===null?[]:[K];if(O){if(H=Ce(G),R||de===void 0){var Pe=R>=0?R+1:2;for(H=H.slice(0,Pe);H.length<Pe;){var we;H.push((we=H[H.length-1])!==null&&we!==void 0?we:A)}}H.sort(function(ye,De){return ye-De})}return H.forEach(function(ye,De){H[De]=Re(ye)}),H},[de,O,A,R,Re]),Ne=t.useRef(ae);Ne.current=ae;var ue=function($){return O?$:$[0]},Fe=function($){var p=Ce($).sort(function(K,H){return K-H});T&&!wn(p,Ne.current)&&T(ue(p)),Ge(p)},e=function($){if(!C){var p=0,K=oe-A;ae.forEach(function(Pe,we){var ye=Math.abs($-Pe);ye<=K&&(K=ye,p=we)});var H=Ce(ae);H[p]=$,O&&!ae.length&&R===void 0&&H.push($),w==null||w(ue(H)),Fe(H),M==null||M(ue(H))}},X=function($){$.preventDefault();var p=ne.current.getBoundingClientRect(),K=p.width,H=p.height,Pe=p.left,we=p.top,ye=p.bottom,De=p.right,tn=$.clientX,rn=$.clientY,ze;switch(le){case"btt":ze=(ye-rn)/H;break;case"ttb":ze=(rn-we)/H;break;case"rtl":ze=(De-tn)/K;break;default:ze=(tn-Pe)/K}var Sn=A+ze*(oe-A);e(Re(Sn))},Y=t.useState(null),he=te(Y,2),be=he[0],Ze=he[1],xn=function($,p){if(!C){var K=Ee(ae,$,p);w==null||w(ue(ae)),Fe(K.values),M==null||M(ue(K.values)),Ze(K.value)}};t.useEffect(function(){if(be!==null){var G=ae.indexOf(be);G>=0&&ee.current.focus(G)}Ze(null)},[be]);var bn=t.useMemo(function(){return V&&ie===null?!1:V},[V,ie]),pn=function(){M==null||M(ue(Ne.current))},mn=zn(ne,le,ae,A,oe,Re,Fe,pn,Ee),Le=te(mn,4),qe=Le[0],yn=Le[1],Xe=Le[2],jn=Le[3],Je=function($,p){jn($,p),w==null||w(ue(Ne.current))},Qe=qe!==-1;t.useEffect(function(){if(!Qe){var G=ae.lastIndexOf(yn);ee.current.focus(G)}},[Qe]);var Oe=t.useMemo(function(){return Ce(Xe).sort(function(G,$){return G-$})},[Xe]),Cn=t.useMemo(function(){return O?[Oe[0],Oe[Oe.length-1]]:[A,Oe[0]]},[Oe,O,A]),en=te(Cn,2),nn=en[0],an=en[1];t.useImperativeHandle(o,function(){return{focus:function(){ee.current.focus(0)},blur:function(){var $=document,p=$.activeElement;ne.current.contains(p)&&(p==null||p.blur())}}}),t.useEffect(function(){k&&ee.current.focus(0)},[]);var kn=t.useMemo(function(){return{min:A,max:oe,direction:le,disabled:C,step:ie,included:P,includedStart:nn,includedEnd:an,range:O,tabIndex:xe,ariaLabelForHandle:se,ariaLabelledByForHandle:Se,ariaValueTextFormatterForHandle:ce}},[A,oe,le,C,ie,P,nn,an,O,xe,se,Se,ce]);return t.createElement(Me.Provider,{value:kn},t.createElement("div",{ref:ne,className:ke(l,d,(r={},fe(r,"".concat(l,"-disabled"),C),fe(r,"".concat(l,"-vertical"),D),fe(r,"".concat(l,"-horizontal"),!D),fe(r,"".concat(l,"-with-marks"),$e.length),r)),style:h,onMouseDown:X},t.createElement("div",{className:"".concat(l,"-rail"),style:ge}),t.createElement(Ln,{prefixCls:l,style:U,values:Oe,startPoint:L,onStartMove:bn?Je:null}),t.createElement(Un,{prefixCls:l,marks:$e,dots:J,style:re,activeStyle:I}),t.createElement(Dn,{ref:ee,prefixCls:l,style:Z,values:Xe,draggingIndex:qe,onStartMove:Je,onOffsetChange:xn,onFocus:j,onBlur:m,handleRender:Q}),t.createElement(Hn,{prefixCls:l,marks:$e,onClick:e})))}),Yn=t.forwardRef(function(a,o){var r=a.open,s=t.useRef(null),l=t.useRef(null);function d(){ln.cancel(l.current),l.current=null}function h(){l.current=ln(function(){var g;(g=s.current)===null||g===void 0||g.forcePopupAlign(),l.current=null})}return t.useEffect(function(){return r?h():d(),d},[r,a.title]),t.createElement(Mn,pe({ref:$n(s,o)},a))}),Vn=function(a,o){var r={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&o.indexOf(s)<0&&(r[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(a);l<s.length;l++)o.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(a,s[l])&&(r[s[l]]=a[s[l]]);return r},Kn=t.forwardRef(function(a,o){var r=t.useContext(Rn),s=r.getPrefixCls,l=r.direction,d=r.getPopupContainer,h=t.useState({}),g=te(h,2),C=g[0],k=g[1],j=function(M,E){k(function(S){return pe(pe({},S),fe({},M,E))})},m=function(M,E){return M||(E?l==="rtl"?"left":"right":"top")},b=a.prefixCls,u=a.range,i=a.className,f=Vn(a,["prefixCls","range","className"]),v=s("slider",b),x=ke(i,fe({},"".concat(v,"-rtl"),l==="rtl"));l==="rtl"&&!f.vertical&&(f.reverse=!f.reverse);var c=t.useMemo(function(){return u?hn(u)==="object"?[!0,u.draggableTrack]:[!0,!1]:[!1]},[u]),y=te(c,2),O=y[0],R=y[1],T=function(M,E){var S,_=E.index,F=E.dragging,V=s(),z=a.tooltip,D=z===void 0?{}:z,B=a.vertical,P=pe({formatter:(S=a.tipFormatter)!==null&&S!==void 0?S:function(W){return typeof W=="number"?W.toString():""},open:a.tooltipVisible,placement:a.tooltipPlacement,getPopupContainer:a.getTooltipPopupContainer},D),L=P.open,U=P.placement,Z=P.getPopupContainer,ge=P.prefixCls,re=P.formatter,I=re?C[_]||F:!1,q=L||L===void 0&&I,J=pe(pe({},M.props),{onMouseEnter:function(){return j(_,!0)},onMouseLeave:function(){return j(_,!1)}}),Q=s("tooltip",ge);return t.createElement(Yn,{prefixCls:Q,title:re?re(E.value):"",open:q,placement:m(U,B),transitionName:"".concat(V,"-zoom-down"),key:_,overlayClassName:"".concat(v,"-tooltip"),getPopupContainer:Z||d},t.cloneElement(M,J))};return t.createElement(Xn,pe({},f,{step:f.step,range:O,draggableTrack:R,className:x,ref:o,prefixCls:v,handleRender:T}))});const Ie=t.forwardRef(({className:a,bsPrefix:o,as:r="span",...s},l)=>(o=vn(o,"input-group-text"),n.jsx(r,{ref:l,className:ke(a,o),...s})));Ie.displayName="InputGroupText";const Wn=a=>n.jsx(Ie,{children:n.jsx(fn,{type:"checkbox",...a})}),Zn=a=>n.jsx(Ie,{children:n.jsx(fn,{type:"radio",...a})}),gn=t.forwardRef(({bsPrefix:a,size:o,hasValidation:r,className:s,as:l="div",...d},h)=>{a=vn(a,"input-group");const g=t.useMemo(()=>({}),[]);return n.jsx(En.Provider,{value:g,children:n.jsx(l,{ref:h,...d,className:ke(s,a,o&&`${a}-${o}`,r&&"has-validation")})})});gn.displayName="InputGroup";const dn=Object.assign(gn,{Text:Ie,Radio:Zn,Checkbox:Wn}),qn=Ke.div`
  padding: 10px 0px;

  .sort-dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    z-index: 100;
    margin-top: 10rem;
  }

  .sort-option {
    padding: 8px 16px;
    cursor: pointer;
  }

  .sort-option:hover {
    background-color: #f0f0f0;
  }

  .main-filter-module-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .filter-by-type-div {
    padding: 0px 20px;
  }
  .alltests {
    max-height: 300px;
    overflow-y: scroll;
  }
  .filter-title-div {
    display: flex;
    align-items: center;
  }
  .filter-title-div p {
    color: #131313;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.3px;
    margin-bottom: 0px;
  }
  .clear-filter-btn button {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.21px;
    text-decoration-line: underline;
    text-decoration-style: solid;
  }
  .filter-by-title {
    color: #1e1e1e;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
  .select-checkbox-div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .select-checkbox-div input {
    height: 28px;
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  .select-checkbox-div p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    margin-bottom: 0px;
    color: #000;
    font-family: Poppins, serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
  .select-checkbox-div label {
    margin-bottom: 0px;
  }
  .horizontal-line {
    width: 100%;
    height: 1px;
    background: #e8e8e8;
    margin: 20px 0;
  }
  .input-fields .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
      justify-content: center;
      & > div {
        margin: auto !important;
      }
    }
  }
  .range-slider > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-bottom: 0px;
  }
  .ant-slider-track {
    background: #252b61;
  }
  .ant-slider-handle {
    background: #252b61;
    border: solid 2px #252b61;
  }
  .CloseButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: end;
  }

  .main-sort-filter-container {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .sort-filter-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    padding: 10px 0px;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .sort-section,
  .filter-section {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    color: black;
  }

  .sort-icon,
  .filter-icon {
    font-size: 18px;
    color: gray;
  }

  .divider {
    width: 1px;
    height: 24px;
    background-color: #ddd;
  }

  @media (min-width: 768px) {
    .MobileMenuButton,
    .CloseButton {
      display: none;
    }
  }
`,Jn=Ke.div`
  position: fixed;
  top: 0;
  left: ${a=>a.sMenuOpen?"0":"-100%"};
  width: 300px;
  height: 100%;
  background: #ffffff;
  transition: left 0.3s ease;
  z-index: 999;
  overflow-y: auto;
  padding: 1rem;

  .toggle-filter {
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    left: 0;
    position: static;
    height: auto;
    z-index: auto;
    overflow-y: visible;
    background: transparent;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 300px;
    margin-top: 6rem;
    height: 90%;
  }
`;Ke.button`
  display: none;
  position: absolute;
  left: 10px;
  font-size: 34px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;const Ye=[{value:["10","20"],label:"10 % To 20 %"},{value:["20","30"],label:"20 % To 30 %"},{value:["30","40"],label:"30 % To 40 %"},{value:["40","50"],label:"40 % To 50 %"},{value:["50"],label:"Upto 50 %"}],aa=a=>{var ue,Fe;const{allCategoriesList:o,labtestTubes:r,handleChangeTubesFilter:s,selectedTubes:l,selectedCategories:d,selectedVendors:h,selectedTests:g,categoryFilter:C,allBrandsList:k,brandFilter:j,bodyTypeFilter:m,minDiscount:b,maxDiscount:u,allTypeList:i,typeFilter:f,fastingToggle:v,corpToggle:x,handleToggleChange:c,handleCorpToggleChange:y,testsList:O,handleTestsSelect:R,allVendors:T,handleChangeVendorFilter:w,allTimeSlotList:M,allDiscountList:E,patientReviewsList:S,allBodyTypeList:_}=a;console.log("allBodyTypeList : ",_);const{user:F}=Fn(e=>e.auth),[V,z]=t.useState(null),[D,B]=t.useState([0,5e3]),[P,L]=t.useState(!1),[U,Z]=t.useState(!1),[ge,re]=t.useState(""),[I,q]=t.useState(!0),[J,Q]=t.useState(!0),[W,xe]=t.useState(!0),[se,Se]=t.useState(!0),[ce,ee]=t.useState([]),[ne,le]=t.useState([]),[A,oe]=t.useState([]),[ie,_e]=t.useState(null),$e=()=>{ee([]),le([]),oe([]),_e(null)},me=(e,X,Y)=>{Y.includes(e)?X(Y.filter(he=>he!==e)):X([...Y,e])},[N,Re]=t.useState("");t.useEffect(()=>{Re((a==null?void 0:a.origin)||"")},[a]);const Ee=e=>{B(e),a.filterPriceRange(e)},Ue=e=>{a.handleChangeTypeFilter(e)},Be=e=>{a.handleChangeCategoryFilter(e)},de=e=>{a.handleChangeBrandFilter(e)},Ge=e=>{a.handleChangeBodyTypeFilter(e)},ae=()=>{a.handleClearAll(),z(""),B([0,5e3]),$e()},Ne=e=>{re(e==null?void 0:e.label),a.setSelectedSortOption(e==null?void 0:e.value),Z(!1)};return console.log({originPage:N,d:"doctor"}),n.jsxs(qn,{children:[n.jsx("div",{className:"main-sort-filter-container cursor-pointer",children:n.jsxs("div",{className:"sort-filter-container",children:[n.jsxs("div",{className:"sort-section",onClick:()=>Z(!U),children:[n.jsx("i",{className:"sort-icon",children:"⇅"}),n.jsx("span",{children:ge||"Sort"}),U&&n.jsxs("div",{className:"sort-dropdown",children:[n.jsx("div",{className:"sort-option",onClick:()=>Ne({value:"desc",label:"High to Low"}),children:"High to Low"}),n.jsx("div",{className:"sort-option",onClick:()=>Ne({value:"asc",label:"Low to High"}),children:"Low to High"})]})]}),n.jsx("div",{className:"divider"}),n.jsxs("div",{className:"filter-section",onClick:()=>L(!0),children:[n.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734779473619.png",alt:"filter-icon",className:"filter-icon"}),n.jsx("span",{children:"Filter"})]})]})}),n.jsxs(Jn,{sMenuOpen:P||window.innerWidth>=768,children:[n.jsx("div",{className:"CloseButton",onClick:()=>{console.log("closebtn"),L(!1)},children:n.jsx(On,{})}),n.jsxs("div",{className:"main-filter-module-div",children:[n.jsxs("div",{className:"filter-title-div",children:[n.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731929868166.png",alt:"",className:"me-3"}),n.jsx("p",{children:"Filters"})]}),n.jsx("div",{className:"clear-filter-btn",children:n.jsx("button",{className:"btn",onClick:ae,children:"Clear All"})})]}),N==="pharmacy"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Type"}),i==null?void 0:i.map(e=>n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",onChange:()=>{B([0,5e3]),Ue(e==null?void 0:e.id)}}),n.jsx("label",{htmlFor:`checkbox-${e.id}`,children:n.jsx("p",{children:`${e==null?void 0:e.name}`})})]},e.id))]}),n.jsx("div",{className:"horizontal-line"})]}),N==="labtest"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"toggle-filter d-flex flex-row gap-2 w-full ",children:[n.jsx(cn,{checked:v,onChange:()=>{B([0,5e3]),c()}}),n.jsx("span",{children:"Fasting"})]}),n.jsx("div",{className:"horizontal-line"})]}),N==="package"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"toggle-filter d-flex flex-row gap-2 w-full ",children:[n.jsx(cn,{checked:x,disabled:!(F!=null&&F.roles)||(F==null?void 0:F.roles.length)===0||(F==null?void 0:F.roles[0].role)!=="client_user",onChange:()=>{B([0,5e3]),y()}}),n.jsx("span",{children:"Corporate"})]}),n.jsx("div",{className:"horizontal-line"})]}),N==="bookAppointment"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-section",children:[n.jsx("div",{className:"head",children:n.jsxs("div",{className:"filter-header",onClick:()=>q(!I),children:[n.jsx("p",{children:"Gender"}),I?n.jsx(Ae,{}):n.jsx(He,{})]})}),I&&n.jsxs("div",{className:"filter-content",children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",value:"male",checked:ce.includes("male"),onChange:()=>me("male",ee,ce)})," ","Male"]}),n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",value:"female",checked:ce.includes("female"),onChange:()=>me("female",ee,ce)})," ","Female"]})]})]}),n.jsxs("div",{className:"filter-section",children:[n.jsx("div",{className:"head",children:n.jsxs("div",{className:"filter-header",onClick:()=>Q(!J),children:[n.jsx("p",{children:"Specialization"}),J?n.jsx(Ae,{}):n.jsx(He,{})]})}),J&&n.jsxs("div",{className:"filter-content",children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",value:"general-surgeon",checked:ne.includes("general-surgeon"),onChange:()=>me("general-surgeon",le,ne)})," ","General Surgeon"]}),n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",value:"dentist",checked:ne.includes("dentist"),onChange:()=>me("dentist",le,ne)})," ","Dentist"]})]})]}),n.jsxs("div",{className:"filter-section",children:[n.jsx("div",{className:"head",children:n.jsxs("div",{className:"filter-header",onClick:()=>xe(!W),children:[n.jsx("p",{children:"Consultant Type"}),W?n.jsx(Ae,{}):n.jsx(He,{})]})}),W&&n.jsxs("div",{className:"filter-content",children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",value:"online",checked:A.includes("online"),onChange:()=>me("online",oe,A)})," ","Online Consultant"]}),n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",value:"opd",checked:A.includes("opd"),onChange:()=>me("opd",oe,A)})," ","OPD Consultant"]})]})]}),n.jsxs("div",{className:"filter-section",children:[n.jsx("div",{className:"head",children:n.jsxs("div",{className:"filter-header",onClick:()=>Se(!se),children:[n.jsx("p",{children:"Price Range"}),se?n.jsx(Ae,{}):n.jsx(He,{})]})}),se&&n.jsxs("div",{className:"filter-content",children:[n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"price-sort",value:"low-to-high",checked:ie==="low-to-high",onChange:()=>_e("low-to-high")})," ","Low to High"]}),n.jsxs("label",{children:[n.jsx("input",{type:"radio",name:"price-sort",value:"high-to-low",checked:ie==="high-to-low",onChange:()=>_e("high-to-low")})," ","High to Low"]})]})]})]}),N!=="bookAppointment"&&n.jsxs("div",{className:"filter-by-type-div",children:[N==="ctmri"?n.jsx("p",{className:"filter-by-title",children:" By Scan Type"}):n.jsx("p",{className:"filter-by-title",children:"By Category"}),n.jsx("div",{className:"alltests",children:(ue=o==null?void 0:o.category_ids)==null?void 0:ue.map(e=>e!=null&&e.name?(console.log(d,e.id),n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:d==null?void 0:d.includes(e.id),onChange:()=>{B([0,5e3]),Be(e==null?void 0:e.id)},id:`checkbox-${e.id}`}),n.jsx("label",{htmlFor:`checkbox-${e.id}`,title:(e==null?void 0:e.name)||"Unnamed Category",children:n.jsx("p",{title:e==null?void 0:e.name,children:`${(e==null?void 0:e.name)||"Unnamed Category"} (${e==null?void 0:e.count}) `})})]},e.id)):null)})]}),n.jsx("div",{className:"horizontal-line"}),N!=="ctmri"&&N!=="pharmacy"&&N!=="bookAppointment"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Vendors"}),n.jsx("div",{className:"alltests",children:T==null?void 0:T.map(e=>{var X,Y,he,be;return e!=null&&e.name?n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:h==null?void 0:h.includes(e.id),onChange:()=>{B([0,5e3]),a==null||a.handleChangeVendorFilter(e==null?void 0:e.id)},id:`checkbox-${e.id}`}),n.jsx("label",{htmlFor:`checkbox-${e.id}`,title:(e==null?void 0:e.name)||"Unnamed Vendor",children:n.jsx("p",{title:`${(e==null?void 0:e.name)||"Unnamed Vendor"} (${N==="labtest"?((X=e==null?void 0:e.tests)==null?void 0:X.length)||0:N==="package"&&((Y=e==null?void 0:e.packages)==null?void 0:Y.length)||0}) `,children:`${(e==null?void 0:e.name)||"Unnamed Vendor"} (${N==="labtest"?((he=e==null?void 0:e.tests)==null?void 0:he.length)||0:N==="package"&&((be=e==null?void 0:e.packages)==null?void 0:be.length)||0}) `})})]},e.id):null})})]}),n.jsx("div",{className:"horizontal-line"})]}),N!=="ctmri"&&N!=="pharmacy"&&N!=="vendor"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Vendors"}),n.jsx("div",{className:"alltests",children:T==null?void 0:T.map(e=>{var X,Y,he,be;return e!=null&&e.name?n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:h==null?void 0:h.includes(e.id),onChange:()=>{B([0,5e3]),a==null||a.handleChangeVendorFilter(e==null?void 0:e.id)},id:`checkbox-${e.id}`}),n.jsx("label",{htmlFor:`checkbox-${e.id}`,title:(e==null?void 0:e.name)||"Unnamed Vendor",children:n.jsx("p",{title:`${(e==null?void 0:e.name)||"Unnamed Vendor"} (${N==="labtest"?((X=e==null?void 0:e.tests)==null?void 0:X.length)||0:N==="package"&&((Y=e==null?void 0:e.packages)==null?void 0:Y.length)||0}) `,children:`${(e==null?void 0:e.name)||"Unnamed Vendor"} (${N==="labtest"?((he=e==null?void 0:e.tests)==null?void 0:he.length)||0:N==="package"&&((be=e==null?void 0:e.packages)==null?void 0:be.length)||0}) `})})]},e.id):null})})]}),n.jsx("div",{className:"horizontal-line"})]}),N==="labtest"&&(r==null?void 0:r.length)>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Tubes"}),n.jsx("div",{className:"alltests",children:r==null?void 0:r.map((e,X)=>n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:l==null?void 0:l.includes(e.tube_name),onChange:Y=>{B([0,5e3]),s(Y,e)},id:`checkbox-${X}`}),n.jsx("label",{htmlFor:`checkbox-${X}`,title:`${(e==null?void 0:e.tube_name)||"Unnamed Category"} (${e==null?void 0:e.total}) `,children:n.jsx("p",{children:`${(e==null?void 0:e.tube_name)||"Unnamed Category"} (${e==null?void 0:e.total}) `})})]},X))})]}),n.jsx("div",{className:"horizontal-line"})]}),N==="package"&&(O==null?void 0:O.length)>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Tests"}),n.jsx("div",{className:"alltests",children:O==null?void 0:O.map(e=>n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:g==null?void 0:g.includes(e.service_code),onChange:X=>{B([0,5e3]),R(X,e)},id:`checkbox-${e.service_code}`}),n.jsx("label",{htmlFor:`checkbox-${e.service_code}`,title:e.service_name,children:n.jsx("p",{children:e.service_name})})]},e.service_code))})]}),n.jsx("div",{className:"horizontal-line"})]}),N==="ctmri"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Body Parts"}),n.jsx("div",{className:"alltests",children:Array.isArray(_)&&(_==null?void 0:_.map(e=>e!=null&&e.title?n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:m==null?void 0:m.includes(e.title),onChange:()=>Ge(e==null?void 0:e.title),id:`checkbox-${e.title}`}),n.jsx("label",{htmlFor:`checkbox-${e.title}`,children:n.jsx("p",{title:e==null?void 0:e.title,children:`${(e==null?void 0:e.title)||"Unnamed Category"} (${e==null?void 0:e.count}) `})})]},e.title):null))})]}),n.jsx("div",{className:"horizontal-line"})]}),N==="pharmacy"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"By Brand"}),n.jsx("div",{className:"alltests",children:(Fe=k==null?void 0:k.data)==null?void 0:Fe.slice(0,15).map(e=>e!=null&&e.name?n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:j==null?void 0:j.includes(e.name),onChange:()=>de(e==null?void 0:e.name),id:`checkbox-${e.name}`}),n.jsx("label",{htmlFor:`checkbox-${e.name}`,children:n.jsx("p",{title:e==null?void 0:e.name,children:`${(e==null?void 0:e.name)||"Unnamed Category"} (${e==null?void 0:e.count}) `})})]},e.name):null)})]}),n.jsx("div",{className:"horizontal-line"})]}),N!=="vendor"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"Price Range"}),n.jsxs("div",{className:"range-slider",children:[n.jsx(Kn,{range:!0,min:0,max:1e4,value:D,onChange:Ee,onAfterChange:e=>{a==null||a.handleInputChange(e)}}),n.jsxs("div",{className:"selected-range-value-div mt-3",children:[n.jsxs("p",{children:["₹",D[0]]})," - ",n.jsxs("p",{children:["₹",D[1]]})]}),n.jsx("div",{className:"input-fields",children:n.jsxs("div",{className:"d-flex",children:[n.jsx(dn,{className:"me-2",children:n.jsx(sn.Control,{type:"number",placeholder:"Min",value:D[0]===0?"":D[0],onChange:e=>{const Y=[e.target.value===""?0:Number(e.target.value),D[1]];Ee(Y),a==null||a.handleInputChange(Y)}})}),"To",n.jsx(dn,{className:"ms-2",children:n.jsx(sn.Control,{type:"number",placeholder:"Max",value:D[1]===0?"":D[1],onChange:e=>{const X=e.target.value===""?0:Number(e.target.value),Y=[D[0],X];Ee(Y),a==null||a.handleInputChange(Y)}})})]})})]})]}),n.jsx("div",{className:"horizontal-line"})]}),N!=="bookAppointment"&&n.jsxs("div",{className:"filter-by-type-div",children:[n.jsx("p",{className:"filter-by-title",children:"Discount Range"}),Ye==null?void 0:Ye.map(e=>n.jsxs("div",{className:"select-checkbox-div",children:[n.jsx("input",{type:"checkbox",checked:b===(e==null?void 0:e.value[0])&&u===e.value[1],onChange:()=>{B([0,5e3]),a.handleonFilterDiscount(e==null?void 0:e.value)},id:`checkbox-${e.label}`}),n.jsx("label",{htmlFor:`checkbox-${e.label}`,children:n.jsx("p",{children:e==null?void 0:e.label})})]},e.value))]})]})]})};export{aa as S};
