import styled from "styled-components";

export const CentresDetailsstyled = styled.div`
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
    line-height: 1.75rem;
    color: #000000;
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

  .opactiy-95 {
    opacity: 0.95;
  }

  .text-violet {
    color: #00c9aa;
  }

  .hospital_item {
    background-image: linear-gradient(#d1f1da, #d1f7db);
    border-radius: 0.625rem;
    gap: 2rem;
    padding: 0.5rem;
    display: flex;
    height: 100%;
    width: 100%;

    @media only screen and (min-width: 1025px) {
      padding: 1rem;
    }

    .hospital_img {
      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 100%;
        height: 15.688rem;
        opacity: 0.9;
        border-radius: 0.625rem;
      }
    }

    .hospital_datalist {
      gap: 1.063rem;

      .hospital_data {
        gap: 0.5rem;
      }

      .hospital_address {
        gap: 0.313rem;
        .address_icon {
          display: inline-flex;
          width: 0.625rem;
          height: 0.938rem;
        }
      }

      .hospital_ratingbox {
        gap: 0.688rem;

        .hosptial_rating {
          gap: 0.5rem;
        }

        .star_icon {
          position: relative;
          height: 0.875rem;
          display: inline-flex;
        }

        .stroke_icon {
          width: 0.125rem;
          height: 1.188rem;
          display: inline-flex;
        }
      }

      .hospital_opentime {
        gap: 0.688rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }

      .hospital_helpbox {
        gap: 0.625rem;

        .hospital_helpdata {
          gap: 0.813rem;

          .hospital_helpitem {
            padding-left: 0.25rem;
            padding-right: 0.625rem;
            padding-top: 0.188rem;
            padding-bottom: 0.063rem;
            background: #dbecfb;
            gap: 0.625rem;

            .hospital_itemdata {
              gap: 0.25rem;

              .hospital_helpimg {
                width: 0.813rem;
                height: 0.813rem;
                position: relative;
              }
            }
          }

          .hospital_share {
            gap: 0.438rem;

            .share_icon {
              width: 1.125rem;
              height: 0.938rem;
              display: inline-flex;
            }
          }
        }

        .hospital_map {
          gap: 0.313rem;
          .map_icon {
            width: 1.063rem;
            height: 0.938rem;
            display: inline-flex;
          }
        }
      }
    }
  }
  .Container {
    /* display: flex; */
    justify-content: space-between;
    /* align-items: center;
    padding: 20px; */
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    height: 100%;
    width: 30%;
  }
  @media (max-width: 900px) {
    .Container {
      flex-direction: column;
    }
  }

  .TextContainer {
    /* flex: 1;
    padding: 10px; */
    flex: 1;
    padding: 10px;

    @media (max-width: 768px) {
      text-align: start;
    }
  }
  .Heading {
    width: 166px;
    position: relative;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    display: inline-block;
    opacity: 0.8;
    color: #000;

    span {
      color: #928c0a;
    }

    @media (max-width: 768px) {
      text-align: center;
      .full-content-sec-page-design {
        margin-top: 0px;
      }
    }
  }
  .SubHeading {
    width: 76px;
    position: relative;
    font-size: 13px;
    font-weight: 500;
    color: #000;
    text-align: left;
    display: inline-block;
    opacity: 0.6;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
  .StoreButton {
    width: 150px;
    display: inline-block;
  }

  .treatmentWrapper {
    padding: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    display: grid;
  }
  @media (max-width: 1024px) {
    .treatmentWrapper {
      padding: 2rem;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      display: grid;
    }
    .search-by-disease {
      flex-direction: column;
    }
    .button-group {
      display: grid;
      gap: 1rem;
      width: 100%;
    }
    .more-labs-action-btns {
      flex-direction: column;
    }
    .full-content-sec-page-design {
      flex-direction: column;
    }
  }
  .contenal-1 {
    padding: 2rem;
  }
  .search-by-disease {
    /* font-family: Poppins, sans-serif; */
    margin: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 2rem;
  }
  .button-btn {
    color: black;
    border: 1px solid black;
  }
  .search-by-disease .button.active {
    color: #9747ff;
    border-color: #9747ff;
  }
  .search-by-disease .button {
    color: #000;
    border-color: #000;
  }
  .custom-btn {
    color: #fff;
    background: #9747ff;
  }
  .qr_code {
    display: flex;
    align-items: center;
    width: 14rem;
  }

  .Cutome-phone-img {
    margin-left: -1.2rem;
    margin-top: 2rem;
  }
  .flexdesign {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    .hospital_item {
      display: block;
    }
    .flexdesign {
      display: block;
    }
    .Container {
      height: auto;
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    .btns-div {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 1rem;
    }
    .qr_code {
      display: flex;
      justify-content: center;
      align-items: baseline;
      gap: 1rem;
    }
    .Cutome-phone-img {
      margin-left: 3rem;
    }
    /* .search-by-disease {
      display: contents;
      margin-right: 3rem;
    } */
  }
`;
