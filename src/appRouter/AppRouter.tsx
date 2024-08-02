import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppContentBodyConnected } from '../components/appContent/appContentBody/AppContentBodyConnected';
import { AppGridConnected } from '../components/appGrid/AppGridConnected';
import { DashBoardConnected } from '../components/technicalIndicators/DashBoardConnected';
import { MFIConnected } from '../components/technicalIndicators/MFIConnected';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppGridConnected />}>
          <Route index element={<DashBoardConnected />} />
          <Route path="/rsi" element={<AppContentBodyConnected />} />
          <Route path="/mfi" element={<MFIConnected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
