import { useModifiers } from '../hooks/useModifiers';

import styles from './BrandingCard.module.css';

interface BrandingCardProps {
  index: number;
  count: number;
  title: string;
}
export const BrandingCard = ({ index, count, title }: BrandingCardProps) => {
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
      <div className={styles.countBlock}>{count}</div>
      <div className={styles.titleBlock}>{title}</div>
    </div>
  );
};
