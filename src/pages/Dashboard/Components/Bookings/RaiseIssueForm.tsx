import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RaiseIssueFormStyled } from "./RaiseIssueForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { raiseIssueAPI } from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { ReactComponent as RaiseIssueIcon } from "../../../../assets/raiseissue.svg";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const RaiseIssueForm = ({ bookingId, onClose }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [issueId, setIssueId] = useState();
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    concerns: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    mobileNumber: "",
    concerns: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  React.useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.first_name || "",
        mobileNumber: user.phone || "",
        concerns: "",
      });
    }
  }, [user]);

  const validateFullName = (name: string) => {
    return /^[A-Za-z\s]+$/.test(name);
  };

  const validateMobileNumber = (number: string) => {
    return /^\d{1,10}$/.test(number);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      if (value === "" || validateFullName(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prev) => ({
          ...prev,
          fullName: "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          fullName: "Only letters and spaces are allowed",
        }));
      }
    } else if (name === "mobileNumber") {
      if (value.length <= 10 && /^\d*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        setErrors((prev) => ({
          ...prev,
          mobileNumber:
            value.length === 10 ? "" : "Mobile number must be 10 digits",
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const isFormValid = () => {
    const newErrors = {
      fullName: !formData.fullName ? "Full name is required" : "",
      mobileNumber: !formData.mobileNumber
        ? "Mobile number is required"
        : formData.mobileNumber.length !== 10
        ? "Mobile number must be 10 digits"
        : "",
      concerns: !formData.concerns ? "Please describe your concerns" : "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    const raiseIssueObjBody = {
      comment: formData.concerns,
      additional_info: {
        mobile_number: formData.mobileNumber,
        full_name: formData.fullName,
      },
    };
    const raiseIssueObj = {
      bookingId,
      raiseIssueObjBody,
    };
    const res = (await dispatch(raiseIssueAPI(raiseIssueObj))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    } else {
      setIssueId(res?.payload?.data?.bookingComment?.id);
      setIsSubmitted(true);
    }
  };

  return (
    <RaiseIssueFormStyled>
      <div className="overlayIssue raiseIssueForm">
        {!isSubmitted ? (
          <div className="container">
            <div className="formContainer p-4 shadow rounded">
              <div className="header">
                <h2>Raise an Issue</h2>
                <button title="Close" onClick={onClose} className="closeButton">
                  <AiOutlineClose size={20} />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                  <div className="d-flex flex-col gap-2">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      title="Full Name"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    {errors.fullName && (
                      <span className="error">{errors.fullName}</span>
                    )}
                  </div>
                  <div className="d-flex flex-col gap-2">
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      title="Mobile Number"
                      placeholder="Mobile Number"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                    {errors.mobileNumber && (
                      <span className="error">{errors.mobileNumber}</span>
                    )}
                  </div>
                </div>
                <div className="textArea mb-2">
                  <textarea
                    title="Concerns"
                    id="concerns"
                    name="concerns"
                    placeholder="Concerns"
                    value={formData.concerns}
                    onChange={handleChange}
                    required
                  />
                  {errors.concerns && (
                    <span className="error">{errors.concerns}</span>
                  )}
                </div>
                <div className="buttonGroup d-flex justify-content-end">
                  <button
                    title="Cancel"
                    type="button"
                    onClick={onClose}
                    className="btn btn-outline-secondary me-3"
                  >
                    Cancel
                  </button>
                  <button
                    title="Send"
                    type="submit"
                    className="sendButton btn btn-primary"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="formContainer">
            <div className="header">
              <button title="Close" onClick={onClose} className="closeButton">
                <AiOutlineClose size={20} />
              </button>
            </div>
            <div className="successMessage">
              <RaiseIssueIcon />
              <h2>We've raised the issue!</h2>
              <p>We're sorry in case of any inconvenience</p>
              <p>
                Your issue ID is {issueId}. We will share the details via
                WhatsApp, Email, SMS, and Automated calls
              </p>
              <button
                title="Visit Dashboard"
                className="visitDashboardButton"
                onClick={() => history.push("/dashboard")}
              >
                Visit Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </RaiseIssueFormStyled>
  );
};

export default RaiseIssueForm;
