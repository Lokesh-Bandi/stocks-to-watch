export const PASSCODE = '1q2w3';

export const sampleBrandingArray = [
  {
    count: 20,
    title: 'RSI < 30%',
  },
  {
    count: 40,
    title: 'RSI > 70%',
  },
  {
    count: 102,
    title: 'RSI near to 30%',
  },
  {
    count: 49,
    title: 'RSI near to 70%',
  },
];
export const SessionStorageKeys = {
  admin: 'admin',
  passcode: 'passcode',
};

export const API_STATUS = {
  success: 'success',
  error: 'error',
};

export const DB_STATUS = {
  created: 'created',
  updated: 'updated',
  error: 'error',
};

// export const SERVER_URL = 'http://localhost:3000';
// export const SERVER_URL = 'http://192.168.1.11:3000';
export const SERVER_URL = 'https://stocks2watch.onrender.com'; //Render.com instance IP

export const API_ENDPOINTS = {
  allStocksDataForToday: `${SERVER_URL}/today/all/nifty500`,
  oneStockDataForToday: `${SERVER_URL}/today/#StockExchangeCode#`,
  historicalDataAll: `${SERVER_URL}/historicalData/all/nifty500/50`,
  historicalDataForOneStock: `${SERVER_URL}/historicalData/#StockExchangeCode#`,
  stockData: `${SERVER_URL}/stock-data/JAIBALAJI?noOfDays=3`,
  rsi: `${SERVER_URL}/ta/RVNL?ti=rsi&interval=4hour`,
  mfi: `${SERVER_URL}/ta/RVNL?ti=mfi&interval=4hour`,
  obv: `${SERVER_URL}/ta/RVNL?ti=obv&interval=4hour`,
  rsiAll: `${SERVER_URL}/ta/all/nifty500?ti=rsi`,
  mfiAll: `${SERVER_URL}/ta/all/nifty500?ti=mfi`,
  instrumentalCodeUpdate: `${SERVER_URL}/meta/ic/#StockExchangeCode#`,
  lastNDaysFromTodayAll: `${SERVER_URL}/today/ln/all/nifty500`,
  lastNdaysFromTodayOne: `${SERVER_URL}/today/ln/#StockExchangeCode#`,
  techIndsAndKeyStocks: `${SERVER_URL}/ta/tis/nifty500`,
};

export const UI_API_ENDPOINTS = {
  keyStocksAPI: `${SERVER_URL}/ui/key-stocks`,
  coreData: `${SERVER_URL}/ui/core-data`,
  momentumStocks: `${SERVER_URL}/ui/momentum-stocks`,
  chartStockData: `${SERVER_URL}/ui/stock-data/#StockExchangeCode#`,
};

export type ValueOf<T> = T[keyof T];

export const TIME_INTERVAL = {
  One_Minute: '1minute',
  Five_Minute: '5minute',
  Ten_Minute: '10minute',
  Fifteen_Minute: '15minute',
  Thirty_Minute: '30minute',
  Four_Hour: '4hour',
  One_Day: '1day',
} as const;
export type TIME_INTERVAL_VALUES_TYPE = ValueOf<typeof TIME_INTERVAL>;

export const TECH_INDICATOR_TIME_INTERVALS = [
  TIME_INTERVAL.Fifteen_Minute,
  TIME_INTERVAL.Four_Hour,
  TIME_INTERVAL.One_Day,
];

export const RSI_CATEGORIES = {
  lessthan30: 'lessthan30',
  morethan70: 'morethan70',
  nearTo30: 'nearTo30',
  nearTo70: 'nearTo70',
} as const;
export type RSI_CATEGORIES_VALUES_TYPE = ValueOf<typeof RSI_CATEGORIES>;

export const MFI_CATEGORIES = {
  lessthan20: 'lessthan20',
  morethan80: 'morethan80',
  nearTo20: 'nearTo20',
  nearTo80: 'nearTo80',
} as const;

export type MFI_CATEGORIES_VALUES_TYPE = ValueOf<typeof MFI_CATEGORIES>;

export const BOLLINGERBANDS_CATEGORIES = {
  lessthan0: 'lessthan0',
  morethan1: 'morethan1',
  nearTo0D1: 'nearTo0D1',
  nearTo0D9: 'nearTo0D9',
} as const;

export type BOLLINGERBANDS_CATEGORIES_VALUES_TYPE = ValueOf<typeof BOLLINGERBANDS_CATEGORIES>;

export const VOLUME_SPIKE_CATEGORIES = {
  upTrend: 'upTrend',
  downTrend: 'downTrend',
  neutral: 'neutral',
} as const;

export type VOLUME_SPIKE_CATEGORIES_VALUES_TYPE = ValueOf<typeof VOLUME_SPIKE_CATEGORIES>;

export const TECHNICAL_INDICATORS = {
  rsi: 'rsi',
  mfi: 'mfi',
  bollingerbands: 'bollingerbands',
  volumeSpike: 'volumeSpike',
} as const;

export type TECHNICAL_INDICATORS_VALUES_TYPE = ValueOf<typeof TECHNICAL_INDICATORS>;

export const TECHNICAL_INDICATORS_ARR = Object.values(TECHNICAL_INDICATORS);

export const DRAWER_ITEMS = {
  dashboard: 'Dashboard',
  rsi: 'RSI',
  mfi: 'MFI',
  bollingerBands: 'Bollinger Bands',
  volumeSprut: 'Volume Sprut',
  charts: 'Charts',
};

export const STOCK_MARKET_MOVEMENT = {
  bearish: 'Bearish',
  bullish: 'Bullish',
  neutral: 'Neutral',
};

export type STOCK_MARKET_MOVEMENT_VALUES_TYPE = ValueOf<typeof STOCK_MARKET_MOVEMENT>;
