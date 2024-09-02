export interface CoreStockDataType {
  companyName: string;
  lastTradedPrice: number;
}
export interface SingleStockChartType {
  x: string;
  y: number[];
}
export interface CoreDataType {
  stocks: Record<string, CoreStockDataType> | null;
  isLoading: boolean;
  isChartStockDataLoading: boolean;
  singleChartStockData: SingleStockChartType[] | null;
}
