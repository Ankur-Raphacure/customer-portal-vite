import{d as a,r as i,j as e,g_ as u,g$ as f,L as d,h0 as L,h1 as g,h2 as C,h3 as x,fP as y,h4 as v,h5 as b}from"./index-CitTC1Lo.js";import w from"./RPLogin-DOk_63p7.js";import M from"./ComingSoon-BbWvw9RY.js";import{g as Z,A as j}from"./appstore-RUnmWlpR.js";const H=a.div`
  width: 100%;
  .text-underline-effect {
    position: relative;
  }

  .text-underline-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 3px solid #27b3a4;
    left: 0;
    bottom: -12px;
    border-radius: 50%;
    height: 15px;
  }
`,V=a.div`
  .hero-image img {
    max-width: 100vw;
  }

  .hero-image {
    margin: 1rem 0;
    position: relative;
  }
  .imgWrapperDiv {
    img {
      max-width: 100vw;
      height: 500px;
      width: 100%;
      object-fit: cover;
    }
  }
  .overlayWrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 1rem;
    font-family: Poppins;
  }

  .timelineWrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .overlayWrapper h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-text-wrapper {
    margin-bottom: 0;
    padding: 1rem;
    text-align: center;
  }

  .background-style-span {
    background: linear-gradient(180deg, #1e918c, #2b4663);
    padding: 0.2rem 0.7rem;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }

  .plus-icon {
    vertical-align: super;
  }

  .text-underline-effect {
    position: relative;
  }

  .text-underline-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 3px solid #27b3a4;
    left: 0;
    bottom: -12px;
    border-radius: 50%;
    height: 15px;
  }

  .software-promo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 2rem;
    width: 100vw;
    height: 80vh;
    box-sizing: border-box;
  }

  .promo-text {
    flex: 1;
    text-align: left;
    padding-right: 2rem;
    max-width: 40%;
  }

  .promo-text h2 {
    font-weight: bold;
  }

  .promo-text p {
    color: #27b3a4;
  }

  .promo-image {
    flex: 1;
    height: 100%;
  }

  .button {
    background: linear-gradient(135deg, #2bb3a5, #001e3a);
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    margin: 10px 0;
  }

  .button:hover {
    background: #1f8c89;
  }

  .compare-benefits {
    background: #fff;
    padding: 2rem;
    width: 100vw;
    box-sizing: border-box;
  }

  .compare-benefits > h2 {
    text-align: center;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
  }

  .th,
  .td {
    color: #1e918c;
    padding: 1rem;
    text-align: center;
    border-bottom: 2px solid #2b4663;
  }

  .th {
    width: 25%;
  }

  .td {
    border-bottom: 1px solid #e0e0e0;
  }

  .feature {
    background: linear-gradient(135deg, #09a3b2, #878b90);
    border: none;
    font-family: Poppins;
    color: white;
  }

  .price {
    font-weight: bold;
    color: #1e918c;
  }

  .icon {
    height: 3rem;
    margin-right: 0.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .primeHead {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    .compare-benefits {
      overflow: scroll;
    }
    .hero-image img {
      max-width: 100%;
    }
    .software-promo,
    .compare-benefits {
      width: 100%;
    }
  }
`,k=a.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .upperHalf,
  .lowerHalf {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .upperHalf {
    flex-direction: row;
  }

  .upperInfo,
  .lowerHalf div {
    display: flex;
    gap: 20px;
  }

  .upperInfo {
    flex-direction: column;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .imgDropzone {
    border: 2px dashed #ccc;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    color: #888;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.7rem;
    }
  }

  .imgDropzone:hover {
    border-color: #888;
  }

  .citySelect,
  .stateSelect,
  .pinCode,
  .servicesSelect {
    width: 100%;
  }

  .button {
    background: linear-gradient(135deg, #2bb3a5, #001e3a);
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    margin: 10px 0;
  }

  .button:hover {
    background: #1f8c89;
  }
`,A=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`,N=a.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  & > svg {
    float: right;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    transform: translate(0%, -50%);
  }
`,P=t=>i.createElement("svg",{width:47,height:41,viewBox:"0 0 47 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M24.4213 10.0471L24.5141 10.0748L24.5197 10.0684C24.8309 10.1108 25.1336 9.92079 25.2251 9.61186C26.0137 6.9624 28.4982 5.11119 31.266 5.11119C31.6229 5.11119 31.9123 4.82176 31.9123 4.46491C31.9123 4.10804 31.6229 3.81863 31.266 3.81863C27.8162 3.81863 24.9173 6.11556 23.9865 9.24347C23.8845 9.58566 24.0794 9.94518 24.4213 10.0471Z",fill:"#27B3A4",stroke:"#F9FFF9",strokeWidth:.3}),i.createElement("path",{d:"M38.2134 28.7826H35.2358C34.9618 28.7826 34.7396 28.5603 34.7396 28.2863C34.7396 28.0123 34.9618 27.79 35.2358 27.79H38.2134C42.3179 27.79 45.6575 24.4504 45.6575 20.3459C45.6575 16.2414 42.3179 12.9018 38.2134 12.9018H38.1418C37.9979 12.9018 37.8611 12.8394 37.7668 12.7306C37.6725 12.6218 37.63 12.4775 37.6505 12.335C37.6948 12.0259 37.7172 11.7154 37.7172 11.413C37.7172 7.85578 34.8228 4.96139 31.2656 4.96139C29.8817 4.96139 28.5619 5.39386 27.4488 6.21234C27.2042 6.39207 26.8568 6.31231 26.7154 6.04325C23.563 0.0404892 15.3293 -0.765621 11.0606 4.45626C9.2623 6.65616 8.55574 9.51788 9.12192 12.307C9.18431 12.615 8.94857 12.9022 8.63556 12.9022H8.4367C4.33219 12.9022 0.992596 16.2418 0.992596 20.3463C0.992596 24.4508 4.33219 27.7904 8.4367 27.7904H11.4143C11.6883 27.7904 11.9106 28.0127 11.9106 28.2867C11.9106 28.5607 11.6883 28.783 11.4143 28.783H8.4367C3.78481 28.783 0 24.9982 0 20.3463C0 15.8249 3.57527 12.1226 8.04712 11.9184C7.62706 9.02478 8.43032 6.10598 10.292 3.82813C14.8623 -1.7631 23.621 -1.1364 27.3235 5.09823C28.5047 4.35771 29.8563 3.96924 31.2654 3.96924C35.5752 3.96924 38.9903 7.63743 38.6915 11.9231C43.1221 12.1716 46.6499 15.8543 46.6499 20.3459C46.6499 24.9982 42.8651 28.7826 38.2132 28.7826L38.2134 28.7826Z",fill:"#27B3A4"}),i.createElement("path",{d:"M10.7016 28.006C10.7016 34.9301 16.3345 40.563 23.2586 40.563C30.1827 40.563 35.8156 34.93 35.8156 28.006C35.8156 21.0819 30.1827 15.449 23.2586 15.449C16.3344 15.449 10.7016 21.082 10.7016 28.006ZM11.9943 28.006C11.9943 21.7951 17.0476 16.7418 23.2586 16.7418C29.4694 16.7418 34.5228 21.795 34.5228 28.006C34.5228 34.2169 29.4694 39.2702 23.2586 39.2702C17.0477 39.2702 11.9943 34.2169 11.9943 28.006Z",fill:"#27B3A4",stroke:"#F9FFF9",strokeWidth:.3}),i.createElement("path",{d:"M22.972 33.0006C22.972 33.2841 23.2019 33.514 23.4853 33.514C23.7687 33.514 23.9987 33.2844 23.9987 33.0006V23.554C23.9987 23.2705 23.7688 23.0407 23.4853 23.0407C23.2019 23.0407 22.972 23.2706 22.972 23.554V33.0006Z",fill:"#27B3A4",stroke:"#27B3A4",strokeWidth:.3}),i.createElement("path",{d:"M23.4853 24.281L20.9417 26.8245L20.9417 26.8246L23.4853 24.281ZM23.4853 24.281L26.0289 26.8246C26.129 26.9247 26.2608 26.975 26.3919 26.975L23.4853 24.281ZM23.8483 23.1921C23.6478 22.9916 23.3226 22.9914 23.1222 23.1921L26.3919 26.975C26.5227 26.975 26.6546 26.9252 26.755 26.8245C26.9554 26.624 26.9554 26.2992 26.7549 26.0987L23.8483 23.1921Z",fill:"#27B3A4",stroke:"#27B3A4",strokeWidth:.3})),R=({handlePopupClose:t})=>{const[o,s]=i.useState(!1),n=()=>{s(!1)},r=l=>{console.log("img : ",l)};return e.jsxs(A,{children:[e.jsx(u,{show:o,handleClose:n,handleImageUploadSuccess:r}),e.jsxs(N,{onClick:l=>l.stopPropagation(),children:[e.jsx(f,{onClick:t,color:"red",size:30}),e.jsxs(k,{children:[e.jsxs("div",{className:"upperHalf",children:[e.jsxs("div",{className:"upperInfo",children:[e.jsx("div",{children:e.jsx("input",{type:"text",name:"fullName",id:"fullName",placeholder:"Full Name"})}),e.jsx("div",{children:e.jsx("input",{type:"tel",name:"phoneNumber",id:"phoneNumber",placeholder:"Phone Number"})}),e.jsx("div",{children:e.jsx("input",{type:"email",name:"emailId",id:"emailId",placeholder:"Email Id"})})]}),e.jsxs("div",{className:"imgDropzone",onClick:()=>s(!0),children:[e.jsx(P,{}),e.jsx("h2",{children:"Click Here to Upload Files"}),e.jsx("h3",{children:"Supported Formates are : JPEG, PNG, GIF, PDF"}),e.jsx("h3",{children:"File size max 10kb"})]})]}),e.jsxs("div",{className:"lowerHalf",children:[e.jsxs("div",{children:[e.jsx("div",{className:"citySelect",children:e.jsxs("select",{id:"city",name:"city",defaultValue:"blr",children:[e.jsx("option",{value:"kol",children:"Kolkata"}),e.jsx("option",{value:"blr",children:"Bengaluru"}),e.jsx("option",{value:"mb",children:"Mumbai"})]})}),e.jsx("div",{className:"stateSelect",children:e.jsxs("select",{id:"state",name:"state",defaultValue:"ka",children:[e.jsx("option",{value:"",children:"Select an option"}),e.jsx("option",{value:"wb",children:"West Bengal"}),e.jsx("option",{value:"ka",children:"Karnataka"}),e.jsx("option",{value:"up",children:"Uttar Pradesh"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"pinCode",children:e.jsx("input",{type:"text",name:"pinCode",id:"pinCode",placeholder:"Pin code"})}),e.jsx("div",{className:"servicesSelect",children:e.jsxs("select",{id:"services",name:"services",defaultValue:"",children:[e.jsx("option",{value:"",children:"Choose Your Services"}),e.jsx("option",{value:"onsite",children:"Onsite Consult"}),e.jsx("option",{value:"rem",children:"Remote Consult"}),e.jsx("option",{value:"home",children:"In Home Consult"})]})})]}),e.jsx("textarea",{name:"description",id:"description",placeholder:"Describe yourself"})]}),e.jsx("button",{className:"button",onClick:()=>{},children:"Activate Now"})]})]})]})},E=a.div`
  .timelineWrap {
    overflow: hidden;
  }
  .timeline button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .timeline {
    white-space: nowrap;
    overflow-x: hidden;
    width: 200vw;
  }

  .timeline > ol {
    font-size: 0;
    width: 100vw;
    padding: 100px 0;
    transition: all 1s;
    animation: cambio 20s infinite linear;
  }
  .just-date {
    z-index: 9;
  }

  .timeline > ol > li {
    position: relative;
    display: inline-block;
    list-style-type: none;
    width: 160px;
    height: 3px;
    background: black;

    /* AutoScroll */
    padding: 0 10px;
    list-style: none;
  }

  .timeline > ol > li:last-child {
    width: 250px;
  }

  .timeline > ol > li:not(:last-child) span.show-info {
    content: "";
    cursor: pointer;
    position: absolute;
    /* top: 50%; */
    left: calc(100% + 1px);
    bottom: 0;
    width: 30px;
    height: 30px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: linear-gradient(to bottom, #17736f, #2bd9d1);
  }

  .timeline > ol > li:not(:last-child) .just-date {
    position: absolute;
    height: auto;
    opacity: 1;
    right: -35px;
    top: -5px;
    /* z-index: -1; */
  }

  .timeline > ol > li.flip .just-date {
    top: -95px !important;
  }

  .timeline > ol > li.flip .circle {
    top: -15px !important;
  }

  .timeline > ol > li:nth-child(odd) .just-date {
    top: 28px;
  }

  .timeline > ol > li:nth-child(even) .just-date {
    top: -40px;
    display: none;
  }

  .timeline > ol > li:nth-child(odd) .circle {
    top: 18px;
  }

  .timeline > ol > li:nth-child(even) .circle {
    top: -12px;
    display: none;
  }

  .timeline > ol > li:not(:last-child) .just-date p {
    font-size: 0.8rem;
    font-weight: normal;
  }

  .timeline time:not(.date) {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .timeLineText {
    margin-top: 43px;
    margin-right: -255px;
    font-family: Inter !important;
    font-size: 16px !important;
    font-weight: bold !important;
  }

  /* TIMELINE ARROWS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

  .timeline .arrows {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  @keyframes cambio {
    from {
      margin-left: 0%;
    }

    to {
      margin-left: -100%;
    }
  }
`;function I(){return i.useEffect(()=>{const t=document.querySelectorAll(".timelineItem"),o=new IntersectionObserver(s=>{s.forEach(n=>{if(n.intersectionRatio>0){const r=n.boundingClientRect,l=window.innerWidth;r.left<=l*.25?n.target.classList.add("flip"):n.target.classList.remove("flip")}else n.target.classList.remove("flip")})},{threshold:[0,1]});return t.forEach(s=>{o.observe(s)}),()=>{t.forEach(s=>{o.unobserve(s)})}},[]),e.jsx(E,{children:e.jsx("div",{className:"timelineWrap",children:e.jsx("section",{className:"timeline",children:e.jsxs("ol",{children:[e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"01"}),e.jsx("p",{className:"timeLineText",children:"Initial Consultation"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"02"}),e.jsx("p",{className:"timeLineText",children:"Design Concept Development"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"03"}),e.jsx("p",{className:"timeLineText",children:"Materials Selection"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"04"}),e.jsx("p",{className:"timeLineText",children:"Site Inspection"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"05"}),e.jsx("p",{className:"timeLineText",children:"Procurement and Project Management"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"06"}),e.jsx("p",{className:"timeLineText",children:"Installation"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"07"}),e.jsx("p",{className:"timeLineText",children:"Styling and Finishing Touches"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{}),e.jsxs("li",{className:"timelineItem",children:[e.jsxs("div",{className:"just-date",children:[e.jsx("h1",{className:"float-end",children:"08"}),e.jsx("p",{className:"timeLineText",children:"Project Completion and Handover"})]}),e.jsx("span",{className:"show-info circle"})]}),e.jsx("li",{})]})})})})}const S=()=>{const[t,o]=i.useState(!1),s=()=>{o(!0)},n=()=>{o(!1)};return e.jsxs(V,{children:[e.jsxs("div",{className:"hero-image",children:[e.jsx("div",{className:"imgWrapperDiv",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406829826.png",alt:"Hospital Hero"})}),e.jsxs("div",{className:"overlayWrapper",children:[e.jsx("h1",{children:"Hospital Management"}),e.jsxs("div",{className:"timelineWrapper",children:[e.jsxs("div",{className:"timeline-text",children:["Reasons why you'll love RAPHA",e.jsx("sup",{children:"+"})," Practices"]}),e.jsx(I,{})]})]})]}),e.jsx("div",{className:"hero-image",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406892650.png",alt:"How Rapha Works"})}),e.jsxs("div",{className:"software-promo",children:[e.jsxs("div",{className:"promo-text",children:[e.jsxs("h2",{children:["Avail your free hospital management"," ",e.jsx("span",{className:"text-underline-effect",children:" software"})]}),e.jsx("p",{children:"Get your free website and management software today! Make your hospital management easier and more streamlined."}),e.jsx("button",{className:"button",onClick:s,children:"Activate your free trial"})]}),e.jsx("div",{className:"promo-image",style:{background:'url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406459201.png") no-repeat right center',backgroundSize:"contain"}})]}),e.jsxs("div",{className:"compare-benefits",children:[e.jsxs("h2",{children:["Compare Benefits With"," ",e.jsx("span",{className:"text-underline-effect",children:"RAPHA"}),e.jsx("sup",{className:"plus-icon",children:"+"})]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{className:"th primeHead",children:["Rapha",e.jsx("sup",{className:"plus-icon",children:"+"})," Feature"]}),e.jsx("th",{className:"th",children:e.jsx("img",{className:"icon",src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406115270.png",alt:"Rapha+"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Invoice Management"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"EMR View & Trends"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Appointment Scheduling"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Digital Prescriptions"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Pharmacy Management"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Analytics & Reporting"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Collaboration"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"External Emergency Support"}),e.jsx("td",{className:"td",children:"Yes"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"feature",children:"Price per User per Month"}),e.jsx("td",{className:"td",children:"Rs 25"})]})]})]})]}),t&&e.jsx(R,{handlePopupClose:n})]})},B=a.div`
  .hero-image img {
    max-width: 100vw;
  }

  .imgWrapperDiv {
    img {
      max-width: 100vw;
      width: 100%;
    }
  }

  .Container {
    display: flex;
    justify-content: center;
  }
  .Contents {
    position: relative;
    z-index: 2;
    text-align: left;
    color: #000;
    margin-right: 8.5rem;
    margin-top: 8rem;
  }
  .BackgroundImage {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .Title {
    letter-spacing: 0px;
    width: 43%;
    position: relative;
    font-size: 40px;
    display: inline-block;
    color: #001e3a;
    text-align: left;
    font-weight: 600;
    line-height: 3rem;
  }
  .Subtitle {
    width: 437px;
    position: relative;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
  }
  .ButtonDiv {
    margin-top: 1.5rem;
  }
  .plus-icon {
    vertical-align: super;
  }
  .Button {
    width: 45%;
    background: linear-gradient(90.61deg, #1e908b 41.29%, #001e3a 73.23%);
    overflow: hidden;
    border: none;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }
  .img_div {
    width: 100%;
  }
  .lineDiv {
    margin-left: 6rem;
    line-height: 0px;
  }
  .lineDiv {
    img {
      line-height: 0px;
      width: 9rem;
      margin-top: -1rem;
    }
  }

  @media (max-width: 700px) {
    .Contents {
      position: relative;
      z-index: 1;
      text-align: none;
      color: #000;
      margin-right: 0rem;
      margin-top: rem;
    }
  }
`,T=()=>e.jsx(B,{children:e.jsxs("div",{className:"Container",children:[e.jsx("div",{className:"BackgroundImage",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415272016.png",alt:"",className:"img_div"})}),e.jsxs("div",{className:"Contents",children:[e.jsx("h5",{className:"Title",children:"We’re here to Increase the quality of healthcare."}),e.jsx("div",{className:"lineDiv",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415152396.png",alt:""})}),e.jsx("p",{className:"Subtitle",children:"Managing a loved one's health with a busy lifestyle can be challenging. RaphaPlus Patient Monitoring offers comprehensive insights and assistance to make it easier."}),e.jsx("div",{className:"ButtonDiv",children:e.jsx("button",{className:"btn Button",children:"Request for demo"})})]})]})}),z=a.div`
  .Main-div {
    padding: 5rem;
  }
  .Sub-title {
    width: 635px;
    position: relative;
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    color: #a6a6a6;
  }
  .right-div h2 {
    margin-top: 6.3rem;
    width: 617px;
    position: relative;
    font-size: 50px;
    font-weight: 600;
    color: #191a15;
    white-space: pre-wrap;
  }
  .rating-txt {
    width: 156px;
    font-size: 18px;
    color: #a6a6a6;
  }

  .rating {
    width: 112px;
    font-size: 18px;
    color: #191a15;
    font-weight: 600;
  }
  .reting-div {
    line-height: 15px;
  }
  .reting-Maindiv {
    gap: 25px;
    margin-top: 4rem;
  }
  .service-title {
    width: 300px;
    font-size: 28px;
    font-weight: 600;
    color: #001e3a;
  }
  .service-description {
    width: 428px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins;
    color: #a6a6a6;
    text-align: left;
    display: inline-block;
  }
  .icon-div {
    /* margin-top: -4rem; */
    border: 1px solid #fff;
    height: 2.5rem;
    width: 2.5rem;
    background: #fff;
  }

  @media (max-width: 700px) {
    .Main-div {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 703px) {
    .Contents {
      margin: auto;
    }
  }
`,U=()=>e.jsx(z,{children:e.jsxs("div",{className:"Main-div d-flex",children:[e.jsxs("div",{className:"right-div",children:[e.jsx("h2",{children:"How we support our pratner all over the India"}),e.jsx("p",{className:"Sub-title mt-4",children:"We track all vitals, assign a dedicated doctor to manage and update treatments, and offer 24/7 support with a wide network of healthcare providers ready to assist promptly."}),e.jsxs("div",{className:"d-flex reting-Maindiv",children:[e.jsxs("div",{className:"reting-div",children:[e.jsx("p",{children:"⭐⭐⭐⭐⭐"}),e.jsx("p",{className:"rating",children:"4.9 / 5 rating"}),e.jsx("p",{className:"rating-txt",children:"On time responce"})]}),e.jsxs("div",{className:"reting-div",children:[e.jsx("p",{children:"⭐⭐⭐⭐⭐"}),e.jsx("p",{className:"rating",children:"4.9 / 5 rating"}),e.jsx("p",{className:"rating-txt",children:"On time responce"})]})]})]}),e.jsx("div",{className:"left-div",children:e.jsxs("div",{className:"container ",children:[e.jsxs("div",{className:"row service",children:[e.jsx("div",{className:"col-2 d-flex align-items-center justify-content-center icon-div",children:e.jsx("i",{className:"service-icon bi bi-heart-pulse",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413112201.png",alt:""})})}),e.jsxs("div",{className:"col-10",children:[e.jsx("h5",{className:"service-title",children:"Health education"}),e.jsx("p",{className:"service-description",children:"Wellness programs provide valuable information on maintaining health."})]})]}),e.jsxs("div",{className:"row service",children:[e.jsx("div",{className:"col-2 d-flex align-items-center justify-content-center icon-div",children:e.jsx("i",{className:"service-icon bi bi-clock-history",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png",alt:""})})}),e.jsxs("div",{className:"col-10",children:[e.jsx("h5",{className:"service-title",children:"Immediate care"}),e.jsx("p",{className:"service-description",children:"Vital tracking and 24/7 support help us keep your health in check and respond immediately to any risks."})]})]}),e.jsxs("div",{className:"row service",children:[e.jsx("div",{className:"col-2 d-flex align-items-center justify-content-center icon-div",children:e.jsx("i",{className:"service-icon bi bi-person-circle",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png",alt:""})})}),e.jsxs("div",{className:"col-10",children:[e.jsx("h5",{className:"service-title",children:"Engagement"}),e.jsx("p",{className:"service-description",children:"You have a dedicated doctor for ongoing engagement, available to answer your questions anytime."})]})]}),e.jsxs("div",{className:"row service",children:[e.jsx("div",{className:"col-2 d-flex align-items-center justify-content-center icon-div",children:e.jsx("i",{className:"service-icon bi bi-person-plus",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png",alt:""})})}),e.jsxs("div",{className:"col-10",children:[e.jsx("h5",{className:"service-title",children:"Personalized treatment"}),e.jsx("p",{className:"service-description",children:"Experience personalized treatment with tailored care plans designed specifically for your needs."})]})]}),e.jsxs("div",{className:"row service",children:[e.jsx("div",{className:"col-2 d-flex align-items-center justify-content-center icon-div",children:e.jsx("i",{className:"service-icon bi bi-person-plus",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413240838.png",alt:""})})}),e.jsxs("div",{className:"col-10",children:[e.jsx("h5",{className:"service-title",children:"Reduced travel"}),e.jsx("p",{className:"service-description",children:"With everything available at your fingertips, you enjoy reduced commute time and increased convenience."})]})]})]})})]})}),W=a.div`
  .software-promo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 2rem;
    width: 100vw;
    height: 80vh;
    box-sizing: border-box;
  }

  .Container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6rem;
    background-color: #fff;
  }
  .BenefitsList {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 33rem;
  }
  .Title {
    font-weight: 600;
    margin-bottom: 4rem;
    width: 429px;
    position: relative;
    font-size: 50px;
    display: inline-block;
    color: #191a15;
    text-align: left;
  }
  .BenefitItem {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .CheckIcon {
    display: inline-block;
    width: 45px;
    height: 25px;
    background-color: #54bd95;
    border-radius: 50%;
    margin-right: 15px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 8px;
      top: 4px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  .BenefitText {
    width: 419px;
    position: relative;
    font-size: 20px;
    line-height: 29.25px;
    text-transform: capitalize;
    font-weight: 600;
    color: #001e3a;
    text-align: left;
    letter-spacing: -1px;
  }
  .img-div {
    margin-left: 6rem;
  }
`,O=()=>e.jsx(W,{children:e.jsx("div",{className:"Container",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsx("h2",{className:"mb-6 Title",children:"What Benefit Will You Get"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsxs("ul",{className:"list-unstyled",children:[e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Instant Alerts"})]}),e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Emergency Support"})]}),e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Customized Care"})]}),e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"24/7 Health Monitoring"})]})]})}),e.jsx("div",{className:"col-6",children:e.jsxs("ul",{className:"list-unstyled",children:[e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Secure Data"})]}),e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Expert Assistance"})]}),e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Free Service"})]}),e.jsxs("div",{className:"BenefitItem",children:[e.jsx("div",{className:"CheckIcon"}),e.jsx("div",{className:"BenefitText",children:"Integration with Google Fit"})]})]})})]})]}),e.jsx("div",{className:"col-md-6 d-flex justify-content-center align-items-center",children:e.jsx("div",{className:"position-relative mt-3 img-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414404430.png",alt:"Benefits Illustration",className:"img-fluid",style:{maxWidth:"500px"}})})})]})})}),D=a.div`
  .Container {
    display: flex;
    justify-content: center;
    padding: 3rem;
    align-items: center;
    background-color: #fff;
  }
  .FormWrapper {
    background: linear-gradient(
      180.03deg,
      #27b3a4 14.72%,
      rgba(255, 255, 255, 0)
    );
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    height: 499px;
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.25);
  }
  .Title {
    margin-top: 2rem;
    width: 229px;
    position: relative;
    font-size: 30px;
    line-height: 28px;
    font-weight: 600;
    color: #001e3a;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .LableText {
    margin-top: 2rem;
    margin-bottom: 12px;
    width: 100%;
    position: relative;
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 12px;
    font-weight: 500;
    color: #333;
    text-align: left;
    display: inline-block;
  }
  .LableTexts {
    flex: 1;
    width: 100%;
    position: relative;
    font-size: 15px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 12px;
  }
  .Button {
    margin-top: 3rem;
    width: 100%;
    border: none;
    background: linear-gradient(90deg, #27b3a4, #001e3a);
    padding: 10px 24px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
  .RightContainer {
    margin-left: 14rem;
    text-align: left;
  }
  .Heading {
    margin-top: 2rem;
    width: 444px;
    position: relative;
    font-size: 50px;
    font-weight: 600;
    color: #001e3a;
    letter-spacing: 1px;
    margin-left: -2rem;
    line-height: 55px;
  }
  .SubHeading {
    width: 460px;
    position: relative;
    font-size: 18px;
    line-height: 30px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
    margin-top: 20px;
    margin-left: -2rem;
  }
  .SubText {
    margin-top: 1rem;
    width: 117px;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
    display: inline-block;
    height: 16px;
    margin-left: 17rem;
  }
  @media (max-width: 700px) {
    .Container {
      flex-direction: column;
    }
  }
  @media (max-width: 700px) {
    .RightContainer {
      margin: auto;
    }
  }
  @media (max-width: 700px) {
    .right-div {
      margin: 0px 0px 24px 120px;
    }
  }
`,q=()=>e.jsx(D,{children:e.jsxs("div",{className:"Container",children:[e.jsxs("div",{className:"FormWrapper",children:[e.jsx("div",{className:"Title",children:"Get In Touch"}),e.jsx("div",{className:"LableText",children:"Login"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Email or phone number"}),e.jsx("div",{className:"LableTexts",children:"Message"}),e.jsxs("div",{className:"form-floating",children:[e.jsx("textarea",{className:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"}}),e.jsx("label",{className:"",children:"Message"})]}),e.jsx("button",{className:"btn Button",children:"Request Demo"}),e.jsx("div",{className:"SubText",children:"or Start Free Trial"})]}),e.jsxs("div",{className:"RightContainer",children:[e.jsxs("div",{className:"Heading",children:["People are Saying About Rapha",e.jsx("sup",{className:"plus-icon",children:"+"})]}),e.jsx("div",{className:"SubHeading",children:"RaphaPlus is your one-stop solution for all healthcare management needs, offering some of the most advanced features available."})]})]})}),Y=a.div`
  width: 100%;
  .mainDiv {
    background-color: #f6f9fd;
  }
  .SubDiv {
    margin-top: 6rem;
  }
`,F=()=>e.jsx(Y,{children:e.jsxs("div",{className:"mainDiv",children:[e.jsx(T,{}),e.jsxs("div",{className:"SubDiv",children:[e.jsx(U,{}),e.jsx(O,{}),e.jsx(q,{})]})]})}),J=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
`,K=a.div`
  .quick-links h3 {
    font-size: 1rem;
    text-decoration: underline;
    margin-bottom: 10px;
  }

  .quick-links ul {
    list-style-type: none;
    padding: 0;
  }

  .quick-links li {
    margin-bottom: 10px;
    padding: 5px 0;
    cursor: pointer;
    text-wrap: nowrap;
    color: #001e3a;
    font-weight: bold;
    padding-left: 15px;
  }

  .quick-links a {
    text-decoration: none;
    color: #001e3a;
  }

  .quick-links li.active {
    color: #27b3a4;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #27b3a4;
    border-radius: 0 10px 10px 0;
  }

  .quick-links li.active a {
    color: #27b3a4;
    padding: 0 1rem  0 0;
  }
`,c=()=>{const[t,o]=i.useState();return i.useEffect(()=>{const n=window.location.pathname.split("/").filter(r=>r).pop();o(n)},[]),e.jsx(K,{children:e.jsxs("div",{className:"quick-links",children:[e.jsx("h3",{children:"Quick Links"}),e.jsxs("ul",{children:[e.jsx("li",{className:t==="disclaimer"?"active":"",children:e.jsx(d,{to:"/raphaplus/disclaimer",children:"Disclaimer"})}),e.jsx("li",{className:t==="privacy"?"active":"",children:e.jsx(d,{to:"/raphaplus/privacy",children:"Privacy Policies"})}),e.jsx("li",{className:t==="security"?"active":"",children:e.jsx(d,{to:"/raphaplus/security",children:"Security Policies"})}),e.jsx("li",{className:t==="terms"?"active":"",children:e.jsx(d,{to:"/raphaplus/terms",children:"Terms & Conditions"})}),e.jsx("li",{className:t==="return"?"active":"",children:e.jsx(d,{to:"/raphaplus/return",children:"Refund Policies"})}),e.jsx("li",{className:t==="disclosure"?"active":"",children:e.jsx(d,{to:"/raphaplus/disclosure",children:"Responsible Disclosure Policy"})})]})]})})},Q=()=>e.jsx(J,{children:e.jsxs("div",{className:"policy-container",children:[e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Privacy Policies"}),e.jsxs("p",{children:[e.jsx("strong",{children:"RaphaPlus"})," is committed to protecting and respecting your privacy."]}),e.jsx("p",{children:"RaphaPlus understands that your personal data is entrusted to us and appreciates the importance of protecting and respecting your privacy."}),e.jsx("p",{children:"This Privacy Policy sets out the basis on which we collect and process personal data about you including our practices regarding the collection, use, storage and disclosure of personal data that we collect from you and/or hold about you, and your rights in relation to that data."}),e.jsx("p",{children:"Generally, we will only ask for your consent for processing if there are no other legal grounds to process. In these circumstances, we will always aim to be clear and transparent about why we need your consent and what we are asking it for."})]})]}),e.jsxs("div",{className:"morePolicyInfo",children:[e.jsx("p",{children:"At any subsequent stage, you may contact us at wellness@raphaplus.in and ask to furnish with the ‘Sensitive Personal Data’ that is held by us, pertaining to your user profile. We shall furnish the same to you, within a period of 30 working days from the date of request."}),e.jsxs("p",{children:["Right to withdraw consent. In the limited circumstances where you may have provided your consent to the collection, processing and transfer of your personal information for a specific purpose, you have the right to withdraw your consent for that specific processing at any time. To withdraw your consent, please contact ","",e.jsx("strong",{children:"wellness@raphaplus.in"})," once we have received notification that you have withdrawn your consent, we will no longer process your information for the purpose or purposes you originally agreed to, unless we have another legitimate basis for doing so in law. Please be aware that there are likely to be implications on our ability to continue our working relationship in the event that we are not able to process your personal information."]}),e.jsx("p",{children:"Please read the following carefully to understand how we process your personal data. By providing your personal data to us or by using our services, website or other online or digital platform(s) you are accepting or consenting to the practices as described or referred to in this Privacy Policy."}),e.jsx("p",{children:"When we refer to ‘we’, ‘us’ and ‘our’, we mean RaphaPlus."}),e.jsxs("p",{children:["You may address any discrepancies and grievances pertaining to the information provided by you or with respect to processing of information provided by you at"," ",e.jsx("strong",{children:"wellness@raphaplus.in"})]}),e.jsx("p",{children:"What personal data may we collect from you?"}),e.jsx("p",{children:"When we refer to personal data in this policy, we mean information that can or has the potential to identify you as an individual."}),e.jsx("p",{children:"Accordingly, we may hold and use personal data about you as a customer, a patient or in any other capacity, for example, when you visit one of our websites, complete a form, access our services or speak to us."}),e.jsx("p",{children:"Personal data we collect from you may include the following:"}),e.jsxs("p",{children:["• information that you give us when you enquire or become a customer or patient of us or apply for a job with us including name, address, contact details (including email address and phone number) ",e.jsx("br",{})," • the name and contact details (including phone number) of your next of kin ",e.jsx("br",{})," • details of referrals, quotes and other contact and correspondence we may have had with you ",e.jsx("br",{})," • details of services and/or treatment you have received from us or which have been received from a third party and referred on to us ",e.jsx("br",{})," • information obtained from customer surveys, promotions and competitions that you have entered or taken part in ",e.jsx("br",{})," • recordings of calls we receive or make ",e.jsx("br",{})," • notes and reports about your health and any treatment and care you have received and/or need, including about clinic and hospital visits and medicines administered ",e.jsx("br",{})," • patient feedback and treatment outcome information you provide ",e.jsx("br",{})," • information about complaints and incidents ",e.jsx("br",{})," • information you give us when you make a payment to us, such as financial or credit card information"," ",e.jsx("br",{})," • other information received from other sources, including from your use of websites and other digital platforms we operate or the other services we provide, information from business partners, advertising networks, analytics providers, or information provided by other companies who have obtained your permission to share information about you."]}),e.jsx("p",{children:"Where you have named someone as your next of kin and provided us with personal data about that individual, it is your responsibility to ensure that that individual is aware of and accepts the terms of this Privacy Policy."}),e.jsxs("p",{children:["Where you use any of our websites, we may automatically collect personal data about you including: ",e.jsx("br",{})," • Technical information, including the Internet protocol (IP) address used to connect your computer to the Internet, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform. ",e.jsx("br",{})," • Information about your visit, including the full Uniform Resource Locators (URL), clickstream to, through and from our site (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page."]}),e.jsxs("p",{children:["The data that we request from you may include special category data. This includes information that relates to the following: ",e.jsx("br",{})," • racial or ethnic origin, or ",e.jsx("br",{})," • genetic data, biometric data for the purpose of uniquely identifying a natural person, or ",e.jsx("br",{}),"• medical records and history, health data including but not limited to physical, physiological and mental health conditions, ",e.jsx("br",{})," • or data concerning a natural person's sex life or sexual orientation."]}),e.jsx("p",{children:"When do we collect personal data about you?"}),e.jsx("p",{children:"We may collect personal data about you if you:"}),e.jsxs("p",{children:["• visit one of our websites ",e.jsx("br",{})," • book appointments on our website ",e.jsx("br",{})," • enquire about any of our services or treatments"," ",e.jsx("br",{})," • register to be a customer or patient with us or book to receive any of our services or treatments ",e.jsx("br",{})," • fill in a form or survey for us ",e.jsx("br",{})," • carry out a transaction on our website ",e.jsx("br",{})," ","• participate in a competition or promotion or other marketing activity ",e.jsx("br",{})," • make online payments ",e.jsx("br",{})," • contact us, for example by email, telephone or social media ",e.jsx("br",{})," • participate in interactive features on any of our websites. In the interests of training and continually improving our services, calls to RaphaPlus and its agents may be monitored or recorded. Private calls to and from patients in our clinics are not recorded."]}),e.jsxs("p",{children:["What personal data ",e.jsx("strong",{children:"may we"})," receive from third parties and other sources?"]}),e.jsxs("p",{children:["We may collect personal data about you from third parties such as:"," ",e.jsx("br",{}),"• If you are an employee of one of our corporate clients who has taken up one of our services, we may be passed your name, contact number and email address, in order to get in touch with you to arrange an appointment or collect further information from you;"," ",e.jsx("br",{})," • We have a number of independent third parties acting on our behalf who may collect personal data from you to allow us to carry out the services we offer e.g. an independent physician may carry out your initial Triage call or a subsequent consultation and collect personal data from you which is subsequently shared with RaphaPlus for the continuity of your care and may be used for quality and monitoring purposes; ",e.jsx("br",{})," • We carry out work with panel of specialist for the continuity of your care we may be passed medical information usually in the form of a referral for the purposes of your treatment with RaphaPlus or a third party consultant; ",e.jsx("br",{})," • RaphaPlus ",e.jsx("strong",{children:"uses"})," the services of independent consultants who carry out procedures at our Clinics. Consultants may need to share your personal data and medical records with RaphaPlus.",e.jsx("br",{})," • Insurance providers will pass RaphaPlus personal data of patients who have commenced a claim and require medical treatment",e.jsx("strong",{children:" through"})," RaphaPlus. This will normally be in the form of a referral and may consist of basic details e.g full name, date of birth, address, contact number and email address and the type of procedure/treatment they require."]}),e.jsx("p",{children:"Amendment to your data"}),e.jsxs("p",{children:["You are responsible for maintaining the accuracy of the information you submit to us, such as your contact information provided as part of account registration. If your personal information changes, you may correct, delete inaccuracies, or amend information by making the change on our member information page or by contacting us through",e.jsx("strong",{children:" wellness@raphaplus.in"}),". We will make good faith efforts to make requested changes in our then active databases as soon as reasonably practicable. If you provide any information that is untrue, inaccurate, out of date or incomplete (or becomes untrue, inaccurate, out of date or incomplete), or RaphaPlus has reasonable grounds to suspect that the information provided by you is untrue, inaccurate, out of date or incomplete, RaphaPlus may, at its sole discretion, discontinue the provision of the Services to you. There may be circumstances where RaphaPlus will not correct, delete or update your personal data, including (a) where the personal data is opinion data that is kept solely for evaluative purpose; and (b) the personal data is in documents related to a prosecution if all proceedings relating to the prosecution have not been completed."]}),e.jsx("p",{children:"How do we lawfully process your personal data?"}),e.jsx("p",{children:"Your personal data will be kept confidential and secure and will only be used for the purpose(s) for which it was collected and in accordance with this Privacy Policy, applicable Data Protection Laws, clinical records retention periods and clinical confidentiality guidelines."}),e.jsx("p",{children:"We normally process personal data if it is"}),e.jsxs("p",{children:["necessary to provide you with our services - to enable us to carry out our obligations to you arising from any contract entered into between us and you including relating to the provision by us of services or treatments to you and related matter such as billing, accounting and audit, credit or other payment card verification and anti-fraud screening ",e.jsx("br",{})," • in our or a third party's legitimate interests to do so - see details below ",e.jsx("br",{})," • required or allowed by any applicable law ",e.jsx("br",{})," • with your explicit consent for example direct marketing communications"]}),e.jsx("p",{children:"To process special category data we rely on additional legal grounds and generally, they are as follows"}),e.jsxs("p",{children:["• It is necessary for the purposes of preventive or occupational medicine, To assess,medical diagnosis, to provide health or social care treatment, or to manage health or social care systems and services. This may also include monitoring whether the quality of our services or treatment is meeting expectations. ",e.jsx("br",{})," • It is necessary to establish, make or defend legal claims or court action"," ",e.jsx("br",{})," • It is necessary so that we can comply with employment law"," ",e.jsx("br",{})," • It is necessary for a public interest purpose in line with any laws that are applicable. This should assist in protecting the public against dishonesty, malpractice or other seriously improper behavior for example, investigating complaints, clinical concerns, regulatory breaches."]}),e.jsx("p",{children:"Processing of personal data generally:"}),e.jsxs("p",{children:["As stated above, one of the legal grounds for processing data is where it is in our legitimate interests to do so, taking into account your interest's rights and freedom. This allows us to manage the relationship that exists between you and us and can include the following reasons: ",e.jsx("br",{})," • provide you with information, products or services that you request from us ",e.jsx("br",{})," • managing all aspects of our relationship with you, our products and services and any third parties who may provide products or services on our behalf"," ",e.jsx("br",{})," • allow you to participate in interactive features of our services, when you choose to do so ",e.jsx("br",{})," • notify you about changes to our products or services ",e.jsx("br",{})," • keep our records up to date"," ",e.jsx("br",{})," • respond to requests where we have a legal or regulatory obligation to do so ",e.jsx("br",{})," • check the accuracy of information about you and the quality of your treatment or care, including auditing medical and billing information for insurance claims as well as part of any claims or litigation process ",e.jsx("br",{})," • support your doctor, nurse or other healthcare professional ",e.jsx("br",{})," • assess the quality and/or type of care you have received (including giving you the opportunity to complete customer satisfaction surveys) and any concerns or complaints you may raise, so that these can be properly investigated ",e.jsx("br",{})," • to conduct and analyze market research ",e.jsx("br",{})," ","• to ensure that content from any of our websites is presented in the most effective manner for you and for your computer ",e.jsx("br",{})," • to allow us to enforce our website terms of use, our policy terms and conditions or other contracts, or to protect our or other's rights, property or safety ",e.jsx("br",{})," • to share your personal information with people or ",e.jsx("strong",{children:"organizations"})," in order to run our business or comply with any legal and/or regulatory obligations including to defend ourselves from claims, exercise our rights and adhere to laws and regulations that apply to us and the third parties we work with ",e.jsx("br",{})," • to take part in, or be the subject of, any sale, purchase, merger or takeover of all or part of our business. Exceptions: Our obligations to keep your personal data shall not apply to any information which: ",e.jsx("br",{})," • is at the time of disclosure already in public domain or becomes available to the public through no breach on our part; or ",e.jsx("br",{})," • is received by us from a third party free to lawfully disclose such information belonging to you; or ",e.jsx("br",{})," • was in our lawful possession prior to receipt from us as evidenced by written documentation; or ",e.jsx("br",{})," • is approved for release by written agreement obtained from you; or"," ",e.jsx("br",{})," • is required to be disclosed to comply with legal mandatory regulations, a judicial or official order or decree, provided that written advance notice of such judicial action is given to you."]}),e.jsx("p",{children:"The security of your personal data"}),e.jsxs("p",{children:["We protect all personal data we hold about you by ensuring that we have appropriate organizational and technical security measures in place to prevent unauthorized access or unlawful processing of personal data and to prevent personal data being lost, destroyed or damaged. We conduct assessments to ensure the ongoing security of our information systems. Any personal data you provide will be held for as long as is necessary having regard to the purpose for which it was collected and in accordance with all applicable Indian laws. Personal data that we collect from you may be transferred to, and stored at, a destination ",e.jsx("strong",{children:"outside India"}),". It may also be processed by staff operating outside India who work for us or for one of our suppliers. Where we transfer your personal data outside India we will ensure that there are adequate protections in place for your rights, in accordance with Data Protection Laws. By submitting your personal data, and in providing any personal data to us, you understand the basis for this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your information is treated securely and in accordance with this Privacy Policy. All information you provide to us is stored securely. Any payment transactions on our website will be processed securely by third party payment processors. Where we have given you (or where you have chosen) a password that enables you to access certain parts of our website, you are responsible for keeping that password confidential. We ask you not to share a password with anyone. The transmission of information via the internet cannot be guaranteed as completely secure. However, we ensure that any information transferred to our websites is via an encrypted connection. Once we have received your information, we will use strict procedures and security features to minimize the risk of unauthorized access. At your request, we may occasionally transfer personal information to you via email, or you may choose to transfer information to us via email. Email is not a secure method of information transmission; if you choose to send or receive such information via email, you do so understanding the risks associated with doing so."]}),e.jsx("p",{children:"How long do we retain your personal data?"}),e.jsxs("p",{children:["Unless we explain otherwise to you, we will retain your personal data on the basis of the following guidelines: ",e.jsx("br",{})," • for as long as we have a reasonable business need, such as managing our relationship with you and managing our business ",e.jsx("br",{})," • for as long as we provide services and/or treatment to you and then for as long as someone could bring a claim against us and/or ",e.jsx("br",{})," • in line with legal and regulatory requirements or guidance and in no event more than a period of 8 years"]}),e.jsxs("p",{children:["Disclosure of your personal data to third ",e.jsx("strong",{children:"party"})," In the usual course of our business we may disclose your personal data (which will be limited to the extent reasonably necessary) to certain third party organizations that we use to support the delivery of our services. This may include the following: ",e.jsx("br",{})," • business partners, suppliers and subcontractors for the performance of any contract we enter into with you, ",e.jsx("br",{})," • organisations providing IT systems support and hosting in relation to the IT systems on which your information is stored, ",e.jsx("br",{})," • third party debt collectors for the purposes of debt collection, ",e.jsx("br",{})," • delivery companies for the purposes of transportation, ",e.jsx("br",{})," • third party service providers for the purposes of storage of information and confidential destruction, third party marketing companies for the purpose of sending marketing emails, subject to obtaining appropriate consent. Where a third party data processor is used, we ensure that they operate under contractual restrictions with regard to confidentiality and security, in addition to their obligations under Data Protection Laws. We may also disclose your personal data to third parties in the event that we sell or buy any business or assets or where we are required by law to do so."]}),e.jsx("p",{children:"Special Category/Health information collected during provision of treatment or services"}),e.jsxs("p",{children:["Special category data (including information relating to your health) will only be disclosed to third parties in accordance with this Privacy Policy. That includes third parties involved with your treatment or care, or in accordance with Indian laws and guidelines of appropriate professional bodies. Where applicable, it may be disclosed to any person or organisation who may be responsible for meeting your treatment expenses or their agents. It may also be provided to external service providers and regulatory bodies (unless you object) for the purpose of clinical audit to ensure the highest standards of care and record keeping are maintained. Medical professionals working with us: We share clinical information about you with our medical professionals as we think necessary for your treatment. Medical professionals working with us might be our employees, or they might be independent consultants in private practice. In the case of independent consultants, the consultant is the data controller of your personal data, either alone or jointly with us and will be required to maintain their own records in accordance with Data Protection Laws and applicable clinical confidential guidelines and retention periods. Where that is the case, we may refer you to that consultant to exercise your rights over your data. Our contracts with consultants require them to cooperate with those requests. In all circumstances, those individual consultants will only process your personal data for the purposes set out in this Privacy Policy or as otherwise notified to you. External practitioners: If we refer you externally for treatment, we will share with the person or organisation that we refer you to, the clinical and administrative information we consider necessary for that referral. It will always be clear when we do this. Your GP: If the practitioners treating you believe it to be clinically advisable, we may also share information about your treatment with your GP. You can ask us not to do this, in which case we will respect that request if we are legally permitted to do so, but you should be aware that it can be potentially very dangerous and/or detrimental to your health to deny your GP full information about your medical history, and we strongly advise against Your insurer: We share with your medical insurer information about your treatment, its clinical necessity and its cost, only if they are paying for all or part of your treatment with us. We provide only the information to which they are entitled. If you raise a complaint or a claim we may be required to share personal data with your medical insurer for the purposes of investigating any complaint/claim. ",e.jsx("br",{}),"Regulators: We may be requested – and in some cases can be required - to share certain information (including personal data and special category data) about you and your care with medical regulators, for example if you make a complaint, or the conduct of a medical professional involved in your treatment is alleged to have fallen below the appropriate standards and the regulator wishes to investigate. We will ensure that we do so within the framework of the law and with due respect for your privacy. From time to time we may also make information available on the basis of necessity for the provision of healthcare, but subject always to patient confidentiality. In an emergency and if you are incapacitated, we may also process your personal data (including special category data) or make personal data available to third parties on the basis of protecting your ‘vital interest’ (i.e. your life or your health). We will use your personal data in order to monitor the outcome of your treatment by us and any treatment associated with your care. We participate in national audits and initiatives to help ensure that patients are getting the best possible outcomes from their treatment and care. The highest standards of confidentiality will be applied to your personal data in accordance with Data Protection Laws and confidentiality. Any publishing of this data will be in anonymised, statistical form. Anonymous or aggregated data may be used by us, or disclosed to others, for research or statistical purposes."]}),e.jsx("p",{children:"What do we do with any non-personal information collected when accessing the website?"}),e.jsx("p",{children:"Certain non-personal information which you submit may also be collected to enable us to better understand our customers, to improve our website, to inform general marketing and to help provide a better experience of our services. We may use cookies to do this. We may also use other companies to set cookies on our websites and gather cookie information for us – please refer to the information detailed below. From time to time we may also analyse Internet Protocol (IP) addresses or other anonymous data sources."}),e.jsx("p",{children:"What are Cookies?"}),e.jsx("p",{children:"Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognises that cookie. Cookies are useful because they allow a website to recognise a user’s device. Cookies do lots of different jobs, like letting you navigate between pages efficiently, remembering your preferences, and generally improving your user experience. They can also help to ensure that adverts you see online are more relevant to you and your interests."}),e.jsx("p",{children:"CATEGORY 1 COOKIES"}),e.jsx("p",{children:"These cookies are essential in order to enable you to move around our websites and use its features, such as accessing secure areas of the websites. Without these cookies, services you have asked for cannot be provided. Your consent is not required for the delivery of those cookies which are strictly necessary to provide services requested by you. We use these types of cookies."}),e.jsx("p",{children:"CATEGORY 2 COOKIES"}),e.jsx("p",{children:"These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don’t collect information that identifies a visitor. All the information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works. Web analytics that use cookies to gather data to enhance the performance of a website fall into this category. For example, they may be used for testing designs and ensuring a consistent look and feel is maintained for the user. This category does not include cookies used for behavioral/ targeted advertising networks. We use these types of cookies. By using our website and online services you agree that we can place these types of cookies on your device."}),e.jsx("p",{children:"CATEGORY 3 COOKIES"}),e.jsx("p",{children:"These cookies allow our websites to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customise. They may also be used to provide services you have asked for such as watching a video. The information these cookies collect is generally anonymised and they cannot track your browsing activity on other websites. We use these types of cookies. By using our websites you agree that we can place these types of cookies on your device."}),e.jsx("p",{children:"CATEGORY 4 COOKIES"}),e.jsxs("p",{children:["These cookies are used to deliver adverts more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator’s permission. They remember that you have visited a website and this information is shared with other organisations such as advertisers. Quite often targeting or advertising cookies will be linked to site functionality provided by the other organisation. We do not use these cookies on our website. Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. For more information on our position on the use of cookies, please contact us: ",e.jsx("strong",{children:"wellness@RaphaPlus.in"})]})]})]})}),G=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
  .RaphaPlus-link-div {
    text-decoration: none;
  }
`,X=()=>e.jsx(G,{children:e.jsxs("div",{className:"policy-container",children:[e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Disclaimer"}),e.jsxs("p",{children:["The Url"," ",e.jsx("a",{href:"www.RaphaPlus.in",className:"RaphaPlus-link-div",children:e.jsx("strong",{children:"www.RaphaPlus.in"})})," ","is owned by the legal entity ‘RaphaPlus India Private Limited, India’ The terms and conditions of engagement with Raphaplus as per these general terms and conditions will apply in all cases where you register/avail services from Raphaplus. Only spFecific clause/swhen superseded by specific conditions of contract with you in writing shall have the effect of the overriding conditions and for the balance,our general terms and conditions shall prevail wherever references to Raphaplus general terms and conditions are given."]}),e.jsx("p",{children:'If you do not agree to be bound by (or cannot comply with) any or all of RaphaPlus terms and conditions, do not check/click the "I Agree" box, do not complete the registration process and do not attempt to access or use any services. When you register/access any services of RaphaPlus, you are bound by all of the terms and conditions which are intended to be fully effective and binding.'})]})]}),e.jsxs("div",{className:"morePolicyInfo",children:[e.jsx("p",{children:"RaphaPlus may modify terms and conditions at any time and such modifications shall be effective immediately upon posting the modified agreement. You agree to review agreements periodically to be aware of such modifications and your accessing the RaphaPlus website or app constitutes your acceptance of the RaphaPlus general terms and conditions as it appears at the time of your access or use."}),e.jsx("p",{children:"RaphaPlus Provides Only Primary Healthcare Services And Does Not Treat Medical Emergencies."}),e.jsx("p",{children:"You understand and agree that use of Raphaplus services is entirely at your own risk and that in no event shall Raphaplus be liable for any direct, indirect, incidental, consequential, special, exemplary, punitive, or any other monetary or other damages, fees, fines, penalties, or liabilities arising out of or relating in any way to this site, or sites accessed through this site, app, and / or content or information provided herein. (hereinafter referred to as ‘general indemnity’ protection to Raphaplus)"}),e.jsx("p",{children:"Information provided on Raphaplus website / app should not be construed as medical advice or used for treatment purposes and no content in the website / app intends to provide medical advice, professional diagnosis, opinion, treatment to you or any other individual"}),e.jsx("p",{children:"The information contained in and service delivery by Raphaplus via this website / app could include hypertext links or pointers to information that is created, owned, and managed by external medical service providers (hereinafter called ‘msps’) to assist you in your services or any promotional links When you select a link to an outside website, you agree that you do so at your risk and are subject to the terms and conditions of the owners / sponsors of that outside website Raphaplus does not guarantee the availability of such linked pages at all times The inclusion of any link does not imply affiliation, endorsement, or adoption by us of the linked site."}),e.jsx("p",{children:"You agree to receive reports, documents, notifications, confirmations, administrative messages, communications, phone calls, and messages from Raphaplus or the owners / sponsors of external websites notwithstanding a dnd (do not disturb) registration you may have with the providers of communication channels."}),e.jsx("p",{children:"You agree and grant your consent that Raphaplus may record all conversations, audio, or video calls for purposes of medical records and quality training purposes."}),e.jsx("p",{children:"Raphaplus reserves the right to withdraw, modify, suspend or discontinue any functionality or feature of its website or app at any time without notice."}),e.jsx("p",{children:"The Raphaplus website or app may contain forward-looking statements that do not constitute promises or assertive statements in all context. It is in your discretion to make use of the information or statements provided Raphaplus makes no representation that all information is accurate, latest, or comprehensive"}),e.jsx("p",{children:"Raphaplus is not responsible for complete information or flow not appearing due to faults in certain software, applications, or devices you may be using."}),e.jsx("p",{children:"Data for services available on free of charge on a trial basis may be lost at the end of the trial period and additional terms and conditions may appear or become applicable."}),e.jsx("p",{children:"You agree that in the event of any problem in using Raphaplus website or app, your sole remedy shall be to cease using Raphaplus website or app."}),e.jsx("p",{children:"All contents of this website are the property of Raphaplus We grant you permission to download, store, print, display, and use the content only for your personal use and not for any commercial useYou agree not to reproduce any content without the written consent of Raphaplus."}),e.jsx("p",{children:"Any suggestions received through ‘contact us’ shall become the property of Raphaplus without any obligation and you shall not be entitled to any claim or compensation under any circumstances."}),e.jsx("p",{children:"Raphaplus may for any reason suspend, modify, discontinue, or terminate services or access to you at any time; for cause or convenience without any prior notice. You agree to the same without question or demur."}),e.jsx("p",{children:"You grant Raphaplus the right to assign this contract to its affiliate or in connection with a merger, acquisition, or sale with an intimation on the website or to you."}),e.jsx("p",{children:"In case any of the terms and conditions become inoperative or invalid or unenforceable, the remaining terms shall remain to be effective and valid. Failure of Raphaplus to insist on performance of any one of the terms of this agreement will not mean a waiver of the same term again or any waiver of any other terms or conditions."}),e.jsx("p",{children:"A printed version of this agreement and any related notice given in electronic form shall be admissible in any judicial proceedings to the same extent as any other agreement on paper or printed form By clicking on “i accept” or “agreed” or any such connotation to the electronic agreement, you accept that you digitally give your complete and unequivocal consent to the terms and conditions of Raphaplus."})]})]})}),_=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
  .RaphaPlus-link-div {
    text-decoration: none;
  }
`,$=()=>e.jsx(_,{children:e.jsx("div",{className:"policy-container",children:e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Refund Policies"}),e.jsx("p",{children:"Since this is a service-based policy, refunds will not be encouraged. Our focus is on providing quality service and resolving any issues directly through repairs or adjustments. We aim to ensure customer satisfaction by addressing concerns in a timely and effective manner. If you experience any issues with our service, please contact us, and we will work to find a solution that meets your needs."})]})]})})}),e1=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
`,i1=()=>e.jsx(e1,{children:e.jsxs("div",{className:"policy-container",children:[e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Security Policies"}),e.jsx("p",{children:"1. Introduction"}),e.jsxs("p",{children:[e.jsx("strong",{children:"RaphaPlus"})," shall implement adequate security policies, procedures, and controls to protect confidentiality, maintain integrity, and ensure the availability of information stored, processed and transmitted through its information systems. This Information Security Policy (hereinafter referred to as the ‘Policy’) is a key component of overall information security management framework and should be considered alongside more detailed and organizational specific information security documentation including, system level security policies, security guidance protocols or procedures. Implementation of this policy will ensure adequate information security for our personnel."]}),e.jsx("p",{children:"2. Objective"})]})]}),e.jsxs("div",{className:"morePolicyInfo",children:[e.jsxs("p",{children:["The objective of this policy is to protect RaphaPlus information resources from accidental or intentional unauthorized access, modification or damage, either via internal or external threat by enforcing appropriate controls with following objectives: ",e.jsx("br",{}),"> Confidentiality relates to the protection of sensitive information from unauthorized access. ",e.jsx("br",{}),"> Integrity relates to the accuracy and completeness of information; as well as to the validity of information in accordance with business values and expectations. ",e.jsx("br",{}),"> Availability relates to information being available when required by the business process. ",e.jsx("br",{}),"It also deals with the safeguarding of necessary resources and associated capabilities. RaphaPlus is committed to review and evaluate the performance of ISMS to improve it on a continual basis to protect – business and organizational information. Its information systems comply with relevant laws and regulations, and are committed to comply with the customers’ information security needs and reviewing them on a continual basis."]}),e.jsx("p",{children:"3. Scope"}),e.jsx("p",{children:"The scope of RaphaPlus ISMS and the security policy contained in this document has been established which includes RaphaPlus employees, information, data and information systems such as software, hardware, firmware, storage and transmission media, the information in physical and electronic form and computer networks used by RaphaPlus. The Information Security Management System is applicable for primary care and urgent response services. This security policy applies to personnel who access RaphaPlus information or use RaphaPlus information systems. Personnel is defined as all employees, contractors and sub-contractors and onsite third-party vendors accessing RaphaPlus resources. The scope of ISMS is applicable to their office location “38/3, 6th cross, VIBGYOR High School Road, opp Thomas Square, HSR Extension, Reliable Tranquil Layout, Bengaluru 560102, Karnataka, India”"}),e.jsx("p",{children:"4. Responsibilities"}),e.jsxs("p",{children:["It is the responsibility of the below teams/functions to implement and maintain the controls defined in this policy."," "]}),e.jsx("p",{children:"> Information Security Team"}),e.jsx("p",{children:"> Information Technology Team"}),e.jsx("p",{children:"> Department Heads"}),e.jsx("p",{children:"> Team Leaders"}),e.jsx("p",{children:"> Employees"}),e.jsx("p",{children:"> Third-Party"}),e.jsx("p",{children:"5. Policy Statements"}),e.jsx("p",{children:"This document represents the official mandate from RaphaPlus for its users of information and information assets so as to ensure confidentiality, integrity, and availability of the information assets in reference with the compliance requirements from regulatory agencies and relevant legal requirements."}),e.jsx("p",{children:"Following are policy statements from individual domains:"}),e.jsx("p",{children:"5.1. Organisation of Information Security"}),e.jsx("p",{children:"Information security of the organisation shall be in place to ensure the security of the systems on an ongoing basis and to support and sustain RaphaPlus business vision."}),e.jsx("p",{children:"5.2. Human Resource Security"}),e.jsx("p",{children:"Personnel at all levels shall understand their responsibilities towards information security and are suitable for the roles for which they are considered. This includes security responsibilities in job definitions, user training and responding to security incidents and malfunction of information assets."}),e.jsx("p",{children:"5.3. Asset Management"}),e.jsx("p",{children:"All assets associated with information and information processing facilities shall be identified and documented to indicate the ownership and importance, and shall be classified, used and protected in accordance with criticality and sensitivity."}),e.jsx("p",{children:"5.4. Access Control"}),e.jsx("p",{children:"Access to information shall be controlled in order to avoid unauthorized access and at the same time provides access to authorized users."}),e.jsx("p",{children:"5.5. Physical and Environmental Security"}),e.jsx("p",{children:"The organisation shall protect and minimize disruptions to office premises and equipment (IT and non-IT) from physical and environmental threats like theft, vandalism, natural disaster, man-made catastrophes and accidental damage which may lead to disruption of business operations."}),e.jsx("p",{children:"5.6. Operations Security"}),e.jsx("p",{children:"Responsibilities and procedures for the management of the information systems’ environment shall be established to avoid the occurrence of a security incident, operational error or unauthorized access to information by protecting against data loss, malware attack and exploitation using technical vulnerabilities."}),e.jsx("p",{children:"5.7. Communications Security"}),e.jsx("p",{children:"There shall be network security controls implemented for internal or external networks in order to protect business information from unauthorized access and enable effective usage of various networking, communications and computing facilities."}),e.jsx("p",{children:"5.8. Incident Management"}),e.jsx("p",{children:"Information security events and behavior associated with information and/or systems need to be reported and responded appropriately to minimize the damage due to incidents."}),e.jsx("p",{children:"5.9. Change Management"}),e.jsx("p",{children:"The scope of change management includes all operating systems and applications in distributed systems environments. It applies to a wide range of change efforts, from the introduction of a new product or system, which has broad external and/or internal impacts, to a simple modification of an internal program with no or little visibility. Each change affecting activities, regardless of scope, must be integrated into the production environment in a systematic and controlled manner."}),e.jsx("p",{children:"5.10. Acceptable Usage"}),e.jsx("p",{children:"There shall be guidance available for acceptable and appropriate use of information assets by all staff."}),e.jsx("p",{children:"5.11. Cryptography"}),e.jsx("p",{children:"The organisation shall ensure proper and effective use of cryptography controls to protect the confidentiality, authenticity and/or integrity of information. These controls include encryption, digital signatures, SSL and HTTPS communication and proprietary compression."}),e.jsx("p",{children:"5.12. Backup and Restoration"}),e.jsx("p",{children:"The organisation shall maintain backup and media security as per the business requirements."}),e.jsx("p",{children:"5.13. Supplier relationship"}),e.jsx("p",{children:"The organisation shall require suppliers (outsourcing vendors, agents, third-parties) who have access to information, to maintain due confidentiality and adopt such security procedures as advised by the organisation from time to time. Supplier’s access to assets shall be restricted to the information that they require in completing the contracted work."}),e.jsx("p",{children:"5.14. Systems acquisition, Development"}),e.jsx("p",{children:"Appropriate security controls shall be defined for all new information systems, and enhancements to the existing information systems. The Information Security Team shall be involved in the relevant stages of the System Development Life Cycle (SDLC) to ensure that security controls requirements are defined and adhered to for new information systems or enhancements to existing ones."}),e.jsx("p",{children:"5.15. E-waste Management"}),e.jsx("p",{children:"The lifecycle of all IT assets spanning from acquisition to disposal shall be managed in a manner which conforms to sound environmental norms."}),e.jsx("p",{children:"5.16. Business Continuity Management"}),e.jsx("p",{children:"Adequate processes shall be in place to develop, maintain and test the plan for business continuity management to ensure availability of the organisation’s services."}),e.jsx("p",{children:"5.17. Compliance"}),e.jsx("p",{children:"All relevant statutory and regulatory requirements, which the organisation has to comply with, shall be explicitly defined, documented, and kept up to date. All relevant information security requirements shall be incorporated in contractual documents. Privacy and protection of personally identifiable information shall be ensured as per relevant laws, and regulations."}),e.jsx("p",{children:"5.18. Information Security in Project Management"}),e.jsx("p",{children:"The organisation shall devise controls to embed information security and privacy in Project Management Life Cycle. Information Security controls shall be taken into consideration for all the organisation’s projects to achieve confidentiality, integrity and availability of information or resources during and after the project."}),e.jsx("p",{children:"5.19. Information Security Risk Management"}),e.jsx("p",{children:"A risk management framework shall be established to manage the overall security exposure of the organisation."}),e.jsx("p",{children:"6. Security Awareness"}),e.jsx("p",{children:"The organisation shall ensure that people using and managing information (including the senior management, middle management, end users, third-party consultants, and customers) must be adequately trained and made aware of all related aspects to improve the overall security posture of the organisation."}),e.jsx("p",{children:"7. Policy Framework"}),e.jsx("p",{children:"The Information Security Policy is supported by information security procedures and guidelines which provide necessary actions to adhere to these security policies. The information security procedures shall be derived from the policy statements and provide the details of necessary actions to achieve the objectives of the policy statement."}),e.jsx("p",{children:"8. Policy Review and Approval"}),e.jsx("p",{children:"The information security policy shall be reviewed on an annual basis to ensure that it remains updated at all times. Changes to the policy will have to be agreed with the concerned stakeholders, and thereafter, the authorization will be provided by the responsible teams."}),e.jsx("p",{children:"9. Disciplinary Actions for Violations to the Policy"}),e.jsx("p",{children:"While RaphaPlus would like to respect the privacy of its personnel, it reserves the right to audit and/or monitor their activities and information stored, processed, transmitted or handled by them using RaphaPlus information systems. RaphaPlus expects its personnel to comply with information security policies. If any personnel is found to be in breach of the security policies and procedures, appropriate disciplinary action should be taken. The disciplinary action shall be proportionate to the severity of the breach. In case of violations that may result in disclosure, unavailability or alteration of ‘Confidential’ information, the employee shall be directly reprimanded and his/her service may be terminated. Disciplinary actions for Information Security breach are:"}),e.jsx("p",{children:"> On the first instance, the personnel should be counseled by the respective Head of Department."}),e.jsx("p",{children:"> In the second instance, there should be a warning or formal notice issued by the Head of Department."}),e.jsx("p",{children:"> On the third instance, the personnel should be reprimanded and his/her service may be terminated."}),e.jsx("p",{children:"Disciplinary actions could include:"}),e.jsx("p",{children:"> Suspension or termination of access"}),e.jsx("p",{children:"> Disciplinary action including termination of employment/contract"}),e.jsx("p",{children:"> Penalties"}),e.jsx("p",{children:"All instances of a security breach or non-compliance to the policy shall be reported to the Information Security Team (IST). Depending upon the severity of the breach, the Information Security Team shall further report it to senior management for further action. Violations including suspected violations shall be investigated and may recommend disciplinary action in accordance with the RaphaPlus code of conduct, policies or applicable laws."}),e.jsx("p",{children:"10. Handling Exceptions and Deviations"}),e.jsx("p",{children:"Approval for exceptions or deviations from the policies, wherever warranted, will be provided only by the Information Security Officer (ISO). There shall be a business justification required for any exceptions/deviations to this policy with approval from the department head. For any major deviations, ISO will take approval from concerned stakeholders."}),e.jsx("p",{children:"11. Management Review Meeting"}),e.jsx("p",{children:"RaphaPlus shall review and evaluate the performance of information security management system (ISMS) to improve it on a continual basis to protect – business and organisational information on a yearly basis"})]})]})}),t1=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
`,a1=()=>e.jsx(t1,{children:e.jsxs("div",{className:"policy-container",children:[e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Shipping Policies"}),e.jsx("p",{children:"Thank you for choosing RaphaPlus for your healthcare needs. We offer maximum comfort and reliability in turning in your medicines and healthcare products to your step. Please review the following delivery policy to apprehend how we method and deliver your orders."}),e.jsx("p",{children:"Shipping Methods and Times:"}),e.jsx("p",{children:"Standard Shipping: Orders are commonly processed within 3 working days and delivered within 7 working days, depending on your region."}),e.jsx("p",{children:"Shipping Charges:"})]})]}),e.jsxs("div",{className:"morePolicyInfo",children:[e.jsx("p",{children:"Shipping expenses range depending on product, location and weight. We may provide free shipping promotions for orders above a certain value. Please take a look at our website or promotional emails for the offers. Shipping Restrictions:"}),e.jsx("p",{children:"We follow all local, state and nationwide regulations regarding the cargo of prescription medicinal drugs and healthcare merchandise. Some merchandise can be limited from transport to certain locations because of legal or logistical reasons. We will notify you if there are any such restrictions."}),e.jsx("p",{children:"International Shipping:"}),e.jsx("p",{children:"At this time, we only provide shipping inside India. We do not deliver across the world."}),e.jsx("p",{children:"Order Tracking:"}),e.jsx("p",{children:"Once your order is processed and shipped, you will receive a confirmation e-mail and progress reports."}),e.jsx("p",{children:"Delivery Issues:"}),e.jsx("p",{children:"In the uncommon event of a delivery problem including a misplaced or broken package, please contact our customer support team at +91 95551 66000 or email us at wellness@raphaplus.in immediately. We will work with our delivery companions to resolve the issue at the earliest. Returns and Refunds:"}),e.jsx("p",{children:"Please check our returns and refunds policy on returning products and receiving refunds for eligible objects."}),e.jsx("p",{children:"Contact Us:"}),e.jsxs("p",{children:["If you have any questions or issues regarding our delivery policy or your order's delivery, please don't hesitate to contact our customer service team. You can contact us by phone"," ",e.jsx("strong",{children:" +91 95551 66000 "})," email",e.jsx("strong",{children:" wellness@raphaplus.in"})," or through our website chat option."]}),e.jsx("p",{children:"Policy Updates:"}),e.jsx("p",{children:"We reserve the right to update our shipping policy as needed. Any changes may be communicated to our customers via our website and different suitable channels. Thank you for selecting RaphaPlus. We appreciate your choosing us for your healthcare needs."})]})]})}),n1=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
  .RaphaPlus-link-div {
    text-decoration: none;
  }
`,o1=()=>e.jsx(n1,{children:e.jsxs("div",{className:"policy-container",children:[e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Terms & Conditions"}),e.jsx("p",{children:"These general terms and conditions is an agreement made between RaphaPlus India Private Limited, India (hereinafter referred to as “Raphaplus” or “company”) and the user (hereinafter referred to as “you” or “user”) who avails any service from Raphaplus The word you shall mean the individual, company or any other legal entity for which the terms and conditions of this agreement are agreed to and includes affiliates and heirs of the company or any other legal entityIf you agree to these terms and conditions of a company or any other legal entity, you represent that you have the authority to bind such entity and its affiliates and heirs. You represent that you are a valid person meeting age and other requirements for entering into an agreement and in the event that you are a parent or guardian of a minor, you represent and warrant that you have the legal capacity to act on behalf of such minor and acknowledge and agree that the provisions of this agreement will be equally applicable to the minor."})]})]}),e.jsxs("div",{className:"morePolicyInfo",children:[e.jsxs("p",{children:["The url"," ",e.jsx("a",{href:"www.Raphaplus.in",className:"RaphaPlus-link-div",children:e.jsx("strong",{children:" www.Raphaplus.in"})})," ","is owned by the legal entity ‘RaphaPlus India Private Limited’ The terms and conditions of engagement with Raphaplus as per these general terms and conditions will apply in all cases where you register / avail services from Raphaplus Only specific clause/s when superseded by specific conditions of contract with you in writing shall have the effect of the overriding conditions and for the balance these general terms and conditions shall prevail Wherever references to Raphaplus general terms and conditions are given, it shall mean these terms and conditions."]}),e.jsx("p",{children:"Please read these terms and conditions carefully. If you do not agree to be bound by (or cannot comply with) any or all of them, do not check/click the 'I agree' box, do not complete the registration process, and do not attempt to access or use any services. When you register / access any services of Raphaplus you are bound by all of the terms and conditions which are intended to be fully effective and binding."}),e.jsx("p",{children:"Raphaplus may modify these terms and conditions at any time and such modifications shall be effective immediately upon posting the modified agreement You agree to review the agreement periodically to be aware of such modifications and you accessing the Raphaplus website or app constitutes your acceptance of the Raphaplus general terms and conditions as it appears at the time of your access or use."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Raphaplus"})," provides only primary healthcare services and does not treat medical emergencies You understand and agree that use of Raphaplus services is entirely at your own risk and that in no event shall Raphaplus be liable for any direct, indirect, incidental, consequential, special, exemplary, punitive, or any other monetary or other damages, fees, fines, penalties, or liabilities arising out of or relating in any way to this site, or sites accessed through this site, app, and / or content or information provided herein. (hereinafter referred to as ‘general indemnity’ protection to Raphaplus) information provided on Raphaplus website / app should not be construed as medical advice or used for treatment purposes and no content in the website / app intends to provide medical advice, professional diagnosis, opinion, treatment to you or any other individual."]}),e.jsx("p",{children:"The information contained in and service delivery by Raphaplus via this website / app could include hypertext links or pointers to information that is created, owned and managed by external medical service providers (hereinafter called ‘msps’) to assist you in your services or any promotional linksWhen you select a link to an outside website, you agree that you do so at your risk and are subject to the terms and conditions of the owners / sponsors of that outside website Raphaplus does not guarantee the availability of such linked pages at all timesThe inclusion of any link does not imply affiliation, endorsement or adoption by us of the linked site."}),e.jsx("p",{children:"You agree to receive reports, documents, notifications, confirmations, administrative messages, communications, phone calls and messages from Raphaplus or the owners / sponsors of external websites notwithstanding a dnd (do not disturb) registration you may have with the providers of communication channels."}),e.jsx("p",{children:"You agree and grant your consent that Raphaplus may record all conversations, audio or video calls for purposes of medical records and quality training purposes."}),e.jsx("p",{children:"Raphaplus reserves the right to withdraw, modify, suspend or discontinue any functionality or feature of its website or app at any time without notice the Raphaplus website or app may contain forward looking statements that do not constitute promises or assertive statements in all contextsIt is in your discretion to make use of the information or statements provided Raphaplus makes no representation that all information is accurate, latest or comprehensive."}),e.jsx("p",{children:"Raphaplus is not responsible for complete information or flow not appearing due to faults in certain softwares, applications or devices you may be using."}),e.jsx("p",{children:"Data for services available on free of charge on a trial basis may be lost at the end of the trial period and additional terms and conditions may appear or become applicable."}),e.jsx("p",{children:"You agree that in the event of any problem in using Raphaplus website or app, your sole remedy shall be to cease using Raphaplus website or app."}),e.jsx("p",{children:"All contents of this website are the property of Raphaplus We grant you permission to download, store, print, display and use the content only for your personal use and not for any commercial useYou agree not to reproduce any content without the written consent of Raphaplus."}),e.jsx("p",{children:"Any suggestions received through ‘contact us’ shall become the property of Raphaplus without any obligation and you shall not be entitled to any claim or compensation under any circumstances."}),e.jsx("p",{children:"Raphaplus may for any reason suspend, modify, discontinue or terminate services or access to you at any time; for cause or convenience without any prior noticeYou agree to the same without question or demur."}),e.jsx("p",{children:"You grant Raphaplus the right to assign this contract to its affiliate or in connection with a merger, acquisition or sale with an intimation on the website or to you."}),e.jsx("p",{children:"Incase any of the terms and conditions of this agreement become unoperative or invalid or unenforceable, the remaining terms of this agreement shall remaining terms shall remain to be effective and validFailure of Raphaplus to insist on performance of any one of the terms of this agreement will not mean a waiver of the same term again or any waiver of any other term or condition."}),e.jsx("p",{children:"A printed version of this agreement and any related notice given in electronic form shall be admissible in any judicial proceedings to the same extent as any other agreement on paper or printed formBy clicking on “i accept” or “agreed” or any such connotation to the electronic agreement, you accept that you digitally give your complete and unequivocal consent to the terms and conditions of this agreement."}),e.jsx("p",{children:"These terms and conditions will be construed according to indian lawsAny disputes arising out of these terms and conditions shall be subject to the jurisdiction to the courts of mumbai, india."}),e.jsx("p",{children:"Use of your Account"}),e.jsx("p",{children:"Maintaining the secrecy of your password or storage and safe custody of paper coupons shall be the responsibility of the User wherever applicable."}),e.jsx("p",{children:"Use of Third Party Services"}),e.jsx("p",{children:"As part of the services offered, You may also be using the services of one or more third parties with whom RaphaPlus has tie-ups for services. RaphaPlus acts as a facilitator in such cases and may not have a direct control over the third party services. Your use of these third party services may be subject to the separate policies and terms of use of these third parties. RaphaPlus accepts no liabilities to the terms and conditions of linked websites."}),e.jsx("p",{children:"On using services of RaphaPlus vendor partners i.e. third parties you agree to share your contact details viz. email id and phone number with such partner vendors who may contact you for registration and/ or associated service."}),e.jsx("p",{children:"Software Updates"}),e.jsx("p",{children:"RaphaPlus in an effort to provide the best services under subscriptions, may make changes to the software platforms or update the software automatically without notice to you. Enhanced updates and portal or web or app based services may be made available on payment of additional charges at the option of RaphaPlus. RaphaPlus reserves the right to employ artificial intelligence to respond to queries, or to handle portions of the user interface."}),e.jsx("p",{children:"Changes to User Interface and Terms of Agreement"}),e.jsx("p",{children:"RaphaPlus may make changes to the software or modify its terms and conditions without any notice to you. You are expected to read the latest version of the terms and conditions notwithstanding the one-time agreement to the terms and conditions. It shall be presumed that User has read all modified terms and conditions before the availing of services."}),e.jsx("p",{children:"Online feedbacks"}),e.jsx("p",{children:"RaphaPlus may obtain feedback on services and utilize the same for service improvements. RaphaPlus reserves the right to have backend scrutiny of feedback received and to publish certain or all feedback received on social media sites for the purposes of rating analysis or promotion. By agreeing to the terms and conditions, you give RaphaPlus the right of your consent for the same. The decision of RaphaPlus not to consider a feedback in its analysis and/or the labelling of objectionable content in feedback shall be a matter solely at the discretion of RaphaPlus."}),e.jsx("p",{children:"Assignment"}),e.jsx("p",{children:"RaphaPlus reserves the right to assign the rights and obligations under this agreement to another party without notice to the User. Users cannot assign services to any other person without prior written confirmation of RaphaPlus."}),e.jsx("p",{children:"Indemnity"}),e.jsx("p",{children:"User shall indemnify and hold harmless RaphaPlus and its parent and affiliates, their directors, agents and employees, from any claim or demand, or actions including reasonable attorney's fees, made by any third party or penalty imposed due to or arising out of breach of these Terms of Use and expressly waives any claim on RaphaPlus for any costs, damages, liabilities or other consequences for any commissions or omissions by RaphaPlus or its partners that may result in any inconvenience, harm, financial loss, injury or damage due to promises and performances made by RaphaPlus in good faith, but not executed for any restricting constraints on RaphaPlus for any reason whatsoever, or not executed to the satisfaction of the User. This clause shall apply in protection to RaphaPlus of any liabilities to the maximum extent permitted by law."}),e.jsx("p",{children:"Export Control and other restrictions"}),e.jsx("p",{children:"RaphaPlus retains the right to terminate the services if User is found to be under any export control restrictions including those of international bodies. RaphaPlus retains the right to refuse a service and/ or terminate the service prematurely without any financial implication to RaphaPlus if the User misrepresents information, misuses the services, engages in any unlawful activities or indulges in any anti-social behaviour. RaphaPlus retains the right to refuse a service or terminate the same prematurely for reasons mentioned above without informing any reason whatsoever."}),e.jsx("p",{children:"OPT IN BENEFITS BY YOUR EMPLOYER"}),e.jsx("p",{children:'The RaphaPlus Services are offered as an opt-in benefit by your Employer. It is your personal choice whether to take up any of the programs provided and you do so at your own risk. The services are provided by RaphaPlus as a service provider and not your employer and are subject to the RaphaPlus terms of service and privacy policy, which you should review carefully. Your Employer is not responsible or accountable for any liabilities arising out of the advice, diagnosis or assessment of medical condition/ treatment by the external consultant or medical practitioner referred by such external consultant or any other services provided by RaphaPlus "'}),e.jsx("p",{children:"Privacy"}),e.jsx("p",{children:"Personal data for registration, storage, including storage of medical records, reports, references, preferences may be part of the user on-boarding and usage. RaphaPlus shall use this data for the purpose of making the platform and service and improvements available to you, or for permitted marketing and promotion, or for any mandatory disclosures to government agencies and regulatory bodies. RaphaPlus assures complete privacy of your personal information. RaphaPlus may however use your personal information to communicate to you via various media like telephone calling, emails, SMS, WhatsApp messages, letters, etc. for the purposes of updating you about the Services or for information about any other products and services it offers or for analytics purposes. By agreeing to these terms and conditions, you specifically give your free consent to RaphaPlus to approach you via any of the various media mentioned herein for any of its campaigns or communications. RaphaPlus is liable to keep your personal data and medical records for the minimum periods required under law. However, access to your personal data post the minimum period required under law may not be available to you. Any mistakes in your data may be informed to RaphaPlus and RaphaPlus reserves the right to make necessary corrections, restrict further processing or erase incorrect data within reasonable timelines. For detailed terms of privacy, you may refer to the Privacy Policy available on the Website."}),e.jsx("p",{children:"Medical Service"}),e.jsx("p",{children:"SERVICES OFFERED BY THE COMPANY ARE NOT HEALTH INSURANCE POLICIES. RaphaPlus provides the services through own or independent medical professionals/ organizations/ institutions/ ambulance providers/ pathology labs/ radiology labs/ others (“Medical Service Providers”). RaphaPlus may provide Users with discounted services either through self or through any of the Medical Service Providers at certain locations and access to including, but not limited to, virtual health services."}),e.jsx("p",{children:"The Medical Service Providers are independent entities/ professionals in private practice and are neither employees nor agents of RaphaPlus and/or its parents, subsidiaries or affiliates. RaphaPlus is only an aggregator/ facilitator of independent Medical Service Providers. RaphaPlus does not recommend or suggest any particular Medical Service Provider or promote any particular Medical Service Provider's name or practice. Further, RaphaPlus does not make any representations or warranties with respect to Medical Service Providers or the quality of the healthcare services they may provide. RaphaPlus shall not be responsible for any breach of service or service deficiency by any Medical Service Provider."}),e.jsx("p",{children:"RaphaPlus makes no express or implied representations or warranties about the description, quality, fitness for any particular purpose, productiveness, or any other matter in relation to any product or service and disclaims any implied warranties, including, but not limited to, warranties or implied warranties of merchantability or fitness for a particular purpose or use or non-infringement. In addition to this RaphaPlus also does not authorize anyone to make any warranty on RaphaPlus’s behalf. You shall not deliberately use the Services in any way that is unlawful or harms RaphaPlus or Medical Service Providers, RaphaPlus’s directors, employees, affiliates, distributors, partners, service providers and/or other users of the Website. If RaphaPlus suspects any illegal, wrongful or fraudulent activity, then notwithstanding any other rights that RaphaPlus may have. RaphaPlus reserves the right to inform the relevant government or law enforcement authorities. RaphaPlus will cooperate in all investigative procedures or requests for access / information initiated by any such government or law enforcement authorities."}),e.jsx("p",{children:"RaphaPlus reserves the right, in its sole discretion and without any obligation, to make improvements to, or correct any error or omissions in, any component of, or term relating to, the Services provided to you by RaphaPlus and update information from time to time."}),e.jsx("p",{children:"Any advice provided by any Medical Service Provider shall depend solely on the completeness and accuracy of the information provided by you. Neither RaphaPlus nor any Medical Service Provider shall be responsible for any damage, whether physical, emotional, psychological or financial, caused to you due to any improper/unintended use of the Services, which includes but is not limited to the misinterpretation of the advice given by any Medical Service Provider to you."}),e.jsx("p",{children:"The Service offered by Company and Medical Service Provider are provided on an “As Is” and “As Available” basis and may be subject to certain limitations. Consequently, in no event shall RaphaPlus and/or any Medical Service Provider be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost business/revenue/profit/goodwill or damages arising from your use or unavailability of the Services and/or any other the services offered to you by RaphaPlus in any manner whether or not RaphaPlus has been warned of the possibility of such damages or could have reasonably foreseen such damages. You shall not be entitled to specific performance of any of the Terms. The foregoing limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction and, regardless of the form of the action, will at all times be limited to the aggregate of the amount received from you by RaphaPlus. You specifically agree and understand that neither RaphaPlus nor any Medical Service Provider is liable to you for any content or illegal conduct of any third party and that you alone accept such risk of harm."}),e.jsx("p",{children:"The views and suggestions expressed by Medical Service Providers in the course of providing the Services shall in no manner be construed as an endorsement by RaphaPlus. RaphaPlus shall not be responsible in any manner whatsoever for any act, omission, treatment, diagnosis, advice, view, suggestion or opinion, whether medical or non-medical, professional or non-professional conduct of any Medical Service Provider for any reason whatsoever. RaphaPlus is free to change the Medical Service Providers at its discretion. RaphaPlus is entitled, without any liability whatsoever, to refuse, limit, suspend, vary or discontinue the provision of any of the Services at any time for any reasonable cause as RaphaPlus may deem fit."}),e.jsx("p",{children:"Notwithstanding the aforesaid, the provision of services by any Medical Service Provider and any matter relating thereto including but not limited to the manner and the form in which the services may be made available to you by any Medical Service Provider may be altered, withdrawn, modified or changed at any point of time. You agree to be bound by any such modifications."}),e.jsx("p",{children:"Representations"}),e.jsx("p",{children:"You hereby represent and warrant that: You are 18 years of age or older and that your use of the Services shall not violate any applicable law or regulation; In case a minor person (i.e. individual less than 18 years of age) obtains Services, then you will Ensure that the minor person observes and complies with the terms Assume full liability for any non-compliance or violation of the terms by the minor in a way that any non-compliance or violation by the minor person shall be deemed to have been committed by you. All information you submit is complete and accurate and that you agree to maintain the completeness and accuracy of such information; You will use the services solely for your personal and non-commercial use; and You will not use the services in any way that is unlawful, or harms any person or entity. Infringements, Patents, Intellectual Property Rights, Trademarks Any infringements if noticed shall be brought to the notice of RaphaPlus by writing to wellness@RaphaPlus.in. RaphaPlus retains to right to modify or remove any infringed contents / offerings in order to void the infringement without any admission to the liability or any other defenses, rights or remedies available to RaphaPlus."}),e.jsx("p",{children:"Force Majeure"}),e.jsx("p",{children:"RaphaPlus will make every effort to deliver performances on time. However, RaphaPlus shall be free from any claims and damages in case of any delays or non-performances due to any force majeure event, natural or man-made; including conditions which may restrict or prevent performance including on the specific day of service request like traffic weather, non-availability of phone connections, software or other breakdowns, non-accessibility, conditions of risk or any unforeseen incidents, etc. if beyond the reasonable control of RaphaPlus."}),e.jsx("p",{children:"Content & Design Ownership"}),e.jsx("p",{children:"RaphaPlus has all ownership rights for the design, contents and packaging of its services and offerings. Any unauthorized use or copying or display or distribution or exploitation of the design or terms and contents of the services and offerings are prohibited."}),e.jsx("p",{children:"Notices"}),e.jsx("p",{children:"All notices and other communications required or permitted here under shall be in writing, in the English language, and shall be sent by e-mail or mailed by prepaid internationally-recognized courier, or otherwise delivered by hand or by messenger, addressed to such Party's address as set forth below or at such other address as the Party shall have furnished to the other Party in writing in accordance with this provision: If to RaphaPlus: i. at RaphaPlus’s email id i.e. wellness@RaphaPlus.in . by sending physical mails, then at 38/3, 6th Cross, VIBGYOR High School Road, Opp Thomas Square, HSR Extension, Reliable Tranquil Layout, Bengaluru 560102, Karnataka, India. If to you: i. at the email address or mobile number provided by you to us or as updated from time to time by notifying RaphaPlus."})]})]})}),s1=a.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
`,r1=()=>e.jsx(s1,{children:e.jsxs("div",{className:"policy-container",children:[e.jsxs("div",{className:"mainPolicyContent",children:[e.jsx(c,{}),e.jsxs("div",{className:"policy-content",children:[e.jsx("h1",{children:"Responsible Disclosure Policy"}),e.jsxs("p",{children:[e.jsx("strong",{children:"RaphaPlus "}),"is committed to protecting and respecting your privacy. understands that your personal data is entrusted to us and appreciates the importance of protecting and respecting your privacy."]}),e.jsx("p",{children:"This Privacy Policy sets out the basis on which we collect and process personal data about you including our practices regarding the collection, use, storage and disclosure of personal data that we collect from you and/or hold about you, and your rights in relation to that data."}),e.jsxs("p",{children:["Generally, we will only ask for your consent for processing if there are no other ",e.jsx("strong",{children:"legal grounds to process."})," In theseAt any subsequent stage, you may contact us at wellness@raphaplus.in, and ask to be furnished with the ‘Sensitive Personal Data’ that is held by us, pertaining to your user profile. We shall furnish the same to you, within a period of 30 working days from the date of request. At any subsequent stage, you may contact us at wellness@raphaplus.in, and ask to circumstances, we will always aim to be clear and transparent about why we need your consent and what we are asking it for."]})]})]}),e.jsxs("div",{className:"morePolicyInfo",children:[e.jsx("p",{children:"At any subsequent stage, you may contact us at wellness@raphaplus.in, and ask to be furnished with the ‘Sensitive Personal Data’ that is held by us, pertaining to your user profile. We shall furnish the same to you, within a period of 30 working days from the date of request."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Right to withdraw consent."})," In the limited circumstances where you may have provided your consent to the collection, processing and transfer of your personal information for a specific purpose, you have the right to withdraw your consent for that specific processing at any time. To withdraw your consent, please contact wellness@raphaplus.in, once we have received notification that you have withdrawn your consent, we will no longer process your information for the purpose or purposes you originally agreed to, unless we have another legitimate basis for doing so in law. Please be aware that there are likely to be implications on our ability to continue our working relationship in the event that we are not able to process your personal information."]}),e.jsx("p",{children:"Please read the following carefully to understand how we process your data. By providing your personal data to us or by using our services, website or other digital platform(s) you are accepting or consenting to the practices as described or referred to in this Privacy Policy."})]})]})}),l1=a.div`
  .hero-image img {
    max-width: 100%;
  }

  .hero-image {
    margin: 1rem 0;
    position: relative;
  }

  .overlayWrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 1rem;
    font-family: Poppins;
    @media (max-width: 760px) {
      position: static;
    }
  }

  .timelineWrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .overlayWrapper h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-text-wrapper {
    margin-bottom: 0;
    padding: 1rem;
    text-align: center;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 4rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }

  .form-section {
    background: #f1f7ff;
    padding: 20px;
    border-radius: 10px;
    font-size: 1rem;
  }

  .text-section {
    flex: 1;
    color: #001e3a;
    text-align: left;
    @media (max-width: 760px) {
      text-align: center;
    }
  }

  .text-section h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .text-section h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .text-section p {
    font-size: 1.2rem;
  }

  .form-section {
    flex: 1;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .inputGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  form div {
  }

  form label {
    margin-bottom: 5px;
    display: block;
    font-size: 0.8rem;
    color: #252b42;
    font-weight: 600;
  }

  form input[type="text"],
  form input[type="email"],
  form input[type="number"] {
    width: 100%;
    padding: 1rem;
    font-size: 0.7rem;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 2px;
    @media (max-width: 760px) {
      /* width: max-content; */
    }
  }

  form input[type="checkbox"] {
    margin-right: 10px;
  }

  form button {
    padding: 10px;
    background: linear-gradient(to right, #1e908b, #1b1b1b);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  form button:hover {
    background-color: #0056b3;
  }

  .chkBxContainer {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    label {
      text-wrap: nowrap;
      color: #27b3a4;
      @media (max-width: 760px) {
        text-wrap: wrap;
      }
      span {
        color: #09529d;
      }
    }
  }

  .efficiencyDiv {
    display: flex;
    justify-content: center;
  }
`,c1=a.div`
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
  background-color: #f6f9fd;
  position: relative;
  top: -100px;
  @media (max-width: 760px) {
    position: static;
    max-width: 100%;
  }
  .health-efficiency {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .header-section {
    text-align: center;
    margin-bottom: 20px;
  }

  .header-section h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .header-section h2 {
    font-size: 1.25rem;
    color: #777;
  }

  .cards-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background-color: #e7f1ff; /* Light blue background color */
    border: 1px solid #ddd;
    border-radius: 0;
    padding: 2rem;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    color: #001e3a;
    font-weight: bold;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`,d1=()=>e.jsx(c1,{children:e.jsxs("div",{className:"health-efficiency",children:[e.jsxs("div",{className:"header-section",children:[e.jsx("h1",{children:"Enhance Workplace Health and Efficiency"}),e.jsx("h2",{children:"Improving Corporate Wellness"})]}),e.jsxs("div",{className:"cards-section",children:[e.jsx("div",{className:"card",children:"Employee Health Management"}),e.jsx("div",{className:"card",children:"Emergency Services Access"}),e.jsx("div",{className:"card",children:"Complaint Handling System"}),e.jsx("div",{className:"card",children:"Integrated Clinic Network"}),e.jsx("div",{className:"card",children:"Employee Health Management"}),e.jsx("div",{className:"card",children:"Efficiency Monitoring"}),e.jsx("div",{className:"card",children:"Facility Management Solutions"}),e.jsx("div",{className:"card",children:"In-House Clinic Provision"}),e.jsx("div",{className:"card",children:"Employee Health Management"})]})]})}),h1=a.div`
  .how-rapha-works {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #333;
  }

  .header-section {
    text-align: center;
    margin-bottom: 20px;
  }

  .header-section h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .tabs-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media (max-width:760px){
      flex-direction: column;
    }
  }

  .tab-button {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    color: #001e3a;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
    text-wrap: nowrap;
    font-weight: bold;
  }

  .tab-button:hover,
  .tab-button.active {
    border-bottom: 2px solid #27b3a4;
    color: #27b3a4;
  }

  .tab-button.active {
    text-decoration: underline;
  }

  .content-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    @media (max-width:760px){
      align-items: center;
    }
  }

  .imgWrapper {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (max-width:760px){
      flex-direction: column;
    }
  }
  .image-section {
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }

  .image-section img {
    width: 100%;
    max-width: 300px; /* Adjust size as needed */
  }

  .content-section ul {
    list-style-type: none;
    padding: 0;
  }

  .content-section li {
    font-size: 1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: #001e3a;
    font-weight: 500;
  }

  .content-section li::before {
    content: "•";
    scale: 1.5;
    color: #27b3a4;
    font-size: 1.5rem;
    margin-right: 10px;
  }
`,p1=()=>{const[t,o]=i.useState("In-House Clinic"),s=["In-House Clinic","Vitals Tracking","Facility Monitoring","Improved Efficiency"],n={"In-House Clinic":["Convenient access to care.","Immediate on-site medical attention.","Reduces time spent on offsite visits.","Increases employee satisfaction.","Promotes regular health check-ups.","Early detection of health issues."],"Vitals Tracking":["Monitors vital signs regularly.","Helps detect abnormalities early.","Improves overall health tracking.","Provides data for better health insights.","Reduces risks of severe health issues."],"Facility Monitoring":["Ensures cleanliness and safety.","Monitors facility usage and needs.","Improves resource allocation.","Enhances employee safety.","Supports efficient facility management."],"Improved Efficiency":["Streamlines healthcare processes.","Reduces wait times.","Enhances productivity.","Improves overall health outcomes.","Optimizes resource usage."]};return e.jsx(h1,{children:e.jsxs("div",{className:"how-rapha-works",children:[e.jsx("div",{className:"header-section",children:e.jsxs("h1",{children:["How Rapha",e.jsx("sup",{children:"+"})," Works"]})}),e.jsxs("div",{className:"imgWrapper",children:[e.jsx("div",{className:"image-section",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414617190.png",alt:"Illustrative description"})}),e.jsxs("div",{className:"content-section",children:[e.jsx("div",{className:"tabs-section",children:s.map(r=>e.jsx("button",{className:`tab-button ${t===r?"active":""}`,onClick:()=>o(r),children:r},r))}),e.jsx("ul",{children:n[t].map((r,l)=>e.jsx("li",{children:r},l))})]})]})]})})},m1=a.div`
  h1 {
    text-align: center;
  }
  .why-choose-rapha {
    display: flex;
    align-items: center;
    padding: 4rem;
    gap: 3rem;
    color: #001E3A;
    @media (max-width:760px){
        flex-direction: column;
    }
  }

  .image-section {
    flex: 1;
    text-align: center;
  }

  .image-section img {
    max-width: 100%;
    border-radius: 8px;
  }

  .text-section {
    flex: 2;
    padding-left: 20px;
  }

  .text-section h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #001E3A;
    margin-bottom: 10px;
  }

  .text-section h1 .highlight {
    color: #007bff;
    text-decoration: underline;
  }

  .text-section h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #001E3A;
    margin-bottom: 20px;
  }

  .text-section p {
    font-size: 1rem;
    line-height: 1.5;
    color: #001E3A;
    font-weight: 500;
  }

  .text-section p strong {
    color: #001E3A;
    font-weight: 700;
  }
`,u1=()=>e.jsxs(m1,{children:[e.jsxs("h1",{children:["Why Choose Rapha",e.jsx("sup",{children:"+"})," Digital"," ",e.jsx("span",{className:"highlight",children:"Clinic"})]}),e.jsxs("div",{className:"why-choose-rapha",children:[e.jsx("div",{className:"image-section",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736416074738.png",alt:"Woman holding a heart"})}),e.jsxs("div",{className:"text-section",children:[e.jsx("h2",{children:"Redefining Corporate Healthcare"}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Rapha",e.jsx("sup",{children:"+"})," "]}),"Digital Clinic offers a transformative approach to corporate healthcare management. By integrating advanced technology with comprehensive healthcare solutions, we empower companies to enhance employee well-being, optimize operational efficiency, and reduce healthcare costs. Our platform supports immediate medical needs through in-house clinics and emergency services while fostering a proactive approach to employee health through data-driven insights and personalized wellness programs. Choose RaphaPlus Digital Clinic to elevate your corporate healthcare strategy and create a healthier, more productive workplace environment."]})]})]})]}),f1=a.div`
  .mainDiv {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .card {
    background: rgb(255, 255, 255);
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: rgb(250, 250, 250) 0.2em solid;
    padding: 6px;
    display: flex;
    flex-direction: row;
  }

  .rightDiv {
    width: 50%;
    height: 100%;
    background-color: #27b3a4;
    border-radius: 10px;
    padding: 40px;
  }

  .rightDiv h2 {
    width: 291px;
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    display: inline-block;
  }

  .rightDiv h5 {
    width: 307px;
    font-size: 18px;
    color: #c9c9c9;
    display: inline-block;
    margin-bottom: 5rem;
  }

  .addressDiv p {
    font-size: 16px;
    color: #fff;
    text-align: left;
    display: inline-block;
  }

  .addressDiv span {
    font-size: 20px;
    color: #fff;
  }

  .addressDiv {
    margin-top: 2rem;
    display: flex;
  }

  .wrapper {
    display: inline-flex;
    margin-left: -2.5rem;
    margin-top: 6rem;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }

  .leftDiv {
    width: 50%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      height: auto;
    }

    .rightDiv,
    .leftDiv {
      width: 100%;
      height: auto;
      padding: 20px;
    }

    .rightDiv h2,
    .rightDiv h5,
    .addressDiv p {
      width: 100%;
      font-size: 20px;
    }

    .wrapper {
      flex-direction: row;
      padding-top: 4rem;
    }

    .wrapper .icon {
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .rightDiv h2 {
      font-size: 18px;
    }

    .rightDiv h5 {
      font-size: 16px;
    }

    .addressDiv p {
      font-size: 14px;
    }

    .wrapper {
      padding-top: 2rem;
    }

    .wrapper .icon {
      width: 25px;
      height: 25px;
      font-size: 14px;
    }
  }

  /* Input container */
  .input-container {
    position: relative;
    margin: 20px;
  }

  /* Input field */
  .input-field {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    background-color: transparent;
  }

  /* Input label */
  .input-label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: rgba(204, 204, 204, 0);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  /* Input highlight */
  .input-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #27b3a4;
    transition: all 0.3s ease;
  }

  /* Input field:focus styles */
  .input-field:focus + .input-label {
    top: -20px;
    font-size: 12px;
    color: #000;
  }

  .input-field:focus + .input-label + .input-highlight {
    width: 100%;
  }
  .input-main-div {
    display: flex;
  }

  .radio-button {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 10px;
    position: relative;
    align-items: center;
    color: #27b3a4;
  }

  .radio-button input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  .radio {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    transform: translateZ(-25px);
    transition: all 0.3s ease-in-out;
  }

  .radio::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  .radio-button input[type="radio"]:checked + .radio {
    border-color: #25a99b;
    transform: translateZ(0px);
    background-color: #25a99b;
  }

  .radio-button input[type="radio"]:checked + .radio::before {
    /* opacity: 1; */
  }
  .opt-div {
    margin-top: 13px;

    width: 92px;
    position: relative;
    font-size: 12px;
    line-height: 20px;
    color: #27b3a4;
    text-align: left;
    height: 20.4px;
  }
  .option-div {
    padding: 1rem;
  }
  .option-div {
    h5 {
      margin-left: 8px;
      width: 109px;
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      color: #27b3a4;
      text-align: left;
      height: 20.4px;
    }
  }
  .custom-btn {
    display: flex;
    justify-content: end;
    margin-top: 4rem;
    button {
      position: relative;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      background: linear-gradient(90.2deg, #27b3a4, #031d37);
      width: 50%;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 15px 48px;
      color: #fff;
      border: none;
    }
  }
  .img-div {
    display: flex;
    justify-content: center;
    margin: -2rem 0 0 3rem;
  }
`,L1=()=>e.jsx(f1,{children:e.jsx("div",{className:"mainDiv",children:e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"rightDiv",children:[e.jsx("h2",{children:"Contact Information"}),e.jsx("h5",{children:"Say something to start a live chat!"}),e.jsx("div",{className:"addressDiv",children:e.jsxs("p",{children:[e.jsx("span",{children:e.jsx(L,{className:"me-4"})}),"+91 95551 66000"]})}),e.jsx("div",{className:"addressDiv",children:e.jsxs("p",{children:[e.jsx("span",{children:e.jsx(g,{className:"me-4"})}),"wellness@raphaplus.com"]})}),e.jsxs("div",{className:"addressDiv",children:[e.jsx("div",{children:e.jsx("span",{children:e.jsx(C,{className:"me-4"})})}),e.jsx("div",{children:e.jsx("p",{children:"38/3, 6th Cross, Vibgyor High School Road, opp. Thomas Square, HSR Extension, Reliable Tranquil Layout, Bengaluru, Karnataka-560102."})})]}),e.jsx("div",{children:e.jsxs("ul",{className:"wrapper",children:[e.jsxs("li",{className:"icon facebook",children:[e.jsx("span",{className:"tooltip",children:"Facebook"}),e.jsx(x,{})]}),e.jsxs("li",{className:"icon twitter",children:[e.jsx("span",{className:"tooltip",children:"Twitter"}),e.jsx(y,{})]}),e.jsxs("li",{className:"icon instagram",children:[e.jsx("span",{className:"tooltip",children:"Instagram"}),e.jsx(v,{})]})]})})]}),e.jsxs("div",{className:"leftDiv",children:[e.jsxs("div",{className:"input-main-div mt-4",children:[e.jsxs("div",{className:"input-container col-md-5",children:[e.jsx("input",{placeholder:"First Name",className:"input-field",type:"text"}),e.jsx("label",{className:"input-label",children:"First Name"}),e.jsx("span",{className:"input-highlight"})]}),e.jsxs("div",{className:"input-container col-md-5",children:[e.jsx("input",{placeholder:"Last Name",className:"input-field",type:"text"}),e.jsx("label",{className:"input-label",children:"Last Name"}),e.jsx("span",{className:"input-highlight"})]})]}),e.jsxs("div",{className:"input-main-div",children:[e.jsxs("div",{className:"input-container col-md-5",children:[e.jsx("input",{placeholder:"Email",className:"input-field",type:"text"}),e.jsx("label",{className:"input-label",children:"Email"}),e.jsx("span",{className:"input-highlight"})]}),e.jsxs("div",{className:"input-container col-md-5",children:[e.jsx("input",{placeholder:"Phone Number",className:"input-field",type:"text"}),e.jsx("label",{className:"input-label",children:"Phone Number"}),e.jsx("span",{className:"input-highlight"})]})]}),e.jsxs("div",{className:"option-div mt-4",children:[e.jsx("h5",{className:"",children:"Select Subject?"}),e.jsxs("div",{className:"input-main-div",children:[e.jsxs("label",{className:"radio-button",children:[e.jsx("input",{type:"radio",name:"example-radio",value:"option1"}),e.jsx("span",{className:"radio"}),e.jsx("p",{className:"opt-div",children:" General Inquiry"})]}),e.jsxs("label",{className:"radio-button",children:[e.jsx("input",{type:"radio",name:"example-radio",value:"option2"}),e.jsx("span",{className:"radio"}),e.jsx("p",{className:"opt-div",children:"General Inquiry"})]}),e.jsxs("label",{className:"radio-button",children:[e.jsx("input",{type:"radio",name:"example-radio",value:"option2"}),e.jsx("span",{className:"radio"}),e.jsx("p",{className:"opt-div",children:"General Inquiry"})]}),e.jsxs("label",{className:"radio-button",children:[e.jsx("input",{type:"radio",name:"example-radio",value:"option2"}),e.jsx("span",{className:"radio"}),e.jsx("p",{className:"opt-div",children:" General Inquiry"})]})]}),e.jsxs("div",{className:"input-container col-md-11 mt-4",children:[e.jsx("input",{placeholder:"Write your message..",className:"input-field",type:"text"}),e.jsx("label",{className:"input-label",children:"Message"}),e.jsx("span",{className:"input-highlight"})]}),e.jsx("div",{className:"custom-btn ",children:e.jsx("button",{className:"",children:"Send Message"})}),e.jsx("div",{className:"img-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415549127.png",alt:""})})]})]})]})})}),g1=()=>e.jsxs(l1,{children:[e.jsxs("div",{className:"hero-image",children:[e.jsx("div",{className:"imgWrapperDiv",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414775826.png",alt:"Hospital Hero"})}),e.jsx("div",{className:"overlayWrapper",children:e.jsxs("div",{className:"content",children:[e.jsxs("div",{className:"text-section",children:[e.jsx("h1",{children:"Digital Clinic"}),e.jsx("h2",{children:"Transforming Workplace Health"}),e.jsx("p",{children:"Streamline Corporate Wellness"})]}),e.jsx("div",{className:"form-section",children:e.jsxs("form",{children:[e.jsxs("div",{className:"inputGrid",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Company Name:"}),e.jsx("input",{type:"text",placeholder:"Your company name"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Mobile Number:"}),e.jsx("input",{type:"text",placeholder:"Enter your mobile number"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Contact Person:"}),e.jsx("input",{type:"text",placeholder:"Contact person"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Company Address:"}),e.jsx("input",{type:"text",placeholder:"Company Address"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Email ID:"}),e.jsx("input",{type:"email",placeholder:"Your email"})]}),e.jsxs("div",{children:[e.jsx("label",{children:"Number of Employees:"}),e.jsx("input",{type:"number",placeholder:"Number of Employees"})]})]}),e.jsxs("div",{className:"chkBxContainer",children:[e.jsx("input",{type:"checkbox",id:"privacy"}),e.jsxs("label",{htmlFor:"privacy",children:["By sending this form I confirm that I have read and accept the ",e.jsx("span",{children:"Privacy Policy"})]})]}),e.jsx("button",{type:"button",children:"Request for demo"})]})})]})})]}),e.jsx("div",{className:"efficiencyDiv",children:e.jsx(d1,{})}),e.jsx(p1,{}),e.jsx(u1,{}),e.jsx(L1,{})]}),C1=a.div`
  padding: 1rem;
  .hero-container {
    display: flex;
    flex-direction: row;
  }

  .container {
    padding: 3rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
    p {
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
    }
  }
  .btn-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    button {
      padding: 0.5rem;
      border: 1.5px solid #27b3a4;
      border-radius: 0.5rem;
      background-color: #fff;
      cursor: pointer;
    }
  }
  .app-img-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  img {
    max-width: 50vw;
  }
  .middle-container {
    .container {
      padding: 3rem;
      h1 {
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
`,m=["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405809788.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405893675.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405932429.png"],x1=()=>{const[t,o]=i.useState(0);return i.useEffect(()=>{const s=setInterval(()=>{o(n=>(n+1)%m.length)},3e3);return()=>clearInterval(s)},[]),e.jsxs(C1,{children:[e.jsxs("div",{className:"hero-container",children:[e.jsxs("div",{className:"container",children:[e.jsxs("h1",{children:["Open Your Health"," ",e.jsx("span",{className:"text-underline-effect",children:"Account"})]}),e.jsx("p",{children:"Trusted by more than 3Cr Indians"}),e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{children:"Personalised Tips"}),e.jsx("button",{children:"Paperless Management"}),e.jsx("button",{children:"Seamless Sharing"}),e.jsx("button",{children:"Centralized Access"}),e.jsx("button",{children:"Efficient Retrieval"}),e.jsx("button",{children:"Advanced Analytics"}),e.jsx("button",{children:"Enhanced Care"}),e.jsx("button",{children:"Data Security"}),e.jsx("button",{children:"Backup & Recovery"})]}),e.jsxs("div",{className:"app-img-container",children:[e.jsx("img",{src:Z,alt:"googlePlay"}),e.jsx("img",{src:j,alt:"appStore"})]})]}),e.jsx("div",{className:"slider",children:e.jsx("img",{src:m[t],alt:`slide-${t}`})})]}),e.jsxs("div",{className:"middle-container",children:[e.jsxs("div",{className:"container",children:[e.jsxs("h1",{children:["A Peek Into the Future of"," ",e.jsx("span",{className:"text-underline-effect",children:"Health"})]}),e.jsx("p",{children:"What do you get with a health account?"})]}),e.jsx("div",{className:"cards-container",children:e.jsx("div",{className:"card"})})]})]})},y1=a.div`
  padding: 3rem;
  .sscontainer {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 760px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .content {
  }

  .content h1 {
    font-size: 3em;
    font-weight: bold;
    color: #001e3a;
    margin: 0;
  }

  .content p {
    font-size: 1.2em;
    color: #666;
    margin-top: 10px;
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }

  .buttons .learn-more,
  .buttons .get-connected {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
  }

  .buttons .learn-more {
    background-color: transparent;
    color: #072c50;
    border: 2px solid #27b3a4;
    margin-right: 10px;
  }

  .buttons .get-connected {
    background: linear-gradient(to right, #27b3a4, #031d37);
    color: white;
  }

  .image-container {
    position: relative;
    @media (max-width: 760px) {
      max-width: 100% !important;
    }
  }

  .image-container img {
    width: 100%;
  }

  .elevating-container {
  }

  .services {
    font-size: 1em;
    color: #00a69c; /* Adjust this color to match the teal in the image */
    margin: 0;
    font-weight: bold;
  }

  .elevating-container h1 {
    font-size: 2.5em;
    color: #072c50;
    margin-top: 10px;
    font-weight: bold;
  }

  .hospital-management-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    @media (max-width: 760px) {
      flex-direction: column-reverse !important;
      justify-content: center;
      align-items: center;
      gap: 1rem !important;
    }
  }

  .text-container {
    max-width: 60%;
    @media (max-width: 760px) {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

  .text-container h2 {
    font-size: 2em;
    color: #072c50;
    margin: 0;
  }

  .text-container .description {
    font-size: 1em;
    color: #666;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .text-container .view-button {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    background: linear-gradient(to right, #27b3a4, #001e3a);
    color: white;
    border-radius: 5px;
  }

  .hospital-management-container .image-container {
    max-width: 35%;
    padding-left: 20px;
  }

  .image-container img {
    width: 100%;
    border-radius: 10px;
  }

  .leftOriented {
    border-left: 0.5rem solid #27b3a4;
    display: flex;
    gap: 20%;
    flex-direction: row;
  }

  .rightOriented {
    border-right: 0.5rem solid #27b3a4;
    display: flex;
    gap: 20%;
    flex-direction: row-reverse;
  }

  /* h2{
    position: relative;
  
    .text-underline-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 3px solid #27b3a4;
    left: 0;
    bottom: -12px;
    border-radius: 50%;
    height: 15px;
  } */

  .trustedBy img {
    width: 100%;
  }
`,v1=a.div`
  .approach-container {
    text-align: center;
    padding: 50px 20px;
    background-color: #f8f9fa; /* Adjust the background color as needed */
  }

  .line {
    width: 50px;
    height: 5px;
    background: linear-gradient(to right, #030303, #27b3a4);
    margin: 0 auto 20px auto;
  }

  .approach-container h2 {
    font-size: 2em;
    color: #072c50;
    margin: 0;
    font-weight: normal;
  }

  .approach-container h2 span {
    font-weight: bold;
  }

  .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    flex-direction: row;
    gap: 2rem;
    @media (max-width: 760px) {
      display: flex;
      flex-direction: column;
    }
  }
`,b1=a.div`
  .requirement-card {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    transition: border-color 0.3s;
    cursor: pointer;
    height: 100%;
    @media (max-width: 760px) {
      padding: 1.8rem 0.8rem;
    }
  }

  .requirement-card:hover {
    border-color: #001e3a; /* Add a border color change on hover if desired */
  }

  .icon-container {
    flex: 0 0 auto;
    margin-right: 20px;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .content {
    flex: 1 1 auto;
  }

  .content h3 {
    font-size: 1.5em;
    color: #072c50;
    margin: 0;
  }

  .content p {
    font-size: 1em;
    color: #666;
    margin-top: 10px;
  }

  .number-container {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .number {
    font-size: 2em;
    color: #00a69c;
    border: 2px solid #00a69c;
    border-radius: 50%;
    padding: 10px;
    background-color: #fff;
    transition: background-color 0.3s, color 0.3s;
  }
`,w1=t=>i.createElement("svg",{width:59,height:56,viewBox:"0 0 59 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},i.createElement("rect",{width:59,height:56,fill:"url(#pattern0_2115_1240)"}),i.createElement("defs",null,i.createElement("pattern",{id:"pattern0_2115_1240",patternContentUnits:"objectBoundingBox",width:1,height:1},i.createElement("use",{xlinkHref:"#image0_2115_1240",transform:"matrix(0.0142857 0 0 0.015051 0 -0.0267857)"})),i.createElement("image",{id:"image0_2115_1240",width:70,height:70,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZqSURBVHgB7VyxdhpXEJ15rCTkFOEPjEpXwV8Q9AE5XnSSWsiSfU4qy2UqoS6d7MrnWFaE+wSh5AOEOncmlUvhP8CNhSR445nH7rIgsEDat4sN9xzMPljAvjszb+bOrAHmmOObxNLa/nbafV2EKUEKpgDptYOiAnyFqNzUg18+dT789w4ShoJpAFHeP0TAn2AK4PgHafdVlpdZSAAI6j6zY44JMJN29/OQANLg1JvVjab5O6Xdwyxg5xAR8zAHaIDqslYbjsJOieakBODY4l4gZRwmZT30+keYbdw3fyLlnPCrpC/zrervDZhBSEhBpc+8ZWY6dqUphDOwzPLuBLOJdjacvQgxsj1lZIFKnQAswsyDoCEU7cIcfUCEt6n2h3/fLT54hLzMgmc5Mwzxnj/OK5t/YvjV9Np+ibPQHW95yifk4TtGuvDmxE9sCfRuq/Kk5L8335VGYE7MCDgQE0xhqHCdq+c8SCwjaLapU7iqPq3DFMI6MUIIqtQhe3G27w2ETArVsyuADVmKUMUBL8M1dhM11MOVbhKwSkzaPdhBBSVfUhiFe+4bl+WGPTk2uwE7+AXXuRwca1ynvG1Vn5YhZliLMT1SApwyPRuoqTB4rlY4NE2QHUOsbblwcNbVi+KDFWLEAsKksBXsytbfqmyWNdBN7lHl6vaYP9WA3hdwgbd4JmRDTLBCDCm15x8LKZ8rm6WxPwud4/N/ttzzyuMVMvGnR5CQHRc5kRMjwnYQaPnKT0LKIMTChCAMlS1xkRO9xRAFwhchvYAIIOReJ8euLhz5rsQBM+cdNqHdbgwGTYWpH+mGXWoYhJx7awfyyZ3u7yhOAWAFLCFSi8m4h7K7+DtMRgLm4IOtqAq3hHFLwppZcEC22aCLlJjWhNU5EnyCCUHU6bkUOutgCdESU91oeLHg9MYHB2aiq4ljUKv6pNazGsp7Vho5Io8xd9mFxof+H7o1F7TUlctPZYgY1kqCBfd1LgU41tVEopzIZuOCXbBGCM+8VRYswAoxy2sH2/y0B5Yg2TOCTyTeBwuwk/mKBdwSWqvEKuow7OsxHChZNhyrw8k5UP2yujXhdk5WuqdWiOFcpc6mbrZSjZ3ji8qTSDLg4PsV5HxHoq6AHTmsuJIITcEPUOoRRAwVGkLQmmpgAVaIMbmGfyW5QR5lrmHGVgi7ZHNjzJY0ak2o4rjy0jvMtFR7GyKCjK0Ev4H6LViCvS6Bdsr+ofSqJK+BO8JIoL2xlSbodhkswRoxUh5IE8tfO5g6uos8KS40IIC9tDmyYrWvJJ09JOzGAJEncfHkNuR0Ow36vS+AyXfaLj2sN9w0YSGQJyfUbiVoL7sHe90pDK9y54Cr6aIAlmE9wROXYjdYZdXtJLjirMCx8l/keqemNB1fgW78AAsNcz60MgoWcvxe/gK1xJNgRxNLEVLimPqKpRMp5PDTCitwJV+BM9YDUCSFRQdSpo/UfXlxqL5nRPWjxyWICbH2riUukFYrXE2Pu802maQy6cuVeOSMHmLrXfvwrKfI7lUCpfOe5JDz2rPiNg2uQuu8LdfTWlWTatPGTowPj6DyV8+B5DAfAxmBOTEj0D8ALSMYveXPrMSdwfeNIBUYlC/6iDFyQb8NZWFGgLrdJ5D10SByAc7meOvzwaRxqDQvBZtKdXKczscy3soZ7br0iMyC4JSz3jLEAIXUXOykasNSgvF7FhaRLrwpoycncF+73KpsbUDCmO9KIzAnZgTmxIxA4sRwfFnn+BJ0Erjt4k7D/deJBV8RoVhq2OFLM1wo1/BiCdRuUkVkIsSIMO4o5+jaUPQgWK0julxN4nbE2F1pyd3fdlTq/Y2kCBIYY+39dEwQ12lh5+ja/d1EL0WHCecxCvBjoPT5p4lEoS9347KeWCxGVP4LRe/7SBE3UXr1/GjrWowxU5pmgjw048viVrfLEM9d/NaJ6an8fa5zamLH36aVOxSfq1tV0rgKMinuw7iWOonDtawpeP5/jcD/mPzAW8/PK5tjTT94Kl+hT0SHbpfhXuEv12bHwIrF+A2yQddp687DcUkJwxfRw65FSDmbrmWFGIXmFpteZc4BdonUw7tMJoj1LGl82Ndh6LpWCSzACjHa3D1iIMnZcwmwX03U0BtPNR/Wp6NOk+/4fLRV7N584Slu3FGAbwnpX/cnmsGV8+Ux9vkcwxZ+u/sExSh8ASookudOSmchAAAAAElFTkSuQmCC"}))),M1=t=>i.createElement("svg",{width:59,height:56,viewBox:"0 0 59 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},i.createElement("rect",{width:59,height:56,fill:"url(#pattern0_2001_1549)"}),i.createElement("defs",null,i.createElement("pattern",{id:"pattern0_2001_1549",patternContentUnits:"objectBoundingBox",width:1,height:1},i.createElement("use",{xlinkHref:"#image0_2001_1549",transform:"matrix(0.0142857 0 0 0.015051 0 -0.0343112)"})),i.createElement("image",{id:"image0_2001_1549",width:70,height:71,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABHCAYAAAC6cjEhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlCSURBVHgB7Vxdcts2EN4F5VhuH6qeIOoJ6p4g8gkqe/oeqW460ycnJ7B8AidPnWnqSHnvxMoJIp8g7gmi3EBPiSKLQHfxI5E0Kf6IpOuZfDNpIZBcEh8/LBYL0AglodUdtuaw3EfErkR4KBS0AbHljiulpgphRqUrKdXkZvz7dRa7ze7LjhKwj4A/ooL9oE0yOlMAMwT4l45NHoA3mY37MygBCFuCHxyFOKFih/61Ml+oYKoUjAAWr+fjP6bBQ4ZkeYICnuayqc2STSnJ5pMJbIHCxDAh9PZOSSGdyKErepPXEtUUQczMw8oW3ahF5+6DwkcQaaySMJiPj882EPKRFDcBsgkgputq2WabqLBNhPwYssnnq5t+lPSsyE0MP/wXkKdgHt7hit9UU4pxFik3f3nZET72FOLjVSUpiIjmQtvWcBd5IYWczP9Jf/vN7rANQnaoy50GbBB38Pzz+PgZ5EQuYvjmAtWlQrVvq66UkIMsD55szx+ECLKEPJDieVF/0Ty66IUI0t12cZBHPZmJ4UagUO/szfiBzz6/OX6efP6fdF6jvfoNjeukhho/5Q3J9kclF72kBkRt+qBmSU6clX1DpEvEE12Rk5xMxIRIoRsslX8Y90DfdP/mEelE+5I4p8kPhzDxpf8iej03JI447csEPiYFdCHBERt/wg7399GtZzq6GFA3P13dPyM5mYjZO3r1wZESZ3i3+/KpEOIUcowgZvRYnCWrI9G5bzKqRzp25GFb1LUEDLlMjvr6gcKDtG6aSsxe9+LcOtoZyfynYEO0w0N/GHn4KzLKI8j1jZBT78afQYPkL0VbKNVRKB4FnaOU8tmX8ZNQl7REnwdtSpBj6anJtzc7U9coVtnC8zvkYLtRRx59gSHlZHDIG4nZ6f613xDee/vzWdCnRHyOfvisjnjv6IKI5r5vrnXDtbF7cUpvd7BqoCf7WUelkCOP6fJ7h6/e0QvrmHvKg02xDm5ugO1C1GgipRN8iCApZOTs05vjAeRAdIRjcrQtSwpJ/jVJ/mnekcmQDqZbR5Rjnlu+N8dw8vny14MkOwISH5z6+OqNLnqhi+jNbEMKYz7uT7mvU3Gs7RAhK1LY5uWvvSLDNat6KX3TYAQif/cyeE8KNl+YY6pj2hiPRGIEYk8XlHob8isUIzi5FiXFgRtODTlkdbi6bW0ybPfRPoQV2Tx6OXDHmrLB7kATjuidJtmIJYadmmu8r+cza5jACXQf3rYBDqwOJqcMUhy0P6TuwmWampxwm7jML4OG97f6JCLN1UcRS8wCyNO78vi3sStznOK6EDs2KBFMTlmkOCiFfVtszcVyPYVBQxjXfwq0NYiGK7i5hjYI8LOxDFPuOjSmTrUHR+ja06+ypg3uEuxTaCTi0IHmUIJ7wMBMF9bxlkfBI9Xp3/M3xyNX31ibWbbp4mHIMjkvMjIEIa7ApBX0DJZjCrgnkOi/FSA6VGzzlEK3J4wu1bkXPnKVAnJAmVCfR5D/vVocPIlTV5aws5/1ulhiyHEh/6OhbRVa665m4S9VKVmyOiDBW71Eir3arsxt022U4oe463IpxsED/94QEwTmmMs14iqbR3/rfiiU2Kc4wNTRSPfFHvfBy5VuvFss2+v3zxlAA6G8n6mdD5Gyi3FXxRJDsUpPm7GkMHj8p3CbldLyKDl9A/fDzwjA1qoVgvyNNEUO/KidiT4nQEyD5hX+69iz0DJNU3Y99JGS4L5gHWJAc9m4nmNCG29dlgO7R5QOAJ0OmO2S0yprqaJKJE2E05DL+e7JxgjMPCMcSZYAHvU2TeoK2eTgdDUR9keQA7mI0fMMOzvl+YfJwZYDnrFvmtQVQXBeF5f23Pg8kBNmdqqDphZP6ZMmYblsklr0pDUlFZAHOvPo1EI5GciJ3MRo1UhfT87Ysy+EPIctYfI7BmWohrOAbt2LZ+xFFt0Kr0TaTNm5NTKimXEfCsBm1T4E69LSjpvtrVOj26QxCkW+DM538I25THFCj5LNwwJmQmpxKKqaskix12+HYPY9r3Li1OKQVzVlksIorBgHfoCiylmrZTUDnkGGtGMUZZOinw1KQBFyViORvka5Wfwsa7Lage9VNimMUohh5CXHqcXuZ5m6+mCymhJkjzfZ4HvwvbhcJin61lAispITVAsv0waPhYNI6CUFkVWSwiiVGEYWcoJqiYsxwqp5cMvXVE2Kvi1UgE3kbFKLwybV1EEKoxJiGEnkpKnFIU41dZGibwkVIkoORcuXaWpxiKqmTlIYlRLDCJIDdpkiTS0OQdXUSQqjcmIY3BCh1ItVRYpaHIKq0aCl1TpIYdRCDEPZDH1WtTiEfA3iozLSHFlQCzFZRqIkRFRTeuYwCbUQk3UkSkJo60Zg50KVqJyYNLXwfjsUwm3uae8dXnzgLW7Bc+5CNZUTs0ktnKy2mxDXCkBoN4T3LqqKulVTKTGpvkWp1UZCWo753qwjm3zyXNx0g6eyatBt+KlBNZUSk+ZbEFEvqFPuWH9Oo/fIKXllj7aj50vlDVbXVqyayojJMhLpHd2glzm6ze5fPd6xhXofMO//xVtLwEwcqea1/VmpaiojJstI5Cvp/EaLvyVQAi95yYN3bwe3uAVRl2oqISZr3MLb1civ/AT8jZMBf7E2sttcY1GXahpQAfQObe4g9OaV+VpkmnQuNxTMNrZ1HaRAwZjM2y21WjXPy15H33qVIIrYzL/eoe2f5V0mjUJ/Y6BXLMPbN3h31PzNkwGUiPIVI5Y9+s9H++s74BiFNzmiN/zm8NWJVF8O80a/CR9zfAw479L9TOmKieLWZ345P6ja5mOObVCJjwnCNmBCSSoefs/NFtldzuYdZLl+2485iqK2tAMv6SoJff2D1ozYX6RdE9zfUicpjNqIYczHxyOXsLJfxG1EFd8tZEWtxDB21gFaa9NKY+izIBrRoGbUToyON+xXIfynCZLOCx5rws4Yakblo5KD/VMHbn2pBTn/NAGjinglCZWPShG04Z6gNmL4g/Q5yD6aXVikFvlMpXysgVLvJ9a7tmgO1QfZmEBNqK0rOVA8M6X/PaQg7SAtSLPd7x2XlVz8UPQPWBRB7c73vuArMQn4SkwC6h6V1pCqnbazXKD3nQIFd4E7IwbBG4LwNp5zV6QwvnalBNSuGBp2O1AAdQ7VjP8AFhVnfSemaDMAAAAASUVORK5CYII="}))),Z1=t=>i.createElement("svg",{width:59,height:56,viewBox:"0 0 59 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},i.createElement("rect",{width:59,height:56,rx:10,fill:"url(#pattern0_2001_1484)"}),i.createElement("defs",null,i.createElement("pattern",{id:"pattern0_2001_1484",patternContentUnits:"objectBoundingBox",width:1,height:1},i.createElement("use",{xlinkHref:"#image0_2001_1484",transform:"matrix(0.0163934 0 0 0.0172717 0 -0.0267857)"})),i.createElement("image",{id:"image0_2001_1484",width:61,height:61,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA9CAYAAAAeYmHpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB7ZpRUhpBEIa7B9TFPIQjkBPEnCBwgiwm70ppUuVT9AQmJ4g+pUow4gGU9QSuJ5AbhCPwpIu40+leWGpEAbWWlDvu/yDTO7tVNtvT0/0xCIaK7lHxBsKyVlgES6Q0dTX024G31YmvYTxYcuvbSqldHlrjsCkCaDpa7XS9WjcvFxz3cBcV/BjOXxBRBywR+1UEUu8RaL2HVOJLFZSQ7im65O9CLuxcn27sgWVy3KMSKjoXH0NNVRXA7crQ4QsbHRYFXq2jIdyXsVLwSfHfkhgE9BcsFoLqxuP8Yx6QJRAo7co41GG7731rQ4o102lJcj2lf8RpPq9yoFYPPdQ3O+Y2kCapaZPjWR2QzjhQOvyQq3CpBQnKWT1cd9zfpaTsaZro9CDjDRwmDTVOcuXrk02XNFbEcUJacdyDdUhAy27D5Ug6ArWwm4Q9S2ryRLgyHF4E3kYzvm5mQk6CHyEBLULOB6L9UOv9JOxZmrimpRSN1jHR2/E5MxMmIamS+GNbxhKmgQ78oLX1bBv0jT8t30xe01r50SfiyvhaQcBBGGl9AQlqPEwdt15+TpgjLkytNya+aQnjAmdpHrqIi+eFauNMI3WQ8FNUzBB0eAPzIUFJmPaIlw71o3/agXxb7JB005yfZd8O7UlCCQf5drg4aQanmzVzMipRkVqctct3nmKHiW4qadqyTD+n7tPDtVZZ/tzgrA1l7lSKnLXbBco3u95Wouv6f+pRFdnVyaaEuRfbPUi3lDTZMkAa1OC2ikCPOIGK9jhRVGw8rqJJoxTkvkcD3nGirfhNtbGnEb9HCQr1Md/SAUskbzhHuTWpIMW/69bGuxEuWq42Lon3ZLBYtzr8IB1ilMiEjxkOW4mLpLbIY/5XfxwXSWNh1tm2yMRFpHXlDi6y0WHR3SYJ1zJcNEkmLuKU3wm8rz6kWDOdLriHvxgXbY/SPOPEQvWPT9SrWYuL+I6oT41Q0RAXSQNiPS5CBuSCisZx0dJqfRsS0IvERVfe5qjZMDMhw4T3kIBi3AO6/9O0n4qL4udn6cXjInmLAQTtx9pJ4aLSvbVCtDa4Z/64iBS2zDCeZSeKi3j97kdvmB1GxPI8cVGMf14cLrqlsJqmn3cSwUXX3kaGi9KkDBfZioskN93DRc5qnX+KVbsDXAQ+yC+UlijDRRkuynCRfcpwEWS46GGNny56FbjoodNF88BF0hZOwz/j87Pun6YXc7roob74qX10drpoilKPi+Z1uugeLkKiUfEOCeo5uGiup4u4KTlmiNCNThdJyfoacVF2uihlynARWKxJuKi84B5YCREexEWj00W8jGkQxq8DFxmO2yljx0HzuvOlXgbO0kBYAkuEUlso8BfDnD/cjV6n/gHUKlT73CU3SwAAAABJRU5ErkJggg=="}))),j1=t=>i.createElement("svg",{width:59,height:56,viewBox:"0 0 59 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},i.createElement("rect",{width:59,height:56,rx:10,fill:"url(#pattern0_2001_533)"}),i.createElement("defs",null,i.createElement("pattern",{id:"pattern0_2001_533",patternContentUnits:"objectBoundingBox",width:1,height:1},i.createElement("use",{xlinkHref:"#image0_2001_533",transform:"matrix(0.0140845 0 0 0.014839 0 -0.0267857)"})),i.createElement("image",{id:"image0_2001_533",width:71,height:71,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABHCAYAAABVsFofAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPdSURBVHgB7ZtdctowEMd3BTQkL+UGdU7Q5AZwgjqZ6XMhNJnpU3ODkhOkfepMWkry3A74BqEnKD1ByQ3oQ4PDh7aSwISP8CGCHRv0mwELsx6sv6WVtFoADAaDwWAwGAwGg8HwWHCeQcoupVxwU7BmuM67+jybqeLs2F9tjvAeEdOwphDAJfDW2TShHhQnaRc/IIMCbAIEdaJW5iGB2PiJpF2yNkYYCYKFuFV66Kv4+AliHRs9zYSqW8T2G06uAWtGwr7Yi7PYL/UBKZ20P1vjrWei5TBCyysT8qt1FEbSdk5q4nAzOBGPW+M2E+IIJ7V2I9OyxHWMpT8C1slCFOFUT0LC0ekJWuIgo2vR2CyIIqKPuNCxRKmgcYkOZEGkwRc61lotZxgCfgYRQIy8L8XBhiVYWhy3fFyACJA8LGZxSXE0u9VmYcSZgRFnBqESR4ZH5LQeQkJoxJHCtJCu5Xpn++DbNYSAUIjjCUNIvVYjFoIQAp5cnAlhQAWZQjGHelJxpglzW84XIAQ8mThhF0ay9Az5MegKI8O24jFas+K9fhC4OLrC7BwWSyLGlO0ZJv6K91MIiEDF0RFG2TJ+PhBGQMRrECCBiaMtjLQFGLFtOieXECCBOGTdrhQWRx2IOC7rnC7ufEtWWEawYIZyDlWvOK+yrpOrI2FtEVu/CcTnuM5xVbSI3W6inWp/P5nrVG8rR/sQAgJzyLJFQMQw8ZwZGHFmoCcOYbV3hDpEBc6q4l1t5BHgb51LtcRpVo4yxHhGJhdARJC+jjjb78S6+3fl/Eeda7UdsvvjuOpCtFh2MDA+ZwZGnBmgzP0jhudD51Jwn4bS6L9WBgeobXOW08l26GWbcT+C7tZQ+b6uRI0timXiHMHGUaNhhoVaCaKpWv+gLWPEC4cfELsihoMW+Mt9XRHBxbY97pBvwD+eez8eh9ib9oLiyBX9HdIrlVbVI5B7lIyIQ7yV9isMqSrJ+B/14wxOxQa/uAk+t6ItUsJY6v4ALt1yPgc+0U86GCRPBra2kj5m+7Aou5Pyb6gifPPHAxG+6BfExJNavm7ZEPCUlyzKOWswHHG4k0mDq6QpJmGiquLJYx30+DktV3iVxAgHcSQhVB2T9pc0MqZGAhlHeUaYCSKDNPH6Yk/czFxnn+zEa4Hcz3DqrWilzUp+V2Wwq71pbwtWfNGh7kE/FXXtUf/tYFyO2LK7q4dFvJtzRbxaidObR8hkyJGcv5XPcUKKNfxB9J4rEWzLqrJ3copAmwXRp2bl7WBfbOKPIWo4Q7Kh5w8sWHPkgEREVYqRIxfVYDAYDAaDwWAwGAz6/AcBu7hGE4J4EwAAAABJRU5ErkJggg=="}))),H1=t=>i.createElement("svg",{width:59,height:56,viewBox:"0 0 59 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},i.createElement("rect",{width:59,height:56,fill:"url(#pattern0_2001_1154)"}),i.createElement("defs",null,i.createElement("pattern",{id:"pattern0_2001_1154",patternContentUnits:"objectBoundingBox",width:1,height:1},i.createElement("use",{xlinkHref:"#image0_2001_1154",transform:"matrix(0.0142857 0 0 0.015051 0 -0.0343112)"})),i.createElement("image",{id:"image0_2001_1154",width:70,height:71,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABHCAYAAAC6cjEhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjcSURBVHgB7VxbctvGEu0e6kHZP9xB6BVYWkGkFQTUrfsdytZN1f0ytQLLK7D8lSpLCunvxCK9AlMrkL2CMCsIfyJREjGdboCPGYgAAQJDKimfKj0AguDgYPp1pkGAb/iGb/gGd0BYIipeszKA4TYierz5PSBWZffkAKIvGqHH/1yiHnYGnf/3YEVYCjEhIfoVKmiAScQcEFGXf70ZdP7XhSXDOTGb3mlDKfUaMhASBQG0QN+9WeYMckaMzJI7pd/yRdVnvNznn69iOoTUnwwGcRtIPWcqqg/eQdAbkl+77/z0BZYAJ8QEpCB95ovetl7gi9Oo323ptVa/c9CPe//6f99vrw9VgxB/jL7G5lUftA8/gGM4IWZr/7zNf7zI7qObi5cnkAFlr1lFRZ+jM4i03nPtdwonpuydv2Yne2zs6g+1v5fHBJ7Wzk404ivznKTvdlz6HAUFIrzDNilyAXn9wl/twwYSmuZTQdxsgkMUSgygbw2WtH9U1F29br+oMzlTgpF2y97pLjhCYcTIIDmq7I63JcQOOj+1oEBowpq5jVh6DY5QGDEKsW7t4LwDCsagc9BDoqlJ8ayRCAgOUBgxhOr76QZ9cuUYNVHL3L5Rwzo4QCHEPOW8wwypRLoDjjAK03+MtxVNzbdIFEIM3auque0DOM1OgxpqDMTn4ABrUAC0om00UqK48Fz2fq6SWvP42Of8swth/WT6iB5fdI/P9BUJutedw5kzD8OSYowqOEAhxCRhUlkjeXx3t+dklFUMpYhdQnjFGXSfo1sHtP5gZrpSX6Hj+tcZMWNCbpVuYDArFrqQCkoRqlS9XDtjCeL+YFkVdiIxksmCeH1NveScRPWs99XOfrxFOsb4ad7nUMtilPrOKjSRPnESV+VZ8sBvBDkSbvy+5Z2f8HHPJFGanKuQa7CRSExYwLFjVfIB7yHuxEpTnxSaF9ECY+Qj8PSHd/clv3P/a+iDyvunTJ6aEHPz8TAoPIPZprQXmB/hD/aHsdhF1uz7Cqmv4bSXtvicY0pGVauwGnfUBpS6t6BjTiEO1X+T5W6NJAk5viV3XKF/PEuCCM9PcyKgeQ2wy7+7kALzwrUxTfG79MeOx0TvNknt5CkNJNu9bh/Wef4d8Bh60dd9ir/QML+yBtSDlEgmxijaOAp4cem3KHXwULo8uuGqOEmQyoLBxcsWadyzCklGSWFz3YsSEEL7JWuW+Tp9fpVIjEb/k7FZGRFgQfSXiHzJ/kbvZRWl0kBmzwbhHkgIN8a1hqW25Ehgjasp243JDjbpLPJHIjEiQZrTVwgo7583x4N44p15Ef0FUNPB4Dd36prMwE2tDmwJQvKfqT4TVPpKX5nvEz8HGTA3uQg/RH2O7O5roK4KIoolO2aSL0dRaSId8HtTJzti1reKrszP5zF1OGOumPKHIJBALl4eQAbMrZUkvJGG6EkrCmTRzCCFHa0L84mDzBzxOWA4fRlTlBSZWWWtjiAjUhWRg444Pr03KyoEYPvdpNIxLBnic/hPvInwzRKftEgASF1dy8y5uXjxLAybdmgW+y0q+mSFzNJopGJ0WGt+licqZpcdtOqCHZovi5Yws0KTb5kKgf6at6bKTIxkoea2r2lpfiUOQZpP2B1vs0N/lVfyzEyMLWFC7y5GM1k2ojlXXskzEzHhcoURHnm5FR4JwpzLiFBU+gFyINuMCYuwCbQ2JMYVIwjfLMJPdrCckcecshFDaJnRsjoPUgOnfoYRNCnBgshETNCmMQJLIl14bAgj5gSkwD0xoxJ+MjUlJMIjwyjhm/bbwOIrCKmJ8e/RslcuHh+XGY3AK5W9yf+Az2BBpDclFVk7GtJKMt150LbUOU9ci8UDaZNlhTqfvhrdj+J4carjPoX13mNkJrLmVJEKfuaBethKyo4tYoQUPnFz5kRCW9xeVW00D5E1p4opa1jADVH3Yk3NYoAdaq40+h8FTF7BtIhBvdaJlRb+XZClnERFzzKlUbibOb02908brNhNNF+RN1fZuR0LXrAzdMkeyxILRabUUYlt1fIpPpQeq9lNIxEtHjlTE1Mq+ZFli8WzSpdQtlb0ByyI1MSs36/3zG0k9SiJIaNsYfRgQaQmZhSejTugnDTs5EG0izNplXIeMhWRdidTvrLeCSKyiIL7hcuWbLJDgWW9CyizM4JlkTxRM5uCp5UlY7rss80Kqf6pQFkkEzGBnzFEZ5d9tllBQ9Uwt33t55Jds4vhkTXggRo2YMWQBXyrf4boS151MTMxo44kQwzKv1SRF9ElHY2U+3mmTMTIY3xb++d/gp1EVW5Br8zXPJgtIBel3ppdGYsgFTEyI8q1s89KqVkNQkFfnMsnQZIQ9tjN2A9QR7VxJY2SsADmEjN+jC/aRfBgIKhy3aFFIE1LM5+fnEJaQlqLkDOXGDGTyLONQckui+aKaOr5Wd9QuNlelr8Rs442LQ1L/g4i1ZgMy/Hy9knWm5ZITNgja7dryRNr1xcvjyV5Wg9aP4yOKybwFsk5OTIDRmZt4kjaZK8/HnauP77YiegtFVAbmfxgIjFRbx+2pU6zyVnNO5LbiOm5IkdICfuIpxASok1LcvPshX7wsoxpnilNC0XODWa1e4i4JQ+DgkFOOHP0VdE+Z8s7f/uAFMIPAQkzEMm5Ktfg70JKJBITKeEv446TZCpKTtAwqDZ+Dx1kPkjEe1L75coyaxiR0n5Rj30frNm+RiU6agup8xjzifpZEHJIq52oZiwOcqt2zgS9r2c1LyFE0gRpjnz4cDu9SyJFMJJKFlLxkp8lkOgD8Fq8PPnDFsyBmBU77D1EXoJhX2OcqMoFZ5MjXHNz/6wTftsHfOE7XjH7RqWRuaRK27yauM2hRCrl6oyPkQt9c9M+PIEUkOcX5Br43+AbRiAlFnpWJg3CNSqcl2dkxSVHxfoyRHhnxAiCBySUrhNIyp6LoEtS+thlY3UUTokx8eQ/Zx4vLHsUmkgaX3PJg+tqfddaxTLN0ogxEXzbh1ZVn6iKI5IoyKhV3+fViKcsvK96CfhvMQYS5H3N8hkAAAAASUVORK5CYII="}))),V1=t=>i.createElement("svg",{width:59,height:56,viewBox:"0 0 59 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...t},i.createElement("rect",{width:59,height:56,rx:10,fill:"url(#pattern0_2001_1135)"}),i.createElement("defs",null,i.createElement("pattern",{id:"pattern0_2001_1135",patternContentUnits:"objectBoundingBox",width:1,height:1},i.createElement("use",{xlinkHref:"#image0_2001_1135",transform:"matrix(0.0151515 0 0 0.0159632 0 -0.0188041)"})),i.createElement("image",{id:"image0_2001_1135",width:66,height:65,xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABBCAYAAABlwHJGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAosSURBVHgB5VtdUhtJEs4qCSPsh2VOMOIEyCcYOIElIvZ5pMHjiHkynAA4geFpI2ww4nlnkfYEwAnAJ7B8A+0LEqCu3Mzqv6r+q5aQMJ75wkZSq1Wq/jp/vswqCfiLodb8V13CUsOTWJco6ijgH4BQF0LUg1NWg/8RUN2vVeEHxmrzdHUMkwZdZBMB1umxwYfpOUgQEPwL/hTjhyOCL34kJ22B4s2dUA0BUt/dEtdaiB+GiFrz0wYIsUcXvyHpfpe48m8g8AYVDOlxQFYyJNKG/IYUOEQUPfPkZ02Eb/rqvZCwAwm/TuAbIl4SUZdexbt59bA0GPY7w7yTa83TupDKOvYsiQgJuJNqR+QTcKVA9VdUtZu86KHzGyZ1jiIhalAbPjsiXjaPm3cSPxAB9Yy3Uxd/B48Hj/VsiGBzBeGdohAblNCSb1+hVPvjP3+/5BePvXjKKKvGN2hCnwURbAV0oacUAZNuYBEwL2iNEUZbxAE/fHciVponH9APhjEQBlhRnXkTEIKFVpR1hPgfP3w3InRAFF6PJrRhvYF4tIyV/eGf2+6YNyskxZ/ANxDwKz9+FyKYhHuBF4ESDDEkN2ixFYxgsRAKfsZIh+A3/vvkRDAJlBWuaQL16CC7At5vjs//GMATAI0boJS44ccnJSK0BJMEkso3L1BsDvt/ZLoCK0quJciX30CYUpEUo6ALUOps3J8ujmiFagBBDfjxSYm405kBorsRk5BWgdpyQO1BMpDqDwqqMWgcKdu1rZNuTcndIiVpggJzw1Dnw4f+O20REp4ItebJHj00w9cuErTlZJGQAF1Um+qPa/4MlIDUOiXCl/DJwixCZwWpmgKxoQT8LAwSOCYovGvlucO98A4xEUjp80dcRCkumBQ0JFTeRy4moH4HyEXUJriAcj0UbKxSw8OPrV5TCKtEYTNvTCQIjP3swKhjgpQXxqH+spKdpOUEVkOE4a/R0EptFsWMV//82FBe5Tp8PVHe69A15mYRS82PjYqQH3IJCEAWsjvq52cHURE7kcIm0pYxTQIjONZ+2fq8TmRo6xGiwu53mTe2msh2dOtp7JAExlxixHLz005VVq6dJAAc3Pbf9gsHQ/FL9BS9A1cQJFc5ir8AG1A4Afkm/hqbsEcRweZZax1fSCk/WG9wDAC1C2ZFTMduz7f3XeOBUXZ7ADfggpKX5hDcs8w6jd3C0i5SnZnvz0wEV4ssjBJWwBe+O+ptrwXdoOiiJlWv5RpznOg9VMCbm8zGiYwzEN2UZB0zExEcD4S0hRHhioLa2uh8+5BfCBB78fdC9+Hf75x3d9zvDMzXirrR4AQ3WWJwkyV5Bt809AWZPx+RjiNTB0smgeIBkxDdPe37ZPZhjaDLapMkdX8AZYGCWm64wU8p+FKKhMKYQrqgHfUWSHFmxhSpNsC0toz5TGURzGxVVnvmoCEJ5nlYgbbx8mrcL19DUAaIfZcICYRYznxO9uhOx+kT1VHWeUnrzJpPaR3hNzwTdUIGCUFj9Gv0xcrrjPvvujAFKCVeo5EBePJmXcFaQ1uCQQL7Pcem9LxP9qj5ux/P534ti4jSrkEt8B46SPBP1GYYTwSW+mOYDgpFSwiISGcZzXXFytZJdE6imTdkkZYcJ7h57fDsPGvQ04YS0F0k4w5RnXCWmwoxVnqEq7LFkAkOmqgEXZgYOE8mSyCFmKlUpfD2oWSschJB1V3bKn7oi6lYyi2GzGYLuUUXZgSTMTr/bY3uYieHEK4/Dkh5vjYVojlvK34UWAOj0DW0aYGKxVJQJ4TFktb74G1wM5QC0rrwm6/TCSIHxufbXXro6iKuOvFJnkwG4UXdQt68cQ/iftwAsDhzFQbLVNCSarM2qd7w4gtHdIekHpKm+Am+A1LzLhGwc4ng+sGSzpTfqZsDrnrCRF6EXiQ4ntmujEej3tsyfY00ghTI5WqpZgcYC67CV3Dh5/pkFU5pPS8kU2VeSs1CZrD0o20hCZSu8EwIbJGs/okutj76z9vmuPeWVJ4lappUlP0KT4AsErJSah5EekBbEFngqlKoo6yF1xB+l1p/PiSSOkr3rxfpIikSZvjOFBErW5+/JoopPTD9PwgLKvfEEl0mR1fqMUjFBJor64qslFoEiwjOvXTgNHFOZqvMhZdbJ/uUvCKNX9SsnQVsuVrt2s2YmUhgWDGCG62J93c52M0yeVaeEuPuEU+YO9Nlu81F8C0OLywS2OrIHWYhgWFZhF9ic3WJq+HyGzwSK63PF2FZrb+QLIM72LO4Sd5ax2PGjMaABSNco0jdvSlihmML0VyE28IXeNitODbohksIwfseX1zUmh/bRZ/l/iNnBM5CQVbIcqsvMAcs3CJMvGodHyoh3pvH/F7D/UFoHf7apPyFLrwN2duHwnjlk1JSObowNRGhmQa1Rt2fC1JRw40TdwMmmU0iUJsN/PHygqle7VJKXZqpmeufecSyqYjwt/gITq/Zk+V6BO86Lt/30zS3z1J6JQuagBdKHrKbvWwdd6PyegoJ7cIUrbqUestGyUDo6wBv32q3xRiShZxhBfvm3Z5HGzAPpVp1WSRo3+bNXqBWkwuyApbZagp1ftC6by9vfbqREFS5LhKFdxrdO+4xgHcJc4KTiMxiJr3R65B6AN1oQZbiB5fxd/3fnZLc2lAq4Nu4l7c4TPMw9lvxcuA8JXth+vQXctIVXVZwuu391jZTpBSVN1AC1j4qxPxdM7ZFXs3LJULkEsHZIVjDCDF0+b4w1xUMNVkE3tgVPieLSslj/2bIeB6+lG7DnJHrGlrKGnmcAtOuyxQVIEX48onIX4pTsUVIeykuXlUz1lDRaz0soIqVeRM09bzfAS5hilLWjVfuQi2xBmK6HKfqJAmE3VmLKudUMo/q6ByAo3OJtUu/c2wtrfVdn6HqNFaZiP8Nn3KgJb2SWlos2w+ZBSnXCHoSGxDP4Cgvkpug/M4psB4dcJDnb+Mx1kDQ38+U0WjJX1WbI1JEBIovmJ1Wbs67QLL5FK3NYnjkiid6v4KxjYeXBqF1fJHakkzucLtASwhhEaFXtQzZy7m66MNRlwis5cCb2972jutzFCQNRSkGetMJiLpx2nBePZEysGKE7bMwKAqQ7Mfc8k+siep2HDggeDO6dYBTrb0bVzdfn4gERmQRLFrMvY151lCwffCKSGi62npMINh7KG2QW71AuZ+3B3NRiIiwd56krcFRJHFv89C1qz4omvI2fgyFwg7vulv07vwsaCKSPmtaA4uaJSF3+H1MiCU24QecdMrk9nijSWYJf8VqcfTEy4MmfItICBuu6kwXwPTn9DoH1Relo3kqvTIW/EudaaCJSKZMEEunOYu9VpMEpgGKVTIhexykcRb5S50pUPV7hEanSPcTRD1xnkXALUwPRNGhtdIujXP5mHEWBWG1vpJv8o9DSPrOZAE/GNg11hPH+IK/8M8MR4HvPqc7tyhUyRrOwA9iX/J+Yvx3wP8BO5HJCP3PdN4AAAAASUVORK5CYII="}))),k1=t=>i.createElement("svg",{width:34,height:25,viewBox:"0 0 34 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1245",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:36,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:36,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM33.0426 0.727272V24H28.1222V5.39773H27.9858L22.6562 8.73864V4.375L28.4176 0.727272H33.0426Z"})),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM33.0426 0.727272V24H28.1222V5.39773H27.9858L22.6562 8.73864V4.375L28.4176 0.727272H33.0426Z",fill:"#001E3A"}),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM33.0426 0.727272H34.0426V-0.272728H33.0426V0.727272ZM33.0426 24V25H34.0426V24H33.0426ZM28.1222 24H27.1222V25H28.1222V24ZM28.1222 5.39773H29.1222V4.39773H28.1222V5.39773ZM27.9858 5.39773V4.39773H27.6983L27.4547 4.55044L27.9858 5.39773ZM22.6562 8.73864H21.6562V10.5457L23.1874 9.58592L22.6562 8.73864ZM22.6562 4.375L22.1213 3.53011L21.6562 3.82456V4.375H22.6562ZM28.4176 0.727272V-0.272728H28.1277L27.8827 -0.117622L28.4176 0.727272ZM32.0426 0.727272V24H34.0426V0.727272H32.0426ZM33.0426 23H28.1222V25H33.0426V23ZM29.1222 24V5.39773H27.1222V24H29.1222ZM28.1222 4.39773H27.9858V6.39773H28.1222V4.39773ZM27.4547 4.55044L22.1251 7.89135L23.1874 9.58592L28.5169 6.24501L27.4547 4.55044ZM23.6562 8.73864V4.375H21.6562V8.73864H23.6562ZM23.1912 5.21989L28.9525 1.57217L27.8827 -0.117622L22.1213 3.53011L23.1912 5.21989ZM28.4176 1.72727H33.0426V-0.272728H28.4176V1.72727Z",fill:"#001E3A",mask:"url(#path-1-outside-1_2001_1245)"}))),A1=t=>i.createElement("svg",{width:34,height:25,viewBox:"0 0 34 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1245",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:36,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:36,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM33.0426 0.727272V24H28.1222V5.39773H27.9858L22.6562 8.73864V4.375L28.4176 0.727272H33.0426Z"})),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM33.0426 0.727272H34.0426V-0.272728H33.0426V0.727272ZM33.0426 24V25H34.0426V24H33.0426ZM28.1222 24H27.1222V25H28.1222V24ZM28.1222 5.39773H29.1222V4.39773H28.1222V5.39773ZM27.9858 5.39773V4.39773H27.6983L27.4547 4.55044L27.9858 5.39773ZM22.6562 8.73864H21.6562V10.5457L23.1874 9.58592L22.6562 8.73864ZM22.6562 4.375L22.1213 3.53011L21.6562 3.82456V4.375H22.6562ZM28.4176 0.727272V-0.272728H28.1277L27.8827 -0.117622L28.4176 0.727272ZM32.0426 0.727272V24H34.0426V0.727272H32.0426ZM33.0426 23H28.1222V25H33.0426V23ZM29.1222 24V5.39773H27.1222V24H29.1222ZM28.1222 4.39773H27.9858V6.39773H28.1222V4.39773ZM27.4547 4.55044L22.1251 7.89135L23.1874 9.58592L28.5169 6.24501L27.4547 4.55044ZM23.6562 8.73864V4.375H21.6562V8.73864H23.6562ZM23.1912 5.21989L28.9525 1.57217L27.8827 -0.117622L22.1213 3.53011L23.1912 5.21989ZM28.4176 1.72727H33.0426V-0.272728H28.4176V1.72727Z",fill:"#27B3A4",mask:"url(#path-1-outside-1_2001_1245)"}))),N1=t=>i.createElement("svg",{width:40,height:25,viewBox:"0 0 40 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1554",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:42,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:42,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM22.9176 24V20.4545L31.2017 12.7841C31.9063 12.1023 32.4972 11.4886 32.9744 10.9432C33.4593 10.3977 33.8267 9.86364 34.0767 9.34091C34.3267 8.81061 34.4517 8.23864 34.4517 7.625C34.4517 6.94318 34.2964 6.35606 33.9858 5.86364C33.6752 5.36364 33.2509 4.98106 32.7131 4.71591C32.1752 4.44318 31.5653 4.30682 30.8835 4.30682C30.1714 4.30682 29.5502 4.45076 29.0199 4.73864C28.4896 5.02651 28.0805 5.43939 27.7926 5.97727C27.5047 6.51515 27.3608 7.1553 27.3608 7.89773H22.6903C22.6903 6.375 23.035 5.05303 23.7244 3.93182C24.4138 2.81061 25.3797 1.94318 26.6222 1.32954C27.8646 0.715908 29.2964 0.40909 30.9176 0.40909C32.5843 0.40909 34.035 0.704545 35.2699 1.29545C36.5123 1.87879 37.4782 2.68939 38.1676 3.72727C38.857 4.76515 39.2017 5.95454 39.2017 7.29545C39.2017 8.17424 39.0275 9.04167 38.679 9.89773C38.3381 10.7538 37.7282 11.7045 36.8494 12.75C35.9706 13.7879 34.732 15.0341 33.1335 16.4886L29.7358 19.8182V19.9773H39.5085V24H22.9176Z"})),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM22.9176 24V20.4545L31.2017 12.7841C31.9063 12.1023 32.4972 11.4886 32.9744 10.9432C33.4593 10.3977 33.8267 9.86364 34.0767 9.34091C34.3267 8.81061 34.4517 8.23864 34.4517 7.625C34.4517 6.94318 34.2964 6.35606 33.9858 5.86364C33.6752 5.36364 33.2509 4.98106 32.7131 4.71591C32.1752 4.44318 31.5653 4.30682 30.8835 4.30682C30.1714 4.30682 29.5502 4.45076 29.0199 4.73864C28.4896 5.02651 28.0805 5.43939 27.7926 5.97727C27.5047 6.51515 27.3608 7.1553 27.3608 7.89773H22.6903C22.6903 6.375 23.035 5.05303 23.7244 3.93182C24.4138 2.81061 25.3797 1.94318 26.6222 1.32954C27.8646 0.715908 29.2964 0.40909 30.9176 0.40909C32.5843 0.40909 34.035 0.704545 35.2699 1.29545C36.5123 1.87879 37.4782 2.68939 38.1676 3.72727C38.857 4.76515 39.2017 5.95454 39.2017 7.29545C39.2017 8.17424 39.0275 9.04167 38.679 9.89773C38.3381 10.7538 37.7282 11.7045 36.8494 12.75C35.9706 13.7879 34.732 15.0341 33.1335 16.4886L29.7358 19.8182V19.9773H39.5085V24H22.9176Z",fill:"#001E3A"}),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM22.9176 24H21.9176V25H22.9176V24ZM22.9176 20.4545L22.2382 19.7208L21.9176 20.0176V20.4545H22.9176ZM31.2017 12.7841L31.8811 13.5179L31.8892 13.5104L31.8971 13.5027L31.2017 12.7841ZM32.9744 10.9432L32.227 10.2788L32.2219 10.2847L32.9744 10.9432ZM34.0767 9.34091L34.9789 9.77237L34.9812 9.76733L34.0767 9.34091ZM33.9858 5.86364L33.1363 6.39133L33.14 6.39714L33.9858 5.86364ZM32.7131 4.71591L32.2608 5.60787L32.2709 5.61285L32.7131 4.71591ZM27.7926 5.97727L28.6743 6.44915L28.6743 6.44915L27.7926 5.97727ZM27.3608 7.89773V8.89773H28.3608V7.89773H27.3608ZM22.6903 7.89773H21.6903V8.89773H22.6903V7.89773ZM23.7244 3.93182L24.5763 4.45559L24.5763 4.45559L23.7244 3.93182ZM26.6222 1.32954L26.1793 0.432941L26.1793 0.432941L26.6222 1.32954ZM35.2699 1.29545L34.8382 2.19752L34.8449 2.20065L35.2699 1.29545ZM38.1676 3.72727L37.3346 4.28057L37.3346 4.28057L38.1676 3.72727ZM38.679 9.89773L37.7528 9.52068L37.7499 9.52775L38.679 9.89773ZM36.8494 12.75L37.6126 13.3962L37.6149 13.3935L36.8494 12.75ZM33.1335 16.4886L32.4605 15.749L32.4468 15.7615L32.4336 15.7744L33.1335 16.4886ZM29.7358 19.8182L29.0359 19.1039L28.7358 19.398V19.8182H29.7358ZM29.7358 19.9773H28.7358V20.9773H29.7358V19.9773ZM39.5085 19.9773H40.5085V18.9773H39.5085V19.9773ZM39.5085 24V25H40.5085V24H39.5085ZM23.9176 24V20.4545H21.9176V24H23.9176ZM23.597 21.1883L31.8811 13.5179L30.5223 12.0503L22.2382 19.7208L23.597 21.1883ZM31.8971 13.5027C32.6151 12.8078 33.2265 12.1737 33.727 11.6017L32.2219 10.2847C31.7679 10.8035 31.1974 11.3967 30.5063 12.0655L31.8971 13.5027ZM33.7218 11.6075C34.2536 11.0093 34.6795 10.3982 34.9788 9.77236L33.1746 8.90945C32.9739 9.32912 32.665 9.78611 32.227 10.2788L33.7218 11.6075ZM34.9812 9.76733C35.297 9.09742 35.4517 8.37902 35.4517 7.625H33.4517C33.4517 8.09825 33.3564 8.52379 33.1722 8.91449L34.9812 9.76733ZM35.4517 7.625C35.4517 6.78721 35.2591 6.00795 34.8316 5.33013L33.14 6.39714C33.3337 6.70417 33.4517 7.09916 33.4517 7.625H35.4517ZM34.8352 5.33595C34.4241 4.67411 33.8574 4.1651 33.1552 3.81897L32.2709 5.61285C32.6445 5.79702 32.9263 6.05316 33.1364 6.39132L34.8352 5.33595ZM33.1653 3.82401C32.4699 3.47141 31.7018 3.30682 30.8835 3.30682V5.30682C31.4289 5.30682 31.8805 5.41495 32.2608 5.60781L33.1653 3.82401ZM30.8835 3.30682C30.0348 3.30682 29.2439 3.4792 28.5428 3.85978L29.497 5.61749C29.8565 5.42231 30.308 5.30682 30.8835 5.30682V3.30682ZM28.5428 3.85978C27.8388 4.24197 27.2899 4.79727 26.9109 5.5054L28.6743 6.44915C28.871 6.08152 29.1404 5.81106 29.497 5.61749L28.5428 3.85978ZM26.9109 5.50539C26.5302 6.2167 26.3608 7.02604 26.3608 7.89773H28.3608C28.3608 7.28456 28.4792 6.8136 28.6743 6.44915L26.9109 5.50539ZM27.3608 6.89773H22.6903V8.89773H27.3608V6.89773ZM23.6903 7.89773C23.6903 6.53039 23.9981 5.39587 24.5763 4.45559L22.8726 3.40804C22.0719 4.71019 21.6903 6.21961 21.6903 7.89773H23.6903ZM24.5763 4.45559C25.1618 3.50331 25.9819 2.76107 27.065 2.22615L26.1793 0.432941C24.7775 1.12529 23.6658 2.11791 22.8726 3.40804L24.5763 4.45559ZM27.065 2.22615C28.1481 1.69118 29.424 1.40909 30.9176 1.40909V-0.59091C29.1688 -0.59091 27.581 -0.259364 26.1793 0.432941L27.065 2.22615ZM30.9176 1.40909C32.4668 1.40909 33.7642 1.68356 34.8382 2.19749L35.7015 0.393414C34.3058 -0.274471 32.7018 -0.59091 30.9176 -0.59091V1.40909ZM34.8449 2.20065C35.939 2.71436 36.7566 3.41032 37.3346 4.28057L39.0006 3.17398C38.1999 1.96847 37.0856 1.04321 35.6949 0.39026L34.8449 2.20065ZM37.3346 4.28057C37.9067 5.14186 38.2017 6.13569 38.2017 7.29545H40.2017C40.2017 5.7734 39.8073 4.38844 39.0006 3.17398L37.3346 4.28057ZM38.2017 7.29545C38.2017 8.03835 38.0551 8.77806 37.7528 9.52069L39.6052 10.2748C39.9998 9.30527 40.2017 8.31013 40.2017 7.29545H38.2017ZM37.7499 9.52775C37.4627 10.249 36.9238 11.1074 36.0839 12.1065L37.6149 13.3935C38.5326 12.3017 39.2134 11.2586 39.608 10.2677L37.7499 9.52775ZM36.0863 12.1038C35.2468 13.0952 34.0432 14.3088 32.4605 15.749L33.8065 17.2283C35.4208 15.7594 36.6945 14.4805 37.6126 13.3962L36.0863 12.1038ZM32.4336 15.7744L29.0359 19.1039L30.4357 20.5324L33.8334 17.2029L32.4336 15.7744ZM28.7358 19.8182V19.9773H30.7358V19.8182H28.7358ZM29.7358 20.9773H39.5085V18.9773H29.7358V20.9773ZM38.5085 19.9773V24H40.5085V19.9773H38.5085ZM39.5085 23H22.9176V25H39.5085V23Z",fill:"#001E3A",mask:"url(#path-1-outside-1_2001_1554)"}))),P1=t=>i.createElement("svg",{width:40,height:25,viewBox:"0 0 40 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1554",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:42,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:42,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM22.9176 24V20.4545L31.2017 12.7841C31.9063 12.1023 32.4972 11.4886 32.9744 10.9432C33.4593 10.3977 33.8267 9.86364 34.0767 9.34091C34.3267 8.81061 34.4517 8.23864 34.4517 7.625C34.4517 6.94318 34.2964 6.35606 33.9858 5.86364C33.6752 5.36364 33.2509 4.98106 32.7131 4.71591C32.1752 4.44318 31.5653 4.30682 30.8835 4.30682C30.1714 4.30682 29.5502 4.45076 29.0199 4.73864C28.4896 5.02651 28.0805 5.43939 27.7926 5.97727C27.5047 6.51515 27.3608 7.1553 27.3608 7.89773H22.6903C22.6903 6.375 23.035 5.05303 23.7244 3.93182C24.4138 2.81061 25.3797 1.94318 26.6222 1.32954C27.8646 0.715908 29.2964 0.40909 30.9176 0.40909C32.5843 0.40909 34.035 0.704545 35.2699 1.29545C36.5123 1.87879 37.4782 2.68939 38.1676 3.72727C38.857 4.76515 39.2017 5.95454 39.2017 7.29545C39.2017 8.17424 39.0275 9.04167 38.679 9.89773C38.3381 10.7538 37.7282 11.7045 36.8494 12.75C35.9706 13.7879 34.732 15.0341 33.1335 16.4886L29.7358 19.8182V19.9773H39.5085V24H22.9176Z"})),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM22.9176 24H21.9176V25H22.9176V24ZM22.9176 20.4545L22.2382 19.7208L21.9176 20.0176V20.4545H22.9176ZM31.2017 12.7841L31.8811 13.5179L31.8892 13.5104L31.8971 13.5027L31.2017 12.7841ZM32.9744 10.9432L32.227 10.2788L32.2219 10.2847L32.9744 10.9432ZM34.0767 9.34091L34.9789 9.77237L34.9812 9.76733L34.0767 9.34091ZM33.9858 5.86364L33.1363 6.39133L33.14 6.39714L33.9858 5.86364ZM32.7131 4.71591L32.2608 5.60787L32.2709 5.61285L32.7131 4.71591ZM27.7926 5.97727L28.6743 6.44915L28.6743 6.44915L27.7926 5.97727ZM27.3608 7.89773V8.89773H28.3608V7.89773H27.3608ZM22.6903 7.89773H21.6903V8.89773H22.6903V7.89773ZM23.7244 3.93182L24.5763 4.45559L24.5763 4.45559L23.7244 3.93182ZM26.6222 1.32954L26.1793 0.432941L26.1793 0.432941L26.6222 1.32954ZM35.2699 1.29545L34.8382 2.19752L34.8449 2.20065L35.2699 1.29545ZM38.1676 3.72727L37.3346 4.28057L37.3346 4.28057L38.1676 3.72727ZM38.679 9.89773L37.7528 9.52068L37.7499 9.52775L38.679 9.89773ZM36.8494 12.75L37.6126 13.3962L37.6149 13.3935L36.8494 12.75ZM33.1335 16.4886L32.4605 15.749L32.4468 15.7615L32.4336 15.7744L33.1335 16.4886ZM29.7358 19.8182L29.0359 19.1039L28.7358 19.398V19.8182H29.7358ZM29.7358 19.9773H28.7358V20.9773H29.7358V19.9773ZM39.5085 19.9773H40.5085V18.9773H39.5085V19.9773ZM39.5085 24V25H40.5085V24H39.5085ZM23.9176 24V20.4545H21.9176V24H23.9176ZM23.597 21.1883L31.8811 13.5179L30.5223 12.0503L22.2382 19.7208L23.597 21.1883ZM31.8971 13.5027C32.6151 12.8078 33.2265 12.1737 33.727 11.6017L32.2219 10.2847C31.7679 10.8035 31.1974 11.3967 30.5063 12.0655L31.8971 13.5027ZM33.7218 11.6075C34.2536 11.0093 34.6795 10.3982 34.9788 9.77236L33.1746 8.90945C32.9739 9.32912 32.665 9.78611 32.227 10.2788L33.7218 11.6075ZM34.9812 9.76733C35.297 9.09742 35.4517 8.37902 35.4517 7.625H33.4517C33.4517 8.09825 33.3564 8.52379 33.1722 8.91449L34.9812 9.76733ZM35.4517 7.625C35.4517 6.78721 35.2591 6.00795 34.8316 5.33013L33.14 6.39714C33.3337 6.70417 33.4517 7.09916 33.4517 7.625H35.4517ZM34.8352 5.33595C34.4241 4.67411 33.8574 4.1651 33.1552 3.81897L32.2709 5.61285C32.6445 5.79702 32.9263 6.05316 33.1364 6.39132L34.8352 5.33595ZM33.1653 3.82401C32.4699 3.47141 31.7018 3.30682 30.8835 3.30682V5.30682C31.4289 5.30682 31.8805 5.41495 32.2608 5.60781L33.1653 3.82401ZM30.8835 3.30682C30.0348 3.30682 29.2439 3.4792 28.5428 3.85978L29.497 5.61749C29.8565 5.42231 30.308 5.30682 30.8835 5.30682V3.30682ZM28.5428 3.85978C27.8388 4.24197 27.2899 4.79727 26.9109 5.5054L28.6743 6.44915C28.871 6.08152 29.1404 5.81106 29.497 5.61749L28.5428 3.85978ZM26.9109 5.50539C26.5302 6.2167 26.3608 7.02604 26.3608 7.89773H28.3608C28.3608 7.28456 28.4792 6.8136 28.6743 6.44915L26.9109 5.50539ZM27.3608 6.89773H22.6903V8.89773H27.3608V6.89773ZM23.6903 7.89773C23.6903 6.53039 23.9981 5.39587 24.5763 4.45559L22.8726 3.40804C22.0719 4.71019 21.6903 6.21961 21.6903 7.89773H23.6903ZM24.5763 4.45559C25.1618 3.50331 25.9819 2.76107 27.065 2.22615L26.1793 0.432941C24.7775 1.12529 23.6658 2.11791 22.8726 3.40804L24.5763 4.45559ZM27.065 2.22615C28.1481 1.69118 29.424 1.40909 30.9176 1.40909V-0.59091C29.1688 -0.59091 27.581 -0.259364 26.1793 0.432941L27.065 2.22615ZM30.9176 1.40909C32.4668 1.40909 33.7642 1.68356 34.8382 2.19749L35.7015 0.393414C34.3058 -0.274471 32.7018 -0.59091 30.9176 -0.59091V1.40909ZM34.8449 2.20065C35.939 2.71436 36.7566 3.41032 37.3346 4.28057L39.0006 3.17398C38.1999 1.96847 37.0856 1.04321 35.6949 0.39026L34.8449 2.20065ZM37.3346 4.28057C37.9067 5.14186 38.2017 6.13569 38.2017 7.29545H40.2017C40.2017 5.7734 39.8073 4.38844 39.0006 3.17398L37.3346 4.28057ZM38.2017 7.29545C38.2017 8.03835 38.0551 8.77806 37.7528 9.52069L39.6052 10.2748C39.9998 9.30527 40.2017 8.31013 40.2017 7.29545H38.2017ZM37.7499 9.52775C37.4627 10.249 36.9238 11.1074 36.0839 12.1065L37.6149 13.3935C38.5326 12.3017 39.2134 11.2586 39.608 10.2677L37.7499 9.52775ZM36.0863 12.1038C35.2468 13.0952 34.0432 14.3088 32.4605 15.749L33.8065 17.2283C35.4208 15.7594 36.6945 14.4805 37.6126 13.3962L36.0863 12.1038ZM32.4336 15.7744L29.0359 19.1039L30.4357 20.5324L33.8334 17.2029L32.4336 15.7744ZM28.7358 19.8182V19.9773H30.7358V19.8182H28.7358ZM29.7358 20.9773H39.5085V18.9773H29.7358V20.9773ZM38.5085 19.9773V24H40.5085V19.9773H38.5085ZM39.5085 23H22.9176V25H39.5085V23Z",fill:"#27B3A4",mask:"url(#path-1-outside-1_2001_1554)"}))),R1=t=>i.createElement("svg",{width:41,height:25,viewBox:"0 0 41 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1489",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:43,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:43,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.5199 24.3182C29.8229 24.3182 28.3116 24.0265 26.9858 23.4432C25.6676 22.8523 24.6259 22.0417 23.8608 21.0114C23.1032 19.9735 22.7131 18.7765 22.6903 17.4205H27.6449C27.6752 17.9886 27.8608 18.4886 28.2017 18.9205C28.5502 19.3447 29.0123 19.6742 29.5881 19.9091C30.1638 20.1439 30.8116 20.2614 31.5312 20.2614C32.2812 20.2614 32.9441 20.1288 33.5199 19.8636C34.0956 19.5985 34.5464 19.2311 34.8722 18.7614C35.1979 18.2917 35.3608 17.75 35.3608 17.1364C35.3608 16.5152 35.1866 15.9659 34.8381 15.4886C34.4972 15.0038 34.0047 14.625 33.3608 14.3523C32.7244 14.0795 31.9669 13.9432 31.0881 13.9432H28.9176V10.3295H31.0881C31.8305 10.3295 32.4858 10.2008 33.054 9.94318C33.6297 9.68561 34.0767 9.32955 34.3949 8.875C34.7131 8.41288 34.8722 7.875 34.8722 7.26136C34.8722 6.67803 34.732 6.16667 34.4517 5.72727C34.179 5.2803 33.7926 4.93182 33.2926 4.68182C32.8002 4.43182 32.2244 4.30682 31.5653 4.30682C30.8987 4.30682 30.2888 4.42803 29.7358 4.67045C29.1828 4.9053 28.7396 5.24242 28.4062 5.68182C28.0729 6.12121 27.8949 6.63636 27.8722 7.22727H23.1562C23.179 5.88636 23.5616 4.70454 24.304 3.68182C25.0464 2.65909 26.0464 1.85985 27.304 1.28409C28.5691 0.700757 29.9972 0.40909 31.5881 0.40909C33.1941 0.40909 34.5994 0.700757 35.804 1.28409C37.0085 1.86742 37.9441 2.6553 38.6108 3.64773C39.285 4.63258 39.6184 5.73864 39.6108 6.96591C39.6184 8.26894 39.2131 9.35606 38.3949 10.2273C37.5843 11.0985 36.5275 11.6515 35.2244 11.8864V12.0682C36.9366 12.2879 38.2396 12.8826 39.1335 13.8523C40.035 14.8144 40.482 16.0189 40.4744 17.4659C40.482 18.7917 40.0994 19.9697 39.3267 21C38.5616 22.0303 37.5047 22.8409 36.1562 23.4318C34.8078 24.0227 33.2623 24.3182 31.5199 24.3182Z"})),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.5199 24.3182C29.8229 24.3182 28.3116 24.0265 26.9858 23.4432C25.6676 22.8523 24.6259 22.0417 23.8608 21.0114C23.1032 19.9735 22.7131 18.7765 22.6903 17.4205H27.6449C27.6752 17.9886 27.8608 18.4886 28.2017 18.9205C28.5502 19.3447 29.0123 19.6742 29.5881 19.9091C30.1638 20.1439 30.8116 20.2614 31.5312 20.2614C32.2812 20.2614 32.9441 20.1288 33.5199 19.8636C34.0956 19.5985 34.5464 19.2311 34.8722 18.7614C35.1979 18.2917 35.3608 17.75 35.3608 17.1364C35.3608 16.5152 35.1866 15.9659 34.8381 15.4886C34.4972 15.0038 34.0047 14.625 33.3608 14.3523C32.7244 14.0795 31.9669 13.9432 31.0881 13.9432H28.9176V10.3295H31.0881C31.8305 10.3295 32.4858 10.2008 33.054 9.94318C33.6297 9.68561 34.0767 9.32955 34.3949 8.875C34.7131 8.41288 34.8722 7.875 34.8722 7.26136C34.8722 6.67803 34.732 6.16667 34.4517 5.72727C34.179 5.2803 33.7926 4.93182 33.2926 4.68182C32.8002 4.43182 32.2244 4.30682 31.5653 4.30682C30.8987 4.30682 30.2888 4.42803 29.7358 4.67045C29.1828 4.9053 28.7396 5.24242 28.4062 5.68182C28.0729 6.12121 27.8949 6.63636 27.8722 7.22727H23.1562C23.179 5.88636 23.5616 4.70454 24.304 3.68182C25.0464 2.65909 26.0464 1.85985 27.304 1.28409C28.5691 0.700757 29.9972 0.40909 31.5881 0.40909C33.1941 0.40909 34.5994 0.700757 35.804 1.28409C37.0085 1.86742 37.9441 2.6553 38.6108 3.64773C39.285 4.63258 39.6184 5.73864 39.6108 6.96591C39.6184 8.26894 39.2131 9.35606 38.3949 10.2273C37.5843 11.0985 36.5275 11.6515 35.2244 11.8864V12.0682C36.9366 12.2879 38.2396 12.8826 39.1335 13.8523C40.035 14.8144 40.482 16.0189 40.4744 17.4659C40.482 18.7917 40.0994 19.9697 39.3267 21C38.5616 22.0303 37.5047 22.8409 36.1562 23.4318C34.8078 24.0227 33.2623 24.3182 31.5199 24.3182Z",fill:"#001E3A"}),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM26.9858 23.4432L26.5767 24.3557L26.5831 24.3585L26.9858 23.4432ZM23.8608 21.0114L23.0531 21.601L23.058 21.6076L23.8608 21.0114ZM22.6903 17.4205V16.4205H21.6734L21.6905 17.4372L22.6903 17.4205ZM27.6449 17.4205L28.6435 17.3672L28.593 16.4205H27.6449V17.4205ZM28.2017 18.9205L27.4168 19.5401L27.4228 19.5477L27.429 19.5552L28.2017 18.9205ZM29.5881 19.9091L29.2104 20.835L29.2104 20.835L29.5881 19.9091ZM33.5199 19.8636L33.1016 18.9553L33.1016 18.9553L33.5199 19.8636ZM34.8722 18.7614L35.6939 19.3313L35.6939 19.3313L34.8722 18.7614ZM34.8381 15.4886L34.02 16.0638L34.0252 16.0711L34.0304 16.0783L34.8381 15.4886ZM33.3608 14.3523L32.9669 15.2714L32.9708 15.2731L33.3608 14.3523ZM28.9176 13.9432H27.9176V14.9432H28.9176V13.9432ZM28.9176 10.3295V9.32955H27.9176V10.3295H28.9176ZM33.054 9.94318L32.6456 9.03035L32.6411 9.0324L33.054 9.94318ZM34.3949 8.875L35.2141 9.44848L35.2185 9.4421L34.3949 8.875ZM34.4517 5.72727L33.5981 6.24814L33.6033 6.25667L33.6086 6.26509L34.4517 5.72727ZM33.2926 4.68182L32.8399 5.5735L32.8454 5.57625L33.2926 4.68182ZM29.7358 4.67045L30.1267 5.59096L30.1373 5.58632L29.7358 4.67045ZM28.4062 5.68182L29.2029 6.2862L29.2029 6.2862L28.4062 5.68182ZM27.8722 7.22727V8.22727H28.8344L28.8714 7.2657L27.8722 7.22727ZM23.1562 7.22727L22.1564 7.21033L22.1392 8.22727H23.1562V7.22727ZM24.304 3.68182L25.1132 4.26928L25.1132 4.26928L24.304 3.68182ZM27.304 1.28409L27.7203 2.19333L27.7227 2.19221L27.304 1.28409ZM35.804 1.28409L36.2398 0.384074L36.2398 0.384074L35.804 1.28409ZM38.6108 3.64773L37.7807 4.20537L37.7856 4.21264L38.6108 3.64773ZM39.6108 6.96591L38.6107 6.95973L38.6108 6.97172L39.6108 6.96591ZM38.3949 10.2273L37.6659 9.54269L37.6628 9.54609L38.3949 10.2273ZM35.2244 11.8864L35.0471 10.9022L34.2244 11.0505V11.8864H35.2244ZM35.2244 12.0682H34.2244V12.9481L35.0972 13.06L35.2244 12.0682ZM39.1335 13.8523L38.3983 14.5301L38.4038 14.536L39.1335 13.8523ZM40.4744 17.4659L39.4744 17.4607L39.4744 17.4716L40.4744 17.4659ZM39.3267 21L38.5267 20.4L38.5239 20.4038L39.3267 21ZM36.1562 23.4318L35.7549 22.5159L35.7549 22.5159L36.1562 23.4318ZM31.5199 23.3182C29.9381 23.3182 28.5675 23.0466 27.3885 22.5279L26.5831 24.3585C28.0556 25.0064 29.7078 25.3182 31.5199 25.3182V23.3182ZM27.3949 22.5307C26.2129 22.0008 25.3144 21.2915 24.6636 20.4151L23.058 21.6076C23.9374 22.7918 25.1224 23.7037 26.5767 24.3557L27.3949 22.5307ZM24.6685 20.4218C24.0395 19.56 23.7097 18.5657 23.6902 17.4037L21.6905 17.4372C21.7165 18.9873 22.167 20.387 23.0531 21.6009L24.6685 20.4218ZM22.6903 18.4205H27.6449V16.4205H22.6903V18.4205ZM26.6463 17.4737C26.6872 18.2407 26.9433 18.9403 27.4168 19.5401L28.9866 18.3008C28.7783 18.037 28.6632 17.7366 28.6435 17.3672L26.6463 17.4737ZM27.429 19.5552C27.8962 20.124 28.5015 20.5459 29.2104 20.835L29.9658 18.9832C29.5232 18.8026 29.2042 18.5654 28.9744 18.2857L27.429 19.5552ZM29.2104 20.835C29.9234 21.1259 30.7022 21.2614 31.5312 21.2614V19.2614C30.9209 19.2614 30.4043 19.162 29.9658 18.9832L29.2104 20.835ZM31.5312 21.2614C32.3995 21.2614 33.2094 21.1076 33.9382 20.7719L33.1016 18.9553C32.6788 19.15 32.163 19.2614 31.5312 19.2614V21.2614ZM33.9382 20.7719C34.6581 20.4404 35.2555 19.9634 35.6939 19.3313L34.0504 18.1915C33.8373 18.4987 33.5332 18.7566 33.1016 18.9553L33.9382 20.7719ZM35.6939 19.3313C36.1444 18.6817 36.3608 17.9379 36.3608 17.1364H34.3608C34.3608 17.5621 34.2514 17.9017 34.0504 18.1915L35.6939 19.3313ZM36.3608 17.1364C36.3608 16.3147 36.1258 15.5565 35.6457 14.8989L34.0304 16.0783C34.2473 16.3753 34.3608 16.7156 34.3608 17.1364H36.3608ZM35.6561 14.9135C35.1896 14.25 34.5355 13.7638 33.7508 13.4315L32.9708 15.2731C33.4739 15.4862 33.8047 15.7576 34.02 16.0638L35.6561 14.9135ZM33.7547 13.4331C32.9652 13.0948 32.0672 12.9432 31.0881 12.9432V14.9432C31.8665 14.9432 32.4836 15.0643 32.9669 15.2714L33.7547 13.4331ZM31.0881 12.9432H28.9176V14.9432H31.0881V12.9432ZM29.9176 13.9432V10.3295H27.9176V13.9432H29.9176ZM28.9176 11.3295H31.0881V9.32955H28.9176V11.3295ZM31.0881 11.3295C31.9462 11.3295 32.7467 11.1804 33.4669 10.854L32.6411 9.0324C32.2249 9.22107 31.7148 9.32955 31.0881 9.32955V11.3295ZM33.4623 10.856C34.1802 10.5349 34.7786 10.0706 35.2141 9.44846L33.5757 8.30154C33.3748 8.58847 33.0793 8.83634 32.6456 9.03036L33.4623 10.856ZM35.2185 9.4421C35.6623 8.79752 35.8722 8.05767 35.8722 7.26136H33.8722C33.8722 7.69233 33.7638 8.02824 33.5712 8.3079L35.2185 9.4421ZM35.8722 7.26136C35.8722 6.51091 35.6895 5.80819 35.2948 5.18946L33.6086 6.26509C33.7745 6.52514 33.8722 6.84515 33.8722 7.26136H35.8722ZM35.3053 5.20641C34.9282 4.58831 34.3958 4.11539 33.7398 3.78739L32.8454 5.57625C33.1894 5.74825 33.4298 5.9723 33.5981 6.24814L35.3053 5.20641ZM33.7453 3.79015C33.0879 3.45642 32.3515 3.30682 31.5653 3.30682V5.30682C32.0973 5.30682 32.5124 5.40722 32.8399 5.57348L33.7453 3.79015ZM31.5653 3.30682C30.7749 3.30682 30.0265 3.45115 29.3343 3.75458L30.1373 5.58632C30.5511 5.40491 31.0224 5.30682 31.5653 5.30682V3.30682ZM29.3449 3.75001C28.6461 4.04675 28.0576 4.48685 27.6096 5.07743L29.2029 6.2862C29.4216 5.99799 29.7194 5.76385 30.1267 5.5909L29.3449 3.75001ZM27.6096 5.07743C27.1431 5.69225 26.9029 6.40857 26.8729 7.18884L28.8714 7.2657C28.8869 6.86415 29.0027 6.55017 29.2029 6.2862L27.6096 5.07743ZM27.8722 6.22727H23.1562V8.22727H27.8722V6.22727ZM24.1561 7.24422C24.1756 6.09526 24.499 5.11547 25.1132 4.26928L23.4947 3.09436C22.6241 4.29362 22.1824 5.67747 22.1564 7.21033L24.1561 7.24422ZM25.1132 4.26928C25.7452 3.39875 26.604 2.70438 27.7203 2.19333L26.8877 0.374852C25.4888 1.01532 24.3476 1.91943 23.4947 3.09436L25.1132 4.26928ZM27.7227 2.19221C28.8391 1.67744 30.1212 1.40909 31.5881 1.40909V-0.59091C29.8731 -0.59091 28.2991 -0.275931 26.8853 0.375972L27.7227 2.19221ZM31.5881 1.40909C33.073 1.40909 34.324 1.67844 35.3681 2.18411L36.2398 0.384074C34.8749 -0.276928 33.3153 -0.59091 31.5881 -0.59091V1.40909ZM35.3681 2.18411C36.4327 2.69967 37.2242 3.37694 37.7807 4.20535L39.4409 3.0901C38.664 1.93367 37.5843 1.03518 36.2398 0.384074L35.3681 2.18411ZM37.7856 4.21264C38.3414 5.02438 38.6172 5.93005 38.6108 6.95974L40.6108 6.97208C40.6196 5.54722 40.2287 4.24077 39.4359 3.08281L37.7856 4.21264ZM38.6108 6.97172C38.617 8.04368 38.292 8.87602 37.6659 9.5427L39.1238 10.9118C40.1341 9.8361 40.6197 8.4942 40.6108 6.96009L38.6108 6.97172ZM37.6628 9.54609C37.016 10.2412 36.1625 10.7012 35.0471 10.9022L35.4018 12.8705C36.8924 12.6018 38.1526 11.9558 39.127 10.9085L37.6628 9.54609ZM34.2244 11.8864V12.0682H36.2244V11.8864H34.2244ZM35.0972 13.06C36.649 13.2592 37.7074 13.7807 38.3983 14.5301L39.8688 13.1745C38.7718 11.9845 37.2241 11.3166 35.3517 11.0763L35.0972 13.06ZM38.4038 14.536C39.1127 15.2926 39.4808 16.2423 39.4744 17.4607L41.4744 17.4711C41.4832 15.7956 40.9574 14.3362 39.8632 13.1685L38.4038 14.536ZM39.4744 17.4716C39.4808 18.586 39.1643 19.5498 38.5267 20.4L40.1267 21.6C41.0345 20.3896 41.4832 18.9974 41.4744 17.4602L39.4744 17.4716ZM38.5239 20.4038C37.8769 21.2749 36.9678 21.9844 35.7549 22.5159L36.5576 24.3477C38.0417 23.6974 39.2462 22.7857 40.1295 21.5962L38.5239 20.4038ZM35.7549 22.5159C34.554 23.0421 33.1491 23.3182 31.5199 23.3182V25.3182C33.3755 25.3182 35.0615 25.0033 36.5576 24.3477L35.7549 22.5159Z",fill:"#001E3A",mask:"url(#path-1-outside-1_2001_1489)"}))),E1=t=>i.createElement("svg",{width:41,height:25,viewBox:"0 0 41 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1489",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:43,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:43,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.5199 24.3182C29.8229 24.3182 28.3116 24.0265 26.9858 23.4432C25.6676 22.8523 24.6259 22.0417 23.8608 21.0114C23.1032 19.9735 22.7131 18.7765 22.6903 17.4205H27.6449C27.6752 17.9886 27.8608 18.4886 28.2017 18.9205C28.5502 19.3447 29.0123 19.6742 29.5881 19.9091C30.1638 20.1439 30.8116 20.2614 31.5312 20.2614C32.2812 20.2614 32.9441 20.1288 33.5199 19.8636C34.0956 19.5985 34.5464 19.2311 34.8722 18.7614C35.1979 18.2917 35.3608 17.75 35.3608 17.1364C35.3608 16.5152 35.1866 15.9659 34.8381 15.4886C34.4972 15.0038 34.0047 14.625 33.3608 14.3523C32.7244 14.0795 31.9669 13.9432 31.0881 13.9432H28.9176V10.3295H31.0881C31.8305 10.3295 32.4858 10.2008 33.054 9.94318C33.6297 9.68561 34.0767 9.32955 34.3949 8.875C34.7131 8.41288 34.8722 7.875 34.8722 7.26136C34.8722 6.67803 34.732 6.16667 34.4517 5.72727C34.179 5.2803 33.7926 4.93182 33.2926 4.68182C32.8002 4.43182 32.2244 4.30682 31.5653 4.30682C30.8987 4.30682 30.2888 4.42803 29.7358 4.67045C29.1828 4.9053 28.7396 5.24242 28.4062 5.68182C28.0729 6.12121 27.8949 6.63636 27.8722 7.22727H23.1562C23.179 5.88636 23.5616 4.70454 24.304 3.68182C25.0464 2.65909 26.0464 1.85985 27.304 1.28409C28.5691 0.700757 29.9972 0.40909 31.5881 0.40909C33.1941 0.40909 34.5994 0.700757 35.804 1.28409C37.0085 1.86742 37.9441 2.6553 38.6108 3.64773C39.285 4.63258 39.6184 5.73864 39.6108 6.96591C39.6184 8.26894 39.2131 9.35606 38.3949 10.2273C37.5843 11.0985 36.5275 11.6515 35.2244 11.8864V12.0682C36.9366 12.2879 38.2396 12.8826 39.1335 13.8523C40.035 14.8144 40.482 16.0189 40.4744 17.4659C40.482 18.7917 40.0994 19.9697 39.3267 21C38.5616 22.0303 37.5047 22.8409 36.1562 23.4318C34.8078 24.0227 33.2623 24.3182 31.5199 24.3182Z"})),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM26.9858 23.4432L26.5767 24.3557L26.5831 24.3585L26.9858 23.4432ZM23.8608 21.0114L23.0531 21.601L23.058 21.6076L23.8608 21.0114ZM22.6903 17.4205V16.4205H21.6734L21.6905 17.4372L22.6903 17.4205ZM27.6449 17.4205L28.6435 17.3672L28.593 16.4205H27.6449V17.4205ZM28.2017 18.9205L27.4168 19.5401L27.4228 19.5477L27.429 19.5552L28.2017 18.9205ZM29.5881 19.9091L29.2104 20.835L29.2104 20.835L29.5881 19.9091ZM33.5199 19.8636L33.1016 18.9553L33.1016 18.9553L33.5199 19.8636ZM34.8722 18.7614L35.6939 19.3313L35.6939 19.3313L34.8722 18.7614ZM34.8381 15.4886L34.02 16.0638L34.0252 16.0711L34.0304 16.0783L34.8381 15.4886ZM33.3608 14.3523L32.9669 15.2714L32.9708 15.2731L33.3608 14.3523ZM28.9176 13.9432H27.9176V14.9432H28.9176V13.9432ZM28.9176 10.3295V9.32955H27.9176V10.3295H28.9176ZM33.054 9.94318L32.6456 9.03035L32.6411 9.0324L33.054 9.94318ZM34.3949 8.875L35.2141 9.44848L35.2185 9.4421L34.3949 8.875ZM34.4517 5.72727L33.5981 6.24814L33.6033 6.25667L33.6086 6.26509L34.4517 5.72727ZM33.2926 4.68182L32.8399 5.5735L32.8454 5.57625L33.2926 4.68182ZM29.7358 4.67045L30.1267 5.59096L30.1373 5.58632L29.7358 4.67045ZM28.4062 5.68182L29.2029 6.2862L29.2029 6.2862L28.4062 5.68182ZM27.8722 7.22727V8.22727H28.8344L28.8714 7.2657L27.8722 7.22727ZM23.1562 7.22727L22.1564 7.21033L22.1392 8.22727H23.1562V7.22727ZM24.304 3.68182L25.1132 4.26928L25.1132 4.26928L24.304 3.68182ZM27.304 1.28409L27.7203 2.19333L27.7227 2.19221L27.304 1.28409ZM35.804 1.28409L36.2398 0.384074L36.2398 0.384074L35.804 1.28409ZM38.6108 3.64773L37.7807 4.20537L37.7856 4.21264L38.6108 3.64773ZM39.6108 6.96591L38.6107 6.95973L38.6108 6.97172L39.6108 6.96591ZM38.3949 10.2273L37.6659 9.54269L37.6628 9.54609L38.3949 10.2273ZM35.2244 11.8864L35.0471 10.9022L34.2244 11.0505V11.8864H35.2244ZM35.2244 12.0682H34.2244V12.9481L35.0972 13.06L35.2244 12.0682ZM39.1335 13.8523L38.3983 14.5301L38.4038 14.536L39.1335 13.8523ZM40.4744 17.4659L39.4744 17.4607L39.4744 17.4716L40.4744 17.4659ZM39.3267 21L38.5267 20.4L38.5239 20.4038L39.3267 21ZM36.1562 23.4318L35.7549 22.5159L35.7549 22.5159L36.1562 23.4318ZM31.5199 23.3182C29.9381 23.3182 28.5675 23.0466 27.3885 22.5279L26.5831 24.3585C28.0556 25.0064 29.7078 25.3182 31.5199 25.3182V23.3182ZM27.3949 22.5307C26.2129 22.0008 25.3144 21.2915 24.6636 20.4151L23.058 21.6076C23.9374 22.7918 25.1224 23.7037 26.5767 24.3557L27.3949 22.5307ZM24.6685 20.4218C24.0395 19.56 23.7097 18.5657 23.6902 17.4037L21.6905 17.4372C21.7165 18.9873 22.167 20.387 23.0531 21.6009L24.6685 20.4218ZM22.6903 18.4205H27.6449V16.4205H22.6903V18.4205ZM26.6463 17.4737C26.6872 18.2407 26.9433 18.9403 27.4168 19.5401L28.9866 18.3008C28.7783 18.037 28.6632 17.7366 28.6435 17.3672L26.6463 17.4737ZM27.429 19.5552C27.8962 20.124 28.5015 20.5459 29.2104 20.835L29.9658 18.9832C29.5232 18.8026 29.2042 18.5654 28.9744 18.2857L27.429 19.5552ZM29.2104 20.835C29.9234 21.1259 30.7022 21.2614 31.5312 21.2614V19.2614C30.9209 19.2614 30.4043 19.162 29.9658 18.9832L29.2104 20.835ZM31.5312 21.2614C32.3995 21.2614 33.2094 21.1076 33.9382 20.7719L33.1016 18.9553C32.6788 19.15 32.163 19.2614 31.5312 19.2614V21.2614ZM33.9382 20.7719C34.6581 20.4404 35.2555 19.9634 35.6939 19.3313L34.0504 18.1915C33.8373 18.4987 33.5332 18.7566 33.1016 18.9553L33.9382 20.7719ZM35.6939 19.3313C36.1444 18.6817 36.3608 17.9379 36.3608 17.1364H34.3608C34.3608 17.5621 34.2514 17.9017 34.0504 18.1915L35.6939 19.3313ZM36.3608 17.1364C36.3608 16.3147 36.1258 15.5565 35.6457 14.8989L34.0304 16.0783C34.2473 16.3753 34.3608 16.7156 34.3608 17.1364H36.3608ZM35.6561 14.9135C35.1896 14.25 34.5355 13.7638 33.7508 13.4315L32.9708 15.2731C33.4739 15.4862 33.8047 15.7576 34.02 16.0638L35.6561 14.9135ZM33.7547 13.4331C32.9652 13.0948 32.0672 12.9432 31.0881 12.9432V14.9432C31.8665 14.9432 32.4836 15.0643 32.9669 15.2714L33.7547 13.4331ZM31.0881 12.9432H28.9176V14.9432H31.0881V12.9432ZM29.9176 13.9432V10.3295H27.9176V13.9432H29.9176ZM28.9176 11.3295H31.0881V9.32955H28.9176V11.3295ZM31.0881 11.3295C31.9462 11.3295 32.7467 11.1804 33.4669 10.854L32.6411 9.0324C32.2249 9.22107 31.7148 9.32955 31.0881 9.32955V11.3295ZM33.4623 10.856C34.1802 10.5349 34.7786 10.0706 35.2141 9.44846L33.5757 8.30154C33.3748 8.58847 33.0793 8.83634 32.6456 9.03036L33.4623 10.856ZM35.2185 9.4421C35.6623 8.79752 35.8722 8.05767 35.8722 7.26136H33.8722C33.8722 7.69233 33.7638 8.02824 33.5712 8.3079L35.2185 9.4421ZM35.8722 7.26136C35.8722 6.51091 35.6895 5.80819 35.2948 5.18946L33.6086 6.26509C33.7745 6.52514 33.8722 6.84515 33.8722 7.26136H35.8722ZM35.3053 5.20641C34.9282 4.58831 34.3958 4.11539 33.7398 3.78739L32.8454 5.57625C33.1894 5.74825 33.4298 5.9723 33.5981 6.24814L35.3053 5.20641ZM33.7453 3.79015C33.0879 3.45642 32.3515 3.30682 31.5653 3.30682V5.30682C32.0973 5.30682 32.5124 5.40722 32.8399 5.57348L33.7453 3.79015ZM31.5653 3.30682C30.7749 3.30682 30.0265 3.45115 29.3343 3.75458L30.1373 5.58632C30.5511 5.40491 31.0224 5.30682 31.5653 5.30682V3.30682ZM29.3449 3.75001C28.6461 4.04675 28.0576 4.48685 27.6096 5.07743L29.2029 6.2862C29.4216 5.99799 29.7194 5.76385 30.1267 5.5909L29.3449 3.75001ZM27.6096 5.07743C27.1431 5.69225 26.9029 6.40857 26.8729 7.18884L28.8714 7.2657C28.8869 6.86415 29.0027 6.55017 29.2029 6.2862L27.6096 5.07743ZM27.8722 6.22727H23.1562V8.22727H27.8722V6.22727ZM24.1561 7.24422C24.1756 6.09526 24.499 5.11547 25.1132 4.26928L23.4947 3.09436C22.6241 4.29362 22.1824 5.67747 22.1564 7.21033L24.1561 7.24422ZM25.1132 4.26928C25.7452 3.39875 26.604 2.70438 27.7203 2.19333L26.8877 0.374852C25.4888 1.01532 24.3476 1.91943 23.4947 3.09436L25.1132 4.26928ZM27.7227 2.19221C28.8391 1.67744 30.1212 1.40909 31.5881 1.40909V-0.59091C29.8731 -0.59091 28.2991 -0.275931 26.8853 0.375972L27.7227 2.19221ZM31.5881 1.40909C33.073 1.40909 34.324 1.67844 35.3681 2.18411L36.2398 0.384074C34.8749 -0.276928 33.3153 -0.59091 31.5881 -0.59091V1.40909ZM35.3681 2.18411C36.4327 2.69967 37.2242 3.37694 37.7807 4.20535L39.4409 3.0901C38.664 1.93367 37.5843 1.03518 36.2398 0.384074L35.3681 2.18411ZM37.7856 4.21264C38.3414 5.02438 38.6172 5.93005 38.6108 6.95974L40.6108 6.97208C40.6196 5.54722 40.2287 4.24077 39.4359 3.08281L37.7856 4.21264ZM38.6108 6.97172C38.617 8.04368 38.292 8.87602 37.6659 9.5427L39.1238 10.9118C40.1341 9.8361 40.6197 8.4942 40.6108 6.96009L38.6108 6.97172ZM37.6628 9.54609C37.016 10.2412 36.1625 10.7012 35.0471 10.9022L35.4018 12.8705C36.8924 12.6018 38.1526 11.9558 39.127 10.9085L37.6628 9.54609ZM34.2244 11.8864V12.0682H36.2244V11.8864H34.2244ZM35.0972 13.06C36.649 13.2592 37.7074 13.7807 38.3983 14.5301L39.8688 13.1745C38.7718 11.9845 37.2241 11.3166 35.3517 11.0763L35.0972 13.06ZM38.4038 14.536C39.1127 15.2926 39.4808 16.2423 39.4744 17.4607L41.4744 17.4711C41.4832 15.7956 40.9574 14.3362 39.8632 13.1685L38.4038 14.536ZM39.4744 17.4716C39.4808 18.586 39.1643 19.5498 38.5267 20.4L40.1267 21.6C41.0345 20.3896 41.4832 18.9974 41.4744 17.4602L39.4744 17.4716ZM38.5239 20.4038C37.8769 21.2749 36.9678 21.9844 35.7549 22.5159L36.5576 24.3477C38.0417 23.6974 39.2462 22.7857 40.1295 21.5962L38.5239 20.4038ZM35.7549 22.5159C34.554 23.0421 33.1491 23.3182 31.5199 23.3182V25.3182C33.3755 25.3182 35.0615 25.0033 36.5576 24.3477L35.7549 22.5159Z",fill:"#27B3A4",mask:"url(#path-1-outside-1_2001_1489)"}))),I1=t=>i.createElement("svg",{width:42,height:25,viewBox:"0 0 42 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_538",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:44,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:44,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM22.5653 19.9091V16.0341L32.2812 0.727272H35.6222V6.09091H33.6449L27.5199 15.7841V15.9659H41.3267V19.9091H22.5653ZM33.7358 24V18.7273L33.8267 17.0114V0.727272H38.4403V24H33.7358Z"})),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM22.5653 19.9091V16.0341L32.2812 0.727272H35.6222V6.09091H33.6449L27.5199 15.7841V15.9659H41.3267V19.9091H22.5653ZM33.7358 24V18.7273L33.8267 17.0114V0.727272H38.4403V24H33.7358Z",fill:"#001E3A"}),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM22.5653 19.9091H21.5653V20.9091H22.5653V19.9091ZM22.5653 16.0341L21.7211 15.4982L21.5653 15.7435V16.0341H22.5653ZM32.2812 0.727272V-0.272728H31.7316L31.437 0.19137L32.2812 0.727272ZM35.6222 0.727272H36.6222V-0.272728H35.6222V0.727272ZM35.6222 6.09091V7.09091H36.6222V6.09091H35.6222ZM33.6449 6.09091V5.09091H33.0939L32.7995 5.55673L33.6449 6.09091ZM27.5199 15.7841L26.6745 15.2499L26.5199 15.4946V15.7841H27.5199ZM27.5199 15.9659H26.5199V16.9659H27.5199V15.9659ZM41.3267 15.9659H42.3267V14.9659H41.3267V15.9659ZM41.3267 19.9091V20.9091H42.3267V19.9091H41.3267ZM33.7358 24H32.7358V25H33.7358V24ZM33.7358 18.7273L32.7372 18.6744L32.7358 18.7008V18.7273H33.7358ZM33.8267 17.0114L34.8253 17.0643L34.8267 17.0378V17.0114H33.8267ZM33.8267 0.727272V-0.272728H32.8267V0.727272H33.8267ZM38.4403 0.727272H39.4403V-0.272728H38.4403V0.727272ZM38.4403 24V25H39.4403V24H38.4403ZM23.5653 19.9091V16.0341H21.5653V19.9091H23.5653ZM23.4096 16.57L33.1255 1.26317L31.437 0.19137L21.7211 15.4982L23.4096 16.57ZM32.2812 1.72727H35.6222V-0.272728H32.2812V1.72727ZM34.6222 0.727272V6.09091H36.6222V0.727272H34.6222ZM35.6222 5.09091H33.6449V7.09091H35.6222V5.09091ZM32.7995 5.55673L26.6745 15.2499L28.3653 16.3183L34.4903 6.62509L32.7995 5.55673ZM26.5199 15.7841V15.9659H28.5199V15.7841H26.5199ZM27.5199 16.9659H41.3267V14.9659H27.5199V16.9659ZM40.3267 15.9659V19.9091H42.3267V15.9659H40.3267ZM41.3267 18.9091H22.5653V20.9091H41.3267V18.9091ZM34.7358 24V18.7273H32.7358V24H34.7358ZM34.7344 18.7802L34.8253 17.0643L32.8281 16.9585L32.7372 18.6744L34.7344 18.7802ZM34.8267 17.0114V0.727272H32.8267V17.0114H34.8267ZM33.8267 1.72727H38.4403V-0.272728H33.8267V1.72727ZM37.4403 0.727272V24H39.4403V0.727272H37.4403ZM38.4403 23H33.7358V25H38.4403V23Z",fill:"#001E3A",mask:"url(#path-1-outside-1_2001_538)"}))),S1=t=>i.createElement("svg",{width:42,height:25,viewBox:"0 0 42 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_538",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:44,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:44,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM22.5653 19.9091V16.0341L32.2812 0.727272H35.6222V6.09091H33.6449L27.5199 15.7841V15.9659H41.3267V19.9091H22.5653ZM33.7358 24V18.7273L33.8267 17.0114V0.727272H38.4403V24H33.7358Z"})),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM22.5653 19.9091H21.5653V20.9091H22.5653V19.9091ZM22.5653 16.0341L21.7211 15.4982L21.5653 15.7435V16.0341H22.5653ZM32.2812 0.727272V-0.272728H31.7316L31.437 0.19137L32.2812 0.727272ZM35.6222 0.727272H36.6222V-0.272728H35.6222V0.727272ZM35.6222 6.09091V7.09091H36.6222V6.09091H35.6222ZM33.6449 6.09091V5.09091H33.0939L32.7995 5.55673L33.6449 6.09091ZM27.5199 15.7841L26.6745 15.2499L26.5199 15.4946V15.7841H27.5199ZM27.5199 15.9659H26.5199V16.9659H27.5199V15.9659ZM41.3267 15.9659H42.3267V14.9659H41.3267V15.9659ZM41.3267 19.9091V20.9091H42.3267V19.9091H41.3267ZM33.7358 24H32.7358V25H33.7358V24ZM33.7358 18.7273L32.7372 18.6744L32.7358 18.7008V18.7273H33.7358ZM33.8267 17.0114L34.8253 17.0643L34.8267 17.0378V17.0114H33.8267ZM33.8267 0.727272V-0.272728H32.8267V0.727272H33.8267ZM38.4403 0.727272H39.4403V-0.272728H38.4403V0.727272ZM38.4403 24V25H39.4403V24H38.4403ZM23.5653 19.9091V16.0341H21.5653V19.9091H23.5653ZM23.4096 16.57L33.1255 1.26317L31.437 0.19137L21.7211 15.4982L23.4096 16.57ZM32.2812 1.72727H35.6222V-0.272728H32.2812V1.72727ZM34.6222 0.727272V6.09091H36.6222V0.727272H34.6222ZM35.6222 5.09091H33.6449V7.09091H35.6222V5.09091ZM32.7995 5.55673L26.6745 15.2499L28.3653 16.3183L34.4903 6.62509L32.7995 5.55673ZM26.5199 15.7841V15.9659H28.5199V15.7841H26.5199ZM27.5199 16.9659H41.3267V14.9659H27.5199V16.9659ZM40.3267 15.9659V19.9091H42.3267V15.9659H40.3267ZM41.3267 18.9091H22.5653V20.9091H41.3267V18.9091ZM34.7358 24V18.7273H32.7358V24H34.7358ZM34.7344 18.7802L34.8253 17.0643L32.8281 16.9585L32.7372 18.6744L34.7344 18.7802ZM34.8267 17.0114V0.727272H32.8267V17.0114H34.8267ZM33.8267 1.72727H38.4403V-0.272728H33.8267V1.72727ZM37.4403 0.727272V24H39.4403V0.727272H37.4403ZM38.4403 23H33.7358V25H38.4403V23Z",fill:"#27B3A4",mask:"url(#path-1-outside-1_2001_538)"}))),B1=t=>i.createElement("svg",{width:41,height:25,viewBox:"0 0 41 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1159",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:43,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:43,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.4176 24.3182C29.8116 24.3182 28.3797 24.0227 27.1222 23.4318C25.8722 22.8409 24.8797 22.0265 24.1449 20.9886C23.41 19.9508 23.0275 18.7614 22.9972 17.4205H27.7699C27.8229 18.322 28.2017 19.053 28.9062 19.6136C29.6108 20.1742 30.4479 20.4545 31.4176 20.4545C32.1903 20.4545 32.8722 20.2841 33.4631 19.9432C34.0616 19.5947 34.5275 19.1136 34.8608 18.5C35.2017 17.8788 35.3722 17.1667 35.3722 16.3636C35.3722 15.5455 35.1979 14.8258 34.8494 14.2045C34.5085 13.5833 34.035 13.0985 33.429 12.75C32.8229 12.4015 32.1297 12.2235 31.3494 12.2159C30.6676 12.2159 30.0047 12.3561 29.3608 12.6364C28.7244 12.9167 28.2282 13.2992 27.8722 13.7841L23.4972 13L24.5994 0.727272H38.8267V4.75H28.6562L28.054 10.5795H28.1903C28.5994 10.0038 29.2169 9.52652 30.0426 9.14773C30.8684 8.76894 31.7926 8.57955 32.8153 8.57955C34.2169 8.57955 35.4669 8.90909 36.5653 9.56818C37.6638 10.2273 38.5312 11.1326 39.1676 12.2841C39.804 13.428 40.1184 14.7462 40.1108 16.2386C40.1184 17.8068 39.7547 19.2008 39.0199 20.4205C38.2926 21.6326 37.2737 22.5871 35.9631 23.2841C34.66 23.9735 33.1449 24.3182 31.4176 24.3182Z"})),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.4176 24.3182C29.8116 24.3182 28.3797 24.0227 27.1222 23.4318C25.8722 22.8409 24.8797 22.0265 24.1449 20.9886C23.41 19.9508 23.0275 18.7614 22.9972 17.4205H27.7699C27.8229 18.322 28.2017 19.053 28.9062 19.6136C29.6108 20.1742 30.4479 20.4545 31.4176 20.4545C32.1903 20.4545 32.8722 20.2841 33.4631 19.9432C34.0616 19.5947 34.5275 19.1136 34.8608 18.5C35.2017 17.8788 35.3722 17.1667 35.3722 16.3636C35.3722 15.5455 35.1979 14.8258 34.8494 14.2045C34.5085 13.5833 34.035 13.0985 33.429 12.75C32.8229 12.4015 32.1297 12.2235 31.3494 12.2159C30.6676 12.2159 30.0047 12.3561 29.3608 12.6364C28.7244 12.9167 28.2282 13.2992 27.8722 13.7841L23.4972 13L24.5994 0.727272H38.8267V4.75H28.6562L28.054 10.5795H28.1903C28.5994 10.0038 29.2169 9.52652 30.0426 9.14773C30.8684 8.76894 31.7926 8.57955 32.8153 8.57955C34.2169 8.57955 35.4669 8.90909 36.5653 9.56818C37.6638 10.2273 38.5312 11.1326 39.1676 12.2841C39.804 13.428 40.1184 14.7462 40.1108 16.2386C40.1184 17.8068 39.7547 19.2008 39.0199 20.4205C38.2926 21.6326 37.2737 22.5871 35.9631 23.2841C34.66 23.9735 33.1449 24.3182 31.4176 24.3182Z",fill:"#001E3A"}),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM27.1222 23.4318L26.6948 24.3359L26.6969 24.3369L27.1222 23.4318ZM24.1449 20.9886L24.961 20.4108L24.961 20.4108L24.1449 20.9886ZM22.9972 17.4205V16.4205H21.9743L21.9974 17.443L22.9972 17.4205ZM27.7699 17.4205L28.7682 17.3617L28.7128 16.4205H27.7699V17.4205ZM28.9062 19.6136L29.5289 18.8311L29.5289 18.8311L28.9062 19.6136ZM33.4631 19.9432L33.9628 20.8094L33.9663 20.8074L33.4631 19.9432ZM34.8608 18.5L33.9841 18.0189L33.9821 18.0227L34.8608 18.5ZM34.8494 14.2045L33.9727 14.6857L33.9773 14.6938L34.8494 14.2045ZM33.429 12.75L32.9305 13.6169L32.9305 13.6169L33.429 12.75ZM31.3494 12.2159L31.3591 11.2159H31.3494V12.2159ZM29.3608 12.6364L28.9617 11.7195L28.9577 11.7212L29.3608 12.6364ZM27.8722 13.7841L27.6957 14.7684L28.3092 14.8784L28.6782 14.376L27.8722 13.7841ZM23.4972 13L22.5012 12.9105L22.4192 13.8227L23.3207 13.9843L23.4972 13ZM24.5994 0.727272V-0.272728H23.6852L23.6034 0.637817L24.5994 0.727272ZM38.8267 0.727272H39.8267V-0.272728H38.8267V0.727272ZM38.8267 4.75V5.75H39.8267V4.75H38.8267ZM28.6562 4.75V3.75H27.7542L27.6615 4.64723L28.6562 4.75ZM28.054 10.5795L27.0593 10.4768L26.9453 11.5795H28.054V10.5795ZM28.1903 10.5795V11.5795H28.7065L29.0055 11.1588L28.1903 10.5795ZM30.0426 9.14773L30.4596 10.0567L30.4596 10.0567L30.0426 9.14773ZM36.5653 9.56818L37.0798 8.71069L37.0798 8.71069L36.5653 9.56818ZM39.1676 12.2841L38.2924 12.7678L38.2937 12.7702L39.1676 12.2841ZM40.1108 16.2386L39.1108 16.2336L39.1108 16.2435L40.1108 16.2386ZM39.0199 20.4205L38.1633 19.9044L38.1624 19.906L39.0199 20.4205ZM35.9631 23.2841L36.4307 24.168L36.4326 24.167L35.9631 23.2841ZM31.4176 23.3182C29.9357 23.3182 28.6527 23.0461 27.5474 22.5268L26.6969 24.3369C28.1068 24.9993 29.6874 25.3182 31.4176 25.3182V23.3182ZM27.5495 22.5277C26.4411 22.0037 25.5879 21.2962 24.961 20.4108L23.3287 21.5665C24.1715 22.7568 25.3032 23.6781 26.6948 24.3359L27.5495 22.5277ZM24.961 20.4108C24.3478 19.5447 24.023 18.551 23.9969 17.3979L21.9974 17.443C22.032 18.9717 22.4723 20.3568 23.3287 21.5665L24.961 20.4108ZM22.9972 18.4205H27.7699V16.4205H22.9972V18.4205ZM26.7716 17.4792C26.8413 18.6634 27.3559 19.658 28.2836 20.3961L29.5289 18.8311C29.0475 18.4481 28.8046 17.9806 28.7682 17.3617L26.7716 17.4792ZM28.2836 20.3961C29.1792 21.1087 30.2404 21.4545 31.4176 21.4545V19.4545C30.6555 19.4545 30.0424 19.2397 29.5289 18.8311L28.2836 20.3961ZM31.4176 21.4545C32.3421 21.4545 33.2006 21.2491 33.9628 20.8094L32.9633 19.077C32.5437 19.3191 32.0386 19.4545 31.4176 19.4545V21.4545ZM33.9663 20.8074C34.7244 20.3659 35.3196 19.7504 35.7395 18.9773L33.9821 18.0227C33.7354 18.4768 33.3987 18.8235 32.9599 19.079L33.9663 20.8074ZM35.7375 18.9811C36.1696 18.1937 36.3722 17.3121 36.3722 16.3636H34.3722C34.3722 17.0212 34.2339 17.5638 33.9841 18.0189L35.7375 18.9811ZM36.3722 16.3636C36.3722 15.3999 36.1657 14.5069 35.7216 13.7153L33.9773 14.6938C34.2302 15.1446 34.3722 15.691 34.3722 16.3636H36.3722ZM35.7261 13.7234C35.2982 12.9437 34.6948 12.3243 33.9274 11.8831L32.9305 13.6169C33.3752 13.8726 33.7189 14.223 33.9728 14.6856L35.7261 13.7234ZM33.9274 11.8831C33.1559 11.4394 32.2907 11.225 31.3591 11.216L31.3397 13.2159C31.9687 13.222 32.49 13.3636 32.9305 13.6169L33.9274 11.8831ZM31.3494 11.2159C30.5261 11.2159 29.7277 11.386 28.9617 11.7195L29.7599 13.5533C30.2818 13.3261 30.8091 13.2159 31.3494 13.2159V11.2159ZM28.9577 11.7212C28.1863 12.061 27.5411 12.5454 27.0662 13.1922L28.6782 14.376C28.9153 14.0531 29.2625 13.7724 29.7639 13.5515L28.9577 11.7212ZM28.0486 12.7998L23.6736 12.0157L23.3207 13.9843L27.6957 14.7684L28.0486 12.7998ZM24.4932 13.0895L25.5954 0.816727L23.6034 0.637817L22.5012 12.9105L24.4932 13.0895ZM24.5994 1.72727H38.8267V-0.272728H24.5994V1.72727ZM37.8267 0.727272V4.75H39.8267V0.727272H37.8267ZM38.8267 3.75H28.6562V5.75H38.8267V3.75ZM27.6615 4.64723L27.0593 10.4768L29.0487 10.6823L29.651 4.85277L27.6615 4.64723ZM28.054 11.5795H28.1903V9.57955H28.054V11.5795ZM29.0055 11.1588C29.288 10.7612 29.7485 10.3828 30.4596 10.0567L29.6257 8.23879C28.6852 8.6702 27.9109 9.24634 27.3752 10.0003L29.0055 11.1588ZM30.4596 10.0567C31.139 9.74501 31.9184 9.57955 32.8153 9.57955V7.57955C31.6669 7.57955 30.5978 7.79287 29.6257 8.23879L30.4596 10.0567ZM32.8153 9.57955C34.0532 9.57955 35.1222 9.86849 36.0508 10.4257L37.0798 8.71069C35.8115 7.94969 34.3805 7.57955 32.8153 7.57955V9.57955ZM36.0508 10.4257C36.994 10.9916 37.7388 11.7661 38.2924 12.7678L40.0429 11.8004C39.3237 10.499 38.3336 9.46296 37.0798 8.71069L36.0508 10.4257ZM38.2937 12.7702C38.8354 13.744 39.1176 14.8886 39.1108 16.2336L41.1108 16.2437C41.1191 14.6039 40.7725 13.1121 40.0415 11.798L38.2937 12.7702ZM39.1108 16.2435C39.1176 17.6473 38.7941 18.8575 38.1633 19.9044L39.8764 20.9365C40.7154 19.544 41.1192 17.9663 41.1108 16.2338L39.1108 16.2435ZM38.1624 19.906C37.5334 20.9544 36.6522 21.785 35.4935 22.4012L36.4326 24.167C37.8952 23.3892 39.0519 22.3108 39.8774 20.9349L38.1624 19.906ZM35.4954 22.4002C34.3594 23.0012 33.0099 23.3182 31.4176 23.3182V25.3182C33.2799 25.3182 34.9607 24.9457 36.4307 24.168L35.4954 22.4002Z",fill:"#001E3A",mask:"url(#path-1-outside-1_2001_1159)"}))),T1=t=>i.createElement("svg",{width:41,height:25,viewBox:"0 0 41 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1159",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:43,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:43,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.4176 24.3182C29.8116 24.3182 28.3797 24.0227 27.1222 23.4318C25.8722 22.8409 24.8797 22.0265 24.1449 20.9886C23.41 19.9508 23.0275 18.7614 22.9972 17.4205H27.7699C27.8229 18.322 28.2017 19.053 28.9062 19.6136C29.6108 20.1742 30.4479 20.4545 31.4176 20.4545C32.1903 20.4545 32.8722 20.2841 33.4631 19.9432C34.0616 19.5947 34.5275 19.1136 34.8608 18.5C35.2017 17.8788 35.3722 17.1667 35.3722 16.3636C35.3722 15.5455 35.1979 14.8258 34.8494 14.2045C34.5085 13.5833 34.035 13.0985 33.429 12.75C32.8229 12.4015 32.1297 12.2235 31.3494 12.2159C30.6676 12.2159 30.0047 12.3561 29.3608 12.6364C28.7244 12.9167 28.2282 13.2992 27.8722 13.7841L23.4972 13L24.5994 0.727272H38.8267V4.75H28.6562L28.054 10.5795H28.1903C28.5994 10.0038 29.2169 9.52652 30.0426 9.14773C30.8684 8.76894 31.7926 8.57955 32.8153 8.57955C34.2169 8.57955 35.4669 8.90909 36.5653 9.56818C37.6638 10.2273 38.5312 11.1326 39.1676 12.2841C39.804 13.428 40.1184 14.7462 40.1108 16.2386C40.1184 17.8068 39.7547 19.2008 39.0199 20.4205C38.2926 21.6326 37.2737 22.5871 35.9631 23.2841C34.66 23.9735 33.1449 24.3182 31.4176 24.3182Z"})),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM27.1222 23.4318L26.6948 24.3359L26.6969 24.3369L27.1222 23.4318ZM24.1449 20.9886L24.961 20.4108L24.961 20.4108L24.1449 20.9886ZM22.9972 17.4205V16.4205H21.9743L21.9974 17.443L22.9972 17.4205ZM27.7699 17.4205L28.7682 17.3617L28.7128 16.4205H27.7699V17.4205ZM28.9062 19.6136L29.5289 18.8311L29.5289 18.8311L28.9062 19.6136ZM33.4631 19.9432L33.9628 20.8094L33.9663 20.8074L33.4631 19.9432ZM34.8608 18.5L33.9841 18.0189L33.9821 18.0227L34.8608 18.5ZM34.8494 14.2045L33.9727 14.6857L33.9773 14.6938L34.8494 14.2045ZM33.429 12.75L32.9305 13.6169L32.9305 13.6169L33.429 12.75ZM31.3494 12.2159L31.3591 11.2159H31.3494V12.2159ZM29.3608 12.6364L28.9617 11.7195L28.9577 11.7212L29.3608 12.6364ZM27.8722 13.7841L27.6957 14.7684L28.3092 14.8784L28.6782 14.376L27.8722 13.7841ZM23.4972 13L22.5012 12.9105L22.4192 13.8227L23.3207 13.9843L23.4972 13ZM24.5994 0.727272V-0.272728H23.6852L23.6034 0.637817L24.5994 0.727272ZM38.8267 0.727272H39.8267V-0.272728H38.8267V0.727272ZM38.8267 4.75V5.75H39.8267V4.75H38.8267ZM28.6562 4.75V3.75H27.7542L27.6615 4.64723L28.6562 4.75ZM28.054 10.5795L27.0593 10.4768L26.9453 11.5795H28.054V10.5795ZM28.1903 10.5795V11.5795H28.7065L29.0055 11.1588L28.1903 10.5795ZM30.0426 9.14773L30.4596 10.0567L30.4596 10.0567L30.0426 9.14773ZM36.5653 9.56818L37.0798 8.71069L37.0798 8.71069L36.5653 9.56818ZM39.1676 12.2841L38.2924 12.7678L38.2937 12.7702L39.1676 12.2841ZM40.1108 16.2386L39.1108 16.2336L39.1108 16.2435L40.1108 16.2386ZM39.0199 20.4205L38.1633 19.9044L38.1624 19.906L39.0199 20.4205ZM35.9631 23.2841L36.4307 24.168L36.4326 24.167L35.9631 23.2841ZM31.4176 23.3182C29.9357 23.3182 28.6527 23.0461 27.5474 22.5268L26.6969 24.3369C28.1068 24.9993 29.6874 25.3182 31.4176 25.3182V23.3182ZM27.5495 22.5277C26.4411 22.0037 25.5879 21.2962 24.961 20.4108L23.3287 21.5665C24.1715 22.7568 25.3032 23.6781 26.6948 24.3359L27.5495 22.5277ZM24.961 20.4108C24.3478 19.5447 24.023 18.551 23.9969 17.3979L21.9974 17.443C22.032 18.9717 22.4723 20.3568 23.3287 21.5665L24.961 20.4108ZM22.9972 18.4205H27.7699V16.4205H22.9972V18.4205ZM26.7716 17.4792C26.8413 18.6634 27.3559 19.658 28.2836 20.3961L29.5289 18.8311C29.0475 18.4481 28.8046 17.9806 28.7682 17.3617L26.7716 17.4792ZM28.2836 20.3961C29.1792 21.1087 30.2404 21.4545 31.4176 21.4545V19.4545C30.6555 19.4545 30.0424 19.2397 29.5289 18.8311L28.2836 20.3961ZM31.4176 21.4545C32.3421 21.4545 33.2006 21.2491 33.9628 20.8094L32.9633 19.077C32.5437 19.3191 32.0386 19.4545 31.4176 19.4545V21.4545ZM33.9663 20.8074C34.7244 20.3659 35.3196 19.7504 35.7395 18.9773L33.9821 18.0227C33.7354 18.4768 33.3987 18.8235 32.9599 19.079L33.9663 20.8074ZM35.7375 18.9811C36.1696 18.1937 36.3722 17.3121 36.3722 16.3636H34.3722C34.3722 17.0212 34.2339 17.5638 33.9841 18.0189L35.7375 18.9811ZM36.3722 16.3636C36.3722 15.3999 36.1657 14.5069 35.7216 13.7153L33.9773 14.6938C34.2302 15.1446 34.3722 15.691 34.3722 16.3636H36.3722ZM35.7261 13.7234C35.2982 12.9437 34.6948 12.3243 33.9274 11.8831L32.9305 13.6169C33.3752 13.8726 33.7189 14.223 33.9728 14.6856L35.7261 13.7234ZM33.9274 11.8831C33.1559 11.4394 32.2907 11.225 31.3591 11.216L31.3397 13.2159C31.9687 13.222 32.49 13.3636 32.9305 13.6169L33.9274 11.8831ZM31.3494 11.2159C30.5261 11.2159 29.7277 11.386 28.9617 11.7195L29.7599 13.5533C30.2818 13.3261 30.8091 13.2159 31.3494 13.2159V11.2159ZM28.9577 11.7212C28.1863 12.061 27.5411 12.5454 27.0662 13.1922L28.6782 14.376C28.9153 14.0531 29.2625 13.7724 29.7639 13.5515L28.9577 11.7212ZM28.0486 12.7998L23.6736 12.0157L23.3207 13.9843L27.6957 14.7684L28.0486 12.7998ZM24.4932 13.0895L25.5954 0.816727L23.6034 0.637817L22.5012 12.9105L24.4932 13.0895ZM24.5994 1.72727H38.8267V-0.272728H24.5994V1.72727ZM37.8267 0.727272V4.75H39.8267V0.727272H37.8267ZM38.8267 3.75H28.6562V5.75H38.8267V3.75ZM27.6615 4.64723L27.0593 10.4768L29.0487 10.6823L29.651 4.85277L27.6615 4.64723ZM28.054 11.5795H28.1903V9.57955H28.054V11.5795ZM29.0055 11.1588C29.288 10.7612 29.7485 10.3828 30.4596 10.0567L29.6257 8.23879C28.6852 8.6702 27.9109 9.24634 27.3752 10.0003L29.0055 11.1588ZM30.4596 10.0567C31.139 9.74501 31.9184 9.57955 32.8153 9.57955V7.57955C31.6669 7.57955 30.5978 7.79287 29.6257 8.23879L30.4596 10.0567ZM32.8153 9.57955C34.0532 9.57955 35.1222 9.86849 36.0508 10.4257L37.0798 8.71069C35.8115 7.94969 34.3805 7.57955 32.8153 7.57955V9.57955ZM36.0508 10.4257C36.994 10.9916 37.7388 11.7661 38.2924 12.7678L40.0429 11.8004C39.3237 10.499 38.3336 9.46296 37.0798 8.71069L36.0508 10.4257ZM38.2937 12.7702C38.8354 13.744 39.1176 14.8886 39.1108 16.2336L41.1108 16.2437C41.1191 14.6039 40.7725 13.1121 40.0415 11.798L38.2937 12.7702ZM39.1108 16.2435C39.1176 17.6473 38.7941 18.8575 38.1633 19.9044L39.8764 20.9365C40.7154 19.544 41.1192 17.9663 41.1108 16.2338L39.1108 16.2435ZM38.1624 19.906C37.5334 20.9544 36.6522 21.785 35.4935 22.4012L36.4326 24.167C37.8952 23.3892 39.0519 22.3108 39.8774 20.9349L38.1624 19.906ZM35.4954 22.4002C34.3594 23.0012 33.0099 23.3182 31.4176 23.3182V25.3182C33.2799 25.3182 34.9607 24.9457 36.4307 24.168L35.4954 22.4002Z",fill:"#27B3A4",mask:"url(#path-1-outside-1_2001_1159)"}))),z1=t=>i.createElement("svg",{width:41,height:25,viewBox:"0 0 41 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1140",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:43,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:43,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.8494 24.3182C30.6525 24.3106 29.4972 24.1098 28.3835 23.7159C27.2775 23.322 26.285 22.6818 25.4062 21.7955C24.5275 20.9091 23.8305 19.7348 23.3153 18.2727C22.8078 16.8106 22.554 15.0152 22.554 12.8864C22.5616 10.9318 22.785 9.18561 23.2244 7.64773C23.6714 6.10227 24.3078 4.79167 25.1335 3.71591C25.9669 2.64015 26.9631 1.82197 28.1222 1.26136C29.2813 0.693181 30.5805 0.40909 32.0199 0.40909C33.5729 0.40909 34.9441 0.712121 36.1335 1.31818C37.3229 1.91667 38.2775 2.73106 38.9972 3.76136C39.7244 4.79167 40.1638 5.94697 40.3153 7.22727H35.4631C35.2737 6.41667 34.8759 5.7803 34.2699 5.31818C33.6638 4.85606 32.9138 4.625 32.0199 4.625C30.5047 4.625 29.3532 5.28409 28.5653 6.60227C27.785 7.92045 27.3873 9.71212 27.3722 11.9773H27.5312C27.8797 11.2879 28.3494 10.7008 28.9403 10.2159C29.5388 9.72348 30.2169 9.34848 30.9744 9.09091C31.7396 8.82576 32.5464 8.69318 33.3949 8.69318C34.7737 8.69318 36.0009 9.01894 37.0767 9.67045C38.1525 10.3144 39.0009 11.2008 39.6222 12.3295C40.2434 13.4583 40.554 14.75 40.554 16.2045C40.554 17.7803 40.1866 19.1818 39.4517 20.4091C38.7244 21.6364 37.7055 22.5985 36.3949 23.2955C35.0919 23.9848 33.5767 24.3258 31.8494 24.3182ZM31.8267 20.4545C32.5843 20.4545 33.2623 20.2727 33.8608 19.9091C34.4593 19.5455 34.929 19.053 35.2699 18.4318C35.6108 17.8106 35.7812 17.1136 35.7812 16.3409C35.7812 15.5682 35.6108 14.875 35.2699 14.2614C34.9366 13.6477 34.4744 13.1591 33.8835 12.7955C33.2926 12.4318 32.6184 12.25 31.8608 12.25C31.2926 12.25 30.7661 12.3561 30.2812 12.5682C29.804 12.7803 29.3835 13.0758 29.0199 13.4545C28.6638 13.8333 28.3835 14.2727 28.179 14.7727C27.9744 15.2652 27.8722 15.7917 27.8722 16.3523C27.8722 17.1023 28.0426 17.7879 28.3835 18.4091C28.732 19.0303 29.2017 19.5265 29.7926 19.8977C30.3911 20.2689 31.0691 20.4545 31.8267 20.4545Z"})),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.8494 24.3182C30.6525 24.3106 29.4972 24.1098 28.3835 23.7159C27.2775 23.322 26.285 22.6818 25.4062 21.7955C24.5275 20.9091 23.8305 19.7348 23.3153 18.2727C22.8078 16.8106 22.554 15.0152 22.554 12.8864C22.5616 10.9318 22.785 9.18561 23.2244 7.64773C23.6714 6.10227 24.3078 4.79167 25.1335 3.71591C25.9669 2.64015 26.9631 1.82197 28.1222 1.26136C29.2813 0.693181 30.5805 0.40909 32.0199 0.40909C33.5729 0.40909 34.9441 0.712121 36.1335 1.31818C37.3229 1.91667 38.2775 2.73106 38.9972 3.76136C39.7244 4.79167 40.1638 5.94697 40.3153 7.22727H35.4631C35.2737 6.41667 34.8759 5.7803 34.2699 5.31818C33.6638 4.85606 32.9138 4.625 32.0199 4.625C30.5047 4.625 29.3532 5.28409 28.5653 6.60227C27.785 7.92045 27.3873 9.71212 27.3722 11.9773H27.5312C27.8797 11.2879 28.3494 10.7008 28.9403 10.2159C29.5388 9.72348 30.2169 9.34848 30.9744 9.09091C31.7396 8.82576 32.5464 8.69318 33.3949 8.69318C34.7737 8.69318 36.0009 9.01894 37.0767 9.67045C38.1525 10.3144 39.0009 11.2008 39.6222 12.3295C40.2434 13.4583 40.554 14.75 40.554 16.2045C40.554 17.7803 40.1866 19.1818 39.4517 20.4091C38.7244 21.6364 37.7055 22.5985 36.3949 23.2955C35.0919 23.9848 33.5767 24.3258 31.8494 24.3182ZM31.8267 20.4545C32.5843 20.4545 33.2623 20.2727 33.8608 19.9091C34.4593 19.5455 34.929 19.053 35.2699 18.4318C35.6108 17.8106 35.7812 17.1136 35.7812 16.3409C35.7812 15.5682 35.6108 14.875 35.2699 14.2614C34.9366 13.6477 34.4744 13.1591 33.8835 12.7955C33.2926 12.4318 32.6184 12.25 31.8608 12.25C31.2926 12.25 30.7661 12.3561 30.2812 12.5682C29.804 12.7803 29.3835 13.0758 29.0199 13.4545C28.6638 13.8333 28.3835 14.2727 28.179 14.7727C27.9744 15.2652 27.8722 15.7917 27.8722 16.3523C27.8722 17.1023 28.0426 17.7879 28.3835 18.4091C28.732 19.0303 29.2017 19.5265 29.7926 19.8977C30.3911 20.2689 31.0691 20.4545 31.8267 20.4545Z",fill:"#001E3A"}),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM31.8494 24.3182L31.8431 25.3182L31.845 25.3182L31.8494 24.3182ZM28.3835 23.7159L28.048 24.6579L28.05 24.6587L28.3835 23.7159ZM25.4062 21.7955L24.6961 22.4995L24.6961 22.4995L25.4062 21.7955ZM23.3153 18.2727L22.3706 18.6007L22.3722 18.605L23.3153 18.2727ZM22.554 12.8864L21.554 12.8825V12.8864H22.554ZM23.2244 7.64773L22.2638 7.3699L22.2629 7.373L23.2244 7.64773ZM25.1335 3.71591L24.343 3.1035L24.3403 3.10701L25.1335 3.71591ZM28.1222 1.26136L28.5576 2.16161L28.5623 2.15928L28.1222 1.26136ZM36.1335 1.31818L35.6795 2.20919L35.684 2.21147L36.1335 1.31818ZM38.9972 3.76136L38.1774 4.33402L38.1802 4.33805L38.9972 3.76136ZM40.3153 7.22727V8.22727H41.4407L41.3084 7.10975L40.3153 7.22727ZM35.4631 7.22727L34.4893 7.45479L34.6698 8.22727H35.4631V7.22727ZM28.5653 6.60227L27.707 6.08922L27.7048 6.09288L28.5653 6.60227ZM27.3722 11.9773L26.3722 11.9706L26.3654 12.9773H27.3722V11.9773ZM27.5312 11.9773V12.9773H28.1463L28.4237 12.4284L27.5312 11.9773ZM28.9403 10.2159L29.5747 10.989L29.5757 10.9881L28.9403 10.2159ZM30.9744 9.09091L31.2963 10.0377L31.3019 10.0358L30.9744 9.09091ZM37.0767 9.67045L36.5587 10.5258L36.5631 10.5285L37.0767 9.67045ZM39.4517 20.4091L38.5937 19.8954L38.5914 19.8993L39.4517 20.4091ZM36.3949 23.2955L36.8625 24.1794L36.8644 24.1784L36.3949 23.2955ZM33.8608 19.9091L34.3801 20.7637L34.3801 20.7637L33.8608 19.9091ZM35.2699 18.4318L36.1466 18.9129L36.1466 18.9129L35.2699 18.4318ZM35.2699 14.2614L34.3911 14.7387L34.3957 14.747L35.2699 14.2614ZM33.8835 12.7955L34.4076 11.9438L34.4076 11.9438L33.8835 12.7955ZM30.2812 12.5682L29.8804 11.652L29.8751 11.6544L30.2812 12.5682ZM29.0199 13.4545L28.2985 12.762L28.2913 12.7696L29.0199 13.4545ZM28.179 14.7727L29.1025 15.1563L29.1045 15.1514L28.179 14.7727ZM28.3835 18.4091L27.5068 18.8902L27.5114 18.8983L28.3835 18.4091ZM29.7926 19.8977L29.2607 20.7445L29.2655 20.7475L29.7926 19.8977ZM31.8558 23.3182C30.7688 23.3113 29.7241 23.1294 28.717 22.7732L28.05 24.6587C29.2702 25.0903 30.5362 25.3099 31.8431 25.3182L31.8558 23.3182ZM28.719 22.7739C27.7629 22.4333 26.8965 21.8782 26.1164 21.0914L24.6961 22.4995C25.6736 23.4854 26.792 24.2106 28.048 24.6579L28.719 22.7739ZM26.1164 21.0914C25.3639 20.3324 24.7361 19.2959 24.2585 17.9404L22.3722 18.605C22.9249 20.1738 23.691 21.4857 24.6961 22.4995L26.1164 21.0914ZM24.26 17.9448C23.8 16.6195 23.554 14.9424 23.554 12.8864H21.554C21.554 15.0879 21.8156 17.0017 22.3706 18.6007L24.26 17.9448ZM23.554 12.8902C23.5613 11.0078 23.7766 9.35527 24.186 7.92245L22.2629 7.373C21.7935 9.01594 21.5618 10.8558 21.554 12.8825L23.554 12.8902ZM24.1851 7.92556C24.6037 6.47808 25.1897 5.28504 25.9268 4.32481L24.3403 3.10701C23.4258 4.29829 22.7391 5.72647 22.2638 7.3699L24.1851 7.92556ZM25.9241 4.32831C26.6684 3.3675 27.5454 2.65115 28.5576 2.1616L27.6868 0.361129C26.3808 0.99279 25.2654 1.9128 24.343 3.10351L25.9241 4.32831ZM28.5623 2.15928C29.5693 1.66566 30.7153 1.40909 32.0199 1.40909V-0.59091C30.4456 -0.59091 28.9932 -0.279295 27.682 0.363441L28.5623 2.15928ZM32.0199 1.40909C33.4409 1.40909 34.652 1.68563 35.6795 2.20918L36.5875 0.427186C35.2362 -0.261388 33.7049 -0.59091 32.0199 -0.59091V1.40909ZM35.684 2.21147C36.7344 2.74 37.5583 3.44774 38.1774 4.33402L39.817 3.18871C38.9967 2.01438 37.9114 1.09333 36.583 0.424895L35.684 2.21147ZM38.1802 4.33805C38.8093 5.22922 39.1899 6.22598 39.3223 7.3448L41.3084 7.10975C41.1378 5.66796 40.6396 4.35412 39.8141 3.18468L38.1802 4.33805ZM40.3153 6.22727H35.4631V8.22727H40.3153V6.22727ZM36.4368 6.99975C36.1998 5.98532 35.6844 5.13922 34.8762 4.52298L33.6635 6.11339C34.0675 6.42138 34.3475 6.84801 34.4893 7.45479L36.4368 6.99975ZM34.8762 4.52298C34.0671 3.906 33.0936 3.625 32.0199 3.625V5.625C32.7341 5.625 33.2606 5.80613 33.6635 6.11339L34.8762 4.52298ZM32.0199 3.625C30.147 3.625 28.6724 4.47406 27.707 6.08923L29.4237 7.11532C30.0341 6.09412 30.8624 5.625 32.0199 5.625V3.625ZM27.7048 6.09288C26.8012 7.6193 26.388 9.6074 26.3722 11.9706L28.3721 11.984C28.3866 9.81684 28.7688 8.22161 29.4259 7.11167L27.7048 6.09288ZM27.3722 12.9773H27.5312V10.9773H27.3722V12.9773ZM28.4237 12.4284C28.7101 11.8617 29.0924 11.3847 29.5747 10.989L28.306 9.44284C27.6065 10.0168 27.0493 10.714 26.6388 11.5261L28.4237 12.4284ZM29.5757 10.9881C30.0781 10.5748 30.6492 10.2577 31.2963 10.0377L30.6525 8.14414C29.7846 8.43924 28.9996 8.87218 28.305 9.4437L29.5757 10.9881ZM31.3019 10.0358C31.9567 9.80884 32.6525 9.69318 33.3949 9.69318V7.69318C32.4403 7.69318 31.5224 7.84267 30.647 8.14603L31.3019 10.0358ZM33.3949 9.69318C34.6092 9.69318 35.654 9.9779 36.5587 10.5258L37.5947 8.81509C36.3479 8.05997 34.9382 7.69318 33.3949 7.69318V9.69318ZM36.5631 10.5285C37.4825 11.0788 38.2078 11.8336 38.7461 12.8117L40.4983 11.8474C39.7941 10.5679 38.8224 9.54995 37.5903 8.81243L36.5631 10.5285ZM38.7461 12.8117C39.276 13.7746 39.554 14.8965 39.554 16.2045H41.554C41.554 14.6035 41.2108 13.1421 40.4983 11.8474L38.7461 12.8117ZM39.554 16.2045C39.554 17.6183 39.2264 18.8388 38.5937 19.8954L40.3097 20.9228C41.1467 19.5248 41.554 17.9423 41.554 16.2045H39.554ZM38.5914 19.8993C37.9616 20.9621 37.0808 21.7981 35.9254 22.4125L36.8644 24.1784C38.3302 23.3989 39.4873 22.3106 40.312 20.9189L38.5914 19.8993ZM35.9272 22.4115C34.7927 23.0118 33.4449 23.3252 31.8538 23.3182L31.845 25.3182C33.7085 25.3263 35.391 24.9579 36.8625 24.1794L35.9272 22.4115ZM31.8267 21.4545C32.7519 21.4545 33.6123 21.2302 34.3801 20.7637L33.3415 19.0545C32.9123 19.3153 32.4167 19.4545 31.8267 19.4545V21.4545ZM34.3801 20.7637C35.1302 20.3079 35.7224 19.6859 36.1466 18.9129L34.3932 17.9507C34.1356 18.4202 33.7883 18.783 33.3415 19.0545L34.3801 20.7637ZM36.1466 18.9129C36.5756 18.1312 36.7812 17.2662 36.7812 16.3409H34.7812C34.7812 16.9611 34.646 17.4901 34.3932 17.9507L36.1466 18.9129ZM36.7812 16.3409C36.7812 15.4158 36.5756 14.5525 36.144 13.7757L34.3957 14.747C34.646 15.1975 34.7812 15.7206 34.7812 16.3409H36.7812ZM36.1486 13.784C35.7324 13.0178 35.1484 12.3997 34.4076 11.9438L33.3594 13.6471C33.8004 13.9185 34.1407 14.2776 34.3912 14.7387L36.1486 13.784ZM34.4076 11.9438C33.6448 11.4743 32.7858 11.25 31.8608 11.25V13.25C32.4509 13.25 32.9405 13.3893 33.3594 13.6471L34.4076 11.9438ZM31.8608 11.25C31.165 11.25 30.5008 11.3806 29.8804 11.652L30.6821 13.4843C31.0314 13.3315 31.4203 13.25 31.8608 13.25V11.25ZM29.8751 11.6544C29.2788 11.9194 28.7514 12.2902 28.2985 12.762L29.7413 14.1471C30.0157 13.8613 30.3292 13.6412 30.6874 13.482L29.8751 11.6544ZM28.2913 12.7696C27.8481 13.2411 27.5025 13.7853 27.2534 14.3941L29.1045 15.1514C29.2646 14.7601 29.4796 14.4256 29.7485 14.1395L28.2913 12.7696ZM27.2555 14.3891C26.9979 15.0093 26.8722 15.6669 26.8722 16.3523H28.8722C28.8722 15.9164 28.951 15.521 29.1025 15.1563L27.2555 14.3891ZM26.8722 16.3523C26.8722 17.2603 27.0803 18.1129 27.5069 18.8902L29.2602 17.928C29.0049 17.4629 28.8722 16.9442 28.8722 16.3523H26.8722ZM27.5114 18.8983C27.9398 19.6621 28.5252 20.2825 29.2607 20.7445L30.3246 19.051C29.8782 18.7705 29.5242 18.3985 29.2557 17.9198L27.5114 18.8983ZM29.2655 20.7475C30.0343 21.2244 30.8975 21.4545 31.8267 21.4545V19.4545C31.2407 19.4545 30.7479 19.3135 30.3197 19.0479L29.2655 20.7475Z",fill:"#001E3A",mask:"url(#path-1-outside-1_2001_1140)"}))),U1=t=>i.createElement("svg",{width:41,height:25,viewBox:"0 0 41 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{opacity:.6},i.createElement("mask",{id:"path-1-outside-1_2001_1140",maskUnits:"userSpaceOnUse",x:-1,y:-1,width:43,height:27,fill:"black"},i.createElement("rect",{fill:"white",x:-1,y:-1,width:43,height:27}),i.createElement("path",{d:"M10.0114 24.5114C8.05682 24.5038 6.375 24.0227 4.96591 23.0682C3.56439 22.1136 2.48485 20.7311 1.72727 18.9205C0.977273 17.1098 0.606061 14.9318 0.613636 12.3864C0.613636 9.84848 0.988636 7.68561 1.73864 5.89773C2.49621 4.10985 3.57576 2.75 4.97727 1.81818C6.38636 0.878787 8.06439 0.40909 10.0114 0.40909C11.9583 0.40909 13.6326 0.878787 15.0341 1.81818C16.4432 2.75758 17.5265 4.12121 18.2841 5.90909C19.0417 7.68939 19.4167 9.84848 19.4091 12.3864C19.4091 14.9394 19.0303 17.1212 18.2727 18.9318C17.5227 20.7424 16.447 22.125 15.0455 23.0795C13.6439 24.0341 11.9659 24.5114 10.0114 24.5114ZM10.0114 20.4318C11.3447 20.4318 12.4091 19.7614 13.2045 18.4205C14 17.0795 14.3939 15.0682 14.3864 12.3864C14.3864 10.6212 14.2045 9.15151 13.8409 7.97727C13.4848 6.80303 12.9773 5.92045 12.3182 5.32954C11.6667 4.73864 10.8977 4.44318 10.0114 4.44318C8.68561 4.44318 7.625 5.10606 6.82955 6.43182C6.03409 7.75758 5.63258 9.74242 5.625 12.3864C5.625 14.1742 5.80303 15.6667 6.15909 16.8636C6.52273 18.053 7.03409 18.947 7.69318 19.5455C8.35227 20.1364 9.125 20.4318 10.0114 20.4318ZM31.8494 24.3182C30.6525 24.3106 29.4972 24.1098 28.3835 23.7159C27.2775 23.322 26.285 22.6818 25.4062 21.7955C24.5275 20.9091 23.8305 19.7348 23.3153 18.2727C22.8078 16.8106 22.554 15.0152 22.554 12.8864C22.5616 10.9318 22.785 9.18561 23.2244 7.64773C23.6714 6.10227 24.3078 4.79167 25.1335 3.71591C25.9669 2.64015 26.9631 1.82197 28.1222 1.26136C29.2813 0.693181 30.5805 0.40909 32.0199 0.40909C33.5729 0.40909 34.9441 0.712121 36.1335 1.31818C37.3229 1.91667 38.2775 2.73106 38.9972 3.76136C39.7244 4.79167 40.1638 5.94697 40.3153 7.22727H35.4631C35.2737 6.41667 34.8759 5.7803 34.2699 5.31818C33.6638 4.85606 32.9138 4.625 32.0199 4.625C30.5047 4.625 29.3532 5.28409 28.5653 6.60227C27.785 7.92045 27.3873 9.71212 27.3722 11.9773H27.5312C27.8797 11.2879 28.3494 10.7008 28.9403 10.2159C29.5388 9.72348 30.2169 9.34848 30.9744 9.09091C31.7396 8.82576 32.5464 8.69318 33.3949 8.69318C34.7737 8.69318 36.0009 9.01894 37.0767 9.67045C38.1525 10.3144 39.0009 11.2008 39.6222 12.3295C40.2434 13.4583 40.554 14.75 40.554 16.2045C40.554 17.7803 40.1866 19.1818 39.4517 20.4091C38.7244 21.6364 37.7055 22.5985 36.3949 23.2955C35.0919 23.9848 33.5767 24.3258 31.8494 24.3182ZM31.8267 20.4545C32.5843 20.4545 33.2623 20.2727 33.8608 19.9091C34.4593 19.5455 34.929 19.053 35.2699 18.4318C35.6108 17.8106 35.7812 17.1136 35.7812 16.3409C35.7812 15.5682 35.6108 14.875 35.2699 14.2614C34.9366 13.6477 34.4744 13.1591 33.8835 12.7955C33.2926 12.4318 32.6184 12.25 31.8608 12.25C31.2926 12.25 30.7661 12.3561 30.2812 12.5682C29.804 12.7803 29.3835 13.0758 29.0199 13.4545C28.6638 13.8333 28.3835 14.2727 28.179 14.7727C27.9744 15.2652 27.8722 15.7917 27.8722 16.3523C27.8722 17.1023 28.0426 17.7879 28.3835 18.4091C28.732 19.0303 29.2017 19.5265 29.7926 19.8977C30.3911 20.2689 31.0691 20.4545 31.8267 20.4545Z"})),i.createElement("path",{d:"M10.0114 24.5114L10.0075 25.5114H10.0114V24.5114ZM4.96591 23.0682L4.40299 23.8947L4.40506 23.8961L4.96591 23.0682ZM1.72727 18.9205L0.803391 19.3032L0.804768 19.3064L1.72727 18.9205ZM0.613636 12.3864L1.61364 12.3893V12.3864H0.613636ZM1.73864 5.89773L0.817879 5.50757L0.816487 5.51089L1.73864 5.89773ZM4.97727 1.81818L5.53093 2.65093L5.53197 2.65023L4.97727 1.81818ZM15.0341 1.81818L14.4773 2.64885L14.4794 2.65023L15.0341 1.81818ZM18.2841 5.90909L17.3633 6.29924L17.3639 6.30065L18.2841 5.90909ZM19.4091 12.3864L18.4091 12.3834V12.3864H19.4091ZM18.2727 18.9318L17.3502 18.5458L17.3489 18.5491L18.2727 18.9318ZM15.0455 23.0795L15.6084 23.9061L15.6084 23.9061L15.0455 23.0795ZM13.2045 18.4205L14.0646 18.9307L14.0646 18.9307L13.2045 18.4205ZM14.3864 12.3864L13.3864 12.3864L13.3864 12.3892L14.3864 12.3864ZM13.8409 7.97727L12.8839 8.26746L12.8857 8.27309L13.8409 7.97727ZM12.3182 5.32954L11.6464 6.07028L11.6506 6.07411L12.3182 5.32954ZM6.82955 6.43182L5.97205 5.91732L5.97205 5.91732L6.82955 6.43182ZM5.625 12.3864L4.625 12.3835V12.3864H5.625ZM6.15909 16.8636L5.20057 17.1488L5.20279 17.156L6.15909 16.8636ZM7.69318 19.5455L7.02092 20.2858L7.02564 20.29L7.69318 19.5455ZM10.0152 23.5114C8.22898 23.5044 6.74795 23.0675 5.52676 22.2403L4.40506 23.8961C6.00205 24.9779 7.88466 25.5031 10.0075 25.5114L10.0152 23.5114ZM5.52883 22.2417C4.31125 21.4124 3.34469 20.1953 2.64978 18.5345L0.804768 19.3064C1.62501 21.2668 2.81754 22.8149 4.40299 23.8947L5.52883 22.2417ZM2.65115 18.5378C1.96447 16.88 1.60634 14.8402 1.61363 12.3893L-0.386359 12.3834C-0.394216 15.0234 -0.00991963 17.3397 0.803397 19.3031L2.65115 18.5378ZM1.61364 12.3864C1.61364 9.94226 1.97539 7.91844 2.66079 6.28456L0.816487 5.51089C0.0018855 7.45277 -0.386364 9.75471 -0.386364 12.3864H1.61364ZM2.65939 6.28788C3.35262 4.65185 4.31642 3.45841 5.53093 2.65092L4.42361 0.98544C2.83509 2.04159 1.6398 3.56785 0.817885 5.50758L2.65939 6.28788ZM5.53197 2.65023C6.75322 1.83607 8.23144 1.40909 10.0114 1.40909V-0.59091C7.89735 -0.59091 6.01951 -0.0784934 4.42257 0.986132L5.53197 2.65023ZM10.0114 1.40909C11.7914 1.40909 13.2648 1.83611 14.4773 2.64885L15.5909 0.987516C14.0004 -0.0785323 12.1252 -0.59091 10.0114 -0.59091V1.40909ZM14.4794 2.65023C15.703 3.466 16.6705 4.66416 17.3633 6.29924L19.2048 5.51894C18.3825 3.57826 17.1833 2.04915 15.5888 0.986132L14.4794 2.65023ZM17.3639 6.30065C18.0547 7.92386 18.4164 9.94082 18.4091 12.3834L20.4091 12.3893C20.4169 9.75614 20.0287 7.45493 19.2042 5.51753L17.3639 6.30065ZM18.4091 12.3864C18.4091 14.8449 18.0438 16.8882 17.3502 18.5458L19.1952 19.3178C20.0168 17.3542 20.4091 15.0339 20.4091 12.3864H18.4091ZM17.3489 18.5491C16.6615 20.2085 15.6992 21.4244 14.4825 22.253L15.6084 23.9061C17.1948 22.8256 18.384 21.2763 19.1966 19.3145L17.3489 18.5491ZM14.4825 22.253C13.2713 23.078 11.7967 23.5114 10.0114 23.5114V25.5114C12.1351 25.5114 14.0166 24.9902 15.6084 23.9061L14.4825 22.253ZM10.0114 21.4318C11.7632 21.4318 13.1251 20.5143 14.0646 18.9307L12.3445 17.9103C11.693 19.0084 10.9262 19.4318 10.0114 19.4318V21.4318ZM14.0646 18.9307C14.9967 17.3593 15.3941 15.1318 15.3864 12.3835L13.3864 12.3892C13.3938 15.0045 13.0033 16.7998 12.3445 17.9103L14.0646 18.9307ZM15.3864 12.3864C15.3864 10.5607 15.1993 8.98325 14.7962 7.68145L12.8857 8.27309C13.2098 9.31978 13.3864 10.6817 13.3864 12.3864H15.3864ZM14.7979 7.68709C14.4084 6.40252 13.8239 5.33643 12.9857 4.58497L11.6506 6.07411C12.1307 6.50447 12.5613 7.20354 12.8839 8.26745L14.7979 7.68709ZM12.99 4.58882C12.1529 3.82964 11.144 3.44318 10.0114 3.44318V5.44318C10.6515 5.44318 11.1804 5.64763 11.6464 6.07026L12.99 4.58882ZM10.0114 3.44318C8.2704 3.44318 6.91271 4.34956 5.97205 5.91732L7.68704 6.94631C8.33729 5.86256 9.10081 5.44318 10.0114 5.44318V3.44318ZM5.97205 5.91732C5.03933 7.47186 4.63277 9.67186 4.625 12.3835L6.625 12.3892C6.63238 9.81298 7.02885 8.04329 7.68704 6.94631L5.97205 5.91732ZM4.625 12.3864C4.625 14.2329 4.80797 15.8288 5.2006 17.1488L7.11758 16.5785C6.79809 15.5045 6.625 14.1156 6.625 12.3864H4.625ZM5.20279 17.156C5.59913 18.4524 6.18582 19.5275 7.02093 20.2858L8.36543 18.8051C7.88236 18.3665 7.44632 17.6537 7.1154 16.5713L5.20279 17.156ZM7.02564 20.29C7.86845 21.0456 8.87898 21.4318 10.0114 21.4318V19.4318C9.37102 19.4318 8.8361 19.2271 8.36073 18.8009L7.02564 20.29ZM31.8494 24.3182L31.8431 25.3182L31.845 25.3182L31.8494 24.3182ZM28.3835 23.7159L28.048 24.6579L28.05 24.6587L28.3835 23.7159ZM25.4062 21.7955L24.6961 22.4995L24.6961 22.4995L25.4062 21.7955ZM23.3153 18.2727L22.3706 18.6007L22.3722 18.605L23.3153 18.2727ZM22.554 12.8864L21.554 12.8825V12.8864H22.554ZM23.2244 7.64773L22.2638 7.3699L22.2629 7.373L23.2244 7.64773ZM25.1335 3.71591L24.343 3.1035L24.3403 3.10701L25.1335 3.71591ZM28.1222 1.26136L28.5576 2.16161L28.5623 2.15928L28.1222 1.26136ZM36.1335 1.31818L35.6795 2.20919L35.684 2.21147L36.1335 1.31818ZM38.9972 3.76136L38.1774 4.33402L38.1802 4.33805L38.9972 3.76136ZM40.3153 7.22727V8.22727H41.4407L41.3084 7.10975L40.3153 7.22727ZM35.4631 7.22727L34.4893 7.45479L34.6698 8.22727H35.4631V7.22727ZM28.5653 6.60227L27.707 6.08922L27.7048 6.09288L28.5653 6.60227ZM27.3722 11.9773L26.3722 11.9706L26.3654 12.9773H27.3722V11.9773ZM27.5312 11.9773V12.9773H28.1463L28.4237 12.4284L27.5312 11.9773ZM28.9403 10.2159L29.5747 10.989L29.5757 10.9881L28.9403 10.2159ZM30.9744 9.09091L31.2963 10.0377L31.3019 10.0358L30.9744 9.09091ZM37.0767 9.67045L36.5587 10.5258L36.5631 10.5285L37.0767 9.67045ZM39.4517 20.4091L38.5937 19.8954L38.5914 19.8993L39.4517 20.4091ZM36.3949 23.2955L36.8625 24.1794L36.8644 24.1784L36.3949 23.2955ZM33.8608 19.9091L34.3801 20.7637L34.3801 20.7637L33.8608 19.9091ZM35.2699 18.4318L36.1466 18.9129L36.1466 18.9129L35.2699 18.4318ZM35.2699 14.2614L34.3911 14.7387L34.3957 14.747L35.2699 14.2614ZM33.8835 12.7955L34.4076 11.9438L34.4076 11.9438L33.8835 12.7955ZM30.2812 12.5682L29.8804 11.652L29.8751 11.6544L30.2812 12.5682ZM29.0199 13.4545L28.2985 12.762L28.2913 12.7696L29.0199 13.4545ZM28.179 14.7727L29.1025 15.1563L29.1045 15.1514L28.179 14.7727ZM28.3835 18.4091L27.5068 18.8902L27.5114 18.8983L28.3835 18.4091ZM29.7926 19.8977L29.2607 20.7445L29.2655 20.7475L29.7926 19.8977ZM31.8558 23.3182C30.7688 23.3113 29.7241 23.1294 28.717 22.7732L28.05 24.6587C29.2702 25.0903 30.5362 25.3099 31.8431 25.3182L31.8558 23.3182ZM28.719 22.7739C27.7629 22.4333 26.8965 21.8782 26.1164 21.0914L24.6961 22.4995C25.6736 23.4854 26.792 24.2106 28.048 24.6579L28.719 22.7739ZM26.1164 21.0914C25.3639 20.3324 24.7361 19.2959 24.2585 17.9404L22.3722 18.605C22.9249 20.1738 23.691 21.4857 24.6961 22.4995L26.1164 21.0914ZM24.26 17.9448C23.8 16.6195 23.554 14.9424 23.554 12.8864H21.554C21.554 15.0879 21.8156 17.0017 22.3706 18.6007L24.26 17.9448ZM23.554 12.8902C23.5613 11.0078 23.7766 9.35527 24.186 7.92245L22.2629 7.373C21.7935 9.01594 21.5618 10.8558 21.554 12.8825L23.554 12.8902ZM24.1851 7.92556C24.6037 6.47808 25.1897 5.28504 25.9268 4.32481L24.3403 3.10701C23.4258 4.29829 22.7391 5.72647 22.2638 7.3699L24.1851 7.92556ZM25.9241 4.32831C26.6684 3.3675 27.5454 2.65115 28.5576 2.1616L27.6868 0.361129C26.3808 0.99279 25.2654 1.9128 24.343 3.10351L25.9241 4.32831ZM28.5623 2.15928C29.5693 1.66566 30.7153 1.40909 32.0199 1.40909V-0.59091C30.4456 -0.59091 28.9932 -0.279295 27.682 0.363441L28.5623 2.15928ZM32.0199 1.40909C33.4409 1.40909 34.652 1.68563 35.6795 2.20918L36.5875 0.427186C35.2362 -0.261388 33.7049 -0.59091 32.0199 -0.59091V1.40909ZM35.684 2.21147C36.7344 2.74 37.5583 3.44774 38.1774 4.33402L39.817 3.18871C38.9967 2.01438 37.9114 1.09333 36.583 0.424895L35.684 2.21147ZM38.1802 4.33805C38.8093 5.22922 39.1899 6.22598 39.3223 7.3448L41.3084 7.10975C41.1378 5.66796 40.6396 4.35412 39.8141 3.18468L38.1802 4.33805ZM40.3153 6.22727H35.4631V8.22727H40.3153V6.22727ZM36.4368 6.99975C36.1998 5.98532 35.6844 5.13922 34.8762 4.52298L33.6635 6.11339C34.0675 6.42138 34.3475 6.84801 34.4893 7.45479L36.4368 6.99975ZM34.8762 4.52298C34.0671 3.906 33.0936 3.625 32.0199 3.625V5.625C32.7341 5.625 33.2606 5.80613 33.6635 6.11339L34.8762 4.52298ZM32.0199 3.625C30.147 3.625 28.6724 4.47406 27.707 6.08923L29.4237 7.11532C30.0341 6.09412 30.8624 5.625 32.0199 5.625V3.625ZM27.7048 6.09288C26.8012 7.6193 26.388 9.6074 26.3722 11.9706L28.3721 11.984C28.3866 9.81684 28.7688 8.22161 29.4259 7.11167L27.7048 6.09288ZM27.3722 12.9773H27.5312V10.9773H27.3722V12.9773ZM28.4237 12.4284C28.7101 11.8617 29.0924 11.3847 29.5747 10.989L28.306 9.44284C27.6065 10.0168 27.0493 10.714 26.6388 11.5261L28.4237 12.4284ZM29.5757 10.9881C30.0781 10.5748 30.6492 10.2577 31.2963 10.0377L30.6525 8.14414C29.7846 8.43924 28.9996 8.87218 28.305 9.4437L29.5757 10.9881ZM31.3019 10.0358C31.9567 9.80884 32.6525 9.69318 33.3949 9.69318V7.69318C32.4403 7.69318 31.5224 7.84267 30.647 8.14603L31.3019 10.0358ZM33.3949 9.69318C34.6092 9.69318 35.654 9.9779 36.5587 10.5258L37.5947 8.81509C36.3479 8.05997 34.9382 7.69318 33.3949 7.69318V9.69318ZM36.5631 10.5285C37.4825 11.0788 38.2078 11.8336 38.7461 12.8117L40.4983 11.8474C39.7941 10.5679 38.8224 9.54995 37.5903 8.81243L36.5631 10.5285ZM38.7461 12.8117C39.276 13.7746 39.554 14.8965 39.554 16.2045H41.554C41.554 14.6035 41.2108 13.1421 40.4983 11.8474L38.7461 12.8117ZM39.554 16.2045C39.554 17.6183 39.2264 18.8388 38.5937 19.8954L40.3097 20.9228C41.1467 19.5248 41.554 17.9423 41.554 16.2045H39.554ZM38.5914 19.8993C37.9616 20.9621 37.0808 21.7981 35.9254 22.4125L36.8644 24.1784C38.3302 23.3989 39.4873 22.3106 40.312 20.9189L38.5914 19.8993ZM35.9272 22.4115C34.7927 23.0118 33.4449 23.3252 31.8538 23.3182L31.845 25.3182C33.7085 25.3263 35.391 24.9579 36.8625 24.1794L35.9272 22.4115ZM31.8267 21.4545C32.7519 21.4545 33.6123 21.2302 34.3801 20.7637L33.3415 19.0545C32.9123 19.3153 32.4167 19.4545 31.8267 19.4545V21.4545ZM34.3801 20.7637C35.1302 20.3079 35.7224 19.6859 36.1466 18.9129L34.3932 17.9507C34.1356 18.4202 33.7883 18.783 33.3415 19.0545L34.3801 20.7637ZM36.1466 18.9129C36.5756 18.1312 36.7812 17.2662 36.7812 16.3409H34.7812C34.7812 16.9611 34.646 17.4901 34.3932 17.9507L36.1466 18.9129ZM36.7812 16.3409C36.7812 15.4158 36.5756 14.5525 36.144 13.7757L34.3957 14.747C34.646 15.1975 34.7812 15.7206 34.7812 16.3409H36.7812ZM36.1486 13.784C35.7324 13.0178 35.1484 12.3997 34.4076 11.9438L33.3594 13.6471C33.8004 13.9185 34.1407 14.2776 34.3912 14.7387L36.1486 13.784ZM34.4076 11.9438C33.6448 11.4743 32.7858 11.25 31.8608 11.25V13.25C32.4509 13.25 32.9405 13.3893 33.3594 13.6471L34.4076 11.9438ZM31.8608 11.25C31.165 11.25 30.5008 11.3806 29.8804 11.652L30.6821 13.4843C31.0314 13.3315 31.4203 13.25 31.8608 13.25V11.25ZM29.8751 11.6544C29.2788 11.9194 28.7514 12.2902 28.2985 12.762L29.7413 14.1471C30.0157 13.8613 30.3292 13.6412 30.6874 13.482L29.8751 11.6544ZM28.2913 12.7696C27.8481 13.2411 27.5025 13.7853 27.2534 14.3941L29.1045 15.1514C29.2646 14.7601 29.4796 14.4256 29.7485 14.1395L28.2913 12.7696ZM27.2555 14.3891C26.9979 15.0093 26.8722 15.6669 26.8722 16.3523H28.8722C28.8722 15.9164 28.951 15.521 29.1025 15.1563L27.2555 14.3891ZM26.8722 16.3523C26.8722 17.2603 27.0803 18.1129 27.5069 18.8902L29.2602 17.928C29.0049 17.4629 28.8722 16.9442 28.8722 16.3523H26.8722ZM27.5114 18.8983C27.9398 19.6621 28.5252 20.2825 29.2607 20.7445L30.3246 19.051C29.8782 18.7705 29.5242 18.3985 29.2557 17.9198L27.5114 18.8983ZM29.2655 20.7475C30.0343 21.2244 30.8975 21.4545 31.8267 21.4545V19.4545C31.2407 19.4545 30.7479 19.3135 30.3197 19.0479L29.2655 20.7475Z",fill:"#27B3A4",mask:"url(#path-1-outside-1_2001_1140)"}))),W1=()=>e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"elevating-container",children:[e.jsx("p",{className:"services",children:"SERVICES"}),e.jsx("h1",{children:"Elevating every industry through content logical innovation"})]}),e.jsxs("div",{className:"hospital-management-container leftOriented",children:[e.jsxs("div",{className:"text-container",children:[e.jsx("h2",{children:"Hospital Management"}),e.jsx("p",{className:"description",children:'"Automated health profile: Derived from extensive medical data, this profile details your current medications, chronic health conditions"'}),e.jsx("button",{className:"view-button",children:"VIEW"})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png",alt:"Hospital Management"})})]}),e.jsxs("div",{className:"hospital-management-container rightOriented",children:[e.jsxs("div",{className:"text-container",children:[e.jsx("h2",{children:"Electronic Health System"}),e.jsx("p",{className:"description",children:'"Automated health profile: Derived from extensive medical data, this profile details your current medications, chronic health conditions"'}),e.jsx("button",{className:"view-button",children:"VIEW"})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png",alt:"Hospital Management"})})]}),e.jsxs("div",{className:"hospital-management-container leftOriented",children:[e.jsxs("div",{className:"text-container",children:[e.jsx("h2",{children:"Patient Monitoring"}),e.jsx("p",{className:"description",children:'"Automated health profile: Derived from extensive medical data, this profile details your current medications, chronic health conditions"'}),e.jsx("button",{className:"view-button",children:"VIEW"})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png",alt:"Hospital Management"})})]}),e.jsxs("div",{className:"hospital-management-container rightOriented",children:[e.jsxs("div",{className:"text-container",children:[e.jsx("h2",{children:"Digital Clinic"}),e.jsx("p",{className:"description",children:'"Automated health profile: Derived from extensive medical data, this profile details your current medications, chronic health conditions"'}),e.jsx("button",{className:"view-button",children:"VIEW"})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png",alt:"Hospital Management"})})]})]}),h=({mainIcon:t,numIcon:o,fillNumIcon:s,headline:n,content:r})=>{const[l,p]=i.useState(!1);return e.jsx(b1,{children:e.jsxs("div",{className:"requirement-card",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[e.jsx("div",{className:"number-container",children:l?s:o}),e.jsx("div",{className:"icon-container",children:t}),e.jsxs("div",{className:"content",children:[e.jsx("h3",{children:n}),e.jsx("p",{children:r})]})]})})},O1=()=>e.jsxs(v1,{children:[e.jsxs("div",{className:"approach-container",children:[e.jsx("div",{className:"line"}),e.jsxs("h2",{children:["Our design and ",e.jsx("br",{}),e.jsx("span",{children:"development approach"})]})]}),e.jsxs("div",{className:"cardContainer",children:[e.jsx(h,{mainIcon:e.jsx(w1,{className:"icon"}),numIcon:e.jsx(A1,{}),fillNumIcon:e.jsx(k1,{}),headline:"Requirement Gathering",content:"To initiate a project, we prioritize the gathering of requirements, resources, and relevant information."}),e.jsx(h,{mainIcon:e.jsx(M1,{className:"icon"}),numIcon:e.jsx(P1,{}),fillNumIcon:e.jsx(N1,{}),headline:"UI/UX Design",content:`Our team combines modern design tools to
craft visually captivating and delightful
designs, ensuring an exceptional user-
friendly experience.`}),e.jsx(h,{mainIcon:e.jsx(Z1,{className:"icon"}),numIcon:e.jsx(E1,{}),fillNumIcon:e.jsx(R1,{}),headline:"Prototype",content:`By conducting a thorough analysis of the
client's requirements and available
resources, we proactively develop an initial
blueprint to mitigate project setbacks and
ensure smooth progress.`}),e.jsx(h,{mainIcon:e.jsx(j1,{className:"icon"}),numIcon:e.jsx(S1,{}),fillNumIcon:e.jsx(I1,{}),headline:"Development",content:`Our key focus is on creating the desired end
product that aligns with the requirements
analysis and utilizes an efficient prototyping
model. This involves carefully selecting the
most appropriate development tools.`}),e.jsx(h,{mainIcon:e.jsx(H1,{className:"icon"}),numIcon:e.jsx(T1,{}),fillNumIcon:e.jsx(B1,{}),headline:"Quality Assurance",content:`We commit to consistently deliver impeccable
products and services, ensuring utmost
satisfaction of our esteemed clients through
bug-free and top-notch offerings.`}),e.jsx(h,{mainIcon:e.jsx(V1,{className:"icon"}),numIcon:e.jsx(U1,{}),fillNumIcon:e.jsx(z1,{}),headline:"Launch Project",content:`After successfully navigating through
rigorous trials and diligently following all
necessary processes, the work is now
primed for a spectacular launch on the live
server.`})]})]}),D1=()=>e.jsxs(y1,{children:[e.jsxs("div",{className:"sscontainer",children:[e.jsxs("div",{className:"content",children:[e.jsx("h1",{children:"Custom Software Development Company"}),e.jsx("p",{children:"We strive to empower your organization and drive success through our comprehensive IT solutions, facilitating global business expansion."}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:"learn-more",children:"Learn More"}),e.jsx("button",{className:"get-connected",children:"Get Connected"})]})]}),e.jsx("div",{className:"image-container",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407712828.png",alt:"Meeting"})})]}),e.jsx(W1,{}),e.jsx("div",{className:"trustedBy",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407965060.png",alt:""})}),e.jsx(O1,{})]}),q1=a.div`
  width: 100%;
  .BackgroundContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736416180962.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
  }
  .NameOverlay h4 {
    width: 191px;
    position: relative;
    font-size: 40px;
    letter-spacing: 0.03em;
    font-weight: 700;
    color: #021629;
    text-align: justify;
    display: inline-block;
  }
  .NameOverlay p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.03em;
    font-weight: 600;
    color: #021629;
    text-align: justify;
  }
  @media (max-width: 768px) {
    .NameOverlay {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .NameOverlay {
      font-size: 1.2rem;
      padding: 8px 16px;
    }
  }
  .about-heading-div h5 {
    font-size: 48px;
    letter-spacing: 0.03em;
    color: #27b3a4;
  }
  .about-heading-div-p {
    font-size: 49px;
    letter-spacing: 0.03em;
    color: #27b3a4;
    font-weight: 400;
  }
  .about-heading-div {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-content-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-content-div p {
    width: 1000px;
    font-size: 18px;
    letter-spacing: 0.03em;
    font-weight: 400;
    color: #001e3a;
    text-align: center;
    display: inline-block;
  }
  @media (max-width: 480px) {
    .about-heading-div {
      flex-direction: column;
    }
  }

  .about-card-div {
    display: flex;
    justify-content: center;
  }
  .about-card-hover-div {
    width: 25%;
    height: 318.5px;
    position: relative;
    border-radius: 16px;
    background: #f5f5f5;
    transition: box-shadow 0.3s rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    overflow: hidden;
    cursor: pointer;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  .card-info {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 1rem;
  }
  .card-title-text-info h4 {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 600;
    font-family: Poppins;
    color: #27b3a4;
    text-align: center;
  }
  .card-sub-title-text-info p {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 500;
    font-family: Poppins;
    color: #27b3a4;
    text-align: justify;
    height: 150px;
  }

  /*Hover*/
  .about-card-hover-div {
    transition: box-shadow 0.3s ease;
  }

  .about-card-hover-div:hover {
    box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
  }

  .about-card-hover-div:hover .card-title-text-info h4,
  .about-card-hover-div:hover .card-sub-title-text-info p {
    color: #a6a7b9;
  }
`,Y1=[{title:"Centralized Health Records",description:"Easily access and manage all patient information in one secure location.",imageUrl:"https://via.placeholder.com/300x200?text=Health+Records"},{title:"Telemedicine Services",description:"Connect with healthcare providers remotely through our secure platform.",imageUrl:"https://via.placeholder.com/300x200?text=Telemedicine"},{title:"Appointment Scheduling",description:"Schedule and manage your medical appointments with ease.",imageUrl:"https://via.placeholder.com/300x200?text=Appointments"}],F1=()=>e.jsxs(q1,{children:[e.jsx("div",{className:"BackgroundContainer",children:e.jsxs("div",{className:"NameOverlay",children:[e.jsx("h4",{children:"About Us"}),e.jsx("p",{children:"Home > About Us"})]})}),e.jsxs("div",{className:"about-heading-div",children:[e.jsx("h5",{className:"me-3",children:"RAPHAPLUS - The Platform "}),e.jsx("h5",{className:"about-heading-div-p",children:"You Deserve"})]}),e.jsx("div",{className:"about-content-div",children:e.jsx("p",{children:"RaphaPlus is a comprehensive healthcare management system that streamlines clinic operations, corporate healthcare plans, and patient care. It offers centralized health records, efficient scheduling, and secure data management. With tools like detailed analytics and free professional websites, RaphaPlus enhances efficiency and boosts revenue for healthcare providers."})}),e.jsx("div",{className:"card-container",children:Y1.map((t,o)=>e.jsx("div",{className:"about-card-div",children:e.jsx("div",{className:"about-card-hover-div",children:e.jsxs("div",{className:"card-info",children:[e.jsx("div",{children:e.jsx("img",{src:t.imageUrl,alt:t.title})}),e.jsx("div",{className:"card-title-text-info",children:e.jsx("h4",{children:t.title})}),e.jsx("div",{className:"card-sub-title-text-info",children:e.jsx("p",{children:t.description})})]})})},o))})]}),X1=t=>{var n;const{component:o}=(n=t.match)==null?void 0:n.params,s=()=>{switch(o){case"home":return e.jsx(b,{});case"login":return e.jsx(w,{});case"hospital-management":return e.jsx(S,{});case"patient-monitoring":return e.jsx(F,{});case"privacy":return e.jsx(Q,{});case"disclaimer":return e.jsx(X,{});case"return":return e.jsx($,{});case"security":return e.jsx(i1,{});case"shipping":return e.jsx(a1,{});case"terms":return e.jsx(o1,{});case"disclosure":return e.jsx(r1,{});case"digital-clinic":return e.jsx(g1,{});case"ehs":return e.jsx(x1,{});case"software-sol":return e.jsx(D1,{});case"aboutus":return e.jsx(F1,{});default:return e.jsx(M,{})}};return e.jsx(H,{children:s()})};export{X1 as default};
