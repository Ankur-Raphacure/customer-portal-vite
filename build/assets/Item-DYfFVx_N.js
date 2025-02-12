import{r,d as xe,b as he,u as ge,a as E,fH as fe,Y as ue,fI as ye,fJ as be,fK as ve,aL as we,j as e,w as je,aD as ze,dK as Ne,Z as ke,A as Oe,c as _e,_ as Ce,$ as Ie,a0 as Pe}from"./index-DDOdRoFT.js";import{B as Ee}from"./BreadCrumbModule-BS-lnu2d.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var y=function(){return y=Object.assign||function(g){for(var p,s=1,x=arguments.length;s<x;s++){p=arguments[s];for(var l in p)Object.prototype.hasOwnProperty.call(p,l)&&(g[l]=p[l])}return g},y.apply(this,arguments)};function Se(o,g){var p={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&g.indexOf(s)<0&&(p[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,s=Object.getOwnPropertySymbols(o);x<s.length;x++)g.indexOf(s[x])<0&&Object.prototype.propertyIsEnumerable.call(o,s[x])&&(p[s[x]]=o[s[x]]);return p}var Te=function(){return Math.random().toString(36).substring(6)},Me=function(o){var g=o.animate,p=g===void 0?!0:g,s=o.backgroundColor,x=s===void 0?"#f5f6f7":s,l=o.backgroundOpacity,t=l===void 0?1:l,S=o.baseUrl,B=S===void 0?"":S,R=o.children,z=o.foregroundColor,N=z===void 0?"#eee":z,T=o.foregroundOpacity,q=T===void 0?1:T,M=o.gradientRatio,k=M===void 0?2:M,A=o.uniqueKey,O=o.rtl,F=O===void 0?!1:O,_=o.speed,C=_===void 0?1.2:_,I=o.style,U=I===void 0?{}:I,v=o.title,u=v===void 0?"Loading...":v,G=o.beforeMask,d=G===void 0?null:G,h=Se(o,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),b=A||Te(),f="".concat(b,"-diff"),L="".concat(b,"-animated-diff"),m="".concat(b,"-aria"),w=F?{transform:"scaleX(-1)"}:null,K="".concat(C,"s"),j="".concat(k*-1," 0"),H="".concat(k," 0");return r.createElement("svg",y({"aria-labelledby":m,role:"img",style:y(y({},U),w)},h),u?r.createElement("title",{id:m},u):null,d&&r.isValidElement(d)?d:null,r.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(B,"#").concat(f,")"),style:{fill:"url(".concat(B,"#").concat(L,")")}}),r.createElement("defs",null,r.createElement("clipPath",{id:f},R),r.createElement("linearGradient",{id:L,gradientTransform:"translate(".concat(j,")")},r.createElement("stop",{offset:"0%",stopColor:x,stopOpacity:t}),r.createElement("stop",{offset:"50%",stopColor:N,stopOpacity:q}),r.createElement("stop",{offset:"100%",stopColor:x,stopOpacity:t}),p&&r.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(j,"; 0 0; ").concat(H),dur:K,repeatCount:"indefinite"}))))},oe=function(o){return o.children?r.createElement(Me,y({},o)):r.createElement(Ae,y({},o))},Ae=function(o){return r.createElement(oe,y({viewBox:"0 0 476 124"},o),r.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),r.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),r.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),r.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),r.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),r.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const Le=xe.div`
  width: 100%;
  height: 100%;

  .item-detail-main-div {
    padding: 30px 50px;
  }
  .new-loader-sec {
    margin-top: 50px;
    text-align: center;
  }
  .item-sub-detail-main-div {
    gap: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delivery0time-sec-note {
    color: green !important;
  }
  .change-pin-code-sec {
    border: 1px solid #e2e2e2;
    height: 36px;
    border-radius: 8px;
    font-size: 14px;
    padding: 5px 20px;
    margin-top: -10px;
  }
  .item-related-img-div {
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 236px;
  }
  .card-module-div {
    margin-top: 2rem;
    /* width: 80%; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .suggestedImg {
    margin-bottom: 10px;
    object-fit: contain;
    border-radius: 10px;
    padding: 0.5rem;
    position: relative;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    height: 74px;
    width: 6rem;
  }
  .item-img-div {
    width: 60%;
    border-radius: 25px;
    background: #eaeaf0;
    height: 14.75rem;
  }
  .main-div-card {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .discount-banner-main-div {
    display: flex;
    position: absolute;
  }
  .discount-banner-div {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731687290405.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 4rem;
    width: 6rem;
    margin-top: -1.6rem;
    margin-left: -1rem;
  }
  .discount-banner-div p {
    margin-top: 18px;
    margin-left: 18px;
    color: #181920;
    font-family: Outfit, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.18px;
  }
  .mainImg {
    border-radius: 25px;
    width: 100%;
    height: 236px;
  }
  .item-title-detail {
    width: 100%;
    position: relative;
    font-size: 24px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    text-align: left;
    display: inline-block;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  .item-tablet-detail {
    width: 100%;
    position: relative;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #9a9898;
    text-align: left;
    display: inline-block;
    height: 15px;
    margin-bottom: 17px;
  }
  .item-cmp-detail {
    width: 100%;
    position: relative;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #252b61;
    text-align: left;
    display: inline-block;
  }
  .item-detail-div {
    width: 30%;
    padding: 1rem;
    position: relative;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: #fef7e2;
    border: 1px solid #eceaea;
    box-sizing: border-box;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .product-price {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #141414;
    font-family: Outfit, sans-serif;
  }
  .recent-order-number {
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #1d1c1c;
    text-align: left;
  }
  .horizental-line {
    color: cadetblue;
    margin: auto;
  }
  .price-section {
    margin-top: 1rem;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #605a5a;
    font-weight: 200;
  }
  .product-price-title {
    font-size: 14px;
    letter-spacing: 0.02em;
    font-weight: 300;
    font-family: Outfit, sans-serif;
    color: #393939;
  }
  .delivered-date-text {
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #888;
    font-family: Outfit, sans-serif;
    margin-bottom: 0px;
    span {
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #888;
    }
  }
  .delivered-add-text {
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #888;
    font-family: Outfit, sans-serif;
    span {
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #888;
    }
  }
  .select-tablets {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    select {
      margin-right: 1rem;
      width: 6rem;
      border-radius: 25px;
      border: 1px solid #adadad;
      box-sizing: border-box;
      height: 34.5px;
      padding: 5px 10px;
      text-align: left;
      font-size: 18px;
      color: #1e1e1e;
      font-family: Outfit, sans-serif;
      background: #fef7e2;
      box-shadow: none;
    }
    span {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #353232;
    }
  }
  .add-to-cart-btn button {
    width: 100%;
    position: relative;
    border-radius: 45px;
    background-color: #252b61;
    height: 53px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 18px;
    color: #fff;
    font-family: Outfit;
  }
  .prescription-title {
    display: flex;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    font-weight: 300;
    margin-bottom: 45px;
    margin-top: -40px;
  }
  .overview-main-div {
    gap: 6rem;
    width: 100%;
    display: flex;
  }
  .overview-left-div {
    width: 70%;
  }
  .overview-right-div {
    width: 30%;
  }

  .overview-heading-text {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: "Poppins", serif;
    color: #000;
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: 0px;
  }
  .overview-heading-text1 {
    margin-bottom: -2px;
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: "Poppins", serif;
    color: #000;
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: -15px;
  }
  .overview-text {
    line-height: 1rem;
    margin-bottom: 32px;

    span {
      width: 100%;
      font-size: 14px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
      font-weight: 300;
      margin-top: 9px;
      margin-bottom: 32px;
    }
  }
  .overview-right-div {
    padding: 2rem;
    width: 30%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    height: 338.9px;
  }
  .doctor-prescription {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731578571641.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 76%;
  }
  .doctor-overview-text {
    width: 100%;
    position: relative;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: #131313;
    text-align: center;
    display: inline-block;
    font-family: Outfit, sans-serif;
    font-weight: 400;
    margin-bottom: 5px;
    span {
      font-weight: 600;
    }
  }
  .doctor-overview-sub-text {
    font-size: 15px;
    letter-spacing: 0.02em;
    color: #000;
    font-family: Outfit, sans-serif;
    font-weight: 500;
    text-align: start;
    span {
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }
  .doctor-prescription-btn {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .doctor-prescription-btn button {
    border-radius: 45px;
    background: #252b61;
    color: #fff;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.21px;
    margin-top: 9rem;
    width: 100%;
    height: 2.5rem;
  }
  .doctor-prescription-btn label {
    width: 100%;
  }
  .similar-product-title {
    width: 100%;
    font-size: 32px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #131313;
  }
  .similar-product-holizental {
    width: 12rem;
    margin-top: 1rem;
  }
  .similar-product-holizental1 {
    width: 40rem;
    margin-top: 1rem;
  }
  .similar-product-section-title {
    /* width: 17rem; */
    display: flex;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
  }
  .similar-product-section {
    display: flex;
    padding: 20px;
    gap: 20px;
  }

  .similar-product-column,
  .similar-recommendations-column {
    flex: 1;
  }

  .similar-product {
    display: flex;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .similar-product-cards {
    display: flex;
    gap: 20px;
  }

  .similar-product-card {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 100%;
  }
  .similar-product-card p {
    margin-top: 1rem;
    text-align: start;
    width: 100%;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
  }
  .similar-product-img-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14.244rem;
    border-radius: 15px;
    background-color: #f0f0f5;
    height: 75%;
  }

  .similar-product-card img {
    height: 1.5rem;
  }
  .similar-product-imgs {
    height: 8rem !important;
  }

  .similar-product-card button {
    border-radius: 40px;
    background-color: #252b61;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 6px 16px;
    box-sizing: border-box;
    gap: 3px;
    text-align: left;
    font-size: 12px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .compare-details-table {
    width: 100%;
    background-color: #f8f8f8;
    border-top: 1px solid #dbdbdb;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }

  .compare-table-row {
    display: flex;
    padding: 10px 50px;
    border-bottom: 1px solid #ddd;
  }

  .compare-table-cell {
    flex: 1;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    text-align: start;
    opacity: 0.8;
  }
  .compare-table-cell-amount {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
    text-align: start;
    flex: 1;
    .compare-table-cell-discount {
      color: #2c7420;
    }
  }
  .compare-table-cell-mrp-amount {
    width: 100%;
    font-size: 14px;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    span {
      text-decoration: line-through;
      color: #888;
    }
  }
  .compare-table-cell-title {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #636363;
    opacity: 0.8;
  }
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-radius: 44px;
    border: 1px solid #aca3a3;
    display: flex;
    margin-right: 5px;
    box-shadow: none;
    background: #fef7e2;
  }

  .upload-Prescription-btn {
    width: 100%;
    margin-top: 9rem;
    position: relative;
    border-radius: 45px;
    background-color: #252b61;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 11px 10px 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .pincode-container {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    position: relative;
    width: 200px;
  }
  .pincode-input {
    padding: 10px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid var(--Grey-Dark, #d1d1d1);
    background: var(--White, #fff);
    width: 100%;
    box-sizing: border-box;
    padding-right: 80px;
  }

  .check-button {
    position: absolute;
    right: 20px;
    margin-top: 0.5rem;
    padding: 5px 10px;
    background: #fff;
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 12px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .pincode-result {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }

  .pincode-input::placeholder {
    color: var(--Grey-Darker, #acacac);
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
  .item-main-detail-div {
    width: 31rem;
  }

  @media (max-width: 768px) {
    .card-module-div {
      grid-template-columns: repeat(2, 1fr);
    }
    .similar-product-section,
    .compare-details-table {
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
    }
    .similar-product-card button {
      width: 100%;
    }
    .similar-product-cards {
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
    .compare-table-cell {
      font-size: 15px;
    }
    .compare-table-cell-amount {
      font-size: 12px;
      span {
        font-size: 12px;
      }
    }
    .compare-table-cell-title {
      font-size: 12px;
    }

    .compare-table-row {
      padding: 10px 20px;
      width: 100%;
      gap: 5px;
    }
    .item-detail-main-div {
      padding: 10px 20px;
    }
    .item-sub-detail-main-div {
      width: 100%;
      display: grid;
      gap: 0px;
    }
    .item-title-detail {
      margin-bottom: 0px;
      text-align: start;
    }
    .horizental-line {
      display: none;
    }
    .item-tablet-detail {
      text-align: start;
      margin-bottom: 0px;
    }
    .item-cmp-detail {
      margin-bottom: 1rem;
      text-align: start;
    }
    .item-related-img-div {
      display: none;
    }
    .item-img-div {
      width: 100%;
    }
    .item-detail-div {
      width: 100%;
      height: 100%;
      background: none;
      padding: 0px;
      box-shadow: none;
      border-radius: 0px;
      border: 0px;
    }
    .select-tablets {
      margin-top: 0px;
      margin-bottom: 15px;
      span {
        margin-left: 0px !important;
      }
    }

    .item-main-detail-div {
      width: 100%;
      display: contents;
    }
    .prescription-title {
      display: none;
    }
    .overview-main-div {
      flex-direction: column;
      gap: 1px;
    }
    .overview-left-div {
      width: 100%;
    }
    .overview-right-div {
      width: 100%;
      height: 100%;
    }
    .overview-right-div {
      padding: 15px;
      height: 20rem;
    }
    .sc-ikkyvV {
      margin-top: 10rem;
    }
    .doctor-prescription-btn {
      margin-top: 0px;
    }
    .upload-Prescription-btn {
      width: 100%;
    }
    .similar-product-title {
      margin-top: 1rem;
      font-size: 22px;
    }
    .similar-product-section,
    .similar-product-card {
      padding: 0px;
    }
    .Horozental-line {
      display: none !important;
    }
    .similar-product-img-card {
      width: 10rem;
      height: 10rem;
    }
    .similar-product-card img {
      object-fit: contain;
      height: 8rem;
    }
    .main-div-card {
      flex-direction: column;
    }
    .breadcrumb1-row {
      display: none;
    }
  }
`;function $e(){return new URLSearchParams(Oe().search)}const Ge=o=>{var W,J,X,Y,Z,D,ee,te,ie;const g=r.useRef(null),{itemId:p,category:s}=(W=o.match)==null?void 0:W.params;$e().get("subcategoryids");const l=he(),[t,S]=r.useState(null),[B,R]=r.useState(null),[z,N]=r.useState(!1),[T,q]=r.useState(!1),[M,k]=r.useState(!1),[A,O]=r.useState(""),[F,_]=r.useState(""),[C,I]=r.useState(""),U=ge(),{cartItems:v}=E(i=>i.checkout),{user:u,userCity:G}=E(i=>i.auth),{allSimilarMedicinesList:d}=E(i=>i.labtest),{userAddress:h}=E(i=>i.profile);(J=d==null?void 0:d.medicineById)==null||J.substitutes;const{allMedicinesList:b,ordersCountByItemDetails:f,deliveryTimeData:L}=E(i=>i.labtest),m=((X=v==null?void 0:v.carts)==null?void 0:X.find(i=>(i==null?void 0:i.section_key)==="pharmacy"))||[],w=m&&((Y=m==null?void 0:m.medicines)==null?void 0:Y.find(i=>(i==null?void 0:i.service_code)===(t==null?void 0:t.service_code)));let j=new URLSearchParams((Z=window==null?void 0:window.location)==null?void 0:Z.search).get("categoryids"),H=j==null?void 0:j.split(",")[0];const P=fe(L,C);console.log("selectPinCode",C,P,z);const ae=[{title:"Pharmacy",link:"/pharmacy"},{title:t==null?void 0:t.category_key,link:`/pharmacy/${H}`},{title:t==null?void 0:t.service_name}];console.log(d,"allSimilarMedicinesList"),r.useEffect(()=>{var i;if((h==null?void 0:h.length)>0){const n=h.find(c=>c.isDefault);(i=h[0])==null||i.zip,console.log("cccpincode",n);const a=n!=null&&n.zip?n:h[0];if(a!=null&&a.zip){const c=`${a==null?void 0:a.city} - ${a==null?void 0:a.zip}`;O(c),I(a==null?void 0:a.zip),_(c)}}},[h==null?void 0:h.length]),r.useEffect(()=>{d!=null&&d.medicineById&&S(d==null?void 0:d.medicineById)},[d]),r.useEffect(()=>{var i,n,a;if(((i=t==null?void 0:t.category_ids)==null?void 0:i.length)>0){let c={};c.categoryIds=t==null?void 0:t.category_ids,c.count=16,c.page=1,l(ue(c))}if(((n=t==null?void 0:t.vendor_ids)==null?void 0:n.length)>0&&l(ye({vendor_ids:(a=t==null?void 0:t.vendor_ids)==null?void 0:a.join(",")})),t!=null&&t.service_code){const c={section_name:"pharmacy",itemId:t==null?void 0:t.service_code,startDate:"2024-04-01",endDate:"2024-12-13"};l(be(c))}},[t==null?void 0:t.service_code]),console.log("ordersCountByItemDetails",f),r.useEffect(()=>{ne()},[p]);const ne=async()=>{k(!0),await l(ve({medicineId:p})),k(!1)},se=async i=>{const n=[{service_code:i==null?void 0:i.service_code,count:1}],a={carts:[{user_id:u==null?void 0:u.id,useWallet:!0,collection_1_date:null,collection_1_slot:null,medicines:n,section_key:"pharmacy",attachment_ids:Ce("pharmacy")}]};console.log("body1",a),await l(Ie(a)),await l(Pe())},V=async i=>{var n;u!=null&&u.id?(se(i),(n=m==null?void 0:m.medicines)==null||n.findIndex(a=>(a==null?void 0:a.service_code)===(t==null?void 0:t.service_code))):l(_e(!0))},Q=()=>{N(A!=="")},ce=()=>{N(!1)},de=i=>{console.log("placeplaceplaceplace",i);let n=document.getElementById("address"),a=n==null?void 0:n.value;O(a),_(a);let c="";for(const re of i==null?void 0:i.address_components)switch(re.types[0]){case"postal_code":{c=`${re.long_name}`;break}}I(c)};r.useEffect(()=>{Q()},[C]);const{getFirstImageUrl:le,getUrls:pe}=we(),$=pe(t==null?void 0:t.image);console.log("itemDetail",$,t);const me=(f==null?void 0:f.count)==="0"?Math.floor(Math.random()*10)+1:f==null?void 0:f.count;return e.jsxs(Le,{children:[T&&e.jsx(je,{}),M?e.jsx("div",{className:"new-loader-sec",children:e.jsxs(oe,{viewBox:"0 0 800 400",height:400,width:800,children:[e.jsx("rect",{x:"470",y:"104",rx:"5",ry:"5",width:"220",height:"10"}),e.jsx("rect",{x:"470",y:"124",rx:"5",ry:"5",width:"220",height:"10"}),e.jsx("rect",{x:"470",y:"144",rx:"5",ry:"5",width:"220",height:"10"}),e.jsx("rect",{x:"64",y:"18",rx:"0",ry:"0",width:"346",height:"200"}),e.jsx("rect",{x:"229",y:"300",rx:"0",ry:"0",width:"0",height:"0"}),e.jsx("rect",{x:"111",y:"340",rx:"0",ry:"0",width:"0",height:"0"}),e.jsx("rect",{x:"121",y:"342",rx:"0",ry:"0",width:"0",height:"0"}),e.jsx("rect",{x:"470",y:"18",rx:"0",ry:"0",width:"300",height:"25"}),e.jsx("rect",{x:"470",y:"58",rx:"0",ry:"0",width:"300",height:"6"}),e.jsx("rect",{x:"470",y:"68",rx:"0",ry:"0",width:"300",height:"6"}),e.jsx("rect",{x:"470",y:"78",rx:"0",ry:"0",width:"300",height:"6"}),e.jsx("rect",{x:"798",y:"135",rx:"0",ry:"0",width:"0",height:"0"}),e.jsx("rect",{x:"731",y:"132",rx:"0",ry:"0",width:"0",height:"0"}),e.jsx("rect",{x:"470",y:"179",rx:"0",ry:"0",width:"70",height:"30"}),e.jsx("rect",{x:"560",y:"179",rx:"0",ry:"0",width:"70",height:"30"}),e.jsx("rect",{x:"112",y:"250",rx:"5",ry:"5",width:"60",height:"60"}),e.jsx("rect",{x:"198",y:"250",rx:"5",ry:"5",width:"60",height:"60"}),e.jsx("rect",{x:"295",y:"250",rx:"5",ry:"5",width:"60",height:"60"}),e.jsx("rect",{x:"70",y:"340",rx:"0",ry:"0",width:"131",height:"12"}),e.jsx("rect",{x:"70",y:"370",rx:"0",ry:"0",width:"566",height:"12"}),e.jsx("rect",{x:"70",y:"390",rx:"0",ry:"0",width:"566",height:"12"})]})}):e.jsx(e.Fragment,{children:t?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"item-detail-main-div",children:[e.jsx(Ee,{itemDetail:t,itemModuleName:"Pharmacy",list:ae}),e.jsxs("div",{className:"item-sub-detail-main-div",children:[e.jsx("div",{className:"item-related-img-div",children:$==null?void 0:$.map(i=>e.jsx(e.Fragment,{children:i!=="NULL"&&i&&e.jsx("img",{src:i,alt:t.service_name,className:"suggestedImg"},`${t.service_code}`)}))}),e.jsxs("div",{className:"main-div-card",children:[e.jsxs("div",{className:"item-img-div",children:[e.jsx("div",{className:"discount-banner-main-div",children:e.jsx("div",{className:"discount-banner-div",children:e.jsxs("p",{children:[t.price.discount_percentage,"% Save"]})})}),e.jsx("img",{className:"mainImg",src:le((D=t==null?void 0:t.image)==null?void 0:D[0]),alt:t.service_name})]}),e.jsxs("div",{className:"item-main-detail-div",children:[e.jsx("p",{className:"item-title-detail",children:t.service_name}),e.jsx("p",{className:"item-tablet-detail",children:t==null?void 0:t.unit}),(t==null?void 0:t.salt_key)&&e.jsxs("p",{children:["Salt Key: ",t.salt_key]}),(t==null?void 0:t.company)&&e.jsxs("p",{children:["Brand: ",t.company]}),(t==null?void 0:t.inventory)&&e.jsxs("p",{children:["Available Quantity: ",t.inventory]})]})]}),e.jsxs("div",{className:"item-detail-div",children:[e.jsxs("p",{className:"recent-order-number",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731570818886.png",alt:"",className:"me-3"}),me," People Ordered Recently"]}),e.jsx("hr",{className:"horizental-line"}),e.jsxs("p",{className:"price-section",children:["MRP"," ",e.jsx("span",{className:"line-through me-3",children:`₹${t.price.actual_cost}.00`}),e.jsx("span",{className:"product-price me-3",children:`₹${t.price.discounted_price}.00`}),e.jsx("span",{className:"product-price-title",children:"Inclusive of all taxes"})]}),!z||P===1?e.jsxs(e.Fragment,{children:[e.jsx(ze,{onPlaceSelected:i=>{de(i)},autoFocus:!0,name:"address",value:F,id:"address",placeholder:"Enter Pincode",className:"pincode-input"}),e.jsx("button",{onClick:Q,className:"check-button",children:"CHECK"}),P===1&&e.jsx("div",{children:e.jsx("p",{className:"delivered-add-text",children:"Please enter another pincode"})})]}):e.jsxs("div",{ref:g,children:[P>5&&e.jsxs(e.Fragment,{children:[" ",e.jsxs("p",{className:"delivered-date-text",children:["Get Delivered by:"," ",e.jsxs("span",{className:"delivery0time-sec-note",children:[" ",P," Mins"]})]}),e.jsxs("p",{className:"delivered-add-text",children:["Delivering to: ",e.jsx("span",{children:A})]})]}),e.jsx("p",{children:e.jsx("button",{className:"change-pin-code-sec",onClick:ce,children:"Change Pincode"})})]}),e.jsx("p",{className:"select-tablets",children:e.jsx("span",{className:"ms-3",children:t==null?void 0:t.unit})}),e.jsx("div",{className:"add-to-cart-btn",children:w!=null&&w.service_code?e.jsx(Ne,{index:w,item:t}):e.jsx("button",{className:"btn",onClick:()=>{V(t)},children:"Add To Cart"})})]})]}),e.jsxs("p",{className:"prescription-title",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731577428281.png",alt:"",className:"me-2"}),"Prescription Required"]}),e.jsxs("div",{className:"overview-main-div",children:[e.jsxs("div",{className:"overview-left-div",children:[e.jsx("p",{className:"overview-heading-text1",children:" Counter Type"}),e.jsxs("p",{className:"overview-text",children:[e.jsx("br",{}),e.jsx("span",{children:(t==null?void 0:t.counter_type)||"- NA"})]}),e.jsx("p",{className:"overview-heading-text",children:" Quick Overview"}),e.jsx("p",{className:"overview-text",children:e.jsx("div",{className:"comment-text-terms-con-sec",dangerouslySetInnerHTML:{__html:`${(ee=t==null?void 0:t.product_highlights)==null?void 0:ee.replace(/\n/g,"<br>")}`}})}),e.jsxs("p",{className:"overview-heading-text1",children:[" ","Product Introduction"]}),e.jsxs("p",{className:"overview-text",children:[e.jsx("br",{}),e.jsx("div",{className:"comment-text-terms-con-sec",dangerouslySetInnerHTML:{__html:`${(te=t==null?void 0:t.information)==null?void 0:te.replace(/\n/g,"<br>")}`}})]}),e.jsxs("p",{className:"overview-heading-text1",children:[" ","Safety Instruction"]}),e.jsxs("p",{className:"overview-text",children:[e.jsx("br",{}),e.jsx("div",{className:"comment-text-terms-con-sec",dangerouslySetInnerHTML:{__html:`${(ie=t==null?void 0:t.safety_instruction)==null?void 0:ie.replace(/\n/g,"<br>")}`}})]})]}),e.jsxs("div",{className:"overview-right-div",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"doctor-overview-text",children:["Need a ",e.jsx("span",{children:"Prescription"}),"?"]}),e.jsxs("li",{className:"doctor-overview-sub-text",children:["Connect instantly with ",e.jsx("span",{children:"certified doctors"})]}),e.jsxs("li",{className:"doctor-overview-sub-text",children:["Receive your ",e.jsx("span",{children:"prescription"})," right away"]})]}),e.jsx("div",{className:"doctor-prescription",children:e.jsx("div",{className:"doctor-prescription-btn",children:e.jsx("button",{className:"btn",onClick:()=>U.push("/doctor?q=General Physician"),children:"Get a Prescription"})})})]})]}),e.jsxs("div",{className:"similar-product-main-div",children:[e.jsx("p",{className:"similar-product-title",children:"Compare With Similar Products"}),e.jsx("div",{className:"card-module-div",children:b==null?void 0:b.map(i=>{var a;const n=(a=m==null?void 0:m.medicines)==null?void 0:a.find(c=>(c==null?void 0:c.service_code)===i.service_code);return e.jsx(ke,{medicineDetail:i,isAddedtoCart:n,addToCart:V,type:"pharmacy"},i.service_code)})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})]})}):e.jsx(e.Fragment,{children:"Item Details Not Available"})})]})};export{Ge as default};
