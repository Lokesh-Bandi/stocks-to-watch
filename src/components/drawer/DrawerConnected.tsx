import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DRAWER_ITEMS } from '../../constants/constants';
import { useAppSelector } from '../../store/AppStore';
import { useIsSmallerThanWide } from '../../styles/media';
import { useModifiers } from '../hooks/useModifiers';

import { AppLogo } from './drawerItems/AppLogo';
import { DrawerItem } from './drawerItems/DrawerItem';

import styles from './Drawer.module.css';

export const DrawerConnected = () => {
  const navigate = useNavigate();
  const isMenuOpen = useAppSelector(({ general }) => general.isMenuOpen);
  const isMobile = useIsSmallerThanWide();
  const drawerItems = Object.values(DRAWER_ITEMS);
  const [activeItem, setActiveItem] = useState(drawerItems[0]);
  const handleDrawerItemClick = (drawerItem: string) => {
    if (activeItem === drawerItem) return;
    setActiveItem(drawerItem);
    navigate(drawerItems[0] === drawerItem ? '/' : `/${drawerItem}`);
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
        {drawerItems.map((listName, ind) => {
          return (
            <DrawerItem
              key={ind}
              active={listName === activeItem}
              itemName={listName}
              onClick={handleDrawerItemClick}
            />
          );
        })}
      </div>
    </div>
  );
};
