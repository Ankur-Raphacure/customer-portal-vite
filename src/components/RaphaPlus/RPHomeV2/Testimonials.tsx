import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestimonialsStyled } from "./Testimonials.styled";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Lorem Ipsum",
    specialization: "Pediatrician",
    testimonial:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
    image:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733141376277.png", // Replace with actual image URL
  },

  {
    id: 2,
    name: "Dr. Parikshit Deore",
    specialization: "ENT Specialist",
    testimonial:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733141376277.png", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Dr. Alan Deore",
    specialization: "Nutrition Specialist",
    testimonial:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    image:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733141376277.png", // Replace with actual image URL
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <TestimonialsStyled>
      <div className="testimonials-container">
        <h2 className="title">Clients Testimonial's</h2>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="testimonial-image"
            />
            <div className="testimonials">
              <div className="prevNextBtns">
                <button className="nav-btn prev" onClick={handlePrev}>
                  <FaArrowLeftLong color="#fff" size={30} />
                </button>

                <button className="nav-btn next" onClick={handleNext}>
                  <FaArrowRightLong color="#fff" size={30} />
                </button>
              </div>
              <div className="name-spec">
                <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                <h4 className="testimonial-specialization">
                  {currentTestimonial.specialization}
                </h4>
              </div>
              <div className="testimonial">
                <p className="testimonial-text">
                  {currentTestimonial.testimonial}
                </p>
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733287966580.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dots-container">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="testimonials-moblie-look">
        <div className="heading-arrow">
          <h2 className="title">Clients Testimonial's</h2>
          <div className="prevNextBtns">
            <button className="nav-btn prev" onClick={handlePrev}>
              <FaArrowLeftLong color="#fff" size={30} />
            </button>

            <button className="nav-btn next" onClick={handleNext}>
              <FaArrowRightLong color="#fff" size={30} />
            </button>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="mobile-header">
            <div className="header-lh">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="testimonial-image"
              />
              <div className="specs">
                <h3 className="testimonial-name">{currentTestimonial.name}</h3>
                <h4 className="testimonial-specialization">
                  {currentTestimonial.specialization}
                </h4>
              </div>
            </div>
            <div className="header-rh">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733287966580.png"
                alt=""
              />
            </div>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">{currentTestimonial.testimonial}</p>
          </div>
        </div>
        <div className="dots-container">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </TestimonialsStyled>
  );
};

export default Testimonials;
