import { ALERT_TYPES } from '../../../alerts/AlertAction';
import { SearchBox } from '../../../components/searchBox/SearchBox';
import { Spinner } from '../../../components/spinner/Spinner';
import { API_STATUS } from '../../../constants/constants';
import { NIFTY_500 } from '../../../constants/stocks_constants';
import { useAppDispatch } from '../../../store/AppStore';
import { adminActions, useAdminSlice } from '../../../store/slices/admin';
import { generalActions } from '../../../store/slices/general';

import styles from './SingleStockDataTemplate.module.css';

export const SingleStockDataTemplate = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAdminSlice.isLoading();
  const singleStockData = useAdminSlice.getOneStockDataForToday();
  const handleOptionClick = (stockExchangeCode: string) => {
    dispatch(adminActions.setStockExchangeCodeToSearch(stockExchangeCode));
  };
  const handleUpdateButton = () => {
    dispatch(generalActions.setAlertType(ALERT_TYPES.TodayDataConfirmation_S));
  };
  return (
    <div className={styles.mainSection}>
      <SearchBox recommondationList={NIFTY_500} onClick={handleOptionClick} />
      <div className={styles.update_button} onClick={handleUpdateButton}>
        {'Update One'}
      </div>
      {isLoading ? <Spinner /> : null}
      {singleStockData && !isLoading ? (
        <div className={styles.contentSection}>
          <h2>{singleStockData?.stockExchangeCode}</h2>
          <div>
            <h3>{`API: ${singleStockData?.api.status}`}</h3>
            {singleStockData?.api.status === API_STATUS.error && (
              <div>{JSON.stringify(singleStockData.api.ack)}</div>
            )}
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
