import styled from "styled-components";

export const DentalClinicsStyled = styled.div`
  display: flex;
  gap: 33px;
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
    padding: 1rem;
    width: 34rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_img {
    flex: 0 0 auto;
  }

  .hospital_img img {
    width: 10rem;
    height: 10rem;
    border-radius: 0.625rem;
    object-fit: cover;
  }

  .hospital_data {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .btn-div {
    width: max-content;
    margin-left: 14rem;
  }

  .btn {
    background-color: #9747ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
