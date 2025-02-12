import{d,j as a,du as e}from"./index-BHf3qlKB.js";import{R as t}from"./Row-f7XalRoN.js";import{C as l}from"./Card-DWAh-1Ab.js";const r=d.div`
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
`,f=i=>{var c;const{fromPage:x}=i;return console.log(i," WomanVaccinationProps "),a.jsx(r,{children:a.jsx(t,{className:"main-row mt-4",children:(c=i==null?void 0:i.list)==null?void 0:c.map((s,o)=>{var n;return a.jsx(e,{lg:3,md:4,sm:6,xs:12,className:"mb-4",children:a.jsxs(l,{className:"main-cards",children:[a.jsx("img",{src:s==null?void 0:s.image,alt:"",className:"img-div"}),a.jsxs("div",{className:"card-body",children:[a.jsx("div",{className:"title",children:a.jsxs("h6",{children:[" ",(s==null?void 0:s.service_name)||"Lab Name"]})}),a.jsx("div",{className:"Sub-title mt-2",children:a.jsx("p",{children:"Often considered the same as the HPV vaccine. Helps prevent"})}),a.jsxs("h5",{children:[(n=s==null?void 0:s.price)==null?void 0:n.discounted_price,".00 "]}),a.jsx("button",{className:"btn custome-btn",onClick:()=>{i==null||i.addToCart(s)},children:"Book Now"})]})]})},o)})})})};export{f as W};
