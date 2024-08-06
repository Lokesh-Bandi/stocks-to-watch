import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { CustomTechnicalIndicatorType } from '../../slices/technicalIndicators';

interface ResponseType extends CustomTechnicalIndicatorType {
  lastUpdated: string;
}
export const fetchKeyStocksAction = createAsyncThunk(
  'technicalIndicators/fetchKeyStocks',
  () => {
    return Fetcher.get<ResponseType>(API_ENDPOINTS.techIndAndKeyStocks);
  }
);
