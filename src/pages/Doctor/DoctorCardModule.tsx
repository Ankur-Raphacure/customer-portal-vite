import React from "react";
import { DoctorCardStyled } from "./DoctorCard.styled";
import { IoIosStar } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { ReactComponent as EductIcon } from "../../assets/icons/educIcon.svg";
import { ReactComponent as TimeSlot } from "../../assets/icons/timeSlt.svg";

type DoctorCardModuleProp = {
  appointment: {
    id: number | string;
    name: string;
    department: string;
    experience: string;
    languages: string;
    inClinicFee: number;
    videoConsultFee: number;
    gender: string;
    consultantType: string;
    specialization: string;
    education: string;
    slots: number;
    rating: number;
    image: any;
    availableIn90: boolean;
  };
};

const Banner = ({ rating }: any) => {
  return (
    <DoctorCardStyled>
      <div className="bannerWrapper">
        <div className="rectangle">
          <IoIosStar fill="#252B61" className="me-2 " /> {Math.round(rating)}
        </div>
        <div className="triangle"></div>
      </div>
    </DoctorCardStyled>
  );
};

const DoctorCardModule = ({ appointment }: DoctorCardModuleProp) => {
  const history = useHistory();
  return (
    <DoctorCardStyled>
      <div className="detail-card">
        <div className="appointment-card" key={appointment.id}>
          <div
            className="left-middle"
            onClick={() =>
              history.push(`/doctor/doctordetails/${appointment?.id}`)
            }
          >
            <div className="card-left">
              <Banner rating={appointment?.rating} />
              <img src={appointment?.image} alt={appointment?.name} />
            </div>
            <div className="card-right">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="doctor-title">{appointment.name}</p>
                  <p className="specelization-text">{appointment.department}</p>
                </div>

                {appointment?.availableIn90 && (
                  <div className="sec-banner-div">
                    <img
                      src=" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736249754401.png"
                      alt=""
                      className="me-3 ms-2"
                    />
                    <p>In 90 Seconds</p>
                  </div>
                )}
              </div>

              <p className="eduction-details">
                <EductIcon className="me-2" />
                <span> {appointment?.education}</span>
              </p>
              <div className="d-flex align-items-center exp-div">
                <div className=" Experience-div ">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245306125.png"
                    alt=""
                    className="me-2"
                  />
                  <p className="eduction-details">
                    <span> {appointment.experience} Experience</span>
                  </p>
                </div>
                <div className=" Experience-div ">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245349025.png"
                    alt=""
                    className="me-2"
                  />
                  <p className="eduction-details">
                    <span> {appointment?.languages}</span>
                  </p>
                </div>
              </div>
              <p className="eduction-details">
                <TimeSlot className="me-2" />
                <span> Next Slot</span>
              </p>
            </div>
          </div>
          <div className="main-contect-div">
            <div
              className="contect-div"
              // onClick={() =>
              //   history.push(`/doctor/doctordetails/${appointment?.id}`)
              // }
            >
              <p className="contect-text">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245507200.png"
                  alt=" chat"
                  className="me-2"
                />
                Chat
              </p>
              <p className="contect-text">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245537447.png"
                  alt="Virtual"
                  className="me-2"
                />
                Virtual Consult
              </p>
              <p className="contect-text">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245570436.png"
                  alt="Clinic"
                  className="me-2"
                />
                In Clinic Visit
              </p>
            </div>

            <div className="contect-book-btn-div">
              <button className="btn contect-book-btn">book Consult</button>
            </div>
          </div>
        </div>
      </div>
    </DoctorCardStyled>
  );
};

export default DoctorCardModule;
