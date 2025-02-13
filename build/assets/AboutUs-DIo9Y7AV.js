import{gx as ee,gy as ne,gz as te,r as a,gA as se,gB as oe,gC as ie,gD as P,gE as ae,gF as T,gG as re,gH as ge,gI as pe,e3 as le,bd as y,j as n,K as B,g6 as V,gJ as D,gK as q,be as ce,gL as de,ba as F,gM as Y,gN as me,gO as he,gP as ue,ao as fe,d as I,a as xe}from"./index-CitTC1Lo.js";import{u as ve}from"./useTimeout-tpYfgdNW.js";const Ae=()=>{};function we(e,s,{disabled:t,clickTrigger:o}={}){const i=s||Ae;ee(e,i,{disabled:t,clickTrigger:o});const g=ne(p=>{te(p)&&i(p)});a.useEffect(()=>{if(t||e==null)return;const p=se(oe(e));let f=(p.defaultView||window).event;const d=ie(p,"keyup",h=>{if(h===f){f=void 0;return}g(h)});return()=>{d()}},[e,t,g])}const Z=a.forwardRef((e,s)=>{const{flip:t,offset:o,placement:i,containerPadding:g,popperConfig:p={},transition:f,runTransition:d}=e,[h,A]=P(),[w,v]=P(),u=ae(A,s),c=T(e.container),m=T(e.target),[r,x]=a.useState(!e.show),l=re(m,h,ge({placement:i,enableEvents:!!e.show,containerPadding:g||5,flip:t,offset:o,arrowElement:w,popperConfig:p}));e.show&&r&&x(!1);const N=(...H)=>{x(!0),e.onExited&&e.onExited(...H)},j=e.show||!r;if(we(h,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!j)return null;const{onExit:R,onExiting:O,onEnter:E,onEntering:C,onEntered:J}=e;let z=e.children(Object.assign({},l.attributes.popper,{style:l.styles.popper,ref:u}),{popper:l,placement:i,show:!!e.show,arrowProps:Object.assign({},l.attributes.arrow,{style:l.styles.arrow,ref:v})});return z=pe(f,d,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:z,onExit:R,onExiting:O,onExited:N,onEnter:E,onEntering:C,onEntered:J}),c?le.createPortal(z,c):null});Z.displayName="Overlay";const K=a.forwardRef(({className:e,bsPrefix:s,as:t="div",...o},i)=>(s=y(s,"popover-header"),n.jsx(t,{ref:i,className:B(e,s),...o})));K.displayName="PopoverHeader";const U=a.forwardRef(({className:e,bsPrefix:s,as:t="div",...o},i)=>(s=y(s,"popover-body"),n.jsx(t,{ref:i,className:B(e,s),...o})));U.displayName="PopoverBody";function L(e,s){let t=e;return e==="left"?t=s?"end":"start":e==="right"&&(t=s?"start":"end"),t}function W(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const be=a.forwardRef(({bsPrefix:e,placement:s="right",className:t,style:o,children:i,body:g,arrowProps:p,hasDoneInitialMeasure:f,popper:d,show:h,...A},w)=>{const v=y(e,"popover"),u=V(),[c]=(s==null?void 0:s.split("-"))||[],m=L(c,u);let r=o;return h&&!f&&(r={...o,...W(d==null?void 0:d.strategy)}),n.jsxs("div",{ref:w,role:"tooltip",style:r,"x-placement":c,className:B(t,v,c&&`bs-popover-${m}`),...A,children:[n.jsx("div",{className:"popover-arrow",...p}),g?n.jsx(U,{children:i}):i]})}),X=Object.assign(be,{Header:K,Body:U,POPPER_OFFSET:[0,8]}),Q=a.forwardRef(({bsPrefix:e,placement:s="right",className:t,style:o,children:i,arrowProps:g,hasDoneInitialMeasure:p,popper:f,show:d,...h},A)=>{e=y(e,"tooltip");const w=V(),[v]=(s==null?void 0:s.split("-"))||[],u=L(v,w);let c=o;return d&&!p&&(c={...o,...W(f==null?void 0:f.strategy)}),n.jsxs("div",{ref:A,style:c,role:"tooltip","x-placement":v,className:B(t,e,`bs-tooltip-${u}`),...h,children:[n.jsx("div",{className:"tooltip-arrow",...g}),n.jsx("div",{className:`${e}-inner`,children:i})]})});Q.displayName="Tooltip";const je=Object.assign(Q,{TOOLTIP_OFFSET:[0,6]});function Ee(e){const s=a.useRef(null),t=y(void 0,"popover"),o=y(void 0,"tooltip"),i=a.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(s.current){if(D(s.current,t))return X.POPPER_OFFSET;if(D(s.current,o))return je.TOOLTIP_OFFSET}return[0,0]}}}),[e,t,o]);return[s,[i]]}function ke(e,s){const{ref:t}=e,{ref:o}=s;e.ref=t.__wrapped||(t.__wrapped=i=>t(Y(i))),s.ref=o.__wrapped||(o.__wrapped=i=>o(Y(i)))}const _=a.forwardRef(({children:e,transition:s=F,popperConfig:t={},rootClose:o=!1,placement:i="top",show:g=!1,...p},f)=>{const d=a.useRef({}),[h,A]=a.useState(null),[w,v]=Ee(p.offset),u=q(f,w),c=s===!0?F:s||void 0,m=ce(r=>{A(r),t==null||t.onFirstUpdate==null||t.onFirstUpdate(r)});return de(()=>{h&&p.target&&(d.current.scheduleUpdate==null||d.current.scheduleUpdate())},[h,p.target]),a.useEffect(()=>{g||A(null)},[g]),n.jsx(Z,{...p,ref:u,popperConfig:{...t,modifiers:v.concat(t.modifiers||[]),onFirstUpdate:m},transition:c,rootClose:o,placement:i,show:g,children:(r,{arrowProps:x,popper:l,show:N})=>{var j;ke(r,x);const R=l==null?void 0:l.placement,O=Object.assign(d.current,{state:l==null?void 0:l.state,scheduleUpdate:l==null?void 0:l.update,placement:R,outOfBoundaries:(l==null||(j=l.state)==null||(j=j.modifiersData.hide)==null?void 0:j.isReferenceHidden)||!1,strategy:t.strategy}),E=!!h;return typeof e=="function"?e({...r,placement:R,show:N,...!s&&N&&{className:"show"},popper:O,arrowProps:x,hasDoneInitialMeasure:E}):a.cloneElement(e,{...r,placement:R,arrowProps:x,popper:O,hasDoneInitialMeasure:E,className:B(e.props.className,!s&&N&&"show"),style:{...e.props.style,...r.style}})}})});_.displayName="Overlay";function Ne(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function G(e,s,t){const[o]=s,i=o.currentTarget,g=o.relatedTarget||o.nativeEvent[t];(!g||g!==i)&&!ue(i,g)&&e(...s)}fe.oneOf(["click","hover","focus"]);const Oe=({trigger:e=["hover","focus"],overlay:s,children:t,popperConfig:o={},show:i,defaultShow:g=!1,onToggle:p,delay:f,placement:d,flip:h=d&&d.indexOf("auto")!==-1,...A})=>{const w=a.useRef(null),v=q(w,me(t)),u=ve(),c=a.useRef(""),[m,r]=he(i,g,p),x=Ne(f),{onFocus:l,onBlur:N,onClick:j}=typeof t!="function"?a.Children.only(t).props:{},R=b=>{v(Y(b))},O=a.useCallback(()=>{if(u.clear(),c.current="show",!x.show){r(!0);return}u.set(()=>{c.current==="show"&&r(!0)},x.show)},[x.show,r,u]),E=a.useCallback(()=>{if(u.clear(),c.current="hide",!x.hide){r(!1);return}u.set(()=>{c.current==="hide"&&r(!1)},x.hide)},[x.hide,r,u]),C=a.useCallback((...b)=>{O(),l==null||l(...b)},[O,l]),J=a.useCallback((...b)=>{E(),N==null||N(...b)},[E,N]),z=a.useCallback((...b)=>{r(!m),j==null||j(...b)},[j,r,m]),H=a.useCallback((...b)=>{G(O,b,"fromElement")},[O]),$=a.useCallback((...b)=>{G(E,b,"toElement")},[E]),M=e==null?[]:[].concat(e),S={ref:R};return M.indexOf("click")!==-1&&(S.onClick=z),M.indexOf("focus")!==-1&&(S.onFocus=C,S.onBlur=J),M.indexOf("hover")!==-1&&(S.onMouseOver=H,S.onMouseOut=$),n.jsxs(n.Fragment,{children:[typeof t=="function"?t(S):a.cloneElement(t,S),n.jsx(_,{...A,show:m,onHide:E,flip:h,placement:d,popperConfig:o,target:w.current,children:s})]})},Re=I.div`
  font-family: Poppins;
  width: 100%;
  .heroSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(to right, #eef0ff, #6774e8);
  }
  .heroText {
    height: 100%;
  }

  .heading {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .rapha-cure-container {
    text-align: left;
    /* background-color: #f7f7f7; */
    padding: 40px;
    border-radius: 8px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #9747ff;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
    color: #333;
    /* margin-bottom: 1rem; */
  }

  .description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .description strong {
    /* color: #9747ff; */
  }

  .explore-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #9747ff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
  }

  .explore-button:hover {
    background-color: #6d28d9;
  }
  .heroImg {
    position: relative;
    padding: 2rem;
    padding-bottom: 0;
  }

  .heroImg img {
    width: 100%;
    height: auto;
    /* scale: 0.8; */
    position: relative;
    z-index: 2;
    border-radius: 0 2rem 0 0;
  }

  .imgWrapper {
    position: relative;
    width: 100%;
  }

  .imgWrapper > div {
    position: absolute;
    width: 50%;
    height: 50%;
  }

  .bottomLeft {
    bottom: 0;
    left: 0;
    background-color: #7d9aff;
  }

  .topRight {
    top: 0;
    right: 0;
    background-color: #7d9aff;
    border-radius: 0 2rem 0 0;
  }

  @media screen and (max-width: 700px) {
    .heroSection {
      flex-direction: column-reverse;
    }
    .heading {
      flex-direction: column;
    }
    h3,
    h2 {
      text-align: center;
    }
  }
`,Se="/assets/AboutUsBanner-CoRzv5Xl.jpeg",ye=I.div`
  padding: 1rem;
  overflow: hidden;
  .team-member {
    position: relative;
    margin: 10px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.5s ease;
    cursor: pointer;
  }

  .team-member:hover {
    transform: scale(1.1);
  }

  .team-member-image {
    max-width: 100%;
    width: inherit;
    max-height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: opacity 0.3s ease;
  }

  .team-member-name {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 12px;
  }

  .team {
    text-align: center;
    padding: 20px;
  }

  .team-title {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
`,ze="/assets/you-DrX4pBqp.jpeg",Be=I.div`
  .profile-picture {
    position: relative;
    width: 100px;
    height: 100px;
    transition: transform 0.5s ease;
    cursor: pointer;
  }

  .profile-picture:hover {
    transform: scale(1.1);
  }

  .profile-picture__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
  }

  .profile-picture__image.clicked {
    filter: none;
  }

  .profile-picture__hover-zone {
    position: absolute;
    z-index: 1;
    scale: 3;
  }

  .profile-picture__hover-zone--top {
    top: 0;
    left: 25%;
    width: 50%;
    height: 25%;
  }

  .profile-picture__hover-zone--top-right {
    top: 0;
    right: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--right {
    top: 25%;
    right: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--bottom-right {
    bottom: 0;
    right: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--bottom {
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 25%;
  }

  .profile-picture__hover-zone--bottom-left {
    bottom: 0;
    left: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--left {
    top: 25%;
    left: 0;
    width: 25%;
    height: 50%;
  }

  .profile-picture__hover-zone--top-left {
    top: 0;
    left: 0;
    width: 25%;
    height: 50%;
  }
`,Ie=({defaultImage:e,topImage:s,rightImage:t,bottomImage:o,leftImage:i,topLeftImage:g,bottomLeftImage:p,bottomRightImage:f,topRightImage:d,clickImage:h,altText:A="Profile Picture"})=>{const[w,v]=a.useState(e),[u,c]=a.useState(!1),m=l=>{c(!1),u||v(l)},r=()=>{c(!0),v(h)},x=n.jsxs(X,{id:"popover-trigger-hover-focus",title:"Popover bottom",children:[" ",A," "]});return n.jsx(Be,{children:n.jsx(Oe,{trigger:["hover","focus"],placement:"bottom",overlay:x,children:n.jsxs("div",{className:"profile-picture",onClick:r,children:[n.jsx("img",{src:w,alt:"",className:`profile-picture__image ${u?"clicked":""}`}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--top",onMouseEnter:()=>m(s)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--top-right",onMouseEnter:()=>m(d)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--right",onMouseEnter:()=>m(t)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--bottom-right",onMouseEnter:()=>m(f)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--bottom",onMouseEnter:()=>m(o)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--bottom-left",onMouseEnter:()=>m(p)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--left",onMouseEnter:()=>m(i)}),n.jsx("div",{className:"profile-picture__hover-zone profile-picture__hover-zone--top-left",onMouseEnter:()=>m(g)})]})})})},Ce=[{name:"Suresh",images:["12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png"]},{name:"Chandan",images:["24.png","25.png","26.png","27.png","28.png","29.png","30.png","31.png","32.png","33.png"]},{name:"Aswanth",images:["35.png","36.png","37.png","38.png","39.png","40.png","41.png","42.png","43.png","44.png"]},{name:"Shankar",images:["486.png","487.png","488.png","489.png","490.png","491.png","492.png","493.png","494.png","495.png"]},{name:"Mallesh",images:["57.png","58.png","59.png","60.png","61.png","62.png","63.png","64.png","65.png","66.png"]},{name:"Ankur",images:["68.png","69.png","70.png","71.png","72.png","73.png","74.png","75.png","76.png","77.png"]},{name:"Manoj",images:["79.png","80.png","81.png","82.png","83.png","84.png","85.png","86.png","87.png","88.png"]},{name:"Mallikarjun",images:["90.png","91.png","92.png","93.png","94.png","95.png","96.png","97.png","98.png","99.png"]},{name:"Dawood",images:["101.png","102.png","103.png","104.png","105.png","106.png","107.png","108.png","109.png","110.png"]},{name:"Syam",images:["112.png","113.png","114.png","115.png","116.png","117.png","118.png","119.png","120.png","121.png"]},{name:"Priyanka",images:["123.png","124.png","125.png","126.png","127.png","128.png","129.png","130.png","131.png","132.png"]},{name:"Ajmal",images:["134.png","135.png","136.png","137.png","138.png","139.png","140.png","141.png","142.png","143.png"]},{name:"Anjana",images:["155.png","156.png","157.png","158.png","159.png","160.png","161.png","162.png","163.png","164.png"]},{name:"Varalakshmi",images:["166.png","167.png","168.png","169.png","170.png","171.png","172.png","173.png","174.png","175.png"]},{name:"Maheshwar",images:["177.png","178.png","179.png","180.png","181.png","182.png","183.png","184.png","185.png","186.png"]},{name:"Naveen",images:["199.png","200.png","201.png","202.png","203.png","204.png","205.png","206.png","207.png","208.png"]},{name:"Raghu",images:["210.png","211.png","212.png","213.png","214.png","215.png","216.png","217.png","218.png","219.png"]},{name:"Zeeshan",images:["243.png","244.png","245.png","246.png","247.png","248.png","249.png","250.png","251.png","252.png"]},{name:"Vinita",images:["287.png","288.png","289.png","290.png","291.png","292.png","293.png","294.png","295.png","296.png"]},{name:"Jeya Kumar",images:["298.png","299.png","300.png","301.png","302.png","303.png","304.png","305.png","306.png","307.png"]},{name:"Ragesh",images:["309.png","310.png","311.png","312.png","313.png","314.png","315.png","316.png","317.png","318.png"]},{name:"Christy",images:["320.png","321.png","322.png","323.png","324.png","325.png","326.png","327.png","328.png","329.png"]},{name:"Bhavita",images:["331.png","332.png","333.png","334.png","335.png","336.png","337.png","338.png","339.png","340.png"]},{name:"Fathima",images:["342.png","343.png","344.png","345.png","346.png","347.png","348.png","349.png","350.png","351.png"]},{name:"Chandni",images:["353.png","354.png","355.png","356.png","357.png","358.png","359.png","360.png","361.png","362.png"]},{name:"Nicole",images:["364.png","365.png","366.png","367.png","368.png","369.png","370.png","371.png","372.png","373.png"]},{name:"Devika",images:["452.png","453.png","454.png","455.png","456.png","457.png","458.png","459.png","460.png","461.png"]},{name:"Sheetal",images:["474.png","475.png","476.png","477.png","478.png","479.png","480.png","481.png","482.png","483.png"]},{name:"Varsha",images:["497.png","498.png","499.png","500.png","501.png","502.png","503.png","504.png","505.png","506.png"]},{name:"Dileep",images:["508.png","509.png","510.png","511.png","512.png","513.png","514.png","515.png","516.png","517.png"]},{name:"Nanda Kumar",images:["519.png","520.png","521.png","522.png","523.png","524.png","525.png","526.png","527.png","528.png"]},{name:"Shebin",images:["530.png","531.png","532.png","533.png","534.png","535.png","536.png","537.png","538.png","539.png"]},{name:"Avinase",images:["541.png","542.png","543.png","544.png","545.png","546.png","547.png","548.png","549.png","550.png"]}],k=e=>`https://raphacure-public-images.s3.ap-south-1.amazonaws.com/team/${e}`,Je=()=>n.jsxs(ye,{className:"team",children:[n.jsx("h2",{className:"team-title",children:"Passionate Team"}),n.jsxs("div",{className:"team-members",children:[Ce.map((e,s)=>{try{return n.jsx(Ie,{defaultImage:k(e.images[0]),topImage:k(e.images[1]),topRightImage:k(e.images[2]),rightImage:k(e.images[3]),bottomRightImage:k(e.images[4]),bottomImage:k(e.images[5]),bottomLeftImage:k(e.images[6]),leftImage:k(e.images[7]),topLeftImage:k(e.images[8]),clickImage:k(e.images[9]),altText:e.name},s)}catch(t){return console.error(`Error rendering member ${e.name}:`,t),null}}),n.jsx("div",{className:"team-member",title:"You",children:n.jsx("img",{src:ze,alt:"You",className:"team-member-image"})})]})]}),He="/assets/abinbev-CIA6aaWG.png",Me="/assets/airbus-BWpaQQsy.png",Ye="/assets/alti-DhijhmrT.png",Ue="/assets/bosch-RP1bQh2r.png",Pe="/assets/celero2-CPf1c2Kg.png",Te="data:image/png;base64,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",De="/assets/exxon-D_Ga3Fgb.png",Fe="/assets/fisdom-BJ4_uNmY.png",Ge="/assets/hitachi-CSfcaptB.png",Ve="/assets/ice-BSSuqN4V.png",qe="data:image/png;base64,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",Ze="/assets/rbspl-BAETkWvc.png",Ke="/assets/salesforce-BSDWPyea.png",Le="/assets/star-C-M-hlo4.png",We="/assets/tally-cUV1o7n1.png",Xe=I.div`
  padding: 1rem;
  h2{
    text-align: center;
    margin: 1rem;
  }
  .image-gallery {
    display: block;
    text-align: center;
  }

  .image-item {
    /* flex: 1 1 auto; */
    max-width: 120px;
    height: auto;
    margin: 0.5rem;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
`,Qe=({images:e})=>n.jsxs(Xe,{children:[n.jsx("h3",{children:"Our Trusted Clients"}),n.jsx("div",{className:"image-gallery",children:e.map((s,t)=>n.jsx("img",{src:s,alt:`Img ${t}`,className:"image-item"},t))}),n.jsx("h2",{children:"250+ Clients"})]}),_e=I.div`
  padding: 1rem;
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Adjust the gap between cards if needed */
    justify-content: center;
    padding: 20px;
  }

  .card {
    background: linear-gradient(90deg, #e9fad3 0%, #e4e8ff 100%);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    /* height: 400px;  */
    text-align: center;
    overflow: hidden;
    transition: transform 0.2s, border 0.2s;
    border: 2px solid transparent; /* Initial transparent border */
  }

  .card:hover {
    transform: scale(1.05);
    border: 2px solid #42ff00; /* Green border on hover */
  }

  .image-container {
    width: 100%;
    height: 60%; /* Adjust the height ratio for the image container */
    overflow: hidden;
  }

  .city-image {
    width: 100%;
    height: 100%;
    object-fit: fill; /* Ensure the image covers the container */
  }

  .card-content {
    padding: 10px 20px;
  }

  .card-content h2 {
    margin: 10px 0;
    font-size: 1.5em;
  }

  .card-content p {
    color: #666;
    font-size: 1em;
  }
`,$e=()=>{const{configInfo:e}=xe(o=>o.config),[s,t]=a.useState();return a.useEffect(()=>{if(e.cities){const i=e.cities.filter(g=>g.image).slice(0,6);t(i),console.log("Selected Cities: ",i)}},[e]),n.jsxs(_e,{children:[n.jsx("h3",{children:"Our Offices"}),n.jsx("div",{className:"image-gallery",children:s==null?void 0:s.map(o=>n.jsxs("div",{className:"card",children:[n.jsx("img",{src:o.image,alt:o.name,className:"city-image"}),n.jsxs("div",{className:"card-content",children:[n.jsx("h2",{children:o.name}),n.jsx("p",{children:o.address})]})]},o.id))})]})},en=[He,Me,Ye,Ue,Pe,Te,De,Fe,Ge,Ve,qe,Ze,Ke,Le,We],sn=()=>n.jsxs(Re,{children:[n.jsxs("div",{className:"heroSection",children:[n.jsx("div",{className:"heroText",children:n.jsxs("div",{className:"rapha-cure-container",children:[n.jsxs("div",{className:"heading",children:[n.jsx("h1",{className:"title",children:"RaphaCure"}),n.jsx("h2",{className:"subtitle",children:"Discover Wellness"})]}),n.jsxs("p",{className:"description",children:["Our mission is to deliver comprehensive"," ",n.jsx("strong",{children:"healthcare services"})," tailored to individual needs. With a team of skilled professionals and cutting-edge technology, we offer exceptional medical care, wellness programs, and preventive health services."]}),n.jsxs("p",{className:"description",children:["At ",n.jsx("strong",{children:"Raphacure"}),", we believe in a holistic approach to health, ensuring compassionate and supportive care for all our clients."]}),n.jsx("button",{className:"explore-button",children:"Explore RaphaCure"})]})}),n.jsx("div",{className:"heroImg",children:n.jsx("div",{className:"imgWrapper",children:n.jsx("img",{src:Se,alt:"Doctors"})})})]}),n.jsx(Je,{}),n.jsx(Qe,{images:en}),n.jsx($e,{})]});export{sn as default};
