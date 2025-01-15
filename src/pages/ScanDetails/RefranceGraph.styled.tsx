import styled from "styled-components";

export const RefranceGraphStyled = styled.div`
  /* CustomTooltip.css */
  .custom-tooltip {
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 15rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .tooltip-content {
    display: flex;
    flex-direction: column;
  }

  .center-name {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }

  .scan-type,
  .appointment-time,
  .offer-price {
    margin: 0;
    font-size: 0.9rem;
  }

  .prebook-button {
    background-color: #a35de8;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    height: fit-content;
    align-self: flex-end;
  }

  .prebook-button:hover {
    background-color: #8c4bcc;
  }

  /* Add the triangle on the top left corner */
  .custom-tooltip::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #a35de8;
  }
`;
