import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllVendorDetailsAPI,
  getDoctorSlotsAPI,
} from "./bookingScreenService";

export interface bookingScreenState {
  loading: boolean;
  error: any;
  slots: any;
  timeSlotsObj: any;
  slotTabList: any;
  doctorDetails: any;
  hospitalDetails: any;
  BookingArray: any;
  selectedUserProfiles: any;
  selectedProfileIds: any;
  consultationType: any;
  idxforDoctorChange: any;
  categoryType: any;
  payloadFromMyPackage: any;
  expressBook: any;
  vendors: any;
}
const initialState: bookingScreenState = {
  loading: false,
  error: null,
  slots: null,
  timeSlotsObj: null,
  slotTabList: ["Preferred Slot 1", "Preferred Slot 2 (Optional)"],
  doctorDetails: null,
  hospitalDetails: null,
  BookingArray: [],
  selectedUserProfiles: null,
  selectedProfileIds: null,
  consultationType: null,
  idxforDoctorChange: null,
  categoryType: null,
  payloadFromMyPackage: null,
  expressBook: null,
  vendors: [],
};
const getDateStr = (dateValue: any) => {
  const year = dateValue.getFullYear();
  const month = dateValue.getMonth() + 1;
  const date = dateValue.getDate();
  const dateStr = `${year}-${month > 9 ? month : "0" + month}-${
    date > 9 ? date : "0" + date
  }`;
  return dateStr;
};
export const BookingReviewSlice = createSlice({
  name: "bookingReview",
  initialState,
  reducers: {
    setLoading: (state: bookingScreenState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: bookingScreenState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
    updateDoctordetails: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      console.log(
        "action.payload?.hospitalDetails",
        action.payload?.hospitalDetails
      );
      state.doctorDetails = { ...action.payload?.doctorDetails };
      state.hospitalDetails = { ...action.payload?.hospitalDetails };
      if (state.BookingArray && state.BookingArray.length) {
        let newBookingArr = [...state.BookingArray].filter((item: any) => {
          if (action.payload.categoryType === item.categoryType) {
            return true;
          } else {
            return false;
          }
        });
        if (
          newBookingArr &&
          newBookingArr.length === state.BookingArray.length
        ) {
          let selectedProfileIds = newBookingArr.map(
            (item: any) => item.patientsDetails.id
          );
          state.selectedProfileIds = selectedProfileIds;
          state.BookingArray = [...newBookingArr];
        }
      }
      if (action.payload.consultationType) {
        state.consultationType = action.payload.consultationType;
      } else {
        state.consultationType = "";
      }

      state.categoryType = action.payload.categoryType || null;
      state.expressBook = action.payload.expressBook || null;
      state.payloadFromMyPackage = null;
    },
    updateBookingSlot1: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].slot1 = {
        ...action.payload.slot1,
      };
    },
    updateBookingSlot2: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].slot2 = {
        ...action.payload.slot2,
      };
    },
    updateBookingDoctordetails: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].doctorDetails = {
        ...action.payload.doctorDetails,
      };
      state.BookingArray[action.payload.idx].hospitalDetails = {
        ...action.payload.hospitalDetails,
      };
      state.BookingArray[action.payload.idx].expressBook =
        action.payload.expressBook;
      if (action.payload.expressBook) {
        state.BookingArray[action.payload.idx].slot1 = {
          date: new Date(),
          dateStr: getDateStr(new Date()),
        };
      }
      if (action.payload.consultationType) {
        state.BookingArray[action.payload.idx].consultationType =
          action.payload.consultationType;
      } else {
        state.BookingArray[action.payload.idx].consultationType = "";
      }
      state.doctorDetails = null;
      state.hospitalDetails = null;
      state.consultationType = "";
      state.categoryType = null;
      state.expressBook = null;
      state.idxforDoctorChange = null;
    },
    updateBookingAddress: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.BookingArray[action.payload.idx].address = {
        ...action.payload.address,
      };
    },
    addBooking: (state: bookingScreenState, action: PayloadAction<any>) => {
      let slot1 = {
        date: new Date(),
        dateStr: getDateStr(new Date()),
      };
      if (action.payload.expressBook) {
        state.BookingArray.push({ ...action.payload, slot1: { ...slot1 } });
      } else {
        state.BookingArray.push({ ...action.payload });
      }
      let selectedProfileIds = state.BookingArray.map(
        (item: any) => item.patientsDetails.id
      );
      state.selectedProfileIds = selectedProfileIds;
    },
    updatePayloadFromMyPackage: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.payloadFromMyPackage = { ...action.payload };
    },
    addPackage: (state: bookingScreenState, action: PayloadAction<any>) => {
      let slot1 = {
        date: new Date(),
        dateStr: getDateStr(new Date()),
      };
      let newObject = {
        hospitalDetails: { ...action.payload.hospitalDetails },
        patientsDetails: { ...state.payloadFromMyPackage.patientsDetails },
        doctorDetails: { ...state.payloadFromMyPackage.doctorDetails },
        expressBook: action.payload.expressBook,
        slot1: action.payload.expressBook ? { ...slot1 } : null,
      };
      let patientDetailsIndex = -1;
      let labtestPackageExist = false;
      if (state.BookingArray && state.BookingArray.length) {
        state.BookingArray.forEach((item: any, index: any) => {
          if (item.patientsDetails.id === newObject.patientsDetails.id) {
            if (item.doctorDetails.tests.labtestType === "labpackage") {
              labtestPackageExist = true;
              patientDetailsIndex = index;
            }
          }
        });
      }
      if (state.idxforDoctorChange) {
        state.BookingArray[state.idxforDoctorChange].doctorDetails = {
          ...state.payloadFromMyPackage.doctorDetails,
        };
        state.BookingArray[state.idxforDoctorChange].hospitalDetails = {
          ...action.payload.hospitalDetails,
        };
        state.BookingArray[state.idxforDoctorChange].expressBook =
          action.payload.expressBook;
        if (action.payload.expressBook) {
          state.BookingArray[state.idxforDoctorChange].slot1 = { ...slot1 };
        }
      } else if (labtestPackageExist && patientDetailsIndex > -1) {
        state.BookingArray[patientDetailsIndex] = { ...newObject };
      } else {
        state.BookingArray.push({ ...newObject });
      }
      state.categoryType = action.payload.categoryType || null;
      state.expressBook = null;
      let selectedProfileIds = state.BookingArray.map(
        (item: any) => item.patientsDetails.id
      );
      state.selectedProfileIds = selectedProfileIds;
      state.payloadFromMyPackage = null;
      state.idxforDoctorChange = null;
    },
    removeBooking: (state: bookingScreenState, action: PayloadAction<any>) => {
      state.BookingArray.splice(action.payload, 1);
      let selectedProfileIds = state.BookingArray.map(
        (item: any) => item.patientsDetails.id
      );
      if (state.BookingArray && state.BookingArray.length === 0) {
        state.selectedProfileIds = [];
      } else {
        state.selectedProfileIds = [...selectedProfileIds];
      }
    },
    resetBookingArray: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.selectedProfileIds = [];
      state.BookingArray = [];
      state.payloadFromMyPackage = null;
      state.idxforDoctorChange = null;
      state.doctorDetails = null;
      state.hospitalDetails = null;
      state.consultationType = "";
      state.categoryType = null;
      state.expressBook = null;
    },
    updateIdxforDoctorChange: (
      state: bookingScreenState,
      action: PayloadAction<any>
    ) => {
      state.idxforDoctorChange = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getDoctorSlotsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getDoctorSlotsAPI.fulfilled,
      (state: bookingScreenState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        let timeSlotsObj1: {
          morning: Array<object>;
          afternoon: Array<object>;
          evening: Array<object>;
          night: Array<object>;
        } = {
          morning: [],
          afternoon: [],
          evening: [],
          night: [],
        };
        for (
          let idx = 0;
          idx <= action.payload?.data?.timeslots.length;
          idx++
        ) {
          let timeobjArr =
            action.payload?.data?.timeslots[idx]?.start_time?.split(":");
          if (timeobjArr && timeobjArr.length) {
            let timeslots = action.payload.data.timeslots[idx];
            if (timeobjArr[0] >= 5 && timeobjArr[0] <= 12) {
              timeSlotsObj1.morning.push(timeslots);
            } else if (timeobjArr[0] > 12 && timeobjArr[0] <= 17) {
              timeSlotsObj1.afternoon.push(timeslots);
            } else if (timeobjArr[0] > 17 && timeobjArr[0] <= 21) {
              timeSlotsObj1.evening.push(timeslots);
            } else {
              timeSlotsObj1.night.push(timeslots);
            }
          }
        }
        state.slots = action.payload?.data;
        state.timeSlotsObj = { ...timeSlotsObj1 };
      }
    );
    builder.addCase(
      getDoctorSlotsAPI.rejected,
      (state: bookingScreenState, action: any) => {
        state.loading = false;
        state.slots = null;
      }
    );

    //
    builder.addCase(
      getAllVendorDetailsAPI.pending,
      (state: bookingScreenState) => {
        state.loading = true;
        state.error = null;
        state.vendors = [];
      }
    );
    builder.addCase(
      getAllVendorDetailsAPI.fulfilled,
      (state: bookingScreenState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendors = action.payload.data?.vendors;
      }
    );
    builder.addCase(
      getAllVendorDetailsAPI.rejected,
      (state: bookingScreenState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const {
  setLoading,
  updateErrorMessage,
  updateDoctordetails,
  updateBookingSlot1,
  updateBookingSlot2,
  updateBookingDoctordetails,
  addBooking,
  removeBooking,
  updateBookingAddress,
  updateIdxforDoctorChange,
  addPackage,
  updatePayloadFromMyPackage,
  resetBookingArray,
} = BookingReviewSlice.actions;

export default BookingReviewSlice.reducer;
