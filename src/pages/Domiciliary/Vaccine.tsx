import React, { useEffect } from "react";
import VaccineCard from "./VaccineCard";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDomiciliaryVaccinationsAPI } from "../../redux/slices/generic/genericService";

const listFilters = [
  "Children’s",
  "Adolescent and Adult",
  "Special Considerations",
  "Travel Vaccines",
];

const Vaccine = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleBackClick = () => {
    history.push("/domiciliarycare");
  };

  const { allDomiciliaryVaccinationsList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );

  console.log(
    allDomiciliaryVaccinationsList?.tests,
    "allDomiciliaryVaccinationsList"
  );

  useEffect(() => {
    dispatch(getDomiciliaryVaccinationsAPI(100));
  }, []);
  return (
    <DomiciliaryCareStyled>
      <div className="vaccine mb-2">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-lg-2 text-center all-back-btn-div">
              <button className="back-btn " onClick={handleBackClick}>
                Back
              </button>
            </div>
          </div>

          <div className="row">
            <div className="labs-search-section">
              <div className="search-bar">
                <input type="search" placeholder="Search Equipment's" />
                <button type="submit">Search</button>
              </div>

              <div className="labs-search-section-links">
                {listFilters?.map((itec: any) => {
                  return <button>{itec}</button>;
                })}
              </div>
            </div>
          </div>
          <div className="row">
            <VaccineCard
              fromPage={`womanscare`}
              // addToCart={addToCart1}
              list={allDomiciliaryVaccinationsList?.tests}
            />
          </div>
        </div>
      </div>
    </DomiciliaryCareStyled>
  );
};

export default Vaccine;
