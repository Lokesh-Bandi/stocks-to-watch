import { BOLLINGERBANDS_CATEGORIES, MFI_CATEGORIES, RSI_CATEGORIES, VOLUME_SPIKE_CATEGORIES } from './constants';

export const RSI_DISPLAY_TITLES = {
  [RSI_CATEGORIES.lessthan30]: 'RSI < 30%',
  [RSI_CATEGORIES.morethan70]: 'RSI > 70%',
  [RSI_CATEGORIES.nearTo30]: 'RSI near to 30%',
  [RSI_CATEGORIES.nearTo70]: 'RSI near to 70%',
};

export const RSI_TABLE = {
  headers: ['No.', 'Stock Exch. Code', 'LTP', 'RSI', 'Info'],
  colWidths: ['10%', '40%', '20%', '20%', '10%'],
};

export const MFI_DISPLAY_TITLES = {
  [MFI_CATEGORIES.lessthan20]: 'MFI < 20%',
  [MFI_CATEGORIES.morethan80]: 'MFI > 80%',
  [MFI_CATEGORIES.nearTo20]: 'MFI near to 20%',
  [MFI_CATEGORIES.nearTo80]: 'MFI near to 80%',
};

export const MFI_TABLE = {
  headers: ['No.', 'Stock Exch. Code', 'LTP', 'MFI', 'Info'],
  colWidths: ['10%', '40%', '20%', '20%', '10%'],
};

export const BollingerBands_DISPLAY_TITLES = {
  [BOLLINGERBANDS_CATEGORIES.lessthan0]: 'Percent B ratio (%B) < 0',
  [BOLLINGERBANDS_CATEGORIES.morethan1]: 'Percent B ratio (%B) > 1',
  [BOLLINGERBANDS_CATEGORIES.nearTo0D1]: 'Percent B ratio (%B) near to 0.1',
  [BOLLINGERBANDS_CATEGORIES.nearTo0D9]: 'Percent B ratio (%B) near to 0.9',
};

export const BollingerBands_TABLE = {
  headers: ['No.', 'Stock Exch. Code', 'LTP', '%B', 'Info'],
  colWidths: ['10%', '40%', '20%', '20%', '10%'],
};

export const VolumeSpike_DISPLAY_TITLES = {
  [VOLUME_SPIKE_CATEGORIES.upTrend]: 'Volume Increased and Price Increased',
  [VOLUME_SPIKE_CATEGORIES.downTrend]: 'Volume Increased and Price Decreased',
  [VOLUME_SPIKE_CATEGORIES.neutral]: 'Neutral Movement in Both',
};

export const VolumeSpike_TABLE = {
  headers: ['No.', 'Stock Exch. Code', 'LTP', 'VolumeChangedBy', 'Info'],
  colWidths: ['10%', '40%', '20%', '20%', '10%'],
};
