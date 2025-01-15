import styled from "styled-components";

export const ClinicsStyled = styled.div`
  display: flex;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .hospital_list {
    display: flex;
    gap: 1rem;
    flex-direction: row;
  }

  .hospital_item {
    background: #ffffff;
    border-radius: 0.625rem;
    padding: 10px;
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_data {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .eye-key-name {
    font-weight: bold;
  }
  .hospital_data p {
    margin-bottom: 0px;
  }
  .btn-div {
    text-align: center;
    margin-top: 20px;
  }
  // .address-box-name {
  //   height: 100px;
  // }
  .top-sec-date-new {
    height: 90%;
  }
  .clinic-name-sec {
    color: #9747ff;
    font-size: 21px;
  }
  .eye-city-value-name {
    text-transform: capitalize;
  }
  .btn {
    background-color: #9747ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    width: 70%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
