import styled from "styled-components";

export const RPDisclosureStyled = styled.div`
  padding: 1.5rem;
  font-family: Poppins;
  .policy-container {
    display: flex;
    flex-direction: column;
  }

  .mainPolicyContent {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
  h1,
  strong {
    color: #27b3a4;
    font-weight: bold;
  }
`;
