import{d as j,b as v,u as _,r as d,a as k,j as e,ag as C,ah as Y,c as X,v as S,go as T,bE as w,eE as f,ed as I}from"./index-CitTC1Lo.js";const R=j.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
    padding-bottom: 100px;
    /* height: 12rem; */
  }
  .header {
    background: linear-gradient(to left, #9747ff, #000033, #9747ff);
    color: white;
    text-align: left;
    padding-left: 4rem;
    position: relative;
    margin-bottom: 3rem;
  }
  .header-content h1 {
    width: 520px;
    font-size: 47px;
    line-height: 55px;
    font-weight: 700;
    margin-top: 2rem;
  }

  .header-content h1 span {
    color: #ffd700;
  }

  .header-content p {
    width: 430px;
    font-size: 20px;
    line-height: 38px;
    font-weight: 300;
    color: #a5a5a5;
    font-style: italic;
    margin-top: 1rem;
  }
  .hospital_img img {
    opacity: 0.9;
    border-radius: 0.625rem;
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
  .Appointment-btn {
    width: 75%;
    border-radius: 3px;
    border: 1px #fff;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 600;
    height: 2.5rem;
  }
  .back-btn {
    border: none;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
    margin-top: -34%;
  }
  @media (max-width: 760px) {
    .back-btn {
      margin-top: 3rem;
    }
    .header-content h1 {
      width: 20rem;
      font-size: 47px;
      line-height: 55px;
      font-weight: 700;
      margin-top: 2rem;
    }
    .header-content p {
      width: 270px;
      font-size: 20px;
      line-height: 38px;
      font-weight: 300;
      color: #a5a5a5;
      font-style: italic;
      margin-top: 1rem;
    }
  }
`,A=j.div`
  body {
    font-family: "Roboto";
    color: #fff;
    background-color: #444;
    margin: 0;
    padding: 0;
  }

  .cascade-slider_container {
    position: relative;
    width: 100%;
    height: 17rem;
    margin: 25px auto;
    overflow-x: hidden;
  }
  .cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3);
    transition: all 1s ease;
    opacity: 0;
    z-index: -1;
    text-align: center;
  }
  .cascade-slider_item.next {
    left: 50%;
    transform: translateY(-50%) translateX(-135%) scale(0.8);
    filter: brightness(85%);
    opacity: 1;
    z-index: 1;
  }
  .cascade-slider_item.prev {
    left: 50%;
    transform: translateY(-50%) translateX(35%) scale(0.8);
    filter: brightness(85%);
    opacity: 1;
    z-index: 1;
  }
  .cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 5;
  }
  .cascade-slider_arrow {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    z-index: 5;
    background: #bab7b7;
    border-radius: 100%;
    height: 29px;
    width: 29px;
  }
  .lft-arrow {
    margin-left: 5px;
  }
  .rft-arrow {
    margin-left: 7px;
  }
  .cascade-slider_arrow-left {
    left: 45%;
  }
  .cascade-slider_arrow-right {
    right: 45%;
  }
  .cascade-slider_arrow-left img {
    height: 40px;
    left: 40px;
  }
  .cascade-slider_arrow-right img {
    height: 40px;
    left: 40px;
  }
  .cascade-slider_dot {
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 1px solid #4196ef;
    margin: 3px;
    transition: all 0.5s;
    background: none;
    list-style: none;
    cursor: pointer;
    border-radius: 50px;
  }
  .cascade-slider_dot:hover {
    background: #2c8fab;
  }
  .cascade-slider_dot.cur {
    background: #2c8fab;
    width: 17px;
    height: 17px;
  }

  /*Profile card classes*/
  .card {
    background-color: #fff;
    color: #243c82;
    width: 300px;
    height: 250px;
    border-radius: 20px;
    transition: all 1s 0s;
    vertical-align: middle;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
  .subtitle {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 98%;
    text-align: center;
    letter-spacing: 0.055em;
    color: #243c82;
  }
  .content {
    font-family: Roboto;
    font-weight: 300;
  }
  .button {
    transform: translateX(23px) translateY(15px);
    position: absolute;
    padding: 12px 17px;
    border-radius: 30px;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #243c82;
  }

  @media (min-width: 460px) and (max-width: 680px) {
    .cascade-slider_item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.3);
      transition: all 1s ease;
      opacity: 0;
      z-index: -1;
      text-align: center;
    }
    .cascade-slider_item.next {
      left: 50%;
      transform: translateY(-50%) translateX(-90%) scale(0.4);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.prev {
      left: 50%;
      transform: translateY(-50%) translateX(-10%) scale(0.4);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.now {
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.6);
      opacity: 1;
      z-index: 5;
    }
    .cascade-slider_arrow-left img {
      height: 30px;
      left: 30px;
    }
    .cascade-slider_arrow-right img {
      height: 30px;
      left: 30px;
    }
  }
  @media (max-width: 460px) {
    .cascade-slider_item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.3);
      transition: all 1s ease;
      opacity: 0;
      z-index: -1;
      text-align: center;
    }
    .cascade-slider_item.next {
      left: 50%;
      transform: translateY(-50%) translateX(-80%) scale(0.3);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.prev {
      left: 50%;
      transform: translateY(-50%) translateX(-20%) scale(0.3);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.now {
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.5);
      opacity: 1;
      z-index: 5;
    }
    .cascade-slider_arrow-left img {
      height: 30px;
      left: 30px;
    }
    .cascade-slider_arrow-right img {
      height: 30px;
      left: 30px;
    }
  }
  .image-div {
    width: 100px;
    height: 100px;
    background-color: #989c9b;
  }
  .CTcard-Subtitle {
    font-size: 12px;
    color: #00a355;
  }
  .CTcard-title {
    margin: 0 !important;
    top: 135px;
    left: 42px;
    font-size: 16px;
    line-height: 25px;
    color: #313030;
    text-align: center;
  }
  .custom-btn {
    width: 100%;
    position: relative;
    background-color: #9747ff;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
  }
  .carosel-header {
    width: 349px;
    position: relative;
    font-size: 24px;
    line-height: 50px;
    font-weight: 600;
    color: #343434;
    text-align: left;
    display: inline-block;
    margin-left: 37%;
  }
  @media (max-width: 516px) {
    .carosel-header {
      width: 300px;
      position: relative;
      font-size: 24px;
      line-height: 50px;
      font-weight: 600;
      color: #343434;
      text-align: left;
      display: inline-block;
      margin-left: 37%;
    }
  }
  .card-align-div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 80%;
    }
  }
`,E=r=>{var b;const n=r.doctorsList,l=((b=r.doctor)==null?void 0:b.gender)==="male"?"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png":"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png",s=n==null?void 0:n.filter(t=>{var i;return(t==null?void 0:t.specialization)==="Gynecologist"||((i=t==null?void 0:t.specialization)==null?void 0:i.includes("Gynecologist"))}),o=v(),m=_(),[a,p]=d.useState(0),c=s==null?void 0:s.length,u=t=>{t==="next"?a<c-1&&p(i=>i+1):t==="prev"&&a>0&&p(i=>i-1)},N=t=>t===a?"now":t===(a+1)%c?"next":t===(a-1+c)%c?"prev":"",{user:x}=k(t=>t.auth),z=(t,i)=>{x!=null&&x.id?(o(S({doctorDetails:{...t},consultationType:i,hospitalDetails:{},categoryType:"doctor",slot1:{},slot2:{}})),m.push("/doctor/bookingReview")):o(X(!0))};return e.jsxs(A,{children:[e.jsx("h4",{className:"carosel-header",children:"Meet Our Best Gynecologists"}),e.jsx("div",{className:"cascade-slider_container",id:"cascade-slider",children:e.jsx("div",{className:"cascade-slider_slides",children:s==null?void 0:s.map((t,i)=>e.jsx("div",{className:`cascade-slider_item ${N(i)}`,"data-slide-number":i,children:e.jsxs("div",{className:"card align card-align-div",children:[e.jsx("img",{src:t!=null&&t.image?t==null?void 0:t.image:l,className:"rounded-circle mb-3 image-div",alt:t.name}),e.jsx("h5",{className:"CTcard-title",children:t==null?void 0:t.name}),e.jsx("p",{className:"CTcard-Subtitle",children:t==null?void 0:t.specialization}),e.jsx("button",{className:"btn custom-btn",onClick:()=>z(t,"VIRTUAL"),children:"Book Now"})]})},i))})}),e.jsx("span",{className:`cascade-slider_arrow cascade-slider_arrow-left ${a===0?"disabled":""}`,onClick:()=>u("prev"),children:e.jsx(C,{className:"lft-arrow"})}),e.jsx("span",{className:`cascade-slider_arrow cascade-slider_arrow-right ${a===c-1?"disabled":""}`,onClick:()=>u("next"),children:e.jsx(Y,{className:"rft-arrow"})})]})},G=2500,y=[{id:1,img_1:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736339981454.png"},{id:2,img_1:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340025586.png"}],M=()=>{const r=_(),n=v(),[h,g]=d.useState(0),l=d.useRef(null),{doctorsList:s}=k(a=>a.doctor);function o(){l.current&&clearTimeout(l.current)}d.useEffect(()=>(o(),l.current=setTimeout(()=>g(a=>a===y.length-1?0:a+1),G),()=>{o()}),[h]),d.useEffect(()=>{n(T({count:1e3,page:0,searchText:""}))},[0]);const m=s==null?void 0:s.doctors;return e.jsx(R,{children:e.jsxs("div",{className:"ayurvedaWrapper",children:[e.jsxs("header",{className:"header d-flex align-items-center mt-2",children:[e.jsx("div",{className:"back-btn",children:e.jsx("button",{className:"btn btn-outline back-btn",onClick:()=>r.push("/womenscare"),children:"Back"})}),e.jsx("div",{children:e.jsxs(w,{className:"w-100",children:[e.jsx(f,{xs:12,md:6,className:"d-flex flex-column justify-content-center",children:e.jsxs("div",{className:"header-content",children:[e.jsxs("h1",{children:['"Your Health, ',e.jsx("br",{}),"Our Priority Expert",e.jsx("span",{children:' Gynecological Care"'})]}),e.jsx("p",{className:"",children:"Expert gynecological care tailored to your needs. Your health and well-being are our priority."}),e.jsx("div",{className:"btnWrapper d-flex",children:e.jsx("button",{className:"Appointment-btn btn btn-outline",onClick:()=>r.push("/doctor?q=Gynecologist"),children:"Make an Appointment"})})]})}),e.jsx(f,{xs:12,md:6,children:e.jsx("div",{className:"img-div mt-2",children:e.jsx("div",{className:"slideshow",children:e.jsx("div",{className:"slideshowSlider",style:{transform:`translate3d(${-h*100}%, 0, 0)`},children:y.map((a,p)=>e.jsx("div",{className:"slide",children:e.jsx("img",{src:a.img_1,alt:""})},p))})})})})]})})]}),e.jsx("div",{className:"radiologyParentDiv",children:e.jsx(I,{fluid:!0,className:"categoryContainer mt-4",children:e.jsx(w,{children:e.jsx(f,{className:"categoryCol",children:e.jsx(E,{doctorsList:m})})})})})]})})};export{M as default};
