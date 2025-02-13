import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from "react";
import { BookingCardStyled } from "./BookingCard.styled";
import { BsThreeDotsVertical, BsDownload } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { formatStatus } from "../../../../Scenes/common";
import moment from "moment";
import { useHistory } from "react-router-dom";
import PaymentActions from "./PaymentActions";
import { useDispatch } from "react-redux";
import CancelForm from "./CancelForm";
import RescheduleBookingForm from "./RescheduleBookingForm";
import RaiseIssueForm from "./RaiseIssueForm";
import LeaveFeedback from "./LeaveFeedback";
import OrderDetail from "./OrderDetail";
import { getMyBookingsAPI } from "./../../../../redux/slices/dashboard/dashboardService";
import { toast } from "react-toastify";
import docImage from "../../../../assets/images/doctor-male.png";
import {
  getBkInvoiceAPI,
  getPrescriptionDataAPI,
  getVirtualCallLinkAPI,
} from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { htmlTemplate } from "../../../../Scenes/common";
import ReBook from "../../../../components/ReBook/ReBook";
import { RiCalendarScheduleLine, RiTimelineView } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import {
  MdCall,
  MdCancelPresentation,
  MdDownload,
  MdOutlineBugReport,
  MdOutlineCurrencyRupee,
  MdOutlineFeedback,
} from "react-icons/md";
import { CgTrack } from "react-icons/cg";
import PrescriptionPreview from "./PrescriptionDocument";
import { TbReportMedical } from "react-icons/tb";
import InvoicePreview from "../../../../components/InvoicePreview/InvoicePreview";
import { initiateIndividualChatIfNotExists } from "../../../../redux/slices/chat/chatService";
import { SocketContext } from "../../../../context/SocketProvider";
import { getDoctorsUsersAPI } from "../../../../redux/slices/doctor/doctorService";
import { HiChatAlt2 } from "react-icons/hi";

interface Address {
  id: number;
  name: string;
  address: string;
  city: string;
  zip: number;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  image: string;
  email: string;
}

interface Attachment {
  id: number;
  ext: string;
  url: string;
}

interface BookingItem {
  id: string;
  collection_1_date: string | null;
  collection_1_slot: string | null;
  collection_2_date: string | null;
  collection_2_slot: string | null;
  show_virtual_call: boolean;
  virtual_type: string | null;
  status: string;
  type: string;
  created_at: string;
  final_amount: number;
  vendor: any | null;
  address: Address;
  package: any | null;
  test: any | null;
  user: User;
  doctor: any | null;
  medicines: any[];
  logs: any[];
  attachments: Attachment[];
}

const BookingCard = ({ item }: { item: BookingItem }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [statusColor, setStatusColor] = useState("status-green");
  const history = useHistory();
  const dispatch = useDispatch();
  const [meetLink, setMeetLink] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showIssueForm, setShowIssueForm] = useState(false);
  const [showCancelForm, setShowCancelForm] = useState(false);
  const [showReBookForm, setShowReBookForm] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [hasPrescription, setHasPrescription] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const [invoiceData, setInvoiceData] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const [showAllMedicines, setShowAllMedicines] = useState(false);

  useEffect(() => {
    // Update booking item if item prop changes
    if (item) {
      console.log("item : ", item);
    }

    // Define status color mapping
    const statusColorMap = {
      red: ["cancelled", "payment_pending"],
      yellow: [
        "ongoing",
        "open",
        "confirmation_pending",
        "client_confirmation_pending",
        "booking_scheduled",
        "awaiting_report",
        "work_in_progress",
      ],
      green: ["completed", "report_delivered"],
    };

    // Set status color based on current status
    if (item?.status) {
      if (statusColorMap.red.includes(item?.status)) {
        setStatusColor("status-red");
      } else if (statusColorMap.yellow.includes(item?.status)) {
        setStatusColor("status-yellow");
      } else if (statusColorMap.green.includes(item?.status)) {
        setStatusColor("status-green");
      }
    }
  }, [item]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const refreshData = () => {
    dispatch(getMyBookingsAPI(50));
  };

  const joinVideoCall = () => {
    window.open(`/VideoCall?roomID=${item?.id}`, "_blank");
  };

  const rescheduleBooking = async () => {
    setShowReBookForm(true);
    console.log("item : ", item);
  };

  useEffect(() => {
    if (item?.attachments?.length > 0 && item?.attachments[0]?.id) {
      setHasPrescription(true);
    }
  }, [item]);

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
    await htmlTemplate(data); // Generate HTML
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

  const handleOpenDietPLan = () => {
    if (!item?.id) {
      toast.error("Booking ID Not found");
    } else {
      history.push(`/dietReport/${item?.id}`);
    }
  };

  const handleInvoiceClick = async () => {
    if (!item?.id) {
      toast.error("Prescription ID Not found");
      return;
    }
    const res = (await dispatch(getBkInvoiceAPI(item?.id))) as any;
    if (res?.error) {
      toast.error(res?.error?.data?.message);
    } else {
      toast.success("Invoice Generated Successfully");
      console.log("handleInvoiceClick res : ", res?.payload);
      setInvoiceData(res?.payload || {});
      setShowInvoiceModal(true);
    }
  };
  const { userChatId }: any = useContext(SocketContext);

  const handleInitiateChat = useCallback(
    async ({
      id,
      name,
    }: {
      id: any;
      name: string;
      email: string;
      image: string;
    }) => {
      const doctorUserDetails: any = await dispatch(getDoctorsUsersAPI(id));
      const email = doctorUserDetails?.payload?.data?.[0]?.user?.email;
      const to = doctorUserDetails?.payload?.data?.[0]?.user?.id;
      const image = doctorUserDetails?.payload?.data?.[0]?.user?.image;

      if (!to) {
        return toast.error("Something went wrong!.");
      }

      const result: any = await dispatch(
        initiateIndividualChatIfNotExists({
          from: userChatId,
          to,
          name,
          email,
          image,
        })
      );

      if (result?.payload?.success) {
        history.push(`/chat?id=${result?.payload?.data?._id}`);
      } else {
        toast.error("Something went wrong!.");
      }
    },
    [userChatId]
  );

  return (
    <BookingCardStyled>
      <div className="card-left">
        {item?.type !== "pharmacy" && (
          <>
            <div className="card-info">
              {item?.doctor?.name ? (
                <>
                  {item?.doctor?.image ? (
                    <img src={item?.doctor?.image} alt={item?.doctor?.name} />
                  ) : (
                    <BsPersonCircle className="default-image" />
                  )}
                  <div className="details">
                    <h2
                      className="highlightLink"
                      onClick={() => setShowDetails(true)}
                    >
                      {item?.doctor?.name ? `Dr. ${item?.doctor?.name}` : "N/A"}
                    </h2>
                    <p>{item?.type ? formatStatus(item?.type) : ""}</p>
                    <p>
                      Patient:{" "}
                      {`${item?.user?.first_name} ${item?.user?.last_name}`}
                    </p>
                  </div>
                </>
              ) : item?.type === "pharmacy" ? (
                <>
                  <div>
                    <h2>{`Medicines`}</h2>
                  </div>
                </>
              ) : item?.test?.type === "diagnostic" ? (
                <>
                  <div>
                    <h2>{`Lab Test - ${item?.test?.service_name}`}</h2>
                  </div>
                </>
              ) : item?.test?.type === "ctmri" ? (
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
              {item?.type === "pharmacy" && (
                <p>
                  <span>Address:</span> {`${item?.address?.address}`}
                </p>
              )}
            </div>
          </>
        )}

        {item?.medicines?.length > 0 && (
          <div className="medicines-sec-box">
            <div className="item-box-all">
              {item?.medicines
                ?.slice(0, showAllMedicines ? undefined : 2)
                ?.map((item1: any, index: any) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="item-box">
                        <img
                          title={item1?.service_name}
                          alt={`Medicine ${index + 1}`}
                          src={
                            item1?.image ||
                            "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/medicine-2.png"
                          }
                        />{" "}
                        <div className="item-info">
                          <span className="med-name">
                            {item1?.service_name}
                          </span>
                          <p className="item-type">Qty: {item1?.count}</p>
                          <p className="item-type">
                            Patient: {item1?.for || item?.user?.first_name}
                          </p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
            {item?.medicines?.length > 2 && (
              <p
                className="moreItems"
                onClick={() => setShowAllMedicines(!showAllMedicines)}
                style={{ cursor: "pointer" }}
              >
                {showAllMedicines
                  ? "Show Less"
                  : `+ ${item?.medicines?.length - 2} More`}
              </p>
            )}
          </div>
        )}

        <div className="actions">
          {item?.doctor?.id && (
            <button
              className="chat-btn"
              onClick={() => {
                handleInitiateChat({
                  email: item?.doctor?.clinic_email,
                  id: item?.doctor?.id,
                  image: item?.doctor?.image,
                  name: `${item?.doctor?.name ?? ""}`,
                });
                // history.push(`/chat?docId=${item?.doctor?.id}`);
              }}
            >
              Chat
            </button>
          )}
          <>
            {(() => {
              const isVirtualOrTestBooking =
                item?.type === "virtual_consultation" ||
                item?.type === "test_booking";

              const isStatusEligible = [
                "completed",
                "prescription_sent_successfully",
                "report_delivered",
              ].includes(item?.status);

              const hasAttachments =
                item?.attachments?.length > 0 && item?.attachments[0]?.id;

              return isVirtualOrTestBooking &&
                (isStatusEligible || hasAttachments) ? (
                <>
                  <button
                    className="eprescription-btn"
                    onClick={handleOpenEPrescription}
                  >
                    <TbReportMedical size={25} /> E Prescription
                  </button>
                  <button
                    className="eprescription-btn"
                    onClick={handleOpenDietPLan}
                  >
                    <TbReportMedical size={25} /> Diet Plan
                  </button>
                </>
              ) : null;
            })()}
          </>
          {(item?.status === "completed" ||
            item?.status === "open" ||
            item.status === "report_delivered") && (
            <button className="chat-btn" onClick={handleInvoiceClick}>
              Get Invoice
            </button>
          )}
          {item?.status === "payment_pending" && <PaymentActions item={item} />}
          {item?.type?.toLowerCase() === "virtual_consultation" &&
            item?.show_virtual_call && (
              <div className="book-video-call-sec">
                <button onClick={joinVideoCall}>Join Video Call </button>
              </div>
            )}
        </div>
      </div>

      <div className="card-right">
        <div className="appointment-details">
          <div className="detailsDiv">
            <p>
              <span>Booking ID:</span>
              <span
                onClick={() => setShowDetails(true)}
                className="highlightLink"
              >
                {" "}
                #{item?.id}
              </span>
            </p>
            <p>
              <span>Scheduled Date:</span>{" "}
              {item?.collection_1_date ? item?.collection_1_date : "N/A"}
            </p>
            <p>
              <span>Scheduled Time:</span>{" "}
              {item?.collection_1_slot ? item?.collection_1_slot : "N/A"}
            </p>
            <p>
              <span>Booked Date:</span>{" "}
              {item?.created_at
                ? moment(item?.created_at).format("MMMM DD, YYYY, h:mm A")
                : "N/A"}
            </p>
            <p>
              <span>Total:</span> ₹{item?.final_amount || "N/A"}
            </p>
            <p>
              <span>Status:</span>
              <span className={statusColor}> {formatStatus(item?.status)}</span>
            </p>
            {item?.type === "pharmacy" && (
              <p>
                <span>Delivered To : </span> {`${item?.address?.address}`}
              </p>
            )}
          </div>
        </div>

        <div className="action-icons">
          <div className="dropdown-container" ref={dropdownRef}>
            <BsThreeDotsVertical
              className="menu-icon"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            <div className={`dropdown-menu ${showDropdown ? "show" : ""}`}>
              <button
                className="dropdown-item"
                onClick={() => setShowDetails(true)}
              >
                <CiViewList /> View Details
              </button>
              {item?.status === "cancelled" && (
                <>
                  <button className="dropdown-item" onClick={rescheduleBooking}>
                    <RiCalendarScheduleLine /> Schedule Again
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => setShowIssueForm(true)}
                  >
                    <MdOutlineBugReport /> Raise An Issue
                  </button>
                </>
              )}

              {(item?.status === "ongoing" ||
                item?.status === "open" ||
                item?.status === "confirmation_pending" ||
                item?.status === "client_confirmation_pending" ||
                item?.status === "booking_scheduled" ||
                item?.status === "awaiting_report" ||
                item?.status === "work_in_progress") && (
                <>
                  <button className="dropdown-item">
                    <CgTrack /> Track Order
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => setShowIssueForm(true)}
                  >
                    <MdOutlineBugReport /> Raise An Issue
                  </button>
                  <button className="dropdown-item" onClick={rescheduleBooking}>
                    <RiCalendarScheduleLine /> Modify Booking
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => setShowCancelForm(true)}
                  >
                    <MdCancelPresentation /> Cancel Booking
                  </button>
                </>
              )}

              {item?.type === "virtual_consultation" &&
                item?.status !== "cancelled" &&
                item?.status !== "completed" &&
                item?.status !== "report_delivered" &&
                item?.status !== "prescription_sent_successfully" &&
                item?.status !== "payment_pending" && (
                  <button
                    className="dropdown-item"
                    onClick={() => createVirtualCall()}
                  >
                    <MdCall /> Virtual Call
                  </button>
                )}

              {(item?.status === "completed" ||
                item?.status === "prescription_sent_successfully" ||
                item?.status === "report_delivered") && (
                <>
                  <button className="dropdown-item" onClick={rescheduleBooking}>
                    <RiCalendarScheduleLine /> Schedule Again
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => setFeedback(true)}
                  >
                    <MdOutlineFeedback /> Leave a Feedback
                  </button>
                  {hasPrescription && (
                    <button
                      className="dropdown-item"
                      onClick={handlePrescriptionPreview}
                    >
                      <MdDownload /> Download Prescription
                    </button>
                  )}
                  {hasPrescription && (
                    <button
                      className="dropdown-item"
                      onClick={handleOpenEPrescription}
                    >
                      <RiTimelineView /> View E Prescription
                    </button>
                  )}
                  <button
                    className="dropdown-item"
                    onClick={() => setShowIssueForm(true)}
                  >
                    <MdOutlineBugReport /> Raise An Issue
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="borderShadow">
        <div className="consultation-card">
          <div className="consultation-header">
            <div className="">
              {item?.doctor?.image ? (
                <img
                  src={item?.doctor?.image}
                  alt={item?.doctor?.name}
                  className="doctor-image"
                />
              ) : (
                <BsPersonCircle className="default-image" size={32} />
              )}
            </div>
            <div className="consultation-info">
              <h2>{item?.doctor?.name}</h2>
              <p>{formatStatus(item?.type)}</p>
            </div>
            <div className="ml-auto">
              <h2>#{item?.id}</h2>
            </div>
          </div>
          <div className="consultation-details">
            <div className="detail">
              <p>Scheduled Date:</p>
              <p>{item?.collection_1_date || ""}</p>
            </div>
            <div className="detail">
              <p>Booked Date:</p>
              <p>
                {" "}
                {item?.created_at
                  ? moment(item?.created_at).format("MMMM DD, YYYY, h:mm A")
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="consultation-footer">
            <p className="price">
              <MdOutlineCurrencyRupee /> {item?.final_amount || 0}.00
            </p>

            <>
              {(() => {
                const isVirtualOrTestBooking =
                  item?.type === "virtual_consultation" ||
                  item?.type === "test_booking";

                const isStatusEligible = [
                  "completed",
                  "prescription_sent_successfully",
                  "report_delivered",
                ].includes(item?.status);

                const hasAttachments =
                  item?.attachments?.length > 0 && item?.attachments[0]?.id;

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

            {(item?.status === "completed" ||
              item?.status === "report_delivered") && (
              <>
                <div className="status">
                  <div className="status-icon"></div>
                  <p>{formatStatus(item?.status)}</p>
                </div>
               
              </>
            )}

            {(item?.status === "ongoing" ||
              item?.status === "open" ||
              item?.status === "confirmation_pending" ||
              item?.status === "client_confirmation_pending" ||
              item?.status === "booking_scheduled" ||
              item?.status === "awaiting_report" ||
              item?.status === "work_in_progress") && (
              <>
                <div className="status">
                  <div className="status-icon-scheduled"></div>
                  <p>{formatStatus(item?.status)}</p>
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

            <div className="actions">
              {item?.doctor?.id && (
                <button
                  className="chat-btn"
                  onClick={() => {
                    handleInitiateChat({
                      email: item?.doctor?.clinic_email,
                      id: item?.doctor?.id,
                      image: item?.doctor?.image,
                      name: `${item?.doctor?.name ?? ""}`,
                    });
                  }}
                >
                  Chat
                </button>
              )}
              <>
                {(() => {
                  const isVirtualOrTestBooking =
                    item?.type === "virtual_consultation" ||
                    item?.type === "test_booking";

                  const isStatusEligible = [
                    "completed",
                    "prescription_sent_successfully",
                    "report_delivered",
                  ].includes(item?.status);

                  const hasAttachments =
                    item?.attachments?.length > 0 && item?.attachments[0]?.id;

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
              {(item?.status === "completed" ||
                item?.status === "open" ||
                item.status === "report_delivered") && (
                <button className="chat-btn" onClick={handleInvoiceClick}>
                  Get Invoice
                </button>
              )}
              {item?.status === "payment_pending" && (
                <PaymentActions item={item} />
              )}
              {item?.type?.toLowerCase() === "virtual_consultation" &&
                item?.show_virtual_call && (
                  <div className="book-video-call-sec">
                    <button onClick={joinVideoCall}>Join Video Call </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div> */}

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
        <RescheduleBookingForm
          booking={item}
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
      <PrescriptionPreview
        data={previewData}
        showPreviewModal={showPreviewModal}
        setShowPreviewModal={setShowPreviewModal}
      />
      <InvoicePreview
        data={invoiceData}
        showPreviewModal={showInvoiceModal}
        setShowPreviewModal={setShowInvoiceModal}
      />
    </BookingCardStyled>
  );
};

export default BookingCard;
