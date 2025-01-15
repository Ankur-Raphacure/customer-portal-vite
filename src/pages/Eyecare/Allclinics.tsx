import React from "react";
import NearClinic from "./Nearclinic";
import { EyecareStyled } from "./Eyecare.styled";
import { useHistory } from "react-router-dom";
import { ReactComponent as Searchbar } from "../../assets/icons/search.svg";

const AllClinic = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push("/eyecare");
  };

  return (
    <EyecareStyled>
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
            <NearClinic showAll={true} />
          </div>
        </div>
      </div>
    </EyecareStyled>
  );
};

export default AllClinic;
