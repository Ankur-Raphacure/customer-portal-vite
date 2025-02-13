import styled from "styled-components";

export const PrivacyStyled = styled.div`
  .main {
    padding: 0 4.5rem;
  }
  .secure-practice-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem;
    background-color: rgba(163, 218, 194, 0.2);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .content {
    max-width: 50%;
  }

  h1 {
    position: relative;
    font-size: 50px;
    letter-spacing: 0.03em;
    line-height: 54px;
    font-family: Inter;
    text-align: left;
    height: 167px;
    color: #202a3f;
    font-weight: 700;
  }

  h1 .highlight {
    color: #252b61;
  }

  p {
    width: 531px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
    text-align: left;
    margin-bottom: 2rem;
  }

  .features {
    display: flex;
    gap: 4rem;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-direction: column;
  }

  .feature-item img {
    width: 32px;
    height: 32px;
  }

  .feature-item span {
    font-size: 16px;
    letter-spacing: 0.32px;
    font-family: Inter;
    color: #090909;
    text-align: center;
  }

  .images {
    position: relative;
    width: 40%;
    text-align: center;
  }

  .main-image {
    width: 100%;
    max-width: 300px;
    z-index: 1;
    position: relative;
  }

  .shadow-image {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    max-width: 300px;
    opacity: 0.5;
    z-index: 0;
  }

  @media (max-width: 391px) {
    .main {
      padding: 1.25rem 1rem;
    }
    .secure-practice-container {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      width: 100%;
      box-shadow: unset;
    }

    .content {
      max-width: 100%;
      text-align: center;
    }

    h1 {
      width: 100%;
      font-size: 16px;
      line-height: 26px;
      height: auto;
      color: #202a3f;
      font-weight: 600;
    }

    p {
      width: 100%;
      font-size: 15px;
      line-height: 20px;
      font-family: Inter;
      color: #000;
      text-align: left;
    }

    .features {
      flex-direction: column;
      gap: 2rem;
      width: 100%;
    }

    .feature-item span {
      font-size: 14px;
    }

    .images {
      /* width: 100%;
      margin-top: 2rem;
      text-align: center; */
      display: none;
    }

    .main-image {
      max-width: 200px;
    }
  }
`;
