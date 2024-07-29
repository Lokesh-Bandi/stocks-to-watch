const API_ENDPOINTS = {
  todayDataAll: 'http://localhost:3000/today/all/testArray',
  historicalDataAll: 'http://localhost:3000/historicalData/all/nifty500/50',
  historicalDataForOneStock: 'http://localhost:3000/historicalData/RVNL',
  todayData: 'http://localhost:3000/today/YESBANK',
  stockData: 'http://localhost:3000/stock-data/JAIBALAJI?noOfDays=3',
  rsi: 'http://localhost:3000/ta/RVNL?ti=rsi&interval=4hour',
  mfi: 'http://localhost:3000/ta/RVNL?ti=mfi&interval=4hour',
  obv: 'http://localhost:3000/ta/RVNL?ti=obv&interval=4hour',
  rsiAll: 'http://localhost:3000/ta/all/nifty500?ti=rsi',
  mfiAll: 'http://localhost:3000/ta/all/nifty500?ti=mfi',
};
export const ACTIONS: Record<
  string,
  { actionName: string; actionURL: string }
> = {
  historicalDataForAll: {
    actionName: 'Historical Data (ALL)',
    actionURL: API_ENDPOINTS.historicalDataAll,
  },
  todayDataForAll: {
    actionName: `Today's Data (ALL)`,
    actionURL: API_ENDPOINTS.todayDataAll,
  },
  historicalDataForOneStock: {
    actionName: 'Historical Data (One)',
    actionURL: API_ENDPOINTS.historicalDataForOneStock,
  },
  todayDataForOneStock: {
    actionName: `Today's Data (One)`,
    actionURL: API_ENDPOINTS.todayData,
  },
  RSI: {
    actionName: `RSI`,
    actionURL: API_ENDPOINTS.rsi,
  },
  MFI: {
    actionName: `MFI`,
    actionURL: API_ENDPOINTS.mfi,
  },
  OBV: {
    actionName: `OBV`,
    actionURL: API_ENDPOINTS.obv,
  },
  rsiAll: {
    actionName: `RSI (ALL)`,
    actionURL: API_ENDPOINTS.rsiAll,
  },
  mfiAll: {
    actionName: `MFI (ALL)`,
    actionURL: API_ENDPOINTS.mfiAll,
  },
  stockData: {
    actionName: 'Stock Data',
    actionURL: API_ENDPOINTS.stockData,
  },
};
