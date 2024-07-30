import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ALERT_TYPES } from '../../../alerts/AlertAction';

import { GeneralTypes } from './types';

const initialState: GeneralTypes = {
  isMenuOpen: false,
  isAdmin: false,
  alertType: null,
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
    setAlertType: (state, action: PayloadAction<ALERT_TYPES>) => {
      state.alertType = action.payload;
    },
    resetAlertType: (state) => {
      state.alertType = null;
    },
  },
});

export const generalActions = generalSlice.actions;
