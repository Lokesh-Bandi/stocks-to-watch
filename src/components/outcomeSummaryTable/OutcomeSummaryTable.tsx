import { CSSProperties } from 'react';

import infoIcon from '../../../assets/icons/info.svg';

import styles from './OutcomeSummaryTable.module.css';

interface OutcomeSummaryTableProps {
  title: string;
  headers?: string[];
  data?: string[];
  colWidths?: string[];
}
export const OutcomeSummaryTable = ({
  title,
  colWidths = ['10%', '60%', '20%', '10%'],
}: OutcomeSummaryTableProps) => {
  return (
    <div className={styles.tableRoot}>
      <div className={styles.tableTitle}>{title}</div>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          {['No.', 'Stock Exchange Code', 'RSI'].map((eachItem, ind) => {
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
          {Array(40)
            .fill(0)
            .map((each, indP) => {
              return (
                <div key={indP} className={styles.tableBodyRow}>
                  <div className={styles.tableBodyContent}>
                    {[indP, 'YESBANK', '60.84'].map((eachItem, ind) => {
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
                          {eachItem}
                        </div>
                      );
                    })}
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Hello to you too!"
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
