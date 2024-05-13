import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchSampleDataAction } from '../../apiActions/getActions/fetchSampleDataAction';
import { fetchSampleDataSyncAction } from '../../apiActions/postActions/fetchSampleDataSyncAction';

import { SampleType } from './types';

const initialState: SampleType = {
  playersCount: 101,
  countriesCount: 23,
  isPlayerActive: false,
  appName: 'Redux Added',
  posts: null,
};
export const sampleSlice = createSlice({
  name: 'sample',
  initialState: initialState,
  reducers: {
    setPlayersCount: (state, action: PayloadAction<number>) => {
      state.playersCount = action.payload;
    },
    setCountriesCount: (state, action: PayloadAction<number>) => {
      state.countriesCount = action.payload;
    },
    setIsPlayerActive: (state, action: PayloadAction<boolean>) => {
      state.isPlayerActive = action.payload;
    },
    setAppName: (state, action: PayloadAction<string>) => {
      state.appName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSampleDataAction.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchSampleDataSyncAction.fulfilled, (state, action) => {
      state.posts?.push(action.payload);
    });
  },
});

export const sampleActions = sampleSlice.actions;
