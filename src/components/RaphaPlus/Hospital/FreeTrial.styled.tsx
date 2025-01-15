import styled from "styled-components";

export const FreeTrialStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .upperHalf,
  .lowerHalf {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .upperHalf {
    flex-direction: row;
  }

  .upperInfo,
  .lowerHalf div {
    display: flex;
    gap: 20px;
  }

  .upperInfo {
    flex-direction: column;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .imgDropzone {
    border: 2px dashed #ccc;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    color: #888;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.7rem;
    }
  }

  .imgDropzone:hover {
    border-color: #888;
  }

  .citySelect,
  .stateSelect,
  .pinCode,
  .servicesSelect {
    width: 100%;
  }

  .button {
    background: linear-gradient(135deg, #2bb3a5, #001e3a);
    border: none;
    border-radius: 5px;
    padding: 15px 30px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    margin: 10px 0;
  }

  .button:hover {
    background: #1f8c89;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

export const Popup = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  & > svg {
    float: right;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    transform: translate(0%, -50%);
  }
`;
