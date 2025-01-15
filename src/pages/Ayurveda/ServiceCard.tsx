import React from "react";

const ServiceCard = ({ service, handelGoTo }: any) => (
  <div
    className="service-card cursor-pointer"
    onClick={() => {
      handelGoTo(service?.link);
    }}
  >
    <img src={service.image} alt={service.name} className="service-image" />
    <h3 className="service-title">{service.name}</h3>
  </div>
);

export default ServiceCard;
