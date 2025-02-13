import{d as O,b as U,r as x,u as H,j as s,F as Q,f as J,B,h as M,t as K}from"./index-f4owDEOR.js";import{P as V}from"./PrescriptionDocument-Bv9U5xnh.js";import"./react-pdf.browser-CVrFlObK.js";const X=O.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 3rem;
  button {
    width: fit-content;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  /* Prescription Container */
  .prescription-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    margin-bottom: 16px;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .presc-wrapper {
    width: 100%;
  }

  .profile-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  .user-info {
    color: #333;
  }

  .user-name {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
  }

  .user-details,
  .purpose {
    font-size: 0.9em;
    margin: 4px 0;
  }

  .user-details span,
  .purpose span {
    font-weight: bold;
  }

  .appointment-info {
    text-align: right;
    color: #555;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  .doctor-name {
    font-size: 1em;
    font-weight: bold;
    margin: 0;
  }

  .date,
  .time,
  .mode {
    font-size: 0.9em;
    margin: 4px 0;
  }

  .date span,
  .time span,
  .mode span {
    font-weight: bold;
  }
  .tables-wrapper {
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #333;
  }

  .table-section {
    margin-bottom: 2rem;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fafafa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 1rem;
    color: #555;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background-color: #f0f0f0;
  }

  th,
  td {
    padding: 0.8rem;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 14px;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  .total-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-weight: bold;
    color: #444;
  }

  button {
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background-color: #5a4dc8;
  }
  .btnWrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    button {
      width: fit-content;
      margin: 0;
    }
  }
`,D=p=>{var g,m,b,w,y,v,N,P;const{prescId:c}=(g=p==null?void 0:p.match)==null?void 0:g.params,f=U(),[e,E]=x.useState(),A=H(),[F,u]=x.useState(!1),[I,W]=x.useState({}),G=async()=>{if(!c)return;const o=await f(M(c)),d=o==null?void 0:o.payload;console.log("data : ",d),E(d)};x.useEffect(()=>{G()},[c]);const L=async()=>{if(console.log("id : ",c),!c){K.error("Prescription ID Not found");return}const o=await f(M(c)),d=o==null?void 0:o.payload;W(d),u(!0)},R=()=>{A.push("/cart")},q=()=>{var k,T,S,C,z;if(!e||!e.attachments)return null;const o=((T=(k=e.attachments[0])==null?void 0:k.prescriptions_medicines)==null?void 0:T.filter(t=>{var n;return((n=t==null?void 0:t.medicine)==null?void 0:n.category_key)==="branded"}))||[],d=((C=(S=e.attachments[0])==null?void 0:S.prescriptions_medicines)==null?void 0:C.filter(t=>{var n;return((n=t==null?void 0:t.medicine)==null?void 0:n.category_key)==="generic"}))||[],j=((z=e.attachments[0])==null?void 0:z.prescriptions_tests)||[],_=(t,n)=>s.jsxs("div",{className:"table-section",children:[s.jsx("h3",{children:t}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Sl No"}),s.jsx("th",{children:"Brand"}),s.jsx("th",{children:"Dosage"}),s.jsx("th",{children:"Type"}),s.jsx("th",{children:"Qty"}),s.jsx("th",{children:"Frequency"}),s.jsx("th",{children:"No Of Days"}),s.jsx("th",{children:"Intake"}),s.jsx("th",{children:"Price"})]})}),s.jsx("tbody",{children:n.map((r,a)=>{var l,i,h;return s.jsxs("tr",{children:[s.jsx("td",{children:a+1}),s.jsx("td",{children:(l=r==null?void 0:r.medicine)==null?void 0:l.service_name}),s.jsx("td",{children:r==null?void 0:r.dosage}),s.jsx("td",{children:"Tablet"}),s.jsx("td",{children:r==null?void 0:r.count}),s.jsx("td",{children:r==null?void 0:r.frequency}),s.jsx("td",{children:r==null?void 0:r.no_of_days}),s.jsx("td",{children:r==null?void 0:r.intake}),s.jsx("td",{children:(h=(i=r==null?void 0:r.medicine)==null?void 0:i.price)==null?void 0:h.actual_cost})]},r==null?void 0:r.id)})})]}),s.jsx("div",{className:"total-section",children:s.jsxs("span",{children:["Total:"," ",n.reduce((r,a)=>{var l,i;return r+((i=(l=a==null?void 0:a.medicine)==null?void 0:l.price)==null?void 0:i.actual_cost)},0)]})})]});return s.jsxs("div",{className:"tables-wrapper",children:[o.length>0&&_("Branded Medicines",o),d.length>0&&_("Generic Medicines",d),j.length>0&&s.jsxs("div",{className:"table-section",children:[s.jsx("h3",{children:"Lab Tests/Scan Check Up Prescribed By Doctor"}),s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Sl No"}),s.jsx("th",{children:"Lab Test Name"}),s.jsx("th",{children:"Type"}),s.jsx("th",{children:"Parameters"}),s.jsx("th",{children:"Price"})]})}),s.jsx("tbody",{children:j.map((t,n)=>{var r,a,l,i,h;return s.jsxs("tr",{children:[s.jsx("td",{children:n+1}),s.jsx("td",{children:(r=t==null?void 0:t.test)==null?void 0:r.service_name}),s.jsx("td",{children:(l=(a=t==null?void 0:t.test)==null?void 0:a.service_code)!=null&&l.startsWith("ctmri")?"Scan / Ctmri":"Lab Test"}),s.jsx("td",{children:"3"}),s.jsx("td",{children:(h=(i=t==null?void 0:t.test)==null?void 0:i.price)==null?void 0:h.actual_cost})]},t==null?void 0:t.id)})})]}),s.jsx("div",{className:"total-section",children:s.jsxs("span",{children:["Total:"," ",j.reduce((t,n)=>{var r,a;return t+((a=(r=n==null?void 0:n.test)==null?void 0:r.price)==null?void 0:a.actual_cost)},0)]})})]})]})};return s.jsxs(X,{children:[s.jsxs("div",{className:"presc-wrapper",children:[s.jsxs("div",{className:"prescription-container",children:[s.jsxs("div",{className:"profile-section",children:[s.jsx(Q,{size:32}),s.jsxs("div",{className:"user-info",children:[s.jsxs("h2",{className:"user-name",children:[((m=e==null?void 0:e.user)==null?void 0:m.first_name)||""," ",((b=e==null?void 0:e.user)==null?void 0:b.last_name)||""]}),s.jsxs("p",{className:"user-details",children:["Age: ",s.jsx("span",{children:((w=e==null?void 0:e.user)==null?void 0:w.age)||""})," Gender:"," ",s.jsx("span",{children:((y=e==null?void 0:e.user)==null?void 0:y.gender)||""})]}),s.jsxs("p",{className:"user-details",children:["DOB: ",s.jsx("span",{children:((v=e==null?void 0:e.user)==null?void 0:v.dob)||""})," Phone:"," ",s.jsx("span",{children:((N=e==null?void 0:e.user)==null?void 0:N.phone)||""})]}),s.jsxs("p",{className:"purpose",children:["Purpose: ",s.jsxs("span",{children:[" ",J((e==null?void 0:e.type)||"")]})]})]})]}),s.jsxs("div",{className:"appointment-info",children:[s.jsxs("p",{className:"doctor-name",children:["DR. ",(P=e==null?void 0:e.doctor)==null?void 0:P.name]}),s.jsxs("p",{className:"date",children:["Date: ",s.jsxs("span",{children:[" ",e==null?void 0:e.collection_1_date]})]}),s.jsxs("p",{className:"time",children:["Time:",s.jsx("span",{children:e==null?void 0:e.collection_1_slot})]})]})]}),s.jsx(q,{})]}),s.jsxs("div",{className:"btnWrapper",children:[s.jsx(B,{className:"download",onClick:L,children:"Download PDF"}),s.jsx(B,{onClick:R,children:"Go To Patient Cart"})]}),s.jsx(V,{data:I,showPreviewModal:F,setShowPreviewModal:u})]})};export{D as default};
