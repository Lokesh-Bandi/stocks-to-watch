import {
  Reducer,
  StateFromReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { adminSlice } from './slices/admin';
import { generalSlice } from './slices/general';
import { sampleSlice } from './slices/sample';
import { technicalIndicatorsSlice } from './slices/technicalIndicators';

export const reducers = {
  [sampleSlice.name]: sampleSlice.reducer,
  [generalSlice.name]: generalSlice.reducer,
  [adminSlice.name]: adminSlice.reducer,
  [technicalIndicatorsSlice.name]: technicalIndicatorsSlice.reducer,
};
export const createStore = (reducers: Record<string, Reducer>) => {
  const store = configureStore({
    reducer: Object.assign({}, reducers),
  });
  return store;
};

export const AppStore = createStore(reducers);
export type AppStoreType = typeof AppStore;

export interface appStoreState
  extends StateFromReducersMapObject<typeof reducers> {}
export const useAppSelector: TypedUseSelectorHook<appStoreState> = useSelector;

export type dispatchType = AppStoreType['dispatch'];
export const useAppDispatch: () => dispatchType = useDispatch;
