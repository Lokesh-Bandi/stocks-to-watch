import { ChangeEvent, useState } from 'react';

import { NIFTY_500 } from '../../constants/stocks_constants';
import { CoreDataType } from '../../store/slices/coreData';
import { TechIndType } from '../../store/slices/technicalIndicators';
import { DashBoardCard } from '../dashboardCard/DashBoardCard';
import { Spinner } from '../spinner/Spinner';

import styles from './Dashboard.module.css';

interface DashBoardProps {
  momentumStocks: TechIndType['momentumStocks'];
  coreData: CoreDataType['stocks'];
  isLoading: boolean;
}
export const DashBoard = ({ momentumStocks, coreData, isLoading }: DashBoardProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecommendations, setFilteredRecommendations] = useState(NIFTY_500.sort());

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setSearchTerm(value);
    if (value) {
      const filtered = NIFTY_500.filter((item) => String(item).toLowerCase().includes(value.toLowerCase()));
      setFilteredRecommendations(filtered);
    } else {
      setFilteredRecommendations(NIFTY_500.sort());
    }
  };

  if (isLoading || !momentumStocks || !coreData) return <Spinner />;
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
            companyName={coreData[eachStock].companyName}
            lastTradedPrice={coreData[eachStock].lastTradedPrice}
            stocksMovement={momentumStocks[eachStock]}
          />
        );
      })}
    </div>
  );
};
