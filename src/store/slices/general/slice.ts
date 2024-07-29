import { createSlice } from '@reduxjs/toolkit';

import { GeneralTypes } from './types';

const initialState: GeneralTypes = {
  isMenuOpen: false,
  isAdmin: false,
};
export const generalSlice = createSlice({
  name: 'general',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setIsAdmin: (state) => {
      state.isAdmin = true;
    },
  },
});

export const generalActions = generalSlice.actions;
