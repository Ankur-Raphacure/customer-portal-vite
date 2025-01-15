import React from "react";
import { DoctorsNetwoekstyled } from "./DoctoreNewtwork.styled";
import icon_1 from "../../assets/images/network/Trans.svg";
import icon_2 from "../../assets/images/network/Business.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../redux/slices/bookingScreen/bookingScreenSlice";

const DoctoreNetwork = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  let doctorMale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
  let doctorFemale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
  const getDoctorImage = () => {
    return (
      props.doctor?.image ??
      (props.doctor?.gender === "male" ? doctorMale : doctorFemale)
    );
  };

  const navigateToDoctor = (obj: any, type: any) => {
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
    <DoctorsNetwoekstyled>
      {props.doctor ? (
        <div className="Card mt-4" key={props.doctor.id}>
          <div className="CardBody">
            <div className="DoctorInfo">
              <div className="DoctorImage">
                <img src={getDoctorImage()} alt="Doctor" />
              </div>
              <div className="DoctorDetails">
                <div className="DoctorName">{props.doctor?.name}</div>
                <div className="DoctorSpecialization">
                  {props.doctor?.specialization}
                </div>
              </div>
            </div>
            <div className="DoctorRating">
              <div className="Rating d-flex">
                <div className="star_img me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M5.52447 0.963525C5.67415 0.502869 6.32585 0.50287 6.47553 0.963525L7.45934 3.99139C7.52628 4.1974 7.71826 4.33688 7.93487 4.33688H11.1186C11.6029 4.33688 11.8043 4.95669 11.4124 5.24139L8.83679 7.11271C8.66155 7.24003 8.58822 7.46572 8.65516 7.67173L9.63897 10.6996C9.78864 11.1602 9.2614 11.5433 8.86955 11.2586L6.29389 9.38729C6.11865 9.25997 5.88135 9.25997 5.70611 9.38729L3.13045 11.2586C2.73859 11.5433 2.21136 11.1602 2.36103 10.6996L3.34484 7.67173C3.41178 7.46572 3.33845 7.24003 3.16321 7.11271L0.587553 5.24139C0.195696 4.95669 0.397084 4.33688 0.881446 4.33688H4.06513C4.28174 4.33688 4.47372 4.1974 4.54066 3.99139L5.52447 0.963525Z"
                      fill="#C5BD00"
                    />
                  </svg>
                </div>
                <span className="rating-div">{props.doctor?.rating}</span>
              </div>
              <div className="d-flex">
                <div className="Experience me-2">
                  <img src={icon_2} alt="" className="me-1" />
                  <span className="content-div">
                    {props.doctor?.work_experience_years} Years Experience
                  </span>
                </div>
                <div className="Languages">
                  <img src={icon_1} alt="" />
                  <span className="content-div">
                    <span>{props.doctor?.languages ?? "English"}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="BookButton">
              {props.doctor?.virtual_consultation_cost ? (
                <button
                  onClick={() => handleBookingClick(props.doctor, "VIRTUAL")}
                >
                  Book Now
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </DoctorsNetwoekstyled>
  );
};

export default DoctoreNetwork;
