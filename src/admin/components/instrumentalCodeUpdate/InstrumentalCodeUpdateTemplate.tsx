import { ChangeEvent, useState } from 'react';

import { ALERT_TYPES } from '../../../alerts/AlertAction';
import { SearchBox } from '../../../components/searchBox/SearchBox';
import { Spinner } from '../../../components/spinner/Spinner';
import { NIFTY_500 } from '../../../constants/stocks_constants';
import { useAppDispatch } from '../../../store/AppStore';
import { adminActions, useAdminSlice } from '../../../store/slices/admin';
import { generalActions } from '../../../store/slices/general';

import styles from './InstrumentalCodeUpdate.module.css';

export const InstrumentalCodeUpdateTemplate = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAdminSlice.isLoading();
  const postResponse = useAdminSlice.getInstrumentalCodeUpdatePostResponse();
  const [instrumentalCode, setInstrumentalCode] = useState<string>('');
  const handleOptionClick = (stockExchangeCode: string) => {
    dispatch(adminActions.setStockExchangeCodeToSearch(stockExchangeCode));
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setInstrumentalCode(value);
    dispatch(adminActions.setInstrumentalCodeToUpdate(value));
  };
  const handleUpdateButton = () => {
    dispatch(generalActions.setAlertType(ALERT_TYPES.InstrumentalCodeUpdate_S));
  };
  return (
    <div className={styles.mainSection}>
      <div className={styles.inputBlock}>
        <SearchBox recommondationList={NIFTY_500} onClick={handleOptionClick} />
        <input
          className={styles.searchInput}
          type="text"
          value={instrumentalCode}
          onChange={handleInputChange}
          placeholder="Enter Instrumental Code..."
        />
        <div className={styles.update_button} onClick={handleUpdateButton}>
          {'Update One'}
        </div>
      </div>
      {isLoading ? <Spinner /> : null}
      {postResponse && !isLoading ? (
        <div className={styles.contentSection}>
          <div>
            <h3>{`DB: ${postResponse.status}`}</h3>
            <div>{JSON.stringify(postResponse.ack)}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
