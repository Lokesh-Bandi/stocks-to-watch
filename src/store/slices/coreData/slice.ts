import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit';

import { fetchCoreDataAction } from '../../apiActions/getActions/fetchCoreDataAction';
import { fetchSingleChartStockDataAction } from '../../apiActions/getActions/fetchSingleChartStockDataAction';

import { CoreDataType } from './types';

const initialState: CoreDataType = {
  stocks: null,
  singleChartStockData: null,
  isChartStockDataLoading: false,
  isLoading: false,
};
export const coreDataSlice = createSlice({
  name: 'coreData',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoreDataAction.fulfilled, (state, action) => {
      state.stocks = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSingleChartStockDataAction.fulfilled, (state, action) => {
      state.singleChartStockData = action.payload;
      state.isChartStockDataLoading = false;
    });
    builder.addMatcher(isAsyncThunkAction(fetchCoreDataAction), (state, action) => {
      state.isLoading = action.meta.requestStatus === 'pending';
    });
    builder.addMatcher(isAsyncThunkAction(fetchSingleChartStockDataAction), (state, action) => {
      state.isChartStockDataLoading = action.meta.requestStatus === 'pending';
    });
  },
});

export const coreDataActions = coreDataSlice.actions;
