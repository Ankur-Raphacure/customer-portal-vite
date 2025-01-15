import styled from "styled-components";

export const PhamacyHeaderStyled = styled.div`
  /* Default styles */
  .pharmacy-header-sec {
    display: flex;
    /* justify-content: space-between; */
    gap: 10%;
    padding: 30px;
    padding-bottom: 0px;
    background: linear-gradient(84deg, #eeffe1 -20.4%, #f7f1ff 143.34%);
  }

  .pharmacy-header-sec-left {
    max-width: 40%;
  }
  .pharmacy-header-sec-right{
    margin: auto;
  }

  .pharmacy-header-sec-right img {
    max-height: 270px;
  }

  h1 {
    color: #000;
    font-size: 38px;
    font-weight: 700;
    opacity: 0.8;
  }

  h2,
  h2 span {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.6;
  }

  .upload-Prescription-btn {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    background: #9747ff;
    box-shadow: 4px 4px 19px 0px rgba(0, 0, 0, 0.25);
    height: 60px;
    border: none;
    width: 200px;
  }

  .buy-Medicine-btn {
    border-radius: 10px;
    background: #ff6fa4;
    color: #fff;
    font-size: 19px;
    font-weight: 600;
    height: 60px;
    border: none;
    width: 170px;
  }

  /* Media queries for tablet */
  @media (max-width: 1024px) {
    .pharmacy-header-sec {
      flex-direction: column;
      align-items: center;
      padding: 30px;
    }

    .pharmacy-header-sec-right {
      margin-top: 20px;
    }

    .pharmacy-header-sec-left {
      text-align: center;
      max-width: 100%;
    }

    .uploadbtn {
      justify-content: center;
      gap: 10px;
    }
  }

  /* Media queries for mobile */
  @media (max-width: 768px) {
    .pharmacy-header-sec {
      flex-direction: column !important;
      align-items: center !important;
      padding: 20px;
    }

    .pharmacy-header-sec-left {
      text-align: center;
      max-width: 100%;
    }

    .uploadbtn {
      justify-content: center;
      gap: 10px;
    }

    .buy-Medicine-btn {
      margin-top: 12px;
    }
  }

  /* Media queries for phone */
  @media (max-width: 400px) {
    .pharmacy-header-sec {
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    h1 {
      font-size: 24px;
    }

    h2,
    h2 span {
      font-size: 12px;
      line-height: 20px;
    }

    .upload-Prescription-btn,
    .buy-Medicine-btn {
      height: 50px;
      width: 140px;
      font-size: 14px;
    }

    .pharmacy-header-sec-left {
      text-align: center;
      max-width: 100%;
    }

    .pharmacy-header-sec-right img {
      max-height: 180px;
    }
  }
`;
