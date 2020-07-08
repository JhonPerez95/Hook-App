import React, { useReducer } from 'react';

import todoReducer from './todoReducer';
import useForm from '../../hook/useForm';

import './style.css';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const [formState, handleInputChange, resetInput] = useForm({
    description: '',
  });
  const { description } = formState;

  const handleSunmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    const action = {
      type: 'ADD_TODO',
      payload: newTodo,
    };

    dispatch(action);
    resetInput();
  };

  return (
    <div>
      <h1>TodoApp: {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((item, i) => (
              <li
                key={item.id}
                className="list-group-item list-group-item-action"
              >
                <p className="text-center">
                  {i + 1}. {item.description}
                </p>
                <button className="btn btn-danger">Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4">
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
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
