import React, { useEffect, useState } from "react";
import { AboutUsStyled } from "./AboutUs.styled";

const AboutUs = ({ siteDetails }: any) => {
  const [hyperSiteDetails, setHyperSiteDetails] = useState<any>({});

  // Update `hyperSiteDetails` when `siteDetails` changes
  useEffect(() => {
    setHyperSiteDetails(siteDetails);
  }, [siteDetails]);

  return (
    <AboutUsStyled>
      <div className="aboutuscontainer">
        <div className="image-section">
          <img
            src={hyperSiteDetails?.about_us_image || "default_image_url"} // Use the dynamic image URL
            alt="About us"
            className="image"
          />
        </div>
        <div className="text-section">
          <h1 className="title">About Us</h1>
          <p className="description">
            {/* {hyperSiteDetails?.about_us_text || "Default description text"} */}
            Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.  consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
        </div>
      </div>
    </AboutUsStyled>
  );
};

export default AboutUs;
