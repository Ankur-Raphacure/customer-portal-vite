import styled from "styled-components";

export const RPHomeV2Styled = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 3rem;
  font-family: Inter, sans-serif !important;
  .animatedCardsWrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 3.5rem 4.5rem;
    @media (max-width: 780px) {
      padding: 40px;
    }
  }
  .w-full {
    width: 100%;
  }
  .privacyImg {
    display: flex;
    @media screen and (max-width: 720px) {
      display: none;
    }
    img {
      padding: calc(40px + 2rem);
      @media (max-width: 780px) {
        padding: 40px;
      }
    }
  }
  @media (max-width: 391px) {
    .animatedCardsWrapper {
      display: flex;
      align-items: center;
      justify-content: unset;
      flex-wrap: wrap;
      padding: 0px;
      gap: 0rem;
    }

    img {
      padding: unset;
    }
  }

  .info-content {
    display: none;
  }

  @media (max-width: 391px) {
    .info {
      padding: 0rem 1rem;
    }
    .info-content {
      display: block;
    }

    .info-content strong {
      font-size: 18px;
      line-height: 14px;
      display: flex;
      font-family: Inter;
      color: #202a3f;
      text-align: left;
    }

    .info-content p {
      font-size: 16px;
      line-height: 27px;
      font-family: Inter;
      color: #3c4959;
      text-align: left;
      display: flex;
      width: 90%;
      margin-top: 10px;
    }
  }
`;
