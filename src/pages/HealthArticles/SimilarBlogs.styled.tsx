import styled from "styled-components";

export const SimilarBlogsStyle = styled.div`
  width: 100%;
  height: auto;

  .round-shadow {
    background-color: #e2f4ee;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
  }

  .round-shadow-1 {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
  }

  .content {
    margin-top: 16px;
    text-align: center;

    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .description {
      font-size: 14px;
      margin-top: 8px;
    }
  }

  .sub-cards-container {
    display: flex;
    gap: 16px;
    width: 90%;
    overflow-x: auto;
  }

  .sub-card {
    flex: 0 0 auto;
    width: calc(33.333% - 16px);
    display: flex;
    flex-direction: column;

    .image-container {
      width: 100%;

      img {
        width: 100%;
        border-radius: 10px;
      }
    }

    .content {
      margin-top: 16px;
      text-align: center;

      .title {
        font-size: 11px;
        font-weight: bold;
      }

      .title-1 {
        font-size: 10px;
      }

      .description {
        font-size: 12px;
        margin-top: 8px;
      }
    }
  }

  .description-1 {
    display: flex;
    justify-content: space-between;
  }

  .description {
    text-align: justify;
  }

  .button-container {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .arrow-button {
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
  }
  .farrow-button {
    background-color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 10px;
    margin-right: 12px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
  }

  .rotatedImage {
    transform: rotate(180deg);
  }
`;
