import React from "react";
import { CardStyled } from "./Card.styled";
import { useHistory, useLocation } from "react-router-dom";

const Card = () => {
  const history = useHistory();
  const location = useLocation();
  const { resp } = location.state || ({} as any);

  const formatDate = (dateString: any) => {
    const options = { day: "numeric", month: "short" } as any;
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString: any) => {
    const [hour, minute] = timeString.split(":");
    const hourInt = parseInt(hour, 10);
    const period = hourInt >= 12 ? "PM" : "AM";
    const hourFormatted = hourInt > 12 ? hourInt - 12 : hourInt;
    return `${hourFormatted}:${minute} ${period}`;
  };

  return (
    <CardStyled>
      <div className="card-container">
        <h2 className="title">Booking Confirmed</h2>
        <div className="line-div"></div>
        <p className="message">
          "Thank you! Everything is set for your call. A detailed booking
          confirmation will be sent to this email address shortly."
        </p>
        <div className="info-container">
          <div className="emails">
            <p>{resp?.email || "Your email"}</p>
            <p>{resp?.guestEmail || "Guest email"}</p>
          </div>
          <div className="details">
            <div className="date">
              <p>
                {
                  formatDate(resp?.date || new Date().toISOString()).split(
                    " ",
                  )[1]
                }
              </p>
              <p>
                {
                  formatDate(resp?.date || new Date().toISOString()).split(
                    " ",
                  )[0]
                }
              </p>
            </div>
            <div className="time">
              <p>Let's meet@</p>
              <span>{`${formatTime(resp?.time || "00:00")} - 15 mins`}</span>
            </div>
          </div>
        </div>
        <div className="confirmation">
          <img
            className="check-icon"
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1734687128124.png"
            alt="Confirmation Icon"
          />
          <p>
            Thank you! <br />
            Everything is set for your call.
          </p>
        </div>
        {/* <button
          className="reschedule-btn"
          onClick={() => history.push("/bookdemo/form")}
        >
          Re-Schedule
        </button> */}
      </div>
    </CardStyled>
  );
};

export default Card;
