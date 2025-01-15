import styled from "styled-components";

export const SlotSelectionPopupstyled = styled.div`
  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }
  .timeslot-error {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: red;
  }
  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .doctor_slotModal.fade {
    z-index: 9999999;
  }

  .modal-header {
    border-bottom: none;
    padding-bottom: 0;

    .btn-close {
      --bs-btn-close-bg: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="35" height="32" viewBox="0 0 35 32" fill="none"><path d="M17.0109 2C8.71785 2 2.12598 8.2 2.12598 16C2.12598 23.8 8.71785 30 17.0109 30C25.3039 30 31.8957 23.8 31.8957 16C31.8957 8.2 25.3039 2 17.0109 2ZM17.0109 28C9.9937 28 4.25239 22.6 4.25239 16C4.25239 9.4 9.9937 4 17.0109 4C24.028 4 29.7693 9.4 29.7693 16C29.7693 22.6 24.028 28 17.0109 28Z" fill="%23444444"/><path d="M22.7531 23L17.0118 17.6L11.2705 23L9.56934 21.4L15.3106 16L9.56934 10.6L11.2705 9L17.0118 14.4L22.7531 9L24.4542 10.6L18.7129 16L24.4542 21.4L22.7531 23Z" fill="%23444444"/></svg>');
      --bs-btn-close-opacity: 1;
      --bs-btn-close-focus-shadow: none;
      width: 34px;
      height: 32px;
      background: transparent var(--bs-btn-close-bg) center/34px auto no-repeat;
      padding: 0;
    }
  }

  .modal-body {
    padding: 0 35px 28px 36px;
  }

  .dateselection-calendar {
    margin-top: 20px;

    .react-calendar {
      width: 100% !important;
    }
  }

  .timeslot-container {
    width: 100%;
    .timeslot-tab {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 27px;

      .preferredslottab {
        width: 50%;
        background: #f8f1f1;
        appearance: none;
        border: medium none;
        padding: 0;
        border-radius: 5px;
        height: 36px;

        &.selected {
          border: 1px solid #9747ff;
          background: #f2e8ff;
        }
      }
    }
  }

  .confirmbtn-wrap {
    margin-top: 22px;
    text-align: center;
    .confirmbtn {
      width: 100%;
      border-radius: 4px;
      background: #9747ff;
      height: 34.484px;
      color: #ffffff;
      font-size: 16px;
      line-height: 24px;
      appearance: none;
      border: medium none;
      height: 50px;
      width: 50%;
    }
  }
  .dateselection-container-primary {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;

    @media (max-width: 760px) {
      flex-direction: column;
    }
  }
`;
