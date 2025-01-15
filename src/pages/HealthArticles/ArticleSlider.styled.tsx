import styled from "styled-components";

export const ArticleSliderStyled = styled.div`
  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .bottom-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .name-tag {
    padding-left: 18px;
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
    background: #ffffff;
    border-radius: 0.625rem;
    gap: 2rem;
    padding: 0.5rem;

    @media only screen and (min-width: 1025px) {
      padding: 1rem;
    }

    .hospital_img {
      display: none;

      @media only screen and (min-width: 1025px) {
        display: block;
      }

      img {
        width: 34.563rem;
        height: 20.688rem;
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
  .content-div {
    line-height: 1.7rem;
  }
    @media(max-width:768px){
    .slider-container{
    display:none;
    }
    .ButtonGroup{
    display:block;
    }
   
    }
`;
