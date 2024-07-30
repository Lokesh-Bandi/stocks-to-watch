export interface ActionResultAPIErrorType {
  stockExchangeCode: string;
  apiError: Record<string, unknown>;
}
export interface ActionResultDBErrorType {
  stockExchangeCode: string;
  dbError: string;
}
export interface AdminType {
  actionResult: {
    apiSuccessArray: string[];
    apiErrorArray: string[];
    DBCreatedArray: string[];
    DBUpdatedArray: string[];
    DBErrorArray: string[];
    APIErrors: ActionResultAPIErrorType[];
    DBErrors: ActionResultDBErrorType[];
    message: string;
  } | null;
}
