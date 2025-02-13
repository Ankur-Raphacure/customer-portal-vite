import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import DoctorImage from "../../assets/images/eyecare/doctor-img.png";

interface DentalCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DentalCareModal: React.FC<DentalCareModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal show={isOpen} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Dental Care Consultation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6} className="p-0">
            <img
              src={DoctorImage}
              alt="Doctor"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Book Appointment</h3>
            <p>
              Now you can get an online appointment, We will get back to you and
              schedule a meeting with the doctor.
            </p>
            <Form>
              <Form.Group controlId="formTreatment">
                <Form.Control as="select" className="mb-3">
                  <option>Choose Treatment</option>
                  <option>General Consultation</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Control type="date" className="mb-3" />
              </Form.Group>

              <Form.Group controlId="formTime">
                <Form.Control as="select" className="mb-3">
                  <option>Choose Time</option>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  {/* Add more options as needed */}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formFullName">
                <Form.Control
                  type="text"
                  placeholder="Full Name*"
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="formContactNumber">
                <Form.Control
                  type="text"
                  placeholder="Contact Number*"
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="formComments">
                <Form.Control as="textarea" rows={3} placeholder="Comments" />
              </Form.Group>
            </Form>
            <Button variant="primary" className="mt-4 w-100">
              Book Free Appointment
            </Button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onClose}>Close</button>
      </Modal.Footer>
    </Modal>
  );
};

export default DentalCareModal;
