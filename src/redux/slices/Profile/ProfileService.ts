import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "../../../config";
import { patch, post, put, del } from "../../../library/Requests/helpers";

import {
  userDependentsQuery,
  myAddressQuery,
} from "../../../Scenes/graphqlConfig";

export const getUserWithDependentsAPI = createAsyncThunk(
  "Profile/getUserWithDependents",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(userDependentsQuery)),
);
export const createNewDependentAPI = createAsyncThunk(
  "Profile/createNewDependent",
  async (newUser: any) =>
    await post(
      `${SERVER_IP}/api/v1/user/dependent`,
      JSON.stringify({ user: newUser }),
    ),
);
export const editDependentAPI = createAsyncThunk(
  "Profile/editDependentAPI",
  async (newUser: any) =>
    await put(
      `${SERVER_IP}/api/v1/user/${newUser?.id}`,
      JSON.stringify({ user: newUser?.user }),
    ),
);

export const createNewEmpanelAPI = createAsyncThunk(
  "Profile/createNewEmpanel",
  async (newUser: any) =>
    await post(
      `${SERVER_IP}/api/v1/empanel`,
      JSON.stringify({ empanel: newUser }),
    ),
);
export const editEmpanelAPI = createAsyncThunk(
  "Profile/editEmpanelAPI",
  async (newUser: any) =>
    await put(
      `${SERVER_IP}/api/v1/empanel/${newUser?.id}`,
      JSON.stringify({ empanel: newUser?.user }),
    ),
);

// export const getUserDependentsAPI = createAsyncThunk(
//   "auth/getUserDependentsAPI",
//   async () => await post(`${SERVER_IP}/graphql`, JSON.stringify(userDependentsQuery))
// );
export const getMyAddressQueryAPI = createAsyncThunk(
  "auth/getMyAddressQueryAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(myAddressQuery)),
);

export const addNewAddressAPI = createAsyncThunk(
  "auth/addNewAddressAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/user/address`, body),
);
export const editNewAddressAPI = createAsyncThunk(
  "auth/editNewAddressAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/user/address/${body?.id}`,
      JSON.stringify({ address: body?.user }),
    ),
);
export const defaultAddressAPI = createAsyncThunk(
  "auth/defaultAddressAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/user/defaultAddress/${body?.id}`),
);
export const deleteAddressAPI = createAsyncThunk(
  "auth/deleteAddressAPI",
  async (body: any) =>
    await del(`${SERVER_IP}/api/v1/user/deleteAddress/${body?.id}`),
);

export const getPrescriptionSignedUrl = createAsyncThunk(
  "Profile/getPrescriptionSignedUrl",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/attachment/presign`, body),
);

export const getS3PresignedUrl = createAsyncThunk(
  "Profile/getS3PresignedUrl",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/config/presign`, body),
);

export const getNearbyVendorsAPI = createAsyncThunk(
  "Profile/getNearbyVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/vendor/get-nearest`, body),
);
