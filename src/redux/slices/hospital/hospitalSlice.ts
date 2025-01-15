import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getHospitalDetailsAPI,
  getHospitalDoctorsListAPI,
  getInHouseDoctorsAPI,
} from "./hospitalService";

export interface HospitalState {
  loading: boolean;
  error: any;
  hospitalId: any;
  hospitalDetails: any;
  doctorsList: any;
  doctorsListNew: any;
}
const initialState: HospitalState = {
  loading: false,
  error: null,
  hospitalId: "",
  hospitalDetails: null,
  doctorsList: [],
  doctorsListNew: [],
};

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    setLoading: (state: HospitalState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: HospitalState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    //getHospitalDetailsAPI
    builder.addCase(getHospitalDetailsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHospitalDetailsAPI.fulfilled,
      (state: HospitalState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.hospitalDetails = action.payload?.data;
      }
    );
    builder.addCase(
      getHospitalDetailsAPI.rejected,
      (state: HospitalState, action: any) => {
        state.loading = false;
        state.hospitalDetails = null;
      }
    );

    //getHospitalDoctorsListAPI
    builder.addCase(getHospitalDoctorsListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHospitalDoctorsListAPI.fulfilled,
      (state: HospitalState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorsList = action.payload?.data;
      }
    );
    builder.addCase(
      getHospitalDoctorsListAPI.rejected,
      (state: HospitalState, action: any) => {
        state.loading = false;
        state.doctorsList = [];
      }
    );
    builder.addCase(getInHouseDoctorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getInHouseDoctorsAPI.fulfilled,
      (state: HospitalState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorsListNew = action.payload?.data;
      }
    );
    builder.addCase(
      getInHouseDoctorsAPI.rejected,
      (state: HospitalState, action: any) => {
        state.loading = false;
        state.doctorsListNew = [];
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = hospitalSlice.actions;

export default hospitalSlice.reducer;
