import { AppContentBodyConnected } from './appContentBody/AppContentBodyConnected';

import styles from './AppContent.module.css';

export const AppContent = () => {
  return (
    <div className={styles.appContent}>
      <AppContentBodyConnected />
    </div>
  );
};
