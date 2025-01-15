import React, { useState } from "react";
import { ReactComponent as Overviewsvg } from "../../../../assets/icons/overviewsvg.svg";
import { ReactComponent as Orange } from "../../../../assets/icons/orange.svg";
import { ReactComponent as Purple } from "../../../../assets/icons/purple.svg";
import { ReactComponent as Red } from "../../../../assets/icons/red.svg";
import { ReactComponent as Green } from "../../../../assets/icons/green.svg";
import { ReactComponent as Doc } from "../../../../assets/icons/docicon.svg";
import Modal from "react-bootstrap/Modal";
import { ReactComponent as Man } from "../../../../assets/icons/man.svg";
import { ReactComponent as Greenarrow } from "../../../../assets/icons/greenarrow.svg";
import { ReactComponent as Redarrow } from "../../../../assets/icons/redarrow.svg";

const totalpatient = [
  {
    heading: "Patient Overview",
    totalnumber: 1370,
    childnum: 150,
    adultnum: 30,
    teennum: 120,
    oldnum: 200,
  },
];

const consulatation = [
  {
    totconsult: 1370,
    upcoming: 2354,
    complted: 6876,
    rejected: 1823,
    percent: "62%",
  },
];

const appointreject = [
  {
    name: "Alex Peter",
    age: 32,
    gender: "Male",
    city: "Bangalore",
  },
  {
    name: "Alex Peter",
    age: 32,
    gender: "Male",
    city: "Bangalore",
  },
  {
    name: "Alex Peter",
    age: 32,
    gender: "Male",
    city: "Bangalore",
  },
  {
    name: "Alex Peter",
    age: 32,
    gender: "Male",
    city: "Bangalore",
  },
  {
    name: "Alex Peter",
    age: 32,
    gender: "Male",
    city: "Bangalore",
  },
];

const Overview = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div className="overview">
      {totalpatient.map((item, index) => (
        <div className="overview-left" key={index}>
          <div className="patient-overview">
            <h4>{item.heading}</h4>
            <p className="overview-icon">
              <Overviewsvg />
            </p>
            <p className="num">{item.totalnumber}</p>
            <p className="totpat">Total patients</p>

            <div className="pat-cat">
              <div className="leftcat">
                <p>
                  <Orange /> Child <span>{item.childnum} </span>
                </p>

                <p>
                  <Red /> Adult <span> {item.adultnum} </span>
                </p>
              </div>
              <div className="rightcat">
                <p>
                  <Purple /> Teen <span>{item.teennum} </span>
                </p>
                <p>
                  <Green /> Old <span> {item.oldnum} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {consulatation.map((item, index) => (
        <div className="overview-right">
          <div className="Totalconsult">
            <div className="consult">
              <p className="percentage">
                {item.percent} <Greenarrow />
              </p>
              <p className="icon-svg">
                <Doc />
              </p>
              <p className="totnumber">{item.totconsult}</p>
              <p>
                Total <br />
                Consultation
              </p>
            </div>

            <div className="consult">
              <p className="percentage iconred">
                {item.percent} <Redarrow />
              </p>
              <p className="icon-svg">
                <Doc />
              </p>
              <p className="totnumber">{item.complted} </p>
              <p>
                Completed <br />
                Consultation
              </p>
            </div>
          </div>
          <div className="upcomingconsut">
            <div className="consult">
              <p className="percentage">
                {item.percent} <Greenarrow />
              </p>
              <p className="icon-svg">
                <Doc />
              </p>
              <p className="totnumber">{item.upcoming}</p>
              <p>
                Upcoming <br />
                Consultation
              </p>
            </div>

            <div
              key={index}
              className="consult"
              onClick={() => setLgShow(true)}
            >
              <p className="percentage iconred">
                {item.percent} <Redarrow />
              </p>
              <p className="icon-svg">
                <Doc />
              </p>
              <p className="totnumber">{item.rejected} </p>
              <p>
                Rejected <br />
                Consultation
              </p>
            </div>

            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  <div className="selectbar">
                    <h2>Rejected Consultation</h2>
                    <select name="Appointments" id="today">
                      <option value="today">Today</option>
                      <option value="tomo">Tomorrow</option>
                      <option value="week">Next Week</option>
                      <option value="month">Next Month</option>
                    </select>
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {appointreject.map((item, index) => (
                  <div className="profile-card">
                    <div className="profile-info">
                      <Man />

                      <div className="profile-details">
                        <h2>{item.name}</h2>
                        <p>
                          Age: <span>{item.age}</span> Gender:{" "}
                          <span>{item.gender}</span> City:{" "}
                          <span>{item.city}</span>
                        </p>
                      </div>
                    </div>
                    <button className="contact-button">Reschedule</button>
                  </div>
                ))}
              </Modal.Body>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
