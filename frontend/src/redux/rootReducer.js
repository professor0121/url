// redux/rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import urlReducer from './features/url/urlSlice';
import authReducer from './features/auth/authSlice';

const rootReducer = combineReducers({
  url: urlReducer,
  auth: authReducer,
});

export default rootReducer;
