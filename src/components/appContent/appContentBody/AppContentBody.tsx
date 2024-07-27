import { sampleBrandingArray } from '../../../constants/constants';
import { BrandingCard } from '../../brandingCard/BrandingCard';
import { OutcomeSummaryTable } from '../../outcomeSummaryTable/OutcomeSummaryTable';

import styles from './AppContentBody.module.css';

interface AppContentBodyProps {}
export const AppContentBody = ({}: AppContentBodyProps) => {
  return (
    <div className={styles.appContentBody}>
      <div className={styles.brandingSection}>
        {sampleBrandingArray.map(({ count, title }, ind) => {
          return (
            <BrandingCard key={ind} index={ind} count={count} title={title} />
          );
        })}
      </div>
      <div className={styles.summaryTableSection}>
        <OutcomeSummaryTable title={'Top Gainers'} />
        <OutcomeSummaryTable title={'Top Losers'} />
      </div>
    </div>
  );
};
