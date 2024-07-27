import { useState } from 'react';

import { useAppSelector } from '../../store/AppStore';
import { useIsSmallerThanWide } from '../../styles/media';
import { useModifiers } from '../hooks/useModifiers';

import { AppLogo } from './drawerItems/AppLogo';
import { DrawerItem } from './drawerItems/DrawerItem';

import styles from './Drawer.module.css';

export const DrawerConnected = () => {
  const isMenuOpen = useAppSelector(({ general }) => general.isMenuOpen);
  const isMobile = useIsSmallerThanWide();
  const [activeInd, setActiveInd] = useState(0);
  const drawerList = [
    'dashboard',
    'rsi',
    'mfi',
    'dashboard',
    'rsi',
    'mfi',
    'dashboard',
    'rsi',
    'mfi',
    'dashboard',
    'rsi',
    'mfi',
    'dashboard',
    'rsi',
    'mfi',
  ];
  const handleDrawerItemClick = (ind: number) => {
    setActiveInd(ind);
  };
  const mods = useModifiers(
    styles,
    'drawer',
    {
      opened: isMenuOpen,
    },
    {
      isWithBaseClass: true,
    }
  );
  return (
    <div className={mods}>
      {!isMobile ? <AppLogo /> : null}
      <div className={styles.drawerListBlock}>
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
    </div>
  );
};
