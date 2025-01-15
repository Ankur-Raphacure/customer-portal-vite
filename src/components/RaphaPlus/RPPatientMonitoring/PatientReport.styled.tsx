import styled from "styled-components";

export const PatientReportStyled = styled.div`
  .Main-div {
    padding: 5rem;
  }
  .Sub-title {
    width: 635px;
    position: relative;
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    color: #a6a6a6;
  }
  .right-div h2 {
    margin-top: 6.3rem;
    width: 617px;
    position: relative;
    font-size: 50px;
    font-weight: 600;
    color: #191a15;
    white-space: pre-wrap;
  }
  .rating-txt {
    width: 156px;
    font-size: 18px;
    color: #a6a6a6;
  }

  .rating {
    width: 112px;
    font-size: 18px;
    color: #191a15;
    font-weight: 600;
  }
  .reting-div {
    line-height: 15px;
  }
  .reting-Maindiv {
    gap: 25px;
    margin-top: 4rem;
  }
  .service-title {
    width: 300px;
    font-size: 28px;
    font-weight: 600;
    color: #001e3a;
  }
  .service-description {
    width: 428px;
    position: relative;
    font-size: 16px;
    font-weight: 500;
    font-family: Poppins;
    color: #a6a6a6;
    text-align: left;
    display: inline-block;
  }
  .icon-div {
    /* margin-top: -4rem; */
    border: 1px solid #fff;
    height: 2.5rem;
    width: 2.5rem;
    background: #fff;
  }

  @media (max-width: 700px) {
    .Main-div {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 703px) {
    .Contents {
      margin: auto;
    }
  }
`;
