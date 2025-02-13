import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getMyBookingsAPI,
  getAllSubscriptions,
  getMyPackageDetailsAPI,
  getAllBookingsAPI,
} from "./dashboardService";

export interface DashboardState {
  loading: boolean;
  error: any;
  myBookings: any;
  allBookings: any;
  myAllSubscriptions: any;
  myAllPackages: any;
}
const initialState: DashboardState = {
  loading: false,
  error: null,
  myBookings: {},
  allBookings: {},
  myAllSubscriptions: {},
  myAllPackages: {},
};

export const dashboardSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: DashboardState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: DashboardState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    // getMyBookingsAPI
    builder.addCase(getMyBookingsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getMyBookingsAPI.fulfilled,
      (state: DashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.myBookings = action.payload?.data;
      }
    );
    builder.addCase(
      getMyBookingsAPI.rejected,
      (state: DashboardState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    // getAllBookingsAPI
    builder.addCase(getAllBookingsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllBookingsAPI.fulfilled,
      (state: DashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allBookings = action.payload?.data;
      }
    );
    builder.addCase(
      getAllBookingsAPI.rejected,
      (state: DashboardState, action: any) => {
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    //getAllSubscriptions
    builder.addCase(getAllSubscriptions.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllSubscriptions.fulfilled,
      (state: DashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.myAllSubscriptions = action.payload?.data;
      }
    );
    builder.addCase(
      getAllSubscriptions.rejected,
      (state: DashboardState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //getMyPackageDetailsAPI
    builder.addCase(getMyPackageDetailsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getMyPackageDetailsAPI.fulfilled,
      (state: DashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.myAllPackages = action.payload?.data;
      }
    );
    builder.addCase(
      getMyPackageDetailsAPI.rejected,
      (state: DashboardState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = dashboardSlice.actions;

export default dashboardSlice.reducer;
