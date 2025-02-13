import { configureStore } from "@reduxjs/toolkit";

// reducers
import appReducer from "../slices/app/appSlice";
import authReducer from "../slices/auth/authSlice";
import configReducer from "../slices/config/configSlice";
import labtestReducer from "../slices/labtest/labtestSlice";
import checkoutReducer from "../slices/checkout/checkoutSlice";
import hospitalReducer from "../slices/hospital/hospitalSlice";
import doctorReducer from "../slices/doctor/doctorSlice";
import bookingReviewReducer from "../slices/bookingScreen/bookingScreenSlice";
import ProfileReducer from "../slices/Profile/ProfileSlice";
import dashboardReducer from "../slices/dashboard/dashboardSlice";
import ctmriReducer from "../slices/ctmri/ctmriSlice";
import genericReducer from "../slices/generic/genericSlice";
import timeslotReducer from "../slices/timeslot/timeslotSlice";
import bloodBankReducer from "../slices/bloodbank/bloodBankSlice";
import chatRoomReducer from "../slices/chatroom/chatRoomSlice";
import hypersiteReducer from "../slices/hypersite/hypersiteSlice";
import FitnessReducer from "../slices/fitness/fitnessSlice"

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    config: configReducer,
    labtest: labtestReducer,
    hospital: hospitalReducer,
    checkout: checkoutReducer,
    doctor: doctorReducer,
    bookingReview: bookingReviewReducer,
    profile: ProfileReducer,
    dashboard: dashboardReducer,
    ctmri: ctmriReducer,
    generic: genericReducer,
    timeslot: timeslotReducer,
    bloodbank: bloodBankReducer,
    chatroom: chatRoomReducer,
    hypersite: hypersiteReducer,
    Fitness:FitnessReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
