import React, { useState } from "react";
import { ProfilePictureStyled } from "./ProfilePicture.styled";
import { OverlayTrigger, Popover } from "react-bootstrap";

const ProfilePicture = ({
  defaultImage,
  topImage,
  rightImage,
  bottomImage,
  leftImage,
  topLeftImage,
  bottomLeftImage,
  bottomRightImage,
  topRightImage,
  clickImage,
  altText = "Profile Picture",
}: any) => {
  const [hoveredImage, setHoveredImage] = useState(defaultImage);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = (image: any) => {
    setClicked(false);
    if (!clicked) {
      setHoveredImage(image);
    }
  };

  const handleClick = () => {
    setClicked(true);
    setHoveredImage(clickImage);
  };

  const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus" title="Popover bottom">
      {" "}
      {altText}{" "}
    </Popover>
  );

  return (
    <ProfilePictureStyled>
      <OverlayTrigger
        trigger={["hover", "focus"]}
        placement="bottom"
        overlay={popoverHoverFocus}
      >
        <div className="profile-picture" onClick={handleClick}>
          <img
            src={hoveredImage}
            alt=""
            className={`profile-picture__image ${clicked ? "clicked" : ""}`}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--top"
            onMouseEnter={() => handleMouseEnter(topImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--top-right"
            onMouseEnter={() => handleMouseEnter(topRightImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--right"
            onMouseEnter={() => handleMouseEnter(rightImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--bottom-right"
            onMouseEnter={() => handleMouseEnter(bottomRightImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--bottom"
            onMouseEnter={() => handleMouseEnter(bottomImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--bottom-left"
            onMouseEnter={() => handleMouseEnter(bottomLeftImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--left"
            onMouseEnter={() => handleMouseEnter(leftImage)}
          />
          <div
            className="profile-picture__hover-zone profile-picture__hover-zone--top-left"
            onMouseEnter={() => handleMouseEnter(topLeftImage)}
          />
        </div>
      </OverlayTrigger>
    </ProfilePictureStyled>
  );
};

export default ProfilePicture;
