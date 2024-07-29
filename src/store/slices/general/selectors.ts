import { useAppSelector } from '../../AppStore';

import { GeneralTypes } from './types';

export const useGeneralSlice = {
  isMenuOpen: (): boolean => {
    return useAppSelector(({ general }) => general.isMenuOpen);
  },
  isAdmin: (): boolean => {
    return useAppSelector(({ general }) => general.isAdmin);
  },
  getAlert: (): GeneralTypes['alertType'] => {
    return useAppSelector(({ general }) => general.alertType);
  },
};
