import styled from "styled-components";
import gym_bnr_img from "../../assets/images/fitness/gym_bnr_img.png";
import gym_bnr1_img from "../../assets/images/fitness/gym_bnr1_img.png";
import gym_bnr2_img from "../../assets/images/fitness/gym_bnr2_img.png";
import gym_bnr4_img from "../../assets/images/fitness/gym_bnr4_img.png";

export const GymIndexStyled = styled.div`
  width: 100%;
  background: #ffffff;
  .banner-wrapper {
    width: 100%;
    margin: 0;
  }
  .banner {
    gap: 20px;
    background-image: url(${gym_bnr_img});
    overflow: hidden;
    background-size: cover;
  }
  .banner-1 {
    background-image: url(${gym_bnr1_img});
    overflow: hidden;
    background-size: cover;
  }
  .banner-2 {
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736424815350.png");
    overflow: hidden;
    background-size: cover;
  }
  .banner-5 {
    background: #f2f2f2;
    overflow: hidden;
    background-size: cover;
  }
  .banner-3 {
    background-image: url(${gym_bnr2_img});
    overflow: hidden;
    background-size: cover;
  }
  .banner-4 {
    background-image: url(${gym_bnr4_img});
    overflow: hidden;
    background-size: cover;
  }
  .banner-1-text-div {
    margin-top: 5.5rem;
    text-align: center;
  }
  .banner-1-text-div h4 {
    width: 100%;
    font-size: 45px;
    line-height: 55px;
    font-weight: 800;
    color: #ff9c00;
  }
  .banner-1-text-div h5 {
    margin-top: -1rem;
    width: 100%;
    font-size: 45px;
    line-height: 55px;
    font-weight: 700;
    color: #000;
  }
  .banner-4-text-div {
    margin-top: 6rem;
  }
  .banner-4-text-div span {
    color: #ff9c00;
  }
  .banner-4-text-div h4 {
    width: 100%;
    font-size: 45px;
    line-height: 55px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    color: #282728;
  }
  .sub-banner {
    padding: 2rem;
    display: flex;
    align-items: flex-start;
  }
  .fitness-girl-img {
    margin-top: -3.5rem;
  }
  .left-content {
    width: 63%;
    padding: 20px;
    color: #fff;
  }
  .left-contnet h2 {
    width: 100%;
    font-size: 52px;
    line-height: 60px;
    font-weight: 800;
    height: 182px;
    color: #fff;
  }
  .left-content-span {
    color: #ff9c00;
  }
  .subscribe {
    margin-top: 1rem;
    color: #fff;
    width: 30%;
    flex-shrink: 0;
    border-radius: 4px;
    background: linear-gradient(to top, #6f20b7, #6f20b7);
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.07);
    border: none;
  }
  .headingcat {
    margin-top: 2rem;
    margin-bottom: 3rem;
    width: 100%;
    font-size: 24px;
    line-height: 16px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
  .catCardDiv {
    flex: 1 0 calc(50% - 20px);
    padding: 4px;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .filter-catCardDiv {
    display: flex;
    justify-content: start;
    align-items: center;
    flex: 1 0 calc(50% - 20px);
    padding: 4px;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 1px;
    box-sizing: border-box;
  }
  .imageName {
    color: #6a2cbb;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    margin-top: 12px;
  }
  .filter-image-Name {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    margin-top: 12px;
  }
  .image-sub-Name {
    width: 138px;
    font-size: 12px;
    line-height: 16px;
    color: #807e7e;
    text-align: center;
    display: inline-block;
  }
  .gym-image-img {
    width: 10rem;
  }
  .Banner {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .WorkoutDiv {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    align-items: center;
    img {
      width: 3rem;
      margin-bottom: 3rem;
      height: 3rem;
      margin-right: 15px;
      text-align: center;
      display: inline-block;
      position: relative;
    }
    h6 {
      width: 95%;
      position: relative;
      font-size: 12px;
      color: #7e7474;
      text-align: center;
      display: inline-block;
    }
    h4 {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #000;
    }
  }
  .gym-banner-wrapper {
    width: 95%;
    margin: 0 auto; /* Center align horizontally */
  }
  .gym1-banner-div {
    display: flex;
    align-items: flex-start;
    gap: 20px; /* Adjust the gap between left-content and right-content */
    border-radius: 20px;
    border: none;
    background: linear-gradient(261.53deg, #9dd0ff, #fff);
    overflow: hidden; /* Ensure no overflow from children */
    padding: 12px;
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
  }
  .gym-left-content {
    width: 70%;
  }
  .gym-left-content h2 {
    text-transform: uppercase;
    color: #000;
    span {
      color: #ff9c00;
    }
  }
  .gym-ptext-div {
    width: 100%;
    font-size: 14px;
    color: #6d5757;
    height: 63px;
  }
  .shopnow {
    width: 30%;
    position: relative;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.48);
    border-radius: 5px;
    background-color: #390061;
    border: 1px solid rgba(255, 255, 255, 0.53);
    box-sizing: border-box;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
  .gym-near-me {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #101010;
  }
  .gym-near-me-card-div {
    padding: 2rem;
  }
  .filter-gym-image-img {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
  }
  .filter-imageDiv {
    display: flex;
    justify-content: start;
    align-items: center;
    border: 2px solid red;
    border-radius: 50%;
    height: 3.2rem;
    width: 3.2rem;
  }
  .filter-card-main-div {
    padding: 2rem;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .filter-gym-near-me-card-div {
    width: 70%;
  }
  .filter-gym-div {
    height: 100%;
    width: 30%;
  }
  .gym-back-btn-div h5 {
    padding: 1rem;
    margin-left: 3.5rem;
    cursor: pointer;
  }
  .gym-back-btn-div {
    width: 10rem;
  }
  .filter-cat-Card-Div {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #000;
  }
  .filter-subtitle-cat-Card-Div {
    font-size: 14px;
    color: #000;
    opacity: 0.54;
  }

  @media (max-width: 774px) {
    .filter-container-div {
      flex-direction: column;
    }
    .filter-gym-div {
      height: 100%;
      width: 100%;
    }
  }

  .column-images {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .column-images img {
    width: 200px;
    height: 8.3rem;
  }
  .final-column-images img {
    width: 100%;
    height: 14.5rem;
  }
  .gym-left-content-view-div {
    width: 60%;
  }
  .gym-right-content-view-div {
    width: 40%;
  }
  .final-img-div {
    height: 12rem;
  }
  .gym-facilities-cards {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: 3rem;
    width: 100%;
  }
  .gym-facilities-cards-text {
    display: flex;
  }
  .gym-facilities-cards-text p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gym-view-title-div {
    width: 100%;
    font-size: 22px;
    line-height: 35px;
    font-weight: 600;
    color: #000;
  }
  .gym-view-param-div {
    display: flex;
    align-items: center;
    width: 90%;
    font-size: 16px;
    color: #000;
    opacity: 0.7;
  }
  .add-gym-div {
    width: 63%;
  }
  .gym-view-amount-div {
    font-size: 18px;
    font-weight: 600;
    color: #000;
  }
  .back-btn-gym-div {
    cursor: pointer;
    width: 5rem;
  }
  .gym-media-icon-div {
    display: flex;
    align-items: center;
    position: relative;
    font-size: 15px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
  }
  .btn-add-gym-div {
    display: flex;
  }

  /* ================================== */
  .right-content {
    width: 30%;
    overflow: hidden;
    text-align: center;
  }

  .fitness-girl-img {
    text-align: center;
    width: 22rem;
    height: 25rem;
  }
  .fitness-img-div {
    display: flex;
  }
  .fitness-text-img {
    margin-top: 2rem;
    width: 40%;
    height: 20rem;
  }
  @media (max-width: 768px) {
    .Banner {
      flex-direction: column;
      display: block;
    }

    .left-content,
    .right-content {
      width: 100%;
    }

    .right-content {
      margin-top: 20px;
    }

    .subscribe {
      width: 100%;
      margin-top: 15px;
    }
  }
  .category-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .imageDiv {
  }

  @media (max-width: 768px) {
    .catCardDiv {
      flex-basis: calc(50% - 20px);
    }
  }

  .pro-wrapper {
    width: 90%;
    margin: 0 auto;
  }

  .proCardMainDiv {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-top: 20px;
  }

  .proCardDiv {
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #132803;
    width: 188px;
    margin: 0 10px;
    padding: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .proimageDiv {
    position: relative;
    text-align: center;
    width: -webkit-fill-available;
  }
  .roundedImages {
    max-width: 100%;
  }

  .roundedImages {
    object-fit: cover;
  }

  .savingsTag {
    position: absolute;
    top: 5px;
    left: 5px;
    color: #fff500;
    padding: 5px;
    font-size: 10px;
    border-radius: 5px;
    z-index: 1;
  }

  .proimageName {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
  }

  .proLocation {
    display: flex;
  }

  .proLocation svg {
    width: 9px;
    height: 11px;
    fill: #f5f5f5;
    margin-right: 5px;
  }

  .prolocation {
    color: #fff;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
  }

  .proimagePrice {
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 5px;
  }

  .addToCartButton {
    background-color: #9747ff;
    color: #fff;
    border: none;
    padding: 10px;
    margin-top: auto;
    cursor: pointer;
    border-radius: 25px;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .addToCartButton:hover {
    background-color: #7e3aff;
  }

  @media screen and (max-width: 768px) {
    .proCardMainDiv {
      flex-wrap: nowrap;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
    }

    .proCardDiv {
      flex: 0 0 auto;
      width: 140px;
      margin-right: 5px;
    }

    .proimageName {
      font-size: 10px;
    }

    .proimagePrice {
      font-size: 10px;
    }
  }
  .card-link-btn {
    text-decoration: none;
    border: none;
    width: 100%;
  }
  .banner-style {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .gym-facilities-cards-text .gym-view-param-div {
    display: flex;
    align-items: center;
    padding: 4px, 0 10px 0;
    margin-left: 1rem;
    width: 8%;
  }

  .gym-facilities-cards-text .service-text {
    margin-left: 0.5rem;
  }
`;
