import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDoctorsListAPI,
  getDoctorHospitalListAPI,
  getHospitalListAPI,
  getAllDoctorAPI,
  getDoctorDetailAPI,
  getSearchAllDoctorAPI,
  getSpecializationAPI,
  getDoctorRelatedHospitalAPI,
  getNearByHospitalAPI,
  getTimeslotsAPI,
  getDoctorFiltersAPI,
  getTypeFiltersAPI,
  getClinicDetailsAPI,
  getClinicFiltersAPI,
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
  allDoctorList: {
    totalCount: number;
    doctors: any[];
  };
  allSearchAllDoctorList: any;
  doctorDetailList: any;
  allSpecializationList: any;
  allDoctorRelatedHospitalList: any;
  allTimeslotsIList: any;
  allNearByHospitalList: any;
  allDoctorFiltersList: any;
  allDoctorsFiltersData: any;
  selectedHospitalData: any;
  clinicDetails: any;
  clinicFilters: any;
}
const initialState: DoctorState = {
  loading: false,
  error: null,
  hospitalList: [],
  doctorsList: [],
  allDoctorList: {
    doctors: [],
    totalCount: 0,
  },
  doctorDetailList: [],
  allSearchAllDoctorList: [],
  doctorHospitalsList: [],
  allSpecializationList: [],
  allDoctorRelatedHospitalList: [],
  allTimeslotsIList: [],
  allNearByHospitalList: [],
  allDoctorFiltersList: [],
  city: "",
  count: "",
  page: "",
  searchText: "",
  tablist: ["Virtual Consultation", "In Office Clinic", "OPD Consultation"],
  allDoctorsFiltersData: {},
  selectedHospitalData: {},
  clinicDetails: {},
  clinicFilters: {},
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
    updateSelectedHospitalData: (
      state: DoctorState,
      action: PayloadAction<any>
    ) => {
      state.selectedHospitalData = action.payload;
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
        state.allDoctorList.totalCount = action?.payload?.totalCount;
        if (Array.isArray(action.payload?.data?.doctors)) {
          state.allDoctorList.doctors = action.payload?.data?.doctors;
        }
      }
    );
    builder.addCase(
      getAllDoctorAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allDoctorList.doctors = [];
        state.allDoctorList.totalCount = 0;
      }
    );
    //getAllDoctorAPI
    builder.addCase(getSearchAllDoctorAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getSearchAllDoctorAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allSearchAllDoctorList = action.payload?.data;
      }
    );
    builder.addCase(
      getSearchAllDoctorAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allSearchAllDoctorList = [];
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
    //getSpecializationAPI
    builder.addCase(getSpecializationAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getSpecializationAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allSpecializationList = action.payload?.data;
      }
    );
    builder.addCase(
      getSpecializationAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allSpecializationList = [];
      }
    );
    //getDoctorRelatedHospitalAPI
    builder.addCase(getDoctorRelatedHospitalAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorRelatedHospitalAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDoctorRelatedHospitalList = action.payload;
      }
    );
    builder.addCase(
      getDoctorRelatedHospitalAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allDoctorRelatedHospitalList = [];
      }
    );
    //getTimeslotsAPI
    builder.addCase(getTimeslotsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getTimeslotsAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allTimeslotsIList = action.payload;
      }
    );
    builder.addCase(
      getTimeslotsAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allTimeslotsIList = [];
      }
    );
    //getNearByHospitalAPI
    builder.addCase(getNearByHospitalAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getNearByHospitalAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log("action.payload", action.payload);
        const prevList = { ...state.allNearByHospitalList };
        if (action.payload?.data?.page > 1 && prevList.vendors?.length > 0) {
          prevList.vendors = [
            ...prevList.vendors,
            ...action.payload?.data?.vendors,
          ];
          state.allNearByHospitalList = prevList;
        } else {
          state.allNearByHospitalList = action.payload?.data;
        }
      }
    );
    builder.addCase(
      getNearByHospitalAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allNearByHospitalList = [];
      }
    );
    //getDoctorFiltersAPI
    builder.addCase(getDoctorFiltersAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorFiltersAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDoctorFiltersList = action.payload?.data;
      }
    );

    builder.addCase(
      getDoctorFiltersAPI.rejected,
      (state: DoctorState, action: any) => {
        state.loading = false;
        state.allDoctorFiltersList = [];
      }
    );
    builder.addCase(
      getTypeFiltersAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        const prevResp = { ...state.allDoctorsFiltersData };
        const cData = action.payload?.data;
        if (cData?.type) {
          prevResp.type = cData?.type;
        }
        if (cData?.gender) {
          prevResp.gender = cData?.gender;
        }
        if (cData?.category_ids) {
          prevResp.category_ids = cData?.category_ids;
        }
        if (cData?.languages) {
          prevResp.languages = cData?.languages;
        }
        console.log("prevResp", prevResp);
        state.allDoctorsFiltersData = prevResp;
      }
    );
    builder.addCase(
      getClinicFiltersAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        // state.clinicFilters = action.payload?.data;
        const prevResp = { ...state.clinicFilters };
        const cData = action.payload?.data;
        if (cData?.type) {
          prevResp.type = cData?.type;
        }
        if (cData?.gender) {
          prevResp.gender = cData?.gender;
        }
        if (cData?.category_ids) {
          prevResp.category_ids = cData?.category_ids;
        }
        if (cData?.languages) {
          prevResp.languages = cData?.languages;
        }
        console.log("prevResp", prevResp);
        state.clinicFilters = prevResp;
      }
    );
    builder.addCase(
      getClinicDetailsAPI.fulfilled,
      (state: DoctorState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.clinicDetails = action.payload?.data;
      }
    );
  },
});

export const {
  setLoading,
  updateErrorMessage,
  updateTablist,
  updateSelectedHospitalData,
} = hospitalSlice.actions;

export default hospitalSlice.reducer;
