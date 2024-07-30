import { ALERT_TYPES } from '../alerts/AlertAction';

// const API_ENDPOINTS = {
//   todayDataAll: 'http://localhost:3000/today/all/nifty500',
//   historicalDataAll: 'http://localhost:3000/historicalData/all/nifty500/50',
//   historicalDataForOneStock: 'http://localhost:3000/historicalData/RVNL',
//   todayData: 'http://localhost:3000/today/YESBANK',
//   stockData: 'http://localhost:3000/stock-data/JAIBALAJI?noOfDays=3',
//   rsi: 'http://localhost:3000/ta/RVNL?ti=rsi&interval=4hour',
//   mfi: 'http://localhost:3000/ta/RVNL?ti=mfi&interval=4hour',
//   obv: 'http://localhost:3000/ta/RVNL?ti=obv&interval=4hour',
//   rsiAll: 'http://localhost:3000/ta/all/nifty500?ti=rsi',
//   mfiAll: 'http://localhost:3000/ta/all/nifty500?ti=mfi',
// };
export const ACTIONS: Record<
  string,
  { actionName: string; alertToTrigger: ALERT_TYPES }
> = {
  todayDataForAll: {
    actionName: `Today's Data (ALL)`,
    alertToTrigger: ALERT_TYPES.TodayDataConfirmation_A,
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
