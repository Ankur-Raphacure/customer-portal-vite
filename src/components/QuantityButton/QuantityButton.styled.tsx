import styled from "styled-components";

export const QuantityButtonStyled = styled.div`
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
  .delete_image_no1 {
    height: 23px;
    opacity: 0.5;
  }
  .plus-quantity {
    cursor: pointer;
    img {
      height: 24px;
    }
  }
  .cart-update-quantity-sec {
    border-radius: 10px;
    border: 1px solid #00c9aa;
    background: rgba(0, 201, 170, 0.24);
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 41px;
    gap: 5px;
  }
`;
