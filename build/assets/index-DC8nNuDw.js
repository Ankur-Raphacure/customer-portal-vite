import{d as l,j as e,r as i}from"./index-f4owDEOR.js";import{S as d,G as p}from"./GymlistDetail-D7DNR7OQ.js";import"./location-nAgUzmwx.js";const c=l.div`
  width: 100%;
  background: #000;

  .gymlist-wrapper {
    width: 94%;
    margin: 0 auto;
  }

  .gymrow {
    display: flex;
  }
  .parent-gym-button {
    padding-top: 20px;
  }
  .hide-opacity {
    opacity: 0.5;
  }
  .gym-box-sec-bot {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    p {
      margin-bottom: 7px;
    }
  }
  .gym-tests-all {
    color: #fff;
    display: grid;
    grid-auto-flow: 1fr 1fr;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .gym-tests-box {
    border: 1p solid #fff;
    border: 1px solid #fff;
    padding: 5px;
    border-radius: 4px;
  }

  .leftsec {
    flex: 70%;
  }
  .gymdetail-wrapper {
    width: 80%;
    margin: auto;
  }
  .rightsec {
    flex: 30%;
    padding-top: 20px;
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    .gymrow {
      flex-direction: column; /* Stack columns vertically on smaller screens */
    }

    .leftsec,
    .rightsec {
      flex: 1; /* Each section takes full width */
      padding: 0 10px; /* Add some padding on the sides */
    }
    .gym-tests-all {
      display: block !important;
    }
    .gym-tests-box {
      margin-bottom: 6px;
    }
    .gym-box-sec-bot {
      display: block !important;
    }
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }

  .search-wrapper {
    display: flex;
    width: 100%;
    margin: 20px 0;
  }

  .location-col {
    flex: 0 0 20%; /* 20% width */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-col {
    flex: 0 0 80%; /* 80% width */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .location-btn {
    border-radius: 10px;
    background: #00661d;
    padding: 12px 40px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.48px;
    border: none;
  }

  .search-bar {
    width: 100%; /* Make the search bar take 100% of the search-col */
    padding: 10px; /* Some padding */
    background-color: transparent; /* Example background color */
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.1px;
    border-radius: 10px;
    border: 1px solid #9747ff;
    opacity: 0.9;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.07);
  }

  .search-bar::placeholder {
    color: #f5f5f5;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.1px;
    opacity: 0.3;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .search-wrapper {
      flex-direction: column; /* Stack items vertically */
    }

    .location-col {
      flex: 1 0 auto; /* Take full width */
      margin-bottom: 10px; /* Optional margin for spacing */
    }

    .search-col {
      flex: 1 0 auto; /* Take full width */
    }

    .location-btn {
      width: 100%; /* Full width for the button */
      padding: 12px; /* Adjust padding for mobile */
      font-size: 14px; /* Increase font size for better readability */
      border: none;
    }

    .search-bar {
      width: 100%; /* Full width for the search bar */
      padding: 10px; /* Adjust padding for mobile */
    }
  }

  .button-row {
    display: flex;
    flex-wrap: wrap; /* Allow buttons to wrap to the next line on smaller screens */
    justify-content: space-around; /* Center align buttons */
  }

  .button {
    padding: 10px 20px;
    border-radius: 12px;
    border: 1px solid #cc9c9c;
    background: #290e4e;
    text-align: center; /* Center text within button */
    display: inline-flex;
    align-items: center;
    color: #fff;
    opacity: 0.5;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.8px;
  }

  .svg-icon {
    margin-left: 8px; /* Adjust the space between text and icon */
  }

  .button:hover {
    background-color: #0056b3; /* Darker shade for hover */
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .button {
      font-size: 14px; /* Decrease font size for better fit on smaller screens */
      padding: 8px 16px; /* Adjust padding for smaller buttons */
      margin-top: 12px;
    }
  }

  .gymdetail-wrapper {
    border-radius: 24px;
    border: 1px solid #000a66;
    background: #0e0619;
    margin-top: 24px;
    padding: 12px;
  }
  .gyminside {
    border-radius: 20px;
    border: 1px solid #52ff00;
    padding: 12px;
    margin: 10px 0;
  }

  .item {
    display: grid;
    grid-template-columns: 45% 30% 25%; /* Default grid layout */
    gap: 10px; /* Added gap between grid items */
  }

  .image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .column {
    padding: 6px;
  }

  .image {
    position: relative; /* Ensure relative positioning for child elements */
  }

  .image-caption {
    position: absolute;
    bottom: 6px;
    border-radius: 0px 0px 15px 15px;
    background: linear-gradient(90deg, #00ff29 0%, #1f0048 100%);
    color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    padding: 5px 10px;
    width: 97%; /* Full width of the parent container */
    box-sizing: border-box;
  }

  .button {
    text-align: center;
  }

  .button button {
    background-color: #9747ff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button button:hover {
    background-color: #7e37d5;
  }

  .gymname,
  .activities,
  .location,
  .facility,
  .price,
  .gst,
  .pricecolor,
  .distance {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    opacity: 0.8;
  }

  .gymname {
    font-size: 18px;
    font-weight: 600;
    opacity: 0.9;
  }

  .facility,
  .pricecolor {
    font-size: 18px;
    font-weight: 600;
  }

  .gst {
    opacity: 0.5;
  }

  .buttongym {
    text-align: end;
    margin-right: 12px;
  }

  .joinbtn {
    border-radius: 15px;
    background: #9747ff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 8px 50px; /* Adjusted padding for better mobile view */
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    margin-top: 138px; /* Adjusted margin for button on smaller screens */
    border: none;
    text-decoration: none;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .item {
      grid-template-columns: 1fr; /* Stack columns vertically on smaller screens */
    }

    .buttongym {
      text-align: center; /* Center align button column on mobile */
    }

    .joinbtn {
      margin-top: 20px; /* Adjust margin for button on smaller screens */
      width: 100%;
    }
  }

  .card-wrapper {
    border-radius: 15px;
    border: 1px solid #231717;
    background: #0e0619;
    flex-shrink: 0;
  }
  .maincard {
    border-radius: 20px;
    border: 1px solid #fff;

    padding: 2px;
    margin: 12px;
    flex-shrink: 0;
  }
  .bgcard {
    border-radius: 15px;
    border: 1px solid #382121;
    background: url("/background.png") #d3d3d336 50% / cover no-repeat;
    margin: 6px;
    padding: 12px;
    position: relative; /* Added */
    display: flex;
  }

  .bgcard h4 {
    color: #a67979;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.56px;
  }

  .date {
    color: #38f99c;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 2.1px;
  }

  .loc {
    color: #c7e1ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.1px;
  }

  .bgcard ul {
    padding: 0 !important;
  }

  .bgcard ul li {
    list-style-type: none;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.48px;
    margin-bottom: 4px;
  }

  .bgcard ul li svg {
    background: #6a9325;
    width: 12px;
    height: 12px;
    padding: 2px;
    border-radius: 50%;
  }

  .prebook {
    margin: 6px;
    padding-top: 12px;
  }

  .bookbtn {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 15px;
    border: 1px solid #fff;
    width: 100%;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: transparent;
  }

  .saving {
    position: absolute;
    bottom: -16px; /* Adjust as necessary */
    right: 0px; /* Adjust as necessary */
    border-radius: 14px 0px;
    background: #717bb0;

    padding: 6px 12px;
    color: #fff500;

    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .custom-flex-container {
    display: flex;
    align-items: center; /* Center items vertically */
  }

  .saving {
    margin-left: 8px; /* Adjust spacing between the icon and text */
  }

  .size-6 {
    width: 16px; /* Set width and height of the SVG icon */
    height: 16px;
  }
  .girlimg {
    position: absolute;
    right: 12px;
  }

  @media (max-width: 768px) {
    .girlimg {
      display: none; /* Hide the girlimg on mobile devices */
    }
  }
  Link {
    text-decoration: none;
  }
`,g=()=>e.jsx("div",{className:"container",children:e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"button",children:["Filter",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",className:"svg-icon",children:e.jsx("path",{opacity:"0.5",d:"M13 6.99966H4.98595M2.15719 6.99966H1M2.15719 6.99966C2.15719 6.60489 2.30617 6.22629 2.57136 5.94715C2.83654 5.668 3.19621 5.51118 3.57124 5.51118C3.94627 5.51118 4.30594 5.668 4.57113 5.94715C4.83632 6.22629 4.9853 6.60489 4.9853 6.99966C4.9853 7.39443 4.83632 7.77303 4.57113 8.05217C4.30594 8.33131 3.94627 8.48814 3.57124 8.48814C3.19621 8.48814 2.83654 8.33131 2.57136 8.05217C2.30617 7.77303 2.15719 7.39443 2.15719 6.99966ZM13 11.5108H9.27157M9.27157 11.5108C9.27157 11.9057 9.12223 12.2847 8.85698 12.5639C8.59173 12.8431 8.23198 13 7.85686 13C7.48183 13 7.12216 12.8425 6.85698 12.5634C6.59179 12.2842 6.44281 11.9056 6.44281 11.5108M9.27157 11.5108C9.27157 11.116 9.12223 10.7376 8.85698 10.4584C8.59173 10.1792 8.23198 10.0224 7.85686 10.0224C7.48183 10.0224 7.12216 10.1792 6.85698 10.4583C6.59179 10.7375 6.44281 11.1161 6.44281 11.5108M6.44281 11.5108H1M13 2.48848H10.9859M8.15719 2.48848H1M8.15719 2.48848C8.15719 2.09371 8.30617 1.71511 8.57136 1.43597C8.83654 1.15682 9.19621 1 9.57124 1C9.75694 1 9.94082 1.0385 10.1124 1.1133C10.2839 1.18811 10.4398 1.29775 10.5711 1.43597C10.7024 1.57418 10.8066 1.73827 10.8777 1.91886C10.9487 2.09945 10.9853 2.29301 10.9853 2.48848C10.9853 2.68395 10.9487 2.8775 10.8777 3.05809C10.8066 3.23868 10.7024 3.40277 10.5711 3.54099C10.4398 3.67921 10.2839 3.78885 10.1124 3.86365C9.94082 3.93846 9.75694 3.97696 9.57124 3.97696C9.19621 3.97696 8.83654 3.82013 8.57136 3.54099C8.30617 3.26185 8.15719 2.88325 8.15719 2.48848Z",stroke:"white","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round"})})]}),e.jsxs("button",{className:"button",children:["Sort",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",className:"svg-icon",children:e.jsx("path",{opacity:"0.7",d:"M9.77988 0.229439C9.6389 0.0825295 9.44771 0 9.24837 0C9.04902 0 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866928 0.94238 0.00770617 0.745262 0.00949192C0.548143 0.0112772 0.359584 0.0936918 0.220195 0.238985C0.0808067 0.384278 0.00174141 0.580825 2.86102e-05 0.786294C-0.00168419 0.991761 0.0740929 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z",fill:"#F5F5F5"})})]}),e.jsxs("button",{className:"button",children:["Rating",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",className:"svg-icon",children:e.jsx("path",{opacity:"0.7",d:"M9.77988 0.229439C9.6389 0.0825295 9.44771 0 9.24837 0C9.04902 0 8.85783 0.0825295 8.71685 0.229439L4.99546 4.10846L1.27408 0.229439C1.13229 0.0866928 0.94238 0.00770617 0.745262 0.00949192C0.548143 0.0112772 0.359584 0.0936918 0.220195 0.238985C0.0808067 0.384278 0.00174141 0.580825 2.86102e-05 0.786294C-0.00168419 0.991761 0.0740929 1.18971 0.211038 1.33751L4.46394 5.77056C4.60492 5.91747 4.79611 6 4.99546 6C5.19481 6 5.386 5.91747 5.52698 5.77056L9.77988 1.33751C9.92082 1.19055 10 0.991266 10 0.783473C10 0.57568 9.92082 0.376394 9.77988 0.229439Z",fill:"#F5F5F5"})})]}),e.jsx("button",{className:"button",children:"2999-3999/M"}),e.jsx("button",{className:"button",children:"999-3999/M"}),e.jsx("button",{className:"button",children:"1999-3999/M"})]})}),h=()=>{const[t,n]=i.useState({}),[r,a]=i.useState(!1),s=o=>{console.log("vendor",o),n(o),a(!r)};return console.log("vendorInfo",t),e.jsx(e.Fragment,{children:e.jsx(c,{children:e.jsx("div",{className:"gymlist-wrapper",children:e.jsx("div",{className:"gymrow",children:e.jsxs("div",{className:"leftsec",children:[e.jsx(d,{}),e.jsx(g,{}),e.jsx(p,{vendorInfo:t,handleJonNow:s})]})})})})})};export{h as default};
