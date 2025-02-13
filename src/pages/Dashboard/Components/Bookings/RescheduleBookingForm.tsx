import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RescheduleBookingFormStyled } from "./RescheduleBookingForm.styled";
import { bookAgainAPI } from "../../../../redux/slices/bookingScreen/bookingScreenService";
import { toast } from "react-toastify";
import { emptySlotObj } from "../../../../redux/slices/timeslot/timeslotSlice";
import { SlotSelectionButtonstyled } from "../../../../components/slotSelectionPopup/slotSelectionButton.styled";
import TimeSlot from "../../../../components/timeSlot";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SlotSelectionPopupstyled } from "../../../../components/slotSelectionPopup/slotSelectionPopup.styled";
import { getDoctorSlotsAPI } from "../../../../redux/slices/timeslot/timeslotService";
import { Button } from "react-bootstrap";

// ReBookSlotSelection Component
const ReBookSlotSelection = ({ slotNumber, onSlotConfirm, ...props }: any) => {
  // State Management
  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, onChange] = useState(new Date());
  const [slotSelectedObj, setSelectedSlotObj] = useState<any>(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsAvailable, setSlotsAvailable] = useState(true);

  const dispatch = useDispatch();

  // Toggle component visibility
  const toggleSlotSelection = () => {
    setIsOpen(!isOpen);
  };

  // Fetch slots when date changes
  useEffect(() => {
    if (props?.slotSelectionEnabled) {
      fetchDoctorSlots();
    }
  }, [dateValue]);

  // API call to get doctor slots
  const getDoctorsSlots = async (requestObj: any) => {
    setLoadingSlots(true);
    try {
      const res = await dispatch(getDoctorSlotsAPI(requestObj));
      const response = JSON.parse(JSON.stringify(res));
      setSlotsAvailable(response.payload?.data?.timeslots?.length > 0);
    } catch (error) {
      setSlotsAvailable(false);
    } finally {
      setLoadingSlots(false);
    }
  };

  // Format date string
  const getDateStr = () => {
    const year = dateValue.getFullYear();
    const month = dateValue.getMonth() + 1;
    const date = dateValue.getDate();
    return `${year}-${month > 9 ? month : "0" + month}-${
      date > 9 ? date : "0" + date
    }`;
  };

  // Fetch doctor slots based on date
  const fetchDoctorSlots = () => {
    const dateStr = getDateStr();
    if (props?.doctorId) {
      getDoctorsSlots({
        date: dateStr,
        doctorId: props?.doctorId,
      });
    } else if (props?.vendorId) {
      getDoctorsSlots({
        date: dateStr,
        vendorId: props?.vendorId,
      });
    } else {
      dispatch(emptySlotObj());
    }
  };

  // In ReBookSlotSelection component
  const handlePreferredSlotClick = (slotObj: any) => {
    setShowErrorMessage(false);
    setSelectedSlotObj({
      slot: slotObj.slot,
      start_time: slotObj.start_time,
      duration_minutes: slotObj.duration_minutes,
    });
  };

  const saveSlotSelection = () => {
    if (!slotSelectedObj) {
      setShowErrorMessage(true);
      return;
    }
    setShowErrorMessage(false);

    const selectedSlot = {
      date: dateValue,
      dateStr: getDateStr(),
      slot: slotSelectedObj,
    };

    if (onSlotConfirm) {
      onSlotConfirm(selectedSlot, slotNumber);
    }
    setIsOpen(false);
  };

  const handleDateChange = (value: any) => {
    onChange(value);
  };

  return (
    <div className="slot-selection-wrapper mb-4">
      <label className="mb-2 text-muted">Preferred Slot {slotNumber}</label>
      <SlotSelectionButtonstyled>
        <button
          className="slotselection_container"
          onClick={toggleSlotSelection}
        >
          <input
            type="text"
            className="react-datepicker-ignore-onclickoutside"
            placeholder={`Select Preferred Slot ${slotNumber}`}
            value={slotSelectedObj ? slotSelectedObj.slot : ""}
            readOnly
          />
        </button>
      </SlotSelectionButtonstyled>

      {isOpen && (
        <SlotSelectionPopupstyled className="slot-selection-dropdown">
          <div className="slot-selection-header">
            <h3>{`Select Preferred Slot ${slotNumber}`}</h3>
          </div>
          <div className="slot-selection-body">
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
                        handleClick={handlePreferredSlotClick}
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
          </div>
        </SlotSelectionPopupstyled>
      )}
    </div>
  );
};

// RescheduleBookingForm Component
const RescheduleBookingForm = ({ booking, onClose }: any) => {
  const dispatch = useDispatch();
  const [selectedSlots, setSelectedSlots] = useState<any>({
    slot1: null,
    slot2: null,
  });

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(":");
    const hourNum = parseInt(hour, 10);
    const ampm = hourNum >= 12 ? "pm" : "am";
    const formattedHour = hourNum % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const handleSlotConfirm = (selectedSlot: any, slotNumber: number) => {
    setSelectedSlots((prev: any) => ({
      ...prev,
      [`slot${slotNumber}`]: selectedSlot,
    }));
  };

  const handleReschedule = async () => {
    const { slot1, slot2 } = selectedSlots;

    // Only proceed if at least slot1 is selected
    if (!slot1) {
      toast.error("Please select at least one preferred slot");
      return;
    }

    const bookingData = {
      booking: {
        collection_1_date: slot1?.dateStr || null,
        collection_1_slot: slot1?.slot?.slot || null, // Changed to use slot.slot
      },
    };

    console.log("Booking Data:", bookingData);

    try {
      const res = (await dispatch(
        bookAgainAPI({
          bookingId: booking?.id,
          bkAgainObjBody: bookingData,
        }),
      )) as any;

      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
        return;
      }
      toast.success("Booking rescheduled successfully!");
      onClose();
    } catch (error) {
      console.error("Rescheduling error: ", error);
      toast.error("Failed to reschedule booking.");
    }
  };

  return (
    <RescheduleBookingFormStyled>
      <div className="overlayReschedule rescheduleBookingForm">
        <ReBookSlotSelection
          slotNumber={1}
          doctorId={booking?.doctor?.id}
          vendorId={booking?.vendor?.id}
          slotSelectionEnabled={true}
          onSlotConfirm={handleSlotConfirm}
        />
        <ReBookSlotSelection
          slotNumber={2}
          doctorId={booking?.doctor?.id}
          vendorId={booking?.vendor?.id}
          slotSelectionEnabled={true}
          onSlotConfirm={handleSlotConfirm}
        />
        <div className="button-group mt-4">
          <Button
            variant="outline-primary"
            className="close-button me-2"
            onClick={onClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="reschedule-button"
            onClick={handleReschedule}
          >
            Reschedule
          </Button>
        </div>
      </div>
    </RescheduleBookingFormStyled>
  );
};

export default RescheduleBookingForm;
