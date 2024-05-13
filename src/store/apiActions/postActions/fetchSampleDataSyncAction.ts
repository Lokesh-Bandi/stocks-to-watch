import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { Post } from '../../slices/sample';

export const fetchSampleDataSyncAction = createAsyncThunk(
  'sample/fetchSampleDataSync',
  (body: Post) => {
    return Fetcher.post<Post>(
      'https://jsonplaceholder.typicode.com/posts',
      body
    );
  }
);
