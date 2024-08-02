import { ALERT_TYPES } from '../alerts/AlertAction';

export enum ACTION_NAMES {
  updateHistoricalDataForAll = 'updateHistoricalDataForAll',
  udpateHistoricalDataForSingleStock = 'udpateHistoricalDataForSingleStock',
  updateTodayDataForAll = 'updateTodayDataForAll',
  udpatetodayDataForSingleStock = 'udpatetodayDataForSingleStock',
  updateInstrumentalCode = 'updateInstrumentalCode',
  updateLastNdaysFromTodayDataForAll = 'updateLastNdaysFromTodayDataForAll',
  updateLastNdaysFromTodayDataForOne = 'updateLastNdaysFromTodayDataForOne',
}
export const ACTIONS: Record<
  string,
  { actionName: ACTION_NAMES; actionTitle: string; alertToTrigger: ALERT_TYPES }
> = {
  updateHistoricalDataForAll: {
    actionName: ACTION_NAMES.updateHistoricalDataForAll,
    actionTitle: `Update HD(50-ALL)`,
    alertToTrigger: ALERT_TYPES.HistoricalDataConfirmation_A,
  },
  udpateHistoricalDataForSingleStock: {
    actionName: ACTION_NAMES.udpateHistoricalDataForSingleStock,
    actionTitle: `Update HD(50-ONE)`,
    alertToTrigger: ALERT_TYPES.HistoricalDataConfirmation_S,
  },
  updateTodayDataForAll: {
    actionName: ACTION_NAMES.updateTodayDataForAll,
    actionTitle: `Update DB(Today-ALL)`,
    alertToTrigger: ALERT_TYPES.TodayDataConfirmation_A,
  },
  udpatetodayDataForSingleStock: {
    actionName: ACTION_NAMES.udpatetodayDataForSingleStock,
    actionTitle: `Update DB(Today-ONE)`,
    alertToTrigger: ALERT_TYPES.TodayDataConfirmation_S,
  },
  updateInstrumentalCode: {
    actionName: ACTION_NAMES.updateInstrumentalCode,
    actionTitle: `Update IC(ONE)`,
    alertToTrigger: ALERT_TYPES.InstrumentalCodeUpdate_S,
  },
  updateLastNdaysFromTodayDataForAll: {
    actionName: ACTION_NAMES.updateLastNdaysFromTodayDataForAll,
    actionTitle: `Update Last N days(ALL)`,
    alertToTrigger: ALERT_TYPES.LastNDaysFromTodayDataConfirmation_A,
  },
  updateLastNdaysFromTodayDataForOne: {
    actionName: ACTION_NAMES.updateLastNdaysFromTodayDataForOne,
    actionTitle: `Update Last N days(ONE)`,
    alertToTrigger: ALERT_TYPES.LastNDaysFromTodayDataConfirmation_S,
  },
  //   historicalDataForAll: {
  //     actionName: 'Historical Data (ALL)',
  //     fetchAction: fetchAllStocksDataForTodayAction,
  //   },
  // historicalDataForOneStock: {
  //   actionName: 'Historical Data (One)',
  //   fetchAction: API_ENDPOINTS.historicalDataForOneStock,
  // },
  // todayDataForOneStock: {
  //   actionName: `Today's Data (One)`,
  //   fetchAction: API_ENDPOINTS.todayData,
  // },
  // RSI: {
  //   actionName: `RSI`,
  //   fetchAction: API_ENDPOINTS.rsi,
  // },
  // MFI: {
  //   actionName: `MFI`,
  //   fetchAction: API_ENDPOINTS.mfi,
  // },
  // OBV: {
  //   actionName: `OBV`,
  //   fetchAction: API_ENDPOINTS.obv,
  // },
  // rsiAll: {
  //   actionName: `RSI (ALL)`,
  //   fetchAction: API_ENDPOINTS.rsiAll,
  // },
  // mfiAll: {
  //   actionName: `MFI (ALL)`,
  //   fetchAction: API_ENDPOINTS.mfiAll,
  // },
  // stockData: {
  //   actionName: 'Stock Data',
  //   fetchAction: API_ENDPOINTS.stockData,
  // },
};
