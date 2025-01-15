import styled from "styled-components";

export const HealthCardStyled = styled.div`
  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }
  .cardstyle {
    width: 21rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid black;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 29px;
  }
  .more-labs-action-btns {
    display: flex;
    justify-content: end;
    margin-bottom: 10px;

    button {
      width: 8rem;
      height: 39px;
    }
    .view-details-btn {
      border-radius: 6px;
      border: 1px solid #9747ff;
      background: #9474ff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #fff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-style: normal;
      font-weight: 3400;
      line-height: normal;
    }
  }
  .p-1 {
    margin-bottom: 0px;
    font-weight: 600;
  }

  .p-2 {
    margin-bottom: 0px;
    margin-top: 0;
  }

  .load-more-btn {
    width: 50%;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    border: 0px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
  }

  .more-labs-action-btns-1 {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      width: 8rem;
      height: 39px;
    }
    .load-more-btn {
      border-radius: 10px;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9474ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 14px;
      font-style: normal;
      font-weight: 3400;
      line-height: normal;
    }
  }

  .text-justify {
    text-align: justify;
  }
`;
