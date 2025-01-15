import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { ReactComponent as BookingConfirmImg } from "../../assets/icons/bookingConfirm.svg";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  width: 350px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  color: #333;
`;

const Message = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0 20px;
`;

const TrackButton = styled.button`
  background-color: #8f3dff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #7a32e0;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 20px;
`;

const BookingConfirm = ({ setShowContent, onClose, bkId }: any) => {
  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <AiOutlineClose />
        </CloseButton>
        <BookingConfirmImg />
        <Title>Booking Confirmed</Title>
        <Message>
          Your booking ID is {bkId}. We will share the details via Whatsapp,
          Email, SMS, and Automated calls.
        </Message>
        <TrackButton onClick={() => setShowContent("trackBooking")}>
          Track Booking
        </TrackButton>
      </ModalContainer>
    </Overlay>
  );
};

export default BookingConfirm;
