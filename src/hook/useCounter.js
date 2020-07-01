import { useState } from 'react';

const useCounter = (initialState = 1) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const resertState = () => {
    setCounter(initialState);
  };

  return {
    increment,
    decrement,
    resertState,
    counter,
  };
};

export default useCounter;
