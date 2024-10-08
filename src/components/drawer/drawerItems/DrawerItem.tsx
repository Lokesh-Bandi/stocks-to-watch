import { ReactNode } from 'react';

import { useModifiers } from '../../hooks/useModifiers';

import styles from './drawerItem.module.css';

interface DrawerItemProps {
  itemName: string;
  icon: ReactNode;
  active: boolean;
  onClick: (a: string) => void;
}

export const DrawerItem = ({ itemName, icon, active, onClick }: DrawerItemProps) => {
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
    <div className={mods} onClick={() => onClick(itemName)}>
      {icon}
      {itemName}
    </div>
  );
};
