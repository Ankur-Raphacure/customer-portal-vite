import React, { useState } from "react";
import { ReactComponent as Man } from "../../../../assets/icons/man.svg";
import Modal from "react-bootstrap/Modal";
import "./Appoint.css";
import { ReactComponent as Share } from "../../../../assets/icons/share.svg";
import { ReactComponent as Rep } from "../../../../assets/icons/rep.svg";
import { ReactComponent as Pres } from "../../../../assets/icons/pres.svg";

const appointdet = [
  {
    name: "John Doe",
    name2: "Lorem Ipsum",
    time: "10:00 AM",
  },
  {
    name: "John Doe",
    name2: "Lorem Ipsum",
    time: "10:00 AM",
  },
  {
    name: "John Doe",
    name2: "Lorem Ipsum",
    time: "10:00 AM",
  },
  {
    name: "John Doe",
    name2: "Lorem Ipsum",
    time: "10:00 AM",
  },
  {
    name: "John Doe",
    name2: "Lorem Ipsum",
    time: "10:00 AM",
  },
  {
    name: "John Doe",
    name2: "Lorem Ipsum",
    time: "10:00 AM",
  },
];

const Appoint = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="appoint-left">
      <div className="filtersec">
        <label>Appointments</label>
        <select name="Appointments" id="today">
          <option value="today">Today</option>
          <option value="tomo">Tomorrow</option>
          <option value="week">Next Week</option>
          <option value="month">Next Month</option>
        </select>
      </div>

      <div className="datesection">
        <div className="lefticon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path d="M6 10L6 0L0 5L6 10Z" fill="#9474FF" />
          </svg>
        </div>
        <div className="dateinside">
          <p className="week">Sun</p>
          <p className="date">17</p>
        </div>
        <div className="dateinside active-date">
          <p className="week">Sun</p>
          <p className="date">17</p>
        </div>
        <div className="dateinside">
          <p className="week">Sun</p>
          <p className="date">17</p>
        </div>
        <div className="dateinside">
          <p className="week">Sun</p>
          <p className="date">17</p>
        </div>
        <div className="righticon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="10"
            viewBox="0 0 7 10"
            fill="none"
          >
            <path
              d="M0.350503 0.0987726L0.421889 9.30911L6.91362 4.68134L0.350503 0.0987726Z"
              fill="#9474FF"
            />
          </svg>
        </div>
      </div>

      {appointdet.map((item, index) => (
        <div key={index} className="appointdet" onClick={() => setLgShow(true)}>
          <Man />
          <div className="appoint-info">
            <div>
              <div className="name">{item.name}</div>
              <div className="name2">{item.name2}</div>
              <div className="time">{item.time}</div>
            </div>
          </div>
        </div>
      ))}

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="profile-card">
            <div className="profile-info">
              <Man />
              <div className="profile-details">
                <h2>Alex Peter</h2>
                <p>
                  Age: <span>32</span> Gender: <span>Male</span> City:{" "}
                  <span>Bangalore</span>
                </p>
              </div>
            </div>
            <button className="contact-button">Contact</button>
          </div>
          <div className="appointment-details">
            <div className="header">
              <h2>Appointment 2</h2>
              <div className="header-right">
                <div className="appointment-mode">
                  <span>Mode:</span>{" "}
                  <span className="mode">Video consultation</span>
                </div>
                <div className="appointment-actions">
                  <button className="report-button">
                    Report <Rep />
                  </button>
                  <button className="prescription-button">
                    Prescription <Pres />
                  </button>
                  <div className="share-icon">
                    <Share />
                  </div>
                </div>
              </div>
            </div>
            <div className="appointment-info">
              <div className="appointment-item">
                <label>Date:</label>
                <span>20 Jan 2024</span>
              </div>
              <div className="appointment-item">
                <label>Time:</label>
                <span>11:30 AM</span>
              </div>
              <div className="appointment-item">
                <label>Purpose:</label>
                <span>Fever & Cough</span>
              </div>
            </div>
            <div className="summary">
              <h4>Summary</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="view-allbtn">
        <button>View all</button>
      </div>
    </div>
  );
};

export default Appoint;
