import styled from "styled-components";

export const LabTestStyled = styled.div`
  width: 100%;

  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .scrollbar {
    scrollbar-color: #9757ff #fff;
  }
  .view-all {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    button {
      color: #9747ff;
      background: #fff;
      height: 40px;
      border: 1px solid #9747ff;
      padding: 0px 50px;
      border-radius: 4px;
    }
    text-align: center;
  }
  .labs-near-you-list-all {
    scroll-behavior: smooth;
    scrollbar-color: #9757ff #fff;
    background-attachment: scroll;
    display: flex;
    // overflow-x: scroll !important;
    gap: 12px;
    // max-width: 1320px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 14px;
  }

  .lab-test-data-content {
    width: 96%;
    max-width: 96rem;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .top-category-list-all {
    gap: 26px !important;
  }
  .best-packages-sec {
    margin-top: 40px !important;
  }

  .best-packages-sec span {
    color: #000;
    /* font-family: Poppins; */
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .best-packages-sec-conent-all {
    margin-top: 20px !important;
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
  /* Default styles */
  .card-body1 img {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 100%;
    max-height: 100px;
    object-fit: contain;
  }
  .list-best-packages-list {
    margin-top: 24px;
  }

  .back-btn-sec {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.8;
  }

  .labs-search-section {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;
    margin-bottom: 24px;
    padding: 0 12px;
  }

  .labs-search-section-input {
    position: relative;
    flex: 1;
    max-width: 400px;
  }

  .labs-search-section-input input {
    width: 100%;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    border-radius: 10px;
    border: none;
    height: 40px;
    // padding: 8px 40px 8px 8px;
    box-sizing: border-box;
    padding-left: 12px;
  }

  .labs-search-section-input button {
    position: absolute;

    border-radius: 6px;
    background: #426f09;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    padding: 8px 14px;
    margin-right: 16px;
    margin-bottom: 3px;
  }

  /* Filter buttons section */
  .labs-search-section-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-left: 70px;
  }

  .labs-search-section-links button {
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.4;
    background: #fff;
    height: 38px;
    color: #000;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 20px;
  }

  /* Media query for smaller screens */
  @media (max-width: 600px) {
    .labs-search-section {
      flex-direction: column;
    }

    .labs-search-section-input {
      width: 100%;
    }

    .labs-search-section-input button {
      right: 0;
      top: auto;
      bottom: 0;
      transform: none;
      // width: 20%;
      margin: 2px;
    }

    .labs-search-section-links {
      width: 100%;
      margin-left: 0px;
    }
  }

  @media (max-width: 767px) {
    .card-body1 img {
      // width: auto;
      // height: auto;
      border-radius: 10px;
    }
    .labs-search-section-links {
      display: block;
    }
    .labs-search-section-links button {
      margin: 2px;
    }
  }

  h3 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .box-category-sec {
    padding: 0px;
  }

  .list-categories-list {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(150px, 1fr)
    ); /* Responsive grid with minimum column width of 150px */
    gap: 16px;
    margin-top: 24px;
  }

  .card-body1 img {
    width: 100%;
    height: auto;
    max-height: 100px; /* Limit image height */
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .list-categories-list {
      grid-template-columns: repeat(
        auto-fit,
        minmax(120px, 1fr)
      ); /* Two columns on smaller screens */
    }
  }
  @media (max-width: 767px) {
    .labs-near-you-list {
      display: flex;
      align-items: center;
      flex-direction: column; /* Stack cards vertically */
    }

    .labs-near-you-list-all {
      display: flex;
      flex-direction: column;
      // max-height: 300px;
      overflow-x: auto; /* Add scroll bar for overflow */
      gap: 16px; /* Adjust gap between cards */
    }

    .labs-near-you-list-all > * {
      width: 100%;
    }
    .lab-test-data-content {
      margin-top: 20px;
    }
  }
  .categoryWrapper {
    height: 100%;
    border: double 2px transparent;
    border-radius: 12px;
    /* background-image: linear-gradient(white, white),
      linear-gradient(to bottom, #00ff00, #00ff00, #00ff00, transparent); */
    background-origin: border-box;
    background-clip: content-box, border-box;
  }
  .categoryWrapper > div {
    height: 100%;
  }
`;
