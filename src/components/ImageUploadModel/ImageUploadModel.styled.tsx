import styled from "styled-components";

export const ImageUploadModelStyled = styled.div`
  .content-image-upload-model-box {
    width: 100%;
    height: 100%;
    h5 {
      color: var(--Shade-100, #000);
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px; /* 168.75% */
    }
  }
  .top-hea-sec-top {
    text-align: center;
  }
  .image-upload-cropper {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .button-upload {
    border-radius: 11px;
    background: #ff5733;
    color: var(--Shade-0, #fff);
    /* Button Text/Medium */
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.028px;
    text-transform: uppercase;
    border: none;
    width: 149px;
    height: 40px;
  }
  .upload-model-box-content {
    border: 1px solid var(--Neutral-100, #eceeef);
    background: rgba(33, 33, 33, 0.03);
    margin-top: 12px;
    .top-hea-sec {
      color: #000;
      margin-top: 60px;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 34px; /* 212.5% */
    }
  }
  .top-hea-sec-content {
    margin-top: 48px;
    li {
      color: #171a23;
      margin-top: 12px;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
      letter-spacing: 0.5px;
    }
  }
  .new-option-body-actions {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    button {
      width: 150px;
      height: 40px;
      text-transform: uppercase;
      border-radius: 11px;
      // border: 1px solid var(--Shade-100, #000);
    }
    .cancel-btn {
      border: 1px solid var(--Shade-100, #000);
      background: #fff;
    }
    .confirm-btn {
      order-radius: 11px;
      background: #ff5733;
      color: #fff;
      color: var(--Shade-0, #fff);
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.028px;
      text-transform: uppercase;
      border: none;
    }
    .confirm-btn:disabled {
      background: #efefef;
    }
  }
`;
