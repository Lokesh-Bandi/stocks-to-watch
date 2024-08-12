import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { API_ENDPOINTS } from '../../../constants/constants';
import { AdminType } from '../../slices/admin';

interface UpdateOneInstrumentalCodePayLoadType {
  days: number;
}
export const udpateLastNDaysFromTodayForAllAction = createAsyncThunk(
  'sample/udpateLastNDaysFromTodayForAll',
  (data: UpdateOneInstrumentalCodePayLoadType) => {
    return Fetcher.post<AdminType['actionResult']>(API_ENDPOINTS.lastNDaysFromTodayAll, data);
  }
);
