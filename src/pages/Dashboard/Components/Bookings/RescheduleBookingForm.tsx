import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon from react-icons
import { useDispatch } from "react-redux";
import { RescheduleBookingFormStyled } from "./RescheduleBookingForm.styled";
import { bookAgainAPI } from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { toast } from "react-toastify";

const RescheduleBookingForm = ({ bookingId, onClose }: any) => {
  const dispatch = useDispatch();
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("handleSubmit called");
    
    const collection1Date = newDate;

    // Function to format time to 12-hour format with AM/PM
    const formatTime = (time: any) => {
      const [hour, minute] = time.split(":");
      const hourNum = parseInt(hour, 10);
      const ampm = hourNum >= 12 ? "pm" : "am";
      const formattedHour = hourNum % 12 || 12; // Convert to 12-hour format
      return `${formattedHour}:${minute} ${ampm}`;
    };

    const collection1Slot = formatTime(newTime);

    const bkAgainObjBody = {
      booking: {
        collection_1_date: collection1Date,
        collection_1_slot: collection1Slot,
      },
    };
    const bkAgainObj = {
      bookingId,
      bkAgainObjBody,
    };

    try {
      const res = await dispatch(bookAgainAPI(bkAgainObj));
      toast.success("Booking rescheduled successfully!");
    } catch (error) {
      console.error("Rescheduling error: ", error);
      toast.error("Failed to reschedule booking.");
    }
    onClose();
  };

  return (
    <RescheduleBookingFormStyled>
      <div className="overlayReschedule rescheduleBookingForm">
        <div className="formContainer">
          <div className="header">
            <h2>Reschedule Booking</h2>
            <button title="Close" onClick={onClose} className="closeButton">
              <AiOutlineClose size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input
                type="date"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                required
              />
              <input
                type="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                required
              />
            </div>
            <div className="buttonGroup">
              <button
                title="Cancel"
                type="button"
                onClick={onClose}
                className="cancelButton"
              >
                Cancel
              </button>
              <button title="Send" type="submit" className="sendButton">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </RescheduleBookingFormStyled>
  );
};

export default RescheduleBookingForm;
