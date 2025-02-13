import React, { useState } from "react";
import { NextFormStyled } from "./NextForm.styled";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsCameraVideo, BsClock } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addBookDemoRequestAPI } from "../../redux/slices/hypersite/hypersiteService";
import { toast } from "react-toastify";

const NextForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestEmail: "",
    phone: "",
    city: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [addGuest, setAddGuest] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { selectedDate, selectedTime } = location.state || ({} as any);

  const addMinutesToTime = (time: any, minutesToAdd: any) => {
    const [timePart, period] = time.includes(" ")
      ? time.split(" ")
      : [time, null];
    let [hours, minutes] = timePart.split(":").map(Number);

    // Handle AM/PM
    if (period) {
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
    }

    const date = new Date();
    date.setHours(hours, minutes);
    date.setMinutes(date.getMinutes() + minutesToAdd);

    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const formattedStartTime = selectedTime
    ? addMinutesToTime(selectedTime, 0)
    : "";
  const formattedEndTime = selectedTime
    ? addMinutesToTime(selectedTime, 15)
    : "";

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const handleInputChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    if (id === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [id]: "" });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.terms) newErrors.terms = "You must agree to the terms.";

    return newErrors;
  };

  const convertTo24HourFormat = (time: string) => {
    const [hoursMinutes, period] = time.split(" ");
    let [hours, minutes] = hoursMinutes.split(":").map(Number);

    if (period === "PM" && hours !== 12) {
      hours += 12;
    } else if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      await createBookDemoRequest({
        date: selectedDate,
        time: convertTo24HourFormat(selectedTime),
        email: formData.email,
        guestEmail: formData.guestEmail || "",
        phone: formData.phone,
        city: formData.city,
        message: formData.message,
        type: "demorequests",
      });
    }
  };

  const createBookDemoRequest = async (payload: any) => {
    const res = (await dispatch(addBookDemoRequestAPI(payload))) as any;
    const resp = res?.payload?.data?.demoRequest || {};
    if (res?.error) {
      toast.error(res.error.message || "Something went wrong");
      return;
    } else {
      toast.success("Request submitted successfully");
      history.push("/bookdemo/form/confirmation", { resp });
    }
  };

  return (
    <NextFormStyled>
      <div className="d-flex align-items-baseline p-75">
        <div className="booking-container">
          <div className="doctor-tool-card">
            <div className="header">
              <AiOutlineArrowLeft
                className="back-icon"
                onClick={() => history.push("/bookdemo")}
              />
              <h3 className="company-name">Raphaplus</h3>
              <h2 className="title">
                Experience Rapha + <br />
                Clinic Management <br />
                Doctor Tool
              </h2>
            </div>

            {/* Details Section */}
            <div className="details-section">
              <div className="detail">
                <BsClock className="icon" />
                <span>15 min</span>
              </div>
              <div className="detail">
                <BsCameraVideo className="icon" />
                <span>
                  Web conferencing details provided <br /> upon confirmation.
                </span>
              </div>
              <div className="detail">
                <BsCalendar className="icon" />
                <span>
                  {selectedTime && selectedDate
                    ? `${formattedStartTime} - ${formattedEndTime}, ${new Date(
                        selectedDate,
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}`
                    : "Select a date and time"}
                </span>
              </div>
              <div className="detail">
                <MdLanguage className="icon" />
                <span>India Standard Time</span>
              </div>
            </div>

            {/* Key Features Section */}
            <div
              className={`key-features-container ${isActive ? "active" : ""}`}
              onClick={toggleActiveState}
            >
              <h3>
                Key Features:
                {isActive ? (
                  <FaAngleDown className="arrow-icon" />
                ) : (
                  <FaAngleRight className="arrow-icon" />
                )}
              </h3>
              <ul className="key-features-list">
                <li>Effortless Multi-Clinic Management</li>
                <li>Patient Management</li>
                <li>Customize Rx</li>
                <li>Robust Appointment Scheduling</li>
              </ul>
            </div>
          </div>
          <div className="right-panel">
            <form className="form-container" onSubmit={handleSubmit}>
              <h3>Enter Details</h3>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Mallikarjun"
              />
              {errors.name && <span className="error">{errors.name}</span>}

              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Mallikarjun@raphacure.com"
              />
              {errors.email && <span className="error">{errors.email}</span>}

              {!addGuest ? (
                <button
                  type="button"
                  className="add-guest"
                  onClick={() => setAddGuest(true)}
                >
                  Add Guest
                </button>
              ) : (
                <>
                  <label htmlFor="guestEmail">Guest Email</label>
                  <input
                    type="email"
                    id="guestEmail"
                    value={formData.guestEmail}
                    onChange={handleInputChange}
                    placeholder="Guest email"
                  />
                </>
              )}

              <label htmlFor="phone">Phone Number*</label>
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9191919191"
                inputMode="numeric"
              />
              {errors.phone && <span className="error">{errors.phone}</span>}

              <label htmlFor="city">City*</label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
              />
              {errors.city && <span className="error">{errors.city}</span>}

              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message here"
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}

              <div className="terms">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                />
                <label htmlFor="terms">
                  By proceeding, you confirm that you have read and agree to
                  Rapha plus <span className="terms-link">Terms of Use</span>{" "}
                  and <span className="privacy-link">Privacy Notice</span>.
                </label>
              </div>
              {errors.terms && <span className="error">{errors.terms}</span>}

              <button
                type="submit"
                className="schedule-event"
                onClick={handleSubmit}
              >
                Schedule Event
              </button>
            </form>
          </div>
        </div>
      </div>
    </NextFormStyled>
  );
};

export default NextForm;
