import { createSlice } from '@reduxjs/toolkit';
import { createShortUrl, redirectShortUrl } from './urlThunks';

const initialState = {
  urls: [],
  loading: false,
  error: null,
};

const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Short URL Cases
      .addCase(createShortUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createShortUrl.fulfilled, (state, action) => {
        state.loading = false;
        if (typeof action.payload === 'object' && action.payload.originalUrl) {
          state.urls.push(action.payload);
        } else {
          state.error = 'Invalid response received.';
        }
      })
      .addCase(createShortUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong while shortening URL.';
      })

      // Redirect Short URL Cases
      .addCase(redirectShortUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(redirectShortUrl.fulfilled, (state, action) => {
        state.loading = false;
        const exists = state.urls.find(
          (url) => url.shortUrl === action.payload.shortUrl
        );
        if (!exists) {
          state.urls.push(action.payload);
        }
      })
      .addCase(redirectShortUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong during redirection.';
      });
  },
});

export const { clearError } = urlSlice.actions;
export default urlSlice.reducer;
