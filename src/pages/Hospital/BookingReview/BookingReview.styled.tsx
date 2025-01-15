import styled from "styled-components";

export const BookingReviewstyled = styled.div`
  width: 100%;
  background: #f6f9fd;

  .container-max {
    max-width: 96rem;
    margin: 0 auto;
    padding-bottom: 100px;
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
    align-items: flex-start;
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
    gap: 7px;
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #000000;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #000000;
  }

  .opacity-50 {
    opacity: 0.5;
  }

  .opacity-60 {
    opacity: 0.6;
  }

  .opacity-70 {
    opacity: 0.7;
  }

  .opacity-80 {
    opacity: 0.8;
  }

  .bookingContainer {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .bookingBtnwrap {
    gap: 0.313rem;
    padding-top: 0.719rem;
    padding-bottom: 0.719rem;
    appearance: none;
    border: medium none;
    background: transparent;

    &:active,
    &:focus {
      outline: none;
    }

    .back-icon {
      height: 1rem;
      width: 0.625rem;
      display: inline-flex;
    }
  }
  .error_message {
    font-size: 14px;
  }
  .error_message1 {
    padding-left: 10px;
  }
  .doctor-img {
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 5px;
      object-fit: contain;
    }
  }
  .address-field-error .selectaddress-btn {
    border: 1px solid red !important;
  }
  .booking-page-actions {
    margin-top: 50px;
    display: flex;
    gap: 20px;
    justify-content: end;
  }
  .booking-error-text {
    color: red;
    font-size: 14px;
    display: flex;
    justify-content: end;
  }
  .address-section-ctmri {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    flex-direction: row;
    .profilekey {
      width: 70px;
      font-weight: 600;
    }
    .profilevalue {
      line-height: 18px;
    }
  }
  .bookinglistcontainer {
    width: 100%;

    .bookinglistwrap {
      margin-top: 1.656rem;

      .patientDetails {
        margin-top: 29px;

        &::-webkit-scrollbar {
          display: none;
        }

        .accountProfileList {
          margin-right: 2.75rem;
          gap: 1.5rem;
          .accountProfileListItm {
            appearance: none;
            border: medium none;
            padding: 0;
            justify-content: center;
            width: 4.75rem;
            height: 4.75rem;
            background: #ffffff;
            border-radius: 0.625rem;

            img {
              width: 2.25rem;
              height: 2.5rem;
              border-radius: 100%;
            }

            .accountProfileListImgmore {
              background: rgba(251, 188, 4, 1);
              border-radius: 3.125rem;
              border: 1px solid #000;
            }

            .accountProfileListName {
              font-size: 0.625rem;
              color: #000000;
              margin-top: 0.5rem;
            }

            &.selected {
              background: #ff6fa4;

              .accountProfileListName {
                color: #ffffff;
              }
            }
          }
        }

        .SelectedProfileDetails {
          padding: 0.313rem 0 0.438rem 0.625rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0.625rem;
          width: 79.92%;
          margin-top: 1.5rem;
        }
      }

      .bookinglist {
        width: 100%;

        .bookingItems {
          width: 100%;
          gap: 24px;

          .bookingItem {
            position: relative;
            width: 100%;
            background: #ffffff;
            border-radius: 10px;
            border: 1px solid #e5d9d9;

            .labtest_error {
              position: absolute;
              left: 0.313rem;
              top: -1.563rem;
              p {
                margin: 0;
                color: red;
                font-size: 0.813rem;
              }
            }

            .removeBookingItem {
              position: absolute;
              right: 0.313rem;
              top: 0.313rem;
              --bs-btn-close-bg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M10 0C4.42857 0 0 4.42857 0 10C0 15.5714 4.42857 20 10 20C15.5714 20 20 15.5714 20 10C20 4.42857 15.5714 0 10 0ZM13.8571 15L10 11.1429L6.14286 15L5 13.8571L8.85714 10L5 6.14286L6.14286 5L10 8.85714L13.8571 5L15 6.14286L11.1429 10L15 13.8571L13.8571 15Z' fill='%23FA1A1A'/%3E%3C/svg%3E");
              --bs-btn-close-color: transparent;
              --bs-btn-close-opacity: 1;
              --bs-btn-close-hover-opacity: 1;
              --bs-btn-close-focus-shadow: none;
            }

            .SelectedProfileDetails {
              width: 37.884%;
              padding-top: 5px;
              padding-left: 11px;

              .basic_details {
                padding-right: 11px;
                gap: 10px;
                width: 100%;

                .profile_imgwrap {
                  justify-content: center;
                  width: 4.75rem;
                  height: 4.75rem;
                  /* background: #ff6fa4; */
                  border-radius: 0.625rem;
                  color: #ffffff;

                  .profile_img {
                    width: 2.25rem;
                    height: 2.5rem;
                    border-radius: 100%;
                    object-fit: contain;
                  }

                  .profile_imgname {
                    font-size: 0.625rem;
                    /* margin-top: 0.5rem; */
                    color: #000;
                  }
                }

                .basic_detail {
                  .profilekey {
                    width: 55px;
                  }
                  div {
                    justifycontent: space-between;
                    span {
                      color: #745353;
                      line-height: 20px;
                      white-space: nowrap;
                      font-size: 12px;

                      &.profilevalue {
                        padding-left: 2px;
                      }
                    }
                  }
                }
              }

              .address_details {
                margin-top: 10px;
                margin-bottom: 8px;
                width: 100%;

                .address-btns {
                  gap: 2.205%;

                  button {
                    appearanc: none;
                    border-radius: 5px;
                    border: 1px solid #ac9494;
                    height: 34px;
                    background: #ffffff;
                    font-size: 12px;
                    font-family: Poppins, sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 24px;
                    white-space: nowrap;
                    width: 47.549%;
                    padding: 0;
                  }
                }
              }
            }

            .doctor-divider-profile {
              border-right: 1px solid rgba(0, 0, 0, 0.2);
              position: absolute;
              display: inline-block;
              height: 100%;
              left: 37.703%;
            }

            .doctor-divider-doctor {
              border-right: 1px solid rgba(0, 0, 0, 0.2);
              position: absolute;
              display: inline-block;
              height: 100%;
              left: 75.858%;
            }
            .doctor-container {
              width: 38.065%;

              .doctorDetailsSection {
                margin-top: 10px;
                width: 100%;

                & > .doctor-detailwrap:first-child {
                  margin-top: 24px;
                  padding-left: 9px;
                  width: 100%;
                  padding-bottom: 9px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                  gap: 26px;

                  .doctor-department {
                    color: #000;
                    opacity: 0.6;
                    font-size: 12px;
                    line-height: 18px;
                  }
                }

                .doctor-details-top {
                  width: 100%;
                  padding-bottom: 9px;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                  gap: 8px;

                  .hospital-detailwrap {
                    padding-left: 11px;
                    padding-right: 29px;
                    gap: 14px;

                    .hospital-img {
                      img {
                        width: 100% !important;
                        height: 100% !important;
                        border-radius: 8px;
                      }
                    }

                    .hospital-detail {
                      gap: 7px;

                      .hospital-basic {
                        gap: 9px;
                        .hospital-name {
                          font-size: 1rem;
                          line-height: 18px;
                          color: #000000;
                        }
                        .hospital-address {
                          font-size: 0.8rem;
                          line-height: 12px;
                          color: #000;
                          opacity: 0.6;

                          .hospital-addimg {
                            padding-right: 4px;
                          }
                        }
                      }

                      .hospital-btns {
                        gap: 22px;
                        button {
                          appearance: none;
                          border: medium none;
                          padding: 0;
                          font-size: 0.8rem;
                          line-height: 15px;
                          color: #9747ff;
                          background: none;
                        }
                      }
                    }
                  }
                  .doctor-detailwrap {
                    padding-left: 11px;
                    padding-right: 29px;
                    gap: 26px;

                    .doctor-img {
                      img {
                        width: 100%;
                        height: 31px;
                        border-radius: 5px;
                      }
                    }

                    .doctor-detail {
                      .doctor-name {
                        color: #000;
                        opacity: 0.9;
                        font-size: 1rem;
                        line-height: 18px;
                      }

                      .doctor-department {
                        font-size: 0.8rem;
                        line-height: 12px;
                        color: #000;
                        opacity: 0.6;
                      }
                    }

                    .hospital-btns {
                      gap: 22px;
                      button {
                        appearance: none;
                        border: medium none;
                        padding: 0;
                        font-size: 10px;
                        line-height: 15px;
                        color: #8d8d8d;
                      }
                    }
                  }
                }

                .doctor-details-bottom {
                  gap: 3px;
                  padding-left: 9px;
                  padding-right: 29px;
                  padding-top: 15px;
                  padding-bottom: 8px;
                  align-items: center;

                  .doctor-consultation {
                    opacity: 0.5;
                    font-size: 0.75rem;
                    line-height: 1rem;
                    color: #000000;
                    max-width: 72%;
                  }

                  .doctor-testslist {
                    max-width: 72%;

                    .doctor-consultation {
                      max-width: 100%;
                    }
                  }

                  .doctor-consultationchoose {
                    padding-top: 10px;
                  }

                  .change-doctor {
                    .changedoctor_btn {
                      appearance: none;
                      border: medium none;
                      padding: 0;
                      background: transparent;

                      .changedoctor_btnwrap {
                        height: 2.188rem;
                        padding: 0.625rem;
                        background: #ffffff;
                        border: 1px solid #0d920a;
                        border-radius: 0.625rem;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.625rem;

                        .changedoctor_btntxt {
                          color: #00bf7f;
                          font-size: 0.625rem;
                          line-height: 0.75rem;
                        }
                      }
                    }
                  }
                }
              }

              .choosedoctor_btn {
                appearance: none;
                border: medium none;
                padding: 0;
                background: transparent;
                margin: 0 auto 22px auto;
                width: 100%;

                .choosedoctor_btnwrap {
                  width: 52.73%;
                  height: 44px;
                  padding: 0.625rem;
                  background: #ffffff;
                  border: 1px solid #9747ff;
                  border-radius: 0.313rem;
                  display: inline-flex;
                  justify-content: center;
                  align-items: center;
                  gap: 0.625rem;

                  .choosedoctor_btntxt {
                    color: #9747ff;
                    font-size: 16px;
                    line-height: 24px;
                  }
                }
              }
            }

            .slotprice-container {
              width: 24.14%;
              padding-left: 18px;
              padding-top: 11px;

              .slots {
                width: 80%;
              }

              .price-container {
                margin-top: 31px;
                margin-bottom: 15px;
                width: 80%;
                gap: 8px;

                .original-value,
                .discount-value {
                  color: #777070;
                  width: 100%;
                  font-size: 12px;
                  line-height: 12px;
                }

                .total-value {
                  color: #000;
                  width: 100%;
                  font-size: 12px;
                  line-height: 12px;
                }

                .price-value {
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }

    .review-actions {
      margin-top: 129px;
      margin-bottom: 58px;
      width: 100%;
      margin-right: 2px;

      .review-btns {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        gap: 2.265%;

        button {
          appearance: none;
          border: medium none;
          padding: 0;
          height: 53px;
          min-width: 17.5%;
          font-size: 16px;
          line-height: 24px;
          background: transparent;
          border-radius: 4px;

          &.addtocart-btn {
            color: #9747ff;
            border: 1px solid #9747ff;
            background: #ffffff;
          }

          &.booknow-btn {
            color: #ffffff;
            background: #9747ff;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .bookinglistcontainer
      .bookinglistwrap
      .bookinglist
      .bookingItems
      .bookingItem {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .doctor-container,
      .slotprice-container {
        width: 100%;
      }

      .doctor-divider-profile,
      .doctor-divider-doctor {
        display: none;
      }

      .doctor-divider-profile {
        border-right: none;
      }

      .doctor-divider-doctor {
        border-right: none;
      }
    }
    .bookinglistcontainer
      .bookinglistwrap
      .bookinglist
      .bookingItems
      .bookingItem
      .SelectedProfileDetails
      .address_details
      .address-btns
      button {
      appearanc: none;
      border-radius: 5px;
      border: 1px solid #ac9494;
      height: 34px;
      background: #ffffff;
      font-size: 12px;
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      white-space: nowrap;
      // width: 47.549%;
      padding: 0 12px;
      width: fit-content;
    }
    .bookinglistcontainer
      .bookinglistwrap
      .bookinglist
      .bookingItems
      .bookingItem
      .SelectedProfileDetails {
      width: 64%;
    }
    .booking-page-actions {
      text-align: center;
      display: block;
      button {
        width: 90%;
        margin: auto;
      }
      .primary-button {
        margin-top: 20px;
      }
    }

    .primary-button {
      // padding: 10px 114px;
    }
    .secoundary-button {
      // padding: 10px 108px;
      // margin-bottom: 12px;
    }

    .bookinglistcontainer
      .bookinglistwrap
      .patientDetails
      .accountProfileList
      .accountProfileListItm {
      // width: 60px;
    }
    .bookinglistcontainer .bookinglistwrap .patientDetails .accountProfileList {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
    }
  }

  .imgBkReview {
    justify-content: center;
    width: 4.75rem;
    height: 4.75rem;
    /* background: #ff6fa4; */
    border-radius: 0.625rem;
    color: #ffffff;
  }
  .imgBkReview img {
    box-shadow: none;
    object-fit: contain;
    height: 70% !important;
  }
`;
