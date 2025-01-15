import styled from "styled-components";

export const PopularContentstyled = styled.div`
  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
  }

  .poppins-regular {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .specilitiescontainer {
    background: #ffffff;
    border-radius: 0.5rem;
    margin-top: 2rem;
    padding: 1.25rem 0.937rem;

    @media only screen and (min-width: 1025px) {
      padding: 1.25rem 1.875rem;
    }
  }

  .specilitiesdata {
    .specilitiestitle {
      color: #000000;
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-bottom: 0.688rem;

      @media only screen and (max-width: 768px) {
        font-size: 0.75rem;
      }
    }

    .specilitieslistitem {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      @media only screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .specilitieslist {
        display: block;

        .specilitieslistvalue {
          opacity: 0.6;
          color: #000000;
          font-size: 0.75rem;
          line-height: 1rem;
          text-decoration: none;

          @media only screen and (max-width: 768px) {
            font-size: 0.625rem;
          }
        }
      }
    }
  }
`;
