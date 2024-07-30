import { ALERT_TYPES } from '../alerts/AlertAction';

export enum ACTION_NAMES {
  updateTodayDataForAll = 'updateTodayDataForAll',
  udpatetodayDataForSingleStock = 'udpatetodayDataForSingleStock',
}
export const ACTIONS: Record<
  string,
  { actionName: ACTION_NAMES; actionTitle: string; alertToTrigger: ALERT_TYPES }
> = {
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
