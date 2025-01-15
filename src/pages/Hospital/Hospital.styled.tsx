import styled from "styled-components";

export const HospitalStyled = styled.div`
  width: 100%;
  font-family: Poppins, sans-serif;
  font-style: normal;
  background: #f6f9fd;

  .container-max {
    max-width: 96rem;
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

  .hospital_container {
    background: #f6f9fd;
    padding: 0 !important;

    .filter_container {
      width: 22.34%;
      display: block;
      min-height: 100vh;
    }

    .hospital_listcontainer {
      width: 100%;
      padding: 18px 12px 0 19px;

      @media only screen and (min-width: 1024px) {
        padding: 37px 23px 0 38px;
      }

      .hospital_header {
        background: #fcfcfc;
        border-radius: 5px;
        padding: 26px 33px 17px 11px;

        @media only screen and (min-width: 1024px) {
          padding: 46px 65px 35px 22px;
        }
      }

      .hospital_detail {
        .hospital_list {
          width: 100%;
        }

        .hospital_availablelist {
          width: 41.1%;
        }

        .hospital_search {
          .hospital_searchbox {
            margin-top: 1.313rem;
            position: relative;

            .hospital_searchInput {
              height: 2.688rem;
              border-radius: 0.625rem;
              border: none;
              width: 100%;
              padding-left: 1.25rem;
              padding-right: 5.625rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }

            .hospital_searchInput:focus {
              border-color: none;
              outline: none;
            }

            .hosplital_searchbtn {
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

        .hospital_doctorstoppanel {
          margin-top: 1.313rem;
          margin-bottom: 1.375rem;

          .hospital_doctorstitle {
            font-size: 1.125rem;
            line-height: 1.75rem;
            opacity: 0.8;
          }

          .hospital_doctorsfilter {
            .dropdown-toggle {
              height: 3rem;

              background: #ffffff;
              border-radius: 10px;
              border: 1px solid rgba(0, 0, 0, 0.1);

              &:after {
                display: none;
              }

              .dropdown-text {
                opacity: 0.6;
                font-size: 0.625rem;
                line-height: 15px;
              }

              .dropdown-icon {
                display: inline-block;
                width: 14px;
                height: 15px;
                margin-left: 7px;
              }
            }

            .dropdown-item {
              font-size: 0.875rem;
              line-height: 1.25rem;
              color: rgba(0, 0, 0, 0.6);

              &.active,
              &:active {
                color: #ffffff;
                background-color: #9747ff;
              }
            }
          }
        }

        .hospital_doctorslist {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 1.5rem;

          .error_doctorslist {
            width: 100%;
            color: #FF0000;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            padding: 1.5rem 0; 
          }
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .hospital_container .hospital_listcontainer {
      width: 100%;
    }
    .hospital_container .filter_container {
      display: none;
    }
    .hospital_container .hospital_listcontainer .hospital_header {
      margin-top: 50px;
      padding: 0;
    }
  }

  @media only screen and (max-width: 767px) {
    .hospital_detail {
      display: flex;
      flex-direction: column;

      .hospital_list {
        width: 100%;
      }

      .hospital_availablelist {
        width: 100%;
        margin-top: 1.5rem; // Add margin between sections on mobile
      }
      .hospital_searchbox {
        width: 320px;
      }
      .hospital_doctorstoppanel {
        width: max-content;
        gap: 48px;
      }
      .hospital_doctorslist {
        width: fit-content;
        // margin: 0 30px;
      }
      .availableservices_container {
        padding: 12px;
        margin: 0;
      }
      .hospital_availablelist {
        width: auto !important;
      }
    }

    .hospital_doctors_pagination {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1.5rem;

      .hospital_doctors_perpage {
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

        .hospital_doctors_dropdown {
          color: #00c9aa;
          height: 2rem;
          border: 1px solid;
          border-radius: 0.313rem;
          background: #ffffff;
        }
      }
      .hospital_doctors_paginationbtns {
        display: flex;
        align-items: flex_start;
        justify-content: flex_start;
        gap: 0.5rem;

        button {
          appearance: none;
          border: medium none;
          padding: 0;
        }

        .hospital_doctors_prevpage {
          background: #9747ff;
          border-radius: 0.313rem;
          padding: 0.875rem;
          color: #ffffff;
          font-size: 0.75rem;
        }

        .hospital_doctors_nextpage {
          background: #9747ff;
          border-radius: 0.313rem;
          padding: 0.875rem;
          color: #ffffff;
          font-size: 0.75rem;
        }
      }
    }
  }
`;
