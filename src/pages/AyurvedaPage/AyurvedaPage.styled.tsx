import styled from "styled-components";

export const AyurvedaStyled = styled.div`
  width: 100%;
  // font-family: Poppins;

  .header {
    background: linear-gradient(249deg, #0a7c2a 15%, #2ac956 34%, #055a22 80%);
    color: white;
    text-align: left;
    padding: 50px 0;
    padding-left: 2rem;
    position: relative;
    margin-bottom: 3rem;
  }

  .header-content h1 {
    width: 33%;
    margin: 0;
    font-size: 2rem;
  }

  .header-content h1 span {
    color: yellow;
  }

  .header-content p {
    width: 25%;
    margin: 10px 0;
  }

  .explore-btn {
    background-color: #9747ff;
    color: #4caf50;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    color: #fff;
    border-radius: 14px;
  }

  .ayurvedaWrapper .btnWrapper {
    padding: 10px;
    position: absolute;
    top: 90%;
    border-radius: 20px;
    background-color: #fff;
  }
`;
