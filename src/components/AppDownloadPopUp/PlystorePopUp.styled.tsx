import styled from "styled-components";

export const PlystorePopUpStyled = styled.div`
  .download-app-text-div h5 {
    font-size: 20px;
    line-height: 31px;
    font-weight: 700;
    color: #000;
    text-align: center;
  }
  .download-app-qr-div {
    text-align: center;
    margin-top: 2.5rem;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736505487516.png");
    background-repeat: no-repeat;
    background-size: cover;

    height: 17rem;
    width: 100%;
  }
  .download-app-qr-div img {
    height: 8rem;
    width: 9rem;
  }
  .custom-modal-width .modal-dialog {
    max-width: 500px;
  }
  .download-app-sub-text-div h5 {
    margin-top: 1rem;
    font-size: 15px;
    line-height: 31px;
    color: #000;
    text-align: center;
  }
  .download-app-btn-div button {
    border-radius: 3px;
    background-color: #fff;
    color: #9747ff;
  }
  .download-app-btn-div {
    margin-top: 2rem;
    display: flex;
    justify-content: end;
    margin-right: 2rem;
  }
`;
