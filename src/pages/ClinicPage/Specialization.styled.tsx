import styled from "styled-components";

export const SpecializationStyled = styled.div`
.specialization {
    padding: 0px 40px;
    .paragraph {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .react-multi-carousel-list {
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    h2 {
      font-weight: 700;
      font-size: 32px;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      width: 100%;
      font-family: Inter;
      color: #171a1f;
    }
    .view {
      padding: 10px 30px;
      font-size: 18px;
      font-weight: 400;
      border: none;
      border-radius: 32px;
      text-align: center;
      cursor: pointer;
      display: inline-block;
    }
    .cards {
      display: flex;
      width: 100%;
    }

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .paragraph {
      display: flex;
      justify-content: space-between;
      margin: 0 auto 2rem;
      font-size: 1rem;
    }

    .paragraph p {
      margin: 0;
    }

    .view {
      color: #007bff;
      cursor: pointer;
      font-weight: bold;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1.5rem;
      justify-items: center;
      @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .card {
      background: #f9f9f9;
      width: 100%;
      border: none;
      border-radius: 10px;
      /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
      padding: 1rem;
      text-align: center;
      transition: transform 0.2s ease-in-out;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card-image {
      border-radius: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
        margin-bottom: 0.5rem;
      }
    }

    .card-title {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;
      font-size: 20px;
      color: #333;
    }

    .mobile-view {
      display: none;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .multi-carousel-modal {
      display: none;
    }

    .specialization {
      .mobile-view {
        display: block;
      }

      .view-all-btn {
        display: none;
      }
    }

    .specialization {
      text-align: center;
      font-family: Arial, sans-serif;
      padding: unset;
    }

    .specialization-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .specialization p {
      display: none;
    }

    .specialization h2 {
      font-size: 22px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
      margin-bottom: unset;
    }

    .specialization-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-items: center;
    }

    .specialization-card {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      width: 100%;
      height: 100%;
      background: #fff7e9;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .specialization-image {
      width: 80%;
      height: auto;
      border-radius: 50%;
    }

    .specialization-name {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
    }

    .view-more {
      margin-top: 20px;
      font-size: 14px;
      background: none;
        border: none;
        color: #1e1e1e;
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
