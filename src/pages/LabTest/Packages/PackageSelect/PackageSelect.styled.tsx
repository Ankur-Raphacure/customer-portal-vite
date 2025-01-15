import styled from "styled-components";

export const PackageSelectStyled = styled.div`
  width: 100%;

  .content_container {
    width: 100%;
    padding-top: 1.563rem;

    .content_tabNav {
      width: 100%;
      display: inline-flex;
      background: #ffffff;
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      height: 3.313rem;
      box-shadow: 2px 2px 19px 0 rgba(0, 0, 0, 0.1);
    }

    .content_tabNav_item {
      appearance: none;
      background: #ffffff;
      width: 100%;
      font-size: 1rem;
      font-weight: 600;
      color: #000000;
      opacity: 0.7;
      padding-top: 0.938rem;
      padding-bottom: 0.875rem;
      height: 3.313rem;
      white-space: nowrap;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: 0.313rem solid #ffffff;

      :focus {
        outline: none;
      }
    }

    .content_tabNav_item.selected {
      border-bottom-color: #9747ff;
    }

    .testslist_container {
      display: flex;
      gap: 1.87vw;
      padding: 1.5rem 0;
      flex-wrap: wrap;
      align-content: stretch;
      /* img {
        width: 100%;
        max-height: 300px;
        object-fit: contain;
        height: 300px;
        min-height: 300px;
      } */
      .bottomSec {
        padding: 0 1rem;
      }
      .more-labs-action-btns {
        padding: 0 1rem;
        padding-bottom: 1rem;
      }
      @media only screen and (max-width: 767px) {
        gap: 1.2rem;
      }

      & > div {
        flex: 0 0 31.9%;

        @media only screen and (max-width: 767px) {
          flex: 0 0 100%;
        }
      }
    }

    .error_testlist {
      width: 100%;
      color: #ff0000;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      padding: 1.5rem 0;
    }

    .packageslist_container {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 1.5rem 0;

      .error_packagelist {
        width: 100%;
        color: #ff0000;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        display: block;
      }
    }
  }
`;
