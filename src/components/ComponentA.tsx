import { useEffect } from 'react';

import { fetchSampleDataAction } from '../store/apiActions/getActions/fetchSampleDataAction';
import { useAppDispatch, useAppSelector } from '../store/AppStore';

import { useModifiers } from './hooks/useModifiers';

import styles from './sample.module.css';

export const ComponentA = () => {
  const dispatch = useAppDispatch();
  const appName = useAppSelector(({ sample }) => sample.appName);
  const playersCount = useAppSelector(({ sample }) => sample.playersCount);
  useEffect(() => {
    dispatch(fetchSampleDataAction());
  }, [dispatch]);
  const mods = useModifiers(
    styles,
    'players_info',
    {
      more: playersCount > 100,
      less: playersCount <= 100,
    },
    { isWithBaseClass: true }
  );
  return (
    <div>
      <h1>{appName}</h1>
      <h3 className={mods}>Players Count: {playersCount}</h3>
    </div>
  );
};
