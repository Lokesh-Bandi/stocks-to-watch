import { AppContentBodyConnected } from './appContentBody/AppContentBodyConnected';

import styles from './AppContent.module.css';

interface AppContentProps {}
export const AppContent = ({}: AppContentProps) => {
  return (
    <div className={styles.appContent}>
      <AppContentBodyConnected />
    </div>
  );
};
