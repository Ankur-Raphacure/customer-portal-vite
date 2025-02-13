import styled from "styled-components";

export const BookingCardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.05);
  margin: 0.625rem 0;
  gap: 3rem;
  cursor: pointer;
  width: 100%;
  font-family: Outfit, sans-serif;
  border: 1px solid #ddd;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    min-width: 18rem;
    max-width: 50%;

    .medicines-sec-box {
      .item-box {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        img {
          width: 7rem;
          height: 100%;
        }
        .med-name {
          font-weight: bold;
        }
      }
      .item-box-all {
        max-height: 220px;
        overflow-y: scroll;
      }
    }

    .appointment-details {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      width: 100%;
    }

    .detailsDiv {
      width: 100%;
      p {
        display: flex;
        justify-content: space-between;
      }
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

    .card-info {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      flex-direction: row;
      width: 100%;

      img,
      .default-image {
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        object-fit: cover;
      }

      & > img {
        width: 5rem;
        height: 5rem;
      }

      .default-image {
        color: #666;
      }

      .details {
        h2 {
          font-size: 1.5rem;
        }
        flex-direction: column;
      }
    }

    .actions {
      display: grid;
      gap: 0.75rem;
      grid-template-columns: 1fr 1fr;
      place-items: end;
      width: 100%;
      & > *:last-child:nth-child(odd) {
        grid-column: 1 / -1; /* Spans from the first to the last column */
        width: 100%;
      }
      @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr;
      }
      button {
        height: max-content;
      }
      .eprescription-btn {
        padding: 8px 16px;
        background-color: #faab98;
        color: #fff;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
    }
  }

  .card-right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5rem;
    @media screen and (max-width: 856px) and (min-width: 700px) {
      flex-direction: column-reverse;
      gap: 1rem;
    }

    .appointment-details {
      width: 100%;
    }

    .detailsDiv {
      width: 100%;
      p {
        font-size: 1.25rem;
        display: flex;
        justify-content: space-between;
      }
    }
    .booking-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .info-row {
        display: flex;
        gap: 3rem;
      }
    }

    .action-icons {
      display: flex;
      gap: 1rem;
      align-self: flex-start;
    }
  }

  .actions {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    gap: 1rem;

    & > div {
      width: 100%;
    }

    button {
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      width: 100%;
      transition: all 0.2s ease;
    }

    .chat-btn {
      background: transparent;
      border: 1px solid #ddd;
      color: #333;

      &:hover {
        background: #f5f5f5;
      }
    }

    .payment-actions {
      button {
        margin: 0;
      }
    }

    .schedule-btn {
      background: #1a237e;
      border: none;
      color: white;

      &:hover {
        background: #0d147b;
      }
    }
  }

  .action-icons {
    display: flex;
    gap: 0.938rem;
    color: #666;
    position: relative;

    svg {
      font-size: 1.25rem;
      cursor: pointer;

      &:hover {
        color: #333;
      }
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      right: 0;
      background: #ffffff;
      border-radius: 0.5rem;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
      min-width: 12rem;
      padding: 0.5rem 0;
      z-index: 1000;
      display: none;

      &.show {
        display: block;
        right: 0;
        margin-right: 1.125rem;
      }

      .dropdown-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        color: #333;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: #f5f5f5;
        }

        svg {
          font-size: 1rem;
          color: #666;
        }
      }
    }
  }
  @media screen and (max-width: 700px) {
    .card-left {
      max-width: 100%;
      width: 100%;
      .actions {
        grid-template-columns: 1fr 1fr;
      }
    }
    .card-right {
      display: none;
    }
  }

  .borderShadow {
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
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
  .doctor-image {
    max-width: 80px;
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
  .price {
    font-size: 16px;
    font-weight: bold;
  }
  .eprescription-btn {
    padding: 8px 16px;
    background-color: #faab98;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
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
  .chat-btn {
    display: none; //we have to enable this
    padding: 8px 16px;
    background-color: #40d7bf;
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
  .book-again-btn,
  .reorder-btn {
    padding: 8px 16px;
    background-color: #9747ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
