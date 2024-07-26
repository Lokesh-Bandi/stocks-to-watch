import Button from '@mui/material/Button';
import { styled, Theme } from '@mui/material/styles';
import { useEffect } from 'react';

import { fetchSampleDataAction } from '../store/apiActions/getActions/fetchSampleDataAction';
import { useAppDispatch, useAppSelector } from '../store/AppStore';

import { useModifiers } from './hooks/useModifiers';

import styles from './sample.module.css';

const StyledButton = styled(Button)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: 'yellow',
  },
}));
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
      <StyledButton variant="contained">Primary Button</StyledButton>
      <Button variant="contained" color="secondary">
        Secondary Button
      </Button>
    </div>
  );
};
