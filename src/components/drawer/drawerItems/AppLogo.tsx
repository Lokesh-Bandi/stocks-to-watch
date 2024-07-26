import styles from './drawerItem.module.css';

export const AppLogo = () => {
  const logoURL = '';
  const appName = 'Stocks To Watch';
  return (
    <div className={styles.appLogoSection}>
      {logoURL ? <img src={logoURL} alt="logo" /> : ''}
      <div className={styles.appLogoText}>{appName}</div>
    </div>
  );
};
