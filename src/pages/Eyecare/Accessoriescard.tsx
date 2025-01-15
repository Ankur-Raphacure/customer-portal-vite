import React from "react";
import { useHistory } from "react-router-dom";

const EyecareCatogory = () => {

  const history = useHistory();

  const services = [
    {
      name: "Eyeglasses",
      image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736336143820.png",
      link: "/eyecare/accessories/glasses",
    },
    {
      name: "Sunglasses",
      image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736336217130.png",
      
    },
    {
      name: "Screen Glasses",
      image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736336287502.png",
      // link: "/visiontest",
    },
    {
      name: "Contact Lenses",
      image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736336366050.png",
      // link: "/accessories",
    },
    {
      name: "Power Sunglasses",
      image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736336417634.png",
      // link: "/womenscare/nutritiondiets",
    },
    {
      name: "Progressive Lenses",
      image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736337113013.png",
      // link: "/womenscare/nutritiondiets",
    },
  ];

  const handleCardClick = (link: any) => {
    history.push(link);
  };

  return (
    <div className="CardMainDiv">
      {services.map((service, index) => (
        <div
          key={index}
          className="Main-div"
          onClick={() => handleCardClick(service.link)}
        >
          <div className="image-div">
            <img
              src={service.image}
              alt={service.name}
              className="rounded-circle roundedImages"
            />
          </div>
          <div className="Name">{service.name}</div>
        </div>
      ))}
    </div>
  );
};

export default EyecareCatogory;
