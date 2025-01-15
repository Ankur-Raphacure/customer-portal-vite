import styled from "styled-components";

export const SideFilterModuleStyled = styled.div`
  padding: 10px 0px;

  .sort-dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 8px 0;
    z-index: 100;
    margin-top: 10rem;
  }

  .sort-option {
    padding: 8px 16px;
    cursor: pointer;
  }

  .sort-option:hover {
    background-color: #f0f0f0;
  }

  .main-filter-module-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .filter-by-type-div {
    padding: 0px 20px;
  }
  .alltests {
    max-height: 300px;
    overflow-y: scroll;
  }
  .filter-title-div {
    display: flex;
    align-items: center;
  }
  .filter-title-div p {
    color: #131313;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.3px;
    margin-bottom: 0px;
  }
  .clear-filter-btn button {
    color: #252b61;
    font-family: Outfit, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.21px;
    text-decoration-line: underline;
    text-decoration-style: solid;
  }
  .filter-by-title {
    color: #1e1e1e;
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.5px;
  }
  .select-checkbox-div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .select-checkbox-div input {
    height: 28px;
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  .select-checkbox-div p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    margin-bottom: 0px;
    color: #000;
    font-family: Poppins, serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.5px;
    cursor: pointer;
  }
  .select-checkbox-div label {
    margin-bottom: 0px;
  }
  .horizontal-line {
    width: 100%;
    height: 1px;
    background: #e8e8e8;
    margin: 20px 0;
  }
  .input-fields .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
      justify-content: center;
      & > div {
        margin: auto !important;
      }
    }
  }
  .range-slider > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-bottom: 0px;
  }
  .ant-slider-track {
    background: #252b61;
  }
  .ant-slider-handle {
    background: #252b61;
    border: solid 2px #252b61;
  }
  .CloseButton {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    justify-content: end;
  }

  .main-sort-filter-container {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .sort-filter-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    padding: 10px 0px;
    border: 1px solid #ddd;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .sort-section,
  .filter-section {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    color: black;
  }

  .sort-icon,
  .filter-icon {
    font-size: 18px;
    color: gray;
  }

  .divider {
    width: 1px;
    height: 24px;
    background-color: #ddd;
  }

  @media (min-width: 768px) {
    .MobileMenuButton,
    .CloseButton {
      display: none;
    }
  }
`;

export const SidebarMenu = styled.div<{ sMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.sMenuOpen ? "0" : "-100%")};
  width: 300px;
  height: 100%;
  background: #ffffff;
  transition: left 0.3s ease;
  z-index: 999;
  overflow-y: auto;
  padding: 1rem;

  .toggle-filter {
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    left: 0;
    position: static;
    height: auto;
    z-index: auto;
    overflow-y: visible;
    background: transparent;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 300px;
    margin-top: 6rem;
    height: 90%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  position: absolute;
  left: 10px;
  font-size: 34px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
