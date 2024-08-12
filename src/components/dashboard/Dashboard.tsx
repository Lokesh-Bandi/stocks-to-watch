import { Spinner } from '../spinner/Spinner';

import styles from './Dashboard.module.css';

interface DashBoardProps {
  isLoading: boolean;
}
export const DashBoard = ({ isLoading }: DashBoardProps) => {
  if (isLoading) return <Spinner />;
  return <div className={styles.dashboardContainer}>{'Coming soon.......'}</div>;
};
