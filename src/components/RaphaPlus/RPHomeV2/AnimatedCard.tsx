import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatedCardStyled } from "./AnimatedCard.styled";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MobileDropdown } from "./AnimatedCardMobile.styled";

const AnimatedCard = ({ image, title, description }: any) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and toggle between desktop and mobile views
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 490);
    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <DropdownMenu items={[{ image, title, description }]} />
  ) : (
    <AnimatedCardStyled>
      <div className="card-container">
        <div className="wrapper">
          <div className="img-wrapper">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </div>
    </AnimatedCardStyled>
  );
};

const DropdownMenu = ({
  items,
}: {
  items: { image: string; title: string; description: string }[];
}) => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [isKeyFeaturesOpen, setIsKeyFeaturesOpen] = useState(false);

  const toggleDropdown = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  const toggleKeyFeatures = () => {
    setIsKeyFeaturesOpen((prev) => !prev);
    setOpenItem(null);
  };

  return (
    <MobileDropdown>
      {items.map((item, index) => (
        <div
          className={`key-features-container ${
            isKeyFeaturesOpen ? "active" : ""
          }`}
          onClick={toggleKeyFeatures}
        >
          <h3>
            {item.title}
            {isKeyFeaturesOpen ? (
              <FaAngleDown className="arrow-icon" />
            ) : (
              <FaAngleRight className="arrow-icon" />
            )}
          </h3>
          <ul className="key-features-list">
            <img src={item.image} alt={item.title} className="dropdown-icon" />
            <li>{item.description}</li>
          </ul>
        </div>
      ))}
    </MobileDropdown>
  );
};

export default AnimatedCard;
