import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth";
import businessSlice from "./features/business";
import transactionSlice from "./features/transaction";

const store = configureStore({
  reducer: {
     // Add slices here
     auth: authReducer,
     businesseReducer: businessSlice.reducer,
     transactionReducer: transactionSlice.reducer
  },
});

export default store;
