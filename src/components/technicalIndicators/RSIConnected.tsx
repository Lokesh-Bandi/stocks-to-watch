import { RSI_CATEGORIES } from '../../constants/constants';
import { RSI_DISPLAY_TITLES, RSI_HEADERS } from '../../constants/titles';
import { useTechnicalIndicatorsSlice } from '../../store/slices/technicalIndicators';
import { BrandingCard } from '../brandingCard/BrandingCard';
import { OutcomeSummaryTable } from '../outcomeSummaryTable/OutcomeSummaryTable';

import styles from './common.module.css';

export const RSIConnected = () => {
  const rsiKeysStocks = useTechnicalIndicatorsSlice.getRsiKeyStocks() ?? {};
  const intervalSpecificData = rsiKeysStocks?.['1day'] ?? {};
  return (
    <div className={styles.appContentBody}>
      <div className={styles.brandingSection}>
        {Object.keys(RSI_CATEGORIES).map((rsiKey, ind) => {
          const categoryKey =
            RSI_CATEGORIES[rsiKey as keyof typeof RSI_CATEGORIES];
          const count = intervalSpecificData[categoryKey]?.length ?? 0;
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
          const categoryKey =
            RSI_CATEGORIES[rsiKey as keyof typeof RSI_CATEGORIES];
          const title =
            RSI_DISPLAY_TITLES[rsiKey as keyof typeof RSI_DISPLAY_TITLES];
          const data = intervalSpecificData[categoryKey] ?? [];
          return (
            <OutcomeSummaryTable
              key={rsiKey}
              title={title}
              data={data}
              headers={RSI_HEADERS}
            />
          );
        })}
      </div>
    </div>
  );
};
