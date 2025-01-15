import styled from "styled-components";

export const RPDisclaimerStyled = styled.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }
  .policy-container p {
    text-align: justify;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 3.3rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
  .RaphaPlus-link-div {
    text-decoration: none;
  }
`;
