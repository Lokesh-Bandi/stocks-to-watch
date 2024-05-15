import { useMemo } from 'react';

export const useModifiers = (
  styles: Record<string, string>,
  baseClassName: string,
  modifiers: Record<string, boolean | null | undefined>,
  options?: {
    isWithBaseClass?: boolean;
    additionalModifiers?: string[];
  }
): string => {
  return useMemo(() => {
    let finalCSS = options?.isWithBaseClass ? styles[baseClassName] : '';

    finalCSS = Object.keys(modifiers).reduce((acc, modifier) => {
      if (!modifiers[modifier]) return acc;
      const className = styles[`${baseClassName}_${modifier}`];
      if (!className) return acc;
      return `${acc} ${className}`;
    }, finalCSS);

    if (options?.additionalModifiers) {
      finalCSS = options?.additionalModifiers.reduce((acc, modifier) => {
        const className = styles[`${baseClassName}_${modifier}`];
        if (!className) return acc;
        return `${acc} ${className}`;
      }, finalCSS);
    }
    return finalCSS;
  }, [styles, baseClassName, modifiers, options]);
};
