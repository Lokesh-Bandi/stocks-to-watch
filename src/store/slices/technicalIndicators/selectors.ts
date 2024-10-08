import { useAppSelector } from '../../AppStore';

import {
  BollingerBands_ResponseType,
  IntervalDataType,
  MFI_ResponseType,
  RSI_ResponseType,
  TechIndType,
  VolumeSpike_ResponseType,
} from './types';

export const useTechnicalIndicatorsSlice = {
  isLoading: (): boolean => {
    return useAppSelector(({ technicalIndicators }) => technicalIndicators.isLoading);
  },
  getRsiKeyStocks: (): IntervalDataType<RSI_ResponseType> | null => {
    return useAppSelector(
      ({ technicalIndicators }) =>
        (technicalIndicators.technicalIndicators.rsi as IntervalDataType<RSI_ResponseType>) ?? null
    );
  },
  getMfiiKeyStocks: (): IntervalDataType<MFI_ResponseType> | null => {
    return useAppSelector(
      ({ technicalIndicators }) =>
        (technicalIndicators.technicalIndicators.mfi as IntervalDataType<MFI_ResponseType>) ?? null
    );
  },
  getBollingerBandsKeyStocks: (): IntervalDataType<BollingerBands_ResponseType> | null => {
    return useAppSelector(
      ({ technicalIndicators }) =>
        (technicalIndicators.technicalIndicators.bollingerbands as IntervalDataType<BollingerBands_ResponseType>) ??
        null
    );
  },
  getVolumeSpikeKeyStocks: (): IntervalDataType<VolumeSpike_ResponseType> | null => {
    return useAppSelector(
      ({ technicalIndicators }) =>
        (technicalIndicators.technicalIndicators.volumeSpike as IntervalDataType<VolumeSpike_ResponseType>) ?? null
    );
  },
  getMomentumStocks: (): TechIndType['momentumStocks'] => {
    return useAppSelector(({ technicalIndicators }) => technicalIndicators.momentumStocks);
  },
};
