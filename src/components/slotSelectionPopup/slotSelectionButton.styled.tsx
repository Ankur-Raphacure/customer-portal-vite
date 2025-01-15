import styled from "styled-components";

export const SlotSelectionButtonstyled = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 100%;

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

  .doctor_slotselection {
    .modal-header {
      border-bottom: none;
    }
  }

  .slotselection_container {
    position: relative;
    display: inline-block;
    appearance: none;
    border: medium none;
    padding: 0;
    width: 100%;

    svg {
      position: absolute;
      right: 10px;
      top: 11px;
    }

    input {
      border: 1px solid #000000;
      padding: 10px;
      border-radius: 3px;
      color: #585454;
      font-size: 12px;
      line-height: 12px;
      pointer-events: none;
      width: 100%;
    }
  }
`;