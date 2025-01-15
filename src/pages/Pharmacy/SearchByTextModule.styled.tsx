import styled from "styled-components";

export const SearchByTextModuleStyled = styled.div`
  width: 100%;
  .pharmacy-search-fields {
    display: flex;
    justify-content: center;
    /* margin-top: 40px; */
  }
  .search-bar {
    height: 63.741px;
    display: flex;
    align-items: center;
    background: #f8f8f8;
    box-shadow: 4px 6px 19px 0px rgba(0, 0, 0, 0.18);
    border: 1px solid #1a1a1a;
    border-radius: 50px;
    padding: 10px 20px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .mic-icon {
    background-color: #ffffff;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
  }
  .searchicon {
    font-size: 38px;
    color: #252b61;
    cursor: pointer;
  }
  .search-icon {
    background-color: #92bdf6;
    color: #252b61;
    padding: 8px;
    border-radius: 50%;
  }

  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    letter-spacing: 0.02em;
    font-size: 18px;
    color: #9a9898;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    .search-bar {
      padding: 8px 16px;
      max-width: 100%;
    }

    .icon {
      font-size: 18px;
    }

    .search-input {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .search-bar {
      max-width: 100%;
    }
    .pharmacy-search-fields {
      padding: 10px 10px !important;
    }

    .search-input {
      font-size: 16px;
    }
  }

  @media (max-width: 391px) {
    .pharmacy-search-fields{
      margin-top: unset;
    }
  }
`;
