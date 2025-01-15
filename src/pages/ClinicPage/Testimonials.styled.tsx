// Testimonials.styled.js
import styled from "styled-components";

export const TestimonialsStyled = styled.section`
  padding: 4rem 0rem;
  background-color: #eaedfc;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .testimonials-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .testimonial-card {
    margin-top: 20px;
    background: white;
    border-radius: 20px;
    padding: 2rem;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.5s ease-out;

    .testimonial-inner {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
  }

  .testimonial-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .testimonial-content {
    flex: 1;

    h3 {
      font-size: 1.5rem;
      margin: 0 0 1rem;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin: 0 0 1rem;
    }

    .testimonial-date {
      color: #888;
      font-size: 0.9rem;
    }
  }

  .nav-button {
    background: white;
    border: none;
    font-size: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background: #f0f0f0;
      transform: translateY(-50%) scale(1.1);
    }

    &.prev {
      left: 0;
      margin-left: 15px;
    }

    &.next {
      right: 0;
      margin-right: 15px;
    }
  }

  .testimonials-dots {
    display: flex;
    gap: 8px;
    margin-top: 2rem;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ccc;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: #333;
        transform: scale(1.2);
        width: 1.5rem;
        border-radius: 10px;
      }

      &:hover {
        background: #999;
      }
    }
  }

  .testimonial-mobile {
    display: none;
  }

  .testimonial-header {
    display: none;
  }

  .testimonial-header-mobile {
    display: none;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .testimonial-inner {
      flex-direction: column;
      text-align: center;
    }

    .testimonial-image {
      width: 100px;
      height: 100px;
    }

    .nav-button {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 1024px) {
    .testimonial-card {
      padding: 1.5rem;
    }

    .testimonial-image {
      width: 100px;
      height: 100px;
    }

    .nav-button {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 768px) {
    .testimonial-inner {
      flex-direction: column;
      text-align: center;
    }

    .testimonial-image {
      width: 90px;
      height: 90px;
    }

    .testimonial-content {
      h3 {
        font-size: 1.25rem;
      }

      p {
        font-size: 0.95rem;
      }

      .testimonial-date {
        font-size: 0.85rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .testimonial-card {
      padding: 1rem;
    }

    .testimonial-image {
      width: 80px;
      height: 80px;
    }

    .testimonial-content {
      h3 {
        font-size: 1.1rem;
      }

      p {
        font-size: 0.9rem;
      }

      .testimonial-date {
        font-size: 0.8rem;
      }
    }

    .nav-button {
      width: 30px;
      height: 30px;
    }

    .testimonials-dots {
      .dot {
        width: 6px;
        height: 6px;
      }
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    background-color: unset;
    min-height: unset;

    .testimonial-desktop {
      display: none;
    }

    .testimonial-header-mobile {
      display: block;
    }

    .testimonial-mobile {
      display: block;
    }

    .testimonial-header {
      display: block;
      display: flex;
      flex-direction: row;
    }

    .nav-button.prev {
      display: none;
    }
    .nav-button.next {
      display: none;
    }

    .testimonial-header-mobile {
      display: flex;
      flex-direction: row;
      gap: 110px;
    }

    .button-mobile {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    .testimonial-title-mobile {
      font-size: 18px;
      line-height: 14px;
      font-weight: 600;
      font-family: Inter;
      color: #202a3f;
      text-wrap: nowrap;
    }

    .nav-button-mobile.left-arrow {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: white;
      border: unset;
      background-color: #252b61;
      align-items: center; /* Center the arrow vertically */
      justify-content: center;
    }

    .nav-button-mobile.right-arrow {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      color: white;
      border: unset;
      background-color: #252b61;
      align-items: center; /* Center the arrow vertically */
      justify-content: center;
    }

    .testimonial-header h3 {
      font-size: 14px;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      text-align: left;
    }

    .testimonial-date {
      font-size: 9px;
      letter-spacing: 0.05em;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
    }

    .content {
      line-height: 0rem;
      margin-top: 6px;
      margin-left: 15px;
    }

    .testimonial-body {
      p {
        font-size: 14px;
        font-family: Inter;
        color: #4d4d4d;
        text-align: left;
      }
    }

    .testimonial-card {
      border-radius: unset;
      box-shadow: unset;
      margin-top: unset;
      padding: 10px 20px;
    }

    .testimonials-container {
      justify-content: unset;
      display: flex;
      flex-direction: column;
      align-items: unset;
    }

    .nav-button {
      position: unset;
    }

    .testimonial-card .testimonial-inner {
      align-items: unset;
      gap: 0.5rem;
    }
    .testimonial-image {
      width: 50px;
      height: 50px;
    }
  }
`;
