import { TECH_INDICATOR_TIME_INTERVALS, TIME_INTERVAL_VALUES_TYPE } from '../../constants/constants';
import { useModifiers } from '../hooks/useModifiers';

import styles from './IntervalTabs.module.css';

interface IntervalTabsProps {
  activeTab: TIME_INTERVAL_VALUES_TYPE;
  onTabClick: (tabName: TIME_INTERVAL_VALUES_TYPE) => void;
}
export const IntervalTabs = ({ activeTab, onTabClick }: IntervalTabsProps) => {
  return (
    <div className={styles.intervalSection}>
      {TECH_INDICATOR_TIME_INTERVALS.map((eachInterval) => {
        return (
          <IntervalTabITem
            key={eachInterval}
            name={eachInterval}
            active={activeTab === eachInterval}
            onTabClick={onTabClick}
          />
        );
      })}
    </div>
  );
};

interface IntervalTabITemProps {
  name: string;
  active: boolean;
  onTabClick: (tabName: TIME_INTERVAL_VALUES_TYPE) => void;
}
export const IntervalTabITem = ({ active, name, onTabClick }: IntervalTabITemProps) => {
  const mods = useModifiers(styles, 'intervalSectionItem', {
    active: active,
  });
  return (
    <div
      className={`${styles.intervalSectionItem} ${mods}`}
      onClick={() => {
        onTabClick(name as TIME_INTERVAL_VALUES_TYPE);
      }}
    >
      {name}
    </div>
  );
};
