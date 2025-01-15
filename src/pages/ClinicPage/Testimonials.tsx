import React, { useState, useEffect } from "react";
import { TestimonialsStyled } from "./Testimonials.styled";

const TestimonialCard = ({ name, content, date, imageUrl, className }: any) => (
  <div className={className}>
    <div className="testimonial-inner">
      <img src={imageUrl} alt="testimonial" className="testimonial-image" />
      <div className="testimonial-content">
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <span className="testimonial-date">{date}</span>
      </div>
    </div>
  </div>
);

const TestimonialMobileCard = ({
  name,
  content,
  date,
  imageUrl,
  className,
}: any) => (
  <div className={className}>
    <div className="testimonial-inner">
      <div className="testimonial-header">
        <img src={imageUrl} alt="testimonial" className="testimonial-image" />
        <div className="content">
          <h3>{name}</h3>
          <span className="testimonial-date">{date}</span>
        </div>
      </div>
      <div className="testimonial-body">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  </div>
);

const Testimonials = ({ siteDetails }: any) => {
  const [hyperSiteDetails, setHyperSiteDetails] = useState<any>({});

  useEffect(() => {
    setHyperSiteDetails(siteDetails);
  }, [siteDetails]);

  const testimonials = hyperSiteDetails?.testimonials || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <TestimonialsStyled>
      <div className="testimonials-container">
        <button className="nav-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="testimonial-header-mobile">
          <h2 className="testimonial-title-mobile">Clients Testimonial's</h2>

          <div className="button-mobile">
            <button
              className="nav-button-mobile left-arrow"
              aria-label="Previous"
              onClick={handlePrev}
            >
              ←
            </button>
            <button className="nav-button-mobile right-arrow" aria-label="Next" onClick={handleNext}>
              →
            </button>
          </div>
        </div>
        {testimonials.length > 0 && (
          <>
            <div className="testimonial-desktop">
              <TestimonialCard
                name={testimonials[currentIndex]?.tile}
                content={testimonials[currentIndex]?.description}
                date={testimonials[currentIndex]?.date}
                imageUrl={testimonials[currentIndex]?.imageURL}
                className={`testimonial-card slide-${currentIndex}`}
              />
            </div>
            <div className="testimonial-mobile">
              <TestimonialMobileCard
                name={testimonials[currentIndex]?.tile}
                content={testimonials[currentIndex]?.description}
                date={testimonials[currentIndex]?.date}
                imageUrl={testimonials[currentIndex]?.imageURL}
                className={`testimonial-card slide-${currentIndex}`}
              />
            </div>
          </>
        )}
        <button className="nav-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="testimonials-dots">
        {testimonials.map((_: any, index: any) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="mobile-view"></div>
    </TestimonialsStyled>
  );
};

export default Testimonials;
