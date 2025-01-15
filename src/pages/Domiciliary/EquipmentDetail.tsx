import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import EquipmentCard from "./EquipmentCard";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDomiciliaryEquipmentsAPI } from "../../redux/slices/generic/genericService";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const EquipmentDetail = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const equipmentData = location.state as any;
  const { allDomiciliaryEquipmentsList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const item = allDomiciliaryEquipmentsList.equipment;

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  const handleDateClick = (date: any) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate && date >= startDate) {
      setEndDate(date);
    }
  };

  const resetDateRange = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const renderDays = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return (
      <Row className="text-center">
        {days.map((day, index) => (
          <Col key={index} className="border-bottom py-2">
            {day}
          </Col>
        ))}
      </Row>
    );
  };

  const renderDates = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const rows = [];
    let dates = [];

    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(year, month, i));
    }
    for (let i = 0; i < dates.length; i += 7) {
      rows.push(dates.slice(i, i + 7));
    }

    return (
      <>
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex} className="text-center">
            {row.map((date, dateIndex) => {
              const isDate = date !== null;
              const isInRange =
                isDate &&
                startDate &&
                endDate &&
                date >= startDate &&
                date <= endDate;
              const isSelected =
                isDate &&
                (date.getTime() === startDate?.getTime() ||
                  date.getTime() === endDate?.getTime());

              return (
                <Col
                  key={dateIndex}
                  className={`py-2 ${isInRange ? "bg-secondary" : ""}`}
                  onClick={() => isDate && handleDateClick(date)}
                  style={{
                    cursor: isDate ? "pointer" : "default",
                    borderRadius: "4px",
                    backgroundColor: isSelected ? "#9747ff" : "transparent",
                    color: isSelected ? "white" : "inherit",
                  }}
                >
                  {isDate ? date.getDate() : ""}
                </Col>
              );
            })}
          </Row>
        ))}
      </>
    );
  };

  const changeMonth = (increment: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + increment,
      1
    );
    setCurrentDate(newDate);
  };

  const currentMonthName = currentDate.toLocaleString("default", {
    month: "long",
  });
  const nextMonthName = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1
  ).toLocaleString("default", { month: "long" });

  const calculateTotalAmount = () => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
      return daysDiff * equipmentData.price_per_day;
    }
    return 0;
  };

  const totalAmount = calculateTotalAmount();

  // const equipmentData = {
  //   name: "Standard Foldable Wheelchair",
  //   firstDayPrice: 4000,
  //   additionalDayPrice: 200,
  //   description:
  //     "A Standard Foldable Wheelchair offers convenience and comfort, designed for easy transport and storage. Ideal for everyday use, it provides reliable support while being lightweight and easy to maneuver. Perfect for those who need mobility assistance on the go.",
  //   dimensions: "39.3 x 25.25 x 37.5 inches",
  //   weightCapacity: "50 lbs",
  //   heightCapacity: "35 inches",
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleBackClick = () => {
    history.push("/domiciliarycare/medicalequipments");
  };

  const handleBookNow = (obj: any) => {
    history.push("/domiciliarycare/medicalequipments/equipmentdetail", obj);
  };

  useEffect(() => {
    dispatch(getAllDomiciliaryEquipmentsAPI(100));
  }, []);

  return (
    <DomiciliaryCareStyled>
      <div className="equipment-detail container-fluid">
        <div className="row mb-2">
          <div className="col-lg-2 text-center">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
          </div>
        </div>
        <div className="row">
          {/* Left Side: Equipment Image Slider */}
          <div className="col-md-6 text-center">
            <Slider {...settings}>
              <div>
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500829889.png"
                  alt={equipmentData.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500786538.png"
                  alt={equipmentData.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736500970080.png"
                  alt={equipmentData.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Slider>

            {/* Action Buttons below image */}
            <div className="action-buttons">
              <button
                className="buy-now"
                onClick={() => {
                  // addToCart(item);
                  history.push(`/labTestDetils/${equipmentData?.id}`);
                }}
              >
                Buy Now
              </button>
              <button
                className="rent-now"
                // onClick={() => {
                // addToCart(item);
                //   history.push(`/labTestDetils/${equipmentData?.id}`);
                // }}
                onClick={handleShow}
              >
                Rent Now
              </button>
            </div>
          </div>

          {/* Right Side: Equipment Details */}
          <div className="col-md-6 equipment-info">
            <h2>{equipmentData.name}</h2>
            <div className="quantity-section">
              <span className="quantity-label">QTY</span>
              <button className="decrement-btn" onClick={handleDecrement}>
                &ndash;
              </button>
              <span className="quantity-value">{quantity}</span>
              <button className="increment-btn" onClick={handleIncrement}>
                +
              </button>
            </div>
            <div className="pricing">
              <p>
                1st Day: <span>{equipmentData.firstDayPrice}</span> additional
                days: <span>{equipmentData.price_per_day}</span>/day
              </p>
            </div>
            <div className="description-section">
              <h3>Description</h3>
              <p className="desc-text">{equipmentData.description}</p>
              <p>Open Dimensions: {equipmentData.dimensions}</p>
              <p>Weight capacity: {equipmentData.weightCapacity}</p>
              <p>Height capacity: {equipmentData.heightCapacity}</p>
            </div>
          </div>
        </div>
        <div className="row mt-5 similar">
          <h2>Similar equipment's</h2>
          {item?.slice(0, 4).map((treatment: any, index: any) => (
            <div className="col" key={index}>
              <div className="accordion-item">
                <EquipmentCard
                  mostOrdersSection={true}
                  item={treatment}
                  handleBookNow={handleBookNow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <DomiciliaryCareStyled>
          <div className="Popup-module-div">
            <div className="Popup-module-btn-div">
              <button className="btn" onClick={handleClose}>
                X
              </button>
            </div>

            <Container className="mt-4">
              <Row className="d-flex justify-content-between">
                <Col xs={3} className="text-center">
                  <button className="btn p-0" onClick={() => changeMonth(-1)}>
                    <SlArrowLeft className="me-3" />
                    {currentMonthName} {currentDate.getFullYear()}
                  </button>
                </Col>

                <Col xs={3} className="text-end">
                  <button className="btn p-0 " onClick={() => changeMonth(1)}>
                    {nextMonthName} {currentDate.getFullYear()}
                    <SlArrowRight className="ms-3" />
                  </button>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={5}>
                  {renderDays()}
                  {renderDates(
                    currentDate.getFullYear(),
                    currentDate.getMonth()
                  )}
                </Col>
                <Col
                  xs={2}
                  className="d-flex justify-content-center align-items-center"
                >
                  <button className="btn" onClick={resetDateRange}>
                    Reset
                  </button>
                </Col>
                <Col xs={5}>
                  {renderDays()}
                  {renderDates(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1
                  )}
                </Col>
              </Row>
            </Container>
            <div className="Popup-module-add-btn-div mt-4">
              <div className="Popup-module-price-div me-5 ">
                <p>Per Day: {equipmentData.price_per_day} /-</p>
                <h5>Total Amount: {totalAmount} /-</h5>
              </div>
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </DomiciliaryCareStyled>
      </Modal>
    </DomiciliaryCareStyled>
  );
};

// Custom Arrow Components for the slider
const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default EquipmentDetail;
