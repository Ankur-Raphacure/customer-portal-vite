import styled from "styled-components";

export const DoctorStyled = styled.div`
  width: 100%;
  font-family: Poppins, sans-serif;
  font-style: normal;
  background: #f6f9fd;

  .container-max {
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }
  .nearbyCards {
    padding: 0px;
  }
  .poppins-medium {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .error_message {
    font-size: 12px;
    color: #ff0000;
    margin-top: 0.5rem;
    margin-bottom: 0;
  }

  .filter_container {
    width: 22.34%;
    display: block;
    min-height: 100vh;
  }

  .content_container {
    width: 100%;
    max-width: 780px;
    padding-top: 1.563rem;
    padding-right: 1.563rem;
    padding-left: 1.938rem;

    .content_tabNav {
      width: 100%;
      display: inline-flex;
      background: #ffffff;
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      height: 3.313rem;
      box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
      white-space: nowrap;
    }

    .content_tabNav_item {
      appearance: none;
      background: #ffffff;
      font-size: 1rem;
      font-weight: 600;
      color: #000000;
      opacity: 0.7;
      padding: 0.938rem 0.875rem;
      height: 3.313rem;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 0.313rem solid #ffffff;
      flex: 1;
      text-align: center;

      :focus {
        outline: none;
      }
    }

    .content_tabNav_item.selected {
      border-bottom-color: #9747ff;
    }

    .virutual_doctors_list,
    .hospitals_list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 1.5rem 0;

      .error_vdoctorslist,
      .error_hospitallist {
        width: 100%;
        color: #ff0000;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        padding: 1.5rem 0;
      }
    }

    .virtual_doctors_search,
    .hospitals_search {
      width: 100%;
      .virtual_doctors_searchbox,
      .hospitals_searchbox {
        margin-top: 1.313rem;
        position: relative;

        .virtual_doctors_searchInput,
        .hospitals_searchInput {
          height: 2.688rem;
          border-radius: 0.625rem;
          border: none;
          width: 100%;
          padding-left: 1.25rem;
          padding-right: 5.625rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }

        .virtual_doctors_searchInput:focus,
        .hospitals_searchInput:focus {
          border-color: none;
          outline: none;
        }

        .virtual_doctors_searchbtn,
        .hospitals_searchbtn {
          position: absolute;
          right: 0.188rem;
          top: 0.125rem;
          border: none;
          height: 2.438rem;
          background-color: #426f09;
          color: #fff;
          width: 5.313rem;
          border-radius: 0.625rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }

    .virtual_doctors_pagination,
    .hospitals_pagination {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1.5rem;

      .virtual_doctors_perpage,
      .hospitals_perpage {
        display: flex;
        align-items: center;
        justify-content: flex_start;
        gap: 0.5rem;

        span {
          font-size: 14px;
          line-height: 20px;
          color: #000000;
          opacity: 0.8;
        }

        .virtual_doctors_dropdown,
        .hospitals_dropdown {
          color: #00c9aa;
          height: 2rem;
          border: 1px solid;
          border-radius: 0.313rem;
          background: #ffffff;
        }
      }
      .virtual_doctors_paginationbtns,
      .hospitals_paginationbtns {
        display: flex;
        align-items: flex_start;
        justify-content: flex_start;
        gap: 0.5rem;

        button {
          appearance: none;
          border: medium none;
          padding: 0;
        }

        .virtual_doctors_prevpage,
        .hospitals_prevpage {
          background: #9747ff;
          border-radius: 0.313rem;
          padding: 0.875rem;
          color: #ffffff;
          font-size: 0.75rem;
        }

        .virtual_doctors_nextpage,
        .hospitals_nextpage {
          background: #9747ff;
          border-radius: 0.313rem;
          padding: 0.875rem;
          color: #ffffff;
          font-size: 0.75rem;
        }
      }
    }
  }

  .right_container {
    width: 26.72%;
    margin-right: 1.75rem;
  }

  @media (max-width: 1200px) {
    .filter_container,
    .content_container,
    .right_container {
      width: 100%;
      margin-right: 0;
      padding: 1rem;
    }
  }

  @media (max-width: 768px) {
    .filter_container,
    .content_container,
    .right_container {
      width: 100%;
      margin-right: 0;
      padding: 0.5rem;
    }

    .content_tabNav {
      display: block;
      height: auto;
    }

    .content_tabNav_item {
      display: block;
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .virutual_doctors_list,
    .hospitals_list {
      flex-direction: column;
      gap: 1rem;
    }
    .filter_container {
      width: 22.34%;
      display: none;
      min-height: 100vh;
    }
    @media only screen and (max-width: 767px) {
      .content_container {
        margin-top: 30px;
      }
    }
  }
  .ant-input-group-wrapper {
    padding: 0 !important;
    .ant-input-wrapper.ant-input-group {
      height: 100%;
      width: 100%;
      input {
        height: 100%;
        width: 100%;
      }
    }
  }
  span.ant-input-group-addon button {
    height: 100%;
  }
`;
