import styled from "styled-components";

export const NutritionDietsStyled = styled.div`
  width: 100%;

  .title {
    width: 627px;
    font-size: 32px;
    letter-spacing: 0.06em;
    line-height: 45px;
    font-weight: 800;
    color: #fff;
  }
  .title1 {
    margin-top: 2rem;
    width: 507px;
    font-size: 32px;
    letter-spacing: 0.06em;
    line-height: 32px;
    font-weight: 800;
    color: #ffd602;
  }
  .btn-div {
    display: flex;
    margin-top: 5rem;
  }
  .banner-div {
    padding: 5rem;
    background: linear-gradient(
      177.92deg,
      rgba(117, 71, 176, 0.94),
      rgba(143, 106, 191, 0.95) 51.32%,
      #fff
    );
  }

  .custom-btn {
    width: 30%;
    box-shadow: 2px 2px 18px rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    background-color: #9747ff;
    height: 100%;
    font-weight: 600;
    font-size: 14px;
    color: #fff;
  }
  .left-div {
  }
  .butons-div {
    margin-top: 6rem;
  }
  .image-cls {
    max-width: 100%;
    height: auto;
  }
  .main-div {
    width: 100%;
  }
  .Google-Play-div {
    margin-top: -5px;
  }
  .App-Store-div {
    margin-top: -5px;
  }
  .Period-title {
    font-size: 56px;
    line-height: 120%;
    font-weight: 600;
    color: #4f4f4f;
  }
  .sub-discription {
    color: #318200;
  }
  .lead {
    font-size: 20px;
    font-weight: 500;
    width: 76%;
    margin-top: 2rem;
    opacity: 0.8;
  }
  .custome-back {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin-top: -4rem;
  }
  .options {
    width: 266px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-top: 1.5rem;
  }
  .CheckmarkWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #28a745;
  }
  .CheckmarkIcon {
    width: 8px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin-bottom: 3px;
  }

  @media (max-width: 679px) {
    .image-cls {
      margin-top: 3rem;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 679px) {
    .title {
      width: 100%;
      margin-top: 3rem;
    }
    .title1 {
      width: 100%;
      margin-top: 3rem;
    }
    .Period-title {
      width: 20rem;
    }
    .lead {
      width: 20rem;
    }
  }
  .Book-heading {
    margin-top: 6rem;
    width: 100%;
    font-size: 24px;
    letter-spacing: -0.02em;
    font-weight: 600;
    color: #404040;
  }
`;
