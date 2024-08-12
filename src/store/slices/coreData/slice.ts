import { createSlice, isAsyncThunkAction } from '@reduxjs/toolkit';

import { fetchCoreDataAction } from '../../apiActions/getActions/fetchCoreDataAction';

import { CoreDataType } from './types';

const initialState: CoreDataType = {
  stocks: null,
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
    builder.addMatcher(isAsyncThunkAction(fetchCoreDataAction), (state, action) => {
      state.isLoading = action.meta.requestStatus === 'pending';
    });
  },
});

export const coreDataActions = coreDataSlice.actions;
