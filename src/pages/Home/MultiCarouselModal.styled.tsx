import styled from "styled-components";

export const MultiCarouselModalStyled = styled.div`
  .parent {
    /* padding: 0px 50px; */
    width: 100%;
    position: relative;
    overflow: visible;
  }
  .cardCmp-main-div {
    display: flex;
    justify-content: center;
  }
  .carousal-main-div {
    /* padding: 10px; */
    text-align: center;
  }
  .Carousel-sub-cards-div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 214.58px;
    flex-shrink: 0;
    border-radius: 45px;
    width: 16rem;
  }
  .Carousel-sub-cards-div img {
    margin-top: 3.4rem;
    height: 10rem;
    object-fit: contain;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
  .custom-left-arrow,
  .custom-right-arrow {
    position: absolute;
    top: 40%;
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    z-index: 1;
  }
  .custom-left-arrow {
    left: -10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-left: 15px;
    background: #252b61;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-right-arrow {
    right: -10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-right: 15px;
    background: #252b61;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-left-arrow:hover,
  .custom-right-arrow:hover {
    color: #555;
  }
  .renderCard-div h5 {
    margin-top: 1rem;
    color: #1e1e1e;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
    font-family: Outfit, sans-serif;
  }
  .react-multiple-carousel__arrow--left {
    margin-left: -3rem;
  }
  .react-multiple-carousel__arrow--right {
    margin-right: -3rem;
  }
  .react-multi-carousel-track {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    .parent {
      padding: 10px;
    }
    .react-multi-carousel-track {
      gap: 1rem;
    }
    .react-multiple-carousel__arrow--left {
      margin-left: 0px !important;
      z-index: 1;
    }
    .react-multiple-carousel__arrow--right {
      margin-right: 0px !important;
      z-index: 1;
    }
    .Carousel-sub-cards-div {
      width: 100%;
      border-radius: 25px !important;
    }
    .custom-left-arrow,
    .custom-right-arrow {
      display: none;
    }
    .common-cards-main-div {
      height: 0px;
    }
    .Carousel-sub-cards-div img {
      margin-top: 3.4rem;
      height: 10rem;
      object-fit: contain;
      width: 11rem;
    }
  }
  .labTestCards {
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    .parent {
      padding: 10px 20px;
    }
    .Carousel-sub-cards-div {
      height: 180px;
      width: 14rem;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.8rem;
    }
    .Carousel-sub-cards-div img {
      height: 8rem;
      margin-top: 2.5rem;
    }
  }
  @media (max-width: 768px) {
    .parent {
      padding: 10px;
    }
    .react-multi-carousel-track {
      gap: 1rem;
    }
    .react-multiple-carousel__arrow--left {
      margin-left: 0px !important;
      z-index: 1;
    }
    .react-multiple-carousel__arrow--right {
      margin-right: 0px !important;
      z-index: 1;
    }
    .Carousel-sub-cards-div {
      width: 100%;
    }
    .custom-left-arrow,
    .custom-right-arrow {
      display: none;
    }
    .common-cards-main-div {
      height: 0px;
    }
    .Carousel-sub-cards-div {
      height: 200px;
      width: 4rem;
    }
    .Carousel-sub-cards-div img {
      height: 6.5rem;
      margin-top: 2rem;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }
  }
  @media (max-width: 480px) {
    .parent {
      padding: 5px;
    }
    .Carousel-sub-cards-div {
      height: 140px;
      width: 10rem;
    }
    .Carousel-sub-cards-div img {
      height: 5rem;
      margin-top: 1.5rem;
    }
    .custom-left-arrow,
    .custom-right-arrow {
      top: 35%;
      height: 40px;
      width: 40px;
      font-size: 20px;
      display: none;
    }
  }

  @media (max-width: 391px) {
    .parent {
      padding: 5px 0px;
    }
  }

  @media (min-width: 460px) and (max-width: 770px) {
    .react-multi-carousel-track {
      display: flex;
      justify-content: space-between;
    }
    .Carousel-sub-cards-div {
      width: calc(50% - 1rem);
      margin: 0 0.5rem;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.8rem;
    }
  }
  .labTestCards {
    padding: 2rem;
  }
`;
