import { useAppDispatch, useAppSelector } from '../../store/AppStore';
import { generalActions } from '../../store/slices/general';
import { MenuIcon } from '../svgs/MenuIcon';

export const MenuConnected = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(({ general }) => general.isMenuOpen);
  const handleMenuClick = () => {
    dispatch(generalActions.toggleMenu());
  };
  return (
    <div onClick={handleMenuClick}>
      <MenuIcon size={30} active={isMenuOpen} />
    </div>
  );
};
