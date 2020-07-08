import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ item, index, handleToggle, handleDelete }) => {
  return (
    <li key={item.id} className="list-group-item list-group-item-action">
      <p
        className={`${item.done && 'complete'}`}
        onClick={() => handleToggle(item.id)}
      >
        {index + 1}. {item.description}
      </p>
      <button
        className="btn btn-danger "
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
