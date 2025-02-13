import{r as o,bd as It,j as e,K as he,_ as xe,cw as V,e_ as Lt,E as Me,ch as it,cR as Rt,M as Te,cT as Pe,cA as nt,I as Ot,cV as Pt,cW as Bt,cX as at,cY as Kt,ce as Ft,d as xt,u as ht,fQ as Ht,fR as $t,b as Wt,a as Se,aK as At,s as Gt,ed as Ut,bE as De,eE as ze,fS as Xt,S as ot,an as st,fT as Yt,fU as qt,f as Qt,fV as Zt,fW as Jt,bC as Vt,bN as ei,fX as ti,c as ii,v as rt,bs as ni,fY as ai,t as Ce,fZ as oi,f_ as si,f$ as ri,g0 as li,g1 as ci}from"./index-CitTC1Lo.js";import{S as di}from"./ShareModal-Dhat-0Un.js";import{R as pi,X as fi,T as xi}from"./generateCategoricalChart-Ca6Mc_y2.js";import{P as hi,L as mi}from"./LineChart-9rzU0IDu.js";import{C as gi}from"./CartesianGrid-By77ydO6.js";import{L as ui}from"./Line-Catp5S2g.js";import{a as Be,b as Ke}from"./index-CeD86j3u.js";import{T as lt}from"./Table-Dh2jb1Td.js";import{A as Ee}from"./Accordion-DR59O_fM.js";import{G as bi}from"./index-CsR-E3M6.js";import"./toInteger-C78s2If9.js";import"./index-Da9nG-Pc.js";const mt=o.forwardRef(({bsPrefix:i,bg:l="primary",pill:m=!1,text:x,className:s,as:p="span",...N},f)=>{const j=It(i,"badge");return e.jsx(p,{ref:f,...N,className:he(s,j,m&&"rounded-pill",x&&`text-${x}`,l&&`bg-${l}`)})});mt.displayName="Badge";var ct=o.createContext(null),vi=function(l){var m=l.prefixCls,x=l.className,s=l.style,p=l.children,N=l.containerRef,f=l.id,j=l.onMouseEnter,H=l.onMouseOver,a=l.onMouseLeave,d=l.onClick,b=l.onKeyDown,P=l.onKeyUp,L={onMouseEnter:j,onMouseOver:H,onMouseLeave:a,onClick:d,onKeyDown:b,onKeyUp:P};return o.createElement(o.Fragment,null,o.createElement("div",xe({id:f,className:he("".concat(m,"-content"),x),style:V({},s),"aria-modal":"true",role:"dialog",ref:N},L),p))};function dt(i){return typeof i=="string"&&String(Number(i))===i?(Lt(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(i)):i}var pt={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function yi(i,l){var m,x,s,p,N=i.prefixCls,f=i.open,j=i.placement,H=i.inline,a=i.push,d=i.forceRender,b=i.autoFocus,P=i.keyboard,L=i.rootClassName,ee=i.rootStyle,B=i.zIndex,te=i.className,ie=i.id,ne=i.style,O=i.motion,pe=i.width,X=i.height,U=i.children,Y=i.contentWrapperStyle,me=i.mask,$=i.maskClosable,ae=i.maskMotion,oe=i.maskClassName,g=i.maskStyle,K=i.afterOpenChange,W=i.onClose,q=i.onMouseEnter,Q=i.onMouseOver,ge=i.onMouseLeave,z=i.onClick,A=i.onKeyDown,fe=i.onKeyUp,F=o.useRef(),Z=o.useRef(),se=o.useRef();o.useImperativeHandle(l,function(){return F.current});var ue=function(I){var le=I.keyCode,ce=I.shiftKey;switch(le){case Pe.TAB:{if(le===Pe.TAB){if(!ce&&document.activeElement===se.current){var ve;(ve=Z.current)===null||ve===void 0||ve.focus({preventScroll:!0})}else if(ce&&document.activeElement===Z.current){var Ne;(Ne=se.current)===null||Ne===void 0||Ne.focus({preventScroll:!0})}}break}case Pe.ESC:{W&&P&&(I.stopPropagation(),W(I));break}}};o.useEffect(function(){if(f&&b){var _;(_=F.current)===null||_===void 0||_.focus({preventScroll:!0})}},[f]);var C=o.useState(!1),h=Me(C,2),S=h[0],T=h[1],k=o.useContext(ct),G;a===!1?G={distance:0}:a===!0?G={}:G=a||{};var J=(m=(x=(s=G)===null||s===void 0?void 0:s.distance)!==null&&x!==void 0?x:k==null?void 0:k.pushDistance)!==null&&m!==void 0?m:180,re=o.useMemo(function(){return{pushDistance:J,push:function(){T(!0)},pull:function(){T(!1)}}},[J]);o.useEffect(function(){if(f){var _;k==null||(_=k.push)===null||_===void 0||_.call(k)}else{var I;k==null||(I=k.pull)===null||I===void 0||I.call(k)}},[f]),o.useEffect(function(){return function(){var _;k==null||(_=k.pull)===null||_===void 0||_.call(k)}},[]);var Ie=me&&o.createElement(it,xe({key:"mask"},ae,{visible:f}),function(_,I){var le=_.className,ce=_.style;return o.createElement("div",{className:he("".concat(N,"-mask"),le,oe),style:V(V({},ce),g),onClick:$&&f?W:void 0,ref:I})}),be=typeof O=="function"?O(j):O,R={};if(S&&J)switch(j){case"top":R.transform="translateY(".concat(J,"px)");break;case"bottom":R.transform="translateY(".concat(-J,"px)");break;case"left":R.transform="translateX(".concat(J,"px)");break;default:R.transform="translateX(".concat(-J,"px)");break}j==="left"||j==="right"?R.width=dt(pe):R.height=dt(X);var ke={onMouseEnter:q,onMouseOver:Q,onMouseLeave:ge,onClick:z,onKeyDown:A,onKeyUp:fe},$e=o.createElement(it,xe({key:"panel"},be,{visible:f,forceRender:d,onVisibleChanged:function(I){K==null||K(I)},removeOnLeave:!1,leavedClassName:"".concat(N,"-content-wrapper-hidden")}),function(_,I){var le=_.className,ce=_.style;return o.createElement("div",xe({className:he("".concat(N,"-content-wrapper"),le),style:V(V(V({},R),ce),Y)},Rt(i,{data:!0})),o.createElement(vi,xe({id:ie,containerRef:I,prefixCls:N,className:te,style:ne},ke),U))}),Le=V({},ee);return B&&(Le.zIndex=B),o.createElement(ct.Provider,{value:re},o.createElement("div",{className:he(N,"".concat(N,"-").concat(j),L,(p={},Te(p,"".concat(N,"-open"),f),Te(p,"".concat(N,"-inline"),H),p)),style:Le,tabIndex:-1,ref:F,onKeyDown:ue},Ie,o.createElement("div",{tabIndex:0,ref:Z,style:pt,"aria-hidden":"true","data-sentinel":"start"}),$e,o.createElement("div",{tabIndex:0,ref:se,style:pt,"aria-hidden":"true","data-sentinel":"end"})))}var wi=o.forwardRef(yi),ji=function(l){var m=l.open,x=m===void 0?!1:m,s=l.prefixCls,p=s===void 0?"rc-drawer":s,N=l.placement,f=N===void 0?"right":N,j=l.autoFocus,H=j===void 0?!0:j,a=l.keyboard,d=a===void 0?!0:a,b=l.width,P=b===void 0?378:b,L=l.mask,ee=L===void 0?!0:L,B=l.maskClosable,te=B===void 0?!0:B,ie=l.getContainer,ne=l.forceRender,O=l.afterOpenChange,pe=l.destroyOnClose,X=l.onMouseEnter,U=l.onMouseOver,Y=l.onMouseLeave,me=l.onClick,$=l.onKeyDown,ae=l.onKeyUp,oe=o.useState(!1),g=Me(oe,2),K=g[0],W=g[1],q=o.useState(!1),Q=Me(q,2),ge=Q[0],z=Q[1];nt(function(){z(!0)},[]);var A=ge?x:!1,fe=o.useRef(),F=o.useRef();nt(function(){A&&(F.current=document.activeElement)},[A]);var Z=function(h){var S;if(W(h),O==null||O(h),!h&&F.current&&!(!((S=fe.current)===null||S===void 0)&&S.contains(F.current))){var T;(T=F.current)===null||T===void 0||T.focus({preventScroll:!0})}};if(!ne&&!K&&!A&&pe)return null;var se={onMouseEnter:X,onMouseOver:U,onMouseLeave:Y,onClick:me,onKeyDown:$,onKeyUp:ae},ue=V(V({},l),{},{open:A,prefixCls:p,placement:f,autoFocus:H,keyboard:d,width:P,mask:ee,maskClosable:te,inline:ie===!1,afterOpenChange:Z,ref:fe},se);return o.createElement(hi,{open:A||ne||K,autoDestroy:!1,getContainer:ie,autoLock:ee&&(A||K)},o.createElement(wi,ue))},Ci=function(i,l){var m={};for(var x in i)Object.prototype.hasOwnProperty.call(i,x)&&l.indexOf(x)<0&&(m[x]=i[x]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,x=Object.getOwnPropertySymbols(i);s<x.length;s++)l.indexOf(x[s])<0&&Object.prototype.propertyIsEnumerable.call(i,x[s])&&(m[x[s]]=i[x[s]]);return m};Ft("default","large");var ki={distance:180};function Ni(i){var l=i.width,m=i.height,x=i.size,s=x===void 0?"default":x,p=i.closable,N=p===void 0?!0:p,f=i.mask,j=f===void 0?!0:f,H=i.push,a=H===void 0?ki:H,d=i.closeIcon,b=d===void 0?o.createElement(Kt,null):d,P=i.bodyStyle,L=i.drawerStyle,ee=i.className,B=i.visible,te=i.open,ie=i.children,ne=i.style,O=i.title,pe=i.headerStyle,X=i.onClose,U=i.footer,Y=i.footerStyle,me=i.prefixCls,$=i.getContainer,ae=i.extra,oe=i.afterVisibleChange,g=i.afterOpenChange,K=Ci(i,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),W=o.useContext(Ot),q=W.getPopupContainer,Q=W.getPrefixCls,ge=W.direction,z=Q("drawer",me),A=$===void 0&&q?function(){return q(document.body)}:$,fe=N&&o.createElement("button",{type:"button",onClick:X,"aria-label":"Close",className:"".concat(z,"-close")},b);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach(function(T){var k=Me(T,2);k[0],k[1]});function F(){return!O&&!N?null:o.createElement("div",{className:he("".concat(z,"-header"),Te({},"".concat(z,"-header-close-only"),N&&!O&&!ae)),style:pe},o.createElement("div",{className:"".concat(z,"-header-title")},fe,O&&o.createElement("div",{className:"".concat(z,"-title")},O)),ae&&o.createElement("div",{className:"".concat(z,"-extra")},ae))}function Z(){if(!U)return null;var T="".concat(z,"-footer");return o.createElement("div",{className:T,style:Y},U)}var se=he(Te({"no-mask":!j},"".concat(z,"-rtl"),ge==="rtl"),ee),ue=o.useMemo(function(){return l??(s==="large"?736:378)},[l,s]),C=o.useMemo(function(){return m??(s==="large"?736:378)},[m,s]),h={motionName:at(z,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},S=function(k){return{motionName:at(z,"panel-motion-".concat(k)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return o.createElement(Pt,null,o.createElement(Bt,{status:!0,override:!0},o.createElement(ji,xe({prefixCls:z,onClose:X},K,{open:te??B,mask:j,push:a,width:ue,height:C,rootClassName:se,getContainer:A,afterOpenChange:function(k){g==null||g(k),oe==null||oe(k)},maskMotion:h,motion:S,rootStyle:ne}),o.createElement("div",{className:"".concat(z,"-wrapper-body"),style:xe({},L)},F(),o.createElement("div",{className:"".concat(z,"-body"),style:P},ie),Z()))))}const Si="/assets/test-C0GUn5WC.png",_i=xt.div`
  width: 100%;
  font-family: Outfit, sans-serif;

  .scanDetailsContainer {
    padding: 24px 48px 0px 52px;
    background: #ffffff;
  }
  .time-section1 span {
    margin-right: 10px;
  }
  .my-prefrance-btn {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: fit-content !important;
    border-radius: 45px;
    background: #252b61 !important;
    color: #fff;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.27px;
    text-transform: capitalize;
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
  .share-btn-icon svg {
    height: 1.5rem;
    width: 1.5rem;
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
    .toggle-filter {
      width: 100%;
      display: flex;
      gap: 10px;
    }
    .btn-filter-module-div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
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
    align-items: start;
    justify-content: space-between;
    padding: 10px;
    flex-direction: column;
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
      padding: 0px;
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
    width: 90%;
    // @media (min-width: 1100px) {
    //   min-width: 460px;
    // }
    // @media (min-width: 800px) and (max-width: 1000px) {
    //   width: min-content;
    // }
    // @media (max-width: 480px) {
    //   width: min-content;
    // }

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

  .info-item-address-sec {
    // display: flex;
    // align-items: center;
    font-size: 14px;
    color: #252b61;
    margin: 5px 0;
  }
  .info-item-address-sec {
    margin-bottom: 10px;
    padding-right: 16px;
    .km_distance_sec {
      color: green;
      font-size: 20px;
      font-weight: 600;
    }
    svg {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: -10px;
    }
  }

  .info-item-address-sec svg {
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
        /* min-height: 10rem; */
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
  .add-btn-package-sec-code {
    margin-left: 12px !important;
    margin-top: -5px;
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
        // flex-wrap: wrap;
        // .otherInfo {
        //   flex-direction: column;
        //   align-items: flex-start;
        // }
        // & > div,
        // .otherInfo > div {
        //   width: 100%;
        //   display: flex;
        //   flex-direction: row;
        //   gap: 1rem;
        //   justify-content: center;
        // }
        // & input {
        //   width: fit-content;
        // }
      }
    }
  }
  @media (max-width: 768px) {
    .mobile-header {
      padding: 20px;
    }
  }
  @media screen and (max-width: 800px) {
    .slot-row {
      gap: 5px;
      font-size: 13px;
      .gender-section {
        display: none;
      }
      .time-section1 span {
        margin-right: 0px;
      }
    }
  }
  .selector-filter-sub-module-div {
    height: 100%;
  }
`,Di=[{time:"07:00 AM",price:1200,labs:["Apollo Labs","Agilus Labs"]},{time:"08:00 AM",price:1100,labs:["Apollo Labs"]},{time:"09:00 AM",price:1200,labs:["Apollo Labs","Agilus Labs","Appolo Labs"]},{time:"10:00 AM",price:1200,labs:[]},{time:"11:00 AM",price:1200,labs:["Agilus Labs"]},{time:"12:00 PM",price:1200,labs:["Apollo Labs"]},{time:"01:00 PM",price:1200,labs:["Agilus Labs","+3 More Labs"]}],zi=({dataPoint:i})=>e.jsxs("div",{style:{marginTop:"2rem",backgroundColor:"#fff",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[e.jsx("p",{children:`${i.time}`}),e.jsx("p",{children:`Price: ₹${i.price}`}),i.labs.length>0&&e.jsx("ul",{style:{padding:0,listStyle:"none"},children:i.labs.map((l,m)=>e.jsx("li",{children:l},m))})]}),Ei=({active:i,payload:l})=>i&&l&&l.length?e.jsxs("div",{className:"tooltip-container",style:{marginTop:"2rem",backgroundColor:"#fff",padding:"10px",border:"1px solid #ccc",borderRadius:"5px",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"},children:[e.jsx("p",{children:`${l[0].payload.time}`}),e.jsx("p",{children:"Price: ₹1200"})]}):null,Mi=()=>{const[i,l]=o.useState(null),m=x=>{l(x)};return e.jsxs("div",{style:{width:"100%",padding:"20px",position:"relative"},children:[e.jsx(pi,{width:"100%",height:300,children:e.jsxs(mi,{data:Di,margin:{top:20,right:30,left:0,bottom:20},children:[e.jsx(gi,{strokeDasharray:"3 3"}),e.jsx(fi,{orientation:"top",dataKey:"time",tickLine:!1,axisLine:!1,tick:{fill:"#666",fontSize:12}}),e.jsx(xi,{content:e.jsx(Ei,{content:e.jsx(zi,{dataPoint:i})})}),e.jsx(ui,{type:"monotone",dataKey:"price",stroke:"#4A90E2",dot:{stroke:"#4A90E2",strokeWidth:2,fill:"#fff",r:6,onClick:m}})]})}),i&&e.jsxs("div",{style:{position:"absolute",top:"60%",left:"30%",width:"40%",backgroundColor:"#f5f5f5",boxShadow:"0px 4px 10px rgba(0,0,0,0.1)",borderRadius:"10px",padding:"15px"},children:[e.jsx("h4",{style:{margin:"0 0 10px"},children:"Labs"}),e.jsx("ul",{style:{padding:0,listStyle:"none"},children:i.labs.map((x,s)=>e.jsxs("li",{style:{display:"flex",justifyContent:"space-between",marginBottom:"8px",borderBottom:"1px solid #ccc",paddingBottom:"5px"},children:[e.jsx("span",{children:x}),e.jsxs("span",{children:["₹",i.price]})]},s))})]})]})},Ti=xt.div`
  /* SimilarPackageTable.css */
  .similar-package-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  .table-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
  }

  .comparison-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }
  .similar-package-add-btn {
    background: #252b61;
    border-radius: 25px;
    border: none;
    color: #fff;
    gap: 0.5rem;
    text-transform: capitalize;
  }
  .comparison-table th,
  .comparison-table td {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
    vertical-align: top;
  }

  .comparison-table th {
    font-weight: 600;
    color: #333;
    background-color: #f8f9fa;
  }

  .package-image {
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }

  .no-image {
    width: 120px;
    height: 120px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: #666;
  }

  .package-title {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
  }

  .price-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .badge-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .discount-badge {
    background-color: #e8f5e9 !important;
    color: #2e7d32 !important;
    padding: 4px 8px;
    font-weight: 500;
    width: fit-content;
  }

  .current-price {
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }

  .original-price {
    text-decoration: none;
    color: #666;
    font-size: 14px;
    span {
      text-decoration: line-through;
    }
  }

  .tests-accordion {
    max-height: 400px;
    overflow: scroll;
  }

  .tests-accordion .accordion-button {
    padding: 12px;
    font-weight: 500;
  }

  .tests-accordion .accordion-button:not(.collapsed) {
    background-color: #f8f9fa;
  }

  .tests-table th,
  .tests-table td {
    padding: 12px;
    vertical-align: middle;
  }

  .check-icon {
    color: #2e7d32;
    font-size: 20px;
  }

  .cross-icon {
    color: #d32f2f;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    .comparison-table {
      font-size: 14px;
    }

    .package-image,
    .no-image {
      width: 80px;
      height: 80px;
    }

    .current-price {
      font-size: 16px;
    }
  }
`,ft=({packages:i,currentItem:l,type:m})=>{const x=ht(),s=[l,...i],p=Array.from(new Set(s==null?void 0:s.flatMap(a=>a==null?void 0:a.tests).map(a=>a==null?void 0:a.service_code))).map(a=>s.flatMap(b=>b==null?void 0:b.tests).find(b=>(b==null?void 0:b.service_code)===a)).filter(a=>a!==void 0),N=(a,d)=>d==null?void 0:d.some(b=>(b==null?void 0:b.service_code)===a),[f,j]=o.useState("Package");o.useEffect(()=>{j(m==="test"?"Test":"Package")},[m]);const H=a=>a===0?`This ${f}`:`${f} ${a}`;return o.useEffect(()=>{console.log("allPackages : ",s)},[s]),e.jsx(Ti,{children:e.jsxs("div",{className:"similar-package-container",children:[e.jsxs("h2",{className:"table-title",children:["Compare With Similar ",f,"s"]}),e.jsxs(lt,{responsive:!0,className:"comparison-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[f," Details"]}),s==null?void 0:s.map((a,d)=>e.jsx("th",{children:H(d)},d))]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Image"}),s==null?void 0:s.map((a,d)=>{var b;return e.jsx("td",{children:a!=null&&a.image&&((b=a==null?void 0:a.image)==null?void 0:b.length)>0&&(a!=null&&a.image[0])?e.jsx("img",{src:a==null?void 0:a.image[0],alt:a==null?void 0:a.service_name,className:"package-image"}):e.jsx("div",{className:"no-image",children:"No Image"})},d)})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Name"}),s==null?void 0:s.map((a,d)=>e.jsx("td",{children:e.jsx("div",{className:"package-title",children:a==null?void 0:a.service_name})},d))]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Price"}),s==null?void 0:s.map((a,d)=>{var b,P,L;return e.jsx("td",{children:e.jsxs("div",{className:"price-wrapper",children:[e.jsxs("div",{className:"badge-wrapper",children:[e.jsxs(mt,{className:"discount-badge",children:["-",(b=a==null?void 0:a.price)==null?void 0:b.discount_percentage,"%"]}),e.jsxs("span",{className:"current-price",children:["₹",(P=a==null?void 0:a.price)==null?void 0:P.discounted_price]})]}),e.jsxs("span",{className:"original-price",children:["MRP: ",e.jsxs("span",{children:["₹",(L=a==null?void 0:a.price)==null?void 0:L.actual_cost]})]})]})},d)})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Report Within"}),s==null?void 0:s.map((a,d)=>e.jsx("td",{children:"0 Minutes"},d))]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Distance"}),s==null?void 0:s.map((a,d)=>e.jsx("td",{children:"0 Km"},d))]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Next Slot"}),s==null?void 0:s.map((a,d)=>e.jsx("td",{children:"N/A"},d))]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Instant Consult"}),s==null?void 0:s.map((a,d)=>e.jsx("td",{children:"N/A"},d))]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Collection Type"}),s==null?void 0:s.map((a,d)=>{var b;return e.jsx("td",{children:((b=a==null?void 0:a.visit_type)==null?void 0:b.toUpperCase())||"N/A"},d)})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Parameters"}),s==null?void 0:s.map((a,d)=>e.jsxs("td",{children:[a==null?void 0:a.matching_tests," Parameters"]},d))]}),e.jsxs("tr",{children:[e.jsx("td",{}),s==null?void 0:s.map((a,d)=>e.jsx("td",{children:e.jsx("button",{className:"btn similar-package-add-btn",onClick:()=>{m==="test"?x.push(`/labTestDetils/${a==null?void 0:a.service_code}`):m==="package"&&x.push(`/labPackageDetils/${a==null?void 0:a.service_code}`)},children:"Add"})},d))]}),(l==null?void 0:l.matching_tests)>0&&e.jsx("tr",{children:e.jsx("td",{colSpan:(s==null?void 0:s.length)+1,children:e.jsx(Ee,{className:"tests-accordion",children:e.jsxs(Ee.Item,{eventKey:"0",children:[e.jsx(Ee.Header,{children:"Tests"}),e.jsx(Ee.Body,{children:e.jsxs(lt,{className:"tests-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Test Name"}),s==null?void 0:s.map((a,d)=>e.jsx("th",{children:a==null?void 0:a.service_name},d))]})}),e.jsx("tbody",{children:p==null?void 0:p.map(a=>e.jsxs("tr",{children:[e.jsx("td",{children:a==null?void 0:a.service_name}),s==null?void 0:s.map((d,b)=>e.jsx("td",{children:N(a==null?void 0:a.service_code,d==null?void 0:d.tests)?e.jsx(Ht,{className:"check-icon"}):e.jsx($t,{className:"cross-icon"})},b))]},a==null?void 0:a.service_code))})]})})]})})})})]})]})]})})},Fe=[{name:"Morning"},{name:"Afternoon"},{name:"Evening"}],He=[{name:"Male Radiologist"},{name:"Female Radiologist"}],Ii=[{date:"Sat, Nov 1",price:"₹100"},{date:"Sat, Nov 2",price:"₹200"},{date:"Sat, Nov 3",price:"₹300"},{date:"Sat, Nov 4",price:"₹400"},{date:"Sat, Nov 30",price:"₹500"},{date:"Sat, Nov 5",price:"₹600"}],Li=({discount:i})=>e.jsxs("div",{className:"bannerWrapper",children:[e.jsxs("div",{className:"rectangle",children:[i,"% Save"]}),e.jsx("div",{className:"triangle"})]}),qi=i=>{var Ue,Xe,Ye,qe,Qe,Ze;const l=ht(),m=(Ue=i==null?void 0:i.location)==null?void 0:Ue.state,[x,s]=o.useState([0]),[p,N]=o.useState([]),f=Wt(),{scanDetails:j}=Se(n=>n.ctmri),[H,a]=o.useState(!1),[d,b]=o.useState(!1),[P,L]=o.useState(!1),[ee,B]=o.useState(!1),[te,ie]=o.useState(""),[ne,O]=o.useState(!1),[pe,X]=o.useState(!1),{user:U,userCity:Y,subDomainDetails:me}=Se(n=>n.auth);console.log("subDomainDetails",i);const{healthPackagesList:$,allTestsList:ae,allPackagesList:oe}=Se(n=>n.labtest),{selectedCurrentAddress:g}=Se(n=>n.profile),[K,W]=o.useState(null),[q,Q]=o.useState({});o.useEffect(()=>{var c,y,v;let n=((c=j==null?void 0:j.test)==null?void 0:c.category_ids)||((y=j==null?void 0:j.package)==null?void 0:y.category_ids);if(console.log("category_ids: ",n),n&&n.length>0&&s(n),h){const t=p;console.log("currPackage : ",t);const E={service_code:t==null?void 0:t.service_code,service_name:t==null?void 0:t.service_name,description:t==null?void 0:t.description,preperation:t==null?void 0:t.preperation,search_keys:t==null?void 0:t.search_keys,sort:t==null?void 0:t.sort,is_corporate:t==null?void 0:t.is_corporate,image:t==null?void 0:t.image,type:t==null?void 0:t.type,visit_type:t==null?void 0:t.visit_type,fasting:t==null?void 0:t.fasting,category_ids:t==null?void 0:t.category_ids,price:t==null?void 0:t.price,tests:t==null?void 0:t.tests,matching_tests:((v=t==null?void 0:t.tests)==null?void 0:v.length)||0};Q(E)}else if(C){const t=p;console.log("currTest : ",t);const E={service_code:t==null?void 0:t.service_code,service_name:t==null?void 0:t.service_name,description:t==null?void 0:t.description,preperation:t==null?void 0:t.preperation,search_keys:t==null?void 0:t.search_keys,sort:t==null?void 0:t.sort,is_corporate:t==null?void 0:t.is_corporate,image:t==null?void 0:t.image,type:t==null?void 0:t.type,visit_type:t==null?void 0:t.visit_type,fasting:t==null?void 0:t.fasting,category_ids:t==null?void 0:t.category_ids,price:t==null?void 0:t.price,tests:[],matching_tests:0};Q(E)}},[p]),o.useEffect(()=>{console.log("categoryId : ",x)},[x]),o.useEffect(()=>{var c;let n=(c=i==null?void 0:i.location)==null?void 0:c.pathname;n=n.split("/")[2],n&&W(n)},[i]),o.useEffect(()=>{var c;const n=(c=$==null?void 0:$.packages)==null?void 0:c.find(y=>(y==null?void 0:y.service_code)===K);console.log("foundPackage : ",n),ie(n)},[K,$]),(Ye=(Xe=i==null?void 0:i.location)==null?void 0:Xe.pathname)!=null&&Ye.includes("labPackageDetils");const{slots:ge,timeSlotsObj:z,slotTabList:A,doctorDetails:fe,hospitalDetails:F,BookingArray:Z,selectedProfileIds:se,payloadFromMyPackage:ue}=Se(n=>n.bookingReview),{labTestServiceCode:C,labTestPackageServiceCode:h,scanId:S}=(qe=i.match)==null?void 0:qe.params;console.log("scanDetails",j,h),console.log("BookingArray scan detaol",Z),console.log("hospitalDetails scan detaol",F);const[T,k]=o.useState("center"),[G,J]=o.useState("asc"),[re,Ie]=o.useState(10),be=async(n,c=re,y=G,v=T)=>{var t,E;try{if(!n)return;const D={package_id:n,latitude:(g==null?void 0:g.latitude)||null,longitude:(g==null?void 0:g.longitude)||null,distancewithin:c,sorting:y,collection_type:v},w=await f(ai(D));if(w!=null&&w.error){Ce.error(w.error.message||"Unknown error occurred");return}console.log("Package details retrieved:",w),(t=w==null?void 0:w.payload)!=null&&t.data&&N((E=w==null?void 0:w.payload)==null?void 0:E.data)}catch(D){console.error("Error fetching package details:",D),Ce.error("Failed to fetch package details")}},R=async(n,c=re,y=G)=>{var v,t;try{if(!n)return;const E={test_id:n,latitude:(g==null?void 0:g.latitude)||null,longitude:(g==null?void 0:g.longitude)||null,distancewithin:c,sorting:y},D=await f(oi(E));if(D!=null&&D.error){Ce.error(D.error.message||"Unknown error occurred");return}console.log("Test details retrieved:",D),(v=D==null?void 0:D.payload)!=null&&v.data&&N((t=D==null?void 0:D.payload)==null?void 0:t.data)}catch(E){console.error("Error fetching test details:",E),Ce.error("Failed to fetch test details")}};o.useEffect(()=>{(async()=>{B(!0);try{h?be(h):C?R(C):S&&(console.log("scanId : ",S),await ke(),R(S))}catch(c){console.error("Error fetching scan details:",c)}finally{B(!1)}})()},[h,C,S,g]);const ke=async()=>{B(!0),await f(si({service_code:C||S,city:(Y==null?void 0:Y.id)??""})),B(!1)},[$e,Le]=o.useState(!1),[_,I]=o.useState(!1),le=()=>{l.goBack()},ce=async(n,c,y=!1)=>{c==null||c.id;const v=window.location.pathname;if(console.log("pathName : ",v),console.log("obj : ",c),console.log("scanData : ",p),!(U!=null&&U.id))f(ii(!0));else if(v.includes("/radiology/scan-details/")){const t=p,E={...t,vendors:[],tests:[]};console.log("ctmri scanId : ",S),console.log("ctmri testD : ",t),console.log("ctmri obj : ",c),await f(rt({doctorDetails:{...E,labtestType:""},hospitalDetails:c,categoryType:"ctmri",slot1:{},slot2:{}})),l.push("/ctmri/bookingReview")}else if(v.includes("/labTestDetils/"))console.log("found"),await f(ni({selectedTest:{...p},selectedPackage:{...p}})),l.push(`/labtest/packages/${c==null?void 0:c.id}`);else if(v.includes("/labPackageDetils/")&&p&&p!=null&&p.service_name){let t=[],E={...p,labtestType:"labpackage"};t.push(E),await f(rt({doctorDetails:{...{tests:t}},hospitalDetails:c,categoryType:"labtest",expressBook:y,slot1:{},slot2:{}})),l.push("/labtest/bookingReview")}};console.log("scandata : ",p);const ve=(Qe=i==null?void 0:i.match)==null?void 0:Qe.params,Ne=window.location.pathname===`/labPackageDetils/${ve.scanId}`,We=window.location.pathname===`/radiology/scan-details/${ve.scanId}`;p==null||p.vendors,console.log(We,"isCtmri010"),console.log(Ne,"isLabTestDetils");const Ae=window.location.href;((n,c)=>{const y=[];for(let v=0;v<n.length;v+=c)y.push(n.slice(v,v+c));return y})((p==null?void 0:p.tests)||[],8),console.log(p,"scanData");const[_e,gt]=o.useState([]),[ye,ut]=o.useState([]);o.useEffect(()=>{console.log("similarPackages : ",ye)},[ye]);const bt=async()=>{if(console.log("labTestServiceCode : ",C),!C)return;const n=await f(li(C));console.log("res : ",n),n!=null&&n.payload&&gt(n==null?void 0:n.payload)},vt=async()=>{if(console.log("labTestPackageServiceCode : ",h),!h)return;const n=await f(ri(h));console.log("res : ",n),n!=null&&n.payload&&ut(n==null?void 0:n.payload)},yt=async()=>{console.log("getAllSimilarItems"),h&&vt(),C&&bt()},[wt,jt]=o.useState([]),Ct=async n=>{var y,v;const c=await f(qt(n));console.log("getAllPackageVendors : ",c),jt((v=(y=c==null?void 0:c.payload)==null?void 0:y.data)==null?void 0:v.data)},Ge=async n=>{};o.useEffect(()=>{h?Ct(h):(C||S)&&Ge()},[C,h,S]),o.useEffect(()=>{yt()},[C,h,f,x]);const kt=async n=>{console.log("value : ",n),J(n),h?be(h,re,n):C?R(C,re,n):S&&(await ke(),R(S,re,n))},Nt=async n=>{const c=parseInt(n||0);console.log("value : ",c),Ie(c),h?be(h,c,G):C?R(C,c,G):S&&(await ke(),R(S,c,G))},St=async n=>{const c=n?"center":"home";k(c),h&&be(h,re,G,c),console.log("Selected toggle value:",c)};o.useEffect(()=>{},[]);const _t=({labName:n,price:c,originalPrice:y,discount:v,address:t,nextSlot:E,logo:D,handleAddToCart:w,item:u,from:Je="org"})=>{var et,tt;const[we,Re]=o.useState(""),[je,Oe]=o.useState(!1),[Ve,Et]=o.useState(!0);console.log("DiagnosticCard item : ",u);let r;h?r=wt.find(M=>{var de;return(u==null?void 0:u.id)===((de=M==null?void 0:M.vendor)==null?void 0:de.id)}):(C||S)&&(r=u),console.log("matchedAvailableVendor : ",r);const Mt=M=>{const de=M.target.value;de.length<=6&&Re(de)},Tt=async()=>{console.log("Entered Pin Code:",we);const M=S||We||h||C;console.log("handleCheck id : ",M);const de=await zt(we,M);console.log("res : ",de),Oe(de),Et(!1)};return e.jsxs("div",{className:"diagnostic-card",children:[e.jsx(Li,{discount:v}),e.jsxs("div",{className:"card-content",children:[e.jsx("div",{className:"card-logo",children:e.jsx("img",{src:u!=null&&u.image?u==null?void 0:u.image:D,alt:"Lab Logo"})}),e.jsxs("div",{className:"card-details",children:[e.jsx("h3",{children:n}),e.jsx("div",{className:"card-prices",children:e.jsxs("span",{className:"current-price",children:["₹",(et=u==null?void 0:u.price)!=null&&et.discounted_price?(tt=u==null?void 0:u.price)==null?void 0:tt.discounted_price:c]})}),e.jsx("div",{className:"card-info",children:e.jsxs("div",{className:"info-item-address-sec",children:[e.jsx("span",{children:e.jsx(Jt,{})}),(u==null?void 0:u.distance_km)&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"km_distance_sec",children:[Math.round(u==null?void 0:u.distance_km)," Km away"]}),",  "]}),e.jsx("span",{className:"addres-sec-all-content",children:u==null?void 0:u.address})]})}),e.jsxs("div",{className:"pin-code-checker",children:[h&&e.jsxs(e.Fragment,{children:[e.jsx(Vt,{type:"number",placeholder:"Enter Pin Code",value:we,onChange:Mt,style:{width:"150px",marginRight:"10px"}}),e.jsx(ei,{type:"primary",onClick:Tt,children:"Check"})]}),e.jsxs("button",{className:"add-btn-package-sec-code",onClick:M=>w(M,u,je),children:["Add",e.jsx(ti,{})]})]}),e.jsx("div",{className:"bottomWrapper",children:u.available_in_90==="true"&&e.jsxs("div",{className:"availableIn90",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733316202523.png",alt:""}),"in ",e.jsx("span",{children:"90 Minutes"})]})})]})]}),e.jsxs("div",{className:"time-slots-container",children:[(r==null?void 0:r.mor_start_Time)&&(r==null?void 0:r.mor_end_Time)&&e.jsxs("div",{className:"slot-row",children:[e.jsxs("div",{className:"time-section time-section1",children:[e.jsxs("span",{children:[" ",r==null?void 0:r.mor_start_Time]})," ","to"]}),e.jsx("div",{className:"time-section",children:r==null?void 0:r.mor_end_Time}),e.jsx("div",{children:"->"}),e.jsxs("div",{className:"otherInfo",children:[e.jsxs("div",{className:"price-section",children:["₹ ",r==null?void 0:r.mor_selling_price]}),e.jsxs("div",{className:"gender-section",children:[(r==null?void 0:r.mor_female_available)==="true"&&e.jsx(Be,{size:32,title:"Female Available"}),(r==null?void 0:r.mor_male_available)==="true"&&e.jsx(Ke,{size:32,title:"Male Available"})]}),e.jsx("div",{className:"bottomWrapper",children:e.jsx("button",{onClick:M=>w(M,u,je),children:"BooK Now"})})]})]}),(r==null?void 0:r.aft_start_Time)&&(r==null?void 0:r.aft_end_Time)&&e.jsxs("div",{className:"slot-row",children:[e.jsxs("div",{className:"time-section time-section1",children:[e.jsx("span",{children:r==null?void 0:r.aft_start_Time})," "," ","to"]}),e.jsx("div",{className:"time-section",children:e.jsx("span",{children:r==null?void 0:r.aft_end_Time})}),e.jsx("div",{children:"->"}),e.jsxs("div",{className:"otherInfo",children:[e.jsxs("div",{className:"price-section",children:["₹"," ",e.jsx("span",{children:r==null?void 0:r.aft_selling_price})]}),e.jsxs("div",{className:"gender-section",children:[(r==null?void 0:r.aft_female_available)==="true"&&e.jsx(Be,{size:32,title:"Female Available"}),(r==null?void 0:r.aft_male_available)==="true"&&e.jsx(Ke,{size:32,title:"Male Available"})]})]}),e.jsx("div",{className:"bottomWrapper",children:e.jsx("button",{onClick:M=>w(M,u,je),children:"BooK Now"})})]}),(r==null?void 0:r.eve_start_Time)&&(r==null?void 0:r.eve_end_Time)&&e.jsxs("div",{className:"slot-row",children:[e.jsxs("div",{className:"time-section time-section1",children:[e.jsxs("span",{children:[" ",r==null?void 0:r.eve_start_Time]}),"to"]}),e.jsx("div",{className:"time-section",children:r==null?void 0:r.eve_end_Time}),e.jsx("div",{children:"->"}),e.jsxs("div",{className:"otherInfo",children:[e.jsxs("div",{className:"price-section",children:["₹"," "," ",r==null?void 0:r.eve_selling_price]}),e.jsxs("div",{className:"gender-section",children:[(r==null?void 0:r.eve_female_available)==="true"&&e.jsx(Be,{size:32,title:"Female Available"}),(r==null?void 0:r.eve_male_available)==="true"&&e.jsx(Ke,{size:32,title:"Male Available"})]})]}),e.jsx("div",{className:"bottomWrapper",children:e.jsx("button",{onClick:M=>w(M,u,je),children:"BooK Now"})})]})]})]})},Dt=({scanDetails:n})=>{const{service_name:c="",description:y="",preperation:v="",price:t={},fasting:E="",visit_type:D="",tests:w,vendors:u=[]}=n||{};console.log("scanDetails : ",n);const[Je,we]=o.useState(!1),Re=()=>{we(!0)},je=()=>{we(!1)};return console.log(m,"sectionName"),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"checkup-card",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("h1",{className:"checkup-title",children:c}),e.jsx("button",{onClick:()=>{L(!0)},className:"btn share-btn-icon",title:"Click to Share",children:e.jsx(bi,{})})]}),e.jsx("p",{dangerouslySetInnerHTML:{__html:y}}),(w==null?void 0:w.length)>0&&e.jsxs("button",{className:"checkup-button",onClick:Re,children:["+ ",(w==null?void 0:w.length)||1," Tests"]}),e.jsxs("div",{className:"checkup-details",children:[e.jsx("div",{className:"price-container",children:e.jsxs("div",{className:"price-info",children:[e.jsxs("span",{className:"original-price h",children:["₹",t==null?void 0:t.actual_cost]}),e.jsxs("span",{className:"discounted-price",children:["₹",t==null?void 0:t.discounted_price]}),e.jsxs("span",{className:"discount-badge",children:[t==null?void 0:t.discount_percentage,"% Off"]}),e.jsx("div",{className:"divider"})]})}),e.jsxs("p",{className:"prep",children:[e.jsx("strong",{children:"Preparation:"}),e.jsx("span",{dangerouslySetInnerHTML:{__html:v}})]}),m==="ctmri"?null:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Fasting Required:"})," ",E?"Yes":"No"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Visit Type:"})," ",Qt(D||"")]})]})]}),m==="ctmri"?e.jsx(e.Fragment,{}):e.jsx("div",{className:"checkup-video",children:e.jsx("video",{src:E?"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/fasting.mp4":"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/nonfasting.mp4",autoPlay:!0,loop:!0,muted:!0,controls:!1})})]}),e.jsx(Ni,{title:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("img",{src:Zt,alt:"Test Tubes",style:{width:"24px",height:"24px"}}),e.jsxs("span",{children:["Packages Includes ",w==null?void 0:w.length," Tests"]})]}),placement:"right",onClose:je,visible:Je,width:400,children:e.jsx("div",{className:"drawer",children:e.jsx("ul",{style:{paddingLeft:"20px",lineHeight:"1.8"},children:w==null?void 0:w.map((Oe,Ve)=>e.jsx("li",{style:{listStyleType:"disc"},children:Oe.service_name},Ve))})})})]})},zt=async(n,c)=>{var t;let y={};y.vendorId=c,y.data={},y.data.zip=n,h?y.data.package_code=h:y.data.test_code=C;const v=await f(ci(y));return console.log("response Expresss bOOk",v),(t=v==null?void 0:v.payload)!=null&&t.success?(Ce.success("The Express Book is available for the given pincode!"),!0):(Ce.error("Sorry, Express Book is not available for the given pincode!"),!1)};return e.jsxs(_i,{children:[e.jsx(At,{sectionName:"labtest",show:pe,onHide:()=>{X(!1)}}),e.jsxs("div",{children:[e.jsx(di,{show:P,url:Ae,title:"Share on",handleClose:()=>{L(!1)},onCopyClick:()=>{navigator.clipboard.writeText(Ae)}}),ee&&e.jsx(Gt,{}),e.jsxs(Ut,{fluid:!0,className:"scanDetailsContainer",children:[e.jsxs("p",{className:" text-xl d-flex align-items-center cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 ",onClick:()=>le(),children:[e.jsx("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z",fill:"#444444"})})," "," ","  Back"]}),e.jsxs(De,{className:"mainWrapperContainer",children:[e.jsx(ze,{children:e.jsx(Dt,{scanDetails:S?j==null?void 0:j.test:p})}),e.jsxs(ze,{className:"rightContainer",children:[e.jsxs("div",{className:"headWrapper",children:[h&&e.jsxs("div",{className:"toggle-filter",children:[e.jsx("span",{children:"Home Collection"}),e.jsx(Xt,{defaultChecked:T==="center",onChange:St}),e.jsx("span",{children:"Center"})]}),e.jsxs("div",{className:"btn-filter-module-div",children:[e.jsx("button",{className:"btn my-prefrance-btn",onClick:()=>{X(!0)},children:"My Preference"}),(g==null?void 0:g.latitude)&&(g==null?void 0:g.longitude)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"selector-filter-sub-module-div",children:e.jsx(ot,{showSearch:!0,placeholder:"Sort By Price",filterOption:(n,c)=>((c==null?void 0:c.label)??"").toLowerCase().includes(n.toLowerCase()),defaultValue:"asc",onChange:kt,style:{borderRadius:"10px",width:"200px"},options:[{value:"desc",label:"Price: High to Low"},{value:"asc",label:"Price: Low to High"}]})}),e.jsx("div",{className:"selector-filter-sub-module-div",children:e.jsx(ot,{showSearch:!0,placeholder:"Sort By Distance",filterOption:(n,c)=>((c==null?void 0:c.label)??"").toLowerCase().includes(n.toLowerCase()),defaultValue:10,onChange:Nt,style:{borderRadius:"10px",width:"200px"},options:[{value:5,label:"5 Km"},{value:10,label:"10 Km"},{value:20,label:"20 Km"},{value:50,label:"50 Km"},{value:100,label:"100 Km"},{value:500,label:"500 Km"},{value:700,label:"700 Km"},{value:1e3,label:"1000 Km"},{value:5e3,label:"5000 Km"}]})})]})]})]}),g!=null&&g.latitude&&(g!=null&&g.longitude)?e.jsx(ze,{className:"availableCentersRow",children:(Ze=p==null?void 0:p.vendors)==null?void 0:Ze.map((n,c)=>{var y,v,t;return console.log("item : ",n),e.jsx(_t,{labName:st(n==null?void 0:n.name,50),price:(y=n==null?void 0:n.price)==null?void 0:y.discounted_price,originalPrice:(v=n==null?void 0:n.price)==null?void 0:v.actual_cost,discount:(t=n==null?void 0:n.price)==null?void 0:t.discount_percentage,address:st(n==null?void 0:n.address,20),nextSlot:"Today, 11:00 AM",logo:Si,handleAddToCart:ce,item:n,from:"availableVendors"})})}):e.jsx("button",{className:"btn my-prefrance-btn m-auto",onClick:()=>{f(Yt(!0))},children:"Please Select a Service Location"})]})]}),e.jsx(De,{children:e.jsx(ze,{children:m==="ctmri"?e.jsx(e.Fragment,{}):e.jsxs("div",{className:"similarItems",children:[h&&e.jsx(e.Fragment,{children:(ye==null?void 0:ye.length)>0?e.jsx(ft,{packages:ye,currentItem:q,type:"package"}):e.jsx("p",{children:"No Similar Packages Found"})}),C&&e.jsx(e.Fragment,{children:(_e==null?void 0:_e.length)>0?e.jsx(ft,{packages:_e,currentItem:q,type:"test"}):e.jsx("p",{children:"No Similar Tests Found"})})]})})}),e.jsx(De,{className:"marginclass"}),e.jsx(De,{className:"searchRow mt-6"}),ne&&e.jsxs("div",{className:"timeslot-graph-div",children:[e.jsx("p",{children:"Time Based Price"}),e.jsxs("div",{className:"d-flex graph-main-div",children:[e.jsx("div",{className:"left-slot-filter",children:e.jsxs("div",{className:"left-slot-filter-card",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsx("p",{children:"Filters"}),e.jsx("p",{children:"CLEAR ALL"})]}),e.jsx("div",{className:"filter-checkbox",children:Fe==null?void 0:Fe.map(n=>e.jsxs("div",{children:[e.jsx("input",{title:"Checkbox",type:"checkbox",className:"me-3"}),n==null?void 0:n.name]}))}),e.jsx("div",{className:"d-flex justify-content-between align-items-center mt-3",children:e.jsx("p",{children:"Radiologist"})}),e.jsx("div",{className:"filter-checkbox ",children:He==null?void 0:He.map(n=>e.jsxs("div",{children:[e.jsx("input",{title:"Checkbox",type:"checkbox",className:"me-3"}),n==null?void 0:n.name]}))})]})}),e.jsxs("div",{className:"right-slot-filter",children:[e.jsxs("div",{className:"slot-carousel-container",children:[e.jsx("button",{className:"arrow-btn left",children:"<"}),e.jsx("div",{className:"vertical-line"}),Ii.map((n,c)=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"carousel",children:e.jsxs("div",{className:"carousel-item",children:[e.jsx("span",{className:"item-date",children:n.date}),e.jsx("span",{className:"item-price",children:n.price})]},c)}),e.jsx("div",{className:"vertical-line"})]})),e.jsx("button",{className:"arrow-btn right",children:">"})]}),e.jsx("div",{className:"graph-container",children:e.jsx(Mi,{})})]})]})]})]})]})]})};export{qi as default};
