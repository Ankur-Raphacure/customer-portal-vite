import styled from "styled-components";

export const AnalyticsStyled = styled.div`
  .practice-analytics-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  .practice-analytics-card {
    display: flex;
    border-radius: 0.5rem;
    overflow: hidden;
    gap: 3rem;
    width: 100%;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .practice-analytics-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .practice-analytics-image img {
    max-width: 100%;
    height: auto;
  }

  .practice-analytics-content {
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .practice-analytics-title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: Inter;
    color: #011632;
  }

  .practice-analytics-description {
    font-size: 18px;
    font-weight: 400;
    font-family: Inter;
    color: #3c4959;
    margin-bottom: 1.5rem;
  }
  

  .practice-analytics-features {
    list-style-type: none;
    padding: 0;
  }

  .practice-analytics-features li {
    display: flex;
    align-items: center;
    font-size: 21px;
    font-weight: 500;
    margin-bottom: 0.75rem;
    font-family: Inter;
    color: #000;
  }

  .feature-bullet {
    font-weight: 700;
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  .feature-text {
    color: #374151;
  }


  @media (max-width: 391px) {

    .practice-analytics-container {
      display: none;
    }
    
  }
`;
