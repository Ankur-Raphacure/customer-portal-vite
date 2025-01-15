import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, patch } from "../../../library/Requests/helpers";

import {
  constructHospitalDetailsQuery,
  constructHospitalDoctorsListQuery,
  constructgetInHouseDoctorsQuery,
} from "../../../Scenes/graphqlConfig";

export const getHospitalDetailsAPI = createAsyncThunk(
  "hospital/getHospitalDetailsAPI",
  async (id: string) =>
    await post(`${SERVER_IP}/graphql`, constructHospitalDetailsQuery(id))
);

export const getHospitalDoctorsListAPI = createAsyncThunk(
  "hospital/getHospitalDoctorsListAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructHospitalDoctorsListQuery(obj))
);
export const getInHouseDoctorsAPI = createAsyncThunk(
  "hospital/getInHouseDoctorsAPI",
  async (obj: any) =>
    await post(`${SERVER_IP}/graphql`, constructgetInHouseDoctorsQuery(obj))
);
