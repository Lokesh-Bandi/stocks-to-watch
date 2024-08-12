import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppGridConnected } from '../components/appGrid/AppGridConnected';
import { DashBoardConnected } from '../components/dashboard/DashBoardConnected';
import { BollingerBandsConnected } from '../components/technicalIndicators/BollingerBandsConnected';
import { MFIConnected } from '../components/technicalIndicators/MFIConnected';
import { RSIConnected } from '../components/technicalIndicators/RSIConnected';
import { DRAWER_ITEMS } from '../constants/constants';

console.log(typeof RSIConnected);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppGridConnected />}>
          <Route index element={<DashBoardConnected />} />
          <Route path={`/${DRAWER_ITEMS.rsi}`} element={<RSIConnected />} />
          <Route path={`/${DRAWER_ITEMS.mfi}`} element={<MFIConnected />} />
          <Route path={`/${DRAWER_ITEMS.bollingerBands}`} element={<BollingerBandsConnected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
