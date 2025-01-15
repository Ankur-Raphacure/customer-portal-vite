import styled from "styled-components";

export const RPFooterV2style = styled.div`
  .footer-container {
    background-color: #2c306f;
    color: white;
    padding: 10px 20px;
    font-family: Arial, sans-serif;
  }

  .footer-top {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    gap: 220px;
    margin-bottom: 20px;
  }

  .footer-logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 57px;
  }

  .footer-logo {
    height: 70px;
    margin-bottom: 15px;
    width: 257px;
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-icon {
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.3s;
  }

  .social-icon:hover {
    color: #007bff;
  }

  .footer-links-section {
    display: flex;
    gap: 150px;
    margin-top: 50px;
  }

  .footer-column h3 {
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 28px;
    font-weight: 800;
    font-family: Inter;
    color: #fff;
    text-align: left;
  }

  .footer-column a {
    display: block;

    text-decoration: none;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #fff;
    text-align: left;
    opacity: 0.8;
  }

  .footer-column a:hover {
    text-decoration: underline;
  }

  .footer-contact-section {
    max-width: 300px;
    font-size: 14px;
    padding: 20px 0px;
    margin-top: 50px;
  }

  .footer-contact-section .consec p {
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #fff;
    text-align: left;
    opacity: 0.8;
  }

  .icon {
    margin-right: 10px;
    color: #fff;
  }

  .consec {
    display: flex;
    align-items: flex-start;
    /* margin-bottom: 15px; */
    gap: 17px;
  }

  .footer-bottom {
    border-top: 1px solid white;
    padding-top: 15px;
    display: flex;
    margin-left: 45px;
    margin-right: 45px;
    justify-content: space-between;
    font-size: 12px;
    color: #cccccc;

  }

  .footer-bottom p {
    margin: 0;
  }

  .footer-bottom strong {
    color: white;
  }
  .mobileFooter {
    display: none;
  }
  .footer-bottom-mobile{
    display: none;
  }
  @media (max-width: 391px) {
    .footer-top {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    .footer-logo-section {
      margin: 0 auto;
      text-align: center;
    }

    .footer-links-section {
      flex-direction: column;
      gap: 20px;
    }

    .footer-column {
      width: 100%;
    }

    .footer-column h3 {
      font-size: 14px;
    }

    .footer-column a {
      font-size: 14px;
    }

    .footer-contact-section {
      margin: 0 auto;
      text-align: left;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
      gap: 10px;
    }


    @media screen and (max-width: 391px) {
      .footer-container {
        display: none;
      }
      .mobileFooter {
        display: block;
      }
    }
  }

  /* For mobile view's footer design */

  .mobileFooter {
    font-family: Arial, sans-serif;
    padding: 16px;
    background-color: white;
    color: #333;
    text-align: center;
    max-width: 490px;
    margin: 0 auto;
  }

  .footerDescription {
    font-size: 14px;
    margin: 12px 0;
    line-height: 1.5;
  }

  .footerMenu {
    margin: 20px 0;
  }

  .menuSection {
    margin-bottom: 10px;
    text-align: left;
  }

  .menuHeader {
    font-weight: bold;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 8px 12px;
    background-color: #fff;
    /* border-bottom: 1px solid black; */
  }
  .menuSection {
    border-bottom: 1px solid #ccc;
  }

  .menuSection:last-child {
    border-bottom: none;
  }
  

  .arrow {
    font-size: 17px;
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .menuContent {
    margin-top: 8px;
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  .menuContent ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menuContent li {
    font-size: 14px;
    margin: 5px 0;
  }

  .socialLinks {
    margin: 20px 0;
  }

  .socialLinks a {
    margin: 0 10px;
    font-size: 18px;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .socialLinks a:hover {
    color: #007bff;
  }

  .footerLinks {
    margin: 10px 0;
    font-size: 14px;
  }

  .footerLinks a {
    margin: 0 10px;
    color: #000;
    text-decoration: none;
  }

  .footerLinks a:hover {
    text-decoration: underline;
  }


  @media (max-width: 391px) {

    .footer-bottom-mobile{
    display: block;
    width: 100%;
  }

  .mobileFooter{
    width: 100%;
  }
    .menuHeader {
      width: 100%;
      font-weight: 500;
      position: relative;
      font-size: 14px;
      font-family: Inter;
      color: #000;
      text-align: left;
      padding: 6px 10px;
    }

    .footerLogo {
      margin-left: 0;
      text-align: left;
    }

    .footerLogo img {
      position: relative;
      height: 36.2px;
    }

    .menuContent {
      font-size: 13px;
      padding: 8px 12px;
    }

    .socialLinks a {
      font-size: 16px;
    }

    .footerDescription {
      width: 323.6px;
      position: relative;
      font-size: 15px;
      line-height: 25px;
      font-family: Inter;
      color: #011632;
      text-align: left;
    }

    .footer-bottom-mobile {
      border-top:1px solid black;
      padding-top: 0px;
      gap: 0px;
      padding-bottom: 20px;
      padding-left: 20px;
    }

    .footerLinks {
      font-size: 14px;
      text-decoration: underline;

      font-family: Inter;
      color: #000;
      text-align: left;

      opacity: 0.8;
    }

    .socialLinks {
      text-align: left;
      gap: 27px;
      width: 100%;
      position: relative;
      height: 15.5px;
    }

    .footerCopyright {
      
      font-size: 16px;
      letter-spacing: 0.01em;
      font-family: Inter;
      color: rgba(0, 0, 0, 0.36);
      text-align: left;
    }
  }
`;
