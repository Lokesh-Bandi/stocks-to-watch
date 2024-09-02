import { ApexOptions } from 'apexcharts';
import { useCallback, useState } from 'react';
import ApexCharts from 'react-apexcharts';

import { UpdateButton } from '../../admin/components/updateButton/UpdateButton';
import { NIFTY_500 } from '../../constants/stocks_constants';
import { fetchSingleChartStockDataAction } from '../../store/apiActions/getActions/fetchSingleChartStockDataAction';
import { useAppDispatch } from '../../store/AppStore';
import { useCoreData } from '../../store/slices/coreData';
import { SearchBox } from '../searchBox/SearchBox';
import { Spinner } from '../spinner/Spinner';

import styles from './common.module.css';

export const ChartsConnected = () => {
  const [selectedStockCode, setSelectedStockCode] = useState<null | string>('RVNL');
  const isChartStockDataLoading = useCoreData.isChartStockDataLoading();
  const singleChartStockData = useCoreData.getSingleChartStockData();
  const dispatch = useAppDispatch();

  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 550,
      zoom: {
        enabled: true,
      },
    },
    title: {
      text: `${selectedStockCode} Candlestick Chart (Last 6 months)`,
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        format: 'MMM yyyy',
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00bfae',
          downward: '#ff4560',
        },
      },
    },
  };

  const series = [
    {
      name: 'Candlestick',
      data: singleChartStockData ?? [],
    },
  ];

  const handleListItemClick = (stockExchangeCode: string) => {
    setSelectedStockCode(stockExchangeCode);
  };
  const handleFetchClick = useCallback(() => {
    if (!selectedStockCode) {
      return;
    }
    dispatch(fetchSingleChartStockDataAction(selectedStockCode));
  }, [selectedStockCode, dispatch]);
  return (
    <div className={styles.appContentBody}>
      <div className={styles.selectionSection}>
        <SearchBox recommondationList={NIFTY_500} onClick={handleListItemClick} />
        <UpdateButton title="Fetch Chart Data" onClick={handleFetchClick} />
      </div>
      {isChartStockDataLoading && <Spinner />}
      {!isChartStockDataLoading && singleChartStockData && (
        <ApexCharts options={options} series={series} type="candlestick" height={550} width={'100%'} />
      )}
    </div>
  );
};
