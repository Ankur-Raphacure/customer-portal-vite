import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const GalleryPreview = ({ siteDetails }: any) => {
  const [hyperSiteDetails, setHyperSiteDetails] = useState<any>({});
  const [currentImage, setCurrentImage] = useState<string>("");
  const history = useHistory();

  // Update `hyperSiteDetails` when `siteDetails` changes
  useEffect(() => {
    setHyperSiteDetails(siteDetails);
  }, [siteDetails]);

  const gallery = hyperSiteDetails?.banner_images || [];
  useEffect(() => {
    if (gallery.length > 0) {
      setCurrentImage(gallery[0]);
    }
  }, [gallery]);

  const handleImageClick = (image: string, index: number) => {
    setCurrentImage(image);

    // If the last image is clicked, log all images
    if (index === 3) {
      console.log("All gallery images:", gallery);
      history.push({
        pathname: "/gallery",
        state: { gallery },
      });
    }
  };

  return (
    <div className="galleryPreview">
      <div className="otherImages">
        {gallery.slice(0, 4).map((image: string, index: number) => (
          <div
            key={index}
            className={`image ${currentImage === image ? "active" : ""}`}
            onClick={() => handleImageClick(image, index)}
          >
            <img src={image} alt={`Gallery Image ${index + 1}`} />
            {index === 3 && (
              <div className="imageOverlay">
                <span>{gallery.length}+</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Current Main Image */}
      <div className="currImage">
        {currentImage ? (
          <>
            <img src={currentImage} alt="Current Preview" />
            <div className="head">
              <h1>
                Your Partner in <br /> Health & Wellness
              </h1>
            </div>
          </>
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPreview;
