import styled from "styled-components";

export const UploadPrescriptionStyled = styled.div`
  --gridGap: 2rem;
  display: grid;
  grid-template-rows: 2fr 1fr;
  gap: var(--gridGap);
  padding: 60px;
  width: 100%;
  font-family: "Outfit", sans-serif;

  .topGrid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--gridGap);
  }

  .rightGrid {
    cursor: pointer;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: var(--gridGap);
  }

  .rightBottomGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gridGap);
  }

  .bottomGrid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--gridGap);
  }

  .gridCard {
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }

  .newPrescription {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #a3dac2;
    padding: 20px;
    position: relative;
    cursor: pointer;

    .prescriptionContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
        /* max-width: 50%; */
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
        max-width: 60%;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;

      img {
        width: 300px;
        height: auto;
      }
    }

    .arrowContainer {
      position: absolute;
      bottom: 15px;
      right: 15px;
      background-color: #ffffff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);

      svg {
        color: #000000;
      }
    }
  }
  .homeCenter {
    background-color: #f0da69;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
        /* max-width: 50%; */
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
        max-width: 75%;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: baseline;

      img {
        width: 300px;
        height: auto;
      }
    }
  }
  .previousOrder {
    background-color: #e7c2d4;
    /* padding: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
      }
    }
  }

  .noPrescription {
    background-color: #92bdf6;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .brands {
    background-color: #b7d0fa;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
        object-fit: contain;
      }
    }
  }

  .savings {
    background-color: #bba8f0;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .cardContent {
      h2 {
        font-size: 27px;
        font-weight: 600;
        color: #252b61;
      }

      p {
        font-size: 16px;
        color: #313131;
        font-weight: 500;
        margin-top: 0.5rem;
      }
    }

    .imageContainer {
      display: flex;
      justify-content: center;

      img {
        width: 300px;
        height: auto;
        object-fit: contain;
      }
    }
  }
  .newpharmacyPrescription {
    background-color: #ffffff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 23px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 850px) {
    .topGrid,
    .rightGrid,
    .rightBottomGrid,
    .bottomGrid,
    .newPrescription,
    .homeCenter,
    .previousOrder,
    .noPrescription,
    .brands,
    .savings {
      display: flex;
      flex-direction: column;
      /* gap: var(--gridGap); */
    }
    .gridCard {
      width: 100%;
    }
    .imageContainer img {
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    .newPrescription .prescriptionContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .rightBottomGrid {
      display: flex;
      flex-direction: row;
    }
    .imageContainer img {
      width: 100% !important;
      height: 6rem !important;
    }
    .bottomGrid {
      margin-top: -3.5rem;
    }
    .newPrescription .imageContainer {
      margin-top: 0px;
    }
    .homeCenter .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .previousOrder .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .noPrescription .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .brands .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .savings .cardContent {
      h2 {
        max-width: 100%;
        font-size: 20px;
      }
      p {
        max-width: 100%;
        font-size: 12px;
      }
    }
    .homeCenter {
      padding: 0px;
    }
    .gridCard {
      padding: 0px;
    }
    .cardContent {
      padding: 10px;
    }
    .newPrescription {
      padding: 10px;
    }
  }
  .Previous-btn {
    display: flex;
    align-items: end;
    cursor: pointer;
    button {
      background: #fff;
      border-radius: 100%;
      height: 3.5rem;
    }
  }
`;
