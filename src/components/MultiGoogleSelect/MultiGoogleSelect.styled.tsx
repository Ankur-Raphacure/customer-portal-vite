import styled from "styled-components";

export const MultiGoogleSelectStyled = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    margin-bottom: 0;
    font-weight: bold;
  }
  .search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .issues-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .issue-tag {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 7px;
    border: 2px solid #f9e9e9;
    color: #5a4a4a;
    font-size: 0.9em;
  }

  .issue-tag:hover {
    background-color: #f2e4e4;
  }

  .delete-icon {
    margin-left: 8px;
    cursor: pointer;
    background-image: none;
    color: #a05858;
    &:hover {
      color: #d17a7a;
    }
  }

  .searchIssues,
  .viewIssues {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .viewIssues {
    textarea {
      border: 1px solid #40a9ff;
      border-radius: 10px;
    }
  }
`;
