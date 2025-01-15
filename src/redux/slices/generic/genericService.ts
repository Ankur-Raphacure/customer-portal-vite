import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get, patch } from "../../../library/Requests/helpers";

import {
  getEyeHospitalsQuery,
  getEyeCategoriesQuery,
  getGymCategoriesQuery,
  getGymVendorsQuery,
  getAyurvedsServiceQuery,
  getAyurvedsCenterQuery,
  getAyurvedsDiseaseQuery,
  getAyurvedsPanchakarmaQuery,
  getAyurvedsNaturopathyQuery,
  getDomiciliaryCareQuery,
  getWomensPackagesQuery,
  getVaccinationsQuery,
  eyecareNearClinicQuery,
  dentalcareNearClinicQuery,
  CreateTrackerDetailQuery,
  getDomiciliaryNurseQuery,
  getDomiciliaryEquipmentsQuery,
  getDomiciliaryVaccinationsQuery,
  getAllEyewearGlassessQuery,
  getgetAllFitnessQuery,
} from "../../../Scenes/graphqlConfig";

export const getEyeCategoriesAPI = createAsyncThunk(
  "auth/getEyeCategoriesAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getEyeCategoriesQuery(body))
    )
);

export const getCreateTrackerDetailAPI = createAsyncThunk(
  "auth/getCreateTrackerDetailAPI",
  async (body: any) => {
    return await post(
      `${SERVER_IP}/api/v1/periodtracker/personal-details`,
      body
    );
  }
);

export const getEyeHospitalsAPI = createAsyncThunk(
  "auth/getEyeHospitalsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getEyeHospitalsQuery(body))
    )
);

export const getAyurvedaServiceAPI = createAsyncThunk(
  "auth/getAyurvedaServiceAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getAyurvedsServiceQuery))
);

export const getAyurvedsCenterAPI = createAsyncThunk(
  "auth/getAyurvedsCenterAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getAyurvedsCenterQuery(body))
    )
);

export const geteyecareNearClinicAPI = createAsyncThunk(
  "auth/geteyecareNearClinicAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(eyecareNearClinicQuery(body))
    )
);

export const getdentalcareNearClinicAPI = createAsyncThunk(
  "auth/getdentalcareNearClinicAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(dentalcareNearClinicQuery(body))
    )
);

export const getAyurvedsPanchakarmaAPI = createAsyncThunk(
  "auth/getAyurvedsPanchakarmaAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getAyurvedsPanchakarmaQuery(body))
    )
);
export const getAyurvedsNaturopathyAPI = createAsyncThunk(
  "auth/getAyurvedsNaturopathyAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getAyurvedsNaturopathyQuery(body))
    )
);

export const getWomensPackagesAPI = createAsyncThunk(
  "auth/getWomensPackagesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getWomensPackagesQuery))
);

export const getVaccinationsAPI = createAsyncThunk(
  "auth/getVaccinationsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getVaccinationsQuery(body))
    )
);
export const getDomiciliaryVaccinationsAPI = createAsyncThunk(
  "auth/getDomiciliaryVaccinationsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getDomiciliaryVaccinationsQuery(body))
    )
);
export const getAllEyewearGlassessAPI = createAsyncThunk(
  "auth/getAllEyewearGlassessAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getAllEyewearGlassessQuery(body))
    )
);

export const getCreateLogSymptomsDetailAPI = createAsyncThunk(
  "auth/getCreateLogSymptomsDetailAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/periodtracker`, body);
  }
);

export const getDomiciliaryCareAPI = createAsyncThunk(
  "auth/getDomiciliaryCareAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getDomiciliaryCareQuery(body))
    )
);

export const getAyurvedsDiseaseAPI = createAsyncThunk(
  "auth/getAyurvedsDiseaseAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getAyurvedsDiseaseQuery(body))
    )
);
export const getAllDomiciliaryNursesAPI = createAsyncThunk(
  "auth/getAllDomiciliaryNursesAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getDomiciliaryNurseQuery(body))
    )
);
export const getAllDomiciliaryEquipmentsAPI = createAsyncThunk(
  "auth/getAllDomiciliaryEquipmentsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getDomiciliaryEquipmentsQuery(body))
    )
);
export const getAllFitnessAPI = createAsyncThunk(
  "auth/getAllFitnessAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getgetAllFitnessQuery(body))
    )
);

export const getAmbulanceList = createAsyncThunk(
  "auth/getAmbulanceList",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/test/ambulance`, body)
);
export const getGymVendorsAPI = createAsyncThunk(
  "auth/getGymVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getGymVendorsQuery(body)))
);
export const getCategoriesAPI = createAsyncThunk(
  "auth/getCategoriesAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getGymCategoriesQuery(body))
    )
);

export const getUniversalSearchData = createAsyncThunk(
  "auth/getUniversalSearchData",
  async (body: any) => {
    let url = `${SERVER_IP}/api/v1/config/search`;
    if (body?.type) {
      url += `?type=${body?.type}`;
      const payload = {
        searchText: body?.searchText,
      };
      return await post(url, payload);
    } else {
      return await post(url, body);
    }
  }
);

export const getuserActivityAPI = createAsyncThunk(
  "auth/getuserActivityAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/activity`, body);
  }
);

export const getallUserActivityAPI = createAsyncThunk(
  "auth/getallUserActivityAPI",
  async () =>
    await get(`${SERVER_IP}/api/v1/activity/allCategoriesWithActivity
`)
);
export const getUpdateUserActivityAPI = createAsyncThunk(
  "auth/getUpdateUserActivityAPI",
  async (body: any) => await put(`${SERVER_IP}/api/v1/actvity`, body)
);

export const getAppoinmentDropdownAPI = createAsyncThunk(
  "auth/getAppoinmentDropdownAPI",
  async () => await get(`${SERVER_IP}/api/v1/filter/treatmenttype`)
);

export const createUplodedImagedDetailsAPI = createAsyncThunk(
  "auth/createUplodedImagedDetailsAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/userlogs`, body);
  }
);
