import { useState, useCallback } from 'react';

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, functionWhichUsesData) => {
    setError(null);
    try {
      const response = await fetch(config.url);
      const data = await response.json();

      functionWhichUsesData(data);
    } catch (err) {
      setError(err);
      console.error(err.message);
    }
  }, []);

  return {
    error,
    sendRequest,
  };
};

export default useHttp;
