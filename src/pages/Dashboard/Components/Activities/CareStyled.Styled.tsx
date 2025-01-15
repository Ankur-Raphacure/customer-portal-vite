import styled from "styled-components";

export const CareStyled = styled.div`
  /* Modal Content */
  .modal-content {
    /* padding: 20px; */
    margin-top: 0px !important;
  }
  .period-modal {
    height: 300px;
    overflow-y: scroll;
  }

  /* Period Section */
  .period-section h5,
  .spotting-section h5,
  .pain-section h5,
  .feelings-section h5 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .period-options,
  .spotting-options,
  .pain-options {
    gap: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
  }

  .feelins-section {
    display: flex;
    gap: 10px;
  }

  /* Option Buttons */
  .period-option,
  .spotting-option,
  .pain-option {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f8f8f8;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #000;
    text-align: center;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  /* Selected Option */
  .selected,
  .period-option:hover,
  .spotting-option:hover,
  .pain-option:hover {
    background-color: #e0e0e0;
  }

  /* Feelings Section */
  .feelings-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    resize: none;
    height: 80px;
  }

  /* Responsive */
  @media (max-width: 576px) {
    .period-options,
    .spotting-options,
    .pain-options {
      flex-direction: column;
    }
  }

  .activity-modal-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .activity-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .activity-card.add-new {
    border: 2px solid #c6c2c2;
    color: #7c4dff;
    border-radius: 5px;
  }

  .activity-card h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
  }

  .bmi-display {
    display: flex;
    align-items: center;
  }

  .bmi-display {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bmi-result {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .bmi-icon {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  .bmi-value {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .btn-calculate-bmi {
    margin-bottom: 15px;
    float: right;
    margin-top: 10px;
  }

  label {
    color: #4f4f4f;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .modal-footer {
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
  }
  .send-Invitation-btn {
  }
  .send-btn {
    border-radius: 3px;
    background: #9747ff;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 1px solid #9747ff;
    height: 2.5rem;
    width: 8rem;
  }
  .next-modal-footer {
    display: flex;
    justify-content: end;
  }
  .cancel-btn {
    border-radius: 3px;
    border: 1px solid #9e9e9e;
    color: #9e9e9e;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 2.5rem;
    width: 5rem;
  }
  .challenge-modal .ant-modal-header {
    padding: 0; /* Removes padding */
    background-color: red; /* Sets the red background */
  }
  .modal-content h3 {
    color: #313131;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .modal-content h5 {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .modal-content .pain-option {
    color: #000;
    text-align: center;
    font-size: 10px !important;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .date {
    display: inline-block;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 5px;
    margin: 0 5px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  .date.highlight {
    background-color: #e33382 !important; /* Matching pink background */
    color: #fff !important; /* White text */
    border: 2px solid #e33382; /* Border color matching the background */
  }
  .cards-div {
    background: #d9d9d9 !important;
    padding: 5px;
    box-sizing: border-box;
    width: 190px;
    /* height: 254px; */
    border: 1px solid white;
    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    color: black;
  }

  .cards-div:hover {
    border: 1px solid #7c4dff;
    transform: scale(1.05);
  }
  .habit-select-item-div h5 {
    font-size: 12px;
    font-weight: 500;
    color: #9c9c9c;
  }
  .cards-div:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }

  .Header-div {
    background: #cef0ff;
  }
  .new-activity-modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-btn-div {
    height: 2.5rem;
    border-radius: 4px;
    border: 1px solid #c6c2c2;
    width: 6rem;
  }
  .options-error-text {
    color: #bd1414;
    font-size: 12px;
    margin-top: -1rem;
  }
  .cycle-info {
    text-align: center;
    margin-top: 20px;
  }

  .cycle-label {
    display: block;
    color: #b0b0b0; /* light grey color */
    margin-bottom: 5px;
  }

  .cycle-line {
    border: none;
    border-top: 1px solid #ccc;
    margin: 10px 0;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .cycle-value {
    font-weight: bold;
    font-size: 24px;
  }
  .activity-header-text h3 {
    text-align: center;
  }
  .goal-head {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goal-title {
    color: #3f3d3d;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 12px;
  }
  .goal-head-steps p {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #636161;
    font-size: 14px;
    font-weight: 400;
  }
  .StepContainer {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: 25rem;
    height: 3rem;
    font-family: Arial, sans-serif;
  }
  .StepTitle {
    font-size: 16px;
    margin-right: 10px;
  }

  .StepContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: fit-content;
    margin: auto;
  }
  .StepTitle {
    font-size: 16px;
    margin-right: 10px;
  }
  .StepButton {
    border: 1px solid #ccc;
    background-color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
  .StepInput {
    font-size: 16px;
    width: 150px;
    border: none;
    outline: none;
  }
  .count-steps-div p {
    padding: 0.5rem;
    margin-top: 15px;
  }
  .clear {
    clear: both;
  }

  .checkBox {
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 0px 0px 1px #565454;
  }

  .checkBox div {
    width: 60px;
    height: 60px;
    background-color: #7c4dff;
    top: -52px;
    left: -52px;
    position: absolute;
    transform: rotateZ(45deg);
    z-index: 100;
  }

  .checkBox input[type="checkbox"]:checked + div {
    left: -10px;
    top: -10px;
  }

  .checkBox input[type="checkbox"] {
    position: absolute;
    left: 50px;
    visibility: hidden;
  }

  .transition {
    transition: 300ms ease;
  }
  .check-box-content-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .row-box-div {
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 11rem;
  }
  .main-row-box-div {
    display: flex;
    justify-content: center;
  }
  .feel-icon-div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .feel-icon-text-div {
    text-align: center;
  }

  .hr1-line-div hr {
    width: 23rem;
    margin-top: -0.5rem;
  }
  .hr2-line-div hr {
    width: 27rem;
    margin-top: -0.5rem;
  }
  .conform-image-div {
    display: flex;
    justify-content: center;
  }
  .conform-image-div img {
    width: 6.5rem;
    height: 6rem;
  }
  .conform-goal-title h3 {
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    color: #9747ff;
  }
  .set-goal-warning-msg-div {
    margin-top: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .set-goal-warning-msg-div h4 {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #434343;
  }
  .conform-text-div h6 {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #000;
  }
  .conform-mood-goal-title h3 {
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    color: #656565;
    height: 26px;
  }
  .conform-mood-goal-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .conform-mood-goal-bottom h4 {
    font-size: 14px;
    font-weight: 600;
    color: #656565;
  }
  .container {
    --color: #a5a5b0;
    --size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size);
    user-select: none;
    fill: var(--color);
  }

  .container .thumbs-up-regular {
    position: absolute;
    animation: keyframes-fill 0.5s;
  }

  .container .thumbs-up-solid {
    position: absolute;
    display: none;
    animation: keyframes-fill 0.5s;
  }

  .container input:checked ~ .thumbs-up-regular {
    display: none;
  }

  .container input:checked ~ .thumbs-up-solid {
    display: block;
  }
  .check-box-select-div h5 {
    font-size: 14px;
    font-weight: 500;
    color: #9c9c9c;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  @keyframes keyframes-fill {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      transform: scale(1.2);
    }
  }
  .modal-title {
    display: flex;
  }
  .ActivitySummery-card-div {
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  .card-title {
    font-size: 14px;
    color: #959595;
    height: 18px;
  }
  .tracker-heading-div {
    display: flex;
    justify-content: space-between;
  }
  .tracker-heading-div h5 {
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
  .tracker-heading-selector-div {
    border-radius: 5px;
    width: 6rem;
  }
  .grph-card-div {
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 1rem;
  }
`;
