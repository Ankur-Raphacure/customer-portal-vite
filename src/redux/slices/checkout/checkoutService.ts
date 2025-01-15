import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP,  } from "../../../config";
import { post, put , get, del, patch} from "../../../library/Requests/helpers";


export const createBookingAPI = createAsyncThunk(
  "checkout/createBookingAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/booking`,body)
);
export const createCartBookingAPI = createAsyncThunk(
  "checkout/createCartBookingAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/cart/book`,body)
);

export const updateOrderDetailsAPI = createAsyncThunk(
  "checkout/updateOrderDetailsAPI",
  async (body: any) => await put(`${SERVER_IP}/api/v1/payment/${body?.id}`,body?.body)
);
export const handleAddToCartAPI = createAsyncThunk(
  "checkout/handleAddToCartAPI",
  async (body: any) => {
    console.log("addtocartbody : ", body);
    return await post(`${SERVER_IP}/api/v1/cart`, body);
  }
);
export const handleGetPriceAPI = createAsyncThunk(
  "checkout/handleGetPriceAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/service/detail`,body)
);
export const getCartItemsAPI = createAsyncThunk(
  "checkout/getCartItemsAPI",
  async () => await get(`${SERVER_IP}/api/v1/cart`)
);

export const deleteCartItemAPI = createAsyncThunk(
  "checkout/deleteCartItemAPI",
  async (id: any) => await del(`${SERVER_IP}/api/v1/cart/${id}`)
);

export const updateWalletCartAPI = createAsyncThunk(
  "checkout/updateWalletCartAPI",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/cart/wallet`, body)
);

