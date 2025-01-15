import styled from "styled-components";

export const WomenscareStyled = styled.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
    padding-bottom: 100px;
  }
  .radiologyParentDiv {
    background-color: #f6f9fd;
    padding: 1.5rem;
  }
  .categoryText {
    width: 100%;
    position: relative;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: #000;
  }
  .layout-container {
    margin-bottom: 0px !important;
  }
  .header {
    background: linear-gradient(to left, #9747ff, #000033, #9747ff);
    color: white;
    text-align: left;
    padding-left: 2rem;
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-content h1 {
    width: 686px;
    position: relative;
    font-size: 47px;
    line-height: 55px;
    font-weight: 700;
    margin-top: 1.5rem;
  }

  .header-content h1 span {
    color: #8fff00;
  }

  .header-content p {
    width: 340px;
    position: relative;
    font-size: 18px;
    line-height: 34px;
    font-weight: 500;
    color: #fff;
    height: 96px;
    margin-top: 2.5rem;
  }

  .explore-btn {
    /* width: 30%; */
    color: #000;
    background: #fff;
    border: 1px solid #fff;
    font-weight: 500;
    height: 4rem;
    border-radius: 8px;
  }
  .img-div img {
    padding-top: 1rem;
    width: 20rem;
  }
  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap;
  }
  .catCardDiv {
    width: calc(20% - 10px);
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
  }
  .imageDiv {
    margin: 1rem;
  }
  .roundedImages {
    max-width: 100%;
    width: 100%;
  }
  .imageName {
    color: #9747ff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .imageSubtitle {
    color: #000;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    margin: 8px 11px 32px;
  }
  .CTcard-title {
    margin: 0 !important;
    top: 135px;
    left: 42px;
    font-size: 16px;
    line-height: 25px;
    color: #9474ff;
    text-align: center;
    font-weight: 600;
  }
  .CTcard-Subtitle {
    font-size: 10px;
    color: #6f6f6f;
    font-weight: 500;
    opacity: 0.8;
    width: 9rem;
  }
  .Main {
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
    max-width: 200px;
    margin: auto;
  }
  .image-div {
    width: 100px;
    height: 100px;
    background-color: #51f4f4;
  }
  @media (max-width: 700px) {
    .header-content h1 {
      width: 332px;
      font-size: 47px;
      line-height: 55px;
      font-weight: 700;
      margin-top: 4.5rem;
    }
  }

  .Card-div {
    width: 190px;
    height: 230px;
    background: #fdfdfd;
    padding: 2rem 1.5rem;
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    cursor: pointer;
  }

  .main-rows {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -5px;
    gap: 12px;
  }
  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  /*Image*/
  .card-avatar {
    --size: 60px;
    border-radius: 50%;
    transition: transform 0.2s ease;
    margin-bottom: 1rem;
    width: 100px;
    height: 100px;
    background-color: #51f4f4;
  }

  /*Text*/
  .card-title {
    margin: 0 !important;
    top: 135px;
    left: 42px;
    font-size: 16px;
    line-height: 25px;
    color: #9474ff;
    text-align: center;
    font-weight: 600;
  }

  .card-subtitle {
    font-size: 10px;
    color: #6f6f6f;
    font-weight: 500;
    opacity: 0.8;
    width: 9rem;
    text-align: center;
  }

  /*Hover*/
  .card:hover {
    box-shadow: 0 8px 50px #84828233;
  }

  .Card-div:hover .card-info {
    transform: translateY(-5%);
  }

  .Card-div:hover .card-social {
    transform: translateY(100%);
    opacity: 1;
  }

  .card-social__item svg:hover {
    fill: #232323;
    transform: scale(1.1);
  }

  .card-avatar:hover {
    transform: scale(1.1);
  }
`;
