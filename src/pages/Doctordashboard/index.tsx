import React from "react";
import { DocdashboardStyled } from "./DocdashboardStyled.styled";
import Overview from "./Components/Overview/Overview";
import Appointment from "./Components/Appointment/Appointment";
import Appointmentorder from "./Components/Appointmentorder/Appointmentorder";
// import BookingsDoc from "./Components/Bookingsdoctor/BookingsDoc";

const Docdash = () => {
  return (
    <DocdashboardStyled>
      <div className="maindash">
        <div className="dashboardnav"></div>
        <div className="leftsec">
          <Overview />
          <Appointmentorder />
        </div>
        <div className="rightsec">
          <Appointment />
        </div>
      </div>
      {/* <BookingsDoc /> */}
    </DocdashboardStyled>
  );
};

export default Docdash;
