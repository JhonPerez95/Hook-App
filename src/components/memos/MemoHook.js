import React, { useState, useMemo } from 'react';

import usecounter from '../../hook/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

const MemoHook = () => {
  const { counter, increment } = usecounter(5000);
  const [show, setShow] = useState(true);

  const memoProccess = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>
        Counter: <small> {counter}</small>
      </h1>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <p>{memoProccess}</p>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
