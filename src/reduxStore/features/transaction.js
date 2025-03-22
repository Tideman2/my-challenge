import { createSlice } from "@reduxjs/toolkit";

let transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transctionShowDetails: false,
  },
  reducers: {
    transctionShowDetailsActive: (state) => {
      state.transctionShowDetails = true;
    },
    transctionShowDetailsInActive: (state) => {
      state.transctionShowDetails = false;
    },
  },
});

export const { transctionShowDetailsActive, transctionShowDetailsInActive } =
  transactionSlice.actions;
export default transactionSlice