import styled from "styled-components";

export const WomanActivitysStyled = styled.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 99%;
    padding-bottom: 100px;
  }
  .header {
    background: linear-gradient(to bottom right, #c896c8, #faf9f9, #c896c8);
    color: white;
    text-align: left;
    padding-left: 4rem;
    position: relative;
    margin-bottom: 3rem;
  }
  .text-dark {
    text-decoration: none;
    padding: 0;
  }
  .title {
    font-size: 36px;
    line-height: 50px;
    font-weight: 800;
    color: #000;
    span {
      color: #ffcc00;
    }
  }
  .lead {
    width: 738px;
    font-size: 18px;
    line-height: 33px;
    color: #6f6f6f;
    font-weight: 400;
    opacity: 0.7;
    margin-top: 3rem;
  }
  .str-btn {
    width: 25%;
    box-shadow: 2px 2px 18px rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    background-color: #9747ff;
    height: 50px;
    color: #fff;
    margin-top: 5rem;
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
  .sub-discription {
    font-style: italic;
    color: #000;
    opacity: 0.4;
  }
  .options {
    width: 266px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-top: 1.5rem;
  }
  .leads {
    color: #318200;
    font-size: 20px;
    font-weight: 500;
    width: 89%;
    margin-top: 2rem;
  }
  .Period-title {
    font-size: 56px;
    line-height: 120%;
    font-weight: 600;
    color: #4f4f4f;
  }
  .img-fluid {
    max-width: 100%;
    height: 30rem;
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
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: transform 1000ms ease;
  }
  .slide {
    display: inline-block;
    height: 500px;
    width: 100%;
    border-radius: 40px;
  }
  .slide {
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
