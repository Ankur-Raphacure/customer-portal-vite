import styled from "styled-components";

export const KeyAspectsStyled = styled.div`
  padding: 2rem;
  width: 100%;

  .card {
    width: 100%;
  }
  .heding-div {
    margin-top: 2rem;
    width: 100%;
    font-size: 24px;
    letter-spacing: 0.06em;
    line-height: 31px;
    font-weight: 800;
    color: #2f2f2f;
  }
  .heding-div {
    span {
      color: #fc7cff;
    }
  }
  .img-div {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5ab5ff;
  }
  .img1-div img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .text-div h6 {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    color: #000;
  }

  .main-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      gap: 4rem;
    }
  }

  .sub-div {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
    }

    @media (min-width: 1024px) {
      gap: 2rem;
    }
  }

  .radio-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-check {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-check-label {
    font-size: 14px;
    letter-spacing: 0.06em;
    font-weight: 500;
    color: #000;
    margin-right: 2.5rem;
  }

  .form-check-input {
    width: 20px;
    height: 20px;
    border: 2px solid #9747ff;
  }
  .sbn-btn {
    margin-top: 2rem;
    width: 30%;
    position: relative;
    border-radius: 2px;
    background-color: #9747ff;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    font-size: 12px;
    color: #fff;
    font-family: Poppins;
  }
  .btn-div {
    display: flex;
    justify-content: end;
  }
  .message-div h6 {
    width: 195px;
    font-size: 14px;
    font-weight: 600;
    color: #ff0000;
  }
  .sub-message-div {
    display: flex;
    align-items: center;
  }
  .sub-message p {
    font-size: 14px;
    font-weight: 500;
    color: #7e6f6f;
    margin-right: 1rem;
  }
  .recommendations p {
    font-size: 14px;
    color: #4000bf;
  }
`;
