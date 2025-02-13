import styled from "styled-components";

export const TestimonialsStyled = styled.div`
  .testimonials-container {
    display: block;
    text-align: center;
    padding: 5rem 4.5rem;
    margin: auto;
    font-family: Poppins, sans-serif;
    @media (max-width: 780px) {
      padding: 40px;
    }
    @media (max-width: 391px) {
      display: none;
    }
  }

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    font-family: Inter;
    color: #011632;
    text-align: left;
  }
  .testimonial-card {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    @media screen and (max-width: 1024px) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  .testimonial-content {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 20px;
    text-align: left;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .testimonial-image {
    border-radius: 8px;
    /* width: 100px;
    height: 100px; */
    object-fit: cover;
    margin-bottom: 10px;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  .testimonial-name {
    font-size: 32px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
  }

  .testimonial-specialization {
    font-family: Inter;
    color: #252b61;
    font-size: 18px;
  }

  .testimonial-text {
    font-size: 18px;
    color: #555;
  }

  .name-spec {
    display: flex;
    flex-direction: column;
  }

  /* Navigation buttons */
  .nav-btn {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 24px;
    color: #555;
    transition: color 0.3s;
  }

  .nav-btn:hover {
    color: #333;
  }

  /* Dots */
  .dots-container {
    margin-top: 20px;
    text-align: right;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .dot.active {
    background-color: #252b61;
    width: 4rem;
    border-radius: 10px;
  }

  .prevNextBtns {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
    button.prev {
      background: #c4c4c4;
      border: none;
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    button.next {
      background: #252b61;
      border: none;
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .testimonials {
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    margin-left: 40px;
    gap: 40px;
    margin-top: 10px;
    .testimonial {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      img {
        @media screen and (max-width: 480px) {
          display: none;
        }
      }
    }
  }

  .testimonials-moblie-look {
    display: none;
  }
  @media (max-width: 391px) {
    .testimonials-moblie-look {
      display: block;
      padding: 1.25rem 1rem;
    }

    .title {
      font-size: 18px;
      line-height: 14px;
      font-weight: 600;
      font-family: Inter;
      color: #202a3f;
      text-align: left;
    }
    .testimonials {
      margin-left: unset;
    }

    .testimonial-card {
      display: contents;
    }

    .testimonial-content {
      flex-direction: row;
      align-items: center;
      gap: 10px;
      text-align: center;
    }

    .testimonial-image {
      width: 50px;
      height: 50px;
      position: relative;
      border-radius: 50%;
    }

    .testimonial-name {
      width: 166.9px;
      position: relative;
      font-size: 14px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: left;
    }

    .testimonial img {
      width: 40%;
      position: relative;
      max-width: 100%;
      overflow: hidden;
      height: 20px;
      object-fit: contain;
    }

    .testimonial-specialization {
      margin-top: -5px;
      text-align: left;
      width: 73.7px;
      position: relative;
      font-size: 9px;
      letter-spacing: 0.05em;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
      text-wrap: nowrap;
    }

    .testimonial-text {
      position: relative;
      font-size: 14px;
      font-family: Inter;
      color: #4d4d4d;
      text-align: justify;
      display: inline-block;
      height: 106.1px;
    }

    .prevNextBtns {
      display: flex;
      gap: 0.2rem;

      button.prev {
        width: 25px;
        height: 25px;
      }

      button.next {
        width: 25px;
        height: 25px;
      }
    }

    .dots-container {
      display: flex;
      justify-content: center;
    }

    .dot {
      width: 8px;
      height: 8px;
      margin: 0 3px;
    }

    .dot.active {
      width: 42px;
      height: 8px;
    }

    .mobile-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0px;
    }

    .header-lh {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-rh {
      img {
        width: 100%;
        height: 22.3px;
      }
    }

    .heading-arrow {
      display: flex;
      justify-content: space-between;
    }
  }
`;
