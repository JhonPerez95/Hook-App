import React, { useRef } from 'react';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      <h1>Focus Screen: </h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="You Name"
      />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
