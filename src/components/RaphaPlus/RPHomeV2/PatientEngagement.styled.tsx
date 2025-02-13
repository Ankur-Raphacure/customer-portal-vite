import styled from "styled-components";

export const PatientEngagementStyled = styled.div`
    padding: 0rem 4.5rem;
  .wrapper {
    display: flex;
    border: 4px solid #FFF4BC99;
    background: #fcfdfc;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
  }

  .content {
    width: 100%;
    padding: 5rem;
    border-radius: 10px;
    background: linear-gradient(89.88deg, rgba(255, 244, 188, 0.6), rgba(255, 244, 188, 0.59) 28.4%, #fcfdfc);
    @media (max-width: 1024px) {
      max-width: 100%;
    }
    @media (max-width: 600px) {
      padding: 2rem;
    }
    @media (max-width: 480px) {
      padding: 10px;
    }
  }

  .content h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 50px;
    @media (max-width: 700px) {
      font-size: 27px;
    }
  }

  .content p {
    font-size: 18px;
    font-weight: 500;
    color: #3c4959;
    margin-bottom: 20px;
  }

  .content ul {
    list-style: disc;
    padding-left: 20px;
  }

  .content ul li {
    font-size: 21px;
    margin-bottom: 8px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
  }

  .video {
    flex-shrink: 0;
    max-width: 50%;
    border-radius: 15px;
    background: #fcfdfc;
    @media (max-width: 1024px) {
      max-width: 100%;
    }
  }

  .video video {
  height: 100%;
  width: 100%;
  border-radius: 15px;
}


  @media (max-width: 391px) {
    .wrapper {
      display: none;
    }
  }
`;
