import { RSI_CATEGORIES } from './constants';

export const RSI_DISPLAY_TITLES = {
  [RSI_CATEGORIES.lessthan30]: 'RSI < 30%',
  [RSI_CATEGORIES.morethan70]: 'RSI > 70%',
  [RSI_CATEGORIES.nearTo30]: 'RSI near to 30%',
  [RSI_CATEGORIES.nearTo70]: 'RSI near to 70%',
};

export const RSI_HEADERS = ['No.', 'Stock Exchange Code', 'RSI'];
