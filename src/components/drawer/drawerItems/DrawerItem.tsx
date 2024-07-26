import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { useModifiers } from '../../hooks/useModifiers';

import styles from './drawerItem.module.css';

interface DrawerItemProps {
  itemName: string;
  active: boolean;
  onClick: MouseEventHandler;
}

export const DrawerItem = ({ itemName, active, onClick }: DrawerItemProps) => {
  const mods = useModifiers(
    styles,
    'drawer-item',
    {
      active: active,
    },
    {
      isWithBaseClass: true,
    }
  );
  return (
    <div className={mods} onClick={onClick}>
      <Link
        to={`/${itemName !== 'dashboard' ? itemName : ''}`}
        className={styles.noUnderline}
      >
        {itemName}
      </Link>
    </div>
  );
};
