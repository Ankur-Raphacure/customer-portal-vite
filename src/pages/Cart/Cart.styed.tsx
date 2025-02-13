import styled from "styled-components";

export const CartStyled = styled.div`
  width: 100%;
  padding-top: 24px;
  .cart-full-page {
    width: 90%;
    margin: auto;
  }
  .cart-page-content {
    display: flex;
    gap: 1.5rem;
  }
  .depends-user-box-all {
    // display: flex;
    // gap: 20px;
    margin-top: 20px;
    display: flow-root;
    .user_sec_user,
    .depends-user-box {
      width: 100px;
      float: left;
      margin-bottom: 20px;
    }
  }
  .profile_imgwrap {
    width: 4.75rem;
    height: 90px;
    cursor: pointer;
    border-radius: 0.625rem;
    color: rgb(255, 255, 255);
    text-align: center;
    padding: 8px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
  }
  .profile_img {
    width: 2.25rem;
    height: 2.5rem;
    border-radius: 100%;
    margin: auto;
    object-fit: cover;
  }
  .profile_imgname {
    font-size: 0.625rem;
    margin-top: 0.5rem;
    color: #000;
  }
  .active_user {
    .profile_imgwrap {
      background: rgb(255, 111, 164);
    }
    .profile_imgname {
      color: rgb(255, 255, 255);
    }
  }
  .no-results-sec {
    text-align: center;
    padding-top: 100px;
    min-height: 600px;
    button {
      border-radius: 45px;
      border: none;
      /* width: 100%; */
      font-size: 18px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      background: #252b61;
      color: #fff;
      padding: 5px 20px;
    }
  }
  .cart-content-left {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 65%;
    padding: 20px;
  }
  .cart-content-right {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 35%;
    padding: 20px;
  }
  .cart-top-back {
    margin-bottom: 24px;
  }
  .cart-address-top {
    display: flex;
    gap: 14px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 760px) {
      flex-direction: column-reverse;
    }
  }
  .cart-address-right {
    @media (max-width: 760px) {
      display: flex;
    }
    button {
      @media (max-width: 760px) {
        margin-left: auto;
      }
    }
  }
  .cart-right-header {
    color: #000;
    opacity: 0.5;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .cart-address-left {
    width: 70%;
    @media (max-width: 760px) {
      width: 100%;
    }
  }
  .cart-right-customers {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 24px;
    > div {
      width: 76px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      height: 76px;
      text-align: center;
      justify-content: center;
      padding: 7px;
    }
    .customer-box-img {
      height: 40px;
      width: 40px;
      background: #fbbc04;
      margin: auto;
      border-radius: 50px;
    }
    .customer-box-name {
      color: #000;
      font-size: 10px;
      margin-top: 7px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .cart-right-saved-address button {
    border-radius: 5px;
    border: 1px solid #ac9494;
    height: 44px;
    background: #ffffff;
    font-size: 14px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    white-space: nowrap;
    width: 47.549%;
    padding: 0;
  }
  .cart-right-address {
    border-radius: 10px;
    border: 1px solid #e2e2e2;
    padding: 10px;
    width: 100%;
    // display: flex;

    p {
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 200% */
      opacity: 0.7;
      margin-bottom: 5px;
      display: grid;
      grid-template-columns: 150px calc(100% - 150px);
      span {
        display: block;
        text-transform: capitalize;
      }
    }
    button {
      // opacity: 0.7;
      color: #9747ff;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      padding: 2px 13px;
      border-radius: 4px;
      background: no-repeat;
      border: 1px solid #9747ff;
    }
  }
  .cart-right-saved-address {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 30px;
    @media (max-width: 760px) {
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
  .cart-right-delivery-slots {
    display: flex;
    gap: 20px;
  }
  .slots-box {
    border-radius: 10px;
    background: #fff;
    display: flex;
    gap: 14px;
    padding: 14px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    p {
      color: #000;
      // font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 0px;
    }
  }
  .cart-right-saved-address .rapha-select {
    height: 46px;
  }
  .rapha-select__control {
    height: 46px;
  }
  .add-new-address-btn {
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: normal;
    padding: 10px 21px;
    height: 46px;
  }
  .cart-right-delivery-time {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  }
  .cart-content-right-actions {
    display: flex;
    gap: 2rem;
    margin-top: 50px;
    button {
      width: 100%;
      height: 50px;
    }
    .cancel-btn {
      color: #9747ff;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.28px;
      border-radius: 10px;
      border: 1px solid #9747ff;

      opacity: 0.5;
    }
    .save-btn {
      color: #f5f5f5;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.28px;
      border-radius: 10px;
      background: #9747ff;
      border: none;
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
  }
`;
