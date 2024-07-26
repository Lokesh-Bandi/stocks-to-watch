import { useEffect, useState } from 'react';

/**
 * A custom hook to detect changes in the window object's media query.
 * @param {string} query - Media query string.
 * @returns {boolean} - Current match status of the media query.
 */
export const useMedia = (query: string): boolean => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaQueryChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange, {
      passive: true,
    });

    return (): void => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [query]);

  return matches;
};
