import React from "react";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";
import { DentalClinicsStyled } from "./DentalClincs.styled";

const DentalClincs = () => {
  const clinicsData = [
    {
      id: 1,
      name: "Adithya Vision Care",
      address:
        "GR Towers, 1933, 19th E Main Rd, opposite dhamodar party hall, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010 City: bengaluru",
      services: "Languages: English Services: Eye Consultation",
    },
    {
      id: 2,
      name: "Adithya Vision Care",
      address:
        "GR Towers, 1933, 19th E Main Rd, opposite dhamodar party hall, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010 City: bengaluru",
      services: "Languages: English Services: Eye Consultation",
    },
  ];

  return (
    <DentalClinicsStyled>
      {clinicsData.map((clinic) => (
        <div key={clinic.id} className="hospital_item round-shadow">
          <div className="hospital_img">
            <img src={HArticle_3} alt="Hospital Image" />
          </div>
          <div className="hospital_datalist">
            <div className="hospital_data">
              <div className="text-lg poppins-medium">{clinic.name}</div>
              <p>{clinic.address}</p>
              <div className="btn-div">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </DentalClinicsStyled>
  );
};

export default DentalClincs;
