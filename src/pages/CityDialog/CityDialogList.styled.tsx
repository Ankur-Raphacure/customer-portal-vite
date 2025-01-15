import styled from "styled-components";

export const CityPopupStyled = styled.div`
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 10px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .btn-container {
    // display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    margin-bottom: 22px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  button {
    font-size: 14px;
    // font-family: Poppins;
    color: #7b6be6;
    text-align: left;
    border-radius: 10px;
    border: 1px solid #7b6be6;
    box-sizing: border-box;
    // width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    text-align: left;
    float: left;
    margin-bottom: 14px;
    margin-right: 10px;
  }
  button:hover {
    background: #9747ff;
    color: #fff;
    border: 1px solid #9747ff;
  }
  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_data {
    text-align: center;
    margin-bottom: 0px;
    width: 100%; /* Ensure text takes up full width of the card */
  }

  .search-div {
    display: flex;
    justify-content: center;
  }

  .city-cancel-btns {
    display: flex;
    justify-content: end;
    padding: 1rem;
  }

  .pharmacy-card-box {
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
    min-width: 150px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    height: auto;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;

    img {
      height: 160px;
      width: 100%;
      border-radius: 10px 10px 0px 0px;
    }

    .box-bottom {
      padding: 16px;
    }

    .pharmacy-box-button-sec {
      margin-top: 0px;
    }

    .name-div {
      display: flex;
      justify-content: space-between;
    }

    .caregory-key-name {
      text-transform: capitalize;
    }
  }

  .close-btn {
    width: 2rem;
    display: flex;
    justify-content: center;
  }
`;
