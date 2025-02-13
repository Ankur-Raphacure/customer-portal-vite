import React from "react";
import { useHistory } from "react-router-dom";

const DentalCatogory = () => {
  const history = useHistory();

  const services = [
    {
      name: "Dental Consultation",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736332903705.png",
      link: "/doctor?q=dentist",
      subText: "Bringing Hope and Health Together",
    },
    {
      name: "Endodontics",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736333038741.png",
      link: "",
      subText: "Innovative Care for a Healthier Community",
    },
    {
      name: "Orthodontics",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736333038741.png",
      link: "",
      subText: "Precision Eye Care, Personalized Service",
    },
    {
      name: "Pedodontics",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736333173350.png",
      link: "",
      subText: "Experience Clarity and Fashion in Every Frame",
    },
    {
      name: "Periodontics",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736333229102.png",
      link: "",
      subText: "Discover Expert Tips and Insights in Our Blog",
    },
    {
      name: "Prosthodontics",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736333264770.png",
      link: "",
      subText: "Discover Expert Tips and Insights in Our Blog",
    },
  ];

  const handleCardClick = (link: any) => {
    if (link) {
      history.push(link);
    } else {
      history.push("/dentalcare/clinicall");
    }
  };

  return (
    <div className="categoryCardMainDiv">
      {services.map((service, index) => (
        <div
          key={index}
          className="Main"
          onClick={() => handleCardClick(service.link)}
        >
          <div className="image-div">
            <img
              src={service.image}
              alt={service.name}
              className="rounded-circle roundedImages"
            />
          </div>
          <div className="imageName">{service.name}</div>
          <div className="imageSubtitle">{service.subText}</div>
        </div>
      ))}
    </div>
  );
};

export default DentalCatogory;
