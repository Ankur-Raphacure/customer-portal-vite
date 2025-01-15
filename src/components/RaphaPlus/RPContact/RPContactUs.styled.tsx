import styled from "styled-components";

export const RPContactUsstyled = styled.div`
  .mainDiv {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .card {
    background: rgb(255, 255, 255);
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: rgb(250, 250, 250) 0.2em solid;
    padding: 6px;
    display: flex;
    flex-direction: row;
  }

  .rightDiv {
    width: 50%;
    height: 100%;
    background-color: #27b3a4;
    border-radius: 10px;
    padding: 40px;
  }

  .rightDiv h2 {
    width: 291px;
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    text-align: left;
    display: inline-block;
  }

  .rightDiv h5 {
    width: 307px;
    font-size: 18px;
    color: #c9c9c9;
    display: inline-block;
    margin-bottom: 5rem;
  }

  .addressDiv p {
    font-size: 16px;
    color: #fff;
    text-align: left;
    display: inline-block;
  }

  .addressDiv span {
    font-size: 20px;
    color: #fff;
  }

  .addressDiv {
    margin-top: 2rem;
    display: flex;
  }

  .wrapper {
    display: inline-flex;
    margin-left: -2.5rem;
    margin-top: 6rem;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 10px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #1877f2;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }

  .leftDiv {
    width: 50%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      height: auto;
    }

    .rightDiv,
    .leftDiv {
      width: 100%;
      height: auto;
      padding: 20px;
    }

    .rightDiv h2,
    .rightDiv h5,
    .addressDiv p {
      width: 100%;
      font-size: 20px;
    }

    .wrapper {
      flex-direction: row;
      padding-top: 4rem;
    }

    .wrapper .icon {
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .rightDiv h2 {
      font-size: 18px;
    }

    .rightDiv h5 {
      font-size: 16px;
    }

    .addressDiv p {
      font-size: 14px;
    }

    .wrapper {
      padding-top: 2rem;
    }

    .wrapper .icon {
      width: 25px;
      height: 25px;
      font-size: 14px;
    }
  }

  /* Input container */
  .input-container {
    position: relative;
    margin: 20px;
  }

  /* Input field */
  .input-field {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
    background-color: transparent;
  }

  /* Input label */
  .input-label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    color: rgba(204, 204, 204, 0);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  /* Input highlight */
  .input-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #27b3a4;
    transition: all 0.3s ease;
  }

  /* Input field:focus styles */
  .input-field:focus + .input-label {
    top: -20px;
    font-size: 12px;
    color: #000;
  }

  .input-field:focus + .input-label + .input-highlight {
    width: 100%;
  }
  .input-main-div {
    display: flex;
  }

  .radio-button {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 10px;
    position: relative;
    align-items: center;
    color: #27b3a4;
  }

  .radio-button input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  .radio {
    position: relative;
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    transform: translateZ(-25px);
    transition: all 0.3s ease-in-out;
  }

  .radio::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    top: 5px;
    left: 5px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  .radio-button input[type="radio"]:checked + .radio {
    border-color: #25a99b;
    transform: translateZ(0px);
    background-color: #25a99b;
  }

  .radio-button input[type="radio"]:checked + .radio::before {
    /* opacity: 1; */
  }
  .opt-div {
    margin-top: 13px;

    width: 92px;
    position: relative;
    font-size: 12px;
    line-height: 20px;
    color: #27b3a4;
    text-align: left;
    height: 20.4px;
  }
  .option-div {
    padding: 1rem;
  }
  .option-div {
    h5 {
      margin-left: 8px;
      width: 109px;
      position: relative;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      color: #27b3a4;
      text-align: left;
      height: 20.4px;
    }
  }
  .custom-btn {
    display: flex;
    justify-content: end;
    margin-top: 4rem;
    button {
      position: relative;
      box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.12);
      border-radius: 5px;
      background: linear-gradient(90.2deg, #27b3a4, #031d37);
      width: 50%;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 15px 48px;
      color: #fff;
      border: none;
    }
  }
  .img-div {
    display: flex;
    justify-content: center;
    margin: -2rem 0 0 3rem;
  }
`;
