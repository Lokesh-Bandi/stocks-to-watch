import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppInitializer } from '../appInitializer/AppInitializer';
import { ErrorFallBack } from '../components/errorFallback/ErrorFallBack';
import ErrorBoundary from '../Error/ErrorBoundary';
import { AppStore } from '../store/AppStore';

export interface AppRootProps {
  children: ReactNode;
}
export const AppRoot = ({ children }: AppRootProps): ReactElement => {
  return (
    <ErrorBoundary fallback={<ErrorFallBack />}>
      <Provider store={AppStore}>
        <AppInitializer />
        {children}
      </Provider>
    </ErrorBoundary>
  );
};
