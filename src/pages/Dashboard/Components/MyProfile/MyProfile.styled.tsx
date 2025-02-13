import styled from "styled-components";

export const MyProfileStyled = styled.div`
  padding: 20px 0px;
  width: 100%;
  font-family: Outfit, sans-serif;
  .full-profile-sec-all {
    width: 100%;
  }
  .orders-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      background: #fff;
      box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;

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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      & > p {
        color: #000;
        font-size: 20px;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.48px;
        margin-bottom: 10px;
      }
      div p {
        margin-bottom: 5px;
        color: #000;
        font-size: 16px;
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
    color: #1a1a1a;
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
  .addMemberBtn {
    background-color: #252b61;
    padding: 15px 20px;
    border-radius: 30px;
    border: none;
    color: #fff;
  }

  // Profile Card Styles
  .profile-card {
    font-family: "Outfit", sans-serif;
    background: white;
    border-radius: 16px;
    padding: 24px;
    max-width: 800px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* width: max-content; */
  }

  span.title {
    font-size: 18px;
    font-weight: 500;
  }

  .profile-header {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  .avatar-section {
    flex-shrink: 0;
  }

  .avatar {
    width: 96px;
    height: 96px;
    background-color: #e5e5e5;
    border-radius: 50%;
  }

  .user-info {
    flex-grow: 1;
  }

  .user-info h1 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 8px 0;
  }

  .user-meta {
    font-size: 18px;
    color: #666666;
    margin-bottom: 8px;
  }

  .user-dob {
    font-size: 18px;
    color: #666666;
  }

  .edit-button {
    background: white;
    border: 2px solid #1a1a1a;
    border-radius: 50px;
    padding: 8px 24px;
    font-family: "Outfit", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
  }

  .edit-button:hover {
    background: #f5f5f5;
  }

  .edit-icon {
    font-size: 20px;
  }

  .contact-info {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    padding-top: 1.5rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 18px;
    color: #666666;
  }

  .contact-icon {
    font-size: 24px;
    color: #666666;
  }

  @media (max-width: 600px) {
    .profile-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .edit-button {
      margin-top: 16px;
    }

    .contact-info {
      align-items: center;
      flex-direction: column;
    }
  }
`;
