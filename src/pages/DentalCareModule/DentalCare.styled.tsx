import styled from "styled-components";

export const DentalCareStyled = styled.div`
  width: 100%;
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .scrollbar {
    scrollbar-color: #9757ff #fff;
  }
  .lab-test-data-content {
    padding: 0px 60px;
  }
  .labs-near-me-sec-header {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.9;
  }
  .top-category-sec {
    color: #000;
    /* font-family: Poppins; */
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .margin-top-bottom-sec {
    margin-top: 40px !important;
    margin-bottom: 20px !important;
  }

  .card-body1 {
    border-radius: 12px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 8px !important;
  }
  .showall-div {
    display: flex;
    justify-content: end;
  }
  @media (max-width: 768px) {
    .section-classtwo {
      // width: 50%;
      display: flex;
    }
  }
`;
