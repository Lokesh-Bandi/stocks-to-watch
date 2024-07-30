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

export const SERVER_URL = 'http://localhost:3000';

export const API_ENDPOINTS = {
  allStocksDataForToday: `${SERVER_URL}/today/all/nifty500`,
  oneStockDataForToday: `${SERVER_URL}/today/#StockExchangeCode#`,
  historicalDataAll: `${SERVER_URL}/historicalData/all/nifty500/50`,
  historicalDataForOneStock: `${SERVER_URL}/historicalData/RVNL`,
  stockData: `${SERVER_URL}/stock-data/JAIBALAJI?noOfDays=3`,
  rsi: `${SERVER_URL}/ta/RVNL?ti=rsi&interval=4hour`,
  mfi: `${SERVER_URL}/ta/RVNL?ti=mfi&interval=4hour`,
  obv: `${SERVER_URL}/ta/RVNL?ti=obv&interval=4hour`,
  rsiAll: `${SERVER_URL}/ta/all/nifty500?ti=rsi`,
  mfiAll: `${SERVER_URL}/ta/all/nifty500?ti=mfi`,
};
// const naem = {
//   apiSuccessArray: ['RVNL', 'YESBANK'],
//   apiErrorArray: ['ANURAS'],
//   DBCreatedArray: [],
//   DBUpdatedArray: ['RVNL', 'YESBANK'],
//   DBErrorArray: ['ANURAS'],
//   APIErrors: [
//     {
//       stockExchangeCode: 'ANURAS',
//       apiError: {
//         status: 'error',
//         errors: [
//           {
//             errorCode: 'UDAPI100011',
//             message: 'Invalid Instrument key',
//             propertyPath: null,
//             invalidValue: null,
//             error_code: 'UDAPI100011',
//             property_path: null,
//             invalid_value: null,
//           },
//         ],
//       },
//     },
//   ],
//   DBErrors: [
//     {
//       stockExchangeCode: 'ANURAS',
//       dbError:
//         'Error updating document for the NSE_EQ|INE930P010181 --> MongoServerError: The argument to $each in $push must be an array but it was of type: object',
//     },
//   ],
//   message: 'Data save sucessfully -- Your manual stop count has been reached',
// };
