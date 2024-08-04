// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import darkmodeReducer from './DarkmodeSlice';

const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
});

export default store;
