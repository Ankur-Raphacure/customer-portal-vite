import styled from "styled-components";

export const GynecologistsStyled = styled.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
    padding-bottom: 100px;
    /* height: 12rem; */
  }
  .header {
    background: linear-gradient(to left, #9747ff, #000033, #9747ff);
    color: white;
    text-align: left;
    padding-left: 4rem;
    position: relative;
    margin-bottom: 3rem;
  }
  .header-content h1 {
    width: 520px;
    font-size: 47px;
    line-height: 55px;
    font-weight: 700;
    margin-top: 2rem;
  }

  .header-content h1 span {
    color: #ffd700;
  }

  .header-content p {
    width: 430px;
    font-size: 20px;
    line-height: 38px;
    font-weight: 300;
    color: #a5a5a5;
    font-style: italic;
    margin-top: 1rem;
  }
  .hospital_img img {
    opacity: 0.9;
    border-radius: 0.625rem;
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
  .Appointment-btn {
    width: 75%;
    border-radius: 3px;
    border: 1px #fff;
    color: #fff;
    border: 1px solid #fff;
    font-weight: 600;
    height: 2.5rem;
  }
  .back-btn {
    border: none;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
    margin-top: -34%;
  }
  @media (max-width: 760px) {
    .back-btn {
      margin-top: 3rem;
    }
    .header-content h1 {
      width: 20rem;
      font-size: 47px;
      line-height: 55px;
      font-weight: 700;
      margin-top: 2rem;
    }
    .header-content p {
      width: 270px;
      font-size: 20px;
      line-height: 38px;
      font-weight: 300;
      color: #a5a5a5;
      font-style: italic;
      margin-top: 1rem;
    }
  }
`;
