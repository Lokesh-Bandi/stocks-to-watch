export interface CoreStockDataType {
  companyName: string;
  lastTradedPrice: number;
}
export interface CoreDataType {
  stocks: Record<string, CoreStockDataType> | null;
  isLoading: boolean;
}
