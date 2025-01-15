import styled from "styled-components";

export const TimeSlotStyled = styled.div`
  .list-packages-names-all {
    div.morningTimeSlots,
    .aftnoonTimeSlots,
    .eveimeSlots {
      margin-top: 0.75rem;
    }
    div.title {
      color: #000000;
      font-size: 10px;
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: 500;
      opacity: 0.5;
      margin-bottom: 5px;
    }
    div.slots {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      overflow-x: scroll;
      scrollbar-width: none;
      gap: 12px;

      .slotList {
        cursor: pointer;
        background: #eafbe4;
        min-height: 29px;
        white-space: nowrap;
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        align-content: center;
        padding: 6px;
        cursor: pointer;
        text-transform: uppercase;
      }

      .slotList.selected {
        background: #ff6fa4;
      }
    }
  }
`;
