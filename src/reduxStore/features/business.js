import { createSlice } from "@reduxjs/toolkit";

//stateSlice to toggle dashBoard business views state

let businessSlice = createSlice({
  name: "business",
  initialState: {
    firstView: false,
    withdrawDetailsView: false,
    moreDetailsView: false,
    moreBusinessView: false,
    generateApiView: false
  },
  reducers: {
    //reducer for first view
    firstViewActive: (state) => {
      state.firstView = true;
    },
    firstViewInActive: (state) => {
      state.firstView = false;
    },
    //reucer for withdraw view
    withdrawDetailsViewActive: (state) => {
      state.withdrawDetailsView = true;
    },
    withdrawDetailsViewInActive: (state) => {
      state.withdrawDetailsView = false;
    },
    //reducer for moreDetailsView
    moreDetailsViewActive: (state) => {
      state.moreDetailsView = true;
    },
    moreDetailsViewInActive: (state) => {
      state.moreDetailsView = false;
    },
     //reducer for moreBusinesseView
     moreBusinessViewActive: (state) => {
      state.moreBusinessView = true;
    },
    moreBusinessViewInActive: (state) => {
      state.moreBusinessView = false;
    },
     //reducer for moreBusinesseView
     moreBusinessViewActive: (state) => {
      state.moreBusinessView = true;
    },
    moreBusinessViewInActive: (state) => {
      state.moreBusinessView = false;
    },
    //reducer for moreBusinesseView
    generateApiViewActive: (state) => {
      state.generateApiView = true;
    },
    generateApiViewInActive: (state) => {
      state.generateApiView = false;
    },
  },
});

export const {
  moreDetailsViewActive,
  moreDetailsViewInActive,
  withdrawDetailsViewActive,
  withdrawDetailsViewInActive,
  firstViewActive,
  firstViewInActive,
  moreBusinessViewActive,
  moreBusinessViewInActive,
  generateApiViewActive,
  generateApiViewInActive
} = businessSlice.actions;
export default businessSlice;
