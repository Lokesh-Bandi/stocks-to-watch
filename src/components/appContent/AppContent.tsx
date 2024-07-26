import { AppContentBodyConnected } from './appContentBody/AppContentBodyConnected';
import { AppContentHeaderConnected } from './appContentHeader/AppContentHeaderConnected';

import styles from './AppContent.module.css';

export const AppContent = () => {
  return (
    <div className={styles.appContent}>
      <AppContentHeaderConnected />
      <AppContentBodyConnected />
    </div>
  );
};
