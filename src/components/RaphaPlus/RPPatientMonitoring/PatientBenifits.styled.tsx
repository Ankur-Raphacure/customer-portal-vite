import styled from "styled-components";

export const PatientBenifitsStyled = styled.div`
  .software-promo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 2rem;
    width: 100vw;
    height: 80vh;
    box-sizing: border-box;
  }

  .Container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6rem;
    background-color: #fff;
  }
  .BenefitsList {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 33rem;
  }
  .Title {
    font-weight: 600;
    margin-bottom: 4rem;
    width: 429px;
    position: relative;
    font-size: 50px;
    display: inline-block;
    color: #191a15;
    text-align: left;
  }
  .BenefitItem {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .CheckIcon {
    display: inline-block;
    width: 45px;
    height: 25px;
    background-color: #54bd95;
    border-radius: 50%;
    margin-right: 15px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 8px;
      top: 4px;
      width: 6px;
      height: 12px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
  .BenefitText {
    width: 419px;
    position: relative;
    font-size: 20px;
    line-height: 29.25px;
    text-transform: capitalize;
    font-weight: 600;
    color: #001e3a;
    text-align: left;
    letter-spacing: -1px;
  }
  .img-div {
    margin-left: 6rem;
  }
`;
