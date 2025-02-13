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
    .marginbottom {
      margin-bottom: 4rem;
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
    .about-us-section {
      padding: 30px 20px;
      display: block;
    }
    .footer-section-nme {
      padding: 30px 10px;
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
      grid-template-columns: 1fr 1fr;
      display: grid;
    }
    .footer-section-content {
      gap: 10px;
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
      display: none;
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

  /* Bootom Nav Bar */

  .bottom-nav-main-div,
  .BottomNavBar-mobile-view {
    display: none;
  }
  @media (max-width: 768px) {
    .BottomNavBar-mobile-view {
      display: block;
    }
    .bottom-nav-main-div {
      z-index: 1;
      position: fixed;
      bottom: 0;
      width: 100%;
      box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.19);
      border-radius: 18px 18px 0px 0px;
      background-color: #fff;
      border: 0.5px solid rgba(222, 219, 219, 0.5);
      box-sizing: border-box;
      height: 82px;
      display: flex;
    }
    .bottom-nav-div {
      padding: 15px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .bottom-nav-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      p {
        color: #6b6b6b;
        font-family: Outfit, sans-serif;
        font-size: 11px;
        font-weight: 500;
        margin-bottom: 0px;
      }
    }

    .modal.fade .modal-dialog {
      transform: translateY(100%);
      transition: transform 0.3s ease-out;
    }

    .modal.show .modal-dialog {
      transform: translateY(0);
    }

    .custom-modal {
      margin: 0px !important;
      width: 100% !important;
    }
    .bottomSheetFrame {
      width: 100vw;
      height: 100vh;
      /* background-color: #00000057; */

      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 1s ease-in-out;
    }
    .bottomsheetOpen {
      transform: translateY(-10%);
    }
    .bottomsheetClose {
      transform: translateY(100%);
    }
    .maped-div-data {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
    }
    .bottomSheetFrame {
      /* position: relative;  */
    }

    .bottomSheetOverlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
      z-index: 1; /* Ensure it stays behind bottomSheetContent */
    }

    .bottomSheetContent {
      position: relative;
      z-index: 2; /* Keep above the overlay */
      background: white; /* Ensure content remains visible */
    }

    .bottomSheetContent {
      /* max-height: 55vh;
      overflow: scroll; */
      width: 100%;
      background-color: white;
      margin-top: 100%;
      border-radius: 16px 16px 0 0;
      /* transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1); */
      .homeStyled {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
        padding: 0.5rem;
        max-height: 52vh;
        overflow: scroll;
      }
      .categories-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        border-radius: 20px 20px 0 0;
      }
      p {
        color: #000;
        font-family: Outfit, sans-serif;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 0px;
        line-height: 32px;
      }
    }

    .subdomain {
      margin-top: 33rem;
    }

    .login-btn-div {
      display: flex;
      padding: 1rem;
      justify-content: end;
    }
    .banner-profile-img {
      margin-top: -2rem;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 12rem;
      padding: 5px;
      background: #dad8d8;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 3rem;
        width: 3rem;
        border-radius: 12rem;
      }
    }
  }
`;
