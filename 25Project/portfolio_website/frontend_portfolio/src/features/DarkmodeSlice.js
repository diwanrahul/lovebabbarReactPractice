// src/features/DarkmodeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const darkmodeSlice = createSlice({
  name: 'darkmode',
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
