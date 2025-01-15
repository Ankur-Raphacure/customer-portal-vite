import { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import ViewDetails from "./ViewDetails";
import RescheduleBookingForm from "../Bookings/RescheduleBookingForm";
import { useHistory } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const OrderItem = ({ item }: any) => {
  const history = useHistory();
  const [showDetails, setShowDetails] = useState(false);
  const {
    image,
    name,
    type,
    schDate,
    bookDate,
    service_code,
    price,
    status,
    orgBookingObj,
  } = item;
  const [showReBookForm, setShowReBookForm] = useState(false);
  console.log("orgBookingObj : ", orgBookingObj);

  function formatStatus(status: any) {
    return status
      .toLowerCase()
      .split("_")
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const navigateTo = () => {
    history.push("/cart");
  };

  const reOrder = async () => {
    console.log("item", item);
    const bType = orgBookingObj?.type?.toLowerCase();
    console.log("orgBookingObj", orgBookingObj);
    if (
      orgBookingObj &&
      orgBookingObj.package &&
      orgBookingObj.package.service_code
    ) {
      window.location.href = `/labTestDetils/${orgBookingObj.package.service_code}`;
    } else if (bType === "pharmacy" && service_code) {
      history.push(`/item/generic/${service_code}`);
    } else if (
      bType === "virtual_consultation" ||
      bType === "opd_consultation"
    ) {
      history.push(`/doctor`);
    } else if (
      orgBookingObj?.test?.type === "ctmri" &&
      orgBookingObj?.test?.service_code
    ) {
      history.push(
        `/radiology/scan-details/${orgBookingObj?.test?.service_code}`
      );
    } else if (orgBookingObj?.test?.type === "eye_care") {
      history.push(`/eyecare`);
    } else if (orgBookingObj?.test?.type === "gym") {
      history.push(`/Gymlist`);
    }
  };

  return (
    <div className="borderShadow">
      <div className="consultation-card">
        <div className="consultation-header">
          <div className="avatar-placeholder">
            <img src={image} alt="Doc" />
          </div>
          <div className="consultation-info">
            <h2>{name}</h2>
            <p>{orgBookingObj?.test?.type || type}</p>
          </div>
        </div>
        <div className="consultation-details">
          <div className="detail">
            <p>Scheduled Date:</p>
            <p>{schDate}</p>
          </div>
          <div className="detail">
            <p>Booked Date:</p>
            <p>{bookDate}</p>
          </div>
        </div>
        <div className="consultation-footer">
          <p className="price">
            <MdOutlineCurrencyRupee /> {price}.00
          </p>
          {(status === "completed" || status === "report_delivered") && (
            <>
              <div className="status">
                <div className="status-icon"></div>
                <p>{formatStatus(status)}</p>
              </div>
              <button className="book-again-btn" onClick={() => reOrder()}>
                Book Again
              </button>
            </>
          )}
          {(status === "ongoing" ||
            status === "open" ||
            status === "confirmation_pending" ||
            status === "client_confirmation_pending" ||
            status === "booking_scheduled" ||
            status === "awaiting_report" ||
            status === "work_in_progress") && (
            <>
              <div className="status">
                <div className="status-icon-scheduled"></div>
                <p>{formatStatus(status)}</p>
              </div>
              <button className="chat-btn">
                <HiChatAlt2 size={25} /> Chat
              </button>
              <button
                className="view-details-btn"
                onClick={() => setShowDetails(true)}
              >
                View Details
              </button>
            </>
          )}
          {(status === "cancelled" || status === "payment_pending") && (
            <>
              <div className="status">
                <div className="status-icon-cancelled"></div>
                <p>{formatStatus(status)}</p>
              </div>
              <button
                className="reorder-btn"
                // onClick={() => setShowReBookForm(true)}
                onClick={() => reOrder()}
              >
                Re-Order
              </button>
            </>
          )}
        </div>
      </div>
      {showDetails && (
        <ViewDetails
          item={orgBookingObj}
          onClose={() => setShowDetails(false)}
        />
      )}
      {showReBookForm && (
        <RescheduleBookingForm
          bookingId={item?.orgBookingObj?.id}
          onClose={() => setShowReBookForm(false)}
        />
      )}
    </div>
  );
};

export default OrderItem;
