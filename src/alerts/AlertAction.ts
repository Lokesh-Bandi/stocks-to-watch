import { fetchAllStocksDataForTodayAction } from '../store/apiActions/getActions/fetchAllStocksDataForTodayAction';
import { fetchOneStocksDataForTodayAction } from '../store/apiActions/getActions/fetchOneStocksDataForTodayAction';
import { udpateLastNDaysFromTodayForAllAction } from '../store/apiActions/postActions/udpateLastNDaysFromTodayForAllAction';
import { udpateLastNDaysFromTodayForOneAction } from '../store/apiActions/postActions/udpateLastNDaysFromTodayForOneAction';
import { updatehHistoricalStockDataForAllAction } from '../store/apiActions/postActions/updatehHistoricalStockDataForAllAction';
import { updateHistoricalStockDataForOneAction } from '../store/apiActions/postActions/updateHistoricalStockDataForOneAction';
import { updateOneInstrumentalCodeAction } from '../store/apiActions/postActions/updateOneInstrumentalCodeAction';
import { updateTechnicalIndicatorsAndKeyStocksAction } from '../store/apiActions/postActions/updateTechnicalIndicatorsAndKeyStocksAction';
import { AppStore } from '../store/AppStore';

export enum ALERT_TYPES {
  HistoricalDataConfirmation_A = 'HistoricalDataConfirmation_ALL',
  HistoricalDataConfirmation_S = 'HistoricalDataConfirmation_SINGLE',
  TodayDataConfirmation_A = 'TodayDataConfirmation_ALL',
  TodayDataConfirmation_S = 'TodayDataConfirmation_SINGLE',
  InstrumentalCodeUpdate_S = 'InstrumentalCodeUpdate_SINGLE',
  LastNDaysFromTodayDataConfirmation_A = 'LastNDaysFromTodayDataConfirmation_ALL',
  LastNDaysFromTodayDataConfirmation_S = 'LastNDaysFromTodayDataConfirmation_SINGLE',
  TechIndAndKeyStocks = 'TechIndAndKeyStocks',
}

export const ALERT_ACTIONS = {
  [ALERT_TYPES.HistoricalDataConfirmation_A]: () => {
    AppStore.dispatch(updatehHistoricalStockDataForAllAction());
  },
  [ALERT_TYPES.HistoricalDataConfirmation_S]: () => {
    const {
      admin: { stockExchangeCodeToSearch },
    } = AppStore.getState();
    AppStore.dispatch(
      updateHistoricalStockDataForOneAction(stockExchangeCodeToSearch)
    );
  },
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
  [ALERT_TYPES.TechIndAndKeyStocks]: () => {
    AppStore.dispatch(updateTechnicalIndicatorsAndKeyStocksAction());
  },
};
