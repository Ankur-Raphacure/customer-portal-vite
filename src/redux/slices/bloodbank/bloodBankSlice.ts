import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBloodBankVendorsAPI } from "./bloodBankService";

export interface BloodBankState {
  loading: boolean;
  error: any;
  vendors: {};
}

const initialState: BloodBankState = {
  loading: false,
  error: null,
  vendors: [],
};

export const bloodBankSlice = createSlice({
  name: "bloodBank",
  initialState,
  reducers: {
    setLoading: (state: BloodBankState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: BloodBankState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getBloodBankVendorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.vendors = null;
    });
    builder.addCase(
      getBloodBankVendorsAPI.fulfilled,
      (state: BloodBankState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendors = action.payload.data;
      }
    );
    builder.addCase(
      getBloodBankVendorsAPI.rejected,
      (state: BloodBankState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = bloodBankSlice.actions;

export default bloodBankSlice.reducer;
