import { Item } from 'base/types';
import { useState, useEffect } from 'react';

export const useStateWithLocalStorage = (localStorageKey: string) => {
  const [value, setValue] = useState<Item[]>(
    JSON.parse(localStorage.getItem(localStorageKey) || '[]'),
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue] as const;
};
