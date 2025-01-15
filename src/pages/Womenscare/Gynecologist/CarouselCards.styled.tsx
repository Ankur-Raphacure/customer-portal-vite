import styled from "styled-components";

export const CuroselCardsStyled = styled.div`
  body {
    font-family: "Roboto";
    color: #fff;
    background-color: #444;
    margin: 0;
    padding: 0;
  }

  .cascade-slider_container {
    position: relative;
    width: 100%;
    height: 17rem;
    margin: 25px auto;
    overflow-x: hidden;
  }
  .cascade-slider_item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(0.3);
    transition: all 1s ease;
    opacity: 0;
    z-index: -1;
    text-align: center;
  }
  .cascade-slider_item.next {
    left: 50%;
    transform: translateY(-50%) translateX(-135%) scale(0.8);
    filter: brightness(85%);
    opacity: 1;
    z-index: 1;
  }
  .cascade-slider_item.prev {
    left: 50%;
    transform: translateY(-50%) translateX(35%) scale(0.8);
    filter: brightness(85%);
    opacity: 1;
    z-index: 1;
  }
  .cascade-slider_item.now {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    z-index: 5;
  }
  .cascade-slider_arrow {
    display: inline-block;
    position: absolute;
    cursor: pointer;
    z-index: 5;
    background: #bab7b7;
    border-radius: 100%;
    height: 29px;
    width: 29px;
  }
  .lft-arrow {
    margin-left: 5px;
  }
  .rft-arrow {
    margin-left: 7px;
  }
  .cascade-slider_arrow-left {
    left: 45%;
  }
  .cascade-slider_arrow-right {
    right: 45%;
  }
  .cascade-slider_arrow-left img {
    height: 40px;
    left: 40px;
  }
  .cascade-slider_arrow-right img {
    height: 40px;
    left: 40px;
  }
  .cascade-slider_dot {
    display: inline-block;
    width: 17px;
    height: 17px;
    border: 1px solid #4196ef;
    margin: 3px;
    transition: all 0.5s;
    background: none;
    list-style: none;
    cursor: pointer;
    border-radius: 50px;
  }
  .cascade-slider_dot:hover {
    background: #2c8fab;
  }
  .cascade-slider_dot.cur {
    background: #2c8fab;
    width: 17px;
    height: 17px;
  }

  /*Profile card classes*/
  .card {
    background-color: #fff;
    color: #243c82;
    width: 300px;
    height: 250px;
    border-radius: 20px;
    transition: all 1s 0s;
    vertical-align: middle;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
  .subtitle {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 98%;
    text-align: center;
    letter-spacing: 0.055em;
    color: #243c82;
  }
  .content {
    font-family: Roboto;
    font-weight: 300;
  }
  .button {
    transform: translateX(23px) translateY(15px);
    position: absolute;
    padding: 12px 17px;
    border-radius: 30px;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #243c82;
  }

  @media (min-width: 460px) and (max-width: 680px) {
    .cascade-slider_item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.3);
      transition: all 1s ease;
      opacity: 0;
      z-index: -1;
      text-align: center;
    }
    .cascade-slider_item.next {
      left: 50%;
      transform: translateY(-50%) translateX(-90%) scale(0.4);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.prev {
      left: 50%;
      transform: translateY(-50%) translateX(-10%) scale(0.4);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.now {
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.6);
      opacity: 1;
      z-index: 5;
    }
    .cascade-slider_arrow-left img {
      height: 30px;
      left: 30px;
    }
    .cascade-slider_arrow-right img {
      height: 30px;
      left: 30px;
    }
  }
  @media (max-width: 460px) {
    .cascade-slider_item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.3);
      transition: all 1s ease;
      opacity: 0;
      z-index: -1;
      text-align: center;
    }
    .cascade-slider_item.next {
      left: 50%;
      transform: translateY(-50%) translateX(-80%) scale(0.3);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.prev {
      left: 50%;
      transform: translateY(-50%) translateX(-20%) scale(0.3);
      filter: brightness(70%);
      opacity: 1;
      z-index: 1;
    }
    .cascade-slider_item.now {
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%) scale(0.5);
      opacity: 1;
      z-index: 5;
    }
    .cascade-slider_arrow-left img {
      height: 30px;
      left: 30px;
    }
    .cascade-slider_arrow-right img {
      height: 30px;
      left: 30px;
    }
  }
  .image-div {
    width: 100px;
    height: 100px;
    background-color: #989c9b;
  }
  .CTcard-Subtitle {
    font-size: 12px;
    color: #00a355;
  }
  .CTcard-title {
    margin: 0 !important;
    top: 135px;
    left: 42px;
    font-size: 16px;
    line-height: 25px;
    color: #313030;
    text-align: center;
  }
  .custom-btn {
    width: 100%;
    position: relative;
    background-color: #9747ff;
    height: 36px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    color: #fff;
  }
  .carosel-header {
    width: 349px;
    position: relative;
    font-size: 24px;
    line-height: 50px;
    font-weight: 600;
    color: #343434;
    text-align: left;
    display: inline-block;
    margin-left: 37%;
  }
  @media (max-width: 516px) {
    .carosel-header {
      width: 300px;
      position: relative;
      font-size: 24px;
      line-height: 50px;
      font-weight: 600;
      color: #343434;
      text-align: left;
      display: inline-block;
      margin-left: 37%;
    }
  }
  .card-align-div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 80%;
    }
  }
`;
