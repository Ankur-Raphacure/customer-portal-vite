import styled from "styled-components";

export const DoctorStyled = styled.div`
  width: 100%;
  font-style: normal;

  .container-max {
    max-width: 96rem;
    margin: 0 auto;
    padding: 0;
  }

  .filter_container {
    width: 100%;
    display: block;
    min-height: 100vh;
  }

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

    .cards_container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem 0;
    }

    .card_row {
      display: flex;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .virutual_doctors_list,
    .hospitals_list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 1.5rem 0;
    }
  }

  .right_container {
    width: 26.72%;
    margin-right: 1.75rem;
  }
`;
