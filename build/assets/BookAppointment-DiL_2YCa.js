import{d as j,r as n,u as w,j as e,az as v}from"./index-BHf3qlKB.js";import{S as z}from"./SideFilterModule-0zbG3kwK.js";import"./index-D3gR5QY_.js";import"./index-CE3dYLmv.js";const F=j.div`
  gap: 2rem;
  padding: 2rem 3rem 3rem 0rem;

  .main {
    display: flex;
    flex-direction: column;
  }

  .main-content {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  .heading {
    padding: 0rem 4rem;
    h1 {
      font-size: 32px;
      font-weight: 700;
      font-family: Inter;
      color: #171a1f;
      margin-bottom: 10px;
    }

    p {
      font-family: Inter;
      color: #171a1f;
      font-size: 18px;
      font-weight: 400;
    }
  }

  .filters {
    border: 1px solid #ededed;
    border-left: none;
    border-radius: 0px 33px 0px 0px;
    width: 25%;
  }

  .toggle-filter {
    display: none !important;
  }

  .horizontal-line {
    display: none;
  }

  .filter-title-div img {
    margin-right: 5px !important;
  }

  .filter-by-type-div {
    padding: 20px;
  }

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

  .left-middle {
    display: flex;
    flex-direction: row;
    gap: 15px;
    padding: 1rem;
  }

  .button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  .sb {
    border-radius: 0px 10px 0px 20px;
    background-color: rgba(37, 43, 97, 0.09);
    padding: 6px 4px;

    .slots {
      margin-top: 5px;
      margin-right: 10px;
      display: flex;
      gap: 10px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      font-size: 16px;

      img {
        height: 20.8px;
        margin-left: 10px;
        margin-bottom: 10px;
      }
    }
  }

  .appointment-card {
    justify-content: space-between;

    .exp {
      display: flex;
      flex-direction: column;
    }
  }
  .ex {
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-top: 15px;
  }

  .ex2 {
    display: flex;
    gap: 6px;
  }

  .exp img {
    width: 5%;
    height: 17.3px;
  }

  .exp span {
    font-size: 15px;
    font-family: Inter;
    color: #000;
    font-weight: 400;
  }

  .card-left {
    position: relative;
    img {
      width: 100%;
      height: 176.9px;
      border-radius: 10px;
    }
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
          flex: 1;

          h3 {
            font-size: 22.68px;
            font-weight: 700;
            margin-bottom: 0.1rem;
            font-family: Inter;
            color: #0b0b0b;
          }

          p {
            font-size: 16px;
            font-family: Inter;
            color: #3b4171;
            margin-bottom: 0.3rem;
          }
        }
      }
    }
  }

  .book {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    .book-now {
      padding: 0.8rem 0.5rem;
      border: none;
      border-radius: 128px;
      width: 100%;
      background-color: #252b61;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      margin-right: 1rem;
    }

    .slots {
      font-size: 0.9rem;
      color: #555;
    }
  }

  .sort-dropdown {
    display: flex;
    justify-content: right;
    margin-bottom: 30px;
  }

  .fee {
    display: flex;
    flex-direction: row;
    margin-top: 33px;
    gap: 20px;
    font-size: 15px;
    font-weight: 500;
    font-family: Inter;
    color: #000;

    img {
      height: 10.2px;
      margin-top: 7px;
    }
  }

  .bannerWrapper {
    position: absolute;
    top: 1rem;
    left: -1rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Outfit;
      color: #252b61;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }

  .filter-section {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    align-items: unset;
  }

  input[type="checkbox"] {
    accent-color: initial; 
  }

  input[type="checkbox"]:checked {
    accent-color: #252b61;
  }

  input[type="radio"] {
    accent-color: initial;
  }

  input[type="radio"]:checked {
    accent-color: #252b61;
  }

  .filter-content {
    display: flex;
    flex-direction: column;
    padding: 0px 25px;

    label {
      display: flex;
      gap: 7px;
      font-size: 14px;
      font-weight: 500;
      font-family: Poppins;
      color: #000;
    }

    input {
      width: 18px;
      height: 18px;
    }
  }

  .head {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .filter-header {
    display: flex;
    width: 100%;
    justify-content: space-between !important;
    align-items: center;
    padding: 10px 20px;
    padding-bottom: 0px;

    p {
      font-size: 18px;
      font-weight: 500;
      font-family: Outfit;
      color: #000;
      margin-bottom: unset;
    }
  }

  @media (max-width: 391px) {
    padding: 1rem;
    .main-content {
      display: flex;
      flex-direction: column;
      gap: 0rem;
    }
    .filter-section {
      display: flex;
      flex-direction: column;
      padding-bottom: unset;

      span {
        display: none;
      }
    }
    .heading {
      padding: 0rem 1.5rem;

      p {
        display: none;
      }
    }
    .sort-section {
      display: none;
    }

    .divider {
      display: none;
    }

    .filters {
      border: none;
      padding: 0rem;
    }

    .sort-filter-container {
      position: relative;
      z-index: 1000;
      background-color: white;
      padding: 10px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .appointment-card {
      display: flex;
      flex-direction: column;
    }

    .left-middle {
      display: flex;
      flex-direction: column;
    }

    .sb {
      border-radius: 0px;
    }

    .book .book-now {
      margin-top: 15px;
      margin-left: 8px;
    }
    .sort-dropdown {
      margin-bottom: 15px;
    }
    .fee {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      gap: 0px;

      img {
        display: none;
      }
    }
  }
`,C=[{id:1,name:"Dr. Sarah Patel, MD",department:"Pediatric Department",experience:"5 + Years",languages:["English","Hindi","Tamil"],inClinicFee:500,videoConsultFee:300,gender:"Female",consultantType:"OPD Consultant",specialization:"Pediatric",slots:23},{id:2,name:"Dr. Ramesh Kumar, MD",department:"Dental Department",experience:"10 + Years",languages:["English","Kannada","Hindi"],inClinicFee:400,videoConsultFee:250,gender:"Male",consultantType:"Online Consultant",specialization:"Dentist",slots:15},{id:3,name:"Dr. Priya Singh, MD",department:"General Surgery",experience:"8 + Years",languages:["English","Hindi"],inClinicFee:300,videoConsultFee:200,gender:"Female",consultantType:"OPD Consultant",specialization:"General Surgeon",slots:10}],M=N=>{const[k,S]=n.useState({gender:"",specialization:"",consultantType:"",priceRange:[0,500]}),a=w(),[r,s]=n.useState(C),[l,D]=n.useState(!1),[B,I]=n.useState([]),[A,H]=n.useState([]),[d,p]=n.useState("Recommended"),c=i=>{p(i);const y=[...r].sort((t,o)=>i==="Experience"?parseInt(o.experience)-parseInt(t.experience):i==="Fee: Low to High"?t.inClinicFee-o.inClinicFee:i==="Fee: High to Low"?o.inClinicFee-t.inClinicFee:0);s(y)},[E,O]=n.useState([0,500]),m=i=>{},x=({rating:i})=>e.jsxs("div",{className:"bannerWrapper",children:[e.jsxs("div",{className:"rectangle",children:[e.jsx(v,{fill:"#252B61"})," ",i]}),e.jsx("div",{className:"triangle"})]});console.log("Dropdown state:",l);const g=()=>{},f=()=>{},h=()=>{},u=()=>{},b=()=>{};return e.jsx(F,{children:e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"heading",children:[e.jsx("h1",{children:"Book Appointment"}),e.jsxs("p",{children:["Do consectetur proident proident id eiusmod deserunt consequat"," ",e.jsx("br",{}),"pariatur ad ex velit do Lorem reprehenderit."]})]}),e.jsxs("div",{className:"main-content",children:[e.jsx("div",{className:"filters",children:e.jsx(z,{handleClearAll:g,handleChangeBrandFilter:f,handleChangeCategoryFilter:h,handleChangeTypeFilter:u,filterPriceRange:b,handleInputChange:m,origin:"bookAppointment"})}),e.jsxs("div",{className:"appointments",children:[e.jsx("div",{className:"tags",children:e.jsx("div",{className:"sort-dropdown",children:e.jsxs("div",{className:"sort",children:[e.jsx("label",{htmlFor:"sortBy",children:"Sort By:"}),e.jsxs("select",{id:"sortBy",value:d,onChange:i=>c(i.target.value),children:[e.jsx("option",{value:"Recommended",children:"Recommended"}),e.jsx("option",{value:"Experience",children:"Experience"}),e.jsx("option",{value:"Fee: Low to High",children:"Fee: Low to High"}),e.jsx("option",{value:"Fee: High to Low",children:"Fee: High to Low"})]})]})})}),e.jsx("div",{className:"appointment-list",children:r.map(i=>e.jsxs("div",{className:"appointment-card",children:[e.jsxs("div",{className:"left-middle",children:[e.jsxs("div",{className:"card-left",children:[e.jsx(x,{rating:4.5}),e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735741676463.png",alt:i.name})]}),e.jsxs("div",{className:"card-right",children:[e.jsx("h3",{children:i.name}),e.jsx("p",{children:i.department}),e.jsxs("div",{className:"exp",children:[e.jsxs("div",{className:"ex",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png",alt:""}),e.jsxs("span",{children:[i.experience," Experience"]})]}),e.jsxs("div",{className:"ex2",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735652815819.png",alt:""}),e.jsx("span",{children:i.languages.join(", ")})]})]}),e.jsxs("div",{className:"fee",children:[e.jsxs("div",{children:[e.jsxs("span",{children:["₹",i.inClinicFee]})," In-Clinic Consult"]}),e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735740538715.png",alt:""}),e.jsxs("div",{children:[e.jsxs("span",{children:["₹",i.videoConsultFee]})," Video Consult"]})]})]})]}),e.jsxs("div",{className:"book",children:[e.jsx("div",{className:"button",children:e.jsx("button",{className:"book-now btn",onClick:()=>a.push("/bookappointment/DetailBookAppointment"),children:"Book Now"})}),e.jsx("div",{className:"sb",children:e.jsxs("div",{className:"slots",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735741456951.png",alt:""}),i.slots," Slots For Today"]})})]})]},i.id))})]})]})]})})};export{M as default};
