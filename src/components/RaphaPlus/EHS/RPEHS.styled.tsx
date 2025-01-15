import styled from "styled-components";

export const RPEHSStyled = styled.div`
  padding: 1rem;
  .hero-container {
    display: flex;
    flex-direction: row;
  }

  .container {
    padding: 3rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
    }
    p {
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;
    }
  }
  .btn-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    button {
      padding: 0.5rem;
      border: 1.5px solid #27b3a4;
      border-radius: 0.5rem;
      background-color: #fff;
      cursor: pointer;
    }
  }
  .app-img-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  img {
    max-width: 50vw;
  }
  .middle-container {
    .container {
      padding: 3rem;
      h1 {
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }
`;
