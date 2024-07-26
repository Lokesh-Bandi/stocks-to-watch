import { BrandingCard } from '../../brandingCard/BrandingCard';
import { OutcomeSummaryTable } from '../../outcomeSummaryTable/OutcomeSummaryTable';

import styles from './AppContentBody.module.css';

interface AppContentBodyProps {}
export const AppContentBody = ({}: AppContentBodyProps) => {
  return (
    <div className={styles.appContentBody}>
      <div className={styles.brandingSection}>
        <BrandingCard />
        <BrandingCard />
        <BrandingCard />
        <BrandingCard />
      </div>
      <div className={styles.summaryTableSection}>
        <OutcomeSummaryTable title={'Top Gainers'} />
        <OutcomeSummaryTable title={'Top Losers'} />
      </div>
    </div>
  );
};
