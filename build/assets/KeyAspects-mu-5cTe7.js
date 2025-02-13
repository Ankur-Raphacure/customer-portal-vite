import{d as m,u as d,r as p,j as e}from"./index-CitTC1Lo.js";const h=m.div`
  padding: 2rem;
  width: 100%;

  .card {
    width: 100%;
  }
  .heding-div {
    margin-top: 2rem;
    width: 100%;
    font-size: 24px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 800;
    color: #2f2f2f;
  }
  .heding-div {
    span {
      color: #fc7cff;
    }
  }
  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5ab5ff;
  }
  .img1-div img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .text-div h6 {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    color: #000;
  }

  .main-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      gap: 4rem;
    }
  }

  .sub-div {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }

    @media (min-width: 1024px) {
      gap: 2rem;
    }
  }

  .radio-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-check {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-check-label {
    font-size: 14px;
    letter-spacing: 0.06em;
    font-weight: 500;
    color: #000;
    margin-right: 2.5rem;
  }

  .form-check-input {
    width: 20px;
    height: 20px;
    border: 2px solid #9747ff;
  }
  .sbn-btn {
    margin-top: 2rem;
    width: 30%;
    position: relative;
    border-radius: 2px;
    background-color: #9747ff;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    font-size: 12px;
    color: #fff;
    font-family: Poppins;
  }
  .btn-div {
    display: flex;
    justify-content: end;
  }
  .message-div h6 {
    width: 195px;
    font-size: 14px;
    font-weight: 600;
    color: #ff0000;
  }
  .sub-message-div {
    display: flex;
    align-items: center;
  }
  .sub-message p {
    font-size: 14px;
    font-weight: 500;
    color: #7e6f6f;
    margin-right: 1rem;
  }
  .recommendations p {
    font-size: 14px;
    color: #4000bf;
  }
`,u=[{id:1,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340285099.png",title:"1. How many nights per week do you get at least 7-8 hours of sleep?",options:[{label:"0-2 Nights",value:"0-2"},{label:"3-4 Nights",value:"3-4"},{label:"5-7 Nights",value:"5-7"}]},{id:2,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340311854.png",title:"2, How often do you engage in physical activity each week?",options:[{label:"0-1 times",value:"0-1"},{label:"2-3 Times",value:"2-3"},{label:"4+ times",value:"4+"}]},{id:3,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340370779.png",title:"3, How frequently do you experience chronic pain or discomfort?",options:[{label:"Frequently",value:"Frequently"},{label:"Occasionally",value:"Occasionally"},{label:"Rarely/Never",value:"Rarely/Never"}]},{id:4,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340415035.png",title:"4, Do you smoke ? If so, how frequently?",options:[{label:"Daily",value:"Daily"},{label:"Occasionally",value:"Occasionally"},{label:"Rarely/Never",value:"Rarely/Never"}]},{id:5,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340445626.png",title:"5, You do go for regular medical checkups",options:[{label:"Daily",value:"Daily"},{label:"Occasionally",value:"Occasionally"},{label:"Rarely/Never",value:"Rarely/Never"}]},{id:6,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340533945.png",title:"6,  Do you drink  ? If so, how frequently? ",options:[{label:"Daily",value:"Daily"},{label:"Occasionally",value:"Occasionally"},{label:"Rarely/Never",value:"Rarely/Never"}]},{id:7,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340552863.png",title:"7, How healthy do you consider your diet to be?",options:[{label:"Poor",value:"Poor"},{label:"Fair",value:"Fair"},{label:"Good",value:"Good"}]},{id:8,imgSrc:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340577933.png",title:"8, I  drink water throughout the day to stay hydrated.",options:[{label:"Rarely",value:"Rarely"},{label:"Occasionally",value:"Occasionally"},{label:"Regularly",value:"Regularly"}]}],b=()=>{const l=d(),[n,o]=p.useState({}),t=window.location.pathname;console.log(t,"12345");const c=(a,s)=>{o(i=>({...i,[a]:i[a]===s?"":s}))},r=a=>{const s=n[a];if(!s)return null;switch(s){case"0-2":return{message:"Poor sleep habits.",sub_message:"Recommendations",recommendations:" .Establish a consistent bedtime routine, limit screen time before bed, and create a comfortable sleep environment."};case"3-4":return{message:"Moderately active.",sub_message:"Recommendations",recommendations:"Poor/Fair: Establish a consistent bedtime routine, limit screen time before bed, and create a comfortable sleep environment."};case"5-7":return{message:"Good",sub_message:"Recommendations",recommendations:" Maintain current habits and manage stress to ensure quality sleep."};case"0-1":return{message:"Rare physical activity.",sub_message:"Recommendations",recommendations:"Recommendations: Try to incorporate more physical activity into your weekly routine, such as walking, jogging, or attending fitness classes."};case"2-3":return{message:"Rare physical activity.",sub_message:"Recommendations",recommendations:"Recommendations: Try to incorporate more physical activity into your weekly routine, such as walking, jogging, or attending fitness classes."};case"4+":return{message:"Rare physical activity.",sub_message:"Recommendations",recommendations:"Recommendations: Try to incorporate more physical activity into your weekly routine, such as walking, jogging, or attending fitness classes."};default:return{message:"Please select an option.",sub_message:"Recommendations",recommendations:""}}};return e.jsxs(h,{children:[t!=="/dashboard/activities"&&e.jsx("button",{className:"btn btn-outline",onClick:()=>l.push("/womenscare/womanactivitys"),children:"Back"}),t!=="/dashboard/activities"&&e.jsxs("h4",{className:"heding-div",children:["Key Aspects of ",e.jsx("span",{children:"Women's"})," Healthcare"]}),t!=="/dashboard/activities"&&e.jsx("div",{className:"img1-div",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340222940.png",alt:""})}),e.jsx("h4",{className:"mt-2",children:"5 minute assessment"}),u.map(a=>{const s=r(a.id);return e.jsx("div",{className:"card mt-3",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"main-div",children:[e.jsxs("div",{className:"sub-div",children:[e.jsx("div",{className:"img-div",style:{width:"60px",height:"60px",borderRadius:"8px"},children:e.jsx("img",{src:a.imgSrc,alt:"Icon",style:{width:"30px",height:"30px"}})}),e.jsx("div",{className:"text-div",children:e.jsx("h6",{children:a.title})})]}),e.jsx("div",{className:"radio-div",children:a.options.map((i,g)=>e.jsxs("div",{className:"form-check mb-2",children:[e.jsx("label",{className:"form-check-label",htmlFor:`frequency-${a.id}-${i.value}`,children:i.label}),e.jsx("input",{className:"form-check-input",type:"radio",name:`frequency-${a.id}`,id:`frequency-${a.id}-${i.value}`,checked:n[a.id]===i.value,onChange:()=>c(a.id,i.value)})]}))})]}),s&&e.jsxs("div",{className:"message-div mt-3",children:[e.jsx("h6",{children:s.message}),e.jsxs("div",{className:"sub-message-div",children:[e.jsx("div",{className:"sub-message",children:e.jsx("p",{children:s.sub_message})}),e.jsx("div",{className:"recommendations",children:e.jsx("p",{children:s.recommendations})})]})]})]})})}),e.jsx("div",{className:"btn-div",children:e.jsx("button",{className:"btn sbn-btn",children:"Submit"})})]})};export{b as default};
