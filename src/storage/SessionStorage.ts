import { consoleError } from '../Error/consoleError';
import { ErrorTypes } from '../Error/types';

class SessionStorageRoot implements Storage {
  private static instance: SessionStorageRoot;
  public length: number;
  public static getInstance() {
    if (!this.instance) {
      this.instance = new SessionStorageRoot();
    }
    return this.instance;
  }

  public setItem(key: string, payload: string): void {
    try {
      window.sessionStorage.setItem(key, payload);
    } catch (error) {
      if (error instanceof Error) {
        consoleError(ErrorTypes.sessionStorage, error.name, error.message);
      }
      throw error;
    }
  }

  public getItem(key: string): string | null {
    try {
      return window.sessionStorage.getItem(key) ?? null;
    } catch (error) {
      if (error instanceof Error) {
        consoleError(ErrorTypes.sessionStorage, error.name, error.message);
      }
      throw error;
    }
  }

  public removeItem(key: string): void {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      if (error instanceof Error) {
        consoleError(ErrorTypes.sessionStorage, error.name, error.message);
      }
      throw error;
    }
  }

  public clear(): void {
    try {
      window.sessionStorage.clear();
    } catch (error) {
      if (error instanceof Error) {
        consoleError(ErrorTypes.sessionStorage, error.name, error.message);
      }
      throw error;
    }
  }
  public key(index: number): string | null {
    return '' + index;
  }
}

export const SessionStorage = new SessionStorageRoot();
