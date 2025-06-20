// src/utils/checkAuth.js
import axios from "../api/axiosInstance";

// Utility function to check if user is authenticated via /auth/me
export const checkAuth = async () => {
  try {
    const res = await axios.get("/auth/me", { withCredentials: true });
    return {
      authenticated: true,
      user: res.data.user || null,
    };
  } catch (error) {
    return {
      authenticated: false,
      error: error.response?.data?.message || "Not authenticated",
    };
  }
};
