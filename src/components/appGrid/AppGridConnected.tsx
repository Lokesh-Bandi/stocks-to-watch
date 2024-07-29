import { Tooltip } from 'react-tooltip';

import { AdminDashBoard } from '../../admin/AdminDashBoard';
import { AppAlert } from '../../alerts/AppAlert';
import { useAppSelector } from '../../store/AppStore';
import { AppContentConnected } from '../appContent/AppContentConnected';
import { AppContentHeaderConnected } from '../appContent/appContentHeader/AppContentHeaderConnected';
import { AppOverlay } from '../appOverlay/AppOverlay';
import { DrawerConnected } from '../drawer/DrawerConnected';
import { NavBarConnected } from '../navBar/NavBarConnected';

import styles from './appGrid.module.css';

export const AppGridConnected = () => {
  const isAdmin = useAppSelector(({ general }) => general.isAdmin);
  if (isAdmin) {
    return (
      <>
        <AdminDashBoard />
        <AppAlert />
      </>
    );
  }
  return (
    <div className={styles.appGrid}>
      <NavBarConnected />
      <DrawerConnected />
      <AppContentHeaderConnected />
      <AppContentConnected />
      <AppOverlay />
      <Tooltip
        id="appTooltip"
        style={{
          fontSize: '16px',
        }}
      />
      {/* <Outlet /> */}
    </div>
  );
};
