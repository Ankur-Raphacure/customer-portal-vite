import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDoctorsListAPI,
  getDoctorHospitalListAPI,
  getHospitalListAPI,
  getAllDoctorAPI,
  getDoctorDetailAPI,
} from "./doctorService";

export interface DoctorState {
  loading: boolean;
  error: any;
  hospitalList: any;
  doctorsList: any;
  doctorHospitalsList: any;
  city: any;
  count: any;
  page: any;
  searchText: any;
  tablist: any;
  allDoctorList: any;
  doctorDetailList: any;
}
const initialState: DoctorState = {
  loading: false,
  error: null,
  hospitalList: [],
  doctorsList: [],
  allDoctorList: [],
  doctorDetailList: [],
  doctorHospitalsList: [],
  city: "",
  count: "",
  page: "",
  searchText: "",
  tablist: ["Virtual Consultation", "In Office Clinic", "OPD Consultation"],
};

export const hospitalSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    setLoading: (state: DoctorState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: DoctorState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
    updateTablist: (state: DoctorState, action: PayloadAction<any>) => {
      state.tablist = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getDoctorsListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorsListAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorsList = action.payload?.data;
      }
    );
    builder.addCase(
      getDoctorsListAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.doctorsList = [];
      }
    );

    //get Hospital List
    builder.addCase(getDoctorHospitalListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorHospitalListAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorHospitalsList = action.payload?.data?.doctorById;
      }
    );
    builder.addCase(
      getDoctorHospitalListAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.doctorHospitalsList = [];
      }
    );

    //getHealthPackagesAPI
    builder.addCase(getHospitalListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHospitalListAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.hospitalList = action.payload?.data;
      }
    );
    builder.addCase(
      getHospitalListAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.hospitalList = [];
      }
    );

    //getAllDoctorAPI
    builder.addCase(getAllDoctorAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllDoctorAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDoctorList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllDoctorAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allDoctorList = [];
      }
    );
    //getDoctorDetailAPI
    builder.addCase(getDoctorDetailAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorDetailAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.doctorDetailList = action.payload;
      }
    );
    builder.addCase(
      getDoctorDetailAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.doctorDetailList = [];
      }
    );
  },
});

export const { setLoading, updateErrorMessage, updateTablist } =
  hospitalSlice.actions;

export default hospitalSlice.reducer;
