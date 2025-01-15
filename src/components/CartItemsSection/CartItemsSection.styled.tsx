import styled from "styled-components";

export const CartItemsSectionStyled = styled.div`
  .cart-items-list {
  }
  .cart-item-box {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e2e2e2;
    margin-bottom: 14px;
    padding-bottom: 14px;
    .item-name {
      display: flex;
      gap: 7px;
      color: #000;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      letter-spacing: 0.35px;
      margin-bottom: 10px;
      img {
        width: 50px;
        border-radius: 4px;
        margin-right: 5px;
      }
    }
    .item-type {
      color: #000;
      opacity: 0.5;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 166.667% */
      letter-spacing: 0.3px;
      margin-bottom: 10px;
    }
    .item-remove {
      color: #000;
      opacity: 0.5;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      letter-spacing: 0.3px;
      text-decoration-line: underline;
      margin-bottom: 0px;
      cursor: pointer;
    }
    .item-total-price {
      text-align: right;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 10px;
    }
    .item-total-per-price {
      text-align: right;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 10px;
      svg {
        margin-top: -2px;
      }
      span {
        opacity: 0.5;
      }
    }
    .minus-quantity {
      cursor: pointer;
      img {
        height: 27px;
        // min-height: 27px;
      }
    }
    .current-quantity {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */
      letter-spacing: 0.45px;
      padding-top: 3px;
    }
    .plus-quantity {
      cursor: pointer;
    }
    .cart-update-quantity-sec {
      border-radius: 10px;
      border: 1px solid #00c9aa;
      background: rgba(0, 201, 170, 0.24);
      padding: 5px 10px;
      display: flex;
      justify-content: space-between;
      width: 110px;
      height: 41px;
    }
  }
  .total-price-sec {
    display: flex;
    justify-content: space-between;
    p {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */
      letter-spacing: 0.45px;
    }
  }
`;
