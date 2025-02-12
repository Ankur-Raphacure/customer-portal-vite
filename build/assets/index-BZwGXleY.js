import{d as r,j as e}from"./index-BHf3qlKB.js";import{g as c,A as p}from"./appstore-RUnmWlpR.js";const l=r.div`
ul {
  list-style: none;
}
.bgBlue{
  background-color: #9747FF;
}
.txtWhite{
    color: #FFF;
}
.reverseFlex{
  flex-direction: row-reverse;
  .content-sec{
    padding-inline-start: unset !important;
    h1{
      color: #9747FF;
    }
    p{
      width: 572px;
    }
  }
  .img-sec{
    margin-left: 30px;
    .desktopInnerImg{
     right: 100px !important; 
    }
  }
}
  
.conatiner-sec{
  display: flex;
  div{
    flex-basis: 100%
  }
  .content-sec{
    padding-inline-start: 10%;
    h1{
      font-size: 32px;
      font-weight: 600;
      padding-bottom: 22px;
      padding-top: 33px;
      padding-inline-start: 17px;
      margin: unset;
    }
    p{
      font-size: 15px;
      font-weight: 600;
      padding-bottom: 22px;
      padding-inline-start: 17px;
      margin: unset;
    }
    div{
      display: flex;
      gap: 4%;
      ul{
        padding: unset;
        li{
          font-size: 10px;
          padding-bottom: 14px;
          img{
              padding-right: 7px;
          }
        }
      }
    }
    img{
      cursor: pointer;
    }
  }
  .img-sec{
    display: flex;
    flex-direction: row;
    align-items: end;
    img{
      width: 90%;
      height: 100%;
    }
    .imgdiv{
      width: 435px;
      height: 320px;
      display: flex;
      justify-content: center;
      position: relative;
      .imageOne {
        position: relative;
       }
      .desktopInnerImg{
        width: 443px;
        position: absolute;
        top: 23px;
        right: 89px;
        bottom: 35px;
      } 
      .imageTwo { 
        width: 174px;
        position: absolute;
        top: 56px;
        right: 46px;
        bottom: 12px;
      } 
      .imageThree{
        width: 158px;
        position: absolute;
        top: 63px;
        right: 55px;
        bottom: 12px;
      }
        
    }
  }
}

@media only screen and  (max-width: 700px) {
  .conatiner-sec{
    width: 92%;
    display: block;
    margin: auto;
    .content-sec {
      padding-inline-start: 4%;
      p, h1{
        padding-inline-start: unset;
      }
      h1{
        text-align: center;
      }
      p{
        width: unset:
      }
      div{
        justify-content: center;
      }
    }
    .imgdiv{
      .desktopInnerImg{
        width: 318px !important;
        right: 62px !important;
      }
    }
  }
  .reverseFlex{
    .content-sec{
      padding-inline-start: 4% !important;
      p{
        width: unset !important;
      }
    }
    .imgdiv{
      .desktopInnerImg{
        width: 298px !important;
        right: 54px !important;
      }
    }
  }
}

`,a="data:image/svg+xml,%3csvg%20width='11'%20height='9'%20viewBox='0%200%2011%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205L4%208L10%201'%20stroke='%2347FFFF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20width='11'%20height='9'%20viewBox='0%200%2011%209'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205L4%208L10%201'%20fill='white'/%3e%3cpath%20d='M1%205L4%208L10%201'%20stroke='%239747FF'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",g="/assets/desktop-MEw2jJbk.png",m="data:image/png;base64,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",h="/assets/Pharmacy_onboarding_1-D8jlh8UP.png",A="/assets/Desktop81-B2kbQmFC.png",x="/assets/Dashboard1-BxQ1jzDo.png",u=[{backgroundClass:"bgBlue",textColor:"txtWhite",flexreverse:"",h1content:"For Corporates",subContent:"Streamline corporate healthcare with Raphaplus. Manage employee healthcare plans and wellness programs efficiently. Boost productivity with our all-in-one system and get a free professional portal.",listImage:a,ListsOne:["Effective employee management","Tailored professional portal","Simplified healthcare plan administration","In-depth analytics"],ListsTwo:["Wellness program management","Enhanced employee communication","Productivity boosting tools","And much more"],desktopInnerImg:""},{backgroundClass:"",flexreverse:"reverseFlex",textColor:"",h1content:"For Doctor & Clinics",subContent:"Optimize your clinic operations with Raphaplus. Manage staff, patients, and appointments seamlessly while boosting revenue with our marketing tools. Enjoy a free professional website and management system.",listImage:d,ListsOne:["Streamlined staff scheduling","Custom professional website","Efficient patient management","Comprehensive reporting"],ListsTwo:["Online appointment booking","Improved patient communication","Revenue enhancement features","And much more"],desktopInnerImg:A},{backgroundClass:"bgBlue",textColor:"txtWhite",h1content:"For Patients",flexreverse:"",subContent:"Manage your health with Raphaplus. Schedule appointments, access secure records, and communicate with providers. Enjoy a free personal health portal.",listImage:a,ListsOne:["Convenient appointment scheduling","Personalized health portal","Secure medical record access","Health insights and analytics"],ListsTwo:["Direct provider communication","Health reminders and alerts","Exclusive health resources","And much more"],desktopInnerImg:x}];function I(){return e.jsx(l,{children:u.map((t,w)=>{var i,o;return e.jsxs("div",{className:`conatiner-sec ${t.backgroundClass} ${t.textColor} ${t.flexreverse}`,children:[e.jsxs("div",{className:"content-sec",children:[e.jsx("h1",{children:t.h1content}),e.jsx("p",{children:t.subContent}),e.jsxs("div",{children:[e.jsx("ul",{children:(i=t.ListsOne)==null?void 0:i.map((s,n)=>e.jsxs("li",{children:[" ",e.jsx("img",{src:t.listImage})," ",s," "]},n))}),e.jsx("ul",{children:(o=t.ListsTwo)==null?void 0:o.map((s,n)=>e.jsxs("li",{children:[" ",e.jsx("img",{src:t.listImage}),"	",s," "]},n))})]}),e.jsxs("div",{className:"playstore-sec",children:[e.jsx("img",{src:c,alt:"Googleplay Store"}),e.jsx("img",{src:p,alt:"Apple Store"})]})]}),e.jsx("div",{className:"img-sec",children:e.jsxs("div",{className:"imgdiv",children:[e.jsxs("div",{className:"imageOne",children:[e.jsx("img",{src:g}),(t==null?void 0:t.desktopInnerImg)&&e.jsx("div",{className:"desktopInnerImg",children:e.jsx("img",{src:t==null?void 0:t.desktopInnerImg})})]}),e.jsxs("div",{className:"imageTwo",children:[" ",e.jsx("img",{src:m})," "]}),e.jsxs("div",{className:"imageThree",children:[" ",e.jsx("img",{src:h})," "]})]})})]})})})}export{I as default};
