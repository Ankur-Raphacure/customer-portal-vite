import React from "react";
import { AiFillStar } from "react-icons/ai"; // Star icon
import { HiOutlineLocationMarker } from "react-icons/hi"; // Location icon
import { NearbyCardStyled } from "./NearbyCard.styled";
import { useHistory } from "react-router-dom";
import { updateSelectedHospitalData } from "../../redux/slices/doctor/doctorSlice";
import { useDispatch } from "react-redux";

const NearbyCard = ({
  title,
  rating,
  distance,
  location,
  image,
  id,
  fromSection,
  item,
}: any) => {
  const dispatch = useDispatch();

  const history = useHistory();
  return (
    <NearbyCardStyled>
      <div
        className="nearby-card cursor-pointer"
        onClick={() => {
          if (fromSection === "doctor") {
            dispatch(updateSelectedHospitalData(item));
            history.push(`/doctor/clinicDetails/${id}`);
          } else {
            history.push(`/labtest/packages/${id}`);
          }
        }}
      >
        <img
          src={
            image ||
            "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732625990861.png"
          }
          alt="cardImgPlaceholder"
        />
        <h3 className="card-title">{title}</h3>
        <div className="rating">
          <AiFillStar size={20} className="rating-icon" />
          <p className="rating-value">{rating}</p>
        </div>
        <div className="distance">
          <HiOutlineLocationMarker size={20} className="location-icon" />
          <p className="distance-value">
            {distance} - <span> {location}</span>
          </p>
        </div>
      </div>
    </NearbyCardStyled>
  );
};

export default NearbyCard;
