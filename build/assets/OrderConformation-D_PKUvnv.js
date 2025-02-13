import{d as O,u as T,r as d,b as v,j as n,aA as y}from"./index-f4owDEOR.js";const D=O.div`
  .order-conformation-top {
    text-align: center;
    padding: 0px 80px;
    h2 {
      color: #000;

      //   font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.25px;
      margin-top: 23px;
      margin-bottom: 16px;
    }
    p {
      color: rgba(0, 0, 0, 0.6);

      text-align: center;
      //   font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 166.667% */
      letter-spacing: 0.15px;
      margin-bottom: 24px;
    }
  }
  .order-conformation-middle {
    padding: 0px 80px;
    h4 {
      color: var(--gray-80, #5e6366);
      //   font-family: Oswald;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.15px;
      margin-bottom: 16px;
      text-align: center;
    }

    .row-order-box {
      gap: 20px;
      display: flex;
      margin-bottom: 30px;
      img {
        width: 140px;
        height: 140px;
      }

      p:nth-child(1) {
        color: #212121;
        // font-family: Oswald;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.15px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      p:nth-child(2) {
        color: var(--gray-80, #5e6366);
        // font-family: Oswald;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.1px;
        margin-bottom: 16px;
      }
      p:nth-child(3) {
        margin-bottom: 16px;
        color: #000;
        // font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
      }

      p:nth-child(4) {
        margin-bottom: 5px;
        color: #212121;
        // font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.1px;
      }
      p {
        margin-bottom: 7px !important;
      }
    }
  }
  .order-conformation-bottom {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 60px;
    button {
      padding: 8px 50px;
      background-color: #9747ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      height: 50px;
      font-size: 18px;
      /* width: 200px; */
      margin-bottom: 20px;
      // width: 275px;
    }
    .continue-shopping-btn {
      background: #fff;
      color: #9747ff;
      border: 1px solid #9747ff;
    }
  }
`,z=i=>{const u=T(),{user:o,handleOrderTracking:s,subDomainDetails:r,paymentObj:w}=i,[I,_]=d.useState("");v();const[C,B]=d.useState("rgb(255, 255, 255)"),S=async(l,t)=>{var p,m,f;console.log("Encrypted wyhUserId: ",l),console.log("orderRes : ",t);const h="https://aalizwell.in/api";try{const a=await(await fetch(`${h}/EncryptDecrypt/RSADecrypt`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({str:[l]})})).json();if(!(a!=null&&a.success)||((p=a==null?void 0:a.data)==null?void 0:p.length)===0||!((m=a==null?void 0:a.data[0])!=null&&m.decryptedStr)){console.error("Decryption failed or invalid response",a);return}const k=a.data[0].decryptedStr;console.log("Decrypted User ID: ",k);const e=await(await fetch(`${h}/MarketPlace/GetToken`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({PartnerId:"hSG+yRSxdXXnLCS/lGFGuGawykpzwBVYjMvQk40VMOdIRrQJOkQp7yjN/BEkRD+sRMZ8nck+4hYBosPVj0k8SkDNggH7ZiKciyIGkBJgrse4hvYDm9yCjHhSfZJIgIebWcKmE3aNtuFk6Nh9bX8i1g26Yfob9yZuE/wONlq9oR4="})})).json();if(!(e!=null&&e.success)||!((f=e==null?void 0:e.data)!=null&&f.authToken)){console.error("Token generation failed or invalid response",e);return}const x=e.data.authToken;console.log("Auth Token: ",x);const j={UserId:l||"Unknown",paymentStatus:(t==null?void 0:t.status)||"Pending",modeofPayment:"GooglePay",paymentDate:t!=null&&t.updated_at?new Date(t.updated_at).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],paymentTime:t!=null&&t.updated_at?new Date(t.updated_at).toLocaleTimeString():new Date().toLocaleTimeString(),paymentThruGateway:(t==null?void 0:t.razorpay_order_id)||"Unknown",paymentConfirmationID:(t==null?void 0:t.razorpay_payment_id)||"Unknown",typeofServicesBooked:"Self",dateofServiceBookedOn:t!=null&&t.created_at?new Date(t.created_at).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],dateofServicesBookedfor:t!=null&&t.updated_at?new Date(t.updated_at).toISOString().split("T")[0]:new Date().toISOString().split("T")[0],timeofServicesBookedfor:"1 months",servicesBookedFor:"SELF",orderID:(t==null?void 0:t.id)||"Unknown",orderstatus:(t==null?void 0:t.status)||"Unknown",invoice:t!=null&&t.id?`INV${t.id}`:"Unknown Invoice",reports:"RPt1",orderSummary:t!=null&&t.id?`Order Summary for ${t.id}`:"Order Summary Unknown",refundStatus:"N/A",refundID:null,refundRequestDate:null,refundProcessedDate:null,paymentSettlementDate:t!=null&&t.updated_at?new Date(t.updated_at).toISOString().split("T")[0]:null,paymentDetails:"Payment done now booked",modeOfRefund:null,cancellationOfservices:null,wrongOrder:null},c=await(await fetch(`${h}/MarketPlace/TransactionDetails`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${x}`},body:JSON.stringify(j)})).json();if(!(c!=null&&c.success)){console.error("Transaction failed or invalid response",c);return}console.log("Transaction successfully completed: ",c)}catch(g){console.error("Error in handleWyhBooking:",g)}};d.useEffect(()=>{if(console.log("props : ",i),i!=null&&i.showModal&&(r==null?void 0:r.subdomain_key)==="wyh"){const l=o==null?void 0:o.wyhUserId;l&&S(l,w)}},[i]);const b=()=>{u.push("/")};return n.jsx(n.Fragment,{children:n.jsx(y,{show:i==null?void 0:i.showModal,onHide:i==null?void 0:i.handleModalShow,centered:!0,className:"model-product-order-conformation",children:n.jsx(y.Body,{children:n.jsxs(D,{children:[n.jsxs("div",{className:"order-conformation-top",children:[n.jsxs("div",{children:[n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",children:[n.jsx("g",{"clip-path":"url(#clip0_3986_213437)",children:n.jsx("path",{d:"M24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44ZM22.006 32L36.146 17.858L33.318 15.03L22.006 26.344L16.348 20.686L13.52 23.514L22.006 32Z",fill:"#12B886"})}),n.jsx("defs",{children:n.jsx("clipPath",{id:"clip0_3986_213437",children:n.jsx("rect",{width:"48",height:"48",fill:"white"})})})]}),n.jsx("h2",{children:"Your Booking has been successfully created!!"})]}),n.jsx("p",{children:"Once Booking is Confirmed we will update to you. "})]}),n.jsxs("div",{className:"order-conformation-middle",children:[n.jsx("h4",{children:"Order ID: #ORD1234567890"}),n.jsx("div",{})]}),n.jsx("div",{className:"order-conformation-bottom",children:o!=null&&o.from_hr&&(o==null?void 0:o.loginType)!="doctorDashboard"?n.jsx("div",{children:n.jsx("button",{className:"continue-shopping-btn",onClick:s,children:"Go to HR Dashboard"})}):o!=null&&o.from_hr&&(o==null?void 0:o.loginType)=="doctorDashboard"?n.jsx("div",{children:n.jsx("button",{className:"continue-shopping-btn",onClick:s,children:"Go to Doctor Dashboard"})}):n.jsxs(n.Fragment,{children:[n.jsx("div",{children:n.jsx("button",{className:"continue-shopping-btn",onClick:b,children:"Continue Shopping"})}),n.jsx("div",{className:"bottom-button--tracking",children:n.jsx("button",{onClick:s,children:"Order Tracking"})})]})})]})})})})};export{z as O};
