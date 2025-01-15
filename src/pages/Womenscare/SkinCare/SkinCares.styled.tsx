import styled from "styled-components";

export const SkinCareStyled = styled.div`
  width: 100%;
  .ayurvedaWrapper {
    width: 100%;
  }

  .header {
    background: linear-gradient(to left, #9747ff, #000033, #9747ff);
    color: white;
    text-align: left;
    padding-left: 2rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-content h1 {
    font-size: 65px;
    line-height: 120.01%;
    font-weight: 700;
    color: #fff;
  }

  .header-content p span {
    color: #8fff00;
  }

  .header-content p {
    position: relative;
    font-size: 36px;
    letter-spacing: -0.01em;
    line-height: 115%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #f5f5f5;
    font-weight: 700;
    margin-top: 2rem;
  }
  @media (max-width: 700px) {
    .header-content h1 p {
      /* width: 100%; */
      font-size: 47px;
      line-height: 55px;
      font-weight: 700;
      margin-top: 4.5rem;
    }
    .header-content p {
      font-size: 18px;
    }
  }
  .explore-btn {
    /* width: 30%; */
    color: #000;
    background: #fff;
    border: 1px solid #fff;
    font-weight: 500;
    height: 4rem;
    border-radius: 2px;
    cursor: pointer;
  }
  .btn-Wrapper {
    margin-top: 3rem;
  }
  .custom-btn {
    color: #fff;
    position: relative;
    margin-top: -4rem;
    font-weight: 600;
  }
  .img-div img {
    width: 38rem;
    display: flex;
    height: 27rem;
  }
  .img-div {
    display: flex;
  }
  @media (max-width: 950px) {
    .img-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .scan-work-div {
    padding: 2rem;
  }
  .Benefits-work-div {
    padding: 2rem;
    background: #efefef;
  }
  .title-div h1 {
    width: 295px;
    font-size: 45px;
    line-height: 120%;
    font-weight: 700;
    color: #000;
  }
  .title-div p {
    width: 311px;
    font-size: 22px;
    line-height: 140%;
    font-weight: 500;
    color: #2d2d2d;
    margin-top: 2.5rem;
  }
  .slideshow {
    overflow: hidden;
    /* max-width: 700px; */
    width: 55%;
    /* margin-left: -6rem; */
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: transform 1000ms ease;
  }
  .slide {
    display: inline-block;
    width: 100%;
    border-radius: 40px;
  }
  .slide {
    img {
      height: 90%;
      width: 90%;
    }
  }
  .titles-div p {
    width: 100%;
    font-size: 16px;
    line-height: 160%;
    color: #a479fd;
    text-align: center;
    display: inline-block;
  }
  .titles-div h1 {
    width: 100%;
    font-size: 22px;
    line-height: 140%;
    color: #40513b;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .titles-div h6 {
    width: 100%;
    font-size: 14px;
    line-height: 160%;
    color: #6c8f70;
    text-align: center;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .slider-div {
    display: flex;
    align-items: center;
  }
  @media (max-width: 760px) {
    .slider-div {
      margin-bottom: 4rem;
      flex-direction: column;
    }
  }
  .scan-buts-div {
    display: flex;
  }
  @media (max-width: 760px) {
    .scan-buts-div {
      flex-direction: column;
    }
  }
  .titles-div {
    margin-top: -2rem;
  }
  .scan-btn {
    width: 30%;
    position: relative;
    border-radius: 3px;
    background-color: #9747ff;
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    gap: 10px;
    text-align: left;
    font-size: 18px;
    color: #fff;
    margin-top: 2.5rem;
  }

  .scan-phone {
    justify-content: center;
    align-items: center;
    margin-left: 17rem;
    margin-top: -9rem;
  }
  @media (max-width: 950px) {
    .scan-phone {
      margin-left: -10px;
      margin-top: 4rem;
    }
    .scan-btn {
      width: 100%;
    }
  }

  .card {
    position: relative;
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 12rem;
    height: 22rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    border-radius: 1rem;
  }

  .line {
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #6be85d;
    animation: moveLine 2s linear infinite;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  @keyframes moveLine {
    0% {
      top: -2px;
    }
    50% {
      top: 100%;
    }
    100% {
      top: -2px;
    }
  }
  .img-divs img {
    width: 12rem;
    height: 22rem;
  }
  .custom-card {
    align-items: center;
    height: 12rem;
    width: 20rem;
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px; */
  }
  .card-img-top {
    height: 5rem;
    width: 5rem;
  }
  .custom-card-title {
    margin-top: 1rem;
    font-size: 16px;
    line-height: 120%;
    font-weight: 600;
    color: #343434;
  }
  .custom-card-text {
    width: 150px;
    font-size: 12px;
    line-height: 120%;
    color: #a69797;
    display: inline-block;
  }
  .heading-text {
    width: 100%;
    position: relative;
    font-size: 45px;
    letter-spacing: -0.02em;
    line-height: 120%;
    font-weight: 700;
    color: #2b2b2b;
    text-align: center;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .heading-sub-text {
    font-size: 22px;
    line-height: 120%;
    font-weight: 500;
    color: #828282;
  }

  .scanned-img-result-div img {
    width: 17rem;
    height: 20rem;
    border-radius: 5px;
  }
  .scan-result-div {
    font-size: 18px;
    line-height: 120%;
    font-weight: 600;
    color: #575555;
  }
  .scan-result-div {
    display: flex;
  }
  .scan-content-div h5 {
    font-size: 18px;
    line-height: 120%;
    font-weight: 600;
    color: #575555;
  }
  .scan-btn-div {
    display: flex;
    gap: 1rem;
  }
  .scan-content-div {
    h4 {
      margin-top: 3rem;
      font-size: 18px;
      line-height: 120%;
      font-weight: 600;
      color: #575555;
    }
    li {
      font-size: 14px;
      color: #969292;
    }
    p {
      font-size: 14px;
      color: #969292;
      height: 48px;
    }
  }

  .scan-contact-btn-div button {
    border-radius: 3px;
    background-color: #9747ff;
    padding: 10px;
    box-sizing: border-box;
    font-size: 18px;
    color: #fff;
  }
  .scan-contact-btn-div {
    display: flex;
    justify-content: end;
    align-items: end;
  }
  @media (max-width: 820px) {
    .scan-result-div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .scan-btn-div {
      flex-direction: column;
    }
    .scan-content-div {
      margin-top: 2rem;
    }
  }
  .ScanSuggestionCardDiv {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin: 0.5rem;
    flex: 0 1 30%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      flex: 1 1 100%;
      margin: 0.5rem 0;
    }

    h5 {
      font-size: 1.2rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
  .ScanSuggestionMainCardDiv {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 768px) {
      margin-top: 3rem;
      flex-direction: column;
      padding: 0.5rem;
    }
  }
`;
