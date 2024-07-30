import { fetchAllStocksDataForTodayAction } from '../store/apiActions/getActions/fetchAllStocksDataForTodayAction';
import { fetchOneStocksDataForTodayAction } from '../store/apiActions/getActions/fetchOneStocksDataForTodayAction';
import { AppStore } from '../store/AppStore';

export enum ALERT_TYPES {
  // CONFIRMATION = 'confirmation',
  // HistorocalDataConfirmation_A = 'HistorocalDataConfirmation_ALL',
  // HistorocalDataConfirmation_S = 'HistorocalDataConfirmation_SINGLE',
  TodayDataConfirmation_A = 'TodayDataConfirmation_ALL',
  TodayDataConfirmation_S = 'TodayDataConfirmation_SINGLE',
}
export const ALERT_ACTIONS = {
  [ALERT_TYPES.TodayDataConfirmation_A]: () => {
    AppStore.dispatch(fetchAllStocksDataForTodayAction());
  },
  [ALERT_TYPES.TodayDataConfirmation_S]: () => {
    const {
      admin: { stockExchangeCodeToSearch },
    } = AppStore.getState();
    AppStore.dispatch(
      fetchOneStocksDataForTodayAction(stockExchangeCodeToSearch)
    );
  },
};
