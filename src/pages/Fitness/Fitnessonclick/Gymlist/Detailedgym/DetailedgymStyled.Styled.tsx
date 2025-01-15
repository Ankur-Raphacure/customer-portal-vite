import styled from "styled-components";

export const DetailedgymStyled = styled.div`
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
`;
