import{d as r,r as n,j as e,g9 as i,ga as c,gb as l,gc as d}from"./index-DDOdRoFT.js";import{g as p,A as m}from"./appstore-RUnmWlpR.js";const x="/assets/contactusbanner-CMPt8ieO.png",u=r.div`
  width: 100%;
  .banner img {
    width: 100%;
  }
  .contact-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    border-radius: 10px;
    margin: 0 auto;
  }

  .contact-info-section {
    max-width: 50%;
  }

  .contact-info-section h1 {
    color: #9747ff;
    font-size: 2em;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .contact-info-section p {
    color: #666;
    margin-bottom: 20px;
  }

  .contact-info {
    margin-bottom: 20px;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    font-size: 1em;
    color: #666;
  }

  .contact-item svg {
    margin-right: 10px;
  }

  .app-links {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
  }

  .app-icon {
    /* width: 150px; */
    margin: 0 10px;
  }

  .qr-codes {
    display: flex;
    justify-content: flex-start;
  }

  .qr-code {
    /* width: 100px; */
    margin: 0 10px;
  }

  .form-section {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    /* margin-bottom: 15px; */
    gap: 1rem;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    /* margin-bottom: 10px; */
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #9747ff;
    outline: none;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #aaa;
  }

  .submit-button {
    background-color: #9747ff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .submit-button:hover {
    background-color: #42ff00;
  }

  .submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: #9747ff;
    }
  }

  @media screen and (max-width: 700px) {
    .contact-form-container {
      flex-direction: column;
    }
    .contact-info-section {
      max-width: 80%;
    }
    .app-links,
    .qr-codes {
      flex-direction: column;
    }
  }
`,f="/assets/playstoreqr-BUKSJ_73.png",g="/assets/appstoreqr-lAuqgkWw.png",j=()=>{const[o,t]=n.useState(!1),a=s=>{t(s.target.checked)};return e.jsxs(u,{children:[e.jsx("div",{className:"banner",children:e.jsx("img",{src:x,alt:""})}),e.jsxs("div",{className:"contact-form-container",children:[e.jsxs("div",{className:"contact-info-section",children:[e.jsx("h1",{children:"We're Here to Help"}),e.jsx("p",{children:"Reach out to us for any inquiries, support, or feedback. We look forward to connecting with you!"}),e.jsxs("div",{className:"contact-info",children:[e.jsxs("div",{className:"contact-item",children:[e.jsx(i,{fill:"#9747FF",size:30}),e.jsx("span",{children:"38/3, 6th cross, road, opp. Thomas Square, HSR Extension, VIBGYOR High school, Reliable Tranquil Layout, Bengaluru, Karnataka 560102"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx(c,{fill:"#9747FF",size:20}),e.jsx("span",{children:"+91 9555166000"})]}),e.jsxs("div",{className:"contact-item",children:[e.jsx(l,{fill:"#9747FF",size:20}),e.jsx("span",{children:"wellness@raphacure.com"})]})]}),e.jsxs("div",{className:"app-links",children:[e.jsx("img",{src:p,alt:"Google Play",className:"app-icon"}),e.jsx("img",{src:m,alt:"App Store",className:"app-icon"})]}),e.jsxs("div",{className:"qr-codes",children:[e.jsx("img",{src:f,alt:"QR Code 1",className:"qr-code"}),e.jsx("img",{src:g,alt:"QR Code 2",className:"qr-code"})]})]}),e.jsx("div",{className:"form-section",children:e.jsxs("form",{className:"contact-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("input",{type:"text",placeholder:"First Name*",required:!0}),e.jsx("input",{type:"text",placeholder:"Last Name*",required:!0})]}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"email",placeholder:"Email*",required:!0})}),e.jsx("div",{className:"form-group",children:e.jsx("input",{type:"tel",placeholder:"Phone Number*",required:!0})}),e.jsx("div",{className:"form-group",children:e.jsx("textarea",{placeholder:"Your message...",required:!0})}),e.jsx("div",{className:"form-group",children:e.jsx(d,{onChange:a,children:"By submitting this form, you hereby grant us permission to contact you via SMS, WhatsApp, RCS, Email, and any other channel."})}),e.jsx("button",{type:"submit",className:"submit-button",disabled:!o,children:"Send Message"})]})})]})]})};export{j as default};
