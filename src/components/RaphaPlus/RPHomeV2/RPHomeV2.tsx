import React from "react";
import { RPHomeV2Styled } from "./RPHomeV2.styled";
import HeroSection from "./HeroSection";
import AnimatedCard from "./AnimatedCard";
import Management from "./Management";
import Analytics from "./Analytics";
import OnlinePresence from "./OnlinePresence";
import RaphaPlusAssurance from "./RaphaPlusAssurance";
import PatientEngagement from "./PatientEngagement";
import Testimonials from "./Testimonials";
import WebsiteBuilderGuide from "./WebsiteBuilderGuide";
import FAQ from "./FAQ";
import Privacy from "./Privacy";

const RPHomeV2 = () => {
  
  const cardData = [
    {
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733131637849.png",
      title: "Clinic Management",
      description: "Streamline Operations, Boost Efficiency, and Organize.",
    },
    {
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733131838469.png",
      title: "Practice Analytics",
      description: "Make informed decisions with in-depth practice analytics.",
    },
    {
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733131854589.png",
      title: "Patient Engagement",
      description: "Enhance Patient Engagement and Satisfaction.",
    },
    {
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733131874903.png",
      title: "Online Presence",
      description: "Attract and retain patients with a strong online presence.",
    },
  ];

  return (
    <RPHomeV2Styled>
      <HeroSection />
      <div className="animatedCardsWrapper">
        <div className="info">
          <div className="info-content">
            <strong>The Rapha+ Assurance</strong>
            <p>
              Experience our practice management tool with confidence - your
              satisfaction is our commitment, and we’re here to ensure your
              success.
            </p>
          </div>
        </div>
        {cardData.map((card, index) => (
          <AnimatedCard
            key={index}
            image={card?.image}
            title={card?.title}
            description={card?.description}
          />
        ))}
      </div>
      <Management />
      <Analytics />
      <PatientEngagement />
      <OnlinePresence />
      <RaphaPlusAssurance />
      <Testimonials />
      {/* <div className="privacyImg">
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733141795757.png"
          alt="Securely Manage Privacy"
          className="m-auto w-full"
        />
      </div> */}
      <Privacy />
      <WebsiteBuilderGuide />
      <FAQ />
    </RPHomeV2Styled>
  );
};

export default RPHomeV2;
