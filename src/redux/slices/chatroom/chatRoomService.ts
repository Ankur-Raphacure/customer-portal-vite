import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { post, put, get, patch } from "../../../library/Requests/helpers";

export const getMessagesGroupsAPI = createAsyncThunk(
  "auth/getMessagesGroupsAPI",
  async () => await get(`${SERVER_IP}/api/v1/chat/support`)
);

export const getFirebaseTokenAPI = createAsyncThunk(
  "auth/getFirebaseTokenAPI",
  async () => await get(`${SERVER_IP}/api/v1/chat/token`)
);

export const updateFcmTokenAPI = createAsyncThunk(
  "auth/updateFcmTokenAPI",
  async (fcmToken: string) =>
    await put(`${SERVER_IP}/api/v1/chat/fcm`, { fcm: fcmToken })
);
