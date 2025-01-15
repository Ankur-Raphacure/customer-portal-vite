import React, { useState } from "react";
import { EyecareStyled } from "./Eyecare.styled";
import { useHistory } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./style.css";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Phone } from "../../assets/icons/phoneicon.svg";
import { Rate } from "antd";
import { ModalStyled } from "./ModalStyled.styled";

// Type definition for clinic service
interface ClinicService {
  id: number;
  imageUrl: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  rating: number;
}

const Visiontest = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState<ClinicService | null>(
    null
  );

  const handleBackClick = () => {
    history.push("/eyecare");
  };

  const handleBookAppointmentClick = (service: ClinicService) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  // Sample data for clinic services
  const clinicServices: ClinicService[] = [
    {
      id: 1,
      imageUrl: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736339287188.png",
      name: "Vision Pro Optical Store",
      address:
        "Magadi Main Rd, Chandana layout, Sunkadakatte, Bengaluru, Karnataka 560091",
      hours: "11:00AM to 09:30PM",
      phone: "+91 9876543210",
      rating: 4.9,
    },
    // Add more clinic services as needed
  ];

  return (
    <EyecareStyled>
      <div className="vision-test">
        <div className="container">
          <div className="row">
            <button className="backbtn" onClick={handleBackClick}>
              Back
            </button>
            <p className="visiontext">
              149 Stores providing free eye test near you
            </p>
          </div>
          <div className="row">
            <div className="col-md-8">
              {clinicServices.map((service) => (
                <div className="clinic-service-cardtwo" key={service.id}>
                  <img
                    src={service.imageUrl}
                    alt={`${service.name}`}
                    className="clinic-image"
                  />
                  <div className="clinic-info">
                    <div className="heading-clinic">
                      <div className="">
                        <h3>{service.name}</h3>
                      </div>
                      <div className="clinic-rating">
                        <Star /> &nbsp;
                        <span>{service.rating}</span>
                      </div>
                    </div>

                    <p>{service.address}</p>
                    <p>Hours: {service.hours}</p>
                    <p className="phone">
                      <Phone /> &nbsp;
                      <a href={`tel:${service.phone}`}>{service.phone}</a>
                    </p>
                    <div className="clinic-actions">
                      <button className="store-details-btn">
                        Store Details
                      </button>
                      <button
                        className="book-appointment-btn"
                        onClick={() => history.push("/doctor/bookingReview")}
                      >
                        Book Free Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* Modal for booking appointment */}
      {selectedService && (
        <Modal
          size="lg"
          show={showModal}
          onHide={handleCloseModal}
          centered
          dialogClassName="custom-modal"
        >
          <ModalStyled>
            <Modal.Header closeButton>
              <Modal.Title>{selectedService.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="clinic-modal-content">
                  <img
                    src={selectedService.imageUrl}
                    alt={`${selectedService.name}`}
                    className="clinic-image-modal"
                  />
                  <div className="clinic-modal-info">
                    <h4>{selectedService.name}</h4>
                    <p>{selectedService.address}</p>
                    <p>
                      <Rate /> {selectedService.rating}
                    </p>
                    <p>
                      <span className="clinic-color"> Opens Now: </span>{" "}
                      {selectedService.hours}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="appointment-times">
                  <h5>Available Slots:</h5>
                  <div className="time-slots">
                    {/* Example of time slots; adjust as needed */}
                    <div className="slot-category">
                      <h6>Morning</h6>
                      <div className="slotbuttons">
                        <button className="time-slot-btn">09:00 AM</button>
                        <button className="time-slot-btn">09:30 AM</button>
                        <button className="time-slot-btn">10:00 AM</button>
                        <button className="time-slot-btn">12:00 PM</button>
                        <button className="time-slot-btn">01:00 PM</button>
                        <button className="time-slot-btn">02:00 PM</button>
                      </div>

                      {/* Add more time slots as needed */}
                    </div>
                    <div className="slot-category">
                      <div className="slot-category">
                        <h6>Afernoon</h6>
                        <div className="slotbuttons">
                          <button className="time-slot-btn">09:00 AM</button>
                          <button className="time-slot-btn">09:30 AM</button>
                          <button className="time-slot-btn">10:00 AM</button>
                          <button className="time-slot-btn">12:00 PM</button>
                          <button className="time-slot-btn">01:00 PM</button>
                          <button className="time-slot-btn">02:00 PM</button>
                        </div>
                      </div>
                    </div>
                    <div className="slot-category">
                      <div className="slot-category">
                        <h6>Evening</h6>
                        <div className="slotbuttons">
                          <button className="time-slot-btn">09:00 AM</button>
                          <button className="time-slot-btn">09:30 AM</button>
                          <button className="time-slot-btn">10:00 AM</button>
                          <button className="time-slot-btn">12:00 PM</button>
                          <button className="time-slot-btn">01:00 PM</button>
                          <button className="time-slot-btn">02:00 PM</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => alert("Appointment Booked")}
              >
                Book Now
              </Button>
            </Modal.Footer>
          </ModalStyled>
        </Modal>
      )}
    </EyecareStyled>
  );
};

export default Visiontest;
