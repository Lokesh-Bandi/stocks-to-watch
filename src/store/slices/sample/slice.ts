import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { SampleType } from './types';

const initialState: SampleType = {
  playersCount: 101,
  countriesCount: 23,
  isPlayerActive: false,
  appName: 'Redux Added',
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
});

export const sampleActions = sampleSlice.actions;
