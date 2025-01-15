import styled from "styled-components";

export const DashboardMenuStyled = styled.div`
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
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 150px;
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
  @media (max-width: 768px) {
    .side-bar-container {
      display: none;

      transition: left 0.3s ease;
    }
    .side-bar-container.show {
      display: block;
      // transition: left 0.3s ease;
    }
    .custome-btn {
      margin-left: 30px;
      margin-bottom: 1rem;
    }
    .accordion-button {
      display: contents;
    }
  }
`;
