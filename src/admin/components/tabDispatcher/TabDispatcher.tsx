import { ACTION_NAMES } from '../../contants';
import { HistoricalAndTodayDataRepresent } from '../HistoricalAndTodayDataRepresent';
import { InstrumentalCodeUpdateTemplate } from '../instrumentalCodeUpdate/InstrumentalCodeUpdateTemplate';
import { SingleStockDataTemplate } from '../singleStockData/SingleStockDataTemplate';

interface TabDispatcherProps {
  tabAction: ACTION_NAMES | null;
  tabInd?: number;
}
export const TabDispatcher = ({ tabAction }: TabDispatcherProps) => {
  return (
    <>
      {(() => {
        switch (tabAction) {
          case ACTION_NAMES.updateTodayDataForAll:
            return <HistoricalAndTodayDataRepresent />;
          case ACTION_NAMES.udpatetodayDataForSingleStock:
            return <SingleStockDataTemplate />;
          case ACTION_NAMES.updateInstrumentalCode:
            return <InstrumentalCodeUpdateTemplate />;
          default:
            return <div></div>;
        }
      })()}
    </>
  );
};
