import { useEffect, useState } from 'react';

import { BOLLINGERBANDS_CATEGORIES, TIME_INTERVAL, TIME_INTERVAL_VALUES_TYPE } from '../../constants/constants';
import { BollingerBands_DISPLAY_TITLES, BollingerBands_TABLE } from '../../constants/titles';
import { useCoreData } from '../../store/slices/coreData';
import { BollingerBands_ResponseType, useTechnicalIndicatorsSlice } from '../../store/slices/technicalIndicators';
import { BrandingCard } from '../brandingCard/BrandingCard';
import { IntervalTabs } from '../intervalTabs/IntervalTabs';
import { OutcomeSummaryTable } from '../outcomeSummaryTable/OutcomeSummaryTable';

import { getIcon } from './utils';

import styles from './common.module.css';

export const BollingerBandsConnected = () => {
  const [activeIntervalTab, setACtiveIntervalTab] = useState<TIME_INTERVAL_VALUES_TYPE>(TIME_INTERVAL.One_Day);
  const bbKeyStocks = useTechnicalIndicatorsSlice.getBollingerBandsKeyStocks();
  const coreData = useCoreData.getCoreData();
  const [currentIntervalData, setCurrentIntervalData] = useState<BollingerBands_ResponseType | null>(null);

  const handleTabClick = (tabName: TIME_INTERVAL_VALUES_TYPE) => {
    if (activeIntervalTab === tabName) return;
    setACtiveIntervalTab(tabName);
  };

  useEffect(() => {
    if (!bbKeyStocks || !bbKeyStocks?.[activeIntervalTab]) return;
    setCurrentIntervalData(bbKeyStocks[activeIntervalTab]);
  }, [activeIntervalTab, bbKeyStocks]);

  const getTableRowArray = (bBandsKey: string) => {
    const categoryKey = BOLLINGERBANDS_CATEGORIES[bBandsKey as keyof typeof BOLLINGERBANDS_CATEGORIES];
    const title = BollingerBands_DISPLAY_TITLES[bBandsKey as keyof typeof BollingerBands_DISPLAY_TITLES];
    const data = currentIntervalData?.[categoryKey] ?? [];
    const result = data.map((eachKeyStock, ind) => {
      const { stockExchangeCode, value } = eachKeyStock;
      const { pb } = value as Record<string, number>;
      const eachTableRow = [
        ind + 1,
        stockExchangeCode,
        coreData?.[stockExchangeCode].lastTradedPrice,
        pb,
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
        {Object.keys(BOLLINGERBANDS_CATEGORIES).map((bBandsKey, ind) => {
          const categoryKey = BOLLINGERBANDS_CATEGORIES[bBandsKey as keyof typeof BOLLINGERBANDS_CATEGORIES];
          const count = currentIntervalData?.[categoryKey]?.length ?? 0;
          const title = BollingerBands_DISPLAY_TITLES[bBandsKey as keyof typeof BollingerBands_DISPLAY_TITLES];
          const icon = getIcon(ind);
          return <BrandingCard key={bBandsKey} icon={icon} index={ind} count={count} title={title} />;
        })}
      </div>
      <div className={styles.summaryTableSection}>
        {Object.keys(BOLLINGERBANDS_CATEGORIES).map((bBandsKey) => {
          const { title, tableData } = getTableRowArray(bBandsKey);
          return (
            <OutcomeSummaryTable
              key={bBandsKey}
              title={title}
              data={tableData}
              headers={BollingerBands_TABLE.headers}
              colWidths={BollingerBands_TABLE.colWidths}
            />
          );
        })}
      </div>
    </div>
  );
};
