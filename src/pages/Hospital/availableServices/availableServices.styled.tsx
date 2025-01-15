import styled from "styled-components";

export const AvailableServicesstyled = styled.div`
  .round-shadow {
    box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.10);
  }

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

  .availableservices_container {
    background: #FFFFFF;
    border-radius: .625rem;
    margin: 2rem;
    padding-top: 1.75rem;
    padding-left: 1.875rem;
    padding-bottom: 2rem;
    margin-right: 0;

    .availableservices_data {
      .availableservices_title {
        opacity: 0.8;
        color: #000000;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-bottom: 0.688rem; 
      }

      .availableservices_item {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.375rem;
      }

      .availableservices_link {
        display: block;
        .availableservices_text {
          color: #000000;
          opacity: 0.7;
          font-size: 0.875rem;
          line-height: 1.25rem;
          text-decoration: none;
        }
      }
    }
  }
`;
