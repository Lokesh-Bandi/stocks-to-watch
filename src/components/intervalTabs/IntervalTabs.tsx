import { WiTime2, WiTime4, WiTime8 } from 'react-icons/wi';

import { TECH_INDICATOR_TIME_INTERVALS, TIME_INTERVAL, TIME_INTERVAL_VALUES_TYPE } from '../../constants/constants';
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
  const getIcon = () => {
    const size = 26;
    switch (name) {
      case TIME_INTERVAL.Fifteen_Minute:
        return <WiTime2 size={size} />;
      case TIME_INTERVAL.Four_Hour:
        return <WiTime4 size={size} />;
      case TIME_INTERVAL.One_Day:
        return <WiTime8 size={size} />;
      default:
        return null;
    }
  };
  return (
    <div
      className={`${styles.intervalSectionItem} ${mods}`}
      onClick={() => {
        onTabClick(name as TIME_INTERVAL_VALUES_TYPE);
      }}
    >
      {getIcon()}
      {name}
    </div>
  );
};
