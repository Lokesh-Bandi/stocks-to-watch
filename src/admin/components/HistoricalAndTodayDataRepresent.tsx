import { ChangeEvent, useEffect, useState } from 'react';

import { ALERT_TYPES } from '../../alerts/AlertAction';
import { Spinner } from '../../components/spinner/Spinner';
import { useAppDispatch } from '../../store/AppStore';
import { adminActions, useAdminSlice } from '../../store/slices/admin';
import { generalActions } from '../../store/slices/general';

import styles from './HistoricalAndTodayDataRepresent.module.css';

interface HistoricalAndTodayDataRepresentProps {
  alertType: ALERT_TYPES;
  daysField?: boolean;
}
export const HistoricalAndTodayDataRepresent = ({
  alertType,
  daysField = false,
}: HistoricalAndTodayDataRepresentProps) => {
  const dispatch = useAppDispatch();
  const actionResult = useAdminSlice.getActionResult();
  const isLoading = useAdminSlice.isLoading();
  const [apiSuccessStocksArray, setApiSuccessStocksArray] = useState<
    string[] | null
  >(null);
  const [apiErrorStocksArray, setApiErrorStocksArray] = useState<
    string[] | null
  >(null);
  const [dbCreatedStocksArray, setDbCreatedStocksArray] = useState<
    string[] | null
  >(null);
  const [dbUpdatedStocksArray, setDbUpdatedStocksArray] = useState<
    string[] | null
  >(null);
  const [dbErrorStocksArray, setDbErrorStocksArray] = useState<string[] | null>(
    null
  );
  const [apiErrors, setApiErrors] = useState<unknown[] | null>(null);
  const [dbErrors, setDbErrors] = useState<unknown[] | null>(null);
  const [ackMessage, setAckMessage] = useState('');
  const [days, setDays] = useState<number>(0);

  const handleUpdateAll = () => {
    dispatch(generalActions.setAlertType(alertType));
  };

  const handleDaysInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setDays(parseInt(value));
    dispatch(adminActions.setLastNDaysFromToday(parseInt(value)));
  };

  useEffect(() => {
    if (!actionResult) return;
    const {
      apiSuccessArray,
      apiErrorArray,
      DBCreatedArray,
      DBUpdatedArray,
      DBErrorArray,
      APIErrors,
      DBErrors,
      message,
    } = actionResult;
    setApiSuccessStocksArray(apiSuccessArray);
    setApiErrorStocksArray(apiErrorArray);
    setDbCreatedStocksArray(DBCreatedArray);
    setDbUpdatedStocksArray(DBUpdatedArray);
    setDbErrorStocksArray(DBErrorArray);
    setApiErrors(APIErrors);
    setDbErrors(DBErrors);
    setAckMessage(message);
  }, [actionResult]);
  return (
    <div className={styles.mainSection}>
      <div className={styles.acitonStatusSection}>
        <div
          className={`${styles.acitonStatusItem} ${styles.acitonStatusItem_success}`}
        >
          {`API: ${apiSuccessStocksArray?.length ?? 0}  -----  DB: ${(dbUpdatedStocksArray?.length ?? 0) + (dbCreatedStocksArray?.length ?? 0)}`}
        </div>
        <div
          className={`${styles.acitonStatusItem} ${styles.acitonStatusItem_fail}`}
        >
          {`API: ${apiErrorStocksArray?.length ?? 0}  -----  DB: ${dbErrorStocksArray?.length ?? 0}`}
        </div>
      </div>
      {daysField && (
        <div className={styles.daysInputBlock}>
          <label htmlFor="daysInput">{'Last N days data(Not Today):'}</label>
          <input
            name="daysInput"
            className={styles.searchInput}
            type="number"
            value={days}
            onChange={handleDaysInputChange}
            placeholder="Enter days..."
          />
        </div>
      )}
      <div className={styles.button_danger} onClick={handleUpdateAll}>
        {'Update All'}
      </div>
      {isLoading ? <Spinner /> : null}
      {actionResult && !isLoading ? (
        <>
          {ackMessage ? (
            <div className={styles.actionSection}>{ackMessage}</div>
          ) : null}
          {apiSuccessStocksArray && apiSuccessStocksArray.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_success}`}
            >
              <div className={styles.actionTitle}>{'API-success stocks'}</div>
              <div className={styles.actionItems}>
                {apiSuccessStocksArray.map((eachItem, ind) => {
                  return (
                    <div key={ind} className={styles.actionItem}>
                      {eachItem}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {apiErrorStocksArray && apiErrorStocksArray.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_error}`}
            >
              <div className={styles.actionTitle}>{'API-error stocks'}</div>
              <div className={styles.actionItems}>
                {apiErrorStocksArray.map((eachItem, ind) => {
                  return (
                    <div key={ind} className={styles.actionItem}>
                      {eachItem}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {dbCreatedStocksArray && dbCreatedStocksArray.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_db_create}`}
            >
              <div className={styles.actionTitle}>
                {'Database-created stocks'}
              </div>
              <div className={styles.actionItems}>
                {dbCreatedStocksArray.map((eachItem, ind) => {
                  return (
                    <div key={ind} className={styles.actionItem}>
                      {eachItem}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {dbUpdatedStocksArray && dbUpdatedStocksArray.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_db_update}`}
            >
              <div className={styles.actionTitle}>
                {'Database-updated stocks'}
              </div>
              <div className={styles.actionItems}>
                {dbUpdatedStocksArray.map((eachItem, ind) => {
                  return (
                    <div key={ind} className={styles.actionItem}>
                      {eachItem}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {dbErrorStocksArray && dbErrorStocksArray.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_error}`}
            >
              <div className={styles.actionTitle}>
                {'Database-error stocks'}
              </div>
              <div className={styles.actionItems}>
                {dbErrorStocksArray.map((eachItem, ind) => {
                  return (
                    <div key={ind} className={styles.actionItem}>
                      {eachItem}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {apiErrors && apiErrors.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_errors_list}`}
            >
              <div className={styles.actionTitle}>{'API Errors List'}</div>
              <div className={styles.actionItems}>
                {apiErrors.map((eachItem, ind) => {
                  return (
                    <div
                      key={ind}
                      className={`${styles.actionItem} ${styles.actionErrorItem}`}
                    >
                      {JSON.stringify(eachItem)}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {dbErrors && dbErrors.length > 0 ? (
            <div
              className={`${styles.actionSection} ${styles.actionSection_errors_list}`}
            >
              <div className={styles.actionTitle}>{'Database Errors List'}</div>
              <div className={styles.actionItems}>
                {dbErrors.map((eachItem, ind) => {
                  return (
                    <div
                      key={ind}
                      className={`${styles.actionItem} ${styles.actionErrorItem}`}
                    >
                      {JSON.stringify(eachItem)}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};
