import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit';

import { fetchKeyStocksAction } from '../../apiActions/getActions/fetchKeyStocksAction';
import { fetchMomentumStocksAction } from '../../apiActions/getActions/fetchMomentumStocksAction';

import { TechIndType } from './types';

const initialState: TechIndType = {
  technicalIndicators: {
    rsi: null,
    mfi: null,
    bollingerbands: null,
  },
  momentumStocks: null,
  lastUpdated: '',
  isLoading: false,
};
export const technicalIndicatorsSlice = createSlice({
  name: 'technicalIndicators',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKeyStocksAction.fulfilled, (state, action) => {
      const { rsi, mfi, bollingerbands, lastUpdated } = action.payload;
      state.technicalIndicators.rsi = rsi;
      state.technicalIndicators.mfi = mfi;
      state.technicalIndicators.bollingerbands = bollingerbands;
      state.lastUpdated = lastUpdated;
      state.isLoading = false;
    });
    builder.addCase(fetchMomentumStocksAction.fulfilled, (state, action) => {
      state.momentumStocks = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(isAsyncThunkAction(fetchKeyStocksAction, fetchMomentumStocksAction), (state, action) => {
      state.isLoading = action.meta.requestStatus === 'pending';
    });
  },
});

export const technicalIndicatorsActions = technicalIndicatorsSlice.actions;
