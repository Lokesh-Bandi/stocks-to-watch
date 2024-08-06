import { useTechnicalIndicatorsSlice } from '../../store/slices/technicalIndicators';

import { DashBoard } from './Dashboard';

export const DashBoardConnected = () => {
  const isLoading = useTechnicalIndicatorsSlice.isLoading();
  return <DashBoard isLoading={isLoading} />;
};
