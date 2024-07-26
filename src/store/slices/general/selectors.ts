import { useAppSelector } from '../../AppStore';

export const useGeneralSlice = {
  isMenuOpen: (): boolean => {
    return useAppSelector(({ general }) => general.isMenuOpen);
  },
};
