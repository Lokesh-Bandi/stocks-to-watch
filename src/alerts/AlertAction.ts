import { fetchAllStocksDataForTodayAction } from '../store/apiActions/getActions/fetchAllStocksDataForTodayAction';
import { fetchOneStocksDataForTodayAction } from '../store/apiActions/getActions/fetchOneStocksDataForTodayAction';
import { udpateLastNDaysFromTodayForAllAction } from '../store/apiActions/postActions/udpateLastNDaysFromTodayForAllAction';
import { udpateLastNDaysFromTodayForOneAction } from '../store/apiActions/postActions/udpateLastNDaysFromTodayForOneAction';
import { updateOneInstrumentalCodeAction } from '../store/apiActions/postActions/updateOneInstrumentalCodeAction';
import { AppStore } from '../store/AppStore';

export enum ALERT_TYPES {
  // CONFIRMATION = 'confirmation',
  // HistorocalDataConfirmation_A = 'HistorocalDataConfirmation_ALL',
  // HistorocalDataConfirmation_S = 'HistorocalDataConfirmation_SINGLE',
  TodayDataConfirmation_A = 'TodayDataConfirmation_ALL',
  TodayDataConfirmation_S = 'TodayDataConfirmation_SINGLE',
  InstrumentalCodeUpdate_S = 'InstrumentalCodeUpdate_SINGLE',
  LastNDaysFromTodayDataConfirmation_A = 'LastNDaysFromTodayDataConfirmation_ALL',
  LastNDaysFromTodayDataConfirmation_S = 'LastNDaysFromTodayDataConfirmation_SINGLE',
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
  [ALERT_TYPES.InstrumentalCodeUpdate_S]: () => {
    const {
      admin: { stockExchangeCodeToSearch, instrumentalCodeToUpdate },
    } = AppStore.getState();
    AppStore.dispatch(
      updateOneInstrumentalCodeAction({
        stockExchangeCode: stockExchangeCodeToSearch,
        ic: instrumentalCodeToUpdate,
      })
    );
  },
  [ALERT_TYPES.LastNDaysFromTodayDataConfirmation_A]: () => {
    const {
      admin: { lastNdays },
    } = AppStore.getState();
    AppStore.dispatch(
      udpateLastNDaysFromTodayForAllAction({
        days: lastNdays,
      })
    );
  },
  [ALERT_TYPES.LastNDaysFromTodayDataConfirmation_S]: () => {
    const {
      admin: { stockExchangeCodeToSearch, lastNdays },
    } = AppStore.getState();
    AppStore.dispatch(
      udpateLastNDaysFromTodayForOneAction({
        stockExchangeCode: stockExchangeCodeToSearch,
        days: lastNdays,
      })
    );
  },
};
