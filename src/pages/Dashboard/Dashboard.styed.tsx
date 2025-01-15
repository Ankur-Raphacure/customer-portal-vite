import styled from "styled-components";

export const DashboardStyled = styled.div`
  width: 100%;
  background: #f6f9fd;
  .content-component {
    // width: 100%;
  }
  .right-menu-container {
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 #00000014;
    margin-left: 330px;
    margin-right: 5px;
    padding: 10px 20px 100px;
    width: calc(100% - 330px);
    min-height: 500px;
  }
  .book-appointemnt-sec {
    .content_container {
      width: 70.6%;
    }
  }
  .ant-table-container {
    th {
      font-size: 20px;
    }
    td {
      font-size: 18px;
    }
  }
  .coupon_code_section {
    width: 400px;
    .coupon_code_section_content {
      text-align: center;
      margin-top: 40px;
    }
    .error_message {
      margin-bottom: 0px;
      text-align: left;
      margin-top: 10px;
    }
    .input_coupon_code {
      width: 100%;
      height: 40px;
      border: 1px solid #e2e2e2;
      padding-left: 10px;
    }
    button {
      background-color: #7c4dff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 10px;
      width: 80%;
      margin-top: 30px;
    }
  }
  .wallets-sec-containter-table {
    tr th {
      border-bottom: 2px solid #e2e2e2;
    }
    tr td {
      border-bottom: 2px solid #e2e2e2;
    }
    tr {
      // box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    }
  }
  .book-now-sec-btn {
    border-radius: 5px;
    background: #9747ff;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 120px;
    height: 40px;
    border: none;
  }
  .left-menu-container {
    border-radius: 2px;
    height: 100vh;
    margin-bottom: 1rem;
    overflow: scroll;
    overflow-y: scroll;
    padding-top: 33px;
    position: fixed;
    width: 330px;
    background: #fff;
  }
  .all-full-dashboard {
    // display: grid;
    // grid-template-columns: 1fr 7fr;
    gap: 20px;
  }

  @media (max-width: 700px) {
    .right-menu-container {
      margin-left: 0px;
      width: 100%;
      min-height: auto;
    }

    .left-menu-container {
      height: 100%;
      position: static;
      width: 100%;
    }
    .table-resp {
      overflow: scroll;
      background-color: white;
    }
  }
`;
