import styled from "styled-components";

export const TestingStyled = styled.div`
  .content-sec-closest-to-me {
    padding-bottom: 25px;
  }
  .cancel-btn-sec {
    border-radius: 4px;
    border: 1px solid #000;
    width: 50%;
    height: 35px;
    color: #000;
    text-align: center;
    font-family: Oswald;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    background: #fff;
  }
  .cancel-btn-sec-save {
    border: 1px solid #000;
    width: 50%;
    height: 35px;
    color: #fff;
    text-align: center;
    font-family: Oswald;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    background: #fff;
    border-radius: 4px;
    background: #8a0f0f;
  }
  .content-sec-closest-con {
    h5 {
      color: #000;
      font-family: Montserrat;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 10px;
    }
    p {
      color: #000;
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
      margin-bottom: 27px;
    }
  }
  .actions-btns-sec {
    display: flex;
    width: 500px;
    gap: 12px;
  }
  .error-color {
    color: #eb5757;
  }
  .content-sec-closest-con-sec {
    width: 400px;
    margin-bottom: 30px;
    // display: flex;
    // gap: 12px;
    p {
      color: var(--gray-100, #19191d);
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 4px;
      line-height: 24px; /* 171.429% */
    }
    input {
      border-radius: 4px;
      border: 1px solid var(--Light-grey, #d9d9d9);
      color: #000;
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      padding: 14px;
      width: 100%;
      margin-bottom: 20px;
      line-height: 24px; /* 171.429% */
    }
  }
  .closest-to-me-model-body {
    padding: 25px 12px 0px 12px;
  }
`;
