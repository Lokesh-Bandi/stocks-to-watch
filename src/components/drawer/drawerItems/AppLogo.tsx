import { RiStockFill } from 'react-icons/ri';

import { useIsSmallerThanWide } from '../../../styles/media';

import styles from './drawerItem.module.css';

export const AppLogo = () => {
  const isMobile = useIsSmallerThanWide();
  const appName = 'Stocks 2 Watch';
  return (
    <div className={styles.appLogoSection}>
      <div>
        <RiStockFill color="#55db43" size={isMobile ? 18 : 24} />
        <RiStockFill color="#d65555" size={isMobile ? 18 : 24} />
      </div>
      <div className={styles.appLogoText}>{appName}</div>
    </div>
  );
};
