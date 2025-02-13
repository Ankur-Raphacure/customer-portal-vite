import{d as $,j as e,r as g,b as I,aA as B,s as A,S as U,B as G,t as N,dK as H,hh as V,hi as X,hj as K,hk as Y,hl as q,bN as J,hm as Q}from"./index-f4owDEOR.js";import{a as Z,D as ee,P as te,S as ae,V as W,T as v,F as x}from"./react-pdf.browser-CVrFlObK.js";import{S as ne}from"./ShareModal--BCEfD1p.js";const oe=$.div`
  width: 100%;
  .banner-div {
    background-image: linear-gradient(#c7e6ff, #ffffff);
  }

  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-div img {
    margin-top: 3rem;
  }
  .card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .card {
    margin-bottom: 4rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%;
    height: 5rem;
    border-radius: 8px;
  }
  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-body h4 {
    width: 39px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #a6a6a6;
    height: 12px;
    margin-bottom: 2rem;
  }
  .sub-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    position: absolute;
    width: 65%;
    height: 3rem;
    border: 1px solid #a6a6a6;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;
    border-radius: 8px;
  }
  .sub-card h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #a6a6a6;
    height: 12px;
    margin-top: 2rem;
  }
  .card-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .name-display {
    width: 100%;
    padding: 2rem;
  }
  .name-display h4 {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 2rem;
  }
  .day-div {
    /* width: 45px; */
    font-size: 16px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 600;
    color: #9747ff;
    /* height: 12px; */
  }
  .list-div {
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .slot-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 4rem;
    padding: 2rem;
  }
  .slot-title {
    /* width: 90px; */
    font-size: 14px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 600;
    color: #424346;
    /* height: 12px; */
  }
  .timeSlot {
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      padding: 0;
      width: 100%;
      li {
        justify-content: center;
        padding: 10px;
        input {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          width: 100%;
        }
      }
    }
  }
  .name-div {
    padding: 15px;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .name-div p {
    margin: 0;
  }
  .btn-div button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    border-radius: 3px;
    background-color: #9747ff;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;
    color: #fff;
    border: none;
  }
  .btn-div {
    padding: 1rem;
    display: flex;
    justify-content: end;
    margin-right: 3rem;
  }

  .button-with-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0f988e;
    font-family: "Istok Web", sans-serif;
    letter-spacing: 1px;
    padding: 0 12px;
    text-align: center;
    width: 120px;
    height: 40px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 3px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transform: translateY(0px);
    position: relative;
    box-shadow: inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3),
      inset 0 1px 20px rgba(0, 0, 0, 0), 0 3px 0 #0f988e,
      0 3px 2px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1),
      0 10px 20px rgba(0, 0, 0, 0.1);
    background: #15ccbe;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transition: 150ms all ease-in-out;
  }

  .button-with-icon .icon {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    transition: all 0.5s ease-in-out;
  }

  .button-with-icon:active {
    transform: translateY(3px);
    box-shadow: inset 0 16px 2px -15px rgba(0, 0, 0, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 20px rgba(0, 0, 0, 0.1), 0 0 0 #0f988e,
      0 0 0 2px rgba(255, 255, 255, 0.5), 0 0 0 rgba(0, 0, 0, 0),
      0 0 0 rgba(0, 0, 0, 0);
  }

  .button-with-icon:hover .text {
    transform: translateX(150px);
  }
  .button-with-icon:hover .icon {
    transform: translate(30px);
  }

  .text {
    transition: all 0.5s ease-in-out;
  }
  .button {
    position: relative;
    width: 150px;
    height: 43px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #17795e;
    background-color: #209978;
    overflow: hidden;
  }

  .button,
  .button__icon,
  .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    color: #fff;
    font-weight: 600;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #17795e;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button .svg {
    width: 20px;
    fill: #fff;
  }

  .button:hover {
    background: #17795e;
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  .button:active .button__icon {
    background-color: #146c54;
  }

  .button:active {
    border: 1px solid #146c54;
  }

  .weeks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btn-div {
    gap: 1rem;
    align-items: center;
    .update-button {
      height: 100%;
    }
  }
`;x.register({family:"Noto Sans",src:"/fonts/NotoSans-Regular.ttf"});x.register({family:"Noto Sans Bengali",src:"/fonts/NotoSansBengali-Regular.ttf"});x.register({family:"Noto Sans Devanagari",src:"/fonts/NotoSansDevanagari-Regular.ttf"});x.register({family:"Noto Sans Gujarati",src:"/fonts/NotoSansGujarati-Regular.ttf"});x.register({family:"Noto Sans Gurmukhi",src:"/fonts/NotoSansGurmukhi-Regular.ttf"});x.register({family:"Noto Sans Kannada",src:"/fonts/NotoSansKannada-Regular.ttf"});x.register({family:"Noto Sans Malayalam",src:"/fonts/NotoSansMalayalam-Regular.ttf"});x.register({family:"Noto Sans Oriya",src:"/fonts/NotoSansOriya-Regular.ttf"});x.register({family:"Noto Sans Tamil",src:"/fonts/NotoSansTamil-Regular.ttf"});x.register({family:"Noto Sans Telugu",src:"/fonts/NotoSansTelugu-Regular.ttf"});const ie={en:"Noto Sans",gu:"Noto Sans Gujarati",hi:"Noto Sans Devanagari",kn:"Noto Sans Kannada",mr:"Noto Sans Devanagari",or:"Noto Sans Oriya",pa:"Noto Sans Gurmukhi",ta:"Noto Sans Tamil",te:"Noto Sans Telugu",ml:"Noto Sans Malayalam",bn:"Noto Sans Bengali"},se=m=>ie[m]||"Noto Sans",re=({selectedWeekData:m,language:u="en"})=>{const f=Object.keys(Object.values(m)[0]),j=se(u),a=ae.create({page:{padding:20,fontSize:12,flexDirection:"column",fontFamily:j},grid:{display:"flex",flexDirection:"column",marginBottom:20},row:{display:"flex",flexDirection:"row",marginBottom:5},headerRow:{display:"flex",flexDirection:"row",marginBottom:10},headerCell:{flex:1,fontSize:14,fontWeight:"bold",textAlign:"center",paddingBottom:5,borderBottom:"2px solid black"},card:{flex:1,border:"1px solid #ccc",borderRadius:5,padding:10,margin:2,textAlign:"center"},dayTitle:{fontSize:14,fontWeight:"bold",marginBottom:5},mealItems:{fontSize:10,textAlign:"center"},footer:{textAlign:"center",marginTop:20,padding:20,backgroundColor:"#e0f7e0",borderRadius:5},downloadButton:{marginTop:10,fontSize:14,fontWeight:"bold",textAlign:"center",padding:8,backgroundColor:"#008000",color:"#fff",borderRadius:5,width:"100%"}});return e.jsx(Z,{width:"100%",height:"600px",children:e.jsx(ee,{children:e.jsxs(te,{size:"A4",style:a.page,children:[e.jsxs(W,{style:a.headerRow,children:[e.jsx(v,{style:a.headerCell,children:"Day"}),f.map(r=>e.jsx(v,{style:a.headerCell,children:r},r))]}),e.jsx(W,{style:a.grid,children:Object.entries(m).map(([r,w])=>e.jsxs(W,{style:a.row,children:[e.jsx(v,{style:[a.card,{fontWeight:"bold"}],children:r.replace("_"," ")}),f.map(S=>e.jsx(W,{style:a.card,children:w[S].map((k,i)=>e.jsxs(v,{style:a.mealItems,children:["• ",k]},i))},S))]},r))}),e.jsxs(W,{style:a.footer,children:[e.jsx(v,{style:{fontSize:25,fontWeight:600,marginBottom:20},children:"Take a Look at My Personalized Diet Plan!"}),e.jsx(v,{style:{fontSize:12,fontWeight:"bold"},children:"Hi, I’ve been working on my health and just created a personalized diet plan using RaphaCure. It’s simple, healthy, and tailored to my goals, so I thought you might find it useful too! I’d love to hear your thoughts or if you have any suggestions!"}),e.jsx(v,{style:a.downloadButton,children:"DOWNLOAD CHART"})]})]})})})},le=({showModal:m,onClose:u,selectedWeekData:f})=>{const[j,a]=g.useState(f||[]),[r,w]=g.useState(!1);g.useEffect(()=>{a(f)},[f]);const[S,k]=g.useState("en"),i=I(),_=[{value:"en",label:"English"},{value:"hi",label:"Hindi"}],z=async(n,s)=>{var p;try{const l=await i(H({query:n,targetLang:s}));return(p=l==null?void 0:l.payload)==null?void 0:p.translatedText}catch(l){return console.error(`Error translating text "${n}" to language "${s}":`,l),n}},T=async n=>{var s;k(n),F(n),N.info(`Language changed to ${(s=_.find(p=>p.value===n))==null?void 0:s.label}`)},R=async(n,s)=>{const p={};w(!0);for(const[l,D]of Object.entries(n)){p[l]={};for(const[C,L]of Object.entries(D))try{const P=await Promise.all(L.map(async O=>await z(O,s)));p[l][C]=P}catch(P){console.error(`Error translating ${C} on ${l}:`,P),p[l][C]=L}}return w(!1),p},F=async n=>{console.log("selectedWeekData : ",j);const s=await R(j,n);console.log("translated : ",s),a(s)};return e.jsxs(B,{show:m,onHide:u,size:"lg",children:[e.jsx(B.Header,{closeButton:!0,children:e.jsx(B.Title,{children:"Diet Plan Preview"})}),e.jsx(B.Body,{children:e.jsxs(e.Fragment,{children:[r&&e.jsx(A,{}),e.jsx("div",{style:{marginBottom:"1rem"},children:e.jsx(U,{showSearch:!0,placeholder:"Choose Language",value:S,onChange:T,style:{width:"100%"},options:_,optionFilterProp:"label",getPopupContainer:n=>n.parentNode,filterOption:(n,s)=>s.label.toLowerCase().includes(n.toLowerCase())})}),e.jsx(re,{selectedWeekData:j})]})}),e.jsx(B.Footer,{children:e.jsx(G,{variant:"secondary",onClick:u,children:"Close"})})]})},ce=[{id:1,title:"Week",number:1,name:"Week-1"},{id:2,title:"Week",number:2,name:"Week-2"},{id:3,title:"Week",number:3,name:"Week-3"},{id:4,title:"Week",number:4,name:"Week-4"}],de=["Breakfast","Lunch","Dinner"],xe=m=>{var M;const{id:u}=(M=m.match)==null?void 0:M.params,f=I(),[j,a]=g.useState(!1),[r,w]=g.useState({}),[S,k]=g.useState(!1),[i,_]=g.useState(null),[z,T]=g.useState(!1),[R,F]=g.useState({}),n=window.location.href,s=t=>{_(t)};g.useEffect(()=>{if(!u){N.error("Booking Id is not available");return}l()},[]);const p=async t=>{var h;if(!u){N.error("Booking Id is not available");return}const o=await f(Q({booking_id:u,dietPlan:t}));if(o!=null&&o.error){N.error(((h=o==null?void 0:o.error)==null?void 0:h.message)||"Unknown Error Occured");return}N.success("Diet Plan Updated Successfully"),l()},l=async()=>{var c,o,h;a(!0);const t=await f(V(u));if(t!=null&&t.error){N.error(((c=t==null?void 0:t.error)==null?void 0:c.message)||"Unknown Error Occured"),a(!1);return}if((h=(o=t==null?void 0:t.payload)==null?void 0:o.data)!=null&&h.dietPlan){const b=t.payload.data.dietPlan,d={};Object.keys(b).forEach(y=>{const E=y.charAt(0).toUpperCase()+y.slice(1);d[E]=b[y]}),w(d)}a(!1)},D=i?r[`Week_${i}`]:null,C=(t,c,o,h)=>{if(!i)return;const b=`Week_${i}`,d={...r[b]},y=[...d[t][c]];y[o]=h,d[t]={...d[t],[c]:y},w({...r,[b]:d})},L=t=>{F(c=>({...c,[t]:!0}))},P=t=>{F(c=>({...c,[t]:!1}))},O=()=>{console.log("Updated dietPlan:",r),p(r)};return e.jsxs(oe,{children:[j&&e.jsx(A,{}),e.jsx(ne,{show:z,url:n,title:"Share on",handleClose:()=>{T(!1)},onCopyClick:()=>{navigator.clipboard.writeText(n)}}),e.jsxs("div",{className:"banner-div",children:[e.jsx("div",{className:"img-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1737354499805.png",alt:"Fruit"})}),e.jsx("div",{className:"card-container",children:ce.map(t=>e.jsx("div",{className:"card-div",children:e.jsx("div",{className:`card ${i===t.id?"selected":""}`,onClick:()=>s(t.id),children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{style:{color:i===t.id?"#9747ff":"black"},children:t.title}),e.jsx("div",{className:"sub-card",style:{color:i===t.id?"#9747ff":"black",border:i===t.id?"1px solid #9747ff":"1px solid #ccc"},children:e.jsx("h4",{style:{color:i===t.id?"#9747ff":"black"},children:t.number})})]})})},t.id))})]}),e.jsxs("div",{className:"list-div",children:[D?Object.entries(D).map(([t,c])=>e.jsxs("div",{className:"weeks",children:[e.jsx("h4",{className:"day-div",children:t.replace("_"," ")}),e.jsx("div",{className:"slot-div",children:de.map(o=>e.jsxs("div",{className:"timeSlot",children:[e.jsx("h4",{className:"slot-title",children:o}),e.jsx("ul",{children:(c[o]||[]).map((h,b)=>{const d=`${t}_${o}_${b}`;return e.jsx("li",{className:"name-div",children:R[d]?e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:h,onChange:y=>C(t,o,b,y.target.value)}),e.jsx(X,{style:{cursor:"pointer",marginLeft:"8px",color:"green"},onClick:()=>P(d)})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:h}),e.jsx(K,{style:{cursor:"pointer",marginLeft:"8px",color:"#9747ff"},onClick:()=>L(d)})]})},d)})})]},o))})]},t)):e.jsx("p",{children:"Please select a week to view the diet plan."}),e.jsx("div",{className:"btn-div",children:i&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"button",type:"button",onClick:()=>k(!0),children:[e.jsxs("span",{className:"button__text",children:["Download Week ",i]}),e.jsx("span",{className:"button__icon",children:e.jsx(Y,{className:"svg"})})]}),e.jsxs("button",{className:"button-with-icon",onClick:()=>{T(!0)},children:[e.jsx(q,{className:"icon"}),e.jsx("span",{className:"text",children:"Share"})]}),e.jsx("div",{className:"update-btn-div",children:e.jsx(J,{className:"update-button",onClick:O,children:"Update Diet Plan"})})]})})]}),e.jsx(le,{showModal:S,onClose:()=>k(!1),selectedWeekData:D})]})};export{xe as default};
