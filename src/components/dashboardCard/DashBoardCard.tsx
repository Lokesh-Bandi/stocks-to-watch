import { FcBullish, FcBearish } from 'react-icons/fc';
import { TbArrowBarBoth } from 'react-icons/tb';

import { STOCK_MARKET_MOVEMENT, STOCK_MARKET_MOVEMENT_VALUES_TYPE } from '../../constants/constants';
import { useModifiers } from '../hooks/useModifiers';

import styles from './DashBoardCard.module.css';

export interface DashBoardCardProps {
  stockExchangeCode: string;
  companyName: string;
  lastTradedPrice: number;
  stocksMovement: STOCK_MARKET_MOVEMENT_VALUES_TYPE;
  patternsFollowed: string[] | [];
}
export const DashBoardCard = ({
  stockExchangeCode,
  companyName,
  lastTradedPrice,
  stocksMovement,
  patternsFollowed,
}: DashBoardCardProps) => {
  const mods = useModifiers(styles, 'dashboardCard', {
    bullish: stocksMovement === STOCK_MARKET_MOVEMENT.bullish,
    bearish: stocksMovement === STOCK_MARKET_MOVEMENT.bearish,
  });

  const mods1 = useModifiers(
    styles,
    'stockMovementText',
    {
      bullish: stocksMovement === STOCK_MARKET_MOVEMENT.bullish,
      bearish: stocksMovement === STOCK_MARKET_MOVEMENT.bearish,
    },
    {
      isWithBaseClass: true,
    }
  );

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
    <div className={`${styles.dashboardCard} ${mods}`}>
      <div className={styles.movementIcon}>{getIcon()}</div>
      <div className={`${styles.title} ${mods1}`}>{stockExchangeCode}</div>
      <div>{companyName}</div>
      <div>
        <b>Last Traded Price: ₹ </b>
        {lastTradedPrice}
      </div>
      <div>
        <b>Momentum Status:</b> <span className={mods1}>{stocksMovement}</span>
      </div>
      {patternsFollowed.length > 0 && (
        <div className={styles.patternsSection}>
          {patternsFollowed.map((eachPattern, ind) => {
            return <div key={ind + eachPattern}>{eachPattern}</div>;
          })}
        </div>
      )}
    </div>
  );
};
