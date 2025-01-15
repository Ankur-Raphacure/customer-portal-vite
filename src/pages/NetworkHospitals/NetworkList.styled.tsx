import styled from "styled-components";

export const NetworkListStyled = styled.div`
  width: 100%;
  .networkWrapper {
    width: 100%;
    padding-bottom: 100px;
    background: #fff;
  }

  .listContainer {
    padding: 0px 2.5rem;
  }

  .custom-card-height {
    height: 4rem;
    margin-top: 3rem;
  }

  .input-group-text {
    color: #fff;
    background: #9474ff;
  }

  .custom-btn {
    display: flex;
    height: 3rem;
    justify-content: space-between;
    gap: 1rem;
    align-items: end;
  }

  .custom-edit-btn {
    color: #808080;
    background: #f6f6f6;
  }

  .customr-h5-edit {
    color: #183b56;
  }

  .custome-parameter {
    color: #00c9aa;
  }

  .custome-name {
    gap: 1rem;
  }

  .custome-card-body {
    display: flex;
    justify-content: space-between;
  }

  .custome-book-btn {
    color: #ffffff;
    background: #9474ff;
  }

  .custome-name-2 {
    text-wrap: nowrap;
  }

  .custome-name-1 {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .rtn-num {
    color: #000000;
    opacity: 0.5;
    font-weight: 500;
    font-size: 1rem;
  }

  .rating-div {
    justify-content: flex-start;
    gap: 0.188rem;
  }

  .png-btn {
    display: flex;
    width: 40px;
    height: 36px;
    min-width: 40px;
    padding: 7.8px 16.16px 9px 16.14px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--new-Athens-Gray, #ebeef3);
    box-shadow: 0px 3px 8px 0px rgba(50, 50, 93, 0.07);
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .custom-card-height {
      flex-direction: column;
      height: auto;
      margin-top: 1.5rem;
    }

    .custom-btn {
      flex-direction: column;
      height: auto;
      gap: 0.5rem;
      align-items: start;
    }

    .card {
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 576px) {
    .listContainer {
      padding: 0px 1rem;
    }

    .custom-edit-btn {
      font-size: 0.875rem;
      padding: 0.5rem;
    }

    .input-group {
      flex-direction: column;
    }

    .input-group .form-control {
      margin-bottom: 0.5rem;
      width: 100%;
    }

    .input-group .input-group-text {
      width: 100%;
    }
  }
`;
