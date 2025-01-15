import styled from "styled-components";

export const PackagesStyled = styled.div`
  width: 100%;
  
  .container-max {
    max-width: 96rem;
    margin: 0 auto;
    padding: 0;
    width: 92.188%;
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

  .inlineflex_start {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .inlineflex_center {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
  }

  .package_container {
    .package_backcontainer {
      .packageBtnwrap {
        gap: 0.313rem;
        padding-top: 0.719rem;
        appearance: none;
        border: medium none;
        background: transparent;

        &:active,
        &:focus {
          outline: none;
        }

        .back-icon {
          height: 1.125rem;
          width: 1.313rem;
          display: inline-flex;
        }

        .back-text {
          font-size: 1rem;
          line-height: 1.438rem;
          color: #000;
          opacity: 0.8;
        }
      }
    }

    .package_listcontainer {
      width: 100%;
      .package_filter {
        width: 22.34%;
        display: block;
        min-height: 100vh;
      }

      .package_datacontainer {
        width: 76.65%;
        padding: 20px 12px 0 17px;

        @media only screen and (min-width: 1024px) {
          padding: 40px 23px 0 34px;
        }

        .package_header {
          width: 100%;
        }

        .package_search {
          width: 100%;
          .package_searchbox {
            margin-top: 1.313rem;
            position: relative;
            display: inline-block;
            width: 43.046%;

            @media only screen and (max-width: 767px) {
              width: 100%;
            }

            .package_searchInput {
              height: 2.688rem;
              border-radius: 0.625rem;
              border: none;
              width: 100%;
              padding-left: 1.25rem;
              padding-right: 5.625rem;
              font-size: 0.875rem;
              line-height: 1.25rem;
            }

            .package_searchInput:focus {
              border-color: none;
              outline: none;
            }

            .package_searchbtn {
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
      }
    }
  }

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

`;