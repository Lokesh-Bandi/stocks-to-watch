import { useEffect, useState } from 'react';

import {
  MFI_CATEGORIES,
  TIME_INTERVAL,
  TIME_INTERVAL_VALUES_TYPE,
} from '../../constants/constants';
import { MFI_DISPLAY_TITLES, MFI_TABLE } from '../../constants/titles';
import { useCoreData } from '../../store/slices/coreData';
import {
  MFI_ResponseType,
  useTechnicalIndicatorsSlice,
} from '../../store/slices/technicalIndicators';
import { BrandingCard } from '../brandingCard/BrandingCard';
import { IntervalTabs } from '../intervalTabs/IntervalTabs';
import { OutcomeSummaryTable } from '../outcomeSummaryTable/OutcomeSummaryTable';

import styles from './common.module.css';

export const MFIConnected = () => {
  const [activeIntervalTab, setACtiveIntervalTab] =
    useState<TIME_INTERVAL_VALUES_TYPE>(TIME_INTERVAL.One_Day);
  const mfiKeyStocks = useTechnicalIndicatorsSlice.getMfiiKeyStocks();
  const coreData = useCoreData.getCoreData();
  const [currentIntervalData, setCurrentIntervalData] =
    useState<MFI_ResponseType | null>(null);

  const handleTabClick = (tabName: TIME_INTERVAL_VALUES_TYPE) => {
    setACtiveIntervalTab(tabName);
  };

  useEffect(() => {
    if (!mfiKeyStocks || !mfiKeyStocks?.[activeIntervalTab]) return;
    setCurrentIntervalData(mfiKeyStocks[activeIntervalTab]);
  }, [activeIntervalTab, mfiKeyStocks]);

  const getTableRowArray = (mfiKey: string) => {
    const categoryKey = MFI_CATEGORIES[mfiKey as keyof typeof MFI_CATEGORIES];
    const title = MFI_DISPLAY_TITLES[mfiKey as keyof typeof MFI_DISPLAY_TITLES];
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
        {Object.keys(MFI_CATEGORIES).map((mfiKey, ind) => {
          const categoryKey =
            MFI_CATEGORIES[mfiKey as keyof typeof MFI_CATEGORIES];
          const count = currentIntervalData?.[categoryKey]?.length ?? 0;
          const title =
            MFI_DISPLAY_TITLES[mfiKey as keyof typeof MFI_DISPLAY_TITLES];
          return (
            <BrandingCard
              key={mfiKey}
              index={ind}
              count={count}
              title={title}
            />
          );
        })}
      </div>
      <div className={styles.summaryTableSection}>
        {Object.keys(MFI_CATEGORIES).map((mfiKey) => {
          const { title, tableData } = getTableRowArray(mfiKey);
          return (
            <OutcomeSummaryTable
              key={mfiKey}
              title={title}
              data={tableData}
              headers={MFI_TABLE.headers}
              colWidths={MFI_TABLE.colWidths}
            />
          );
        })}
      </div>
    </div>
  );
};
