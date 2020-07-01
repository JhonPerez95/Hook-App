import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({ ...state, loading: true });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setstate({
          data,
          loading: false,
          error: null,
        });
      });
  }, [url]);

  return state;
};
