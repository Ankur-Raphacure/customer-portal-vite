import styled from "styled-components";

export const HeadingBannerModuleStyled = styled.div`
  padding: 52px 50px;
  padding-bottom: 0;
  .main-heading-banner {
    height: 100%;
    min-height: 408px;
    border-radius: 45px;
    background: #252b61;
    position: relative;
  }
  .heading-banner-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heading-banner-text h5 {
    color: #c6defd;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 95px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: capitalize;
  }
  .heading-banner-text-img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  .heading-banner-img img {
    margin-top: -2.4rem;
    height: 328px;
  }
  .heading-banner-content h5 {
    display: contents;
    color: #c6defd;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.27px;
    text-transform: capitalize;
  }
  .heading-banner-content p {
    width: 16rem;
    color: #fff;
    font-family: "Poppins", serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px; /* 175% */
    letter-spacing: 0.24px;
    text-transform: capitalize;
    margin-top: 2rem;
  }
  .heading-banner-content button {
    height: 3.5rem;
    border-radius: 128px;
    background: #a3dac2;
    color: #252b61;
    font-family: "Poppins", serif;
    font-size: 18px;
    letter-spacing: 1.5px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    width: 100%;
  }
  .icon-bck-color {
    width: 47px;
    height: 47px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    padding: 10px 10px;

    .heading-banner-text-img {
      padding: 0px;
    }
    .heading-banner-text h5 {
      font-size: 40px;
      margin-top: 1rem;
    }
    .heading-banner-text-img {
      flex-direction: column;
      margin-top: 1rem;
    }
    .heading-banner-content button {
      width: 100%;
    }
    .heading-banner-content {
      text-align: center;
      width: 100%;
    }

    .heading-banner-text-img {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .heading-banner-img {
      order: -2;
      width: 100%;
      margin-bottom: 20px;
    }

    .heading-banner-img img {
      width: 100%;
      object-fit: scale-down;
      margin-top: -3.5rem;
    }
    .heading-banner-content {
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
    }
    .heading-banner-content p {
      order: -1;
      width: 100%;
      margin-top: -20px;
      font-size: 15px;
    }
    .heading-banner-content div {
      order: 0;
      margin-top: 0rem !important;
      margin-bottom: 5px !important;
    }
  }
  .uploadBtnContainer {
    margin-top: 1.5rem;
    .uploadBtnWrapper {
      /* position: absolute; */
      bottom: 0.5rem;
      right: 0.5rem;
      background: #a3dac2;
      display: flex !important;
      justify-content: center !important;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      /* margin: 2rem; */

      &:hover {
        background: #88c9a8;
      }

      h3 {
        margin: 0;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
`;
