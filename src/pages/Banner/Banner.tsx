import React, { useState } from "react";
import { BannerStyled } from "./Banner.styled";
import eyecareImg from "../../assets/images/eyecarenew.png";
import dentalcareImg from "../../assets/images/dentalcare/dentalbg.png";
import EyeCareModal from "../../pages/EyeCareModule/EyeCareModal";
import DentalCareModal from "../../pages/DentalCareModule/DentalCareModal";

interface BannerProps {
  section: "eyecare" | "dentalcare";
}

const Banner: React.FC<BannerProps> = ({ section }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = {
    eyecare: {
      title: "Leading Eye Care Solutions for a Brighter Future",
      description:
        "Trust our experienced eye care professionals to provide top-quality care. From eye exams to specialized treatments, we’re committed to preserving and enhancing your vision.",
      image: eyecareImg,
      buttonText: "Book Free Appointment",
    },
    dentalcare: {
      title: "Comprehensive Dental Care for Your Smile",
      description:
        "Our dental care services focus on preventive and restorative care to keep your smile healthy and bright. Book an appointment today for personalized dental care.",
      image: dentalcareImg,
      buttonText: "Schedule a Consultation",
    },
  };

  const { title, description, image, buttonText } = sections[section];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BannerStyled>
      <div className="eyecarebanner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <h2>{title}</h2>
              <p>{description}</p>
              <button className="consult-btn" onClick={openModal}>
                {buttonText}
              </button>
            </div>
            <div className="col-md-5">
              <img src={image} alt={`${section}-image`} />
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render modals based on the section */}
      {section === "eyecare" ? (
        <EyeCareModal isOpen={isModalOpen} onClose={closeModal} />
      ) : (
        <DentalCareModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </BannerStyled>
  );
};

export default Banner;
