import styled from "styled-components";

export const HospitalStyled = styled.div`
  .hero-image img {
    max-width: 100vw;
  }

  .hero-image {
    margin: 1rem 0;
    position: relative;
  }
  .imgWrapperDiv {
    img {
      max-width: 100vw;
      height: 500px;
      width: 100%;
      object-fit: cover;
    }
  }
  .overlayWrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 1rem;
    font-family: Poppins;
  }

  .timelineWrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .overlayWrapper h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-text-wrapper {
    margin-bottom: 0;
    padding: 1rem;
    text-align: center;
  }

  .background-style-span {
    background: linear-gradient(180deg, #1e918c, #2b4663);
    padding: 0.2rem 0.7rem;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }

  .plus-icon {
    vertical-align: super;
  }

  .text-underline-effect {
    position: relative;
  }

  .text-underline-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 3px solid #27b3a4;
    left: 0;
    bottom: -12px;
    border-radius: 50%;
    height: 15px;
  }

  .software-promo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 2rem;
    width: 100vw;
    height: 80vh;
    box-sizing: border-box;
  }

  .promo-text {
    flex: 1;
    text-align: left;
    padding-right: 2rem;
    max-width: 40%;
  }

  .promo-text h2 {
    font-weight: bold;
  }

  .promo-text p {
    color: #27b3a4;
  }

  .promo-image {
    flex: 1;
    height: 100%;
  }

  .button {
    background: linear-gradient(135deg, #2bb3a5, #001e3a);
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    margin: 10px 0;
  }

  .button:hover {
    background: #1f8c89;
  }

  .compare-benefits {
    background: #fff;
    padding: 2rem;
    width: 100vw;
    box-sizing: border-box;
  }

  .compare-benefits > h2 {
    text-align: center;
  }

  .table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2rem;
  }

  .th,
  .td {
    color: #1e918c;
    padding: 1rem;
    text-align: center;
    border-bottom: 2px solid #2b4663;
  }

  .th {
    width: 25%;
  }

  .td {
    border-bottom: 1px solid #e0e0e0;
  }

  .feature {
    background: linear-gradient(135deg, #09a3b2, #878b90);
    border: none;
    font-family: Poppins;
    color: white;
  }

  .price {
    font-weight: bold;
    color: #1e918c;
  }

  .icon {
    height: 3rem;
    margin-right: 0.5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .primeHead {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    .compare-benefits {
      overflow: scroll;
    }
    .hero-image img {
      max-width: 100%;
    }
    .software-promo,
    .compare-benefits {
      width: 100%;
    }
  }
`;
