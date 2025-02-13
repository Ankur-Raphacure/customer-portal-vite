import styled from "styled-components";

export const BMICalculatorStyled = styled.div`
  width: 100%;
  .banner-div {
    background-image: linear-gradient(#c7e6ff, #ffffff);
  }

  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-div img {
    margin-top: 3rem;
  }
  .card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .card {
    margin-bottom: 4rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width: 100%;
    height: 5rem;
    border-radius: 8px;
  }
  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-body h4 {
    width: 39px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #a6a6a6;
    height: 12px;
    margin-bottom: 2rem;
  }
  .sub-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    position: absolute;
    width: 65%;
    height: 3rem;
    border: 1px solid #a6a6a6;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;
    border-radius: 8px;
  }
  .sub-card h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #a6a6a6;
    height: 12px;
    margin-top: 2rem;
  }
  .card-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .name-display {
    width: 100%;
    padding: 2rem;
  }
  .name-display h4 {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 2rem;
  }
  .day-div {
    /* width: 45px; */
    font-size: 16px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 600;
    color: #9747ff;
    /* height: 12px; */
  }
  .list-div {
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .slot-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    gap: 4rem;
    padding: 2rem;
  }
  .slot-title {
    /* width: 90px; */
    font-size: 14px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 600;
    color: #424346;
    /* height: 12px; */
  }
  .timeSlot {
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
      padding: 0;
      width: 100%;
      li {
        justify-content: center;
        padding: 10px;
        input {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          width: 100%;
        }
      }
    }
  }
  .name-div {
    padding: 15px;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  .name-div p {
    margin: 0;
  }
  .btn-div button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    border-radius: 3px;
    background-color: #9747ff;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;
    color: #fff;
    border: none;
  }
  .btn-div {
    padding: 1rem;
    display: flex;
    justify-content: end;
    margin-right: 3rem;
  }

  .button-with-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #0f988e;
    font-family: "Istok Web", sans-serif;
    letter-spacing: 1px;
    padding: 0 12px;
    text-align: center;
    width: 120px;
    height: 40px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 3px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transform: translateY(0px);
    position: relative;
    box-shadow: inset 0 30px 30px -15px rgba(255, 255, 255, 0.1),
      inset 0 0 0 1px rgba(255, 255, 255, 0.3),
      inset 0 1px 20px rgba(0, 0, 0, 0), 0 3px 0 #0f988e,
      0 3px 2px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1),
      0 10px 20px rgba(0, 0, 0, 0.1);
    background: #15ccbe;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transition: 150ms all ease-in-out;
  }

  .button-with-icon .icon {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    transition: all 0.5s ease-in-out;
  }

  .button-with-icon:active {
    transform: translateY(3px);
    box-shadow: inset 0 16px 2px -15px rgba(0, 0, 0, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 20px rgba(0, 0, 0, 0.1), 0 0 0 #0f988e,
      0 0 0 2px rgba(255, 255, 255, 0.5), 0 0 0 rgba(0, 0, 0, 0),
      0 0 0 rgba(0, 0, 0, 0);
  }

  .button-with-icon:hover .text {
    transform: translateX(150px);
  }
  .button-with-icon:hover .icon {
    transform: translate(30px);
  }

  .text {
    transition: all 0.5s ease-in-out;
  }
  .button {
    position: relative;
    width: 150px;
    height: 43px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #17795e;
    background-color: #209978;
    overflow: hidden;
  }

  .button,
  .button__icon,
  .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    color: #fff;
    font-weight: 600;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #17795e;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button .svg {
    width: 20px;
    fill: #fff;
  }

  .button:hover {
    background: #17795e;
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  .button:active .button__icon {
    background-color: #146c54;
  }

  .button:active {
    border: 1px solid #146c54;
  }

  .weeks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btn-div {
    gap: 1rem;
    align-items: center;
    .update-button {
      height: 100%;
    }
  }
`;
