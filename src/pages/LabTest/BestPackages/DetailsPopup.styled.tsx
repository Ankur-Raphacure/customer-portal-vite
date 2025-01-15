// DetailsPopup.styled.js
import styled from "styled-components";

export const DetailsPopupStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  border-radius: 15px;
  // font-family: Poppins;

  .wrapper {
    width: 100%;
    height: 100%;
    padding-right: 38px;
  }
  .wrapper > div {
    width: 100%;
    height: 100%;
  }
  .mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: scroll;
    height: 90vh;
  }
  .logoDiv {
    width: fit-content;
    height: fit-content;
  }
  div.logoDiv > img {
    border-radius: 10px;
    max-width: 230px;
    object-fit: scale-down;
  }
  .info {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    gap: 2rem;
    align-items: center;
  }
  .listWrapper {
    width: 100%;
    height: fit-content;
    display: grid;
    font-size: 0.9rem;
  }
  .btnWrapper {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;
    padding-right: 20px;
  }
  .btnWrapper > div {
    width: fit-content;
    height: fit-content;
  }
  .details {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
  .details h1 {
    font-size: 1.2rem;
    margin: 0.5rem;
  }
  .package-container {
  }

  .package-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .package-description {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }

  .package-price {
    font-size: 18px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .price-amount {
    font-weight: bold;
    color: #000;
  }

  .sample-required {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 1rem;
  }

  .sample-type {
    font-weight: bold;
    margin-left: 5px;
  }

  .text-sample {
    display: flex;
    align-items: center;
    color: green;
  }

  .preparation {
    margin-top: 20px;
  }

  .preparation h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .preparation ul {
  }

  .preparation ul li {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999999;
`;

export const CloseButton = styled.button`
  background: red;
  border: none;
  border-radius: 25%;
  color: white;
  font-size: 1.2rem;
  padding: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;
