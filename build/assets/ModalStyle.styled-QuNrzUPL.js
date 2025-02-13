import{d as e}from"./index-CitTC1Lo.js";const o=e.div`
  .card {
    width: 190px;
    height: 280px;
    border-radius: 20px;
    background: #fff;
    position: relative;
    padding: 1rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
    box-shadow: 5px 5px 5px 5px #e1dede;
  }
  .card-img {
    width: 150px;
    height: 300px;
  }

  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: grid;
    place-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #9747ff;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }
  .text-title {
    width: 116px;
    color: #4e4e4e;
    font-size: 15px;
    bottom: 0;
    transition: 0.3s ease-out;
    letter-spacing: 0.03em;
    line-height: 31px;
    font-weight: 600;
  }
  .name-div {
    line-height: 18px;
  }
  .text-body {
    width: 130px;
    font-size: 13px;
    letter-spacing: 0.03em;
    line-height: 18px;
    color: #847f80;
    margin-top: -1rem;
  }

  /*Hover*/
  .card:hover {
    border-color: #9747ff;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
    width: 9rem;
  }
  .card:hover .text-title {
    transform: translate(50%, 50%);
    opacity: 0;
  }
  .non-vegetarian h4 {
    width: 134px;
    font-size: 18px;
    letter-spacing: 0.03em;
    line-height: 31px;
    font-weight: 500;
    color: #000;
  }
  .card-div {
    background: #fff;
    box-shadow: rgba(180, 178, 178, 0.35) 0px 5px 15px;
    border: 1px solid #bab7b7;
    border-radius: 1rem;
  }
  .card-body-div {
    margin-left: 10px;
  }
  .foodName {
    position: relative;
    font-size: 14px;
    letter-spacing: 0.03em;
    line-height: 31px;
    font-weight: 500;
    color: #000;
    text-align: left;
    margin-top: 10px;
  }

  .checkbox {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
  }
  .btn-div {
    margin-left: 90%;
  }
  .btn-div button {
    width: 100%;
    background-color: #9747ff;
    padding: 10px;
    color: #fff;
    cursor: pointer;
  }
  .checkbox input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  .checkbox-circle {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #aaa;
    transition: all 0.3s;
  }

  .checkbox input[type="checkbox"]:checked ~ .checkbox-circle {
    background: #4caf50;
    border-color: #4caf50;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0;
    transition: all 0.3s;
  }

  .checkbox input[type="checkbox"]:checked ~ .checkbox-circle .checkmark {
    opacity: 1;
  }

  .checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    transition: stroke-dashoffset 0.3s;
  }

  .checkbox
    input[type="checkbox"]:checked
    ~ .checkbox-circle
    .checkmark-circle {
    stroke-dashoffset: 0;
  }

  .checkmark-kick {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    transition: stroke-dashoffset 0.3s;
  }

  .checkbox input[type="checkbox"]:checked ~ .checkbox-circle .checkmark-kick {
    stroke-dashoffset: 0;
  }
  .header-title h4 {
    position: relative;
    font-size: 18px;
    letter-spacing: 0.03em;
    line-height: 31px;
    font-weight: 600;
    color: #9747ff;
    text-align: left;
    display: inline-block;
  }
  .header-title p {
    font-size: 13px;
    letter-spacing: 0.03em;
    line-height: 31px;
    color: #a8a2a2;
  }
`;export{o as M};
