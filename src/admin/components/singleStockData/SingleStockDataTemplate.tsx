import { ChangeEvent, useState } from 'react';

import { ALERT_TYPES } from '../../../alerts/AlertAction';
import { SearchBox } from '../../../components/searchBox/SearchBox';
import { Spinner } from '../../../components/spinner/Spinner';
import { API_STATUS } from '../../../constants/constants';
import { NIFTY_500 } from '../../../constants/stocks_constants';
import { useAppDispatch } from '../../../store/AppStore';
import { adminActions, useAdminSlice } from '../../../store/slices/admin';
import { generalActions } from '../../../store/slices/general';

import styles from './SingleStockDataTemplate.module.css';

interface SingleStockDataTemplateProps {
  alertType: ALERT_TYPES;
  daysField?: boolean;
}
export const SingleStockDataTemplate = ({ alertType, daysField = false }: SingleStockDataTemplateProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAdminSlice.isLoading();
  const [days, setDays] = useState<number>(0);
  const singleStockData = useAdminSlice.getOneStockDataForToday();
  const handleOptionClick = (stockExchangeCode: string) => {
    dispatch(adminActions.setStockExchangeCodeToSearch(stockExchangeCode));
  };
  const handleUpdateButton = () => {
    dispatch(generalActions.setAlertType(alertType));
  };
  const handleDaysInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setDays(parseInt(value));
    dispatch(adminActions.setLastNDaysFromToday(parseInt(value)));
  };
  return (
    <div className={styles.mainSection}>
      <SearchBox recommondationList={NIFTY_500} onClick={handleOptionClick} />
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
      <div className={styles.update_button} onClick={handleUpdateButton}>
        {'Update One'}
      </div>
      {isLoading ? <Spinner /> : null}
      {singleStockData && !isLoading ? (
        <div className={styles.contentSection}>
          <h2>{singleStockData?.stockExchangeCode}</h2>
          <div>
            <h3>{`API: ${singleStockData?.api.status}`}</h3>
            {singleStockData?.api.status === API_STATUS.error && <div>{JSON.stringify(singleStockData.api.ack)}</div>}
          </div>
          <div>
            <h3>{`DB: ${singleStockData?.db.status}`}</h3>
            <div>{JSON.stringify(singleStockData?.db.ack)}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
