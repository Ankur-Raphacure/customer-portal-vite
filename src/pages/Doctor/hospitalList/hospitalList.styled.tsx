import styled from "styled-components";

export const HospitalListStyled = styled.div`
  width: 100%;
  .poppins-regular {
    font-family: Poppins,sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .poppins-medium {
    font-family: Poppins,sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .poppins-semibold {
    font-family: Poppins,sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .poppins-bold {
    font-family: Poppins,sans-serif;
    font-style: normal;
    font-weight: 700;
  }
  
  .flex_start {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .flex_wrapbetween {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
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

  .flexdirection_col {
    flex-direction: column;
  }

  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.10);
  }

  .hospital_listitem {
    width: 100%;
    w-full bg-white rounded-[.625rem]
    background: #FFFFFF;
    border-radius: .625rem;

    .hospital_topdata {
      padding: 0.844rem 0.625rem 0.531rem 0.625rem;
      gap: 0.875rem;

      @media only screen and (min-width: 1025px) {
        padding: 1.688rem 1.25rem 1.063rem 1.25rem;
        gap: 1.75rem;
      }
      
      .hospital_itemimg {
        display: none;
        @media only screen and (min-width: 1025px) {
          display: block;
        }

        img {
          width: 4.188rem;
          height: 4.188rem;
          border-radius: 0.313rem;
        }
      }

      .hospital_itemvalue {
        gap: .313rem;

        .hospital_name {
          opacity: 0.8;
          color: #000000;
          font-size: 1.125rem;
        }

        .hospital_services {
          font-size: 0.75rem;
          color: #00C9AA;
        }

        .hospital_starbox {
          gap: 0.188rem;

          .star {
            width: 0.875rem;
            height: 0.875rem;
            display: inline-flex;
          }

          .hospital_starvalue {
            opacity: .5;
            color: #000000;
            font-size: .625rem;
          }
        }
      }
    }

    .hospital_bottomdata {
      padding-bottom: 0.625rem;

      @media only screen and (min-width: 1025px) {
        padding-bottom: 1.25rem;
      }

      .hospital_bottomwrap {
        padding: 1.125rem 1.25rem 0 1.25rem;

        .hospital_addresswrap {
          gap: 0.5rem;
          max-width: 60.05%;

          @media only screen and (min-width: 1025px) {
            max-width: 70.05%;
          }

          .hospital_addresstop {
            min-height: 1.875rem;

            .hospital_addresstext {
              opacity: 0.6;
              color: #000000;
              font-size: 0.825rem;
            }
          }

          .hospital_feetxt {
            opacity: 0.6;
            color: #000000;
            font-size: 0.825rem;
            font-weight: bold;
          }
        }

        .hospital_btn {
          appearance: none;
          border: medium none;
          padding: 0;

          .hospital_btnwrap {
            height: 2.875rem;
            padding: 0.875rem;
            background: #9747FF;
            border-radius: 0.313rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 0.625rem;

            .hospital_btntxt {
              color: #FFFFFF;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

`;
