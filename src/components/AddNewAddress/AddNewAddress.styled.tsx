import styled from "styled-components";

export const AddNewAddressStyled = styled.div`
  font-family: "Outfit", sans-serif;
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
  .address-line1-user {
    label {
      display: block;
    }
    input {
      width: 100%;
      padding-left: 5px;
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
    gap: 2rem;
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
      /* height: 45px; */
      font-size: 22px;
    }
    .cancel-btn {
      width: 200px;
      margin-top: 30px;
      background: #fff;
      color: #000;
      border: 1px solid #000;
      // border: none;
      /* height: 45px; */
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

  button {
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &.selected {
      background: #252b61;
      color: #fff;
    }
  }

  input {
    border: 1px solid #aeaeae;
    border-radius: 0.375rem;
  }
  .delta-select__control {
    border: 1px solid #aeaeae;
    .delta-select__indicator-separator {
      display: none;
    }
    .delta-select__dropdown-indicator {
      color: #000;
    }
  }

  .address-type-buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .type-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: fit-content;
      gap: 2px;
    }
  }
`;
