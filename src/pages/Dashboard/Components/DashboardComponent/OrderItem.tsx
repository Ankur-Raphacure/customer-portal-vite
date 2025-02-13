import { useState } from "react";
import { HiChatAlt2 } from "react-icons/hi";
import ViewDetails from "./ViewDetails";
import RescheduleBookingForm from "../Bookings/RescheduleBookingForm";
import { useHistory } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { formatStatus } from "../../../../Scenes/common";
import { BsPersonCircle } from "react-icons/bs";
import moment from "moment";
import { TbReportMedical } from "react-icons/tb";
import { toast } from "react-toastify";

const OrderItem = ({ item }: any) => {
  const history = useHistory();
  const [showDetails, setShowDetails] = useState(false);
  const { service_code, orgBookingObj } = item;
  const [showReBookForm, setShowReBookForm] = useState(false);
  console.log("orgBookingObj : ", orgBookingObj);

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
        `/radiology/scan-details/${orgBookingObj?.test?.service_code}`,
      );
    } else if (orgBookingObj?.test?.type === "eye_care") {
      history.push(`/eyecare`);
    } else if (orgBookingObj?.test?.type === "gym") {
      history.push(`/Gymlist`);
    }
  };

  const handleOpenEPrescription = () => {
    if (!orgBookingObj?.id) {
      toast.error("Prescription ID Not found");
    } else {
      history.push(`/eprescription/${orgBookingObj?.id}`);
    }
  };

  return (
    <div className="borderShadow">
      <div className="consultation-card">
        <div className="consultation-header">
          <div className="">
            {orgBookingObj?.doctor?.image ? (
              <img
                src={orgBookingObj?.doctor?.image}
                alt={orgBookingObj?.doctor?.name}
                className="doctor-image"
              />
            ) : (
              <BsPersonCircle className="default-image" size={32} />
            )}
          </div>
          <div className="consultation-info">
            <h2>{orgBookingObj?.doctor?.name}</h2>
            <p>{formatStatus(orgBookingObj?.type)}</p>
          </div>
          <div className="ml-auto">
            <h2>#{orgBookingObj?.id}</h2>
          </div>
        </div>
        <div className="consultation-details">
          <div className="detail">
            <p>Scheduled Date:</p>
            <p>{orgBookingObj?.collection_1_date || ""}</p>
          </div>
          <div className="detail">
            <p>Booked Date:</p>
            <p>
              {" "}
              {orgBookingObj?.created_at
                ? moment(orgBookingObj?.created_at).format(
                    "MMMM DD, YYYY, h:mm A",
                  )
                : "N/A"}
            </p>
          </div>
        </div>
        <div className="consultation-footer">
          <p className="price">
            <MdOutlineCurrencyRupee /> {orgBookingObj?.final_amount || 0}.00
          </p>

          <>
            {(() => {
              const isVirtualOrTestBooking =
                orgBookingObj?.type === "virtual_consultation" ||
                orgBookingObj?.type === "test_booking";

              const isStatusEligible = [
                "completed",
                "prescription_sent_successfully",
                "report_delivered",
              ].includes(orgBookingObj?.status);

              const hasAttachments =
                orgBookingObj?.attachments?.length > 0 &&
                orgBookingObj?.attachments[0]?.id;

              return isVirtualOrTestBooking &&
                (isStatusEligible || hasAttachments) ? (
                <button
                  className="eprescription-btn"
                  onClick={handleOpenEPrescription}
                >
                  <TbReportMedical size={25} /> E Prescription
                </button>
              ) : null;
            })()}
          </>

          {(orgBookingObj?.status === "completed" ||
            orgBookingObj?.status === "report_delivered") && (
            <>
              <div className="status">
                <div className="status-icon"></div>
                <p>{formatStatus(orgBookingObj?.status)}</p>
              </div>
              <button className="book-again-btn" onClick={() => reOrder()}>
                Book Again
              </button>
            </>
          )}

          {(orgBookingObj?.status === "ongoing" ||
            orgBookingObj?.status === "open" ||
            orgBookingObj?.status === "confirmation_pending" ||
            orgBookingObj?.status === "client_confirmation_pending" ||
            orgBookingObj?.status === "booking_scheduled" ||
            orgBookingObj?.status === "awaiting_report" ||
            orgBookingObj?.status === "work_in_progress") && (
            <>
              <div className="status">
                <div className="status-icon-scheduled"></div>
                <p>{formatStatus(orgBookingObj?.status)}</p>
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

          {(orgBookingObj?.status === "cancelled" ||
            orgBookingObj?.status === "payment_pending") && (
            <>
              <div className="status">
                <div className="status-icon-cancelled"></div>
                <p>{formatStatus(orgBookingObj?.status)}</p>
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
