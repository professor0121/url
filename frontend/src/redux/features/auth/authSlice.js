// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./authThunks";

const initialState = {
  isAuth: false,
  user: null,
  token: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Register (optional)
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        // optionally auto-login
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuth = true;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
