import styled from "styled-components";

export const PackageTestListStyled = styled.div`
  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .heading-name-rating {
    margin: 14px 15px 9px 15px;

    .heading {
      font-size: 14px;
      line-height: 21px;
      color: #000;
      opacity: 0.8;
    }
  }

  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: url(<path-to-image>) cover no-repeat;
    img {
      width: 100%;
    }
  }

  .cardstyle {
    width: 100%;
    height: auto;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }

  .more-labs-action-btns {
    display: flex;
    gap: 12px;
    padding: 1rem;
    button {
      width: 100%;
      height: 40px;
    }
    .details-btn {
      border-radius: 10px;
      border: 1px solid #9747ff;
      background: #fff;
      box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
      color: #9747ff;
      text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
    }
    .add-to-cart-btn {
      border-radius: 10px;
      background: #9747ff;
      color: #fff;
      font-size: 12px;
      line-height: 18px;
      font-style: normal;
      line-height: normal;
      border: none;
    }
  }

  .tests-include-list {
    color: #000;
    font-size: 12px;
    line-height: 21px;
    opacity: 0.5;
    margin-bottom: 7px;
    margin-top: 7px;
  }

  .amount-box {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    opacity: 0.6;
    margin-bottom: 11.5px;
  }
`;
