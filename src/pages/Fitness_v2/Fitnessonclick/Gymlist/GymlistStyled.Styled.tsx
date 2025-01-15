import styled from "styled-components";

export const GymlistStyled = styled.div`
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
`;
