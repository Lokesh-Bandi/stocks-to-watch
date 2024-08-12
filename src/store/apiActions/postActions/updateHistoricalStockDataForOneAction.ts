import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

export const updateHistoricalStockDataForOneAction = createAsyncThunk(
  'admin/updateHistoricalStockDataForOne',
  (stockExchangeCode: string) => {
    return Fetcher.post<AdminType['oneStockDataForToday']>(
      API_ENDPOINTS.historicalDataForOneStock.replace('#StockExchangeCode#', stockExchangeCode),
      {}
    );
  }
);
