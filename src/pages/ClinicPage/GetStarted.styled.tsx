import styled from "styled-components";

export const GetStartedStyled = styled.div`
  padding: 0px 40px;
  .getstartedcontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 12px;
  }

  .text-section {
    flex: 1;
    margin-right: 20px;
  }

  .title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-left: 64px;
  }

  .description {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    margin-left: 64px;
  }

  .button {
    padding: 10px 20px;
    background-color: #252b61;
    color: #fff;
    border: none;
    border-radius: 39px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 64px;
  }

  .image-section {
    flex: 1;
  }

  .image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    .getstartedcontainer {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
    }

    .text-section {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .title {
      font-size: 36px;
      margin-left: 0;
    }

    .description {
      font-size: 14px;
      margin-left: 0;
    }

    .button {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 28px;
    }

    .description {
      font-size: 12px;
    }

    .button {
      font-size: 14px;
      padding: 8px 16px;
    }
  }

  @media (max-width: 480px) {
    .getstartedcontainer {
      padding: 10px;
    }

    .title {
      font-size: 24px;
    }

    .description {
      font-size: 12px;
    }

    .button {
      font-size: 12px;
      padding: 6px 12px;
    }

    .image {
      border-radius: 4px;
    }
  }
  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .getstartedcontainer {
      border: none;
      padding: unset;
      display: flex;
      flex-direction: column-reverse;
    }

    .text-section {
      text-align: left;
      margin-top: 10px;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
    }

    .description {
      font-size: 14px;
      font-family: Inter;
      color: #171a1f;
      margin-bottom: 10px;
    }

    .image {
      width: 100%;
      /* height: 208px; */
    }
  }
`;
