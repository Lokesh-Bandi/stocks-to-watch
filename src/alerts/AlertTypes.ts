import { ALERT_ACTIONS, ALERT_TYPES } from './AlertAction';

export type ALERT_OBJ_TYPE = {
  title: string;
  ok?: boolean;
  close?: boolean;
  closeIcon?: boolean;
  overlayClickToClose?: boolean;
  onOk?: () => void;
};
export const ALERTS: Record<ALERT_TYPES, ALERT_OBJ_TYPE> = {
  [ALERT_TYPES.TodayDataConfirmation_A]: {
    title: 'Do you want to proceed for updating todays data for all stocks?',
    ok: true,
    close: true,
    closeIcon: true,
    overlayClickToClose: true,
    onOk: ALERT_ACTIONS[ALERT_TYPES.TodayDataConfirmation_A],
  },
  [ALERT_TYPES.TodayDataConfirmation_S]: {
    title: 'Do you want to proceed for updating todays data for one stocks?',
    ok: true,
    close: true,
    closeIcon: true,
    overlayClickToClose: true,
    onOk: ALERT_ACTIONS[ALERT_TYPES.TodayDataConfirmation_S],
  },
  [ALERT_TYPES.InstrumentalCodeUpdate_S]: {
    title:
      'Do you want to proceed for updating Instrumental code for one stocks?',
    ok: true,
    close: true,
    closeIcon: true,
    overlayClickToClose: true,
    onOk: ALERT_ACTIONS[ALERT_TYPES.InstrumentalCodeUpdate_S],
  },
};
