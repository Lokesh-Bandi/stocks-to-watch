import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { ErrorFallBack } from '../components/errorFallback/ErrorFallBack';
import ErrorBoundary from '../Error/ErrorBoundary';
import { AppStore } from '../store/AppStore';

export interface AppRootProps {
  children: ReactNode;
}
export const AppRoot = ({ children }: AppRootProps): ReactElement => {
  return (
    <ErrorBoundary fallback={<ErrorFallBack />}>
      <Provider store={AppStore}>{children}</Provider>
    </ErrorBoundary>
  );
};
