import { ReactNode } from 'react';

import { ALERT_TYPES } from '../../../alerts/AlertAction';
import { Spinner } from '../../../components/spinner/Spinner';
import { DB_STATUS } from '../../../constants/constants';
import { useAppDispatch } from '../../../store/AppStore';
import { useAdminSlice } from '../../../store/slices/admin';
import { generalActions } from '../../../store/slices/general';
import { ResponseTemplate } from '../responseTemplate/ResponseTemplate';
import { UpdateButton } from '../updateButton/UpdateButton';

export const TechIndAndKeyStocks = (): ReactNode | null => {
  const dispatch = useAppDispatch();
  const techIndAndKeyStocks = useAdminSlice.getTechIndAndKeyStocks();
  const isLoading = useAdminSlice.isLoading();

  const handleUpdateClick = () => {
    dispatch(generalActions.setAlertType(ALERT_TYPES.TechIndAndKeyStocks));
  };
  return (
    <>
      <UpdateButton onClick={handleUpdateClick} />
      {isLoading && <Spinner />}
      {techIndAndKeyStocks && (
        <>
          <ResponseTemplate
            title={'Technical Indicators Revision'}
            status={techIndAndKeyStocks.tiValues.status}
            ack={techIndAndKeyStocks.tiValues.ack}
            hasError={techIndAndKeyStocks.tiValues.status === DB_STATUS.error}
          />
          <ResponseTemplate
            title={'Key Stocks Revision'}
            status={techIndAndKeyStocks.keyStocks.status}
            ack={techIndAndKeyStocks.keyStocks.ack}
            hasError={techIndAndKeyStocks.tiValues.status === DB_STATUS.error}
          />
        </>
      )}
    </>
  );
};
