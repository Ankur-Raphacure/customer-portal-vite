import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { get, post } from "../../../library/Requests/helpers";

export const getAllFrontendServices = createAsyncThunk(
  "auth/getAllFrontendServices",
  async () => await get(`${SERVER_IP}/api/v1/config/frontendservices`),
);

export const getAllHyperSites = createAsyncThunk(
  "auth/getAllHyperSites",
  async () => await get(`${SERVER_IP}/api/raphaplus/hypersite/all`),
);

export const getHyperSiteByName = createAsyncThunk(
  "auth/getHyperSiteByName",
  async (siteName: any) =>
    await get(`${SERVER_IP}/api/raphaplus/hypersite?siteName=${siteName}`),
);

export const addBookDemoRequestAPI = createAsyncThunk(
  "auth/addBookDemoRequestAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/raphaplus/demoRequest`, body),
);
