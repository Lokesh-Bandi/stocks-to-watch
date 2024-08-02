import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

interface UpdateOneInstrumentalCodePayLoadType {
  stockExchangeCode: string;
  days: number;
}
export const udpateLastNDaysFromTodayForOneAction = createAsyncThunk(
  'sample/udpateLastNDaysFromTodayForOne',
  (data: UpdateOneInstrumentalCodePayLoadType) => {
    console.log(data);
    return Fetcher.post<AdminType['oneStockDataForToday']>(
      API_ENDPOINTS.lastNdaysFromTodayOne.replace(
        '#StockExchangeCode#',
        data.stockExchangeCode
      ),
      {
        days: data.days,
      }
    );
  }
);
