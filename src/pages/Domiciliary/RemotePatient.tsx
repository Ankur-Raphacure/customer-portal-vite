import React, { useEffect } from "react";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import { useHistory } from "react-router-dom";
import EquipmentCard from "./EquipmentCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDomiciliaryEquipmentsAPI } from "../../redux/slices/generic/genericService";

const RemotePatient = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { allDomiciliaryEquipmentsList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const item = allDomiciliaryEquipmentsList?.equipment || [];

  const handleBackClick = () => {
    history.push("/domiciliarycare");
  };

  const listFilters = [
    "Vital Signs",
    "Cardiac",
    "Respiratory",
    "Neuro Monitoring",
    "Fetal Monitors",
    "Continuous Glucose",
    "Wearable",
  ];

  useEffect(() => {
    dispatch(getAllDomiciliaryEquipmentsAPI(100));
  }, []);

  return (
    <DomiciliaryCareStyled>
      <div className="remote-patient mt-3 container-fluid">
        <div className="row mb-2">
          <div className="col-lg-2 text-center all-back-btn-div">
            <button className="back-btn" onClick={handleBackClick}>
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
          {item?.slice(0, 4).map((treatment: any, index: any) => (
            <div className="col" key={index}>
              <div className="accordion-item">
                <EquipmentCard
                  mostOrdersSection={true}
                  item={treatment}
                  // handleBookNow={handleBookNow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DomiciliaryCareStyled>
  );
};

export default RemotePatient;
