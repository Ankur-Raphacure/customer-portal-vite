import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createBookingAPI,
  getCartItemsAPI,
  handleGetPriceAPI,
} from "./checkoutService";

export interface CheckoutState {
  loading: boolean;
  error: any;
  cartItems: any;
  bookingInfo: any;
  nitifySuccessMessage: any;
  checkoutSelectedUser: any;
  checkoutSelectedAddress: any;
  priceinfo: any;
}
const raphaCartData: string | null = localStorage.getItem("raphaCart");
const initialState: CheckoutState = {
  loading: false,
  error: null,
  nitifySuccessMessage: null as any,
  // cartItems: raphaCartData !== null ? JSON.parse(raphaCartData) : [],
  cartItems: [],
  bookingInfo: {},
  checkoutSelectedUser: {},
  checkoutSelectedAddress: {},
  priceinfo: [],
};

export const checkoutSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: CheckoutState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: CheckoutState,
      action: PayloadAction<boolean>,
    ) => {
      state.error = action.payload;
    },
    updateNitifySuccessMessage: (
      state: CheckoutState,
      action: PayloadAction<any>,
    ) => {
      state.nitifySuccessMessage = action.payload;
    },
    updateCartItems: (state: any, action: any) => {
      state.cartItems = action.payload;
      // localStorage.setItem("raphaCart", JSON.stringify(action.payload));
    },
    updateCheckoutSelectedUser: (state: any, action: any) => {
      state.checkoutSelectedUser = action.payload;
    },
    updateCheckoutSelectedAddress: (state: any, action: any) => {
      state.checkoutSelectedAddress = action.payload;
    },

    updateItemQuantity: (state: CheckoutState, action: any) => {
      // const citem= action.payload;
      // const raphaCartL = localStorage.getItem("raphaCart");
      // const prevItems = raphaCartL ? JSON.parse(raphaCartL) : [];
      // const index = prevItems.findIndex((item: any) => item?.service_code === citem.service_code);
      // if (index > -1) {
      //   state.nitifySuccessMessage = `Successfully updated the quantity.`;
      //   prevItems[index].count = citem.count;
      // }
      // localStorage.setItem("raphaCart", JSON.stringify(prevItems));
      // state.cartItems = prevItems;
    },
    handleRemoveItem: (state: CheckoutState, action: any) => {
      // const citem= action.payload;
      // const raphaCartL = localStorage.getItem("raphaCart");
      // const prevItems = raphaCartL ? JSON.parse(raphaCartL) : [];
      // const index = prevItems.findIndex((item: any) => item?.service_code === citem.service_code);
      // if (index > -1) {
      //   state.nitifySuccessMessage = `${citem?.service_name} successfully removed from cart.`;
      //   prevItems.splice(index, 1);
      // }
      // localStorage.setItem("raphaCart", JSON.stringify(prevItems));
      // state.cartItems = prevItems;
    },
    handleAddToCart: (state: CheckoutState, action: any) => {
      // const citem= action.payload;
      //   const raphaCartL = localStorage.getItem("raphaCart");
      //   const prevItems = raphaCartL ? JSON.parse(raphaCartL) : [];
      //   const index = prevItems.findIndex((item: any) => item?.service_code === citem.service_code);
      //   if (index > -1) {
      //     prevItems[index].count = prevItems[index].count+1;
      //     state.nitifySuccessMessage = "Successfully Updated Cart."
      //     // preV.splice(index, 1);
      //   }else{
      //     prevItems.push({...citem, count:1});
      //     state.nitifySuccessMessage = "Successfully added to Cart."
      //   }
      //   localStorage.setItem("raphaCart", JSON.stringify(prevItems));
      //   state.cartItems = prevItems;
    },
    handleAddToCartDoctor: (state: CheckoutState, action: any) => {
      // const citems = action.payload;
      // console.log("citems", citems);
      // console.log("action.payload", action.payload);
      // const raphaCartL = localStorage.getItem("raphaCart");
      // const prevItems = raphaCartL ? JSON.parse(raphaCartL) : [];
      // console.log("citems", prevItems);
      // const newListItems = [...prevItems, ...citems]
      // state.nitifySuccessMessage = "Successfully added to Cart."
      // localStorage.setItem("raphaCart", JSON.stringify(newListItems));
      // state.cartItems = newListItems;
    },
  },
  extraReducers: (builder: any) => {
    // createBookingAPI
    builder.addCase(createBookingAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createBookingAPI.fulfilled,
      (state: CheckoutState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.bookingInfo = action.payload?.data;
      },
    );
    builder.addCase(
      createBookingAPI.rejected,
      (state: CheckoutState, action: any) => {
        state.loading = false;
        state.bookingInfo = {};
      },
    );
    //getCartItemsAPI
    builder.addCase(getCartItemsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCartItemsAPI.fulfilled,
      (state: CheckoutState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.cartItems = action.payload?.data;
      },
    );
    builder.addCase(
      getCartItemsAPI.rejected,
      (state: CheckoutState, action: any) => {
        state.loading = false;
        state.bookingInfo = {};
      },
    );
    builder.addCase(handleGetPriceAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      handleGetPriceAPI.fulfilled,
      (state: CheckoutState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.priceinfo =
          (action.payload?.data && action.payload?.data.services) || [];
      },
    );
    builder.addCase(
      handleGetPriceAPI.rejected,
      (state: CheckoutState, action: any) => {
        state.loading = false;
        state.priceinfo = [];
      },
    );
  },
});

export const {
  setLoading,
  updateCartItems,
  handleAddToCartDoctor,
  updateErrorMessage,
  handleAddToCart,
  updateNitifySuccessMessage,
  updateItemQuantity,
  handleRemoveItem,
  updateCheckoutSelectedUser,
  updateCheckoutSelectedAddress,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
