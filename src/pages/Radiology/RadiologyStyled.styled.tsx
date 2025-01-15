import styled from "styled-components";

export const RadiologyStyled = styled.div`
  width: 100%;
  background: #fff;
  .radiologyParentDiv {
    background-color: #f6f9fd;
  }
  .search-by-name {
    margin-top: 40px;
  }
  .radioParentContainer {
    padding: 20px 54px 0px;
  }
  .bannerMainDiv {
    display: flex;
  }
  .scanCeRow img {
    max-height: 180px;
    object-fit: cover;
  }
  .scanNow {
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // font-family: "Sofia Sans";
    font-style: normal;
    font-size: 36px;
    font-weight: 600;
  }

  .scanSubTxt {
    color: #000;
    // font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .uploadPrescription {
    display: flex;
    width: 179px;
    height: 46px;
    padding: 18px 19px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #9747ff;
    box-shadow: 8px 8px 33px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    // font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 16px;
    border: none;
  }
  .bookScanning {
    display: flex;
    width: 179px;
    height: 46px;
    padding: 18px 19px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 2px solid #9747ff;
    box-shadow: 8px 8px 33px 0px rgba(0, 0, 0, 0.25);
    color: #9747ff;
    // font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .bannerBtnsDiv {
    display: flex;
  }
  .bannerImgDiv {
    width: 183.425px;
    height: 207px;
    // flex-shrink: 0;
  }
  .bannerImgDiv img {
    width: 100%;
  }

  .categoryContainer {
    padding: 45px 0px 0px 74px;
    scrollbar-width: none;
    overflow-x: scroll !important;
    max-width: 100%;
  }
  .categoryText {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .categoryCardMainDiv {
    display: flex;
    scrollbar-width: none;
    overflow-x: scroll !important;
  }
  .catCardDiv {
    margin-right: 16px;
    // min-width: 179px;
    // min-height: 231px;
    background-color: #ffffff;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .catCardDiv:hover {
    transform: translateY(-5px); /* Moves the element slightly upward */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15); /* Adds a subtle shadow */
    border-radius: 10px;
  }

  .categoryCol {
    padding: unset;
  }
  .catCardDiv:hover {
    box-shadow: #000;
  }
  .imageDiv {
    // width: 61px;
    // height: 61px;
    margin: 1rem;
  }
  .roundedImages {
    max-width: 100%;
    width: 100%;
  }
  .imageName {
    color: #9747ff;
    text-align: center;
    // font-family: "Sofia Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .imageSubtitle {
    color: #000;
    text-align: center;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.6;
    margin: 8px 11px 32px;
    // width: 157px;
  }
  .allScanBoxDiv {
    width: 368px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
  }
  .allScanSearchBox {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    box-shadow: unset;
    width: 83%;
    padding-left: 10px;
  }
  .allScanSearchBtn {
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: inline-flex;
    height: 31px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 8px;
    background: #866b0b;
    border: none;
  }

  .scanCeContainer {
    padding: 64px 54px 0px;
  }
  .scanCeBtnCol {
    display: flex;
  }
  .scanCeText {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 32px;
  }
  .scanSgtBtn {
    display: flex;
    width: 94px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #000;
    // font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #000;
    opacity: 0.4;
    background: #fff;
    margin-right: 24px;
  }

  .scanCeRow {
    padding: 25px 0px 0px 0px;
    gap: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > * {
      padding: 0px;
    }
  }

  .all-scans-list-content {
    width: 100%;
    margin: auto;
    padding: 30px 50px;
  }
  .cardsBody {
    padding: unset;
  }
  .labs-search-section-links {
    display: flex;
    margin-top: 30px;
    gap: 16px;

    button {
      border-radius: 10px;
      border: 1px solid #000;
      opacity: 0.4;
      background: #fff;
      height: 38px;
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      width: 100px;
    }
  }
  .cardTitle {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.8;
    min-height: 39px;
    line-height: 20px;
  }
  .ratingTxt {
    color: #d9d9d9;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .scanCenterTxtOneBefImg {
    width: 14px;
    height: 14px;
    margin-right: 6px;
  }

  .scanCenterTxtTwoBefImg {
    width: 14px;
    height: 14px;
    margin-right: 6px;
  }
  .scanCenterCardTxtOneSpan {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }
  .scanCenterCardTxtTwoSpan {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }
  .scanCenterCardButton {
    display: flex;
    width: 253px;
    height: 39px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid #9747ff;
    color: #9747ff;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: #fff;
    margin-top: 13.5px;
  }
  .allScanCardTxtOneSpan {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .allScanCardTxtTwoSpan {
    color: #000;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    opacity: 0.5;
  }
  .cardsBody.card-body {
    width: 100%;
  }
  .allScanCardButton {
    display: flex;
    width: 100%;
    height: 39px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #9747ff;
    color: #fff;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;
    margin-top: 15px;
  }
  .starIcon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    svg {
      margin-top: -3px;
    }
  }

  .viewAllSec {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: right;
    cursor: pointer;
    padding-right: 35px;
  }
  /* Default styles for category cards */
  .categoryCardMainDiv {
    display: flex;
    flex-wrap: wrap;
  }

  .catCardDiv {
    /* width: calc(20% - 10px); */
    width: 180px;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
  }
  .common-sub-cards-main-div {
    padding: 0px 50px;
  }
  .radiology-cards-main-div {
    background-color: #f0f5ff;
    padding: 50px 50px;
  }
  @media (max-width: 768px) {
    .catCardDiv {
      width: calc(100% - 10px);
      overflow: scroll;
    }
    .categoryContainer {
      padding: 24px;
    }
  }

  @media (max-width: 768px) {
    .scanCeBtnCol {
      flex-direction: column;
      align-items: flex-start;
    }

    .scanCeText {
      margin-bottom: 10px;
    }

    .scanSgtBtn {
      width: auto;
      margin-right: 0;
    }
    .scanCeContainer {
      padding: 9px;
      margin: 2px 12px;
    }

    .scanCeBtnCol {
      display: contents;
    }

    .scanCeText {
      color: #000;
      font-size: 24px;
      font-weight: 600;
      margin-right: 32px;
    }

    .scanSgtBtn {
      margin-right: 24px;
      margin-bottom: 12px;
    }
    .scanCeRow {
      overflow: scroll;
    }
    .labs-search-section-links {
      display: block;
    }
    .labs-search-section-links button {
      margin: 2px;
    }
    .scanCenterCardButton {
      width: 242px;
    }
    .radiology-heading-div p {
      font-size: 24px !important;
    }
    .radiology-heading-div {
      padding: 0px 10px !important;
    }
    .healthCards {
      padding: 1rem;
      flex-direction: column;
    }
    .radiology-cards-main-div {
      padding: 0px 10px;
    }
    .radiology-sub-cards-title-div h5 {
      font-size: 24px !important;
    }
    .radiology-sub-cards-title-div {
      padding: 1rem 0rem !important;
      margin-bottom: 0px !important;
    }
    .common-sub-cards-title-div h5 {
      font-size: 24px !important;
    }
    .common-sub-cards-main-div {
      padding: 0px 10px;
    }
    .common-sub-cards-title-div {
      margin-top: 10px !important;
      margin-bottom: 10px !important;
    }
    .textContent {
      display: flex;
    }
  }
  .view-all {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    button {
      color: #9747ff;
      background: #fff;
      height: 40px;
      border: 1px solid #9747ff;
      padding: 0px 50px;
      border-radius: 4px;
    }
    text-align: center;
  }
  .ant-select-selector {
    justify-content: center;
    align-items: center;
  }

  .ant-input-search-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .scanCeRow {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 14px;
      gap: 12px;
      overflow-x: scroll;
    }

    .mainCard {
      width: 100%;
    }
  }

  /* New CSS */
  .radiology-heading-div {
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
  .Scan-Category-MultiCarouselModal {
    padding: 0px 50px;
  }
  .healthCards {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;

    & > div {
      width: 100%;
    }
  }
  .radiology-sub-cards-title-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    h5 {
      font-size: 32px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #141414;
    }
    .radiology-sub-cards-All-btn {
      font-size: 20px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #252b61;
      cursor: pointer;
    }
  }
  .common-cards-main-div {
    height: 550px;
    width: 100%;
    background: #f0f5ff;
  }

  .common-sub-cards-title-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 83px;
    h5 {
      font-size: 32px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #141414;
    }
    button {
      font-size: 20px;
      letter-spacing: 0.02em;
      font-weight: 600;
      font-family: Outfit, sans-serif;
      color: #252b61;
      cursor: pointer;
    }
  }

  /* New CSS */

  .scan-list-data-content {
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
  .filter-List-module-div {
    width: 100%;
  }
  .scan-list-data-div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .filter-byname-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }

  /* price Filter Module */
  .filter-by-name {
    width: 60%;
  }
  .selector-filter-sub-module-div div.ant-select-selector {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 44px;
    border: 1px solid #1a1a1a;
    display: flex;
    width: 215px;
    box-shadow: none;
  }
  .ant-select-selector {
    height: 63.741px !important;
  }
  .ant-select-arrow {
    top: 70%;
    margin-top: -18px;
  }
  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    margin-top: 10%;
    cursor: pointer;
  }
  .ant-select-selection-item {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    letter-spacing: 0.02em;
    font-size: 18px;
    color: #9a9898;
    padding: 0 10px;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item {
    cursor: pointer;
  }

  .ant-select-show-search.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #000;
  }
  /* =========================*/
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
  .pagination-box-sec-pha {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    button {
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
  }
  .allScansNearBy-main-div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-wrap: wrap;
    gap: 15px;
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

  @media (max-width: 768px) {
    .filter-List-module-div {
      width: 100%;
    }
    .scan-list-data-div {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .scan-list-data-content {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }
    .all-scans-list-content {
      padding: 10px 10px;
    }
    .filter-byname-div {
      display: flex;
      flex-direction: column;
    }
    .filter-by-name {
      width: 100%;
    }
    .ant-select-show-search.ant-select:not(.ant-select-customize-input)
      .ant-select-selector {
      width: 100%;
      margin-top: 15px;
    }
    .ant-select {
      width: 100%;
    }
    .filter-module-div {
      width: 100%;
      border: none;
    }
    .pharmacy-search-fields {
      margin-top: 10px;
      padding: 0px 10px !important;
    }
    .ant-select-selector {
      margin-top: 0px;
      width: 100%;
    }
    .PriceFilterModule {
      display: none;
    }
    .ant-select-show-search.ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      input {
      margin-top: 5% !important;
      cursor: pointer;
    }
    /* Search Popup Card */
    .search-popup {
      width: 100% !important;
      left: 0rem !important;
    }
  }
`;
