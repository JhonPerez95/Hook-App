import React, { useState } from 'react';

import usecounter from '../../hook/useCounter';
import Small from './Small';

const Memorize = () => {
  const { counter, increment } = usecounter();

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Counter: {<Small value={counter} />}</h1>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
