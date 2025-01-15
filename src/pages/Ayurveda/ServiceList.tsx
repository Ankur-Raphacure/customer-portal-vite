import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedaServiceAPI } from "../../redux/slices/generic/genericService";

const services = [
  {
    name: "Doctor Consultation",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736422624795.png",
    // link: "/doctor?q=ayurveda" ? "/doctor?q=ayurveda" : "/doctor?q=Ayurvedic",
    link:  "/doctor?q=ayurvedic" || "/doctor?q=ayurveda",
  },
  { name: "Ayur Pharma", image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413620503.png", link: "/pharmacy/ayurvedic" },
  {
    name: "Panchakarma",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413679117.png",
    link: "/ayurveda/panchakarmas",
  },
  {
    name: "Naturopathy",
    image: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736413783071.png",
    link: "/ayurveda/naturopathys",
  },
];

const ServiceList = (props: any) => {
  const dispatch = useDispatch();

  const { allAyurvedaServiceList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );

  useEffect(() => {
    dispatch(getAyurvedaServiceAPI());
  }, []);

  return (
    <div className="serviceList">
      <section className="services ">
        {/* {allAyurvedaServiceList.map((service: any) => { */}
        {services.map((service: any) => {
          return (
            <ServiceCard
              key={service.name}
              service={service}
              handelGoTo={props?.handelGoTo}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ServiceList;
