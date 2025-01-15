import styled from "styled-components";

export const WebsiteBuilderGuideStyled = styled.div`

  .website-builder-guide {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    /* padding: calc(40px + 2rem); */
    padding: 5rem 4.5rem 0rem 4.5rem;
    @media (max-width: 760px) {
      display: flex;
      flex-direction: column-reverse;
      padding: 40px;
    }
  }

  .steps {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #edeffc;
    border-radius: 25px;
    padding: 40px;

    h2 {
      width: 399px;
      font-size: 36px;
      font-family: Inter;
      color: #374151;
      font-weight: 700;
    }

    button {
      background: #252b61;
      font-family: Outfit;
      color: #fff;
      font-size: 18px;
      padding: 10px 40px;
      border: none;
      border-radius: 25px;
      width: fit-content;
    }
  }

  .step {
    padding: 0 1rem;
    border-radius: 8px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .active {
    opacity: 1;
  }

  .step-title {
    font-size: 21px;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-bottom: 0.5rem;
  }

  .step-description {
    font-size: 21px;
    font-weight: 300;
    font-family: Inter;
    color: #000;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
    max-width: 100%;
    height: 100%;
  }

  .vertical-line {
    display: inline-block;
    width: 2px; /* Thickness of the line */
    height: 5rem; /* Height of the line */
    background-color: black; /* Color of the line */
    margin-left: 0; /* Space between the text and the line */
  }

  .stepsWrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: -10px;
    
    .index {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      h5 {
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid #252b61;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #252b61;
        height: 30px;
        width: 30px;
        margin-bottom: 0;
      }
    }
  }
  .stepsWrapper:first-child {
    margin-top: 0px;
  }

  .stepsWrapper:last-child {
    margin-top: -5px;
  }
  .active h5 {
    background-color: #252b61 !important;
    color: #fff !important;
    
  }

  .active .inner-content {
    margin-left: 20px;
  }

  .website-builder-mobile {
    display: none;
  }

  @media (max-width: 391px) {
    .website-builder-guide {
      display: none;
    }

    .website-builder-mobile {
      display: block;
    }

    .website-builder-mobile {
      padding: 16px;
      background-color: #fff;
      font-family: Arial, sans-serif;
      color: #333;
    }

    .inner-content {
      padding: 0px 10px;
    }

    .content-container {
      max-width: 100%;
      margin: 0 auto;
      text-align: left;
      /* padding: 0px 15px; */
    }

    .content-container h1 {
      width: 242.7px;
      font-size: 18px;
      line-height: 27px;
      font-weight: 600;
      font-family: Inter;
      color: #252b61;
      margin-bottom: 8px;
    }

    .content-container p {
      font-family: Inter;
      color: #000;
      width: 310.2px;
      font-size: 15px;
      margin-bottom: 16px;
    }

    .content-container ol {
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: left;
    }

    .content-container ol li {
      margin-bottom: 12px;
      font-size: 14px;
      border-bottom: 1px solid black;
    }

    .content-container ol li strong {
      display: block;
      font-size: 16px;
      font-weight: 600;
      font-family: Inter;
      color: #000;
      /* Dark blue */
      margin-bottom: 4px;
    }

    .content-container ol li p {
      font-size: 14px;
      font-weight: 300;
      font-family: Inter;
      color: #000; /* Slightly darker gray */
      /* margin: 0; */
    }

    .start-now-button {
      display: inline-block;
      width: 100%;
      /* max-width: 200px; */
      padding: 10px 20px;
      font-size: 14px;
      color: #fff;
      background-color: #1a237e; /* Dark blue */
      border: none;
      border-radius: 40px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      margin-top: 16px;
    }

    .start-now-button:hover {
      background-color: #3949ab; /* Slightly lighter blue */
    }
  }

  @media (max-width: 490px) {
    .image-container{
      display: none;
    }
    
  }
`;
