import { CSSProperties, ReactNode } from 'react';

import infoIcon from '../../../assets/icons/info.svg';

import styles from './OutcomeSummaryTable.module.css';

interface OutcomeSummaryTableProps {
  title: string;
  headers?: string[];
  data?: unknown[][];
  colWidths?: string[];
}
export const OutcomeSummaryTable = ({
  title,
  headers,
  data,
  colWidths = ['10%', '60%', '20%', '10%'],
}: OutcomeSummaryTableProps) => {
  return (
    <div className={styles.tableRoot}>
      <div className={styles.tableTitle}>{title}</div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          {headers?.map((eachItem, ind) => {
            return (
              <div
                key={ind}
                className={styles.tableHeaderItem}
                style={
                  {
                    '--colWidth': colWidths[ind],
                  } as CSSProperties
                }
              >
                {eachItem}
              </div>
            );
          })}
        </div>
        <div className={styles.separationLine}></div>
        <div className={styles.tableBody}>
          {data?.map((eachStockData, indP) => {
            return (
              <div key={indP} className={styles.tableBodyRow}>
                <div className={styles.tableBodyContent}>
                  {eachStockData.slice(0, -1).map((eachItem, ind) => {
                    return (
                      <div
                        key={ind}
                        className={styles.tableBodyItem}
                        style={
                          {
                            '--colWidth': colWidths[ind],
                          } as CSSProperties
                        }
                      >
                        {eachItem as ReactNode}
                      </div>
                    );
                  })}
                  <div
                    data-tooltip-id="appTooltip"
                    data-tooltip-content={eachStockData.at(-1) as string}
                    data-tooltip-variant="info"
                  >
                    <img src={infoIcon} alt="info" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
