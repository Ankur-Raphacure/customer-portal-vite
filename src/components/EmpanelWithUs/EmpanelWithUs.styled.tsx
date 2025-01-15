import styled from "styled-components";

export const EmpanelWithUsStyled = styled.div`
  .new-option-header {
    display: flex;
    justify-content: space-between;
    // margin-top: 20px;
    button {
      // margin-top: -15px;
    }
    h4 {
      color: #007bff;
    }
  }
  .upload-image-sec {
    margin-top: 20px;
    text-align: center;
    button {
      width: 200px;
      // margin-top: 30px;
      background: #fff;
      color: #000;
      border: none;
      height: 45px;
      font-size: 22px;
      border-radius: 4px;
      border: 1px solid #000;
    }
  }
  .signup-md-full {
    width: 100%;
    float: left;
  }
  .row-item-sec-user {
    width: 100%;
    display: flex;
  }

  .add-new-submit-sec {
    width: 100%;
    display: flex;
    justify-content: end;
    .save-btn {
      width: 250px;
      margin-top: 30px;
      background: #9747ff;
      color: #fff;
      border: none;
      height: 45px;
      font-size: 22px;
    }
    .cancel-btn {
      width: 200px;
      margin-top: 30px;
      background: #fff;
      color: #000;
      border: 1px solid #000;
      // border: none;
      height: 45px;
      font-size: 22px;
      margin-right: 20px;
      border-radius: 4px;
    }
  }

  .add-new-user-customer {
    width: 90%;
    margin: auto;
  }
  .mand-sign-field {
    color: red;
  }
  .add-new-user-changes1 {
    // width: 90%;
    // margin: auto;
    margin-top: 10px;
    input {
      height: 44px;
    }
    label {
      margin-top: 10px;
    }
    .form-group {
      margin-bottom: 7px;
    }
    .form-label {
      margin-bottom: 1px;
    }
  }
  .gender-selection-sec {
    display: flex;
    .col-gender {
      margin-right: 20px;
    }
    input {
      height: 20px;
      width: 20px;
    }
    label {
      margin-top: 2px;
      margin-left: 6px;
    }
  }
  .add-new-user-changes1 .form-group label {
    font-size: 18px;
    color: rgb(11, 102, 178);
  }
  .custom-btn {
    background: #9747ff;
    width: 50%;
  }
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .PopupContainer {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .ButtonContainer {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .Title {
    font-size: 18px;
    color: #333;
    margin: 20px 0;
    text-align: center;
  }
`;
