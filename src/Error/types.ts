import { ReactNode } from 'react';

export enum ErrorTypes {
  axios = 'AXIOS',
  fetch = 'FETCH',
  sessionStorage = 'SESSION STORAGE',
  typescriptError = 'TYPESCRIPT CODE ERROR',
}
export interface ErrorBoundaryProps {
  fallback: ReactNode;
  children?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
