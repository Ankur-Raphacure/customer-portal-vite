import React from "react";
import PatientMonitoringBanner from "./PatientMonitoringBanner";
import PatientReport from "./PatientReport";
import PatientBenifits from "./PatientBenifits";
import PatientAbout from "./PatientAbout";
import { PatientMonitoringStyled } from "./PatientMonitoring.styled";

const PatientMonitoring = () => {
  return (
    <PatientMonitoringStyled>
      <div className="mainDiv">
        <PatientMonitoringBanner />

        <div className="SubDiv">
          <PatientReport />
          <PatientBenifits />
          <PatientAbout />
        </div>
      </div>
    </PatientMonitoringStyled>
  );
};

export default PatientMonitoring;
