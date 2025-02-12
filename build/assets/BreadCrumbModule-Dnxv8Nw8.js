import{d as t,u as i,j as e,aB as l}from"./index-BHf3qlKB.js";const d=t.div`
  .line-item-text {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.21px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .breadcrumb1-row {
      display: none;
    }
  }
`,j=n=>{const{medicines:c,itemDetail:m,moduleName:x,itemModuleName:u,SelectedCategory:p,list:r}=n,o=i(),a=s=>{o.push(s)};return e.jsx(e.Fragment,{children:e.jsx(d,{children:e.jsxs("div",{className:"breadcrumb1-row",children:[e.jsx("span",{className:"line-item-text",onClick:()=>{a("/")},children:"Home"}),r==null?void 0:r.map(s=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"line-item-dd",children:e.jsx(l,{})}),e.jsx("span",{className:"line-item-text",onClick:()=>{a(s==null?void 0:s.link)},children:s==null?void 0:s.title})]}))]})})})};export{j as B};
