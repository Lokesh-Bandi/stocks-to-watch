import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { ResponseType } from '../../slices/admin';

interface UpdateOneInstrumentalCodePayLoadType {
  stockExchangeCode: string;
  ic: string;
}
export const updateOneInstrumentalCodeAction = createAsyncThunk(
  'sample/updateOneInstrumentalCode',
  (data: UpdateOneInstrumentalCodePayLoadType) => {
    return Fetcher.post<ResponseType>(
      API_ENDPOINTS.instrumentalCodeUpdate.replace(
        '#StockExchangeCode#',
        data.stockExchangeCode
      ),
      data
    );
  }
);
