import styled from "styled-components";

export const OrderConformationStyled = styled.div`
  .order-conformation-top {
    text-align: center;
    padding: 0px 80px;
    h2 {
      color: #000;

      //   font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.25px;
      margin-top: 23px;
      margin-bottom: 16px;
    }
    p {
      color: rgba(0, 0, 0, 0.6);

      text-align: center;
      //   font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 166.667% */
      letter-spacing: 0.15px;
      margin-bottom: 24px;
    }
  }
  .order-conformation-middle {
    padding: 0px 80px;
    h4 {
      color: var(--gray-80, #5e6366);
      //   font-family: Oswald;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.15px;
      margin-bottom: 16px;
      text-align: center;
    }

    .row-order-box {
      gap: 20px;
      display: flex;
      margin-bottom: 30px;
      img {
        width: 140px;
        height: 140px;
      }

      p:nth-child(1) {
        color: #212121;
        // font-family: Oswald;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.15px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      p:nth-child(2) {
        color: var(--gray-80, #5e6366);
        // font-family: Oswald;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.1px;
        margin-bottom: 16px;
      }
      p:nth-child(3) {
        margin-bottom: 16px;
        color: #000;
        // font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
      }

      p:nth-child(4) {
        margin-bottom: 5px;
        color: #212121;
        // font-family: Montserrat;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.1px;
      }
      p {
        margin-bottom: 7px !important;
      }
    }
  }
  .order-conformation-bottom {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 60px;
    button {
      padding: 8px 50px;
      background-color: #9747ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      height: 50px;
      font-size: 18px;
      /* width: 200px; */
      margin-bottom: 20px;
      // width: 275px;
    }
    .continue-shopping-btn {
      background: #fff;
      color: #9747ff;
      border: 1px solid #9747ff;
    }
  }
`;
