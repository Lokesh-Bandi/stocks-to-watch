import { FcBullish, FcBearish } from 'react-icons/fc';
import { TbArrowBarBoth } from 'react-icons/tb';

import { STOCK_MARKET_MOVEMENT, STOCK_MARKET_MOVEMENT_VALUES_TYPE } from '../../constants/constants';

import styles from './DashBoardCard.module.css';

export interface DashBoardCardProps {
  stockExchangeCode: string;
  companyName: string;
  stocksMovement: STOCK_MARKET_MOVEMENT_VALUES_TYPE;
  movementPattern?: string;
}
export const DashBoardCard = ({
  stockExchangeCode,
  companyName,
  stocksMovement,
  movementPattern,
}: DashBoardCardProps) => {
  const getIcon = () => {
    const size = 28;
    switch (stocksMovement) {
      case STOCK_MARKET_MOVEMENT.bullish:
        return <FcBullish size={size} />;
      case STOCK_MARKET_MOVEMENT.bearish:
        return <FcBearish size={size} />;
      case STOCK_MARKET_MOVEMENT.neutral:
        return <TbArrowBarBoth size={size} />;
      default:
        return <TbArrowBarBoth size={size} />;
    }
  };
  return (
    <div className={styles.dashboardCard}>
      <div className={styles.movementIcon}>{getIcon()}</div>
      <div className={styles.title}>{stockExchangeCode}</div>
      <div>{companyName}</div>
      <div>{stocksMovement}</div>
      <div>{movementPattern}</div>
    </div>
  );
};
