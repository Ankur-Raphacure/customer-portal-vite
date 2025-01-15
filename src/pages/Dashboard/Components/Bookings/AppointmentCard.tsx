import React, { useState, useEffect } from "react";
import docImage from "../../../../assets/images/doctor-male.png";
import moment from "moment";
import OrderDetail from "./OrderDetail";
import RaiseIssueForm from "./RaiseIssueForm";
import CancelForm from "./CancelForm";
import PaymentActions from "./PaymentActions";
import { getMyBookingsAPI } from "./../../../../redux/slices/dashboard/dashboardService";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getPrescriptionDataAPI,
  getVirtualCallLinkAPI,
} from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { htmlTemplate } from "../../../../Scenes/common";
import { toast } from "react-toastify";
import ReBook from "../../../../components/ReBook/ReBook";
import PrescriptionDocument from "./PrescriptionDocument";
import LeaveFeedback from "./LeaveFeedback";

const AppointmentCard = (props: any) => {
  const { item } = props;

  const history = useHistory();
  const dispatch = useDispatch();
  const [meetLink, setMeetLink] = useState("");
  const booked_date = new Date(parseInt(item?.created_at));
  const [showDetails, setShowDetails] = useState(false);
  const [showIssueForm, setShowIssueForm] = useState(false);
  const [showCancelForm, setShowCancelForm] = useState(false);
  const [showReBookForm, setShowReBookForm] = useState(false);
  const [statusColor, setStatusColor] = useState("status-green");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [hasPrescription, setHasPrescription] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [imageUrls, setImageUrls] = useState<any>([]);

  useEffect(() => {
    if (item?.attachments?.length > 0 && item?.attachments[0]?.id) {
      setHasPrescription(true);
    }
  }, [item]);

  const refreshData = () => {
    dispatch(getMyBookingsAPI(50));
  };

  const createVirtualCall = async () => {
    const res = await dispatch(getVirtualCallLinkAPI(item?.id));
    const resJson = JSON.parse(JSON.stringify(res));
    if (resJson?.payload?.data?.link) {
      console.log("meet link", resJson.payload.data.link);
      setMeetLink(resJson.payload.data.link);
      setIsModalVisible(true);
      window.open(resJson.payload.data.link, "_blank");
    } else {
      toast.error("Virtual Call Not Available at the Moment");
    }
  };

  useEffect(() => {
    if (item.status === "cancelled" || item.status === "payment_pending") {
      setStatusColor("status-red");
    } else if (
      item.status === "ongoing" ||
      item.status === "open" ||
      item.status === "confirmation_pending" ||
      item.status === "client_confirmation_pending" ||
      item.status === "booking_scheduled" ||
      item.status === "awaiting_report" ||
      item.status === "work_in_progress"
    ) {
      setStatusColor("status-yellow");
    } else if (
      item.status === "completed" ||
      item.status === "report_delivered"
    ) {
      setStatusColor("status-green");
    }
  }, [item]);

  function formatStatus(status: any) {
    return status
      .toLowerCase()
      .split("_")
      .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const rescheduleBooking = async () => {
    // setShowReBookForm(true);
    console.log("item : ", item);

    if (item && item.test && item.test.service_code) {
      window.location.href = `/labTestDetils/${item.test.service_code}`;
    } else if (item?.doctor?.name) {
      history.push(`/doctor?q=${item?.doctor.name}`);
    } else if (item?.vendor?.id) {
      history.push(`/hospital/${item?.vendor?.id}`);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const joinVideoCall = () => {
    // window.location.href = `/VideoCall?roomID=${item?.id}`;
    window.open(`/VideoCall?roomID=${item?.id}`, "_blank");
  };
  const bType1 = item?.type?.toLowerCase();

  const formatDate = (dateString: any, format = "YYYY-MM-DD") => {
    // Convert the date string to a number and create a Date object
    const date = new Date(Number(dateString));

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    // Format options
    const options = {
      year: date.getFullYear(),
      month: String(date.getMonth() + 1).padStart(2, "0"),
      day: String(date.getDate()).padStart(2, "0"),
    } as any;

    // Format the date based on the specified format
    return format
      .replace("YYYY", options?.year)
      .replace("MM", options?.month)
      .replace("DD", options?.day);
  };

  const handlePrescriptionPreview = async () => {
    setShowLoader(true);
    console.log("id : ", item?.id);
    if (!item?.id) {
      toast.error("Prescription ID Not found");
      return;
    }
    const res = (await dispatch(getPrescriptionDataAPI(item?.id))) as any;
    const data = res?.payload;
    setPreviewData(data);
    const prescHtml = await htmlTemplate(data); // Generate HTML
    // handleDownload(prescHtml);
    // setPreviewHtml(prescHtml);
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

  const handleDownload = async (prescHtml: any) => {
    const htmlContent = prescHtml;
    try {
      toast.success("Download will begin Shortly");
      const response = await fetch(
        "https://test-api-h15z.onrender.com/generate-pdf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ htmlContent }),
        }
      );

      if (!response.ok) {
        toast.error("Failed to generate PDF");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a link element to download the PDF
      const link = document.createElement("a");
      link.href = url;
      link.download = "generated_prescription.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Error generating PDF");
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="appointment-card">
      {/* Modal for displaying the meet link in an iframe */}
      {/* <Modal
        title="Virtual Consultation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
        width={800}
      >
        <iframe
          src={meetLink}
          width="100%"
          height="400px"
          title="Virtual Call"
          className="meetIframe"
          style={{ display: "block" }}
          frameBorder="0"
        />
      </Modal> */}
      <div
        className={`appointment-card-ledt-sec ${
          showDetails ? "slide-out" : ""
        }`}
      >
        <div className="appointment-card-left">
          <div className="doctor-info justify-content-evenly">
            <div>
              {item?.doctor?.name ? (
                <>
                  <img
                    src={item?.doctor?.image || docImage}
                    alt="Doctor"
                    className="doctor-image"
                  />
                  <div>
                    {/* {console.log("item?.doctor?.name : ", item?.doctor?.name)}
                    {console.log("item : ", item)} */}
                    <h2>Dr. {item?.doctor?.name}</h2>
                    <p>
                      {item?.type === "opd_consultation"
                        ? "OPD Consultation"
                        : "Virtual Consultation"}
                    </p>
                  </div>{" "}
                </>
              ) : item?.type == "pharmacy" ? (
                <>
                  <div>
                    <h2>{`Medicines`}</h2>
                  </div>
                </>
              ) : item?.test?.type == "diagnostic" ? (
                <>
                  <div>
                    <h2>{`Lab Test - ${item?.test?.service_name}`}</h2>
                  </div>
                </>
              ) : item?.test?.type == "ctmri" ? (
                <>
                  <div>
                    <h2>{`CTMRI - ${item?.test?.service_name}`}</h2>
                  </div>
                </>
              ) : (
                <>
                  <img src={docImage} alt="Doctor" className="doctor-image" />
                  <div>
                    <h2>{item?.test?.service_name}</h2>
                    <p>{item?.test?.type} </p>
                  </div>
                </>
              )}
            </div>

            <div className="vendor-setails-sec-box">
              {item?.vendor?.name && (
                <>
                  <p>
                    <span>Vendor Name:</span> {item?.vendor?.name}
                  </p>
                  <p>
                    <span>Address: </span> {item?.vendor?.address},{" "}
                    {item?.vendor?.city}{" "}
                  </p>
                </>
              )}
              <p>
                <span>Booked for:</span>{" "}
                {`${item?.user?.first_name || ""} ${
                  item?.user?.last_name || ""
                }`}
              </p>
              {item?.type == "pharmacy" && (
                <p>
                  <span>Address:</span>{" "}
                  {`${item?.address?.address} ${item?.user?.last_name}`}
                </p>
              )}
            </div>

            {item?.doctor?.id && (
              <button
                className="plain-button"
                onClick={() => {
                  history.push(`/chat?docId=${item?.doctor?.id}`);
                }}
              >
                Chat
              </button>
            )}
          </div>
          <div className="appointment-details">
            <div className="detailsDiv">
              <p>
                <strong>Booking ID:</strong> #{item?.id}
              </p>
              <p>
                <strong>Scheduled Date:</strong>{" "}
                {formatDate(item?.collection_1_date)}
              </p>
              <p>
                <strong>Scheduled Time:</strong> {item?.collection_1_slot}
              </p>

              <p>
                <strong>Booked Date:</strong>
                {moment(booked_date).format(" MMMM DD, YYYY")}
              </p>
              <p>
                <strong>Total:</strong> ₹{item?.final_amount}
              </p>
              <p>
                <strong>Status:</strong>
                <span className={statusColor}>
                  {" "}
                  {formatStatus(item?.status)}
                </span>
              </p>
            </div>
          </div>
        </div>
        {bType1 === "virtual_consultation" && item?.show_virtual_call && (
          <div className="book-video-call-sec">
            <button onClick={joinVideoCall}>Join Video Call </button>
          </div>
        )}
        {item?.medicines?.length > 0 && (
          <div className="medicines-sec-box">
            {/* <h4>Medicines</h4> */}
            <div className="item-box-all">
              {item?.medicines?.slice(0, 3)?.map((item1: any, index: any) => {
                return (
                  <React.Fragment key={index}>
                    <div className="item-box">
                      <p className="item-name">
                        <img
                          title={item1?.service_name}
                          src={
                            item1?.image ||
                            "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/medicine-2.png"
                          }
                        />{" "}
                        <span>{item1?.service_name}</span>
                      </p>
                      <p className="item-type">{item1?.unit}</p>
                      <p className="item-type">Quantity: {item1?.count}</p>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            {item?.medicines?.length > 3 && (
              <div className="view-all-items-sec">
                <button>View All Items</button>
              </div>
            )}
          </div>
        )}
        {/* <div className="btnWrapperDiv">
          <a href="#" className="view-details-link">
            View Details
          </a>
          <a href="#" className="download-invoice-link">
            Download Invoice
          </a>
        </div> */}
      </div>
      <div className="appointment-actions">
        {item.status === "payment_pending" && (
          <>
            <PaymentActions item={item} />
          </>
        )}
        {item.status === "cancelled" && (
          <>
            <button className="prime-button" onClick={rescheduleBooking}>
              Schedule Again
            </button>
            <button
              className="plain-button"
              onClick={() => setShowIssueForm(true)}
            >
              Raise An Issue
            </button>
            <button
              className="plain-button"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            {/* <button className="plain-button">Download Invoice</button> */}
          </>
        )}
        {(item.status === "ongoing" ||
          item.status === "open" ||
          item.status === "confirmation_pending" ||
          item.status === "client_confirmation_pending" ||
          item.status === "booking_scheduled" ||
          item.status === "awaiting_report" ||
          item.status === "work_in_progress") && (
          <>
            <button className="prime-button">Track Order</button>
            <button
              className="plain-button"
              onClick={() => setShowIssueForm(true)}
            >
              Raise An Issue
            </button>
            <button className="plain-button" onClick={rescheduleBooking}>
              Modify Booking
            </button>
            <button
              className="plain-button"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            <button
              className="plain-button"
              onClick={() => setShowCancelForm(true)}
            >
              Cancel Booking
            </button>
          </>
        )}

        {item.type === "virtual_consultation" &&
          item.status !== "cancelled" &&
          item.status !== "completed" &&
          item.status !== "report_delivered" &&
          item.status !== "payment_pending" && (
            <button
              className="plain-button"
              onClick={() => createVirtualCall()}
            >
              Virtual Call
            </button>
          )}

        {(item.status === "completed" ||
          item.status === "prescription_sent_successfully" ||
          item.status === "report_delivered") && (
          <>
            <button className="prime-button" onClick={rescheduleBooking}>
              Schedule Again
            </button>
            <button className="plain-button" onClick={() => setFeedback(true)}>
              Leave a Feedback
            </button>
            <button
              className="plain-button"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </button>
            {hasPrescription && (
              <button
                className="plain-button"
                onClick={handlePrescriptionPreview}
              >
                Download Prescription
              </button>
            )}
            {hasPrescription && (
              <button
                className="plain-button"
                onClick={handleOpenEPrescription}
              >
                View E Prescription
              </button>
            )}
            {/* <button className="plain-button">Download Invoice</button> */}
            <button
              className="plain-button"
              onClick={() => setShowIssueForm(true)}
            >
              Raise An Issue
            </button>
          </>
        )}
      </div>
      {showDetails && (
        <OrderDetail
          item={item}
          itemId={item?.id}
          onClose={() => setShowDetails(false)}
        />
      )}
      {feedback && (
        <LeaveFeedback
          bookingId={item?.id}
          item={item}
          itemId={item?.id}
          onClose={() => setFeedback(false)}
        />
      )}
      {showIssueForm && (
        <RaiseIssueForm
          bookingId={item?.id}
          onClose={() => setShowIssueForm(false)}
        />
      )}
      {showReBookForm && (
        // <RescheduleBookingForm
        //   bookingId={item?.id}
        //   onClose={() => setShowReBookForm(false)}
        // />
        <ReBook
          show={showReBookForm}
          onClose={() => setShowReBookForm(false)}
        />
      )}
      {showCancelForm && (
        <CancelForm
          bookingId={item?.id}
          onClose={() => {
            setShowCancelForm(false);
            refreshData();
          }}
        />
      )}

      <PrescriptionDocument
        data={previewData}
        showPreviewModal={showPreviewModal}
        setShowPreviewModal={setShowPreviewModal}
      />
    </div>
  );
};

export default AppointmentCard;
