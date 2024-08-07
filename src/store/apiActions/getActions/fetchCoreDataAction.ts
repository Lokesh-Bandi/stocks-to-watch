import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { UI_API_ENDPOINTS } from '../../../constants/constants';
import { CoreDataType } from '../../slices/coreData';

export const fetchCoreDataAction = createAsyncThunk(
  'technicalIndicators/fetchCoreData',
  () => {
    return Fetcher.get<CoreDataType['stocks']>(UI_API_ENDPOINTS.coreData);
  }
);
