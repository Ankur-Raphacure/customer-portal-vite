import React, { useState } from "react";
import { CuroselCardsStyled } from "./CarouselCards.styled";
import w_img from "../../../assets/images/womenscare/w_img.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShowLoginModel } from "../../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../../redux/slices/bookingScreen/bookingScreenSlice";

const CarouselCards = (props: any) => {
  const data = props.doctorsList;
  let doctorMale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
  let doctorFemale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
  const defaultImage =
    props.doctor?.gender === "male" ? doctorMale : doctorFemale;

  const filteredDoctors = data?.filter(
    (doctor: any) =>
      doctor?.specialization === "Gynecologist" ||
      doctor?.specialization?.includes("Gynecologist")
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = filteredDoctors?.length;

  const handleArrowClick = (direction: string) => {
    if (direction === "next") {
      if (currentIndex < itemCount - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    } else if (direction === "prev") {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    }
  };

  const getSlideClasses = (index: any) => {
    if (index === currentIndex) return "now";
    if (index === (currentIndex + 1) % itemCount) return "next";
    if (index === (currentIndex - 1 + itemCount) % itemCount) return "prev";
    return "";
  };

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const handleBookingClick = (obj: any, type: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      dispatch(
        updateDoctordetails({
          doctorDetails: { ...obj },
          consultationType: type,
          hospitalDetails: {},
          categoryType: "doctor",
          slot1: {},
          slot2: {},
        })
      );
      history.push("/doctor/bookingReview");
    }
  };

  return (
    <CuroselCardsStyled>
      <h4 className="carosel-header">Meet Our Best Gynecologists</h4>
      <div className="cascade-slider_container" id="cascade-slider">
        <div className="cascade-slider_slides">
          {filteredDoctors?.map((doctor: any, index: any) => (
            <div
              key={index}
              className={`cascade-slider_item ${getSlideClasses(index)}`}
              data-slide-number={index}
            >
              <div className="card align card-align-div">
                <img
                  src={doctor?.image ? doctor?.image : defaultImage}
                  className="rounded-circle mb-3 image-div"
                  alt={doctor.name}
                />
                <h5 className="CTcard-title">{doctor?.name}</h5>
                <p className="CTcard-Subtitle">{doctor?.specialization}</p>
                <button
                  className="btn custom-btn"
                  onClick={() => handleBookingClick(doctor, "VIRTUAL")}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span
        className={`cascade-slider_arrow cascade-slider_arrow-left ${
          currentIndex === 0 ? "disabled" : ""
        }`}
        onClick={() => handleArrowClick("prev")}
      >
        <IoIosArrowBack className="lft-arrow" />
      </span>
      <span
        className={`cascade-slider_arrow cascade-slider_arrow-right ${
          currentIndex === itemCount - 1 ? "disabled" : ""
        }`}
        onClick={() => handleArrowClick("next")}
      >
        <IoIosArrowForward className="rft-arrow" />
      </span>
    </CuroselCardsStyled>
  );
};

export default CarouselCards;
