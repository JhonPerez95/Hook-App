import { useState } from 'react';

const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = (value = 1) => {
    setState(state + value);
  };
  const decrement = (value = 1) => {
    setState(state - value);
  };

  const resertState = () => {
    setState(initialState);
  };

  return {
    increment,
    decrement,
    resertState,
    state,
  };
};

export default useCounter;
