import React, { memo } from 'react';

const ShowIncrement = ({ increment }) => {
  console.log('me volvi a generar :(');
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increment +1
    </button>
  );
};

export default memo(ShowIncrement);
