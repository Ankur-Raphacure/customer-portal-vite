import styled from "styled-components";

export const PharmacyStyled = styled.div`
  width: 100%;
  .Category-heading-div {
    padding: 0px 50px;
    p {
      width: 100%;
      position: relative;
      font-size: 32px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #131313;
      text-align: left;
      display: inline-block;
    }
  }
  .filter-by-name {
    margin-top: 40px;
  }
  .Top-Category-MultiCarouselModal {
    padding: 0px 50px;
  }
  .Branded-Medicines-MultiCarouselModal {
    padding: 0px 50px;
  }
  .common-sub-cards-main-div {
    margin-top: 3rem;
    background-image: url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731128777230.png");
    background-position: top right;
    background-repeat: no-repeat;
  }
  .common-sub-cards-main-div h5 {
    padding: 0px 50px;
    color: #000;
    font-family: Outfit, sans-serif;
    font-size: 55px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    span {
      color: #104cba;
    }
  }

  .common-sub-cards-text-main-div {
    padding: 0px 50px;
    color: #000;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    letter-spacing: 1.5px;
  }
  .common-cards-main-div {
    height: 580px;
    width: 100%;
    background: #f0f5ff;
  }
  .health-theme-month {
    padding: 30px 50px;
    margin-top: 3rem;

    h5 {
      position: relative;
      font-size: 32px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #131313;
      text-align: left;
    }
  }
  .video-main-div {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 50px;
  }
  .video-main-left-div {
    width: 50%;
    background: linear-gradient(234.83deg, #e3f7e9, #fefbf2);
    padding: 20px 40px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border: 1px solid #ede2e2;
  }
  .mobile-view-video-main-right-div {
    display: none;
  }
  .video-main-right-div {
    width: 50%;
    max-width: 100%;
    text-align: center;
    border: none;
  }
  .video-main-left-title {
    margin: 0 !important;
    font-size: 36px;
    letter-spacing: 0.02em;
    line-height: 71px;
    font-family: Outfit, sans-serif;
    color: #212121;
    font-weight: 600;
  }
  .video-main-left-sub-title {
    margin: 0 !important;

    font-size: 16px;
    letter-spacing: 1.5px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #39393c;
  }
  .video {
    width: 100%;
    height: auto;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .advertisement-main-div {
    display: flex;
    justify-content: center;
    width: 100%;
    background: linear-gradient(180deg, #dff7ea, #fef6f2);
    height: 339px;
    margin-top: 30px;
  }
  .advertisement-main-left-div {
    padding: 30px 50px;
    width: 70%;
  }
  .advertisement-main-right-div {
    width: 30%;
  }

  .advertisement-main-title {
    position: relative;
    font-size: 36px;
    letter-spacing: 0.02em;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    text-align: left;
    font-weight: 700;
    margin: auto;
  }
  .advertisement-main-sub-title {
    position: relative;
    width: 638.2px;
    position: relative;
    font-size: 20px;
    letter-spacing: 1.5px;
    font-family: Outfit, sans-serif;
    color: #888;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .advertisement-main-img {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .assistance-main-div {
    padding: 30px 50px;
  }
  .assistance-sub-main-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }
  .assistance-main-title {
    font-size: 32px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #131313;
  }
  .assistance-left-card-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    border-radius: 45px;
    background: linear-gradient(234.83deg, #feefc1, rgba(254, 239, 193, 0.1));
    height: 138px;
    cursor: pointer;
  }
  .assistance-left-card-div button {
    border-radius: 100%;
    height: 56px;
    width: 56px;
    background: #252b61;
  }
  .assistance-right-card-div button {
    border-radius: 100%;
    height: 56px;
    width: 56px;
    background: #252b61;
  }
  .icons {
    color: #fff;
  }
  .assistance-right-card-div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    border-radius: 45px;
    background: linear-gradient(180deg, #dff7ea, #fef6f2);
    height: 138px;
    cursor: pointer;
  }
  .assistance-left-card-title {
    width: 100%;
    font-size: 28px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #1e1e1e;
    margin: auto;
  }
  .assistance-left-card-sub-title {
    font-size: 16px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #51546a;
    width: 335.1px;
  }
  .branded-medicines-main-div {
    padding: 30px 50px;
  }

  .branded-medicines-btn-div {
    display: flex;
    align-items: center;
  }
  .branded-medicines-btn-div button {
    display: flex;
    align-items: center;
    color: #000;
    border: 1px solid #888888;
    border-radius: 39px;
    height: 48px;
  }
  .comparison-carousel-div {
    padding: 30px 50px;
  }

  .comparison-carousel-title {
    color: #131313;
    font-family: Outfit, sans-serif;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.64px;
  }
  .comparison-carousel-filter-btn {
    button {
      border-radius: 45px;
      border: 1px solid #888;
      margin-right: 1rem;
      margin-bottom: 2rem;
    }
    .active {
    }
  }
  .no-comparision-found-sec {
    text-align: center;
    opacity: 0.5;
  }
  .view-all-salt {
    text-align: end;
    margin-right: 50px;
    margin-bottom: 2rem;
    button {
      width: 200px;
      background: #252b61;
      border: 1px solid #e2e2e2;
      height: 40px;
      border-radius: 8px;
      color: #fff;
    }
  }
  .Assistance-cl-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Assistance-cl-btn-icon {
    color: #fff;
  }
  .pagination-div {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .allProductsBySalt-div {
    height: 100%;
  }

  .mobile-viwe-div {
    display: none;
  }
  @media (max-width: 768px) {
    .renderCard-div h5 {
      font-size: 14px;
      margin-bottom: 0px;
    }
    .view-all-salt {
      margin-bottom: 0px;
      display: flex;
      justify-content: end;
      margin-right: 0px;

      button {
        background: none;
        color: #252b61;
        border: none;
        width: 7rem;
      }
    }
    .header-banner-filter-div {
      display: flex;
      flex-direction: column-reverse;
    }
    .mobile-viwe-div {
      display: block;
      svg {
        width: 100%;
      }
    }
    .web-viwe-div {
      display: none;
    }
    .Category-heading-div {
      padding: 0px 10px;
    }
    .Category-heading-div p {
      font-size: 20px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #131313;
      margin-bottom: 5px;
    }
    .health-theme-month {
      padding: 0px 20px;
    }
    .health-theme-month h5 {
      font-size: 22px;
    }
    .common-sub-cards-main-div h5 {
      font-size: 18px;
      padding: 0px;
      text-align: left;
    }
    .common-cards-main-div {
      padding: 10px;
      height: auto;
    }
    .common-sub-cards-main-div {
      text-align: center;
    }
    .common-sub-cards-main-div p {
      font-size: 14px;
      line-height: 1.5;
      padding: 0px;
      text-align: start;
    }
    .common-sub-cards-main-div .multi-carousel-modal {
      width: 100%;
    }
    .video-main-div {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0px 0px;
    }
    .video-main-left-div {
      padding: 5px;
    }

    .video-main-left-div,
    .video-main-right-div {
      width: 100%;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    .video-main-left-title {
      padding: 0px 20px;
      font-size: 20px;
      text-align: start;
    }
    .comming-soon {
      display: none;
    }
    .video-main-left-sub-title {
      font-size: 12px;
      text-align: start;
      padding: 0px 20px;
    }
    .video-main-left-div img {
      max-width: 100%;
    }
    .video-main-right-div .video {
      max-width: 100%;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    .mt-3 img {
      max-width: 24%;
      margin: 0 5px;
    }

    .advertisement-main-left-div {
      padding: 10px 20px;
      width: 100%;
      text-align: center;
    }
    .advertisement-main-title {
      font-size: 19px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
      margin-bottom: 0px;
    }
    .advertisement-main-sub-title {
      font-size: 12px;
      letter-spacing: 1.5px;
      font-weight: 500;
      color: #5a5a5a;
      margin-bottom: 15px;
      width: 100%;
    }
    .advertisement-main-img {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      width: 100%;
      margin-bottom: 20px;
    }
    .advertisement-main-img img {
      width: 62px;
      margin-right: 5px;
    }
    .advertisement-main-div {
      margin-top: 0px;
      flex-direction: column;
      height: auto;
      background: linear-gradient(
        180deg,
        rgba(146, 189, 246, 0.2),
        rgba(236, 243, 253, 0.5) 50%,
        rgba(159, 197, 247, 0.2)
      );
    }
    .advertisement-main-right-div {
      width: 100%;
    }
    .advertisement-main-right-div img {
      display: none;
    }
    .assistance-main-div {
      padding: 10px 10px;
    }
    .assistance-sub-main-div {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .assistance-left-card-div,
    .assistance-right-card-div {
      width: 100%;
      height: 100%;
      padding: 20px;
      display: flex;
      gap: 1rem;
      border-radius: 20px;
    }
    .assistance-main-title {
      display: none;
    }

    .assistance-left-card-title,
    .assistance-left-card-sub-title {
      text-align: start;
    }

    .assistance-left-card-title {
      font-size: 18px;
      font-weight: 400;
    }

    .assistance-left-card-sub-title {
      font-size: 12px;
      color: #51546a;
      width: 100%;
    }
    .comparison-carousel-div {
      padding: 0px 20px;
    }
    .comparison-carousel-title {
      font-size: 20px;
    }
    .comparison-carousel-filter-btn {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      scrollbar-width: thin;
    }
    .btn {
      flex: 0 0 auto;
      padding: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
      border: none;
    }
    .comparison-carousel-filter-btn {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .comparison-carousel-filter-btn button {
      width: 10rem;
    }
    .assistance-left-card-div button,
    .assistance-right-card-div button {
      background: #fff;
      border: none;
    }
    .Assistance-cl-btn-icon {
      color: #252b61;
    }
  }

  /* ==========================AllPharmacyList Style================== */
  .all-pharmacy-page-div {
    width: 100%;
    padding: 30px 50px;
    display: flex;
    gap: 2rem;
  }
  .filter-module-div {
    width: 30%;
    border-radius: 25px;
    border: 1px solid #ededed;
    box-sizing: border-box;
    height: 100%;
  }
  .right-card-module-div {
    width: 80%;
  }
  .card-module-div {
    margin-top: 2rem;
    /* width: 80%; */
    display:flex;
    flex-wrap:wrap;
    gap:20px
  }
  .btn-filter-module-div {
    /* display: flex;
    justify-content: end;
    align-items: center;
    margin-top: 2rem; */
  }
  .selector-filter-sub-module-div select {
    font-weight: bold;
    margin-left: 5px;
    appearance: none;
    background-image: url("arrow-icon.png");
    background-repeat: no-repeat;
    background-position: right center;
    padding-right: 20px;
  }

  .selector-filter-sub-module-div select:focus {
    outline: none;
  }
  .btn-filter-sub-module-div button {
    margin-right: 1rem;
    position: relative;
    border-radius: 26px;
    border: 1px solid #aca4a4;
    position: relative;
    font-size: 16px;
    letter-spacing: 1.5px;
    font-family: Outfit, sans-serif;
    color: #626060;
    text-align: center;
  }
  .selector-filter-sub-module-div select {
    position: relative;
    border-radius: 44px;
    border: 1px solid #aca3a3;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: left;
    font-size: 16px;
    color: #7e7979;
    font-family: Outfit, sans-serif;
  }
  .selector-filter-sub-module-div {
    width: 40%;
    display: contents;
  }
  .pagination-box-sec-pha {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .pagination-box-sec-pha button {
    border-radius: 29px;
    border: 1px solid #252b61;
    display: inline-flex;
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #252b61;
    text-align: center;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 400;
  }
  .parent-search-fild-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }
  .parent-search-left-div {
    display:flex;
    justify-content:center;
  }
  .all-compare-medicines-list {
    margin-top: 2rem;
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 2rem;
  }
  .Upload-Prescription-mobile-btn {
    display: none;
  }
  @media (max-width: 768px) {
    .card {
      width: 100%;
    }
    .Upload-Prescription-mobile-btn {
      display: block;
      padding: 30px 10px;
      button {
        width: 100%;
        position: relative;
        border-radius: 45px;
        background-color: #a3dac2;
        height: 50px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px 11px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: left;
        font-size: 16px;
        color: #252b61;
        font-family: Outfit, sans-serif;
        font-weight: 500;
      }
    }
    .card-module-div {
      margin-top: 2rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
    .all-compare-medicines-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      scrollbar-width: thin;
      margin-bottom: 0px;
    }
    .all-compare-medicines-list {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .btn-filter-module-div {
      flex-direction: column;
      text-align: start;
      gap: 1rem;
      margin-top: 1rem;
    }
    .selector-filter-sub-module-div select {
      width: 100%;
    }
    .filter-module-div {
      width: 100%;
      border: none;
    }
    .pharmacy-search-fields {
      padding: 30px 0px !important;
      margin-top: 0px;
    }
    .sidefilters {
      width: 100%;
    }
    .selector-filter-sub-module-div {
      width: 100%;
      display: flex;
      justify-content: center;
      display: none;
    }
    .all-pharmacy-page-div {
      flex-direction: column;
      padding: 10px 20px;
      gap: 0px;
    }
    .right-card-module-div {
      width: 100%;
    }
    .search-popup {
      width: 100% !important;
      left: 0rem !important;
    }
    .search-popup-no-results img {
      margin-left: 4.5rem !important;
    }
    .selector-filter-sub-module-div div.ant-select-selector {
      width: 20rem !important;
    }
    .parent-search-fild-div {
      flex-direction: column;
    }
    .parent-search-left-div {
      width: 100%;
    }
    .mobile-view-video-main-right-div {
      display: block;
      padding: 15px 15px 0px 15px;
      video {
        border-radius: 25px;
      }
    }
    .video-main-right-div {
      display: none;
    }
  }
  .selector-filter-sub-module-div div.ant-select-selector {
    border-radius: 44px;
    border: 1px solid #aca3a3;
    display: flex;
    width: 215px;
    box-shadow: none;
  }

  .search-popup-card {
    display: flex;
    justify-content: center;
  }
  .search-popup {
    border-radius: 25px;
    background: #fff;
    position: absolute;
    width: 42%;
    left: 29%;
    right: 0;
    z-index: 10000;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 400px;
    overflow-y: auto;
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
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    cursor: pointer;
  }
  .page-count-div {
    margin-top: 1rem;
    p {
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.21px;
      cursor: pointer;
    }
  }
`;
