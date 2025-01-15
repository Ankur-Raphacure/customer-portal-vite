import styled from "styled-components";

export const EPrescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 3rem;
  button {
    width: fit-content;
    margin: auto;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
  /* Prescription Container */
  .prescription-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    margin-bottom: 16px;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  .presc-wrapper {
    width: 100%;
  }

  .profile-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  .user-info {
    color: #333;
  }

  .user-name {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
  }

  .user-details,
  .purpose {
    font-size: 0.9em;
    margin: 4px 0;
  }

  .user-details span,
  .purpose span {
    font-weight: bold;
  }

  .appointment-info {
    text-align: right;
    color: #555;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: start;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
  }

  .doctor-name {
    font-size: 1em;
    font-weight: bold;
    margin: 0;
  }

  .date,
  .time,
  .mode {
    font-size: 0.9em;
    margin: 4px 0;
  }

  .date span,
  .time span,
  .mode span {
    font-weight: bold;
  }
  .tables-wrapper {
    width: 100%;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #333;
  }

  .table-section {
    margin-bottom: 2rem;
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    padding: 1rem;
    background-color: #fafafa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 1rem;
    color: #555;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background-color: #f0f0f0;
  }

  th,
  td {
    padding: 0.8rem;
    text-align: center;
    border: 1px solid #ddd;
    font-size: 14px;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  .total-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-weight: bold;
    color: #444;
  }

  button {
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background-color: #5a4dc8;
  }
  .btnWrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    button {
      width: fit-content;
      margin: 0;
    }
  }
`;
