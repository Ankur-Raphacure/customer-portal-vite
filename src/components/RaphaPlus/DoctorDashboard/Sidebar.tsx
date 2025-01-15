// Sidebar.tsx
import React, { useState } from "react";
import { SidebarStyled } from "./Sidebar.styled";

const sections = [
  {
    name: "Dashboard",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736229387839.png",
  },
  {
    name: "Bookings",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736230718355.png",
  },
  {
    name: "Chat",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736230900221.png",
  },
  {
    name: "Remainder",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736229387839.png",
  },
  {
    name: "My Task",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736229387839.png",
  },
  {
    name: "My Clinic",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736231028839.png",
  },
  {
    name: "Profile",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736231181622.png",
  },
  {
    name: "Log-out",
    icon: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736231238706.png",
  },
];

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (sectionName: string) => {
    // Set the clicked section as the only active section
    setActiveSection(sectionName);
  };

  return (
    <SidebarStyled>
      <div className="sidebar-main">
        <div className="sidebar">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`sidebarItem ${
                activeSection === section.name ? "active" : ""
              }`}
              onClick={() => handleSectionClick(section.name)}
            >
              <img src={section.icon} alt={section.name} className="icon" />
              {activeSection === section.name && (
                <span className="sectionName">{section.name}</span>
              )}
            </div>
          ))}
          <div className="help-center-all">
            <div className="helpCenterBackground"></div>
            <div className="helpCenter">
              <div className="helpCenterContent">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736241626155.png"
                  alt="Help Center"
                  className="helpCenterIcon"
                />
                <span className="helpCenterText">Help Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-horizental-line"></div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
