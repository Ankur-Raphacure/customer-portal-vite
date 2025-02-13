import React from "react";
import { HomeStyled } from "./Home.styled";
import { useHistory } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

const DoctorDetailsCard = (props: any) => {
  const { item, sectionName } = props;
  const history = useHistory();
  const defaultDoctImage =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/1732785725785EMTYDOCTORIMAGE.png-1732785730293.png";
  return (
    <HomeStyled>
      <div
        className="scanCenter-card-container"
        onClick={() => {
          if (sectionName !== "doctor") {
            history.push(`/doctor?q=${item?.name}`);
          } else {
            props.handleToBookSlot(item);
          }
        }}
      >
        <div className="rating-banner-div">
          <div className="bannerWrapper">
            <div className="rectangle">
              <IoMdStar className="me-2" />
              {Math.round(item?.rating)}
            </div>
            <div className="triangle"></div>
          </div>
        </div>

        <div className="scanCenter-card-header">
          <div className="scanCenter-company-logo">
            <img
              src={item?.img || item?.image || defaultDoctImage}
              alt={item?.name}
            />
          </div>

          <div className="scanCenter-badge">
            <span>
              Rapha <br /> Assured
            </span>
            <img
              src=" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733748919984.png"
              alt="Shield Icon"
            />
          </div>
        </div>

        <div className="scanCenter-card-body">
          <h3>{item?.name}</h3>
          <div className="doctor-card-detail-div">
            <span>{item?.specialization}</span>
          </div>

          <div className="doctor-card-sub-detail-div">
            {sectionName === "doctor" ? (
              <span>{item?.highest_education}</span>
            ) : (
              <span>{item?.lang || item?.languages}</span>
            )}

            <span>
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734534678882.png"
                alt="exp_logo"
                className="me-2"
              />
              {item?.exp || item?.work_experience_years} Years Experience
            </span>
          </div>

          {/* <div className="scanCenter-rating">
                            <span className="-scanCenter-star">★</span>
                            <span className="-scanCenter-star">
                              {item?.rating}
                            </span>
                          </div> */}

          <div className="d-flex align-items-baseline">
            <p>{item?.address}</p>
          </div>
        </div>
        {sectionName && (
          <div className="connect-sec-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736163751309.png"
              alt=""
            />
            <p>Connect In 90 Secs</p>
            <FaArrowRight />
          </div>
        )}
      </div>
    </HomeStyled>
  );
};

export default DoctorDetailsCard;
