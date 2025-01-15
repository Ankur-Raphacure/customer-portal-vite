import styled from "styled-components";

export const WhyChooseRaphaStyled = styled.div`
  h1 {
    text-align: center;
  }
  .why-choose-rapha {
    display: flex;
    align-items: center;
    padding: 4rem;
    gap: 3rem;
    color: #001E3A;
    @media (max-width:760px){
        flex-direction: column;
    }
  }

  .image-section {
    flex: 1;
    text-align: center;
  }

  .image-section img {
    max-width: 100%;
    border-radius: 8px;
  }

  .text-section {
    flex: 2;
    padding-left: 20px;
  }

  .text-section h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #001E3A;
    margin-bottom: 10px;
  }

  .text-section h1 .highlight {
    color: #007bff;
    text-decoration: underline;
  }

  .text-section h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #001E3A;
    margin-bottom: 20px;
  }

  .text-section p {
    font-size: 1rem;
    line-height: 1.5;
    color: #001E3A;
    font-weight: 500;
  }

  .text-section p strong {
    color: #001E3A;
    font-weight: 700;
  }
`;
