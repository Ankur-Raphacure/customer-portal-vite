import{d as a,j as e,r as t,a$ as o}from"./index-DDOdRoFT.js";import{S as r,G as s}from"./GymlistDetail-CdWL_nxq.js";import{I as n}from"./Image-Dpy2fY3U.js";import{S as l}from"./location-5VwLk7gW.js";const d=a.div`
  width: 100%;
  background: #000;

  .gymlist-wrapper {
    width: 94%;
    margin: 0 auto;
  }

  .gymrow {
    display: flex;
  }

  .leftsec {
    flex: 70%;
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
    .image-row {
      margin: auto;
      gap: 6px;
    }
    .gmobile img {
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

  .section-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 1rem;
    position: relative;
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .flex-item {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .grid-item {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .image-container {
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  .gmobile {
    display: none;
  }
  imgwidth {
    width: 100%;
  }

  .grow {
    display: flex;
    flex-direction: row;
  }

  .gleft {
    flex: 1;
  }
  .gleft {
    position: relative;
    display: inline-block;
  }

  .image-overlay {
    position: relative;
    display: inline-block;
  }

  .watch-video {
    position: absolute;
    bottom: 0px;
    left: 0px;
    border-radius: 0px 15px;
    background: linear-gradient(90deg, #fff500 0%, #9747ff 100%);
    color: #fff;
    padding: 6px 20px;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 250% */
  }

  .gright {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .gright > * {
    margin-bottom: 10px;
  }

  .Image {
    max-width: 100%;
    height: auto;
  }
  .gright {
    display: flex;
    flex-wrap: wrap;
  }

  .image-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-container {
    position: relative;
  }

  .view-map-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 15px;
    opacity: 0.7;
    background: #038e00;
  }

  .image-container {
    position: relative; /* Position context for absolute positioning */
  }
  .marinimg {
    margin: 6px;
  }
  .more-button {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    bottom: 10px;
    right: 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: #000;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }

  .gymcontent {
    display: flex;
    margin-top: 30px;
  }

  .conleft {
    flex: 1;
  }

  .conright {
    float: right;
    text-align: right;
  }
  .conleft h2 {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .loc {
    opacity: 0.9;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .gdate {
    color: #00c2ff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.9;
  }
  .ppermon {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .pnum {
    color: #fff500;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 187.5% */
  }
  .reviews {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .content p {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 250% */
    opacity: 0.6;
  }

  .controw {
    display: flex;
  }

  .controw p {
    margin-right: 32px;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.8;
  }
  .controw svg {
    margin-right: 6px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 3fr 9fr; /* Adjust column widths as needed */
    margin: 0 4px; /* Equivalent to Tailwind's mx-4 */
    margin-top: 2px; /* Equivalent to Tailwind's my-2 */
  }

  .grid-container .col1 {
    grid-column: 1 / span 3; /* Equivalent to Tailwind's col-span-3 */
    display: flex;
    margin: 1px; /* Equivalent to Tailwind's m-1 */
  }

  .grid-container .col2 {
    grid-column: 4 / span 9; /* Equivalent to Tailwind's col-span-9 */
    display: flex;
    justify-content: flex-end; /* Equivalent to Tailwind's justify-end */
    margin: 1px; /* Equivalent to Tailwind's m-1 */
  }

  .info-text {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .amenities-list {
    border-radius: 5px;
    background: linear-gradient(90deg, #3ff4a8 0%, #56c2ff 100%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }

  .amenities-list li {
    display: inline-block;
    padding: 4px 8px;
    margin: 1px;
    font-size: 10px;
    color: #ffffff;
    font-weight: normal;
    border-left: 1px solid #000000;
  }

  .amenities-list .more {
    color: #00ff29;
    border-left: 1px solid #000000;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .grid-container .col2 {
      display: none;
    }
    .grow {
      display: none;
    }
    .gmobile {
      display: block;
    }
  }

  .grid-container1 {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 8px;
  }

  .grid-container1 .col1 {
    grid-column: span 5;
  }

  .grid-container1 .col2 {
    grid-column: span 7;
  }

  .grid-container1 button {
    display: block;
    width: 100%;
    padding: 8px 16px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.76px;
    border: none;
  }

  .btn-green {
    border-radius: 15px;
    background: #6a9325;
  }
  .btn-purple {
    border-radius: 15px;
    background: #9747ff;
  }
`,c=[{heading:"Womens only Gym opening",date:"May 22",loc:"Hsr layout",text:"Loren ipsum",saving:"20% Saving"},{heading:"Womens only Gym opening",date:"May 22",loc:"Hsr layout",text:"Loren ipsum",saving:"20% Saving"},{heading:"Womens only Gym opening",date:"May 22",loc:"Hsr layout",text:"Loren ipsum",saving:"20% Saving"},{heading:"Womens only Gym opening",date:"May 22",loc:"Hsr layout",text:"Loren ipsum",saving:"20% Saving"}],p=()=>e.jsx("div",{className:"container",children:e.jsx("div",{className:"card-wrapper",children:c.map(i=>e.jsxs("div",{className:"maincard",children:[e.jsxs("div",{className:"bgcard",children:[e.jsxs("div",{className:"bgleft",children:[e.jsx("h4",{children:i.heading}),e.jsxs("h5",{className:"date",children:[i.date," ",e.jsxs("span",{className:"loc",children:[i.loc," "]})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M0.16346 2.11723C0.849857 3.31011 1.53305 4.40177 2.12014 5.70708C3.54869 4.22163 5.00132 2.73621 7.12802 1.27818L6.74374 0.977228C5.02264 1.93398 3.62423 2.90241 2.29997 4.14515C1.80541 3.44237 0.977207 2.41291 0.4518 1.85682L0.16346 2.11723Z",fill:"white"})})," ",i.text," "]}),e.jsxs("li",{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M0.16346 2.11723C0.849857 3.31011 1.53305 4.40177 2.12014 5.70708C3.54869 4.22163 5.00132 2.73621 7.12802 1.27818L6.74374 0.977228C5.02264 1.93398 3.62423 2.90241 2.29997 4.14515C1.80541 3.44237 0.977207 2.41291 0.4518 1.85682L0.16346 2.11723Z",fill:"white"})})," ",i.text," "]}),e.jsxs("li",{children:[" ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M0.16346 2.11723C0.849857 3.31011 1.53305 4.40177 2.12014 5.70708C3.54869 4.22163 5.00132 2.73621 7.12802 1.27818L6.74374 0.977228C5.02264 1.93398 3.62423 2.90241 2.29997 4.14515C1.80541 3.44237 0.977207 2.41291 0.4518 1.85682L0.16346 2.11723Z",fill:"white"})})," ",i.text," "]})]})]}),e.jsx("div",{className:"bgrigt",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405878602.png",className:"girlimg"})}),e.jsxs("p",{className:"saving custom-flex-container",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"size-6",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})," ",i.saving," "]})]}),e.jsx("div",{className:"prebook",children:e.jsx("button",{className:"bookbtn",children:"Pre Book Now"})})]}))})}),g=i=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",...i},t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}),t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"})),m=i=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:50,height:51,viewBox:"0 0 50 51",fill:"none",...i},t.createElement("ellipse",{opacity:.6,cx:25,cy:25.5,rx:25,ry:25.5,fill:"#D9D9D9"}),t.createElement("path",{d:"M33.6257 17.674L33.2323 17.9537L31.9604 16.1647C31.3369 15.2878 30.1237 15.0766 29.2562 15.6933C28.9528 15.909 28.7311 16.1978 28.598 16.5196C27.9358 15.9288 26.9346 15.8476 26.1891 16.3776L26.1887 16.3779C25.3213 16.9946 25.1221 18.21 25.7456 19.0869L27.724 21.8698L21.7451 26.1205L19.7666 23.3376C19.1432 22.4607 17.9298 22.2495 17.062 22.8665C16.3165 23.3965 16.0643 24.3688 16.4047 25.1884C16.0571 25.2083 15.7114 25.3229 15.4081 25.5386C14.5406 26.1553 14.3415 27.3706 14.965 28.2475L16.2369 30.0365L15.8435 30.3162C15.1928 30.7788 15.0437 31.6905 15.5111 32.348L16.6417 33.9382C17.1092 34.5957 18.0192 34.7543 18.6699 34.2918L19.0633 34.0121L20.3351 35.801C20.9586 36.678 22.1718 36.8892 23.0393 36.2725C23.3427 36.0568 23.5644 35.768 23.6975 35.4462C24.3597 36.037 25.3609 36.1182 26.1064 35.5882L26.1069 35.5879C26.9742 34.9712 27.1734 33.7558 26.55 32.8789L24.5715 30.096L30.5504 25.8453L32.5289 28.6282C33.1524 29.5051 34.3657 29.7162 35.2336 29.0993C35.979 28.5693 36.2312 27.597 35.8908 26.7774C36.2384 26.7575 36.5841 26.6429 36.8874 26.4272C37.7549 25.8105 37.954 24.5952 37.3305 23.7182L36.0586 21.9293L36.4521 21.6496C37.1027 21.187 37.2518 20.2753 36.7844 19.6178L35.6538 18.0276C35.1864 17.3701 34.2763 17.2114 33.6257 17.674ZM18.498 33.217L18.1046 33.4966C17.8877 33.6508 17.5843 33.5979 17.4285 33.3788L16.298 31.7886C16.1422 31.5695 16.1919 31.2655 16.4087 31.1113L16.8022 30.8316L18.498 33.217ZM22.6956 34.1229C22.8516 34.3423 22.9049 34.6037 22.8648 34.8489C22.8247 35.0942 22.6912 35.323 22.4741 35.4774C22.0401 35.7859 21.4337 35.6802 21.122 35.2417L15.7518 27.6882C15.44 27.2496 15.5394 26.6422 15.9734 26.3337C16.4074 26.0251 17.0137 26.1308 17.3255 26.5694L22.6956 34.1229ZM25.7631 33.4383C26.0749 33.8768 25.9751 34.4846 25.5416 34.7928L25.5411 34.7931C25.1076 35.1013 24.5008 34.9959 24.189 34.5574L17.4057 25.0161C17.0939 24.5776 17.1937 23.9698 17.6277 23.6613C18.0612 23.3531 18.668 23.4584 18.9798 23.897L25.7631 33.4383ZM28.8523 23.4616L26.1012 25.4175C25.884 25.5719 25.8344 25.8753 25.9904 26.0948C26.1464 26.3142 26.4493 26.367 26.6664 26.2126L29.4176 24.2567L29.9828 25.0518L24.0042 29.3023L22.3084 26.917L28.287 22.6665L28.8523 23.4616ZM34.8898 26.9497C35.2016 27.3882 35.1018 27.996 34.6678 28.3045C34.2343 28.6127 33.6275 28.5073 33.3157 28.0688L29.9385 23.3185C29.9444 23.3274 29.9498 23.3367 29.9545 23.3459L29.889 23.2537C29.8961 23.2612 29.9031 23.2693 29.9096 23.2778L26.5324 18.5275C26.2206 18.089 26.3204 17.4812 26.7539 17.173L26.7544 17.1727C27.1879 16.8645 27.7947 16.9699 28.1065 17.4084L34.8898 26.9497ZM36.5437 24.2776C36.8555 24.7162 36.7561 25.3236 36.3222 25.6321C35.8882 25.9407 35.2818 25.835 34.9701 25.3964L29.5999 17.8429C29.2881 17.4043 29.3875 16.7969 29.8215 16.4884C30.2554 16.1799 30.8618 16.2856 31.1736 16.7241L36.5437 24.2776ZM35.9976 20.1772C36.1533 20.3963 36.1036 20.7003 35.8868 20.8545L35.4934 21.1341L33.7975 18.7488L34.1909 18.4691C34.4078 18.315 34.7112 18.3679 34.867 18.587L35.9976 20.1772Z",fill:"black"})),x=i=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:50,height:51,viewBox:"0 0 50 51",fill:"none",...i},t.createElement("ellipse",{opacity:.6,cx:25,cy:25.5,rx:25,ry:25.5,fill:"#D9D9D9"}),t.createElement("path",{d:"M35.3813 11.268C35.2232 10.8438 34.805 10.5698 34.3158 10.5698C34.082 10.5698 33.8575 10.6351 33.6665 10.7586L27.5583 14.708L27.4576 13.5094C27.3323 12.0169 26.1121 10.793 24.5564 10.5991C23.6185 10.4822 22.6996 10.7151 21.9697 11.2551C21.2498 11.7876 20.7964 12.5773 20.7254 13.4218L20.533 15.7129C20.0691 15.8522 19.6437 16.0896 19.2884 16.415L17.3645 18.1771C16.6912 18.7939 16.6627 19.7849 17.2997 20.4332L19.213 22.3804C18.7734 23.0585 18.498 23.8238 18.4143 24.6094L17.3087 34.9747L16.0158 36.5537C15.9191 36.6718 15.9035 36.8298 15.9756 36.9619C16.0477 37.0939 16.195 37.1774 16.3562 37.1774H19.085C19.32 37.1774 19.5105 37.0028 19.5105 36.7876V35.1821L21.8188 28.575C21.8905 28.37 21.7671 28.1506 21.5432 28.085C21.3197 28.0195 21.0799 28.1324 21.0083 28.3375L18.7744 34.7316H18.1897L19.1573 25.6611L21.7412 26.2397L21.5905 26.6709C21.5188 26.8759 21.6422 27.0953 21.8661 27.1609C22.0898 27.2265 22.3294 27.1135 22.401 26.9085L22.9028 25.472L26.3101 28.9397C26.397 29.0281 26.4619 29.1302 26.5029 29.243L28.6651 35.1846V36.7876C28.6651 37.0029 28.8556 37.1774 29.0906 37.1774H31.8195C31.9807 37.1774 32.128 37.094 32.2001 36.962C32.2722 36.8299 32.2566 36.6719 32.1599 36.5538L30.8505 34.9547L29.2426 28.3269C29.1072 27.7687 28.8884 27.2303 28.5924 26.7268L25.8778 22.109V20.9575C25.8778 20.7422 25.6873 20.5677 25.4523 20.5677C25.2173 20.5677 25.0268 20.7422 25.0268 20.9575V21.6847L21.7388 20.7891C22.0339 20.4555 22.2068 20.0464 22.2348 19.6184C22.3902 19.6589 22.554 19.681 22.7234 19.681H25.4522C26.4392 19.681 27.2421 18.9456 27.2421 18.0416C27.2421 18.0159 27.2393 17.9903 27.2338 17.9651L27.2247 17.9233L35.0042 12.4171C35.3913 12.1431 35.5394 11.6921 35.3813 11.268ZM18.6595 35.5111V36.3979H17.2072L17.9333 35.5111H18.6595ZM21.3883 19.1319V19.4952C21.3883 19.806 21.2647 20.1058 21.0404 20.339L20.7019 20.6909L19.607 19.3537L20.96 18.321C21.0181 18.6291 21.17 18.908 21.3883 19.1319ZM17.9323 19.9118C17.5982 19.5718 17.6131 19.052 17.9663 18.7284L19.8902 16.9663C20.1836 16.6976 20.5423 16.5106 20.9335 16.4171V17.3265L18.7518 18.9918C18.5778 19.1247 18.5479 19.3591 18.6837 19.5251L21.0641 22.4323C21.1365 22.5207 21.1268 22.6463 21.0415 22.7244C20.977 22.7835 20.9019 22.7908 20.8626 22.7898C20.8234 22.7889 20.7486 22.778 20.6876 22.7159L17.9323 19.9118ZM30.9684 36.3979H29.5162V35.5111H30.2423L30.9684 36.3979ZM27.8431 27.0964C28.102 27.5368 28.2933 28.0078 28.4118 28.496L29.9246 34.7316H29.3974L27.3103 28.9965C27.232 28.7814 27.1083 28.5868 26.9427 28.4182L24.6377 26.0724L26.509 24.827L27.8431 27.0964ZM25.1614 22.5348L26.1018 24.1344L24.0653 25.4898L23.0397 24.4461C22.9377 24.3424 22.7831 24.2964 22.6341 24.3258C22.4851 24.3551 22.3646 24.4551 22.3182 24.5881L22.0012 25.4955L19.2409 24.8774L19.2614 24.6853C19.3243 24.0946 19.514 23.5174 19.8143 22.9923L20.055 23.2373C20.2551 23.4409 20.5413 23.5618 20.8402 23.569C20.8496 23.5692 20.859 23.5693 20.8685 23.5693C21.1575 23.5693 21.4385 23.4631 21.6433 23.2756C22.0262 22.9249 22.0699 22.3612 21.745 21.9645L21.365 21.5004L25.1614 22.5348ZM25.4523 18.9015H22.7234C22.2057 18.9015 21.7846 18.5157 21.7846 18.0415V16.3483H22.8227C23.0008 16.8321 23.5004 17.1815 24.0879 17.1815C24.6753 17.1815 25.175 16.8321 25.3531 16.3483H26.0131L26.3904 18.0766C26.3702 18.5346 25.9571 18.9015 25.4523 18.9015ZM24.4155 14.7018C23.8397 14.8201 23.1564 14.6003 22.8515 14.0445L24.7749 13.1637C24.9371 13.0894 25.1256 13.1016 25.2789 13.1965C25.3447 13.2371 25.4954 13.354 25.4771 13.5612C25.4686 13.6568 25.4481 13.754 25.4162 13.8503C25.2763 14.2714 24.8836 14.6057 24.4155 14.7018ZM24.5719 15.4678V15.9586C24.5719 16.2031 24.3547 16.402 24.0878 16.402C23.8208 16.402 23.6037 16.2031 23.6037 15.9586V15.4665C23.761 15.4981 23.9236 15.5149 24.0893 15.5149C24.2481 15.5149 24.4096 15.4991 24.5719 15.4678ZM26.2268 15.5688H25.4229V15.1142C25.8009 14.8574 26.0921 14.4936 26.2304 14.0769C26.2799 13.9275 26.3119 13.7751 26.3252 13.6242C26.3631 13.1961 26.15 12.7947 25.7551 12.5505C25.3499 12.2997 24.8284 12.2676 24.3942 12.4664L22.134 13.5015C21.9567 13.5827 21.8641 13.7653 21.9106 13.9418C22.0401 14.4322 22.346 14.8363 22.7527 15.1122V15.5688H21.3987L21.5739 13.4816C21.627 12.8503 21.9661 12.2598 22.5043 11.8616C23.05 11.4578 23.7381 11.2838 24.4416 11.3715C25.6027 11.5162 26.5143 12.4405 26.6091 13.5692L26.7486 15.2314L26.2268 15.5688ZM34.4838 11.8003L27.0385 17.07L26.8334 16.1308L34.1573 11.3955C34.2039 11.3653 34.2587 11.3494 34.3157 11.3494C34.4931 11.3494 34.5568 11.4685 34.5758 11.5198C34.595 11.571 34.6242 11.7009 34.4838 11.8003Z",fill:"black"})),h=i=>t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:50,height:51,viewBox:"0 0 50 51",fill:"none",...i},t.createElement("ellipse",{opacity:.6,cx:25,cy:25.5,rx:25,ry:25.5,fill:"#D9D9D9"}),t.createElement("path",{d:"M39.2632 34.7744L37.7517 34.1926C37.6303 34.1458 37.5026 34.1264 37.3727 34.1348L36.538 34.1894L33.6894 29.4163L32.7399 23.6859C32.6216 22.9722 32.3044 22.3126 31.8225 21.7785L31.8025 21.7564C31.1467 21.0296 30.2548 20.5895 29.2903 20.5153C29.2892 20.5151 29.2881 20.5151 29.2869 20.5149C29.2817 20.5145 29.2765 20.5138 29.2713 20.5134C29.248 20.5117 28.5513 20.429 28.3527 20.2833C28.4033 20.2321 28.4424 20.1684 28.4647 20.0959L28.82 18.939L29.2435 18.7868C29.4723 18.7046 29.596 18.4537 29.5235 18.2189L28.9464 16.3502C28.943 15.7954 28.7596 15.2473 28.4287 14.8052C27.9366 14.1477 27.1567 13.7553 26.3423 13.7553C26.1307 13.7553 25.9217 13.7821 25.7194 13.8327C25.4948 13.3261 25.0005 13 24.4503 13C23.683 13 23.0587 13.6325 23.0587 14.4099C23.0587 14.9403 23.3453 15.4091 23.7869 15.65C23.6999 15.9099 23.654 16.1839 23.654 16.4591C23.654 17.2244 24.5744 18.4841 24.5744 18.5156V20.0512L23.0383 20.6319C22.1705 20.96 21.4287 21.538 20.8931 22.3035L18.6836 25.4614L17.5714 25.9332C17.2321 26.0771 16.9208 26.2755 16.646 26.523L13.1516 29.6699C13.0552 29.7568 13 29.8812 13 30.012C13 30.012 13.052 32.6654 13.0505 32.6658C13.0503 32.6659 15.0115 35.0245 15.0115 35.0245C14.8728 35.1051 14.7476 35.2105 14.6427 35.3387C14.3845 35.654 14.2793 36.0658 14.3539 36.4685C14.4542 37.0086 14.861 37.4349 15.3903 37.5544C15.7128 37.6273 16.0392 37.6639 16.3664 37.6639C16.5942 37.6639 16.8225 37.6462 17.05 37.6107L17.7102 37.5078C18.0762 37.4508 18.4436 37.4697 18.802 37.5641C19.4164 37.7256 20.0511 37.395 20.2783 36.7943L20.3537 36.5949L20.9538 36.9553C22.0916 37.6388 23.3922 38 24.7149 38H25.7673C26.723 38 27.6211 37.5268 28.1699 36.7342C28.5485 36.1874 28.7357 35.5192 28.6971 34.8524L28.6132 33.4038L28.9394 28.2893L29.5719 27.1133L30.5851 30.288C30.7735 30.8786 31.0625 31.4243 31.444 31.91L35.1817 36.6686C35.3541 36.8881 35.6117 37.014 35.8886 37.014H38.8575C39.4875 37.014 40 36.4947 40 35.8565C40 35.3788 39.7039 34.9439 39.2632 34.7744ZM22.8563 28.8792C22.9263 29.2151 22.9577 29.5574 22.9526 29.8988L20.0643 28.4522C20.213 28.3162 20.3515 28.1681 20.4777 28.0088L21.4107 26.8307C21.4784 27.7266 22.0288 28.518 22.8563 28.8792ZM19.2046 29.0427L22.8381 30.8624C22.7908 31.0717 22.7289 31.2779 22.6528 31.4793L21.9411 31.6656L17.8478 29.6807C17.8478 29.6807 19.1036 29.093 19.2046 29.0427ZM23.7858 30.7154C23.7919 30.6902 23.7959 30.6648 23.7977 30.6394C23.8756 30.1042 23.8766 29.5581 23.7984 29.0209L27.9772 29.1813L27.7463 32.8024L23.582 31.5652C23.6724 31.2875 23.7399 31.0031 23.7858 30.7154ZM28.0355 28.2676L23.3446 28.0875C22.6519 27.8571 22.2224 27.166 22.3214 26.431L22.4544 25.443L23.7975 21.3218L24.4159 21.088L24.2731 21.7793C24.0824 22.702 24.152 23.6572 24.4745 24.5416C24.5417 24.7261 24.7143 24.8407 24.8981 24.8407C24.9478 24.8407 24.9984 24.8323 25.0479 24.8147L25.0871 24.8008C26.3314 24.3564 27.3652 23.407 27.9233 22.1957L28.3361 21.3C28.4487 21.3411 28.565 21.3725 28.6843 21.3936L28.5341 22.0884C28.2155 23.5634 28.3391 25.0731 28.8889 26.4702L28.0355 28.2676ZM27.2506 20.4176C27.2506 20.4176 27.5092 20.7439 27.5678 20.8037L27.1048 21.8085C26.7096 22.6661 26.0227 23.3631 25.1852 23.7701C25.0439 23.1805 25.0336 22.5653 25.1573 21.9669L25.4682 20.4627C25.4693 20.4576 25.4778 19.8558 25.4778 19.8558L25.6636 20.1863C25.7439 20.3293 25.8938 20.4176 26.0561 20.4176L27.2506 20.4176ZM28.3048 18.1531C28.1707 18.2013 28.0669 18.3107 28.0246 18.4484L27.7009 19.5023H26.3187L25.7034 18.4074C25.7117 18.3405 25.7049 18.2728 25.6846 18.209L26.645 17.5575C26.6888 17.5278 26.727 17.4906 26.7581 17.4476L27.1694 16.8788H28.163L28.5314 18.0716L28.3048 18.1531ZM27.7088 15.3582C27.8434 15.5382 27.9403 15.7452 27.9941 15.9635H26.9403C26.7963 15.9635 26.6609 16.033 26.5758 16.1507L26.0763 16.8418L25.0003 17.5716C24.7193 17.2754 24.5574 16.8772 24.5574 16.4591C24.5574 16.1156 24.669 15.7749 24.8717 15.4995L24.9676 15.3693C25.2897 14.9318 25.8036 14.6706 26.3423 14.6706C26.8757 14.6706 27.3865 14.9276 27.7088 15.3582ZM24.4503 13.9153C24.6409 13.9153 24.8119 14.0273 24.8921 14.2013C24.6448 14.3677 24.4242 14.5765 24.2434 14.8221L24.2238 14.8487C24.0653 14.7653 23.9621 14.5987 23.9621 14.4099C23.9621 14.1372 24.1811 13.9153 24.4503 13.9153ZM13.9034 30.2175L17.2462 27.207C17.4464 27.0268 17.6732 26.8823 17.9202 26.7774C17.9202 26.7774 19.3419 26.0991 19.3458 26.0976L21.6301 22.8329C21.9144 22.4265 22.2715 22.0864 22.6818 21.8259L21.6091 25.1177L19.7731 27.4359C19.4542 27.8385 18.5357 28.3401 18.5251 28.3452L14.8545 30.099C14.6868 30.1791 14.5844 30.3548 14.5963 30.5422L14.7108 32.3484L13.9034 32.1121L13.9034 30.2175ZM16.3476 34.8425H16.0441L14.7658 33.3172L15.0219 33.3922L17.003 34.5822C16.8279 34.7461 16.5956 34.8425 16.3476 34.8425ZM19.4347 36.4669C19.3723 36.6318 19.1984 36.7226 19.0293 36.6783C18.5512 36.5523 18.0611 36.527 17.5728 36.6032L16.9127 36.706C16.4701 36.775 16.024 36.7599 15.5869 36.6611C15.4107 36.6213 15.2751 36.4793 15.2418 36.2994C15.2077 36.1158 15.2874 35.9848 15.338 35.9231C15.3885 35.8613 15.5008 35.7578 15.6852 35.7578H16.3476C16.9188 35.7578 17.4473 35.4939 17.7967 35.059L19.5653 36.1213L19.4347 36.4669ZM27.4303 36.2085C27.0505 36.7572 26.4288 37.0847 25.7673 37.0847H24.7149C23.5542 37.0847 22.4129 36.7678 21.4145 36.168L15.6383 32.6983L15.5176 30.7941L16.7938 30.1843L21.6996 32.5632C21.7028 32.5616 22.9777 32.3395 22.9777 32.3395L27.7284 33.7509L27.7952 34.906C27.8219 35.3675 27.6924 35.8301 27.4303 36.2085ZM38.8575 36.0987H35.8886L32.1509 31.34C31.8372 30.9407 31.5996 30.492 31.4447 30.0065L30.108 25.8182C30.0525 25.6442 29.9 25.5204 29.7202 25.5033C29.6522 25.4971 29.5852 25.5067 29.5235 25.5295C29.2207 24.4771 29.1821 23.3699 29.4166 22.2842L29.5903 21.4808C30.1819 21.6051 30.7207 21.914 31.1357 22.374L31.1557 22.3961C31.5198 22.7997 31.7596 23.2981 31.849 23.8374L32.8127 29.654C32.8222 29.711 32.8422 29.7657 32.8717 29.8151L35.9068 34.9008C35.9941 35.0469 36.1559 35.1317 36.3224 35.1207L37.4309 35.0482L38.9424 35.63C39.0347 35.6655 39.0966 35.7565 39.0966 35.8565C39.0966 35.9901 38.9893 36.0987 38.8575 36.0987Z",fill:"black"})),f=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"grow",children:[e.jsx("div",{className:"gleft",children:e.jsxs("div",{className:"image-overlay",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405971895.png"}),e.jsxs("div",{className:"watch-video",children:["Watch Video ",e.jsx(g,{})]})]})}),e.jsxs("div",{className:"gright",children:[e.jsxs("div",{className:"image-row",children:[e.jsx("div",{className:"image-container",children:e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405582737.png",className:"marinimg"})}),e.jsxs("div",{className:"image-container",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405510154.png"}),e.jsx("button",{className:"more-button",children:"19 more"})]})]}),e.jsxs("div",{className:"image-row",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405321628.png",className:"marinimg"}),e.jsxs("div",{className:"map-container",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405194828.png"}),e.jsx("button",{className:"view-map-button",children:"View map"})]})]})]})]}),e.jsxs("div",{className:"gmobile",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405971895.png",style:{width:"100%",marginBottom:"12px"}}),e.jsx("div",{className:"gleft",children:e.jsxs("div",{className:"image-row",children:[e.jsx("div",{className:"image-container",children:e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405582737.png",className:"marinimg"})}),e.jsxs("div",{className:"image-container",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405510154.png"}),e.jsx("button",{className:"more-button",children:"19 more"})]})]})}),e.jsx("div",{className:"gright",children:e.jsxs("div",{className:"image-row",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405321628.png",className:"marinimg"}),e.jsxs("div",{className:"map-container",children:[e.jsx(n,{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405194828.png"}),e.jsx("button",{className:"view-map-button",children:"View map"})]})]})})]}),e.jsxs("div",{className:"gymcontent",children:[e.jsxs("div",{className:"conleft",children:[e.jsx("h2",{children:"Gold Gym"}),e.jsxs("p",{className:"loc",children:[e.jsx(l,{})," ",e.jsx("span",{className:"gdate",children:"1 KM ["})," Hsr Layout 1st ma..."]}),e.jsxs("p",{className:"ppermon",children:[" ",e.jsx("span",{className:"pnum",children:" 899/ "}),"Monthly"]})]}),e.jsxs("div",{className:"conright",children:[e.jsx("p",{children:e.jsx(o,{})}),e.jsx("p",{className:"reviews",children:"121 Reviews"})]})]}),e.jsxs("div",{className:"content",children:[e.jsx("p",{children:"Welcome to EmpowerFit, a premier gym exclusively for women, designed to create a supportive and empowering environment where you can thrive. At EmpowerFit, we believe in the strength, resilience, and potential of every woman. Our state-of-the-art facility offers a wide range of top-tier equipment, tailored fitness classes, and personalized training programs to meet your unique needs and goals."}),e.jsxs("div",{className:"controw",children:[e.jsxs("p",{children:[e.jsx(m,{})," Gym"]}),e.jsxs("p",{children:[e.jsx(h,{})," Yoga"]}),e.jsxs("p",{children:[e.jsx(x,{})," Zumba"]})]})]}),e.jsxs("div",{className:"grid-container",children:[e.jsx("div",{className:"col1",children:e.jsx("p",{className:"info-text",children:"19 More Amenities there"})}),e.jsx("div",{className:"col2",children:e.jsxs("ul",{className:"amenities-list",children:[e.jsx("li",{children:"Pool"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{children:"Kids Area"}),e.jsx("li",{className:"more",children:"More"})]})})]}),e.jsxs("div",{className:"grid-container1",children:[e.jsx("div",{className:"col1",children:e.jsx("button",{className:"btn-green",children:"Add Cart"})}),e.jsx("div",{className:"col2",children:e.jsx("button",{className:"btn-purple",children:"Join Now"})})]})]}),b=()=>e.jsx(d,{children:e.jsx("div",{className:"gymlist-wrapper",children:e.jsxs("div",{className:"gymrow",children:[e.jsxs("div",{className:"leftsec",children:[e.jsx(r,{}),e.jsx(f,{}),e.jsx(s,{})]}),e.jsx("div",{className:"rightsec",children:e.jsx(p,{})})]})})});export{b as default};
