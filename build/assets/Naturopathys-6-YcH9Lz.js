import{d as u,u as y,b as x,a as c,r as i,j as e,hc as v,he as j}from"./index-f4owDEOR.js";import{C as T}from"./CentresCard-LTHii7AO.js";const N=u.div`
  .btn-div button {
    border: 1px solid #000;
    margin-left: 0.5rem;
  }
  .btn-div .Custome-btn.active {
    color: #9747ff;
    border-color: #9747ff;
  }
  .back-btn {
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    text-align: left;
    opacity: 0.8;
  }
  .icon-btn {
    opacity: 0.8;
  }
  .custom-search {
    box-shadow: 2px 2px 18px rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    background-color: #9747ff;
    height: 40px;
    color: #fff;
  }
`,C=()=>{var o;const l=y(),h=x(),{allNaturopathyList:r}=c(a=>a.generic),{userCity:n}=c(a=>a.auth),[t,m]=i.useState("Physio Therapy"),d=a=>{l.push(a)},p=(a="bengaluru")=>{h(j({city:a==null?void 0:a.toLowerCase()}))};i.useEffect(()=>{p(n==null?void 0:n.name)},[n==null?void 0:n.name]);const s=a=>{m(a)};return e.jsx(N,{children:e.jsxs("div",{className:"container mt-4",children:[e.jsxs("button",{className:"btn back-btn mb-3",onClick:()=>{d("/ayurveda")},children:[e.jsx(v,{className:"icon-btn me-1"}),"Back"]}),e.jsxs("div",{className:"btn-div",children:[e.jsx("button",{className:`btn Custome-btn ${t==="Physio Therapy"?"active":""}`,onClick:()=>s("Physio Therapy"),children:"Physio Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t==="Mud Therapy"?"active":""}`,onClick:()=>s("Mud Therapy"),children:"Mud Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t===" Massage Therapy"?"active":""}`,onClick:()=>s(" Massage Therapy"),children:"Massage Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t==="Aroma Therapy"?"active":""}`,onClick:()=>s("Aroma Therapy"),children:"Aroma Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t==="Helio Therapy"?"active":""}`,onClick:()=>s("Helio Therapy"),children:"Helio Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t==="Diet Therapy"?"active":""}`,onClick:()=>s("Diet Therapy"),children:"Diet Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t==="Fasting Therapy"?"active":""}`,onClick:()=>s("Fasting Therapy"),children:"Fasting Therapy"}),e.jsx("button",{className:`btn Custome-btn ${t==="Hydro Therapy"?"active":""}`,onClick:()=>s("Hydro Therapy"),children:"Hydro Therapy"})]}),e.jsx("div",{className:"container mt-4",children:e.jsx("form",{className:"form-inline my-2 my-lg-0 w-50",children:e.jsxs("div",{className:"input-group w-100",children:[e.jsx("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search"}),e.jsx("div",{className:"input-group-append",children:e.jsx("button",{className:"btn btn-outline custom-search",type:"submit",children:"Search"})})]})})}),e.jsxs("div",{className:"container mt-4",children:[e.jsx("h4",{className:"mb-4",children:`Available ${t} Centers`}),e.jsx("div",{className:"row",children:(o=r==null?void 0:r.vendors)==null?void 0:o.map((a,b)=>e.jsx("div",{className:"col-md-3 mb-4",children:e.jsx(T,{item:a})},b))})]})]})})};export{C as default};
