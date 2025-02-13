import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get } from "../../../library/Requests/helpers";

import {
  constructAllScansQuery,
  constructAllCtMriCategoryQuery,
  constructgetCtMriByCategoryQuery,
  constructgetCtmriDetailsQuery,
  constructgetPackageDetailsQuery,
  constructAllScansCityQuery,
  constructgetAllScansNearByQuery,
} from "../../../Scenes/graphqlConfig";

export const getAllCategoriesListAPI = createAsyncThunk(
  "auth/getAllCategoriesListAPI",
  async () =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructAllCtMriCategoryQuery),
    ),
);
export const getAllScansListAPI = createAsyncThunk(
  "auth/getAllScansListAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(constructAllScansQuery)),
);

export const getCtMriByCategoryAPI = createAsyncThunk(
  "auth/getCtMriByCategoryAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetCtMriByCategoryQuery(body)),
    ),
);

export const getAllScansCityAPI = createAsyncThunk(
  "auth/getAllScansCityAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructAllScansCityQuery(body)),
    ),
);

export const getCtmriDetailsQueryAPI = createAsyncThunk(
  "auth/getCtmriDetailsQueryAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetCtmriDetailsQuery(body)),
    ),
);
export const getPackageDetailsQueryAPI = createAsyncThunk(
  "auth/getPackageDetailsQueryAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetPackageDetailsQuery(body)),
    ),
);
export const getAllScansNearByAPI = createAsyncThunk(
  "auth/getAllScansNearByAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetAllScansNearByQuery(body)),
    ),
);
