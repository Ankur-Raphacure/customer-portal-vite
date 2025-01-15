import styled from "styled-components";

export const ManagementStyled = styled.div`
  /* padding: 40px; */
  .clinic-management-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 3rem; */
    place-items: center;
    padding: 2rem;
    @media (max-width: 1200px) {
      display: flex;
      flex-direction: column-reverse;
    }
    @media (max-width: 600px) {
      padding: 0;
    }
  }

  .clinic-management-content {
    flex: 1;
    width: 650px;
    height: 618px;
    background: #edeffc;
    border-radius: 15px;
    padding: 40px;
  }

  .clinic-management-title {
    font-size: 42px;
    display: inline-block;
    font-family: Inter;
    font-weight: 700;
    color: #011632;
    margin-bottom: 0.5rem;
    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }

  .clinic-management-description {
    width: 426.3px;
    font-size: 18px;
    font-weight: 400;
    font-family: Inter;
    color: #3c4959;
    margin-bottom: 2rem;
  }

  .clinic-management-features {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
  }

  .clinic-management-feature {
    border-radius: 8px;
    padding: 1rem 0rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .clinic-management-feature-header {
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  .clinic-management-feature-title {
    margin-bottom: 0;

    font-size: 21px;
    line-height: 27px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
  }

  .clinic-management-feature-icon {
    font-size: 1.5rem;
    color: #777;
  }

  .clinic-management-feature-description {
    font-size: 18px;
    font-family: Inter;
    color: #000;
    font-weight: 400;
    margin-left: 10px;
    margin-top: 1rem;
  }

  .clinic-management-image {
    width: 650px;
    height: 618px;
  }

  .clinic-management-image img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
  @media (max-width: 391px) {
    .clinic-management-container {
      display: none;
    }
  }
`;
