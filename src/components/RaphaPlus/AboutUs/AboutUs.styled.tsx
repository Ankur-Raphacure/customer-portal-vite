import styled from "styled-components";

export const AboutUsStyled = styled.div`
  width: 100%;
  .BackgroundContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736416180962.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
  }
  .NameOverlay h4 {
    width: 191px;
    position: relative;
    font-size: 40px;
    letter-spacing: 0.03em;
    font-weight: 700;
    color: #021629;
    text-align: justify;
    display: inline-block;
  }
  .NameOverlay p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    letter-spacing: 0.03em;
    font-weight: 600;
    color: #021629;
    text-align: justify;
  }
  @media (max-width: 768px) {
    .NameOverlay {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .NameOverlay {
      font-size: 1.2rem;
      padding: 8px 16px;
    }
  }
  .about-heading-div h5 {
    font-size: 48px;
    letter-spacing: 0.03em;
    color: #27b3a4;
  }
  .about-heading-div-p {
    font-size: 49px;
    letter-spacing: 0.03em;
    color: #27b3a4;
    font-weight: 400;
  }
  .about-heading-div {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-content-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .about-content-div p {
    width: 1000px;
    font-size: 18px;
    letter-spacing: 0.03em;
    font-weight: 400;
    color: #001e3a;
    text-align: center;
    display: inline-block;
  }
  @media (max-width: 480px) {
    .about-heading-div {
      flex-direction: column;
    }
  }

  .about-card-div {
    display: flex;
    justify-content: center;
  }
  .about-card-hover-div {
    width: 25%;
    height: 318.5px;
    position: relative;
    border-radius: 16px;
    background: #f5f5f5;
    transition: box-shadow 0.3s rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    overflow: hidden;
    cursor: pointer;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  .card-info {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 1rem;
  }
  .card-title-text-info h4 {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 600;
    font-family: Poppins;
    color: #27b3a4;
    text-align: center;
  }
  .card-sub-title-text-info p {
    width: 100%;
    font-size: 20px;
    letter-spacing: 0.03em;
    font-weight: 500;
    font-family: Poppins;
    color: #27b3a4;
    text-align: justify;
    height: 150px;
  }

  /*Hover*/
  .about-card-hover-div {
    transition: box-shadow 0.3s ease;
  }

  .about-card-hover-div:hover {
    box-shadow: 0 10px 20px 4px rgba(35, 35, 35, 0.1);
  }

  .about-card-hover-div:hover .card-title-text-info h4,
  .about-card-hover-div:hover .card-sub-title-text-info p {
    color: #a6a7b9;
  }
`;
