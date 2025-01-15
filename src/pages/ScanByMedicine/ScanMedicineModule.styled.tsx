import styled from "styled-components";

export const ScanMedicineModuleStyled = styled.div`
  width: 100%;
  .scanner-container {
    width: 100%;
    display: flex;
  }
  .scanner-box {
    width: 40%;
    background-color: #252b61;
    height: 720px;
    padding: 40px 50px;
  }
  .scanner-image-box {
    width: 100%;
    border-radius: 45px;
    background-color: #2c3474;
    height: 295.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .scanner-image-btn {
    display: flex;
    justify-content: center;
    margin-top: 54px;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 29.36px;
      background-color: #a3dac2;
      height: 59px;
      font-size: 16px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 16px;
      font-weight: 500;
      width: 20rem !important;
    }
  }

  .scanned-image-text {
    margin-top: 54px;
  }

  .uploaded-scan-img {
    width: 29.7rem;
    height: 18.5rem;
    border-radius: 45px;
  }
  .image-main-text {
    font-size: 24px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #fff;
    opacity: 0.8;
  }
  .image-sub-text {
    width: 100%;
    font-size: 16px;
    font-family: Outfit, sans-serif;
    color: #9a9898;
    height: auto;
    overflow: scroll;
  }
  .instructions {
    width: 60%;
    padding: 40px 50px;
  }
  .instructions-text {
    font-size: 28px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    margin-bottom: 40px;
  }
  .instructions-sub-text {
    width: 100%;
    font-size: 18px;
    letter-spacing: 1.5px;
    font-weight: 400;
    color: #888;
    font-family: Outfit, sans-serif;
    span {
      color: #1e1e1e;
      font-weight: 500;
      font-size: 20px;
    }
  }
  .scanErrorMsg {
    width: 100%;
    font-size: 16px;
    font-family: Outfit, sans-serif;
    color: #e06e6e;
    text-align: center;
    margin-top: 5px;
  }
  .suggested-medicines-div {
    padding: 0px 60px;
    width: 60%;
  }
  .medicinesErrorMsg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .medicinesGridContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 4rem;
  }
  .video-div {
    display: flex;
    /* height: 24rem; */
    /* width: 22rem; */
    justify-content: center;
    align-items: center;
    width: 23rem;
    border-radius: 24px;
  }
  /* .query-input-field input {
    height: 4rem;
  } */
  @media (max-width: 768px) {
    .scanner-box {
      padding: 20px 20px;
    }
    .scanner-container {
      flex-direction: column;
    }
    .scanner-box {
      width: 100%;
      height: 50%;
    }
    .scanner-image-btn button {
      width: 100%;
    }
    .uploaded-scan-img {
      width: 23.2rem;
      height: 18.3rem;
      border-radius: 45px;
    }
    .instructions {
      width: 100%;
      padding: 10px 20px;
    }
    .instructions-text {
      font-size: 24px;
      margin: 20px 0px;
    }
    .medicinesGridContainer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .suggested-medicines-div {
      padding: 0px 10px;
      width: 100%;
    }
  }
`;
