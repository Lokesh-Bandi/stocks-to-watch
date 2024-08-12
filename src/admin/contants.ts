import { ALERT_TYPES } from '../alerts/AlertAction';

export enum ACTION_NAMES {
  updateHistoricalDataForAll = 'updateHistoricalDataForAll',
  udpateHistoricalDataForSingleStock = 'udpateHistoricalDataForSingleStock',
  updateTodayDataForAll = 'updateTodayDataForAll',
  udpatetodayDataForSingleStock = 'udpatetodayDataForSingleStock',
  updateInstrumentalCode = 'updateInstrumentalCode',
  updateLastNdaysFromTodayDataForAll = 'updateLastNdaysFromTodayDataForAll',
  updateLastNdaysFromTodayDataForOne = 'updateLastNdaysFromTodayDataForOne',
  updateTechIndAndKeyStocks = 'updateTechIndAndKeyStocks',
  instaImageGeneration = 'instaImageGeneration',
}
export const ACTIONS: Record<string, { actionName: ACTION_NAMES; actionTitle: string; alertToTrigger?: ALERT_TYPES }> =
  {
    updateHistoricalDataForAll: {
      actionName: ACTION_NAMES.updateHistoricalDataForAll,
      actionTitle: `Update HD(50-ALL)`,
      alertToTrigger: ALERT_TYPES.HistoricalDataConfirmation_A,
    },
    udpateHistoricalDataForSingleStock: {
      actionName: ACTION_NAMES.udpateHistoricalDataForSingleStock,
      actionTitle: `Update HD(50-ONE)`,
      alertToTrigger: ALERT_TYPES.HistoricalDataConfirmation_S,
    },
    updateTodayDataForAll: {
      actionName: ACTION_NAMES.updateTodayDataForAll,
      actionTitle: `Update DB(Today-ALL)`,
      alertToTrigger: ALERT_TYPES.TodayDataConfirmation_A,
    },
    udpatetodayDataForSingleStock: {
      actionName: ACTION_NAMES.udpatetodayDataForSingleStock,
      actionTitle: `Update DB(Today-ONE)`,
      alertToTrigger: ALERT_TYPES.TodayDataConfirmation_S,
    },
    updateInstrumentalCode: {
      actionName: ACTION_NAMES.updateInstrumentalCode,
      actionTitle: `Update IC(ONE)`,
      alertToTrigger: ALERT_TYPES.InstrumentalCodeUpdate_S,
    },
    updateLastNdaysFromTodayDataForAll: {
      actionName: ACTION_NAMES.updateLastNdaysFromTodayDataForAll,
      actionTitle: `Update Last N days(ALL)`,
      alertToTrigger: ALERT_TYPES.LastNDaysFromTodayDataConfirmation_A,
    },
    updateLastNdaysFromTodayDataForOne: {
      actionName: ACTION_NAMES.updateLastNdaysFromTodayDataForOne,
      actionTitle: `Update Last N days(ONE)`,
      alertToTrigger: ALERT_TYPES.LastNDaysFromTodayDataConfirmation_S,
    },
    updateTechIndAndKeyStocks: {
      actionName: ACTION_NAMES.updateTechIndAndKeyStocks,
      actionTitle: `Update TI's & Key stocks`,
      alertToTrigger: ALERT_TYPES.TechIndAndKeyStocks,
    },
    instaImageGeneration: {
      actionName: ACTION_NAMES.instaImageGeneration,
      actionTitle: 'Download Insta Posts',
    },
  };
