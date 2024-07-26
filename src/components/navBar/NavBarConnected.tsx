import { useIsSmallerThanWide } from '../../styles/media';

import { NavBar } from './NavBar';

export const NavBarConnected = () => {
  const isMobile = useIsSmallerThanWide();
  if (!isMobile) return null;
  return <NavBar />;
};
