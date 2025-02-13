import styled from "styled-components";

export const PackagelistStyled = styled.div`
  width: fit-content;
  /* margin: auto; */
  .bottomSec {
    padding: 0 1rem;
  }
  .more-labs-action-btns {
    padding: 0 1rem;
    padding-bottom: 1rem;
  }
  .imgWrapper {
    /* min-height: 10rem; */
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

  .flex-col {
    flex-direction: column;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #000000;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.688rem;
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

  .opactiy-98 {
    opacity: 0.98;
  }

  .text-violet {
    color: #00c9aa;
  }

  .package_item {
    border-radius: 15px;
    background: linear-gradient(254deg, #dffae2 -29.24%, #cdfcff 107.99%);
    border: 1px solid rgba(0, 0, 0, 0.05);
    gap: 29px;
    padding: 9px 9px 9px 6px;

    @media only screen and (min-width: 1025px) {
      padding: 17px 17px 17px 13px;
    }

    .package_img {
      display: none;

      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 227px;
        height: 184px;
        border-radius: 10px;
        object-fit: contain;
      }
    }

    .package_datalist {
      gap: 34px;
      width: 100%;
      .package_topdata {
        .package_title {
          color: #000;
          opacity: 0.7;
          font-size: 16px;
          line-height: 24px;
        }

        .package_info {
          color: #000;
          opacity: 0.4;
          font-size: 12px;
          line-height: 18px;
        }

        .package_price {
          margin-top: 2px;
          font-size: 16px;
          line-height: 24px;
          color: #000;
        }

        .package_preparation {
          margin-top: 4px;
          font-size: 12px;
          line-height: 18px;
          color: #000;
          opacity: 0.7;
        }
      }

      .package_bottomdata {
        width: 100%;
        gap: 14px;
        .package_fasting {
          gap: 9px;
          .fasting_icon {
            display: inline-flex;
            width: 11px;
            height: 11px;
            opacity: 0.5;
          }
          .package_fastingtext {
            font-size: 12px;
            line-height: 18px;
            color: #000;
            opacity: 0.5;
          }
        }

        .package_actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .package_water {
            gap: 9px;
            width: 30%;
            .water_icon {
              display: inline-flex;
              width: 9px;
              height: 11px;
              opacity: 0.6;
            }
            .package_watertext {
              font-size: 12px;
              line-height: 18px;
              color: #000;
              opacity: 0.5;
            }
          }

          .package_bookbtn {
            gap: 11px;
            flex-wrap: wrap;
            width: 70%;
            justify-content: flex-end;

            .details-btn {
              border-radius: 10px;
              background: #ffffff;
              color: #9747ff;
              border: 1px solid #9747ff;
              font-size: 14px;
              line-height: 21px;
              width: 23.66%;
              padding: 10px;
            }

            .booknow_btn {
              width: 23.66%;
              .booknow-btn {
                border-radius: 10px;
                background: #9747ff;
                color: #fff;
                font-size: 14px;
                line-height: 21px;
                border: medium none;
                padding: 10px;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
