import styled from "styled-components";

export const ServicesSectionStyled = styled.div`
  padding: 0px 40px;
  .services-section {
    /* padding: 2rem 0rem; */
    /* background-color: #f9f9f9; */
  }

  .container {
    max-width: 100%;
    margin: 0 auto;
  }

  /* Heading and description */
  .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .description {
    color: #6b7280;
    font-size: 18px;
    font-weight: 400;
  }

  /* Services wrapper */
  .services-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 34px; /* Space between boxes */
    justify-content: space-between;
  }

  .service-card {
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    flex: 1 1 calc(23% - 1rem); /* Ensures responsive design with 4 cards per row */
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    color: #333;
    width: 266px;
    cursor: pointer;
    &:hover {
      background-color: #e2e2e2;
    }
  }
  .view-more-button {
    display: inline-block;
    float: right;
    text-decoration: underline;
    font-size: 22px;
    font-weight: 400;
    color: #252b61;
    border: none;
    background: none;
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 1024px) {
    .services-wrapper {
      gap: 24px;
    }

    .service-card {
      flex: 1 1 calc(33.33% - 1rem); /* 3 cards per row */
    }

    .heading,
    .description {
      margin-left: 20px;
    }
  }

  @media (max-width: 768px) {
    .services-wrapper {
      gap: 20px;
      justify-content: center;
    }

    .service-card {
      flex: 1 1 calc(45% - 1rem); /* 2 cards per row */
    }

    .heading {
      font-size: 28px;
    }

    .description {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .services-wrapper {
      gap: 16px;
    }

    .service-card {
      flex: 1 1 100%; /* Single card per row */
      width: auto;
    }

    .heading {
      font-size: 24px;
      margin-left: 10px;
    }

    .description {
      font-size: 14px;
      margin-left: 10px;
    }

    .view-more {
      text-align: center;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }
  .react-multi-carousel-list {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: 391px) {

    padding: 0px 20px;

    .mobile-view {
      display: block;
    }
    .multi-carousel-modal {
      display: none;
    }
    .view-more-button {
      display: none;
    }

    .description {
      display: none;
    }

    .container {
      padding: unset;
    }

    .heading {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .specialization-grid {
      margin-top: 30px;
    }

    .specialization-name{
      text-wrap: nowrap;
    }

    .view-more {
      margin-left: 130px;
      margin-top: unset;
    }
  }
`;
