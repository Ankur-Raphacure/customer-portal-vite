import styled from "styled-components";

export const HealthArticleBlogsStyle = styled.div`

    width: 100%;
    margin-top:1rem;
  .poppins-regular {
    font-family: Poppins,sans-serif;
    font-style: normal;
    font-weight: 400;
}

  .flex_center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .inlineflex_center {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
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
        img {
          width: 6.188rem;
          height: 6.188rem;
          border-radius: 0.313rem;
        }
      }
      .hospital_name {
          opacity: 0.8;
          color: #000000;
        }
        }
      }
    }
    .hospital_bottomdata {
      padding-bottom: 0.625rem;
      @media only screen and (min-width: 1025px) {
        padding-bottom: 1.25rem;
      }

      }
    }
  }
`;
