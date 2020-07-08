import React, { useReducer, useEffect } from 'react';

import todoReducer from './todoReducer';

import './style.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];

  // return [
  //   {
  //     id: new Date().getTime(),
  //     description: 'Aprender React',
  //     done: false,
  //   },
  // ];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const action = {
      type: 'DELETE_TODO',
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id,
    });
  };

  const addTodo = (newTodo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp: {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-4">
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
