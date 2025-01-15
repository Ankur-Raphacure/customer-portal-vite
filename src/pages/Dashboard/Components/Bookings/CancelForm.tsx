import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon from react-icons
import { CancelFormStyled } from "./CancelForm.styled";
import { useDispatch } from "react-redux";
import { cancelBookingAPI } from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { ReactComponent as CancelImage } from "../../../../assets/cancelImage.svg";
const CancelForm = ({ bookingId, onClose }: any) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    concerns: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("handleSubmit called");
    const cancelObjBody = { comment: formData.concerns };
    const cancelBkObj = {
      bookingId,
      cancelObjBody,
    };
    const result = await dispatch(cancelBookingAPI(cancelBkObj));
    console.log("cancelBkResult : ", result);
    setIsSubmitted(true);
  };

  return (
    <CancelFormStyled>
      <div className="overlayIssue cancelForm">
        {!isSubmitted ? (
          <div className="formContainer">
            <div className="header">
              <h2>Cancel Booking</h2>
              <button title="Close" onClick={onClose} className="closeButton">
                <AiOutlineClose size={20} />
              </button>
            </div>
            <h3>Are you sure you want to cancel?</h3>
            <form onSubmit={handleSubmit}>
              <div className="textArea">
                <textarea
                  title="Concerns"
                  id="concerns"
                  name="concerns"
                  placeholder="Concerns"
                  value={formData.concerns}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="buttonGroup">
                <button title="Yes" type="submit" className="sendButton">
                  Yes
                </button>
                <button
                  type="button"
                  title="No"
                  onClick={onClose}
                  className="cancelButton"
                >
                  No
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="formContainer">
            <div className="header">
              <button onClick={onClose} title="Close" className="closeButton">
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="successMessage">
              <CancelImage />
              <h2>Cancellation Confirmed!</h2>
              <p>
                We will share the details via Whatsapp, Email, SMS and Automated
                calls.
              </p>
              <button
                title="Visit Dashboard"
                onClick={onClose}
                className="visitDashboardButton"
              >
                Visit Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </CancelFormStyled>
  );
};

export default CancelForm;
