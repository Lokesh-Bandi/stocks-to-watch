import { useAppSelector } from '../../AppStore';

import { CoreDataType } from './types';

export const useCoreData = {
  isLoading: (): boolean => {
    return useAppSelector(({ coreData }) => coreData.isLoading);
  },
  getCoreData: (): CoreDataType['stocks'] => {
    return useAppSelector(({ coreData }) => coreData.stocks);
  },
  isChartStockDataLoading: (): boolean => {
    return useAppSelector(({ coreData }) => coreData.isChartStockDataLoading);
  },
  getSingleChartStockData: (): CoreDataType['singleChartStockData'] => {
    return useAppSelector(({ coreData }) => coreData.singleChartStockData);
  },
};
