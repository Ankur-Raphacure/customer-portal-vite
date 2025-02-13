import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loginUser,
  validateOtpAPI,
  signUpUser,
  requestOtpAPI,
  checkSocialUserAPI,
  getSubDomainLoginDetails,
  getCityNameAPI,
} from "./authService";

export interface AuthState {
  loading: boolean;
  user: any;
  error: any;
  signUpResponse: any;
  showLoginModel: any;
  showAddressSearchModel: any;
  subDomainDetails: any;
  subDomainName: any;
  userCity: any;
  isRaphaPlus: any;
  rpSubDomainDetails: any;
  rpSubDomainName: any;
}
const userData: string | null = localStorage.getItem("user");
// const userCityV: string | null = localStorage.getItem("userCity");
// userCity: userCityV !== null && userCityV != "" ? JSON.parse(userCityV) : {},

const initialState: AuthState = {
  loading: false,
  user: userData !== null ? JSON.parse(userData) : {},
  userCity: {},
  error: null,
  signUpResponse: {},
  showLoginModel: false,
  showAddressSearchModel: false,
  subDomainDetails: {},
  subDomainName: null,
  isRaphaPlus: false,
  rpSubDomainDetails: {},
  rpSubDomainName: null,
};

export const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateUserDetails: (state: AuthState, action: PayloadAction<boolean>) => {
      state.user = action.payload;
      var userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
    updateErrorMessage: (state: AuthState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateShowLoginModel: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
      state.showLoginModel = action.payload;
    },
    updateShowAddressSearchModel: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
      state.showAddressSearchModel = action.payload;
    },

    updateSubDomainDetails: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
      localStorage.setItem(
        "user_subDomainDetails",
        JSON.stringify(action.payload)
      );
      state.subDomainDetails = action.payload;
    },
    updateSubDomainName: (state: AuthState, action: PayloadAction<boolean>) => {
      state.subDomainName = action.payload;
    },
    updateUserCity: (state: AuthState, action: PayloadAction<boolean>) => {
      state.userCity = action.payload;
      localStorage.setItem("userCity", JSON.stringify(action.payload));
    },
    updateIsRaphaPlus: (state: AuthState, action: PayloadAction<any>) => {
      state.isRaphaPlus = action.payload;
    },
    updateRpSubDomainDetails: (
      state: AuthState,
      action: PayloadAction<any>
    ) => {
      state.rpSubDomainDetails = action.payload;
    },
    updateRpSubDomainName: (state: AuthState, action: PayloadAction<any>) => {
      state.rpSubDomainName = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(loginUser.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        // console.log("action", action);
        state.user = action.payload;
        var userInfo = action.payload;

        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(loginUser.rejected, (state: AuthState, action: any) => {
      state.loading = false;
      // console.log("action", action);
      state.user = {};
      state.error = action.error?.message ?? "Something went wrong";
    });

    builder.addCase(signUpUser.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      signUpUser.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.signUpResponse = action.payload;
        state.user = action.payload;
        var userInfo = action.payload;

        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(signUpUser.rejected, (state: AuthState, action: any) => {
      console.log({ action });
      state.loading = false;
      state.signUpResponse = null;
      state.error = action.error?.message ?? "Something went wrong";
    });
    //requestOtpAPI
    // builder.addCase(requestOtpAPI.pending, (state: any) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(
    //   requestOtpAPI.fulfilled,
    //   (state: AuthState, action: PayloadAction<any>) => {
    //     state.error = null;
    //     state.loading = false;
    //   }
    // );
    // builder.addCase(requestOtpAPI.rejected, (state: AuthState, action: any) => {
    //   console.log({ action });
    //   state.loading = false;
    //   state.error = action.error?.message ?? "Something went wrong";
    // });

    //validateOtpAPI
    builder.addCase(validateOtpAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      validateOtpAPI.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        var userInfo = action.payload?.data;
        state.user = userInfo;
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(
      validateOtpAPI.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //checkSocialUserAPI
    builder.addCase(checkSocialUserAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      checkSocialUserAPI.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        var userInfo = action.payload?.data;
        state.user = userInfo;
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(
      checkSocialUserAPI.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //getSubDomainLoginDetails
    builder.addCase(getSubDomainLoginDetails.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getSubDomainLoginDetails.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log("action.payload", action.payload);
        // var userInfo = action.payload?.data;
        // state.user = userInfo;
        // localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(
      getSubDomainLoginDetails.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //getCityNameAPI
    builder.addCase(getCityNameAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCityNameAPI.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log("action?.payload", action?.payload);
        state.userCity = action?.payload?.city;
      }
    );
    builder.addCase(
      getCityNameAPI.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const {
  setLoading,
  updateSubDomainDetails,
  updateSubDomainName,
  updateUserDetails,
  updateErrorMessage,
  updateShowLoginModel,
  updateShowAddressSearchModel,
  updateIsRaphaPlus,
  updateRpSubDomainDetails,
  updateRpSubDomainName,
  updateUserCity,
} = authSlice.actions;

export default authSlice.reducer;
