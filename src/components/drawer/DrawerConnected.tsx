import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/AppStore';
import { generalActions } from '../../store/slices/general';
import { useIsSmallerThanWide } from '../../styles/media';

import { AppLogo } from './drawerItems/AppLogo';
import { DrawerItem } from './drawerItems/DrawerItem';

import styles from './Drawer.module.css';

export const DrawerConnected = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(({ general }) => general.isMenuOpen);
  const isMobile = useIsSmallerThanWide();
  const [activeInd, setActiveInd] = useState(0);
  const drawerList = ['dashboard', 'rsi', 'mfi'];
  const handleDrawerItemClick = (ind: number) => {
    setActiveInd(ind);
    if (isMobile) {
      dispatch(generalActions.toggleMenu());
    }
  };
  if (isMobile && !isMenuOpen) return null;
  return (
    <div className={styles.drawer}>
      {!isMobile ? <AppLogo /> : null}
      {drawerList.map((listName, ind) => {
        return (
          <DrawerItem
            key={ind}
            active={ind === activeInd}
            itemName={listName}
            onClick={() => handleDrawerItemClick(ind)}
          />
        );
      })}
    </div>
  );
};
