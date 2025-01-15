import styled from "styled-components";

export const FAQStyled = styled.div`
  padding: 3rem 4.5rem;

  .clinic-management-container {
    /* padding: 2rem; */
  }

  .clinic-management-content {
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 0px;
  }

  .goal {
    display: none;
  }

  .clinic-management-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .clinic-management-description {
    font-size: 1.2rem;
    font-weight: 400;
    width: 60%;
    color: #555;
    margin-bottom: 2rem;
  }

  .clinic-management-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .clinic-management-feature {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .load-more {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .load-more-button {
    text-decoration: underline;
    width: 15%;
    text-wrap: nowrap;
    padding: 10px 20px;
    background-color: white;
    color: #252b61;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }

  .clinic-management-features::-webkit-scrollbar {
    width: 8px;
    margin-left: 5px;
  }

  .clinic-management-features::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  .clinic-management-features::-webkit-scrollbar-thumb {
    background: #252b61;
    border-radius: 10px;
  }

  .clinic-management-feature-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .clinic-management-feature-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  .clinic-management-feature-icon {
    font-size: 1.5rem;
    color: #777;
  }

  .clinic-management-feature-description {
    font-size: 1.2rem;
    font-weight: 500;
    color: #555;
    margin-top: 1rem;
  }

  .contact-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 8px;
    border: 1px solid #252b61;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    padding-top: 0px;
  }
  .card-content {
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon img {
    height: 65.68%;
    width: 74.85%;
  }

  h2 {
    font-size: 21px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.02em;
    line-height: 27px;
    font-family: Inter;
    color: #000;
    text-align: justify;
    margin-bottom: 20px;
  }

  .contact-button {
    padding: 10px 20px;
    font-size: 18px;
    color: black;
    border-radius: 128px;
    border: 1px solid #252b61;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .features-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    place-items: center;
  }

  /* Media Queries */
  @media (max-width: 1200px) {
    .clinic-management-container {
      grid-template-columns: 1fr;
    }
    .features-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    .clinic-management-container {
      padding: 0;
    }
    .clinic-management-content {
      padding: 0;
    }
    .clinic-management-title {
      position: relative;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #011632;
    }
    .clinic-management-description {
      width: 100%;
      position: relative;
      font-size: 15px;
      line-height: 25px;
      font-family: Inter;
      color: #011632;
      text-align: left;
    }
    .clinic-management-feature-title {
      font-size: 1rem;
    }
    .clinic-management-feature-description {
      font-size: 0.8rem;
    }
    .clinic-management-image img {
      width: inherit;
    }
  }
  @media (max-width: 391px) {
    padding: 40px 20px;
    .clinic-management-container {
      width: 100%;
      /* padding: 20px; */
    }
    .goal {
      display: block;
    }
    .load-more {
      justify-content: left;
    }

    .goal {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: right;
      justify-content: center;
      background: url(https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735196551049.png);
      border-radius: 12px;
      padding: 20px;
    }

    .goal-title {
      font-size: 28px;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
      margin: 8px 0;
      text-align: center;
    }

    .goal-button {
      margin-top: 20px;
      padding: 10px 20px;
      background: #2f2f77;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border-radius: 40px;
      width: 100%;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .goal-button:hover {
      background: #21214c;
    }
  }
`;
