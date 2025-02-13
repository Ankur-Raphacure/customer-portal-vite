import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { patch, put } from "../../../library/Requests/helpers";

export const getDoctorSlotsAPI = createAsyncThunk(
  "bookingScreen/getDoctorSlotsAPI",
  async (obj: any) => await patch(`${SERVER_IP}/api/v1/timeslot/doctor`, obj),
);

export const cancelBookingAPI = createAsyncThunk(
  "bookingScreen/cancelBookingAPI",
  async (cancelBkObj: any) =>
    await patch(
      `${SERVER_IP}/api/v1/booking/${cancelBkObj.bookingId}/cancel`,
      cancelBkObj.cancelObjBody,
    ),
);

export const raiseIssueAPI = createAsyncThunk(
  "bookingScreen/raiseIssueAPI",
  async (raiseIssueObj: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${raiseIssueObj.bookingId}/issue`,
      raiseIssueObj.raiseIssueObjBody,
    ),
);
