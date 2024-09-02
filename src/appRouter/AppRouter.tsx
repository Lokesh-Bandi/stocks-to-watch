import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppGridConnected } from '../components/appGrid/AppGridConnected';
import { DashBoardConnected } from '../components/dashboard/DashBoardConnected';
import { BollingerBandsConnected } from '../components/technicalIndicators/BollingerBandsConnected';
import { ChartsConnected } from '../components/technicalIndicators/ChartsConnected';
import { MFIConnected } from '../components/technicalIndicators/MFIConnected';
import { RSIConnected } from '../components/technicalIndicators/RSIConnected';
import { VolumeSprutConnected } from '../components/technicalIndicators/VolumeSprutConnected';
import { DRAWER_ITEMS } from '../constants/constants';

console.log(typeof RSIConnected);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppGridConnected />}>
          <Route index element={<DashBoardConnected />} />
          <Route path={`/${DRAWER_ITEMS.rsi}`} element={<RSIConnected />}>
            <Route path="*" element={<Navigate to={`/`} />} />
          </Route>
          <Route path={`/${DRAWER_ITEMS.mfi}`} element={<MFIConnected />}>
            <Route path="*" element={<Navigate to={`/${DRAWER_ITEMS.mfi}`} />} />
          </Route>
          <Route path={`/${DRAWER_ITEMS.bollingerBands}`} element={<BollingerBandsConnected />}>
            <Route path="*" element={<Navigate to={`/${DRAWER_ITEMS.bollingerBands}`} />} />
          </Route>
          <Route path={`/${DRAWER_ITEMS.volumeSprut}`} element={<VolumeSprutConnected />}>
            <Route path="*" element={<Navigate to={`/${DRAWER_ITEMS.volumeSprut}`} />} />
          </Route>
          <Route path={`/${DRAWER_ITEMS.charts}`} element={<ChartsConnected />}>
            <Route path="*" element={<Navigate to={`/${DRAWER_ITEMS.volumeSprut}`} />} />
          </Route>
          {/* Catch-all route to redirect to the root page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
