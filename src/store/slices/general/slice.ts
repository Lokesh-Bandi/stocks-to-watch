import { createSlice } from '@reduxjs/toolkit';

import { GeneralTypes } from './types';

const initialState: GeneralTypes = {
  isMenuOpen: false,
};
export const generalSlice = createSlice({
  name: 'general',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const generalActions = generalSlice.actions;
