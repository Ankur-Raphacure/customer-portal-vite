import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get } from "../../../library/Requests/helpers";

export const getConfigInfoAPI = createAsyncThunk(
  "auth/getConfigInfoAPI",
  async () => await get(`${SERVER_IP}/api/v1/config`)
);
