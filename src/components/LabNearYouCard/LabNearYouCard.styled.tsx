import styled from "styled-components";

export const LabTestNearYouStyled = styled.div`
  /* Base styles */

  /* General styles that apply to both desktop and mobile */
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
    color: #ffffff;
    font-weight: 100;
    text-align: center;
    opacity: 1;
  }

  .text-overflow {
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
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
    background: #ffffff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 46px;
    margin-top: 16px;
  }

  .heading-name-rating {
    margin-top: 10px !important;
  }

  .imgspace {
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;

    img {
      height: 12rem;
      /* padding: 1rem; */
    }
  }

  .svg-info-icon {
    margin-top: -4px;
    margin-left: 5px;
  }

  .cardstyle {
    width: 100%; /* Adjusted card width to fill the container */
    flex-shrink: 0;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 10px; /* Added padding for better spacing */
  }
  .cardstyle img {
    width: 100%; /* Adjusted image width to fill the container */
    border-radius: 10px; /* Applied border radius to image */
    max-height: 100%;
  }
  .rating {
    font-size: 10px;
    font-weight: 500;
  }

  .locatio-name-sec-row {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
    margin-bottom: 7px;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
  }
  .imgspace {
    height: 178px;
    img {
    }
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
    color: #ffffff;
    font-size: 10px;
    font-weight: 500;
    padding: 5px;
  }

  .heading-name-rating h3 {
    margin-top: 3px;
    font-size: 16px; /* Increased font size for better readability */
  }

  .more-labs-action-btns {
    display: flex;
    justify-content: space-between; /* Adjusted spacing between buttons */
    margin-top: 12px; /* Added margin for spacing */
  }

  .more-labs-action-btns button {
    flex: 1; /* Expanded buttons to fill the space evenly */
    height: 39px;
    margin-right: 6px; /* Added gap between buttons */
  }

  .view-details-btn {
    border-radius: 10px;
    border: 1px solid #9747ff;
    background: #ffffff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    color: #9747ff;
    text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .add-to-cart-btn {
    border-radius: 10px;
    background: #9747ff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    border: none;
  }

  .labs-near-sec-name {
    font-size: 12px;
    font-weight: 400;
  }

  .tests-include-list {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
    margin-bottom: 6px;
  }

  .amount-box {
    font-size: 14px;
    font-weight: 600;
  }

  /* Media queries for responsive design */

  /* Media query for screens narrower than 768px (tablet devices) */
  @media (max-width: 1023px) {
    .cardstyle {
      width: 100%; /* Adjusted card width to fill the screen */
    }

    .more-labs-action-btns {
      flex-direction: column; /* Stack buttons vertically */
    }

    .more-labs-action-btns button {
      width: 100%; /* Set button width to full for stacking */
      margin-bottom: 12px; /* Added space between buttons */
    }
  }

  /* Media query for screens narrower than 768px (mobile devices) */
  @media (max-width: 767px) {
    .cardstyle {
      width: calc(
        300px - 20px
      ); /* Adjusted card width to fill the screen with some margin */
      margin: 10px; /* Added margin for spacing */
    }

    .more-labs-action-btns {
      flex-direction: column; /* Stack buttons vertically */
    }

    .more-labs-action-btns button {
      width: 100%; /* Set button width to full for stacking */
      margin-bottom: 12px; /* Added space between buttons */
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
`;
