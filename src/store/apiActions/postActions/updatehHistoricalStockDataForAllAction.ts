import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

export const updatehHistoricalStockDataForAllAction = createAsyncThunk(
  'admin/updateHistoricalStockDataForAll',
  () => {
    return Fetcher.post<AdminType['actionResult']>(
      API_ENDPOINTS.historicalDataAll,
      {}
    );
  }
);
