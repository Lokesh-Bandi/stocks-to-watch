import { ALERT_TYPES } from '../../../alerts/AlertAction';

export interface GeneralTypes {
  isMenuOpen: boolean;
  isAdmin: boolean;
  alertType: ALERT_TYPES | null;
}
