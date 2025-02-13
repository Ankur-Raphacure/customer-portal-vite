import React, { useState } from "react";
import { DoctorStyled } from "./Doctor.styled";
import { IoStar } from "react-icons/io5";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { topHealthcareSpecialist } from "../Home/HomeObjClass";
import { HomeStyled } from "../Home/Home.styled";
import { useHistory } from "react-router-dom";

const Banner = ({ discount }: any) => {
  return (
    <div className="bannerWrapper">
      <div className="rectangle">
        <IoStar size={23} /> {discount}% Off
      </div>
      <div className="triangle"></div>
    </div>
  );
};

const DoctorCard = ({ doctor }: any) => {
  return (
    <div className="doctor-card">
      <div className="rapha-assured">
        <span>Rapha Assured</span>
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734335061986.png"
          alt=""
        />
      </div>

      <div className="doctor-image">
        <img src={doctor.image} alt={doctor.name} />
      </div>

      <div className="doctor-info">
        <h2>{doctor.name}</h2>
        <h3>{doctor.specialization}</h3>
        <p className="qualifications">{doctor.qualifications}</p>
        <Banner discount={2} />
        <div className="experience">
          <span className="briefcase-icon">💼</span>
          <span>{doctor.experience} Years Experience</span>
        </div>

        <div className="languages">
          <span className="language-icon">🌐</span>
          <span>{doctor.languages.join(", ")}</span>
        </div>

        {doctor.quickBooking && (
          <div className="quick-booking cursor-pointer">
            <img
              className="lightning-icon"
              alt=""
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733316202523.png"
            />
            <span>In 90 Seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

const Doctor = ({ siteDetails }: any) => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr.Annette Black",
      specialization: "Ayurvedic",
      qualifications: "MBBS, MS",
      experience: "5+",
      languages: ["English", "Hindi", "Tamil"],
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",
      quickBooking: true,
    },
    {
      id: 2,
      name: "Dr. Alan White",
      specialization: "Radiology",
      qualifications: "MBBS, MS",
      experience: "5+",
      languages: ["English", "Hindi", "Tamil"],
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",
      quickBooking: false,
    },
    {
      id: 3,
      name: "Dr. Test Black",
      specialization: "Ayurvedic",
      qualifications: "MBBS, MS",
      experience: "5+",
      languages: ["English", "Hindi", "Tamil"],
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",
      quickBooking: true,
    },
    {
      id: 4,
      name: "Dr. Demo White",
      specialization: "Radiology",
      qualifications: "MBBS, MS",
      experience: "5+",
      languages: ["English", "Hindi", "Tamil"],
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",
      quickBooking: false,
    },
    {
      id: 5,
      name: "Dr. Demo White",
      specialization: "Radiology",
      qualifications: "MBBS, MS",
      experience: "5+",
      languages: ["English", "Hindi", "Tamil"],
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/111244-1734334899016.png",
      quickBooking: false,
    },
  ]);

  const history = useHistory();

  return (
    <DoctorStyled>
      <HomeStyled>
        <div className="hospital-specislist-main-div">
          <div className="d-flex justify-content-between align-items-center hospital-specislist-sub-main-div ">
            <div className="d-flex flex-column">
              <h5 className="hospital-specislist-h5-div">Our Doctors</h5>
              <p className="docDesc">
                Do consectetur proident proident id eiusmod deserunt consequat
                pariatur ad ex velit do Lorem reprehenderit.
              </p>
            </div>
            <div className="hospital-specislist-p-div">
              <button
                className="viewAllBtn"
                onClick={() => history.push("/doctor")}
              >
                View All
              </button>
            </div>
          </div>
          <div className="doctore-card-div "></div>
          <MultiCarouselModal
            doctorDetails={topHealthcareSpecialist}
            itemstoShow={4}
          />
        </div>
      </HomeStyled>
    </DoctorStyled>
  );
};

export default Doctor;
