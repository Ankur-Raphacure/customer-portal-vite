import React from "react";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";
import { ClinicsStyled } from "./Clinics.styled";

const Clinics = (props: any) => {
  const { list, habdleBookNow } = props;
  return (
    <ClinicsStyled>
      {list?.map((clinic: any) => (
        <div key={clinic.id} className="hospital_item round-shadow">
          {/* <div className="hospital_img">
            <img src={HArticle_3} alt="Hospital Image" />
          // </div> */}
          <div className="hospital_datalist">
            <div className="hospital_data">
              <div className="top-sec-date-new">
                <div className="text-lg poppins-medium clinic-name-sec">
                  {clinic.name}
                </div>
                <p className="address-box-name">
                  <span className="eye-key-name">Address: </span>
                  <span>{clinic.address}</span>
                </p>
                <p>
                  <span className="eye-key-name">City: </span>
                  <span className="eye-city-value-name">{clinic.city}</span>
                </p>
                <p>
                  <span className="eye-key-name">Language: </span>
                  <span className="eye-city-value-name">{`English`}</span>
                </p>
              </div>
              <div className="btn-div">
                <button
                  className="btn btn-primary"
                  onClick={() => habdleBookNow(clinic)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ClinicsStyled>
  );
};

export default Clinics;
