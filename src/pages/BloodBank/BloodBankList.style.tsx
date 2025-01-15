import styled from "styled-components";

export const BloodBankListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* Adjust gap as needed */
  margin-top: 24px;

  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_item {
    background: #ffffff;
    border-radius: 0.625rem;
    padding: 1rem;
    width: 100%; /* Adjust width to fit grid */
    height: 100%; /* Adjust height to fit content */
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_data {
    text-align: justify;
    width: 100%;
  }

  .hospital_data h5 {
    margin-bottom: 0.5rem;
  }

  .hospital_data p {
    margin: 0.5rem 0;
  }

  .btn-div {
    width: max-content;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    background-color: #9747ff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .modal-content {
    margin-top: 10rem;
  }
  .dropdown-btn {
    width: 11.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
