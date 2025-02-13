import React, { useState, useEffect } from "react";
import { Calendar } from "antd";
import { BookDemoStyled } from "./BookDemo.styled";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { MdLanguage } from "react-icons/md";
import { BsCameraVideo, BsClock } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "antd/dist/antd.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour > 12 ? hour - 12 : hour;
      const period = hour >= 12 ? "PM" : "AM";
      const time = `${formattedHour}:${minute
        .toString()
        .padStart(2, "0")} ${period}`;
      slots.push(time);
    }
  }
  return slots;
};

const BookDemo = () => {
  const history = useHistory();
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState<any>(null);

  const [selectedTime, setSelectedTime] = useState<any>(null);
  const [showRightPanel, setShowRightPanel] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const handlePanelChange = (newMonth: any) => {
    setCurrentMonth(newMonth);
    setSelectedDate(null);
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    setCurrentMonth((prev) => {
      if (direction === "prev" && prev.isSame(moment(), "month")) {
        return prev;
      }
      return direction === "prev"
        ? prev.clone().subtract(1, "month")
        : prev.clone().add(1, "month");
    });
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const renderTimeSlots = () => {
    const availableTimeSlots = selectedDate ? generateTimeSlots() : [];

    const handleNextClick = () => {
      if (selectedTime) {
        const formattedDate = selectedDate.format("YYYY-MM-DD");

        history.push("/bookdemo/form", {
          selectedDate: formattedDate,
          selectedTime,
        });
      }
    };

    return availableTimeSlots.map((slot, index) => (
      <div key={index} className="time-slot-container">
        <button
          className={`time-slot-button ${
            selectedTime === slot ? "selected" : ""
          }`}
          onClick={() => setSelectedTime(slot)}
        >
          {slot}
        </button>
        {selectedTime === slot && (
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    ));
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowRightPanel(!(selectedDate && windowWidth < 1200));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [selectedDate]);

  return (
    <BookDemoStyled>
      <div className="p-75 align-items-baseline wrapper">
        {showRightPanel && (
          <div className="booking-container">
            <div className="doctor-tool-card">
              {/* Header Section */}
              <div className="header">
                <AiOutlineArrowLeft
                  size={32}
                  className="back-icon"
                  onClick={() => history.push("/")}
                />
                <h3 className="company-name">Raphaplus</h3>
                <h2 className="title">
                  Experience Rapha + <br />
                  Clinic Management <br />
                  Doctor Tool
                </h2>
              </div>
              <div className="details-section">
                <div className="detail">
                  <BsClock className="icon" />
                  <span>15 min</span>
                </div>
                <div className="detail">
                  <BsCameraVideo className="icon" />
                  <span>
                    Web conferencing details provided <br />
                    upon confirmation.
                  </span>
                </div>
                <div className="detail">
                  <MdLanguage className="icon" />
                  <span>India Standard Time</span>
                </div>
              </div>
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
              <h2>Select a Date & Time</h2>
              <div className="calendar-time-container">
                <div className="calendar-navigation">
                  <button
                    onClick={() => handleMonthChange("prev")}
                    disabled={currentMonth.isSame(moment(), "month")}
                  >
                    {"<"}
                  </button>
                  <span>{currentMonth.format("MMMM YYYY")}</span>
                  <button onClick={() => handleMonthChange("next")}>
                    {">"}
                  </button>
                </div>

                <Calendar
                  fullscreen={false}
                  value={currentMonth}
                  onPanelChange={(newMonth) => setCurrentMonth(newMonth)}
                  onSelect={(date) => {
                    setSelectedDate(date);
                    setCurrentMonth(date);
                  }}
                  disabledDate={
                    (date) =>
                      date &&
                      (date < moment().startOf("day") ||
                        date.day() === 0 ||
                        date.day() === 6) // Disable past dates and weekends
                  }
                  headerRender={() => null}
                />
              </div>
            </div>
          </div>
        )}
        {selectedDate && (
          <div className="time-slots-container">
            <AiOutlineArrowLeft
              size={32}
              className="back-icon"
              onClick={() => setSelectedDate(null)}
            />
            <div className={`time-slots ${selectedDate ? "" : "hidden"}`}>
              <h3>{selectedDate.format("dddd, MMMM D")}</h3>
              <div className="time-slots-grid">{renderTimeSlots()}</div>
            </div>
          </div>
        )}
      </div>
    </BookDemoStyled>
  );
};

export default BookDemo;
