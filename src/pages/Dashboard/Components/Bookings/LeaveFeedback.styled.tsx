import styled from "styled-components";

export const LeaveFeedbackFormStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;

  .formContainer {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
  }

  .closeButton {
    background: none;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .rating-heading-div {
    text-align: center;
  }

  .rating-heading-div p {
    font-size: 14px;
    color: #00c9aa;
  }

  .rating-heading-div h4 {
    font-size: 24px;
    font-weight: 500;
    color: #000;
    opacity: 0.87;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  .container svg {
    position: relative;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
    transition: all 0.3s;
    fill: #666;
  }

  .container svg:hover {
    transform: scale(1.1);
  }

  .container input:checked ~ svg {
    fill: #ffeb49;
  }

  .dotted-line {
    border: none;
    border-top: 2px dotted #333;
    margin: 10px 0;
    width: 100%;
  }

  .message-input {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    resize: vertical;
    box-shadow: none;
    background: #edf0f5;
  }

  .rating-submit-btn {
    margin-top: 1.5rem;
    width: 50%;
    position: relative;
    border-radius: 15px;
    background-color: #9747ff;
    color: #fff;
    height: 45px;
  }

  .rating-submit-div {
    display: flex;
    justify-content: center;
  }

  .feedback_emoji_div h4 {
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    color: #000;
  }

  .textarea-div textarea:focus {
    outline: none;
  }
  .rating-star-icon-div {
    display: flex;
  }
  @media (max-width: 768px) {
    .formContainer {
      width: 90%;
    }
    .container svg {
      height: 40px;
      width: 40px;
    }
    .rating-star-icon-div {
      /* display: flex; */
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .formContainer {
      padding: 15px;
    }

    .rating-heading-div h4 {
      font-size: 20px;
    }
    .container svg {
      height: 30px;
      width: 30px;
    }
    .rating-submit-btn {
      width: 70%;
    }
  }
`;
