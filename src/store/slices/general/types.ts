import { ALERT_TYPES } from '../../../alerts/AlertTypes';

export interface GeneralTypes {
  isMenuOpen: boolean;
  isAdmin: boolean;
  alertType: {
    alertName: ALERT_TYPES;
    callback?: (...params: unknown[]) => void | Promise<void>;
  } | null;
}
