import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getUserWithDependentsAPI,
  createNewDependentAPI,
  getMyAddressQueryAPI,
  getNearbyVendorsAPI,
} from "./ProfileService";

export interface ProfileState {
  loading: boolean;
  error: any;
  showBackButton: boolean;
  ProfileData: any;
  dependentsData: any;
  isNelyAdedUser: boolean;
  userDependents: any;
  dependentsUserData: any;
  userAddress: any;
  selectedCurrentAddress: any;
  nearbyVendors: any;
}

const userData: string | null = localStorage.getItem("userSelectedAddress");

const initialState: ProfileState = {
  loading: false,
  showBackButton: false,
  ProfileData: null,
  error: null,
  dependentsData: [],
  isNelyAdedUser: false,
  userDependents: [],
  dependentsUserData: [],
  userAddress: [],
  selectedCurrentAddress:
    userData !== null
      ? (() => {
          try {
            return JSON.parse(userData);
          } catch {
            return {};
          }
        })()
      : {},
  nearbyVendors: [],
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setLoading: (state: ProfileState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setNelyAdedUserFlg: (
      state: ProfileState,
      action: PayloadAction<boolean>,
    ) => {
      state.isNelyAdedUser = action.payload;
    },
    updateSelectedUserAddress: (
      state: ProfileState,
      action: PayloadAction<any>,
    ) => {
      localStorage.setItem(
        "userSelectedAddress",
        JSON.stringify(action.payload),
      );
      state.selectedCurrentAddress = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    //getHealthCategoriesAPI
    builder.addCase(getUserWithDependentsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getUserWithDependentsAPI.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        let dependentsData = [] as any;
        const prevList = action.payload?.data?.me?.dependents || ([] as any);
        if (prevList) {
          dependentsData = [...prevList];
          state.dependentsUserData = prevList;
          dependentsData.unshift(action.payload?.data?.me);
        }
        state.error = null;
        state.loading = false;
        state.ProfileData = action.payload?.data?.me;
        state.dependentsData = [...dependentsData];
        state.userDependents = [...dependentsData];

        state.isNelyAdedUser = false;
      },
    );
    builder.addCase(
      getUserWithDependentsAPI.rejected,
      (state: ProfileState, action: any) => {
        state.loading = false;
        state.ProfileData = null;
      },
    );
    builder.addCase(createNewDependentAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createNewDependentAPI.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        let dependentsData = [...action.payload?.data?.user?.dependents];
        state.dependentsUserData = action.payload?.data?.me?.dependents;
        dependentsData.unshift(action.payload?.data?.user);
        state.error = null;
        state.loading = false;
        state.ProfileData = action.payload?.data?.user;
        state.dependentsData = [...dependentsData];
        state.userDependents = [...dependentsData];

        state.isNelyAdedUser = true;
      },
    );
    builder.addCase(
      createNewDependentAPI.rejected,
      (state: ProfileState, action: any) => {
        state.loading = false;
        state.ProfileData = null;
      },
    );
    //getMyAddressQueryAPI
    builder.addCase(getMyAddressQueryAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getMyAddressQueryAPI.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.userAddress = action.payload?.data?.addresses;
      },
    );
    builder.addCase(
      getMyAddressQueryAPI.rejected,
      (state: ProfileState, action: any) => {
        state.loading = false;
        state.userAddress = [];
      },
    );

    //getNearbyVendorsAPI
    builder.addCase(getNearbyVendorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getNearbyVendorsAPI.fulfilled,
      (state: ProfileState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.nearbyVendors = action.payload?.data;
      },
    );
    builder.addCase(
      getNearbyVendorsAPI.rejected,
      (state: ProfileState, action: any) => {
        state.loading = false;
        state.nearbyVendors = [];
      },
    );
  },
});

export const { setLoading, setNelyAdedUserFlg, updateSelectedUserAddress } =
  ProfileSlice.actions;

export default ProfileSlice.reducer;
