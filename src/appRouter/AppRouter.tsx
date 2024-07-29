import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppGridConnected } from '../components/appGrid/AppGridConnected';
import { MFIConnected } from '../components/technicalIndicators/MFIConnected';
import { RSIConnected } from '../components/technicalIndicators/RSIConnected';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppGridConnected />}>
          <Route index element={<RSIConnected />} />
          <Route path="/rsi" element={<RSIConnected />} />
          <Route path="/mfi" element={<MFIConnected />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
