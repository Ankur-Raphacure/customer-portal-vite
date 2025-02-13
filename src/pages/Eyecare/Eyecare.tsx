import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { EyecareStyled } from "./Eyecare.styled";
import EyecareCatogory from "./Eyecarecategory";
import NearClinic from "./Nearclinic";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { bookAppointmentAPI } from "../../redux/slices/bookingScreen/bookingScreenService";
import { getAppoinmentDropdownAPI } from "../../redux/slices/generic/genericService";

const Eyecare = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showConform, setShowConform] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { allAppoinmentList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );

  const TreatmentList = allAppoinmentList?.eyecare;
  const [formData, setFormData] = useState({
    treatment: "",
    date: "",
    time: "",
    fullName: "",
    contactNumber: "",
    comments: "",
    type: "eyecare",
  });

  console.log(formData, "formData");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { alleyecareNearClinic } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const handleViewAllClick = () => {
    history.push("eyecare/allclinics");
  };
  const handleShow = () => setShow(true);
  const handleCloseConform = () => {
    setShow(false);
    setShowConform(false);
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

    if (!formData.date || !formData.time) {
      setErrorMsg("Appointment Date and Time are required");
      return false;
    }

    if (!formData.treatment) {
      setErrorMsg("Treatment Type is required");
      return false;
    }
    return true;
  };

  const handleBookFreeAppointment = async () => {
    if (!validateForm()) {
      setShowError(true);
      return;
    }

    const appointmentObjBody = {
      full_name: formData.fullName,
      contact_number: formData.contactNumber,
      appointment_date: formData.date,
      appointment_time: formData.time,
      treatment_type: formData.treatment,
      comments: formData.comments,
      type: formData.type,
    };

    try {
      const resultAction: any = await dispatch(
        bookAppointmentAPI(appointmentObjBody),
      );
      if (resultAction.payload.success === "true") {
        setShowConform(true);
        setShowError(false);
        setFormData({
          treatment: "",
          date: "",
          time: "",
          fullName: "",
          contactNumber: "",
          comments: "",
          type: "eyecare",
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

  const getPackageDetails = async () => {
    await dispatch(getAppoinmentDropdownAPI());
  };
  useEffect(() => {
    getPackageDetails();
  }, []);

  return (
    <EyecareStyled>
      <div className="eycare-design">
        <div className="eyecarebanner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 eye-care-title-div">
                <h2>
                  Leading Eye Care Solutions <br /> for a Brighter Future
                </h2>
                <p>
                  Trust our experienced eye care professionals to provide
                  top-quality care. <br /> From eye exams to specialized
                  treatments, we’re committed to preserving <br /> and enhancing
                  your vision.
                </p>
                <button className="btn consult-btn" onClick={handleShow}>
                  Book Free Appointment
                </button>
              </div>
              <div className="col-md-5">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730970347828.png"
                  alt="eyecare-image "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="eycare-category">
          <div className="container">
            <EyecareCatogory />
          </div>
        </div>

        <div className="eycare-nearclinic">
          <div className="container">
            <div className="row heading">
              <h4>Near by Clinics ({alleyecareNearClinic?.vendors?.length})</h4>
            </div>
            <div className="row">
              <NearClinic />
            </div>
            <div className="row text-right">
              <button className="view-all" onClick={handleViewAllClick}>
                View All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Implementation */}
      <>
        <Modal show={show} onHide={handleCloseConform} size="lg" centered>
          <EyecareStyled>
            <Modal.Body>
              <div className="Book-Appointment-close-btn">
                <button className="btn" onClick={handleCloseConform}>
                  X
                </button>
              </div>

              <Row>
                <Col md={6} className="p-2">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736332414933.png"
                    alt="Doctor"
                    className="eye-care-doctore-img"
                  />
                </Col>
                <Col md={6}>
                  <div className="mb-2 Book-Appointment-title">
                    <h3 className="mb-2">Book Appointment</h3>
                    <p>
                      Now you can get an online appointment, We will get <br />
                      back to you and schedule a meeting with the doctor.
                    </p>
                  </div>
                  <Form>
                    <Form.Group
                      controlId="formTreatment"
                      className="position-relative"
                    >
                      <Form.Control
                        as="select"
                        className="mb-3 shadow-none"
                        style={{ appearance: "none" }}
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                      >
                        <option>Choose Treatment</option>
                        {TreatmentList?.map((item: any) => {
                          return (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </Form.Control>
                      <IoMdArrowDropdown className="bi bi-caret-down-fill position-absolute IoMdArrowDropdown"></IoMdArrowDropdown>
                    </Form.Group>

                    <Row>
                      <Form.Group as={Col} controlId="formDate">
                        <Form.Control
                          type="date"
                          className="mb-3 shadow-none"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formTime">
                        <Form.Control
                          as="select"
                          className="mb-3 shadow-none"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                        >
                          <option>Choose Time</option>
                          <option>09:00 AM</option>
                          <option>10:00 AM</option>
                        </Form.Control>
                      </Form.Group>
                    </Row>

                    <Form.Group controlId="formFullName">
                      <Form.Control
                        type="text"
                        placeholder="Full Name*"
                        className="mb-3 shadow-none"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formContactNumber">
                      <Form.Control
                        type="text"
                        placeholder="Contact Number*"
                        className="mb-3 shadow-none"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formComments">
                      <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Comments"
                        className="shadow-none"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form>
                  <button
                    className="btn mt-4  eye-care-book-free-appointment-btn"
                    onClick={handleBookFreeAppointment}
                  >
                    Book Free Appointment
                  </button>
                </Col>
              </Row>
            </Modal.Body>
          </EyecareStyled>
        </Modal>

        {/* Modal for Confirmation */}
        <Modal
          show={showConform}
          onHide={handleCloseConform}
          size="lg"
          centered
        >
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
      </>
    </EyecareStyled>
  );
};

export default Eyecare;
