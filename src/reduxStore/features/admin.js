
import { createSlice } from "@reduxjs/toolkit";

let admin = createSlice({
    name: "admin",
    initialState: {
        emailAddress: "admin@gmail.com",
        password: "12345678",
        isLoggedIn: false
    },
    reducers: {
        logIn(state) {
          state.isLoggedIn = true;
        }
      }
})

export const { logIn } = admin.actions;
export default admin.reducer

