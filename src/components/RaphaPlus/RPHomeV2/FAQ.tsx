import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FaArrowRightLong,
  FaArrowDownLong,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { FAQStyled } from "./FAQ.styled";

const FAQ = () => {
  // const [activeIndex, setActiveIndex] = useState<any>(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [isScrollable, setIsScrollable] = useState(false);
  const history = useHistory();

  const toggleDescription = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleCount(features.length);
    setIsScrollable(true);
  };

  const features = [
    {
      title: "What is the process for onboarding, and how long does it take?",
      description:
        "The onboarding process involves completing a quick registration, submitting necessary documents, and profile verification. It typically takes a few days to complete, depending on document validation. ",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136672214.png",
    },
    {
      title: "What documents are required for onboarding?",
      description:
        "Commonly required documents include identity proof, medical certifications, and relevant licenses. You will receive a detailed list during the onboarding process.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136727912.png",
    },
    {
      title: "Is there any registration fee or commission?",
      description:
        "No, there is no registration fee. Commission structures, if applicable, will be transparently communicated during onboarding.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136854723.png",
    },
    {
      title: "How does the teleconsultation process work?",
      description:
        "Patients can book an appointment through the platform. At the scheduled time, you will connect via a secure video or audio call. You can also access and update patient records during the consultation.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "How can I set my availability for consultations?",
      description:
        "You can set and manage your availability through the platform's scheduling tool, adjusting your hours and dates as needed.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "How is the payment structure? When will I get paid?",
      description:
        "The payment structure and frequency will be detailed in your agreement. Generally, payments are processed on a regular basis, such as weekly or monthly, depending on the platform's policies. ",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136672214.png",
    },
    {
      title: "How is patient data handled, and is it secure?",
      description:
        "Patient data is securely stored and managed according to industry standards and compliance guidelines to ensure privacy and confidentiality. ",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136727912.png",
    },
    {
      title: "Can I prescribe medications through the platform?",
      description:
        "Yes, the platform allows you to prescribe medications, following applicable guidelines and regulations.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136854723.png",
    },
    {
      title: "What if I face technical issues during a consultation?",
      description:
        "In case of technical issues, you can reach out to our dedicated support team for immediate assistance.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "Can I manage my consultation fees?",
      description:
        "Yes, you have the flexibility to set and update your consultation fees based on your preferences.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "How do I handle follow-up consultations?",
      description:
        "Follow-up consultations can be scheduled and managed directly through the platform, allowing you to track patient progress efficiently.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "What types of patients will I be consulting?",
      description:
        "The platform connects you with patients seeking care for a wide range of conditions, depending on your expertise and specialization.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "Do I need to sign any contracts or agreements?",
      description:
        "Yes, a service agreement or contract will be required to outline terms and responsibilities for using the platform.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "How can I update my profile information?",
      description:
        "You can easily update your profile details, such as your availability, fees, and specialties, through the platform’s profile management section.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "What are the benefits of joining this platform?",
      description:
        "Key benefits include enhanced patient reach, streamlined management tools, flexible scheduling, and secure teleconsultation capabilities.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "Can I pause my availability on the platform?",
      description:
        "Yes, you can temporarily pause your availability to take breaks or manage other commitments.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "Will I have access to patient medical history?",
      description:
        "Yes, you will have secure access to relevant patient medical histories, which can help inform your consultations.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "How is feedback and rating managed on the platform?",
      description:
        "Patient feedback and ratings are used to improve services and maintain transparency. Detailed policies on how they are displayed and managed will be provided.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
    {
      title: "Who do I contact if I need help or have questions?",
      description:
        "Our support team is available to assist you with any queries or issues. You can contact us via email, phone, or through the in-platform support feature.",
      imageSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733136878392.png",
    },
  ];

  return (
    <FAQStyled>
      <div className="clinic-management-container">
        <div className="clinic-management-content">
          <h2 className="clinic-management-title">Frequently Ask Question</h2>
          <p className="clinic-management-description">
            Have questions? We've got answers! Check out our FAQs for quick
            solutions and helpful information about our menu, services, and
            more.
          </p>
          <div className="features-wrapper">
            <div
              className="clinic-management-features"
              style={
                isScrollable
                  ? {
                      maxHeight: "520px",
                      overflowY: "scroll",
                      paddingRight: "10px",
                    }
                  : {}
              }
            >
              {features.slice(0, visibleCount).map((feature, index) => (
                <div
                  key={index}
                  className={`clinic-management-feature ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleDescription(index)}
                >
                  <div className="clinic-management-feature-header">
                    <h3 className="clinic-management-feature-title">
                      {feature.title}
                    </h3>
                    <div className="clinic-management-feature-icon">
                      {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="clinic-management-feature-description">
                      {feature.description}
                    </div>
                  )}
                </div>
              ))}
              <div className="load-more">
                {visibleCount < features.length && (
                  <button className="load-more-button" onClick={handleLoadMore}>
                    Load More...
                  </button>
                )}
              </div>
            </div>

            <div className="goal">
              <p className="goal-title">Your Vision</p>
              <p className="goal-title">Your Goal</p>
              <p className="goal-title">Your Website</p>
              <button className="goal-button">Start Now →</button>
            </div>

            <div className="contact-card">
              <div className="card-content">
                <div className="icon">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735291074913.png"
                    alt="Question Mark Icon"
                  />
                </div>
                <h2>Didn’t Find Your Answer?</h2>
                <p>
                  No worries! Reach out to us directly, and our team will be
                  happy to assist you with any questions or concerns.
                </p>
                <button
                  className="contact-button"
                  onClick={() => history.push("/connectus")}
                >
                  
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FAQStyled>
  );
};

export default FAQ;
