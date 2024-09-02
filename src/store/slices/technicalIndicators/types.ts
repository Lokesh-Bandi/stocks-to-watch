import {
  BOLLINGERBANDS_CATEGORIES_VALUES_TYPE,
  MFI_CATEGORIES_VALUES_TYPE,
  RSI_CATEGORIES_VALUES_TYPE,
  STOCK_MARKET_MOVEMENT_VALUES_TYPE,
  TECHNICAL_INDICATORS_VALUES_TYPE,
  TIME_INTERVAL_VALUES_TYPE,
  VOLUME_SPIKE_CATEGORIES_VALUES_TYPE,
} from '../../../constants/constants';

export interface KEY_STOCK_ITEM_TYPE {
  stockExchangeCode: string;
  value: number | Record<string, number | string | boolean>;
}
export interface RSI_ResponseType extends Partial<Record<RSI_CATEGORIES_VALUES_TYPE, KEY_STOCK_ITEM_TYPE[]>> {}

export interface MFI_ResponseType extends Partial<Record<MFI_CATEGORIES_VALUES_TYPE, KEY_STOCK_ITEM_TYPE[]>> {}

export interface BollingerBands_ResponseType
  extends Partial<Record<BOLLINGERBANDS_CATEGORIES_VALUES_TYPE, KEY_STOCK_ITEM_TYPE[]>> {}

export interface VolumeSpike_ResponseType
  extends Partial<Record<VOLUME_SPIKE_CATEGORIES_VALUES_TYPE, KEY_STOCK_ITEM_TYPE[]>> {}

export interface IntervalDataType<T> extends Partial<Record<TIME_INTERVAL_VALUES_TYPE, T>> {}

export interface CustomTechnicalIndicatorType
  extends Partial<
    Record<
      TECHNICAL_INDICATORS_VALUES_TYPE,
      | IntervalDataType<RSI_ResponseType>
      | IntervalDataType<MFI_ResponseType>
      | IntervalDataType<BollingerBands_ResponseType>
      | IntervalDataType<VolumeSpike_ResponseType>
      | null
    >
  > {}
export interface MomentumAndCandleStickPatternType {
  momentum: STOCK_MARKET_MOVEMENT_VALUES_TYPE;
  patternsFollowed: string[] | [];
}
export interface TechIndType {
  technicalIndicators: CustomTechnicalIndicatorType;
  lastUpdated: string;
  isLoading: boolean;
  momentumStocks: Record<string, MomentumAndCandleStickPatternType> | null;
}
