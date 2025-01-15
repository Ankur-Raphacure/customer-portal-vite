import styled from "styled-components";

export const AboutUsStyled = styled.div`
  padding: 0px 40px;
  .aboutuscontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background-color: #fff;
    border-radius: 0;
    width: 100%;
    height: 100%;
  }

  .image-section {
    flex: 1;
    margin-right: 20px;
  }

  .image {
    width: 100%;
    height: 454.8px;
    border-radius: 15px;
  }

  .text-section {
    flex: 1;
    padding: 20px;
  }

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 70px;
  }

  .description {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
    margin-left: 70px;
  }

  @media (max-width: 1024px) {
    .aboutuscontainer {
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .image-section {
      margin-right: 0;
      margin-bottom: 20px;
    }

    .text-section {
      padding: 10px;
    }

    .title {
      font-size: 28px;
      margin-left: 0;
      text-align: center;
    }

    .description {
      font-size: 14px;
      margin-left: 0;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }

    .description {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .aboutuscontainer {
      padding: 10px;
    }

    .title {
      font-size: 20px;
    }

    .description {
      font-size: 12px;
    }
  }

  @media (max-width: 972px) and (min-width: 700px) {
    html,
    body {
      overflow-x: hidden;
    }

    .aboutuscontainer {
      width: 100%;
      margin: 0 auto;
      overflow-x: hidden;
      padding: 0;
    }
  }

  @media (max-width: 391px) {
    padding: 0px 20px;
    .image {
      width: 100%;
      height: 208px;
    }
    .aboutuscontainer {
      padding: 0;
    }

    .text-section {
      padding: 0px;
    }

    .title {
      margin-left: unset;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      font-family: Inter;
      color: #171a1f;
    }

    .description {
      text-align: left;
      font-size: 14px;
      line-height: 19px;
      font-family: Inter;
      color: #171a1f;
    }
  }
`;
