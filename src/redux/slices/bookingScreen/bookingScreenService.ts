import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { get, patch, post, put } from "../../../library/Requests/helpers";
import { getAllVendorDetailsQuery } from "../../../Scenes/graphqlConfig";

export const getDoctorSlotsAPI = createAsyncThunk(
  "bookingScreen/getDoctorSlotsAPI",
  async (obj: any) => await patch(`${SERVER_IP}/api/v1/timeslot/doctor`, obj)
);

export const cancelBookingAPI = createAsyncThunk(
  "bookingScreen/cancelBookingAPI",
  async (cancelBkObj: any) =>
    await patch(
      `${SERVER_IP}/api/v1/booking/${cancelBkObj.bookingId}/cancel`,
      cancelBkObj.cancelObjBody
    )
);

export const raiseIssueAPI = createAsyncThunk(
  "bookingScreen/raiseIssueAPI",
  async (raiseIssueObj: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${raiseIssueObj.bookingId}/issue`,
      raiseIssueObj.raiseIssueObjBody
    )
);
export const bookAppointmentAPI = createAsyncThunk(
  "bookingScreen/bookAppointmentAPI",
  async (appointmentObj: any) =>
    await post(`${SERVER_IP}/api/v1/appointment`, appointmentObj)
);
export const createCallBackRequestAPI = createAsyncThunk(
  "bookingScreen/createCallBackRequestAPI",
  async (callBackRequestObj: any) =>
    await post(`${SERVER_IP}/api/v1/callback`, callBackRequestObj)
);

export const feedBackAPI = createAsyncThunk(
  "bookingScreen/feedBackAPI",
  async (raiseIssueObj: any) =>
    await post(
      `${SERVER_IP}/api/v1/booking/${raiseIssueObj.bookingId}/feedback`,
      raiseIssueObj.raiseIssueObjBody
    )
);

export const bookAgainAPI = createAsyncThunk(
  "bookingScreen/bookAgainAPI",
  async (bkAgainObj: any) =>
    await put(
      `${SERVER_IP}/api/v1/booking/${bkAgainObj.bookingId}/reschedule`,
      bkAgainObj.bkAgainObjBody
    )
);

export const getVirtualCallLinkAPI = createAsyncThunk(
  "bookingScreen/getVirtualCallLinkAPI",
  async (bkId: any) =>
    await get(`${SERVER_IP}/api/v1/booking/${bkId}/videocall`)
);

export const getMoreDDDetailsAPI = createAsyncThunk(
  "bookingScreen/getMoreDDDetailsAPI",
  async (bkId: any) =>
    await get(`${SERVER_IP}/api/v1/booking/${bkId}/additional`)
);

export const getPrescriptionDataAPI = createAsyncThunk(
  "bookingScreen/getPrescriptionDataAPI",
  async (id: any) =>
    await get(
      `${SERVER_IP}/api/v1/prescription/getPrescription?bookingId=${id}`
    )
);

export const getAllVendorDetailsAPI = createAsyncThunk(
  "booking/getAllVendorDetailsAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getAllVendorDetailsQuery))
);

export const getBkInvoiceAPI = createAsyncThunk(
  "bookingScreen/getBkInvoiceAPI",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/invoice/getInvoice?id=${id}`)
);


export const createBkDiet = createAsyncThunk(
  "diet/createBkDiet",
  async (body: any) => await post(`${SERVER_IP}/api/v1/diet`, body)
);

export const getBkDiet = createAsyncThunk(
  "diet/getBkDiet",
  async (id: any) => await get(`${SERVER_IP}/api/v1/diet/${id}`)
);
