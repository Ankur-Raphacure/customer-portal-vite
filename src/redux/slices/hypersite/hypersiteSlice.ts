import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllFrontendServices, getAllHyperSites } from "./hypersiteService";

export interface HypersiteState {
  loading: boolean;
  error: any;
  services: {};
  sites: any;
} 

const initialState: HypersiteState = {
  loading: false,
  error: null,
  services: [],
  sites: [],
};

export const hypersiteSlice = createSlice({
  name: "hypersite",
  initialState,
  reducers: {
    setLoading: (state: HypersiteState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: HypersiteState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    // Services Reducers
    builder.addCase(getAllFrontendServices.pending, (state: HypersiteState) => {
      state.loading = true;
      state.error = null;
      state.services = {};
    });
    builder.addCase(
      getAllFrontendServices.fulfilled,
      (state: HypersiteState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.services = action.payload.data;
      }
    );
    builder.addCase(
      getAllFrontendServices.rejected,
      (state: HypersiteState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    // HyperSite Reducers
    builder.addCase(getAllHyperSites.pending, (state: HypersiteState) => {
      state.loading = true;
      state.error = null;
      state.sites = [];
    });
    builder.addCase(
      getAllHyperSites.fulfilled,
      (state: HypersiteState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.sites = action.payload.data;
      }
    );
    builder.addCase(
      getAllHyperSites.rejected,
      (state: HypersiteState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = hypersiteSlice.actions;

export default hypersiteSlice.reducer;
