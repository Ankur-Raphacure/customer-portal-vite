import React, { useEffect, useState } from "react";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import { ReactComponent as Resp } from "../../assets/icons/respiratory.svg";
import { ReactComponent as Pumps } from "../../assets/icons/pumps.svg";
import { ReactComponent as Monitor } from "../../assets/icons/monitor.svg";
import { ReactComponent as Support } from "../../assets/icons/support.svg";
import EquipmentCard from "./EquipmentCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDomiciliaryEquipmentsAPI } from "../../redux/slices/generic/genericService";

const MedicalEquipments = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("respiratory");

  const { allDomiciliaryEquipmentsList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const item = allDomiciliaryEquipmentsList?.equipment || [];

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handleBackClick = () => {
    history.push("/domiciliarycare");
  };

  const handleBookNow = (obj: any) => {
    history.push("/domiciliarycare/medicalequipments/equipmentdetail", obj);
  };

  useEffect(() => {
    dispatch(getAllDomiciliaryEquipmentsAPI(100));
  }, []);

  return (
    <DomiciliaryCareStyled>
      <div className="equipments mt-3 container-fluid">
        <div className="row mb-2">
          <div className="col-lg-2 text-center all-back-btn-div">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center button-row">
            <button
              className={`btn ${
                activeTab === "respiratory" ? "btn-primary" : "btn-secondary"
              } m-2`}
              onClick={() => handleTabChange("respiratory")}
            >
              <Resp /> Respiratory
            </button>
            <button
              className={`btn ${
                activeTab === "pumps" ? "btn-primary" : "btn-secondary"
              } m-2`}
              onClick={() => handleTabChange("pumps")}
            >
              <Pumps /> Pumps
            </button>
            <button
              className={`btn ${
                activeTab === "monitoring" ? "btn-primary" : "btn-secondary"
              } m-2`}
              onClick={() => handleTabChange("monitoring")}
            >
              <Monitor /> Monitoring
            </button>
            <button
              className={`btn ${
                activeTab === "support" ? "btn-primary" : "btn-secondary"
              } m-2`}
              onClick={() => handleTabChange("support")}
            >
              <Support /> Support Surfaces
            </button>
          </div>
        </div>

        <div className="tab-content mt-4">
          {activeTab === "respiratory" && (
            <div className="row">
              {item?.slice(0, 4).map((treatment: any, index: any) => (
                <div className="col" key={index}>
                  <div className="accordion-item">
                    <EquipmentCard
                      mostOrdersSection={true}
                      item={treatment}
                      handleBookNow={handleBookNow}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "pumps" && (
            <div className="row">
              {item?.slice(0, 4).map((treatment: any, index: any) => (
                <div className="col" key={index}>
                  <div className="accordion-item">
                    <EquipmentCard mostOrdersSection={true} item={treatment} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "monitoring" && (
            <div className="row">
              {item?.slice(0, 4).map((treatment: any, index: any) => (
                <div className="col" key={index}>
                  <div className="accordion-item">
                    <EquipmentCard mostOrdersSection={true} item={treatment} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "support" && (
            <div className="row">
              {item?.slice(0, 4).map((treatment: any, index: any) => (
                <div className="col" key={index}>
                  <div className="accordion-item">
                    <EquipmentCard mostOrdersSection={true} item={treatment} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="underline view-all float-right px-4 mt-4 ">
            <button>View More Equipments</button>
          </p>
        </div>
      </div>
    </DomiciliaryCareStyled>
  );
};

export default MedicalEquipments;
