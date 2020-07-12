import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/useReducer/TodoListItem';
import { demoTodos } from './demoTodos';

describe('Test al component <TodoListItem/>', () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      item={demoTodos[0]}
      index={1}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('Debe mostrarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe llamar la funcion handleDelete  ', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalled();
  });

  test('Debe llamar la funcion handleToggle  ', () => {
    wrapper.find('p').simulate('click');
    expect(handleDelete).toHaveBeenCalled();
  });

  test('Debe mostrar el texto correctamente  ', () => {
    const descText = wrapper.find('p').text().trim();

    expect(descText).toBe(`2. ${demoTodos[0].description}`);
  });

  test('Debe tener la class Complete si done es true ', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoListItem
        item={todo}
        index={1}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
