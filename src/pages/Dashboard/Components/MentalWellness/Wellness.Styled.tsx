import styled from "styled-components";

export const WellnessStyled = styled.div`
  /* Discover sec */
  .discover-sec {
    width: 100%;
    height: 100%;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736420378456.png");
    background-size: cover;
    background-position: center;
    /* padding: 40px; */
  }
  .discover-sec img {
    width: 100%;
  }
  .startbtn {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px; /* 181.25% */
    border-radius: 3px;
    background: #9747ff;
    border: none;
    padding: 6px 20px;
    float: inline-end;
  }
  .discover-sec p {
    color: #322c2c;
    text-align: justify;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px; /* 221.429% */
  }
  .discover-sec h4 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px; /* 129.167% */
  }
  .made-easy .card {
    background: #fff;
    padding: 20px;
    text-align: center;
    background: #fff;
    border: none;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
  }

  .made-easy .circle-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto 15px;
    border-radius: 50%;
    background-color: #c2cbf8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .made-easy .circle-icon img {
    width: 60px;
    height: auto;
  }

  .made-easy .card h3 {
    margin-bottom: 10px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px; /* 193.75% */
    height: 56px;
  }

  .made-easy .card p {
    color: #5e5858;
    text-align: justify;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 208.333% */
    margin-bottom: 20px;
    height: 110px;
  }

  .made-easy .start-button {
    background-color: #8c4ef8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px; /* 178.571% */
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .made-easy .start-button:hover {
    background-color: #7239d9;
  }

  .banner {
    width: 100%;
    height: auto;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736420378456.png");
    background-size: cover;
    background-position: center;
    /* padding: 30px 20px; */
  }
  .banner h1 {
    color: #2f2f2f;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 2px;
  }
  .banner-text {
    padding: 30px 0;
  }
  .banner h1 span {
    color: #f2bd00;
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
  .trailbtn {
    border-radius: 3px;
    border: 1px solid #9747ff;
    color: #9747ff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
    padding: 10px 40px;
    background-color: #fff;
  }
  .downloadbtn {
    border-radius: 3px;
    background: #9747ff;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.32px;
    padding: 10px 40px;
    border: none;
  }
  .how-do-feel {
    text-align: center;
    background-color: #f4f2fc;
    padding: 20px;
  }

  .day-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .day-tab {
    padding: 10px 20px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #000;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
    background: #e8eaf5;
  }

  .day-tab.active {
    background: #adb6e2;
  }

  .feelings-section h2 {
    margin-bottom: 20px;
    color: #242424;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.8px;
  }

  .emotions {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .emotion {
    color: #242424;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.8px;
  }

  .emoji {
    display: block;
    font-size: 3em;
    margin-bottom: 10px;
  }

  .emotions-container {
    padding: 20px;
    text-align: center;
  }

  .emotions-row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    gap: 20px;
    flex-wrap: wrap;
  }
  .emotion-css {
    border: 1px solid #dadada;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .emotions-icon {
    background-color: #e0e0e0;
    border-radius: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .emotions-icon:hover,
  .emotions-icon.selected {
    background-color: #c6c6c6;
  }

  .icon {
    font-size: 40px;
    width: 40px;
    height: 40px;
  }

  .icon img {
    width: 100%;
    height: 100%;
  }

  .selected .icon img {
    filter: hue-rotate(200deg); /* Change color for the selected icon */
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }

  @media (max-width: 768px) {
    .emotions {
      display: grid !important;
    }
    .day-tabs {
      display: grid !important;
    }
  }

  .gamesCard.card-container {
    gap: 20px;
    padding: 50px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .gamesCard .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 250px;
    height: 100px;
    border: 2px solid transparent;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .gamesCard .card.active {
    border-color: #a66cff;
    box-shadow: 0 4px 12px rgba(166, 108, 255, 0.5);
  }

  .gamesCard .card .icon {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .gamesCard .card .title {
    font-size: 18px;
    font-weight: 600;
    color: #4a4a4a;
  }

  .gamesCard .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;
