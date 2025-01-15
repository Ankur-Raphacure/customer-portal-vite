import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { patch, put } from "../../../library/Requests/helpers";

export const getDoctorSlotsAPI = createAsyncThunk(
  "bookingScreen/getDoctorSlotsAPI",
  async (obj: any) => {
    const urlN = obj?.doctorId ? "doctor" : "vendor";

    const objbody =
      urlN === "doctor"
        ? {
            date: obj?.date,
            doctorId: obj?.doctorId,
            test_code: obj?.test_code,
            vendorId: obj?.vendorId,
          }
        : {
            date: obj?.date,
            vendorId: obj?.vendorId,
            test_code: obj?.test_code,
          };
    return await patch(`${SERVER_IP}/api/v1/timeslot/${urlN}`, objbody);
  }
);
