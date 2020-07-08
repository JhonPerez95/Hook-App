import React from 'react';
import useCounter from '../../hook/useCounter';

const CounterCustomHook = () => {
  const { state, increment, decrement, resertState } = useCounter();

  return (
    <>
      <h1> Counter with Hook: {state}</h1>
      <hr />

      <button className="btn btn-primary " onClick={() => increment(2)}>
        + 1
      </button>
      <button className="btn btn-warning " onClick={resertState}>
        Resert
      </button>
      <button className="btn btn-danger" onClick={() => decrement(2)}>
        - 1
      </button>
    </>
  );
};

export default CounterCustomHook;
