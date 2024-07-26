import { AppContent } from '../appContent/AppContent';
import { DrawerConnected } from '../drawer/DrawerConnected';

import styles from './appGrid.module.css';

export const AppGridConnected = () => {
  return (
    <div className={styles.appGrid}>
      <DrawerConnected />
      <AppContent />
      {/* <Outlet /> */}
    </div>
  );
};
