import styled from "styled-components";

export const PackageListStyled = styled.div`
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
    color: #ffff;
    font-weight: 100px;
    text-align: center;
    opacity: 100%;
  }

  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 46px;
    margin-top: 16px;
  }
  .heading-name-rating {
    // height: 24px;
    margin-top: 10px !important;
  }

  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
    }
  }
  .svg-info-icon {
    margin-top: -4px;
    margin-left: 5px;
  }
  .cardstyle {
    width: 100%;
    height: auto;
    flex-shrink: 0;

    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }

  .rating {
    // color: #000;
    /* font-family: Poppins; */
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .locatio-name-sec-row {
    color: #000;
    /* font-family: Poppins; */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 7px;
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
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 5px;
  }
  .heading-name-rating h3 {
    margin-top: 3px;
  }
  .more-labs-action-btns {
    display: flex;
    gap: 12px;
    button {
      width: 100%;
      height: 39px;
    }
    .view-details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 10px;
      font-style: normal;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 10px;
      font-style: normal;
      line-height: normal;
      border: none;
    }
  }
  .labs-near-sec-name {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .tests-include-list {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
    margin-bottom: 6px;
  }
  .amount-box {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
