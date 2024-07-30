import { useAppSelector } from '../../AppStore';

import { AdminType } from './types';

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
  isLoading: (): boolean => {
    return useAppSelector(({ admin }) => admin.isLoading);
  },
};
