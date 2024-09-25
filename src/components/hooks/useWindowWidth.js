import { useState, useEffect, useCallback } from 'react';

export default function useWindowWidth() {

  const hasWindow = typeof window !== 'undefined';

  const getWindowWidth = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    return {
      width
    };
  }, [hasWindow])

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowWidth(getWindowWidth());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow, getWindowWidth]);

  return windowWidth;
}