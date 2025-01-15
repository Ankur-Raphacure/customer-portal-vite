import styled from "styled-components";

export const ContinueBookingStyled = styled.div`
  .input-field {
    font-size: 0.7rem;
  }
  .cardContainer p {
    /* font-size: 0.5rem; */
  }
  img.videoDemo {
    width: 400px;
  }
  .error_message {
    color: red;
  }
  @media screen and (max-width: 700px) {
    .cardContainer > img {
      width: 100%;
    }
    .service-item {
      flex-direction: column;
    }
    .service-details {
      text-align: center;
    }
    .cardContainer {
      padding: 0;
      box-shadow: none;
      width: inherit;
    }
    .mainContent-right {
      width: 100% !important;
    }
    .mainContent-left {
      width: 100% !important;
    }
    .tab {
      width: auto !important;
    }
  }
  .mainContent {
    display: block;
    display: flex;
  }
  .mainContent-left {
    /* width: 60%; */
  }
  .mainContent-right {
    width: min-content;
  }
  select {
    /* font-size: 0.7rem; */
    background-color: white;
    /* inline SVG */
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20448%22%20enable-background%3D%22new%200%200%20256%20448%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.arrow%7Bfill%3A%23424242%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22arrow%22%20d%3D%22M255.9%20168c0-4.2-1.6-7.9-4.8-11.2-3.2-3.2-6.9-4.8-11.2-4.8H16c-4.2%200-7.9%201.6-11.2%204.8S0%20163.8%200%20168c0%204.4%201.6%208.2%204.8%2011.4l112%20112c3.1%203.1%206.8%204.6%2011.2%204.6%204.4%200%208.2-1.5%2011.4-4.6l112-112c3-3.2%204.5-7%204.5-11.4z%22%2F%3E%3C%2Fsvg%3E%0A");
    background-position: right 10px center;
    background-repeat: no-repeat;
    background-size: auto 50%;
    border-radius: 2px;
    border: none;
    color: black;
    padding: 10px 30px 10px 10px;
    // disable default appearance
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  }
  .selectGroup {
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    justify-content: space-evenly;
  }
  .card {
    border: none;
    width: 100%;
    max-width: 80%;
  }
  .selectWrapper {
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-evenly;
  }
  .service-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .service-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .service-icon {
    flex-shrink: 0;
  }

  .service-details {
    flex-grow: 1;
    margin-left: 10px;
  }

  .service-name {
    font-size: 16px;
    font-weight: bold;
  }

  .service-vehicles {
    font-size: 14px;
    color: gray;
  }

  .service-price {
    font-size: 16px;
    font-weight: bold;
  }

  .service-arrow {
    font-size: 16px;
    color: gray;
  }

  .tabs {
    display: flex;
    height: fit-content;
    overflow-x: auto;
    /* white-space: nowrap; */
    border-bottom: 2px solid #ccc;
    border-radius: 10px;
    margin-top: 1rem;
  }
  .date-selctor-sec {
    margin-top: 10px;
    margin-bottom: 20px;
    label {
      margin-right: 20px;
    }
  }
  .primary-button {
    margin-left: 20px;
  }
  .input-group-key-map {
    input {
      height: 40px;
      width: 90%;
      padding-left: 10px;
      border: none;
    }
  }
  .tab {
    padding: 10px;
    height: fit-content;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 16px;
    transition: background 0.3s;
    width: 25%;
  }

  .tab.selected {
    background-color: red;
    color: white;
  }

  .content {
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 10px;
  }
  .booking-form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group input[type="text"],
  .form-group input[type="number"] {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form-group label {
    margin-right: 10px;
  }

  .form-group input[type="radio"] {
    margin-right: 5px;
  }

  .upload-btn {
    display: inline-block;
    padding: 10px 20px;
    border: 2px solid #9747ff;
    color: #9747ff;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
    width: 100%;
    text-align: center;
  }

  .upload-btn input {
    display: none;
  }

  .upload-btn:hover {
    background: #7e57c2;
    color: #fff;
  }

  .submit-btn {
    width: 100%;
    padding: 15px;
    background: #9747ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .submit-btn:hover {
    background: #673ab7;
  }

  .ageWrapper {
    display: flex;
    width: 100%;
    max-width: 100%;
  }
  .genderGroup {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: max-content;
    padding: 10px;
  }
  .form-group input[type="text"] {
    width: 100%;
  }
  .form-group input[type="number"] {
    font-size: 1rem;
  }
  .slideshow {
    margin: 0 auto;
    overflow: hidden;
    max-width: 500px;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: transform 1000ms ease;
  }
  .slide {
    display: inline-block;
    height: 250px;
    width: 100%;
    border-radius: 40px;
  }
  .slide {
    img {
      height: 250px;
      width: 100%;
    }
  }
`;
