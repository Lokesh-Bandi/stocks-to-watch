export interface ActionResultAPIErrorType {
  stockExchangeCode: string;
  apiError: Record<string, unknown>;
}
export interface ActionResultDBErrorType {
  stockExchangeCode: string;
  dbError: string;
}
export interface AdminType {
  isLoading: boolean;
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
  stockExchangeCodeToSearch: string | null;
  oneStockDataForToday: {
    stockExchangeCode: string;
    api: {
      status: string;
      ack: unknown;
    };
    db: {
      status: string;
      ack: unknown;
    };
  } | null;
}
