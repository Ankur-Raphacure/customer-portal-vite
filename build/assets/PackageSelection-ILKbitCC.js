import{d as b,r as m,j as e,b as R,u as G,q as W,k as Y,a as J,s as K,l as Q,c as U,v as X}from"./index-f4owDEOR.js";const P=b.div`
    .page-heading{
        margin :20px 0 35px 0;
    }
    .package-title-name-div{
        display:flex;
        justify-content:left;
        gap:10px;
        margin:20px 0;
        align-items: center;
    }
    .package-name{
        margin:0;
    }
    .actual-price{
        color:#1c3173;
        font-weight:bold;
    }
    .actual-price-cut{
        text-decoration: line-through;
        color:#818181;
    }
    .discounted-price{
        color:#1c3173;
    }
    .card-price-div{
        display:flex;
        gap:5px;
    }
    .card-book-btn-div{
        display:flex;
        justify-content:center;
    }
    .packages-div{
        display:flex;
        justify-content:center;
        gap:40px;
        margin:20px 0;
        padding: 30px;
        overflow-x: auto;
    }
    .discount-badge{
        position:absolute;
        right:-12px;
        top:35px;
    }
`,F=b.button`
    background:${s=>s!=null&&s.selected?"#002366":"white"};
    color: ${s=>s!=null&&s.selected?"white":"#002366"};
    padding: 10px 15px;
    border: 1px solid #002366;
    border-radius: 24px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;
    &:hover {
        background: #001a44;
    }
`,k=b.div`
  .accordion-wrapper {
    width: 100%;
    max-width: 2xl;
    margin: 0 auto;
    padding: 1rem;
  }

  .accordion-item {
    margin-bottom: 1rem;
    width: 100%;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .accordion-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
  }

  .accordion-title {
    font-size: 1.125rem;
    font-weight: 500;
    color: #111827;
  }

  .icon-wrapper {
    transform: ${s=>s.$isOpen?"rotate(45deg)":"rotate(0)"};
    transition: transform 0.2s ease-in-out;
  }

  .content-wrapper {
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
    max-height: ${s=>s.$isOpen?"24rem":"0"};
  }

  .content {
    padding: ${s=>s.$isOpen?"1rem":"0"};
    color: #4b5563;
  }
`,e1=({title:s,isOpen:h,onClick:r,content:c})=>e.jsxs("div",{className:"accordion-item",role:"button",onClick:r,children:[e.jsxs("div",{className:"accordion-header",children:[e.jsx("h3",{className:"accordion-title",children:s}),e.jsx("span",{className:"icon-wrapper",children:e.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})})})]}),e.jsx("div",{className:"content-wrapper",children:e.jsx("div",{className:"content",children:c})})]}),i1=()=>{const[s,h]=m.useState({}),r=[{id:1,title:"Terms & Conditions",content:`Memberships purchased are strictly non-transferable and non-refundable, ensuring fairness and consistency for all members. Members are required to present their valid ID cards for access to the
gym premises and facilities. The membership benefits and access are limited to the specified duration as per the chosen plan. In special cases, such as medical emergencies, memberships may be
temporarily suspended or extended, but only upon submission of valid supporting documents. Any form of inappropriate behavior, damage to gym property, or misuse of facilities will lead to
immediate termination of membership without the possibility of a refund. Additionally, members are expected to adhere to the gym's code of conduct and policies at all times to maintain a safe and
friendly environment.`},{id:2,title:"Privacy Policy",content:`Memberships purchased are strictly non-transferable and non-refundable, ensuring fairness and consistency for all members. Members are required to present their valid ID cards for access to the
gym premises and facilities. The membership benefits and access are limited to the specified duration as per the chosen plan. In special cases, such as medical emergencies, memberships may be
temporarily suspended or extended, but only upon submission of valid supporting documents. Any form of inappropriate behavior, damage to gym property, or misuse of facilities will lead to
immediate termination of membership without the possibility ofa refund. Additionally, members are expected to adhere to the gym's code of conduct and policies at all times to maintain a safe and
friendly environment.`},{id:3,title:"Cancellation & Refund Policies",content:`Memberships purchased are strictly non-transferable and non-refundable, ensuring fairness and consistency for all members. Members are required to present their valid ID cards for access to the
gym premises and facilities. The membership benefits and access are limited to the specified duration as per the chosen plan. In special cases, such as medical emergencies, memberships may be
temporarily suspended or extended, but only upon submission of valid supporting documents. Any form of inappropriate behavior, damage to gym property, or misuse of facilities will lead to
immediate termination of membership without the possibility of a refund. Additionally, members are expected to adhere to the gym's code of conduct and policies at all times to maintain a safe and
friendly environment.`}],c=t=>{h(d=>({...d,[t]:!d[t]}))};return e.jsx(k,{$isOpen:s,children:e.jsx("div",{className:"accordion-wrapper",children:r.map(t=>e.jsx(e1,{title:t.title,content:t==null?void 0:t.content,isOpen:s[t.id],onClick:()=>c(t.id)},t.id))})})},s1=b.div`
  background: white;
  padding: 20px;
  border-radius: 30px;
  box-shadow: ${s=>s!=null&&s.selected?"0 4px 10px rgba(0, 0, 0, 0.2)":"0 2px 5px rgba(0, 0, 0, 0.1)"};
  flex-basis: ${s=>s!=null&&s.selected?"355px":"330px"};
  border: ${s=>s!=null&&s.selected?"2px solid #00bcd4":"none"};
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  flex-grow: 0;
  position:relative;
  scale: ${s=>s!=null&&s.selected?"1.1":"1"};
`,t1=()=>{var C,y,L,j,w,u,g,N,_,M,p,$;const s=R(),h=G(),r=W(),{fitnessCenterID:c,packageID:t}=Y(),[d,q]=m.useState(t),[a,a1]=m.useState((C=r.state)==null?void 0:C.selectedFitnessCenter),[V,n1]=m.useState(!1);m.useEffect(()=>{console.log("sel",a)},[]);const z=[{title:"Fitness",link:"/fitness_v2"},{title:"Gyms",link:"/fitnessCenters"},{title:(L=(y=r.state)==null?void 0:y.selectedFitnessCenter)==null?void 0:L.name,link:`/fitnessCenters/${(N=(g=(u=(w=(j=r.state)==null?void 0:j.selectedFitnessCenter)==null?void 0:w.name)==null?void 0:u.split)==null?void 0:g.call(u," "))==null?void 0:N.join("-")}/${(M=(_=r.state)==null?void 0:_.selectedFitnessCenter)==null?void 0:M.id}`},{title:"packages",link:`/fitnessCenters/bookingConformation/${c}/${t}`}],{user:v}=J(i=>i.auth),E=async i=>{var l,S,I,D,A,B,H,Z,O,T;const f={address:(l=a==null?void 0:a.vendor)==null?void 0:l.address,city:(S=a==null?void 0:a.vendor)==null?void 0:S.city,id:(I=a==null?void 0:a.vendor)==null?void 0:I.id,image:(D=a==null?void 0:a.images)==null?void 0:D.find(o=>(o==null?void 0:o.length)>0),name:(A=a==null?void 0:a.vendor)==null?void 0:A.name,state:(B=a==null?void 0:a.vendor)==null?void 0:B.state,type:"gym",zip:(H=a==null?void 0:a.vendor)==null?void 0:H.zip};let n;i?n=(Z=a==null?void 0:a.packages)==null?void 0:Z.find(o=>(o==null?void 0:o.service_code)===i):n=(O=a==null?void 0:a.packages)==null?void 0:O.find(o=>(o==null?void 0:o.service_code)===d);const x={visit_type:n==null?void 0:n.visit_type,service_name:n==null?void 0:n.service_name,service_code:n==null?void 0:n.service_code,price:n==null?void 0:n.price,preperation:n==null?void 0:n.preperation,image:(T=n==null?void 0:n.image)==null?void 0:T.find(o=>(o==null?void 0:o.length)>0),description:n==null?void 0:n.description};console.log("selected",a),console.log("pack",n),v!=null&&v.id?(await s(X({doctorDetails:x,hospitalDetails:f,categoryType:"gym",slot1:{},slot2:{}})),h.push("/gym/bookingReview")):s(U(!0))};return e.jsxs(P,{children:[V&&e.jsx(K,{}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"breadcrumb",children:e.jsx(Q,{moduleName:"gym",list:z})}),e.jsx("div",{className:"page-heading",children:e.jsx("h2",{children:"Choose Your Membership"})}),e.jsx("div",{className:"packages-div",children:($=(p=a==null?void 0:a.packages)==null?void 0:p.map)==null?void 0:$.call(p,i=>{var f,n,x,l;return e.jsxs(s1,{selected:(i==null?void 0:i.service_code)===d,onClick:()=>q(i==null?void 0:i.service_code),children:[e.jsx("div",{className:"discount-badge",children:e.jsxs("svg",{width:"91",height:"46",viewBox:"0 0 91 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M91 5C91 2.23858 88.7614 0 86 0H18C8.05887 0 0 8.05887 0 18V18C0 27.9411 8.05888 36 18 36H91V5Z",fill:"#89DB7B"}),e.jsx("path",{d:"M79 36H91L79 46V36Z",fill:"#2C7420"}),e.jsxs("text",{x:"15%",y:"50%",fill:"black",children:["Save ",(f=i==null?void 0:i.price)==null?void 0:f.discount_percentage,"%"]})]})}),e.jsxs("div",{className:"package-title-name-div",children:[e.jsx("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{opacity:"0.8","fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 0C27.9405 0 36 8.05737 36 17.9985C36 27.9395 27.9406 36 18 36C8.05943 36 0 27.9396 0 17.9985C0 8.0573 8.05844 0 18 0ZM24.6888 23.6154C24.3025 23.8458 23.8649 23.9766 23.4155 23.9961L22.0502 24.0577C21.8259 24.0658 21.6047 24.1131 21.3967 24.1974C21.2381 24.2644 21.0896 24.353 20.9554 24.4608L23.2709 29.4264L23.8978 27.0848C23.9043 27.0567 23.9137 27.0293 23.9259 27.0031C23.9477 26.9562 23.9784 26.9141 24.0165 26.8791C24.0545 26.8442 24.0991 26.8171 24.1476 26.7994C24.1962 26.7817 24.2477 26.7737 24.2993 26.776C24.351 26.7782 24.4016 26.7907 24.4484 26.8126L26.6614 27.845L24.6891 23.6154H24.6888ZM15.0426 24.4608C14.9084 24.3529 14.7598 24.2643 14.6011 24.1974C14.3932 24.1131 14.1722 24.0658 13.948 24.0577L12.5825 23.9961C12.133 23.9766 11.6954 23.8458 11.309 23.6154L9.33715 27.845L11.55 26.8126C11.6034 26.7877 11.6618 26.7751 11.7207 26.7758C11.7796 26.7765 11.8377 26.7904 11.8905 26.8165C11.9433 26.8427 11.9896 26.8804 12.0259 26.9268C12.0622 26.9733 12.0875 27.0273 12.1001 27.0848L12.7273 29.4264L15.0426 24.4608ZM20.309 8.00168L19.2995 7.07976C18.9447 6.75419 18.4806 6.57356 17.9991 6.57356C17.5175 6.57356 17.0534 6.75419 16.6986 7.07976L15.689 8.00168C15.224 8.43573 14.6176 8.68662 13.9819 8.70794L12.6161 8.76954C12.1355 8.79118 11.6804 8.99183 11.3403 9.33205C11.0002 9.67227 10.7997 10.1274 10.7781 10.608L10.7163 11.9738C10.6949 12.6095 10.4441 13.216 10.0101 13.6811L9.08817 14.6903C8.76266 15.0453 8.58206 15.5093 8.58206 15.9909C8.58206 16.4725 8.76266 16.9366 9.08817 17.2916L10.0101 18.3012C10.4444 18.7662 10.6953 19.3729 10.7163 20.0088L10.7782 21.3741C10.7997 21.8547 11.0003 22.3099 11.3404 22.6501C11.6805 22.9903 12.1356 23.191 12.6162 23.2126L13.9819 23.2742C14.6176 23.2955 15.2241 23.5464 15.6891 23.9804L16.6987 24.9025C17.0535 25.228 17.5176 25.4086 17.9991 25.4086C18.4807 25.4086 18.9447 25.228 19.2996 24.9025L20.3091 23.9804C20.7741 23.5464 21.3806 23.2955 22.0163 23.2742L23.382 23.2126C23.8626 23.1912 24.3178 22.9906 24.658 22.6504C24.9982 22.3101 25.1986 21.8548 25.22 21.3741L25.2819 20.0088C25.3027 19.3729 25.5536 18.7662 25.988 18.3014L26.9098 17.2918C27.2361 16.9372 27.4173 16.4729 27.4175 15.991H27.4159C27.416 15.5093 27.2353 15.0451 26.9096 14.6901L25.9879 13.6809C25.5535 13.2159 25.3026 12.6091 25.2818 11.9732L25.2198 10.6078C25.1985 10.1272 24.998 9.67187 24.6579 9.33161C24.3177 8.99135 23.8625 8.79076 23.3819 8.76933L22.0162 8.70773C21.3804 8.6864 20.774 8.4355 20.3089 8.00147L20.309 8.00168ZM18.3584 10.8602C18.3281 10.7899 18.278 10.7301 18.2141 10.688C18.1502 10.646 18.0754 10.6235 17.9989 10.6235C17.9224 10.6235 17.8476 10.646 17.7837 10.688C17.7198 10.7301 17.6697 10.7899 17.6394 10.8602L16.2407 14.0952L12.7585 14.4233C12.6794 14.4252 12.6027 14.4509 12.5385 14.497C12.4742 14.5431 12.4254 14.6076 12.3983 14.6819C12.3713 14.7563 12.3672 14.837 12.3868 14.9137C12.4064 14.9904 12.4486 15.0593 12.508 15.1116L15.1533 17.4419L14.3892 20.8565C14.367 20.9321 14.3681 21.0126 14.3924 21.0876C14.4166 21.1625 14.4628 21.2285 14.525 21.2768C14.5872 21.3251 14.6625 21.3536 14.7411 21.3586C14.8197 21.3636 14.898 21.3448 14.9657 21.3047L17.9993 19.509L21.0327 21.3047L21.0334 21.3038C21.099 21.3427 21.1747 21.3616 21.251 21.3581C21.3273 21.3546 21.4009 21.3288 21.4627 21.2839C21.5246 21.2391 21.5719 21.1771 21.5989 21.1056C21.626 21.0342 21.6315 20.9564 21.6148 20.8819L20.8447 17.4422L23.4901 15.112L23.4896 15.111C23.547 15.0604 23.5884 14.9941 23.6085 14.9203C23.6287 14.8465 23.6269 14.7684 23.6033 14.6957C23.5796 14.6229 23.5352 14.5586 23.4756 14.5108C23.4159 14.4629 23.3435 14.4335 23.2673 14.4263L19.7575 14.0958L18.3582 10.8608L18.3584 10.8602ZM19.1302 14.6193L17.999 12.0024L16.8753 14.6015C16.8495 14.6704 16.8048 14.7307 16.7464 14.7755C16.688 14.8203 16.6181 14.8477 16.5448 14.8546L13.7085 15.1218L15.846 17.0054L15.8451 17.0063C15.8978 17.0525 15.937 17.112 15.9588 17.1786C15.9806 17.2451 15.9841 17.3163 15.969 17.3847L15.3462 20.1669L17.7934 18.7184C17.8542 18.681 17.9241 18.6609 17.9954 18.6604C18.0668 18.6598 18.1369 18.6788 18.1983 18.7153L20.651 20.1668L20.0356 17.4174C20.0131 17.345 20.0119 17.2675 20.0324 17.1944C20.0529 17.1213 20.0941 17.0557 20.151 17.0055L22.2893 15.1218L19.4531 14.8546V14.8541C19.3832 14.8474 19.3164 14.8221 19.2596 14.7808C19.2029 14.7395 19.1582 14.6837 19.1303 14.6193H19.1302Z",fill:"#1C3173"})}),e.jsx("h5",{className:"package-name",children:i==null?void 0:i.service_name})]}),e.jsx("div",{children:e.jsxs("h2",{className:"actual-price",children:["₹",(n=i==null?void 0:i.price)==null?void 0:n.discounted_price]})}),e.jsxs("div",{className:"card-price-div",children:[e.jsx("h5",{children:"discount"}),e.jsxs("h5",{className:"actual-price-cut",children:["₹",(x=i==null?void 0:i.price)==null?void 0:x.actual_cost]}),e.jsxs("h5",{className:"discounted-price",children:["₹",(l=i==null?void 0:i.price)==null?void 0:l.discounted_price]})]}),e.jsx("div",{children:e.jsx("p",{dangerouslySetInnerHTML:{__html:i==null?void 0:i.description}})}),e.jsx("div",{className:"card-book-btn-div",children:e.jsx(F,{onClick:()=>E(i==null?void 0:i.service_code),selected:(i==null?void 0:i.service_code)===d,children:"Book Now"})})]},i==null?void 0:i.service_code)})}),e.jsx("div",{children:e.jsx(i1,{})})]})]})};export{t1 as default};
