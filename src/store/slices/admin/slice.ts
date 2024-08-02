import {
  createSlice,
  isAsyncThunkAction,
  PayloadAction,
} from '@reduxjs/toolkit';

import { fetchAllStocksDataForTodayAction } from '../../apiActions/getActions/fetchAllStocksDataForTodayAction';
import { fetchOneStocksDataForTodayAction } from '../../apiActions/getActions/fetchOneStocksDataForTodayAction';
import { udpateLastNDaysFromTodayForAllAction } from '../../apiActions/postActions/udpateLastNDaysFromTodayForAllAction';
import { udpateLastNDaysFromTodayForOneAction } from '../../apiActions/postActions/udpateLastNDaysFromTodayForOneAction';
import { updatehHistoricalStockDataForAllAction } from '../../apiActions/postActions/updatehHistoricalStockDataForAllAction';
import { updateHistoricalStockDataForOneAction } from '../../apiActions/postActions/updateHistoricalStockDataForOneAction';
import { updateOneInstrumentalCodeAction } from '../../apiActions/postActions/updateOneInstrumentalCodeAction';

import { AdminType } from './types';

const initialState: AdminType = {
  actionResult: null,
  isLoading: false,
  oneStockDataForToday: null,
  stockExchangeCodeToSearch: null,
  instrumentalCodeToUpdate: null,
  instrumentalCodeUpdatePostResponse: null,
  lastNdays: null,
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
    setInstrumentalCodeToUpdate: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.instrumentalCodeToUpdate = action.payload;
    },
    setLastNDaysFromToday: (state, action: PayloadAction<number | null>) => {
      state.lastNdays = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      updatehHistoricalStockDataForAllAction.fulfilled,
      (state, action) => {
        state.actionResult = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      updateHistoricalStockDataForOneAction.fulfilled,
      (state, action) => {
        state.oneStockDataForToday = action.payload;
        state.isLoading = false;
      }
    );
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
    builder.addCase(
      udpateLastNDaysFromTodayForAllAction.fulfilled,
      (state, action) => {
        state.actionResult = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      udpateLastNDaysFromTodayForOneAction.fulfilled,
      (state, action) => {
        state.oneStockDataForToday = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(
      updateOneInstrumentalCodeAction.fulfilled,
      (state, action) => {
        console.log(action.payload);
        state.instrumentalCodeUpdatePostResponse = action.payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      isAsyncThunkAction(
        fetchAllStocksDataForTodayAction,
        fetchOneStocksDataForTodayAction,
        updateOneInstrumentalCodeAction,
        udpateLastNDaysFromTodayForAllAction,
        udpateLastNDaysFromTodayForOneAction,
        updateHistoricalStockDataForOneAction,
        updatehHistoricalStockDataForAllAction
      ),
      (state, action) => {
        state.isLoading = action.meta.requestStatus === 'pending';
      }
    );
  },
});

export const adminActions = adminSlice.actions;
