import React, { useState } from "react";
import {
  ApproachStyled,
  RequirementCardStyled,
  RPSoftwareSolStyled,
} from "./RPSoftwareSol.styled";
import { ReactComponent as CardIcon01 } from "../../../assets/raphaplus/card01.svg";
import { ReactComponent as CardIcon02 } from "../../../assets/raphaplus/card02.svg";
import { ReactComponent as CardIcon03 } from "../../../assets/raphaplus/card03.svg";
import { ReactComponent as CardIcon04 } from "../../../assets/raphaplus/card04.svg";
import { ReactComponent as CardIcon05 } from "../../../assets/raphaplus/card05.svg";
import { ReactComponent as CardIcon06 } from "../../../assets/raphaplus/card06.svg";
import { ReactComponent as Icon01Fill } from "../../../assets/raphaplus/01fill.svg";
import { ReactComponent as Icon01 } from "../../../assets/raphaplus/01.svg";
import { ReactComponent as Icon02Fill } from "../../../assets/raphaplus/02fill.svg";
import { ReactComponent as Icon02 } from "../../../assets/raphaplus/02.svg";
import { ReactComponent as Icon03Fill } from "../../../assets/raphaplus/03fill.svg";
import { ReactComponent as Icon03 } from "../../../assets/raphaplus/03.svg";
import { ReactComponent as Icon04Fill } from "../../../assets/raphaplus/04fill.svg";
import { ReactComponent as Icon04 } from "../../../assets/raphaplus/04.svg";
import { ReactComponent as Icon05Fill } from "../../../assets/raphaplus/05fill.svg";
import { ReactComponent as Icon05 } from "../../../assets/raphaplus/05.svg";
import { ReactComponent as Icon06Fill } from "../../../assets/raphaplus/06fill.svg";
import { ReactComponent as Icon06 } from "../../../assets/raphaplus/06.svg";
const Innovation = () => {
  return (
    <div className="mt-4">
      <div className="elevating-container">
        <p className="services">SERVICES</p>
        <h1>Elevating every industry through content logical innovation</h1>
      </div>
      <div className="hospital-management-container leftOriented">
        <div className="text-container">
          <h2>Hospital Management</h2>
          <p className="description">
            "Automated health profile: Derived from extensive medical data, this
            profile details your current medications, chronic health conditions"
          </p>
          <button className="view-button">VIEW</button>
        </div>
        <div className="image-container">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png"
            alt="Hospital Management"
          />
        </div>
      </div>
      <div className="hospital-management-container rightOriented">
        <div className="text-container">
          <h2>Electronic Health System</h2>
          <p className="description">
            "Automated health profile: Derived from extensive medical data, this
            profile details your current medications, chronic health conditions"
          </p>
          <button className="view-button">VIEW</button>
        </div>
        <div className="image-container">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png"
            alt="Hospital Management"
          />
        </div>
      </div>
      <div className="hospital-management-container leftOriented">
        <div className="text-container">
          <h2>Patient Monitoring</h2>
          <p className="description">
            "Automated health profile: Derived from extensive medical data, this
            profile details your current medications, chronic health conditions"
          </p>
          <button className="view-button">VIEW</button>
        </div>
        <div className="image-container">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png"
            alt="Hospital Management"
          />
        </div>
      </div>
      <div className="hospital-management-container rightOriented">
        <div className="text-container">
          <h2>Digital Clinic</h2>
          <p className="description">
            "Automated health profile: Derived from extensive medical data, this
            profile details your current medications, chronic health conditions"
          </p>
          <button className="view-button">VIEW</button>
        </div>
        <div className="image-container">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407854580.png"
            alt="Hospital Management"
          />
        </div>
      </div>
    </div>
  );
};

const RequirementCard = ({
  mainIcon,
  numIcon,
  fillNumIcon,
  headline,
  content,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <RequirementCardStyled>
      <div
        className="requirement-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="number-container">
          {isHovered ? fillNumIcon : numIcon}
        </div>
        <div className="icon-container">{mainIcon}</div>
        <div className="content">
          <h3>{headline}</h3>
          <p>{content}</p>
        </div>
      </div>
    </RequirementCardStyled>
  );
};

const Approach = () => {
  return (
    <ApproachStyled>
      <div className="approach-container">
        <div className="line"></div>
        <h2>
          Our design and <br />
          <span>development approach</span>
        </h2>
      </div>
      <div className="cardContainer">
        <RequirementCard
          mainIcon={<CardIcon01 className="icon" />}
          numIcon={<Icon01 />}
          fillNumIcon={<Icon01Fill />}
          headline="Requirement Gathering"
          content="To initiate a project, we prioritize the gathering of requirements, resources, and relevant information."
        />
        <RequirementCard
          mainIcon={<CardIcon02 className="icon" />}
          numIcon={<Icon02 />}
          fillNumIcon={<Icon02Fill />}
          headline="UI/UX Design"
          content="Our team combines modern design tools to
craft visually captivating and delightful
designs, ensuring an exceptional user-
friendly experience."
        />
        <RequirementCard
          mainIcon={<CardIcon03 className="icon" />}
          numIcon={<Icon03 />}
          fillNumIcon={<Icon03Fill />}
          headline="Prototype"
          content="By conducting a thorough analysis of the
client's requirements and available
resources, we proactively develop an initial
blueprint to mitigate project setbacks and
ensure smooth progress."
        />
        <RequirementCard
          mainIcon={<CardIcon04 className="icon" />}
          numIcon={<Icon04 />}
          fillNumIcon={<Icon04Fill />}
          headline="Development"
          content="Our key focus is on creating the desired end
product that aligns with the requirements
analysis and utilizes an efficient prototyping
model. This involves carefully selecting the
most appropriate development tools."
        />
        <RequirementCard
          mainIcon={<CardIcon05 className="icon" />}
          numIcon={<Icon05 />}
          fillNumIcon={<Icon05Fill />}
          headline="Quality Assurance"
          content="We commit to consistently deliver impeccable
products and services, ensuring utmost
satisfaction of our esteemed clients through
bug-free and top-notch offerings."
        />
        <RequirementCard
          mainIcon={<CardIcon06 className="icon" />}
          numIcon={<Icon06 />}
          fillNumIcon={<Icon06Fill />}
          headline="Launch Project"
          content="After successfully navigating through
rigorous trials and diligently following all
necessary processes, the work is now
primed for a spectacular launch on the live
server."
        />
      </div>
    </ApproachStyled>
  );
};

const RPSoftwareSol = () => {
  return (
    <RPSoftwareSolStyled>
      <div className="sscontainer">
        <div className="content">
          <h1>Custom Software Development Company</h1>
          <p>
            We strive to empower your organization and drive success through our
            comprehensive IT solutions, facilitating global business expansion.
          </p>
          <div className="buttons">
            <button className="learn-more">Learn More</button>
            <button className="get-connected">Get Connected</button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407712828.png"
            alt="Meeting"
          />
        </div>
      </div>
      <Innovation />
      <div className="trustedBy">
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736407965060.png"
          alt=""
        />
      </div>
      <Approach />
    </RPSoftwareSolStyled>
  );
};

export default RPSoftwareSol;
