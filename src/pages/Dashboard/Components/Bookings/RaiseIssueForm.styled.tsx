import styled from "styled-components";

export const RaiseIssueFormStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999999;

  .formContainer {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: fit-content;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .closeButton {
    background: none;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .inputGroup {
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    @media (max-width: 760px) {
      flex-direction: column;
    }
  }

  .buttonGroup {
    display: flex;
    justify-content: end;
  }

  .cancelButton {
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .sendButton {
    background-color: #9747ff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  textarea {
    width: 100%;
    resize: none;
  }

  input {
    border: 1px solid gray;
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 5px;
  }

  .successMessage {
    text-align: center;
    // font-family: Poppins;
  }

  .successMessage img {
    width: 100px; /* Adjust size as needed */
    margin-bottom: 20px;
  }

  .visitDashboardButton {
    background-color: #9747ff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  .flex-col{
    flex-direction: column;
  }
  .error{
    color: red;
  }
`;
