import styled from "styled-components";

export const RPDigitalClinicStyled = styled.div`
  .hero-image img {
    max-width: 100%;
  }

  .hero-image {
    margin: 1rem 0;
    position: relative;
  }

  .overlayWrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 1rem;
    font-family: Poppins;
    @media (max-width: 760px) {
      position: static;
    }
  }

  .timelineWrapper {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .overlayWrapper h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero-text-wrapper {
    margin-bottom: 0;
    padding: 1rem;
    text-align: center;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding: 4rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }

  .form-section {
    background: #f1f7ff;
    padding: 20px;
    border-radius: 10px;
    font-size: 1rem;
  }

  .text-section {
    flex: 1;
    color: #001e3a;
    text-align: left;
    @media (max-width: 760px) {
      text-align: center;
    }
  }

  .text-section h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .text-section h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .text-section p {
    font-size: 1.2rem;
  }

  .form-section {
    flex: 1;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .inputGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  form div {
  }

  form label {
    margin-bottom: 5px;
    display: block;
    font-size: 0.8rem;
    color: #252b42;
    font-weight: 600;
  }

  form input[type="text"],
  form input[type="email"],
  form input[type="number"] {
    width: 100%;
    padding: 1rem;
    font-size: 0.7rem;
    box-sizing: border-box;
    border: 1px solid gray;
    border-radius: 2px;
    @media (max-width: 760px) {
      /* width: max-content; */
    }
  }

  form input[type="checkbox"] {
    margin-right: 10px;
  }

  form button {
    padding: 10px;
    background: linear-gradient(to right, #1e908b, #1b1b1b);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  form button:hover {
    background-color: #0056b3;
  }

  .chkBxContainer {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    label {
      text-wrap: nowrap;
      color: #27b3a4;
      @media (max-width: 760px) {
        text-wrap: wrap;
      }
      span {
        color: #09529d;
      }
    }
  }

  .efficiencyDiv {
    display: flex;
    justify-content: center;
  }
`;
