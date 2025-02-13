import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaCircle, FaHome } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  getMoreDDDetailsAPI,
  getPrescriptionDataAPI,
} from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { htmlTemplate } from "../../../../Scenes/common";
import { Modal } from "react-bootstrap";
import { Button } from "antd";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader/Loader";
import { useHistory } from "react-router-dom";
import PrescriptionPreview from "./PrescriptionDocument";

const OrderDetail = ({ item, itemId, onClose }: any) => {
  const [orderItem, setOrderItem] = useState(item);
  const [bookingLogs, setBookingLogs] = useState([]);
  const dispatch = useDispatch();
  const [previewHtml, setPreviewHtml] = useState("");
  const [hasPrescription, setHasPrescription] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const history = useHistory();
  const [previewData, setPreviewData] = useState({});

  useEffect(() => {
    if (item?.attachments?.length > 0 && item?.attachments[0]?.id) {
      setHasPrescription(true);
    }
  }, [item]);

  useEffect(() => {
    const fetchBookingLogs = async () => {
      if (!item.id) {
        return;
      }
      const res = await dispatch(getMoreDDDetailsAPI(item?.id));
      const resJson = JSON.parse(JSON.stringify(res));
      setBookingLogs(resJson?.payload?.data?.bookingLogs);
    };
    setOrderItem(item);
    fetchBookingLogs();
  }, [item]);

  const handlePrescriptionPreview = async () => {
    setShowLoader(true);
    console.log("id : ", item?.id);
    if (!item?.id) {
      toast.error("Prescription ID Not found");
      return;
    }
    const res = (await dispatch(getPrescriptionDataAPI(item?.id))) as any;
    const data = res?.payload;
    const prescHtml = await htmlTemplate(data); // Generate HTML
    setPreviewData(data);
    setPreviewHtml(prescHtml);
    setShowPreviewModal(true);
    setShowLoader(false);
  };

  const handleOpenEPrescription = () => {
    if (!item?.id) {
      toast.error("Prescription ID Not found");
    } else {
      history.push(`/eprescription/${item?.id}`);
    }
  };

  const createSteps = (order: any) => {
    const formatDate = (timestamp: any, includeTime = true) => {
      const date = new Date(parseInt(timestamp));

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];

      const dayOfWeek = daysOfWeek[date.getDay()];
      const year = date.getFullYear();
      const month = months[date.getMonth()];
      const day = date.getDate().toString().padStart(2, "0");

      let dateString = `${dayOfWeek} ${month}/${day}/${year}`;

      if (includeTime) {
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const period = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        dateString += ` ${hours}:${minutes} ${period}`;
      }

      return dateString;
    };

    const steps = [];

    steps.push({
      label: `Order Placed on ${formatDate(order?.created_at)}`,
      completed: true,
    });

    if (order?.collection_1_date) {
      steps?.push({
        label: `Out for collection on ${formatDate(
          order?.collection_1_date,
          false
        )}`,
        completed: true,
      });
    }

    if (order?.collection_1_date) {
      steps?.push({
        label: `Sample Collected on ${formatDate(order?.collection_1_date)}`,
        completed: true,
      });
    }
    if (order?.collection_1_date) {
      const reachedLabDate = new Date(
        parseInt(order?.collection_1_date) + 3600000
      ).getTime();
      steps.push({
        label: `Reached Lab for testing on ${formatDate(reachedLabDate)}`,
        completed: true,
      });
    }
    steps.push({
      label: "Reports",
      completed: false,
    });

    return steps;
  };

  const OrderStatus = () => {
    return (
      <div className="order-status">
        {/* First Step: Order Creation */}
        <div className="order-status-step">
          <div className="order-status-icon">
            <FaCheckCircle color="#45A834" />
          </div>
          <div className="order-status-label">
            Order Placed on {formatDate(orderItem?.created_at)}
          </div>
        </div>

        {/* Map through bookingLogs */}
        {bookingLogs &&
          bookingLogs?.length > 0 &&
          bookingLogs.map((log, index) => (
            <React.Fragment key={index}>
              <h1></h1>
              <div className="order-status-step">
                <div className="order-status-icon">
                  <FaCheckCircle color="#45A834" />
                </div>
                <div className="order-status-label">{log}</div>
              </div>
            </React.Fragment>
          ))}
      </div>
    );
  };

  const CustomerDetails = () => {
    return (
      <div className="customer-details">
        <div className="customer-section">
          <div className="customer-label">Customer</div>
        </div>
        <div className="customer-section">
          <div className="customer-label">Bill to</div>
          <div className="customer-value">
            {orderItem?.user?.first_name} {orderItem?.user?.last_name}
          </div>
        </div>
        <div className="customer-section">
          <div className="customer-label">Home Collection Address</div>
          <div className="customer-value">
            <FaHome className="address-icon" size={50} />
            {orderItem?.address?.address}
          </div>
        </div>
      </div>
    );
  };

  const ProductCard = ({
    image,
    title,
    quantity,
    originalPrice,
    discountedPrice,
  }: any) => {
    return (
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <div className="product-details">
          <div className="product-title">{title}</div>
          <div className="product-quantity">{quantity} pieces</div>
        </div>
        <div className="product-pricing">
          <span className="original-price">₹ {originalPrice}</span>
          <span className="discounted-price">₹ {discountedPrice}</span>
        </div>
      </div>
    );
  };

  const ProductCards = () => {
    return (
      <div>
        {orderItem?.medicines?.length > 0 &&
          orderItem?.medicines?.map((medicine: any, index: any) => (
            <ProductCard
              key={index}
              image={medicine?.image}
              title={medicine?.service_name}
              quantity={medicine?.count}
              originalPrice={100}
              discountedPrice={100 - medicine?.count * 10}
            />
          ))}
      </div>
    );
  };

  const PricingSummary = ({ originalCost, totalAmount }: any) => {
    return (
      <div className="pricing-summary">
        <div className="pricing-row">
          <div className="pricing-label">Original Cost</div>
          <div className="pricing-value">₹{originalCost}</div>
        </div>
        <div className="pricing-row">
          <div className="pricing-label total-label">Total Amount</div>
          <div className="pricing-value total-value">
            ₹{totalAmount.toFixed(2)}
          </div>
        </div>
      </div>
    );
  };

  const formatDate = (timestamp: any) => {
    const date = new Date(parseInt(timestamp));
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };
  const Details = () => {
    return (
      <div className="details">
        {showLoader && <Loader />}
        <div className="order-details-row">
          <div className="order-details-label">Order Date</div>
          <div className="order-details-value">
            {formatDate(orderItem?.created_at)}
          </div>
        </div>
        <div className="order-details-row">
          <div className="order-details-label">Mode</div>
          <div className="order-details-value">
            <span className="badge badge-blue">
              {orderItem.type === "pharmacy" ? "Home Collection" : "Other Mode"}
            </span>
          </div>
        </div>
        <div className="order-details-row">
          <div className="order-details-label">Payment Mode</div>
          <div className="order-details-value">
            <span className="badge badge-purple">
              {orderItem.status === "open" ? "Online" : "Offline"}
            </span>
          </div>
        </div>
        {hasPrescription && (
          <div className="order-details-row">
            <div className="order-details-label">Prescription</div>
            <div
              className="order-details-value prescription-btn cursor-pointer"
              onClick={handlePrescriptionPreview}
            >
              <span className="badge badge-green">View</span>
            </div>
          </div>
        )}
        {hasPrescription && (
          <div className="order-details-row">
            <div className="order-details-label">E Prescription</div>
            <div
              className="order-details-value prescription-btn cursor-pointer"
              onClick={handleOpenEPrescription}
            >
              <span className="badge badge-green">Open E-Prescription</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="orderDetails">
      <div title="Close" className="closeBtn" onClick={onClose}>
        <IoMdCloseCircleOutline size={25} />
      </div>
      <h2>Order ID : {orderItem?.id}</h2>
      <h3>Order Status</h3>

      <OrderStatus />
      <Details />
      <CustomerDetails />
      <h3>Products</h3>
      <ProductCards />
      <div>
        <PricingSummary
          originalCost={orderItem?.final_amount}
          totalAmount={0.8 * orderItem?.final_amount}
        />
      </div>

      <PrescriptionPreview
        data={previewData}
        showPreviewModal={showPreviewModal}
        setShowPreviewModal={setShowPreviewModal}
      />
    </div>
  );
};

export default OrderDetail;
