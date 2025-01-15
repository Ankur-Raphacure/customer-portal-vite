import styled from "styled-components";

export const HealthsArticleStyled = styled.div`
  .health-article {
    flex-wrap: wrap;
    gap: 26px;
    margin-top: 24px;
  }
  .custome-blog-btn {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: #9474ff;
    height: 39px;
    color: #fff;
    border: none;
    font-size: 14px;
    font-weight: 600;
  }
  .main-card {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Adjust gap as needed */
    justify-content: flex-start;
  }

  .card-container {
    flex: 0 1 calc(33.333% - 16px);
    box-sizing: border-box;
    margin-bottom: 16px;
  }

  .imgspace {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    img {
      width: 100%;
      margin-top: 12px;
      object-fit: contain;
    }
  }

  .cardstyle {
    width: 100%;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  .bottom-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }

  .name-tag {
    padding-left: 18px;
  }
  .custome-create-btn {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 9px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: #9474ff;
    height: 39px;
    opacity: 0.9;
    cursor: pointer;
    color: #fff;
  }
  .custome-blog-div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .card-container {
      flex: 0 1 calc(50% - 16px); /* Adjust for smaller screens */
    }
    .custome-blog-div {
      display: block;
    }
  }

  @media (max-width: 480px) {
    .card-container {
      flex: 0 1 100%; /* Adjust for mobile screens */
    }
  }

  .title {
    h6 {
      width: 319px;
      position: relative;
      font-size: 14px;
      letter-spacing: 0.09em;
      line-height: 237%;
      font-weight: 600;
      color: #000;
      text-align: justify;
      display: inline-block;
      opacity: 0.8;
    }
  }

  .subtitle {
    p {
      width: 368px;
      position: relative;
      font-size: 12px;
      letter-spacing: 0.03em;
      line-height: 237%;
      font-weight: 500;
      color: #072549;
      text-align: justify;
      display: inline-block;
      height: 95px;
      opacity: 0.55;
    }
  }

  .custome-btn {
    width: 100%;
    position: relative;
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    background-color: #fff;
    height: 40px;
    cursor: pointer;
    color: #9474ff;
  }
  .custome-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ButtonGroup {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
    padding: 2px;
    border-radius: 5px;
    background-color: #f6f9fd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
  }
  .custome-ToggleButton {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    color: #0c1113;
    &:last-child {
      margin-right: 0;
    }
  }
  .custome-blog-btn {
    color: red;
  }
  .searchbar-health {
    display: flex;
  }
  @media (max-width: 768px) {
    .searchbar-health {
      display: block;
    }
    .StyleMenu {
      display: block;
    }
  }
`;
