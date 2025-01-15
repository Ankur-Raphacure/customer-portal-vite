import styled from "styled-components";

export const AmbulanceStyled = styled.div`
  padding: 1rem;
  margin: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
    .mainContent {
      flex-direction: column;
      display: flex;
      align-items: center;
    }
    .emergencyDiv > img {
      display: none;
    }
  }
  .mainContent {
    width: 100%;
    height: 100%;
    display: flex;
    // grid-template-columns: 3fr 4fr;
  }
  .mainContent-left {
    width: 60%;
  }
  .mainContent-right {
    width: 40%;
  }
  .booking-container,
  .cardContainer {
    margin: auto;
    height: fit-content;
    padding: 20px;
    border: none;
    text-align: left;
  }

  .cardContainer {
    background-color: #f6f9fd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #777;
    margin-bottom: 20px;
  }

  .input-group {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 15px;
    padding: 10px;
  }

  .input-icon {
    color: #7c4dff;
    margin-right: 10px;
  }

  .pickup-icon {
    color: #00bfa6;
  }

  .destination-icon {
    color: #ff3d00;
  }

  .input-field {
    border: none;
    flex: 1;
    padding: 10px;
    font-size: 1em;
  }

  .input-field:focus {
    outline: none;
  }

  .continue-button {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    background-color: #9747ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .continue-button:hover {
    background-color: #651fff;
  }

  .emergencyDiv {
    display: flex;
  }
  .emergencyDiv > img {
    height: 90vh;
    width: auto;
    opacity: 20%;
  }
  .bookNowBtn {
    background: #9747ff;
    color: white;
  }
`;
