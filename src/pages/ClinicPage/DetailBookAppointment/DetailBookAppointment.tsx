import React, { useEffect, useRef, useState } from "react";
import { DetailBookAppointmentStyled } from "./DetailBookAppointment.styled";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosStar,
} from "react-icons/io";

const hospitals = [
  {
    id: 1,
    name: "Well care Hospital",
    rating: 4.0,
    address: "Bannerghatta Road, Bangalore",
    details:
      "Number 20, 5th Main, Main Road, BS Nagar, Landmark: Near Sriram Temple , Bangalore",
    directions: "Get Directions",
    images: [
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
    ],
    timings: "12:00 PM - 02:00 PM",
    days: "Mon - Sat",
    fee: "₹ 1600",
  },
  {
    id: 2,
    name: "Well care Hospital",
    rating: 4.0,
    address: "Bannerghatta Road, Bangalore",
    details:
      "Number 20, 5th Main, Main Road, BS Nagar, Landmark: Near Sriram Temple , Bangalore",
    directions: "Get Directions",
    images: [
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
    ],
    timings: "12:00 PM - 02:00 PM",
    days: "Mon - Sat",
    fee: "₹ 1600",
  },
  {
    id: 3,
    name: "Well care Hospital",
    rating: 4.0,
    address: "Bannerghatta Road, Bangalore",
    details:
      "Number 20, 5th Main, Main Road, BS Nagar, Landmark: Near Sriram Temple , Bangalore",
    directions: "Get Directions",
    images: [
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735901812293.png",
    ],
    timings: "12:00 PM - 02:00 PM",
    days: "Mon - Sat",
    fee: "₹ 1600",
  },
];

interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

interface DaySlot {
  date: string;
  slots: TimeSlot[];
}


const DetailBookAppointment = () => {
  const [activeTab, setActiveTab] = useState("Info");
  const [isTooltipVisible, setIsTooltipVisible] = useState(null);
  const [isVirtual, setIsVirtual] = useState(true);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const sections = ["Morning", "Afternoon", "Evening"];

  const days: DaySlot[] = [
    {
      date: "Today",
      slots: [
        { time: "09:30 AM", isAvailable: true },
        { time: "10:30 AM", isAvailable: false },
        { time: "11:00 AM", isAvailable: true },
        { time: "11:30 AM", isAvailable: true },
        { time: "03:30 PM", isAvailable: false },
        { time: "04:30 PM", isAvailable: true },
        { time: "05:00 PM", isAvailable: true },
        { time: "06:00 PM", isAvailable: false },
        { time: "06:30 PM", isAvailable: true },
        { time: "07:00 PM", isAvailable: true },
        { time: "07:30 PM", isAvailable: false },
      ],
    },
    {
      date: "Tomorrow",
      slots: [
        { time: "10:30 AM", isAvailable: true },
        { time: "11:30 AM", isAvailable: true },
        { time: "12:30 PM", isAvailable: false },
        { time: "01:30 PM", isAvailable: true },
        { time: "07:00 PM", isAvailable: false },
        { time: "07:30 PM", isAvailable: true },
      ],
    },
    {
      date: "Sun, 1 Dec",
      slots: [
        { time: "02:30 PM", isAvailable: true },
        { time: "03:30 PM", isAvailable: false },
        { time: "04:30 PM", isAvailable: true },
      ],
    },
  ];

  const handleToggle = (isVirtualSelected: boolean) =>
    setIsVirtual(isVirtualSelected);

  const handleDayChange = (index: number) => {
    setSelectedDay(index);
    setSelectedSlot(null);
  };

  const daySelectorRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (daySelectorRef.current) {
      daySelectorRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (daySelectorRef.current) {
      daySelectorRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  const handleSlotSelection = (time: string) => {
    setSelectedSlot(time);
  };

  const handleMouseEnter = (id: any) => {
    setIsTooltipVisible(id);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(null);
  };

  const Banner = ({ rating }: any) => {
    return (
      <div className="bannerWrapper">
        <div className="rectangle">
          <IoIosStar fill="#252B61" /> {rating}
        </div>
        <div className="triangle"></div>
      </div>
    );
  };

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    sections.forEach((sec) => {
      initialState[sec] = true;
    });
    setExpandedSections(initialState);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <DetailBookAppointmentStyled>
      <div className="main-container">
        <div className="left-side">
          <div className="cardContainer">
            <div className="header">
              <div className="profileContainer">
                <div className="profile">
                  <Banner rating={4.5} />
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735741676463.png"
                    alt="Doctor Profile"
                    className="profileImage"
                  />
                  <div className="exp">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png"
                      alt=""
                    />
                    <span className="experience">5+ Years Experience</span>
                  </div>
                </div>
                <div className="info">
                  <h2 className="name">Dr. Abinandh Ramnathskrishnan</h2>
                  <p className="title">Ayurvedic Surgeon</p>
                  <div className="qua">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735889830917.png"
                      alt=""
                    />
                    <p className="qualifications">
                      BAMS MD MBBS Urology MS General Surgery
                    </p>
                  </div>
                  <div className="lang">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735652815819.png"
                      alt=""
                    />
                    <p className="languages">
                      English, Hindi, Tamil, Malayalam
                    </p>
                  </div>

                  <div className="veri">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735894581102.png"
                      alt=""
                    />
                    <p className="verification">
                      Medical Registration Verified
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="servicesContainer">
              <h3>Services</h3>
              <div className="serviceListDiv">
                <ul className="servicesList">
                  <li>Acne treatment</li>
                  <li>Eczema treatment</li>
                  <li>Psoriasis treatment</li>
                  <li>Wart removal</li>
                  <li>Fungal nail treatment</li>
                  <li>Hair loss treatment</li>
                  <li>Skin cancer screening</li>
                  <li>Mole removal</li>
                  <li>Scar revision</li>
                </ul>
              </div>
              <button className="serviceListAll">View all..</button>
            </div> */}
          </div>
          <div className="hospital-container">
            <div className="tabs">
              <button
                className={`tab ${activeTab === "Info" ? "active" : ""}`}
                onClick={() => setActiveTab("Info")}
              >
                Info
              </button>
              <button
                className={`tab ${activeTab === "Consult Q&A" ? "active" : ""}`}
                onClick={() => setActiveTab("Consult Q&A")}
              >
                Consult Q&A
              </button>
            </div>

            {activeTab === "Info" && (
              <div className="hospital-list">
                {hospitals.map((hospital, index) => (
                  <div className="hospital-card" key={index}>
                    <div className="hospital-header">
                      <h2 className="hospital-name">{hospital.name}</h2>
                    </div>
                    <div className="down-part">
                      <div className="left-hospital-side">
                        <div className="hospital-rating">
                          <span>{hospital.rating}</span>
                          <span className="stars">★★★★★</span>
                        </div>
                        <p className="hospital-address">{hospital.address}</p>
                        <p className="hospital-details">{hospital.details}</p>
                        <a href="#" className="hospital-directions">
                          <span>
                            <img
                              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1736000077017.png"
                              alt=""
                            />
                          </span>{" "}
                          {hospital.directions}
                        </a>
                      </div>
                      <div className="middle">
                        <div className="hospital-timings">
                          <p>{hospital.days}</p>
                          <p>{hospital.timings}</p>
                        </div>
                      </div>
                      <div className="hospital-footer">
                        <div className="hospital-fee">
                          <span>{hospital.fee}</span>
                          <div
                            className="info-icon"
                            onMouseEnter={() => handleMouseEnter(hospital.id)}
                            onMouseLeave={handleMouseLeave}
                          >
                            i
                            {isTooltipVisible === hospital.id && (
                              <div className="detailTooltip">
                                <strong>
                                  This fee is indicative and might vary.
                                </strong>
                                <br />
                                <span>
                                  NOTE: Fees are payable at the clinic. There
                                  are NO charges for booking an appointment.
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="footer-part">
                      <div className="hospital-images">
                        {hospital.images.map((image, imgIndex) => (
                          <img
                            src={image}
                            alt={`Hospital ${index + 1} - ${imgIndex + 1}`}
                            key={imgIndex}
                            className="hospital-image"
                          />
                        ))}
                      </div>
                      <button className="call-now-button">Call Now</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Consult Q&A" && (
              <div className="free-question-card">
                <div className="icon-section">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735999749446.png"
                    alt="Query Icon"
                    className="query-icon"
                  />
                </div>
                <p className="info-text">
                  No query answered by this doctor. Get <br />
                  answers <br />
                  to your health queries now
                </p>
                <button className="ask-button">Ask Free Question</button>
              </div>
            )}
          </div>
        </div>
        <div className="right-side">
          <div className="time-slot-picker">
            <h2 className="title-slot">Pick a Time Slot</h2>

            <div className="toggle-container">
              <span className={`toggle-label ${isVirtual ? "active" : ""}`}>
                Virtual Consult
              </span>
              <div
                className={`toggle-switch ${isVirtual ? "virtual" : "clinic"}`}
                onClick={() => handleToggle(!isVirtual)}
              >
                <div className="toggle-circle"></div>
              </div>
              <span className={`toggle-label ${!isVirtual ? "active" : ""}`}>
                In Clinic Consult
              </span>
            </div>

            <div className="fee">
              <h1>{isVirtual ? "Virtual Consult" : "In Clinic Consult"} </h1>
              <h2>{isVirtual ? "₹ 300 fee" : "₹ 500 fee"}</h2>
            </div>

            <div className="day-selector-container">
              <button className="arrow-button left" onClick={scrollLeft}>
                <IoIosArrowBack />
              </button>
              <div className="day-selector" ref={daySelectorRef}>
                {days.map((day, index) => (
                  <button
                    key={index}
                    className={`day-button ${
                      selectedDay === index ? "selected" : ""
                    }`}
                    onClick={() => handleDayChange(index)}
                  >
                    <div className="day-text">{day.date}</div>
                    <div className="slot-count">
                      {day.slots.filter((slot) => slot.isAvailable).length}{" "}
                      Slots
                    </div>
                  </button>
                ))}
              </div>
              <button className="arrow-button right" onClick={scrollRight}>
                <IoIosArrowForward />
              </button>
            </div>

            <div className="time-slot-container">
              {["Morning", "Afternoon", "Evening"].map((section, index) => {
                const sectionSlots = days[selectedDay].slots.filter((slot) => {
                  const [hour, minutePart] = slot.time.split(":");
                  const hour24 = parseInt(hour, 10);
                  const isPM = slot.time.includes("PM");
                  const hourIn24Format =
                    isPM && hour24 !== 12 ? hour24 + 12 : hour24;
                  if (section === "Morning")
                    return hourIn24Format >= 9 && hourIn24Format < 12;
                  if (section === "Afternoon")
                    return hourIn24Format >= 12 && hourIn24Format < 17;
                  if (section === "Evening")
                    return hourIn24Format >= 17 && hourIn24Format < 21;
                });

                return (
                  <div key={index} className="time-slot-section">
                    <div
                      className="section-header"
                      onClick={() => toggleSection(section)} // Use a dynamic function
                    >
                      <p>
                        <h1>{section} </h1>
                        <h2>
                          ({sectionSlots.length} slot
                          {sectionSlots.length !== 1 ? "s" : ""})
                        </h2>
                      </p>
                      {expandedSections[section] ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </div>
                    {expandedSections[section] && (
                      <div className="slots">
                        {sectionSlots.map((slot, idx) => (
                          <button
                            key={idx}
                            className={`slot-button ${
                              slot.isAvailable ? "" : "disabled"
                            } ${selectedSlot === slot.time ? "selected" : ""}`}
                            onClick={() =>
                              slot.isAvailable && handleSlotSelection(slot.time)
                            }
                            disabled={!slot.isAvailable}
                          >
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className="book-button"
              disabled={!selectedSlot}
              onClick={() => alert(`Slot booked: ${selectedSlot}`)}
            >
              Book Slot
            </button>
          </div>
          <div className="doctor-card">
            <div className="doctor-profile">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735997629225.png"
                alt="Doctor"
                className="doctor-image"
              />
              <div className="doctor-info">
                <h4 className="doctor-name">Dr. Abinandh Ramnathskrishnan</h4>
                <p className="doctor-specialty">Ayurvedic Surgeon</p>
              </div>
            </div>
            <div className="doctor-connect">
              <div className="connect-info">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735996347890.png"
                  alt="Lightning"
                  className="connect-icon"
                />
                <span>
                  Connect With Doctor <br /> in <b>90 seconds</b>
                </span>
              </div>

              <div className="action-buttons">
                <button className="chat-button">Chat</button>
                <button className="instant-connect-button">
                  Instant Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailBookAppointmentStyled>
  );
};

export default DetailBookAppointment;
