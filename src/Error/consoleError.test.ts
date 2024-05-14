import { consoleError } from './consoleError';
import { ErrorTypes } from './types';

describe('console error', () => {
  it('Printing console errors correctly', () => {
    const errorCode = '404';
    const errorType = ErrorTypes.sessionStorage;
    const errorMessage = 'Page not found';
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    consoleError(errorType, errorCode, errorMessage);

    expect(console.log).toHaveBeenCalledWith(
      `${errorType} ERROR: ${errorCode} - ${errorMessage}`
    );

    consoleSpy.mockRestore();
  });

  it('Printing console errors with undefined error code', () => {
    const errorCode = undefined;
    const errorType = ErrorTypes.sessionStorage;
    const errorMessage = 'Page not found';
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    consoleError(errorType, errorCode, errorMessage);

    expect(console.log).toHaveBeenCalledWith(
      `${errorType} ERROR: ${errorMessage}`
    );

    consoleSpy.mockRestore();
  });
});
