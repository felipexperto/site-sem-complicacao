import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(() => typeof window !== 'undefined' ? window.innerWidth : null);
  const [height, setHeight] = useState(() => typeof window !== 'undefined' ? window.innerHeight : null);

  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  return {
    width,
    height,
  };
};

export default useWindowSize;
