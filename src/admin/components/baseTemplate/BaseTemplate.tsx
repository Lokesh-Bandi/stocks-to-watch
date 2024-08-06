import { ReactNode } from 'react';

import styles from './BaseTemplate.module.css';

interface BaseTemplateProps {
  renderComponent: ReactNode;
}
export const BaseTemplate = ({ renderComponent }: BaseTemplateProps) => {
  return <div className={styles.container}>{renderComponent}</div>;
};
