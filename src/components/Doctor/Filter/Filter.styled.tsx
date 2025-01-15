import styled from "styled-components";

export const FilterStyled = styled.div`
  .sidefilters {
    font-family: Poppins, sans-serif;
    font-style: normal;
    width: 100%;
    padding: 1.5rem 2.313rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .filterdata {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .filtertitle {
        color: #000000;
        opacity: 0.8;
        font-weight: 500;
        font-size: 0.875rem;
        text-transform: capitalize;
      }

      .filterlist {
        display: flex;
        flex-direction: column;
        gap: 0.375rem;

        .filterinput {
          display: flex;
          align-items: center;
          gap: 0.625rem;

          input {
            width: 1rem;
            height: 1rem;
            border-radius: 0.125rem;
            border-width: 1px;
            border-color: rgba(0, 0, 0, 0.25);
            color: rgba(151, 71, 255, 1);
            accent-color: #9747ff;
            cursor: pointer;
          }

          label {
            opacity: 0.54;
            font-weight: 400;
            font-size: 0.875rem;
            color: #000000;
            margin-bottom: 0;
            cursor: pointer;
          }
        }
      }
    }
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .sidefilters {
      padding: 1rem;
      gap: 1rem;

      .filterdata {
        gap: 0.5rem;

        .filtertitle {
          font-size: 0.75rem;
        }

        .filterlist {
          gap: 0.25rem;

          .filterinput {
            gap: 0.5rem;

            input {
              width: 0.875rem;
              height: 0.875rem;
            }

            label {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .sidefilters {
      padding: 0.5rem;
      gap: 0.5rem;

      .filterdata {
        gap: 0.25rem;

        .filtertitle {
          font-size: 0.625rem;
        }

        .filterlist {
          gap: 0.125rem;

          .filterinput {
            gap: 0.375rem;

            input {
              width: 0.75rem;
              height: 0.75rem;
            }

            label {
              font-size: 0.625rem;
            }
          }
        }
      }
    }
  }
`;
