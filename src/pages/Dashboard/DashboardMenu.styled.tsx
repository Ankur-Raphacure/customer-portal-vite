import styled from "styled-components";

export const DashboardMenuStyled = styled.div`
  font-family: Outfit, sans-serif;
  .MuiSvgIcon-fontSizeMedium {
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
    margin-right: 20px;
  }
  .side-bar-container button.accordion-button {
    font-size: 18px;
    color: #595555;
    border: none;
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
  }
  .side-bar-container {
    /* padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 150px; */
    .accordion-item {
      background: #252b61;
      position: relative;
      border-bottom: 1px solid #ccc;
      h2.active {
        button {
          background: #2c3262;
          color: #fff;
        }
      }
      button {
        background: #252b61;
        color: #fff;
        border-bottom: 0;
        padding: 15px 30px;
      }
    }
    h2 {
      color: #808080;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      /* border-bottom: 1px solid #e2e2e2; */
      margin-bottom: 0px;
      padding-top: 5px;
      padding-bottom: 5px;
      svg {
        margin-right: 10px;
        height: 24px;
        width: 24px;
      }
    }

    h2.active,
    h2.active button,
    h2 button:hover {
      color: #9747ff;
    }
  }
  .side-bar-container button.accordion-button::after {
    width: 18px;
    height: 15px;
    display: none;
  }
  .accordion-item {
    border: none;
  }
  .header-div {
    border: none;
  }
  button.accordion-button {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 10px;
  }
  @media (max-width: 576px) {
    .side-bar-container {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .side-bar-container {
      transition: left 0.3s ease;
    }
    .side-bar-container.show {
      display: block;
      // transition: left 0.3s ease;
    }
    .custome-btn {
      /* margin-left: 30px; */
      /* margin-bottom: 1rem; */
    }
    .accordion-button {
      display: contents;
    }
  }
  .activeBanner {
    width: 10px;
    height: 100%;
    background: green;
    position: absolute;
    z-index: 9;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 0 30px 30px 0;
  }
  .topButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .back {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      font-size: 1.3rem;
    }
  }
  .bannerProfileOptions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    .custome-btn {
      color: black;
    }
    button {
      border: none;
      background: transparent;
    }
    img {
      max-width: 50px;
    }
    .dp {
      border-radius: 50%;
    }
    button:has(.dp) {
      border: 4px solid #008080;
      border-radius: 50%;
      padding: 0px;
    }
  }
  .accordion-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 700px) {
    .topButtons {
      display: none;
    }
    .accordion-item {
      background: #fff;
      h2 > svg {
        display: none;
      }
    }
  }
  @media screen and (max-width: 700px) {
    .side-bar-container {
      .accordion-item {
        background: #fff;
        button {
          background: #fff;
          color: #616161;
        }
        h2.active {
          padding: 0;
          background: #eee;
          color: #616161;

          button {
            background: #eee;
            color: #616161;
          }
        }
      }
    }
  }
`;
