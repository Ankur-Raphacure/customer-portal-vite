import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { SlotSelectionPopupstyled } from "./slotSelectionPopup.styled";
import { SlotSelectionButtonstyled } from "./slotSelectionButton.styled";
import "./popup.css";
import TimeSlot from "../timeSlot";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getDoctorSlotsAPI } from "../../redux/slices/timeslot/timeslotService";
import { emptySlotObj } from "../../redux/slices/timeslot/timeslotSlice";

const SlotSelectionPopup = (props: any) => {
  const [show, setShow] = useState(false);
  const { tcode1 } = props;
  console.log("tcode1tcode1", tcode1);
  const slotButtonsConfig = [
    { key: "slot1", placeholder: "Preffered Slot1" },
    { key: "slot2", placeholder: "Preffered Slot2 (Optional)" },
  ];
  const [dateValue, onChange] = useState(new Date());
  const [slotSelectedObj, setSelectedSlotObj] = useState(null);
  const [selectedSlotTab, setselectedSlotTab] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsAvailable, setSlotsAvailable] = useState(true);

  const dispatch = useDispatch();
  const handleClose = () => {
    setselectedSlotTab("");
    setShow(false);
  };
  const handleShow = (slot: any) => {
    if (props.expressBook || props.consultationType === "VIRTUAL_INSTANT") {
      return false;
    }
    setselectedSlotTab(slot);
    if (props?.item?.[slot]?.slot) {
      setSelectedSlotObj(props?.item?.[slot]?.slot);
    } else {
      setSelectedSlotObj(null);
    }
    if (props?.item?.[slot]?.date) {
      onChange(props?.item?.[slot]?.date);
    } else {
      onChange(new Date());
    }
    setShow(true);
  };

  useEffect(() => {
    if (props?.slotSelectionEnabled) {
      calldoctorslot();
    }
  }, []);

  useEffect(() => {
    if (props?.slotSelectionEnabled) {
      calldoctorslot();
    }
  }, [dateValue]);

  useEffect(() => {
    if (props.consultationType === "VIRTUAL_INSTANT") {
      props.customUpdateSlot1(props.index);
    }
  }, []);

  const getDoctorsSlots = async (requestObj: any) => {
    setLoadingSlots(true);
    try {
      const res = await dispatch(getDoctorSlotsAPI(requestObj));
      const response = JSON.parse(JSON.stringify(res));
      console.log("resp : ", response);

      setSlotsAvailable(
        response.payload &&
          response.payload.data &&
          response.payload.data.timeslots &&
          response.payload.data.timeslots.length > 0,
      );
    } catch (error) {
      setSlotsAvailable(false);
    } finally {
      setLoadingSlots(false);
    }
  };

  const getDateStr = () => {
    const year = dateValue.getFullYear();
    const month = dateValue.getMonth() + 1;
    const date = dateValue.getDate();
    const dateStr = `${year}-${month > 9 ? month : "0" + month}-${
      date > 9 ? date : "0" + date
    }`;
    return dateStr;
  };

  const calldoctorslot = () => {
    console.log("tcode1tcode1", tcode1, props.item);
    const dateStr = getDateStr();
    if (props.item.doctorDetails?.id || props.item.hospitalDetails?.id) {
      const vvvID = props.item.hospitalDetails?.id
        ? props.item.hospitalDetails?.id
        : props.item.hospitalDetails?.vendorId
          ? parseInt(props.item.hospitalDetails?.vendorId)
          : undefined;
      getDoctorsSlots({
        date: getDateStr(),
        doctorId: props?.item?.doctorDetails?.id,
        vendorId: vvvID,
        test_code: tcode1,
      });
    } else {
      dispatch(emptySlotObj());
    }
  };

  const handlePrefferdSlotClick = (slotObj: any) => {
    setShowErrorMessage(false);
    setSelectedSlotObj(slotObj);
  };

  const saveSlotSelection = () => {
    console.log("saveslotselection", slotSelectedObj);
    if (props?.slotSelectionEnabled) {
      if (slotSelectedObj === null) {
        setShowErrorMessage(true);
        return false;
      } else {
        setShowErrorMessage(false);
      }
    }
    let bookingObject = {
      idx: props.index,
      [selectedSlotTab]: {
        date: dateValue,
        dateStr: getDateStr(),
        slot: slotSelectedObj,
      },
    };
    console.log("saveslotselectionbookobj", bookingObject);
    if (selectedSlotTab === "slot1") {
      props.updateBookingSlot1(bookingObject);
    } else if (selectedSlotTab === "slot2") {
      props.updateBookingSlot2(bookingObject);
    }
    handleClose();
  };

  const constructSlotString = (slotDetails: any) => {
    console.log("props consultationType => ", props.consultationType);
    if (props.expressBook) {
      return "In 90 Minutes";
    }
    if (props.consultationType === "VIRTUAL_INSTANT") {
      return "Now";
    }
    let dateSlotStr = "";
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (
      props?.item?.[slotDetails] &&
      props.item?.[slotDetails].date &&
      (props?.slotSelectionEnabled
        ? props.item?.[slotDetails].slot?.slot
        : true)
    ) {
      let dateCalc = props.item?.[slotDetails].date.getDate();
      dateSlotStr += `${slotDetails === "slot1" ? "Slot1" : "Slot 2"} ${
        dateCalc > 9 ? dateCalc : "0" + dateCalc
      } `;
      dateSlotStr += `${
        monthNames[props.item?.[slotDetails].date.getMonth()]
      } ${
        props?.slotSelectionEnabled ? props.item?.[slotDetails].slot?.slot : ""
      }`;
    }
    return dateSlotStr;
  };

  const handleDateChange = (value: any) => {
    onChange(value);
  };

  const constructSlotButonEle = () => {
    const ele = slotButtonsConfig.map((item: any) => {
      return (
        <button
          className="slotselection_container"
          onClick={() => handleShow(item.key)}
        >
          <input
            type="text"
            className="react-datepicker-ignore-onclickoutside"
            placeholder={item.placeholder}
            value={constructSlotString(item.key)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M12.5 12.6V2.8C12.5 2.0279 11.902 1.4 11.1667 1.4H9.83333V0H8.5V1.4H4.5V0H3.16667V1.4H1.83333C1.098 1.4 0.5 2.0279 0.5 2.8V12.6C0.5 13.3721 1.098 14 1.83333 14H11.1667C11.902 14 12.5 13.3721 12.5 12.6ZM4.5 11.2H3.16667V9.8H4.5V11.2ZM4.5 8.4H3.16667V7H4.5V8.4ZM7.16667 11.2H5.83333V9.8H7.16667V11.2ZM7.16667 8.4H5.83333V7H7.16667V8.4ZM9.83333 11.2H8.5V9.8H9.83333V11.2ZM9.83333 8.4H8.5V7H9.83333V8.4ZM11.1667 4.9H1.83333V3.5H11.1667V4.9Z"
              fill="#45A834"
            />
          </svg>
        </button>
      );
    });
    return ele;
  };

  return (
    <>
      <SlotSelectionButtonstyled>
        {constructSlotButonEle()}
      </SlotSelectionButtonstyled>

      <Modal
        fullscreen="md-down"
        contentClassName="doctor_slotselection"
        dialogClassName="doctor_slotModal"
        show={show}
        onHide={handleClose}
      >
        <SlotSelectionPopupstyled>
          <Modal.Header closeButton>
            <Modal.Title>{props.consultation ?? "Preferred Slot"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showErrorMessage && (
              <div className="timeslot-error">
                Please Select the Time Slot Details
              </div>
            )}
            <div className="timeslot-container">
              <div className="dateselection-container-primary">
                <div className="dateselection-calendar">
                  <Calendar onChange={handleDateChange} value={dateValue} />
                </div>
                {props?.slotSelectionEnabled && (
                  <div className="timeslot-list">
                    {loadingSlots && <div>Fetching timeslots...</div>}
                    {!loadingSlots && !slotsAvailable && (
                      <div>No Timeslots for this day</div>
                    )}
                    {!loadingSlots && slotsAvailable && dateValue && (
                      <TimeSlot
                        selectedSlot={slotSelectedObj}
                        handleClick={handlePrefferdSlotClick}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="confirmbtn-wrap">
              <button
                className="confirmbtn poppins-medium"
                onClick={saveSlotSelection}
              >
                Confirm
              </button>
            </div>
          </Modal.Body>
        </SlotSelectionPopupstyled>
      </Modal>
    </>
  );
};

export default SlotSelectionPopup;
