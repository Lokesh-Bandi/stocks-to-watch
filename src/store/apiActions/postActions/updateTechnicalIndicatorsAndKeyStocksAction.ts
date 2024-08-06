import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

export const updateTechnicalIndicatorsAndKeyStocksAction = createAsyncThunk(
  'sample/updateTechnicalIndicatorsAndKeyStocks',
  () => {
    return Fetcher.post<AdminType['techIndAndKeyStocks']>(
      API_ENDPOINTS.techIndsAndKeyStocks,
      {}
    );
  }
);
