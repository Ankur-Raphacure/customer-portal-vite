import{d as D,r as o,j as e,ag as E,ah as w,ai as R,af as L}from"./index-CitTC1Lo.js";const $=D.div`
  padding: 40px 60px;

  .main-container {
    display: flex;
    flex-direction: row;
  }

  .left-side {
    width: 160%;
  }
  .right-side {
    width: 100%;
  }
  .cardContainer {
    width: 100%;
    border: none;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 30px;
    padding-bottom: 10px;
    font-family: Arial, sans-serif;
    background-color: #fff;
  }

  .header {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 16px;
  }

  .profile {
    display: flex;
    flex-direction: column;
  }
  .ratingContainer {
    background-color: #007aff;
    color: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .profileContainer {
    display: flex;
  }

  .profileImage {
    /* width: 100%; */
    height: 240px;
    border-radius: 25px;
    margin-right: 16px;
  }

  .info {
    flex: 1;
  }

  .name {
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-bottom: 0px;
  }

  .bannerWrapper {
    position: absolute;
    top: 12rem;
    left: 4.8rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Outfit;
      color: #252b61;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #2c7420;
    }
  }

  .title {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
    margin-bottom: 5px;
  }

  .qua {
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-top: 16px;

    img {
      width: 6%;
      height: 22.3px;
    }
  }

  .qualifications {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
    line-height: 1.2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 12px;
  }

  .lang {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
    /* align-items: center; */

    img {
      width: 19.4px;
      height: 14.8px;
      margin-left: 5px;
    }

    .languages {
      font-size: 16px;
      font-family: Inter;
      color: #000;
      text-align: left;
      opacity: 0.5;
      margin-bottom: 7px;
    }
  }

  .veri {
    display: flex;
    flex-direction: row;
    margin-left: 3px;
    align-items: center;
    gap: 9px;

    img {
      height: 21px;
    }
  }

  .verification {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #000;
    text-align: left;
    margin: 0;
  }

  .exp {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;

    img {
      width: 6%;
      height: 21px;
    }
  }

  .experience {
    font-size: 16px;
    font-family: Outfit;
    color: #000;
    text-align: left;
    opacity: 0.5;
  }

  .experienceContainer {
    background-color: #f8f8f8;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    text-align: center;
    font-weight: bold;
    color: #444;
  }

  .servicesContainer {
    border-radius: 15px;
    background-color: rgba(146, 189, 246, 0.2);
    margin-top: 16px;
    opacity: 1;
    padding: 40px;
    padding-bottom: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
      text-align: left;
    }
  }

  .serviceListDiv {
    margin-left: 20px;
  }

  .servicesList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    list-style: disc;
    padding: 0;
    margin: 0;
  }

  .servicesList li {
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #000;
    text-align: left;
  }
  li::marker {
    font-size: 1.5rem;
  }

  .serviceListAll {
    width: fit-content;
    margin-left: auto;
    font-size: 16px;
    text-decoration: underline;
    font-family: Inter;
    color: #71aeff;
    text-align: left;
    border: none;
    background: none;
  }

  /* left-side bottom Hospitals details design */

  .hospital-container {
    margin-top: 35px;
    font-family: Arial, sans-serif;
    background-color: #fff;
    padding: 15px 80px 15px 35px;
    width: 100%;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    height: 70.1%;
  }

  .tabs {
    display: flex;
    gap: 20px;
    /* border-bottom: 2px solid #ddd; */
    /* margin-bottom: 16px; */
  }

  .tab {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    text-align: center;
    padding-bottom: 8px;
    cursor: pointer;
    opacity: 0.5;
  }

  .tab.active {
    color: #252b61;
    border-bottom: 4px solid #252b61;
    opacity: 0.9;
  }

  .hospital-list {
    overflow-y: scroll;
    height: calc(350px * 2 + 16px);
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .hospital-list::-webkit-scrollbar {
    display: none;
  }

  .hospital-card {
    background-color: #fff;
    border-bottom: 2px solid #e0e0e0;
    padding: 16px 0px 0px 0px;
  }

  .info-icon {
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
    color: #ccc;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    position: relative;
  }

  .detailTooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
    background-color: #e0e0e0;
    color: #000;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    text-align: left;
    white-space: normal;
    width: 250px;
    z-index: 1000;
  }

  .detailTooltip::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #e0e0e0 transparent;
  }
  .down-part {
    display: flex;
    flex-direction: row;
  }

  .hospital-header {
    display: flex;
    flex-direction: column;
  }

  .left-hospital-side {
    width: 29%;
  }

  .middle {
    margin-left: 60px;
  }
  .hospital-name {
    margin-bottom: -10px;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #4a98ff;
    text-align: left;
    margin: 0;
  }

  .hospital-rating {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .stars {
    color: gold;
    font-size: 1.2rem;
  }

  .hospital-address {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    width: 100%;
    margin-bottom: 0px;
  }
  .hospital-details {
    font-size: 14px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
  }

  .hospital-directions {
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #176cdc;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;

    span img {
      height: 18px;
    }
  }

  .hospital-images {
    display: flex;
    gap: 17px;
    margin: 16px 0;
  }

  .hospital-image {
    width: 70px;
    height: 46.7px;
    border-radius: 5px;
    object-fit: cover;
  }

  .hospital-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 60px;
  }

  .hospital-timings {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;

    p {
      margin-bottom: 0px;
    }
  }

  .hospital-fee {
    font-size: 1rem;
    font-weight: bold;
    span {
      font-size: 16px;
      font-weight: 600;
      font-family: Inter;
      color: #000;
    }
  }

  .call-now-button {
    border-radius: 45px;
    background-color: #a3dac2;
    font-size: 14px;
    font-weight: 500;
    font-family: Poppins;
    color: #252b61;
    /* height: 100%; */
    border: none;
    padding: 12px 34px;
    cursor: pointer;
  }
  .footer-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .call-now-button:hover {
    background-color: #81e6d9;
  }

  .free-question-card {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    font-family: "Arial", sans-serif;
    color: #333;
  }

  .icon-section {
    margin-top: 5rem;
    margin-bottom: 16px;
  }

  .query-icon {
    width: 124.6px;
    height: 124.6px;
  }

  .info-text {
    font-size: 13px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
    text-align: center;
    display: inline-block;
    opacity: 0.5;
  }

  .ask-button {
    background-color: #001f60;
    color: white;
    font-size: 14px;
    padding: 12px 20px;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .ask-button:hover {
    background-color: #003d99;
  }

  /* Time - slot calendar css ---------------------------------------------------------------------------------------*/

  .time-slot-picker {
    margin-left: 16.23px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    border: none;
    font-family: Arial, sans-serif;
    width: 100%;
    padding: 20px 0px;
    background-color: #fff;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 27px;
    margin-bottom: 20px;
    border-radius: 25px 25px 0px 0px;
    background-color: #d3e7ff;
    padding: 10px 20px;
  }

  /* Toggle Labels */
  .toggle-label {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #808080;
    transition: color 0.3s;
  }

  .toggle-label.active {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
  }

  /* Toggle Switch */
  .toggle-switch {
    width: 40px;
    height: 20px;
    border-radius: 10px;
    background-color: #252b61;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-switch.virtual {
    background-color: #ffffff;
  }

  .toggle-switch.clinic {
    background-color: #ffffff;
  }

  /* Toggle Circle */
  .toggle-circle {
    width: 16px;
    height: 16px;
    background-color: #252b61;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
  }

  .toggle-switch.virtual .toggle-circle {
    transform: translateX(0);
  }

  .toggle-switch.clinic .toggle-circle {
    transform: translateX(20px);
  }

  .day-selector-container {
    padding: 0px 10px;
    box-shadow: 0px 12px 19px -9px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  /* Arrows */
  .arrow-button {
    background-color: transparent;
    border: none;
    font-size: 37px;
    color: #252b61;
    cursor: pointer;
    padding: 5px;
    user-select: none;
  }

  /* Scrollable Day Selector */
  .day-selector {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    flex: 1;
  }

  .day-selector::-webkit-scrollbar {
    display: none; /* Hide scrollbar for better design */
  }

  /* Day Button Styling */
  .day-button {
    flex-shrink: 0;
    padding: 10px 20px;
    border: none;
    background-color: unset;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;

    .day-text {
      font-size: 14px;
      font-family: Inter;
      color: #000;
      text-align: center;
    }

    .slot-count {
      font-size: 12px;
      font-family: Inter;
      color: #1aad69;
    }
  }

  .day-button.selected {
    border-radius: 1.5px;
    border: none;
    background-color: unset;
    border-bottom: 3px solid #252b61;
  }

  .title-slot {
    padding: 0px 27px;
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #131313;
    text-align: left;
    margin-bottom: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .fee {
    display: flex;
    text-align: center;
    margin: 10px 30px;
    font-size: 16px;
    font-weight: bold;
    color: #555;
    justify-content: space-between;

    h1 {
      font-size: 21px;
      letter-spacing: 0.02em;
      font-family: Inter;
      color: #000;
      opacity: 0.7;
    }

    h2 {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      margin-right: 40px;
    }
  }

  .day-selector {
    display: flex;
    justify-content: space-between;
  }

  .time-slot-container {
    max-height: 400px;
    overflow-y: auto;
    padding: 10px 10px 10px 47.5px;
    background: #fff;
    border-radius: 6px;
  }

  .time-slot-section {
    margin-bottom: 15px;
  }

  .section-header {
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;

    p {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 0px;

      h1 {
        font-size: 18px;
        font-family: Inter;
        color: #000;
        font-weight: 400;
      }

      h2 {
        font-size: 16px;
        font-family: Inter;
        color: #000;
        opacity: 0.5;
      }
    }
  }

  .slots {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 30px;
    padding: 0px 40px 0px 0px;
  }

  .slot-button {
    width: 100%;
    padding: 8px;
    border: none;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 49.8px;
    font-size: 14px;
    font-family: Outfit;
    color: #252b61;
    text-align: center;
  }

  .slot-button.selected {
    background-color: #252b61;
    color: #ffffff;
  }

  .slot-button.disabled {
    background-color: #edecec;
    color: #ffffff;
    cursor: not-allowed;
  }

  .time-slot-container::-webkit-scrollbar {
    width: 8px;
  }

  .time-slot-container::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }

  .time-slot-container::-webkit-scrollbar-track {
    background: #f9f9f9;
    margin-top: 10px;
  }

  .book-button {
    width: 90%;
    margin: 0px 27px;
    padding: 18px;
    border: none;
    margin-top: 30px;
    font-weight: 500;
    font-family: Outfit;
    border-radius: 43px;
    height: 63.3px;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    background-color: #252b61;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .book-button:disabled {
    background-color: #252b61;
    color: #ffffff;

    cursor: not-allowed;
  }

  /* Doctor's card CSS --------------------------------------------------------------------------------- */

  .doctor-card {
    width: 100%;
    height: 32.4%;
    margin-left: 16.23px;
    margin-top: 35px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: rgba(191, 219, 255, 0.6);

    padding: 30px 37px;
    font-family: "Arial", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 30.34px;
  }

  .doctor-profile {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 17px;
    background-color: #fff;
    height: 102px;
    padding: 0px 10px;
  }

  .doctor-image {
    width: 80px;
    height: 80px;
    margin-right: 12px;
  }

  .doctor-info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .doctor-name {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.8;
    margin: 0;
  }

  .doctor-specialty {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
    text-align: left;
    margin-top: 12px;
  }

  .doctor-connect {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 32.33px;
  }

  .connect-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    margin-left: 20px;
    font-size: 14px;
    color: #333;
    gap: 20px;

    span {
      line-height: 1.2;
      font-size: 24px;
      color: #252b61;
      text-align: left;
      font-family: Inter;
    }
  }

  .connect-icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
  }

  .chat-button,
  .instant-connect-button {
    flex: 1;
    padding: 18px 30px;
    font-size: 18px;
    font-family: Inter;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .chat-button {
    background-color: #fff;
    color: #252b61;
  }

  .instant-connect-button {
    background-color: #001f60;
    color: #fff;
  }
`,q=[{id:1,name:"Well care Hospital",rating:4,address:"Bannerghatta Road, Bangalore",details:"Number 20, 5th Main, Main Road, BS Nagar, Landmark: Near Sriram Temple , Bangalore",directions:"Get Directions",images:["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png"],timings:"12:00 PM - 02:00 PM",days:"Mon - Sat",fee:"₹ 1600"},{id:2,name:"Well care Hospital",rating:4,address:"Bannerghatta Road, Bangalore",details:"Number 20, 5th Main, Main Road, BS Nagar, Landmark: Near Sriram Temple , Bangalore",directions:"Get Directions",images:["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png"],timings:"12:00 PM - 02:00 PM",days:"Mon - Sat",fee:"₹ 1600"},{id:3,name:"Well care Hospital",rating:4,address:"Bannerghatta Road, Bangalore",details:"Number 20, 5th Main, Main Road, BS Nagar, Landmark: Near Sriram Temple , Bangalore",directions:"Get Directions",images:["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png","https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png"],timings:"12:00 PM - 02:00 PM",days:"Mon - Sat",fee:"₹ 1600"}],Q=()=>{const[c,m]=o.useState("Info"),[j,g]=o.useState(null),[n,v]=o.useState(!0),[f,N]=o.useState(0),[p,h]=o.useState(null),k=["Morning","Afternoon","Evening"],b=[{date:"Today",slots:[{time:"09:30 AM",isAvailable:!0},{time:"10:30 AM",isAvailable:!1},{time:"11:00 AM",isAvailable:!0},{time:"11:30 AM",isAvailable:!0},{time:"03:30 PM",isAvailable:!1},{time:"04:30 PM",isAvailable:!0},{time:"05:00 PM",isAvailable:!0},{time:"06:00 PM",isAvailable:!1},{time:"06:30 PM",isAvailable:!0},{time:"07:00 PM",isAvailable:!0},{time:"07:30 PM",isAvailable:!1}]},{date:"Tomorrow",slots:[{time:"10:30 AM",isAvailable:!0},{time:"11:30 AM",isAvailable:!0},{time:"12:30 PM",isAvailable:!1},{time:"01:30 PM",isAvailable:!0},{time:"07:00 PM",isAvailable:!1},{time:"07:30 PM",isAvailable:!0}]},{date:"Sun, 1 Dec",slots:[{time:"02:30 PM",isAvailable:!0},{time:"03:30 PM",isAvailable:!1},{time:"04:30 PM",isAvailable:!0}]}],z=t=>v(t),A=t=>{N(t),h(null)},l=o.useRef(null),I=()=>{l.current&&l.current.scrollBy({left:-100,behavior:"smooth"})},M=()=>{l.current&&l.current.scrollBy({left:100,behavior:"smooth"})},S=t=>{h(t)},C=t=>{g(t)},P=()=>{g(null)},B=({rating:t})=>e.jsxs("div",{className:"bannerWrapper",children:[e.jsxs("div",{className:"rectangle",children:[e.jsx(L,{fill:"#252B61"})," ",t]}),e.jsx("div",{className:"triangle"})]}),[u,y]=o.useState({});o.useEffect(()=>{const t={};k.forEach(a=>{t[a]=!0}),y(t)},[]);const T=t=>{y(a=>({...a,[t]:!a[t]}))};return e.jsx($,{children:e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"left-side",children:[e.jsx("div",{className:"cardContainer",children:e.jsx("div",{className:"header",children:e.jsxs("div",{className:"profileContainer",children:[e.jsxs("div",{className:"profile",children:[e.jsx(B,{rating:4.5}),e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735741676463.png",alt:"Doctor Profile",className:"profileImage"}),e.jsxs("div",{className:"exp",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png",alt:""}),e.jsx("span",{className:"experience",children:"5+ Years Experience"})]})]}),e.jsxs("div",{className:"info",children:[e.jsx("h2",{className:"name",children:"Dr. Abinandh Ramnathskrishnan"}),e.jsx("p",{className:"title",children:"Ayurvedic Surgeon"}),e.jsxs("div",{className:"qua",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735889830917.png",alt:""}),e.jsx("p",{className:"qualifications",children:"BAMS MD MBBS Urology MS General Surgery"})]}),e.jsxs("div",{className:"lang",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735652815819.png",alt:""}),e.jsx("p",{className:"languages",children:"English, Hindi, Tamil, Malayalam"})]}),e.jsxs("div",{className:"veri",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735894581102.png",alt:""}),e.jsx("p",{className:"verification",children:"Medical Registration Verified"})]})]})]})})}),e.jsxs("div",{className:"hospital-container",children:[e.jsxs("div",{className:"tabs",children:[e.jsx("button",{className:`tab ${c==="Info"?"active":""}`,onClick:()=>m("Info"),children:"Info"}),e.jsx("button",{className:`tab ${c==="Consult Q&A"?"active":""}`,onClick:()=>m("Consult Q&A"),children:"Consult Q&A"})]}),c==="Info"&&e.jsx("div",{className:"hospital-list",children:q.map((t,a)=>e.jsxs("div",{className:"hospital-card",children:[e.jsx("div",{className:"hospital-header",children:e.jsx("h2",{className:"hospital-name",children:t.name})}),e.jsxs("div",{className:"down-part",children:[e.jsxs("div",{className:"left-hospital-side",children:[e.jsxs("div",{className:"hospital-rating",children:[e.jsx("span",{children:t.rating}),e.jsx("span",{className:"stars",children:"★★★★★"})]}),e.jsx("p",{className:"hospital-address",children:t.address}),e.jsx("p",{className:"hospital-details",children:t.details}),e.jsxs("a",{href:"#",className:"hospital-directions",children:[e.jsx("span",{children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1736000077017.png",alt:""})})," ",t.directions]})]}),e.jsx("div",{className:"middle",children:e.jsxs("div",{className:"hospital-timings",children:[e.jsx("p",{children:t.days}),e.jsx("p",{children:t.timings})]})}),e.jsx("div",{className:"hospital-footer",children:e.jsxs("div",{className:"hospital-fee",children:[e.jsx("span",{children:t.fee}),e.jsxs("div",{className:"info-icon",onMouseEnter:()=>C(t.id),onMouseLeave:P,children:["i",j===t.id&&e.jsxs("div",{className:"detailTooltip",children:[e.jsx("strong",{children:"This fee is indicative and might vary."}),e.jsx("br",{}),e.jsx("span",{children:"NOTE: Fees are payable at the clinic. There are NO charges for booking an appointment."})]})]})]})})]}),e.jsxs("div",{className:"footer-part",children:[e.jsx("div",{className:"hospital-images",children:t.images.map((s,i)=>e.jsx("img",{src:s,alt:`Hospital ${a+1} - ${i+1}`,className:"hospital-image"},i))}),e.jsx("button",{className:"call-now-button",children:"Call Now"})]})]},a))}),c==="Consult Q&A"&&e.jsxs("div",{className:"free-question-card",children:[e.jsx("div",{className:"icon-section",children:e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735999749446.png",alt:"Query Icon",className:"query-icon"})}),e.jsxs("p",{className:"info-text",children:["No query answered by this doctor. Get ",e.jsx("br",{}),"answers ",e.jsx("br",{}),"to your health queries now"]}),e.jsx("button",{className:"ask-button",children:"Ask Free Question"})]})]})]}),e.jsxs("div",{className:"right-side",children:[e.jsxs("div",{className:"time-slot-picker",children:[e.jsx("h2",{className:"title-slot",children:"Pick a Time Slot"}),e.jsxs("div",{className:"toggle-container",children:[e.jsx("span",{className:`toggle-label ${n?"active":""}`,children:"Virtual Consult"}),e.jsx("div",{className:`toggle-switch ${n?"virtual":"clinic"}`,onClick:()=>z(!n),children:e.jsx("div",{className:"toggle-circle"})}),e.jsx("span",{className:`toggle-label ${n?"":"active"}`,children:"In Clinic Consult"})]}),e.jsxs("div",{className:"fee",children:[e.jsxs("h1",{children:[n?"Virtual Consult":"In Clinic Consult"," "]}),e.jsx("h2",{children:n?"₹ 300 fee":"₹ 500 fee"})]}),e.jsxs("div",{className:"day-selector-container",children:[e.jsx("button",{className:"arrow-button left",onClick:I,children:e.jsx(E,{})}),e.jsx("div",{className:"day-selector",ref:l,children:b.map((t,a)=>e.jsxs("button",{className:`day-button ${f===a?"selected":""}`,onClick:()=>A(a),children:[e.jsx("div",{className:"day-text",children:t.date}),e.jsxs("div",{className:"slot-count",children:[t.slots.filter(s=>s.isAvailable).length," ","Slots"]})]},a))}),e.jsx("button",{className:"arrow-button right",onClick:M,children:e.jsx(w,{})})]}),e.jsx("div",{className:"time-slot-container",children:["Morning","Afternoon","Evening"].map((t,a)=>{const s=b[f].slots.filter(i=>{const[d,H]=i.time.split(":"),x=parseInt(d,10),r=i.time.includes("PM")&&x!==12?x+12:x;if(t==="Morning")return r>=9&&r<12;if(t==="Afternoon")return r>=12&&r<17;if(t==="Evening")return r>=17&&r<21});return e.jsxs("div",{className:"time-slot-section",children:[e.jsxs("div",{className:"section-header",onClick:()=>T(t),children:[e.jsxs("p",{children:[e.jsxs("h1",{children:[t," "]}),e.jsxs("h2",{children:["(",s.length," slot",s.length!==1?"s":"",")"]})]}),u[t]?e.jsx(R,{}):e.jsx(w,{})]}),u[t]&&e.jsx("div",{className:"slots",children:s.map((i,d)=>e.jsx("button",{className:`slot-button ${i.isAvailable?"":"disabled"} ${p===i.time?"selected":""}`,onClick:()=>i.isAvailable&&S(i.time),disabled:!i.isAvailable,children:i.time},d))})]},a)})}),e.jsx("button",{className:"book-button",disabled:!p,onClick:()=>alert(`Slot booked: ${p}`),children:"Book Slot"})]}),e.jsxs("div",{className:"doctor-card",children:[e.jsxs("div",{className:"doctor-profile",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735997629225.png",alt:"Doctor",className:"doctor-image"}),e.jsxs("div",{className:"doctor-info",children:[e.jsx("h4",{className:"doctor-name",children:"Dr. Abinandh Ramnathskrishnan"}),e.jsx("p",{className:"doctor-specialty",children:"Ayurvedic Surgeon"})]})]}),e.jsxs("div",{className:"doctor-connect",children:[e.jsxs("div",{className:"connect-info",children:[e.jsx("img",{src:"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735996347890.png",alt:"Lightning",className:"connect-icon"}),e.jsxs("span",{children:["Connect With Doctor ",e.jsx("br",{})," in ",e.jsx("b",{children:"90 seconds"})]})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsx("button",{className:"chat-button",children:"Chat"}),e.jsx("button",{className:"instant-connect-button",children:"Instant Connect"})]})]})]})]})]})})};export{Q as default};
