import styled from "styled-components";

export const CheckoutStyled = styled.div`
  width: 100%;
  padding-top: 24px;
  background: #f6f9fd;
  .cart-full-page {
    width: 90%;
    margin: auto;
  }
  .cart-page-content {
    display: flex;
    gap: 1.5rem;
  }
  .wallet_checbox_box {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
  .checkout-final-amount-sec-ambulance {
    margin-top: 15px;
  }
  .no-results-sec {
    text-align: center;
    padding-top: 100px;
    min-height: 600px;
  }
  .cart-content-left {
    border-radius: 10px;
    width: 60%;
    // box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    // background: #fff;
    // padding: 20px;
  }

  .cart-content-right {
    margin-top: 2rem;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 40%;
    padding: 20px;
  }
  .checkout-item-box {
  }
  .checkout-item-box-main {
    // border: 1px solid #e2e2e2;
    padding: 16px;
    // border-radius: 4px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 24px;
    > div:not(:last-child) {
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 15px;
      padding-bottom: 15px;
    }
  }

  .cart-top-back {
    margin-bottom: 24px;
  }
  .cart-address-top {
    display: flex;
    gap: 14px;
    justify-content: space-between;
  }
  .your-cart-sec {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
  }
  .checkout-items-all {
    margin-bottom: 24px;
  }
  .checkout-item-box-header {
    display: flex;
    justify-content: space-between;
    p {
      margin-bottom: 10px;
    }
    .item-box-left {
      // #8d8d8d;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .item-box-right span {
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      letter-spacing: 0.3px;
      text-decoration-line: underline;
      opacity: 0.5;
      cursor: pointer;
    }
  }
  .remove-sec-cont1 {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 0.3px;
    text-decoration-line: underline;
    opacity: 0.5;
    cursor: pointer;
  }
  .vir-name-sec-left {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.4px;
    opacity: 0.8;
  }
  .total-price-sec {
    display: flex;
    justify-content: space-between;
    border-radius: 0px 0px 5px 5px;
    border-top: 0.5px solid #8d8d8d;
    background: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    p {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */
      letter-spacing: 0.45px;
    }
  }

  .body-top-left,
  .dr-content-sec-content {
    > div:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  .body-top-left-header {
    display: flex;
    justify-content: space-between;
  }

  .checkout-item-box-body {
    p {
      margin-bottom: 1px;
    }
  }
  .dr-content-sec-full {
    display: flex;
    gap: 16px;
    .dr-img img {
      height: 38px;
      width: 38px;
      border-radius: 100%;
    }
    .pat-img img {
      height: 27px;
    }
    .dr-content {
      .dr-name {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.35px;
        opacity: 0.8;
      }
      .dr-caregory {
        color: #000;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 200% */
        letter-spacing: 0.25px;
        opacity: 0.5;
        margin-bottom: 0px;
      }
    }
    .pat-name {
      color: #000;
      opacity: 0.8;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.35px;
      padding-top: 5px;
      margin-bottom: 0px;
    }
  }
  .checkout-name-sec {
    color: #000;
    font-size: 14px;
    font-style: normal;
    opacity: 0.8;
    font-weight: 500;
    line-height: 20px; /* 166.667% */
    letter-spacing: 0.3px;
  }
  .checkout-final-amount-sec {
    color: #000;
    font-size: 16px;
    font-style: normal;
    // opacity: 0.8;
    font-weight: 600;
    line-height: 20px; /* 166.667% */
    letter-spacing: 0.3px;
  }
  .checkout-name-sec span:nth-child(1),
  .pat-img,
  .dr-img {
    width: 70px;
    display: inline-block;
  }
  .checkout-pha-items-footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #e2e2e2;
    padding-top: 20px;
    p {
      margin-bottom: 5px;
    }
    .d-paha-name {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 125% */
      letter-spacing: 0.4px;
    }
    .d-paha-address {
      color: #000;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 200% */
      letter-spacing: 0.25px;
      opacity: 0.5;
    }
    span {
      color: #9747ff;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 166.667% */
      letter-spacing: 0.3px;
      cursor: pointer;
    }
  }
  .checkout-page-design1 {
    .dr-content-sec-content {
      margin-top: -10px;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .checkout-name-sec span:nth-child(1),
    .pat-img,
    .dr-img {
      width: auto;
      display: inline-block;
      margin-right: 12px;
    }
  }
  .sec-right-content-box {
    margin-bottom: 30px;
    h3 {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-bottom: 20px;
    }
  }
  .billing-details-sec {
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    p {
      display: flex;
      justify-content: space-between;
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 50px;
      padding-left: 15px;
      padding-right: 20px;
      margin-bottom: 0px;
    }

    p:not(:last-child) {
      border-bottom: 1px solid #e2e2e2;
    }
  }
  .coupon-sec-checkout {
    border-radius: 2px;
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .billing-details-sec {
    .final-pmt {
      font-weight: 600;
    }
    .final-dis-pmt {
      color: #34a853;
      font-weight: 600;
    }
    .tot-amt-pmt {
      font-weight: 500;
    }
  }
  .wallet-sec-cont {
    input {
      margin-left: 20px;
    }
  }
  .checkout-pay-buttom.checkout-btn-blue button {
    background-color: rgb(19, 100, 241);
  }
  .checkout-pay-buttom.checkout-btn-green button {
    background-color: #16c47f;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .checkout-pay-buttom {
    margin-bottom: 20px;
    button {
      width: 100%;
      height: 56px;
      border-radius: 2px;
      background: #9747ff;
      border: none;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .cart-page-content {
      flex-direction: column;
      gap: 1rem; /* Adjust the gap for mobile view */
    }

    .cart-content-left,
    .cart-content-right {
      width: 100%;
    }
    .cart-top-back {
      margin-top: 20px;
    }
  }

  .delivery-time {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 20px 30px;
    /* text-align: center; */
  }
  .delivery-time h2 {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .delivery-time span {
    color: #188e04;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .delivery-time p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    margin-bottom: 0;
  }
  .medRecords {
    background: rgba(37, 43, 97, 0.9);
    color: #fff;
  }
`;
