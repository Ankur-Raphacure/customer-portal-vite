import{d as V,r as i,u as X,b as Y,a as m,aD as A,aE as E,bJ as D,bK as U,j as e,aw as ee,ax as te,ay as se,er as ae}from"./index-CitTC1Lo.js";import{C as ie,g as z}from"./CartItemsSection-mZrJxjbg.js";import{a as oe}from"./add_new_member-ghMM4HNA.js";const ne=V.div`
  width: 100%;
  padding-top: 24px;
  .cart-full-page {
    width: 90%;
    margin: auto;
  }
  .cart-page-content {
    display: flex;
    gap: 1.5rem;
  }
  .depends-user-box-all {
    // display: flex;
    // gap: 20px;
    margin-top: 20px;
    display: flow-root;
    .user_sec_user,
    .depends-user-box {
      width: 100px;
      float: left;
      margin-bottom: 20px;
    }
  }
  .profile_imgwrap {
    width: 4.75rem;
    height: 90px;
    cursor: pointer;
    border-radius: 0.625rem;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 8px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
  }
  .profile_img {
    width: 2.25rem;
    height: 2.5rem;
    border-radius: 100%;
    margin: auto;
    object-fit: cover;
  }
  .profile_imgname {
    font-size: 0.625rem;
    margin-top: 0.5rem;
    color: #000;
  }
  .active_user {
    .profile_imgwrap {
      background: rgb(255, 111, 164);
    }
    .profile_imgname {
      color: rgb(255, 255, 255);
    }
  }
  .no-results-sec {
    text-align: center;
    padding-top: 100px;
    min-height: 600px;
    button {
      border-radius: 45px;
      border: none;
      /* width: 100%; */
      font-size: 18px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      background: #252b61;
      color: #fff;
      padding: 5px 20px;
    }
  }
  .cart-content-left {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 65%;
    padding: 20px;
  }
  .cart-content-right {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 35%;
    padding: 20px;
  }
  .cart-top-back {
    margin-bottom: 24px;
  }
  .cart-address-top {
    display: flex;
    gap: 14px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 760px) {
      flex-direction: column-reverse;
    }
  }
  .cart-address-right {
    @media (max-width: 760px) {
      display: flex;
    }
    button {
      @media (max-width: 760px) {
        margin-left: auto;
      }
    }
  }
  .cart-right-header {
    color: #000;
    opacity: 0.5;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .cart-address-left {
    width: 70%;
    @media (max-width: 760px) {
      width: 100%;
    }
  }
  .cart-right-customers {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 24px;
    > div {
      width: 76px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      height: 76px;
      text-align: center;
      justify-content: center;
      padding: 7px;
    }
    .customer-box-img {
      height: 40px;
      width: 40px;
      background: #fbbc04;
      margin: auto;
      border-radius: 50px;
    }
    .customer-box-name {
      color: #000;
      font-size: 10px;
      margin-top: 7px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .cart-right-saved-address button {
    border-radius: 5px;
    border: 1px solid #ac9494;
    height: 44px;
    background: #ffffff;
    font-size: 14px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
    width: 47.549%;
    padding: 0;
  }
  .cart-right-address {
    border-radius: 10px;
    border: 1px solid #e2e2e2;
    padding: 10px;
    width: 100%;
    // display: flex;

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 200% */
      opacity: 0.7;
      margin-bottom: 5px;
      display: grid;
      grid-template-columns: 150px calc(100% - 150px);
      span {
        display: block;
        text-transform: capitalize;
      }
    }
    button {
      // opacity: 0.7;
      color: #9747ff;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      padding: 2px 13px;
      border-radius: 4px;
      background: no-repeat;
      border: 1px solid #9747ff;
    }
  }
  .cart-right-saved-address {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 30px;
    @media (max-width: 760px) {
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
  .cart-right-delivery-slots {
    display: flex;
    gap: 20px;
  }
  .slots-box {
    border-radius: 10px;
    background: #fff;
    display: flex;
    gap: 14px;
    padding: 14px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    p {
      color: #000;
      // font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 0px;
    }
  }
  .cart-right-saved-address .rapha-select {
    height: 46px;
  }
  .rapha-select__control {
    height: 46px;
  }
  .add-new-address-btn {
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: normal;
    padding: 10px 21px;
    height: 46px;
  }
  .cart-right-delivery-time {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  }
  .cart-content-right-actions {
    display: flex;
    gap: 2rem;
    margin-top: 50px;
    button {
      width: 100%;
      height: 50px;
    }
    .cancel-btn {
      color: #9747ff;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.28px;
      border-radius: 10px;
      border: 1px solid #9747ff;

      opacity: 0.5;
    }
    .save-btn {
      color: #f5f5f5;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.28px;
      border-radius: 10px;
      background: #9747ff;
      border: none;
    }
  }
  @media (max-width: 768px) {
    .cart-page-content {
      flex-direction: column;
      gap: 1rem; /* Adjust the gap for mobile view */
    }

    .cart-content-left,
    .cart-content-right {
      width: 100%;
    }
  }
`,me=()=>{var C;const[re,de]=i.useState(null),[le,ce]=i.useState(!1),[a,l]=i.useState({}),[P,pe]=i.useState({}),c=X(),r=Y(),{user:xe}=m(t=>t.auth),{cartItems:d}=m(t=>t.checkout),[T,H]=i.useState(""),[L,b]=i.useState(!1),[B,v]=i.useState(!1),[I,u]=i.useState(!1),{selectedCurrentAddress:y}=m(t=>t.profile),[F,h]=i.useState(!1),[s,p]=i.useState({}),{userDependents:n,userAddress:x}=m(t=>t.profile),o=(C=d==null?void 0:d.carts)==null?void 0:C.filter(t=>{var g;return((g=t.medicines)==null?void 0:g.length)>0});i.useEffect(()=>{var t;((t=d==null?void 0:d.carts)==null?void 0:t.length)>0&&(o==null?void 0:o.length)===0?c.push("/checkout"):(r(A()),r(E()))},[]),i.useEffect(()=>{(n==null?void 0:n.length)>0&&!(s!=null&&s.id)&&p(n[0]),(x==null?void 0:x.length)>0&&!(a!=null&&a.id)&&l(x[0])},[]),i.useEffect(()=>{s!=null&&s.id&&r(D(s))},[s]),i.useEffect(()=>{l(y)},[y]),i.useEffect(()=>{a!=null&&a.id&&r(U(a))},[a]);const G=()=>{v(!0),s!=null&&s.id&&(a!=null&&a.id)&&c.push("/checkout")},$=()=>{v(!0),c.push("/pharmacy")},J=()=>{h(!0),p({})},K=()=>{h(!0)},O=t=>{u(!1),r(E()),console.log("addedData",t),l(t==null?void 0:t.address)},Q=t=>t!=null&&t.image?t==null?void 0:t.image:(t==null?void 0:t.gender)==="male"?z:z,R=t=>{p(t)},W=async t=>{var S,N,k,_,M;h(!1),console.log("uData",t),(S=t==null?void 0:t.user)!=null&&S.id&&p(t==null?void 0:t.user),b(!0);const g=s!=null&&s.id?"Successfully Updated the Member Details":"Successfully Added the new Member.";H(g);const w=await r(A()),f=(M=(_=(k=(N=w==null?void 0:w.payload)==null?void 0:N.data)==null?void 0:k.me)==null?void 0:_.dependents)==null?void 0:M.find(j=>(j==null?void 0:j.id)===(s==null?void 0:s.id));f!=null&&f.id&&p(f)},Z=t=>{l(t)},q=()=>{l({}),u(!0)};return console.log("selectedUser",s),console.log("paharmacyProducts",o),e.jsx(ne,{children:e.jsx("div",{children:(o==null?void 0:o.length)===0||!(o!=null&&o.length)?e.jsxs("div",{className:"no-results-sec",children:[e.jsx("p",{children:"No Items found in your cart."}),e.jsx("button",{onClick:()=>{c.push("/")},children:"Go to home page"})]}):e.jsxs("div",{className:"cart-full-page",children:[e.jsx(ee,{show:F,onHide:()=>{h(!1)},selectedMember:s,addUserSuccess:W}),e.jsx(te,{show:I,onHide:()=>{u(!1)},addUserSuccess:O,selectedMember:P}),e.jsx(se,{show:L,titleText:T,deleteText:"ok",cancelText:"",onCancel:()=>b(!1),onDelete:()=>b(!1)}),e.jsx("div",{className:"cart-top-back",children:e.jsxs("span",{onClick:()=>{c.goBack()},className:" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 ",children:[e.jsx("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z",fill:"#444444"})})," "," "," Back"]})}),e.jsxs("div",{className:"cart-page-content",children:[e.jsxs("div",{className:"cart-content-left",children:[e.jsx("div",{className:"cart-right-header",children:"Patient Details & Select Time Slot"}),e.jsx("div",{className:"cart-right-customers12",children:e.jsxs("div",{className:"depends-user-box-all",children:[n==null?void 0:n.map(t=>e.jsx("div",{className:(t==null?void 0:t.id)==(s==null?void 0:s.id)?"active_user user_sec_user":"user_sec_user",children:e.jsxs("div",{onClick:()=>{R(t)},className:"profile_imgwrap",children:[e.jsx("img",{className:"profile_img",src:Q(t),alt:t==null?void 0:t.first_name}),e.jsx("div",{className:"profile_imgname",children:t==null?void 0:t.relation})]})})),e.jsx("div",{className:"depends-user-box",children:e.jsxs("div",{className:"profile_imgwrap",onClick:J,children:[e.jsx("img",{className:"profile_img",src:oe,alt:"Add new Member"}),e.jsx("div",{className:"profile_imgname",children:"Add Member"})]})})]})}),e.jsxs("div",{className:"cart-right-address",children:[e.jsxs("div",{className:"cart-address-top",children:[e.jsxs("div",{className:"cart-address-left",children:[e.jsxs("p",{children:[e.jsx("span",{children:"Full Name"}),e.jsxs("span",{children:[":"," ",`${s==null?void 0:s.first_name} ${s==null?void 0:s.last_name}`," "]})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Gender "})," ",e.jsxs("span",{children:[": ",s==null?void 0:s.gender]})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Age"})," ",e.jsxs("span",{children:[": ",s==null?void 0:s.age]})]}),e.jsxs("p",{children:[e.jsx("span",{children:" Email ID"})," ",e.jsxs("span",{children:[": ",s==null?void 0:s.email]})]}),e.jsxs("p",{children:[e.jsx("span",{children:"Phone Number"})," ",e.jsxs("span",{children:[": +91 ",s==null?void 0:s.phone]})]})]}),e.jsx("div",{className:"cart-address-right",children:e.jsx("button",{onClick:K,children:"Edit"})})]}),e.jsxs("p",{children:[e.jsx("span",{children:" Address "}),e.jsxs("span",{children:[": ",a==null?void 0:a.address,",",e.jsx("br",{}),a==null?void 0:a.city," ",a==null?void 0:a.state," ",a==null?void 0:a.zip]})]})]}),e.jsxs("div",{className:"cart-right-saved-address",children:[e.jsx(ae,{index:0,addressList:x,address:a,selectSavedAddress:Z}),e.jsx("button",{onClick:()=>{q()},children:"Add New Address"})]}),B&&!(a!=null&&a.id)&&e.jsx("p",{className:"error_message",children:" Please select Address"})]}),e.jsxs("div",{className:"cart-content-right",children:[e.jsx("div",{className:"cart-content-right-item",children:e.jsx(ie,{})}),e.jsxs("div",{className:"cart-content-right-actions",children:[e.jsx("button",{onClick:$,className:"cancel-btn",children:"Cancel"}),e.jsx("button",{onClick:G,className:"save-btn",children:"Continue"})]})]})]})]})})})};export{me as default};
