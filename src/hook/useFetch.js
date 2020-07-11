import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        } else {
          console.log('setState no se llamo');
        }
      })
      .catch((err) => {
        setState({
          data: null,
          loading: true,
          error: 'No se pudo cargar la info',
        });
      });
  }, [url]);

  return state;
};
