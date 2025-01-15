import styled from "styled-components";

export const RPSoftwareSolStyled = styled.div`
  padding: 3rem;
  .sscontainer {
    display: grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 760px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .content {
  }

  .content h1 {
    font-size: 3em;
    font-weight: bold;
    color: #001e3a;
    margin: 0;
  }

  .content p {
    font-size: 1.2em;
    color: #666;
    margin-top: 10px;
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }

  .buttons .learn-more,
  .buttons .get-connected {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
  }

  .buttons .learn-more {
    background-color: transparent;
    color: #072c50;
    border: 2px solid #27b3a4;
    margin-right: 10px;
  }

  .buttons .get-connected {
    background: linear-gradient(to right, #27b3a4, #031d37);
    color: white;
  }

  .image-container {
    position: relative;
    @media (max-width: 760px) {
      max-width: 100% !important;
    }
  }

  .image-container img {
    width: 100%;
  }

  .elevating-container {
  }

  .services {
    font-size: 1em;
    color: #00a69c; /* Adjust this color to match the teal in the image */
    margin: 0;
    font-weight: bold;
  }

  .elevating-container h1 {
    font-size: 2.5em;
    color: #072c50;
    margin-top: 10px;
    font-weight: bold;
  }

  .hospital-management-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    @media (max-width: 760px) {
      flex-direction: column-reverse !important;
      justify-content: center;
      align-items: center;
      gap: 1rem !important;
    }
  }

  .text-container {
    max-width: 60%;
    @media (max-width: 760px) {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }

  .text-container h2 {
    font-size: 2em;
    color: #072c50;
    margin: 0;
  }

  .text-container .description {
    font-size: 1em;
    color: #666;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .text-container .view-button {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    cursor: pointer;
    background: linear-gradient(to right, #27b3a4, #001e3a);
    color: white;
    border-radius: 5px;
  }

  .hospital-management-container .image-container {
    max-width: 35%;
    padding-left: 20px;
  }

  .image-container img {
    width: 100%;
    border-radius: 10px;
  }

  .leftOriented {
    border-left: 0.5rem solid #27b3a4;
    display: flex;
    gap: 20%;
    flex-direction: row;
  }

  .rightOriented {
    border-right: 0.5rem solid #27b3a4;
    display: flex;
    gap: 20%;
    flex-direction: row-reverse;
  }

  /* h2{
    position: relative;
  
    .text-underline-effect::after {
    content: "";
    position: absolute;
    width: 100%;
    border-top: 3px solid #27b3a4;
    left: 0;
    bottom: -12px;
    border-radius: 50%;
    height: 15px;
  } */

  .trustedBy img {
    width: 100%;
  }
`;

export const ApproachStyled = styled.div`
  .approach-container {
    text-align: center;
    padding: 50px 20px;
    background-color: #f8f9fa; /* Adjust the background color as needed */
  }

  .line {
    width: 50px;
    height: 5px;
    background: linear-gradient(to right, #030303, #27b3a4);
    margin: 0 auto 20px auto;
  }

  .approach-container h2 {
    font-size: 2em;
    color: #072c50;
    margin: 0;
    font-weight: normal;
  }

  .approach-container h2 span {
    font-weight: bold;
  }

  .cardContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    flex-direction: row;
    gap: 2rem;
    @media (max-width: 760px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const RequirementCardStyled = styled.div`
  .requirement-card {
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
    transition: border-color 0.3s;
    cursor: pointer;
    height: 100%;
    @media (max-width: 760px) {
      padding: 1.8rem 0.8rem;
    }
  }

  .requirement-card:hover {
    border-color: #001e3a; /* Add a border color change on hover if desired */
  }

  .icon-container {
    flex: 0 0 auto;
    margin-right: 20px;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .content {
    flex: 1 1 auto;
  }

  .content h3 {
    font-size: 1.5em;
    color: #072c50;
    margin: 0;
  }

  .content p {
    font-size: 1em;
    color: #666;
    margin-top: 10px;
  }

  .number-container {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .number {
    font-size: 2em;
    color: #00a69c;
    border: 2px solid #00a69c;
    border-radius: 50%;
    padding: 10px;
    background-color: #fff;
    transition: background-color 0.3s, color 0.3s;
  }
`;
