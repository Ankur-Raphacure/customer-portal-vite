import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFirebaseTokenAPI, getMessagesGroupsAPI } from "./chatRoomService";

export interface ChatRoomState {
  loading: boolean;
  error: any;
  internalChats: any;
  firebaseToken: any;
}

const initialState: ChatRoomState = {
  loading: false,
  error: null,
  internalChats: null,
  firebaseToken: null,
};

export const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    setLoading: (state: ChatRoomState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: ChatRoomState,
      action: PayloadAction<boolean>,
    ) => {
      state.error = action.payload;
    },

    updateInternalChats: (state: ChatRoomState, action: PayloadAction<any>) => {
      state.internalChats = action.payload;
    },

    updateFirebaseToken: (state: ChatRoomState, action: PayloadAction<any>) => {
      state.firebaseToken = action.payload;
    },
  },

  extraReducers: (builder: any) => {
    // getMessagesGroupsAPI
    builder.addCase(getMessagesGroupsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.internalChats = null;
    });

    builder.addCase(
      getMessagesGroupsAPI.fulfilled,
      (state: ChatRoomState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.internalChats = action.payload.data.internalChats;
      },
    );

    builder.addCase(
      getMessagesGroupsAPI.rejected,
      (state: ChatRoomState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    // getFirebaseTokenAPI
    builder.addCase(getFirebaseTokenAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.firebaseToken = null;
    });

    builder.addCase(
      getFirebaseTokenAPI.fulfilled,
      (state: ChatRoomState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.firebaseToken = action.payload.data.firebaseToken;
      },
    );

    builder.addCase(
      getFirebaseTokenAPI.rejected,
      (state: ChatRoomState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
  },
});

export const {
  setLoading,
  updateErrorMessage,
  updateInternalChats,
  updateFirebaseToken,
} = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
