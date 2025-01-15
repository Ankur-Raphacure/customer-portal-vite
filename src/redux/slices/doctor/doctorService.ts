import { AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get } from "../../../library/Requests/helpers";

import {
  constructDoctorsListQuery,
  constructDoctorHospitalListQuery,
  constructHospitalListQuery,
} from "../../../Scenes/graphqlConfig";

export const getDoctorsListAPI = createAsyncThunk(
  "doctor/getDoctorsListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructDoctorsListQuery(obj))
);

export const getDoctorHospitalListAPI = createAsyncThunk(
  "doctor/getDoctorHospitalListAPI",
  async (id: string) =>
    await post(`${SERVER_IP}/graphql`, constructDoctorHospitalListQuery(id))
);

export const getHospitalListAPI = createAsyncThunk(
  "doctor/getHospitalListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructHospitalListQuery(obj))
);

export const instantConnectAPI = createAsyncThunk(
  "doctor/instantConnectAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/dashboard/callMasking`, body)
);

export const makeCallAPI = createAsyncThunk(
  "doctor/makeCallAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/dashboard/makeCall`, body)
);

export const patientDoctorsAPI = createAsyncThunk(
  "doctor/patientDoctorsAPI",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/doctor/patient-doctor/${id}`)
);

export const doctorPrescribedItems = createAsyncThunk(
  "doctor/doctorPrescribedItems",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/prescription/prescripted-data?userId=${id}`)
);

export const updatePrescribedItems = createAsyncThunk(
  "doctor/updatePrescribedItems",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/prescription/updateIsPurchased`, body)
);
export const googleTranslateAPI = createAsyncThunk(
  "auth/googleTranslateAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/filter/googleTranslation?q=${body?.query}&tl=${body?.targetLang}`
    )
);

export const getAllDoctorAPI = createAsyncThunk(
  "auth/getAllDoctorAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/doctor/getAllDoctors`, body);
  }
);
export const getDoctorDetailAPI = createAsyncThunk(
  "auth/getDoctorDetailAPI",
  async (id: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?doctorId=${id}`,
      { filters: {} }
    );
  }
);
