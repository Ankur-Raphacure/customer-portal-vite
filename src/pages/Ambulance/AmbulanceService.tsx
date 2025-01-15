import React from "react";
import { FaCaretRight } from "react-icons/fa";
import { ReactComponent as AmbulanceIcon } from "../../assets/icons/ambulance.svg";
const services = [
  {
    name: "Patient transfer",
    vehicles: "Eeco, Omini, etc..",
    price: "₹400",
  },
  {
    name: "Basic Life Support",
    vehicles: "Balero, Cruiser, Tavera",
    price: "₹400",
  },
  {
    name: "Advance Life Support",
    vehicles: "Traveller, Winger",
    price: "₹400",
  },
  {
    name: "Hearse Medium",
    vehicles: "Balero, Cruiser, Tavera",
    price: "₹400",
  },
];

const AmbulanceService = ({ handleBooking, list, distance }: any) => {
  return (
    <div className="service-list">
      {list?.map((service: any, index: any) => (
        <div className="service-item" key={index}>
          <div className="service-icon">
            <AmbulanceIcon />
          </div>
          <div className="service-details">
            <div className="service-name">{service.service_name}</div>
            <div className="service-vehicles">Vehicles:Ambulance</div>
            <p>
              {distance?.distance} distance * Duration between{" "}
              {distance?.duration}
            </p>
          </div>
          <div className="service-price">
            ₹{service.price?.discounted_price}
          </div>
          <div className="service-arrow">
            <span onClick={() => handleBooking(service)}>
              <button className="primary-button">Book</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmbulanceService;
