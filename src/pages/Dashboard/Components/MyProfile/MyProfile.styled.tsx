import styled from "styled-components";

export const MyProfileStyled = styled.div`
  padding: 20px 0px;
  width: 100%;
  .full-profile-sec-all {
    width: 85%;
  }
  .orders-header {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-bottom: 10px;
    gap: 1rem;
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

  .depends-users-all {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
    .depends-user-box {
      justify-content: space-between;
      padding: 12px;
      border-radius: 5px;
      border: 1px solid rgba(151, 71, 255, 0.2);
      background: #f8f3ff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      display: flex;
      display: flex;

      @media (max-width: 450px) {
        justify-content: space-evenly;
        flex-direction: column-reverse;
        width: 100%;
      }
    }
    .user-box-left {
      display: flex;
      gap: 12px;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 450px) {
        flex-direction: column;
      }
    }
    .box-left-img {
      width: fit-content;
      height: fit-content;
    }
    .box-left-img > img {
      max-width: 5rem;
      border-radius: 50%;
    }
    .box-left-info {
      > p {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.48px;
        margin-bottom: 10px;
      }
      div p {
        margin-bottom: 5px;
        color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: grid;
        opacity: 0.5;
        grid-template-columns: 60px calc(100% - 60px);
      }
    }
  }
  .depends-users-all .add-new-member-sec {
    min-height: 125px;
    justify-content: center;
    padding-top: 36px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
  }
  .default-add-radio-btn {
    input {
      cursor: pointer;
      height: 1.7rem;
      width: 1.2rem;
    }
  }
  .user-box-right {
    color: #078c5f;
    border: 1px solid #000;
    height: 27px;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    @media (max-width: 450px) {
      width: fit-content;
    }
  }
  @media (max-width: 768px) {
    .depends-users-all {
      grid-template-columns: 1fr;
    }
    .search-input {
      width: 100%;
    }
    .full-profile-sec-all {
      width: 100%;
    }
  }
`;
