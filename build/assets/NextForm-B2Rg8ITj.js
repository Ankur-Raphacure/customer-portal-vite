import{d as D,u as q,q as T,b as P,r as m,j as e,P as $,Q as B,R as I,W as L,T as G,U,V as H,X as O,t as b}from"./index-CitTC1Lo.js";const V=D.div`
  background-color: #ffffff;
  font-family: Inter, sans-serif;
  /* .p-75 {
    padding: 5rem;
  } */
  .booking-container {
    display: flex;
    font-family: Arial, sans-serif;
    color: #333;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 50px;
    /* margin-left: 16rem; */
    padding: 0px;
    border: 1px solid rgba(0, 0, 0, 0.26);
    width: 70%;
  }

  .left-panel,
  .right-panel {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
  }

  .left-panel {
    background-color: #ffffff;
    border-right: 1px solid #ddd;
    border-radius: 5px;
  }

  .left-panel h2 {
    color: #003b8e;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .left-panel h1 {
    color: #002e66;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .info {
    background-color: #ecffec;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .info p {
    display: flex;
    align-items: center;
    margin: 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: #555;
  }

  .key-features-container {
    display: block;
  }
  .key-features-container h3 {
    margin-top: 25px;

    font-weight: 600;

    font-size: 18px;
    color: #252b61;
  }

  .key-features ul {
    list-style: none;
    padding: 0;
    /* margin: px 0; */
  }

  .key-features-list {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
    color: #555;
    padding-Left: "1rem";
  }

  .key-features li::before {
    content: "•";
    margin-right: 8px;
    color: black;
    font-size: 1.2em;
  }

  .back-button {
    background: none;
    border: none;
    border-radius: 53px;
    font-size: 1.5em;
    cursor: pointer;
    margin-bottom: 20px;
    background-color: #003a80;
    color: #fff;
    font-weight: bold;
  }

  /* Right Panel */
  .form-container {
    display: flex;
    flex-direction: column;
  }

  .form-container h3 {
    font-size: 20px;
    color: #003b8e;
    margin-bottom: 15px;
    font-weight: 550;
    width: 147px;
  }

  .form-container label {
    margin: 10px 0 5px;
    font-size: 14px;
    color: #646d77;
    font-weight: 600;
  }

  .form-container input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* margin-bottom: 15px; */
    font-size: 14px;
  }

  .form-container textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* margin-bottom: 15px; */
    font-size: 14px;
  }

  .add-guest {
    background-color: white;
    color: #003b8e;
    border: 2px solid #003b8e;
    padding: 6px 15px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
    width: fit-content;
  }

  .error {
    color: red;
  }

  .terms {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #646d77;
    margin-bottom: 15px;
  }

  .terms input {
    margin-right: 5px;
    margin-top: 10px;
    width: 30px;
    height: 18px;
    cursor: pointer;
    vertical-align: middle;
  }

  .terms-link,
  .privacy-link {
    color: #252b61;
    cursor: pointer;
  }

  .schedule-event {
    background-color: #002e66;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 50px;
    width: fit-content;
    font-family: inter;
  }

  .doctor-tool-card {
    background-color: #ffffff;
    border-radius: 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.26);
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    & > div {
      padding: 0 2rem;
    }
  }

  .doctor-tool-card > div:last-child {
    margin-bottom: 50px;
    text-align: left;
  }

  .header {
    margin-bottom: 1rem;
  }

  .back-icon {
    font-size: 2.5rem;
    color: #ffffff;
    cursor: pointer;
    background-color: #003a80;
    border-radius: 50%;
    padding: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto;
  }

  .company-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
    margin-top: 0.5rem;
  }

  .title {
    font-weight: 550;
    font-size: 30px;
    color: #00254d;
    margin-top: 0.5rem;
  }

  .details-section {
    background-color: #f0f8f4;
    /* border-radius: 8px; */
    padding: 0.5rem 1.5rem !important;
    font-size: 16px;
    font-weight: 600 !important;
    font-family: Inter;
  }

  .detail {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .detail:last-child {
    margin-bottom: 0;
  }

  .detail span {
    font-weight: 500;
    line-height: 1.5;
  }

  .icon {
    font-size: 1.2rem;
    color: #666;
    margin-right: 0.8rem;
  }

  .key-features h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #00254d;
    margin-bottom: 0.5rem;
  }

  .key-features ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0; /* Reduce spacing above the list */
    margin-bottom: 0;
  }

  .key-features li {
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #333;
    line-height: 1.2;
  }

  .key-features li::before {
    content: "•";
    color: #00254d;
    display: inline-block;
    width: 1rem;
    margin-right: 0.4rem;
  }

  @media (max-width: 1032px) {
    margin-bottom: 50px;
  }

  @media (max-width: 1000px) {
    .booking-container {
      flex-direction: column;
      /* width: 70%; */
    }
  }

  @media ((max-width: 950px) and (min-width: 700px)) {
  }
  @media (min-width: 768px) {
    .booking-container {
      /* flex-direction: column; */
      /* width: 70%; */
    }

    .left-panel,
    .right-panel {
      flex: 1;
      padding: 20px;
    }

    .header .title {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    .booking-container {
      width: 95%;
    }

    .header .title {
      font-size: 22px;
    }

    .key-features h3 {
      font-size: 16px;
    }

    .key-features li {
      font-size: 14px;
    }
  }

  @media (min-width: 481px) {
    .key-features-icon {
      display: none;
    }
  }

  @media screen and (min-width: 480px) {
    .arrow-icon {
      display: none;
    }
  }

  @media (max-width: 392px) {
    .key-features {
      display: block;
    }

    .key-features h3 {
      font-size: 14px;
    }

    .key-features li {
      font-size: 12px;
    }

    .form-container h3 {
      font-size: 18px;
    }

    .form-container label {
      font-size: 16px;
    }

    .form-container input {
      font-size: 19px;
      height: 55px;
    }

    .form-container textarea {
      font-size: 19px;
      
    }

    .add-guest {
      font-size: 14px;
      width: unset;
    }

    .schedule-event {
      font-size: 14px;
      width: unset;
    }

    .doctor-tool-card {
      border-right: unset;
      border-bottom: 1px solid rgba(0, 0, 0, 0.26);
    }

    .doctor-tool-card > div {
      padding: unset;
    }

    .key-features-container {
      background-color: #eaedfc;
      padding: 20px !important;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      margin-top: 25px;
    }

    .key-features-container.active{
      background-color: #fff;
    }

    .key-features-container h3 {
      font-size: 18px;
      color: #252b61;
      font-weight: bold;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .key-features-list {
      display: none;
      margin-top: 10px;
      list-style-type: disc;
      margin-left: 0px;
      font-size: 16px;
      font-weight: 600;
    }

    .key-features-container.active .key-features-list {
      display: block;
    }

    .key-features-icon {
      transform: rotate(0deg);
      transition: transform 0.3s ease;
    }

    .key-features-container.active .key-features-icon {
      transform: rotate(180deg);
    }

    .company-name {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: black;
    }
    .back-icon {
      font-size: 1.9rem;
      margin: -16.5rem auto;
    }

    .title {
      text-align: center;
      font-size: 28px !important;
      font-weight: 600;
    }

    .booking-container {
      border: transparent !important;
      margin-top: unset !important;
      margin-bottom: unset !important;
    }

    .form-container label {
      font-weight: unset;
    }

    .form-container label:last-child {
      font-weight: 500;
    }

    .terms input {
      margin-top: -25px;
      width: 40px;
    }
  }
`,K=()=>{const u=q(),y=T(),k=P(),[t,j]=m.useState({name:"",email:"",guestEmail:"",phone:"",city:"",message:"",terms:!1}),[o,p]=m.useState({}),[w,v]=m.useState(!1),[f,N]=m.useState(!1),{selectedDate:x,selectedTime:c}=y.state||{},h=(i,r)=>{const[s,n]=i.includes(" ")?i.split(" "):[i,null];let[a,A]=s.split(":").map(Number);n&&(n==="PM"&&a!==12?a+=12:n==="AM"&&a===12&&(a=0));const d=new Date;d.setHours(a,A),d.setMinutes(d.getMinutes()+r);const R={hour:"2-digit",minute:"2-digit",hour12:!0};return d.toLocaleTimeString("en-US",R)},z=c?h(c,0):"",S=c?h(c,15):"",E=()=>{N(!f)},l=i=>{const{id:r,value:s,type:n,checked:a}=i.target;r==="phone"&&(!/^\d*$/.test(s)||s.length>10)||(j({...t,[r]:n==="checkbox"?a:s}),p({...o,[r]:""}))},C=()=>{const i={};return t.name.trim()||(i.name="Name is required."),t.email.trim()||(i.email="Email is required."),t.phone.trim()||(i.phone="Phone number is required."),t.city.trim()||(i.city="City is required."),t.message.trim()||(i.message="Message is required."),t.terms||(i.terms="You must agree to the terms."),i},M=i=>{const[r,s]=i.split(" ");let[n,a]=r.split(":").map(Number);return s==="PM"&&n!==12?n+=12:s==="AM"&&n===12&&(n=0),`${n.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`},g=async i=>{i.preventDefault();const r=C();Object.keys(r).length>0?p(r):(p({}),await F({date:x,time:M(c),email:t.email,guestEmail:t.guestEmail||"",phone:t.phone,city:t.city,message:t.message,type:"demorequests"}))},F=async i=>{var n,a;const r=await k(O(i)),s=((a=(n=r==null?void 0:r.payload)==null?void 0:n.data)==null?void 0:a.demoRequest)||{};if(r!=null&&r.error){b.error(r.error.message||"Something went wrong");return}else b.success("Request submitted successfully"),u.push("/bookdemo/form/confirmation",{resp:s})};return e.jsx(V,{children:e.jsx("div",{className:"d-flex align-items-baseline p-75",children:e.jsxs("div",{className:"booking-container",children:[e.jsxs("div",{className:"doctor-tool-card",children:[e.jsxs("div",{className:"header",children:[e.jsx($,{className:"back-icon",onClick:()=>u.push("/bookdemo")}),e.jsx("h3",{className:"company-name",children:"Raphaplus"}),e.jsxs("h2",{className:"title",children:["Experience Rapha + ",e.jsx("br",{}),"Clinic Management ",e.jsx("br",{}),"Doctor Tool"]})]}),e.jsxs("div",{className:"details-section",children:[e.jsxs("div",{className:"detail",children:[e.jsx(B,{className:"icon"}),e.jsx("span",{children:"15 min"})]}),e.jsxs("div",{className:"detail",children:[e.jsx(I,{className:"icon"}),e.jsxs("span",{children:["Web conferencing details provided ",e.jsx("br",{})," upon confirmation."]})]}),e.jsxs("div",{className:"detail",children:[e.jsx(L,{className:"icon"}),e.jsx("span",{children:c&&x?`${z} - ${S}, ${new Date(x).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}`:"Select a date and time"})]}),e.jsxs("div",{className:"detail",children:[e.jsx(G,{className:"icon"}),e.jsx("span",{children:"India Standard Time"})]})]}),e.jsxs("div",{className:`key-features-container ${f?"active":""}`,onClick:E,children:[e.jsxs("h3",{children:["Key Features:",f?e.jsx(U,{className:"arrow-icon"}):e.jsx(H,{className:"arrow-icon"})]}),e.jsxs("ul",{className:"key-features-list",children:[e.jsx("li",{children:"Effortless Multi-Clinic Management"}),e.jsx("li",{children:"Patient Management"}),e.jsx("li",{children:"Customize Rx"}),e.jsx("li",{children:"Robust Appointment Scheduling"})]})]})]}),e.jsx("div",{className:"right-panel",children:e.jsxs("form",{className:"form-container",onSubmit:g,children:[e.jsx("h3",{children:"Enter Details"}),e.jsx("label",{htmlFor:"name",children:"Name*"}),e.jsx("input",{type:"text",id:"name",value:t.name,onChange:l,placeholder:"Mallikarjun"}),o.name&&e.jsx("span",{className:"error",children:o.name}),e.jsx("label",{htmlFor:"email",children:"Email*"}),e.jsx("input",{type:"email",id:"email",value:t.email,onChange:l,placeholder:"Mallikarjun@raphacure.com"}),o.email&&e.jsx("span",{className:"error",children:o.email}),w?e.jsxs(e.Fragment,{children:[e.jsx("label",{htmlFor:"guestEmail",children:"Guest Email"}),e.jsx("input",{type:"email",id:"guestEmail",value:t.guestEmail,onChange:l,placeholder:"Guest email"})]}):e.jsx("button",{type:"button",className:"add-guest",onClick:()=>v(!0),children:"Add Guest"}),e.jsx("label",{htmlFor:"phone",children:"Phone Number*"}),e.jsx("input",{type:"text",id:"phone",value:t.phone,onChange:l,placeholder:"+91 9191919191",inputMode:"numeric"}),o.phone&&e.jsx("span",{className:"error",children:o.phone}),e.jsx("label",{htmlFor:"city",children:"City*"}),e.jsx("input",{type:"text",id:"city",value:t.city,onChange:l,placeholder:"Enter your city"}),o.city&&e.jsx("span",{className:"error",children:o.city}),e.jsx("label",{htmlFor:"message",children:"Message*"}),e.jsx("textarea",{id:"message",value:t.message,onChange:l,placeholder:"Enter your message here"}),o.message&&e.jsx("span",{className:"error",children:o.message}),e.jsxs("div",{className:"terms",children:[e.jsx("input",{type:"checkbox",id:"terms",checked:t.terms,onChange:l}),e.jsxs("label",{htmlFor:"terms",children:["By proceeding, you confirm that you have read and agree to Rapha plus ",e.jsx("span",{className:"terms-link",children:"Terms of Use"})," ","and ",e.jsx("span",{className:"privacy-link",children:"Privacy Notice"}),"."]})]}),o.terms&&e.jsx("span",{className:"error",children:o.terms}),e.jsx("button",{type:"submit",className:"schedule-event",onClick:g,children:"Schedule Event"})]})})]})})})};export{K as default};
