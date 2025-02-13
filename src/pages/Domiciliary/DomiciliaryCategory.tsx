import React from "react";
import { useHistory } from "react-router-dom";

const DentalCategory = () => {
  const history = useHistory();

  const services = [
    {
      name: "Nurse For Home",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500541121.png",
      link: "/domiciliarycare/nurseforhome",
    },
    {
      name: "Doctor For Home",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500580706.png",
      link: "/doctorforhome",
    },
    {
      name: "Medical Equipment's",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500603610.png",
      link: "/domiciliarycare/medicalequipments",
    },
    {
      name: "ICU at Home",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500626331.png",
      link: "/domiciliarycare/icuathome",
    },
    {
      name: "Remote Patient",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500656535.png",
      link: "/domiciliarycare/remotepatient",
    },
    {
      name: "Therapy",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500687974.png",
      link: "/therapy",
    },
    {
      name: "Vaccine",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500716894.png",
      link: "/domiciliarycare/vaccine",
    },
  ];

  const handleCardClick = (link: string) => {
    history.push(link);
  };

  return (
    <div className="">
      <h2 className="category-title">Category</h2>
      <div className="d-flex flex-wrap justify-content-between">
        {services.map((service, index) => (
          <div
            key={index}
            className="card category-card mb-4"
            onClick={() => handleCardClick(service.link)}
          >
            <img
              src={service.image}
              alt={service.name}
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">{service.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DentalCategory;
