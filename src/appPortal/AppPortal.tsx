import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';

export const AppPortal = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      {children}
      <Tooltip
        id="appTooltip"
        style={{
          fontSize: '16px',
        }}
      />
    </>
  );
};
