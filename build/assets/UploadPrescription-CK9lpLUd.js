import{d as a,G as s,u as o,b as d,A as c,j as i}from"./index-BHf3qlKB.js";const p=a.div`
  --gridGap: 2rem;
  display: grid;
  grid-template-rows: 2fr 1fr;
  gap: var(--gridGap);
  padding: 60px;
  width: 100%;
  font-family: "Outfit", sans-serif;

  .topGrid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--gridGap);
  }

  .rightGrid {
    cursor: pointer;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: var(--gridGap);
  }

  .rightBottomGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gridGap);
  }

  .bottomGrid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--gridGap);
  }

  .gridCard {
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }

  .newPrescription {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #a3dac2;
    padding: 20px;
    position: relative;
    cursor: pointer;

    .prescriptionContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
        /* max-width: 50%; */
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
        max-width: 60%;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;

      img {
        width: 300px;
        height: auto;
      }
    }

    .arrowContainer {
      position: absolute;
      bottom: 15px;
      right: 15px;
      background-color: #ffffff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);

      svg {
        color: #000000;
      }
    }
  }
  .homeCenter {
    background-color: #f0da69;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
        /* max-width: 50%; */
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
        max-width: 75%;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: baseline;

      img {
        width: 300px;
        height: auto;
      }
    }
  }
  .previousOrder {
    background-color: #e7c2d4;
    /* padding: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
      }
    }
  }

  .noPrescription {
    background-color: #92bdf6;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .brands {
    background-color: #b7d0fa;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .savings {
    background-color: #bba8f0;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
        object-fit: contain;
      }
    }
  }
  .newpharmacyPrescription {
    background-color: #ffffff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 850px) {
    .topGrid,
    .rightGrid,
    .rightBottomGrid,
    .bottomGrid,
    .newPrescription,
    .homeCenter,
    .previousOrder,
    .noPrescription,
    .brands,
    .savings {
      display: flex;
      flex-direction: column;
      /* gap: var(--gridGap); */
    }
    .gridCard {
      width: 100%;
    }
    .imageContainer img {
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    .newPrescription .prescriptionContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .rightBottomGrid {
      display: flex;
      flex-direction: row;
    }
    .imageContainer img {
      width: 100% !important;
      height: 6rem !important;
    }
    .bottomGrid {
      margin-top: -3.5rem;
    }
    .newPrescription .imageContainer {
      margin-top: 0px;
    }
    .homeCenter .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .previousOrder .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .noPrescription .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .brands .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .savings .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .homeCenter {
      padding: 0px;
    }
    .gridCard {
      padding: 0px;
    }
    .cardContent {
      padding: 10px;
    }
    .newPrescription {
      padding: 10px;
    }
  }
  .Previous-btn {
    display: flex;
    align-items: end;
    cursor: pointer;
    button {
      background: #fff;
      border-radius: 100%;
      height: 3.5rem;
    }
  }
`;function n(e){return s({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(e)}const h=()=>{const e=o();d();const r=c(),t=r==null?void 0:r.state;return i.jsxs(p,{children:[i.jsxs("div",{className:"topGrid",children:[i.jsxs("div",{className:"leftGrid gridCard newPrescription",onClick:()=>e.push("/uploadprescription/uploadsubprescription",t),children:[i.jsxs("div",{className:"prescriptionContent",children:[i.jsx("h2",{children:"New Prescription Upload here"}),i.jsx("p",{children:"Upload your prescriptions and we will send you your medicines"})]}),i.jsx("div",{className:"imageContainer",children:i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732791901719.png",alt:"Prescription Illustration"})}),i.jsx("div",{className:"arrowContainer cursor-pointer",onClick:()=>e.push("/uploadprescription/uploadsubprescription",t),children:i.jsx(n,{size:30})})]}),i.jsxs("div",{className:"rightGrid",children:[i.jsxs("div",{className:"gridCard homeCenter",onClick:()=>e.push("/scanmedicine",t),children:[i.jsx("div",{className:"cardContent",children:t==="pharmacy"?i.jsxs(i.Fragment,{children:[i.jsx("h2",{children:"Scan your medicines strip/ bottle"}),i.jsx("p",{children:"Want to just scan your medicine, go ahead and we can take the order"})]}):i.jsxs(i.Fragment,{children:[i.jsx("h2",{children:"Home/Center Visit"}),i.jsx("p",{children:"You can book lab tests and packages from either home or choose to visit the centre"})]})}),i.jsx("div",{className:"imageContainer",children:t==="pharmacy"?i.jsxs(i.Fragment,{children:[i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733994436539.png",alt:""}),i.jsx("div",{className:"newpharmacyPrescription",children:i.jsx("div",{className:"arrowContainer cursor-pointer ",children:i.jsx(n,{size:30})})})]}):i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732792744087.png",alt:"Home Center Illustration"})})]}),i.jsxs("div",{className:"rightBottomGrid",children:[i.jsxs("div",{className:"gridCard previousOrder",onClick:()=>e.push("/dashboard"),children:[i.jsxs("div",{className:"cardContent",children:[i.jsx("h2",{children:"Previous Order"}),i.jsx("p",{children:"Select from your previous orders"})]}),i.jsxs("div",{className:"imageContainer",children:[i.jsx("div",{className:"Previous-btn"}),i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732793084089.png",alt:"Previous Order Illustration"}),i.jsx("div",{className:"Previous-btn",children:i.jsx("button",{className:"btn",onClick:()=>e.push("/dashboard"),children:i.jsx(n,{size:30})})})]})]}),i.jsxs("div",{className:"gridCard noPrescription",children:[i.jsxs("div",{className:"cardContent",children:[i.jsx("h2",{children:"No Prescription?"}),i.jsx("p",{children:"Chat with our team on WhatsApp to get your prescription."})]}),i.jsx("div",{className:"imageContainer",children:i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732793160227.png",alt:"No Prescription Illustration"})})]})]})]})]}),i.jsxs("div",{className:"bottomGrid",children:[i.jsxs("div",{className:"gridCard brands",children:[i.jsxs("div",{className:"cardContent",children:[i.jsx("h2",{children:"Brands"}),i.jsx("p",{children:"Partnering with renowned brands to deliver exceptional healthcare products and services."})]}),i.jsx("div",{className:"imageContainer",children:i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732796615339.png",alt:"No Brands Illustration"})})]})," ",i.jsxs("div",{className:"gridCard savings",children:[i.jsxs("div",{className:"cardContent",children:[i.jsx("h2",{children:"Savings"}),i.jsx("p",{children:"Discover cost-effective medicine options, often saving up to 80%."})]}),i.jsx("div",{className:"imageContainer",children:i.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732796660037.png",alt:"No Prescription Illustration"})})]})]})]})};export{h as default};
