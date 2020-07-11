import React from 'react';
import { useFetch } from '../../hook/useFetch';
import useCounter from '../../hook/useCounter';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(2);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data } = useFetch(url);
  const { author, quote } = !!data && data[0];

  //
  return (
    <div>
      <h1> Custom Hooks </h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading ...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button type="button" className="btn btn-success" onClick={increment}>
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
