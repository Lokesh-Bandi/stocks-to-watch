import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppLogo } from './drawerItems/AppLogo';
import { DrawerItem } from './drawerItems/DrawerItem';

import styles from './Drawer.module.css';

export const DrawerConnected = () => {
  const [activeInd, setActiveInd] = useState(0);
  const drawerList = ['home', 'rsi', 'mfi'];
  const handleDrawerItemClick = (ind: number) => {
    setActiveInd(ind);
  };
  return (
    <div className={styles.drawer}>
      <AppLogo />
      {drawerList.map((listName, ind) => {
        return (
          <Link to={`/${listName}`} key={ind}>
            <DrawerItem
              active={ind === activeInd}
              itemName={listName}
              onClick={() => handleDrawerItemClick(ind)}
            />
          </Link>
        );
      })}
    </div>
  );
};
