import styled from "styled-components";

export const LoginModelStyled = styled.div`
  .g-butttons {
    text-align: center;
  }
  .login-model-content {
    padding: 20px 30px;
  }
  .new-option-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  .input-phone-box {
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    height: 70px;
    width: 100%;
    color: #474646;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 25px;
    letter-spacing: 2px;
  }
  .login-header-left {
    color: #000;
    // font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.8;
  }

  .error_message {
    margin-top: 10px;
  }
  .checkboxtacbox {
    margin-top: 30px;
    display: flex;
    input {
      height: 22px;
      width: 22px;
      position: relative;
      top: 5px;
      margin-right: 16px;
      accent-color: #7b6be6;
    }
    label {
      color: #8d8d8d;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      opacity: 0.8;
      cursor: pointer;
      a {
        opacity: 0.8;
        color: blue;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      a:hover {
        text-decoration: none;
      }
    }
  }
  .proceed-btn {
    margin-top: 24px;
    button {
      border-radius: 10px;
      background: #7b6be6;
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      height: 70px;
      border: none;
      width: 100%;
      cursor: pointer;
    }
    button:disabled {
      border-radius: 10px;
      background: #d9d9d9;
    }
  }
  .login-header-right {
    cursor: pointer;
  }
  .or-text {
    position: relative;
    text-align: center;
    color: #979797;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.15px;
    line-height: 22px;
    padding: 30px 0;

    background-color: #fff;
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    z-index: 9999;
  }
  .or-text:before {
    background-color: rgba(32, 32, 32, 0.15);
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
  }
  .verify-new-line-sec {
    margin-top: 20px;
    color: #8d8d8d;
    // font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .g-butttons {
    > div {
      justify-content: center;
    }
  }
  .login-step2 {
    .proceed-btn {
      //   margin-bottom: 50px;
    }
  }
  .back-btn-sec {
    margin-bottom: 20px;
  }
  .resend-time-sec {
    span {
      background: #fff;
      color: #7b6be6;
      padding: 3px 10px;
      border-radius: 4px;
      font-weight: 600;
      margin-right: 0px;
    }
  }
  .re-send-btn {
    margin-left: 10px;
    border: 1px solid #7b6be6;
    background: #fff;
    color: #7b6be6;
    border-radius: 4px;
  }
  .otp-enter-box {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
    input {
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      color: #000;
      // font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  @media (max-width: 767px) {
    .checkboxtacbox input {
      top: -1px;
    }
    .login-header-left {
      font-size: 20px;
    }
    .verify-new-line-sec {
      font-size: 14px;
    }
    .proceed-btn button {
      font-size: 20px;
    }
    .resend-time-sec p {
      font-size: 14px;
    }
    .otp-enter-box input {
      width: 40px !important;
      height: 40px !important;
      font-size: 20px !important;
    }
    .login-model-content {
      padding: 20px 10px;
    }
    .checkboxtacbox {
      display: flex;
    }
    .checkboxtacbox label {
      font-size: 14px;
      a {
        font-size: 14px;
      }
    }
    .g-butttons .social-btn1 {
      width: 80%;
    }
  }
`;
