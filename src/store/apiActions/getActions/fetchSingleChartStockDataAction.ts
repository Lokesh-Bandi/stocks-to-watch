import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { UI_API_ENDPOINTS } from '../../../constants/constants';
import { CoreDataType } from '../../slices/coreData';

export const fetchSingleChartStockDataAction = createAsyncThunk(
  'coreData/fetchSingleChartStockData',
  (stockExchangeCode: string) => {
    const apiEndPoint = UI_API_ENDPOINTS.chartStockData.replace('#StockExchangeCode#', stockExchangeCode);
    return Fetcher.get<CoreDataType['singleChartStockData']>(apiEndPoint);
  }
);
