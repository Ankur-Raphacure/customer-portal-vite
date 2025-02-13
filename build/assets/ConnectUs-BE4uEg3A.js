import{d as k,q as S,b as q,r as n,j as e,Y as z,Z as C,$ as E,a0 as R,X as I,t as u}from"./index-f4owDEOR.js";const M=k.div`
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heading-section {
    text-align: center;
    margin: 0 auto 40px;
    max-width: 800px;

    h2 {
      font-size: 32px;
      font-weight: 600;
      display: inline-block;
      font-family: Inter;
      color: #011632;
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      font-family: Inter;
      color: #3c4959;
      text-align: center;
    }
  }

  .content-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }

  .left-panel {
    flex: 1 1 45%;
    width: 100%;
    position: relative;
    border-radius: 10px;
    /* border: 1px solid #a2d8c0; */
    box-sizing: border-box;
    height: 694px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #fff;
    /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); */
    padding: 0px 20px;
  }

  .map-section {
    width: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.08);
    background: white;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #3c4959;

    .icon {
      margin-right: 19px;
      margin-top: 10px;
      color: #fff;

      height: 33px;
    }

    .map-details {
      position: absolute;
      display: flex;
      bottom: 10px;
      left: 18px;
      right: 18px;
      background: white;
      color: black;
      padding: 4px 12px;
      border-radius: 5px;

      p {
        font-size: 13px;
      }
    }
  }

  .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom,
  button.gm-control-active.gm-fullscreen-control,
  div[role="menubar"].gmnoprint.gm-style-mtc-bbw,
  div.gm-style-cc {
    display: none;
  }

  .contact-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: hidden;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.08);

    .contact {
      height: 93px;
      border-radius: 10px;
      padding: 13px 30px;
      box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.08);
      display: flex;
    }
    .icon {
      margin-right: 19px;
      margin-top: 10px;
      color: #fff;
      height: 30px;
    }

    p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Inter;
      color: #3c4959;

      strong {
        color: #011632;
      }
    }
  }

  @media (max-width: 768px) {
    .left-panel {
      flex-direction: column;
    }

    .map-section iframe {
      height: 200px;
    }
  }

  .form-section {
    flex: 1 1 45%;
    width: 100%;
    position: relative;
    border-radius: 10px;
    border: 1px solid #a2d8c0;
    box-sizing: border-box;
    height: fit-content;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 40px 40px;
      padding-bottom: 20px;

      .name-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 15px;
      }

      .name-item {
        display: flex;
        flex-direction: column; /* Stack label and input vertically */
        width: 100%;
      }

      .name-item label {
        /* margin-bottom: 5px; Add spacing between label and input */

        font-size: 18px;
        font-weight: 500;
        font-family: Inter;
        color: #3c4959;
        text-align: left;
        margin-bottom: 15px;
      }

      .name-item input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .name-item input:focus {
        border-color: #9747ff;
        outline: none;
      }

      .forms-group {
        display: flex;
        justify-content: flex-start;
        gap: 89px;
        margin-bottom: 15px;
      }

      .forms-group:last-child {
        margin-top: 10px;
      }
      .error {
        color: red;
        margin-top: -1px;
      }

      .form-group {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        /* margin-bottom: 15px; */
        flex-direction: column;

        input[name="message"] {
          height: 180px;
        }

        label {
          font-size: 18px;
          font-weight: 500;
          font-family: Inter;
          color: #3c4959;
          text-align: left;
        }
      }
      .form-group textarea {
        height: 205px;
      }

      .form-group:last-child {
        margin-top: 10px;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 10px;
        /* margin-bottom: 10px; */
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        border-color: #9747ff;
        outline: none;
      }

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: #aaa;
      }

      button {
        display: inline-block;
        padding: 10px 15px; /* Ensure consistent padding */
        background-color: #252b61; /* Same background color */
        color: #fff; /* Consistent text color */
        border: none; /* Remove outlines */
        border-radius: 25px; /* Match border-radius */
        font-size: 1rem; /* Keep font size consistent */
        cursor: pointer;
        text-align: center; /* Center the text */
        transition: background-color 0.3s;
        width: 165px; /* Remove any conflicting width styles */
        margin: auto;
        margin-top: 20px;
      }

      button:hover {
        background-color: #0056b3;
      }
    }
  }

  @media (max-width: 768px) {
    .content-section {
      flex-direction: column;
    }

    .map-section {
      iframe {
        height: 200px;
      }
    }

    .form-section {
      form {
        .form-group {
          input {
            flex: 1 1 100%;
          }
        }
      }
    }
  }
  @media (max-width: 391px) {
    .content-section {
      flex-direction: column-reverse;
    }

    .heading-section {
      text-align: left;
      margin: unset;
    }

    .heading-section h2 {
      /* width: 107px;
      position: relative; */
      font-size: 18px;
      display: inline-block;
      font-family: Inter;
      color: #011632;
      text-align: left;
    }

    .heading-section p {
      font-size: 18px;
      font-family: Inter;
      color: #3c4959;
      text-align: left;
    }

    .form-section {
      border: unset;

      form {
        padding: unset;

        .name-group {
          flex-direction: column;
        }

        button {
          width: 100%;
        }
      }
    }

    .left-panel {
      padding: 20px 0px;
    }
  }
`,F={width:"100%",height:"350px"},P=()=>{const[c,d]=n.useState(null),{isLoaded:m}=z({googleMapsApiKey:R});return n.useEffect(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(s=>{d({lat:s.coords.latitude,lng:s.coords.longitude})},s=>{console.error("Error fetching geolocation:",s)}):console.error("Geolocation is not supported by this browser.")},[]),m?e.jsx("div",{className:"mapWrapper",children:c?e.jsx(C,{mapContainerStyle:F,center:c,zoom:15,children:e.jsx(E,{position:c})}):e.jsx("p",{children:"Fetching location..."})}):e.jsx("div",{children:"Loading..."})},D=()=>{S();const c=q(),[d,m]=n.useState(""),[s,f]=n.useState(""),[x,b]=n.useState(""),[g,j]=n.useState(""),[h,y]=n.useState(""),[i,l]=n.useState({}),p=o=>{const{id:r,value:a}=o.target;if(!(r==="phone"&&(!/^\d*$/.test(a)||a.length>10)))switch(r){case"firstName":m(a),l(t=>({...t,firstName:""}));break;case"lastName":f(a);break;case"email":b(a),l(t=>({...t,email:""}));break;case"phone":j(a),l(t=>({...t,phone:""}));break;case"message":y(a),l(t=>({...t,message:""}));break}},w=()=>{const o={};return d.trim()||(o.firstName="First name is required."),s.trim()||(o.lastName="Last name is required."),x.trim()||(o.email="Email is required."),g.trim()||(o.phone="Phone number is required."),h.trim()||(o.message="Message is required."),o},v=async o=>{o.preventDefault();const r=w();Object.keys(r).length>0?l(r):(l({}),await N({email:x,phone:g,message:h,date:"2024-12-24",time:"06:00",type:"demorequests"})&&(m(""),f(""),b(""),j(""),y("")))},N=async o=>{var r,a;try{const t=await c(I(o)),L=((a=(r=t==null?void 0:t.payload)==null?void 0:r.data)==null?void 0:a.demoRequest)||{};return t!=null&&t.error?(u.error(t.error.message||"Something went wrong"),!1):(u.success("Request submitted successfully"),!0)}catch(t){return console.error("Error submitting request:",t),u.error("Something went wrong"),!1}};return e.jsx(M,{children:e.jsxs("div",{className:"contact-container",children:[e.jsxs("div",{className:"heading-section",children:[e.jsx("h2",{children:"Get in touch"}),e.jsx("p",{children:"Need assistance or have questions? Reach out to us—we're here to help!"})]}),e.jsxs("div",{className:"content-section",children:[e.jsxs("div",{className:"left-panel",children:[e.jsxs("div",{className:"map-section",children:[e.jsx(P,{}),e.jsxs("div",{className:"map-details",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735128944716.png",alt:"",className:"icon"}),e.jsx("p",{children:"38/3, 6th Cross, Vibgyor High School Road, opp. Thomas Square, HSR Extension, Reliable Tranquil Layout, Bengaluru, Karnataka-560102."})]})]}),e.jsxs("div",{className:"contact-details",children:[e.jsxs("div",{className:"contact",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735128253824.png",alt:"",className:"icon"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Office Timings:"})," Monday - Saturday (9:00am to 5pm), ",e.jsx("br",{}),"Sunday (Closed)"]})]}),e.jsxs("div",{className:"contact",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735128944716.png",alt:"",className:"icon"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",e.jsx("br",{}),"raphaplus.gmail.in"]})]}),e.jsxs("div",{className:"contact",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735129091355.png",alt:"",className:"icon"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phone:"})," ",e.jsx("br",{}),"+91 9999999999"]})]})]})]}),e.jsx("div",{className:"form-section",children:e.jsxs("form",{children:[e.jsxs("div",{className:"name-group",children:[e.jsxs("div",{className:"name-item",children:[e.jsx("label",{htmlFor:"firstName",children:"First Name"}),e.jsx("input",{type:"text",id:"firstName",placeholder:"Vimal",value:d,onChange:p,required:!0}),i.firstName&&e.jsx("span",{className:"error",children:i.firstName})]}),e.jsxs("div",{className:"name-item",children:[e.jsx("label",{htmlFor:"lastName",children:"Last Name"}),e.jsx("input",{type:"text",id:"lastName",placeholder:"Anand",value:s,onChange:p,required:!0})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",id:"email",placeholder:"vimalanand@gmail.com",value:x,onChange:p,required:!0}),i.email&&e.jsx("span",{className:"error",children:i.email})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"phone",children:"Phone Number"}),e.jsx("input",{type:"tel",id:"phone",value:g,placeholder:"+91 9473020100",onChange:p,required:!0}),i.phone&&e.jsx("span",{className:"error",children:i.phone})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"message",children:"Message"}),e.jsx("textarea",{id:"message",value:h,onChange:p,required:!0,placeholder:"Save me ! Rapha+"}),i.message&&e.jsx("span",{className:"error",children:i.message})]}),e.jsx("button",{type:"submit",onClick:v,children:"Contact Us Now"})]})})]})]})})};export{D as default};
