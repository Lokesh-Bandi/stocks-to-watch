import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { AdminType } from '../../slices/admin';

export const fetchAllStocksDataForTodayAction = createAsyncThunk(
  'admin/fetchAllStocksDataForToday',
  () => {
    return Fetcher.get<AdminType['actionResult']>(
      'http://localhost:3000/today/all/nifty500'
    );
  }
);
