import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoApp from '../../../components/useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodos } from './demoTodos';

describe('Pruebas al component <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe Agregar un ToDo', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('TodoForm').prop('addTodo')(demoTodos[0]);
      wrapper.find('TodoForm').prop('addTodo')(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 2');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Debe Eliminar un ToDo', () => {
    wrapper.find('TodoForm').prop('addTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

    expect(wrapper.find('h1').text().trim()).toBe('TodoApp: 0');
  });
});
