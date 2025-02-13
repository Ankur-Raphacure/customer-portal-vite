import styled from "styled-components";

export const RecentOrdersStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 170vh;
  overflow-y: scroll;

  .consultation-card {
    width: 100%;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fff;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .consultation-card p {
    margin: 0;
  }

  .consultation-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .avatar-placeholder img {
    width: 100%;
    height: 100%;
  }
  .avatar-placeholder {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .consultation-info h2 {
    margin: 0;
    font-size: 16px;
  }

  .consultation-info p {
    margin: 4px 0 0 0;
    color: #757575;
    font-size: 14px;
    text-transform: uppercase;
  }

  .consultation-details {
    display: flex;
    justify-content: space-between;
  }

  .detail p {
    margin: 0;
    font-size: 14px;
    color: #757575;
  }

  .consultation-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .doctor-image {
    max-width: 80px;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .status-icon,
  .status-icon-scheduled,
  .status-icon-cancelled {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #8bc34a;
  }

  .status-icon-scheduled {
    background-color: #fb9600;
  }

  .status-icon-cancelled {
    background-color: #f6360b;
  }

  .book-again-btn,
  .reorder-btn {
    padding: 8px 16px;
    background-color: #9747ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .view-details-btn {
    padding: 8px 16px;
    outline: 1px solid #9747ff;
    background-color: #fff;
    color: #9747ff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .book-again-btn:hover {
    background-color: #6200ea;
  }

  .chat-btn {
    display: none; //we have to enable this
    padding: 8px 16px;
    background-color: #40d7bf;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .eprescription-btn {
    padding: 8px 16px;
    background-color: #faab98;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  ///

  .orderDetails {
    font-family: Poppins;
    max-width: 500px;
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #fff;
    z-index: 9999999;
    padding: 15px;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
  }

  .closeBtn {
    position: absolute;
    right: 0;
    cursor: pointer;
  }

  .orderDetails h2 {
    font-size: 1.2rem;
    font-weight: normal;
  }

  .orderDetails h3 {
    font-size: 1rem;
    font-weight: normal;
  }

  .order-status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }

  .order-status-step {
    display: flex;
    align-items: center;
    margin: 0; /* Reduced margin */
  }

  .order-status-line-step {
    display: flex;
    align-items: flex-start;
    margin: 0; /* No margin for line step */
  }

  .order-status-icon,
  .order-status-label-empty {
    width: 24px; /* Ensure icons and empty div have the same width */
    display: flex;
    justify-content: center;
  }

  .order-status-line {
    width: 2px;
    height: 10px;
    background-color: #45a834;
  }

  .order-status-label {
    font-size: 14px;
    margin-left: 5px; /* Reduced margin */
  }

  .order-status-label-empty {
    height: 10px; /* Ensure it matches the line height */
  }

  .details {
    margin-bottom: 0.5rem;
  }

  .order-details-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .order-details-row:first-child {
    border-top: 1px solid #e0e0e0;
  }

  .order-details-label {
    font-size: 14px;
    color: #757575;
  }

  .order-details-value {
    font-size: 14px;
    color: #333;
  }

  .badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
  }

  .badge-blue {
    background-color: #b3e5fc;
    color: #0277bd;
  }

  .badge-purple {
    background-color: #e1bee7;
    color: #7b1fa2;
  }

  .customer-details {
  }

  .customer-section {
    margin-bottom: 16px;
  }

  .customer-label {
    font-size: 14px;
    color: #757575;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .customer-value {
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
  }

  .address-icon {
    margin-right: 8px;
    color: #757575;
  }

  .product-card {
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 8px 0;
  }

  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 16px;
  }

  .product-details {
    flex: 1;
  }

  .product-title {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin-bottom: 4px;
  }

  .product-quantity {
    font-size: 12px;
    color: #757575;
    margin-bottom: 8px;
  }

  .product-pricing {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .original-price {
    font-size: 12px;
    color: #757575;
    text-decoration: line-through;
    margin-right: 8px;
  }

  .discounted-price {
    font-size: 16px;
    font-weight: bold;
    color: #9c27b0;
  }

  .pricing-summary {
  }

  .pricing-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .pricing-label {
    font-size: 14px;
    color: #333;
  }

  .pricing-value {
    font-size: 14px;
    color: #333;
  }

  .total-label {
    font-weight: bold;
    color: #9c27b0; /* Purple color for emphasis */
  }

  .total-value {
    font-weight: bold;
    color: #9c27b0; /* Purple color for emphasis */
  }
  @media screen and (max-width: 480px) {
    .consultation-footer {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
  @media screen and (max-width: 380px) {
    .consultation-header {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .consultation-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
