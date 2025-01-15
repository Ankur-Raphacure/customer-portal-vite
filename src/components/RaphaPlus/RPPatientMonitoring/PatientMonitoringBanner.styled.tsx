import styled from "styled-components";

export const PatientMoitoringBannerStyled = styled.div`
  .hero-image img {
    max-width: 100vw;
  }

  .imgWrapperDiv {
    img {
      max-width: 100vw;
      width: 100%;
    }
  }

  .Container {
    display: flex;
    justify-content: center;
  }
  .Contents {
    position: relative;
    z-index: 2;
    text-align: left;
    color: #000;
    margin-right: 8.5rem;
    margin-top: 8rem;
  }
  .BackgroundImage {
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .Title {
    letter-spacing: 0px;
    width: 43%;
    position: relative;
    font-size: 40px;
    display: inline-block;
    color: #001e3a;
    text-align: left;
    font-weight: 600;
    line-height: 3rem;
  }
  .Subtitle {
    width: 437px;
    position: relative;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #001e3a;
    text-align: left;
  }
  .ButtonDiv {
    margin-top: 1.5rem;
  }
  .plus-icon {
    vertical-align: super;
  }
  .Button {
    width: 45%;
    background: linear-gradient(90.61deg, #1e908b 41.29%, #001e3a 73.23%);
    overflow: hidden;
    border: none;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
  }
  .img_div {
    width: 100%;
  }
  .lineDiv {
    margin-left: 6rem;
    line-height: 0px;
  }
  .lineDiv {
    img {
      line-height: 0px;
      width: 9rem;
      margin-top: -1rem;
    }
  }

  @media (max-width: 700px) {
    .Contents {
      position: relative;
      z-index: 1;
      text-align: none;
      color: #000;
      margin-right: 0rem;
      margin-top: rem;
    }
  }
`;
