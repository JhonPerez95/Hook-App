import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group">
      {todos.map((item, i) => (
        <TodoListItem
          key={item.id}
          index={i}
          item={item}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoList;
