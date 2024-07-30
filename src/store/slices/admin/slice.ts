import {
  createSlice,
  isAsyncThunkAction,
  PayloadAction,
} from '@reduxjs/toolkit';

import { fetchAllStocksDataForTodayAction } from '../../apiActions/getActions/fetchAllStocksDataForTodayAction';
import { fetchOneStocksDataForTodayAction } from '../../apiActions/getActions/fetchOneStocksDataForTodayAction';

import { AdminType } from './types';

const initialState: AdminType = {
  actionResult: null,
  isLoading: false,
  oneStockDataForToday: null,
  stockExchangeCodeToSearch: null,
};
export const adminSlice = createSlice({
  name: 'admin',
  initialState: initialState,
  reducers: {
    setStockExchangeCodeToSearch: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.stockExchangeCodeToSearch = action.payload;
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
    builder.addCase(
      fetchOneStocksDataForTodayAction.fulfilled,
      (state, action) => {
        state.oneStockDataForToday = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      isAsyncThunkAction(
        fetchAllStocksDataForTodayAction,
        fetchOneStocksDataForTodayAction
      ),
      (state, action) => {
        state.isLoading = action.meta.requestStatus === 'pending';
      }
    );
  },
});

export const adminActions = adminSlice.actions;
