import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get, patch } from "../../../library/Requests/helpers";

import {
  constructBookingQuery,
  getBookingIdDetails,
  getMyPackageDetailsQuery,
} from "../../../Scenes/graphqlConfig";

export const getMyBookingsAPI = createAsyncThunk(
  "auth/getMyBookingsAPI",
  async (count: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructBookingQuery(count)),
    ),
);

export const getAllBookingsAPI = createAsyncThunk(
  "auth/getAllBookingsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/booking/getBookings`, body),
);

export const getMyOrderAPI = createAsyncThunk(
  "auth/getMyOrderAPI",
  async (bookingId: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getBookingIdDetails(bookingId)),
    ),
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (body: any) => await post(`${SERVER_IP}/auth/register`, body),
);
export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  async (body: any) => await put(`${SERVER_IP}/user/update`, body),
);
export const getAllSubscriptions = createAsyncThunk(
  "auth/getAllSubscriptions",
  async () => await get(`${SERVER_IP}/api/v1/wallet`),
);
export const getMyPackageDetailsAPI = createAsyncThunk(
  "auth/getMyPackageDetailsAPI",
  async () =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getMyPackageDetailsQuery()),
    ),
);

export const addCouponCodeAPI = createAsyncThunk(
  "auth/addCouponCodeAPI",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/coupon/apply`, body),
);

export const paymentRetryAPI = createAsyncThunk(
  "auth/paymentRetryAPI",
  async (body: any) =>
    await patch(`${SERVER_IP}/api/v1/booking/${body?.bookingId}/paymentretry`, {
      merchant: body?.merchant,
    }),
);
export const startRecordingAPI = createAsyncThunk(
  "auth/startRecordingAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/zegocloud/startRecording`, body),
);
export const stopRecordingAPI = createAsyncThunk(
  "auth/stopRecordingAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/zegocloud/stopRecording`, body),
);

export const checkIfClientUserAvailable = createAsyncThunk(
  "auth/checkIfClientUserAvailable",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/client/checkingPhone`, body),
);

export const googleSearchAPI = createAsyncThunk(
  "auth/googleSearchAPI",
  async (query: any) =>
    await get(`${SERVER_IP}/api/v1/filter/suggestions/?q=${query}`),
);
