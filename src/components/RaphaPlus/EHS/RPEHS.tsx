import React, { useState, useEffect } from "react";
import { RPEHSStyled } from "./RPEHS.styled";
import appStore from "../../../assets/images/appstore.png";
import googlePlay from "../../../assets/images/googleplay.png";

const images = ["https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405809788.png", "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405893675.png", "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736405932429.png"]; // Array of images

const RPEHS = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to automatically change slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <RPEHSStyled>
      <div className="hero-container">
        <div className="container">
          <h1>
            Open Your Health{" "}
            <span className="text-underline-effect">Account</span>
          </h1>
          <p>Trusted by more than 3Cr Indians</p>
          <div className="btn-container">
            <button>Personalised Tips</button>
            <button>Paperless Management</button>
            <button>Seamless Sharing</button>
            <button>Centralized Access</button>
            <button>Efficient Retrieval</button>
            <button>Advanced Analytics</button>
            <button>Enhanced Care</button>
            <button>Data Security</button>
            <button>Backup & Recovery</button>
          </div>
          <div className="app-img-container">
            <img src={googlePlay} alt="googlePlay" />
            <img src={appStore} alt="appStore" />
          </div>
        </div>
        <div className="slider">
          <img src={images[currentSlide]} alt={`slide-${currentSlide}`} />
        </div>
      </div>
      <div className="middle-container">
        <div className="container">
          <h1>
            A Peek Into the Future of{" "}
            <span className="text-underline-effect">Health</span>
          </h1>
          <p>What do you get with a health account?</p>
        </div>
        <div className="cards-container">
          <div className="card"></div>
        </div>
      </div>
    </RPEHSStyled>
  );
};

export default RPEHS;
