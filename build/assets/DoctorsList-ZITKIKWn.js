import{d as g,r as a,u as m,j as e,az as h,b as u,a as C,S as b,aG as j,aH as v}from"./index-DDOdRoFT.js";import{D as y}from"./Doctors.styled-D8HZcmi0.js";import{S as N}from"./SideFilterModule-BZN1WbF0.js";import{B as _}from"./BreadCrumbModule-BS-lnu2d.js";import"./index-yoN86szv.js";import"./index-BbRpjKC3.js";const p=g.div`
  .detail-card {
    width: 100%;
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    background-color: #fff;
    margin-bottom: 2rem;
  }
  .specelization-text {
    font-size: 18px;
    font-family: Outfit, sans-serif;
    color: #252b61;
    margin-bottom: 11px;
  }
  .doctor-title {
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.8;
    margin-bottom: 6px;
  }
  .eduction-details {
    display: contents !important;
    text-align: center;
    margin-bottom: 0px;
    span {
      font-size: 14px;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
    }
  }
  .Experience-div {
    display: flex;
    align-items: center;
  }
  .exp-div {
    gap: 2rem;
    margin-top: 11px;
    margin-bottom: 11px;
  }
  .left-middle {
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 1rem 1rem 0rem 1rem;
    cursor: pointer;
  }
  .main-contect-div {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 0rem 1rem;
    justify-content: space-between;
    cursor: pointer;
  }
  .contect-div {
    display: flex;
    align-items: center;
    gap: 26px;
    padding: 1rem;
  }
  .contect-text {
    margin-bottom: 0px;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #000;
  }
  .contect-book-btn-div {
    display: flex;
    justify-content: end;
  }
  .contect-book-btn {
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    border-radius: 45px;
    background-color: #252b61;
    border: 1px solid #252b61;
    box-sizing: border-box;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 15px 14px 24px;
    font-size: 14px;
    color: #fff;
    font-family: Outfit, sans-serif;
  }

  .appointment-card {
    justify-content: space-between;
  }
  .card-left {
    position: relative;
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 10px;
    }
  }
  .card-right {
    text-align: start;
  }
  .appointments {
    flex: 3;

    .filter-tags {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;

      span {
        background-color: #f0f0f0;
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
        cursor: pointer;
      }
    }

    .appointment-header {
      margin-bottom: 1rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin-bottom: 1rem;
        font-size: 1rem;
        color: #555;
      }

      select {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
      }
    }

    .sort-dropdown {
      .sort {
        padding: 10px;
        border-radius: 44px;
        border: 1px solid #aca3a3;
        label {
          font-size: 16px;
          letter-spacing: 0.02em;
          font-family: Outfit;
          color: #7e7979;
        }
        select {
          border: none;
          font-size: 16px;
          letter-spacing: 0.02em;
          font-family: Outfit;
          color: #1e1e1e;
        }
      }
    }

    .appointment-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .appointment-card {
        display: flex;
        gap: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;

        background-color: #fff;

        .card-right {
          text-align: start !important;
        }
      }
    }
  }
  .sort-dropdown {
    display: flex;
    justify-content: right;
    margin-bottom: 30px;
  }
  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -2rem;
    width: 3rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 14px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }
  .sec-banner-div {
    width: 12%;
    position: relative;
    border-radius: 9px 0px 0px 9px;
    background-color: #fff5d8;
    height: 32px;
    position: absolute;
    left: 57.8rem;
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0px;
      font-size: 14px;
      color: #252b61;
      height: 22.4px;
      opacity: 0.9;
      font-family: Outfit, sans-serif;
    }
  }
`,E=t=>a.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("g",{clipPath:"url(#clip0_3246_3735)"},a.createElement("path",{d:"M10.5497 11.8596C11.7026 12.511 12.6001 13.5841 12.9941 14.91C13.0525 15.1093 13.016 15.3239 12.8992 15.4925C12.7825 15.6611 12.5928 15.7607 12.3958 15.7607H3.64719C3.45018 15.7607 3.26047 15.6611 3.14372 15.4925C3.02698 15.3239 2.99049 15.1093 3.04887 14.91C3.44288 13.5764 4.34766 12.5034 5.50052 11.8519C5.79968 11.6833 6.16451 11.7523 6.37611 12.0282L7.59464 13.5611C7.81353 13.8446 8.22944 13.8446 8.44833 13.5611L9.65957 12.0282C9.88576 11.7599 10.2506 11.691 10.5497 11.8596Z",fill:"url(#paint0_linear_3246_3735)"}),a.createElement("path",{d:"M14.1557 2.29849L9.94898 0.975338C9.04537 0.690351 8.05063 0.690351 7.15461 0.968553L2.89472 2.30528C2.36319 2.46813 2.02148 2.90239 2.02148 3.40451C2.02148 3.90663 2.36319 4.3409 2.89472 4.50375L7.12424 5.82012C7.57225 5.96261 8.04304 6.03046 8.51383 6.03046C8.98462 6.03046 9.45541 5.96261 9.90342 5.82012L13.7153 4.63267V7.1772C13.7153 7.49611 14.0038 7.76074 14.3683 7.76074C14.7328 7.76074 15.0214 7.5029 15.0214 7.1772C15.0214 7.1772 15.0214 3.40451 15.0214 3.39773C15.029 2.90239 14.6797 2.46813 14.1557 2.29849Z",fill:"url(#paint1_linear_3246_3735)"}),a.createElement("path",{d:"M12.0137 6.76074L9.88141 7.44402C8.68296 7.82836 7.35222 7.82836 6.15378 7.44402L4.02148 6.76074V7.10238C4.02148 9.11661 5.81137 10.7607 8.02148 10.7607C10.2316 10.7607 12.0215 9.12373 12.0215 7.10238V6.76074H12.0137Z",fill:"url(#paint2_linear_3246_3735)"})),a.createElement("defs",null,a.createElement("linearGradient",{id:"paint0_linear_3246_3735",x1:8.02148,y1:11.7607,x2:8.02148,y2:15.7607,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#252B61"}),a.createElement("stop",{offset:.595,stopColor:"#4C58C7"}),a.createElement("stop",{offset:.97,stopColor:"#252B61"})),a.createElement("linearGradient",{id:"paint1_linear_3246_3735",x1:8.52148,y1:.760742,x2:8.52148,y2:7.76074,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#252B61"}),a.createElement("stop",{offset:.595,stopColor:"#4C58C7"}),a.createElement("stop",{offset:.97,stopColor:"#252B61"})),a.createElement("linearGradient",{id:"paint2_linear_3246_3735",x1:8.02148,y1:6.76074,x2:8.02148,y2:10.7607,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#252B61"}),a.createElement("stop",{offset:.595,stopColor:"#4C58C7"}),a.createElement("stop",{offset:.97,stopColor:"#252B61"})),a.createElement("clipPath",{id:"clip0_3246_3735"},a.createElement("rect",{width:16,height:16,fill:"white",transform:"translate(0.0214844 0.760742)"})))),w=t=>a.createElement("svg",{width:17,height:17,viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("g",{clipPath:"url(#clip0_3246_3768)"},a.createElement("circle",{cx:8.52148,cy:9.26074,r:3.5,fill:"#92BDF6"}),a.createElement("path",{d:"M14.1502 9.72393C14.1606 8.76392 14.031 6.03351 13.9282 5.51342C13.7627 4.65952 12.9828 3.83393 12.1312 3.64556C12.0561 3.63006 11.9599 3.61576 11.8481 3.59906C10.8577 3.50965 9.0539 3.43603 8.21401 3.43454C7.32821 3.43454 5.59119 3.518 4.71792 3.61337C4.60152 3.62618 4.4848 3.59222 4.39344 3.51897C4.30208 3.44572 4.24356 3.33918 4.23076 3.22278C4.21795 3.10638 4.25191 2.98967 4.32516 2.89831C4.39841 2.80695 4.50495 2.74843 4.62135 2.73562C5.58732 2.62892 7.35623 2.55173 8.21251 2.55024C8.9776 2.55173 10.6434 2.61313 11.7324 2.70224C11.514 1.9002 10.773 1.1524 9.96831 0.973569C9.4515 0.867763 7.96484 0.762552 7.00483 0.760764C6.04482 0.758976 4.55816 0.867763 4.04105 0.97506C3.18953 1.16372 2.40954 1.98931 2.24442 2.84411C2.14011 3.36331 2.01165 6.33126 2.02208 7.29187V7.43791C2.02208 8.78359 2.1711 12.8868 2.29032 13.4936C2.49121 14.5287 3.43661 15.5293 4.46875 15.7588C5.09465 15.889 6.89783 16.0166 8.0617 16.0187H8.08614C9.06463 16.0154 11.6174 15.9108 12.1303 15.8041C12.9819 15.6157 13.7619 14.7907 13.9273 13.9365C14.0322 13.414 14.1606 10.6827 14.1502 9.72393ZM8.68224 12.5563C8.08776 12.5563 7.50663 12.38 7.01233 12.0497C6.51804 11.7195 6.13278 11.25 5.90527 10.7008C5.67776 10.1516 5.61821 9.54723 5.73417 8.96417C5.85012 8.38111 6.13637 7.84553 6.55671 7.42515C6.97705 7.00477 7.5126 6.71847 8.09565 6.60245C8.6787 6.48644 9.28306 6.54592 9.8323 6.77338C10.3815 7.00084 10.851 7.38605 11.1813 7.88031C11.5116 8.37458 11.688 8.95569 11.688 9.55017C11.6881 9.94492 11.6104 10.3358 11.4593 10.7005C11.3083 11.0652 11.0869 11.3966 10.8078 11.6758C10.5286 11.9549 10.1973 12.1764 9.83258 12.3274C9.46788 12.4785 9.07699 12.5563 8.68224 12.5563Z",fill:"url(#paint0_radial_3246_3768)"}),a.createElement("path",{d:"M9.66508 10.789C9.55122 10.789 9.44004 10.7545 9.34617 10.6901L8.36261 10.018C8.28643 9.96606 8.22407 9.89632 8.18096 9.81482C8.13785 9.73333 8.11529 9.64254 8.11523 9.55034V8.03895C8.11523 7.88876 8.1749 7.74472 8.2811 7.63852C8.3873 7.53232 8.53133 7.47266 8.68152 7.47266C8.83171 7.47266 8.97575 7.53232 9.08195 7.63852C9.18815 7.74472 9.24781 7.88876 9.24781 8.03895V9.25229L9.98399 9.7557C10.0836 9.82401 10.1588 9.92238 10.1985 10.0365C10.2383 10.1505 10.2405 10.2743 10.2048 10.3897C10.1692 10.5052 10.0976 10.6062 10.0005 10.678C9.90341 10.7498 9.78587 10.7887 9.66508 10.789Z",fill:"url(#paint1_radial_3246_3768)"})),a.createElement("defs",null,a.createElement("radialGradient",{id:"paint0_radial_3246_3768",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(8.08614 8.38971) rotate(90) scale(7.62897 6.06466)"},a.createElement("stop",{stopColor:"#1B2047"}),a.createElement("stop",{offset:1,stopColor:"#424DAD"})),a.createElement("radialGradient",{id:"paint1_radial_3246_3768",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.17263 9.13084) rotate(90) scale(1.65818 1.0574)"},a.createElement("stop",{stopColor:"#1B2047"}),a.createElement("stop",{offset:1,stopColor:"#424DAD"})),a.createElement("clipPath",{id:"clip0_3246_3768"},a.createElement("rect",{width:16,height:16,fill:"white",transform:"translate(0.0214844 0.760742)"})))),z=({rating:t})=>e.jsx(p,{children:e.jsxs("div",{className:"bannerWrapper",children:[e.jsxs("div",{className:"rectangle",children:[e.jsx(h,{fill:"#252B61",className:"me-2 "})," ",Math.round(t)]}),e.jsx("div",{className:"triangle"})]})}),S=({appointment:t})=>{const l=m();return e.jsx(p,{children:e.jsx("div",{className:"detail-card",children:e.jsxs("div",{className:"appointment-card",children:[e.jsxs("div",{className:"left-middle",onClick:()=>l.push(`/doctor/doctordetails/${t==null?void 0:t.id}`),children:[e.jsxs("div",{className:"card-left",children:[e.jsx(z,{rating:t==null?void 0:t.rating}),e.jsx("img",{src:t==null?void 0:t.image,alt:t==null?void 0:t.name})]}),e.jsxs("div",{className:"card-right",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"doctor-title",children:t.name}),e.jsx("p",{className:"specelization-text",children:t.department})]}),(t==null?void 0:t.availableIn90)&&e.jsxs("div",{className:"sec-banner-div",children:[e.jsx("img",{src:" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736249754401.png",alt:"",className:"me-3 ms-2"}),e.jsx("p",{children:"In 90 Seconds"})]})]}),e.jsxs("p",{className:"eduction-details",children:[e.jsx(E,{className:"me-2"}),e.jsxs("span",{children:[" ",t==null?void 0:t.education]})]}),e.jsxs("div",{className:"d-flex align-items-center exp-div",children:[e.jsxs("div",{className:" Experience-div ",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245306125.png",alt:"",className:"me-2"}),e.jsx("p",{className:"eduction-details",children:e.jsxs("span",{children:[" ",t.experience," Experience"]})})]}),e.jsxs("div",{className:" Experience-div ",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245349025.png",alt:"",className:"me-2"}),e.jsx("p",{className:"eduction-details",children:e.jsxs("span",{children:[" ",t==null?void 0:t.languages]})})]})]}),e.jsxs("p",{className:"eduction-details",children:[e.jsx(w,{className:"me-2"}),e.jsx("span",{children:" Next Slot"})]})]})]}),e.jsxs("div",{className:"main-contect-div",children:[e.jsxs("div",{className:"contect-div",children:[e.jsxs("p",{className:"contect-text",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245507200.png",alt:" chat",className:"me-2"}),"Chat"]}),e.jsxs("p",{className:"contect-text",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245537447.png",alt:"Virtual",className:"me-2"}),"Virtual Consult"]}),e.jsxs("p",{className:"contect-text",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245570436.png",alt:"Clinic",className:"me-2"}),"In Clinic Visit"]})]}),e.jsx("div",{className:"contect-book-btn-div",children:e.jsx("button",{className:"btn contect-book-btn",children:"book Consult"})})]})]},t.id)})})},B=[{title:"Doctor",link:"/doctor"},{title:"Virtual Consultation"}],L=()=>{var d;const t=u(),l=8,[k,M]=a.useState(20),[o,x]=a.useState(0),[i,n]=a.useState(""),{allDoctorList:r}=C(s=>s.doctor),f=async s=>{n(s)},c=async()=>{let s={};i&&(s.searchText=i),s.count=l,s.page=o+1,x(o+1),await t(v({filters:{...s,status:"approved"}}))};return a.useEffect(()=>{c()},[i]),e.jsxs(y,{children:[e.jsx("div",{className:"BreadCrumbModule",children:e.jsx(_,{list:B})}),e.jsxs("div",{className:"doctor-list-main-div",children:[e.jsx("div",{className:"side-filter-p-div",children:e.jsx(N,{origin:"doctor"})}),e.jsxs("div",{className:"doctor-list-p-div",children:[e.jsx("div",{className:"search-by-text",children:e.jsx(b,{details:j,handleonFilterName:f,setSearchText:n,searchText:i})}),e.jsx("div",{className:"page-count-div",children:e.jsxs("p",{children:["Showing 1 to ",l*o," Doctors of ",r==null?void 0:r.totalCount," ","Doctors"]})}),Array.isArray(r==null?void 0:r.doctors)&&((d=r==null?void 0:r.doctors)==null?void 0:d.map(s=>e.jsx(S,{appointment:{id:s==null?void 0:s.id,name:s==null?void 0:s.name,department:s==null?void 0:s.specialization,experience:s==null?void 0:s.work_experience_years,languages:s==null?void 0:s.languages,education:s==null?void 0:s.highest_education,inClinicFee:s==null?void 0:s.name,videoConsultFee:s==null?void 0:s.minutes_before_virtual,gender:s==null?void 0:s.gender,consultantType:s==null?void 0:s.name,specialization:s==null?void 0:s.specialization,slots:s==null?void 0:s.name,rating:s==null?void 0:s.rating,image:s==null?void 0:s.image,availableIn90:s==null?void 0:s.availableIn90}}))),e.jsx("div",{className:"d-flex mt-4",children:(r==null?void 0:r.totalCount)<=o*l?e.jsx(e.Fragment,{}):e.jsx("button",{className:"loadMoreBtn",onClick:c,children:"Load More"})})]}),e.jsx("div",{className:"suggution-doctor-list-p-div"})]})]})};export{L as default};
