import{r as c,bd as n,j as d,K as l,gS as S,gT as x,d as H,bE as T,eE as k}from"./index-CitTC1Lo.js";const m=c.forwardRef(({className:s,bsPrefix:a,as:r="div",...e},t)=>(a=n(a,"card-body"),d.jsx(r,{ref:t,className:l(s,a),...e})));m.displayName="CardBody";const f=c.forwardRef(({className:s,bsPrefix:a,as:r="div",...e},t)=>(a=n(a,"card-footer"),d.jsx(r,{ref:t,className:l(s,a),...e})));f.displayName="CardFooter";const N=c.forwardRef(({bsPrefix:s,className:a,as:r="div",...e},t)=>{const o=n(s,"card-header"),i=c.useMemo(()=>({cardHeaderBsPrefix:o}),[o]);return d.jsx(S.Provider,{value:i,children:d.jsx(r,{ref:t,...e,className:l(a,o)})})});N.displayName="CardHeader";const h=c.forwardRef(({bsPrefix:s,className:a,variant:r,as:e="img",...t},o)=>{const i=n(s,"card-img");return d.jsx(e,{ref:o,className:l(r?`${i}-${r}`:i,a),...t})});h.displayName="CardImg";const u=c.forwardRef(({className:s,bsPrefix:a,as:r="div",...e},t)=>(a=n(a,"card-img-overlay"),d.jsx(r,{ref:t,className:l(s,a),...e})));u.displayName="CardImgOverlay";const g=c.forwardRef(({className:s,bsPrefix:a,as:r="a",...e},t)=>(a=n(a,"card-link"),d.jsx(r,{ref:t,className:l(s,a),...e})));g.displayName="CardLink";const B=x("h6"),j=c.forwardRef(({className:s,bsPrefix:a,as:r=B,...e},t)=>(a=n(a,"card-subtitle"),d.jsx(r,{ref:t,className:l(s,a),...e})));j.displayName="CardSubtitle";const C=c.forwardRef(({className:s,bsPrefix:a,as:r="p",...e},t)=>(a=n(a,"card-text"),d.jsx(r,{ref:t,className:l(s,a),...e})));C.displayName="CardText";const I=x("h5"),y=c.forwardRef(({className:s,bsPrefix:a,as:r=I,...e},t)=>(a=n(a,"card-title"),d.jsx(r,{ref:t,className:l(s,a),...e})));y.displayName="CardTitle";const v=c.forwardRef(({bsPrefix:s,className:a,bg:r,text:e,border:t,body:o=!1,children:i,as:p="div",...w},R)=>{const b=n(s,"card");return d.jsx(p,{ref:R,...w,className:l(a,b,r&&`bg-${r}`,e&&`text-${e}`,t&&`border-${t}`),children:o?d.jsx(m,{children:i}):i})});v.displayName="Card";const $=Object.assign(v,{Img:h,Title:y,Subtitle:j,Body:m,Link:g,Text:C,Header:N,Footer:f,ImgOverlay:u}),O=H.div`
  .main-cards {
    width: 100%;
  }
  .img-div {
    padding: 12px;
  }
  .custome-btn {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    background-color: #9747ff;
    border: 1px #9747ff;
    box-sizing: border-box;
    height: 39px;
    color: #fff;
  }
  .card-body {
    padding: 12px;
  }
  .title {
    width: auto;
  }
  .title h6 {
    margin: 0 !important;
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #161515;
    opacity: 0.8;
  }
  .Sub-title p {
    /* width: 270px; */
    font-size: 12px;
    color: #646464;
  }
`,W=s=>{var r;const{fromPage:a}=s;return console.log(s," WomanVaccinationProps "),d.jsx(O,{children:d.jsx(T,{className:"main-row mt-4",children:(r=s==null?void 0:s.list)==null?void 0:r.map((e,t)=>{var o;return d.jsx(k,{lg:3,md:4,sm:6,xs:12,className:"mb-4",children:d.jsxs($,{className:"main-cards",children:[d.jsx("img",{src:e==null?void 0:e.image,alt:"",className:"img-div"}),d.jsxs("div",{className:"card-body",children:[d.jsx("div",{className:"title",children:d.jsxs("h6",{children:[" ",(e==null?void 0:e.service_name)||"Lab Name"]})}),d.jsx("div",{className:"Sub-title mt-2",children:d.jsx("p",{children:"Often considered the same as the HPV vaccine. Helps prevent"})}),d.jsxs("h5",{children:[(o=e==null?void 0:e.price)==null?void 0:o.discounted_price,".00 "]}),d.jsx("button",{className:"btn custome-btn",onClick:()=>{s==null||s.addToCart(e)},children:"Book Now"})]})]})},t)})})})};export{$ as C,W};
