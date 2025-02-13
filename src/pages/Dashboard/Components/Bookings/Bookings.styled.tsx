import styled from "styled-components";

export const BookingsStyled = styled.div`
  // font-family: Poppins;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333;
  padding: 20px 0px;
  width: 100%;
  gap: 1rem;
  .book-video-call-sec {
    button {
      background-color: #7c4dff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 10px;
      margin: auto;
      width: 50%;
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
  .orders-header {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-bottom: 10px;
    gap: 1rem;
  }
  .vendor-setails-sec-box {
    margin-top: 12px;
    display: block !important;
    p span {
      font-weight: 700;
    }
  }
  .search-container {
    display: flex;
    align-items: center;
  }

  .search-icon {
    color: #999;
    margin-right: 8px;
  }

  .search-input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    width: 330px;
    color: #8d8d8d;
    font-size: 12px;
    border-radius: 4px;
    border: 0.5px solid #dcdcdc;
    background: #fff;
    font-weight: 400;
    margin-right: 10px;
  }

  .orders-dropdown {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .year-select {
    margin-left: 5px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 120px;
    color: #808080;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 20px;
  }

  .appointment-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  .appointment-card-ledt-sec {
    width: 65%;
    height: 100%;
  }
  .appointment-card-left {
    display: flex;
    justify-content: space-between;
    height: 100%;
    gap: 30px;
  }
  .medicines-sec-box {
    margin-top: 20px;
    h4 {
      opacity: 0.7;
    }
  }
  .item-box-all {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
  .item-box {
    border-bottom: 1px solid #e2e2e2;
    padding: 5px;

    p {
      font-size: 14px;
    }
    img {
      width: 40px;
      height: 24px;
      border-radius: 4px;
    }
  }
  .view-all-items-sec {
    text-align: center;
    button {
      color: #333;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      padding: 8px;
      cursor: pointer;
      margin-top: 10px;
      width: 200px;
      font-size: 0.9em;
      border-radius: 2px;
      background: #fff;
      height: 44px;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    }
  }
  .appointment-card h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .appointment-card p {
    margin: 0;
  }

  .doctor-info {
    // display: flex;
    align-items: baseline;
    flex-direction: column;
    justify-content: start;
    width: 50%;
  }

  .doctor-info > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  .doctor-image {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }

  .doctor-details {
    display: flex;
    flex-direction: column;
  }

  .doctor-details h4 {
    margin: 0;
    font-size: 1.2rem;
  }

  .raise-issue-button {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 8px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 0.9em;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .appointment-details {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .appointment-details p {
    margin: 5px 0;
  }

  .appointment-details .btnWrapperDiv {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
  .status-green {
    color: #0d920a;
  }
  .status-red {
    color: #ff0000;
  }
  .status-yellow {
    color: #fbbc04;
  }

  .view-details-link,
  .download-invoice-link {
    color: #7c4dff;
    text-decoration: none;
    margin: 5px 0;
  }

  .appointment-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 28%;
  }

  .prime-button {
    background-color: #7c4dff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 100%;
  }

  .plain-button {
    color: #333;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 8px;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    font-size: 0.9em;
    border-radius: 2px;
    background: #fff;
    height: 44px;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }

  .payment-button-razorpay {
    background-color: rgb(19, 100, 241);
    color: #fff;
  }

  .payment-button-phonepe {
    background-color: #9747ff;
    color: #fff;
  }

  .orderDetails {
    // font-family: Poppins;
    max-width: 500px;
    width: 100%;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #fff;
    z-index: 999;
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

  .badge-green {
    background-color: #a1eebd;
    color: #1f4529;
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
  @media (max-width: 767px) {
    .appointment-card,
    .appointment-card-left {
      display: block;
    }
    .appointment-card {
      .appointment-card-ledt-sec,
      .doctor-info,
      .appointment-actions {
        width: 100%;
      }
    }
    .search-input {
      width: auto;
    }
    .orders-dropdown {
      display: block;
    }
    .year-select {
      width: auto;
      margin-left: 12px;
      margin-bottom: 12px;
    }
  }
  .imagesPreview {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  // Bookings Filters
  .bookings-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.75rem;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: start;
    }
  }

  .bookings-header h3 {
    font-family: "Outfit", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #333333;
    margin-bottom: 0;
  }

  .filters-container {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem 0;
  }

  .filter-dropdown {
    position: relative;
  }

  .filter-select {
    font-family: "Outfit", sans-serif;
    font-size: 0.875rem;
    padding: 0.75rem 2rem 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 30px;
    background-color: #ffffff;
    color: #4a5568;
    cursor: pointer;
    appearance: none;
    min-width: 10rem;
  }

  .filter-select:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  .filter-dropdown::after {
    content: "";
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 0.3rem solid transparent;
    border-right: 0.3rem solid transparent;
    border-top: 0.4rem solid #4a5568;
    pointer-events: none;
  }

  .sort-dropdown {
    /* margin-left: auto; */
  }

  @media (max-width: 768px) {
    .filters-container {
      flex-direction: column;
      align-items: stretch;
    }

    .sort-dropdown {
      margin-left: 0;
    }

    .filter-select {
      width: 100%;
    }
    .filters-container {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
  }
`;
