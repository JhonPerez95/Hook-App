import React, { useReducer } from 'react';
import todoReducer from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false,
  },
];

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
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
        <div className="col-5">
          <h3>Add ToDo:</h3>
          <hr />
          <form action="">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Comprar ..."
              autoComplete="off"
            />
            <button className="btn btn-outline-primary mt-1 btn-block">
              Save ToDo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
