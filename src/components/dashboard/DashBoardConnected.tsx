import { useCoreData } from '../../store/slices/coreData';
import { useTechnicalIndicatorsSlice } from '../../store/slices/technicalIndicators';

import { DashBoard } from './Dashboard';

export const DashBoardConnected = () => {
  const isLoading = useTechnicalIndicatorsSlice.isLoading();
  const momentumStocks = useTechnicalIndicatorsSlice.getMomentumStocks();
  const coreDate = useCoreData.getCoreData();
  return <DashBoard isLoading={isLoading} momentumStocks={momentumStocks} coreData={coreDate} />;
};
