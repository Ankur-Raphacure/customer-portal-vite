import styled from "styled-components";

export const DentalCareListStyled = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 24px;

  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_item {
    background: #ffffff;
    border-radius: 0.625rem;
    padding: 1rem;
    width: 13.8rem;
    height: 100%; /* Adjust height to fit content */
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .hospital_img {
    flex: 0 0 auto;
    margin-bottom: 1rem;
  }

  .hospital_img img {
    width: 10rem;
    height: 10rem;
    border-radius: 0.625rem;
    object-fit: cover;
  }

  .hospital_data {
    text-align: center;
    width: 100%; /* Ensure text takes up full width of the card */
  }

  .hospital_data h5 {
    margin-bottom: 0.5rem;
  }

  .hospital_data p {
    margin: 0.5rem 0;
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
    .hospital_item {
      display: column;
      grid-auto-columns: max-content;
    }
  }
`;
