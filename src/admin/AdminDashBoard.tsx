import { useState } from 'react';

import { ALERT_TYPES } from '../alerts/AlertAction';
import { useAppDispatch } from '../store/AppStore';
import { generalActions } from '../store/slices/general';

import { HistoricalAndTodayDataRepresent } from './components/HistoricalAndTodayDataRepresent';
import { ACTIONS } from './contants';

import styles from './AdminDashboard.module.css';

export const AdminDashBoard = () => {
  const dispatch = useAppDispatch();
  const [activeInd, setActiveInd] = useState<number | null>(null);
  const handleActionItemClick = (ind: number, alertToTrigger: ALERT_TYPES) => {
    setActiveInd(ind);
    dispatch(generalActions.setAlertType(alertToTrigger));
  };
  return (
    <div className={styles.adminDashboard}>
      <div className={styles.lastUpdatedBlock}>
        {`Last updated on  :  ${Date.now()}`}
      </div>
      <div className={styles.actionsSection}>
        {Object.entries(ACTIONS).map(([key, value], ind) => {
          return (
            <div
              key={key}
              className={`${styles.actionItem} ${ind === activeInd && styles.actionItem_active}`}
              onClick={() => handleActionItemClick(ind, value.alertToTrigger)}
            >
              {value.actionName}
            </div>
          );
        })}
      </div>
      <HistoricalAndTodayDataRepresent />
    </div>
  );
};
