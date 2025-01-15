import styled from "styled-components";

export const TableManagerStyled = styled.div`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > div {
    padding: 0.5rem;
    border-bottom: 1px solid #d9d9d9;
  }
  .dropdownWrapper {
    flex: 1 1 0%;
    padding: 8px;
    margin-bottom: 4px;
    border-radius: 4px;
    border: 1px solid #000;
  }
  .dropdownWrapper:hover {
    background-color: #f0f0f0;
  }
  .dropdownWrapper > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
  }
`;
