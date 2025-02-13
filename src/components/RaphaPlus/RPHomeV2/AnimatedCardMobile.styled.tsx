import styled from "styled-components";

export const MobileDropdown = styled.div`
  max-width: 100%;
  padding: 5px 16px;
  width: 100%;

  .info-content {
    display: none; /* Hidden by default */
    padding: 15px;
    margin-bottom: 10px;
    background-color: #eaf7f5;
    border-radius: 8px;
    font-size: 14px;
    font-family: Inter;
    color: #333;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 490px) {
      display: block; /* Only visible for mobile */
    }
  }

  .dropdown-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    background: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.3s ease;
  }

  .dropdown-item:hover {
    background: #eaf7f5;
  }

  .item-content {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .item-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .item-description {
    font-size: 0.9rem;
    color: #666;
  }

  .dropdown-content {
    margin-top: 5px;
    padding: 10px;
    font-size: 0.9rem;
    color: #444;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .dropdown-content.open {
    display: block;
  }

  .key-features-container {
    /* width: 28rem; */
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #a3dac226;

    &.active {
      background: #a3dac226;
    }

    h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      font-family: Inter;
      color: #011632;
    }

    .arrow-icon {
      margin-left: 5px;
      font-size: 1.2rem;
      color: black;
    }

    .key-features-list {
      margin-top: 10px;
      list-style: none;
      padding: 0;
      display: none;

      img.dropdown-icon {
        position: relative;
        height: 29.6px;
      }

      &.open {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      li {
        font-size: 14px;
        line-height: 22px;
        font-family: Inter;
        color: #3c4959;
        text-align: left;
      }
    }

    &.active .key-features-list {
      display: flex;
      flex-direction: row;
      margin-left: 16.8px;
      gap: 36px;
    }
  }
`;
