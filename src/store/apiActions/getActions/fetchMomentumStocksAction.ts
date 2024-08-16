import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { UI_API_ENDPOINTS } from '../../../constants/constants';
import { TechIndType } from '../../slices/technicalIndicators';

export const fetchMomentumStocksAction = createAsyncThunk('technicalIndicators/fetchMomentumStocks', () => {
  return Fetcher.get<TechIndType['momentumStocks']>(UI_API_ENDPOINTS.momentumStocks);
});
