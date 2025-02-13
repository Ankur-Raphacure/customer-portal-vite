import{j as t,S as fe,d as ue,u as $,g2 as me,b as be,r as n,a as I,eI as ye,g3 as Ce,ee as je,eM as Ne,aU as ve,g4 as we,g5 as Se,ae as ke,l as Ae,a7 as Le,eL as Pe,bm as Te,eN as W}from"./index-f4owDEOR.js";import{R as J}from"./RadiologyStyled.styled-C76ZuIrR.js";import{b as Fe}from"./index-DQt1RiQv.js";const Ie=o=>t.jsx(J,{children:t.jsx("div",{className:"selector-filter-sub-module-div",children:t.jsx(fe,{showSearch:!0,placeholder:"Sort By",filterOption:(a,l)=>((l==null?void 0:l.label)??"").toLowerCase().includes(a.toLowerCase()),defaultValue:"discount",onChange:o.handleSortChange,options:[{value:"discount",label:"Discount"},{value:"desc",label:"Price: High to Low"},{value:"asc",label:"Price: Low to High"}]})})}),Me=ue.div`
  /* Card Container */
  .scanCenter-card-container {
    flex: 1 1 calc(33.33% - 10px);
    max-width: 312px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
    font-family: Arial, sans-serif;
    padding: 5px;
    cursor: pointer;
  }

  /* Card Header */
  .scanCenter-card-header {
    position: relative;
    padding: 5px;
    background-color: #f5f5f5;
    text-align: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .scanCenter-company-logo {
    width: 100%;
    height: 140px;
  }
  .scanCenter-company-logo img {
    width: 100%;
    height: 140px;
  }

  .scanCenter-company-logo p {
    font-weight: bold;
    margin: 0;
  }

  .scanCenter-company-logo small {
    font-size: 12px;
    color: #666;
  }

  /* Badge */
  .scanCenter-badge {
    position: absolute;
    top: 0px;
    right: 0px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 0px 14px 0px 14px;
    background-color: #f0da69;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 12px;
      line-height: 14px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }

  .scanCenter-badge img {
    width: 20px;
    height: 20px;
  }

  /* Card Body */
  .scanCenter-card-body {
    padding: 15px 15px;
    text-align: left;
  }

  .scanCenter-card-body h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
  }

  .scanCenter-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #fbfbfb;
    justify-content: center;
    width: 25%;
    border-radius: 20px;
    background-color: #92bdf6;
    height: 21px;
  }

  .scanCenter-rating .scanCenter-star {
    color: #fbfbfb;
    font-size: 16px;
  }

  .scanCenter-card-body p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    width: 100%;
    font-size: 14px;
    color: #a49b9b;
    font-family: Poppins, serif;
    margin-top: 10px;
  }

  .scanCenter-card-body .scanCenter-separator {
    margin: 0 5px;
  }
  .-scanCenter-star {
    font-size: 10px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #fbfbfb;
  }
  .rating-banner-div {
    position: absolute;
    z-index: 1;
    margin-left: -22px;
    margin-top: 2rem;
    p {
      margin: auto;
      margin-top: -47px;
      margin-right: 19px;
      font-size: 16px;
      font-size: 12px;
    }
    img {
      height: 2rem;
    }
  }
  .bannerWrapper {
    position: absolute;

    .rectangle {
      background: #92bdf6;
      padding: 7px;
      border-radius: 10px 45px 45px 0;
      width: 5rem;
      display: flex;
      align-items: center;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }
  .connect-sec-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff5d8;
    height: 39px;
    padding: 0px 18px;
    p {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .scanCenter-card-container {
      max-width: 100%;
    }
  }
`,De=o=>{$();const{viewScanCards:a,handleNavigateDetails:l,sectionName:y}=o;return t.jsx(Me,{children:t.jsx("div",{className:"scanCenter-main-card-container",children:t.jsxs("div",{className:"scanCenter-card-container",onClick:()=>l(a),children:[y&&t.jsx("div",{className:"rating-banner-div",children:t.jsxs("div",{className:"bannerWrapper",children:[t.jsxs("div",{className:"rectangle",children:[t.jsx(me,{className:"me-2"}),a==null?void 0:a.rating]}),t.jsx("div",{className:"triangle"})]})}),t.jsxs("div",{className:"scanCenter-card-header",children:[t.jsx("div",{className:"scanCenter-company-logo",children:t.jsx("img",{src:a==null?void 0:a.image,alt:"Company Logo"})}),t.jsxs("div",{className:"scanCenter-badge",children:[t.jsxs("span",{children:["Rapha ",t.jsx("br",{})," Assured"]}),t.jsx("img",{src:" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733748919984.png",alt:"Shield Icon"})]})]}),t.jsxs("div",{className:"scanCenter-card-body",children:[t.jsx("h3",{children:a==null?void 0:a.name}),y!=="doctor"&&t.jsxs("div",{className:"scanCenter-rating",children:[t.jsx("span",{className:"-scanCenter-star",children:"★"}),t.jsx("span",{className:"-scanCenter-star",children:a==null?void 0:a.rating})]}),t.jsxs("div",{className:"d-flex align-items-baseline",children:[t.jsx(Fe,{className:"me-2"}),t.jsx("p",{children:a==null?void 0:a.address})]})]})]})})})},ze=[{name:"Male Radiologist",id:"male",link:"/pharmacy"},{name:"Female Radiologist",id:"female",link:"/pharmacy"}],Be=[{name:"Morning",id:"",link:""},{name:"Afternoon",id:"",link:""},{name:"Evening",id:"",link:""}],Re=[{name:"Labs Offering Discounts",id:"",link:""},{name:"Free Follow-Up COnsultations",id:"",link:""}],Ee=[{name:"High Rated Labs",id:"",link:""},{name:"Verified Feedbacks",id:"",link:""}],Ve=o=>{var O,_,H,U,V;let{sectionName:l}=(O=o==null?void 0:o.match)==null?void 0:O.params,y=(H=(_=o==null?void 0:o.location)==null?void 0:_.state)==null?void 0:H.name;const q=[{title:"Radiology",link:"/radiology"},{title:y,link:"/radiology"}],M=$(),i=be(),G=12,[C,D]=n.useState(""),[k,A]=n.useState(""),[j,h]=n.useState(0),[L,f]=n.useState(""),[g,N]=n.useState(""),[x,v]=n.useState(""),[r,z]=n.useState(l?[Number(l)]:[]),[d,w]=n.useState([]),[K,Q]=n.useState([]),[u,B]=n.useState(9),[P,R]=n.useState(20),{allScansNearBy:c}=I(e=>e.ctmri),{allTestsList:S,MedicinesCount:T,allCategoriesList:X,allActiveBodyPartList:Y}=I(e=>e.labtest),[Z,Oe]=n.useState(1),F=window.location.pathname==="/radiology/allScansNearMe";console.log("isNearByAll",F);const{userCity:p}=I(e=>e.auth);n.useEffect(()=>{i(ye()),i(Ce())},[]),n.useEffect(()=>{ee(p==null?void 0:p.name)},[p==null?void 0:p.name]);const ee=(e="bengaluru")=>{i(je({city:e==null?void 0:e.toLowerCase()})),i(Ne({city:e==null?void 0:e.toLowerCase(),count:100}))},te="ctmri",se=e=>{M.push(`/radiology/scan-details/${e}`,te)},ae=e=>{M.push(`/labtest/packages/${e==null?void 0:e.id}`)},E=()=>{A(""),h(0),f(""),N(""),v(""),w([]),z([]),B(9)},ne=e=>{const s=[...K];if(s!=null&&s.includes(e)){const m=s.findIndex(b=>b===e);s.splice(m,1)}else s.push(e);Q(s),w([]),h(0),f(""),N(""),v("")},ie=e=>{const s=[...d];if(s!=null&&s.includes(e)){const m=s.findIndex(b=>b===e);s.splice(m,1)}else s.push(e);w(s)},oe=e=>{const s=[...r];if(s!=null&&s.includes(e)){const m=s.findIndex(b=>b===e);s.splice(m,1)}else s.push(e);z(s),w([]),h(0),f(""),N(""),v("")},re=e=>{h((e==null?void 0:e[0])??0),f(e==null?void 0:e[1])},ce=e=>{N(g!=e[0]?e[0]:""),v(x!=e[1]?e[1]:"")},le=e=>{h(g!=e[0]?e[0]:""),f(x!=e[1]?e[1]:"")},de=async e=>{D(e),E()},ge=e=>{A(e)},xe=e=>{A(e)},pe=async()=>{let e={};C&&(e.searchText=C),k&&(e.sortBy=k),r&&(e.categoryIds=r),d&&(d==null?void 0:d.length)>0&&(e.bodyPart=d),(j===0||j)&&(e.minPrice=j),L&&(e.maxPrice=L),g&&(e.minDiscount=g),x&&(e.maxDiscount=x),e.testType="ctmri",await i(W({filters:{...e,count:u,page:1,testType:"ctmri"}}))};n.useEffect(()=>{pe(),i(ve({sectionName:"ctmri"}))},[Z,G,JSON.stringify(r),C,k,L,j,x,g,d]),n.useEffect(()=>{i(we({filters:{categoryIds:r}}))},[i,r]),n.useEffect(()=>{i(Se({filters:{categoryIds:r}}))},[i,r]);const he=()=>{const e=u+9;B(e),i(W({filters:{categoryIds:r,count:e,page:1,testType:"ctmri"}}))};return n.useEffect(()=>{R(T||0)},[S,T]),t.jsx(J,{children:t.jsxs("div",{className:"all-scans-list-content",children:[t.jsxs("div",{className:"container-fluid scan-list-data-content",children:[F?t.jsx(t.Fragment,{}):t.jsx(t.Fragment,{children:t.jsx("div",{className:"filter-module-div",children:t.jsx(ke,{origin:"ctmri",handleClearAll:E,handleChangeCategoryFilter:oe,handleonFilterDiscount:ce,filterPriceRange:re,handleChangeBodyTypeFilter:ie,handleChangeTypeFilter:ne,setSelectedSortOption:xe,handleInputChange:le,allTypeList:ze,allCategoriesList:X,allBodyTypeList:Y,allTimeSlotList:Be,allDiscountList:Re,patientReviewsList:Ee,bodyTypeFilter:d,minDiscount:g,maxDiscount:x,selectedCategories:r,pathName:"/radiology"})})}),t.jsxs("div",{className:"filter-List-module-div",children:[t.jsx(Ae,{list:q}),t.jsxs("div",{className:"filter-byname-div",children:[t.jsx("div",{className:"filter-by-name",children:t.jsx(Le,{details:Pe,handleonFilterName:de,setSearchText:D,searchText:C,origin:"Radiology"})}),t.jsx("div",{className:"PriceFilterModule",children:t.jsx(Ie,{handleSortChange:ge})})]}),t.jsx("div",{children:F?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"page-count-div",children:t.jsxs("p",{children:["Showing 1 to"," ",Math.min(u,c==null?void 0:c.vendorCount)," ","Tests of ",c==null?void 0:c.vendorCount," Labtests"]})}),t.jsx("div",{className:"allScansNearBy-main-div",children:(U=c==null?void 0:c.vendors)==null?void 0:U.map((e,s)=>t.jsx(De,{viewScanCards:e,handleNavigateDetails:ae}))})]}):t.jsx(t.Fragment,{children:t.jsxs("div",{className:"page-count-div",children:[t.jsxs("p",{children:["Showing 1 to ",Math.min(u,P)," ","Tests of ",P," Labtests"]}),t.jsx("div",{className:"scan-list-data-div",children:(V=S==null?void 0:S.data)==null?void 0:V.map((e,s)=>{if(e.actual_cost)return t.jsx(Te,{title:e==null?void 0:e.service_name,featureButtonText:e==null?void 0:e.type,reportTime:"N/A",originalPrice:((e==null?void 0:e.actual_cost)||0).toString(),discountedPrice:((e==null?void 0:e.raphacure_cost)||(e==null?void 0:e.actual_cost)||0).toString(),discount:((e==null?void 0:e.discount_percentage)||0).toString(),addToCart:()=>{se(e==null?void 0:e.service_code)},section:"radiology"},(e==null?void 0:e.service_code)||s)})})]})})})]})]}),u<P&&t.jsx("div",{className:"pagination-box-sec-pha",children:t.jsx("button",{onClick:he,className:"load-more-btn",children:"Load More"})})]})})};export{Ve as default};
