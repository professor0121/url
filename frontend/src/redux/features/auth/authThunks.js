// src/features/auth/authThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axiosInstance.js";

// LOGIN THUNK
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials); // 🔄 Adjust endpoint
      return res.data; // assuming { user, token }
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Try again.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// REGISTER THUNK (optional)
export const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", formData); // 🔄 Adjust endpoint
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
