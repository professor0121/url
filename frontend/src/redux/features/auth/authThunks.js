// src/features/auth/authThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../api/axiosInstance.js";

// LOGIN THUNK
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", credentials); // 🔄 Adjust endpoint
      console.log(res)
      return res.data; // assuming { user, token }
    } catch (err) {
      console.log(err)
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
      const res = await axios.post("/api/auth/register", formData); // 🔄 Adjust endpoint
      console.log("resposnse",res.data)
      return res.data;
    } catch (err) {
      const message =
        err.response?.data?.message || "Registration failed.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// GET profile (auth/me)
export const getProfileThunk = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/auth/me", {
        withCredentials: true,
      });
      return res.data.user; // or just `res.data` depending on your backend
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to fetch profile.";
      return thunkAPI.rejectWithValue(message);
    }
  }
);
