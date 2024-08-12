import { useState } from 'react';

import { TabDispatcher } from './components/tabDispatcher/TabDispatcher';
import { ACTION_NAMES, ACTIONS } from './contants';

import styles from './AdminDashboard.module.css';

export const AdminDashBoard = () => {
  const [activeInd, setActiveInd] = useState<number | null>(null);
  const [activeAction, setActiveAction] = useState<ACTION_NAMES | null>(null);
  const handleActionItemClick = (ind: number, actionName: ACTION_NAMES) => {
    setActiveInd(() => ind);
    setActiveAction(() => actionName);
  };
  return (
    <div className={styles.adminDashboard}>
      <div className={styles.lastUpdatedBlock}>{`Last updated on  :  ${Date.now()}`}</div>
      <div className={styles.actionsSection}>
        {Object.entries(ACTIONS).map(([key, value], ind) => {
          return (
            <div
              key={key}
              className={`${styles.actionItem} ${ind === activeInd && styles.actionItem_active}`}
              onClick={() => handleActionItemClick(ind, value.actionName)}
            >
              {value.actionTitle}
            </div>
          );
        })}
      </div>
      <TabDispatcher tabAction={activeAction} />
    </div>
  );
};
