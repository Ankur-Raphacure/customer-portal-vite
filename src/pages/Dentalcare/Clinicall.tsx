import React from "react";
import { DentalcareStyled } from "./Dentalcare.styled";
import { useHistory } from "react-router-dom";
import { ReactComponent as Searchbar } from "../../assets/icons/search.svg";
import Clinicsnear from "./Clinicsnear";

const Clinicall = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push("/dentalcare");
  };

  return (
    <DentalcareStyled>
      <div className="all-clinics">
        <div className="container">
          <div className="row">
            <button className="backbtn" onClick={handleBackClick}>
              {`Back`}
            </button>
          </div>
          <div className="row">
            <div className="search-bar">
              <span className="search-icon">
                <Searchbar />
              </span>
              <input type="text" placeholder="Search for Medicine" />
            </div>
          </div>
          <div className="row">
            <Clinicsnear showAll={true} />
          </div>
        </div>
      </div>
    </DentalcareStyled>
  );
};

export default Clinicall;
