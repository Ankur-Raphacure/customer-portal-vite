import styled from "styled-components";

export const HeroSectionStyled = styled.div`
  padding: 2rem 4.5rem;
  .hero-section {
    width: 100%;
    height: 612px;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1733812900248.png");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: left;
    position: relative;
    color: #1f1f1f;
    font-family: "Poppins", sans-serif;
    border: 0.1rem solid #aaaaaa;
    border-radius: 1rem;
    margin: auto;
    padding: 8.5rem;
  }

  .hero-content {
    text-align: left;
    max-width: 50%;
    margin-left: -10%;
    padding: 2rem;
    color: #252b61 !important;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 1.3;
    color: #252b61 !important;
    font-weight: 400;
    width: 130%;
  }

  span.highlight {
    font-weight: bold;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .features-list li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    text-wrap: nowrap;
    color: #252b61 !important;
  }

  .features-list .icon {
    height: 47px;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  .buttons {
    display: flex;
    gap: 16px;

    justify-content: flex-end;
    flex-direction: row-reverse;
    .book-demo-button {
      width: 40%;
      background-color: white;
      color: #252b61;
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
      border: 1px solid #252b61;
      border-radius: 2.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .sign-up-button {
      width: 40%;
      background-color: #252b61;
      color: white;
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 2.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  }

  .sign-up-button:hover {
    background-color: #14328c;
  }

  .subListMobile {
    display: none;
  }

  /* Media Queries */
  @media (max-width: 1200px) {
    padding: 3rem;

    .hero-section {
      height: 60vh;
      padding: 2rem;
    }

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem;

    .hero-section {
      height: 65vh;
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 900px) {
    .hero-section {
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .hero-section {
      flex-direction: column;
      background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1733470837289.png");
      justify-content: flex-end;
      padding: 2rem;
    }

    .hero-content {
      max-width: 100%;
      text-align: center;
      padding: 0;
    }

    h1 {
      font-size: 3rem;
    }

    .features-list {
      display: none;
      grid-template-columns: 1fr;
    }

    .sign-up-button {
      display: none;
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }

    .subListMobile {
      display: block;

      .features-list {
        display: block;

        li {
          justify-content: center;
        }
      }

      .sign-up-button {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        width: 100%;
        justify-content: center;
      }
    }
  }
  @media (max-width: 391px) {
    padding: 1.5rem 1rem;
    .hero-section {
      flex-direction: column;
      border: unset;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem;
      height: 274.5px;
      width: 100%;
    }

    .hero-content {
      max-width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    h1 {
      width: 100%;
      position: relative;
      font-size: 29px;
      line-height: 150%;
      color: #252b61;
      text-align: center;
      display: inline-block;
      font-family: Poppins;
      margin-top: 188px;
    }

    .book-demo-button {
      display: none;
    }

    .subListMobile {
      display: block;
      text-align: center;
      width: 100%;


      .features-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
      }

      .features-list li {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        font-family: Inter;
        color: #252b61;
        text-align: left;
      }

      .features-list .icon {
        font-size: 1.2rem;
        margin-right: 0.5rem;
        height: 31px;
      }

      .mobile-buttons {
        display: flex; /* Make buttons appear side by side */
        flex-direction: row; /* Horizontal alignment */
        gap: 0.5rem; /* Space between buttons */
        width: 100%;
      }

      .book-demo-mobile,
      .sign-up-mobile {
        flex: 1; /* Equal width for both buttons */
        display: flex; /* Ensure buttons are visible */
        justify-content: center;
        align-items: center;
        padding: 0.5rem 0.8rem; /* Adjust padding as needed */
        font-size: 1rem;
        border-radius: 2rem; /* Ensure consistent rounded corners */
      }

      .book-demo-mobile {
        background-color: #ffffff;
        color: #1e266d;
        border: 1px solid #1e266d; /* Outline for the Book Demo button */
      }

      .sign-up-mobile {
        background-color: #1e266d;
        color: #ffffff;
      }

      p {
        position: relative;
        font-size: 14px;
        font-weight: 500;
        font-family: Inter;
        color: #252b61;
        text-align: center;
        margin-top: 1.2rem;
      }
    }
  }
`;
