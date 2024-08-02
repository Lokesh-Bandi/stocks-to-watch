import { Outlet } from 'react-router-dom';

import styles from './AppContent.module.css';

interface AppContentProps {}
export const AppContent = ({}: AppContentProps) => {
  return (
    <div className={styles.appContent}>
      <Outlet />
    </div>
  );
};
