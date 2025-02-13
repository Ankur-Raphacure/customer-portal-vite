import styled from "styled-components";

export const UploadSubPrescriptionStyled = styled.div`
  padding: 20px 56px;

  .upload-sub-prescription-div {
    display: flex;
    gap: 2rem;
    width: 100%;
    margin-top: 1rem;
  }
  .upload-sub-prescription-left-div {
    display: flex;
    gap: 2rem;
    width: 70%;
    padding: 20px 30px;
    border-radius: 25px;
    border: 1px solid #d2cfcf;
  }
  .upload-sub-prescription-right-div {
    background: #f2f2f6;
    border-radius: 25px;
    padding: 25px;
  }
  .upload-sub-prescription-banner {
    width: 100%;
    border-radius: 15px;
    background-color: #d6e4ea;
    padding: 12px 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #1e1e1e;
    font-family: Outfit, sans-serif;
    margin-top: 54px;
  }
  .upload-sub-prescription-banner-img {
    display: grid;
    margin-top: 54px;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .upload-sub-prescription-banner-text {
    width: 50%;
    font-size: 18px;
    letter-spacing: 1.5px;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
  }
  .prescription-header {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 28px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #1e1e1e;
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 45px;
      background-color: #252b61;
      height: 55px;
      padding: 17px 46px;
      font-size: 18px;
      color: #fff;
      font-family: Outfit, sans-serif;
      border: none;
    }
  }
  .prescription-conf-div {
    display: flex;
    justify-content: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 45px;
      background-color: #252b61;
      height: 55px;
      padding: 17px 46px;
      font-size: 18px;
      color: #fff;
      font-family: Outfit, sans-serif;
      border: none;
    }
  }
  .upload-prescription-image {
    width: 42%;
    p {
      width: 100%;
      font-size: 18px;
      letter-spacing: 1.5px;
      font-family: Outfit, sans-serif;
      color: #1e1e1e;
    }
  }
  .upload-prescription-image-div {
    img {
      border-radius: 25px;
      height: 416.7px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .Uploaded-prescription-imgdata {
    width: 100%;
    position: relative;
    border-radius: 15px;
    background-color: #fff;
    padding: 0rem 1rem;
  }
  .savedprescription-main-list-div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .vertical-line {
    width: 1px;
    height: 100%;
    background-color: #ebebeb;
  }
  .upload-container {
    position: relative;
    border-radius: 25px;
    background-color: #fff;
    border: 1px dashed #7291f4;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    padding: 63px 20px;
    text-align: center;
    font-size: 18px;
    color: #1e1e1e;
    font-family: Outfit, sans-serif;
    cursor: pointer;
  }
  .poppins-medium {
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    text-decoration: underline;
  }
  .poppins-semibold {
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
  }
  .hidden {
    display: none;
  }
  .image-format {
    font-size: 13px;
    letter-spacing: 1.5px;
    font-family: Outfit, sans-serif;
    color: #888;
  }
  .prescription-address-card-div {
    width: 100%;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #dcdcdc;
    padding: 21px 28px;
    cursor: pointer;
  }
  .prescription-address-Conf-div {
    width: 100%;
    border-radius: 25px;
    background-color: #fff;
    border: 1px solid #dcdcdc;

    h4 {
      font-size: 28px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #1e1e1e;
    }
    h5 {
      font-size: 22px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #1e1e1e;
      opacity: 0.8;
    }
    p {
      font-size: 18px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #888;
    }
  }
  .c {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
  .progress-container {
    .progress-barwrap {
      display: flex;
      align-items: center;
      height: 2rem;
      .progress-icons {
        width: 1.5rem;
        margin-left: 1rem;
      }

      .progress-bar {
        height: 1rem;
        background: #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
        width: 100%;

        .progress-div {
          transition-width: auto;
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          background: #00a5ff;
          height: 100%;
        }
      }
    }
  }
  .mobile-prescription-conf-div {
    display: none;
    justify-content: center;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 45px;
      background-color: #252b61;
      height: 55px;
      padding: 17px 46px;
      font-size: 18px;
      color: #fff;
      font-family: Outfit, sans-serif;
      border: none;
    }
  }

  .mobile-view-prescription-add-btn {
    display: none;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 45px;
      background-color: #252b61;
      height: 55px;
      padding: 17px 46px;
      font-size: 18px;
      color: #fff;
      font-family: Outfit, sans-serif;
      border: none;
      width: 100%;
    }
  }
  .prescription-address-div {
    width: 60%;
  }
  .address-text {
    font-size: 14px;
    font-weight: 500;
    color: #313131;
    margin: 0px;
  }
  .prescription-address-btn-div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }
  .prescription-upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 45px;
    background-color: #252b61;
    font-size: 14px;
    color: #fff;
    font-family: Outfit, sans-serif;
    border: none;
  }
  @media (max-width: 768px) {
    padding: 10px 20px;
    .vertical-line {
      display: none;
    }
    .mobile-view-prescription-add-btn {
      display: none;
    }
    .mobile-view-prescription-add-btn {
      display: block;
    }
    .upload-sub-prescription-left-div {
      width: 100%;
      padding: 0px 0px;
      flex-direction: column;
      border: none;
    }
    .upload-sub-prescription-banner-text {
      width: 100%;
      p {
        margin-bottom: 0px;
      }
    }
    .upload-prescription-image {
      width: 100%;
    }
    .upload-prescription-image-div img {
      width: 20rem;
      height: 20rem;
    }
    .upload-prescription-image-div {
      display: flex;
      justify-content: center;
    }
    .upload-sub-prescription-div {
      flex-direction: column-reverse;
      gap: 1rem;
    }
    .upload-sub-prescription-right-div {
      width: 100%;
    }
    .mobile-prescription-conf-div {
      margin-top: 2rem;
      justify-content: center;
      display: block;
      button {
        width: 100%;
      }
    }
    .upload-prescription-mobile-div {
      display: flex;
      flex-direction: column;
    }
    .prescription-header {
      button {
        display: none;
      }
    }
  }
`;
