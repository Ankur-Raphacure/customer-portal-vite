import React from "react";
import { GalleryViewMobileStyled } from "./GalleryViewMobile.styled";

const GalleryViewMobile: React.FC = () => {
  const images = [
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png",
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png",
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png",
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png",
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png",
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735539766836.png",
  ];

  

  return (
    <GalleryViewMobileStyled>
    <div className="gallery-container">
      <div className="gallery-layout">
        {/* Main Image and Two Below Images */}
        <div className="gallery-left">
          <div className="gallery-main">
            <img src={images[0]} alt="Main" className="gallery-main-image" />
          </div>
          <div className="gallery-bottom">
            <img src={images[1]} alt="Below 1" className="gallery-bottom-image" />
            <img src={images[2]} alt="Below 2" className="gallery-bottom-image" />
          </div>
        </div>

        {/* Side Images */}
        <div className="gallery-right">
          <img src={images[3]} alt="Side 1" className="gallery-side-image" />
          <img src={images[4]} alt="Side 2" className="gallery-side-image" />
          <img src={images[5]} alt="Side 3" className="gallery-side-image" />
        </div>
      </div>
      <button className="gallery-view-all">View All</button>
    </div>
    </GalleryViewMobileStyled>
  );
};

export default GalleryViewMobile;
