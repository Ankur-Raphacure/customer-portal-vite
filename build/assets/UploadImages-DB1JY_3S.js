import{d as J,u as O,b as A,r as s,a as N,j as e,gI as V,D as q,bl as H,O as Q,Q as R}from"./index-BHf3qlKB.js";const W=J.div`
  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .poppins-bold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
  }

  .flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex_wrapbetween {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .inlineflex_start {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .inlineflex_center {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flexdirection_col {
    flex-direction: column;
  }

  .upload-prescriptionwrap {
    width: 92.352%;
    margin: 14px auto 14px auto;

    @media only screen and (min-width: 1024px) {
      margin: 17px auto 15px auto;
    }
  }
  .new-option-header {
    display: flex;
    justify-content: space-between;
    // margin-top: 20px;
    button {
      // margin-top: -15px;
    }
    h4 {
      width: 237px;
      position: relative;
      font-size: 24px;
      font-weight: 500;
      color: #000;
      text-align: left;
      display: inline-block;
      opacity: 0.8;
    }
  }
  .button-shadow {
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  #uploadsubmitbtn:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  .savedPrescription__list + label .savedPrescription__default {
    display: block;
    cursor: pointer;
  }
  .savedPrescription__list + label .savedPrescription__selected {
    display: none;
    cursor: pointer;
  }

  .savedPrescription__list:checked + label .savedPrescription__default {
    display: none;
    cursor: pointer;
  }
  .savedPrescription__list:checked + label .savedPrescription__selected {
    display: block;
    cursor: pointer;
  }
  .upload-container {
    width: 100%;
    margin-top: 30px;
    position: relative;
    border-radius: 10px;
    background-color: rgba(0, 165, 255, 0.1);
    border: 3px dashed #00a5ff;
    box-sizing: border-box;
    height: 271px;
    text-align: center;
    padding-top: 92px;
    cursor: pointer;

    &:hover {
      background: #00a5ff33;
    }
  }
  .progress-container {
    width: 100%;
    margin-top: 15px;
    height: 231px;
    border: 3px dashed #00a5ff;
    border-radius: 10px;
    cursor: pointer;
    background: rgba(0, 165, 255, 0.1);

    &:hover {
      background: #00a5ff33;
    }

    .progress-barwrap {
      width: 81.132%;
      margin: 0 auto;
      padding-top: 61px;

      .progress-bar {
        height: 1rem;
        margin-top: 40px;
        background: #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;

        .progress-div {
          transition-width: auto;
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          background: #00a5ff;
          height: 100%;
        }
      }
    }
  }

  
  .actions-btn-sec-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 36px;
    margin-bottom: 16px;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    @media only screen and (min-width: 1024px) {
      justify-content: space-between;
      margin-top: 18px;
      margin-bottom: 8px;
    }

    .uploadprescriptions-leftbtns {
      gap: 12px;

      @media only screen and (min-width: 1024px) {
        gap: 24px;
      }

      @media (max-width: 760px) {
        flex-direction: column;
      }
    }

    .uploadprescriptions-rightbtns {
      gap: 12px;
      margin-top: 6px;

      @media only screen and (min-width: 1024px) {
        gap: 24px;
        margin-top: 12px;
      }
    }
  }
  .saved-prescription-btn {
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #9747ff;
    box-sizing: border-box;
    width: 100%;
    padding: 7.5px 9px;
    color: #9747ff;
    white-space: nowrap;
    @media only screen and (min-width: 1024px) {
      padding: 15px 18px;
    }
  }
  .cancel-prescription-btn {
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #9747ff;
    box-sizing: border-box;
    width: 100%;
    padding: 7px 22px;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    opacity: 0.6;

    @media only screen and (min-width: 1024px) {
      padding: 13px 44px;
    }
  }
  .submit-prescription-btn {
    position: relative;
    border-radius: 10px;
    background-color: #9747ff;
    padding: 7px 22px;
    border: none;
    color: #fff;
    font-size: 18px;
    line-height: 27px;
    @media only screen and (min-width: 1024px) {
      padding: 13px 44px;
    }
  }
  .support-text-box-sec {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    position: relative;
    font-size: 16px;
    color: #000;
    white-space: pre-wrap;
    text-align: left;
    opacity: 0.6;
  }
  .remarks-prescription {
    margin-top: 10px;
    span {
      opacity: 0.6;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
    textarea {
      border: 2px solid #e0e0e0;
      width: 100%;
      margin: 0;
      padding: 0.5rem;
      font-size: 14px;
      line-height: 24px;
    }
  }
  #dropzone-file {
    display: none;
  }
  .checkmark__circle {
    transform-origin: center;
    stroke-dasharray: 1000;
    fill-opacity: 0;
    -webkit-animation: dash 3s ease-in-out, FillIn 3s 0.35s ease-in-out forwards;
    animation: dash 3s linear, FillIn 3s 0.35s ease-in-out forwards;
  }

  .checkmark__tick {
    stroke-dasharray: 1000;
    stroke-dashoffset: -100;
    -webkit-animation: dash-check 3s 0.35s ease-in-out forwards infinite;
    animation: dash-check 3s 0.35s ease-in-out forwards infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes FillIn {
    from {
      fill-opacity: 0;
    }
    to {
      fill-opacity: 1;
    }
  }

  @-webkit-keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
  .warning-message {
    font-size: 13px;
    color: #d12323;
  }
  .show-add-div h2 {
    margin-top: 5px;
    font-size: 15px;
    opacity: 0.5;
  }
`,pe=()=>{O();const b=A(),[w,y]=s.useState(""),[K,X]=s.useState("Upload Prescription"),[P,m]=s.useState(!0),[I,h]=s.useState(!1),[U,z]=s.useState(!1),[C,k]=s.useState(!0),[D,j]=s.useState(!1),[g,f]=s.useState("0"),[Y,Z]=s.useState(""),[ee,v]=s.useState(!0),[se,F]=s.useState(!1),[te,ie]=s.useState(!0),[ae,S]=s.useState(!1),{cartItems:oe}=N(t=>t.checkout),{user:L}=N(t=>t.auth),l=s.useRef(null);localStorage.getItem("raphaPrescriptions");const[ne,re]=s.useState("");s.useEffect(()=>{g==="0"&&v(!0)},[g]);const T=t=>{l.current;const a=t.target.files;let o=[];for(let p=0;p<a.length;p++){const r=a[p];if(r&&(r!=null&&r.type.startsWith("image/"))){const d=new FileReader;d.onloadstart=()=>{m(!1),h(!0)},d.onprogress=n=>{if(n.lengthComputable){const c=n.loaded/n.total*100;f(`${c}`)}},d.onload=()=>{var _;f("0");const n=1e3,c=50,i=n/c;let u=0;const x=()=>{const $=u/i*100;f(`${$}`),u++,u<=i?setTimeout(x,c):(f("100"),k(!1),j(!0))};setTimeout(x,c),o.push(r),l.current?l.current.push((_=l.current)==null?void 0:_.files,o):l.current=[...o]},d.readAsDataURL(r)}else l.current=null}},B=async t=>{var a,o,p,r,d;try{const n={id:`${L.id}`,ext:".png"},c=await b(H(n)),i=JSON.parse(JSON.stringify(c)),u=(o=(a=i==null?void 0:i.payload)==null?void 0:a.signedUrL)==null?void 0:o.signedUrL,x=(r=(p=i==null?void 0:i.payload)==null?void 0:p.signedUrL)==null?void 0:r.publicUrl;return await Q.put(u,t,{headers:{"Content-Type":"image/png"}}),b(R("Image Uploaded Successfully")),y((d=i==null?void 0:i.payload)==null?void 0:d.signedUrL),z(!0),m(!1),h(!1),x}catch(n){throw console.error("Error uploading image to S3:",n),n}},M=async()=>{const t=l.current;if(!t||t.length===0){alert("At least one file is required.");return}for(let a=0;a<t.length;a++){const o=t[a];o&&o.name&&(B(t[a]),S(!0),o.name||S(!1))}return!0},E=()=>{v(!0),m(!0),h(!1),k(!0),f("0"),j(!1),F(!1)},G=()=>{l.current=null,f("0"),E(),y("")};return e.jsxs(W,{children:[e.jsx("div",{children:"Upload Image to S3"}),e.jsx("div",{className:"upload-pec-main-content",children:e.jsxs("div",{id:"uploadprescriptions",children:[e.jsxs("div",{className:"flex items-center justify-center w-full",children:[P&&e.jsxs("label",{htmlFor:"dropzone-file",className:"upload-container",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(V,{}),e.jsxs("p",{className:"mb-2 text-sm text-black opactiy-80",children:[e.jsxs("span",{className:"poppins-medium",children:["Drag and Drop file here or"," "]}),e.jsx("u",{className:"poppins-semibold",children:"Choose file"})]})]}),e.jsx("input",{id:"dropzone-file",accept:"image/*",onChange:T,type:"file",className:"hidden"})]}),I&&e.jsx("div",{className:"progress-container",children:e.jsxs("div",{className:"progress-barwrap flex_center flexdirection_col",children:[D&&e.jsxs("div",{className:"flex flex-col items-center mb-10",children:[" ",e.jsx(q,{})]}),e.jsx("div",{id:"progressBar",className:"progress-bar",children:e.jsx("div",{className:"progress-div",style:{width:`${g}%`}})})]})}),U&&e.jsx("img",{className:"uploadprescriptions",src:w.publicUrl})]}),e.jsxs("div",{className:"support-text-box-sec",children:[e.jsx("span",{className:"flex-col",children:"Supported format: PNG, SVG, JPG"}),e.jsx("span",{className:"flex-col",children:"Maximum size: 20 MB"})]}),e.jsxs("div",{className:"flex actions-btn-sec-content",children:[e.jsx("div",{className:"flex-column",children:e.jsx("div",{className:"uploadprescriptions-leftbtns flex_center",children:e.jsx("button",{type:"button",onClick:G,className:"saved-prescription-btn poppins-medium",children:"Clear Image"})})}),e.jsx("div",{className:"uploadprescriptions-rightbtns flex_center",children:e.jsx("button",{id:"uploadsubmitbtn",className:"submit-prescription-btn poppins-medium button-shadow",type:"submit",onClick:M,disabled:C,children:"Submit"})})]})]})}),e.jsxs("div",{children:["ImageURL: ",w.publicUrl]})]})};export{pe as default};
