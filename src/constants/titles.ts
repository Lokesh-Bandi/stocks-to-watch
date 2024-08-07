import { MFI_CATEGORIES, RSI_CATEGORIES } from './constants';

export const RSI_DISPLAY_TITLES = {
  [RSI_CATEGORIES.lessthan30]: 'RSI < 30%',
  [RSI_CATEGORIES.morethan70]: 'RSI > 70%',
  [RSI_CATEGORIES.nearTo30]: 'RSI near to 30%',
  [RSI_CATEGORIES.nearTo70]: 'RSI near to 70%',
};

export const RSI_TABLE = {
  headers: ['No.', 'Stock Exch. Code', 'LTP', 'RSI', 'Info'],
  colWidths: ['10%', '50%', '15%', '15%', '10%'],
};

export const MFI_DISPLAY_TITLES = {
  [MFI_CATEGORIES.lessthan20]: 'MFI < 20%',
  [MFI_CATEGORIES.morethan80]: 'MFI > 80%',
  [MFI_CATEGORIES.nearTo20]: 'MFI near to 20%',
  [MFI_CATEGORIES.nearTo80]: 'MFI near to 80%',
};

export const MFI_TABLE = {
  headers: ['No.', 'Stock Exch. Code', 'LTP', 'MFI', 'Info'],
  colWidths: ['10%', '50%', '15%', '15%', '10%'],
};
