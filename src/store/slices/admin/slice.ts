import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AdminType } from './types';

const initialState: AdminType = {
  actionResult: null,
};
export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    setActionResult: (
      state,
      action: PayloadAction<AdminType['actionResult']>
    ) => {
      state.actionResult = action.payload;
    },
  },
});

export const adminActions = adminSlice.actions;
