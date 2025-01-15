import styled from "styled-components";

export const HealthJourneyStyled = styled.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
    padding-bottom: 100px;
  }
  .radiologyParentDiv {
    background-color: #f6f9fd;
    padding: 1.5rem;
  }
  .categoryText {
    width: 100%;
    position: relative;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: #000;
  }
  .layout-container {
    margin-bottom: 0px !important;
  }
  .heght-input::placeholder {
    font-size: 13px;
    letter-spacing: 0px;
  }
  .header {
    background: linear-gradient(to left, #9747ff, #000033, #9747ff);
    color: white;
    text-align: left;
    padding-left: 2rem;
    position: relative;
  }
  .header1 {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background: #ffd700;
    color: white;
    text-align: left;
    padding-left: 2rem;
    position: relative;
    height: auto;
    margin-top: -21px;
  }

  @media (max-width: 1015px) {
    .header1 {
      flex-direction: column;
    }
  }
  .container-div {
    padding: 2rem;
  }
  .header-content h1 {
    /* width: 686px; */
    position: relative;
    font-size: 47px;
    line-height: 55px;
    font-weight: 700;
    margin-top: 1.5rem;
  }

  @media (max-width: 565px) {
    .header-content h1 {
      width: 20rem;
    }
  }
  .header-content h1 span {
    color: #8fff00;
  }

  .back-btn {
    color: #fff;
    font-weight: 500;
    margin-top: -5rem;
  }
  .img-div img {
    padding-top: 1rem;
    margin-right: 5rem;
  }
  @media (max-width: 700px) {
    .img-div img {
      padding-top: 1rem;
      margin-right: 5rem;
      width: 18rem;
    }
  }
  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap;
  }
  .age-div {
    font-size: 14px;
    font-weight: 500;
  }
  .Calculate-btn {
    width: 30%;
    border: none;
    color: #fff;
    background: #9747ff;
  }
  .clear-btn {
    width: 30%;
    border: 1px solid #a09d9d;
  }
  .heading-cards {
    background: #d4f2ff;
  }

  .check-box {
    width: 1rem;
    background: #9747ff;
    border-color: #9747ff;
  }
  .checkbox-div {
    padding: 5px;
    display: flex;
    align-items: center;
  }
  .checkbox {
    position: relative;
    display: flex;
    margin-right: 20px;
  }
  .checkbox p {
    margin-top: 10px;
    margin-left: 1rem;
  }

  .checkmark-kick {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    transition: stroke-dashoffset 0.3s;
  }

  .CM-div {
    position: absolute;
    margin-top: -2rem;
    display: flex;
    margin-left: 30%;
  }
  .kg-div {
    position: absolute;
    margin-top: -2rem;
    display: flex;
    margin-left: 45%;
  }
  .ponds-div {
    position: absolute;
    margin-top: -2rem;
    display: flex;
    margin-left: 80%;
  }
  .table-div {
    width: 20rem;
  }
  .table-header th {
    background: #bf96f6;
    font-weight: 500;
    color: #fff;
  }
  .table-div tr {
    padding: 1rem;
  }
  .graph-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grp-header {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: #454545;
  }
  .left-grp h1 {
    width: 433px;
    font-size: 24px;
    font-weight: 600;
    color: #af64ff;
  }
  @media (max-width: 445px) {
    .left-grp h1 {
      width: 18rem;
    }
  }
  .left-grp h6 {
    margin-left: 2.5rem;
  }
  .graph-main-div {
    display: flex;
    justify-content: space-between;
  }
  .progress-bar {
    width: 35%;
    background: #1dd782;
  }
  .custom-btn {
    margin-top: 1rem;
    width: 30%;
    color: #fff;
    background: #9747ff;
  }
  .range-div {
    display: flex;
    justify-content: space-between;
  }

  .grp-heading-div h4 {
    margin-left: 5rem;
    font-size: 16px;
    font-weight: 500;
    color: #313131;
  }
  .BarChartContainer {
    width: 200px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
  }

  .Chart {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    width: 100%;
  }
  .LabelContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .Label {
    font-size: 14px;
    text-align: center;
  }
  .TimelineContainer {
    margin-left: 6rem;
    position: absolute;
    margin-bottom: -4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 28%;
  }
  .TimelineCircle {
    width: 20px;
    height: 20px;
    background-color: #00bfff;
    border: 2px solid #00bfff;
    border-radius: 50%;
  }
  .TimelineLabel {
    margin-top: 8px;
    font-size: 12px;
  }
  .custom-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>'); /* Down arrow icon */
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 38px;
  }
`;
