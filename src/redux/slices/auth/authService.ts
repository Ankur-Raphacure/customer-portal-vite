import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get, patch } from "../../../library/Requests/helpers";
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  // async (body:any) => {
  //   return await post(`${SERVER_IP}/auth/login`, body);
  // }
  async (body: any) => await post(`${SERVER_IP}/auth/login`, body),
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (body: any) => await post(`${SERVER_IP}/auth/register`, body),
);

export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  async (body: any) => await put(`${SERVER_IP}/user/update`, body),
);
export const requestOtpAPI = createAsyncThunk(
  "auth/requestOtpAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/otp/request`, body),
);

export const validateOtpAPI = createAsyncThunk(
  "auth/validateOtpAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/otp/verify`, body),
);
export const checkSocialUserAPI = createAsyncThunk(
  "auth/checkSocialUserAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/google`, body),
);
export const getStoreDetails = createAsyncThunk(
  "auth/getStoreDetails",
  async () => await get(`${SERVER_IP}/api/v1/auth/otp/verify`),
);

export const getSignedUrlApi = createAsyncThunk(
  "auth/getSignedUrlApi",
  async () => await get(`${SERVER_IP}/api/v1/auth/getSignedUrl`),
);

export const updateCityNameAPI = createAsyncThunk(
  "auth/updateCityNameAPI",
  async (body: any) => await put(`${SERVER_IP}/api/v1/preference`, body),
);
export const getCityNameAPI = createAsyncThunk(
  "auth/getCityNameAPI",
  async () => await get(`${SERVER_IP}/api/v1/preference/city`),
);

export const getSubDomainLoginDetails = createAsyncThunk(
  "auth/getSubDomainLoginDetails",
  async (body: any) =>
    await patch(
      `${SERVER_IP}/api/v1/auth/${body?.subDomain}/signon`,
      body?.data,
    ),
);
