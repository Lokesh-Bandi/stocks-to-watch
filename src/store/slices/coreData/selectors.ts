import { useAppSelector } from '../../AppStore';

import { CoreDataType } from './types';

export const useCoreData = {
  isLoading: (): boolean => {
    return useAppSelector(({ technicalIndicators }) => technicalIndicators.isLoading);
  },
  getCoreData: (): CoreDataType['stocks'] => {
    return useAppSelector(({ coreData }) => coreData.stocks);
  },
};
