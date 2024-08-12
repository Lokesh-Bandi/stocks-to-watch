import { postTemplate } from '../components/svgs/instaTemplates';
import { BOLLINGERBANDS_CATEGORIES, MFI_CATEGORIES, RSI_CATEGORIES, TIME_INTERVAL } from '../constants/constants';
import { AppStore } from '../store/AppStore';
import {
  BollingerBands_ResponseType,
  IntervalDataType,
  MFI_ResponseType,
  RSI_ResponseType,
} from '../store/slices/technicalIndicators';

const TOP_PICKS_COUNT = 5;
export const getRsiIntsaPosts = (rsi: IntervalDataType<RSI_ResponseType>) => {
  const rsiOverSold = postTemplate({
    isSuccess: false,
    title: 'RSI',
    category: 'OverSold',
    tiValueHeader: 'RSI',
    stockList: rsi?.[TIME_INTERVAL.One_Day]?.[RSI_CATEGORIES.lessthan30]?.slice(0, TOP_PICKS_COUNT) ?? [],
  });
  const rsiOverBought = postTemplate({
    isSuccess: true,
    title: 'RSI',
    category: 'OverBought',
    tiValueHeader: 'RSI',
    stockList: rsi?.[TIME_INTERVAL.One_Day]?.[RSI_CATEGORIES.morethan70]?.slice(0, TOP_PICKS_COUNT) ?? [],
  });

  return [rsiOverBought, rsiOverSold];
};
export const getMfiIntsaPosts = (mfi: IntervalDataType<MFI_ResponseType>) => {
  const mfiOverSold = postTemplate({
    isSuccess: false,
    title: 'MFI',
    category: 'OverSold',
    tiValueHeader: 'MFI',
    stockList: mfi?.[TIME_INTERVAL.One_Day]?.[MFI_CATEGORIES.lessthan20]?.slice(0, TOP_PICKS_COUNT) ?? [],
  });
  const mfiOverBought = postTemplate({
    isSuccess: true,
    title: 'MFI',
    category: 'OverBought',
    tiValueHeader: 'MFI',
    stockList: mfi?.[TIME_INTERVAL.One_Day]?.[MFI_CATEGORIES.morethan80]?.slice(0, TOP_PICKS_COUNT) ?? [],
  });

  return [mfiOverBought, mfiOverSold];
};
export const getBollingerBandsIntsaPosts = (bollingerbands: IntervalDataType<BollingerBands_ResponseType>) => {
  if (!bollingerbands) return [];
  const dayIntervalData = bollingerbands?.[TIME_INTERVAL.One_Day];
  const priceBelowLowerBandStocks = dayIntervalData?.[BOLLINGERBANDS_CATEGORIES.lessthan0]?.map((eachStock) => {
    const { pb } = eachStock.value as Record<string, number>;
    return {
      stockExchangeCode: eachStock.stockExchangeCode,
      value: pb,
    };
  });
  const priceOverUpperBandStocks = dayIntervalData?.[BOLLINGERBANDS_CATEGORIES.morethan1]?.map((eachStock) => {
    const { pb } = eachStock.value as Record<string, number>;
    return {
      stockExchangeCode: eachStock.stockExchangeCode,
      value: pb,
    };
  });
  const priceBelowLowerBand = postTemplate({
    isSuccess: false,
    title: 'Bollinger Bands',
    category: 'Price Below Lower Band',
    tiValueHeader: '%B',
    stockList: priceBelowLowerBandStocks?.slice(0, TOP_PICKS_COUNT) ?? [],
  });
  const priceOverUpperBand = postTemplate({
    isSuccess: true,
    title: 'Bollinger Bands',
    category: 'Price Over Upper Band',
    tiValueHeader: '%B',
    stockList: priceOverUpperBandStocks?.slice(0, TOP_PICKS_COUNT) ?? [],
  });
  return [priceOverUpperBand, priceBelowLowerBand];
};
export const getTechnicalIndicatorsInstaPosts = () => {
  const {
    technicalIndicators: {
      technicalIndicators: { rsi, mfi, bollingerbands },
    },
  } = AppStore.getState();
  const rsiPostsArray = getRsiIntsaPosts(rsi);
  const mfiPostsArray = getMfiIntsaPosts(mfi);
  const bollingerbandsPostsArray = getBollingerBandsIntsaPosts(bollingerbands);

  return [...rsiPostsArray, ...mfiPostsArray, ...bollingerbandsPostsArray];
};
