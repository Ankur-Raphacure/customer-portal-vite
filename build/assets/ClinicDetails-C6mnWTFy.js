import{d as Dt,q as Lt,b as Ot,u as Tt,k as Ft,r as o,a as A,aP as It,aJ as Et,aQ as _t,j as e,aK as At,l as Bt,ae as Ht,c as Rt}from"./index-f4owDEOR.js";import{D as Wt}from"./DoctorCardModule-DnDvbeZA.js";import{C as Ut}from"./ContentLoaderSection-CZ7Tv9bR.js";import"./react-content-loader.es-BSfnX45C.js";const Gt=Dt.div`
  .allDocList {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    .detail-card {
      margin-bottom: 0px;
    }
  }
  .doctor-list-main-div {
    display: flex;
    text-align: center;
    gap: 2rem;
  }
  .side-filter-p-div {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    border-radius: 25px;
    border: 1px solid rgb(237, 237, 237);
    box-sizing: border-box;
    position: sticky;
    top: 150px;
    height: 1350px;
  }
  .suggution-doctor-list-p-div {
    width: 20%;
    position: -webkit-sticky;
    position: sticky;
    top: 150px;
    height: 500px;
  }

  .add-cards {
    border-radius: 15px;
    background: #fff5d8;
    width: 100%;
  }
  .add-cards1 {
    border-radius: 15px;
    background: #f0f0f5;
    width: 100%;
    margin-top: 2rem;
  }
  .add-cards-title {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 5px;
    p {
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.24px;
      margin-top: 3rem;
      text-align: start;
    }
    img {
      margin-top: 2rem;
    }
    button {
      margin-top: 2rem;
      border-radius: 24px;
      background: #252b61;
      color: #fff;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.21px;
    }
  }

  .add-cards-title1 {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 5px;
    p {
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.24px;
      margin-top: 3rem;
      text-align: start;
    }
    img {
      margin-top: 2rem;
      height: 9rem;
      width: 8rem;
    }
    button {
      border-radius: 24px;
      background: #252b61;
      color: #fff;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.21px;
    }
  }
  .my-preference-div {
    margin-bottom: 2rem;
    button {
      border-radius: 45px;
      background: #252b61;
      color: #fff;
      text-align: center;
      font-family: Outfit, sans-serif;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.27px;
      text-transform: capitalize;
      width: 100%;
    }
  }
  .doctor-title-mobile-view,
  .download-home-page-mobile-viwe-div,
  .mobile-video-view,
  .mobile-view-categories {
    display: none;
  }
  .clinic-details-sec-page {
    padding: 15px 60px;
  }
  .opd-detail-card {
    width: 100%;
    height: auto;
    border-radius: 24px;
    background: #fff;
    box-shadow: 1px 1px 18px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  .appointment-card {
    justify-content: space-between;
  }
  .left-middle {
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 1rem 1rem 1rem 1rem;
    cursor: pointer;
  }
  .selected-left-middle {
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 1rem 1rem 1rem 0rem;
    cursor: pointer;
    align-items: center;
  }

  .opd-card-left {
    position: relative;
    width: 124px;
    height: 111px;
    border-radius: 15px;
    background: #f0f0f5;
    max-width: 120px;
    min-width: 120px;
  }
  .opd-card-left img {
    width: 6rem;
    height: 6rem;
    border-radius: 10px;
    margin-top: 0.5rem;
    object-fit: contain;
  }
  .opd-card-right {
    text-align: start;
  }
  .doctor-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  .specelization-text {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.21px;
    display: flex;
    align-items: center;
  }
  .location-text {
    span {
      color: #2c9f6d;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: auto;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
    }
  }
  .selected-location-text {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    margin-bottom: 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    width: 80%;
  }
  .page-count-div {
    text-align: left;
  }
  .page-count-div-count-row {
    display: flex;
    justify-content: space-between;
  }
  .show-other-clinis-data {
    span {
      border-radius: 45px;
      background: #252b61;
      color: #fff;
      padding: 5px 10px;
      cursor: pointer;
      font-size: 14px;
    }
  }
  .selected-location-km {
    color: #5c5c5c;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    margin-bottom: 0px;
  }
  .selected-location-text {
    span {
      color: #5c5c5c;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .doctor-list-p-div {
    width: 100%;
  }
  .loadMoreBtn {
    border-radius: 29px;
    border: 1px solid #252b61;
    display: inline-flex;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #252b61;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin: auto;
  }
  @media (max-width: 768px) {
    .allDocList {
      grid-template-columns: repeat(1, 1fr);
    }
    .doctor-title-mobile-view {
      display: block;
      margin-left: 1rem;
    }
    .opd-card-right {
      img {
        object-fit: contain;
      }
    }
    .page-count-div-count-row {
      p {
        font-size: 14px;
      }
    }
    .suggution-doctor-list-p-div {
      display: none;
    }
    .clinic-details-sec-page {
      padding: 15px 10px;
    }
    .toggle-container {
      height: 100%;
      font-size: 12px;
      span.toggle-label.active {
        font-weight: bold;
      }
    }
    .side-filter-p-div {
      min-width: 100%;
      max-width: 100%;
    }
    .clinic-details-sec-page {
      padding: 0px;
    }
    .sideFilterModule {
      .sidebarMenu {
        width: 100%;
        margin: 0;
      }
    }
    .sort-dropdown {
      font-family: Outfit, sans-serif;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      margin-top: 8.5rem;
      .sort-option {
        font-size: 14px;
        font-weight: 400;
        color: #000;
        text-align: left;
      }
    }
    .types-of-services-sec-all {
      margin-bottom: 16px;
      display: flex;
      img {
        display: none;
      }
      > div {
        padding: 10px;
        span {
          padding-top: 7px;
          // padding-left: 20px;
          font-size: 14px;
        }
      }
    }
    .opd-card-right {
      .location-text {
        margin-bottom: 5px;
      }
    }
    .opd-card-left {
      padding-bottom: 10px;
    }
    .view-all-btn {
      font-size: 18px;
    }
    .BreadCrumbModule {
      padding: 0px;
    }
    .nearby-doctor-view-btn {
      margin-bottom: 0px;
      padding: 0px;
    }
    .doctor-specialization p {
      font-size: 20px;
    }
    .specialization-title-div button {
      font-size: 18px;
    }
    .web-view,
    .search-By-text {
      display: none;
    }
    .search-by-text {
      padding: 0px 10px !important;
      margin-bottom: 0px;
    }
    .mobile-view,
    .main-Upload-Prescription-mobile {
      display: block;
    }
    .mobile-view-categories {
      display: block;
      padding: 0px 10px;
      margin-bottom: 30px;
    }
    .Upload-Prescription-mobile-btn {
      margin-top: 29px;
      padding: 10px 14px;
      width: 100%;
      position: relative;
      border-radius: 10px;
      background-color: #a3dac2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin-bottom: 0px;
        font-size: 14px;
        letter-spacing: 0.02em;
        font-weight: 600;
        font-family: Outfit, sans-serif;
        color: #252b61;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 45px;
        background-color: #252b61;
        height: 30px;
        font-size: 12px;
        color: #fff;
        font-family: Outfit, sans-serif;
      }
    }

    .specialization-title-div {
      font-size: 20px;
      padding: 0px;
      padding: 10px 10px !important;
      margin-bottom: 0px;
    }

    .parent-multicurosal-module {
      display: none;
    }
    .doctor-consult-text {
      font-size: 20px;
      padding: 10px 0px 0px 10px;
      font-weight: 500;
    }
    .doctor-consult {
      padding: 0px;
    }
    .doctor-consult-sub-text {
      display: none;
    }
    .doctor-consult-sub-text-mobile-view {
      padding: 10px 10px !important;
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.24px;
      display: block;
    }
    .doctor-consult-options {
      flex-wrap: inherit;
      gap: 0px;
      padding: 5px 5px !important;
    }
    .doctor-consult-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      margin-bottom: 0px;
      scrollbar-width: none;
    }
    .bannerWrapper {
      display: none;
    }
    .nearby-doctor-hospitals {
      padding: 10px 10px !important;
      margin-top: 32px;
      margin-bottom: 32px;
    }
    .nearby-doctor-title {
      font-size: 20px;
      margin-bottom: 0px;
    }
    .doctor-video-section {
      padding: 0px;
      border-radius: 0px;
    }
    .doctor-video-sub-section {
      border-radius: 0px;
    }
    .search-popup {
      margin-top: -12rem;
      width: 100%;
      left: 0%;
    }
    .doctor-video-sub-section {
      padding: 32px 20px !important;
      flex-direction: column;
    }
    .text-div {
      width: 0px;
    }
    .mobile-view-text-div {
      width: 100%;
    }
    .video-text-div {
      font-size: 20px;
      text-align: start;
      height: 27px;
    }
    .video-option-div {
      align-items: normal;
      margin-top: 1rem;
    }
    .video-sub-option-div p {
      line-height: 25px;
      font-size: 11px;
    }
    .start-from-text {
      text-align: start;
    }
    .explore-more-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main-doctore-card-div {
      padding: 0px;
    }
    .page-count-div {
      padding: 0px 10px;
    }
    .doctore-card-div {
      display: none;
    }

    .doctor-list-main-div {
      flex-direction: column;
      padding: 0px 0px !important;
      gap: 0rem;
    }
    .suggution-doctor-list-div {
      display: none;
    }
    .side-filter-p-div {
      width: 100%;
      border: none;
      padding: 0px;
    }
    .doctor-list-p-div {
      width: 100%;
      padding: 10px 10px;
    }
    .side-filter-p-div,
    .suggution-doctor-list-p-div {
      position: static;
      top: 150px;
      height: 100%;
    }
    .nearbyCards {
      padding: 0px;
    }
    .main-contect-div {
      flex-direction: column;
    }
    .contect-book-btn-div {
      width: 100%;
      margin-bottom: 16px;
      justify-content: center;
    }
    .contect-book-btn {
      width: 100%;
    }
    .specelization-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      width: 10rem;
    }
    .left-middle {
      flex-direction: column !important;
    }
    .left-middle-mobile-view {
      flex-direction: unset !important;
    }
    .doctor-title,
    .location-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
    .exp-div {
      display: flex !important;
      flex-direction: column;
      gap: 0px !important;
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }
    .align-items-center {
      align-items: normal !important;
    }
    .doctor-title-mobile-view {
      display: block;
      margin-left: 1rem;
    }
    .doctor-title-web-view {
      display: none;
    }
    .card-left {
      display: flex;
    }
    .doctor-title {
      text-align: start;
    }
    .specelization-text {
      text-align: start;
    }
    .doctor-image-mobile-view {
      border-radius: 100%;
      background: #e3e3e3;
      padding: 10px;
    }
    .card-left img {
      width: 6rem !important;
      height: 6rem !important;
      border-radius: 10px !important;
      border-radius: 7rem !important;
    }
    .suggution-doctor-list-p-div {
      width: 100%;
    }
    .nearby-hospitals-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      scrollbar-width: none;
      margin-bottom: 0px;
    }
    .opd-card-left {
      height: 100%;
    }
    .my-preference-div {
      padding: 0px 10px 20px 10px;
      margin-bottom: 0rem;
    }
    .contect-div {
      padding: 0px;
    }
    .contect-text {
      font-size: 11px;
    }
    .doctor-consult {
      margin-top: 0px;
    }
    .mobile-ButtomBanner {
      display: none;
    }
    .download-home-page-mobile-viwe-div {
      display: block;
      width: 100%;
      margin-top: 32px;
      img {
        width: 100%;
      }
    }
    .book-app-doctor-actions-btn-mobile-viwe {
      display: flex;
      align-items: center;
      position: absolute;
      margin-top: -4.5rem;
      img {
        width: 15px !important;
      }
      button {
        height: 2.5rem;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 45px;
        background: #252b61;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        line-height: 60px;
      }
    }
    .mobile-video-view {
      display: block;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    .toggle-container {
      /* flex-direction: column; */
      justify-content: center;
      gap: 1rem;
    }
  }
  .nearby-hospitals-list {
    & > div {
      min-height: 310px;
    }
  }
  .nearbyHospitals {
    & > div {
    }
  }
`,Jt="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737787650549.png",Yt="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737787679017.png",xe=m=>{var q,K,Q,X,V,Z,tt,et,ot;Lt().state;let{vendorId:g,categoryId:w}=(q=m==null?void 0:m.match)==null?void 0:q.params;console.log("vendorId",g);let B=(Q=(K=m==null?void 0:m.match)==null?void 0:K.params)==null?void 0:Q.id;const N=window.location.pathname,S=Ot(),C=Tt(),{id:qt}=Ft(),H=80,[u,nt]=o.useState(1),[d,L]=o.useState(B?[Number(B)]:[]),[h,v]=o.useState([]),[p,P]=o.useState([]),[O,st]=o.useState(["approved"]),[c,T]=o.useState([]),[F,R]=o.useState([]),[at,b]=o.useState(!1),[j,rt]=o.useState(""),[Kt,I]=o.useState(0),[Qt,E]=o.useState(""),[dt,W]=o.useState(!1),[Xt,Vt]=o.useState({}),[U,M]=o.useState(!1),[Zt,te]=o.useState(!1),{allNearByHospitalList:y,allDoctorsFiltersData:lt,clinicFilters:l,clinicDetails:n}=A(t=>t.doctor),{selectedCurrentAddress:f}=A(t=>t.profile),{user:_}=A(t=>t.auth),[D,ct]=o.useState([]),[ee,oe]=o.useState(0),[pt,ie]=o.useState({}),[G,xt]=o.useState(!0),[ne,gt]=o.useState(!1),[J,se]=o.useState(N!=null&&N.includes("nearbyhospitals")?"clinic":"online"),[ft,mt]=o.useState(!1),[ae,re]=o.useState(""),ut=o.useRef(null);o.useRef(null);const ht=[{title:"Doctor",link:"/doctor"},{title:"Nearby Hospitals",link:"/doctor/nearbyhospitals"},{title:(X=n==null?void 0:n.vendor)!=null&&X.name?(V=n==null?void 0:n.vendor)==null?void 0:V.name:"Clinic Details"}];console.log("clinicFilters",l),console.log("clinicDetails",n),console.log("vendorId",g),o.useEffect(()=>{g&&(w||Y(),k({},["languages","category_ids","gender","virtualTypes"]))},[g]),o.useEffect(()=>{L(w==null?void 0:w.split(","))},[w]),o.useEffect(()=>{Y()},[d,h,p,c]);const Y=()=>{let t={};d&&(t.category_ids=d),h&&(t.languages=h),p&&(t.gender=p),c.length>0&&(t.type=c),t.count=H,t.page=u;const s={id:g,body:{filters:{...t,availabilities:!0}}};S(It(s)),window.scrollTo(0,0)},bt=()=>{nt(t=>t+1),gt(!0)};o.useEffect(()=>{console.log("Current page:",u)},[u]),o.useEffect(()=>{console.log("selectedServiceType : ",J),(N.includes("nearbyhospitals")||J==="clinic")&&yt(),xt(!1)},[f,j,u]);const yt=async()=>{M(!0);const t={searchText:j,latitude:f==null?void 0:f.latitude,longitude:f==null?void 0:f.longitude,section_name:"doctor",count:10,page:u};await S(Et(t)),M(!1)},k=async(t,s)=>{M(!0);const x={filters:{...t,status:["approved"],filtersNeeded:s,availabilities:!0}};await S(_t({body:x,id:g})),M(!1),setTimeout(()=>{mt(!ft)},100)};o.useEffect(()=>{const t={};j&&(t.searchText=j),k(t,["languages","category_ids","gender","type"])},[j]),o.useEffect(()=>{const t={};d&&(t.category_ids=d),k(t,["languages","gender","type"])},[d]),o.useEffect(()=>{const t={};c.length>0&&(t.type=c),d&&(t.category_ids=d),k(t,["languages","gender"])},[c]),o.useEffect(()=>{const t={};c.length>0&&(t.type=c),p&&(t.gender=p),d&&(t.category_ids=d),k(t,["languages"])},[p]);const wt=(t,s)=>{_!=null&&_.id?C.push(`/doctor/doctordetails/${t==null?void 0:t.id}`):S(Rt(!0))},vt=(t,s,x)=>{const a=(i,z)=>{console.log("prevState",i),console.log("incoming",z);const Mt=i==null?void 0:i.includes(z);return i?Mt?i==null?void 0:i.filter(it=>it!=z):[...[...i],z]:[z]};ct([]),t==="Specialization"?(L(i=>a(i,x==null?void 0:x.id)),P([]),v([]),T([]),b(!1)):t==="Type"?(T(i=>a(i,s)),P([]),v([]),b(!1)):t==="Gender"?(P(i=>a(i,s)),v([]),b(!1)):t==="Languages"?(v(i=>a(i,s)),b(!1)):t==="Status"?st(i=>a(i,s)):t==="Week Off Days"?R(i=>a(i,s)):t==="Available by 90"&&b(i=>!i)},jt=t=>{L([]),v([]),P([]),T([]),R([]),t||rt(""),b(!1),I(0),E("")},kt=t=>{I((t==null?void 0:t[0])??0),E(t==null?void 0:t[1])},zt=t=>{I((t==null?void 0:t[0])??0),E(t==null?void 0:t[1])},Nt=(t,s,x)=>t==="Specialization"?!!(d!=null&&d.find(a=>a==(x==null?void 0:x.id))):t==="Languages"?h==null?void 0:h.find(a=>a==s):t==="Gender"?p==null?void 0:p.find(a=>a==s):t==="Status"?O==null?void 0:O.find(a=>a==s):t==="Type"?c==null?void 0:c.find(a=>a==s):t==="Week Off Days"?F==null?void 0:F.find(a=>a==s):t==="Available by 90"?at:!1,St=()=>{C.push("/chat")},Ct=t=>{C.push(`/doctor/doctordetails/${t==null?void 0:t.id}`)},Pt=()=>{C.push("/doctor/nearbyhospitals")},$={Type:l==null?void 0:l.type,Gender:l==null?void 0:l.gender,Specialization:l==null?void 0:l.category_ids,Languages:l==null?void 0:l.languages};console.log("allDoctorFilter",pt),console.log("allDoctorsFiltersData",lt),console.log("filtersdata1",$),console.log("doctorsListData",D),console.log("doctorsListData",G);const r=n==null?void 0:n.vendor;return e.jsxs(Gt,{children:[e.jsx(At,{sectionName:"doctor",show:dt,onHide:()=>{W(!1)}}),e.jsxs("div",{className:"clinic-details-sec-page",children:[e.jsx("div",{className:"BreadCrumbModule",children:e.jsx(Bt,{list:ht})}),e.jsxs("div",{className:"doctor-list-main-div",children:[e.jsx("div",{className:"side-filter-p-div",ref:ut,children:e.jsx(Ht,{origin:"doctor",doctorFilter:$,doctorFiltersMethod:vt,handleClearAll:jt,filterPriceRange:kt,selectedCheckBox:Nt,consultType:c,handleInputChange:zt,specialization:d,pathName:"/doctor"})}),e.jsxs("div",{className:"doctor-list-p-div",children:[U&&e.jsx(Ut,{fromPage:"doctorsList"}),e.jsx(e.Fragment,{children:g&&e.jsxs(e.Fragment,{children:[(r==null?void 0:r.id)&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"selected-opd-div",children:e.jsx("div",{className:"appointment-card ",children:e.jsxs("div",{className:"selected-left-middle",children:[e.jsx("div",{className:"opd-card-left",children:e.jsx("img",{src:r==null?void 0:r.image,alt:r==null?void 0:r.name})}),e.jsx("div",{className:"opd-card-right",children:e.jsx("div",{className:"d-flex justify-content-between align-items-center",children:e.jsxs("div",{children:[e.jsx("p",{className:"doctor-title",children:r==null?void 0:r.name}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737012130996.png",alt:"",className:"me-2"}),e.jsx("p",{className:"selected-location-text",children:r==null?void 0:r.address})]})]})})})]})})})}),e.jsxs("div",{className:"page-count-div-count-row",children:[e.jsxs("p",{children:["Showing 1 to ",(Z=n==null?void 0:n.doctors)==null?void 0:Z.length," Doctors"]}),e.jsx("p",{className:"show-other-clinis-data",children:e.jsx("span",{onClick:Pt,children:"Show other Clinic's"})})]}),((tt=n==null?void 0:n.doctors)==null?void 0:tt.length)>0?e.jsx(e.Fragment,{children:Array.isArray(n==null?void 0:n.doctors)&&((et=n==null?void 0:n.doctors)==null?void 0:et.map((t,s)=>e.jsx(Wt,{appointment:{id:t==null?void 0:t.id,name:t==null?void 0:t.name,department:t==null?void 0:t.specialization,experience:t==null?void 0:t.work_experience_years,languages:t==null?void 0:t.languages,education:t==null?void 0:t.highest_education,inClinicFee:t==null?void 0:t.name,videoConsultFee:t==null?void 0:t.minutes_before_virtual,gender:t==null?void 0:t.gender,consultantType:t==null?void 0:t.name,specialization:t==null?void 0:t.specialization,slots:t==null?void 0:t.name,rating:t==null?void 0:t.rating,image:t==null?void 0:t.image,availableIn90:t==null?void 0:t.availableIn90,doctoreType:t==null?void 0:t.type},DoctorBookingReviewProp:wt,DoctorChatProp:St,DoctorBookConsultProp:Ct},s)))}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"no-doctors-clinis-data",children:"No Doctors Are available !"})})]})}),!U&&((D==null?void 0:D.length)>5&&G||((ot=y==null?void 0:y.vendors)==null?void 0:ot.length)>5)&&e.jsx("div",{className:"d-flex mt-4",children:(y==null?void 0:y.total)<u*H?e.jsx(e.Fragment,{}):e.jsx("button",{className:"loadMoreBtn",onClick:bt,children:"Load More"})})]}),e.jsxs("div",{className:"suggution-doctor-list-p-div",children:[e.jsx("div",{className:"my-preference-div",children:e.jsx("button",{className:"btn ",onClick:()=>{W(!0)},children:"My Preference"})}),e.jsxs("div",{className:"suggution-doctor-list-div",children:[e.jsx("div",{className:"add-cards",children:e.jsxs("div",{className:"add-cards-title",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Your Personalized Period Guide"}),e.jsx("button",{className:"btn",children:"Start Now"})]}),e.jsx("img",{src:Jt,alt:""})]})}),e.jsx("div",{className:"add-cards1",children:e.jsxs("div",{className:"add-cards-title1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"Your Health, One Tap Away Download the Raphacure App Today!"}),e.jsx("button",{className:"btn",children:"Download"})]}),e.jsx("img",{src:Yt,alt:""})]})})]})]})]})]})]})};export{xe as default};
