import React from "react";
import { AboutUsStyled } from "./AboutUs.styled";

const cards = [
  {
    title: "Centralized Health Records",
    description:
      "Easily access and manage all patient information in one secure location.",
    imageUrl: "https://via.placeholder.com/300x200?text=Health+Records",
  },
  {
    title: "Telemedicine Services",
    description:
      "Connect with healthcare providers remotely through our secure platform.",
    imageUrl: "https://via.placeholder.com/300x200?text=Telemedicine",
  },
  {
    title: "Appointment Scheduling",
    description: "Schedule and manage your medical appointments with ease.",
    imageUrl: "https://via.placeholder.com/300x200?text=Appointments",
  },
];

const AboutUs = () => {
  return (
    <AboutUsStyled>
      <div className="BackgroundContainer">
        <div className="NameOverlay">
          <h4>About Us</h4>
          <p>{`Home > About Us`}</p>
        </div>
      </div>
      <div className="about-heading-div">
        <h5 className="me-3">RAPHAPLUS - The Platform </h5>
        <h5 className="about-heading-div-p">You Deserve</h5>
      </div>
      <div className="about-content-div">
        <p>
          RaphaPlus is a comprehensive healthcare management system that
          streamlines clinic operations, corporate healthcare plans, and patient
          care. It offers centralized health records, efficient scheduling, and
          secure data management. With tools like detailed analytics and free
          professional websites, RaphaPlus enhances efficiency and boosts
          revenue for healthcare providers.
        </p>
      </div>

      <div className="card-container">
        {cards.map((card, index) => (
          <div className="about-card-div" key={index}>
            <div className="about-card-hover-div">
              <div className="card-info">
                <div>
                  <img src={card.imageUrl} alt={card.title} />
                </div>
                <div className="card-title-text-info">
                  <h4>{card.title}</h4>
                </div>
                <div className="card-sub-title-text-info">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AboutUsStyled>
  );
};

export default AboutUs;
