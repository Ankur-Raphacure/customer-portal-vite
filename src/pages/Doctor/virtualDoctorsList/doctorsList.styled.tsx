import styled from "styled-components";

export const DoctorsListstyled = styled.div`
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

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .inlineflex_start {
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
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
          font-weight: 400;
          font-size: 12px;
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
          font-size: 0.8rem;
        }
      }

      .doctor_data {
        /* display: inline-flex; */
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
            width: 0.575rem;
            /* height: 0.575rem; */
          }
        }

        .doctor_data_text {
          color: #000000;
          opacity: 0.5;
          font-size: 0.8rem;
          font-weight: 400;
        }

        .doctor_data_exp {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          gap: 0.25rem;

          .doctor_data_exp_img {
            display: inline-flex;
            width: 0.563rem;
            height: 0.563rem;
          }

          .doc_exp {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 2px;
          }
        }
      }
    }

    .doctor_bottom_data {
      padding-bottom: 1.219rem;

      @media only screen and (min-width: 1024px) {
        padding-bottom: 2.438rem;
      }

      .doctor_action_btns {
        display: flex;
        width: 100%;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        margin-top: 1.013rem;

        @media only screen and (min-width: 768px) {
          flex-wrap: wrap;
        }

        .doctor_action_btn {
          width: 100%;
          height: 64px;
          background: #fff;
          border-radius: 0.313rem;
          appearance: none;
          border: medium none;

          @media only screen and (min-width: 768px) {
            width: 45%;
          }

          @media only screen and (min-width: 1280px) {
            width: 29.3%;
          }
        }

        .doctor_action_btncontent {
          display: inline-flex;
          gap: 0.625rem;
          justify-content: flex-start;
          align-items: center;
          height: 2.25rem;
        }

        .doctor_action_btndata {
          display: inline-flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
        }

        .doctor_action_btniconaudio {
          width: 1.813rem;
          height: 1.375rem;
        }

        .doctor_action_btniconchat {
          width: 2.125rem;
          height: 1.688rem;
        }

        .doctor_action_btniconcall {
          width: 1.688rem;
          height: 1.75rem;
        }

        .doctor_action_btntxt {
          text-align: center;
          color: #000;
          opacity: 1;
          font-size: 0.75rem;
        }
        .just{
          color: #000;
          opacity: 0.5;
        }

        .opacity_7 {
          /* opacity: 0.7; */
        }

        .opacity_5 {
          /* opacity: 0.5; */
        }
      }

      .doctor_action_instantcall {
        margin-top: 0.938rem;
        width: 100%;
        text-align: center;

        @media only screen and (min-width: 1024px) {
          margin-top: 1.875rem;
        }

        .doctor_action_instantbtn {
          appearance: none;
          border: medium none;
          width: 90.7%;
          border-radius: 0.313rem;
          border: 1px solid #9747ff;
          background: #ffffff;
          height: 3.813rem;
          text-align: center;
          color: #9747ff;
          font-size: 1rem;
        }
        .doctor_action_instantbtn:hover {
          background: linear-gradient(to right, #9747ff, #3ca7f3, #00c9aa);
          color: #fff;
        }
      }
    }

    .doctor_hospitallist {
      .doctor_hospitalline {
        margin: 0;
      }

      .doctor_hospitals {
        gap: 22px;
        margin-top: 22px;
        margin-bottom: 49px;
        width: 100%;

        .doctor_hospitalitem {
          width: 90.701%;
          margin: 0 auto;
          background: #ffffff;
          gap: 17px;
          .doctor_hospitalimg {
            padding: 4px 0 4px 4px;
            img {
              width: 75px;
              height: 76px;
            }
          }
          .doctor_hospitaldetails {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            padding-right: 5.222%;

            .doctor_hospitaldetail {
              .doctor_hospitalname {
                color: #000000;
                font-size: 14px;
                line-height: 21px;
                opacity: 0.8;
              }

              .doctor_hospitaladdress {
                font-size: 14px;
                line-height: 21px;
                opacity: 0.54;
                color: #000000;
              }
            }

            .doctor_hospitalaction {
              .doctor_hospitalbtn {
                appearance: none;
                border: medium none;
                padding: 0;
                color: #9747ff;
                font-size: 14px;
                line-height: 21px;
                background: transparent;
                padding: 10px;
                font-size: 18px;
              }
            }
          }

          .doctor_hospitalerror {
            padding: 20px 10px;
            color: #ff0000;
            opacity: 0.7;
            font-size: 14px;
            line-height: 21px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .doctors_listcontainer .doctor_bottom_data .doctor_action_btns {
      display: block;
    }
    .doctors_listcontainer
      .doctor_bottom_data
      .doctor_action_btns
      .doctor_action_btn {
      margin-bottom: 12px;
    }
  }
`;
