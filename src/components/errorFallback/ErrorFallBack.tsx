import { ReactElement } from 'react';

import styles from './error.module.css';

export const ErrorFallBack = (): ReactElement => {
  return (
    <div className={styles.overlay}>
      <div>Please contact the customer support</div>
    </div>
  );
};
