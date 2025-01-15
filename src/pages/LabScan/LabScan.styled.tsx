import styled from "styled-components";

export const LabScanStyled = styled.div`
  .main-card {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* display: grid; */
    gap: 26px;
    margin-top: 24px;
    padding: 0 1.5rem;
  }
  .Container-1 {
    display: flex;
    align-items: center;
  }
  .container-2 {
    /* width: 50rem; */
    height: auto;
  }
  .filter-card {
    width: 20rem;
    height: auto;
    flex-shrink: 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
  }
  .input-group {
    width: 35rem;
    margin: auto;
  }
  ul.pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li.page-item {
    margin: 0 5px;
  }

  a.page-link {
    text-decoration: none;
    color: #007bff;
    cursor: pointer;
    border: none;
  }

  a.page-link:hover {
    text-decoration: underline;
  }

  li.page-item.disabled a.page-link {
    color: #6c757d;
    pointer-events: none;
  }

  li.page-item.active a.page-link {
    font-weight: bold;
    text-decoration: underline;
  }
  .PaginationWrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;
