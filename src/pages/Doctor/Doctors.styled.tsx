import styled from "styled-components";

export const DoctorsStyled = styled.div<{ filtersHeight?: string }>`
  .doctor-specialization {
    p {
      font-size: 32px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #131313;
      margin-bottom: 0px;
    }
  }
  .main-filter-module-div {
    margin-top: 30px !important;
  }
  .search-By-text {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .near-by-doctors-sec {
    padding: 0px;
  }
  .types-of-services-sec-all {
    margin-bottom: 16px;
    display: flex;
    img {
      height: 40px;
      width: 60px;
      border-radius: 16px;
    }
    > div {
      display: flex;
      width: 50%;
      text-align: center;
      padding: 20px;
      border: 1px solid #e2e2e2;
      border-radius: 12px;
      cursor: pointer;
      span {
        padding-top: 7px;
        padding-left: 20px;
        font-size: 20px;
      }
    }
    .active-service {
      border-color: green;
    }
  }
  .specialization-title-div {
    padding: 0px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    button {
      font-size: 20px;
      letter-spacing: 0.02em;
      font-family: Outfit, sans-serif;
      color: #000;
    }
  }
  .show-other-clinis-data {
    text-align: right;
    span {
      border: 1px solid #252b61;
      border-radius: 12px;
      padding: 5px 12px;
      cursor: pointer;
    }
  }
  .doctor-consult {
    width: 100%;
    background-color: #a3dac2;
    padding: 35px 55px;
    margin-top: 70px;
  }

  .doctor-consult-options {
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    align-items: flex-start;
  }

  .doctor-consult-options-map {
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 51px;
    p {
      margin-bottom: 0px;
    }
  }

  .consult-option-img {
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
  }
  .doctor-consult-list {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 25px;
    justify-content: left;
    > div {
      width: 300px;
    }
    // display: grid
    // grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .nearby-hospitals-list {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .nearby-doctor-hospitals {
    padding: 0px 60px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .nearby-doctor-title {
    font-size: 32px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #131313;
    margin-bottom: 47px;
  }
  .nearby-doctor-view-btn {
    margin-bottom: 47px;
    font-size: 20px;
    letter-spacing: 0.02em;
    line-height: 36px;
    font-family: Outfit, sans-serif;
    color: #000;
    cursor: pointer;
  }
  .doctor-video-sub-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    border-radius: 45px;
    max-width: 100%;
    overflow: hidden;
    background-color: #e3f7eb;
    padding: 50px 35px;
  }
  .doctor-video-section {
    padding: 0px 50px;
  }
  .video-div {
    width: 100%;
    position: relative;
    border-radius: 45px;
    background: linear-gradient(114.77deg, #c9c07d, #a6993c);
    width: 40%;
  }
  .text-div {
    width: 60%;
  }
  .doctor-consult-text {
    font-size: 46px;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #171a1f;
    margin-bottom: 0px;
  }
  .view-all-btn {
    font-size: 20px;
    letter-spacing: 0.02em;
    line-height: 36px;
    font-family: Outfit, sans-serif;
    color: #000;
  }
  .doctor-consult-sub-text {
    font-size: 20px;
    letter-spacing: 0.02em;
    line-height: 36px;
    font-family: Outfit, sans-serif;
    color: #575757;
    margin-bottom: 53px;
  }
  .video-text-div {
    font-size: 36px;
    letter-spacing: 0.02em;
    line-height: 18px;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    height: 50px;
    color: #000;
    margin-bottom: 0px;
    span {
      color: #252b61 !important;
    }
  }
  .video-option-div {
    display: flex;
    align-items: center;
    gap: 28px;
  }
  .video-sub-option-div {
    text-align: center;
    img {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 30px;
      font-size: 20px;
      line-height: 51.02px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
    }
  }
  .start-from-text {
    font-size: 20px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.8;
    margin-bottom: 39px;
  }
  .explore-more-btn {
    position: relative;
    border-radius: 128px;
    background-color: #a3dac2;
    height: 56px;
    overflow: hidden;
    flex-shrink: 0;
    text-align: left;
    font-size: 18px;
    color: #252b61;
    font-family: Outfit, sans-serif;
  }
  .parent-multicurosal-module {
    padding: 0px 60px;
  }

  /* Search Popup Card */
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

  /* ============== Doclore List CSS =============== */
  .page-count-div {
    margin-top: 1rem;
    display: flex;
    margin-bottom: 10px;
    p {
      color: #252b61;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.21px;
      cursor: pointer;
    }
  }
  .doctor-list-main-div {
    padding: 15px 60px 30px 60px;
    display: flex;
    text-align: center;
    gap: 2rem;
  }
  .doctors-list-all-sec-all {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    img {
      height: 120px;
      width: 100px;
      object-fit: cover;
      border-radius: 12px;
    }
    > div {
      display: flex;
      gap: 16px;
    }
    p {
      margin-bottom: 0px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0.8;
      span {
        width: 100px;
      }
    }
    .d-name-sec,
    .d-book-now-sec {
      opacity: 1;
      font-weight: bold;
    }
    button {
      border-radius: 45px;
      background: #fff;
      color: #252b61;
      font-size: 16px;
      padding: 3px 2rem;
      border: none;
      margin-top: 5px;
      opacity: 1;
      border: 1px solid #252b61;
    }
  }
  .view-all-docts-sec {
    button {
      border-radius: 45px;
      background: #252b61;
      color: #fff;
      font-size: 14px;
      padding: 5px 2rem;
      border: none;
      margin-top: 5px;
      opacity: 1;
    }
  }
  .side-filter-p-div {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    border-radius: 25px;
    border: 1px solid #ededed;
    box-sizing: border-box;
    height: 100%;
    position: -webkit-sticky;
    position: sticky;
    top: 150px;
    height: ${(props) => props.filtersHeight || "auto"};
  }
  .doctor-list-p-div {
    width: 50%;
    min-width: 50%;
  }

  .suggution-doctor-list-p-div {
    width: 20%;
    position: -webkit-sticky;
    position: sticky;
    top: 150px;
    height: 500px;
  }
  .suggution-doctor-list-div {
    border-radius: 25px;
    border: 1px solid #ededed;
    box-sizing: border-box;
    padding: 10px 10px;
  }
  .add-cards {
    border-radius: 15px;
    background: #fff5d8;
    width: 100%;
  }
  .add-cards1 {
    border-radius: 15px;
    background: #f0f0f5;
    width: 100%;
    margin-top: 2rem;
  }
  .add-cards-title {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 5px;
    p {
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.24px;
      margin-top: 3rem;
      text-align: start;
    }
    img {
      margin-top: 2rem;
    }
    button {
      margin-top: 2rem;
      border-radius: 24px;
      background: #252b61;
      color: #fff;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.21px;
    }
  }

  .add-cards-title1 {
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 0px 5px;
    p {
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.24px;
      margin-top: 3rem;
      text-align: start;
    }
    img {
      margin-top: 2rem;
      height: 9rem;
      width: 8rem;
    }
    button {
      border-radius: 24px;
      background: #252b61;
      color: #fff;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.21px;
    }
  }
  .my-preference-div {
    margin-bottom: 2rem;
    button {
      border-radius: 45px;
      background: #252b61;
      color: #fff;
      text-align: center;
      font-family: Outfit, sans-serif;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0.27px;
      text-transform: capitalize;
      width: 100%;
    }
  }
  .BreadCrumbModule {
    padding: 15px 60px 0px 60px;
  }
  .cardCmp-main-div {
    display: flex;
    justify-content: center;
  }
  .Carousel-sub-cards-div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100% !important;
    height: 214.58px;
    flex-shrink: 0;
    border-radius: 45px;
    width: 16rem;
  }
  .Carousel-sub-cards-div img {
    margin-top: 3.4rem;
    height: 10rem;
    object-fit: contain;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }
  .renderCard-div h5 {
    margin-top: 1rem;
    color: #1e1e1e;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.4px;
    font-family: Outfit, sans-serif;
  }
  .main-doctore-card-div {
    padding: 15px 60px 52px 60px;
  }
  .doctore-card-div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
  .loadMoreBtn {
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
    margin: auto;
  }
  .worning-msg-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    p {
      font-size: 18px;
      font-weight: 400;
      text-align: center;
      padding-bottom: 8px;
      cursor: pointer;
      opacity: 0.5;
    }
  }

  /* ============== Doclore Details CSS =============== */
  /* ============== OPD CSS =============== */
  .opd-detail-card {
    width: 100%;
    height: auto;
    border-radius: 24px;
    background: #fff;
    box-shadow: 1px 1px 18px 0px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  .appointment-card {
    justify-content: space-between;
  }
  .left-middle {
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 1rem 1rem 1rem 1rem;
    cursor: pointer;
  }
  .selected-left-middle {
    display: flex;
    flex-direction: row;
    gap: 14px;
    padding: 1rem 1rem 1rem 0rem;
    cursor: pointer;
    align-items: center;
  }
  .opd-card-left {
    position: relative;
    width: 124px;
    height: 111px;
    border-radius: 15px;
    background: #f0f0f5;
    max-width: 120px;
    min-width: 120px;
  }
  .opd-card-left img {
    width: 6rem;
    height: 6rem;
    border-radius: 10px;
    margin-top: 0.5rem;
    object-fit: contain;
  }
  .opd-card-right {
    text-align: start;
  }
  .doctor-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    font-size: 20px;
    font-weight: 500;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.8;
    margin-bottom: 10px;
  }
  .specelization-text {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.21px;
    display: flex;
    align-items: center;
  }
  .location-text {
    span {
      color: #2c9f6d;
      font-family: Outfit, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-decoration-skip-ink: auto;
      text-decoration-thickness: auto;
      text-underline-offset: auto;
    }
  }
  .selected-location-text {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    margin-bottom: 0px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    width: 80%;
  }

  .selected-location-km {
    color: #5c5c5c;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    margin-bottom: 0px;
  }
  .selected-location-text {
    span {
      color: #5c5c5c;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  /* ============== Doclore Specelization CSS =============== */
  .search-by-text {
    margin-bottom: 2rem;
  }
  .loadMoreBtn {
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
    margin: auto;
  }

  .mobile-view {
    display: none;
  }
  .main-Upload-Prescription-mobile {
    padding: 0px 10px;
    display: none;
  }
  .doctor-consult-sub-text-mobile-view {
    display: none;
  }
  .doctor-title-mobile-view,
  .download-home-page-mobile-viwe-div,
  .mobile-video-view,
  .mobile-view-categories {
    display: none;
  }
  .doctors-list-all-sec-all-full {
    padding-bottom: 16px;
  }
  .toggle-container {
    position: relative;
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    /* height: 45px; */
    overflow: hidden;
    text-align: left;
    font-size: 18px;
    color: #808080;
    font-family: Outfit, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 64px;
    margin-bottom: 1rem;
  }

  .toggle-container {
    background: #f0f0f5;
    border-radius: 20px;
    padding: 0.7rem;
    width: fit-content;
    margin: auto;
    font-size: 20px;
    cursor: pointer;
    .toggle-label {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    span.toggle-label.active {
      background: #fff;
      border-radius: 10px;
      padding: 0.5rem;
      border-bottom: 0;
      font-weight: 600;
      color: #252b61;
    }
  }

  @media (max-width: 768px) {
    .toggle-container {
      height: 100%;
      font-size: 12px;
      span.toggle-label.active {
        font-weight: bold;
      }
    }
    .doctors-list-all-sec-all-full {
      padding-left: 10%;
    }
    .doctors-list-all-sec-all {
      gap: 1rem;
      margin-top: -1rem;
      p {
        font-size: 12px;
        max-width: 200px;
        // display: inline-block;
      }
      img {
        height: 80px;
        width: 60px;
      }
      .doctor-lang-name {
        display: none;
      }
      button {
        font-size: 14px;
        padding: 1px 1rem;
      }
    }
    .sideFilterModule {
      .sidebarMenu {
        width: 100%;
        margin: 0;
        /* .filter-by-type-div {
          display: grid;
          grid-template-columns: 1fr 2fr;
          margin: 0.5rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #ccc;
          place-items: center;

          .filter-by-title {
            font-size: 14px;
          }
          .horizontal-line {
            display: none;
          }

          .alltests {
            max-height: 150px;
            width: 100%;
          }
        } */
      }
    }
    .sort-dropdown {
      font-family: Outfit, sans-serif;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      margin-top: 8.5rem;
      .sort-option {
        font-size: 14px;
        font-weight: 400;
        color: #000;
        text-align: left;
      }
    }
    .types-of-services-sec-all {
      margin-bottom: 16px;
      display: flex;
      img {
        display: none;
      }
      > div {
        padding: 10px;
        span {
          padding-top: 7px;
          // padding-left: 20px;
          font-size: 14px;
        }
      }
    }
    .opd-card-right {
      .location-text {
        margin-bottom: 5px;
      }
    }
    .opd-card-left {
      padding-bottom: 10px;
    }
    .view-all-btn {
      font-size: 18px;
    }
    .BreadCrumbModule {
      padding: 0px;
    }
    .nearby-doctor-view-btn {
      margin-bottom: 0px;
      padding: 0px;
    }
    .doctor-specialization p {
      font-size: 24px;
    }
    .specialization-title-div button {
      font-size: 18px;
    }
    .web-view,
    .search-By-text {
      display: none;
    }
    .search-by-text {
      padding: 0px 10px !important;
      margin-bottom: 0px;
    }
    .mobile-view,
    .main-Upload-Prescription-mobile {
      display: block;
    }
    .mobile-view-categories {
      display: block;
      padding: 0px 10px;
      margin-bottom: 30px;
    }
    .Upload-Prescription-mobile-btn {
      margin-top: 29px;
      padding: 10px 14px;
      width: 100%;
      position: relative;
      border-radius: 10px;
      background-color: #a3dac2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin-bottom: 0px;
        font-size: 14px;
        letter-spacing: 0.02em;
        font-weight: 600;
        font-family: Outfit, sans-serif;
        color: #252b61;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 45px;
        background-color: #252b61;
        height: 30px;
        font-size: 12px;
        color: #fff;
        font-family: Outfit, sans-serif;
      }
    }

    .specialization-title-div {
      font-size: 20px;
      padding: 0px;
      padding: 10px 10px !important;
      margin-bottom: 0px;
    }

    .parent-multicurosal-module {
      display: none;
    }
    .doctor-consult-text {
      font-size: 20px;
      padding: 10px 0px 0px 10px;
      font-weight: 500;
    }
    .doctor-consult {
      padding: 0px;
    }
    .doctor-consult-sub-text {
      display: none;
    }
    .doctor-consult-sub-text-mobile-view {
      padding: 10px 10px !important;
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.24px;
      display: block;
    }
    .doctor-consult-options {
      flex-wrap: inherit;
      gap: 0px;
      padding: 5px 5px !important;
    }
    .doctor-consult-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      margin-bottom: 0px;
      scrollbar-width: none;
    }
    .bannerWrapper {
      display: none;
    }
    .nearby-doctor-hospitals {
      padding: 10px 10px !important;
      margin-top: 32px;
      margin-bottom: 32px;
    }
    .nearby-doctor-title {
      font-size: 20px;
      margin-bottom: 0px;
    }
    .doctor-video-section {
      padding: 0px;
      border-radius: 0px;
    }
    .doctor-video-sub-section {
      border-radius: 0px;
    }
    .search-popup {
      // margin-top: -12rem;
      width: 100%;
      left: 0%;
    }
    .doctor-video-sub-section {
      padding: 32px 20px !important;
      flex-direction: column;
    }
    .text-div {
      width: 0px;
    }
    .mobile-view-text-div {
      width: 100%;
    }
    .video-text-div {
      font-size: 20px;
      text-align: start;
      height: 27px;
    }
    .video-option-div {
      align-items: normal;
      margin-top: 1rem;
    }
    .video-sub-option-div p {
      line-height: 25px;
      font-size: 11px;
    }
    .start-from-text {
      text-align: start;
    }
    .explore-more-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main-doctore-card-div {
      padding: 0px;
    }
    .page-count-div {
      padding: 0px 10px;
    }
    .doctore-card-div {
      display: none;
    }

    .doctor-list-main-div {
      flex-direction: column;
      padding: 0px 0px !important;
      gap: 0rem;
    }
    .suggution-doctor-list-div {
      display: none;
    }
    .side-filter-p-div {
      width: 100%;
      border: none;
      max-width: 100%;
      padding: 0px;
    }
    .doctor-list-p-div {
      width: 100%;
      padding: 10px 10px;
    }
    .side-filter-p-div,
    .suggution-doctor-list-p-div {
      position: static;
      top: 150px;
      height: 100%;
    }
    .nearbyCards {
      padding: 0px;
    }
    .main-contect-div {
      flex-direction: column;
    }
    .contect-book-btn-div {
      width: 100%;
      margin-bottom: 16px;
      justify-content: center;
    }
    .contect-book-btn {
      width: 100%;
    }
    .specelization-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      width: 10rem;
    }
    .left-middle {
      flex-direction: column !important;
    }
    .left-middle-mobile-view {
      flex-direction: unset !important;
    }
    .doctor-title,
    .location-text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
    .exp-div {
      display: flex !important;
      flex-direction: column;
      gap: 0px !important;
      margin-top: 0px !important;
      margin-bottom: 0px !important;
    }
    .align-items-center {
      align-items: normal !important;
    }
    .doctor-title-mobile-view {
      display: block;
      margin-left: 1rem;
    }
    .doctor-title-web-view {
      display: none;
    }
    .card-left {
      display: flex;
    }
    .doctor-title {
      text-align: start;
    }
    .specelization-text {
      text-align: start;
    }
    .doctor-image-mobile-view {
      border-radius: 100%;
      background: #e3e3e3;
      padding: 10px;
    }
    .card-left img {
      width: 6rem !important;
      height: 6rem !important;
      border-radius: 10px !important;
      border-radius: 7rem !important;
    }
    .suggution-doctor-list-p-div {
      width: 100%;
    }
    .nearby-hospitals-list {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
      scrollbar-width: none;
      margin-bottom: 0px;
    }
    .opd-card-left {
      height: 100%;
      width: 100px;
      max-width: 100px;
      min-width: 100px;
    }
    .my-preference-div {
      padding: 0px 10px 20px 10px;
      margin-bottom: 0rem;
    }
    .contect-div {
      padding: 0px;
    }
    .contect-text {
      font-size: 11px;
    }
    .doctor-consult {
      margin-top: 0px;
    }
    .mobile-ButtomBanner {
      display: none;
    }
    .download-home-page-mobile-viwe-div {
      display: block;
      width: 100%;
      margin-top: 32px;
      img {
        width: 100%;
      }
    }
    .book-app-doctor-actions-btn-mobile-viwe {
      display: flex;
      align-items: center;
      position: absolute;
      margin-top: -4.5rem;
      img {
        width: 15px !important;
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
    .mobile-video-view {
      display: block;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    .toggle-container {
      /* flex-direction: column; */
      justify-content: center;
      gap: 1rem;
    }
  }
  .nearby-hospitals-list {
    & > div {
      min-height: 310px;
    }
  }
  .nearbyHospitals {
    & > div {
    }
  }
`;
