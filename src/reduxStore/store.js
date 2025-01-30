import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";

const store = configureStore({
  reducer: {
     // Add slices here
     auth: authReducer
  },
});

export default store;
