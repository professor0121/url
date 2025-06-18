// redux/rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import urlReducer from './features/url/urlSlice';

const rootReducer = combineReducers({
  url: urlReducer,
});

export default rootReducer;
