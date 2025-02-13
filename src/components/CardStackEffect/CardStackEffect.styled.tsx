import styled from "styled-components";

export const CardStackEffectStyled = styled.div`
  .main {
    /* margin-top: 50vh;
    margin-bottom: 50vh; */
  }
  .cardContainer {
    height: 25vh; // 100vh
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0px;

    & > div {
      width: 100%;
    }
    .detail-card{
      box-shadow: none;
    }
  }
`;
