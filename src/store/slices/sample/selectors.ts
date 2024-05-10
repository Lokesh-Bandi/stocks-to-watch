import { useAppSelector } from '../../AppStore';

export const useSampleSlice = {
  getPlayersCount: (): number => {
    return useAppSelector(({ sample }) => sample.playersCount);
  },
  getCountriesCount: (): number => {
    return useAppSelector(({ sample }) => sample.countriesCount);
  },
  isPlayerActive: (): boolean => {
    return useAppSelector(({ sample }) => sample.isPlayerActive);
  },
  getAppName: (): string => {
    return useAppSelector(({ sample }) => sample.appName);
  },
};
