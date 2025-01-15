import styled from "styled-components";

export const PatientAboutStyled = styled.div`
  .Container {
    display: flex;
    justify-content: center;
    padding: 3rem;
    align-items: center;
    background-color: #fff;
  }
  .FormWrapper {
    background: linear-gradient(
      180.03deg,
      #27b3a4 14.72%,
      rgba(255, 255, 255, 0)
    );
    padding: 3rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    height: 499px;
    box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.25);
  }
  .Title {
    margin-top: 2rem;
    width: 229px;
    position: relative;
    font-size: 30px;
    line-height: 28px;
    font-weight: 600;
    color: #001e3a;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .LableText {
    margin-top: 2rem;
    margin-bottom: 12px;
    width: 100%;
    position: relative;
    font-size: 14px;
    letter-spacing: 0.3px;
    line-height: 12px;
    font-weight: 500;
    color: #333;
    text-align: left;
    display: inline-block;
  }
  .LableTexts {
    flex: 1;
    width: 100%;
    position: relative;
    font-size: 15px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 12px;
  }
  .Button {
    margin-top: 3rem;
    width: 100%;
    border: none;
    background: linear-gradient(90deg, #27b3a4, #001e3a);
    padding: 10px 24px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
  .RightContainer {
    margin-left: 14rem;
    text-align: left;
  }
  .Heading {
    margin-top: 2rem;
    width: 444px;
    position: relative;
    font-size: 50px;
    font-weight: 600;
    color: #001e3a;
    letter-spacing: 1px;
    margin-left: -2rem;
    line-height: 55px;
  }
  .SubHeading {
    width: 460px;
    position: relative;
    font-size: 18px;
    line-height: 30px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
    margin-top: 20px;
    margin-left: -2rem;
  }
  .SubText {
    margin-top: 1rem;
    width: 117px;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
    display: inline-block;
    height: 16px;
    margin-left: 17rem;
  }
  @media (max-width: 700px) {
    .Container {
      flex-direction: column;
    }
  }
  @media (max-width: 700px) {
    .RightContainer {
      margin: auto;
    }
  }
  @media (max-width: 700px) {
    .right-div {
      margin: 0px 0px 24px 120px;
    }
  }
`;
