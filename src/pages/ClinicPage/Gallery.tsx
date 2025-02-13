import React, { useRef, useState, useEffect } from "react";

import { GalleryStyled } from "./Gallery.styled";
// import  GalleryView  from "./GalleryView"
import GalleryViewMobile from "./GalleryViewMobile";
import MultiCarouselModal from "../Home/MultiCarouselModal";

const images = [
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735584114268.png",
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735584288408.png",
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735584185750.png",
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735584241223.png",
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735584288408.png",
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735584185750.png",
];

const Gallery = ({ siteDetails }: any) => {
  // State to hold the hyperSiteDetails, initially empty
  const [hyperSiteDetails, setHyperSiteDetails] = useState<any>({});

  // Update hyperSiteDetails when siteDetails changes
  useEffect(() => {
    setHyperSiteDetails(siteDetails);
  }, [siteDetails]);

  const ringRef = useRef<any>(null);
  const [rotation, setRotation] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);

  // Dynamically set images from hyperSiteDetails if available
  const images =
    hyperSiteDetails?.gallery ||
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      url: `https://picsum.photos/id/${i + 32}/600/400/`,
    }));

  useEffect(() => {
    console.log("images : ", images);
  }, [images]);

  // Update image scaling based on rotation angle
  const updateImageScales = () => {
    const ring = ringRef.current;
    const imageElements = ring.querySelectorAll(".img");

    imageElements.forEach((img: any) => {
      const angle = getRotationAngle(img);
      if (angle > 330 || angle < 30) {
        img.classList.add("active");
        img.classList.remove("side");
      } else {
        img.classList.add("side");
        img.classList.remove("active");
      }
    });
  };

  // Helper function to extract rotation angle from the transform property
  const getRotationAngle = (element: any) => {
    const transform = element.style.transform;
    const matches = transform.match(/rotateY\(([-\d.]+)deg\)/);
    return matches ? parseFloat(matches[1]) : 0;
  };

  // Handle drag start event
  const handleDragStart = (e: any) => {
    setIsGrabbing(true);
    setStartX(e.type === "mousedown" ? e.pageX : e.touches[0].pageX);
    setCurrentRotation(rotation);
  };

  // Handle drag move event
  const handleDragMove = (e: any) => {
    if (!isGrabbing) return;
    e.preventDefault();

    const x = e.type === "mousemove" ? e.pageX : e.touches[0].pageX;
    const diff = x - startX;
    const newRotation = currentRotation + diff * 0.5; // Adjust sensitivity

    setRotation(newRotation);
  };

  // Handle drag end event
  const handleDragEnd = () => {
    setIsGrabbing(false);
  };

  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${rotation}deg)`;
      updateImageScales();
    }
  }, [rotation]);

  return (
    <GalleryStyled>
      <h2>Gallery</h2>
      <div className="paragraph">
        <p>
          Do consectetur proident proident id eiusmod deserunt consequat <br />
          pariatur ad ex velit do Lorem reprehenderit.
        </p>
        <button
          className="view-all"
          onClick={() => {
            /* Add your logic here */
          }}
        >
          View All
        </button>
      </div>
      {/* <div className="container">
        <div
          className={`ring ${isGrabbing ? "grabbing" : ""}`}
          ref={ringRef}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          onMouseMove={handleDragMove}
          onTouchMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchEnd={handleDragEnd}
        >
          {images.map((image: any, i: any) => {
            const angle = (i * 360) / images.length;
            const radius = 500;

            return (
              <div
                key={i}
                className="img"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            );
          })}
        </div>
      </div> */}

      <div className="gallery">
        <MultiCarouselModal galleryList={images} />
      </div>

      <div className="mobile-view">
        <GalleryViewMobile />
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
