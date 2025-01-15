import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  margin: 0 8px;
`;

export const MedicineCard = styled.div`
  flex: 1;
  position: relative;
  .generic {
    padding: 1rem;
    background: linear-gradient(234.83deg, #e3f7e9, #fefbf2);
    border-left: 1px solid #e0e0e0;
    height: 100%;
    cursor: pointer;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .branded {
    padding: 1rem;
    cursor: pointer;
  }
`;

export const CategoryLabel = styled.div`
  width: 100%;
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 500;
  font-family: Outfit, sans-serif;
  color: #1e1e1e;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const CategoryLabelGeneric = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  background-color: #4caf50;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

export const Image = styled.img`
  width: 8.7rem;
  height: 6.7rem;
  margin: 0 auto;
  display: block;
  border-radius: 20px;
`;

export const MedicineInfo = styled.div`
  margin-top: 16px;
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
  width: 100%;
  font-size: 16px;
  letter-spacing: 0.02em;
  font-weight: 500;
  font-family: Outfit, sans-serif;
  color: #141414;
  opacity: 0.8;
`;

export const Details = styled.div`
  font-size: 14px;
  color: #666;
`;

export const Delivery = styled.div`
  color: #8d8a8a;
  font-family: Outfit, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.21px;
  margin-top: 0.5rem;
`;

export const Price = styled.div`
  margin-top: 8px;
`;

export const MRP = styled.span`
  font-size: 12px;
  text-decoration: line-through;
  letter-spacing: 0.02em;
  font-family: Outfit, sans-serif;
  color: #7a6d6d;
`;

export const DiscountPrice = styled.span`
  color: #141414;
  font-family: Outfit, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.21px;
`;

export const SavingsLabel = styled.div`
  margin-top: 1rem;
  border-radius: 40px;
  background: #89db7b;
  color: #252b61;
  font-family: Outfit, sans-serif;
  font-size: 10px;
  padding: 4px 8px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  width: 75%;
`;

export const ComparisonCardStyle = styled.div`
  .generic-img-card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    height: 7.125rem;
    width: 9rem;
  }
  .mrp-div {
    font-size: 12px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #7a6d6d;
  }
  .discount-banner {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731687290405.png");
    background-position: top right;
    background-repeat: no-repeat;
  }
  .discount-banner-main-div {
    display: flex;
    position: absolute;
  }
  .discount-banner-div {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731687290405.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 4rem;
    width: 6rem;
    margin-top: -1.8rem;
    margin-left: -1.4rem;
  }
  .discount-banner-div p {
    margin-top: 18px;
    margin-left: 18px;
    color: #181920;
    font-family: Outfit, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.18px;
  }
  .btn-div button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #252b61;
    color: #fff;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }
  .add-to-cart-btn-div {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .generic {
      height: 24rem;
    }
  }
`;
