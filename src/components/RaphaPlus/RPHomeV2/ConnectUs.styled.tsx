import styled from "styled-components";

export const ConnectUsStyled = styled.div`
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .heading-section {
    text-align: center;
    margin: 0 auto 40px;
    max-width: 800px;

    h2 {
      font-size: 32px;
      font-weight: 600;
      display: inline-block;
      font-family: Inter;
      color: #011632;
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      font-family: Inter;
      color: #3c4959;
      text-align: center;
    }
  }

  .content-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }

  .left-panel {
    flex: 1 1 45%;
    width: 100%;
    position: relative;
    border-radius: 10px;
    /* border: 1px solid #a2d8c0; */
    box-sizing: border-box;
    height: 694px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #fff;
    /* box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); */
    padding: 0px 20px;
  }

  .map-section {
    width: 100%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.08);
    background: white;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #3c4959;

    .icon {
      margin-right: 19px;
      margin-top: 10px;
      color: #fff;

      height: 33px;
    }

    .map-details {
      position: absolute;
      display: flex;
      bottom: 10px;
      left: 18px;
      right: 18px;
      background: white;
      color: black;
      padding: 4px 12px;
      border-radius: 5px;

      p {
        font-size: 13px;
      }
    }
  }

  .gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom,
  button.gm-control-active.gm-fullscreen-control,
  div[role="menubar"].gmnoprint.gm-style-mtc-bbw,
  div.gm-style-cc {
    display: none;
  }

  .contact-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow: hidden;
    box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.08);

    .contact {
      height: 93px;
      border-radius: 10px;
      padding: 13px 30px;
      box-shadow: 0px 5px 50px rgba(0, 0, 0, 0.08);
      display: flex;
    }
    .icon {
      margin-right: 19px;
      margin-top: 10px;
      color: #fff;
      height: 30px;
    }

    p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Inter;
      color: #3c4959;

      strong {
        color: #011632;
      }
    }
  }

  @media (max-width: 768px) {
    .left-panel {
      flex-direction: column;
    }

    .map-section iframe {
      height: 200px;
    }
  }

  .form-section {
    flex: 1 1 45%;
    width: 100%;
    position: relative;
    border-radius: 10px;
    border: 1px solid #a2d8c0;
    box-sizing: border-box;
    height: fit-content;

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 40px 40px;
      padding-bottom: 20px;

      .name-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 15px;
      }

      .name-item {
        display: flex;
        flex-direction: column; /* Stack label and input vertically */
        width: 100%;
      }

      .name-item label {
        /* margin-bottom: 5px; Add spacing between label and input */

        font-size: 18px;
        font-weight: 500;
        font-family: Inter;
        color: #3c4959;
        text-align: left;
        margin-bottom: 15px;
      }

      .name-item input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .name-item input:focus {
        border-color: #9747ff;
        outline: none;
      }

      .forms-group {
        display: flex;
        justify-content: flex-start;
        gap: 89px;
        margin-bottom: 15px;
      }

      .forms-group:last-child {
        margin-top: 10px;
      }
      .error {
        color: red;
        margin-top: -1px;
      }

      .form-group {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        /* margin-bottom: 15px; */
        flex-direction: column;

        input[name="message"] {
          height: 180px;
        }

        label {
          font-size: 18px;
          font-weight: 500;
          font-family: Inter;
          color: #3c4959;
          text-align: left;
        }
      }
      .form-group textarea {
        height: 205px;
      }

      .form-group:last-child {
        margin-top: 10px;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 10px;
        /* margin-bottom: 10px; */
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      .form-group input:focus,
      .form-group textarea:focus {
        border-color: #9747ff;
        outline: none;
      }

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: #aaa;
      }

      button {
        display: inline-block;
        padding: 10px 15px; /* Ensure consistent padding */
        background-color: #252b61; /* Same background color */
        color: #fff; /* Consistent text color */
        border: none; /* Remove outlines */
        border-radius: 25px; /* Match border-radius */
        font-size: 1rem; /* Keep font size consistent */
        cursor: pointer;
        text-align: center; /* Center the text */
        transition: background-color 0.3s;
        width: 165px; /* Remove any conflicting width styles */
        margin: auto;
        margin-top: 20px;
      }

      button:hover {
        background-color: #0056b3;
      }
    }
  }

  @media (max-width: 768px) {
    .content-section {
      flex-direction: column;
    }

    .map-section {
      iframe {
        height: 200px;
      }
    }

    .form-section {
      form {
        .form-group {
          input {
            flex: 1 1 100%;
          }
        }
      }
    }
  }
  @media (max-width: 391px) {
    .content-section {
      flex-direction: column-reverse;
    }

    .heading-section {
      text-align: left;
      margin: unset;
    }

    .heading-section h2 {
      /* width: 107px;
      position: relative; */
      font-size: 18px;
      display: inline-block;
      font-family: Inter;
      color: #011632;
      text-align: left;
    }

    .heading-section p {
      font-size: 18px;
      font-family: Inter;
      color: #3c4959;
      text-align: left;
    }

    .form-section {
      border: unset;

      form {
        padding: unset;

        .name-group {
          flex-direction: column;
        }

        button {
          width: 100%;
        }
      }
    }

    .left-panel {
      padding: 20px 0px;
    }
  }
`;
