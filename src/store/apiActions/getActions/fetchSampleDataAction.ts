import { createAsyncThunk } from '@reduxjs/toolkit';

import { Fetcher } from '../../../api';
import { Post } from '../../slices/sample';

export const fetchSampleDataAction = createAsyncThunk(
  'sample/fetchSampleData',
  () => {
    return Fetcher.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
);
