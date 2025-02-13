import styled from "styled-components";

export const ModalStyled = styled.div`
.custom-modal .modal-dialog {
    max-width: 900px; /* Increase the width of the modal */
    margin: 1.75rem auto;
  }
  
  .custom-modal .modal-content {
    padding: 20px;
    border-radius: 10px;
  }
  
  .clinic-modal-content {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  
  .clinic-image-modal {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .clinic-modal-info {
    flex-grow: 1;
  }
  
  .clinic-modal-info h4 {
    margin-bottom: 10px;
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  
  .clinic-modal-info p {
    margin: 5px 0;
    color: #000;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
  }
  .clinic-modal-info .clinic-color{
    color: #34A853;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  
  .appointment-times h5 {
    margin-top: 20px;
    color: #000;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
  }
  
  .time-slots {
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px; */
    margin-top: 10px;
  }
  .slotbuttons{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap:10px;

  }
  .slot-category {
    margin-bottom: 20px;
  }
  
  .slot-category h6 {
    margin-bottom: 10px;
    color: #000;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
  }
  
  .time-slot-btn {
    background-color: #e0f7fa;
    border: 1px solid #00acc1;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .time-slot-btn:hover {
    background-color: #b2ebf2;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }
  
  .modal-footer .btn-primary {
    background-color: #6200ea;
    border-color: #6200ea;
  }
  `;
