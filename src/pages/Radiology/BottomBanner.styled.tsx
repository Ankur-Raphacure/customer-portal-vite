import styled from "styled-components";

export const BottomBannerStyled = styled.div`
  .download-home-page-div {
    margin-top: 6rem;
    padding: 15px 50px;
    display: flex;
    gap: 70px;
    background: #eaeaef;
    top: 3423.56px;
    left: -31.2px;
  }
  .download-text-div {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Outfit, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.432px;
    color: var(--Text-Primary, #141414);
    margin-bottom: 0px;
  }
  .download-sub-text-div {
    color: var(--Text-Secondary, #666);
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.1px;
    letter-spacing: 0.27px;
    margin-top: 19px;
    margin-bottom: 61px;
  }
  .book-app-doctor-actions-btn-div {
    display: flex;
    gap: 20px;
  }
  .welcome-text-rapha-right {
    display: flex;
    margin-bottom: 2rem;
  }
  .book-app-doctor-actions-btn-div button {
    padding: 10px 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 45px;
    background: #252b61;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }

  @media (max-width: 768px) {
    .download-home-page-div {
      padding: 16px;
      margin-top: 2rem;
    }
    .book-app-doctor-actions-btn-div {
      flex-direction: column;
      gap: 15px;
    }
    .welcome-text-rapha-right {
      display: none;
    }
    .book-app-doctor-actions-btn-div button {
      margin-right: 0px !important;
    }
    .download-text-div {
      margin-bottom: 0px;
    }
  }
`;
