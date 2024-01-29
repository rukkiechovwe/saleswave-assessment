"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import checkoutReducer from "./reducers/checkoutSlice";

const rootReducer = combineReducers({
  checkout: checkoutReducer,
  //add all reducers here
});

export default configureStore({
  reducer: rootReducer,
});
