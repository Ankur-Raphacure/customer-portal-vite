import{d as o,r as p,u as b,j as e,eO as w,eP as j,eQ as v,eR as y,eS as k,eT as z,b as N,b4 as S}from"./index-DDOdRoFT.js";const C=o.div`
  .sec-near-you {
    margin-left: 0px !important;
    padding-left: 0px !important;
  }

  .slot {
    background-image: url(/assets/images/labtests/slotbg.png);
    background: #f03e7f;
    width: 50%;
    float: right;

    font-size: 10px;
    color: #ffff;
    font-weight: 100px;
    text-align: center;
    opacity: 100%;
  }

  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btn-view-text {
    color: #9747ff;
    text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #9747ff;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 46px;
    margin-top: 16px;
  }
  .heading-name-rating {
    // height: 24px;
    margin-top: 10px !important;
  }

  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
    }
  }
  .svg-info-icon {
    margin-top: -4px;
    margin-left: 5px;
  }
  .cardstyle {
    width: 100%;
    height: auto;
    flex-shrink: 0;

    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }

  .rating {
    // color: #000;
    /* font-family: Poppins; */
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .locatio-name-sec-row {
    color: #000;
    /* font-family: Poppins; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 7px;
  }
  .locatio-name-sec-row img,
  .locatio-name-sec-row svg {
    height: 14px;
    width: 14px;
    margin-right: 5px;
  }
  .rating-sec-box {
    text-align: right;
    margin-top: -26px;
  }
  .rating-sec-box-text {
    background: #89a80c;
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 5px;
  }
  .heading-name-rating h3 {
    margin-top: 3px;
  }
  .more-labs-action-btns {
    display: flex;
    margin-top: 1rem;
    gap: 12px;
    button {
      width: 100%;
      height: 39px;
    }
    .view-details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      border: none;
      margin-top: 0;
    }
  }
  .labs-near-sec-name {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .tests-include-list {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 6px;
  }
  .amount-box {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 5px;
  }
`,T=o.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  border-radius: 15px;

  .wrapper {
    width: 100%;
    height: 100%;
    padding-right: 38px;
  }

  .wrapper > div {
    width: 100%;
    height: 100%;
  }

  .mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;
    height: 90vh;
  }

  .logoDiv {
    width: fit-content;
    height: fit-content;
  }

  div.logoDiv > img {
    border-radius: 10px;
    max-width: 230px;
    object-fit: scale-down;
  }

  .info {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    gap: 2rem;
    align-items: center;
  }

  .listWrapper {
    width: 100%;
    height: fit-content;
    display: grid;
    font-size: 0.9rem;
  }

  .btnWrapper {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;
    padding-right: 20px;

    margin-top: -2rem;
    width: auto;
    margin-left: 68%;
  }
  .btn-book-now {
    width: auto;
  }
  .btnWrapper > div {
    /* width: fit-content; */
    height: fit-content;
  }

  .details {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }

  .details h1 {
    font-size: 1.2rem;
    margin: 0.5rem;
  }

  .package-container {
  }

  .package-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .package-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }

  .package-price {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .price-amount {
    font-weight: bold;
    color: #000;
  }

  .sample-required {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 1rem;
  }

  .sample-type {
    font-weight: bold;
    margin-left: 5px;
  }

  .text-sample {
    display: flex;
    align-items: center;
    color: green;
  }

  .preparation {
    margin-top: 20px;
  }

  .preparation h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .preparation ul {
  }

  .preparation ul li {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }

  // Responsive styling
  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;

    .info {
      flex-direction: column;
      gap: 1rem;
    }

    .btnWrapper {
      justify-content: center;
    }

    .details h1 {
      font-size: 1rem;
    }

    .package-title {
      font-size: 20px;
    }

    .package-price {
      font-size: 16px;
    }

    .preparation h3 {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;

    .details h1 {
      font-size: 0.9rem;
    }

    .package-title {
      font-size: 18px;
    }

    .package-description,
    .package-price,
    .preparation ul li {
      font-size: 12px;
    }

    .preparation h3 {
      font-size: 14px;
    }
  }
`,D=o.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999999;
`,_=o.button`
  background: red;
  border: none;
  border-radius: 25%;
  color: white;
  font-size: 1.2rem;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`,u="/assets/ayurveda_img-RtjEhrr8.png",F=o.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`,h=o.a`
  display: flex;
  align-items: center;
  padding: 5px;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #007bff;
  }
`,I=({url:t})=>{const a=encodeURIComponent(t);return e.jsxs(F,{children:[e.jsx(h,{href:`https://www.facebook.com/sharer/sharer.php?u=${a}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(y,{size:30})}),e.jsx(h,{href:`https://api.whatsapp.com/send?text=${a}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(k,{size:30})}),e.jsx(h,{href:`https://twitter.com/intent/tweet?url=${a}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(z,{size:30})})]})},O=({item:t,onClose:a,fromPackage:i})=>{const g=(s,r)=>{const n=[];for(let c=0;c<(s==null?void 0:s.length);c+=r)n.push(s.slice(c,c+r));return n},[d,f]=p.useState(!1),m=b(),l=g((t==null?void 0:t.tests)||[],9);console.log("testChunks*****",l);const x=l.length?`repeat(${l.length}, 1fr)`:"1fr";return e.jsxs(e.Fragment,{children:[e.jsx(D,{onClick:a}),e.jsxs(T,{children:[e.jsx(_,{onClick:a,children:e.jsx(w,{size:30})}),e.jsx("div",{className:"wrapper",children:e.jsxs("div",{className:"mainDiv",children:[e.jsxs("div",{className:"info",children:[e.jsx("div",{className:"logoDiv",children:e.jsx("img",{src:t!=null&&t.image?t.image:u,alt:""})}),e.jsxs("div",{className:"package-container",children:[e.jsx("h2",{className:"package-title",children:t.service_name}),e.jsx("p",{className:"package-description",children:t.description||""}),e.jsxs("div",{className:"package-price",children:[e.jsx("span",{children:"Price "}),e.jsxs("span",{className:"price-amount",children:["₹",t.price.discounted_price,".00"]}),e.jsx(j,{})]}),e.jsxs("div",{className:"sample-required",children:[e.jsx("span",{children:"Sample Required "}),e.jsx("span",{className:"sample-type",children:t.type}),e.jsx("span",{className:"text-sample",children:"Lab Visit & Test"})]}),e.jsxs("div",{className:"preparation",children:[e.jsx("h3",{children:"Preparation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"10-12 Hours Fasting Required"}),e.jsx("li",{children:"Water can be consumed"})]})]})]})]}),e.jsxs("div",{className:"details",children:[t!=null&&t.tests?e.jsxs(e.Fragment,{children:[e.jsxs("h1",{children:[t==null?void 0:t.tests.length," Tests Include"]}),e.jsx("div",{className:"listWrapper",style:{gridTemplateColumns:x},children:l.map((s,r)=>e.jsx("ul",{children:s.map(n=>e.jsx("li",{children:n.service_name},n.service_code))},r))})]}):e.jsx(e.Fragment,{children:e.jsx("h1",{children:"Tests Not Available"})}),e.jsxs("div",{className:"btnWrapper",children:[e.jsxs("div",{className:"shareWrapper",children:[d&&e.jsx(I,{url:window.location.href}),e.jsxs("div",{onClick:()=>f(!d),className:"cursor-pointer btn-book-now viewDetailsBtn hover:bg-blue-700 text-center justify-center items-center",children:[e.jsx(v,{size:20})," Share"]})]}),e.jsx("div",{onClick:()=>{m.push(i?`/labPackageDetils/${t==null?void 0:t.service_code}`:`/labTestDetils/${t==null?void 0:t.service_code}`)},className:"cursor-pointer btn-book-now cartbtn bg-[#9747FF] hover:bg-blue-700 text-white text-center justify-center items-center",children:e.jsx("span",{className:"text-center items-center justify-center justify-content-center",children:"Add to Cart"})})]})]})]})})]})]})},W=t=>{var n;const{mostOrdersSection:a,item:i,addToCart:g}=t,[d,f]=p.useState(null),[m,l]=p.useState(!1),[x,s]=p.useState(!1),r=b();return N(),e.jsx(C,{children:e.jsxs("div",{children:[e.jsx("div",{className:"near-you-item",children:e.jsxs("div",{className:" cardstyle px-2 py-2 flex  flex-col",children:[e.jsx("div",{className:"relative imgspace",children:e.jsx("img",{src:i!=null&&i.image?i.image:u,alt:"Health360",className:"w-full h-full object-cover rounded-t-xl w-xl"})}),e.jsx("div",{className:" heading-name-rating flex flex-col mt-1",children:e.jsxs("div",{children:[e.jsx("div",{className:"",children:e.jsx("h3",{className:"float-left1 text-sm heading text-bold",children:i==null?void 0:i.service_name})}),e.jsxs("div",{children:[e.jsxs("p",{className:"amount-box",children:["₹",(n=i==null?void 0:i.price)==null?void 0:n.discounted_price,".00"]}),e.jsx("p",{className:"tests-include-list",children:"213 people Booked Recently"})]}),e.jsxs("div",{className:"more-labs-action-btns",children:[e.jsx("button",{className:"view-details-btn",onClick:()=>s(!0),children:"View Details"}),e.jsx("button",{className:"add-to-cart-btn",onClick:()=>{r.push(`/labTestDetils/${i==null?void 0:i.service_code}`)},children:"Add To Cart"})]})]})})]})}),x&&e.jsx(S,{children:e.jsx(O,{item:i,onClose:()=>s(!1)})})]})})};export{W as T};
