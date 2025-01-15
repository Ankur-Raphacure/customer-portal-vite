import styled from "styled-components";

export const DoctorsListItemstyled = styled.div`
  font-family: Poppins, sans-serif;
  font-style: normal;
  width: 100%;

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

  .poppins-semibold {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
  }

  .poppins-bold {
    font-family: Poppins, sans-serif;
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

  .doctors_listcontainer {
    width: 100%;
    background: #ffffff;
    border-radius: 0.625rem;

    .doctor_listitem {
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.5rem;
      padding: 1.938rem 1.688rem 1.188rem 1.688rem;
    }

    .doctor_img {
      flex-direction: column;

      img {
        width: 4.188rem;
        height: 4.188rem;
        border-radius: 100%;
      }
    }

    .doctor_info {
      display: inline-flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 0.313rem;

      .doctor_column {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .doctor_name {
          font-weight: 500;
          font-size: 18px;
          opacity: 0.8;
          color: #000000;
        }

        .doctor_spec {
          color: #00c9aa;
          font-size: 12px;
          font-weight: 400;
        }
      }

      .doctor_star {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.188rem;

        .star_img {
          width: 0.875rem;
          height: 0.875rem;
          display: inline-flex;
        }

        .doctor_rating {
          color: #000000;
          opacity: 0.5;
          font-weight: 500;
          font-size: 0.625rem;
        }
      }

      .doctor_data {
        display: inline-flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 0.438rem;

        .doctor_data_lang {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.125rem;

          .doctor_data_lang_img {
            width: 0.688rem;
            height: 0.688rem;
            display: inline-flex;
          }

          .doctor_data_genderimg {
            display: inline-flex;
            width: 0.375rem;
            height: 0.563rem;
          }
        }

        .doctor_data_text {
          color: #000000;
          opacity: 0.5;
          font-size: 0.625rem;
          font-weight: 400;
        }

        .doctor_data_exp {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.25rem;

          .doctor_data_exp_img {
            display: inline-flex;
            width: 0.563rem;
            height: 0.563rem;
          }
        }
      }
    }

    .hospital_line {
      margin-top: 0.875rem;
      margin-bottom: 1.313rem;
    }

    .hospital_bottomdata {
      padding-bottom: 0.625rem;

      @media only screen and (min-width: 1025px) {
        padding-bottom: 1.25rem;
      }

      .hospital_bottomwrap {
        padding: 0 1.25rem 0 1.25rem;

        .hospital_addresswrap {
          gap: 0.5rem;
          max-width: 54%;

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

        .hospital_btn_wrap {
          display: inline-flex;
          gap: 26px;

          .hospital_btn {
            appearance: none;
            border: medium none;
            padding: 0;

            .hospital_btnwrap {
              height: 2.875rem;
              padding: 0.875rem;
              background: #9747ff;
              border-radius: 0.313rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              gap: 0.625rem;

              .hospital_btntxt {
                color: #ffffff;
                font-size: 0.75rem;
                line-height: 1rem;
              }
            }
          }

          .hospital_btn_audio {
            appearance: none;
            border: medium none;
            padding: 0;

            .hospital_btnwrap {
              height: 2.875rem;
              padding: 0.875rem;
              background: rgba(151, 71, 255, 0.2);
              border-radius: 0.313rem;
              border: 1px solid #9747ff;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              gap: 0.625rem;

              .hospital_btntxt {
                color: #9747ff;
                font-size: 0.75rem;
                line-height: 1rem;
              }
            }
          }
        }
      }
    }
  }
`;
