import React from 'react';
import PropTypes from 'prop-types';

import useForm from '../../hook/useForm';

const TodoForm = ({ addTodo }) => {
  const [formState, handleInputChange, resetInput] = useForm({
    description: '',
  });

  const handleSunmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    addTodo(newTodo);
    resetInput();
  };

  const { description } = formState;
  return (
    <>
      <h3>Add ToDo:</h3>
      <hr />
      <form onSubmit={handleSunmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Comprar ..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary mt-2 btn-block"
          type="submit"
        >
          Save ToDo
        </button>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
