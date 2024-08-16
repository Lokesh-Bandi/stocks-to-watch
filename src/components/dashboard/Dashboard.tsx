import { ChangeEvent, useState } from 'react';

import { STOCK_MARKET_MOVEMENT } from '../../constants/constants';
import { NIFTY_500 } from '../../constants/stocks_constants';
import { DashBoardCard } from '../dashboardCard/DashBoardCard';
import { Spinner } from '../spinner/Spinner';

import styles from './Dashboard.module.css';

interface DashBoardProps {
  isLoading: boolean;
}
export const DashBoard = ({ isLoading }: DashBoardProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecommendations, setFilteredRecommendations] = useState(NIFTY_500);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setSearchTerm(value);
    if (value) {
      const filtered = NIFTY_500.filter((item) => String(item).toLowerCase().includes(value.toLowerCase()));
      setFilteredRecommendations(filtered);
    } else {
      setFilteredRecommendations(NIFTY_500);
    }
  };

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.dashboardContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a stock..."
      />
      {filteredRecommendations.map((eachStock, ind) => {
        return (
          <DashBoardCard
            key={ind}
            stockExchangeCode={eachStock}
            companyName="Yes Bank pvt. Limited"
            stocksMovement={STOCK_MARKET_MOVEMENT.bearish}
          />
        );
      })}
    </div>
  );
};
