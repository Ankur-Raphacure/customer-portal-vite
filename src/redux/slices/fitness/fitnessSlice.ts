import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllFitnessCenterPackagesAPI, getAllFitnessCentersAPI, getAllFitnessVendorsAPI } from "./fitnessService";

export interface FitnessStateType {
  fitnessCenters: {
    loading: boolean;
    error: any;
    data: any;
  };
  fitnessVendors: {
    loading: boolean;
    error: any;
    data: any;
  };
  fitnessPackages:{
    loading:boolean;
    error: any;
    data: any;
  }
}

const initialState: FitnessStateType = {
  fitnessCenters: {
    loading: false,
    error: null,
    data: null,
  },
  fitnessVendors: {
    loading: false,
    error: null,
    data: null,
  },
  fitnessPackages:{
    loading: false,
    error: null,
    data: null,
  }
};

export const fitnessSlice = createSlice({
  name: "fitness",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(
      getAllFitnessCentersAPI.pending,
      (state: FitnessStateType) => {
        state.fitnessCenters.loading = true;
        state.fitnessCenters.error = null;
      }
    );
    builder.addCase(
      getAllFitnessCentersAPI.fulfilled,
      (state: FitnessStateType, action: PayloadAction<any>) => {
        state.fitnessCenters.data = action.payload?.data;
        state.fitnessCenters.loading = false;
        state.fitnessCenters.error = null;
      }
    );
    builder.addCase(
      getAllFitnessCentersAPI.rejected,
      (state: FitnessStateType, action: PayloadAction<any>) => {
        state.fitnessCenters.error = action.payload;
        state.fitnessCenters.loading=false
      }
    );

    //vendors
    builder.addCase(
      getAllFitnessVendorsAPI.pending,
      (state: FitnessStateType) => {
        state.fitnessVendors.loading = true;
        state.fitnessVendors.error = null;
      }
    );
    builder.addCase(
      getAllFitnessVendorsAPI.fulfilled,
      (state: FitnessStateType, action: PayloadAction<any>) => {
        state.fitnessVendors.data = action.payload?.data;
        state.fitnessVendors.loading = false;
        state.fitnessVendors.error = null;
      }
    );
    builder.addCase(
      getAllFitnessVendorsAPI.rejected,
      (state: FitnessStateType, action: PayloadAction<any>) => {
        state.fitnessVendors.error = action.payload;
        state.fitnessVendors.loading = false;
      }
    );

    //

    //packages
    builder.addCase(
      getAllFitnessCenterPackagesAPI.pending,
      (state: FitnessStateType) => {
        state.fitnessPackages.loading = true;
        state.fitnessPackages.error = null;
      }
    );
    builder.addCase(
      getAllFitnessCenterPackagesAPI.fulfilled,
      (state: FitnessStateType, action: PayloadAction<any>) => {
        state.fitnessPackages.data = action.payload?.data;
        state.fitnessPackages.loading = false;
        state.fitnessPackages.error = null;
      }
    );
    builder.addCase(
      getAllFitnessCenterPackagesAPI.rejected,
      (state: FitnessStateType, action: PayloadAction<any>) => {
        state.fitnessPackages.error = action.payload;
        state.fitnessPackages.loading = false;
      }
    );

    //
  },
});

export default fitnessSlice.reducer;
