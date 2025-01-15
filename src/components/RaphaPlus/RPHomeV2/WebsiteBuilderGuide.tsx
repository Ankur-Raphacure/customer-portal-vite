import React, { useState, useEffect } from "react";
import { WebsiteBuilderGuideStyled } from "./WebsiteBuilderGuide.styled";

const WebsiteBuilderGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Login to Your Dashboard",
      description: "Access your RaphaPlus dashboard using your credentials.",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733142998285.png",
    },
    {
      title: "Verify Identity & Set Up Clinic Profile",
      description:
        "Complete the verification process and provide essential clinic details.",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733142998285.png",
    },
    {
      title: "Customize Your Website",
      description:
        "Design and personalize your website using the intuitive website builder.",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733142998285.png",
    },
    {
      title: "Publish Your Website",
      description: "Make your website live and accessible to your patients.",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733142998285.png",
    },
  ];

  const handleStepClick = (index: any) => {
    setActiveStep(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <WebsiteBuilderGuideStyled>
      <div className="website-builder-guide">
        <div className="steps">
          <h2>How to Build your Website in Minutes</h2>
          <div className="">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className={`stepsWrapper step ${
                  index === activeStep ? "active" : ""
                }`}
              >
                <div
                  className="index"
                  style={{
                    justifyContent: index === 3 ? "flex-start" : "center",
                  }}
                >
                  <h5>{index + 1}</h5>
                  <span
                    className="vertical-line"
                    style={{
                      height: index === 3 ? "0" : "5rem",
                    }}
                  />
                </div>
                <div className="inner-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button>Start Now</button>
        </div>
        <div className="image-container">
          <img
            src={`${steps[activeStep].image}`}
            alt={steps[activeStep].title}
          />
        </div>
      </div>
      <div className="website-builder-mobile">
        <div className="content-container">
          <h1>How to build your Website in minutes</h1>
          <p>Follow these 6 simple steps to create a website today</p>
          <div className="inner-content">
            <ol>
              <li>
                <strong>1 Login to Your Dashboard</strong>
                <p>Access your RaphaPlus dashboard using your credentials.</p>
              </li>
              <li>
                <strong>2 Verify Identity & Set Up Clinic Profile</strong>
                <p>
                  Complete the verification process and provide essential clinic
                  details.
                </p>
              </li>
              <li>
                <strong>3 Customize Your Website</strong>
                <p>
                  Design and personalize your website using the intuitive
                  website builder.
                </p>
              </li>
              <li>
                <strong>4 Publish Your Website</strong>
                <p>Make your website live and accessible to your patients.</p>
              </li>
            </ol>
          </div>
          <button className="start-now-button">Start Now →</button>
        </div>
      </div>
    </WebsiteBuilderGuideStyled>
  );
};

export default WebsiteBuilderGuide;
