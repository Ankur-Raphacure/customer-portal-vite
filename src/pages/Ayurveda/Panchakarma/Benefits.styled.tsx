import styled from "styled-components";

export const BenefitsStyled = styled.div`
  .container {
    border-radius: 20px;
  }
  .container h4 {
    width: 100%;
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .main-card {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .card-div {
    flex: 1 1 calc(17% - 0rem);
    height: 11rem;
    border-radius: 20px;
    background: linear-gradient(234deg, #cdfdd8 -21.89%, #eeecf8 79.84%);
  }
  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .card-div p {
    position: relative;
    font-size: 12px;
    line-height: 156.6%;
    font-weight: 500;
    color: #000;
    text-align: center;
    display: inline-block;
    height: 57px;
    opacity: 0.8;
  }

  @media (max-width: 1200px) {
    .card-div {
      flex: 1 1 calc(33.33% - 2rem);
    }
  }

  @media (max-width: 768px) {
    .card-div {
      flex: 1 1 calc(50% - 2rem);
    }
  }

  @media (max-width: 576px) {
    .card-div {
      flex: 1 1 calc(100% - 2rem);
    }
    .container h4 {
      font-size: 20px;
    }
    .card-div p {
      width: 100%;
      font-size: 14px;
    }
  }
`;
