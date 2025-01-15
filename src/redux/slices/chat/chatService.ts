import { createAsyncThunk } from "@reduxjs/toolkit";
import { CHAT_API } from "../../../config";
import { get, post } from "../../../library/Requests/helpers";

export const getUserChatId = createAsyncThunk(
  "chat/getUserChatId",
  async (rcId: any) => await get(`${CHAT_API}/api/auth/getChatId?id=RC_${rcId}`)
);

export const addMessage = createAsyncThunk(
  "chat/addMessage",
  async (body: any) => await post(`${CHAT_API}/api/messages/addmsg`, body)
);

export const getMessages = createAsyncThunk(
  "chat/getMessages",
  async (body: any) => await post(`${CHAT_API}/api/messages/getmsg`, body)
);
