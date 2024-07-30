import { ChangeEvent, useState } from 'react';

import styles from './SearchBox.module.css';

export const SearchBox = ({
  recommondationList,
  onClick,
}: {
  recommondationList: unknown[];
  onClick: (a: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecommendations, setFilteredRecommendations] = useState<
    unknown[] | []
  >([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setSearchTerm(value);

    // Filter recommendations based on the search term
    if (value) {
      const filtered = recommondationList.filter((item) =>
        String(item).toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRecommendations(filtered);
    } else {
      setFilteredRecommendations([]);
    }
  };

  const handleRecommendationClick = (recommendation: string): void => {
    setSearchTerm(recommendation);
    setFilteredRecommendations([]);
    onClick(recommendation);
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', position: 'relative' }}>
      <input
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {filteredRecommendations.length > 0 && (
        <ul className={styles.listSection}>
          {filteredRecommendations.map((item, index) => (
            <li
              className={styles.listItem}
              key={index}
              onClick={() => handleRecommendationClick(item as string)}
            >
              {item as string}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
