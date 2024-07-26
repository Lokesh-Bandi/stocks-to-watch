import { BrandingCard } from '../../brandingCard/BrandingCard';

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
    </div>
  );
};
