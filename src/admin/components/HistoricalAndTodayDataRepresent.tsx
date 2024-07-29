import { useAdminSlice } from '../../store/slices/admin';

import styles from './HistoricalAndTodayDataRepresent.module.css';

interface HistoricalAndTodayDataRepresentProps {}
export const HistoricalAndTodayDataRepresent =
  ({}: HistoricalAndTodayDataRepresentProps) => {
    const actionResult = useAdminSlice.getActionResult();
    return (
      <div className={styles.mainSection}>
        <div className={styles.acitonStatusSection}>
          <div
            className={`${styles.acitonStatusItem} ${styles.acitonStatusItem_success}`}
          >
            Success : 104
          </div>
          <div
            className={`${styles.acitonStatusItem} ${styles.acitonStatusItem_fail}`}
          >
            Failure : 30
          </div>
        </div>
        {actionResult ? (
          <div className={styles.actionOutcome}>
            {JSON.stringify(actionResult)}
          </div>
        ) : null}
      </div>
    );
  };
