import { Tooltip } from 'react-tooltip';

import { AppContentConnected } from '../appContent/AppContentConnected';
import { AppContentHeaderConnected } from '../appContent/appContentHeader/AppContentHeaderConnected';
import { AppOverlay } from '../appOverlay/AppOverlay';
import { DrawerConnected } from '../drawer/DrawerConnected';
import { NavBarConnected } from '../navBar/NavBarConnected';

import styles from './appGrid.module.css';

export const AppGridConnected = () => {
  return (
    <div className={styles.appGrid}>
      <NavBarConnected />
      <DrawerConnected />
      <AppContentHeaderConnected />
      <AppContentConnected />
      <AppOverlay />
      <Tooltip
        id="my-tooltip"
        style={{
          fontSize: '16px',
        }}
      />
      {/* <Outlet /> */}
    </div>
  );
};
