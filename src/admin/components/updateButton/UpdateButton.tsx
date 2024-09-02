import styles from './UpdateButton.module.css';

interface UpdateButtonProps {
  onClick: (...args: unknown[]) => void;
  title?: string;
}
export const UpdateButton = ({ onClick, title }: UpdateButtonProps) => {
  const buttonText = title ?? 'Update';
  return (
    <div className={styles.updateButton} onClick={onClick}>
      {buttonText}
    </div>
  );
};
