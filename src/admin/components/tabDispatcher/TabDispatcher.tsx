import { ALERT_TYPES } from '../../../alerts/AlertAction';
import { ACTION_NAMES } from '../../contants';
import { BaseTemplate } from '../baseTemplate/BaseTemplate';
import { DownloadInstaPosts } from '../commonTabs/DownloadInstaPosts';
import { HistoricalAndTodayDataRepresent } from '../HistoricalAndTodayDataRepresent';
import { InstrumentalCodeUpdateTemplate } from '../instrumentalCodeUpdate/InstrumentalCodeUpdateTemplate';
import { SingleStockDataTemplate } from '../singleStockData/SingleStockDataTemplate';
import { TechIndAndKeyStocks } from '../techIndAndKeyStocks/TechIndAndKeyStocks';

interface TabDispatcherProps {
  tabAction: ACTION_NAMES | null;
  tabInd?: number;
}
export const TabDispatcher = ({ tabAction }: TabDispatcherProps) => {
  return (
    <>
      {(() => {
        switch (tabAction) {
          case ACTION_NAMES.updateHistoricalDataForAll:
            return <HistoricalAndTodayDataRepresent alertType={ALERT_TYPES.HistoricalDataConfirmation_A} />;
          case ACTION_NAMES.udpateHistoricalDataForSingleStock:
            return <SingleStockDataTemplate alertType={ALERT_TYPES.HistoricalDataConfirmation_S} />;
          case ACTION_NAMES.updateTodayDataForAll:
            return <HistoricalAndTodayDataRepresent alertType={ALERT_TYPES.TodayDataConfirmation_A} />;
          case ACTION_NAMES.updateLastNdaysFromTodayDataForAll:
            return (
              <HistoricalAndTodayDataRepresent
                alertType={ALERT_TYPES.LastNDaysFromTodayDataConfirmation_A}
                daysField={true}
              />
            );
          case ACTION_NAMES.udpatetodayDataForSingleStock:
            return <SingleStockDataTemplate alertType={ALERT_TYPES.TodayDataConfirmation_S} />;
          case ACTION_NAMES.updateLastNdaysFromTodayDataForOne:
            return (
              <SingleStockDataTemplate alertType={ALERT_TYPES.LastNDaysFromTodayDataConfirmation_S} daysField={true} />
            );
          case ACTION_NAMES.updateInstrumentalCode:
            return <InstrumentalCodeUpdateTemplate />;
          case ACTION_NAMES.updateTechIndAndKeyStocks:
            return <BaseTemplate renderComponent={<TechIndAndKeyStocks />} />;
          case ACTION_NAMES.instaImageGeneration:
            return <BaseTemplate renderComponent={<DownloadInstaPosts />} />;
          default:
            return <div></div>;
        }
      })()}
    </>
  );
};
