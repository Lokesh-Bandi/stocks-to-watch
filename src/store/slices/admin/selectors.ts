import { useAppSelector } from '../../AppStore';

export const useAdminSlice = {
  getActionResult: (): unknown => {
    return useAppSelector(({ admin }) => admin.actionResult);
  },
};
