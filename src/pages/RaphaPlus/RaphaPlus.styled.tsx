import styled from "styled-components";

export const RaphaPlusStyled = styled.div`
  width: 100%;
  .text-underline-effect {
    position: relative;
  }

  .text-underline-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 3px solid #27b3a4;
    left: 0;
    bottom: -12px;
    border-radius: 50%;
    height: 15px;
  }
`;
