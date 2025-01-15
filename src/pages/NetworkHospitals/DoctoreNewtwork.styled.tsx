import styled from "styled-components";

export const DoctorsNetwoekstyled = styled.div`
  font-family: Poppins, sans-serif;
  font-style: normal;
  width: 100%;
  margin-top: 2rem;

  .Card {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #161616;
    margin-bottom: 1rem;
  }

  .CardBody {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    flex-wrap: wrap;
  }

  .DoctorInfo {
    display: flex;
    align-items: center;
    width: 40%;
  }

  .DoctorImage img {
    width: 67px;
    height: 67px;
    border-radius: 100%;
  }

  .DoctorDetails {
    margin-left: 1rem;
  }

  .DoctorName {
    width: 150px;
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    text-align: left;
    display: inline-block;
  }

  .DoctorSpecialization {
    color: #00c9aa;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .DoctorRating {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .Rating {
    color: #000;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .Experience {
    color: #000;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .Experience img {
    height: 17px;
  }

  .Languages {
    color: #000;
    font-size: 10px;
    font-weight: 400;
  }

  .Languages img {
    height: 21px;
  }

  .BookButton {
    width: 10%;
  }

  .BookButton button {
    background-color: #9474ff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .rating-div {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .content-div {
    color: #000;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 768px) {
    .CardBody {
      flex-direction: column;
      align-items: flex-start;
    }

    .DoctorInfo,
    .DoctorRating,
    .BookButton {
      width: 100%;
      margin-bottom: 1rem;
    }

    .DoctorName {
      font-size: 16px;
    }

    .DoctorSpecialization,
    .Rating,
    .Experience,
    .Languages,
    .content-div {
      font-size: 12px;
    }

    .BookButton button {
      width: 100%;
      font-size: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    .DoctorName {
      font-size: 14px;
    }

    .DoctorSpecialization,
    .Rating,
    .Experience,
    .Languages,
    .content-div {
      font-size: 10px;
    }

    .BookButton button {
      font-size: 0.75rem;
    }
  }
`;
