import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post } from "../../../library/Requests/helpers";

import {
  fetchBloodTests,
  getBloodBankVendors,
} from "../../../Scenes/graphqlConfig";

export const getBloodBankVendorsAPI = createAsyncThunk(
  "auth/getBloodBankVendorsAPI",
  async (city: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getBloodBankVendors(city))
    )
);

export const getAllBloodTestsAPI = createAsyncThunk(
  "auth/getAllBloodTestsAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(fetchBloodTests))
);
