import{d as b,r as x,j as e,gt as f,gu as j}from"./index-BHf3qlKB.js";import{S as v}from"./ShareModal-Stxi30b-.js";const y=b.div`
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
    width: 45px;
    font-size: 16px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 600;
    color: #9747ff;
    height: 12px;
  }
  .list-div {
    background: #fff;
  }
  .slot-div {
    display: flex;
    justify-content: space-around;
  }
  .slot-title {
    width: 90px;
    font-size: 14px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 600;
    color: #424346;
    height: 12px;
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
    transform: translateX(22px);
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
`,w=[{id:1,title:"Week",number:1,name:"Week-1"},{id:2,title:"Week",number:2,name:"Week-2"},{id:3,title:"Week",number:3,name:"Week-3"},{id:4,title:"Week",number:4,name:"Week-4"}],d=[{day:"Day 1"},{day:"Day 2"},{day:"Day 3"},{day:"Day 4"},{day:"Day 5"},{day:"Day 6"},{day:"Day 7"}],l={"BREAK FAST":[{description:"1 Bowl of oatmeal with mixed berries",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337537066.png"},{description:"1 Boiled egg",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337588253.png"},{description:"Green Tea",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337632530.png"}],LUNCH:[{description:"Grilled chicken salad with lots of greens",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337676501.png"},{description:"Cherry tomatoes",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337713280.png"},{description:"Cucumber and Olive oil dressing",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337766512.png"}],DINNER:[{description:"Grilled salmon",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337806360.png"},{description:"Steamed broccoli",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337846750.png"},{description:"Quinoa and Mixed greens salad",image:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337893659.png"}]},c=[{slot:"BREAK FAST"},{slot:"LUNCH"},{slot:"DINNER"}],_=()=>{const[s,m]=x.useState(null),[g,p]=x.useState(!1),h=window.location.href,u=i=>{m(i)};return e.jsxs(y,{children:[e.jsx(v,{show:g,url:h,title:"Share on",handleClose:()=>{p(!1)},onCopyClick:()=>{navigator.clipboard.writeText(h)}}),e.jsxs("div",{className:"banner-div",children:[e.jsx("div",{className:"img-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736336983146.png",alt:"Fruit"})}),e.jsx("div",{className:"card-container",children:w.map(i=>e.jsx("div",{className:"card-div",children:e.jsx("div",{className:`card ${s===i.id?"selected":""}`,onClick:()=>u(i.id),children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{style:{color:s===i.id?"#9747ff":"black"},children:i.title}),e.jsx("div",{className:"sub-card",style:{color:s===i.id?"#9747ff":"black",border:s===i.id?"1px solid #9747ff":"1px solid #ccc"},children:e.jsx("h4",{style:{color:s===i.id?"#9747ff":"black"},children:i.number})})]})})},i.id))})]}),e.jsxs("div",{className:"list-div",children:[s===1&&e.jsx("div",{className:"name-display",children:d.map((i,n)=>e.jsxs("div",{children:[e.jsx("h4",{className:"day-div",children:i.day}),e.jsx("div",{className:"slot-div",children:c.map((a,r)=>e.jsxs("div",{children:[e.jsx("h4",{className:"slot-title",children:a.slot}),e.jsx("ul",{children:(l[a.slot]||[]).map((t,o)=>e.jsx("div",{className:"name-div",children:e.jsxs("p",{children:[e.jsx("img",{src:t.image,alt:t.description,style:{width:"25px",height:"25px",marginRight:"10px"}}),t.description]},o)}))})]},r))})]},n))}),s===2&&e.jsx("div",{className:"name-display",children:d.map((i,n)=>e.jsxs("div",{children:[e.jsx("h4",{className:"day-div",children:i.day}),e.jsx("div",{className:"slot-div",children:c.map((a,r)=>e.jsxs("div",{children:[e.jsx("h4",{className:"slot-title",children:a.slot}),e.jsx("ul",{children:(l[a.slot]||[]).map((t,o)=>e.jsx("div",{className:"name-div",children:e.jsxs("p",{children:[e.jsx("img",{src:t.image,alt:t.description,style:{width:"25px",height:"25px",marginRight:"10px"}}),t.description]},o)}))})]},r))})]},n))}),s===3&&e.jsx("div",{className:"name-display",children:d.map((i,n)=>e.jsxs("div",{children:[e.jsx("h4",{className:"day-div",children:i.day}),e.jsx("div",{className:"slot-div",children:c.map((a,r)=>e.jsxs("div",{children:[e.jsx("h4",{className:"slot-title",children:a.slot}),e.jsx("ul",{children:(l[a.slot]||[]).map((t,o)=>e.jsx("div",{className:"name-div",children:e.jsxs("p",{children:[e.jsx("img",{src:t.image,alt:t.description,style:{width:"25px",height:"25px",marginRight:"10px"}}),t.description]},o)}))})]},r))})]},n))}),s===4&&e.jsx("div",{className:"name-display",children:d.map((i,n)=>e.jsxs("div",{children:[e.jsx("h4",{className:"day-div",children:i.day}),e.jsx("div",{className:"slot-div",children:c.map((a,r)=>e.jsxs("div",{children:[e.jsx("h4",{className:"slot-title",children:a.slot}),e.jsx("ul",{children:(l[a.slot]||[]).map((t,o)=>e.jsx("div",{className:"name-div",children:e.jsxs("p",{children:[e.jsx("img",{src:t.image,alt:t.description,style:{width:"25px",height:"25px",marginRight:"10px"}}),t.description]},o)}))})]},r))})]},n))}),e.jsxs("div",{className:"btn-div",children:[e.jsxs("button",{className:"button me-4",type:"button",children:[e.jsx("span",{className:"button__text",children:"Download"}),e.jsxs("span",{className:"button__icon",children:[" ",e.jsx(f,{className:"svg"})]})]}),e.jsxs("button",{className:"button-with-icon",onClick:()=>{p(!0)},children:[e.jsx(j,{className:"icon"}),e.jsx("span",{className:"text",children:"Share"})]})]})]})]})};export{_ as default};
