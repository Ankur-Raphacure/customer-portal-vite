import React from "react";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";
import { DentalCareListStyled } from "./DentalCareList.styled";

const DentalCareList = () => {
  const clinicsData = [
    {
      id: 1,
      name: "Adithya Vision Care",
      address: "Cataract surgery Consultation",
    },
    {
      id: 2,
      name: "Adithya Vision Care",
      address: "Cataract surgery Consultation",
    },
    {
      id: 3,
      name: "Adithya Vision Care",
      address: "Cataract surgery Consultation",
    },
    {
      id: 4,
      name: "Adithya Vision Care",
      address: "Cataract surgery Consultation",
    },
  ];
  return (
    <DentalCareListStyled>
      {clinicsData.map((clinic) => (
        <div key={clinic.id} className="hospital_item round-shadow">
          <div className="hospital_img">
            <img src={HArticle_3} alt="Hospital Image" />
          </div>
          <div className="hospital_data">
            <h5>Cataract surgery Consultation</h5>
          </div>
        </div>
      ))}
    </DentalCareListStyled>
  );
};

export default DentalCareList;
