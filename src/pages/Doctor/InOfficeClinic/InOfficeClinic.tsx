import React from "react";
import { InOfficeClinicStyled } from "./InOfficeClinic.styled";
import Hospital from "../../Hospital";

const InOfficeClinic = () => {
  return (
    <InOfficeClinicStyled>
      {/* <div className="inOfficeClinic">InOfficeClinic</div> */}
      <Hospital type="nearest" />
    </InOfficeClinicStyled>
  );
};

export default InOfficeClinic;
