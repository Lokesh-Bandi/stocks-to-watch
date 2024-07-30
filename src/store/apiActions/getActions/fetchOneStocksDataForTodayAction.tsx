import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

export const fetchOneStocksDataForTodayAction = createAsyncThunk(
  'admin/fetchOneStocksDataForToday',
  (stockExchangeCode: string) => {
    return Fetcher.get<AdminType['oneStockDataForToday']>(
      API_ENDPOINTS.oneStockDataForToday.replace(
        '#StockExchangeCode#',
        stockExchangeCode
      )
    );
  }
);
