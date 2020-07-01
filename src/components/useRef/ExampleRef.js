import React, { useState } from 'react';
import MultipleCustomHooks from '../useEffect/MultipleCustomHooks';

const ExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1> Real Example UseRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show / hide
      </button>
    </>
  );
};

export default ExampleRef;
