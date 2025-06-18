import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/axiosInstance.js';

export const createShortUrl = createAsyncThunk(
  'url/createShortUrl',
  async (originalUrl, { rejectWithValue }) => {
    console.log('👉 createShortUrl thunk called with:', originalUrl); // ADD THIS

    try {
      const res = await axios.post('/api/url/create', { url: originalUrl });
         return {
        originalUrl,
        shortUrl: res.data, // now payload is a full object ✅
      };
     
    } catch (err) {
      console.error('❌ API Error:', err); // ADD THIS
      return rejectWithValue(err.response?.data?.message || 'Shortening failed');
    }
  }
);

export const redirectShortUrl = createAsyncThunk(
  'url/redirectShortUrl', // ✅ Correct action name
  async (shortId, { rejectWithValue }) => {
    console.log('👉 redirectShortUrl thunk called with:', shortId);

    try {
      const res = await axios.get(`/${shortId}`); // ✅ Proper GET request

      return {
        shortUrl: shortId,
        originalUrl: res.data.originalUrl, // adjust based on backend response
      };
    } catch (err) {
      console.error('❌ API Error:', err);
      return rejectWithValue(err.response?.data?.message || 'Redirection failed');
    }
  }
);
