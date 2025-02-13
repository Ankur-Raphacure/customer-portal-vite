import{d as O,u as R,b as V,r as t,a as z,j as e,hD as q,hE as W,hF as Y,bG as K,bH as Q,hG as X}from"./index-CitTC1Lo.js";const Z=O.div`
  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .main-heading {
    display: flex;
    justify-content: center;
    font-size: 22px;
    padding: 29px 0px 0px 0px;
    font-weight: 600;
    font-family: inter;
  }

  .main-content {
    padding: 0rem 20rem;
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
    background-color: rgba(37, 43, 97, 0.1);
    border: 3px dashed #252b61;
    box-sizing: border-box;
    height: 300px;
    text-align: center;
    padding-top: 92px;
    cursor: pointer;

    &:hover {
      background: #252b6133;
    }
  }

  .uploaded-image-container {
    width: 100%;
    height: 300px;
    margin-top: 30px;
    border: 3px dashed #252b61;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(37, 43, 97, 0.1);
  }

  .uploaded-image {
    margin: 10px 0px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .progress-container {
    width: 100%;
    margin-top: 15px;
    height: 231px;
    border: 3px dashed #252b61;
    border-radius: 10px;
    cursor: pointer;
    background: rgba(37, 43, 97, 0.1);

    &:hover {
      background: #252b6133;
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
          background: #252b61;
          height: 100%;
        }
      }
    }
  }

  .upload-prescription-url {
    display: flex;
    justify-content: center;
  }
  .copy-url-btn {
    position: relative;
    border-radius: 10px;
    background-color: #252b61;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-family: inter;
    line-height: 27px;
    @media only screen and (min-width: 1024px) {
      padding: 15px 20px;
    }
  }

  .copy-success-message {
    margin-left: 10px;
    font-size: 1rem;
    font-family: inter;
    font-weight: 600;
    color: #252b61;
  }

  .drag-drop {
    font-size: 16px;
    margin-top: 10px;
    font-weight: 500;
    font-family: inter;
    opacity: 0.7;
  }

  .actions-btn-sec-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 36px;
    margin-bottom: 16px;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 20rem;

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
    border: 1px solid #252b61;
    box-sizing: border-box;
    width: 100%;
    padding: 7.5px 9px;
    color: #252b61;
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
    background-color: #252b61;
    padding: 7px 22px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-family: inter;
    line-height: 27px;
    @media only screen and (min-width: 1024px) {
      padding: 13px 44px;
    }
  }
  .support-text-box-sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    position: relative;
    font-size: 18px;
    font-family: inter;
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
`,xe=()=>{R();const y=V(),[n,w]=t.useState(""),[ee,te]=t.useState("Upload Prescription"),[I,h]=t.useState(!0),[U,g]=t.useState(!1),[j,C]=t.useState(!1),[D,k]=t.useState(!0),[T,v]=t.useState(!1),[b,x]=t.useState("0"),[se,ie]=t.useState(""),[ne,S]=t.useState(!0),[oe,F]=t.useState(!1),[ae,re]=t.useState(!0),[le,N]=t.useState(!1),{cartItems:pe}=z(s=>s.checkout),{user:L}=z(s=>s.auth),[B,_]=t.useState(!1),G=()=>{n!=null&&n.publicUrl&&navigator.clipboard.writeText(n.publicUrl).then(()=>{_(!0),setTimeout(()=>_(!1),3e3)})},p=t.useRef(null);localStorage.getItem("raphaPrescriptions");const[de,ce]=t.useState("");t.useEffect(()=>{b==="0"&&S(!0)},[b]);const E=s=>{p.current;const o=s.target.files;let a=[];for(let d=0;d<o.length;d++){const l=o[d];if(l&&(l!=null&&l.type.startsWith("image/"))){const c=new FileReader;c.onloadstart=()=>{h(!1),g(!0)},c.onprogress=r=>{if(r.lengthComputable){const f=r.loaded/r.total*100;x(`${f}`)}},c.onload=()=>{var P;x("0");const r=1e3,f=50,i=r/f;let u=0;const m=()=>{const H=u/i*100;x(`${H}`),u++,u<=i?setTimeout(m,f):(x("100"),k(!1),v(!0))};setTimeout(m,f),a.push(l),p.current?p.current.push((P=p.current)==null?void 0:P.files,a):p.current=[...a]},c.readAsDataURL(l)}else p.current=null}},M=async s=>{var o,a,d,l,c;try{const r={id:`${L.id}`,ext:".png"},f=await y(K(r)),i=JSON.parse(JSON.stringify(f)),u=(a=(o=i==null?void 0:i.payload)==null?void 0:o.signedUrL)==null?void 0:a.signedUrL,m=(l=(d=i==null?void 0:i.payload)==null?void 0:d.signedUrL)==null?void 0:l.publicUrl;return await Q.put(u,s,{headers:{"Content-Type":"image/png"}}),y(X("Image Uploaded Successfully")),w((c=i==null?void 0:i.payload)==null?void 0:c.signedUrL),C(!0),h(!1),g(!1),m}catch(r){throw console.error("Error uploading image to S3:",r),r}},$=async()=>{const s=p.current;if(!s||s.length===0){alert("At least one file is required.");return}for(let o=0;o<s.length;o++){const a=s[o];a&&a.name&&(M(s[o]),N(!0),a.name||N(!1))}return!0},J=()=>{S(!0),h(!0),g(!1),k(!0),x("0"),v(!1),F(!1)},A=()=>{p.current=null,x("0"),J(),w("")};return e.jsxs(Z,{children:[e.jsx("div",{className:"main-heading",children:"Upload Your Image"}),e.jsx("div",{className:"upload-pec-main-content",children:e.jsxs("div",{id:"uploadprescriptions",children:[e.jsxs("div",{className:"main-content flex items-center justify-center w-full",children:[I&&e.jsxs("label",{htmlFor:"dropzone-file",className:"upload-container",children:[e.jsxs("div",{className:" flex flex-col items-center justify-center",children:[e.jsx(q,{}),e.jsxs("p",{className:"drag-drop",children:[e.jsx("span",{children:"Drag and Drop file here or "}),e.jsx("u",{children:"Choose file"})]})]}),e.jsx("input",{id:"dropzone-file",accept:"image/*",onChange:E,type:"file",className:"hidden"})]}),U&&e.jsx("div",{className:"progress-container",children:e.jsxs("div",{className:"progress-barwrap flex_center flexdirection_col",children:[T&&e.jsxs("div",{className:"flex flex-col items-center mb-10",children:[" ",e.jsx(W,{})]}),e.jsx("div",{id:"progressBar",className:"progress-bar",children:e.jsx("div",{className:"progress-div",style:{width:`${b}%`}})})]})}),j&&(n==null?void 0:n.publicUrl)&&e.jsx("div",{className:"uploaded-image-container",children:e.jsx("img",{className:"uploaded-image",src:n.publicUrl,alt:"Uploaded"})})]}),e.jsxs("div",{className:"support-text-box-sec",children:[e.jsxs("span",{className:"flex-col",children:["Supported format: ",e.jsx("span",{children:" PNG, SVG, JPG "})]}),e.jsxs("span",{className:"flex-col",children:["Maximum size: ",e.jsx("span",{children:"20 MB"})]})]}),e.jsxs("div",{className:"flex actions-btn-sec-content",children:[e.jsx("div",{className:"flex-column",children:e.jsx("div",{className:"uploadprescriptions-leftbtns flex_center",children:e.jsx("button",{type:"button",onClick:A,className:"saved-prescription-btn poppins-medium",children:"Clear Image"})})}),e.jsx("div",{className:"uploadprescriptions-rightbtns flex_center",children:e.jsx("button",{id:"uploadsubmitbtn",className:"submit-prescription-btn poppins-medium button-shadow",type:"submit",onClick:$,disabled:D,children:"Submit"})})]})]})}),e.jsx("div",{className:"upload-prescription-url",children:j&&(n!=null&&n.publicUrl)?e.jsxs("div",{className:"copy-url-section",children:[e.jsxs("button",{className:"copy-url-btn poppins-medium",onClick:G,children:[" ",e.jsx(Y,{style:{width:"20px",height:"20px"}}),"Copy URL"]}),B&&e.jsx("span",{className:"copy-success-message",children:"URL Copied!"})]}):null})]})};export{xe as default};
