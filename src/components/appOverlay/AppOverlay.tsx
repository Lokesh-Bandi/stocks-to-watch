import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/AppStore';
import { generalActions } from '../../store/slices/general';

import styles from './AppOverlay.module.css';

export const AppOverlay = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(({ general }) => general.isMenuOpen);
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    setShowOverlay(isMenuOpen);
  }, [isMenuOpen]);
  if (!showOverlay) return null;
  const handleOverlayClick = () => {
    dispatch(generalActions.toggleMenu());
  };
  return <div className={styles.appOverlay} onClick={handleOverlayClick}></div>;
};
