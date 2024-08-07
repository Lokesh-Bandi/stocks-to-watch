import { useEffect, useState } from 'react';

import {
  RSI_CATEGORIES,
  TIME_INTERVAL,
  TIME_INTERVAL_VALUES_TYPE,
} from '../../constants/constants';
import { RSI_DISPLAY_TITLES, RSI_TABLE } from '../../constants/titles';
import { useCoreData } from '../../store/slices/coreData';
import {
  RSI_ResponseType,
  useTechnicalIndicatorsSlice,
} from '../../store/slices/technicalIndicators';
import { BrandingCard } from '../brandingCard/BrandingCard';
import { IntervalTabs } from '../intervalTabs/IntervalTabs';
import { OutcomeSummaryTable } from '../outcomeSummaryTable/OutcomeSummaryTable';

import styles from './common.module.css';

export const RSIConnected = () => {
  const [activeIntervalTab, setACtiveIntervalTab] =
    useState<TIME_INTERVAL_VALUES_TYPE>(TIME_INTERVAL.One_Day);
  const rsiKeysStocks = useTechnicalIndicatorsSlice.getRsiKeyStocks();
  const coreData = useCoreData.getCoreData();
  const [currentIntervalData, setCurrentIntervalData] =
    useState<RSI_ResponseType | null>(null);

  const handleTabClick = (tabName: TIME_INTERVAL_VALUES_TYPE) => {
    if (activeIntervalTab === tabName) return;
    setACtiveIntervalTab(tabName);
  };

  useEffect(() => {
    if (!rsiKeysStocks || !rsiKeysStocks?.[activeIntervalTab]) return;
    setCurrentIntervalData(rsiKeysStocks[activeIntervalTab]);
  }, [activeIntervalTab, rsiKeysStocks]);

  const getTableRowArray = (rsiKey: string) => {
    const categoryKey = RSI_CATEGORIES[rsiKey as keyof typeof RSI_CATEGORIES];
    const title = RSI_DISPLAY_TITLES[rsiKey as keyof typeof RSI_DISPLAY_TITLES];
    const data = currentIntervalData?.[categoryKey] ?? [];
    const result = data.map((eachKeyStock, ind) => {
      const { stockExchangeCode, value } = eachKeyStock;
      const eachTableRow = [
        ind + 1,
        stockExchangeCode,
        coreData?.[stockExchangeCode].lastTradedPrice,
        value,
        coreData?.[stockExchangeCode].companyName,
      ];
      return eachTableRow;
    });
    return {
      title: title,
      tableData: result,
    };
  };
  return (
    <div className={styles.appContentBody}>
      <IntervalTabs activeTab={activeIntervalTab} onTabClick={handleTabClick} />
      <div className={styles.brandingSection}>
        {Object.keys(RSI_CATEGORIES).map((rsiKey, ind) => {
          const categoryKey =
            RSI_CATEGORIES[rsiKey as keyof typeof RSI_CATEGORIES];
          const count = currentIntervalData?.[categoryKey]?.length ?? 0;
          const title =
            RSI_DISPLAY_TITLES[rsiKey as keyof typeof RSI_DISPLAY_TITLES];
          return (
            <BrandingCard
              key={rsiKey}
              index={ind}
              count={count}
              title={title}
            />
          );
        })}
      </div>
      <div className={styles.summaryTableSection}>
        {Object.keys(RSI_CATEGORIES).map((rsiKey) => {
          const { title, tableData } = getTableRowArray(rsiKey);
          return (
            <OutcomeSummaryTable
              key={rsiKey}
              title={title}
              data={tableData}
              headers={RSI_TABLE.headers}
              colWidths={RSI_TABLE.colWidths}
            />
          );
        })}
      </div>
    </div>
  );
};
