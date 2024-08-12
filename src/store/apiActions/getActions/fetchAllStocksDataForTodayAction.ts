import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

export const fetchAllStocksDataForTodayAction = createAsyncThunk('admin/fetchAllStocksDataForToday', () => {
  return Fetcher.get<AdminType['actionResult']>(API_ENDPOINTS.allStocksDataForToday);
});
