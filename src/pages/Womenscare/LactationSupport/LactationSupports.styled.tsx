import styled from "styled-components";

export const LactationSupportsStyled = styled.div`
  .title {
    color: #000;
    font-size: 62px;
    font-weight: 700;
    width: 40rem;
    letter-spacing: 0px;
  }
  .sub-title {
    color: #9747ff;
  }
  .text-muted {
    width: 584px;
    font-size: 19px;
    line-height: 160%;
    color: #979797;
    margin-top: 1rem;
    opacity: 0.7;
  }
  .left-div {
    margin-top: -5rem;
  }
  .butons-div {
    margin-top: 6rem;
  }
  .image-cls {
    max-width: 100%;
    height: auto;
  }
  .main-div {
    background: #f9f9f9;
  }
  .Period-title {
    font-size: 56px;
    line-height: 120%;
    font-weight: 600;
    color: #4f4f4f;
  }
  .Google-Play-div {
    margin-top: -5px;
  }
  .App-Store-div {
    margin-top: -5px;
  }
  .sub-discription {
    font-style: italic;
    color: #000;
    opacity: 0.4;
  }
  .lead {
    color: #318200;
    font-size: 20px;
    font-weight: 500;
    width: 89%;
    margin-top: 2rem;
  }
  .custome-back {
    font-size: 16px;
    font-weight: 500;
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
    .title {
      width: 20rem;
      margin-top: 3rem;
    }
    .text-muted {
      width: 20rem;
    }
    .image-cls {
      margin-top: 2rem;
    }
    .Period-title {
      width: 20rem;
    }
    .lead {
      width: 20rem;
    }
  }
`;
