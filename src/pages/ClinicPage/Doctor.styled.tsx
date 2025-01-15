import styled from "styled-components";

export const DoctorStyled = styled.div`
  padding: 0px 40px;
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .paragraph {
    display: flex;
    justify-content: space-between;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  .paragraph p {
    margin: 0;
  }

  /* styles.css */
  .doctor-card {
    border-radius: 12px;
    /* padding: 20px; */
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 100%;
    /* max-width: 300px; */
  }

  .rapha-assured {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ffe169;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: fit-content;
      height: fit-content;
      object-fit: none;
      border-radius: 0;
    }
  }

  .doctor-image {
    display: flex;
    background: #f0f0f5;
    img {
      margin: auto;
      width: fit-content;
      height: fit-content;
      border-radius: 8px;
      padding: 3rem 2rem 0 2rem;
    }
  }

  .doctor-info {
    margin-top: 15px;
    padding: 10px 20px;
    position: relative;
  }

  .doctor-info h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  .doctor-info h3 {
    margin: 5px 0;
    color: #666;
    font-size: 1rem;
  }

  .qualifications {
    color: #888;
    font-size: 0.9rem;
  }

  .experience,
  .languages {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    color: #666;
  }

  .quick-booking {
    background: #ffe169;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    margin-top: 10px;
  }

  .doctors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .lightning-icon {
    width: fit-content;
    height: fit-content;
    border-radius: 0;
  }

  .bannerWrapper {
    position: absolute;
    top: -1rem;
    right: -1rem;
    .rectangle {
      background: #f0da69;
      padding: 5px;
      border-radius: 40px 10px 0 45px;
      display: flex;
      flex-direction: row;
      white-space: nowrap;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
    .triangle {
      width: 0;
      height: 0;
      border-right: 1rem solid transparent;
      border-top: 0.8rem solid #d2be59;
      position: absolute;
      right: 0;
    }
  }

  .hospital-specislist-main-div p {
    margin: unset;
    width: 100%;
    position: relative;
    font-size: 18px;
    line-height: 27px;
    font-family: Inter;
    color: #171a1f;
  }

  .hospital-specislist-main-div h5 {
    margin: unset;
    font-size: 32px;
    display: inline-block;
    font-family: Inter;
    color: #171a1f;
  }

  .hospital-specislist-sub-main-div {
    padding: unset;
  }

  .scanCenter-card-container img {
  }

  @media (max-width: 1024px) {
    .paragraph {
      flex-direction: column;
      text-align: center;
    }

    .doctor-card {
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
    }

    .doctors-grid {
      grid-template-columns: 2fr 2fr;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .doctors-grid {
      grid-template-columns: 2fr 2fr;
    }

    .doctor-card {
      padding: 10px;
    }

    .doctor-info h2 {
      font-size: 1rem;
    }

    .doctor-info h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 605px) {
    .doctors-grid {
      grid-template-columns: 2fr;
    }
  }

  @media (max-width: 480px) {
    .paragraph {
      font-size: 0.9rem;
    }

    .doctor-info {
      padding: 10px;
    }

    .doctor-info h2 {
      font-size: 0.9rem;
    }

    .doctor-info h3 {
      font-size: 0.8rem;
    }

    .quick-booking {
      padding: 5px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .hospital-specislist-main-div h5 {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .viewAllBtn {
      display: none;
    }

    .hospital-specislist-main-div p {
      font-size: 14px;
      line-height: 19px;
      font-weight: 300;
      margin-bottom: 20px;
      margin-top: 10px;
      font-family: Inter;
      color: #171a1f;
      text-align: left;
    }

    .react-multi-carousel-track {
      overflow: scroll;
      width: 85%;
    }

    .docDesc {
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }
  .hospital-specislist-main-div p {
    position: absolute;
    top: 0;
    right: 7px;
  }
`;
