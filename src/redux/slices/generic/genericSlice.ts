import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getEyeCategoriesAPI,
  getEyeHospitalsAPI,
  getAmbulanceList,
  getCategoriesAPI,
  getGymVendorsAPI,
  getUniversalSearchData,
  getAyurvedaServiceAPI,
  getAyurvedsCenterAPI,
  getAyurvedsDiseaseAPI,
  getAyurvedsPanchakarmaAPI,
  getAyurvedsNaturopathyAPI,
  getDomiciliaryCareAPI,
  getWomensPackagesAPI,
  getVaccinationsAPI,
  geteyecareNearClinicAPI,
  getdentalcareNearClinicAPI,
  getCreateTrackerDetailAPI,
  getAllDomiciliaryNursesAPI,
  getAllDomiciliaryEquipmentsAPI,
  getAppoinmentDropdownAPI,
  getDomiciliaryVaccinationsAPI,
  getAllEyewearGlassessAPI,
  getAllFitnessAPI,
  createUplodedImagedDetailsAPI,
} from "./genericService";

export interface CtmriState {
  loading: boolean;
  error: any;
  allEyeCareHospitalsList: {};
  allEyeCareCategoriesList: {};
  allAmbulanceList: {};
  allGymCategoriesList: {};
  allGymVendorsList: {};
  universalSearchResults: [];
  allAyurvedaServiceList: any;
  allAyurvedsCenterList: {};
  allAyurvedsDiseaseList: {};
  allPanchakarmaList: {};
  allNaturopathyList: {};
  allDomiciliaryCareList: {};
  allWomensPackagesList: {};
  allVaccinationsList: {};
  allDomiciliaryVaccinationsList: {};
  alleyecareNearClinic: {};
  alldentalcareNearClinic: {};
  allCreateTrackerDetailAPI: {};
  allDomiciliaryNursesAPI: {};
  allDomiciliaryEquipmentsList: {};
  allAppoinmentList: [];
  allEyewearGlassessList: [];
  allFitnessList: [];
}
const initialState: CtmriState = {
  loading: false,
  error: null,
  allEyeCareCategoriesList: {},
  allEyeCareHospitalsList: {},
  allAmbulanceList: {},
  allGymCategoriesList: {},
  allGymVendorsList: {},
  allAyurvedaServiceList: [],
  allAyurvedsCenterList: [],
  allAyurvedsDiseaseList: [],
  allPanchakarmaList: [],
  allNaturopathyList: [],
  allDomiciliaryCareList: [],
  universalSearchResults: [],
  allWomensPackagesList: [],
  allVaccinationsList: [],
  allDomiciliaryVaccinationsList: [],
  alleyecareNearClinic: [],
  alldentalcareNearClinic: [],
  allCreateTrackerDetailAPI: [],
  allDomiciliaryNursesAPI: [],
  allDomiciliaryEquipmentsList: [],
  allAppoinmentList: [],
  allEyewearGlassessList: [],
  allFitnessList: [],
};

export const ctmriSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: CtmriState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: CtmriState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateAllAmbulanceList: (state: CtmriState, action: PayloadAction<any>) => {
      state.allAmbulanceList = action.payload;
    },
    updateUniversalSearchResults: (
      state: CtmriState,
      action: PayloadAction<any>,
    ) => {
      state.universalSearchResults = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getEyeCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getEyeCategoriesAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allEyeCareCategoriesList = action.payload.data;
      },
    );
    builder.addCase(
      getEyeCategoriesAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //scanDetails
    builder.addCase(getEyeHospitalsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getEyeHospitalsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allEyeCareHospitalsList = action.payload.data;
      },
    );
    builder.addCase(
      getEyeHospitalsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    //getAmbulanceList
    builder.addCase(getAmbulanceList.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAmbulanceList.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAmbulanceList = action.payload.data;
      },
    );
    builder.addCase(
      getAmbulanceList.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    builder.addCase(getCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCategoriesAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allGymCategoriesList = action.payload.data;
      },
    );
    builder.addCase(
      getCategoriesAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    builder.addCase(getGymVendorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getGymVendorsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allGymVendorsList = action.payload.data;
      },
    );
    builder.addCase(
      getGymVendorsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    // getAyurvedaServiceList
    builder.addCase(getAyurvedaServiceAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAyurvedaServiceAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAyurvedaServiceList = action.payload.data;
      },
    );
    builder.addCase(
      getAyurvedaServiceAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
        state.allAyurvedaServiceList = [];
      },
    );
    // getAyurvedaServiceList
    builder.addCase(getAppoinmentDropdownAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAppoinmentDropdownAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAppoinmentList = action.payload.data;
      },
    );
    builder.addCase(
      getAppoinmentDropdownAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
        state.allAppoinmentList = [];
      },
    );
    // getAllFitnessAPI
    builder.addCase(getAllFitnessAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllFitnessAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allFitnessList = action.payload.data;
      },
    );
    builder.addCase(
      getAllFitnessAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
        state.allFitnessList = [];
      },
    );
    // getAyurvedaCenterList
    builder.addCase(getAyurvedsCenterAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAyurvedsCenterAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAyurvedsCenterList = action.payload.data;
      },
    );
    builder.addCase(
      getAyurvedsCenterAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //geteyecareNearClinicAPI
    builder.addCase(geteyecareNearClinicAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      geteyecareNearClinicAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.alleyecareNearClinic = action.payload.data;
      },
    );
    builder.addCase(
      geteyecareNearClinicAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    //getAllEyewearGlassessAPI
    builder.addCase(getAllEyewearGlassessAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAllEyewearGlassessAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allEyewearGlassessList = action.payload.data;
      },
    );
    builder.addCase(
      getAllEyewearGlassessAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //getneardentalcare
    builder.addCase(getdentalcareNearClinicAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getdentalcareNearClinicAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.alldentalcareNearClinic = action.payload.data;
      },
    );
    builder.addCase(
      getdentalcareNearClinicAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    // getAyurvedaDisease
    builder.addCase(getAyurvedsDiseaseAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAyurvedsDiseaseAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAyurvedsDiseaseList = action.payload.data;
      },
    );
    builder.addCase(
      getAyurvedsDiseaseAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    // getDomiciliarycareNurses
    builder.addCase(getAllDomiciliaryNursesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAllDomiciliaryNursesAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDomiciliaryNursesAPI = action.payload.data;
      },
    );
    builder.addCase(
      getAllDomiciliaryNursesAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    // getAllDomiciliaryEquipments
    builder.addCase(getAllDomiciliaryEquipmentsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAllDomiciliaryEquipmentsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDomiciliaryEquipmentsList = action.payload.data;
      },
    );
    builder.addCase(
      getAllDomiciliaryEquipmentsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    // getAyurvedaPanchakarmaList
    builder.addCase(getAyurvedsPanchakarmaAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAyurvedsPanchakarmaAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allPanchakarmaList = action.payload.data;
      },
    );
    builder.addCase(
      getAyurvedsPanchakarmaAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    // getAyurvedaNaturopathyList
    builder.addCase(getAyurvedsNaturopathyAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAyurvedsNaturopathyAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allNaturopathyList = action.payload.data;
      },
    );
    builder.addCase(
      getAyurvedsNaturopathyAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    builder.addCase(getWomensPackagesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getWomensPackagesAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allWomensPackagesList = action.payload.data;
      },
    );
    builder.addCase(
      getWomensPackagesAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //getVaccinationsAPI
    builder.addCase(getVaccinationsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getVaccinationsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allVaccinationsList = action.payload.data;
      },
    );
    builder.addCase(
      getVaccinationsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
    //getDomiciliaryVaccinationsAPI
    builder.addCase(getDomiciliaryVaccinationsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getDomiciliaryVaccinationsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDomiciliaryVaccinationsList = action.payload.data;
      },
    );
    builder.addCase(
      getDomiciliaryVaccinationsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //CreateTrackerDetailAPI
    builder.addCase(getCreateTrackerDetailAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getCreateTrackerDetailAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allVaccinationsList = action.payload.data;
      },
    );
    builder.addCase(
      getCreateTrackerDetailAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    // getDomiciliaryCareAPI
    builder.addCase(getDomiciliaryCareAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getDomiciliaryCareAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allDomiciliaryCareList = action.payload.data;
      },
    );
    builder.addCase(
      getDomiciliaryCareAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //getUniversalSearchData
    builder.addCase(getUniversalSearchData.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getUniversalSearchData.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.universalSearchResults = action.payload.data?.results || [];
      },
    );
    builder.addCase(
      getUniversalSearchData.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );

    //createUplodedImagedDetailsAPI
    builder.addCase(createUplodedImagedDetailsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createUplodedImagedDetailsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      },
    );
    builder.addCase(
      createUplodedImagedDetailsAPI.rejected,
      (state: CtmriState, action: any) => {
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      },
    );
  },
});

export const {
  setLoading,
  updateAllAmbulanceList,
  updateUniversalSearchResults,
} = ctmriSlice.actions;

export default ctmriSlice.reducer;
