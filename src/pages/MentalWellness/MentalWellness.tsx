import React, { useEffect, useState } from "react";
import { MentalWellnessStyled } from "./MentalWellness.styled";
import Category from "./Category";
import Therapists from "./Therapists";
import { createCallBackRequestAPI } from "../../redux/slices/bookingScreen/bookingScreenService";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { EyecareStyled } from "../Eyecare/Eyecare.styled";
import { getDoctorsListAPI } from "../../redux/slices/doctor/doctorService";

const MentalWellness = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const [showConform, setShowConform] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    age: "",
    gender: "",
    remark: "",
    type: "mental wellness",
  });

  const { doctorsList } = useSelector((ReduxState: any) => ReduxState.doctor);
  const doctors = doctorsList?.doctors;
  useEffect(() => {
    dispatch(
      getDoctorsListAPI({
        count: 1000,
        page: 0,
        searchText: "",
      }),
    );
  }, [0]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.fullName) {
      setErrorMsg("Full Name is required");
      return false;
    }

    if (!formData.contactNumber) {
      setErrorMsg("Contact Number is required");
      return false;
    }

    const contactNumberPattern = /^\d+$/;
    if (!contactNumberPattern.test(formData.contactNumber)) {
      setErrorMsg("Contact Number must contain only numbers");
      return false;
    }

    if (formData.contactNumber.length !== 10) {
      setErrorMsg("Contact Number must be 10 digits long");
      return false;
    }

    if (!formData.email || !formData.email) {
      setErrorMsg("E-mail are required");
      return false;
    }
    if (!formData.age || !formData.age) {
      setErrorMsg("Age are required");
      return false;
    }
    if (!formData.gender || !formData.gender) {
      setErrorMsg("Gender are required");
      return false;
    }
    return true;
  };

  const handleRequestSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      setShowError(true);
      return;
    }

    const callBackRequestObjBody = {
      name: formData.fullName,
      contact_number: formData.contactNumber,
      pincode: "",
      email: formData.email,
      age: formData.age,
      gender: formData.gender,
      remark: formData.remark,
      monitoring_equipments: "",
      type: formData.type,
    };

    try {
      const resultAction: any = await dispatch(
        createCallBackRequestAPI(callBackRequestObjBody),
      );
      if (resultAction.payload.success === "true") {
        setShowConform(true);
        setShowError(false);
        setFormData({
          fullName: "",
          contactNumber: "",
          email: "",
          age: "",
          gender: "",
          remark: "",
          type: "mental wellness",
        });
      } else {
        setShowError(true);
        setErrorMsg("Booking failed. Please try again.");

        setShow(false);
        setShowConform(true);
      }
    } catch (error) {
      console.error("API error:", error);
      setShowError(true);
      setErrorMsg("An error occurred. Please try again later.");
    }
  };
  const handleHome = () => {
    setShow(false);
    setShowConform(false);
  };
  const handleCloseConform = () => {
    setShow(false);
    setShowConform(false);
  };
  return (
    <MentalWellnessStyled>
      <div className="Mental-wellness">
        <div className="header">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="header-content">
                <h1>
                  A Better<span> Mind</span> for a Better <span>Life</span>
                </h1>
                <p>
                  We believe mental wellness is the cornerstone of a fulfilling
                  life. Our services support and enhance your mental health
                  through personalized counseling, stress management, and
                  mindfulness practices. Let our expert team guide you to inner
                  peace and resilience. Prioritize your mental well-being with
                  Raphacure today.
                </p>
                <button className="BookAppoint">Book An Appointment</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dom-img text-center">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736507502193.png"
                  alt="Mental Wellness"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="container-fluid">
            <div className="row">
              <Category />
            </div>
          </div>
        </div>
        <div className="therapists">
          <div className="container-fluid">
            <div className="row">
              <h2>Meet our Best Therapiests</h2>
              <Therapists doctorsList={doctors} />
              <div className="row">
                <div className="col-lg-11"></div>
                <div className="col-lg-1">
                  <button className="view-btn">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Book-Slot">
          <div className="container-fluid">
            <div className="row">
              <h2>Don’t Wait – Book Your Therapy Slot Now</h2>
              <div className="col-lg-6 text-center mt-5 pt-5">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736508298330.png"
                  alt="Form-img"
                />
              </div>
              <div className="col-lg-6">
                <form className="form-icu">
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="fullName"
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        value={formData?.fullName}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        placeholder="Enter Contact Number"
                        onChange={handleChange}
                        value={formData?.contactNumber}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">E-Mail Id</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter E-mail ID"
                        onChange={handleChange}
                        value={formData?.email}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="age">Age</label>
                      <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder="Enter Age"
                        onChange={handleChange}
                        value={formData?.age}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="gender">Gender</label>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        placeholder="Enter Gender"
                        onChange={handleChange}
                        value={formData?.gender}
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="remark">Remark</label>
                      <textarea
                        id="remark"
                        name="remark"
                        placeholder="Enter Remark"
                        onChange={handleChange}
                        value={formData?.remark}
                      ></textarea>
                    </div>
                  </div>
                  <button onClick={handleRequestSubmit} className="btn-submit">
                    Request Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showConform} onHide={handleCloseConform} size="lg" centered>
        <EyecareStyled>
          <Modal.Header className="conform-popup-header-div">
            <h4>Thank you</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="conform-popup-body-div">
              <h4>
                Thank you for registering with us. We shall get in touch
                <br /> with you at the earliest.
              </h4>
            </div>
            <div className="conform-popup-body-div">
              <button className="btn" onClick={handleHome}>
                Home
              </button>
            </div>
          </Modal.Body>
        </EyecareStyled>
      </Modal>
    </MentalWellnessStyled>
  );
};

export default MentalWellness;
