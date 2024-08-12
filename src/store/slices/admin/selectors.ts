import { useAppSelector } from '../../AppStore';

import { AdminType, ResponseType } from './types';

export const useAdminSlice = {
  getActionResult: (): AdminType['actionResult'] => {
    return useAppSelector(({ admin }) => admin.actionResult);
  },
  getOneStockDataForToday: (): AdminType['oneStockDataForToday'] => {
    return useAppSelector(({ admin }) => admin.oneStockDataForToday);
  },
  getStockExchangeCodeToSearch: (): string | null => {
    return useAppSelector(({ admin }) => admin.stockExchangeCodeToSearch);
  },
  getInstrumentalCodeUpdatePostResponse: (): ResponseType | null => {
    return useAppSelector(({ admin }) => admin.instrumentalCodeUpdatePostResponse);
  },
  getTechIndAndKeyStocks: (): AdminType['techIndAndKeyStocks'] => {
    return useAppSelector(({ admin }) => admin.techIndAndKeyStocks);
  },
  isLoading: (): boolean => {
    return useAppSelector(({ admin }) => admin.isLoading);
  },
};
