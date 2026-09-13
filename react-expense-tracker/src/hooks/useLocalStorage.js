import { useEffect, useState } from 'react';

// Persist a piece of state to localStorage so data survives page reloads.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore write failures (e.g. storage full or unavailable).
    }
  }, [key, value]);

  return [value, setValue];
}
