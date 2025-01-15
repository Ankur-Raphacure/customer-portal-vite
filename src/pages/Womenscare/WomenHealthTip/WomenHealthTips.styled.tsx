import styled from "styled-components";

export const WomenHealthTipsStyled = styled.div`
  margin: 4rem 0rem 1rem 0rem;
  .text-center {
    display: flex;
    h2 {
      width: 521px;
      font-size: 24px;
      font-weight: 600;
      color: #000;
    }
    span {
      color: #e785ff;
      margin-left: 10px;
    }
  }
  .card {
    height: 16rem;
    background: #f2e9ff;
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
    transition: 0.2s ease-in-out;
  }
  .img-fluid {
    margin-left: -8rem;
  }
  .img {
    width: 100%;
    height: 50%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    background: linear-gradient(#e66465, #9198e5);
    display: flex;
    align-items: top;
    justify-content: right;
    img {
      width: 100%;
    }
  }

  .save {
    transition: 0.2s ease-in-out;
    border-radius: 10px;
    margin: 20px;
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
  }

  .text .h3 {
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }

  .text .p {
    width: 100%;
    font-size: 12px;
    color: #565656;
    text-align: center;
  }

  .card:hover {
    cursor: pointer;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  .save:hover {
    transform: scale(1.1) rotate(10deg);
  }
`;
