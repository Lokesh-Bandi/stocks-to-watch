import { useEffect, useState } from 'react';

import { CloseIcon } from '../components/svgs/CloseIcon';
import { useAppDispatch } from '../store/AppStore';
import { generalActions, useGeneralSlice } from '../store/slices/general';

import { ALERT_OBJ_TYPE, ALERTS } from './AlertTypes';

import styles from './AppAlert.module.css';

export const AppAlert = () => {
  const dispatch = useAppDispatch();
  const alert = useGeneralSlice.getAlert();
  const [alertType, setAlertType] = useState<ALERT_OBJ_TYPE | null>(null);

  useEffect(() => {
    if (!alert) return;
    setAlertType(ALERTS[alert.alertName]);
  }, [alert]);
  const dismissAlert = () => {
    dispatch(generalActions.resetAlertType());
  };
  const handleOverlayClick = () => {
    if (alertType?.overlayClickToClose) {
      dismissAlert();
    }
  };
  const handleCloseIcon = () => {
    if (alertType?.closeIcon) {
      dismissAlert();
    }
  };
  const handleOk = async () => {
    if (!alert) return;
    await alert.callback?.();
  };
  if (!alert) return null;
  return (
    <div className={styles.alertOverlay} onClick={handleOverlayClick}>
      <div className={styles.alertBox}>
        {alertType?.close && (
          <div className={styles.closeIcon} onClick={handleCloseIcon}>
            <CloseIcon />
          </div>
        )}
        <div className={styles.alertTitle}>{alertType?.title}</div>
        <div className={styles.alertActions}>
          {alertType?.close && (
            <div
              className={`${styles.alertButton} ${styles.alertButtonCancel}`}
              onClick={dismissAlert}
            >
              {'Cancel'}
            </div>
          )}
          {alertType?.ok && (
            <div
              className={`${styles.alertButton} ${styles.alertButtonInfo}`}
              onClick={handleOk}
            >
              {'Ok'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
