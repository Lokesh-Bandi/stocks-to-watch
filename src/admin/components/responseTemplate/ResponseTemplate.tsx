import styles from './ResponseTemplate.module.css';

interface ResponseTemplateProps {
  title: string;
  status: string;
  hasError: boolean;
  ack?: unknown;
}
export const ResponseTemplate = ({
  title,
  status,
  hasError = false,
  ack = '',
}: ResponseTemplateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.status}>
        <div>{`Status : `}</div>
        <div className={styles.statusContent}>{status}</div>
      </div>
      {hasError && (
        <div className={styles.ack}>
          <div>{`Acknowledge : `}</div>
          <div className={styles.ackContent}>{JSON.stringify(ack)}</div>
        </div>
      )}
    </div>
  );
};
