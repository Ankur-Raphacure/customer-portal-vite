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

export const getDoctorsUsersAPI = createAsyncThunk(
  "doctor/getDoctorsListAPI",
  async (id: number) =>
    await get(`${SERVER_IP}/api/v1/doctor/${id}/user-details`)
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
  async ({ body, id }: { body: any; id?: any }) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?${id ? `vendorId=${id}` : ""}`,
      body
    );
  }
);
export const getSearchAllDoctorAPI = createAsyncThunk(
  "auth/getSearchAllDoctorAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/doctor/getAllDoctors`, body);
  }
);
export const getSpecializationAPI = createAsyncThunk(
  "auth/getSpecializationAPI",
  async () => {
    return await get(`${SERVER_IP}/api/v1/doctor/active-specialization`);
  }
);
export const getDoctorRelatedHospitalAPI = createAsyncThunk(
  "auth/getDoctorRelatedHospitalAPI",
  async (id: any) => {
    return await get(
      `${SERVER_IP}/api/v1/doctor/doctor-vendor?doctor_id=${id}`
    );
  }
);
export const getDoctorFiltersAPI = createAsyncThunk(
  "auth/getDoctorFiltersAPI",
  async (data: any) => {
    return await post(`${SERVER_IP}/api/v1/doctor/getFilters`, data);
  }
);
export const getTypeFiltersAPI = createAsyncThunk(
  "auth/getTypeFiltersAPI",
  async (data: any) => {
    return await post(`${SERVER_IP}/api/v1/doctor/getFilters`, data);
  }
);
export const getTimeslotsAPI = createAsyncThunk(
  "auth/getTimeslotsAPI",
  async (body: any) => {
    let newUrl1 = `doctor_id=${body?.doctor_id}&type=${body?.type}`;
    if (body?.vendor_id) {
      newUrl1 += `&vendor_id=${body?.vendor_id}`;
    }
    return await post(
      `${SERVER_IP}/api/v1/doctor/doctor-timeslots?${newUrl1}`,
      body?.body
    );
  }
);
export const getNearByHospitalAPI = createAsyncThunk(
  "auth/getNearByHospitalAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/vendor/get-nearest`, body);
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
export const getClinicDetailsAPI = createAsyncThunk(
  "auth/getClinicDetailsAPI",
  async (body: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?vendorId=${body?.id}`,
      body?.body
    );
  }
);
export const getClinicFiltersAPI = createAsyncThunk(
  "auth/getClinicFiltersAPI",
  async (body: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getFilters?vendorId=${body?.id}`,
      body?.body
    );
  }
);
