import styled from "styled-components";




export const MentalWellnessStyled = styled.div`
  width: 100%;
  
  h2 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px; /* 129.167% */
  }

  .header {
    background: linear-gradient(215deg, #85c8ff -28.68%, #fff 64.67%);
    text-align: left;
    padding: 3rem 2rem;
    position: relative;
    margin-bottom: 3rem;
    color: #242424;
  }

  .header-content h1 {
    width: 100%;
    color: #242424;
    font-size: 56px;
    font-weight: 800;
    line-height: 72px;
  }

  .header-content h1 span {
    color: #fec426;
  }

  .header-content p {
    width: 100%;
    color: #655959;
    font-size: 14px;
    font-weight: 400;
    line-height: 27px;
    margin: 2.5rem 0;
  }

  .BookAppoint {
    border-radius: 3px;
    background: #9747ff;
    color: #fff;
    padding: 10px 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 29px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .BookAppoint:hover {
    background: #7c3ccf;
  }

  .dom-img img {
    max-width: 100%;
    height: auto;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .header-content h1 {
      font-size: 36px;
      line-height: 48px;
    }

    .header-content p {
      font-size: 12px;
      line-height: 20px;
    }

    .BookAppoint {
      padding: 8px 30px;
      font-size: 14px;
    }
  }

  @media (max-width: 576px) {
    .header {
      padding: 2rem 1rem;
      text-align: center;
    }

    .header-content {
      text-align: center;
    }

    .header-content h1 {
      font-size: 28px;
      line-height: 40px;
    }

    .header-content p {
      font-size: 12px;
      line-height: 20px;
    }

    .BookAppoint {
      padding: 8px 25px;
      font-size: 14px;
    }

    .dom-img img {
      display: none; /* Hide the image on smaller screens */
    }
  }
  .category-container {
    padding: 40px;
  }

  .category-title {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px; /* 129.167% */
    margin-bottom: 40px;
  }

  .d-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* Centers the cards */
    gap: 10px;
  }

  .category-card {
    width: 180px;
    border: none;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 8px 18.1px 0px rgba(0, 0, 0, 0.1);
  }

  .category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }

  .icon-container {
    margin-top: 16px;
  }

  .card-img-top {
    width: 100%; /* Full width inside the circle */
  }

  .card-title {
    color: #9747ff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px; /* 207.143% */
    margin-bottom: 10px;
  }

  .card-text {
    color: #838383;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; /* 190% */
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .category-card {
      width: 200px;
      padding: 15px;
    }

    .card-title {
      font-size: 16px;
    }

    .icon-container {
      width: 60px;
      height: 60px;
    }

    .card-text {
      font-size: 12px;
    }
  }

  @media (max-width: 576px) {
    .category-card {
      width: 160px;
      padding: 10px;
    }

    .card-title {
      font-size: 14px;
    }

    .icon-container {
      width: 50px;
      height: 50px;
    }

    .card-text {
      font-size: 11px;
    }
  }

  /* therapists */
  .therapists {
    padding: 0px 40px;
  }
  .therapists h2 {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 31px; /* 129.167% */
  }

  .clinics-container {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 12px;
  }

  .clinic-card {
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    width: 600px; /* Adjust the width to fit the card design */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    cursor: pointer;
  }

  .clinic-card:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  .clinic-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .clinic-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .clinic-info {
    flex: 1;
  }

  .clinic-name {
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
  }

  .clinic-specialization {
    color: #00c9aa;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 5px;
  }

  .clinic-rating {
    display: flex;
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .clinic-details {
    margin-top: 5px;
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
  }
  .add {
    display: flex;
    gap: 12px;
  }
  .add p {
    margin-bottom: 5px;
  }
  .clinic-experience {
    margin-bottom: 5px;
  }

  .clinic-languages {
    color: #666;
  }

  .clinic-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
  }

  .clinic-location {
    font-size: 14px;
  }

  .clinic-address {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .clinic-fee {
    margin: 5px 0;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .clinic-next-available {
    color: #34a853;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .clinic-book-btn {
    border-radius: 5px;
    background: #9747ff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .clinic-book-btn:hover {
    background-color: #7a41b8;
  }
  hr {
    margin: 0;
  }
  .form-icu {
    border-radius: 8px;
    border: 1px solid #fff;
    opacity: 0.8;
    background: linear-gradient(113deg, #fff 4.35%, #c3c7ff 101.65%);
    padding: 30px;
    margin: 40px;
  }

  .form-icu h2 {
    color: #373636;
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  .form-icu label {
    font-size: 12px;
    color: #000;
  }

  .form-icu input,
  .form-icu textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    color: #a8a8a8;
  }

  .form-icu textarea {
    height: 100px;
    resize: none;
  }

  .btn-submit {
    width: 100%;
    padding: 12px;
    background-color: #7d3bf2;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-submit:hover {
    background-color: #6a32d9;
  }
  .Book-Slot {
    padding: 40px;
  }
  .view-btn{
    text-decoration: none;
    border: none;
    background: transparent;
  }
`;
