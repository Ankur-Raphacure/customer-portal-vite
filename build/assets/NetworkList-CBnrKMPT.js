import{d as c,u as M,b as P,a as D,j as t,c as U,v as Z,r,gU as F,gV as O,go as V}from"./index-f4owDEOR.js";const L=c.div`
  width: 100%;
  .networkWrapper {
    width: 100%;
    padding-bottom: 100px;
    background: #fff;
  }

  .listContainer {
    padding: 0px 2.5rem;
  }

  .custom-card-height {
    height: 4rem;
    margin-top: 3rem;
  }

  .input-group-text {
    color: #fff;
    background: #9474ff;
  }

  .custom-btn {
    display: flex;
    height: 3rem;
    justify-content: space-between;
    gap: 1rem;
    align-items: end;
  }

  .custom-edit-btn {
    color: #808080;
    background: #f6f6f6;
  }

  .customr-h5-edit {
    color: #183b56;
  }

  .custome-parameter {
    color: #00c9aa;
  }

  .custome-name {
    gap: 1rem;
  }

  .custome-card-body {
    display: flex;
    justify-content: space-between;
  }

  .custome-book-btn {
    color: #ffffff;
    background: #9474ff;
  }

  .custome-name-2 {
    text-wrap: nowrap;
  }

  .custome-name-1 {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .rtn-num {
    color: #000000;
    opacity: 0.5;
    font-weight: 500;
    font-size: 1rem;
  }

  .rating-div {
    justify-content: flex-start;
    gap: 0.188rem;
  }

  .png-btn {
    display: flex;
    width: 40px;
    height: 36px;
    min-width: 40px;
    padding: 7.8px 16.16px 9px 16.14px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--new-Athens-Gray, #ebeef3);
    box-shadow: 0px 3px 8px 0px rgba(50, 50, 93, 0.07);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .custom-card-height {
      flex-direction: column;
      height: auto;
      margin-top: 1.5rem;
    }

    .custom-btn {
      flex-direction: column;
      height: auto;
      gap: 0.5rem;
      align-items: start;
    }

    .card {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 576px) {
    .listContainer {
      padding: 0px 1rem;
    }

    .custom-edit-btn {
      font-size: 0.875rem;
      padding: 0.5rem;
    }

    .input-group {
      flex-direction: column;
    }

    .input-group .form-control {
      margin-bottom: 0.5rem;
      width: 100%;
    }

    .input-group .input-group-text {
      width: 100%;
    }
  }
`,I=c.div`
  font-family: Poppins, sans-serif;
  font-style: normal;
  width: 100%;
  margin-top: 2rem;

  .Card {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #161616;
    margin-bottom: 1rem;
  }

  .CardBody {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    flex-wrap: wrap;
  }

  .DoctorInfo {
    display: flex;
    align-items: center;
    width: 40%;
  }

  .DoctorImage img {
    width: 67px;
    height: 67px;
    border-radius: 100%;
  }

  .DoctorDetails {
    margin-left: 1rem;
  }

  .DoctorName {
    width: 150px;
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: left;
    display: inline-block;
  }

  .DoctorSpecialization {
    color: #00c9aa;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .DoctorRating {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .Rating {
    color: #000;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .Experience {
    color: #000;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .Experience img {
    height: 17px;
  }

  .Languages {
    color: #000;
    font-size: 10px;
    font-weight: 400;
  }

  .Languages img {
    height: 21px;
  }

  .BookButton {
    width: 10%;
  }

  .BookButton button {
    background-color: #9474ff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .rating-div {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .content-div {
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 768px) {
    .CardBody {
      flex-direction: column;
      align-items: flex-start;
    }

    .DoctorInfo,
    .DoctorRating,
    .BookButton {
      width: 100%;
      margin-bottom: 1rem;
    }

    .DoctorName {
      font-size: 16px;
    }

    .DoctorSpecialization,
    .Rating,
    .Experience,
    .Languages,
    .content-div {
      font-size: 12px;
    }

    .BookButton button {
      width: 100%;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    .DoctorName {
      font-size: 14px;
    }

    .DoctorSpecialization,
    .Rating,
    .Experience,
    .Languages,
    .content-div {
      font-size: 10px;
    }

    .BookButton button {
      font-size: 0.75rem;
    }
  }
`,J="data:image/svg+xml,%3csvg%20width='11'%20height='11'%20viewBox='0%200%2011%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20opacity='0.5'%20width='11'%20height='11'%20fill='url(%23pattern0_1_388)'/%3e%3cdefs%3e%3cpattern%20id='pattern0_1_388'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1_388'%20transform='scale(0.0111111)'/%3e%3c/pattern%3e%3cimage%20id='image0_1_388'%20width='90'%20height='90'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO2cTagOURiAH+Fe7nWVsvBvT9lYEWUhpfz/XIossPGbspCFutmwI0XJjhAhkZ0t1/UTC1JIshFJ3HvRFY5OHTmNM98388184z2f96l3M3Nm5j3PnfvOzDkzHyiKoiiKoiiKoiiKoiiWNmAH0AsMAkZADAK3ge3AyFb4M00E7gsQa2rEPWACkZ/J0iUbF3djPrN3CBBocsQ2IuWOAHkmR9iaHSUDAuSZHNFPpKR1SAJGcG4t1RkjOLeW6owRnFtLdcYIzk1EZ/Z5IS23f0YzOmOasB8VHUBF15GiZ3QTUdFCRZsmRFm5iUZFV4SKroiq/j07vX0PCcutEqrqzDRv3x+E5VYJVXVmtrfvJ8Jyq4S8nfnqtRmf4zirve2uFcyt6ISvnezYDbQjWPRTr82iHMc56m13oGBuZcUjYApCRR/z2lzKeIzhwGtvu7kFcytbdrtE0TO9Nj+ABRmOscnb5hUwLMM2PRWJtrELgaIt1xPi7Hshadh1b732e5Al2biXhkSKngS899o+TZE9MVHTnwOjhUmubMK3EdGWJcA3r/0bYDF/mAe88NZ/c8ukSc7a38IUOfCKhGwbN1xp+ekt+w5sFCxZpOgRwDhgKjAHOFWnA1b4XvcILlWySNGm5M5IkByl6HfAl4z7lCJZrOhPTuhj4CZwwr18OMvdI3e4i6Vd3udu74YalPzJDUIlo7/VRZdBVsl2XGVsyj66EuMuKrpAuaj3iH9VRYfJW5PXUZsNKrq45M/AGGrTVePC+1/W6J4GOh4qG9MDy66o6GK3cN38PW5ynr9ZH4toiW/8fw48SW5xt3X2ydSno6TP9ZpOrwCxJhEXA3leduvmB9ZdikH0dgFiTSLWBj7R+/2AcijQh+4YRLe5jyWNkBh05cBnYWLqKUlnCeWjEia4jyWNgLgQyO9IYjQwNKF6IQbRuC9S7XjFrX98gVwdyO1Zos3WQJs1sYguE9NgDATKhi0LhxNhpSbpKHiCRIlpMM4VPK69z1bR1JewsqDoVSqaupL7M8yQ12OUG7/W0kG+sjEDOJkS+1Nkn1XR1DzTlgekHazRfihldM/uR89o8pWNB3Wk2emyJPY9uo9610FQ2JmUhyj/3ZBQHE8pH6dVNEFhywKyNmeQ9TJF9FIVTVDYx8Asd9aJ19AMuZYO5EaUmAgjSkyEESUmwogSE2FEyYAAcXnCjo9ESZ8AeeK+YWkGuwXIyxM7iZR2N4lqIoiHboI6WqZEINtKnkwL0O4+luwVdIEccD8kuzP2M1lRFEVRFEVRFEVRFIWS+AWp+GPF4K32oQAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e",T="data:image/svg+xml,%3csvg%20width='9'%20height='9'%20viewBox='0%200%209%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3crect%20width='9'%20height='9'%20fill='%23F5F5F5'/%3e%3cg%20clip-path='url(%23clip0_1_278)'%3e%3crect%20width='1440'%20height='1786'%20transform='translate(-652%20-797)'%20fill='white'/%3e%3crect%20x='-466.5'%20y='-41.5'%20width='1102'%20height='83'%20rx='9.5'%20fill='white'%20stroke='%23161616'/%3e%3cg%20clip-path='url(%23clip1_1_278)'%3e%3crect%20opacity='0.5'%20width='9'%20height='9'%20fill='url(%23pattern0_1_278)'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0_1_278'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1_278'%20transform='scale(0.0111111)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_1_278'%3e%3crect%20width='1440'%20height='1786'%20fill='white'%20transform='translate(-652%20-797)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1_278'%3e%3crect%20width='114'%20height='15'%20fill='white'%20transform='translate(0%20-3)'/%3e%3c/clipPath%3e%3cimage%20id='image0_1_278'%20width='90'%20height='90'%20xlink:href='data:image/png;base64,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'/%3e%3c/defs%3e%3c/svg%3e",S=i=>{var g,e,u,h,E,y;const f=M(),w=P(),{user:l}=D(a=>a.auth);let N="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png",A="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";const b=()=>{var a,p;return((a=i.doctor)==null?void 0:a.image)??(((p=i.doctor)==null?void 0:p.gender)==="male"?N:A)},d=(a,p)=>{l!=null&&l.id?(w(Z({doctorDetails:{...a},consultationType:p,hospitalDetails:{},categoryType:"doctor",slot1:{},slot2:{}})),f.push("/doctor/bookingReview")):w(U(!0))};return t.jsx(I,{children:i.doctor?t.jsx("div",{className:"Card mt-4",children:t.jsxs("div",{className:"CardBody",children:[t.jsxs("div",{className:"DoctorInfo",children:[t.jsx("div",{className:"DoctorImage",children:t.jsx("img",{src:b(),alt:"Doctor"})}),t.jsxs("div",{className:"DoctorDetails",children:[t.jsx("div",{className:"DoctorName",children:(g=i.doctor)==null?void 0:g.name}),t.jsx("div",{className:"DoctorSpecialization",children:(e=i.doctor)==null?void 0:e.specialization})]})]}),t.jsxs("div",{className:"DoctorRating",children:[t.jsxs("div",{className:"Rating d-flex",children:[t.jsx("div",{className:"star_img me-1",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 12 12",fill:"none",children:t.jsx("path",{d:"M5.52447 0.963525C5.67415 0.502869 6.32585 0.50287 6.47553 0.963525L7.45934 3.99139C7.52628 4.1974 7.71826 4.33688 7.93487 4.33688H11.1186C11.6029 4.33688 11.8043 4.95669 11.4124 5.24139L8.83679 7.11271C8.66155 7.24003 8.58822 7.46572 8.65516 7.67173L9.63897 10.6996C9.78864 11.1602 9.2614 11.5433 8.86955 11.2586L6.29389 9.38729C6.11865 9.25997 5.88135 9.25997 5.70611 9.38729L3.13045 11.2586C2.73859 11.5433 2.21136 11.1602 2.36103 10.6996L3.34484 7.67173C3.41178 7.46572 3.33845 7.24003 3.16321 7.11271L0.587553 5.24139C0.195696 4.95669 0.397084 4.33688 0.881446 4.33688H4.06513C4.28174 4.33688 4.47372 4.1974 4.54066 3.99139L5.52447 0.963525Z",fill:"#C5BD00"})})}),t.jsx("span",{className:"rating-div",children:(u=i.doctor)==null?void 0:u.rating})]}),t.jsxs("div",{className:"d-flex",children:[t.jsxs("div",{className:"Experience me-2",children:[t.jsx("img",{src:T,alt:"",className:"me-1"}),t.jsxs("span",{className:"content-div",children:[(h=i.doctor)==null?void 0:h.work_experience_years," Years Experience"]})]}),t.jsxs("div",{className:"Languages",children:[t.jsx("img",{src:J,alt:""}),t.jsx("span",{className:"content-div",children:t.jsx("span",{children:((E=i.doctor)==null?void 0:E.languages)??"English"})})]})]})]}),t.jsx("div",{className:"BookButton",children:(y=i.doctor)!=null&&y.virtual_consultation_cost?t.jsx("button",{onClick:()=>d(i.doctor,"VIRTUAL"),children:"Book Now"}):null})]})},i.doctor.id):null})},H=c.div`
  background: linear-gradient(90deg, #5033e1 0%, #4a32e2 100%);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 20px;
  border-radius: 15px;
`,Y=c.div`
  max-width: 50%;
`,G=c.h1`
  color: var(--Neutral-100, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 46px; /* 135.294% */
`,K=c.p`
  margin-top: 10px;
  color: var(--Neutral-300, #eff0f6);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 178.571% */
  letter-spacing: -0.28px;
`,Q=c.div`
  max-width: 40%;
  display: flex;
  justify-content: flex-end;
`,X=c.img`
  max-width: 100%;
  height: auto;
`,q=()=>t.jsxs(H,{children:[t.jsxs(Y,{children:[t.jsx(G,{children:"Our Trusted Network of Healthcare Providers"}),t.jsx(K,{children:"Discover our extensive network of partner healthcare providers, dedicated to delivering top-quality healthcare and advanced medical treatments. At RaphaCure, we are committed to ensuring that our technology is available where you need it most. Explore our network and find the best care near you."})]}),t.jsx(Q,{children:t.jsx(X,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736505187160.png",alt:"Network Illustration"})})]}),tt=i=>{const[f,w]=r.useState("Search"),[l,N]=r.useState(""),[A,b]=r.useState(!1),d=o=>{w(o)},g=P(),[e,u]=r.useState(1),[h,E]=r.useState(10),[y,a]=r.useState(0),{hospitalList:p,doctorsList:m,tablist:_}=D(o=>o.doctor);r.useEffect(()=>{const o={count:h,page:e-1,searchText:l};(async()=>{var R;const j=await g(V(o)),v=JSON.stringify(j),s=JSON.parse(v);a((R=s.payload.data)==null?void 0:R.doctorCount),console.log(s.payload.data.doctors.slice(0,10))})()},[g,e,h,l]);const B=o=>{N(o.target.value),u(1)},k=Math.ceil(y/h),x=Math.max(1,e-5),z=Math.min(k,e+4),C=o=>{u(o),b(!0)};r.useEffect(()=>{A&&(window.scrollTo({top:1,behavior:"smooth"}),b(!1))},[A]);const W=()=>{var o,n,j,v;switch(f){case"Search Gym":return t.jsx("div",{children:"Gym Page Content"});case"Search Labs":return t.jsx("div",{children:"Labs Page Content"});case"Search Ayurveda":return t.jsx("div",{children:"Ayurveda Page Content"});case"Search Pharmacy":return t.jsx("div",{children:"Pharmacy Page Content"});case"Search Doctor":return t.jsx("div",{children:m&&((o=m.doctors)==null?void 0:o.length)>0&&((n=m.doctors)==null?void 0:n.map(s=>t.jsx(S,{doctor:s},s.id)))});default:return t.jsx("div",{children:m&&((j=m.doctors)==null?void 0:j.length)>0&&((v=m.doctors)==null?void 0:v.map(s=>t.jsx(S,{doctor:s},s.id)))})}};return t.jsx(L,{children:t.jsxs("div",{className:"networkWrapper",children:[t.jsx(q,{}),t.jsxs("div",{className:"listContainer",children:[t.jsxs("div",{className:"d-flex custom-card-height",children:[t.jsx("div",{className:"card w-50 me-4",children:t.jsx("div",{className:"card-body card-div",children:t.jsxs("div",{className:"input-group input-group",children:[t.jsx("input",{type:"text",className:"form-control","aria-describedby":"input-group-sm",placeholder:f,value:l,onChange:B}),t.jsx("button",{className:"input-group-text",id:"input-group-sm-example",children:"Search"})]})})}),t.jsxs("div",{className:"custom-btn",children:[t.jsx("button",{className:"btn custom-edit-btn",onClick:()=>d("Search Gym"),children:"Gym"}),t.jsx("button",{className:"btn custom-edit-btn",onClick:()=>d("Search Ayurveda"),children:"Ayurveda"}),t.jsx("button",{className:"btn custom-edit-btn",onClick:()=>d("Search Pharmacy"),children:"Pharmacy"}),t.jsx("button",{className:"btn custom-edit-btn",onClick:()=>d("Search Labs"),children:"Labs"}),t.jsx("button",{className:"btn custom-edit-btn",onClick:()=>d("Search Doctor"),children:"Doctor"})]})]}),W(),t.jsxs("div",{className:"pagination d-flex justify-content-between",children:[t.jsx("div",{children:t.jsx("h6",{children:`Page ${e} of ${k} pages`})}),t.jsxs("div",{children:[e>1&&t.jsx("button",{onClick:()=>C(e-1),className:"btn btn-outline-dark me-3",children:t.jsx(F,{})}),Array.from({length:z-x+1},(o,n)=>t.jsx("button",{onClick:()=>C(x+n),className:`btn btn-outline-dark ${e===x+n?"active":""}`,children:x+n},x+n)),e<k&&t.jsx("button",{onClick:()=>C(e+1),className:"btn btn-outline-dark ms-3",children:t.jsx(O,{})})]})]})]})]})})};export{tt as default};
