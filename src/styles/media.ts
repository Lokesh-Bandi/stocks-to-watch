import { useMedia } from '../components/hooks/useMedia';

const widthBreakpoints = {
  wide: 1024,
};

export const useIsSmallerThanWide = (): boolean => {
  return useMedia(`(max-width: ${widthBreakpoints.wide}px)`);
};
