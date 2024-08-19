import { ReactElement } from 'react';

import { useModifiers } from '../hooks/useModifiers';

import styles from './BrandingCard.module.css';

interface BrandingCardProps {
  index: number;
  count: number;
  title: string;
  icon?: ReactElement | null;
}
export const BrandingCard = ({ index, count, title, icon }: BrandingCardProps) => {
  const mods = useModifiers(
    styles,
    'brandingCard',
    {
      [index]: true,
    },
    { isWithBaseClass: true }
  );
  return (
    <div className={mods}>
      {icon && <div className={styles.brandingCardIcon}>{icon}</div>}
      <div className={styles.countBlock}>{count}</div>
      <div className={styles.titleBlock}>{title}</div>
    </div>
  );
};
