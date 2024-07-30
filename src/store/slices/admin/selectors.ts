import { useAppSelector } from '../../AppStore';

import { AdminType } from './types';

export const useAdminSlice = {
  getActionResult: (): AdminType['actionResult'] => {
    return useAppSelector(({ admin }) => admin.actionResult);
  },
};
