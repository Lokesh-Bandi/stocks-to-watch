import { ALERT_TYPES } from '../alerts/AlertTypes';
import { useAppDispatch } from '../store/AppStore';
import { adminActions } from '../store/slices/admin';
import { generalActions } from '../store/slices/general';

import { fetchCall } from './api/fetchCalls';
import { HistoricalAndTodayDataRepresent } from './components/HistoricalAndTodayDataRepresent';
import { ACTIONS } from './contants';

import styles from './AdminDashboard.module.css';

export const AdminDashBoard = () => {
  const dispatch = useAppDispatch();
  const handleActionItemClick = async (actionURL: string) => {
    const response = await fetchCall(actionURL);
    dispatch(adminActions.setActionResult(response));
  };
  const showAlert = (actionURL: string) => {
    dispatch(
      generalActions.setAlertType({
        alertName: ALERT_TYPES.CONFIRMATION,
        callback: () => handleActionItemClick(actionURL),
      })
    );
  };
  return (
    <div className={styles.adminDashboard}>
      <div className={styles.lastUpdatedBlock}>
        {`Last updated on  :  ${Date.now()}`}
      </div>
      <div className={styles.actionsSection}>
        {Object.entries(ACTIONS).map(([key, value]) => {
          return (
            <div
              key={key}
              className={styles.actionItem}
              onClick={() => showAlert(value.actionURL)}
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
