import styled from "styled-components";

export const UploadImagesStyled = styled.div`
  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .main-heading {
    display: flex;
    justify-content: center;
    font-size: 22px;
    padding: 29px 0px 0px 0px;
    font-weight: 600;
    font-family: inter;
  }

  .main-content {
    padding: 0rem 20rem;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .poppins-bold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 700;
  }

  .flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex_wrapbetween {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .inlineflex_start {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .inlineflex_center {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flexdirection_col {
    flex-direction: column;
  }

  .upload-prescriptionwrap {
    width: 92.352%;
    margin: 14px auto 14px auto;

    @media only screen and (min-width: 1024px) {
      margin: 17px auto 15px auto;
    }
  }
  .new-option-header {
    display: flex;
    justify-content: space-between;
    // margin-top: 20px;
    button {
      // margin-top: -15px;
    }
    h4 {
      width: 237px;
      position: relative;
      font-size: 24px;
      font-weight: 500;
      color: #000;
      text-align: left;
      display: inline-block;
      opacity: 0.8;
    }
  }
  .button-shadow {
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  #uploadsubmitbtn:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  .savedPrescription__list + label .savedPrescription__default {
    display: block;
    cursor: pointer;
  }
  .savedPrescription__list + label .savedPrescription__selected {
    display: none;
    cursor: pointer;
  }

  .savedPrescription__list:checked + label .savedPrescription__default {
    display: none;
    cursor: pointer;
  }
  .savedPrescription__list:checked + label .savedPrescription__selected {
    display: block;
    cursor: pointer;
  }
  .upload-container {
    width: 100%;
    margin-top: 30px;
    position: relative;
    border-radius: 10px;
    background-color: rgba(37, 43, 97, 0.1);
    border: 3px dashed #252b61;
    box-sizing: border-box;
    height: 300px;
    text-align: center;
    padding-top: 92px;
    cursor: pointer;

    &:hover {
      background: #252b6133;
    }
  }

  .uploaded-image-container {
    width: 100%;
    height: 300px;
    margin-top: 30px;
    border: 3px dashed #252b61;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(37, 43, 97, 0.1);
  }

  .uploaded-image {
    margin: 10px 0px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  .progress-container {
    width: 100%;
    margin-top: 15px;
    height: 231px;
    border: 3px dashed #252b61;
    border-radius: 10px;
    cursor: pointer;
    background: rgba(37, 43, 97, 0.1);

    &:hover {
      background: #252b6133;
    }

    .progress-barwrap {
      width: 81.132%;
      margin: 0 auto;
      padding-top: 61px;

      .progress-bar {
        height: 1rem;
        margin-top: 40px;
        background: #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;

        .progress-div {
          transition-width: auto;
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          background: #252b61;
          height: 100%;
        }
      }
    }
  }

  .upload-prescription-url {
    display: flex;
    justify-content: center;
  }
  .copy-url-btn {
    position: relative;
    border-radius: 10px;
    background-color: #252b61;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-family: inter;
    line-height: 27px;
    @media only screen and (min-width: 1024px) {
      padding: 15px 20px;
    }
  }

  .copy-success-message {
    margin-left: 10px;
    font-size: 1rem;
    font-family: inter;
    font-weight: 600;
    color: #252b61;
  }

  .drag-drop {
    font-size: 16px;
    margin-top: 10px;
    font-weight: 500;
    font-family: inter;
    opacity: 0.7;
  }

  .actions-btn-sec-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 36px;
    margin-bottom: 16px;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 20rem;

    @media (max-width: 760px) {
      flex-direction: column;
    }

    @media only screen and (min-width: 1024px) {
      justify-content: space-between;
      margin-top: 18px;
      margin-bottom: 8px;
    }

    .uploadprescriptions-leftbtns {
      gap: 12px;

      @media only screen and (min-width: 1024px) {
        gap: 24px;
      }

      @media (max-width: 760px) {
        flex-direction: column;
      }
    }

    .uploadprescriptions-rightbtns {
      gap: 12px;
      margin-top: 6px;

      @media only screen and (min-width: 1024px) {
        gap: 24px;
        margin-top: 12px;
      }
    }
  }
  .saved-prescription-btn {
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #252b61;
    box-sizing: border-box;
    width: 100%;
    padding: 7.5px 9px;
    color: #252b61;
    white-space: nowrap;
    @media only screen and (min-width: 1024px) {
      padding: 15px 18px;
    }
  }
  .cancel-prescription-btn {
    position: relative;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #9747ff;
    box-sizing: border-box;
    width: 100%;
    padding: 7px 22px;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    opacity: 0.6;

    @media only screen and (min-width: 1024px) {
      padding: 13px 44px;
    }
  }
  .submit-prescription-btn {
    position: relative;
    border-radius: 10px;
    background-color: #252b61;
    padding: 7px 22px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-family: inter;
    line-height: 27px;
    @media only screen and (min-width: 1024px) {
      padding: 13px 44px;
    }
  }
  .support-text-box-sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
    position: relative;
    font-size: 18px;
    font-family: inter;
    color: #000;
    white-space: pre-wrap;
    text-align: left;
    opacity: 0.6;
  }
  .remarks-prescription {
    margin-top: 10px;
    span {
      opacity: 0.6;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
    }
    textarea {
      border: 2px solid #e0e0e0;
      width: 100%;
      margin: 0;
      padding: 0.5rem;
      font-size: 14px;
      line-height: 24px;
    }
  }
  #dropzone-file {
    display: none;
  }
  .checkmark__circle {
    transform-origin: center;
    stroke-dasharray: 1000;
    fill-opacity: 0;
    -webkit-animation: dash 3s ease-in-out, FillIn 3s 0.35s ease-in-out forwards;
    animation: dash 3s linear, FillIn 3s 0.35s ease-in-out forwards;
  }

  .checkmark__tick {
    stroke-dasharray: 1000;
    stroke-dashoffset: -100;
    -webkit-animation: dash-check 3s 0.35s ease-in-out forwards infinite;
    animation: dash-check 3s 0.35s ease-in-out forwards infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes FillIn {
    from {
      fill-opacity: 0;
    }
    to {
      fill-opacity: 1;
    }
  }

  @-webkit-keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
  .warning-message {
    font-size: 13px;
    color: #d12323;
  }
  .show-add-div h2 {
    margin-top: 5px;
    font-size: 15px;
    opacity: 0.5;
  }
`;
