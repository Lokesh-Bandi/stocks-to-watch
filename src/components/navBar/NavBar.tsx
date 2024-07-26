import { AppLogo } from '../drawer/drawerItems/AppLogo';
import { MenuConnected } from '../menu/MenuConnected';

import styles from './NavBar.module.css';

interface NavBarProps {}
export const NavBar = ({}: NavBarProps) => {
  return (
    <div className={styles.navbar}>
      <AppLogo />
      <MenuConnected />
    </div>
  );
};
