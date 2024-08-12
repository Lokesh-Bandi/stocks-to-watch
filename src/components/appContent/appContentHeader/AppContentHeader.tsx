import notificationIcon from '../../../../assets/icons/notification.svg';
import searchIcon from '../../../../assets/icons/search.svg';

import styles from './AppContentHeader.module.css';

interface AppContentHeaderProps {}
export const AppContentHeader = ({}: AppContentHeaderProps) => {
  return (
    <div className={styles.appHeader}>
      <div className={styles.greetingsBlock}>
        <div className={styles.greetingTitle}>{'Hello investor...'}</div>
        <div className={styles.greetingMsg}>{`Let's try something new today....`}</div>
      </div>
      <div className={styles.searchBlock}>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Search for a stock...." />
        </div>
        <div>
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      <div className={styles.notificationBlock}>
        <img src={notificationIcon} alt="notification" />
      </div>
    </div>
  );
};
