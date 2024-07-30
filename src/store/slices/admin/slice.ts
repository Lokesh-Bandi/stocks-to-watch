import {
  createSlice,
  isAsyncThunkAction,
  PayloadAction,
} from '@reduxjs/toolkit';

import { fetchAllStocksDataForTodayAction } from '../../apiActions/getActions/fetchAllStocksDataForTodayAction';

import { AdminType } from './types';

const initialState: AdminType = {
  actionResult: null,
  isLoading: false,
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
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllStocksDataForTodayAction.fulfilled,
      (state, action) => {
        state.actionResult = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      isAsyncThunkAction(fetchAllStocksDataForTodayAction),
      (state, action) => {
        state.isLoading = action.meta.requestStatus === 'pending';
      }
    );
  },
});

export const adminActions = adminSlice.actions;
