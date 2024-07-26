import menuIcon from '../../../assets/icons/menu.svg';
import { useAppDispatch } from '../../store/AppStore';
import { generalActions } from '../../store/slices/general';

import styles from './Menu.module.css';

export const MenuConnected = () => {
  const dispatch = useAppDispatch();
  const handleMenuClick = () => {
    dispatch(generalActions.toggleMenu());
  };
  return (
    <div className={styles.burgerIcon} onClick={handleMenuClick}>
      <img src={menuIcon} alt="menu" />;
    </div>
  );
};
