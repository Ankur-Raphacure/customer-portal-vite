import styled from "styled-components";

export const GymModuleCardsStyled = styled.div`
  .sec-near-you {
    margin-left: 0px !important;
    padding-left: 0px !important;
  }

  .slot {
    background-image: url(/assets/images/labtests/slotbg.png);
    background: #f03e7f;
    width: 50%;
    float: right;
    font-size: 10px;
    color: #ffffff;
    font-weight: 100;
    text-align: center;
    opacity: 1;
  }

  .btn-view-text {
    color: #9747ff;
    text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid #9747ff;
    background: #ffffff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 46px;
    margin-top: 16px;
  }

  .heading-name-rating {
    margin-top: 10px !important;
  }

  .imgspace {
    height: auto;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;

    img {
      height: 12rem;
    }
  }

  .svg-info-icon {
    margin-top: -4px;
    margin-left: 5px;
  }

  .cardstyle {
    width: 100%;
    flex-shrink: 0;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  .cardstyle img {
    width: 100%;
    border-radius: 10px;
    max-height: 100%;
  }
  .rating {
    font-size: 10px;
    font-weight: 500;
  }

  .locatio-name-sec-row {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.5;
    margin-bottom: 7px;
  }
  .imgspace {
    height: 145px;
    img {
    }
  }
  .locatio-name-sec-row img,
  .locatio-name-sec-row svg {
    height: 14px;
    width: 14px;
    margin-right: 5px;
  }

  .rating-sec-box {
    text-align: right;
    margin-top: -26px;
  }

  .rating-sec-box-text {
    background: #89a80c;
    color: #ffffff;
    font-size: 10px;
    font-weight: 500;
    padding: 5px;
  }

  .heading-name-rating h3 {
    margin-top: 3px;
    font-size: 16px;
  }

  .more-labs-action-btns {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }

  .more-labs-action-btns button {
    flex: 1;
    height: 39px;
    margin-right: 6px;
  }

  .view-details-btn {
    border-radius: 10px;
    border: 1px solid #9747ff;
    background: #ffffff;
    box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);
    color: #9747ff;
    text-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .add-to-cart-btn {
    border-radius: 10px;
    background: #9747ff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    border: none;
  }

  .labs-near-sec-name {
    font-size: 12px;
    font-weight: 400;
  }

  .tests-include-list {
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
    margin-bottom: 6px;
  }

  .amount-box {
    font-size: 14px;
    font-weight: 600;
  }
  @media (max-width: 1023px) {
    .cardstyle {
      width: 100%;
    }

    .more-labs-action-btns {
      flex-direction: column;
    }

    .more-labs-action-btns button {
      width: 100%;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 767px) {
    .cardstyle {
      width: calc(300px - 20px);
      margin: 10px;
    }

    .more-labs-action-btns {
      flex-direction: column;
    }

    .more-labs-action-btns button {
      width: 100%;
      margin-bottom: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }
  .GymInfoHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .GymImage img {
    border-radius: 10px;
    width: 188px;
    height: 134px;
  }
  .GymDetails {
    flex: 1;
    margin-left: 20px;
  }
  .GymName {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    opacity: 0.99;
  }
  .Address {
    font-size: 12px;
    color: #000;
    opacity: 0.5;
  }
  .add-location-icon {
    font-size: 15px;
  }
  .Rating {
    display: flex;
    align-items: center;
    margin-top: 5px;
  }
  .Rating span {
    font-size: 14px;
    color: #000;
    opacity: 0.7;
  }
  .RatingStars span {
    color: #fbc02d;
    margin-right: 10px;
  }
  .HelpButton {
    display: flex;
    align-items: center;
    background-color: #c9dfff;
    border: none;
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    margin-top: 105px;
    color: #000;
  }
  .SubscriptionCards {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .gym-plan-Card {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    flex: 1;
    margin: 0 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  }
  .Badge {
    background-color: white;
    border-radius: 5px;
    padding: 3px 10px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  .PlanDetails {
    /* width: 13rem; */
    font-size: 16px;
    font-weight: 700;
    opacity: 0.8;
    color: #131212;
  }
  .Price {
    font-weight: bold;
    color: #adaab3;
    margin-bottom: 10px;
    font-size: 14px;
    text-decoration: line-through;
    font-weight: 600;
    margin-right: 10px;
  }
  .DiscountedPrice {
    font-size: 14px;
    font-weight: bold;
    color: #000;
    margin-bottom: 10px;
  }
  .Features {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
    font-size: 0.9rem;
    color: #555;
  }
  .FeatureItem {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    opacity: 0.6;

    &::before {
      border-radius: 100%;
      content: "✔️";
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #9b6cd7;
    }
  }
  .SelectButton {
    background-color: white;
    border: 1px solid #9747ff;
    border-radius: 5px;
    color: #9747ff;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
  }
  .BookNowButton {
    background-color: #9747ff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 20px;
  }
  .ModalBackground {
    background-color: #e0f7fa;
    padding: 20px;
    border-radius: 10px;
  }
  .close-popUp-module-btn {
    display: flex;
    justify-content: end;
    margin-bottom: 8px;
  }
  .close-popUp-module-btn button {
    border: none;
    border-radius: 100%;
    font-size: 20px;
    font-weight: 400;
  }

  .SubscriptionCardsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: 14rem;
    overflow-y: scroll;
  }
  .SubscriptionCardsContainer-1 {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .SubscriptionCard {
    /* flex: 1 1 calc(33.333% - 16px); */
    flex: 1 1 calc(25% - 16px);
    box-sizing: border-box;
  }
`;
