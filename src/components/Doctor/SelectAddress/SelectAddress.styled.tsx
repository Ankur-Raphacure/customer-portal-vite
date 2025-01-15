import styled from "styled-components";

export const SelectAddressStyled = styled.div`
  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }
  .addresslist-inputspan {
    cursor: pointer;
  }

  .modal-header {
    padding-bottom: 28px;
    border-bottom: none;

    .modal-title {
      font-size: 14px;
      line-height: 21px;
      color: #a58888;
      padding-left: 23px;
    }

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
    height: 60%;
    padding: 0;
  }

  .addresslist-label {
    padding: 16px 24px 16px 39px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:first-child {
      padding-top: 0;
    }

    .addresslist-input {
      accent-color: #9747ff;
      width: 21px;
      height: 20px;

      appearance: none;
      width: 21px;
      height: 20px;
      border-radius: 50%;
      background-clip: content-box;
      border: 1px solid rgba(0, 0, 0, 1);
      background-color: #d9d9d9;

      &:checked {
        background-color: #9747ff;
        padding: 4px;
        border: 1px solid rgba(0, 0, 0, 1);
        box-shadow: inset 0 0 0 4px #d9d9d9;
      }
    }

    .addresslist-text {
      font-size: 12px;
      line-height: 14px;
      color: #867070;
      cursor: pointer;
      padding-left: 10px;
    }
  }

  .error {
    font-size: 16px;
    color: #ff0000;
    padding-left: 23px;
  }
  @media (max-width: 768px) {
    .modal {
      padding: 1rem;
    }
  }
`;
