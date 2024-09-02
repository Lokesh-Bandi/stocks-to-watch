import { useCallback, useState } from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { IoStatsChartSharp } from 'react-icons/io5';
import { LuCandlestickChart } from 'react-icons/lu';
import { MdSsidChart } from 'react-icons/md';
import { PiChartLineLight } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
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
  const getIcon = useCallback((drawerItem: string) => {
    switch (drawerItem) {
      case DRAWER_ITEMS.dashboard:
        return <RxDashboard />;
      case DRAWER_ITEMS.mfi:
        return <PiChartLineLight />;
      case DRAWER_ITEMS.rsi:
        return <AiOutlineBarChart />;
      case DRAWER_ITEMS.bollingerBands:
        return <MdSsidChart />;
      case DRAWER_ITEMS.volumeSprut:
        return <IoStatsChartSharp />;
      case DRAWER_ITEMS.charts:
        return <LuCandlestickChart />;
      default:
        return null;
    }
  }, []);

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
              icon={getIcon(listName)}
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
