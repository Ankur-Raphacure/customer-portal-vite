import{d as u,u as f,r,j as e,du as a,a3 as i}from"./index-BHf3qlKB.js";import{R as c}from"./Row-f7XalRoN.js";const j=u.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 99%;
    padding-bottom: 100px;
  }
  .header {
    background: linear-gradient(to bottom right, #c896c8, #faf9f9, #c896c8);
    color: white;
    text-align: left;
    padding-left: 4rem;
    position: relative;
    margin-bottom: 3rem;
  }
  .text-dark {
    text-decoration: none;
    padding: 0;
  }
  .title {
    font-size: 36px;
    line-height: 50px;
    font-weight: 800;
    color: #000;
    span {
      color: #ffcc00;
    }
  }
  .lead {
    width: 738px;
    font-size: 18px;
    line-height: 33px;
    color: #6f6f6f;
    font-weight: 400;
    opacity: 0.7;
    margin-top: 3rem;
  }
  .str-btn {
    width: 25%;
    box-shadow: 2px 2px 18px rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    background-color: #9747ff;
    height: 50px;
    color: #fff;
    margin-top: 5rem;
  }
  .CheckmarkWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #28a745;
  }
  .CheckmarkIcon {
    width: 8px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 3px;
  }
  .sub-discription {
    font-style: italic;
    color: #000;
    opacity: 0.4;
  }
  .options {
    width: 266px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-top: 1.5rem;
  }
  .leads {
    color: #318200;
    font-size: 20px;
    font-weight: 500;
    width: 89%;
    margin-top: 2rem;
  }
  .Period-title {
    font-size: 56px;
    line-height: 120%;
    font-weight: 600;
    color: #4f4f4f;
  }
  .img-fluid {
    max-width: 100%;
    height: 30rem;
  }
  @media (max-width: 679px) {
    .title {
      width: 20rem;
      margin-top: 3rem;
    }
    .text-muted {
      width: 20rem;
    }
    .image-cls {
      margin-top: 2rem;
    }
    .Period-title {
      width: 20rem;
    }
    .lead {
      width: 20rem;
    }
  }
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: transform 1000ms ease;
  }
  .slide {
    display: inline-block;
    height: 500px;
    width: 100%;
    border-radius: 40px;
  }
  .slide {
    img {
      height: 100%;
      width: 100%;
    }
  }
`,w=2500,d=[{id:1,img_1:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400637454.png"},{id:2,img_1:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400711796.png"},{id:3,img_1:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400738248.png"}],N=()=>{const l=f(),[o,m]=r.useState(0),t=r.useRef(null),h=()=>{l.push("/womenscare/keyaspects")};function n(){t.current&&clearTimeout(t.current)}const p=()=>{window.location.href="https://play.google.com/store/apps/details?id=com.cognonta.raphacure"},x=()=>{window.location.href="https://apps.apple.com/in/app/raphacure/id1637246098"};return r.useEffect(()=>(n(),t.current=setTimeout(()=>m(s=>s===d.length-1?0:s+1),w),()=>{n()}),[o]),e.jsx(j,{children:e.jsxs("div",{className:"ayurvedaWrapper",children:[e.jsxs(c,{className:"header",children:[e.jsxs(a,{xs:11,md:8,children:[e.jsx(i,{variant:"link",className:"text-dark",onClick:()=>l.push("/womenscare"),children:"Back"}),e.jsxs("h1",{className:"font-weight-bold mt-3 title ",children:["Enhance ",e.jsx("span",{children:"Women's"})," Lives Through ",e.jsx("span",{children:"Activity"})]}),e.jsxs("p",{className:"lead",children:['"Your overall health depends on your lifestyle habits. Diet, sleep, exercise, stress management, work satisfaction, and positive relationships all contribute to your ',e.jsx("br",{}),'well-being. Take this test to see how healthy your lifestyle is."']}),e.jsx(i,{variant:"primary",size:"lg",className:" str-btn",onClick:h,children:"Start Now"})]}),e.jsx(a,{xs:12,md:4,className:"d-flex justify-content-center align-items-center",children:e.jsx("div",{className:"img-div mt-2",children:e.jsx("div",{className:"slideshow",children:e.jsx("div",{className:"slideshowSlider",style:{transform:`translate3d(${-o*100}%, 0, 0)`},children:d.map((s,g)=>e.jsx("div",{className:"slide",children:e.jsx("img",{src:s.img_1,alt:""})},g))})})})})]}),e.jsxs(c,{className:"align-items-center mt-5",children:[e.jsx(a,{lg:4,md:4,className:"text-center mb-4 mb-md-0",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400799590.png",alt:"Period Tracker App",className:"img-fluid"})}),e.jsxs(a,{lg:8,md:6,className:"position-relative",children:[e.jsx("h1",{className:"display-6 Period-title",children:"My Activity"}),e.jsxs("p",{className:"leads",children:["Rapha Cure's",e.jsxs("span",{className:"sub-discription",children:[""," mobile app offers personalized support, whether you choose yoga, meditation, or mindful walking. Tailored to your needs, it guides you to maintain a balanced, healthy lifestyle"]})]}),e.jsxs("ul",{className:"list-unstyled",children:[e.jsxs("li",{className:"mb-3 options d-flex align-items-center",children:[e.jsx("div",{className:"me-2 CheckmarkWrapper",children:e.jsx("div",{className:"CheckmarkIcon"})}),"All-in-One Wellness Tracking"]}),e.jsxs("li",{className:"mb-3 options d-flex align-items-center",children:[e.jsx("div",{className:"me-2 CheckmarkWrapper",children:e.jsx("div",{className:"CheckmarkIcon"})}),"Personalized Health Plans"]}),e.jsxs("li",{className:"mb-3 options d-flex align-items-center",children:[e.jsx("div",{className:"me-2 CheckmarkWrapper",children:e.jsx("div",{className:"CheckmarkIcon"})}),"Holistic Wellness Approach"]}),e.jsxs("li",{className:"mb-3 options d-flex align-items-center",children:[e.jsx("div",{className:"me-2 CheckmarkWrapper",children:e.jsx("div",{className:"CheckmarkIcon"})}),"Expert Support"]}),e.jsxs("li",{className:"mb-3 options d-flex align-items-center",children:[e.jsx("div",{className:"me-2 CheckmarkWrapper",children:e.jsx("div",{className:"CheckmarkIcon"})}),"Preventive Care Focus"]}),e.jsxs("li",{className:"mb-3 options d-flex align-items-center",children:[e.jsx("div",{className:"me-2 CheckmarkWrapper",children:e.jsx("div",{className:"CheckmarkIcon"})}),"Community Connections"]}),e.jsxs("div",{className:"d-flex justify-content-center justify-content-lg-start butons-div",children:[e.jsxs(i,{variant:"dark",className:"me-3 ",size:"lg",onClick:p,children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398605307.png",alt:"Google Play",className:"me-3 Google-Play-div"}),"Google Play"]}),e.jsxs(i,{variant:"dark",size:"lg",onClick:x,children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398306279.png",alt:"App Store",className:"me-3 App-Store-div"}),"App Store"]})]})]})]})]})]})})};export{N as default};
