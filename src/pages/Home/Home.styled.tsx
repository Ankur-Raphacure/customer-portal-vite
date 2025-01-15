import styled from "styled-components";
interface CategoryDivcolorsProps {
  index: any;
}
const colors = [
  "linear-gradient(235deg, #FEEFC1 8.72%, rgba(254, 239, 193, 0.10) 97.2%)",
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  "linear-gradient(235deg, #FEEFC1 8.72%, rgba(254, 239, 193, 0.10) 97.2%)",
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  "linear-gradient(235deg, #FEEFC1 8.72%, rgba(254, 239, 193, 0.10) 97.2%)",
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
];
const Categorycolors = [
  "linear-gradient(229deg, #FEE6DC 11.99%, #FFF9F6 88.81%)",
  "linear-gradient(229deg, #DFF7EA 10.71%, #EFFFF6 98.52%)",
  "linear-gradient(235deg, #feefc1 8.72%, rgba(254, 239, 193, 0.1) 97.2%)",
];
export const CategorySubDivcolors = styled.div<CategoryDivcolorsProps>`
  background: ${({ index }: any) => colors[index % colors.length]};
`;
export const CategoryDivcolors = styled.div<CategoryDivcolorsProps>`
  background: ${({ index }) => Categorycolors[index % Categorycolors.length]};
`;

export const HomeStyled = styled.div`
  width: 100%;

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
      font-weight: 500;
      line-height: normal;
    }
    li.active {
      color: #9747ff;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .rp-subdomain-packages {
    margin-top: 30px;
    max-width: 1200px;
  }
  .book-now-sec-btn {
    border-radius: 5px;
    background: #9747ff;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 120px;
    height: 40px;
    border: none;
  }
  .book-now-sec-btn:disabled {
    opacity: 0.3;
  }
  .rapha-plus-home-page-top {
    text-align: center;
    margin: 100px;
  }
  .rapha-plus-home-page-bottom {
    width: 90%;
    margin: auto;
  }
  .rapha-plus-about-us-section {
    background: #28ab9f;
    text-align: center;
  }
  .rapha-main-home-search {
    input {
      margin-top: 75px;
      width: 100%;
      height: 60px;
      padding: 10px;
      border: 1px solid #e2e2e2;
      border-radius: 27px;
      margin-bottom: 2px;
    }
    .search-list-sec {
      z-index: 978987;
      margin-left: 0px;
    }
  }
  .all-services-sec-code-all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    margin-bottom: 30px;
    @media screen and (max-width: 900px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .all-services-sec-code-row {
    background: linear-gradient(
      229deg,
      rgb(223, 247, 234) 10.71%,
      rgb(239, 255, 246) 98.52%
    );
    border-radius: 8px;
    padding: 12px;
    text-align: center;
  }
  .rapha-main-home-search-section {
    width: 50%;
    max-width: 600px;
    margin: auto;
  }
  .rapha-plus-about-us-section-content {
    width: 90%;
    h2 {
      border-bottom: 5px solid #fff;
      padding: 10px;
    }
    p {
      padding: 20px;
      padding-top: 10px;
      line-height: 28px;
    }
    margin: auto;
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
  .main-welcome-text-rapha {
    padding: 30px 50px;
    background: #fff;
  }
  .welcome-text-rapha {
    padding: 0;
    display: flex;
    gap: 10px;
    border-radius: 45px;
    background: #252b61;
  }
  .download-home-page-div {
    display: flex;
    flex-direction: column;
    padding: 15px 50px;
    background: #eaeaef;
    top: 3423.56px;
    left: -31.2px;
  }
  .download-inner-home-page-div {
    display: flex;
    justify-content: space-between;
  }

  .subdomain-text-rapha {
    background: #fff;
    padding: 30px 50px;
    table {
      border: 1px solid #e2e2e2;
    }
    thead th {
      font-size: 18px;
      font-weight: 600;
      color: #9747ff;
    }
    tbody td {
      font-size: 16px;
      font-weight: 400;
    }
    .ant-table-thead > tr > th {
      border-bottom: 1px solid #e2e2e2;
    }
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
    /* width: 72%; */
    padding: 30px 50px;
  }
  .welcome-text-rapha-left h3 {
    color: #c6defd;
    font-size: 66px;
    font-style: normal;
    font-weight: 800;
    line-height: 69px;
    letter-spacing: 0.99px;
    font-family: Outfit, sans-serif;
  }
  .welcome-text-rapha-left p {
    opacity: 0.7;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28.1px;
    letter-spacing: 0.24px;
    font-family: Outfit, sans-serif;
  }

  .consult-doctor {
    border-radius: 45px;
    background: #c6defd;
    box-shadow: 8px 8px 33px 0px rgba(0, 0, 0, 0.25);
    line-height: normal;
    padding: 18px 19px;
    width: 220px;
    height: 60px;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    border: none;
    line-height: normal;
    color: #252b61;
    font-family: Outfit, sans-serif;
  }
  .Google-Play {
    color: #000;
    background-color: #fff;
    height: 3.5rem;
  }
  .book-app-doctor {
    line-height: normal;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin-left: 24px;
    border: none;
    /* font-family: Poppins; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: #c6defd;
  }
  .category-book-app-doctor {
    line-height: normal;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    margin-left: 24px;
    border: none;
    /* font-family: Poppins; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: #fff;
  }
  .book-app-doctor-actions {
    margin-top: 76px;
  }

  .book-app-doctor-actions-btn-div {
    display: flex;
    gap: 20px;
    margin-top: -4rem;
    margin-bottom: 1rem;
  }

  .book-app-doctor-actions-btn-div button {
    padding: 10px 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 45px;
    background: #252b61;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
  }

  .our-services-sec {
    background: #fff;
    padding: 30px 50px;
  }
  .our-services-sec h5 {
    margin-bottom: 26px;
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.48px;
    text-transform: capitalize;
    font-family: Outfit, sans-serif;
  }
  .our-services-sec1 h5 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.48px;
    font-family: Outfit, sans-serif;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .bordser-nine {
    height: 3px;
    width: 50%;
    margin: auto;
    background: linear-gradient(90deg, #fffbf2 0%, #fec426 50%, #fffbf2 100%);
  }
  .our-services-all {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 30px;
  }

  .our-services-box {
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 20px;
    cursor: pointer;

    img {
      margin: auto;
      height: 116px;
      object-fit: contain;
    }
    h6 {
      color: #000;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-top: 15px;
      margin-bottom: 5px;
    }
    p {
      color: #000;
      text-align: center;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .our-services-sec1 {
    background: #fff;
    padding: 30px 50px;
  }

  .our-services-all1 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    margin-bottom: 30px;
  }

  .empanel-sec {
    padding: 46px 50px 90px 50px;
    background: #f6f9fd;
  }
  .empanel-main-card-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 30px 40px;
    width: 50%;
    border-radius: 45px;
    background: linear-gradient(90deg, #fff9f9 0%, #fef0c3 100%);
    box-sizing: border-box;
    margin-top: 20px;
    margin-bottom: 50px;
    @media screen and (max-width: 750px) {
      width: 100%;
    }
  }
  .empanel-network-div {
    background-color: #fff;
    display: flex;
    padding: 30px 50px;
    gap: 50px;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 750px) {
      flex-direction: column;
      gap: 0px;
    }
  }

  .empanel-sec-content-left-div h5 {
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.48px;
  }
  .empanel-sec-content-left-div p {
    color: #000;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.21px;
  }
  .empanel-sec-top {
    display: flex;
    margin-bottom: 45px;
    gap: 50px;
    > div {
      width: 50%;
      display: flex;
      justify-content: space-between;
      border-radius: 20px;
      background: #fff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      padding: 30px 40px;
      img {
        margin-top: 12px;
      }
      h6 {
        color: #000;
        /* font-family: Poppins; */
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 10px;
      }
      p {
        color: #000;
        /* font-family: Poppins; */
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .empanel-sec-bottom {
    border-radius: 20px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 50px;
    height: 115px;
    justify-content: space-between;
    padding-right: 60px;
  }
  .left-sec-empanel {
    display: flex;
    gap: 50px;
  }
  .empanel-sec-img img {
    height: 110px;
    margin-left: -14px;
  }
  .empanel-sec-text {
    padding-top: 31px;
    h5 {
      color: #000;
      /* font-family: Poppins; */
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    p {
      color: #000;
      /* font-family: Poppins; */
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .patent-app-no {
    gap: 20px;
    display: flex;
  }
  .empanel-sec-button {
    padding-top: 30px;
    button {
      border-radius: 10px;
      background: #9747ff;
      height: 50px;
      width: 150px;
      color: #fff;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border: none;
    }
  }
  .empanel-sec-button button:hover {
    background: #7e3dc7;
    color: #eee;
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
  .about-us-section {
    background: #fff;
    padding: 45px 50px;
  }
  .about-us-section-content {
    display: flex;
    gap: 54px;
    h5 {
      color: #000;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      margin-bottom: 23px;
    }
    p {
      color: #000;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 179%; /* 28.64px */
    }
  }
  .footer-section-nme {
    background: #252b61;
    padding: 60px 50px;
  }
  .footer-section-content {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    h5 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 1.28px;
      margin-bottom: 16px;
    }
    li {
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px;
      letter-spacing: 0.42px;
      opacity: 0.8;
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
  .welcome-text-rapha-right {
    display: flex;
  }
  .welcome-text-rapha-right img {
    width: 100%;
    margin-top: auto;
    height: 20rem;
  }
  .phone-img {
    width: 100%;
  }
  .doc-popUp-icon {
    height: 20px !important;
  }
  @media (max-width: 700px) {
    .subdomain-text-rapha {
      padding: 20px 10px;
    }
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
    .our-services-sec,
    /* .our-services-sec1, */
    .empanel-sec,
    .about-us-section,
    .footer-section-nme {
      /* padding: 30px 10px; */
      display: block;
    }
    .patentbtn {
      padding: 16px 20px;
    }
    .empanel-main-card-div {
      margin-top: 0;
    }

    .about-us-section-right {
      img {
        max-width: 90%;
      }
    }
    .welcome-text-rapha-right {
      text-align: center;
    }
    .welcome-text-rapha-right img {
      height: 17rem;
    }
    .empanel-sec-button {
      text-align: center;
    }
    .empanel-sec-top > div {
      padding: 30px 20px;
    }
    .welcome-text-rapha-left,
    .about-us-section-left {
      width: 60%;
      margin: auto;
    }
    .table-home-page-sub-domain {
      max-width: 100% !important;
      overflow: auto scroll;
      // width: 100%;
      // margin: 10px auto auto;
    }
    .our-services-box img {
      max-width: 100%;
    }
    .empanel-sec-top {
      margin-bottom: 25px;
    }
    .book-app-doctor-actions {
      display: none;
      gap: 50px;
      justify-content: center;
      button {
        width: 90%;
        margin: auto;
      }
      .book-app-doctor {
        margin-top: 25px;
      }
    }
    .book-app-doctor {
      // margin-top: 30px;
      // margin-left: 0px;
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

    .our-services-all1,
    .footer-section-content {
      grid-template-columns: 1fr;
      display: grid;
      gap: 10px;
    }
    .our-services-box {
      padding: 5px;
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
    .book-app-doctor-actions {
      margin-top: 30px;
      margin-bottom: 30px;
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
    padding: 24px 16px; /* Adjust padding for smaller screens */
    max-width: 100%; /* Ensure it doesn't exceed the screen width */
    box-sizing: border-box; /* Ensure padding is included in width */
  }

  .patent h5 {
    font-size: 18px; /* Adjust font size */
    margin-bottom: 12px; /* Add space below the heading */
  }

  .patentbtn {
    background: #c3ffeb;
    color: #000;
    font-size: 14px; /* Adjust font size */
    font-weight: 600;
    padding: 12px 24px; /* Adjust padding */
    margin-bottom: 12px; /* Add space between buttons */
    border-radius: 8px; /* Optional: Rounded corners */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for depth */
    text-align: center; /* Center text */
    width: calc(50% - 12px); /* Two buttons side by side with a gap */
    max-width: 180px; /* Limit maximum width of each button */
    box-sizing: border-box; /* Ensure padding is included in width */
  }

  @media (max-width: 600px) {
    .patentbtn {
      width: 100%; /* Stack buttons vertically on small screens */
      max-width: none; /* Allow buttons to expand full width */
    }
  }

  .popup-link {
    display: flex;
    flex-wrap: wrap;
  }

  .popup-link a {
    cursor: pointer;
    text-decoration: none;
  }

  .popup-container {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 17, 17, 0.61);
    display: flex;
    align-items: center;
  }
  .popup-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    padding: 16px 52px 64px 53px;
    gap: 33px;
  }

  .hospital-specislist-main-div p {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
  }

  .hospital-specislist-pp-div {
    display: none;
  }
  .hospital-specislist-sub-main-div {
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    .doctor-cards img {
      width: 100%;
      margin-top: 3rem !important;
      border-bottom-left-radius: 4rem !important;
    }
    .hospital-specislist-sub-main-div {
      padding: 10px 10px;
    }
    .main-abha-image-div img {
      width: 100%;
      max-height: 160px;
      object-fit: contain;
    }
    .hospital-specislist-pp-div {
      display: block;
    }

    .hospital-specislist-p-div {
      p {
        font-size: 13px !important;
        margin: auto;
      }
    }
    .our-services-sec1 {
      padding: 0px 20px;
    }
    .popup-content {
      width: 98%;
      padding: 0;
    }
  }
  .popup-content p {
    font-size: 17px;
    padding: 10px;
    line-height: 20px;
  }
  .popup-content a.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    background: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  .popup-content a.close:hover {
    color: #333;
  }

  .popup-content span:hover,
  .popup-content span:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .popup-container:target {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }

  .popup-container h3 {
    margin: 10px;
  }
  /* Additional styles */
  .popup-style-2 {
    transform: scale(0.3);
  }

  .popup-style-2:target {
    transform: scale(1);
  }
  .empanel h2 {
    color: #000;
    /* font-family: Poppins; */
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.8;
  }
  .empanel h4 {
    color: #000;
    /* font-family: Poppins; */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.8;
  }
  .personal-detail {
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.08);
    padding: 42px 24px;
  }
  .empanelinput {
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  .home-page-card {
    padding: 0px 15px;
    width: 100%;
    height: 272px;
    flex-shrink: 0;
    border-radius: 45px;
    background: ${({ index }: any) =>
      Categorycolors[index % Categorycolors.length]};
  }
  .home-page-card p {
    color: #48484d;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: capitalize;
  }

  .home-card-image {
    width: 100%;
    position: relative;
    border-radius: 5px 5px 0px 0px;
    height: 134px;
  }
  .home-card-image-img img {
    width: 149px;
    height: 170px;
  }
  .home-card-image-img svg {
    max-height: 100%;
  }
  .catg-image-div svg {
    margin-top: 5px;
  }
  .home-card-image-img {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 15px;
    @media screen and (max-width: 1400px) {
      justify-content: space-between;
    }
  }

  .home-page-card:hover {
    transform: scale(0.98);
    box-shadow: #dbeefc 3.4px 3.4px 4.2px;
    border: none;
  }

  .category {
    margin-top: 8px;
    color: #252b61;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.36px;
    text-transform: capitalize;
    font-family: Outfit, sans-serif;
  }
  .category-p {
    color: #585656;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-transform: capitalize;
    font-family: Outfit, sans-serif;
  }
  .Revolutionizing-div {
    display: flex;
    align-items: center;
  }
  .Revolutionizing-text-div {
    line-height: 0px;
  }
  .Revolutionizing-image-div img {
    width: 4rem;
    margin-top: -20px;
  }
  .Revolutionizing-text-div h5 {
    margin-bottom: 0px;
    width: 100%;
    position: relative;
    font-size: 24px;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: #000;
    text-align: left;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-family: Outfit, sans-serif;
  }
  .Revolutionizing-text-div p {
    margin-bottom: 0px;

    overflow: hidden;
    color: #141414;
    text-overflow: ellipsis;
    font-family: Outfit, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.48px;
  }
  .abha-card-div {
    background: #fff;
    padding: 30px 50px;
  }
  .Testimonials-main-div {
    background: #fff;
    padding: 30px 50px;
  }
  /* .hospital-specislist-main-div {
    background: #fff;
    padding: 30px 50px;
  } */
  .hospital-specislist-main-div h5 {
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-family: Outfit, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.64px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  .hospital-specislist-main-div p {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
    line-height: 51.02px;
    margin-top: 50px;
    margin-bottom: 10px;
  }

  .testimoials-sub-main-div {
    display: flex;
    margin-top: 80px;
    width: 100%;
    position: relative;
    border-radius: 45px;
    background: #ecfef4;
    box-sizing: border-box;
    padding: 80px 80px;
    @media screen and (max-width: 750px) {
      display: flex;
      justify-content: center;
      padding: 0px;
      flex-direction: column;
    }
  }
  .left-testimoials-sub-main-div {
    width: 40%;
    @media screen and (max-width: 750px) {
    }
  }
  .left-testimoials-sub-main-div p {
    overflow: hidden;
    color: #252b61;
    text-overflow: ellipsis;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.48px;
  }
  .left-testimoials-sub-main-div h5 {
    color: #252b61;
    font-family: "Outfit", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.72px;
  }
  .right-testimoials-sub-main-div {
    width: 60%;
  }
  .right-testimoials-sub-main-div p {
    margin-top: 1rem;
    overflow: hidden;
    color: #1e1e1e;
    text-align: justify;
    text-overflow: ellipsis;
    font-family: "Outfit", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 100%;
    line-height: 29px; /* 161.111% */
    letter-spacing: 0.54px;
  }
  .right-testimoials-sub-main-div img {
    position: relative;
    border-radius: 50%;
    background-color: #008080;
    height: 5.1rem;
    position: relative;
    border-radius: 50%;
    z-index: 1;
    width: 5.1rem;
    margin-top: 4px;
  }

  .associated-with-div {
    /* width: 100%; */
    background: #fff;
    height: 139.2px;
  }
  .associated-with-div h5 {
    color: #000;
    padding: 30px 50px 0px 50px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.64px;
    font-family: Outfit, sans-serif;
    margin-top: 20px;
    margin-bottom: 25px;
  }

  .abha-sub-card-div {
    display: flex;
    justify-content: space-between;
    position: relative;
    box-sizing: border-box;
    height: 424px;
    padding: 30px 50px;
    border-radius: 45px;
    border: 1px solid #fff;
    background: linear-gradient(86deg, #252b61 -0.36%, #92bdf6 93.25%);
  }

  /* Heading and text in right section */
  .abha-sub-card-right-div h5 {
    color: #fff;
    font-family: Outfit;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.72px;
    font-family: Outfit, sans-serif;
  }

  .abha-sub-card-right-div p {
    color: #eaeaea;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 122.222% */
    letter-spacing: 1.2px;
  }

  .abha-sub-card-right-div button {
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 45px;
    background: #a3dac2;
    padding: 19px 30px;
    color: #252b61;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: Outfit, sans-serif;
  }

  .main-abha-image-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-abha-image-div img {
    width: 100%;
  }
  .sub-banner-text {
    display: none;
  }
  .doctore-card-div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 30px 50px;
  }
  .rfm-child {
    margin-left: 1.5rem;
  }
  .doctor-cards {
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 45px;
    border: 1px solid #d1d1d1;
    background: linear-gradient(
      69deg,
      rgba(67, 64, 252, 0.16) 1.01%,
      #92bdf6 94.33%
    );

    height: 262px;
  }
  .doctor-card-img {
    width: 50%;
  }
  .doctor-card-img img {
    margin-top: 1.3rem;
    border-bottom-left-radius: 3rem !important;
    object-fit: cover;
    height: 15rem;
    border-radius: 15px;
    object-fit: contain;
  }
  .doctor-card-details p {
    display: flow;
    margin-top: 2rem;
    color: #000;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
  }
  .welcome-text-rapha-mobile-viwe {
    display: none;
  }
  .doctor-card-details span {
    opacity: 0.7;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    font-family: Outfit, sans-serif;
  }

  .carousel-control-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: none;
    border-radius: 50%;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    filter: drop-shadow(2px 1px 19px rgba(0, 0, 0, 0.1));
  }
  .prev-btn {
    left: -20px;
  }
  .next-btn {
    right: -20px;
  }
  .carousel-control-btn:hover {
    background-color: #fff;
  }
  .download-text-div {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Outfit, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.432px;
    margin-bottom: 0px;
    color: var(--Text-Primary, #141414);
    span {
      color: #252b61;
    }
  }
  .download-sub-text-div {
    color: var(--Text-Secondary, #666);
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.1px;
    letter-spacing: 0.27px;
    margin-top: 1.5rem;
    margin-bottom: 0px;
  }
  .download-banner-title-div {
    margin-top: 89px;
  }
  .doctor-card-details {
    width: 55%;
  }
  .doctor-card-action-btn {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
    margin-right: 20px;
  }
  .doctor-card-action-btn button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 4rem;
    border: none;
    border-radius: 100%;
    background-color: #252b61;
    color: #ffffff;
  }
  .carousel-main-div .carousel-item .d-flex {
    justify-content: center;
    flex-wrap: nowrap;
  }
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
    width: 0px;
    height: 0px;
  }
  .multi-carousel-modal p {
    padding: 0px 50px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #000;
    text-overflow: ellipsis;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.48px;
    font-family: Outfit, sans-serif;
    margin-top: 18px;
    margin-bottom: 14px;
  }
  .slider {
    margin: 0 20px;
    overflow: "hidden";
    padding: 2rem 0;
  }
  .slider img {
    width: 100%;
    border-radius: 10px;
  }
  .react-multi-carousel-list {
    padding: 0px 0px 50px 0px;
  }
  .custom-dot-list-style button {
    border: none;
    display: none;
  }
  .react-multi-carousel-dot.react-multi-carousel-dot--active button {
    display: none;
  }
  .react-multiple-carousel__arrow react-multiple-carousel__arrow--left {
    display: flex;
    justify-content: start;
  }
  /* New Cards */

  .doctor-card {
    width: 300px;
    border: 1px solid #d0d0d0;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    font-family: Arial, sans-serif;
    background-color: #fff;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    background-color: #f4f5f7;
  }

  .rating {
    background-color: #e7f1ff;
    color: #2f80ed;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 5px;
  }

  .rapha-assured {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #fde68a;
    color: #6b5600;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
  }

  .shield-icon {
    font-size: 14px;
  }

  .doctor-image {
    text-align: center;
    background-color: #f9f9f9;
    padding: 12px 0;
  }

  .doctor-image img {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
  }

  .card-details {
    padding: 12px 16px;
  }

  .card-details h2 {
    font-size: 20px;
    color: #000;
    margin: 0;
  }

  .specialty {
    color: #2f80ed;
    font-size: 16px;
    margin: 4px 0;
  }

  .qualification,
  .experience {
    color: #707070;
    font-size: 14px;
    margin: 2px 0;
  }

  .bag-icon {
    margin-right: 6px;
  }
  .perent-BreadCrumbModule-div {
    display: none;
  }

  /* New Cards */

  .scanCenter-card-container {
    flex: 1 1 calc(33.33% - 10px);
    border-radius: 25px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
    font-family: Arial, sans-serif;
    cursor: pointer;
    margin-bottom: 1rem;
  }

  /* Card Header */
  .scanCenter-card-header {
    position: relative;
    background-color: #f5f5f5;
    text-align: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .scanCenter-company-logo img {
    /* width: 100%; */
    height: 11rem;
  }

  .scanCenter-company-logo p {
    font-weight: bold;
    margin: 0;
  }

  .scanCenter-company-logo small {
    font-size: 12px;
    color: #666;
  }

  /* Badge */
  .scanCenter-badge {
    position: absolute;
    top: 0px;
    right: 0px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 0px 14px 0px 14px;
    background-color: #f0da69;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }

  .scanCenter-badge img {
    width: 20px;
    height: 20px;
  }

  /* Card Body */
  .scanCenter-card-body {
    padding: 15px 15px;
    text-align: left;
  }

  .scanCenter-card-body h3 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    padding: 0px;
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #141414;
    opacity: 0.8;
  }

  .scanCenter-rating {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #fbfbfb;
    justify-content: center;
    width: 25%;
    border-radius: 20px;
    background-color: #92bdf6;
    height: 21px;
  }

  .scanCenter-rating .scanCenter-star {
    color: #fbfbfb;
    font-size: 16px;
  }

  .scanCenter-card-body p {
    width: 100%;
    font-size: 14px;
    color: #a49b9b;
    font-family: Poppins, serif;
    margin-top: 0px;
  }

  .scanCenter-card-body .scanCenter-separator {
    margin: 0 5px;
  }
  .-scanCenter-star {
    font-size: 10px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #fbfbfb;
  }
  .doctor-card-detail-div {
    display: flex;
    flex-direction: column;
    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
      align-items: center;
      font-size: 14px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }
  .doctor-card-sub-detail-div {
    display: flex;
    flex-direction: column;
    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
      font-size: 14px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #5c5c5c;
      opacity: 0.85;
    }
  }
  .search-heading-text-div {
    background: #f2f2f6;
    height: 45.767px;
    display: flex;
    justify-content: space-between;
  }
  .search-heading-text-div p {
    color: #141414;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
  }
  .book-app-doctor-actions-btn-mobile-viwe {
    display: none;
  }
  .search-popup {
    display: flex;
    justify-content: center;
  }
  .search-popup-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .search-popup-item:last-child {
    border-bottom: none;
  }

  .search-popup-item:hover {
    background-color: #f9f9f9;
  }
  .search-popup-image img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }
  .search-popup-details {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
  .search-popup-name {
    color: #6a6a6a;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
  }
  .search-popup-type {
    font-size: 14px;
    color: #888;
    margin: 0;
  }
  .search-popup-no-results img {
    margin-left: 11.5rem;
  }
  .search-popup-title {
    color: #1e1e1e;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.27px;
    margin-bottom: 0px;
    margin-top: 1rem;
  }
  .search-popup-sub-title {
    color: #6a6a6a;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
  .download-home-page-mobile-viwe-div {
    display: none;
  }
  .round-img-frame {
    position: absolute;
    margin-left: -5.4rem;
  }
  .round-img-icon {
    z-index: 1;
    position: absolute;
    margin-left: -1.8rem;
    margin-top: 4.2rem;
    height: 32px;
    width: 33px;
  }
  .rating-banner-div {
    position: absolute;
    z-index: 1;
    margin-left: -16px;
    margin-top: 2rem;
    p {
      margin: auto;
      margin-top: -47px;
      margin-right: 19px;
      font-size: 16px;
      font-size: 12px;
    }
    img {
      height: 2rem;
    }
  }
  .bannerWrapper {
    position: absolute;

    .rectangle {
      background: #92bdf6;
      padding: 7px;
      border-radius: 10px 45px 45px 0;
      width: 5rem;
      display: flex;
      align-items: center;
    }
    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }
  .connect-sec-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    border-radius: 0px 0px 15px 15px;
    background-color: #fff5d8;
    height: 39px;
    padding: 0px 18px;
    p {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 1024px) {
    .abha-sub-card-right-img-div img {
      width: 5rem;
    }
    .abha-sub-card-div {
      flex-direction: column-reverse;
      height: auto;
      padding: 20px;
      border-radius: 1.5rem;
    }

    .abha-sub-card-right-div h5 {
      font-size: 18px;
      width: 100%;
    }

    .abha-sub-card-right-div p {
      font-size: 16px;
      line-height: 22px;
    }

    .abha-sub-card-right-div button {
      font-size: 14px;
      width: -webkit-fill-available;
    }

    .main-abha-image-div {
      flex-direction: column;
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    .abha-sub-card-right-img-div img {
      width: 5rem;
    }
    .abha-sub-card-div {
      padding: 10px;
      flex-direction: column-reverse;
    }

    .abha-sub-card-right-div h5 {
      font-size: 18px;
    }

    .abha-sub-card-right-div p {
      font-size: 16px;
      line-height: 20px;
    }

    .abha-sub-card-right-div button {
      font-size: 14px;
      width: -webkit-fill-available;
    }
    .abha-image1-div {
      width: 100%;
    }
    .Carousel-sub-cards-div {
      width: 20rem !important;
      border-radius: 25px;
    }
    .empanel-main-card-div {
      padding: 10px;
    }

    .empanel-sec-content-left-div h5 {
      font-size: 16px;
      font-weight: 500;
    }

    .empanel-sec-content-left-div p {
      font-size: 12px;
      opacity: 0.7;
      margin-bottom: 0px;
    }

    .empanel-sec-content-right img {
      width: 20px;
      height: 20px;
    }
  }

  .search-popup-content {
    background: #fff;
    height: 15rem;
    overflow: scroll;
    padding: 0rem 1rem 0rem 1rem;
    width: 45%;
    position: absolute;
  }
  .our-services-sec1-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px 0px;
  }
  .our-services-sec1-row > .our-services-card {
    flex: 0 0 calc(33.33% - 14px);
    box-sizing: border-box;
    display: flex;
  }

  .our-services-sec1-row > .our-services-card.justify-center {
    justify-content: center;
  }

  .our-services-sec1-row > .our-services-card.justify-end {
    justify-content: flex-end;
  }
  .download-inner-home-title-div {
    margin-top: 4rem;
  }

  .perent-search-div {
    margin-top: 20px;
  }
  @media (max-width: 576px) {
    .our-services-sec1-row {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .our-services-sec1-row > .our-services-card.justify-end {
      justify-content: flex-start;
    }
    .Revolutionizing-div {
      flex-direction: column;
      margin: auto;
    }
    .Revolutionizing-div h5 {
      font-size: 20px;
      justify-content: center;
    }
    .Revolutionizing-div p {
      font-size: 18px;
      justify-content: center;
    }

    .Revolutionizing-image-div {
      margin: 0 !important;
    }

    .Revolutionizing-text-div p {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    .doctore-card-div {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      scrollbar-width: thin;
      margin-bottom: 0px;
    }
    .download-home-page-div {
      display: none;
    }
    .abha-sub-card-right-img-div {
      padding: 2rem;
    }
    .abha-sub-card-right-img-div img {
      width: 5rem;
    }
    .our-services-sec1 h5 {
      font-size: 20px;
      margin-bottom: 0px;
    }
    .Revolutionizing-image-div img {
      width: 2rem;
    }
    .welcome-text-rapha-left {
      padding: 10px;
      width: 46%;
    }
    .our-services-sec {
      padding: 30px 20px;
    }
    .Testimonials-main-div {
      padding: 0px;
      border-radius: 0px;
    }
    .empanel-network-div {
      flex-direction: row;
      padding: 0px 10px;
      gap: 10px;
    }

    .welcome-text-rapha-left h3 {
      font-size: 20px;
      letter-spacing: 0.02em;
      font-weight: 600;
      line-height: 30px;
      width: 15rem;
      text-align: left;
    }
    .welcome-text-rapha-left p {
      font-size: 14px;
      text-align: left;
    }
    .welcome-text-rapha {
      display: none;
    }
    .doctore-card-div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 0px 20px;
    }
    .scanCenter-company-logo img {
      height: 18rem;
      margin-top: 22px;
    }
    .main-welcome-text-rapha {
      padding: 0px 20px;
      display: flex;
      flex-direction: column-reverse;
    }
    .home-card-image-img {
      display: flex;
      justify-content: center;
      margin-top: 0px;
      height: 100%;
    }
    .abha-sub-card-right-img-div img {
      width: 5rem;
    }
    .abha-card-div {
      padding: 20px;
    }
    .abha-sub-card-div {
      flex-direction: column-reverse;
    }
    .abha-sub-card-right-div h5 {
      font-size: 18px;
    }
    .abha-sub-card-right-div p {
      font-size: 14px;
      line-height: 20px;
    }
    .abha-sub-card-right-div button {
      font-size: 14px;
      width: -webkit-fill-available;
      margin-top: 0px !important;
    }
    .sub-banner-text {
      display: block;
      text-align: end;
    }
    .banner-text {
      display: none;
    }
    .left-testimoials-sub-main-div h5 p {
      display: flex;
      justify-content: center;
    }
    .left-testimoials-sub-main-div {
      padding: 0px;
      width: 100%;
    }
    .empanel-main-card-div {
      width: 100%;
      margin-bottom: 15px;
      flex-direction: column;
      text-align: unset;
      border-radius: 15px;
    }
    .empanel-sec-content-left-div,
    .empanel-sec-content-right {
      justify-content: center;
    }
    .empanel-sec-content-right img {
      margin-top: 10px;
    }
    .testimoials-sub-main-div {
      flex-direction: column;
      text-align: center;
      border-radius: 0px;
      margin-top: 2rem;
    }
    .left-testimoials-sub-main-div,
    .right-testimoials-sub-main-div {
      width: 100%;
      padding: 5px 40px 5px 40px;
    }
    .right-testimoials-sub-main-div img {
      width: 83px;
    }
    .left-testimoials-sub-main-div h5 {
      font-size: 18px;
    }
    .right-testimoials-sub-main-div p {
      font-size: 14px;
      text-align: center !important;
    }
    .abha-sub-card-div {
      flex-direction: column-reverse;
      padding: 15px;
    }
    .abha-sub-card-right-div,
    .abha-sub-card-left-div {
      flex: 100%;
      text-align: center;
      flex-direction: column-reverse;
    }
    h5 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    .carousel-main-div .carousel-item .d-flex {
      display: block;
    }
    .carousel-main-div .carousel-item .d-flex > * {
      width: 100%;
      margin: 0 auto;
    }
    .react-multi-carousel-list {
      padding: 0rem 0rem 0rem 0rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      scrollbar-width: none;
      margin-bottom: 0px;
    }

    .our-services-all {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .category {
      font-size: 14px;
      letter-spacing: 0.02em;
    }
    .our-services-sec h5 {
      font-size: 20px;
      letter-spacing: 0.02em;
    }
    .home-page-card p {
      font-size: 10px;
      letter-spacing: 0.02em;
    }
    .category-book-app-doctor-btn {
      display: none;
    }
    .home-page-card {
      height: 100%;
      border-radius: 25px;
    }
    .home-card-image-img img {
      height: 114px;
      width: 120px;
    }
    .catg-image-div svg {
      height: 114px;
      width: 120px;
      margin-top: 8px;
    }
    .Revolutionizing-text-div h5 {
      font-size: 16px;
      display: flex;
      font-weight: 300;
      margin-bottom: 0px;
      margin-top: 0px;
    }
    /* .our-services-sec1-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-end;
    } */
    .custom-right-arrow,
    .custom-left-arrow {
      display: none;
    }
    .multi-carousel-modal p {
      font-size: 20px;
      letter-spacing: 0.02em;
      margin-bottom: 0px;
      padding: 20px;
    }
    .abha-sub-card-right-div {
      justify-content: center;
    }
    .associated-with-div h5 {
      padding: 20px 20px;
      font-size: 20px;
    }
    .left-testimoials-sub-main-div p {
      margin-top: 1rem;
      font-size: 18px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #252b61;
      font-weight: 300;
      margin-bottom: 5px;
    }
    .hospital-specislist-main-div h5 {
      font-size: 19px;
      margin-bottom: 0px;
    }
    .category-book-app-doctor {
      width: 2.5rem;
      height: 2.5rem;
      margin-left: 7rem;
    }
    .download-text-div {
      margin-bottom: 0px;
      font-size: 18px;
    }
    .download-sub-text-div {
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #666;
      height: 67.6px;
    }
    .perent-search-div {
      /* margin-top: -2rem; */
      margin-bottom: 1rem;
    }
    .welcome-text-rapha {
      border-radius: 25px;
    }
    .home-card-image {
      height: 122px;
    }
    .perent-BreadCrumbModule-div {
      display: block;
    }
    .search-popup-content {
      width: 100%;
      height: 20rem;
    }
    .welcome-text-rapha-img {
      height: 12rem !important;
    }
    .search-popup-no-results img {
      margin-left: 4rem;
    }
    .welcome-text-rapha-mobile-viwe {
      display: block;
      svg {
        width: 100%;
      }
    }
    .download-home-page-mobile-viwe-div {
      display: block;
      svg {
        width: 100% !important;
      }
    }
    .book-app-doctor-actions-btn-mobile-viwe {
      display: block;
    }
    .book-app-doctor-actions-btn-mobile-viwe {
      display: flex;
      align-items: center;
      position: absolute;
      margin-top: -4.5rem;
      img {
        width: 15px;
      }
      button {
        height: 2.5rem;
        font-size: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 45px;
        background: #252b61;
        color: #fff;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        line-height: 60px;
      }
    }
    .hospital-specislist-main-div {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 391px) {
    .scanCenter-card-container {
    }

    .react-multi-carousel-list {
      padding: 0px;
    }

    .doctore-card-div {
      display: none;
    }
  }
`;
