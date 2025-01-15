import styled from "styled-components";

export const CardsStyled = styled.div`
  .imgOverRideDiv {
    margin-top: -26px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 10px;
    span {
      background-color: #89a80c;
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .mainCard {
    display: flex;
    width: auto;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .mainCard .card-img {
    width: 100%;
    height: 8rem !important;
    /* object-fit: contain; */
  }
  .scanCenterCardButton {
    width: 100%;
  }
  .scanCeContainer {
    padding: 20px;
  }
  @media (max-width: 768px) {
    .mainCard {
      width: 260px;
    }
  }
  .all-scans-nearme-all-img {
    object-fit: contain !important;
  }
  .address-line-text {
    min-height: 72px;
  }
`;
