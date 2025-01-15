import styled from "styled-components";

export const FooterStyled = styled.div`
  .top-header-sec-cont {
    height: 100px;

    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    justify-content: center;
    padding-top: 40px;
    ul {
      display: flex;
      gap: 34px;
      justify-content: center;
    }
    li {
      color: #000;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      a {
        color: #fff;
      }
    }
    li.active {
      color: #9747ff;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .header-text-center1 {
    display: flex;
    gap: 16px;
  }
  .margin-top-button-sec {
    padding-top: 13px;
  }
  .header-text-center1 button,
  .rapha-header-sec-right button {
    margin-top: 14px;
  }
  .rapha-header-sec {
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
  }
  .welcome-text-rapha {
    background: #f4f2f5;
    padding: 30px 50px;
    display: flex;
    gap: 10px;
  }
  .rapha-header-sec {
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 13px 50px;
  }
  .rapha-header-sec input {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    height: 50px;
    width: 450px;
  }
  .rapha-header-sec-left {
    height: 60px;
    width: 120px;
  }
  .welcome-text-rapha-left {
    width: 60%;
  }
  .welcome-text-rapha-left h3 {
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 16px;
    opacity: 0.8;
    span {
      color: #9747ff;
      font-weight: bold;
    }
  }

  .rapha-header-sec-right {
    button {
      border-radius: 10px;
      background: #9747ff;
      height: 42px;
      width: 92px;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .footer-section-nme {
    background: #252b61;
    padding: 20px 50px;
  }
  .footer-section-content {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    ul {
      padding-left: 0px;
    }
    h5 {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.08em;
      margin-bottom: 16px;
    }
    li,
    a {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0.03em;
      opacity: 0.8;
      list-style-type: none;
      text-decoration: underline;
    }
  }
  .about-us-section-left {
    width: 55%;
  }
  .rapha-header-sec-left img {
  }
  .vector-4 {
    position: absolute;
    width: 15px;
    margin-left: -60px;
    height: 15px;
    margin-top: -12px;
    background: url(/assets/images/search.png) no-repeat center;
    background-size: 100% 100%;
    opacity: 0.5;
  }
  .vector-5 {
    position: absolute;
    width: 15px;
    margin-left: -30px;
    height: 15px;
    margin-top: -12px;
    background: url(/assets/images/mic.png) no-repeat center;
    background-size: 100% 100%;
    opacity: 0.5;
  }

  .toggle-btn {
    display: none;
  }
  @media (max-width: 1000px) {
    .footer-section-content {
      grid-template-columns: 1fr 1fr;
      display: grid;
    }
  }
  @media (max-width: 700px) {
    .top-header-sec-cont {
      padding-top: 20px;
      ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        padding: 0px 20px;
      }
      li {
        font-size: 14px;
      }
    }
    .footer-section-content {
      display: none;
    }

    .footer-section-content.open {
      display: block;
    }

    .footer-row.logo-row {
      display: flex;
      justify-content: space-between;
    }

    .toggle-btn {
      display: block;
      background-color: unset;
      color: white;
      border: none;
      font-size: 26px;
    }

    .header-text-center1 {
      display: none;
    }
    .rapha-header-sec {
      justify-content: space-between;
      padding: 10px;
      /* display: block; */
    }
    .rapha-header-sec-left {
      /* margin: auto; */
    }
    .welcome-text-rapha,
    .our-services-sec,
    .our-services-sec1,
    .empanel-sec,
    .about-us-section,
    .footer-section-nme {
      padding: 30px 20px;
      display: block;
    }
    .welcome-text-rapha-left,
    .about-us-section-left {
      width: 100%;
    }
    .book-app-doctor-actions {
      text-align: center;
    }
    .book-app-doctor {
      margin-top: 30px;
      margin-left: 0px;
    }
    .empanel-sec-top,
    .empanel-sec-bottom,
    .about-us-section-content {
      display: block;
    }
    .empanel-sec-bottom {
      padding: 20px;
    }
    .empanel-sec-bottom {
      height: auto;
    }
    .empanel-sec-img {
      display: none;
    }
    .empanel-sec-text {
      padding-top: 2px;
    }
    .empanel-sec-top-right {
      margin-top: 20px;
    }
    .our-services-all,
    .our-services-all1,
    .footer-section-content {
      grid-template-columns: 1fr 1fr;
      display: grid;
    }
    .footer-section-content {
      grid-template-columns: 1fr;
      display: grid;
    }
    .footer-section-content {
      gap: 20px;
    }
    .footer-row {
      /* margin-top: 40px; */
      h5 {
        margin-top: 10px;
      }
    }
    .empanel-sec-top > div {
      width: 100%;
    }
    .bottom-footer {
      p {
        width: 90%;
        margin: auto;
        line-height: 20px;
      }
    }
  }
  .bottom-footer {
    background: #d9d9d9;
    text-align: center;
  }
  .bottom-footer p {
    color: #000;
    text-align: center;
    /* font-family: Poppins; */
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 12px 0;
  }
  .patent {
    padding: 36px 0;
  }
  .patentbtn {
    background: #c3ffeb;
    color: #000;
    /* font-family: Poppins; */
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 16px 60px;
  }
  .footer-section-content a {
    text-decoration: none;
  }

  .showToggleOnMobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block !important;
    }
  }
  .hideFooterSection {
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }
`;
