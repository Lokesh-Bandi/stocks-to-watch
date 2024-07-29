export enum ALERT_TYPES {
  CONFIRMATION = 'confirmation',
}
export type ALERT_OBJ_TYPE = {
  title: string;
  ok?: boolean;
  close?: boolean;
  closeIcon?: boolean;
  overlayClickToClose?: boolean;
};
export const ALERTS: Record<ALERT_TYPES, ALERT_OBJ_TYPE> = {
  confirmation: {
    title: 'Do you want to proceed?',
    ok: true,
    close: true,
    closeIcon: true,
    overlayClickToClose: true,
  },
};
