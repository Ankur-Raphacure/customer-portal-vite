import styled from "styled-components";

export const AvailableTestsStyle = styled.div`
  width: 100%;
  height: auto;

  .main-card {
    display: flex;
    flex-direction: column;
  }

  .round-shadow {
    background-color: #e2f4ee;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }

  .round-shadow-1 {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }

  .sub-cards-container {
    display: flex;
    gap: 16px;
    width: 100%;
    overflow-x: auto;
  }

  .sub-card {
    flex: 0 0 auto;
    width: calc(33.333% - 16px);
    display: flex;
    flex-direction: column;

    .image-container {
      width: 100%;

      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }

  .sub-cards-container-1 {
    text-align: center;
  }

  .name-div {
    align-items: center;
    gap: 0px;

    h6 {
      margin: 0;
    }

    p {
      margin: 0;
      font-size: 12px;
    }
  }

  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem; /* Add margin if needed */
  }

  .btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .btn-outline-primary {
    width: 135px;
    border: 1px solid #9747ff;
    background-color: transparent;
    color: #9747ff;
    margin-right: 8px;
  }

  .btn.primary {
    width: 135px;
    background-color: #9747ff;
    color: white;
    border: none;
  }

  .discripsion {
    font-size: small;
    font-weight: 500;
  }

  .discripsion-div {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: small;
  }

  .d-flex {
    display: flex;
    gap: 0;
  }

  .button-container {
    display: flex;
    gap: 0;
  }
  .main-discription-div {
    align-items: end;
    height: 40px;
  }
  .sub-discription-div {
    margin-right: 40px;
  }
`;
