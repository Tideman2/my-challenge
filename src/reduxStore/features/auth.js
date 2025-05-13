import { createSlice } from "@reduxjs/toolkit";
let authSlice = createSlice({
  name: `auth`,
  initialState: {
    user: {
      email: ``,
      password: ``,
    },
    isAutenticated: false,
  },
  reducers: {
    //reducer to update user Data from their input
    updateEmail: (state, action) => {
      let payLoad = action.payload;
      state.user.email = payLoad.email;
    },
    updatePassword: (state, action) => {
      let payLoad = action.payload;
      state.user.password = payLoad.password;
    },
    //reducer to autenticate user
    autenticate: (state) => {
      state.isAutenticated = true;
      localStorage.setItem("isAuthenticated", true);
    },
    //reducer to unAutenticate user
    unautenticate: (state) => {
      state.isAutenticated = false;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { updateEmail, updatePassword, autenticate, unautenticate } =
  authSlice.actions;
export default authSlice.reducer;
