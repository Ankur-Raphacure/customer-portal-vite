import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";
import { ManagementStyled } from "./Management.styled";

const Management = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null);

  const toggleDescription = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Billing and invoicing made simple",
      description:
        "Streamline your clinic's billing and invoicing process with our intuitive tools.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136672214.png",
    },
    {
      title: "Secure data storage and compliance",
      description:
        "Ensure the safety and privacy of your patient data with our secure storage and compliance features.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136727912.png",
    },
    {
      title: "Appointment scheduling and reminders",
      description:
        "Streamline your clinic's scheduling with automated reminders to keep both staff and patients on track.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136854723.png",
    },
    {
      title: "Comprehensive patient record management",
      description:
        "Manage your patients' records in one centralized and secure location.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex: any) => (prevIndex + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [features.length]);

  return (
    <ManagementStyled>
      <div className="clinic-management-container">
        <div className="clinic-management-content">
          <h2 className="clinic-management-title">Clinic Management</h2>
          <p className="clinic-management-description">
            Streamline operations, boost efficiency, and improve organization.
          </p>
          <div className="clinic-management-features">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`clinic-management-feature ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleDescription(index)}
              >
                <div className="clinic-management-feature-header">
                  <div className="clinic-management-feature-icon">
                    {activeIndex === index ? (
                      <FaArrowDownLong />
                    ) : (
                      <FaArrowRightLong />
                    )}
                  </div>
                  <div>
                    <h3 className="clinic-management-feature-title">
                      {feature.title}
                    </h3>
                    {activeIndex === index && (
                      <div className="clinic-management-feature-description">
                        {feature.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="clinic-management-image">
          <img
            src={
              activeIndex !== null
                ? features[activeIndex].imageSrc
                : features[0].imageSrc
            }
            alt="Clinic Management"
          />
        </div>
      </div>
    </ManagementStyled>
  );
};

export default Management;
