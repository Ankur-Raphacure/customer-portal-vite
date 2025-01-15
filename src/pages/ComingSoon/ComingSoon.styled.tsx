import styled from "styled-components";

export const ComingSoonStyled = styled.div`
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
    text-align: center;
  }

  .coming-soon-image {
    height: auto;
    max-width: 60%;
    margin-bottom: 20px;
  }

  .coming-soon-text {
    font-size: 2.5em;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
`;
