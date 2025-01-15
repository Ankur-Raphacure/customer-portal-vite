// DatePickerComponent.js
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DateTimePickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Duration = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
  width: 100%;
  text-align: center;
  padding: 10px;
  background: #eeeeee;
  border-radius: 10px;
`;

const DatePickerComponent = ({ setShowAmbulances }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const calculateDuration = (start, end) => {
    if (start && end) {
      const startMoment = moment(start);
      const endMoment = moment(end);

      const years = endMoment.diff(startMoment, "years");
      startMoment.add(years, "years");

      const months = endMoment.diff(startMoment, "months");
      startMoment.add(months, "months");

      const days = endMoment.diff(startMoment, "days");
      startMoment.add(days, "days");

      const hours = endMoment.diff(startMoment, "hours");
      startMoment.add(hours, "hours");

      const minutes = endMoment.diff(startMoment, "minutes");

      const parts = [];
      if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
      if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
      if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);
      if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
      if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
      if (years > 0 || months > 0 || days > 0 || hours > 0 || minutes > 0) {
        setShowAmbulances(true);
      }
      return parts.join(", ");
    }
    return "Please select both dates";
  };

  return (
    <Container>
      <DateTimePickerContainer>
        <div>
          <Label>Start date</Label>
          <Datetime
            value={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            inputProps={{ placeholder: "Select start date" }}
          />
        </div>
        <div>
          <Label>End date</Label>
          <Datetime
            value={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            inputProps={{ placeholder: "Select end date" }}
          />
        </div>
      </DateTimePickerContainer>
      <Duration>{calculateDuration(startDate, endDate)}</Duration>
    </Container>
  );
};

export default DatePickerComponent;
