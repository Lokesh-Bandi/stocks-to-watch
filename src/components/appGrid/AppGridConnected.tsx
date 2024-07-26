import { Tooltip } from 'react-tooltip';

import { AppContent } from '../appContent/AppContent';
import { AppContentHeader } from '../appContent/appContentHeader/AppContentHeader';
import { DrawerConnected } from '../drawer/DrawerConnected';

import styles from './appGrid.module.css';

export const AppGridConnected = () => {
  return (
    <div className={styles.appGrid}>
      <DrawerConnected />
      <AppContentHeader />
      <AppContent />
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
