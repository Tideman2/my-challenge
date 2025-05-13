import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import businessSlice from "./features/business";
import transactionSlice from "./features/transaction";
import admin from "./features/admin";

const store = configureStore({
  reducer: {
    // Add slices here
    auth: authReducer,
    businesseReducer: businessSlice.reducer,
    transactionReducer: transactionSlice.reducer,
    adminState: admin,
  },
});

export default store;
