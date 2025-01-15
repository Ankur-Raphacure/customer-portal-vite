import styled from "styled-components";

export const MoodDiaryStyled = styled.div`
  width: 100%;

  .banner {
    width: 100%;
    height: auto;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736420839018.png");
    background-size: cover;
    background-position: center;
    padding: 30px 20px;
  }
  .banner h1 {
    color: #2f2f2f;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 2px;
  }
  .banner h1 span{
    color: #F2BD00;
font-size: 50px;
font-style: normal;
font-weight: 800;
line-height: normal;
letter-spacing: 2px;
  }
  .button-container {
    display: flex;
    gap: 12px;
  }

  .introduction {
    padding: 40px;
  }
  .introduction h4 {
    color: #1d1d1d;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.96px;
  }
  .introduction p {
    color: #4d4d4d;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0.28px;
  }
  .About {
    color: #9747ff;
    text-align: justify;
    font-size: 31px;
    font-style: normal;
    font-weight: 600;
    line-height: 34px; /* 109.677% */
    letter-spacing: 0.62px;
  }
  .benefits {
    padding: 40px;
  }
  .benefits .card {
    background: transparent;
    border: none;
    text-align: center;
    align-items: center;
  }
  .benefits h6 {
    color: #383838;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.72px;
    margin: 10px 0 !important;
  }
  .benefits p {
    color: #808080;
    text-align: center;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
    width: 200px;
  }
  .trailbtn{
    border-radius: 3px;
border: 1px solid #9747FF;
color: #9747FF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.32px;
padding:10px 40px;
background-color: #fff;
  }
  .downloadbtn{
    border-radius: 3px;
background: #9747FF;
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.32px;
padding:10px 40px;
border: none;
  }
`;
