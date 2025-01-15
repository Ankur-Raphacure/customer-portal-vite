import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TimeSlotStyled } from "./timeSlot.styled";
const TimeSlotcomp = (props: any) => {
  const { timeSlotsObj } = useSelector(
    (ReduxState: any) => ReduxState.timeslot
  );

  const { defaultTimeSlotsObj } = useSelector(
    (ReduxState: any) => ReduxState.config
  );

  const timeSlotsObj1 = timeSlotsObj || defaultTimeSlotsObj;
  const getTimeSlotElement = (key: any) => {
    let selectedSlot = { ...props.selectedSlot };
    let timeSlotEle = timeSlotsObj1[key]?.map((item: any) => {
      return (
        <div
          className={
            selectedSlot.slot === item.slot ? "slotList selected" : "slotList"
          }
          onClick={() => {
            props.handleClick(item);
          }}
        >
          {item.slot}
        </div>
      );
    });
    return timeSlotEle;
  };
  console.log("timeSlotsObj1", timeSlotsObj1);
  console.log("timeSlotsObj", timeSlotsObj);
  console.log("defaultTimeSlotsObj", defaultTimeSlotsObj);
  return (
    <>
      <TimeSlotStyled>
        <div>
          {timeSlotsObj1 && (
            <div className="list-packages-names-all">
              {timeSlotsObj1["morning"] &&
                timeSlotsObj1["morning"].length > 0 && (
                  <div className="morningTimeSlots">
                    <div className="title">Morning</div>
                    <div className="slots">{getTimeSlotElement("morning")}</div>
                  </div>
                )}
              {timeSlotsObj1["afternoon"] &&
                timeSlotsObj1["afternoon"].length > 0 && (
                  <div className="aftnoonTimeSlots">
                    <div className="title">Afternoon</div>
                    <div className="slots">
                      {getTimeSlotElement("afternoon")}
                    </div>
                  </div>
                )}
              {timeSlotsObj1["evening"] &&
                timeSlotsObj1["evening"].length > 0 && (
                  <div className="eveimeSlots">
                    <div className="title">Evening</div>
                    <div className="slots">{getTimeSlotElement("evening")}</div>
                  </div>
                )}
            </div>
          )}
        </div>
      </TimeSlotStyled>
    </>
  );
};

export default TimeSlotcomp;
