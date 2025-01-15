import styled from "styled-components";

export const UniversalStyled = styled.div`
  .search-list-sec img {
    height: 30px;
  }
  .search-list-sec {
    position: absolute;
    background: #fff;

    max-height: 400px;
    overflow: scroll;
    width: 95%;
    // margin-left: -133px;
    border-radius: 10px;
    @media (max-width: 760px) {
      margin-left: 0;
      width: auto;
    }
  }
  .search-sec01 {
    font-weight: bold;
    text-transform: capitalize;
  }
  .search-list-sec-box {
    display: flex;
    gap: 30px;
    padding: 10px 10px;
    cursor: pointer;
    p {
      margin-bottom: 0px;
    }
  }
  .search_icon_sec img {
    opacity: 0.6;
    height: 20px;
    position: relative;
    top: 5px;
  }
  .search_icon_sec1 img {
    opacity: 0.6;
    height: 20px;
  }
  .search-list-sec-box:hover {
    background: #f4f2f5;
  }
  .input-group {
    input[aria-describedby="basic-addon2"].input-search-filed-div {
      width: fit-content;
    }
  }
  .search-component-sec input {
    height: 40px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    padding-left: 5px;
    width: 280px;
  }

  .search-component-sec button {
    background: #f7f9fb;
    border: none;
  }
`;
