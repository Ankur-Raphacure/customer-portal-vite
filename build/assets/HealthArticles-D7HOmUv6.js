import{r as i,bd as W,j as e,K as _,c4 as Me,g6 as Ae,c7 as Te,g7 as Be,be as le,g8 as $e,c6 as oe,g9 as ce,ga as Ve,gb as Fe,d as C}from"./index-f4owDEOR.js";import{H as m,a as me,M as Oe}from"./notification-CRD5Z78M.js";import{u as ze}from"./useTimeout-K7Bz8KVe.js";function Pe(a,n){const l=i.useRef(!0);i.useEffect(()=>{if(l.current){l.current=!1;return}return a()},n)}const pe=i.forwardRef(({className:a,bsPrefix:n,as:l="div",...c},o)=>(n=W(n,"carousel-caption"),e.jsx(l,{ref:o,className:_(a,n),...c})));pe.displayName="CarouselCaption";const xe=i.forwardRef(({as:a="div",bsPrefix:n,className:l,...c},o)=>{const g=_(l,W(n,"carousel-item"));return e.jsx(a,{ref:o,...c,className:g})});xe.displayName="CarouselItem";const We=40;function Xe(a){if(!a||!a.style||!a.parentNode||!a.parentNode.style)return!1;const n=getComputedStyle(a);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(a.parentNode).display!=="none"}const he=i.forwardRef(({defaultActiveIndex:a=0,...n},l)=>{const{as:c="div",bsPrefix:o,slide:g=!0,fade:fe=!1,controls:ge=!0,indicators:L=!0,indicatorLabels:M=[],activeIndex:h,onSelect:f,onSlide:q,onSlid:k,interval:S=5e3,keyboard:X=!0,onKeyDown:A,pause:j="hover",onMouseOver:T,onMouseOut:B,wrap:H=!0,touch:K=!0,onTouchStart:$,onTouchMove:V,onTouchEnd:F,prevIcon:ve=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:U="Previous",nextIcon:be=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Z="Next",variant:G,className:je,children:O,...we}=Me({defaultActiveIndex:a,...n},{activeIndex:"onSelect"}),p=W(o,"carousel"),w=Ae(),N=i.useRef(null),[J,Q]=i.useState("next"),[Ne,E]=i.useState(!1),[y,Y]=i.useState(!1),[r,ye]=i.useState(h||0);i.useEffect(()=>{!y&&h!==r&&(N.current?Q(N.current):Q((h||0)>r?"next":"prev"),g&&Y(!0),ye(h||0))},[h,y,r,g]),i.useEffect(()=>{N.current&&(N.current=null)});let v=0,ee;Te(O,(t,s)=>{++v,s===h&&(ee=t.props.interval)});const te=Be(ee),d=i.useCallback(t=>{if(y)return;let s=r-1;if(s<0){if(!H)return;s=v-1}N.current="prev",f==null||f(s,t)},[y,r,f,H,v]),u=le(t=>{if(y)return;let s=r+1;if(s>=v){if(!H)return;s=0}N.current="next",f==null||f(s,t)}),z=i.useRef();i.useImperativeHandle(l,()=>({element:z.current,prev:d,next:u}));const ie=le(()=>{!document.hidden&&Xe(z.current)&&(w?d():u())}),b=J==="next"?"start":"end";Pe(()=>{g||(q==null||q(r,b),k==null||k(r,b))},[r]);const Ce=`${p}-item-${J}`,qe=`${p}-item-${b}`,ke=i.useCallback(t=>{$e(t),q==null||q(r,b)},[q,r,b]),Se=i.useCallback(()=>{Y(!1),k==null||k(r,b)},[k,r,b]),He=i.useCallback(t=>{if(X&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),w?u(t):d(t);return;case"ArrowRight":t.preventDefault(),w?d(t):u(t);return}A==null||A(t)},[X,A,d,u,w]),De=i.useCallback(t=>{j==="hover"&&E(!0),T==null||T(t)},[j,T]),Re=i.useCallback(t=>{E(!1),B==null||B(t)},[B]),se=i.useRef(0),I=i.useRef(0),ae=ze(),_e=i.useCallback(t=>{se.current=t.touches[0].clientX,I.current=0,j==="hover"&&E(!0),$==null||$(t)},[j,$]),Ee=i.useCallback(t=>{t.touches&&t.touches.length>1?I.current=0:I.current=t.touches[0].clientX-se.current,V==null||V(t)},[V]),Ie=i.useCallback(t=>{if(K){const s=I.current;Math.abs(s)>We&&(s>0?d(t):u(t))}j==="hover"&&ae.set(()=>{E(!1)},S||void 0),F==null||F(t)},[K,j,d,u,ae,S,F]),ne=S!=null&&!Ne&&!y,P=i.useRef();i.useEffect(()=>{var t,s;if(!ne)return;const x=w?d:u;return P.current=window.setInterval(document.visibilityState?ie:x,(t=(s=te.current)!=null?s:S)!=null?t:void 0),()=>{P.current!==null&&clearInterval(P.current)}},[ne,d,u,te,S,ie,w]);const re=i.useMemo(()=>L&&Array.from({length:v},(t,s)=>x=>{f==null||f(s,x)}),[L,v,f]);return e.jsxs(c,{ref:z,...we,onKeyDown:He,onMouseOver:De,onMouseOut:Re,onTouchStart:_e,onTouchMove:Ee,onTouchEnd:Ie,className:_(je,p,g&&"slide",fe&&`${p}-fade`,G&&`${p}-${G}`),children:[L&&e.jsx("div",{className:`${p}-indicators`,children:oe(O,(t,s)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":M!=null&&M.length?M[s]:`Slide ${s+1}`,className:s===r?"active":void 0,onClick:re?re[s]:void 0,"aria-current":s===r},s))}),e.jsx("div",{className:`${p}-inner`,children:oe(O,(t,s)=>{const x=s===r;return g?e.jsx(Ve,{in:x,onEnter:x?ke:void 0,onEntered:x?Se:void 0,addEndListener:Fe,children:(D,Le)=>i.cloneElement(t,{...Le,className:_(t.props.className,x&&D!=="entered"&&Ce,(D==="entered"||D==="exiting")&&"active",(D==="entering"||D==="exiting")&&qe)})}):i.cloneElement(t,{className:_(t.props.className,x&&"active")})})}),ge&&e.jsxs(e.Fragment,{children:[(H||h!==0)&&e.jsxs(ce,{className:`${p}-control-prev`,onClick:d,children:[ve,U&&e.jsx("span",{className:"visually-hidden",children:U})]}),(H||h!==v-1)&&e.jsxs(ce,{className:`${p}-control-next`,onClick:u,children:[be,Z&&e.jsx("span",{className:"visually-hidden",children:Z})]})]})]})});he.displayName="Carousel";const de=Object.assign(he,{Caption:pe,Item:xe}),Ke=C.div`
  .main-card {
  }
  .health-article {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    display: grid;
    gap: 40px;
    margin-top: 24px;
  }
  .chat-health-article {
    display: grid;
    gap: 0px;
    margin-top: 24px;
  }
  .Container {
    display: flex;
    align-items: center;
  }
  input {
    width: 80%;
    margin-right: 10px;
  }
  .chat-div {
    display: flex;
    align-items: center;
  }
  .name-tag {
    gap: 0;
  }
  .img-tag {
    margin-right: 22px;
  }
  .select {
    display: flex;
    justify-content: start;
    gap: 1rem;
  }
`,Ue=C.div`
  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }
  .cardstyle {
    width: 21rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid black;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 29px;
  }
  .more-labs-action-btns {
    display: flex;
    justify-content: end;
    margin-bottom: 10px;

    button {
      width: 8rem;
      height: 39px;
    }
    .view-details-btn {
      border-radius: 6px;
      border: 1px solid #9747ff;
      background: #9474ff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-style: normal;
      font-weight: 3400;
      line-height: normal;
    }
  }
  .p-1 {
    margin-bottom: 0px;
    font-weight: 600;
  }

  .p-2 {
    margin-bottom: 0px;
    margin-top: 0;
  }

  .load-more-btn {
    width: 50%;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    border: 0px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  .more-labs-action-btns-1 {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      width: 8rem;
      height: 39px;
    }
    .load-more-btn {
      border-radius: 10px;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9474ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-style: normal;
      font-weight: 3400;
      line-height: normal;
    }
  }

  .text-justify {
    text-align: justify;
  }
`,Ze="/assets/doctoreimg-BXD8i87l.png",Ge=()=>{const[a,n]=i.useState(3),l=[{id:1,title:"Complete Health care check up 1",description:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"},{id:2,title:"Complete Health care check up 2",description:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"},{id:3,title:"Complete Health care check up 3",description:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"},{id:4,title:"Complete Health care check up 4",description:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"}],c=()=>{n(a+3),setTimeout(()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},100)};return e.jsxs(Ue,{children:[e.jsx("div",{className:"main-card",children:l.slice(0,a).map(o=>e.jsx("div",{className:"near-you-item",children:e.jsxs("div",{className:"cardstyle px-2 py-2 flex flex-col",children:[e.jsx("div",{className:"relative imgspace",children:e.jsx("img",{src:Ze,alt:"Health360",className:"w-full h-full object-cover rounded-t-xl w-xl"})}),e.jsx("div",{className:"heading-name-rating flex flex-col mt-1",children:e.jsxs("div",{children:[e.jsx("p",{className:"text-justify px-3",style:{fontWeight:"600"},children:o.title}),e.jsx("p",{className:"px-3  text-justify",children:o.description}),e.jsx("div",{className:"more-labs-action-btns px-3",children:e.jsx("button",{className:"view-details-btn",children:"Book Now"})})]})})]})},o.id))}),a<l.length&&e.jsx("div",{className:"more-labs-action-btns-1",children:e.jsx("button",{onClick:c,className:"load-more-btn",children:"Show more"})})]})},Je=C.div`
  .heading-name-rating {
    // height: 24px;
    margin-top: 10px !important;
  }
  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
      margin-top: 12px;

    }
  }
  .cardstyle {
    width: 45rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .heading-name-rating h3 {
    margin-top: 3px;
  }
    .text-justify {
    text-align: justify;
    padding-left:0px;
}
    h3{
    margin:30px 0px 15px 0px;
    }
    .bottom-name{
    display:flex;
    justify-content: space-between;
    align-items: center;

    }
    .name-tag{
    padding-left:22px;
    }
`,Qe=()=>{const[a,n]=i.useState(3),l=[{id:1,title:"Complete Health care check up 1",description:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute"},{id:2,title:"Complete Health care check up 2",description:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis "}];return e.jsx(Je,{children:e.jsx("div",{className:"main-card",children:l.slice(0,a).map(c=>e.jsxs("div",{children:[e.jsx("div",{className:"near-you-item",children:e.jsxs("div",{className:" cardstyle px-4 py-2 flex  flex-col",children:[e.jsx("div",{className:"relative imgspace",children:e.jsx("img",{src:m,alt:"Health360",className:"w-full h-full object-cover rounded-t-xl w-xl"})}),e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"bottom-name",children:[e.jsxs("div",{className:"d-flex ",children:[e.jsxs("div",{className:"d-flex ",children:[" ",e.jsx("img",{src:me,alt:""})]}),e.jsx("div",{className:"name-tag",children:e.jsx("p",{className:"text-sm",children:"Syam varghese"})})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx("p",{className:"",children:"20 Aug 2024"}),e.jsxs("p",{className:"name-tag",children:[e.jsx("img",{src:Oe,alt:""})," 10 comments"]})]})]})})]})}),e.jsx("h3",{children:"Navigating the Path to Wellness"}),e.jsx("p",{className:"text-justify",children:"cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor in reprehenderit in voluptate velit essveniam, quis nostrud"})]}))})})},Ye=C.div`

    width: 100%;
    margin-top:1rem;
  .poppins-regular {
    font-family: Poppins,sans-serif;
    font-style: normal;
    font-weight: 400;
}

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .inlineflex_center {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.10);
  }

  .hospital_listitem {
    width: 100%;
    w-full bg-white rounded-[.625rem]
    background: #FFFFFF;
    border-radius: .625rem;

    .hospital_topdata {
      padding: 0.844rem 0.625rem 0.531rem 0.625rem;
      gap: 0.875rem;

      @media only screen and (min-width: 1025px) {
        padding: 1.688rem 1.25rem 1.063rem 1.25rem;
        gap: 1.75rem;
      }
        img {
          width: 6.188rem;
          height: 6.188rem;
          border-radius: 0.313rem;
        }
      }
      .hospital_name {
          opacity: 0.8;
          color: #000000;
        }
        }
      }
    }
    .hospital_bottomdata {
      padding-bottom: 0.625rem;
      @media only screen and (min-width: 1025px) {
        padding-bottom: 1.25rem;
      }

      }
    }
  }
`,et="/assets/Blog-1-DGiNUnpk.png",R=()=>e.jsx(Ye,{children:e.jsx("div",{className:"hospital_listitem round-shadow",children:e.jsxs("div",{className:"hospital_topdata flex_center inline-flex",children:[e.jsx("div",{className:"hospital_itemimg",children:e.jsx("img",{src:et})}),e.jsx("div",{className:"hospital_itemvalue inlineflex_start flexdirection_col",children:e.jsx("div",{className:"flex_start flexdirection_col",children:e.jsx("div",{className:"hospital_name poppins-medium",children:"Lorem ipsum dolor sit ame consectetur adipiscing elit Sed"})})})]})})}),tt=C.div`
  background-color: #e2f4ee;
  border-radius: 10px;
  box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);

  .carousel-inner {
    width: 56vw;
    height: 56vh;
    margin-left: 0.5rem;

    @media (max-width: 768px) {
      width: 90vw;
      height: auto;
    }
  }

  .carousel a[role="button"] {
    height: fit-content;
    position: absolute;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: #9747ff;
    width: 2rem;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    top: 50%;

    @media (max-width: 768px) {
      width: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }

  .carousel-item {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 38rem;
    margin-left: 3.2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-left: 0;
    }
  }

  .carousel-item img {
    width: 100%;
    height: 9rem;

    @media (max-width: 768px) {
      height: auto;
    }
  }

  .content {
    margin-top: 16px;
    text-align: center;

    .title {
      font-size: 11px;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 9px;
      }
    }

    .title-1 {
      font-size: 10px;

      @media (max-width: 768px) {
        font-size: 8px;
      }
    }

    .description {
      font-size: 12px;
      margin-top: 8px;
      text-align: left;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }

  .description-1 {
    display: flex;
    justify-content: space-between;
  }

  .text-justify {
    text-align: justify;
  }
`,it=C.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  padding: 19px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,ue=[m,m,m,m,m,m,m,m,m];function st(){const a=[];for(let n=0;n<ue.length;n+=3)a.push(ue.slice(n,n+3));return e.jsx(tt,{children:e.jsx(de,{fade:!0,children:a.map((n,l)=>e.jsx(de.Item,{children:n.map((c,o)=>e.jsxs(it,{children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:c,alt:`Carousel item ${o}`})}),e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"description-1",children:[e.jsx("div",{className:"title",children:"Dance & Aerobic"}),e.jsx("div",{className:"title-1",children:"20 Aug 2024"})]}),e.jsx("div",{className:"description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus. Suspendisse."})]})]},o))},l))})})}const lt=()=>e.jsx(Ke,{children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"health-article",children:[e.jsxs("div",{className:"column",children:[e.jsx(Qe,{}),e.jsx(st,{})]}),e.jsxs("div",{className:"column",children:[e.jsx(Ge,{}),e.jsx(R,{}),e.jsx(R,{}),e.jsx(R,{}),e.jsx(R,{}),e.jsx(R,{})]})]}),e.jsxs("div",{className:"chat-health-article",children:[e.jsx("h3",{children:"Conversations"}),e.jsx("p",{children:"10 Comments"}),e.jsxs("div",{className:"Container",children:[e.jsx("input",{type:"text",placeholder:"What do you think ?",className:"form-control"}),e.jsx("button",{type:"button",className:"btn btn-primary",children:"Submit"})]}),e.jsxs("p",{className:"mt-4",children:["Sorted By : ",e.jsx("span",{className:"fontBold",children:"Best"})]}),e.jsxs("div",{className:"chat-div",children:[e.jsx("div",{className:"img-tag",children:e.jsx("img",{src:me,alt:"Profile"})}),e.jsxs("div",{className:"name-tag",children:[e.jsx("h6",{children:"Syam Varghese"}),e.jsx("p",{children:"10 Hours ago"}),e.jsx("p",{children:"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess aute irure dolor"}),e.jsxs("div",{className:"select",children:[e.jsx("p",{className:"fontBold",children:"Reply"}),e.jsx("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{opacity:"0.2",d:"M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z",fill:"black"})}),e.jsx("svg",{width:"22",height:"19",viewBox:"0 0 22 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{opacity:"0.2",d:"M22 10.45C22 10.9539 21.7893 11.4372 21.4142 11.7935C21.0391 12.1498 20.5304 12.35 20 12.35H13.68L14.64 16.6915C14.66 16.7865 14.67 16.891 14.67 16.9955C14.67 17.385 14.5 17.746 14.23 18.0025L13.17 19L6.59 12.749C6.22 12.3975 6 11.9225 6 11.4V1.9C6 1.39609 6.21071 0.912817 6.58579 0.556498C6.96086 0.200178 7.46957 0 8 0H17C17.83 0 18.54 0.475 18.84 1.159L21.86 7.8565C21.95 8.075 22 8.303 22 8.55V10.45ZM0 0H4V11.4H0V0Z",fill:"black"})}),e.jsx("p",{className:"fontBold",children:"share"})]}),e.jsx("p",{children:"1 Reply"})]})]}),e.jsx("hr",{})]})]})});export{lt as default};
