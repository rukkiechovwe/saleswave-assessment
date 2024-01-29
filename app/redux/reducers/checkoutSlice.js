"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal_information: {
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,

    password: null,
    confirm_password: null,
  },
  shipping_address: {
    street: null,
    apartment_floor: null,
    town: null,
    state: null,
    additional_address: null,
  },
  order_summary: {
    sub_total: "",
    shipping_fee: "",
    total: "",
    estimated_vat: "",
  },
  cart: [
    {
      product_brand: "ADIDAS",
      product_name: "Quilted Satin Jacket",
      product_quantity: 1,
      product_price: "$24.99",
      product_description: "This item cannot be changed or returned",
      product_image: "",
    },
    {
      product_brand: "ADIDAS",
      product_name: "GP1 Shooter USB Gamepad",
      product_quantity: 1,
      product_price: "$24.99",
      product_description: "This item cannot be changed or returned",
      product_image: "",
    },
  ],
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    SET_PERSONAL_INFORMATION: (state, action) => {
      console.log(action.payload);
      state.personal_information = action.payload;
      console.log(state);
    },
    SET_SHIPPING_ADDRESS: (state, action) => {
      state.shipping_address = action.payload;
    },
  },
});

export const { SET_PERSONAL_INFORMATION, SET_SHIPPING_ADDRESS } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
