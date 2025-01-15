import styled from "styled-components";

export const HowRaphaWorksStyled = styled.div`
  .how-rapha-works {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #333;
  }

  .header-section {
    text-align: center;
    margin-bottom: 20px;
  }

  .header-section h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }

  .tabs-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media (max-width:760px){
      flex-direction: column;
    }
  }

  .tab-button {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    color: #001e3a;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;
    text-wrap: nowrap;
    font-weight: bold;
  }

  .tab-button:hover,
  .tab-button.active {
    border-bottom: 2px solid #27b3a4;
    color: #27b3a4;
  }

  .tab-button.active {
    text-decoration: underline;
  }

  .content-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    @media (max-width:760px){
      align-items: center;
    }
  }

  .imgWrapper {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (max-width:760px){
      flex-direction: column;
    }
  }
  .image-section {
    margin-bottom: 20px;
    width: 100%;
    text-align: center;
  }

  .image-section img {
    width: 100%;
    max-width: 300px; /* Adjust size as needed */
  }

  .content-section ul {
    list-style-type: none;
    padding: 0;
  }

  .content-section li {
    font-size: 1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    color: #001e3a;
    font-weight: 500;
  }

  .content-section li::before {
    content: "•";
    scale: 1.5;
    color: #27b3a4;
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;
