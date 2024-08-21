import { CSSProperties, useEffect, useState } from 'react';

import { TIME_INTERVAL, TIME_INTERVAL_VALUES_TYPE, VOLUME_SPIKE_CATEGORIES } from '../../constants/constants';
import { VolumeSpike_DISPLAY_TITLES, VolumeSpike_TABLE } from '../../constants/titles';
import { useCoreData } from '../../store/slices/coreData';
import { useTechnicalIndicatorsSlice, VolumeSpike_ResponseType } from '../../store/slices/technicalIndicators';
import { useIsSmallerThanWide } from '../../styles/media';
import { BrandingCard } from '../brandingCard/BrandingCard';
import { IntervalTabs } from '../intervalTabs/IntervalTabs';
import { OutcomeSummaryTable } from '../outcomeSummaryTable/OutcomeSummaryTable';

import { getIcon } from './utils';

import styles from './common.module.css';

export const VolumeSprutConnected = () => {
  const isMobile = useIsSmallerThanWide();
  const [activeIntervalTab, setActiveIntervalTab] = useState<TIME_INTERVAL_VALUES_TYPE>(TIME_INTERVAL.One_Day);
  const volumeSpikeKeyStocks = useTechnicalIndicatorsSlice.getVolumeSpikeKeyStocks();
  const coreData = useCoreData.getCoreData();
  const [currentIntervalData, setCurrentIntervalData] = useState<VolumeSpike_ResponseType | null>(null);

  const handleTabClick = (tabName: TIME_INTERVAL_VALUES_TYPE) => {
    if (activeIntervalTab === tabName) return;
    setActiveIntervalTab(tabName);
  };

  useEffect(() => {
    if (!volumeSpikeKeyStocks?.[activeIntervalTab]) return;
    setCurrentIntervalData(volumeSpikeKeyStocks[activeIntervalTab]);
  }, [activeIntervalTab, volumeSpikeKeyStocks]);

  const getTableRowArray = (rsiKey: string) => {
    const categoryKey = VOLUME_SPIKE_CATEGORIES[rsiKey as keyof typeof VOLUME_SPIKE_CATEGORIES];
    const title = VolumeSpike_DISPLAY_TITLES[rsiKey as keyof typeof VolumeSpike_DISPLAY_TITLES];
    const data = currentIntervalData?.[categoryKey] ?? [];
    const result = data.map((eachKeyStock, ind) => {
      const { stockExchangeCode, value } = eachKeyStock;
      const { volumeChangedBy } = value as Record<string, number>;
      const eachTableRow = [
        ind + 1,
        stockExchangeCode,
        coreData?.[stockExchangeCode].lastTradedPrice,
        volumeChangedBy + 'x',
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
      <div
        className={styles.brandingSection}
        style={
          {
            '--itemsCount': Object.keys(VOLUME_SPIKE_CATEGORIES).length,
          } as CSSProperties
        }
      >
        {Object.keys(VOLUME_SPIKE_CATEGORIES).map((rsiKey, ind) => {
          const categoryKey = VOLUME_SPIKE_CATEGORIES[rsiKey as keyof typeof VOLUME_SPIKE_CATEGORIES];
          const count = currentIntervalData?.[categoryKey]?.length ?? 0;
          const title = VolumeSpike_DISPLAY_TITLES[rsiKey as keyof typeof VolumeSpike_DISPLAY_TITLES];
          const icon = getIcon(ind, isMobile);
          return <BrandingCard key={rsiKey} icon={icon} index={ind} count={count} title={title} />;
        })}
      </div>
      <div className={styles.summaryTableSection}>
        {Object.keys(VOLUME_SPIKE_CATEGORIES).map((rsiKey) => {
          const { title, tableData } = getTableRowArray(rsiKey);
          return (
            <OutcomeSummaryTable
              key={rsiKey}
              title={title}
              data={tableData}
              headers={VolumeSpike_TABLE.headers}
              colWidths={VolumeSpike_TABLE.colWidths}
            />
          );
        })}
      </div>
    </div>
  );
};
