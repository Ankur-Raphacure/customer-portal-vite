import{d as N,r as c,u as f,j as e,bE as h,eE as m,bo as T,b as D,a as k,gQ as P,gR as S,ee as W,ed as x,c as E}from"./index-f4owDEOR.js";import{C as B,W as I}from"./WomanVaccination-CuD9Q0CG.js";const C=N.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
    padding-bottom: 100px;
  }
  .radiologyParentDiv {
    background-color: #f6f9fd;
    padding: 1.5rem;
  }
  .categoryText {
    width: 100%;
    position: relative;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: #000;
  }
  .layout-container {
    margin-bottom: 0px !important;
  }
  .header {
    background: linear-gradient(to left, #9747ff, #000033, #9747ff);
    color: white;
    text-align: left;
    padding-left: 2rem;
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-content h1 {
    width: 686px;
    position: relative;
    font-size: 47px;
    line-height: 55px;
    font-weight: 700;
    margin-top: 1.5rem;
  }

  .header-content h1 span {
    color: #8fff00;
  }

  .header-content p {
    width: 340px;
    position: relative;
    font-size: 18px;
    line-height: 34px;
    font-weight: 500;
    color: #fff;
    height: 96px;
    margin-top: 2.5rem;
  }

  .explore-btn {
    /* width: 30%; */
    color: #000;
    background: #fff;
    border: 1px solid #fff;
    font-weight: 500;
    height: 4rem;
    border-radius: 8px;
  }
  .img-div img {
    padding-top: 1rem;
    width: 20rem;
  }
  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap;
  }
  .catCardDiv {
    width: calc(20% - 10px);
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
  }
  .imageDiv {
    margin: 1rem;
  }
  .roundedImages {
    max-width: 100%;
    width: 100%;
  }
  .imageName {
    color: #9747ff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .imageSubtitle {
    color: #000;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    margin: 8px 11px 32px;
  }
  .CTcard-title {
    margin: 0 !important;
    top: 135px;
    left: 42px;
    font-size: 16px;
    line-height: 25px;
    color: #9474ff;
    text-align: center;
    font-weight: 600;
  }
  .CTcard-Subtitle {
    font-size: 10px;
    color: #6f6f6f;
    font-weight: 500;
    opacity: 0.8;
    width: 9rem;
  }
  .Main {
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
    max-width: 200px;
    margin: auto;
  }
  .image-div {
    width: 100px;
    height: 100px;
    background-color: #51f4f4;
  }
  @media (max-width: 700px) {
    .header-content h1 {
      width: 332px;
      font-size: 47px;
      line-height: 55px;
      font-weight: 700;
      margin-top: 4.5rem;
    }
  }

  .Card-div {
    width: 190px;
    height: 230px;
    background: #fdfdfd;
    padding: 2rem 1.5rem;
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    cursor: pointer;
  }

  .main-rows {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -5px;
    gap: 12px;
  }
  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  /*Image*/
  .card-avatar {
    --size: 60px;
    border-radius: 50%;
    transition: transform 0.2s ease;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
    background-color: #51f4f4;
  }

  /*Text*/
  .card-title {
    margin: 0 !important;
    top: 135px;
    left: 42px;
    font-size: 16px;
    line-height: 25px;
    color: #9474ff;
    text-align: center;
    font-weight: 600;
  }

  .card-subtitle {
    font-size: 10px;
    color: #6f6f6f;
    font-weight: 500;
    opacity: 0.8;
    width: 9rem;
    text-align: center;
  }

  /*Hover*/
  .card:hover {
    box-shadow: 0 8px 50px #84828233;
  }

  .Card-div:hover .card-info {
    transform: translateY(-5%);
  }

  .Card-div:hover .card-social {
    transform: translateY(100%);
    opacity: 1;
  }

  .card-social__item svg:hover {
    fill: #232323;
    transform: scale(1.1);
  }

  .card-avatar:hover {
    transform: scale(1.1);
  }
`,A=N.div`
  /* .list-packages-names-all {
    scroll-behavior: smooth;
    scrollbar-color: #9757ff #fff;
    background-attachment: scroll;
    display: flex;
    gap: 1.5rem;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
  } */

  .list-packages-names-all {
    scroll-behavior: smooth;
    scrollbar-color: #9757ff #fff;
    background-attachment: scroll;
    display: grid;
    gap: 20px;
    margin-top: 50px;
    grid-template-columns: repeat(4, 1fr); /* Default: 4 columns */
  }

  @media (max-width: 1200px) {
    .list-packages-names-all {
      grid-template-columns: repeat(3, 1fr); /* 3 columns for large screens */
    }
  }

  @media (max-width: 992px) {
    .list-packages-names-all {
      grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
    }
  }

  @media (max-width: 576px) {
    .list-packages-names-all {
      grid-template-columns: 1fr; /* 1 column for small screens */
    }
  }

  .img-div {
    margin-top: 10px;
    width: 100%;
  }
  .img-line-div {
    margin-top: -1.9rem;
    margin-left: -1.3rem;
    width: 7rem;
  }
  .Title-div {
    width: 193px;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    opacity: 0.7;
  }
  .Sub-Title-div {
    width: 118px;
    position: relative;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    opacity: 0.6;
  }
  .amt-div {
    width: 49px;
    position: relative;
    font-size: 18px;
    font-weight: 600;
    color: #ff7a00;
    width: 6rem;
  }
  .t-list-div {
    width: 88px;
    position: relative;
    font-size: 10px;
    font-weight: 500;
    color: #000;
    opacity: 0.6;
    width: 6rem;
  }

  .cardstyle {
    height: auto;
    flex-shrink: 0;
    padding: 11px;
    border-radius: 15px;
    border: 2px #61ff00;
    background: linear-gradient(180deg, #e3fcee, #d4faff);
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.09);

    p {
      color: #000;
      /* font-family: Poppins; */
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-top: 11px;
      opacity: 0.6;
    }
  }

  .cartbtn,
  .viewDetailsBtn {
    width: 100%;
    padding: 0.5rem;
    border-radius: 10px;
    background: #9747ff;
  }
  .viewDetailsBtn {
    background: white;
    color: #9747ff;
    outline: 1px solid #9747ff;
  }
  .m-t-5 {
    margin-top: 35px;
  }
  .check {
    margin-left: 10px;
    margin-bottom: 10px;
    margin-top: 5px;
    margin-right: 10px;
  }
  .compare {
    margin-left: 10px;
  }
  input:checked ~ .checkmark {
    background-color: #9747ff;
  }
  .img-size {
    width: 120px;
    height: 120px;
    float: right;
    margin-right: 10px;
  }

  .btnWrapper {
    display: flex;
    margin-top: 10px;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
  }
`,M=i=>{var b;const{fromPage:o}=i,[l,s]=c.useState(null),[r,d]=c.useState({}),[p,u]=c.useState([]),[w,g]=c.useState(!1);f();const t=a=>{d(n=>({...n,[a]:!n[a]}))};return c.useEffect(()=>{p.length>0&&g(!0)},[p]),e.jsx(A,{children:e.jsx("div",{className:` list-packages-names-all ${o}`,children:(b=i==null?void 0:i.list)==null?void 0:b.map((a,n)=>{var v,j,y;const z=r[n]||!1;return e.jsxs("div",{className:"cardstyle mt-4",children:[e.jsx(B.Body,{children:e.jsxs(h,{children:[e.jsxs(m,{xs:8,children:[e.jsx("h5",{className:"Title-div",children:a==null?void 0:a.service_name}),e.jsx("p",{className:"Sub-Title-div ",children:a==null?void 0:a.description}),e.jsx("p",{className:"t-list-div",children:`${(v=a==null?void 0:a.tests)==null?void 0:v.length} Tests Included`}),e.jsx("h4",{className:"amt-div mt-4",children:((j=a==null?void 0:a.price)==null?void 0:j.discount_percentage)>0&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"line-through price",children:["₹ ",(y=a==null?void 0:a.price)==null?void 0:y.actual_cost]})," ","  "]})})]}),e.jsxs(m,{xs:4,className:"text-right",children:[e.jsx("img",{src:a==null?void 0:a.image,alt:"Pregnancy Health Package",className:"img-div"}),e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736333253705.png",alt:"",className:"img-line-div"})]})]})}),e.jsxs("div",{className:"btnWrapper",children:[e.jsx("div",{className:"cursor-pointer btn-book-now viewDetailsBtn hover:bg-blue-700 text-center justify-center items-center",onClick:()=>t(n),children:e.jsx("span",{className:"text-center items-center justify-center justify-content-center",children:"View Details"})}),e.jsx("div",{className:"cursor-pointer btn-book-now cartbtn bg-[#9747FF] hover:bg-blue-700 text-white text-center justify-center items-center",onClick:()=>{i==null||i.addToCart(a)},children:e.jsx("span",{className:"text-center items-center justify-center justify-content-center",children:"Book Now"})})]}),z&&e.jsx(T,{item:a,fromPackage:!0,onClose:()=>t(n)})]},n)})})})},_=()=>{const i=f(),o=[{name:"Gynecologist",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401103165.png",link:"/womenscare/gynecologists",subText:"Get expert tips on women's health  and gynecological care"},{name:"Period Tracker",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401140436.png",link:"/womenscare/periodtrackers",subText:"Track your cycle effortlessly Then you Happy "},{name:"Lactation Support",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401165873.png",link:"/womenscare/lactationsupports",subText:"Discover essential tips and expert advice on breastfeeding"},{name:"Woman’s activity",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401195944.png",link:"/womenscare/womanactivitys",subText:"Empowering women through fitness, wellness tips"},{name:"Nutrition & Diet ",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401230491.png",link:"/womenscare/nutritiondiets",subText:"Unlock the secrets to a healthier you with expert tips"},{name:"Skin care",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401275319.png",link:"/womenscare/skincares",subText:"Bringing clarity and precision to Skin care"}],l=s=>{i.push(s)};return e.jsx(C,{children:e.jsx("div",{className:"Maincontainer mt-4 mb-4",children:e.jsx("div",{className:"row main-rows",children:o.map((s,r)=>e.jsx("div",{className:"card Card-div",children:e.jsxs("div",{className:"card-info",onClick:()=>l(s.link),children:[e.jsx("img",{src:s.image,alt:s.name,className:"rounded-circle mb-3 card-avatar"}),e.jsx("div",{className:"card-title",children:s.name}),e.jsx("div",{className:"card-subtitle mt-2",children:s.subText})]})}))})})})},G=()=>{const i=f(),o=D(),{allWomensPackagesList:l,allVaccinationsList:s}=k(t=>t.generic),{userCity:r,user:d}=k(t=>t.auth),p=t=>{d!=null&&d.id?i.push(`/labPackageDetils/${t==null?void 0:t.service_code}`):o(E(!0))};c.useEffect(()=>{u(r==null?void 0:r.name)},[r==null?void 0:r.name]),c.useEffect(()=>{o(P()),o(S(100))},[]);const u=(t="bengaluru")=>{o(W({city:t==null?void 0:t.toLowerCase()}))},w=()=>{window.location.href="https://play.google.com/store/apps/details?id=com.cognonta.raphacure"},g=()=>{window.location.href="https://apps.apple.com/in/app/raphacure/id1637246098"};return e.jsx(C,{children:e.jsxs("div",{className:"ayurvedaWrapper",children:[e.jsxs("header",{className:"header",children:[e.jsxs("div",{className:"header-content",children:[e.jsxs("h1",{children:["Empowering ",e.jsx("span",{children:"Women's Health "})," with Comprehensive Care"]}),e.jsx("p",{children:'"Discover comprehensive care tailored for every stage of womanhood."'}),e.jsxs("div",{className:"btnWrapper d-flex",children:[e.jsxs("button",{className:"explore-btn btn btn-outline me-5",onClick:w,children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398605307.png",alt:"",className:"me-3"}),"Google Play"]}),e.jsxs("button",{className:"explore-btn btn btn-outline",onClick:g,children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398306279.png",alt:"",className:"me-3"}),"App Store"]})]})]}),e.jsx("div",{className:"img-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400999522.png",alt:""})})]}),e.jsxs("div",{className:"radiologyParentDiv",children:[e.jsxs(x,{fluid:!0,className:"categoryContainer",children:[e.jsx("h5",{className:"categoryText",children:"Category"}),e.jsx(h,{children:e.jsx(m,{className:"categoryCol",children:e.jsx(_,{})})})]}),e.jsxs(x,{fluid:!0,className:"categoryContainer",children:[e.jsx("h5",{className:"categoryText",children:"Best packages For Women’s "}),e.jsx(h,{children:e.jsx(m,{className:"categoryCol",children:e.jsx(M,{fromPage:"womanscare",addToCart:p,list:l==null?void 0:l.packages})})})]}),e.jsxs(x,{fluid:!0,className:"categoryContainer mt-4",children:[e.jsx("h5",{className:"categoryText",children:"Vaccinations Every Woman Needs "}),e.jsx(h,{children:e.jsx(m,{className:"categoryCol",children:e.jsx(I,{fromPage:"womanscare",addToCart:p,list:s==null?void 0:s.tests})})})]})]})]})})};export{G as default};
