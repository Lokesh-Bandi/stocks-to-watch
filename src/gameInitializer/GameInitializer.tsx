import { useEffect } from 'react';

import { PASSCODE, SessionStorageKeys } from '../constants/constants';
import { SessionStorage } from '../storage';
import { fetchCoreDataAction } from '../store/apiActions/getActions/fetchCoreDataAction';
import { fetchKeyStocksAction } from '../store/apiActions/getActions/fetchKeyStocksAction';
import { useAppDispatch } from '../store/AppStore';
import { generalActions } from '../store/slices/general';

export const GameInitializer = () => {
  const dispath = useAppDispatch();
  useEffect(() => {
    const isAdmin = Boolean(SessionStorage.getItem(SessionStorageKeys.admin));
    const passcode = SessionStorage.getItem(SessionStorageKeys.passcode);
    if (isAdmin && passcode === PASSCODE) {
      dispath(generalActions.setIsAdmin());
    }
  }, [dispath]);

  useEffect(() => {
    dispath(fetchKeyStocksAction()); // Fetching Key stocks for all indicators
    dispath(fetchCoreDataAction()); // fetching core data
  }, [dispath]);

  return null;
};
