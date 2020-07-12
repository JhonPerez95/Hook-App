import React from 'react';
import { shallow } from 'enzyme';

import TodoList from '../../../components/useReducer/TodoList';
import { demoTodos } from './demoTodos';

describe('Pruebas al componente <TodoList/>', () => {
  const handleToggle = jest.fn();
  const handleDelete = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe renderizar la misma cantidad de ToDos', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
      expect.any(Function)
    );
  });
});
