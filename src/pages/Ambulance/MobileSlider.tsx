import React, { useEffect, useRef, useState } from "react";
import { ContinueBookingStyled } from "./ContinueBooking.styled";
import leftImage from "../../assets/images/ambulance/sec11Img.png";
import videoDemo from "../../assets/images/ambulance/videoDemo.png";
import videoDemo1 from "../../assets/images/ambulance/videoDemo1.png";
import videoDemo2 from "../../assets/images/ambulance/videoDemo2.png";
import downloadApp from "../../assets/images/ambulance/downloadApp.png";

const delay = 2500;
const articles = [
  {
    id: 1,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736509457792.png",
  },
  {
    id: 2,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736509377858.png",
  },
  {
    id: 3,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736509431235.png",
  },
];
const MobileSlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const handleClickPlay = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cognonta.raphacure";
  };
  const handleClickApp = () => {
    window.location.href =
      "https://apps.apple.com/in/app/raphacure/id1637246098";
  };
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === articles.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <ContinueBookingStyled>
      <div className="emergencyDiv mainContent-right">
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736509504499.png"
          alt=""
        />
        <div className="cardContainer">
          <h2>Download App</h2>
          <p>
            Experience the convenience of managing your health with our app. Get
            instant access to our wide range of medical services and stay
            connected with healthcare professionals on the go.
          </p>

          <div className="img-div mt-2">
            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {articles.map((item, idx) => (
                  <div className="slide" key={idx}>
                    <img src={item.img_1} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736509554756.png"
            alt=""
            onClick={handleClickPlay}
          />
        </div>
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425965406.png"
          alt=""
          onClick={handleClickApp}
        />
      </div>
    </ContinueBookingStyled>
  );
};

export default MobileSlider;
