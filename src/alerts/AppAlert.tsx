import { useEffect, useState } from 'react';

import { CloseIcon } from '../components/svgs/CloseIcon';
import { useAppDispatch } from '../store/AppStore';
import { generalActions, useGeneralSlice } from '../store/slices/general';

import { ALERT_OBJ_TYPE, ALERTS } from './AlertTypes';

import styles from './AppAlert.module.css';

export const AppAlert = () => {
  const dispatch = useAppDispatch();
  const alertType = useGeneralSlice.getAlert();
  const [alertContent, setAlertContent] = useState<ALERT_OBJ_TYPE | null>(null);

  useEffect(() => {
    if (!alertType) return;
    setAlertContent(ALERTS[alertType]);
  }, [alertType]);
  const dismissAlert = () => {
    dispatch(generalActions.resetAlertType());
  };
  const handleOverlayClick = () => {
    if (alertContent?.overlayClickToClose) {
      dismissAlert();
    }
  };
  const handleCloseIcon = () => {
    if (alertContent?.closeIcon) {
      dismissAlert();
    }
  };
  const handleOk = async () => {
    if (!alertContent) return;
    await alertContent?.onOk?.();
  };
  if (!alertType) return null;
  return (
    <div className={styles.alertOverlay} onClick={handleOverlayClick}>
      <div className={styles.alertBox}>
        {alertContent?.close && (
          <div className={styles.closeIcon} onClick={handleCloseIcon}>
            <CloseIcon />
          </div>
        )}
        <div className={styles.alertTitle}>{alertContent?.title}</div>
        <div className={styles.alertActions}>
          {alertContent?.close && (
            <div className={`${styles.alertButton} ${styles.alertButtonCancel}`} onClick={dismissAlert}>
              {'Cancel'}
            </div>
          )}
          {alertContent?.ok && (
            <div className={`${styles.alertButton} ${styles.alertButtonInfo}`} onClick={handleOk}>
              {'Ok'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
