import {
  Reducer,
  StateFromReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { sampleSlice } from './slices/sample';

export const reducers = {
  [sampleSlice.name]: sampleSlice.reducer,
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
